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
      desc: 'Pengembangan website perusahaan dengan standar performa tinggi, navigasi intuitif, dan struktur kode yang mudah dipelihara.',
      specs: ['Next.js & SSR', 'Optimasi Kecepatan', 'Integrasi CMS', 'Desain Responsif'],
      timeline: 'Estimasi: 1 - 2 Minggu',
      ctaText: 'Konsultasikan Web Profile',
      url: 'https://company.nafateknologi.co.id',
      status: 'ACTIVE 200 OK',
      mockup: `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <div style="background:#ffffff; border-radius:12px; border:1px solid #e2e8f0; padding:1.25rem; box-shadow:0 1px 2px rgba(0,0,0,0.04);">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1rem;">
              <div style="display:flex; align-items:center; gap:0.75rem;">
                <div style="width:36px; height:36px; border-radius:8px; background:#ecfdf5; border:1px solid #a7f3d0; display:flex; align-items:center; justify-content:center; color:#047857;">
                  <span class="material-symbols-outlined" style="font-size:20px;">speed</span>
                </div>
                <div>
                  <h4 style="font-family:'Hanken Grotesk',sans-serif; font-size:14px; font-weight:600; color:#0f172a; margin:0;">Core Web Vitals Preview</h4>
                  <p style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#64748b; margin:2px 0 0 0;">Target Kecepatan & Skor Performa</p>
                </div>
              </div>
              <span class="badge badge-emerald">Production Ready</span>
            </div>
            <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:0.75rem; padding-top:0.5rem;">
              <div style="padding:0.75rem; background:#f8fafc; border-radius:8px; border:1px solid #f1f5f9; text-align:center;">
                <div style="font-family:'Hanken Grotesk',sans-serif; font-size:1.25rem; font-weight:700; color:#047857;">99</div>
                <div style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#64748b; text-transform:uppercase;">Performance</div>
              </div>
              <div style="padding:0.75rem; background:#f8fafc; border-radius:8px; border:1px solid #f1f5f9; text-align:center;">
                <div style="font-family:'Hanken Grotesk',sans-serif; font-size:1.25rem; font-weight:700; color:#047857;">0.6s</div>
                <div style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#64748b; text-transform:uppercase;">LCP Speed</div>
              </div>
              <div style="padding:0.75rem; background:#f8fafc; border-radius:8px; border:1px solid #f1f5f9; text-align:center;">
                <div style="font-family:'Hanken Grotesk',sans-serif; font-size:1.25rem; font-weight:700; color:#0f172a;">100</div>
                <div style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#64748b; text-transform:uppercase;">SEO Score</div>
              </div>
            </div>
          </div>
          <div style="padding:1rem; border-radius:12px; background:#ffffff; border:1px solid #e2e8f0; box-shadow:0 1px 2px rgba(0,0,0,0.04);">
            <div style="display:flex; align-items:center; justify-content:space-between; font-size:12px; font-family:'JetBrains Mono',monospace; color:#64748b; margin-bottom:0.5rem;">
              <span>Standar Rekayasa</span>
              <span style="color:#047857; font-weight:600;">Next.js App Router + TailwindCSS</span>
            </div>
            <div style="width:100%; background:#f1f5f9; height:8px; border-radius:9999px; overflow:hidden;">
              <div style="background:#047857; height:100%; width:94%; border-radius:9999px;"></div>
            </div>
          </div>
        </div>
      `
    },

    'sistem-informasi-ai': {
      title: 'Sistem Informasi & ERP',
      desc: 'Digitalisasi alur kerja operasional, pencatatan data terpusat, dan integrasi modul bisnis spesifik sesuai proses internal Anda.',
      specs: ['Modul Kustom', 'Sinkronisasi Multi-Divisi', 'Hak Akses Berjenjang', 'API Integrasi'],
      timeline: 'Estimasi: 3 - 5 Minggu',
      ctaText: 'Rancang Sistem Informasi',
      url: 'https://erp.nafateknologi.co.id/workspace',
      status: 'SYSTEM HEALTHY 99.9%',
      mockup: `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <div style="background:#ffffff; border-radius:12px; border:1px solid #e2e8f0; padding:1.25rem; box-shadow:0 1px 2px rgba(0,0,0,0.04);">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1rem;">
              <div style="display:flex; align-items:center; gap:0.75rem;">
                <div style="width:36px; height:36px; border-radius:8px; background:#ecfdf5; border:1px solid #a7f3d0; display:flex; align-items:center; justify-content:center; color:#047857;">
                  <span class="material-symbols-outlined" style="font-size:20px;">hub</span>
                </div>
                <div>
                  <h4 style="font-family:'Hanken Grotesk',sans-serif; font-size:14px; font-weight:600; color:#0f172a; margin:0;">Modul Operasional & Inventori</h4>
                  <p style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#64748b; margin:2px 0 0 0;">Pusat Data Logistik & Verifikasi SOP</p>
                </div>
              </div>
              <span class="badge badge-emerald">Tersinkronisasi</span>
            </div>
            <div style="display:flex; flex-direction:column; gap:0.625rem;">
              <div style="padding:0.75rem; background:#f8fafc; border-radius:8px; border:1px solid #f1f5f9; display:flex; align-items:center; justify-content:space-between;">
                <div style="display:flex; align-items:center; gap:0.625rem;">
                  <span class="material-symbols-outlined" style="color:#047857; font-size:18px;">inventory_2</span>
                  <span style="font-size:12px; font-weight:500; color:#0f172a;">Manajemen Pengadaan & Stok</span>
                </div>
                <span style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#047857; font-weight:700;">Terverifikasi</span>
              </div>
              <div style="padding:0.75rem; background:#f8fafc; border-radius:8px; border:1px solid #f1f5f9; display:flex; align-items:center; justify-content:space-between;">
                <div style="display:flex; align-items:center; gap:0.625rem;">
                  <span class="material-symbols-outlined" style="color:#047857; font-size:18px;">approval</span>
                  <span style="font-size:12px; font-weight:500; color:#0f172a;">Alur Persetujuan Bertingkat</span>
                </div>
                <span style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#047857; font-weight:700;">Otomatis</span>
              </div>
            </div>
          </div>
          <div style="padding:1rem; border-radius:12px; background:#ffffff; border:1px solid #e2e8f0; box-shadow:0 1px 2px rgba(0,0,0,0.04); display:flex; align-items:center; justify-content:space-between;">
            <span style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#64748b;">Integritas Basis Data</span>
            <span style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#047857; font-weight:700;">Enkripsi AES-256 & Audit Trail</span>
          </div>
        </div>
      `
    },

    'data-analytics': {
      title: 'Dashboard Interaktif',
      desc: 'Visualisasi performa metrik bisnis secara langsung untuk pengambilan keputusan yang lebih cepat dan terukur.',
      specs: ['Pemantauan Real-time', 'Visualisasi Dinamis', 'Ekspor Laporan Otomatis', 'Keamanan Akses'],
      timeline: 'Estimasi: 2 - 3 Minggu',
      ctaText: 'Bangun Dashboard Analytics',
      url: 'https://analytics.nafateknologi.co.id/insights',
      status: 'DATA INGESTED: 4.8M RECS',
      mockup: `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <div style="background:#ffffff; border-radius:12px; border:1px solid #e2e8f0; padding:1.25rem; box-shadow:0 1px 2px rgba(0,0,0,0.04);">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1rem;">
              <div style="display:flex; align-items:center; gap:0.75rem;">
                <div style="width:36px; height:36px; border-radius:8px; background:#ecfdf5; border:1px solid #a7f3d0; display:flex; align-items:center; justify-content:center; color:#047857;">
                  <span class="material-symbols-outlined" style="font-size:20px;">query_stats</span>
                </div>
                <div>
                  <h4 style="font-family:'Hanken Grotesk',sans-serif; font-size:14px; font-weight:600; color:#0f172a; margin:0;">Metrik KPI & Pertumbuhan</h4>
                  <p style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#64748b; margin:2px 0 0 0;">Agregasi Data Penjualan & Konversi</p>
                </div>
              </div>
              <span class="badge badge-emerald">Real-Time Data</span>
            </div>
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:0.75rem; margin-bottom:0.75rem;">
              <div style="padding:0.75rem; background:#f8fafc; border-radius:8px; border:1px solid #f1f5f9;">
                <div style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#64748b;">Omzet Periode</div>
                <div style="font-family:'Hanken Grotesk',sans-serif; font-size:1.1875rem; font-weight:700; color:#0f172a; margin-top:2px;">Rp 842.5 M</div>
                <span style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#047857;">+24.6% YoY</span>
              </div>
              <div style="padding:0.75rem; background:#f8fafc; border-radius:8px; border:1px solid #f1f5f9;">
                <div style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#64748b;">Tingkat Retensi</div>
                <div style="font-family:'Hanken Grotesk',sans-serif; font-size:1.1875rem; font-weight:700; color:#0f172a; margin-top:2px;">94.2%</div>
                <span style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#047857;">Stabil</span>
              </div>
            </div>
            <div style="display:flex; align-items:flex-end; gap:6px; height:60px; padding-top:0.5rem; border-top:1px solid #f1f5f9;">
              <div style="flex:1; background:#e2e8f0; height:40%; border-top-left-radius:4px; border-top-right-radius:4px;"></div>
              <div style="flex:1; background:#e2e8f0; height:65%; border-top-left-radius:4px; border-top-right-radius:4px;"></div>
              <div style="flex:1; background:#e2e8f0; height:50%; border-top-left-radius:4px; border-top-right-radius:4px;"></div>
              <div style="flex:1; background:#e2e8f0; height:75%; border-top-left-radius:4px; border-top-right-radius:4px;"></div>
              <div style="flex:1; background:#e2e8f0; height:60%; border-top-left-radius:4px; border-top-right-radius:4px;"></div>
              <div style="flex:1; background:#047857; height:90%; border-top-left-radius:4px; border-top-right-radius:4px;"></div>
            </div>
          </div>
        </div>
      `
    },

    'cloud-server': {
      title: 'Infrastruktur & Cloud',
      desc: 'Penyiapan dan pemeliharaan server dengan jaminan ketersediaan tinggi, pencadangan otomatis, dan keamanan berlapis.',
      specs: ['Arsitektur Scalable', 'Monitoring 24/7', 'Backup Otomatis', 'Sertifikasi Keamanan'],
      timeline: 'Estimasi: 1 - 2 Minggu',
      ctaText: 'Kelola Infrastruktur Cloud',
      url: 'https://infra.nafateknologi.co.id/cluster-01',
      status: 'UPTIME 99.98% / 365 DAYS',
      mockup: `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <div style="background:#ffffff; border-radius:12px; border:1px solid #e2e8f0; padding:1.25rem; box-shadow:0 1px 2px rgba(0,0,0,0.04);">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1rem;">
              <div style="display:flex; align-items:center; gap:0.75rem;">
                <div style="width:36px; height:36px; border-radius:8px; background:#ecfdf5; border:1px solid #a7f3d0; display:flex; align-items:center; justify-content:center; color:#047857;">
                  <span class="material-symbols-outlined" style="font-size:20px;">dns</span>
                </div>
                <div>
                  <h4 style="font-family:'Hanken Grotesk',sans-serif; font-size:14px; font-weight:600; color:#0f172a; margin:0;">Status Sistem & Node Cluster</h4>
                  <p style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#64748b; margin:2px 0 0 0;">Data Center Jakarta - Multi-Zona</p>
                </div>
              </div>
              <span class="badge badge-emerald">Online</span>
            </div>
            <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:0.625rem;">
              <div style="padding:0.75rem; background:#f8fafc; border-radius:8px; border:1px solid #f1f5f9; text-align:center;">
                <div style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#64748b;">Server Uptime</div>
                <div style="font-family:'Hanken Grotesk',sans-serif; font-size:1rem; font-weight:700; color:#047857; margin-top:2px;">99.98%</div>
              </div>
              <div style="padding:0.75rem; background:#f8fafc; border-radius:8px; border:1px solid #f1f5f9; text-align:center;">
                <div style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#64748b;">Beban Node</div>
                <div style="font-family:'Hanken Grotesk',sans-serif; font-size:1rem; font-weight:700; color:#0f172a; margin-top:2px;">24.8%</div>
              </div>
              <div style="padding:0.75rem; background:#f8fafc; border-radius:8px; border:1px solid #f1f5f9; text-align:center;">
                <div style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#64748b;">Enkripsi</div>
                <div style="font-family:'Hanken Grotesk',sans-serif; font-size:1rem; font-weight:700; color:#047857; margin-top:2px;">TLS 1.3</div>
              </div>
            </div>
          </div>
          <div style="padding:1rem; border-radius:12px; background:#ffffff; border:1px solid #e2e8f0; box-shadow:0 1px 2px rgba(0,0,0,0.04); display:flex; align-items:center; justify-content:space-between;">
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <span style="width:8px; height:8px; border-radius:50%; background:#047857;"></span>
              <span style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#0f172a; font-weight:500;">Backup Harian Terjadwal Aktif</span>
            </div>
            <span style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#64748b;">SLA Terpenuhi</span>
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
          <div style="background:#ffffff; border-radius:12px; border:1px solid #e2e8f0; padding:1.25rem; box-shadow:0 1px 2px rgba(0,0,0,0.04);">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1rem;">
              <div style="display:flex; align-items:center; gap:0.75rem;">
                <div style="width:36px; height:36px; border-radius:8px; background:#ecfdf5; border:1px solid #a7f3d0; display:flex; align-items:center; justify-content:center; color:#047857;">
                  <span class="material-symbols-outlined" style="font-size:20px;">chat</span>
                </div>
                <div>
                  <h4 style="font-family:'Hanken Grotesk',sans-serif; font-size:14px; font-weight:600; color:#0f172a; margin:0;">Simulasi Interaksi Konsultasi</h4>
                  <p style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#64748b; margin:2px 0 0 0;">Kanal Web & WhatsApp Bisnis Resmi</p>
                </div>
              </div>
              <span class="badge badge-emerald">Aktif 24/7</span>
            </div>
            <div style="display:flex; flex-direction:column; gap:0.75rem;">
              <div style="display:flex; align-items:flex-start; gap:0.625rem; justify-content:flex-end;">
                <div style="background:#f1f5f9; color:#0f172a; padding:0.75rem; border-radius:16px; border-top-right-radius:0; max-width:82%; font-size:12px; line-height:1.4;">
                  Halo tim Nafa, apakah modul sistem gudang bisa dihubungkan ke sistem POS toko kami?
                </div>
                <div style="width:26px; height:26px; border-radius:50%; background:#cbd5e1; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:700; color:#334155;">CS</div>
              </div>
              <div style="display:flex; align-items:flex-start; gap:0.625rem;">
                <div style="width:26px; height:26px; border-radius:50%; background:#d1fae5; display:flex; align-items:center; justify-content:center; color:#047857;">
                  <span class="material-symbols-outlined" style="font-size:14px;">smart_toy</span>
                </div>
                <div style="background:#ecfdf5; border:1px solid #a7f3d0; color:#0f172a; padding:0.75rem; border-radius:16px; border-top-left-radius:0; max-width:85%; font-size:12px; line-height:1.4;">
                  Bisa, sistem mendukung integrasi API POS dengan sinkronisasi inventori berkala.
                  <span style="display:block; margin-top:6px; font-family:'JetBrains Mono',monospace; font-size:10px; color:#047857; font-weight:600;">Respons sistem: &lt; 1 detik</span>
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
