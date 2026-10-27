# LuminaTweak Glass Edition — Master Project & Development Memory
**Studio / Developer**: PT Reka Saujana Falah (operating as Apex Vista Studio)  
**Official Portal**: https://rekasaujanafalah.com  
**Product**: LuminaTweak Glass Edition — Ultimate macOS Deep Customizer & Battery Shield  
**Live Launch Target**: https://rekasaujanafalah.com/lumina/demo.html  
**Target Repository**: `https://github.com/golongankuwayuhan/Memory-Website-Company-Profile`  
**Production Website Repo**: `https://github.com/golongankuwayuhan/reka-saujana-falah`  
**Current Date**: 28 October 2026

---

## 📌 1. EXECUTIVE SUMMARY & PURPOSE

Dokumen ini adalah **Master Development Memory** resmi dari proyek website Company Profile dan Storefront komersial **PT Reka Saujana Falah**, yang didedikasikan untuk peluncuran produk perangkat lunak macOS unggulan kami: **LuminaTweak Glass Edition**.

Dokumen ini dirancang lengkap agar Anda atau developer manapun dapat:
1. Mengambil alih proyek ini di komputer mana pun tanpa kehilangan konteks teknis atau historis.
2. Memahami seluruh keputusan arsitektur, integrasi payment merchant of record (Lemon Squeezy), strategi marketing, naskah tweet peluncuran, dan hukum/kebijakan privasi.
3. Melanjutkan deployment, update copy, modifikasi CSS/JS, dan penambahan produk digital lainnya dengan alur kerja yang sudah teruji.

---

## 🏢 2. PROFIL PERUSAHAAN & ENTITAS HUKUM

* **Nama Perusahaan Resmi**: PT Reka Saujana Falah
* **Bentuk Usaha**: Perseroan Terbatas (PT) / Software Engineering Studio
* **Domisili**: Jawa Barat, Republik Indonesia
* **Brand / Studio Komersial**: Apex Vista Studio (`@apexvistastudio` di X/Twitter)
* **Domain Utama**: `https://rekasaujanafalah.com`
* **Model Bisnis**: Pengembangan & distribusi lisensi perangkat lunak macOS berbayar komersial (perpetual one-time license) secara global.
* **Merchant of Record (MoR) Resmi**: **Lemon Squeezy** (memproses seluruh transaksi internasional, kepatuhan VAT/GST, dan proteksi PCI-DSS).

---

## 💻 3. SPESIFIKASI PRODUK: LUMINA TWEAK GLASS EDITION

LuminaTweak Glass Edition adalah utilitas sistem desktop native macOS berorientasi performa dan estetika tingkat tinggi yang dirancang untuk pengguna pro, developer, dan desainer.

### A. Fitur Unggulan (Core Pillars):
1. **2,265+ Native macOS Preferences**:
   * Menjangkau 11 layer konfigurasi sistem: Finder, Dock, Mission Control, Safari, Xcode/Dev, Hardware & Power, Window Manager, Screenshots, Lock Screen, Keyboard & Input, Animation Curves.
   * 100% SIP-Safe (System Integrity Protection Safe) — tidak membutuhkan modifikasi kernel root yang berisiko.
2. **Near-Zero Battery Shield (`~0% Sleep Drain` / `Almost 0% Sleep Loss`)**:
   * Mode tidur ultra hemat daya (`Near-Zero Deep Sleep Mode`).
   * Menonaktifkan polling Wi-Fi sleep (`TCPKeepAlive=0`), Power Nap, dan Network Wake sehingga konsumsi baterai laptop di dalam ransel semalaman hampir 0%.
3. **Instantaneous Window Snapping (0ms Delay)**:
   * Menghilangkan latensi animasi minimize, resize, dan expose secara presisi untuk efisiensi workflow maksimal.
4. **Liquid Frosted Glass UI**:
   * Antarmuka visual translucency raytraced modern dengan slider refraksi dinamis, glow intensity, dan palet obsidian-slate.
5. **Universal Binary Support**:
   * Mendukung penuh arsitektur Apple Silicon (M1, M2, M3, M4) dan Intel Core 64-bit.
   * Kompatibilitas OS: macOS 12 (Monterey), macOS 13 (Ventura), macOS 14 (Sonoma), dan macOS 15 (Sequoia).
6. **Perpetual One-Time License**:
   * Skema kepemilikan jual-putus seumur hidup (Beli sekali, miliki selamanya).
   * **Bebas Langganan Bulanan (Zero Monthly Recurring Fees)**.

---

## 🍋 4. ARSITEKTUR STOREFRONT & INTEGRASI LEMON SQUEEZY

### A. Data Produk & Varian Lemon Squeezy

