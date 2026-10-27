# Memory 03: Konfigurasi Storefront, Produk Lemon Squeezy, & Kode Checkout

## 1. Konfigurasi Produk di Dashboard Lemon Squeezy

* **Store URL**: `https://apexvista.lemonsqueezy.com`
* **Nama Produk**: `LuminaTweak Glass Edition — Ultimate macOS Customizer`
* **Slug Produk**: `luminatweak-glass`
* **Tax Category**: `Digital Goods` / `Software`
* **Generate License Keys**: **Wajib Dicentrang (Enabled)**

### Pembagian 3 Varian Harga & Batas Aktivasi:

| Nama Varian | ID Produk Lemon | Harga (USD) | Batas Mesin Mac | Link Checkout Modal Langsung (?embed=1) |
| :--- | :--- | :--- | :--- | :--- |
| **Plus Edition** | `2303154` | **$39.00** | 1 Mac | `https://apexvista.lemonsqueezy.com/checkout/buy/9847ba29-b065-4849-8379-aa75e5bd2c16?embed=1` |
| **Pro Edition** *(Recommended)* | `2302715` | **$59.00** | 3 Macs | `https://apexvista.lemonsqueezy.com/checkout/buy/44395d94-dbeb-4f8a-a3a6-71507099943b?embed=1` |
| **Power Pack** | `2302946` | **$99.00** | 5 Macs | `https://apexvista.lemonsqueezy.com/checkout/buy/17c1f119-e6ca-4774-a9f5-1d646e8796be?embed=1` |

---

## 2. Implementasi SDK Lemon.js di Halaman Web

Agar checkout muncul berupa popup overlay modern tanpa me-refresh atau memindahkan pengguna keluar dari halaman website:

### A. Load Script SDK
```html
<script src="https://assets.lemonsqueezy.com/lemon.js" defer></script>
```

### B. Elemen Tombol HTML
Semua tombol checkout wajib menyertakan:
1. `class="lemonsqueezy-button"`
2. Parameter URL `?embed=1`

Contoh pada `lumina/lemon/pricing.html`:
```html
<!-- Tier 1: Plus -->
<a href="https://apexvista.lemonsqueezy.com/checkout/buy/9847ba29-b065-4849-8379-aa75e5bd2c16?embed=1" 
   class="lemonsqueezy-button btn btn-primary tier-cta-btn" id="t1Btn">
  Buy Plus ($39)
</a>

<!-- Tier 2: Pro -->
<a href="https://apexvista.lemonsqueezy.com/checkout/buy/44395d94-dbeb-4f8a-a3a6-71507099943b?embed=1" 
   class="lemonsqueezy-button btn btn-primary tier-cta-btn" id="t2Btn">
  Buy Pro ($59)
</a>

<!-- Tier 3: Power Pack -->
<a href="https://apexvista.lemonsqueezy.com/checkout/buy/17c1f119-e6ca-4774-a9f5-1d646e8796be?embed=1" 
   class="lemonsqueezy-button btn btn-secondary tier-cta-btn" id="t3Btn">
  Buy Power Pack ($99)
</a>
```

### C. Inisialisasi Script
```html
<script>
  window.addEventListener('load', function() {
    if (window.createLemonSqueezy) {
      window.createLemonSqueezy();
    }
  });
</script>
```

---

## 3. Preserved Paddle Setup (Cadangan)
Halaman Paddle disimpan rapi di direktori `lumina/paddle/` (`index.html`, `pricing.html`, `terms.html`, `privacy.html`).
Di antarmuka navigasi utama (`nav-links`), link menuju Paddle diberi atribut `style="display: none;"` agar pengunjung fokus ke Lemon Squeezy yang sedang aktif digunakan untuk transaksi.
