/* Hero Canvas Controller */
const CanvasModule = (function () {
  let timers = [];

  function clearAllTimers() {
    timers.forEach(t => clearTimeout(t));
    timers = [];
  }

  function resetState() {
    clearAllTimers();

    const introPanel = document.getElementById('canvas-intro-panel');
    const circuits = document.getElementById('canvas-circuits');
    const nodes = document.querySelectorAll('.canvas-node');
    const chips = document.querySelectorAll('.mobile-node-chip');

    if (introPanel) {
      introPanel.classList.remove('slide-out');
      introPanel.style.display = 'flex';
    }
    if (circuits) circuits.classList.remove('is-visible');

    // Reflow intro word and logo animation
    const words = document.querySelectorAll('.intro-word, .intro-logo');
    words.forEach(el => {
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = '';
    });

    nodes.forEach(node => {
      node.classList.remove('node-entering-left', 'node-entering-right', 'is-floating');
    });

    chips.forEach(chip => {
      chip.classList.remove('chip-visible');
    });
  }

  function alignCircuits() {
    const container = document.getElementById('hero-canvas-container');
    const svg = document.getElementById('canvas-circuits');
    if (!container || !svg) return;

    const containerWidth = container.clientWidth;
    if (containerWidth < 960) return;

    const sampleNode = document.querySelector('.canvas-node');
    if (!sampleNode) return;

    const nodeWidth = sampleNode.offsetWidth;
    if (!nodeWidth) return;

    // Node is at left: 3%, dot center is at card border
    const leftDotX = ((containerWidth * 0.03 + nodeWidth) / containerWidth) * 100;
    const rightDotX = 100 - leftDotX;
    const trunkOffset = 3.0;
    const leftTrunkX = leftDotX + trunkOffset;
    const rightTrunkX = rightDotX - trunkOffset;

    const paths = svg.querySelectorAll('path');
    if (paths.length >= 10) {
      // 4 left stubs
      paths[0].setAttribute('d', `M ${leftDotX.toFixed(2)} 16.5 L ${leftTrunkX.toFixed(2)} 16.5`);
      paths[1].setAttribute('d', `M ${leftDotX.toFixed(2)} 38.0 L ${leftTrunkX.toFixed(2)} 38.0`);
      paths[2].setAttribute('d', `M ${leftDotX.toFixed(2)} 59.5 L ${leftTrunkX.toFixed(2)} 59.5`);
      paths[3].setAttribute('d', `M ${leftDotX.toFixed(2)} 81.0 L ${leftTrunkX.toFixed(2)} 81.0`);
      // 1 left vertical trunk
      paths[4].setAttribute('d', `M ${leftTrunkX.toFixed(2)} 16.5 L ${leftTrunkX.toFixed(2)} 81.0`);

      // 4 right stubs
      paths[5].setAttribute('d', `M ${rightDotX.toFixed(2)} 16.5 L ${rightTrunkX.toFixed(2)} 16.5`);
      paths[6].setAttribute('d', `M ${rightDotX.toFixed(2)} 38.0 L ${rightTrunkX.toFixed(2)} 38.0`);
      paths[7].setAttribute('d', `M ${rightDotX.toFixed(2)} 59.5 L ${rightTrunkX.toFixed(2)} 59.5`);
      paths[8].setAttribute('d', `M ${rightDotX.toFixed(2)} 81.0 L ${rightTrunkX.toFixed(2)} 81.0`);
      // 1 right vertical trunk
      paths[9].setAttribute('d', `M ${rightTrunkX.toFixed(2)} 16.5 L ${rightTrunkX.toFixed(2)} 81.0`);
    }
  }

  function staggerNodes() {
    alignCircuits();
    const circuits = document.getElementById('canvas-circuits');
    if (circuits) circuits.classList.add('is-visible');

    const nodes = Array.from(document.querySelectorAll('.canvas-node'));
    // Stagger 8 nodes one by one
    nodes.forEach((node, idx) => {
      const t = setTimeout(() => {
        const isLeft = node.classList.contains('anchor-right');
        const enterClass = isLeft ? 'node-entering-left' : 'node-entering-right';
        node.classList.add(enterClass);

        node.addEventListener('animationend', function onEnd() {
          node.removeEventListener('animationend', onEnd);
          node.classList.remove(enterClass);
          node.classList.add('is-floating');
        }, { once: true });
      }, idx * 135);
      timers.push(t);
    });

    // Mobile chips stagger
    const chips = Array.from(document.querySelectorAll('.mobile-node-chip'));
    chips.forEach((chip, idx) => {
      const t = setTimeout(() => {
        chip.classList.add('chip-visible');
      }, idx * 90);
      timers.push(t);
    });
  }

  function playIntroSequence() {
    resetState();

    // Slide transition: intro panel slides sideways out
    const slideTimer = setTimeout(() => {
      const introPanel = document.getElementById('canvas-intro-panel');
      if (introPanel) {
        introPanel.classList.add('slide-out');
        setTimeout(() => {
          introPanel.style.display = 'none';
        }, 850);
      }

      // Trigger 8 shapes entrance as slide transition clears
      const nodesTimer = setTimeout(() => {
        staggerNodes();
      }, 350);
      timers.push(nodesTimer);

    }, 1700);

    timers.push(slideTimer);
  }

  function skipToMain() {
    clearAllTimers();
    const introPanel = document.getElementById('canvas-intro-panel');
    if (introPanel) {
      introPanel.classList.add('slide-out');
      introPanel.style.display = 'none';
    }
    staggerNodes();
  }

  function init() {
    // Node click handlers
    const nodes = document.querySelectorAll('.canvas-node, .mobile-node-chip');
    nodes.forEach(node => {
      node.addEventListener('click', function () {
        const serviceKey = this.getAttribute('data-target-service');
        if (serviceKey && window.ServicesModule) {
          window.ServicesModule.switchService(serviceKey);

          const servicesSection = document.getElementById('layanan');
          if (servicesSection) {
            const headerHeight = 80;
            const targetPosition = servicesSection.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Auto-align SVG circuit lines to dots
    alignCircuits();
    window.addEventListener('resize', alignCircuits);

    // Auto-start intro or skip if deep linking
    if (window.location.hash && window.location.hash !== '#canvas') {
      skipToMain();
    } else {
      playIntroSequence();
    }
  }

  return {
    init: init,
    replay: playIntroSequence,
    skip: skipToMain
  };
})();

window.CanvasModule = CanvasModule;
