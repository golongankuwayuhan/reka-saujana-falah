# Memory 06: Panduan Lengkap Melanjutkan Pengembangan di Komputer Lain

Dokumen ini ditulis secara rinci agar Anda dapat membuka laptop atau PC lain, melakukan `git clone`, dan langsung bekerja tanpa hambatan.

---

## 1. Persyaratan Lingkungan (Prerequisites)

Website ini dirancang secara sengaja menggunakan **Zero-Dependency Architecture**:
* **Tidak memerlukan `npm install`** atau Node.js build step (Webpack/Vite/Rollup).
* Semua styling murni CSS3 (CSS Variables, Flexbox, Grid, Glassmorphism).
* Semua skrip interaktif adalah Vanilla ES6 Modern JavaScript.
* Cukup butuh text editor (VS Code, Cursor, atau Antigravity) dan browser modern (Chrome, Safari, Firefox, Edge).

---

## 2. Cara Clone Repository Memory di Komputer Baru

Buka Terminal (macOS/Linux) atau Git Bash (Windows) dan jalankan:

```bash
# Clone repository memory ini
git clone https://x-access-token:[YOUR_GITHUB_TOKEN]@github.com/golongankuwayuhan/Memory-Website-Company-Profile.git

# Masuk ke direktori
cd Memory-Website-Company-Profile
```

---

## 3. Menjalankan Website Secara Lokal

Untuk menguji simulator atau melakukan modifikasi teks dan tampilan:

### Opsi A: Menggunakan Python (Direkomendasikan)
```bash
# Di macOS / Linux
python3 -m http.server 8080

# Di Windows
python -m http.server 8080
```
Buka browser dan akses:
* Homepage: `http://localhost:8080/`
* Showcase & Simulator: `http://localhost:8080/lumina/demo.html`
* Storefront Lemon: `http://localhost:8080/lumina/lemon/pricing.html`

### Opsi B: Menggunakan VS Code Live Server
* Buka folder di VS Code.
* Klik kanan pada file `index.html` atau `lumina/demo.html`.
* Pilih **"Open with Live Server"**.

---

## 4. Cara Sinkronisasi ke Production Website (`rekasaujanafalah.com`)

Domain publik `https://rekasaujanafalah.com` di-hosting secara otomatis oleh **GitHub Pages** yang terhubung ke repository:
`https://github.com/golongankuwayuhan/reka-saujana-falah.git`

Jika Anda selesai melakukan perbaikan di komputer baru dan ingin mempublikasikannya ke internet:

```bash
# 1. Tambahkan remote production jika belum ada
git remote add production https://x-access-token:[TOKEN_GITHUB]@github.com/golongankuwayuhan/reka-saujana-falah.git

# 2. Push branch main ke remote production
git push production main
```
Dalam kurun waktu ~30 detik, GitHub Pages akan otomatis mengompilasi dan menayangkan perubahan secara global di `rekasaujanafalah.com`.

---

## 5. Daftar File Penting yang Sering Diperbarui

1. `lumina/demo.html` — Halaman simulator utama yang ditargetkan dari tweet X (@apexvistastudio).
2. `lumina/index.html` — Wajib selalu di-copy dari `lumina/demo.html` (`cp lumina/demo.html lumina/index.html`) agar pengunjung yang membuka URL pendek `rekasaujanafalah.com/lumina` mendapatkan konten yang sama persis.
3. `lumina/lemon/pricing.html` — Halaman penetapan harga 3 tier. Ubah Variant ID Lemon Squeezy di sini jika Anda membuat tier baru.
4. `assets/css/style.css` — Seluruh tema visual, font, efek kaca, dan responsivitas mobile.
