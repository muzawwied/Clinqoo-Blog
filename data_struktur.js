// Clincoo Docs — kategori Struktur (10 Oktober 2026, 17:00 WIB) — kategori baru, 5 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["struktur"] = {
 "names": { "id": "Struktur", "en": "Structure" },
 "articles": [
{
 "id": "struktur-susun-folder-proyek-rapi",
 "langs": {
  "id": {
   "title": "Cara Susun Folder Proyek Clincoo yang Rapi",
   "desc": "Tata cara menata folder HTML, CSS, JS, dan assets di proyek Clincoo supaya mudah dicari dan tidak campur.",
   "content": "<p class=\"mb-4\">Folder yang campur membuat file sulit ditemukan dan deploy lebih lambat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pisahkan menurut jenis</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat folder css/, js/, assets/, dan pages/ atau components/. Jangan taruh semua di root.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Namai dengan huruf kecil dan tanda hubung</h2><p class=\"mb-4\">Gunakan hero-banner.css bukan HeroBanner.CSS. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pratinjau path relatif tetap benar. Catat struktur di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — File organization",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Dealing_with_files",
   "sourceSnippet": "Keep your files organized in folders so the project stays maintainable.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Organize a Clincoo Project Folder Cleanly",
   "desc": "How to arrange HTML, CSS, JS, and assets folders in a Clincoo project so files are easy to find and not mixed.",
   "content": "<p class=\"mb-4\">Mixed folders make files hard to find and deploys slower.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Separate by type</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create css/, js/, assets/, and pages/ or components/. Do not put everything in the root.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Name with lowercase and hyphens</h2><p class=\"mb-4\">Use hero-banner.css not HeroBanner.CSS. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> confirm relative paths still work. Note the structure on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — File organization",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Dealing_with_files",
   "sourceSnippet": "Keep your files organized in folders so the project stays maintainable.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "struktur-pisahkan-assets-dari-html",
 "langs": {
  "id": {
   "title": "Cara Pisahkan Assets dari File HTML",
   "desc": "Tata cara menaruh gambar, font, dan ikon di folder assets terpisah di proyek Clincoo.",
   "content": "<p class=\"mb-4\">Gambar di root membuat daftar file panjang dan sulit dioptimasi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buat subfolder assets</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pindahkan semua .png .jpg .svg ke assets/images/ dan font ke assets/fonts/.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Update path di HTML</h2><p class=\"mb-4\">Ganti src=\"logo.png\" menjadi src=\"assets/images/logo.png\". Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bahwa gambar tetap muncul. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTML images",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images",
   "sourceSnippet": "Use relative paths that point to an organized assets folder.",
   "source2": "Clincoo App",
   "source2Url": "https://app.clincoo.buzz/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Separate Assets from HTML Files",
   "desc": "How to place images, fonts, and icons in a separate assets folder in a Clincoo project.",
   "content": "<p class=\"mb-4\">Images in the root make the file list long and harder to optimize.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Create an assets subfolder</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> move all .png .jpg .svg to assets/images/ and fonts to assets/fonts/.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Update paths in HTML</h2><p class=\"mb-4\">Change src=\"logo.png\" to src=\"assets/images/logo.png\". Test in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> that images still appear. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTML images",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images",
   "sourceSnippet": "Use relative paths that point to an organized assets folder.",
   "source2": "Clincoo App",
   "source2Url": "https://app.clincoo.buzz/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "struktur-namai-file-konsisten",
 "langs": {
  "id": {
   "title": "Cara Namai File CSS dan JS secara Konsisten",
   "desc": "Tata cara memakai konvensi penamaan file di Clincoo supaya tim tidak bingung mencari style atau skrip.",
   "content": "<p class=\"mb-4\">Nama file yang acak memperlambat pencarian dan review.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai huruf kecil dan hubung</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> namai styles/main.css, components/card.css, scripts/form-handler.js.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hindari spasi dan huruf kapital</h2><p class=\"mb-4\">Spasi dan kapital bisa bermasalah di beberapa server. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan link di HTML cocok persis. Simpan contoh di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Naming conventions",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Dealing_with_files",
   "sourceSnippet": "Use consistent, descriptive file names without spaces.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Name CSS and JS Files Consistently",
   "desc": "How to use a file naming convention in Clincoo so the team is not confused looking for styles or scripts.",
   "content": "<p class=\"mb-4\">Random file names slow down search and review.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use lowercase and hyphens</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> name styles/main.css, components/card.css, scripts/form-handler.js.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Avoid spaces and capital letters</h2><p class=\"mb-4\">Spaces and capitals can break on some servers. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> make sure HTML links match exactly. Save examples on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Naming conventions",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Dealing_with_files",
   "sourceSnippet": "Use consistent, descriptive file names without spaces.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "struktur-hindari-file-campur-di-root",
 "langs": {
  "id": {
   "title": "Cara Hindari File Campur di Root Proyek",
   "desc": "Tata cara menjaga root Clincoo hanya berisi file penting seperti index.html dan konfigurasi.",
   "content": "<p class=\"mb-4\">Root yang penuh file percobaan membuat git status berisik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pindahkan yang tidak perlu</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pindahkan draft ke folder drafts/ atau hapus. Root hanya index, robots, sitemap, dan folder.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai .gitignore</h2><p class=\"mb-4\">Abaikan node_modules, .env, dan file OS. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan deploy tidak membawa file sementara. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Git — gitignore",
   "sourceUrl": "https://git-scm.com/docs/gitignore",
   "sourceSnippet": "A gitignore file specifies intentionally untracked files that Git should ignore.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid Mixed Files in the Project Root",
   "desc": "How to keep the Clincoo root only for important files like index.html and config.",
   "content": "<p class=\"mb-4\">A root full of experiments makes git status noisy.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Move what is not needed</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> move drafts to a drafts/ folder or delete them. Root should have only index, robots, sitemap, and folders.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use .gitignore</h2><p class=\"mb-4\">Ignore node_modules, .env, and OS files. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> confirm deploy does not include temporary files. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Git — gitignore",
   "sourceUrl": "https://git-scm.com/docs/gitignore",
   "sourceSnippet": "A gitignore file specifies intentionally untracked files that Git should ignore.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "struktur-buat-folder-komponen",
 "langs": {
  "id": {
   "title": "Cara Buat Folder Komponen untuk Bagian yang Dipakai Ulang",
   "desc": "Tata cara menaruh header, footer, dan card yang dipakai di banyak halaman Clincoo ke folder components.",
   "content": "<p class=\"mb-4\">Menyalin header ke setiap HTML membuat perubahan harus diulang berkali-kali.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu folder per komponen</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat components/header/ dengan index.html atau partial, dan css-nya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Include atau salin dengan hati-hati</h2><p class=\"mb-4\">Jika memakai include, pastikan path relatif benar. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bahwa perubahan header muncul di semua halaman. Catat pola di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTML structure",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content",
   "sourceSnippet": "Reusable parts of a site are easier to maintain in their own folders.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Create a Components Folder for Reused Parts",
   "desc": "How to place headers, footers, and cards used on many Clincoo pages into a components folder.",
   "content": "<p class=\"mb-4\">Copying the header into every HTML file means every change must be repeated.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One folder per component</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create components/header/ with its HTML or partial and its CSS.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Include or copy carefully</h2><p class=\"mb-4\">If you use includes, confirm relative paths are correct. Test in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> that a header change appears on all pages. Note the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTML structure",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content",
   "sourceSnippet": "Reusable parts of a site are easier to maintain in their own folders.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
}
 ]
};
