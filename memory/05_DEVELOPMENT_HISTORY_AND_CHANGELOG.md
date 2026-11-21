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

## Fase 6: Penyelarasan Jumlah Tweak Menjadi 2.337 Tweak (Standar: 2.300+ Tweak)
* **Instruksi Pengguna**: Selaraskan jumlah tweak website dengan update di chat LuminaTweak Glass.
* **Tindakan**:
  * Mengaudit komposisi tweak: 72 Curated Primary Tweaks + 2.265 Universal Registry Plist Catalog = **Total 2.337 Tweak Native macOS**.
  * Menyelaraskan seluruh materi pemasaran dan website:
    * Bahasa Indonesia: **2.300+ Tweak Native macOS** (menggantikan 2.265+).
    * Bahasa Inggris: **2,300+ Native macOS Tweaks** (menggantikan 2,265+).
    * Simulator in-browser active counter: Diperbarui menjadi `18 / 2,337`.
  * Memperbarui seluruh halaman web (`index.html`, `pricing.html`, `enterprise-pricing.html`, `demo.html`, `lumina/demo.html`, `lumina/index.html`, `lumina/lemon/*`, `lumina/paddle/*`, `assets/js/main.js`).
  * Mendorong pembaruan ke Git remote `origin` dan `memory`.

## Fase 7: Ekspansi Multiplatform Produk Raudhah (Google Play Store & macOS DMG di Lemon Squeezy)
* **Instruksi Pengguna**:
  * Perbaiki website terutama produk Raudhah: kini sudah tersedia versi Mac OSX DMG di Lemon Squeezy pada tautan yang sama.
  * Tambahkan rilis resmi Google Play Store untuk Android dengan tautan: `https://play.google.com/store/apps/details?id=com.raudhah.app&pcampaignid=web_share`.
  * Perbarui seluruh kode dan memory pengembangan secara lengkap di Git.
* **Tindakan**:
  * **Penyelarasan Platform Raudhah**:
    * Android: Google Play Store (pemasangan 1-tap dan auto-update) + APK mandiri.
    * macOS: Berkas `.dmg` universal (Apple Silicon & Intel) via Lemon Squeezy ($0 / Hadiah Sukarela).
    * Windows PC: Single executable `.exe` dan `.zip` portabel via Lemon Squeezy.
  * **Pembaruan Website**:
    * Menambahkan tombol dan navigasi resmi ke Google Play Store serta Lemon Squeezy macOS DMG di `index.html` (navbar desktop, mobile drawer, dan section `#raudhah`).
    * Menambahkan tombol berdesain logo resmi Google Play Store (`.btn-raudhah-playstore`) di CSS dan HTML.
    * Memperbarui showcase portal `raudhah/index.html`: hero badges, banner CTA, rincian varian Lite vs Full, opsi unduhan terpisah (Play Store vs Lemon Squeezy), serta panduan pemasangan 3 kolom (Android, macOS DMG, dan Windows PC).
    * Menyelaraskan kamus dwibahasa (ID & EN) di `assets/js/main.js` dan `raudhah/index.html`.
  * **Pembaruan Dokumentasi Memory**:
    * Memperbarui `PROJECT_MEMORY.md` dan `memory/07_RAUDHAH_APP_AND_LEMON_SETUP.md`.
    * Mencatat riwayat changelog Fase 7 pada `memory/05_DEVELOPMENT_HISTORY_AND_CHANGELOG.md`.
    * Melakukan commit dan push ke repositori GitHub `reka-saujana-falah` dan `Memory-Website-Company-Profile`.

## Fase 8: Persiapan Informasi "Coming Soon" & Verifikasi Merchant of Record Paddle.com Lintas Produk
* **Instruksi Pengguna**:
  * Sedang proses pengajuan/verifikasi merchant dengan Paddle.com.
  * Siapkan informasi "Coming Soon" untuk Paddle pada setiap produk (LuminaTweak Glass & Raudhah App) agar tim verifikasi Paddle yang mengonfirmasi website melihat integrasi aktif, kepatuhan legal lengkap, dan antusias menyetujui proposal merchant PT Reka Saujana Falah.
  * Perbarui kode dan seluruh memory pengembangan lengkap di Git.
* **Tindakan**:
  * **Integrasi UI & Branding Paddle "Coming Soon"**:
    * Menambahkan styling `.btn-tier-paddle-cs`, `.paddle-onboarding-callout`, `.btn-raudhah-paddle-cs`, dan modal `.paddle-modal-overlay` di `assets/css/style.css`.
    * Memperbarui `index.html`:
      * Menampilkan badge Paddle MoR (Coming Soon / In Review) di hero section Lumina.
      * Menyempurnakan Store Guidance Banner dengan logo Lemon Squeezy dan Paddle, serta tombol langsung ke portal Paddle.
      * Menambahkan callout banner resmi Paddle di atas tabel harga Lumina.
      * Membuka tombol checkout tier Paddle ($39, $59, $99) dengan badge "Coming Soon / In Review ↗" yang mengarah ke portal Paddle.
      * Menambahkan badge dan tombol gerbang Paddle (Coming Soon) di section showcase Raudhah.
      * Menambahkan tautan portal Paddle di dropdown navbar, mobile drawer, dan footer.
    * Memperbarui `pricing.html`:
      * Menambahkan banner callout status verifikasi Paddle di atas kartu harga.
      * Mengaktifkan tombol Paddle di setiap kartu harga dengan tautan ke portal Paddle.
      * Membuka tautan legal dan portal Paddle di footer dan kotak Merchant of Record.
    * Memperbarui `raudhah/index.html`:
      * Menambahkan badge hero "Paddle.com Gateway (In Review)".
      * Menambahkan opsi ke-3 pada kartu unduhan/donasi: "Paddle.com Global Gateway (Coming Soon / In Review)" untuk hadiah sukarela wakaf digital internasional multi-mata uang.
    * Memperbarui dedicated portal `lumina/paddle/index.html` dan `lumina/paddle/pricing.html`:
      * Menambahkan top alert banner resmi verifikasi Paddle: "Paddle.com Merchant Verification in Progress".
      * Menambahkan modal informatif elegan ketika tombol checkout diklik selama masa ulasan merchant.
  * **Sinkronisasi Dwibahasa (ID & EN)**:
    * Menambahkan seluruh kunci penerjemahan Paddle di `assets/js/main.js` dan inline script `raudhah/index.html`.
  * **Dokumentasi Memory**:
    * Menambahkan Bab D di `PROJECT_MEMORY.md`.
    * Mencatat Fase 8 di `memory/05_DEVELOPMENT_HISTORY_AND_CHANGELOG.md`.
    * Membuat panduan verifikasi khusus `memory/08_PADDLE_MERCHANT_ONBOARDING_AND_VERIFICATION.md`.
    * Mendorong seluruh perubahan ke Git remote `origin` (`reka-saujana-falah`) dan `memory` (`Memory-Website-Company-Profile`).
