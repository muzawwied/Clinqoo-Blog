// Clincoo Docs — kategori Template (9 Oktober 2026, 15:00 WIB) — tambah 5 artikel
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
},
{
 "id": "template-ganti-favicon-dan-og-image",
 "langs": {
  "id": {
   "title": "Cara Ganti Favicon dan Gambar OG pada Template",
   "desc": "Tata cara menukar ikon tab dan gambar pratinjau sosial bawaan template sebelum situs Clincoo dibagikan.",
   "content": "<p class=\"mb-4\">Template sering menyertakan favicon demo dan gambar Open Graph merek orang lain. Kalau tidak diganti, tab browser dan unggahan chat menampilkan identitas yang salah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti file, jangan hanya ganti nama</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> unggah favicon.ico atau PNG 32px, lalu arahkan link rel icon ke path baru. Gambar OG idealnya 1200x630, di bawah 300KB, dan disimpan di folder gambar proyek, bukan hotlink ke CDN template.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek pratinjau sebelum dibagikan</h2><p class=\"mb-4\">Buka preview di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, lihat ikon tab, lalu salin URL halaman ke alat debug tautan. Pastikan og:image, og:title, dan twitter:card menunjuk ke asetmu. Catat path final di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya halaman turunan tidak kembali memakai gambar demo.</p>",
   "source": "MDN — link rel icon",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel",
   "sourceSnippet": "The icon link relation points to a resource that represents the page in the user interface, such as a favicon.",
   "source2": "Open Graph protocol",
   "source2Url": "https://ogp.me/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Replace a Template Favicon and OG Image",
   "desc": "How to swap the template tab icon and social preview image before a Clincoo site is shared.",
   "content": "<p class=\"mb-4\">Templates often ship a demo favicon and someone else's Open Graph image. If you leave them, the browser tab and chat unfurls show the wrong identity.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Replace the file, not only the name</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> upload favicon.ico or a 32px PNG, then point the icon link at the new path. The OG image should be 1200x630, under 300KB, and stored in the project image folder, not hotlinked from the template CDN.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview before sharing</h2><p class=\"mb-4\">Open the preview in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, look at the tab icon, then paste the page URL into a link debugger. Confirm og:image, og:title, and twitter:card point at your assets. Note the final paths on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so child pages do not fall back to the demo image.</p>",
   "source": "MDN — link rel icon",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel",
   "sourceSnippet": "The icon link relation points to a resource that represents the page in the user interface, such as a favicon.",
   "source2": "Open Graph protocol",
   "source2Url": "https://ogp.me/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "template-rapikan-hierarki-heading",
 "langs": {
  "id": {
   "title": "Cara Rapikan Hierarki Heading Setelah Pakai Template",
   "desc": "Tata cara memastikan satu h1 dan heading berurutan saat section template digabung di Clincoo.",
   "content": "<p class=\"mb-4\">Section template sering masing-masing membawa h1. Setelah digabung, halaman punya beberapa judul utama dan outline aksesibilitas rusak.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu h1, lalu turun bertahap</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> sisakan satu h1 untuk judul halaman. Section berikutnya pakai h2, subbagian h3. Jangan loncat dari h2 ke h4 hanya karena class visual template memakai ukuran itu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pisahkan gaya dan level</h2><p class=\"mb-4\">Kalau tampilan harus tetap besar, pindahkan ukuran ke class, bukan ke level tag. Cek outline di panel aksesibilitas preview <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Simpan pola heading yang lolos di catatan <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum menduplikasi halaman lain.</p>",
   "source": "MDN — heading elements",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements",
   "sourceSnippet": "Heading elements should be used to describe the document outline, not only to change font size.",
   "source2": "web.dev — headings",
   "source2Url": "https://web.dev/learn/html/headings",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Fix Heading Hierarchy After Using a Template",
   "desc": "How to keep a single h1 and sequential headings when template sections are combined in Clincoo.",
   "content": "<p class=\"mb-4\">Template sections often each include an h1. After you combine them, the page has several main titles and the accessibility outline breaks.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One h1, then step down</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> keep a single h1 for the page title. Later sections use h2, and subsections use h3. Do not jump from h2 to h4 only because a template visual class uses that size.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Separate style from level</h2><p class=\"mb-4\">If the look must stay large, move the size into a class, not the tag level. Check the outline in the accessibility pane of the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview. Save the heading pattern that passes in <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> notes before duplicating other pages.</p>",
   "source": "MDN — heading elements",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements",
   "sourceSnippet": "Heading elements should be used to describe the document outline, not only to change font size.",
   "source2": "web.dev — headings",
   "source2Url": "https://web.dev/learn/html/headings",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "template-nonaktifkan-aksi-form-demo",
 "langs": {
  "id": {
   "title": "Cara Nonaktifkan Aksi Form Demo pada Template",
   "desc": "Tata cara mengganti action, method, dan endpoint contoh pada form template sebelum pengunjung mengirim data sungguhan.",
   "content": "<p class=\"mb-4\">Form kontak template sering mengarah ke formspree demo, mailto palsu, atau action hash. Data pengunjung bisa hilang atau masuk ke akun orang lain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti endpoint sebelum tombol diaktifkan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> cari tag form. Ganti action ke endpoint milikmu, set method yang sesuai, dan beri name pada setiap input. Hapus onsubmit yang hanya menampilkan alert demo.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji kirim dan pesan gagal</h2><p class=\"mb-4\">Dari preview <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> kirim isian uji, lalu cek apakah balasan sukses dan gagal terlihat. Jangan deploy selama action masih berisi domain template. Catat endpoint final di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> agar salinan halaman tidak mengembalikan form demo.</p>",
   "source": "MDN — form element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
   "sourceSnippet": "The action attribute defines where form data is sent when the form is submitted.",
   "source2": "web.dev — forms",
   "source2Url": "https://web.dev/learn/forms",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Disable a Template Demo Form Action",
   "desc": "How to replace the sample action, method, and endpoint on a template form before visitors submit real data.",
   "content": "<p class=\"mb-4\">Template contact forms often point at a demo Formspree, a fake mailto, or a hash action. Visitor data can vanish or land in someone else's account.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Replace the endpoint before enabling the button</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> find the form tag. Point action at your endpoint, set the matching method, and give every input a name. Remove onsubmit handlers that only show a demo alert.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test submit and failure messages</h2><p class=\"mb-4\">From the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview send a test entry, then check that success and failure feedback are visible. Do not deploy while action still contains the template domain. Record the final endpoint on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so page copies do not restore the demo form.</p>",
   "source": "MDN — form element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
   "sourceSnippet": "The action attribute defines where form data is sent when the form is submitted.",
   "source2": "web.dev — forms",
   "source2Url": "https://web.dev/learn/forms",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "template-hapus-section-tanpa-pecah-grid",
 "langs": {
  "id": {
   "title": "Cara Hapus Section Template Tanpa Memecah Grid",
   "desc": "Tata cara menghapus blok yang tidak dipakai tanpa merusak grid, flex, atau penutup tag di Clincoo.",
   "content": "<p class=\"mb-4\">Menghapus separuh section template sering meninggalkan div terbuka, sehingga grid di bawahnya pindah ke kolom yang salah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hapus satu blok utuh</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> lipat section dari tag pembuka sampai penutup yang sejajar. Hapus sekaligus, termasuk komentar penanda awal dan akhir. Jangan menghapus hanya isi kalau parent grid mengandalkan jumlah anak.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek sisa kolom</h2><p class=\"mb-4\">Setelah hapus, lihat preview desktop dan ponsel di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Kalau grid-cols-3 kehilangan satu kartu, ubah ke grid-cols-2 atau biarkan auto-fit. Validator HTML membantu menemukan tag yatim. Simpan pola hapus yang aman di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS grid",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",
   "sourceSnippet": "Grid layout places items into rows and columns defined on the container, so removing a child changes how the track fills.",
   "source2": "web.dev — layout",
   "source2Url": "https://web.dev/learn/css/grid",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Remove a Template Section Without Breaking the Grid",
   "desc": "How to delete an unused block without breaking grid, flex, or closing tags in Clincoo.",
   "content": "<p class=\"mb-4\">Deleting half a template section often leaves an open div, so the grid below shifts into the wrong column.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Remove one whole block</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> fold the section from its opening tag to the matching close. Delete it in one step, including the start and end marker comments. Do not delete only the inner content if the parent grid depends on the child count.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the remaining columns</h2><p class=\"mb-4\">After the delete, review desktop and phone previews in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. If grid-cols-3 loses one card, switch to grid-cols-2 or auto-fit. An HTML validator helps find orphan tags. Save the safe delete pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS grid",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",
   "sourceSnippet": "Grid layout places items into rows and columns defined on the container, so removing a child changes how the track fills.",
   "source2": "web.dev — layout",
   "source2Url": "https://web.dev/learn/css/grid",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "template-set-canonical-halaman-turunan",
 "langs": {
  "id": {
   "title": "Cara Set Canonical pada Halaman Turunan Template",
   "desc": "Tata cara mengisi link canonical yang masih menunjuk ke domain demo template di setiap halaman Clincoo.",
   "content": "<p class=\"mb-4\">Halaman hasil duplikat template kadang membawa canonical ke situs pembuat template. Mesin telusur lalu menganggap halamanmu salinan, bukan sumber.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu canonical per URL jadi</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> cari link rel canonical. Ganti href ke URL final halaman itu, dengan https dan tanpa parameter uji. Halaman beranda dan halaman dalam tidak boleh berbagi canonical yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Samakan dengan yang dibagikan</h2><p class=\"mb-4\">Setelah deploy dari <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, buka sumber halaman live dan cocokkan canonical dengan URL di bilah alamat. Catat pola path di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya salinan berikutnya tidak mewarisi domain demo.</p>",
   "source": "Google Search Central — canonical",
   "sourceUrl": "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls",
   "sourceSnippet": "A canonical URL is the URL of the page that Google thinks is most representative of a set of duplicate pages.",
   "source2": "MDN — link rel canonical",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set Canonical URLs on Template Child Pages",
   "desc": "How to fill canonical links that still point at the template demo domain on every Clincoo page.",
   "content": "<p class=\"mb-4\">Duplicated template pages sometimes keep a canonical pointing at the template author's site. Search engines then treat your page as a copy, not the source.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One canonical per final URL</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> find the canonical link. Set href to that page's final URL, with https and without test parameters. The home page and inner pages must not share the same canonical.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match what you share</h2><p class=\"mb-4\">After deploy from <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, view the live page source and match the canonical to the address bar. Record the path pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next copy does not inherit the demo domain.</p>",
   "source": "Google Search Central — canonical",
   "sourceUrl": "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls",
   "sourceSnippet": "A canonical URL is the URL of the page that Google thinks is most representative of a set of duplicate pages.",
   "source2": "MDN — link rel canonical",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
