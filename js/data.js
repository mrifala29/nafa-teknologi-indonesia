/**
 * ==========================================================================
 * NAFA TEKNOLOGI - CENTRAL DATA REGISTRY
 * All service details, pricing tiers, innovation cards, and company info
 * Edit here to easily update website content without touching HTML/CSS!
 * ==========================================================================
 */

const NafaData = {
  // Company Information
  company: {
    name: 'PT Nafa Teknologi Indonesia',
    tagline: 'Enterprise Software Engineering & Rekayasa Sistem Digital',
    bio: 'Merancang dan membangun arsitektur perangkat lunak presisi, andal, dan solutif untuk akselerasi operasional bisnis.',
    address: 'Jalan Sedati Agung 1 No 44 RT 05 RW 02, Kecamatan Sedati, Kabupaten Sidoarjo',
    city: 'Sidoarjo, Jawa Timur, Indonesia',
    coordinates: '7.4726° S, 112.6675° E • Sidoarjo',
    email: 'hello@nafateknologi.co.id',
    whatsapp: '+62 822-4567-8910',
    whatsappRaw: '6282245678910',
    hours: 'Senin – Jumat, 09:00 – 17:00 WIB',
    responseSLA: 'Dalam 24 Jam Kerja'
  },

  // Core Services Registry (Displayed in Interactive Showcase)
  services: {
    'web-profile': {
      title: 'Web Profile & Portal',
      desc: 'Jasa pembuatan website profil perusahaan, landing page promosi, dan portal bisnis di Sidoarjo & Surabaya dengan arsitektur SEO-ready, performa cepat, dan desain responsif.',
      specs: ['Next.js & SSR', 'Optimasi Kecepatan', 'Integrasi CMS', 'Desain Responsif'],
      timeline: 'Estimasi: 1 - 2 Minggu',
      ctaText: 'Konsultasikan Web Profile',
      url: 'https://company.nafateknologi.co.id',
      status: 'ACTIVE 200 OK',
      mockup: `
        <div style="display:flex; flex-direction:column; gap:0.75rem;">
          <div class="mockup-inner-card">
            <div class="mockup-header-row">
              <div style="display:flex; align-items:center; gap:0.625rem; min-width:0;">
                <div style="width:34px; height:34px; border-radius:8px; background:#ecfdf5; border:1px solid #a7f3d0; display:flex; align-items:center; justify-content:center; color:#047857; flex-shrink:0;">
                  <span class="material-symbols-outlined" style="font-size:18px;">speed</span>
                </div>
                <div style="min-width:0;">
                  <h4 class="mockup-header-title">Core Web Vitals Preview</h4>
                  <p class="mockup-header-sub">Target Kecepatan &amp; Skor Performa</p>
                </div>
              </div>
              <span class="badge badge-emerald" style="font-size:10px; padding:0.2rem 0.5rem; flex-shrink:0;">Production Ready</span>
            </div>
            <div class="mockup-stats-grid-3">
              <div class="mockup-stat-box">
                <div class="mockup-stat-val">99</div>
                <div class="mockup-stat-lbl">Performance</div>
              </div>
              <div class="mockup-stat-box">
                <div class="mockup-stat-val">0.6s</div>
                <div class="mockup-stat-lbl">LCP Speed</div>
              </div>
              <div class="mockup-stat-box">
                <div class="mockup-stat-val" style="color:#0f172a;">100</div>
                <div class="mockup-stat-lbl">SEO Score</div>
              </div>
            </div>
          </div>
          <div class="mockup-footer-card">
            <div class="mockup-row-between">
              <span>Standar Rekayasa</span>
              <span style="color:#047857; font-weight:600;">Next.js + TailwindCSS</span>
            </div>
            <div style="width:100%; background:#f1f5f9; height:6px; border-radius:9999px; overflow:hidden;">
              <div style="background:#047857; height:100%; width:94%; border-radius:9999px;"></div>
            </div>
          </div>
        </div>
      `
    },

    'sistem-informasi-ai': {
      title: 'Sistem Informasi & ERP',
      desc: 'Rancang bangun sistem informasi kustom, aplikasi web operasional bisnis, ERP, CRM, dan inventori terintegrasi untuk otomatisasi alur kerja perusahaan.',
      specs: ['Modul Kustom', 'Sinkronisasi Multi-Divisi', 'Hak Akses Berjenjang', 'API Integrasi'],
      timeline: 'Estimasi: 3 - 5 Minggu',
      ctaText: 'Rancang Sistem Informasi',
      url: 'https://erp.nafateknologi.co.id/workspace',
      status: 'SYSTEM HEALTHY 99.9%',
      mockup: `
        <div style="display:flex; flex-direction:column; gap:0.75rem;">
          <div class="mockup-inner-card">
            <div class="mockup-header-row">
              <div style="display:flex; align-items:center; gap:0.625rem; min-width:0;">
                <div style="width:34px; height:34px; border-radius:8px; background:#ecfdf5; border:1px solid #a7f3d0; display:flex; align-items:center; justify-content:center; color:#047857; flex-shrink:0;">
                  <span class="material-symbols-outlined" style="font-size:18px;">hub</span>
                </div>
                <div style="min-width:0;">
                  <h4 class="mockup-header-title">Modul Operasional &amp; Inventori</h4>
                  <p class="mockup-header-sub">Pusat Data Logistik &amp; Verifikasi SOP</p>
                </div>
              </div>
              <span class="badge badge-emerald" style="font-size:10px; padding:0.2rem 0.5rem; flex-shrink:0;">Tersinkronisasi</span>
            </div>
            <div style="display:flex; flex-direction:column; gap:0.5rem;">
              <div style="padding:0.625rem 0.75rem; background:#f8fafc; border-radius:8px; border:1px solid #f1f5f9; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.375rem;">
                <div style="display:flex; align-items:center; gap:0.5rem;">
                  <span class="material-symbols-outlined" style="color:#047857; font-size:16px;">inventory_2</span>
                  <span style="font-size:11px; font-weight:500; color:#0f172a;">Manajemen Pengadaan &amp; Stok</span>
                </div>
                <span style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#047857; font-weight:700;">Terverifikasi</span>
              </div>
              <div style="padding:0.625rem 0.75rem; background:#f8fafc; border-radius:8px; border:1px solid #f1f5f9; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.375rem;">
                <div style="display:flex; align-items:center; gap:0.5rem;">
                  <span class="material-symbols-outlined" style="color:#047857; font-size:16px;">approval</span>
                  <span style="font-size:11px; font-weight:500; color:#0f172a;">Alur Persetujuan Bertingkat</span>
                </div>
                <span style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#047857; font-weight:700;">Otomatis</span>
              </div>
            </div>
          </div>
          <div class="mockup-footer-card">
            <div class="mockup-row-between" style="margin-bottom:0;">
              <span>Integritas Basis Data</span>
              <span style="color:#047857; font-weight:700;">Enkripsi AES-256</span>
            </div>
          </div>
        </div>
      `
    },

    'data-analytics': {
      title: 'Dashboard Interaktif',
      desc: 'Pengembangan dasbor business intelligence (BI) dan visualisasi data analitik interaktif untuk pemantauan performa penjualan dan operasional secara real-time.',
      specs: ['Pemantauan Real-time', 'Visualisasi Dinamis', 'Ekspor Laporan Otomatis', 'Keamanan Akses'],
      timeline: 'Estimasi: 2 - 3 Minggu',
      ctaText: 'Bangun Dashboard Analytics',
      url: 'https://analytics.nafateknologi.co.id/insights',
      status: 'DATA INGESTED: 4.8M RECS',
      mockup: `
        <div style="display:flex; flex-direction:column; gap:0.75rem;">
          <div class="mockup-inner-card">
            <div class="mockup-header-row">
              <div style="display:flex; align-items:center; gap:0.625rem; min-width:0;">
                <div style="width:34px; height:34px; border-radius:8px; background:#ecfdf5; border:1px solid #a7f3d0; display:flex; align-items:center; justify-content:center; color:#047857; flex-shrink:0;">
                  <span class="material-symbols-outlined" style="font-size:18px;">query_stats</span>
                </div>
                <div style="min-width:0;">
                  <h4 class="mockup-header-title">Metrik KPI &amp; Pertumbuhan</h4>
                  <p class="mockup-header-sub">Agregasi Data Penjualan &amp; Konversi</p>
                </div>
              </div>
              <span class="badge badge-emerald" style="font-size:10px; padding:0.2rem 0.5rem; flex-shrink:0;">Real-Time Data</span>
            </div>
            <div class="mockup-stats-grid-2">
              <div style="padding:0.625rem 0.75rem; background:#f8fafc; border-radius:8px; border:1px solid #f1f5f9; min-width:0;">
                <div style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#64748b;">Omzet Periode</div>
                <div style="font-family:'Hanken Grotesk',sans-serif; font-size:1.1rem; font-weight:700; color:#0f172a; margin-top:2px;">Rp 842.5 M</div>
                <span style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#047857;">+24.6% YoY</span>
              </div>
              <div style="padding:0.625rem 0.75rem; background:#f8fafc; border-radius:8px; border:1px solid #f1f5f9; min-width:0;">
                <div style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#64748b;">Tingkat Retensi</div>
                <div style="font-family:'Hanken Grotesk',sans-serif; font-size:1.1rem; font-weight:700; color:#0f172a; margin-top:2px;">94.2%</div>
                <span style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#047857;">Stabil</span>
              </div>
            </div>
            <div style="display:flex; align-items:flex-end; gap:6px; height:50px; padding-top:0.375rem; border-top:1px solid #f1f5f9;">
              <div style="flex:1; background:#e2e8f0; height:40%; border-top-left-radius:3px; border-top-right-radius:3px;"></div>
              <div style="flex:1; background:#e2e8f0; height:65%; border-top-left-radius:3px; border-top-right-radius:3px;"></div>
              <div style="flex:1; background:#e2e8f0; height:50%; border-top-left-radius:3px; border-top-right-radius:3px;"></div>
              <div style="flex:1; background:#e2e8f0; height:75%; border-top-left-radius:3px; border-top-right-radius:3px;"></div>
              <div style="flex:1; background:#e2e8f0; height:60%; border-top-left-radius:3px; border-top-right-radius:3px;"></div>
              <div style="flex:1; background:#047857; height:90%; border-top-left-radius:3px; border-top-right-radius:3px;"></div>
            </div>
          </div>
        </div>
      `
    },

    'cloud-server': {
      title: 'Infrastruktur & Cloud',
      desc: 'Setup server cloud VPS (AWS, Google Cloud, DigitalOcean), konfigurasi SSL, containerization Docker, dan otomatisasi CI/CD dengan pemantauan server 24/7.',
      specs: ['Arsitektur Scalable', 'Monitoring 24/7', 'Backup Otomatis', 'Sertifikasi Keamanan'],
      timeline: 'Estimasi: 1 - 2 Minggu',
      ctaText: 'Kelola Infrastruktur Cloud',
      url: 'https://infra.nafateknologi.co.id/cluster-01',
      status: 'UPTIME 99.98% / 365 DAYS',
      mockup: `
        <div style="display:flex; flex-direction:column; gap:0.75rem;">
          <div class="mockup-inner-card">
            <div class="mockup-header-row">
              <div style="display:flex; align-items:center; gap:0.625rem; min-width:0;">
                <div style="width:34px; height:34px; border-radius:8px; background:#ecfdf5; border:1px solid #a7f3d0; display:flex; align-items:center; justify-content:center; color:#047857; flex-shrink:0;">
                  <span class="material-symbols-outlined" style="font-size:18px;">dns</span>
                </div>
                <div style="min-width:0;">
                  <h4 class="mockup-header-title">Status Sistem &amp; Cluster</h4>
                  <p class="mockup-header-sub">Data Center Multi-Zona</p>
                </div>
              </div>
              <span class="badge badge-emerald" style="font-size:10px; padding:0.2rem 0.5rem; flex-shrink:0;">Online</span>
            </div>
            <div class="mockup-stats-grid-3">
              <div class="mockup-stat-box">
                <div class="mockup-stat-lbl">Uptime</div>
                <div class="mockup-stat-val">99.98%</div>
              </div>
              <div class="mockup-stat-box">
                <div class="mockup-stat-lbl">Beban</div>
                <div class="mockup-stat-val" style="color:#0f172a;">24.8%</div>
              </div>
              <div class="mockup-stat-box">
                <div class="mockup-stat-lbl">Enkripsi</div>
                <div class="mockup-stat-val">TLS 1.3</div>
              </div>
            </div>
          </div>
          <div class="mockup-footer-card">
            <div class="mockup-row-between" style="margin-bottom:0;">
              <div style="display:flex; align-items:center; gap:0.5rem;">
                <span style="width:8px; height:8px; border-radius:50%; background:#047857; flex-shrink:0;"></span>
                <span style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#0f172a; font-weight:500;">Backup Harian Terjadwal</span>
              </div>
              <span style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#047857; font-weight:600;">SLA OK</span>
            </div>
          </div>
        </div>
      `
    },

    'chatbot-ai': {
      title: 'Asisten Interaksi Cerdas',
      desc: 'Otomatisasi layanan tanya jawab pelanggan via WhatsApp dan web dengan pemahaman konteks yang natural dan akurat.',
      specs: ['Integrasi WhatsApp Official', 'Respons Cepat', 'Eskalasi ke Agen Manual', 'Basis Data Produk'],
      timeline: 'Estimasi: 1 - 3 Minggu',
      ctaText: 'Integrasikan Chatbot Cerdas',
      url: 'https://assistant.nafateknologi.co.id/chat',
      status: 'AGENT ONLINE (24/7)',
      mockup: `
        <div style="display:flex; flex-direction:column; gap:0.75rem;">
          <div class="mockup-inner-card">
            <div class="mockup-header-row">
              <div style="display:flex; align-items:center; gap:0.625rem; min-width:0;">
                <div style="width:34px; height:34px; border-radius:8px; background:#ecfdf5; border:1px solid #a7f3d0; display:flex; align-items:center; justify-content:center; color:#047857; flex-shrink:0;">
                  <span class="material-symbols-outlined" style="font-size:18px;">chat</span>
                </div>
                <div style="min-width:0;">
                  <h4 class="mockup-header-title">Simulasi Konsultasi AI</h4>
                  <p class="mockup-header-sub">Kanal Web &amp; WhatsApp Resmi</p>
                </div>
              </div>
              <span class="badge badge-emerald" style="font-size:10px; padding:0.2rem 0.5rem; flex-shrink:0;">Aktif 24/7</span>
            </div>
            <div style="display:flex; flex-direction:column; gap:0.625rem;">
              <div style="display:flex; align-items:flex-start; gap:0.5rem; justify-content:flex-end;">
                <div style="background:#f1f5f9; color:#0f172a; padding:0.625rem 0.75rem; border-radius:14px; border-top-right-radius:0; max-width:85%; font-size:11px; line-height:1.4;">
                  Halo tim Nafa, apakah sistem gudang bisa sinkron ke POS toko?
                </div>
                <div style="width:24px; height:24px; border-radius:50%; background:#cbd5e1; display:flex; align-items:center; justify-content:center; font-size:9px; font-weight:700; color:#334155; flex-shrink:0;">CS</div>
              </div>
              <div style="display:flex; align-items:flex-start; gap:0.5rem;">
                <div style="width:24px; height:24px; border-radius:50%; background:#d1fae5; display:flex; align-items:center; justify-content:center; color:#047857; flex-shrink:0;">
                  <span class="material-symbols-outlined" style="font-size:14px;">smart_toy</span>
                </div>
                <div style="background:#ecfdf5; border:1px solid #a7f3d0; color:#0f172a; padding:0.625rem 0.75rem; border-radius:14px; border-top-left-radius:0; max-width:85%; font-size:11px; line-height:1.4;">
                  Bisa, sistem mendukung integrasi API POS dengan sinkronisasi inventori real-time.
                  <span style="display:block; margin-top:4px; font-family:'JetBrains Mono',monospace; font-size:9px; color:#047857; font-weight:600;">Respons sistem: &lt; 1 detik</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    }
  },

  // Pricing Tiers (Displayed in Slider)
  pricing: [
    {
      id: 'web-profile',
      title: 'Web Profile',
      desc: 'Pengembangan website korporasi performa tinggi dengan arsitektur modern dan standar ramah mesin pencari.',
      price: 'Rp2.500.000',
      specs: [
        'Next.js SSR & UI responsif lintas perangkat',
        'Audit performa Core Web Vitals (skor 95+)',
        'Panel kelola konten (Headless CMS)',
        'Optimasi metadata SEO on-page'
      ]
    },
    {
      id: 'sistem-informasi-ai',
      title: 'Sistem Informasi AI',
      desc: 'Digitalisasi tata kelola operasional, sistem ERP terpadu, dan otomasi alur otorisasi internal perusahaan.',
      price: 'Rp9.500.000',
      specs: [
        'Modul kustom sesuai standar prosedur operasional',
        'Manajemen hak akses & log aktivitas sistem',
        'Integrasi REST API & sinkronisasi data antar-cabang',
        'Garansi pemeliharaan & penyerahan repositori kode'
      ]
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      desc: 'Dasbor analitik interaktif untuk pemantauan indikator kinerja utama, transaksi keuangan, dan efisiensi rantai pasok.',
      price: 'Rp4.500.000',
      specs: [
        'Konektor basis data SQL & lembar data bisnis',
        'Visualisasi grafik interaktif secara waktu nyata',
        'Penjadwalan ekspor laporan otomatis ke PDF/Excel',
        'Proteksi enkripsi data dan batas otorisasi pengguna'
      ]
    },
    {
      id: 'cloud-server',
      title: 'Cloud & Server',
      desc: 'Konfigurasi server komputasi awan, penguatan keamanan jaringan, otomatisasi alur penerapan kode, dan pencadangan data berkala.',
      price: 'Rp1.500.000',
      specs: [
        'Pengaturan kontainer Linux/Docker & pipeline CI/CD',
        'Pencadangan otomatis harian & protokol pemulihan',
        'Konfigurasi sertifikat SSL TLS 1.3 & firewall',
        'Pemantauan ketersediaan sistem dan penggunaan sumber daya'
      ]
    },
    {
      id: 'chatbot-ai',
      title: 'Chatbot AI',
      desc: 'Integrasi asisten virtual berbasis kecerdasan buatan untuk kanal resmi WhatsApp Business dan situs web korporasi.',
      price: 'Rp2.500.000',
      specs: [
        'Konektivitas resmi WhatsApp Cloud API Meta',
        'Pelatihan basis pengetahuan produk & SOP internal',
        'Protokol pengalihan otomatis ke staf layanan pelanggan',
        'Laporan analitik volume percakapan & kepuasan'
      ]
    }
  ]
};

// Export to global scope
window.NafaData = NafaData;