* **Store Slug**: `apexvista`
* **Product Name**: `LuminaTweak Glass Edition — Ultimate macOS Customizer`
* **Product ID Lemon**: `2302715` / `2303154` / `2302946`
* **Varian & Harga Resmi**:
  1. **Plus Edition ($39.00 USD)**:
     * Limit Aktivasi: **1 Mac**
     * Target: Solo developer & single Mac user
     * Checkout Overlay URL: `https://apexvista.lemonsqueezy.com/checkout/buy/9847ba29-b065-4849-8379-aa75e5bd2c16?embed=1`
  2. **Pro Edition ($59.00 USD)** *(Paling Populer)*:
     * Limit Aktivasi: **3 Macs**
     * Target: Multi-Mac power users & creative pros
     * Checkout Overlay URL: `https://apexvista.lemonsqueezy.com/checkout/buy/44395d94-dbeb-4f8a-a3a6-71507099943b?embed=1`
  3. **Power Pack ($99.00 USD)**:
     * Limit Aktivasi: **5 Macs**
     * Target: Studio fleet, agensi, dan tim riset
     * Checkout Overlay URL: `https://apexvista.lemonsqueezy.com/checkout/buy/17c1f119-e6ca-4774-a9f5-1d646e8796be?embed=1`

### B. Mekanisme Modal Overlay (Lemon.js SDK)
Website mengimplementasikan checkout modal elegan in-browser tanpa me-redirect pengunjung keluar dari halaman simulasi:
```html
<!-- 1. Script Lemon.js dimuat secara defer di akhir file HTML -->
<script src="https://assets.lemonsqueezy.com/lemon.js" defer></script>

<!-- 2. Tombol CTA dipasangi class 'lemonsqueezy-button' dan '?embed=1' -->
<a href="https://apexvista.lemonsqueezy.com/checkout/buy/9847ba29-b065-4849-8379-aa75e5bd2c16?embed=1" 
   class="lemonsqueezy-button btn btn-primary">
  Buy License on Lemon Squeezy ($39) →
</a>

<!-- 3. Inisialisasi Event Listener SDK -->
<script>
  window.addEventListener('load', function() {
    if (window.createLemonSqueezy) {
      window.createLemonSqueezy();
    }
  });
</script>
```

---

## 🚀 5. RIWAYAT KAMPANYE PELUNCURAN (OFFICIAL LAUNCH TWEET)

Pada **28 Oktober 2026, 04:54 AM WIB**, LuminaTweak Glass Edition resmi diluncurkan melalui akun resmi X (**@apexvistastudio**):

### A. Main Tweet (Post Utama):
```text
Today, we’re proud to launch LuminaTweak Glass Edition on @LemonSqueezy! 🚀 
A native macOS utility engineered for power users who want deep hardware control 
and zero recurring subscriptions. Here is what’s unlocked 🧵 👇 
#macOS #AppleSilicon #MacBookPro #IndieDev #BuildInPublic
```
* **Media Terlampir**:
  1. `luminatweak-social-promo.jpg` / `Cover_Image_16x9.jpg` (1920x1080 Widescreen 3D Banner).
  2. `luminatweak-demo.gif` (GIF animasi 16 frame interaktif simulator).

### B. Reply Tweet (Thread Peluncuran & Link Demo):
```text
Replying to @apexvistastudio

🔹 Near Zero-Drain Battery Shield 
🔹 2,265+ native preferences across 11 macOS layers 
🔹 Universal Apple Silicon & Intel support 
🔹 Buy once, keep forever ($39 / $59 / $99) 

Try our interactive live simulator: 
🔗 rekasaujanafalah.com/lumina/demo.html 

#macOS #IndieHacker #BuildInPublic #MacApps
```
* **Media Terlampir**:
  1. `luminatweak-storefront-4x3.jpg` / `Cover_Image_4x3.jpg` (1600x1200 4:3 Cover resmi).

---

## ⚖️ 6. KEBIJAKAN HUKUM, REFUND, & KLAIM PEMASARAN

1. **Revisi Klaim Baterai ("Near-Zero" vs "Zero-Drain")**:
   * Seluruh klaim absolut seperti "0% Zero-Drain" atau "0% loss" telah diubah ke **"Near-Zero Battery Shield"** dan **"Almost 0% overnight loss"** (`~0% Sleep Drain`). Hal ini menjaga integritas teknis, menghindari klaim berlebihan yang berisiko bagi MoR, dan meningkatkan kredibilitas di mata komunitas developer.
