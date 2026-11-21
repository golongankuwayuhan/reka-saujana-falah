# 🛡️ PADDLE.COM MERCHANT ONBOARDING & VERIFICATION GUIDE
**Entitas**: PT Reka Saujana Falah (operating as Apex Vista Studio)  
**Status D-U-N-S®**: D-U-N-S® Compliance Ready  
**Website Resmi**: https://rekasaujanafalah.com  
**Portal Khusus Paddle**: https://rekasaujanafalah.com/lumina/paddle/pricing.html  
**Status**: Sedang Dalam Proses Verifikasi Kepatuhan (Under Merchant Review)  
**Tanggal Update**: 21 November 2026

---

## 📌 1. TUJUAN & KONTEKS REVIEW PADDLE

Dokumen ini mencatat seluruh arsitektur teknis, integrasi pembayaran, dan kepatuhan hukum (*merchant compliance*) yang disiapkan oleh **PT Reka Saujana Falah** untuk persetujuan akun **Paddle.com (Merchant of Record)**.

Ketika tim kepatuhan (*compliance & risk team*) Paddle memeriksa situs `rekasaujanafalah.com`, seluruh elemen yang mereka butuhkan telah siap 100%:
1. **Entitas Bisnis Sah & Transparan**: PT Reka Saujana Falah terdaftar resmi di Republik Indonesia (Ditjen AHU Kemenkumham & OSS BKPM) serta disiapkan untuk audit kelayakan direktori global D-U-N-S®.
2. **Katalog Produk Asli & Nyata**:
   * **LuminaTweak Glass Edition**: Utilitas sistem macOS native berkinerja tinggi dengan 2.300+ tweak, Near-Zero Battery Shield, dan simulator interaktif 1:1 real-time.
   * **Aplikasi Raudhah**: Aplikasi ibadah dan ilmu syar'i 100% bebas iklan dan offline untuk Android (Google Play Store), macOS (.dmg), dan Windows PC (.exe/.zip) dengan skema Wakaf Digital ($0 / Hadiah Sukarela).
3. **Keterbukaan Harga (Transparent Pricing)**:
   * Seluruh harga produk dalam USD dicantumkan jelas ($39, $59, $99).
   * Tanpa biaya langganan berulang (*zero recurring subscriptions* / *perpetual licensing*).
4. **Kebijakan Pembeli Terlindungi (Consumer Protection)**:
   * Garansi 30 hari uang kembali (*30-Day Money-Back Guarantee*).
   * Syarat Layanan (*Terms of Service*) dan Kebijakan Privasi (*Privacy Policy*) yang mematuhi standar PCI-DSS Level 1 dan perlindungan data global.

---

## 💎 2. KATALOG PRODUK & HARGA TERDAFTAR DI PADDLE

### A. LuminaTweak Glass Edition (macOS Utility)
* **Kategori**: Software / Utility Application (macOS 12-15 Ready).
* **Format Distribusi**: Digital Download (Installer macOS .dmg APFS, drag-and-drop).
* **Kunci Lisensi**: Dikirim otomatis via email oleh Paddle setelah transaksi berhasil.
* **Price Tiers**:
  1. **Plus Edition ($39.00 USD)**:
     * Deskripsi: 1 Lisensi Perangkat Mac.
     * Price ID Paddle: `pri_01m54qmerytd57vfyt0rkay8tb`
  2. **Pro Edition ($59.00 USD)** *(Most Popular)*:
     * Deskripsi: 3 Lisensi Perangkat Mac simultan + Near-Zero Battery Shield + Shell Script Export.
     * Price ID Paddle: `pri_01m54qpy498d7wyfs4y8eydbpb`
  3. **Power Pack ($99.00 USD)**:
     * Deskripsi: Hingga 5 Lisensi Perangkat Mac + Automasi Kustom + Offline License Validation.
     * Price ID Paddle: `pri_01m54qrjt8mdpn532kq78wpytp`
  4. **Enterprise Fleet ($299.00+ USD)**:
     * Deskripsi: Volume licensing 10, 25, 50, dan Unlimited Mac seat deployment via MDM.
     * URL Spesifikasi: `https://rekasaujanafalah.com/lumina/paddle/enterprise-pricing.html`

### B. Aplikasi Raudhah (Islamic Worship Companion)
* **Kategori**: Spiritual & Educational Offline Software.
* **Model**: Wakaf Digital (100% Free & Ad-Free / Pay What You Want $0+).
* **Fungsi Gate Paddle**: Gerbang kontribusi hadiah sukarela (*voluntary appreciation gift / token of gratitude*) dari pengguna internasional dengan multi-mata uang lokal.
* **Platform**:
  * Android: Google Play Store (`com.raudhah.app`) & APK mandiri.
  * macOS: Berkas `.dmg` (Apple Silicon & Intel).
  * Windows PC: Single executable `.exe` dan `.zip`.

---

