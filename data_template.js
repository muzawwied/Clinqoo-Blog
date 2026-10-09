// Clincoo Docs — kategori Template (9 Oktober 2026, 14:00 WIB) — 3 artikel baru
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["template"] = {
 "names": { "id": "Template", "en": "Template" },
 "articles": [
{
 "id": "template-ganti-placeholder-sebelum-publish",
 "langs": {
  "id": {
   "title": "Cara Ganti Teks Placeholder Template Sebelum Terbit",
   "desc": "Tata cara menyapu judul, nama merek, dan lorem ipsum bawaan template sebelum situs Clincoo dipublikasikan.",
   "content": "<p class=\"mb-4\">Template yang diduplikasi sering masih memuat nama produk contoh, nomor telepon palsu, dan lorem ipsum. Mesin telusur dan pengunjung menganggap itu konten jadi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sapu string contoh</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> cari lorem, Your Brand, example.com, dan 555-. Ganti dengan nama proyek, kota, dan tautan nyata. Judul halaman dan meta description tidak boleh sama dengan template asal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek pratinjau dua bahasa</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka pratinjau ID dan EN. Placeholder bahasa Inggris yang tertinggal di halaman Indonesia tetap terlihat. Catat daftar yang sudah diganti di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum deploy.</p>",
   "source": "MDN — meta description",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name",
   "sourceSnippet": "The description meta name summarizes the page; unique copy should replace template placeholders.",
   "source2": "web.dev — informative titles",
   "source2Url": "https://web.dev/learn/html/metadata",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Replace Template Placeholder Text Before Publish",
   "desc": "How to sweep sample brand names, fake phones, and lorem ipsum before a Clincoo site goes live.",
   "content": "<p class=\"mb-4\">A duplicated template often still contains a sample product name, a fake phone number, and lorem ipsum. Search engines and visitors treat that as finished content.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sweep sample strings</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> search for lorem, Your Brand, example.com, and 555-. Replace them with the real project name, city, and links. The page title and meta description must not match the source template.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check both language previews</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the ID and EN previews. English placeholders left on the Indonesian page are still visible. Record what you replaced on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before deploy.</p>",
   "source": "MDN — meta name",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name",
   "sourceSnippet": "The description meta name summarizes the page; unique copy should replace template placeholders.",
   "source2": "web.dev — informative titles",
   "source2Url": "https://web.dev/learn/html/metadata",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "template-perbaiki-path-aset-setelah-duplikat",
 "langs": {
  "id": {
   "title": "Cara Perbaiki Path Aset Setelah Template Diduplikat",
   "desc": "Tata cara menormalkan path gambar dan CSS relatif supaya tidak 404 setelah folder template dipindah.",
   "content": "<p class=\"mb-4\">Duplikat template sering menyimpan src=\"../images/hero.png\" yang benar di folder asal, lalu pecah setelah proyek dipindah satu tingkat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ubah ke path dari root</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ganti path relatif yang naik folder menjadi path dari root proyek, misalnya /images/hero.png. CSS url() ikut disapu, termasuk font dan ikon. Jangan tinggalkan path absolut ke domain contoh.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji Network 404</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka Network dan muat ulang. Filter status 404. Setiap gambar, font, dan stylesheet harus 200. Simpan daftar path final di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — URL path",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL",
   "sourceSnippet": "A URL path points at a resource; moving a folder breaks relative paths that climb with ../.",
   "source2": "MDN — CSS url()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/url_function",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Fix Asset Paths After Duplicating a Template",
   "desc": "How to normalize image and CSS paths so they do not 404 after a template folder is moved.",
   "content": "<p class=\"mb-4\">A duplicated template often keeps src=\"../images/hero.png\", which was valid in the source folder and breaks after the project moves one level.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Switch to root paths</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> replace climbing relative paths with project-root paths such as /images/hero.png. Sweep CSS url() too, including fonts and icons. Do not leave absolute paths to the sample domain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test Network 404s</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open Network and reload. Filter status 404. Every image, font, and stylesheet should be 200. Save the final path list on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — What is a URL",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL",
   "sourceSnippet": "A URL path points at a resource; moving a folder breaks relative paths that climb with ../.",
   "source2": "MDN — CSS url()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/url_function",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "template-cek-judul-dan-meta-unik",
 "langs": {
  "id": {
   "title": "Cara Buat Judul dan Meta Unik pada Template",
   "desc": "Tata cara mengganti title dan description yang masih sama di setiap halaman hasil duplikat template.",
   "content": "<p class=\"mb-4\">Halaman Tentang, Harga, dan Kontak dari satu template sering berbagi title yang sama. Itu membuat hasil telusur tidak bisa dibedakan dan kanibal satu sama lain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu title per halaman</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis title yang menyebut isi halaman, bukan hanya nama merek. Description satu sampai dua kalimat, beda dari halaman lain, tanpa mengulang lorem. Panjang title kira-kira di bawah 60 karakter.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan sebelum deploy</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka tiga halaman dan salin title dari tab. Tidak boleh ada yang identik. Simpan pasangan title dan description di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebagai daftar periksa template berikutnya.</p>",
   "source": "MDN — title element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/title",
   "sourceSnippet": "The title element is required and should describe the specific document, not a shared template label.",
   "source2": "web.dev — document metadata",
   "source2Url": "https://web.dev/learn/html/metadata",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Give a Template Unique Titles and Meta Descriptions",
   "desc": "How to replace title and description tags that are still identical on every duplicated template page.",
   "content": "<p class=\"mb-4\">About, Pricing, and Contact pages from one template often share the same title. Search results cannot tell them apart, and the pages compete with each other.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One title per page</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write a title that names the page content, not only the brand. The description is one or two sentences, different from other pages, with no lorem. Keep the title under about 60 characters.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare before deploy</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open three pages and copy the tab titles. None should be identical. Save the title and description pairs on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> as the checklist for the next template.</p>",
   "source": "MDN — title element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/title",
   "sourceSnippet": "The title element is required and should describe the specific document, not a shared template label.",
   "source2": "web.dev — document metadata",
   "source2Url": "https://web.dev/learn/html/metadata",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
