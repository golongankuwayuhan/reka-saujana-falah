# Memory 05: Riwayat Pengembangan & Log Perubahan (Changelog)

## Fase 1: Inisiasi Proyek & Identitas Legal Perusahaan
* Pembuatan struktur dasar landing page studio di `rekasaujanafalah.com`.
* Pendefinisian identitas legal PT Reka Saujana Falah sebagai software house terdaftar di Jawa Barat, Indonesia.
* Integrasi skema warna dark obsidian, neon cyan, dan amber gold untuk kesan studio teknologi premium.

## Fase 2: Pembangunan In-Browser Simulator LuminaTweak Glass
* Pembuatan prototipe simulator macOS interaktif 1:1 di `lumina/demo.html`.
* Implementasi frame Apple Studio Display lengkap dengan menu bar macOS, traffic light buttons (close, minimize, zoom), dock animasi, dan jendela kontrol.
* Penambahan sistem Auto-Play Guided Tour berbasis script JS murni untuk memandu pengunjung otomatis tanpa library eksternal.
* Integrasi bilingual switcher instan (Bahasa Indonesia & English) tanpa page reload.

## Fase 3: Integrasi Pembayaran Komersial (Paddle & Lemon Squeezy)
* Pembuatan halaman storefront Paddle dan Lemon Squeezy lengkap dengan perincian 3 tier:
  * Plus Edition ($39)
  * Pro Edition ($59)
  * Power Pack ($99)
* Pengalihan fokus utama ke **Lemon Squeezy** sebagai MoR aktif:
  * Pemasangan script SDK resmi Lemon.js (`assets.lemonsqueezy.com/lemon.js`).
  * Penautan ID varian resmi ke tombol-tombol checkout dengan parameter `?embed=1`.
  * Penyesuaian link Paddle menjadi hidden (`display: none;`) untuk menjaga fokus pembeli.

## Fase 4: Penyesuaian Klaim Baterai & Kepatuhan Legal
* **Instruksi Pengguna**: Hindari klaim absolut "0% Zero-Drain", ganti dengan "Near-Zero" atau "Almost 0%".
* **Tindakan**:
  * Mengganti seluruh teks di semua file HTML, JS, dan MD dari `Zero-Drain Battery Shield` menjadi `Near-Zero Battery Shield`.
  * Mengganti klaim persentase menjadi `Almost 0% overnight loss` dan `(~0% Sleep Drain)`.
  * Meretouch gambar visual (`luminatweak-battery-power.png`, `luminatweak-social-promo.jpg`, `Cover_Image_4x3.jpg`).
  * Merekam ulang GIF animasi (`luminatweak-demo.gif`) menggunakan Puppeteer headless browser untuk merefleksikan perubahan teks terbaru.
* **Instruksi Legal Pengguna**: Hapus seluruh janji/komitmen update seumur hidup dari dokumen hukum.
* **Tindakan**:
  * Merevisi Pasal 8 di `terms.html`, `lumina/lemon/terms.html`, dan `lumina/paddle/terms.html` menjadi "8. Bantuan Teknis & Dukungan Aktivasi".
  * Menegaskan bahwa pembelian adalah lisensi jual-putus (*perpetual license*) untuk versi rilis yang dibeli tanpa jaminan kontrak SLA pembaruan fitur berkelanjutan.

## Fase 5: Transisi dari "Pre-Order / Teaser" ke "Official Global Launch"
* **Instruksi Pengguna**: Peluncuran resmi telah dilakukan via tweet di akun perusahaan (@apexvistastudio), ubah semua status halaman dari "Pre-Order" / "Coming Soon" menjadi live launch.
* **Tindakan**:
  * Mengubah header title menjadi `Live Interactive Demo & Official Showcase`.
  * Mengganti tombol CTA dari `Pre-Order ($39)` menjadi `Get License ($39)` / `Beli Lisensi ($39)`.
  * Mengganti teaser card poster menjadi render 3D resmi `luminatweak-social-promo.jpg` dan menghubungkan tombol aksi langsung ke modal overlay Lemon Squeezy.
  * Memastikan `lumina/index.html` dan `lumina/demo.html` tersinkronisasi 100%.
  * Menyimpan dan merapikan seluruh memory pengembangan ke dalam repositori git.
