// Clincoo Docs — kategori Overflow (7 Oktober 2026, 23:00 WIB) — 10 artikel
// Clincoo Docs — tambah 2 artikel Overflow (8 Oktober 2026, 01:00 WIB)
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
},
{
 "id": "overflow-clip-bukan-hidden-untuk-potongan",
 "langs": {
  "id": {
   "title": "Cara Pakai overflow clip agar Potongan Tidak Membuat Scroll Container",
   "desc": "Tata cara mengganti overflow hidden dengan overflow clip di kartu Clincoo supaya fokus dan sticky tidak terjebak.",
   "content": "<p class=\"mb-4\">overflow: hidden memotong isi, tetapi juga membuat scroll container. Itu sering menjebak position: sticky dan memengaruhi rantai scroll. overflow: clip memotong tanpa menjadi scroll container.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bedakan clip dan hidden</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih kartu yang hanya perlu sudut membulat terpotong. Ganti overflow: hidden menjadi overflow: clip. Jangan pakai clip jika kontainer memang harus bisa digulir.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji sticky dan fokus</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir header sticky di dalam kartu. Jika header ikut menggulir hanya karena hidden, clip biasanya mengembalikan perilaku yang diharapkan. Cek juga cincin fokus tidak terpotong di tepi.</p>",
   "source": "MDN — overflow",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "sourceSnippet": "overflow: clip clips content and, unlike hidden, does not create a scroll container.",
   "source2": "MDN — position sticky",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use overflow clip So Cropping Does Not Create a Scroll Container",
   "desc": "How to replace overflow hidden with overflow clip on Clincoo cards so focus and sticky are not trapped.",
   "content": "<p class=\"mb-4\">overflow: hidden crops content, but it also creates a scroll container. That often traps position: sticky and changes scroll chaining. overflow: clip crops without becoming a scroll container.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tell clip from hidden</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> select a card that only needs rounded corners clipped. Replace overflow: hidden with overflow: clip. Do not use clip if the container must actually scroll.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test sticky and focus</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll a sticky header inside the card. If the header only scrolls because of hidden, clip usually restores the expected behavior. Also check that the focus ring is not cropped at the edge.</p>",
   "source": "MDN — overflow",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "sourceSnippet": "overflow: clip clips content and, unlike hidden, does not create a scroll container.",
   "source2": "MDN — position sticky",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "overflow-scrollbar-gutter-stabilkan-lebar",
 "langs": {
  "id": {
   "title": "Cara Stabilkan Lebar dengan scrollbar-gutter saat Overflow Muncul",
   "desc": "Tata cara mencadangkan ruang scrollbar di daftar Clincoo agar layout tidak bergeser saat konten bertambah.",
   "content": "<p class=\"mb-4\">Daftar yang tiba-tiba bisa digulir sering menggeser konten karena scrollbar klasik memakan lebar. scrollbar-gutter mencadangkan ruang itu sebelum overflow terjadi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cadangkan gutter, bukan sembunyikan scroll</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada panel daftar set overflow-y: auto dan scrollbar-gutter: stable. Jangan pakai overflow: hidden hanya untuk menghilangkan pergeseran.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan sebelum dan sesudah isi</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tambah item sampai scroll muncul. Lebar kartu dan tombol aksi harus tetap. Di overlay, both-edges berguna jika scrollbar bisa muncul di kedua sisi.</p>",
   "source": "MDN — scrollbar-gutter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter",
   "sourceSnippet": "scrollbar-gutter reserves space for the scrollbar so layout does not shift when overflow appears.",
   "source2": "MDN — overflow",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Stabilize Width with scrollbar-gutter When Overflow Appears",
   "desc": "How to reserve scrollbar space in a Clincoo list so layout does not shift when content grows.",
   "content": "<p class=\"mb-4\">A list that suddenly becomes scrollable often shifts content because a classic scrollbar consumes width. scrollbar-gutter reserves that space before overflow happens.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reserve the gutter, do not hide scroll</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set overflow-y: auto and scrollbar-gutter: stable on the list panel. Do not use overflow: hidden only to remove the shift.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare before and after content</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> add items until scroll appears. Card width and action buttons should stay put. On overlays, both-edges helps if a scrollbar can appear on either side.</p>",
   "source": "MDN — scrollbar-gutter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter",
   "sourceSnippet": "scrollbar-gutter reserves space for the scrollbar so layout does not shift when overflow appears.",
   "source2": "MDN — overflow",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "overflow-dropdown-keluar-dari-kartu",
 "langs": {
  "id": {
   "title": "Cara Keluarkan Dropdown dari Kartu yang Memakai Overflow",
   "desc": "Tata cara mencegah menu Clincoo terpotong kartu induk dengan popover atau portal, bukan z-index buta.",
   "content": "<p class=\"mb-4\">Menu yang terpotong di tepi kartu hampir selalu karena induk memakai overflow selain visible. Menaikkan z-index tidak menembus pemotongan itu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Temukan induk yang memotong</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> telusuri induk sampai ketemu overflow: auto, hidden, atau clip. Catat apakah overflow itu memang untuk scroll isi kartu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pindahkan lapisan menu</h2><p class=\"mb-4\">Untuk menu pendek pakai atribut popover agar berada di top layer. Jika belum, render menu di luar kartu lalu posisikan dengan anchor. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka menu di baris terakhir dan pastikan semua item bisa diklik serta fokus tidak hilang.</p>",
   "source": "MDN — Popover API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",
   "sourceSnippet": "The Popover API puts content in the top layer so it is not clipped by ancestor overflow.",
   "source2": "MDN — overflow",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Let a Dropdown Escape a Card That Uses Overflow",
   "desc": "How to stop a Clincoo menu being clipped by a parent card with a popover or portal, not a blind z-index.",
   "content": "<p class=\"mb-4\">A menu clipped at the card edge is almost always caused by an ancestor with overflow other than visible. Raising z-index does not punch through that clipping.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Find the clipping ancestor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> walk up the tree until you find overflow: auto, hidden, or clip. Note whether that overflow is actually needed to scroll the card body.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Move the menu layer</h2><p class=\"mb-4\">For a short menu use the popover attribute so it sits in the top layer. If that is not available, render the menu outside the card and position it with an anchor. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the menu on the last row and confirm every item is clickable and focus is not lost.</p>",
   "source": "MDN — Popover API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",
   "sourceSnippet": "The Popover API puts content in the top layer so it is not clipped by ancestor overflow.",
   "source2": "MDN — overflow",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "overflow-overscroll-behavior-daftar-panjang",
 "langs": {
  "id": {
   "title": "Cara Hentikan Scroll Bocor dengan overscroll-behavior pada Daftar Panjang",
   "desc": "Tata cara mengunci rantai scroll di panel Clincoo tanpa mematikan scroll halaman di luar panel.",
   "content": "<p class=\"mb-4\">Saat daftar internal sudah mentok, guliran berikutnya sering menggerakkan halaman di belakangnya. overscroll-behavior memutus rantai itu di kontainer yang memang digulir.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang di kontainer scroll, bukan di body</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri overflow-y: auto dan overscroll-behavior: contain pada panel daftar. contain menghentikan scroll chaining dan tetap mengizinkan bounce di beberapa browser; none juga mematikan bounce.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji ujung atas dan bawah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir sampai mentok atas lalu bawah. Halaman induk tidak boleh ikut bergerak. Jangan pasang overscroll-behavior: none pada body jika pengguna masih perlu menarik untuk menyegarkan.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "overscroll-behavior controls scroll chaining to the ancestor when a scroll container reaches its boundary.",
   "source2": "MDN — overflow",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Stop Scroll Chaining with overscroll-behavior on a Long List",
   "desc": "How to lock scroll chaining in a Clincoo panel without disabling page scroll outside that panel.",
   "content": "<p class=\"mb-4\">When an inner list hits its end, the next wheel tick often moves the page behind it. overscroll-behavior breaks that chain on the container that is meant to scroll.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set it on the scroll container, not body</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set overflow-y: auto and overscroll-behavior: contain on the list panel. contain stops scroll chaining and still allows bounce in some browsers; none also disables bounce.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test both ends</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll to the top, then the bottom. The parent page must not move. Do not set overscroll-behavior: none on body if users still need pull-to-refresh.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "overscroll-behavior controls scroll chaining to the ancestor when a scroll container reaches its boundary.",
   "source2": "MDN — overflow",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "overflow-nowrap-tabel-buat-scroll-sumbu",
 "langs": {
  "id": {
   "title": "Cara Bungkus Tabel nowrap agar Overflow Hanya di Sumbu Tabel",
   "desc": "Tata cara memberi pembungkus overflow-x pada tabel Clincoo supaya halaman tidak ikut melebar.",
   "content": "<p class=\"mb-4\">white-space: nowrap pada sel tabel berguna untuk angka, tetapi membuat tabel lebih lebar dari viewport. Overflow harus tinggal di pembungkus tabel, bukan di body.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bungkus, jangan kunci body</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bungkus table dengan div yang punya overflow-x: auto dan max-width: 100%. Tambah tabindex=\"0\" pada pembungkus supaya scroll horizontal bisa dijangkau keyboard.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jaga halaman tetap 100%</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> sempitkan ke 360px. documentElement.scrollWidth harus sama dengan clientWidth, sementara pembungkus tabel yang menggulir. Beri caption atau teks bantuan bahwa tabel bisa digulir ke samping.</p>",
   "source": "MDN — white-space",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/white-space",
   "sourceSnippet": "white-space: nowrap collapses whitespace and prevents text from wrapping, which can widen a table.",
   "source2": "MDN — overflow",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Wrap a nowrap Table So Overflow Stays on the Table Axis",
   "desc": "How to add an overflow-x wrapper on a Clincoo table so the page itself does not grow wider.",
   "content": "<p class=\"mb-4\">white-space: nowrap on table cells is useful for numbers, but it makes the table wider than the viewport. Overflow should stay on the table wrapper, not on the body.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Wrap it, do not lock the body</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> wrap the table in a div with overflow-x: auto and max-width: 100%. Add tabindex=\"0\" on the wrapper so horizontal scroll is keyboard reachable.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep the page at 100%</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> narrow to 360px. documentElement.scrollWidth should match clientWidth, while the table wrapper scrolls. Provide a caption or hint that the table can be scrolled sideways.</p>",
   "source": "MDN — white-space",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/white-space",
   "sourceSnippet": "white-space: nowrap collapses whitespace and prevents text from wrapping, which can widen a table.",
   "source2": "MDN — overflow",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
 ,
{
 "id": "overflow-isolasi-contain-layout",
 "langs": {
  "id": {
   "title": "Cara Isolasi Layout dengan contain agar Scroll Tidak Bocor",
   "desc": "Tata cara memakai contain: layout agar komponen di pratinjau Clincoo tidak memaksa scroll halaman.",
   "content": "<p class=\"mb-4\">Scroll horizontal sering muncul karena satu kartu menghitung lebar dari seluruh halaman, bukan dari induknya. Properti contain: layout memberi batas berisi supaya perhitungan ukuran tidak naik ke luar komponen.</p><p class=\"mb-4\">Di editor.clincoo.buzz, bungkus kartu yang sering meluber dengan kelas yang berisi contain: layout. Jangan pasang contain pada body. Itu memotong konteks yang justru dibutuhkan header tetap.</p><p class=\"mb-4\">Setelah itu buka pratinjau, perkecil lebar, lalu bandingkan documentElement.scrollWidth dengan clientWidth. Jika masih lebih lebar, elemen penyebab ada di luar kartu yang diisolasi.</p><p class=\"mb-4\">contain bukan pengganti overflow yang disengaja. Daftar panjang tetap boleh scroll di dalam panel. Yang dicegah adalah bocornya ukuran ke halaman utama blog.clincoo.buzz atau situs yang sedang disusun.</p><p class=\"mb-4\">Uji juga fokus keyboard. contain: layout tidak boleh menyembunyikan outline. Jika ring fokus terpotong, longgarkan contain atau pindahkan ke pembungkus dalam, bukan ke tombol itu sendiri.</p>",
   "source": "MDN — contain",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/contain",
   "sourceSnippet": "The contain property indicates that an element and its contents are independent of the rest of the document tree.",
   "source2": "web.dev — content-visibility",
   "source2Url": "https://web.dev/articles/content-visibility",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Isolate Layout with contain so Scroll Does Not Leak",
   "desc": "How to use contain: layout so a component in a Clincoo preview does not force a page scroll.",
   "content": "<p class=\"mb-4\">Horizontal scroll often appears because a card measures width against the whole page, not its parent. contain: layout gives a containment boundary so size calculation does not escape the component.</p><p class=\"mb-4\">In editor.clincoo.buzz, wrap cards that often spill with a class that sets contain: layout. Do not put contain on body. That cuts the context a sticky header still needs.</p><p class=\"mb-4\">Then open the preview, narrow the width, and compare documentElement.scrollWidth with clientWidth. If it is still wider, the cause sits outside the isolated card.</p><p class=\"mb-4\">contain is not a replacement for intentional overflow. A long list may still scroll inside a panel. What you prevent is size leaking into the main page on blog.clincoo.buzz or the site you are building.</p><p class=\"mb-4\">Also test keyboard focus. contain: layout must not hide the outline. If the focus ring is clipped, loosen contain or move it to an inner wrapper, not the button itself.</p>",
   "source": "MDN — contain",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/contain",
   "sourceSnippet": "The contain property indicates that an element and its contents are independent of the rest of the document tree.",
   "source2": "web.dev — content-visibility",
   "source2Url": "https://web.dev/articles/content-visibility",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "overflow-wrap-url-panjang",
 "langs": {
  "id": {
   "title": "Cara Patahkan URL Panjang tanpa Memaksa Scroll",
   "desc": "Tata cara memakai overflow-wrap dan word-break pada tautan panjang di halaman Clincoo.",
   "content": "<p class=\"mb-4\">URL tanpa spasi adalah penyebab klasik scroll horizontal. Browser menganggapnya satu kata, lalu kartu melebar mengikuti string itu.</p><p class=\"mb-4\">Pada tautan di pratinjau Clincoo, set overflow-wrap: anywhere pada elemen yang menampilkan URL. anywhere membolehkan patah di mana saja jika tidak ada peluang patah yang lebih baik.</p><p class=\"mb-4\">Jangan pakai word-break: break-all pada seluruh paragraf. Itu memotong kata biasa di judul. Batasi aturan pada kelas .url atau kode inline.</p><p class=\"mb-4\">Jika URL harus tetap bisa disalin utuh, jangan sisipkan tag br manual. Biarkan CSS yang mematahkan tampilan, sementara teks di DOM tetap satu string.</p><p class=\"mb-4\">Cek lagi di lebar 360px pada app.clincoo.buzz dan editor. Setelah patah, scrollWidth halaman harus sama dengan clientWidth, sementara tautan masih bisa diketuk.</p>",
   "source": "MDN — overflow-wrap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap",
   "sourceSnippet": "The overflow-wrap property sets whether the browser should insert line breaks within an otherwise unbreakable string.",
   "source2": "MDN — word-break",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/word-break",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Break a Long URL without Forcing Scroll",
   "desc": "How to use overflow-wrap and word-break on long links in a Clincoo page.",
   "content": "<p class=\"mb-4\">A URL with no spaces is a classic cause of horizontal scroll. The browser treats it as one word, then the card grows to fit that string.</p><p class=\"mb-4\">On links in a Clincoo preview, set overflow-wrap: anywhere on the element that shows the URL. anywhere may break anywhere if no better break opportunity exists.</p><p class=\"mb-4\">Do not put word-break: break-all on the whole paragraph. That slices ordinary words in headings. Limit the rule to a .url class or inline code.</p><p class=\"mb-4\">If the URL must stay copyable as a whole, do not insert manual br tags. Let CSS break the display while the DOM text remains one string.</p><p class=\"mb-4\">Check again at 360px on app.clincoo.buzz and the editor. After the break, page scrollWidth should match clientWidth, and the link should still be tappable.</p>",
   "source": "MDN — overflow-wrap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap",
   "sourceSnippet": "The overflow-wrap property sets whether the browser should insert line breaks within an otherwise unbreakable string.",
   "source2": "MDN — word-break",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/word-break",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};