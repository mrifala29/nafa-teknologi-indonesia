# PT Nafa Teknologi Indonesia - Website Redesign & Modular Architecture

Website resmi **PT Nafa Teknologi Indonesia** (*Enterprise Software Engineering & Rekayasa Sistem Digital*), di-redesign dan dipecah secara modular dari hasil rancangan Stitch agar rapi, berkinerja tinggi, dan mudah di-troubleshoot.

---

## 📁 Struktur File & Direktori

Proyek ini telah dipisahkan menjadi komponen-komponen terisolasi sesuai tanggung jawabnya (*separation of concerns*):

```
nafateknoid/
├── index.html              # Beranda: Hero Canvas, Filosofi Nafa'a, Solusi Rekayasa Digital + Rencana Inovasi, CTA
├── layanan/
│   └── index.html          # 5 tab layanan interaktif + browser mockup
├── portofolio/
│   └── index.html          # 9 proyek portofolio + filter kategori
├── biaya/
│   └── index.html          # Rincian Biaya Solusi (slider 5 paket)
├── karir/
│   └── index.html          # Peluang Karir & Magang + Tim Nafa Teknologi
├── kontak/
│   └── index.html          # Formulir konsultasi + WhatsApp + peta
├── faq/
│   └── index.html          # Pertanyaan Umum (schema FAQPage)
├── tentang-kami/
│   └── index.html          # STUB pengalih ke /karir/ (URL lama, jangan dihapus)
├── 404.html                # Halaman error kustom (butuh konfigurasi nginx, lihat di bawah)
│
├── sitemap.xml             # 7 URL halaman (di-submit ke Google Search Console)
├── robots.txt              # Allow all + baris Sitemap
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
    ├── navigation.js       # Sticky header, drawer menu ponsel, smooth scroll, & scroll-spy anchor
    ├── services.js         # Pengalih tab layanan interaktif & pembaruan dinamis browser mockup
    ├── canvas.js           # Interaktivitas hero canvas (tautan node ke halaman layanan & animasi masuk)
    ├── portfolio.js        # Filter kategori & penggeser portofolio (drag/touch)
    ├── slider.js           # Penggeser kartu harga (slider prev/next & touch gesture)
    ├── team.js             # Penggeser kartu tim (slider prev/next & touch gesture)
    ├── faq.js              # Akordeon FAQ (satu item terbuka)
    ├── contact.js          # Validasi formulir konsultasi & generator pesan instan WhatsApp
    └── app.js              # Entry point aplikasi (bootstrapping seluruh modul saat DOM siap)
```

**Peta URL vs script yang dimuat** (`app.js` selalu ikut sebagai entry point):

| Halaman | URL | Modul JS |
|---|---|---|
| Beranda | `/` | `navigation`, `canvas` |
| Layanan | `/layanan/` | `navigation`, `services` |
| Portofolio | `/portofolio/` | `navigation`, `portfolio` |
| Biaya | `/biaya/` | `navigation`, `slider` |
| Karir | `/karir/` | `navigation`, `team` |
| Kontak | `/kontak/` | `navigation`, `data`, `contact` |
| FAQ | `/faq/` | `navigation`, `faq` |
| 404 | `/404.html` | `navigation` |

---

## 🧭 Konvensi Halaman Multi-Page

Halaman yang berada di dalam subfolder (`layanan/`, `portofolio/`, `biaya/`, `karir/`, `kontak/`, `faq/`) memakai **path relatif**:

- CSS: `../css/variables.css`, `../css/base.css`, `../css/components.css`, `../css/animations.css`, `../css/sections.css`
- JS: `../js/data.js`, `../js/navigation.js`, dan modul lain yang relevan saja
- Aset: `../assets/logo.webp`, `../assets/portfolio/...`

Setiap halaman hanya memuat script yang dipakai (lihat tabel peta URL di atas) sehingga tidak ada modul yang gagal karena elemennya tidak ada. Setiap halaman juga wajib punya `<title>`, `meta description`, `link rel="canonical"`, Open Graph/Twitter Card unik, serta tepat satu `<h1>`.

### Deep link antar halaman

Dua query param dipakai untuk meneruskan konteks antar halaman:

- `/layanan/?layanan=<key>` — membuka tab layanan tertentu (key: `web-profile`, `sistem-informasi-ai`, `data-analytics`, `cloud-server`, `chatbot-ai`). Dipakai oleh node/chip hero di beranda dan kartu overview layanan.
- `/kontak/?paket=<key>` — memilih paket di dropdown formulir dan mengisi pesan otomatis. Dipakai oleh tombol konsultasi di `/biaya/` dan tombol demo proyek non-live di `/portofolio/`.

### Anchor lama dari era single-page

Fragmen (`#...`) **tidak pernah dikirim ke server**, jadi anchor lama tidak bisa di-301 lewat nginx/Cloudflare. Karena itu beranda punya skrip inline kecil di `<head>` yang memetakan anchor lama ke halaman barunya:

| Anchor lama | Tujuan baru |
|---|---|
| `#tim` | `/karir/#tim` |
| `#karir` | `/karir/` |
| `#biaya` | `/biaya/` |
| `#faq` | `/faq/` |
| `#kontak` | `/kontak/` |
| `#portofolio` | `/portofolio/` |

Skrip sengaja **inline & blocking** (bukan file terpisah + `defer`) supaya berjalan sebelum halaman ter-render sehingga tidak ada kedipan beranda sebelum pindah. Query string tetap terbawa, dan `#canvas` / `#filosofi` / `#layanan` / `#inovasi` sengaja **tidak** dialihkan karena section-nya memang ada di beranda.

### Halaman 404 kustom & 301 URL lama — butuh konfigurasi nginx

Menaruh `404.html` saja **tidak cukup**: server harus disuruh memakainya. Tambahkan di blok `server` nginx VPS:

```nginx
error_page 404 /404.html;
location = /404.html {
    internal;
}

# URL lama /tentang-kami/ -> /karir/ (301 sungguhan, melengkapi stub HTML)
rewrite ^/tentang-kami/?$ /karir/ permanent;
```

Catatan penting:

- **Jangan** menulis `error_page 404 =200 /404.html;`. Tanda `=200` membuat halaman error dibalas dengan status 200, dan Google akan menganggapnya halaman biasa yang bisa terindeks. Biarkan status tetap 404 — `404.html` sudah membawa `meta robots="noindex, follow"`.
- Saat nginx menyajikan `404.html`, URL di address bar **tidak berubah** (mis. tetap `/layanan/halaman-salah`). Karena itu semua path di `404.html` memakai absolut dari domain (`/css/...`, `/js/...`, `/assets/...`) — kalau memakai path relatif, file CSS/JS-nya akan gagal dimuat.
- `tentang-kami/index.html` tetap dipertahankan sebagai pengalih cadangan (JS + `<noscript>` meta refresh) agar URL lama tetap bekerja walau nginx belum diubah.
- Sebelum `rewrite`, pastikan Cloudflare tidak mem-cache `/tentang-kami/`; setelah menerapkan, purge cache URL tersebut.
- Setelah mengubah nginx: `nginx -t && systemctl reload nginx`.

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

Cukup jalankan server lokal dari root repo (tautan antar halaman memakai path absolut dari domain, mis. `/layanan/`):

```bash
# Menggunakan Python built-in server:
python3 -m http.server 8080

# Atau menggunakan npx serve / Live Server di IDE
npx -y serve .
```
Buka `http://localhost:8080` di peramban Anda.
