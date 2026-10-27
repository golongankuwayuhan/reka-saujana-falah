# Memory 02: Spesifikasi Produk & Arsitektur Teknis LuminaTweak Glass Edition

## 1. Konsep Dasar Produk
LuminaTweak Glass Edition adalah aplikasi macOS native yang menyatukan ribuan pengaturan tersembunyi macOS (yang selama ini hanya bisa diakses via perintah Terminal `defaults write`) ke dalam sebuah dasbor grafis elegan berbasis **Liquid Frosted Glass**.

## 2. Parameter Teknis & Kompatibilitas
* **Format Distribusi**: Universal Binary (.dmg & .zip)
* **Arsitektur CPU**:
  * Apple Silicon: M1, M1 Pro, M1 Max, M1 Ultra, M2, M3, M4 (arm64 native)
  * Intel Core: 64-bit architecture (x86_64)
* **Versi macOS yang Didukung**:
  * macOS 12 Monterey
  * macOS 13 Ventura
  * macOS 14 Sonoma
  * macOS 15 Sequoia
* **Keamanan Sistem**: 100% SIP-Safe (System Integrity Protection). Tidak memodifikasi file root `/System`, hanya memodifikasi preferensi pengguna di domain `~/Library/Preferences/`.

## 3. Layer Sistem yang Dioptimalkan (11 Kategori)
1. **Window Manager & Animations**: Instant snapping, eliminasi delay jendela 0ms, disable genie effect or switch to scale.
2. **Hardware & Power (Near-Zero Battery Shield)**:
   * Menonaktifkan polling jaringan berkala saat laptop tidur (`sudo pmset -a tcpkeepalive 0`).
   * Menonaktifkan Power Nap saat menggunakan daya baterai (`sudo pmset -a powernap 0`).
   * Menonaktifkan Wake On Network (`sudo pmset -a womp 0`).
   * Mengatur mode hibernasi ke Safe Sleep (Mode 3) atau Deep Hibernation (Mode 25).
   * Menghilangkan kebocoran baterai 10%–20% semalaman menjadi **Almost 0% overnight loss** (`~0% Sleep Drain`).
3. **Finder & Filesystem**: Tampilkan file tersembunyi, tampilkan path bar & status bar, disable ekstensi peringatan, set default search scope.
4. **Dock & Mission Control**: Hilangkan delay autohide dock (`autohide-delay 0`), percepat animasi dock (`autohide-time-modifier 0.15`), atur posisi dan ukuran icon.
5. **Safari & WebKit**: Aktifkan Develop Menu, inspect element everywhere, disable preloading tab yang boros RAM.
6. **Keyboard & Typing**: Key repeat rate super cepat (delay until repeat 10, key repeat 1), disable autocapitalize & smart quotes untuk coding.
7. **Screenshots**: Ubah format default ke JPG/PNG/WebP, ubah folder tujuan otomatis, hilangkan shadow jendela pada tangkapan layar.
8. **Xcode & Developer**: Tampilkan build time di toolbar Xcode, compile multithread optimization, enable indexing throttle control.
9. **Lock Screen & Security**: Atur delay password lock instan saat display sleep, custom text di lock screen.
10. **Sound & Feedback**: Nonaktifkan bunyi startup chime jika diinginkan, nonaktifkan audio feedback volume.
11. **Liquid Glass Appearance**: Kustomisasi slider opacity jendela, saturasi blur, dan intensitas glow.

## 4. Simulator In-Browser 1:1 di Website
Halaman `https://rekasaujanafalah.com/lumina/demo.html` menyajikan simulator peramban berbasis CSS/JS yang mereplikasi secara akurat tampilan Apple Studio Display dan jendela macOS:
* Memiliki toggle interaktif untuk menguji perubahan pengaturan secara langsung (misal: mematikan animasi, mengaktifkan Battery Shield, mengubah wallpaper).
* Memiliki tombol **Auto-Play Guided Tour** yang memandu pengunjung secara otomatis melihat 6 langkah demonstrasi fitur.
* Dilengkapi Floating Bar yang memungkinkan pengunjung langsung membuka modal checkout Lemon Squeezy kapan saja selama tur.
