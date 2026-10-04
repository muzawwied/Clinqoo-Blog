# Clincoo Blog

## ⛔ ATURAN DEPLOYMENT — WAJIB DIBACA SEBELUM DEPLOY

Blog (Cloudflare Pages, project `clincoo-blog`) **sudah terhubung otomatis
dengan repo ini** (GitHub-connected, branch `main`). Setiap push ke `main`
otomatis memicu build & deploy blog.

1. Deploy blog **SATU-SATUNYA lewat git**: `git pull` → ubah kode →
   `git commit` → `git push origin main`. Cloudflare membangun ulang otomatis.
2. **JANGAN `wrangler pages deploy . --project-name=clincoo-blog`.** Upload
   langsung menimpa build dari git tanpa jejak commit. Kalau folder lokalnya
   basi (belum `git pull` terbaru), blog tertimpa versi lama dan pembaruan
   terbaru **hilang / halaman rusak**. Ini sudah terjadi berkali-kali di
   project lain (produksi app).
3. Sebelum mengubah kode apa pun, **selalu `git pull origin main` dulu** —
   jangan kerja dari salinan folder lama.
4. `wrangler pages deploy` hanya untuk project **preview** (bukan blog),
   atau deploy dengan `--branch` sebagai preview.
5. Kalau blog tiba-tiba tampil versi lama: cek daftar deployment
   (deployment tanpa kolom *Source* = upload langsung basi). Perbaikannya:
   push commit kosong ke `main` supaya git membangun ulang blog.

> Agent lain: kalau kamu mempegang salinan kode lama, **jangan deploy ke
> blog**. Ambil kode terbaru dari repo ini, atau cukup push commit —
> blog dikelola git, bukan upload manual.
