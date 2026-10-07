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

    const categoryOption = serviceInput && serviceInput.selectedIndex >= 0 ? serviceInput.options[serviceInput.selectedIndex] : null;
    const categoryName = categoryOption ? categoryOption.text.trim() : (serviceInput ? serviceInput.value : 'Lainnya');
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput && messageInput.value.trim() ? messageInput.value.trim() : '-';

    const waText = [
      'Halo Nafa Teknologi, saya ingin berkonsultasi mengenai kebutuhan sistem.',
      '',
      `*Nama Lengkap:* ${name}`,
      `*Email Bisnis:* ${email}`,
      `*No. Telepon / WhatsApp:* ${phone}`,
      `*Kategori:* ${categoryName}`,
      `*Detail Kebutuhan:*`,
      `${message}`
    ].join('\n');

    const waNumber = (window.NafaData && window.NafaData.company && window.NafaData.company.whatsappRaw)
      ? window.NafaData.company.whatsappRaw
      : '6289630096698';

    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;

    // Open WhatsApp
    window.open(waUrl, '_blank');

    showFeedback(`Mengarahkan Anda ke WhatsApp... Jika jendela obrolan tidak terbuka otomatis, silakan klik tautan di bawah ini:`, 'success');

    if (feedbackEl) {
      const waPrompt = document.createElement('div');
      waPrompt.style.marginTop = '0.75rem';
      waPrompt.innerHTML = `
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="display:inline-flex; align-items:center; gap:0.5rem; text-decoration:none;">
          <span>Buka Chat WhatsApp Sekarang</span>
          <span class="material-symbols-outlined" style="font-size:16px;">chat</span>
        </a>
      `;
      feedbackEl.appendChild(waPrompt);
    }
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
        'chatbot-ai': 'Chatbot AI & Asisten Virtual Cerdas',
        'lainnya': 'Lainnya'
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
