# Panduan Deploy ke Vercel — Susilo Widakdo Resume Website

Website ini dibangun menggunakan **Astro v7 (Static Site Generator)** dengan output direktori `dist/`, sehingga deployment ke **Vercel** bersifat **Zero-Config** (otomatis terdeteksi).

---

## Opsi 1: Deploy via GitHub (Sangat Direkomendasikan ⭐)
Metode ini otomatis menghubungkan repository ke Vercel. Setiap kali Anda melakukan `git push`, Vercel akan otomatis melakukan auto-build dan update website secara instan (CI/CD).

### Langkah 1: Buat Repository Baru di GitHub
1. Buka [github.com/new](https://github.com/new).
2. Beri nama repository, misalnya: `susilo-widakdo-resume`.
3. Pilih **Public** atau **Private**, lalu klik **Create repository** (jangan centang *Initialize with README*).

### Langkah 2: Push Kode dari Komputer Anda
Jalankan perintah berikut di terminal workspace Anda:
```bash
git remote add origin https://github.com/<username-github-anda>/susilo-widakdo-resume.git
git push -u origin main
```

### Langkah 3: Import ke Vercel Dashboard
1. Buka [vercel.com](https://vercel.com) dan login (disarankan pakai akun GitHub).
2. Klik tombol **"Add New..."** > **"Project"**.
3. Cari repository `susilo-widakdo-resume` yang baru di-push, lalu klik **"Import"**.
4. Vercel akan otomatis mendeteksi konfigurasi:
   - **Framework Preset**: `Astro`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Klik tombol **"Deploy"**!
6. Dalam waktu ~30 detik, website Anda akan live dengan URL seperti `https://susilo-widakdo-resume.vercel.app`.

---

## Opsi 2: Deploy Cepat via Terminal (Vercel CLI)
Jika Anda tidak ingin menghubungkan ke GitHub terlebih dahulu dan ingin langsung online:

1. Jalankan perintah:
```bash
npx vercel
```
2. Ikuti prompt interaktif di terminal:
   - `Set up and deploy?` → ketik `y`
   - `Which scope?` → pilih akun Anda
   - `Link to existing project?` → ketik `n`
   - `Project name?` → tekan Enter (atau ketik nama custom)
   - `In which directory is your code located?` → tekan Enter (`./`)
   - `Want to modify these settings?` → ketik `n`
3. Vercel akan meng-upload dan memberikan link URL staging.
4. Untuk deploy ke domain production:
```bash
npx vercel --prod
```

---

## ⚙️ Pengaturan Tambahan yang Sudah Dioptimasi
Project ini sudah dilengkapi:
- [`vercel.json`](file:///var/www/aerith/vercel.json): Konfigurasi security headers (X-Frame-Options, CSP-ready, nosniff), clean URLs, dan caching aset gambar avatar.
- [`public/robots.txt`](file:///var/www/aerith/public/robots.txt): Perizinan crawler search engine (Googlebot, Bingbot).
- [`@astrojs/sitemap`](file:///var/www/aerith/astro.config.mjs): XML Sitemap otomatis di-generate saat build untuk index Google Search Console.

---

## 🌐 Menghubungkan Custom Domain Sendiri (Opsional)
Jika Anda memiliki domain sendiri (misal: `susilowidakdo.com`):
1. Masuk ke dashboard project di Vercel > **Settings** > **Domains**.
2. Masukkan nama domain Anda.
3. Arahkan DNS CNAME atau A Record dari registrar domain Anda sesuai panduan yang ditampilkan Vercel.
4. Sertifikat SSL HTTPS akan otomatis aktif gratis!
