# PT Nafa Teknologi Indonesia - Website Redesign & Modular Architecture

Website resmi **PT Nafa Teknologi Indonesia** (*Enterprise Software Engineering & Rekayasa Sistem Digital*), di-redesign dan dipecah secara modular dari hasil rancangan Stitch agar rapi, berkinerja tinggi, dan mudah di-troubleshoot.

---

## 📁 Struktur File & Direktori

Proyek ini telah dipisahkan menjadi komponen-komponen terisolasi sesuai tanggung jawabnya (*separation of concerns*):

```
nafateknoid/
├── index.html              # Struktur HTML semantik utama yang bersih & terorganisir
├── DESIGN.md               # Dokumentasi Design System & token rancangan
├── code.html               # File monolitik asli Stitch (disimpan sebagai arsip/backup)
├── screen.png              # Cuplikan render visual desain Stitch
│
├── css/                    # Modular Stylesheets (Vanilla CSS + Design Tokens)
│   ├── variables.css       # Token warna (Deep Emerald), tipografi, spacing, radii, & shadows
│   ├── base.css            # CSS reset, tipografi standar, container, & utility classes
│   ├── components.css      # Reusable UI (tombol, badge, kartu, input form, browser mockup, toolbar)
│   ├── animations.css      # Keyframe animasi float node, radar ping map, & transisi
│   └── sections.css        # Tata letak spesifik per seksi (header, canvas, filosofi, layanan, biaya, kontak, footer)
│
└── js/                     # Modular JavaScript (Separation of Logic & Data)
    ├── data.js             # SUMBER DATA UTAMA: teks layanan, mockup, harga paket, kontak perusahaan
    ├── navigation.js       # Sticky header, drawer menu ponsel, smooth scroll, & active scroll-spy
    ├── services.js         # Pengalih tab layanan interaktif & pembaruan dinamis browser mockup
    ├── canvas.js           # Interaktivitas hero canvas (zoom, toolbar, klik node langsung lompat ke layanan)
    ├── slider.js           # Penggeser kartu harga (slider prev/next & touch gesture)
    ├── contact.js          # Validasi formulir konsultasi & generator pesan instan WhatsApp
    └── app.js              # Entry point aplikasi (bootstrapping seluruh modul saat DOM siap)
```

---

## 🛠️ Panduan Troubleshoot & Kustomisasi Cepat

### 1. Ingin Mengubah Harga / Detail Layanan?
Buka [`js/data.js`](file:///Users/alfarizy/Desktop/Project/nafateknoid/js/data.js):
- **Ubah Paket Harga**: Edit array `pricing` di dalam `NafaData.pricing`.
- **Ubah Teks / Mockup Layanan**: Edit objek `services` di dalam `NafaData.services`.
- **Ubah Nomor WhatsApp / Email**: Edit objek `company` di dalam `NafaData.company`.
> **Keuntungan**: Anda tidak perlu menyentuh file HTML sama sekali untuk mengubah harga atau teks layanan!

### 2. Ingin Mengubah Warna / Font / Tampilan?
- **Warna Utama / Emerald Tone**: Buka [`css/variables.css`](file:///Users/alfarizy/Desktop/Project/nafateknoid/css/variables.css), sesuaikan variabel `--color-primary` (default: `#047857`) atau `--color-primary-hover`.
- **Komponen Tombol / Form**: Buka [`css/components.css`](file:///Users/alfarizy/Desktop/Project/nafateknoid/css/components.css).
- **Layout Halaman**: Buka [`css/sections.css`](file:///Users/alfarizy/Desktop/Project/nafateknoid/css/sections.css).

### 3. Ingin Mengatur Logika Formulir Kontak?
Buka [`js/contact.js`](file:///Users/alfarizy/Desktop/Project/nafateknoid/js/contact.js):
- Validasi input, endpoint API form, atau pesan kustom WhatsApp diatur di dalam modul ini.

---

## 🚀 Cara Menjalankan Website

Cukup buka file [`index.html`](file:///Users/alfarizy/Desktop/Project/nafateknoid/index.html) langsung di peramban (browser) favorit Anda, atau jalankan menggunakan server lokal:

```bash
# Menggunakan Python built-in server:
python3 -m http.server 8080

# Atau menggunakan npx serve / Live Server di IDE
npx -y serve .
```
Buka `http://localhost:8080` di peramban Anda.