2. **Ketiadaan Komitmen Pemeliharaan Seumur Hidup (Update Commitment Removal)**:
   * Sesuai arahan founder, komitmen tertulis berupa "guaranteed lifetime feature updates" atau "SLA pemeliharaan fitur" dihilangkan dari Terms of Service, Privacy Policy, dan Halaman Refund.
   * Transaksi adalah lisensi jual-putus perpetual untuk rilis produk yang dibeli. Pembaruan di masa depan dilakukan atas kebijakan pengembang tanpa ikatan kontrak SLA.
3. **Garansi Pengembalian Dana 30 Hari**:
   * Dilindungi jaminan pengembalian dana penuh 30 hari (*30-Day Money-Back Guarantee*) yang diproses langsung secara transparan melalui portal Lemon Squeezy MoR.

---

## 🗂️ 7. STRUKTUR DIREKTORI REPOSITORI

```
/
├── index.html                  # Landing page studio PT Reka Saujana Falah
├── demo.html                   # Simulator root (sinkron dengan /lumina/demo.html)
├── pricing.html                # Ringkasan pricing studio
├── terms.html                  # Syarat & ketentuan studio
├── privacy.html                # Kebijakan privasi studio
├── enterprise-pricing.html     # Paket lisensi volume / tim enterprise
├── PROJECT_MEMORY.md           # Master memory proyek ini
├── memory/                     # Dokumentasi detail sub-sistem
│   ├── 01_COMPANY_AND_LEGAL.md
│   ├── 02_PRODUCT_AND_TECHNICAL_SPEC.md
│   ├── 03_STOREFRONT_AND_CHECKOUT_SETUP.md
│   ├── 04_MARKETING_ASSETS_AND_LAUNCH.md
│   ├── 05_DEVELOPMENT_HISTORY_AND_CHANGELOG.md
│   └── 06_HOW_TO_RESUME_ON_ANOTHER_PC.md
├── lumina/
│   ├── index.html              # Showcase & Live simulator (URL: rekasaujanafalah.com/lumina)
│   ├── demo.html               # Showcase & Live simulator (URL: rekasaujanafalah.com/lumina/demo.html)
│   ├── lemon/                  # Kanal resmi Lemon Squeezy
│   │   ├── index.html          # Portal Lemon Squeezy
│   │   ├── demo.html           # Live demo simulator kanal Lemon
│   │   ├── pricing.html        # Halaman pricing 3 tier ($39 / $59 / $99)
│   │   ├── terms.html          # Syarat ketentuan MoR Lemon Squeezy
│   │   ├── privacy.html        # Kebijakan privasi MoR Lemon Squeezy
│   │   └── refund.html         # Kebijakan refund 30 hari
│   └── paddle/                 # Preserved (Disembunyikan sementara di UI)
│       ├── index.html
│       ├── pricing.html
│       ├── terms.html
│       └── privacy.html
└── assets/
    ├── css/
    │   └── style.css           # Framework desain glassmorphism & simulator engine
    └── images/
        ├── logo.svg
        ├── favicon.svg
        ├── lemon-squeezy-logo.svg
        ├── luminatweak-app-icon.png
        ├── luminatweak-social-promo.jpg       # Promo 16:9 peluncuran di X
        ├── luminatweak-launch-16x9.jpg        # Master 16:9
        ├── luminatweak-storefront-4x3.jpg     # Cover 4:3 (sesuai Reply Tweet)
        ├── luminatweak-demo.gif               # Animasi rekaman simulator 16 frame
        ├── luminatweak-battery-power.png      # Mockup tab baterai Near-Zero
        └── luminatweak-dashboard.png
```

---

## 💻 8. PANDUAN MELANJUTKAN PROYEK DI KOMPUTER LAIN

Jika Anda membuka repository ini di komputer baru, ikuti langkah berikut:

### 1. Clone Repository Memory:
```bash
git clone https://x-access-token:[YOUR_GITHUB_TOKEN]@github.com/golongankuwayuhan/Memory-Website-Company-Profile.git
cd Memory-Website-Company-Profile
```

### 2. Mengedit & Mengetes Secara Lokal:
Karena website ini dibangun menggunakan **Pure Modern Semantic Web (Vanilla HTML5, CSS3, & Modern ES6 JavaScript)** tanpa dependensi npm / build bundler yang rumit, Anda cukup menyalakan static web server:
```bash
python3 -m http.server 8080
# Buka peramban di: http://localhost:8080/lumina/demo.html
```

### 3. Sinkronisasi ke Production Website:
Repository produksi utama yang terhubung ke domain `rekasaujanafalah.com` (GitHub Pages) adalah:
`https://github.com/golongankuwayuhan/reka-saujana-falah.git`

Untuk mendorong perubahan ke website live:
```bash
git push https://x-access-token:[PROD_TOKEN]@github.com/golongankuwayuhan/reka-saujana-falah.git main
```

---
*Created by PT Reka Saujana Falah Software Engineering Studio — 2026.*
