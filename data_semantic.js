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
 ]
};
