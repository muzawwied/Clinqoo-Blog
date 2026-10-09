// Clincoo Docs — kategori Scrollbar (9 Oktober 2026, 22:00 WIB) — 4 artikel baru
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["scrollbar"] = {
 "names": { "id": "Scrollbar", "en": "Scrollbar" },
 "articles": [
{
 "id": "scrollbar-gutter-stable-cegah-geser-layout",
 "langs": {
  "id": {
   "title": "Cara Cegah Layout Bergeser dengan scrollbar-gutter",
   "desc": "Tata cara menyiapkan ruang scrollbar Clincoo supaya konten tidak meloncat saat overflow muncul.",
   "content": "<p class=\"mb-4\">Tata cara menyiapkan ruang scrollbar Clincoo supaya konten tidak meloncat saat overflow muncul.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sediakan gutter sebelum overflow ada</h2><p class=\"mb-4\">Scrollbar klasik memakan lebar saat konten lebih tinggi dari viewport. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set scrollbar-gutter: stable pada html. both-edges hanya jika kedua sisi memang butuh simetri.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji buka modal yang mengunci body</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka dialog yang menambah overflow: hidden pada body. Header dan judul tidak boleh geser ke kanan. Jika masih geser, gutter belum dihitung karena scrollbar overlay. Catat hasilnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scrollbar-gutter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter",
   "sourceSnippet": "The scrollbar-gutter CSS property allows authors to reserve space for the scrollbar.",
   "source2": "CSS Overflow Module — scrollbar-gutter",
   "source2Url": "https://www.w3.org/TR/css-overflow-3/#scrollbar-gutter-property",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Stop Layout Shift with scrollbar-gutter",
   "desc": "How to reserve scrollbar space in Clincoo so content does not jump when overflow appears.",
   "content": "<p class=\"mb-4\">How to reserve scrollbar space in Clincoo so content does not jump when overflow appears.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reserve the gutter before overflow exists</h2><p class=\"mb-4\">A classic scrollbar takes width when content is taller than the viewport. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set scrollbar-gutter: stable on html. Use both-edges only when both sides really need symmetry.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test a modal that locks the body</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open a dialog that sets overflow: hidden on the body. The header and title must not shift right. If they still shift, the gutter is not counted because the scrollbar is overlay. Record the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scrollbar-gutter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter",
   "sourceSnippet": "The scrollbar-gutter CSS property allows authors to reserve space for the scrollbar.",
   "source2": "CSS Overflow Module — scrollbar-gutter",
   "source2Url": "https://www.w3.org/TR/css-overflow-3/#scrollbar-gutter-property",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "scrollbar-sembunyikan-tanpa-overflow-hidden",
 "langs": {
  "id": {
   "title": "Cara Sembunyikan Scrollbar Tanpa Mengunci Scroll",
   "desc": "Tata cara menyembunyikan scrollbar Clincoo tetap bisa digulir keyboard dan roda tetikus.",
   "content": "<p class=\"mb-4\">Tata cara menyembunyikan scrollbar Clincoo tetap bisa digulir keyboard dan roda tetikus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sembunyikan cat, jangan matikan overflow</h2><p class=\"mb-4\">overflow: hidden menghentikan gulir, termasuk untuk pembaca yang mengandalkan keyboard. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pakai scrollbar-width: none dan pseudo scrollbar WebKit display none pada panel daftar, dengan overflow-y: auto tetap aktif.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pastikan fokus masih bisa diikuti</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tab ke item di bawah lipatan. Panel harus menggulir mengikuti fokus. Jika item terpotong dan tidak bergerak, overflow ikut dimatikan. Simpan pengecualian di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scrollbar-width",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width",
   "sourceSnippet": "The scrollbar-width property sets the thickness of an element's scrollbars when they are shown.",
   "source2": "MDN — overflow",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Hide a Scrollbar Without Locking Scroll",
   "desc": "How to hide a Clincoo scrollbar while keyboard and wheel scrolling still work.",
   "content": "<p class=\"mb-4\">How to hide a Clincoo scrollbar while keyboard and wheel scrolling still work.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hide the paint, do not disable overflow</h2><p class=\"mb-4\">overflow: hidden stops scrolling, including for people who rely on the keyboard. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> use scrollbar-width: none and a WebKit scrollbar pseudo with display none on the list panel, and keep overflow-y: auto.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Make sure focus can still be followed</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tab to an item below the fold. The panel must scroll to follow focus. If the item is clipped and does not move, overflow was disabled too. Keep the exception on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scrollbar-width",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width",
   "sourceSnippet": "The scrollbar-width property sets the thickness of an element's scrollbars when they are shown.",
   "source2": "MDN — overflow",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "scrollbar-kustom-webkit-dan-standar",
 "langs": {
  "id": {
   "title": "Cara Gaya Scrollbar di WebKit dan Standar",
   "desc": "Tata cara mewarnai thumb scrollbar Clincoo tanpa mengandalkan satu prefiks saja.",
   "content": "<p class=\"mb-4\">Tata cara mewarnai thumb scrollbar Clincoo tanpa mengandalkan satu prefiks saja.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis properti standar dulu</h2><p class=\"mb-4\">Chrome masih memakai pseudo scrollbar WebKit, Firefox memakai scrollbar-color. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis scrollbar-color: #57534e #f5f5f4 lalu lebar pseudo 10px dan thumb background #57534e dengan radius penuh.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jaga kontras thumb dan track</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir daftar proyek di Firefox dan Chrome. Thumb harus terlihat di atas track terang, dan lebar tidak mendorong kartu. Jika thumb hilang di satu browser, properti standar belum dipasang. Catat pasangan yang lolos di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scrollbar-color",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color",
   "sourceSnippet": "The scrollbar-color CSS property sets the color of the scrollbar track and thumb.",
   "source2": "MDN — ::-webkit-scrollbar",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Style a Scrollbar in WebKit and the Standard",
   "desc": "How to color a Clincoo scrollbar thumb without relying on one prefix only.",
   "content": "<p class=\"mb-4\">How to color a Clincoo scrollbar thumb without relying on one prefix only.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write the standard property first</h2><p class=\"mb-4\">Chrome still uses the WebKit scrollbar pseudo, Firefox uses scrollbar-color. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write scrollbar-color: #57534e #f5f5f4 then a 10px pseudo width and a thumb background of #57534e with a full radius.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep thumb and track contrast</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll the project list in Firefox and Chrome. The thumb must show on the light track, and the width must not push cards. If the thumb vanishes in one browser, the standard property is missing. Note the pair that passed on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scrollbar-color",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color",
   "sourceSnippet": "The scrollbar-color CSS property sets the color of the scrollbar track and thumb.",
   "source2": "MDN — ::-webkit-scrollbar",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "scrollbar-jangan-kunci-scroll-latar-modal",
 "langs": {
  "id": {
   "title": "Cara Kunci Scroll Latar Saat Modal Tanpa Hilang Posisi",
   "desc": "Tata cara menahan body Clincoo saat dialog terbuka tanpa melompat ke atas halaman.",
   "content": "<p class=\"mb-4\">Tata cara menahan body Clincoo saat dialog terbuka tanpa melompat ke atas halaman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan scrollY sebelum mengunci</h2><p class=\"mb-4\">overflow: hidden pada body sering mengembalikan scroll ke 0. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan window.scrollY, set body position fixed dengan top negatif sebesar scroll, width 100 persen, dan sisakan scrollbar-gutter: stable.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kembalikan posisi saat dialog ditutup</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir ke tengah daftar, buka dialog, lalu tutup. Halaman harus kembali ke item yang sama, bukan ke hero. Jika loncat, top tidak dikembalikan. Simpan urutan buka-tutup di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — position",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
   "sourceSnippet": "An element with position fixed is positioned relative to the viewport and is taken out of normal flow.",
   "source2": "MDN — Window.scrollY",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Lock Background Scroll in a Modal Without Losing Position",
   "desc": "How to hold the Clincoo body while a dialog is open without jumping to the top of the page.",
   "content": "<p class=\"mb-4\">How to hold the Clincoo body while a dialog is open without jumping to the top of the page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Store scrollY before locking</h2><p class=\"mb-4\">overflow: hidden on the body often resets scroll to 0. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> store window.scrollY, set body to position fixed with a negative top equal to the scroll, width 100 percent, and keep scrollbar-gutter: stable.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Restore position when the dialog closes</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll to the middle of the list, open a dialog, then close it. The page must return to the same item, not the hero. If it jumps, top was not restored. Keep the open-close order on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — position",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
   "sourceSnippet": "An element with position fixed is positioned relative to the viewport and is taken out of normal flow.",
   "source2": "MDN — Window.scrollY",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
