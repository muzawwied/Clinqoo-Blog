// Clincoo Docs — kategori HTML Semantik (Oktober 2026)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["semantic"] = {
 "names": {
  "id": "HTML Semantik",
  "en": "Semantic HTML"
 },
 "articles": [
  {
   "id": "semantic-tombol-bukan-div-klik",
   "langs": {
    "id": {
     "title": "Cara Pakai Button, Bukan Div yang Diklik",
     "desc": "Tata cara memakai elemen button untuk aksi di halaman Clincoo supaya keyboard dan pembaca layar tetap bisa memicunya.",
     "content": "<p class=\"mb-4\">Div dengan onclick terlihat seperti tombol, tetapi tidak fokus lewat keyboard dan tidak punya peran tombol. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pakai button untuk aksi yang tidak pindah halaman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pilih elemen yang sesuai</h2><p class=\"mb-4\">Pakai a href kalau tujuannya pindah URL. Pakai button type=\"button\" kalau tujuannya membuka modal, mengirim filter, atau menyalin teks. Jangan taruh button di dalam a, atau sebaliknya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri nama yang terdengar</h2><p class=\"mb-4\">Teks tombol harus menjelaskan aksi: Simpan draf, bukan OK. Kalau tombol hanya ikon, tambahkan aria-label. Jangan mengandalkan warna saja untuk membedakan tombol utama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji tanpa mouse</h2><p class=\"mb-4\">Tab sampai tombol fokus, lalu tekan Enter atau Space. Kalau tidak terjadi apa-apa, elemen itu bukan button. Setelah beres, cek lagi di preview lebar ponsel di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> karena area sentuh yang terlalu kecil sering terlewat.</p>",
     "source": "MDN — The Button element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button",
     "sourceSnippet": "The button element represents a clickable button, which can be used in forms or anywhere a standard button is needed.",
     "source2": "WAI-ARIA — button pattern",
     "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Use a Button Instead of a Clickable Div",
     "desc": "How to use a button element for actions on a Clincoo page so keyboard and screen readers can still trigger it.",
     "content": "<p class=\"mb-4\">A div with onclick looks like a button, but it is not keyboard-focusable and has no button role. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> use a button for actions that do not navigate.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pick the matching element</h2><p class=\"mb-4\">Use an a href when the goal is a new URL. Use button type=\"button\" to open a modal, apply a filter, or copy text. Do not nest a button inside a link, or the reverse.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Name what it does</h2><p class=\"mb-4\">The label should describe the action: Save draft, not OK. If the control is only an icon, add an aria-label. Do not rely on color alone to mark the primary button.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test without a mouse</h2><p class=\"mb-4\">Tab until the control is focused, then press Enter or Space. If nothing happens, it is not a button. After that, check the phone-width preview in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, because a tiny hit area is easy to miss.</p>",
     "source": "MDN — The Button element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button",
     "sourceSnippet": "The button element represents a clickable button, which can be used in forms or anywhere a standard button is needed.",
     "source2": "WAI-ARIA — button pattern",
     "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "semantic-landmark-header-main-footer",
   "langs": {
    "id": {
     "title": "Cara Tandai Header, Main, dan Footer",
     "desc": "Tata cara membungkus halaman Clincoo dengan landmark header, main, dan footer supaya struktur terbaca tanpa mengandalkan div.",
     "content": "<p class=\"mb-4\">Halaman yang hanya berisi div tidak memberi peta ke pembaca layar. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bungkus tiap halaman dengan header, main, dan footer.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu main per halaman</h2><p class=\"mb-4\">main membungkus isi unik: judul, teks, dan formulir. Jangan taruh navigasi situs atau kredit di dalam main. Satu halaman cukup satu main.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Header dan footer yang jelas</h2><p class=\"mb-4\">header memuat logo dan nav. footer memuat tautan kebijakan dan kontak. Kalau ada dua header, misalnya situs dan kartu artikel, beri aria-label yang berbeda supaya tidak bentrok.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di pohon aksesibilitas</h2><p class=\"mb-4\">Buka DevTools, panel Accessibility, lalu lihat landmark. Kamu harus melihat banner atau header, main, dan contentinfo. Kalau tidak ada, elemen itu masih div. Ulangi cek di preview sebelum deploy lewat <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p>",
     "source": "MDN — Document and website structure",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure",
     "sourceSnippet": "HTML has sectioning elements such as header, nav, main, and footer that describe regions of the page.",
     "source2": "W3C — Page structure",
     "source2Url": "https://www.w3.org/WAI/tutorials/page-structure/",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Mark Header, Main, and Footer",
     "desc": "How to wrap a Clincoo page with header, main, and footer landmarks so the structure is readable without a pile of divs.",
     "content": "<p class=\"mb-4\">A page made only of divs gives a screen reader no map. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> wrap each page with header, main, and footer.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One main per page</h2><p class=\"mb-4\">main wraps the unique content: the title, the text, and the form. Do not put site navigation or credits inside main. One page needs one main.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">A clear header and footer</h2><p class=\"mb-4\">header holds the logo and nav. footer holds the policy link and contact. If there are two headers, such as the site and an article card, give them different aria-labels so they do not clash.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the accessibility tree</h2><p class=\"mb-4\">Open DevTools, the Accessibility pane, and look at landmarks. You should see a banner or header, main, and contentinfo. If not, the element is still a div. Check again in preview before you deploy from <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p>",
     "source": "MDN — Document and website structure",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure",
     "sourceSnippet": "HTML has sectioning elements such as header, nav, main, and footer that describe regions of the page.",
     "source2": "W3C — Page structure",
     "source2Url": "https://www.w3.org/WAI/tutorials/page-structure/",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "semantic-daftar-bukan-baris-br",
   "langs": {
    "id": {
     "title": "Cara Buat Daftar, Bukan Baris dengan BR",
     "desc": "Tata cara memakai ul, ol, dan li di halaman Clincoo supaya daftar fitur tetap berurutan dan mudah dibaca.",
     "content": "<p class=\"mb-4\">Beberapa baris teks yang dipisah br bukan daftar. Pembaca layar tidak tahu ada berapa butir. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pakai ul atau ol.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pilih ul atau ol</h2><p class=\"mb-4\">ul untuk butir yang setara, misalnya fitur paket. ol untuk langkah yang harus berurutan, misalnya cara deploy. Setiap butir satu li. Jangan menaruh br di dalam li hanya untuk memalsukan butir baru.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan reset gaya sampai hilang</h2><p class=\"mb-4\">list-style: none boleh untuk menu, tetapi sisakan jarak dan penanda visual. Menghapus padding kiri tanpa pengganti membuat butir menempel ke tepi dan sulit dipindai.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek jumlah butir</h2><p class=\"mb-4\">Di pohon elemen, hitung li. Jumlahnya harus sama dengan yang kamu maksud. Tautan di dalam li tetap boleh. Setelah itu buka preview di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dan pastikan daftar tidak overflow di layar sempit.</p>",
     "source": "MDN — The ul element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul",
     "sourceSnippet": "The ul element represents an unordered list of items, typically rendered as a bulleted list.",
     "source2": "MDN — The ol element",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Build a List Instead of BR Lines",
     "desc": "How to use ul, ol, and li on a Clincoo page so a feature list stays ordered and easy to read.",
     "content": "<p class=\"mb-4\">Several lines split by br are not a list. A screen reader cannot tell how many items there are. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> use ul or ol.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Choose ul or ol</h2><p class=\"mb-4\">ul is for peers, such as plan features. ol is for steps that must stay in order, such as a deploy sequence. Each item is one li. Do not put a br inside an li just to fake another item.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not reset the style into nothing</h2><p class=\"mb-4\">list-style: none is fine for a menu, but keep spacing and a visual marker. Removing left padding with no replacement sticks items to the edge and makes them hard to scan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Count the items</h2><p class=\"mb-4\">In the element tree, count the li elements. The number should match what you intended. A link inside an li is fine. Then open preview in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> and confirm the list does not overflow on a narrow screen.</p>",
     "source": "MDN — The ul element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul",
     "sourceSnippet": "The ul element represents an unordered list of items, typically rendered as a bulleted list.",
     "source2": "MDN — The ol element",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  }
 ,
  {
   "id": "semantic-alt-gambar-bukan-title",
   "langs": {
    "id": {
     "title": "Cara Isi Alt pada Gambar, Bukan Atribut Title",
     "desc": "Tata cara menulis alt yang menjelaskan gambar di halaman Clincoo, bukan mengandalkan atribut title yang sering tidak terbaca.",
     "content": "<p class=\"mb-4\">Atribut title pada gambar bukan pengganti alt. Pembaca layar mengumumkan alt; title sering hanya muncul sebagai tooltip di desktop. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> isi alt setiap kali img punya makna.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis apa yang terlihat</h2><p class=\"mb-4\">Alt yang baik menyebut isi gambar: foto toko di Jalan Malioboro, bukan gambar1.jpg. Jangan mulai dengan kata gambar atau foto kalau konteksnya sudah jelas. Kalau gambar adalah teks dalam bentuk bitmap, salin teks itu ke alt.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kosongkan alt yang murni hiasan</h2><p class=\"mb-4\">Garis dekoratif atau ikon yang sudah punya teks di sampingnya memakai alt kosong: alt=\"\". Jangan menghilangkan atribut alt sama sekali, karena browser akan membacakan nama berkas. Jangan mengulang kalimat yang sama di alt dan di caption.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Matikan jaringan sebentar atau pakai gambar yang sengaja gagal dimuat, lalu baca teks pengganti. Setelah itu buka preview di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dan pastikan alt tidak ikut tampil sebagai tooltip yang menyaingi caption.</p>",
     "source": "MDN — HTML img alt",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt",
     "sourceSnippet": "The alt property of the HTMLImageElement interface defines fallback text for the image.",
     "source2": "MDN — The Image Embed element",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Write Image Alt Text Instead of a Title Attribute",
     "desc": "How to write alt text that describes an image on a Clincoo page, instead of relying on a title attribute that is often not announced.",
     "content": "<p class=\"mb-4\">A title attribute is not a substitute for alt. Screen readers announce alt; title often only appears as a desktop tooltip. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>, fill alt whenever an img carries meaning.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Describe what is visible</h2><p class=\"mb-4\">Good alt names the content: storefront on Malioboro Street, not image1.jpg. Do not start with the word image or photo when the context is already clear. If the image is text rendered as a bitmap, copy that text into alt.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Leave decorative alt empty</h2><p class=\"mb-4\">A decorative rule or an icon that already has adjacent text uses an empty alt: alt=\"\". Do not omit the alt attribute, or the browser may announce the file name. Do not repeat the same sentence in alt and in the caption.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check it in preview</h2><p class=\"mb-4\">Break the image on purpose and read the fallback text. Then open the preview in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> and confirm alt is not showing up as a tooltip that competes with the caption.</p>",
     "source": "MDN — HTML img alt",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt",
     "sourceSnippet": "The alt property of the HTMLImageElement interface defines fallback text for the image.",
     "source2": "MDN — The Image Embed element",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "semantic-bungkus-menu-dengan-nav",
   "langs": {
    "id": {
     "title": "Cara Bungkus Menu dengan Elemen Nav",
     "desc": "Tata cara memakai nav untuk menu utama dan tautan terkait supaya landmark navigasi terbaca di halaman Clincoo.",
     "content": "<p class=\"mb-4\">Div bernama menu tidak memberi landmark navigasi. Elemen nav memberi tahu browser dan pembaca layar bahwa kelompok tautan itu adalah navigasi. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bungkus menu utama dengan nav, bukan div.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu nav untuk satu tujuan</h2><p class=\"mb-4\">Menu header, daftar isi, dan tautan footer boleh masing-masing punya nav. Beri aria-label yang membedakan: Menu utama, Daftar isi, Footer. Jangan membungkus setiap tautan satuan dengan nav-nya sendiri.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Isi nav dengan daftar</h2><p class=\"mb-4\">Taruh tautan di dalam ul dan li supaya urutan dan jumlah item jelas. Tautan halaman aktif boleh memakai aria-current=\"page\". Jangan memakai button untuk pindah halaman kalau tujuannya URL baru — itu tugas a href.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji landmark</h2><p class=\"mb-4\">Di pratinjau, tab melewati menu dan pastikan fokus terlihat. Kalau ada dua nav tanpa label, pembaca layar hanya bilang navigasi dua kali. Cek lagi setelah deploy lewat tautan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> jika menu docs ikut berubah.</p>",
     "source": "MDN — The Navigation element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav",
     "sourceSnippet": "The nav element represents a section of a page whose purpose is to provide navigation links.",
     "source2": "HTML spec — the nav element",
     "source2Url": "https://html.spec.whatwg.org/multipage/sections.html#the-nav-element",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Wrap a Menu in a Nav Element",
     "desc": "How to use nav for the main menu and related links so the navigation landmark is exposed on a Clincoo page.",
     "content": "<p class=\"mb-4\">A div named menu does not create a navigation landmark. The nav element tells the browser and screen readers that the group of links is navigation. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>, wrap the main menu in nav, not a div.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One nav per purpose</h2><p class=\"mb-4\">The header menu, a table of contents, and footer links may each have a nav. Give them distinct aria-label values: Main menu, Contents, Footer. Do not wrap every single link in its own nav.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Put a list inside nav</h2><p class=\"mb-4\">Place links inside ul and li so order and count are clear. The current page link may use aria-current=\"page\". Do not use a button to change pages when the target is a new URL — that is the job of a href.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test the landmark</h2><p class=\"mb-4\">In preview, tab through the menu and confirm the focus ring is visible. Two nav elements without labels are announced only as navigation twice. Recheck after deploy from a link on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> if the docs menu changed too.</p>",
     "source": "MDN — The Navigation element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav",
     "sourceSnippet": "The nav element represents a section of a page whose purpose is to provide navigation links.",
     "source2": "HTML spec — the nav element",
     "source2Url": "https://html.spec.whatwg.org/multipage/sections.html#the-nav-element",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "semantic-figure-dan-figcaption",
   "langs": {
    "id": {
     "title": "Cara Pakai Figure dan Figcaption",
     "desc": "Tata cara mengelompokkan gambar, diagram, atau cuplikan kode dengan caption memakai figure di proyek Clincoo.",
     "content": "<p class=\"mb-4\">Caption yang hanya berupa paragraf di bawah img mudah terpisah saat layout berubah. Figure mengikat konten dan keterangannya. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pakai figure untuk gambar, diagram, atau cuplikan yang dirujuk dari teks.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu figure, satu satuan</h2><p class=\"mb-4\">Masukkan img lalu figcaption. Figcaption boleh di awal atau akhir figure. Tulis keterangan yang menambah makna, bukan mengulang alt. Alt tetap menjelaskan gambar jika gambar gagal dimuat; caption menjelaskan peran gambar di artikel.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan untuk semua gambar</h2><p class=\"mb-4\">Ikon tombol dan logo header tidak perlu figure. Figure untuk konten yang bisa dipindah ke lampiran tanpa merusak alur kalimat. Kalau teks berkata lihat gambar di atas, pastikan figcaption punya nomor atau nama yang bisa dirujuk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek urutan baca</h2><p class=\"mb-4\">Baca halaman tanpa CSS. Caption harus tetap menempel pada gambar di sumber HTML, bukan hanya secara visual di grid. Simpan lalu buka live preview di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pada lebar ponsel supaya caption tidak terpotong.</p>",
     "source": "MDN — The Figure element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure",
     "sourceSnippet": "The figure element represents self-contained content, optionally with a caption.",
     "source2": "MDN — The Figcaption element",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Use Figure and Figcaption",
     "desc": "How to group an image, diagram, or code sample with its caption using figure in a Clincoo project.",
     "content": "<p class=\"mb-4\">A caption that is only a paragraph under an img splits away when the layout changes. Figure binds the content to its caption. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>, use figure for an image, diagram, or snippet the prose refers to.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One figure, one unit</h2><p class=\"mb-4\">Put the img, then figcaption. Figcaption may come first or last inside figure. Write a caption that adds meaning, not a repeat of alt. Alt still describes the image if it fails to load; the caption explains the image role in the article.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Not for every image</h2><p class=\"mb-4\">A button icon and the header logo do not need figure. Use figure for content that could move to an appendix without breaking the sentence flow. If the text says see the figure above, give figcaption a number or name you can cite.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check reading order</h2><p class=\"mb-4\">Read the page without CSS. The caption must stay attached to the image in the HTML source, not only visually in a grid. Save and open live preview in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> at phone width so the caption is not clipped.</p>",
     "source": "MDN — The Figure element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure",
     "sourceSnippet": "The figure element represents self-contained content, optionally with a caption.",
     "source2": "MDN — The Figcaption element",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "semantic-tandai-waktu-dengan-time",
   "langs": {
    "id": {
     "title": "Cara Tandai Waktu dengan Elemen Time",
     "desc": "Tata cara memakai time dan atribut datetime supaya tanggal di halaman Clincoo bisa dibaca mesin dan manusia.",
     "content": "<p class=\"mb-4\">Teks 3 Okt 2026 enak dibaca, tetapi sulit dipilah skrip. Elemen time menyimpan nilai mesin di datetime dan teks manusia di dalamnya. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tandai tanggal rilis, jadwal, dan stempel artikel dengan time.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Isi datetime yang valid</h2><p class=\"mb-4\">Tanggal kalender memakai YYYY-MM-DD, misalnya datetime=\"2026-10-03\". Waktu setempat boleh ditambah jam dan offset: 2026-10-03T23:00+07:00 untuk WIB. Jangan menulis kemarin atau minggu depan di datetime.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Teks terlihat tetap manusiawi</h2><p class=\"mb-4\">Isi elemen boleh 3 Oktober 2026 atau 3 Okt. Jangan menampilkan string ISO mentah kalau audiensnya pembaca umum. Satu time untuk satu momen; rentang tanggal memakai dua elemen time.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek zona waktu</h2><p class=\"mb-4\">Kalau acara punya jam, sebut zona di teks: 23.00 WIB. Tanpa offset, mesin tidak tahu apakah itu UTC. Simpan dan buka preview di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> untuk memastikan tanggal tidak terpotong di kartu sempit.</p>",
     "source": "MDN — The Time element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time",
     "sourceSnippet": "The time element represents a specific period in time. It may include the datetime attribute to translate dates into machine-readable format.",
     "source2": "HTML spec — the time element",
     "source2Url": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Mark a Date with the Time Element",
     "desc": "How to use time and the datetime attribute so a date on a Clincoo page is readable by machines and people.",
     "content": "<p class=\"mb-4\">The text 3 Oct 2026 is easy to read and hard for a script to parse. The time element stores a machine value in datetime and human text inside. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>, mark release dates, schedules, and article stamps with time.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use a valid datetime</h2><p class=\"mb-4\">A calendar date uses YYYY-MM-DD, for example datetime=\"2026-10-03\". A local time may add hours and an offset: 2026-10-03T23:00+07:00 for WIB. Do not put yesterday or next week in datetime.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep the visible text human</h2><p class=\"mb-4\">The element text may be 3 October 2026 or 3 Oct. Do not show a raw ISO string to a general audience. One time element marks one moment; a date range uses two time elements.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the time zone</h2><p class=\"mb-4\">If the event has a clock time, name the zone in the text: 23:00 WIB. Without an offset, a machine cannot tell whether that is UTC. Save and open preview in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> so the date is not clipped on a narrow card.</p>",
     "source": "MDN — The Time element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time",
     "sourceSnippet": "The time element represents a specific period in time. It may include the datetime attribute to translate dates into machine-readable format.",
     "source2": "HTML spec — the time element",
     "source2Url": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "semantic-blockquote-dan-cite",
   "langs": {
    "id": {
     "title": "Cara Pakai Blockquote dan Cite",
     "desc": "Tata cara menandai kutipan dengan blockquote dan sumber dengan cite supaya tidak tertukar dengan teks biasa di Clincoo.",
     "content": "<p class=\"mb-4\">Paragraf yang hanya diberi tanda kutip atau border kiri tetap teks biasa bagi mesin. Blockquote menandai kutipan dari sumber lain. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pakai blockquote untuk kutipan, bukan untuk catatan penulis.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cite untuk judul karya</h2><p class=\"mb-4\">Nama buku, artikel, atau spesifikasi dibungkus cite. Atribut cite pada blockquote, kalau dipakai, berisi URL sumber, bukan teks terlihat. Tampilkan sumber yang bisa dibaca di footer blockquote, misalnya dalam figcaption atau paragraf kredit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan untuk indent biasa</h2><p class=\"mb-4\">Testimoni yang kamu tulis sendiri bukan kutipan pihak ketiga. Penekanan visual cukup dengan CSS pada aside atau p. Blockquote yang salah membuat pembaca layar mengumumkan kutipan pada teks yang bukan kutipan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sambungkan ke sumber</h2><p class=\"mb-4\">Kalau mengutip dokumentasi, tautkan judulnya. Simpan lalu cek di preview <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bahwa garis kutipan tidak mendorong teks keluar layar ponsel.</p>",
     "source": "MDN — The Blockquote element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote",
     "sourceSnippet": "The blockquote element indicates that the enclosed text is an extended quotation.",
     "source2": "MDN — The Citation element",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Use Blockquote and Cite",
     "desc": "How to mark a quotation with blockquote and its source with cite so it is not confused with body text in Clincoo.",
     "content": "<p class=\"mb-4\">A paragraph with quotation marks or a left border is still ordinary text to a machine. Blockquote marks a quotation from another source. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>, use blockquote for quotations, not for the author notes.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cite for the title of a work</h2><p class=\"mb-4\">Wrap a book, article, or specification title in cite. The cite attribute on blockquote, if used, is a source URL, not visible text. Show a readable credit in the blockquote footer, for example in a figcaption or a credit paragraph.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not use it for indentation</h2><p class=\"mb-4\">A testimonial you wrote yourself is not a third-party quotation. Visual emphasis belongs in CSS on an aside or a p. A wrong blockquote makes a screen reader announce a quotation on text that is not one.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Link the source</h2><p class=\"mb-4\">When quoting documentation, link the title. Save and check in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview that the quote rule does not push text off a phone screen.</p>",
     "source": "MDN — The Blockquote element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote",
     "sourceSnippet": "The blockquote element indicates that the enclosed text is an extended quotation.",
     "source2": "MDN — The Citation element",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  }
]
};
