// Clincoo Docs — kategori Overflow (7 Oktober 2026, 23:00 WIB) — 5 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["overflow"] = {
 "names": { "id": "Overflow", "en": "Overflow" },
 "articles": [
{
 "id": "overflow-debug-scroll-horizontal-tersembunyi",
 "langs": {
  "id": {
   "title": "Cara Debug Scroll Horizontal yang Tersembunyi",
   "desc": "Tata cara menemukan elemen yang memaksa scroll horizontal di pratinjau Clincoo tanpa menebak margin.",
   "content": "<p class=\"mb-4\">Scroll horizontal yang muncul tiba-tiba biasanya bukan lebar halaman, melainkan satu anak yang lebih lebar dari induknya. Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> jangan langsung pasang overflow-x: hidden pada body.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur dokumen dan sorot yang meluber</h2><p class=\"mb-4\">Di DevTools bandingkan documentElement.scrollWidth dengan clientWidth. Jalankan skrip singkat yang menandai elemen dengan getBoundingClientRect().right lebih besar dari lebar viewport. Periksa gambar tanpa max-width, pre yang tidak pecah, dan flex item dengan min-width: auto.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Perbaiki sumber, baru kunci sumbu</h2><p class=\"mb-4\">Beri max-width: 100% pada media, overflow-wrap: anywhere pada URL panjang, dan min-width: 0 pada item flex atau grid. Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> uji lagi pada 320px. overflow-x: hidden hanya boleh di kontainer yang memang harus memotong, bukan di seluruh halaman.</p>",
   "source": "MDN — overflow",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "sourceSnippet": "The overflow CSS property sets what to do when content is too big to fit in an element's padding box.",
   "source2": "CSS-Tricks — Finding the cause of horizontal scroll",
   "source2Url": "https://css-tricks.com/finding-fixing-unintended-body-overflow/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug a Hidden Horizontal Scroll",
   "desc": "How to find the element forcing a horizontal scroll in a Clincoo preview without guessing margins.",
   "content": "<p class=\"mb-4\">A sudden horizontal scroll is usually one child wider than its parent, not the page width itself. In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> do not slap overflow-x: hidden on the body.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure the document and highlight the overflow</h2><p class=\"mb-4\">In DevTools compare documentElement.scrollWidth with clientWidth. Run a short script that flags elements whose getBoundingClientRect().right exceeds the viewport. Check images without max-width, pre that cannot wrap, and flex items with min-width: auto.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Fix the source, then lock the axis</h2><p class=\"mb-4\">Set max-width: 100% on media, overflow-wrap: anywhere on long URLs, and min-width: 0 on flex or grid items. In <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> retest at 320px. overflow-x: hidden belongs only on a container that must clip, not on the whole page.</p>",
   "source": "MDN — overflow",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "sourceSnippet": "The overflow CSS property sets what to do when content is too big to fit in an element's padding box.",
   "source2": "CSS-Tricks — Finding the cause of horizontal scroll",
   "source2Url": "https://css-tricks.com/finding-fixing-unintended-body-overflow/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "overflow-hidden-memotong-fokus-dan-tooltip",
 "langs": {
  "id": {
   "title": "Cara Cegah overflow hidden Memotong Fokus dan Tooltip",
   "desc": "Tata cara menjaga cincin fokus dan tooltip Clincoo tetap terlihat saat kartu memakai overflow hidden.",
   "content": "<p class=\"mb-4\">overflow: hidden memotong apa pun yang keluar dari padding box, termasuk outline fokus dan tooltip yang diposisikan di luar kartu. Pengguna keyboard kehilangan penanda, pengguna mouse kehilangan penjelasan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pisahkan yang dipotong dan yang boleh keluar</h2><p class=\"mb-4\">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> taruh overflow: hidden hanya pada lapisan gambar, bukan pada kartu yang memuat tombol. Tooltip dan menu taruh di luar kartu, atau pakai popover yang masuk top layer.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri ruang untuk cincin fokus</h2><p class=\"mb-4\">Jika pemotongan wajib, tambah padding dalam setidaknya 4px dan outline-offset kecil supaya cincin tidak terpotong. Uji Tab di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a> dan pastikan fokus terlihat utuh.</p>",
   "source": "MDN — overflow",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "sourceSnippet": "overflow: hidden clips content and prevents scrolling on that element.",
   "source2": "WCAG — Focus Visible",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Stop overflow hidden from Clipping Focus and Tooltips",
   "desc": "How to keep Clincoo focus rings and tooltips visible when a card uses overflow hidden.",
   "content": "<p class=\"mb-4\">overflow: hidden clips anything outside the padding box, including focus outlines and tooltips positioned outside the card. Keyboard users lose the indicator; mouse users lose the explanation.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Separate what must clip from what may escape</h2><p class=\"mb-4\">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> put overflow: hidden only on the image layer, not on the card that holds buttons. Place tooltips and menus outside the card, or use a popover that joins the top layer.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Leave room for the focus ring</h2><p class=\"mb-4\">If clipping is required, add at least 4px of inner padding and a small outline-offset so the ring is not cut. Tab through <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a> and confirm the focus is fully visible.</p>",
   "source": "MDN — overflow",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "sourceSnippet": "overflow: hidden clips content and prevents scrolling on that element.",
   "source2": "WCAG — Focus Visible",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "overflow-teks-panjang-dengan-ellipsis",
 "langs": {
  "id": {
   "title": "Cara Potong Teks Panjang dengan Ellipsis Tanpa Merusak Akses",
   "desc": "Tata cara memakai text-overflow ellipsis di daftar Clincoo sambil tetap menyediakan teks utuh.",
   "content": "<p class=\"mb-4\">Ellipsis hanya bekerja jika tiga syarat terpenuhi: overflow hidden, white-space nowrap, dan text-overflow ellipsis. Tanpa nowrap, teks tetap turun baris dan elipsis tidak muncul.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Potong tampilan, jangan potong nama</h2><p class=\"mb-4\">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> simpan teks utuh di elemen. Tambah title atau tooltip hanya sebagai pelengkap, bukan satu-satunya salinan. Pembaca layar tetap membaca teks di DOM meski tampilan terpotong.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan andalkan elipsis untuk makna</h2><p class=\"mb-4\">Judul tombol yang terpotong harus tetap punya nama aksesibel utuh. Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> uji pada 320px dan perbesar teks 200%. Jika makna hilang, izinkan bungkus dua baris dengan line-clamp, bukan nowrap.</p>",
   "source": "MDN — text-overflow",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow",
   "sourceSnippet": "text-overflow sets how hidden overflow content is signaled, commonly with an ellipsis.",
   "source2": "WCAG — Text Spacing",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Truncate Long Text with Ellipsis Without Breaking Access",
   "desc": "How to use text-overflow ellipsis in a Clincoo list while still exposing the full text.",
   "content": "<p class=\"mb-4\">Ellipsis works only when three conditions hold: overflow hidden, white-space nowrap, and text-overflow ellipsis. Without nowrap the text wraps and the ellipsis never appears.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Clip the display, not the name</h2><p class=\"mb-4\">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> keep the full text in the element. A title or tooltip is a supplement, not the only copy. Screen readers still read the DOM text even when the visual is clipped.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not rely on ellipsis for meaning</h2><p class=\"mb-4\">A truncated button label still needs a full accessible name. In <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> test at 320px and at 200% text. If meaning disappears, allow two lines with line-clamp instead of nowrap.</p>",
   "source": "MDN — text-overflow",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow",
   "sourceSnippet": "text-overflow sets how hidden overflow content is signaled, commonly with an ellipsis.",
   "source2": "WCAG — Text Spacing",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "overflow-scroll-chaining-di-modal",
 "langs": {
  "id": {
   "title": "Cara Hentikan Scroll Chaining di Modal",
   "desc": "Tata cara menahan scroll di dialog Clincoo supaya halaman di belakang tidak ikut bergulir.",
   "content": "<p class=\"mb-4\">Saat pengguna mencapai ujung daftar di modal, scroll sering loncat ke body. Itu scroll chaining. Menutupinya dengan position fixed pada body juga menggeser halaman dan menghilangkan posisi scroll.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kunci rantai di kontainer yang di-scroll</h2><p class=\"mb-4\">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> beri overscroll-behavior: contain pada panel yang overflow: auto. Dialog HTML sudah menaruh konten di top layer; tetap set overflow pada panel dalam, bukan pada dialog itu sendiri jika tombol kaki harus tetap terlihat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan kunci body tanpa menyimpan posisi</h2><p class=\"mb-4\">Jika browser lama masih merantai, simpan scrollY lalu kunci body. Saat tutup, kembalikan posisi itu. Uji di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> dengan roda tetikus dan geser jari sampai mentok.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "overscroll-behavior sets what a browser does when the boundary of a scrolling area is reached.",
   "source2": "MDN — dialog element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Stop Scroll Chaining in a Modal",
   "desc": "How to keep scroll inside a Clincoo dialog so the page behind does not move.",
   "content": "<p class=\"mb-4\">When someone hits the end of a list inside a modal, scroll often jumps to the body. That is scroll chaining. Covering it with position fixed on the body also shifts the page and loses the scroll position.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Contain the chain on the scrolling panel</h2><p class=\"mb-4\">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> set overscroll-behavior: contain on the panel that has overflow: auto. The HTML dialog already puts content in the top layer; set overflow on the inner panel, not on the dialog itself if the footer buttons must stay visible.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not lock the body without saving position</h2><p class=\"mb-4\">If an old browser still chains, save scrollY then lock the body. On close, restore that position. Test in <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> with a mouse wheel and a finger swipe until the edge.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "overscroll-behavior sets what a browser does when the boundary of a scrolling area is reached.",
   "source2": "MDN — dialog element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "overflow-min-content-pada-grid-dan-flex",
 "langs": {
  "id": {
   "title": "Cara Atasi min-content yang Memaksa Overflow di Grid dan Flex",
   "desc": "Tata cara menenangkan min-width auto yang membuat kartu Clincoo menolak menyusut.",
   "content": "<p class=\"mb-4\">Item grid dan flex punya ukuran minimum otomatis sebesar min-content. Kata panjang, gambar, atau tabel membuat kolom menolak mengecil lalu mendorong halaman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Izinkan item menyusut di bawah konten</h2><p class=\"mb-4\">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> set min-width: 0 pada item kolom, atau minmax(0, 1fr) pada track grid. Jangan hanya memperkecil font. Untuk teks, tambah overflow-wrap: anywhere pada URL dan kode.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji track yang benar-benar menyusut</h2><p class=\"mb-4\">Di DevTools lihat kolom Computed min-width. Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> sempitkan jendela sampai 320px. Jika scroll horizontal hilang dan isi tetap bisa digulir di dalam kartu, perbaikan sudah kena sumbernya.</p>",
   "source": "MDN — min-width",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/min-width",
   "sourceSnippet": "The initial minimum size of flex and grid items is auto, often resolving to the content's minimum size.",
   "source2": "MDN — minmax()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/minmax",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Fix min-content Forcing Overflow in Grid and Flex",
   "desc": "How to tame min-width auto so a Clincoo card is allowed to shrink.",
   "content": "<p class=\"mb-4\">Grid and flex items have an automatic minimum size of min-content. A long word, image, or table makes the column refuse to shrink and pushes the page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Let the item shrink below its content</h2><p class=\"mb-4\">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> set min-width: 0 on the column item, or minmax(0, 1fr) on the grid track. Do not only shrink the font. For text, add overflow-wrap: anywhere on URLs and code.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Confirm the track actually shrinks</h2><p class=\"mb-4\">In DevTools read the computed min-width. In <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> narrow the window to 320px. If the horizontal scroll is gone and the card can still scroll inside, the fix hit the source.</p>",
   "source": "MDN — min-width",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/min-width",
   "sourceSnippet": "The initial minimum size of flex and grid items is auto, often resolving to the content's minimum size.",
   "source2": "MDN — minmax()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/minmax",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
