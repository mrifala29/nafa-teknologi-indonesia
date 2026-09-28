/**
 * ==========================================================================
 * NAFA TEKNOLOGI - CONTACT & CONSULTATION MODULE
 * Handles form validation, WhatsApp direct dispatch, and consultation requests
 * ==========================================================================
 */

const ContactModule = (function () {
  let formEl;
  let feedbackEl;

  function init() {
    formEl = document.getElementById('consultation-form');
    feedbackEl = document.getElementById('form-feedback');

    if (!formEl) return;

    formEl.addEventListener('submit', handleSubmit);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const phoneInput = document.getElementById('contact-phone');
    const serviceInput = document.getElementById('contact-service');
    const messageInput = document.getElementById('contact-message');
    const agreementInput = document.getElementById('terms-agreement');

    // Basic Validation
    if (!nameInput || !nameInput.value.trim()) {
      showFeedback('Harap masukkan nama lengkap Anda.', 'error');
      nameInput.focus();
      return;
    }

    if (!emailInput || !emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
      showFeedback('Harap masukkan alamat email bisnis yang valid.', 'error');
      emailInput.focus();
      return;
    }

    if (!phoneInput || !phoneInput.value.trim()) {
      showFeedback('Harap masukkan nomor telepon atau WhatsApp Anda.', 'error');
      phoneInput.focus();
      return;
    }

    if (agreementInput && !agreementInput.checked) {
      showFeedback('Harap setujui penggunaan data untuk sesi konsultasi awal.', 'error');
      agreementInput.focus();
      return;
    }

    const payload = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      phone: phoneInput.value.trim(),
      service: serviceInput ? serviceInput.value : 'Umum',
      message: messageInput ? messageInput.value.trim() : ''
    };

    // Show loading state
    const submitBtn = formEl.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span>Memproses...</span>
        <span class="material-symbols-outlined" style="animation: spin 1s linear infinite;">sync</span>
      `;
    }

    // Simulate reliable dispatch
    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }

      showFeedback(`Terima kasih, Bapak/Ibu ${payload.name}! Tim rekayasa kami akan segera menghubungi Anda dalam 24 jam kerja.`, 'success');
      formEl.reset();

      // Offer quick WhatsApp opening
      showWhatsAppRedirectOption(payload);
    }, 600);
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showFeedback(message, type) {
    if (!feedbackEl) return;
    feedbackEl.textContent = message;
    feedbackEl.style.display = 'block';
    feedbackEl.style.padding = '0.75rem 1rem';
    feedbackEl.style.borderRadius = '8px';
    feedbackEl.style.marginBottom = '1.25rem';
    feedbackEl.style.fontSize = '0.875rem';
    feedbackEl.style.fontWeight = '500';

    if (type === 'error') {
      feedbackEl.style.backgroundColor = '#fef2f2';
      feedbackEl.style.color = '#b91c1c';
      feedbackEl.style.border = '1px solid #fecaca';
    } else {
      feedbackEl.style.backgroundColor = '#ecfdf5';
      feedbackEl.style.color = '#047857';
      feedbackEl.style.border = '1px solid #a7f3d0';
    }

    feedbackEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function showWhatsAppRedirectOption(payload) {
    const waNumber = window.NafaData ? window.NafaData.company.whatsappRaw : '6282245678910';
    const text = encodeURIComponent(
      `Halo Tim Nafa Teknologi,\n\nSaya ingin konsultasi mengenai sistem.\nNama: ${payload.name}\nEmail: ${payload.email}\nNo HP: ${payload.phone}\nLayanan: ${payload.service}\nCatatan: ${payload.message}`
    );
    const waUrl = `https://wa.me/${waNumber}?text=${text}`;

    if (feedbackEl) {
      const waPrompt = document.createElement('div');
      waPrompt.style.marginTop = '0.75rem';
      waPrompt.innerHTML = `
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="display:inline-flex; align-items:center; gap:0.5rem; text-decoration:none;">
          <span>Lanjutkan Obrolan Langsung ke WhatsApp</span>
          <span class="material-symbols-outlined" style="font-size:16px;">chat</span>
        </a>
      `;
      feedbackEl.appendChild(waPrompt);
    }
  }

  function selectPackage(packageId) {
    const serviceInput = document.getElementById('contact-service');
    if (serviceInput) {
      serviceInput.value = packageId;
    }
    const messageInput = document.getElementById('contact-message');
    if (messageInput && !messageInput.value) {
      const titles = {
        'web-profile': 'Web Profile & Portal Korporasi',
        'sistem-informasi-ai': 'Sistem Informasi AI & ERP Bisnis',
        'data-analytics': 'Data Analytics & Interactive Dashboard',
        'cloud-server': 'Cloud Server & Devops Infrastructure',
        'chatbot-ai': 'Chatbot AI & Asisten Virtual Cerdas'
      };
      messageInput.value = `Saya tertarik dengan paket solusi ${titles[packageId] || packageId}. Mohon jadwal konsultasi lebih lanjut.`;
    }

    const contactSection = document.getElementById('kontak');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return {
    init: init,
    selectPackage: selectPackage
  };
})();

window.ContactModule = ContactModule;
