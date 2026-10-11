// Build script: Assembles HTML partials and sections into index.html
const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, 'src');
const OUTPUT_FILE = path.join(__dirname, 'index.html');

function build() {
  const startTime = Date.now();

  const head = fs.readFileSync(path.join(SRC_DIR, 'partials', 'head.html'), 'utf8').trimEnd();
  const header = fs.readFileSync(path.join(SRC_DIR, 'partials', 'header.html'), 'utf8').trimEnd();

  const sectionsDir = path.join(SRC_DIR, 'sections');
  const sectionFiles = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.html')).sort();

  const sectionsContent = sectionFiles
    .map(file => fs.readFileSync(path.join(sectionsDir, file), 'utf8').trimEnd())
    .join('\n\n');

  const footer = fs.readFileSync(path.join(SRC_DIR, 'partials', 'footer.html'), 'utf8').trimEnd();
  const scripts = fs.readFileSync(path.join(SRC_DIR, 'partials', 'scripts.html'), 'utf8').trimEnd();

  const fullHtml = [
    head,
    '',
    header,
    '',
    '  <!-- Main Landmark -->',
    '  <main>',
    '',
    sectionsContent,
    '',
    '  </main>',
    '',
    footer,
    '',
    scripts,
    ''
  ].join('\n');

  fs.writeFileSync(OUTPUT_FILE, fullHtml, 'utf8');
  const elapsed = Date.now() - startTime;
  console.log(`[build] index.html built successfully (${elapsed}ms)`);
}

if (process.argv.includes('--watch')) {
  build();
  console.log('[watch] Watching src/ for changes...');
  let debounceTimeout = null;
  fs.watch(SRC_DIR, { recursive: true }, (eventType, filename) => {
    if (filename && filename.endsWith('.html')) {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        console.log(`[watch] Change detected in ${filename}, rebuilding...`);
        build();
      }, 50);
    }
  });
} else {
  build();
}