## 🌐 3. STRUKTUR HALAMAN WEBSITE KHUSUS PADDLE

Situs web telah menyediakan portal khusus yang terisolasi dan terverifikasi untuk alur Paddle:

| Halaman | URL Live | Fungsi & Fokus Reviewer Paddle |
| :--- | :--- | :--- |
| **Landing Page Utama** | `https://rekasaujanafalah.com` | Menampilkan produk, navbar dropdown Paddle, banner panduan MoR, callout verifikasi Paddle, dan tombol lisensi. |
| **Root Pricing** | `https://rekasaujanafalah.com/pricing.html` | Ringkasan harga 3 tier dengan tombol Paddle "Coming Soon / In Review ↗" dan rincian MoR. |
| **Paddle Store Overview** | `https://rekasaujanafalah.com/lumina/paddle/index.html` | Ikhtisar produk resmi kanal Paddle dengan top alert banner status verifikasi. |
| **Paddle Pricing & Checkout** | `https://rekasaujanafalah.com/lumina/paddle/pricing.html` | Halaman checkout resmi dengan script `Paddle.js v2`, Price ID terkonfigurasi, dan modal status verifikasi. |
| **Paddle Enterprise Pricing** | `https://rekasaujanafalah.com/lumina/paddle/enterprise-pricing.html` | Matriks lisensi volume B2B / MDM. |
| **Paddle Terms of Service** | `https://rekasaujanafalah.com/lumina/paddle/terms.html` | Syarat ketentuan transaksi melalui Paddle Market Ltd (MoR). |
| **Paddle Privacy Policy** | `https://rekasaujanafalah.com/lumina/paddle/privacy.html` | Kebijakan privasi & perlindungan data transaksi. |
| **Paddle Refund Policy** | `https://rekasaujanafalah.com/lumina/paddle/refund.html` | Kebijakan pengembalian dana 30 hari tanpa syarat. |
| **Raudhah Showcase** | `https://rekasaujanafalah.com/raudhah/index.html` | Showcase produk Raudhah dengan opsi unduhan Play Store, Lemon Squeezy, dan gerbang Paddle. |

---

## ⚙️ 4. IMPLEMENTASI TEKNIS PADDLE BILLING V2

Portal Paddle menggunakan library resmi Paddle v2:
```html
<script src="https://cdn.paddle.com/paddle/v2/paddle.js"></script>
<script type="text/javascript">
  if (typeof Paddle !== 'undefined') {
    Paddle.Initialize({
      token: "live_0ea7a7733b317ac0938addf7798",
      eventCallback: function(data) {
        if (data.name === "checkout.completed") {
          window.location.href = "thank-you.html";
        }
      }
    });
  }

  function openPaddleCheckout(priceId) {
    if (typeof Paddle === 'undefined') {
      showPaddleVerificationModal(priceId);
      return;
    }
    var checkoutOptions = {
      items: [{ priceId: priceId, quantity: 1 }],
      settings: {
        displayMode: "overlay",
        theme: "dark",
        locale: "en",
        successUrl: "https://rekasaujanafalah.com/lumina/paddle/thank-you.html"
      }
    };
    try {
      Paddle.Checkout.open(checkoutOptions);
    } catch (err) {
      console.warn('Paddle open checkout caught:', err);
      showPaddleVerificationModal(priceId);
    }
  }
</script>
```

### Penanganan Selama Masa Review ("Coming Soon / In Review"):
* Apabila pembeli atau reviewer mengklik tombol Paddle di situs utama, pengguna diarahkan ke portal khusus Paddle atau disajikan dialog verifikasi transparan (`paddleVerificationModal`).
* Top alert banner memberitahukan bahwa proposal merchant sedang dalam proses finalisasi ulasan kepatuhan, dan transaksi saat ini juga dapat diselesaikan melalui toko Lemon Squeezy resmi kami yang sudah aktif secara live.

---

## 📋 5. PANDUAN UNTUK TIM REVIEWER PADDLE (COMPLIANCE CHECKLIST)

Untuk memudahkan verifikasi oleh agen/analis Paddle:

1. **Nama Bisnis**: PT Reka Saujana Falah
2. **Negara & Domisili**: Indonesia (Jawa Barat)
3. **Pendaftaran Entitas**: Ditjen AHU Kemenkumham RI & NIB OSS BKPM (D-U-N-S® Compliance Ready)
4. **Kontak Resmi**:
   * Email Kepatuhan: `admin@rekasaujanafalah.com` / `contact@rekasaujanafalah.com`
   * WhatsApp Hotline: `+62 896-0101-4132`
5. **Kebijakan Refund**: 30 hari pengembalian penuh tanpa potongan.
6. **Mata Uang Transaksi**: USD (Dolar Amerika Serikat).
7. **Pengiriman Produk**: Instan via email digital receipt dan lisensi unduhan software.

---
*Dibuat oleh Tim Rekayasa Perangkat Lunak PT Reka Saujana Falah — 2026.*
