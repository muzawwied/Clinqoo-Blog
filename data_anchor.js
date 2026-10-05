// Clincoo Docs — kategori Anchor (5 Oktober 2026, WIB) — 6 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["anchor"] = {
 "names": { "id": "Anchor", "en": "Anchor" },
 "articles": [
{
 "id": "anchor-tempelkan-tooltip-ke-tombol",
 "langs": {
  "id":   {
   "title": "Cara Tempelkan Tooltip ke Tombol dengan CSS Anchor",
   "desc": "Tata cara memakai anchor-name dan position-anchor di Clincoo supaya tooltip tetap menempel tombol tanpa koordinat JS.",
   "content": "<p class=\"mb-4\">Tooltip yang diposisikan dengan top dan left absolut bergeser saat tombol pindah ke baris lain. Perhitungan JS lalu ketinggalan dari layout.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Namai jangkar, tempelkan popup</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri tombol anchor-name: --tips. Pada tooltip set position: absolute, position-anchor: --tips, dan position-area: top. Tambahkan position-try agar popup pindah ke bawah jika terpotong tepi viewport.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji saat tombol berpindah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> sempitkan baris sampai tombol turun. Tooltip harus ikut tombol, bukan tinggal di koordinat lama. Catat nama jangkar di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS anchor positioning",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "sourceSnippet": "Anchor positioning places an element relative to an anchor element using anchor-name and position-anchor.",
   "source2": "MDN — position-anchor",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-anchor",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Anchor a Tooltip to a Button with CSS Anchor Positioning",
   "desc": "How to use anchor-name and position-anchor in Clincoo so a tooltip stays on the button without JS coordinates.",
   "content": "<p class=\"mb-4\">A tooltip positioned with absolute top and left drifts when the button wraps to another row. The JS math then lags behind the layout.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Name the anchor, attach the popup</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> give the button anchor-name: --tips. On the tooltip set position: absolute, position-anchor: --tips, and position-area: top. Add position-try so the popup flips below if the viewport edge clips it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test when the button moves</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> narrow the row until the button wraps. The tooltip should follow the button, not stay at the old coordinates. Record the anchor name on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS anchor positioning",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "sourceSnippet": "Anchor positioning places an element relative to an anchor element using anchor-name and position-anchor.",
   "source2": "MDN — position-anchor",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-anchor",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "anchor-dropdown-menempel-di-bawah-input",
 "langs": {
  "id":   {
   "title": "Cara Tempelkan Dropdown di Bawah Input dengan CSS Anchor",
   "desc": "Tata cara menempelkan menu dropdown ke input Clincoo dengan anchor-name supaya daftar opsi tidak tertinggal saat layout bergeser.",
   "content": "<p class=\"mb-4\">Dropdown yang dihitung dengan getBoundingClientRect sering tertinggal saat input pindah karena flex wrap atau keyboard mobile membuka.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangkar pada input, area di bawah</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set input anchor-name: --field. Pada panel opsi set position: absolute, position-anchor: --field, dan position-area: bottom span-right. Jangan pakai top tetap dari hasil pengukuran sekali jalan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji saat baris bergeser</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ubah lebar kartu sampai input turun ke baris baru. Panel harus ikut input. Catat nama jangkar di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya komponen lain tidak memakai token yang sama.</p>",
   "source": "MDN — CSS anchor positioning",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "sourceSnippet": "Anchor positioning places an element relative to an anchor using anchor-name and position-area.",
   "source2": "MDN — position-try-fallbacks",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-try-fallbacks",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Anchor a Dropdown Under an Input with CSS Anchor Positioning",
   "desc": "How to pin a Clincoo dropdown to its input with anchor-name so the option list does not lag when the layout shifts.",
   "content": "<p class=\"mb-4\">A dropdown placed with getBoundingClientRect often lags when the input moves because of flex wrap or the mobile keyboard.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Anchor the input, place the list below</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set the input to anchor-name: --field. On the option panel set position: absolute, position-anchor: --field, and position-area: bottom span-right. Do not keep a one-shot measured top.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test when the row shifts</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> resize the card until the input wraps. The panel should follow the input. Record the anchor name on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so other components do not reuse the same token.</p>",
   "source": "MDN — CSS anchor positioning",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "sourceSnippet": "Anchor positioning places an element relative to an anchor using anchor-name and position-area.",
   "source2": "MDN — position-try-fallbacks",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-try-fallbacks",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "anchor-fallback-jika-browser-belum-mendukung",
 "langs": {
  "id":   {
   "title": "Cara Beri Fallback jika CSS Anchor Belum Didukung",
   "desc": "Tata cara memakai @supports untuk anchor-name di Clincoo dan menyiapkan posisi biasa jika browser belum mengenal position-anchor.",
   "content": "<p class=\"mb-4\">CSS anchor positioning belum ada di semua browser. Popup yang hanya mengandalkan position-anchor bisa menumpuk di sudut kiri atas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek dukungan, lalu cabang</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bungkus aturan jangkar dengan @supports (anchor-name: --tips). Di luar blok itu beri position: absolute dan inset yang masuk akal, atau biarkan popup mengikuti alur normal. Jangan sembunyikan konten hanya karena jangkar gagal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di dua mesin</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka halaman yang sama di browser yang mendukung dan yang belum. Keduanya harus tetap bisa dipakai. Catat hasilnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS anchor positioning",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "sourceSnippet": "Use feature queries so anchor positioning enhances layout without becoming the only path.",
   "source2": "MDN — position-try-fallbacks",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-try-fallbacks",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Fall Back When CSS Anchor Positioning Is Unsupported",
   "desc": "How to use @supports for anchor-name in Clincoo and keep a plain position when the browser does not know position-anchor.",
   "content": "<p class=\"mb-4\">CSS anchor positioning is not in every browser yet. A popup that only relies on position-anchor can pile up at the top-left corner.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check support, then branch</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> wrap the anchor rules in @supports (anchor-name: --tips). Outside that block set a sensible position: absolute and inset, or leave the popup in normal flow. Do not hide the content just because the anchor failed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test on two engines</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the same page in a supporting browser and one that does not. Both must stay usable. Record the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS anchor positioning",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "sourceSnippet": "Use feature queries so anchor positioning enhances layout without becoming the only path.",
   "source2": "MDN — position-try-fallbacks",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-try-fallbacks",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "anchor-atur-jarak-popup-dari-jangkar",
 "langs": {
  "id":   {
   "title": "Cara Atur Jarak Popup dari Jangkar CSS",
   "desc": "Tata cara memberi jarak tooltip Clincoo dari tombol jangkar dengan margin pada elemen yang diposisikan, bukan dengan koordinat manual.",
   "content": "<p class=\"mb-4\">Tooltip yang menempel rapat ke tombol menutup label. Menggeser dengan top: -8px kembali pecah saat tombol berpindah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jarak lewat margin</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> setelah position-anchor dan position-area, beri margin-bottom pada tooltip yang berada di atas tombol. Margin dihitung dari tepi jangkar, jadi jarak ikut saat tombol pindah. Hindari mencampur top absolut dengan position-area.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di tepi layar</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir tombol ke dekat tepi atas. Jarak harus tetap, dan position-try boleh memindahkan sisi. Catat nilai margin di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS anchor positioning",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "sourceSnippet": "Margin on an anchor-positioned element offsets it from the anchor without fixed coordinates.",
   "source2": "MDN — position-try-fallbacks",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-try-fallbacks",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Set the Gap Between a Popup and Its CSS Anchor",
   "desc": "How to gap a Clincoo tooltip from its anchor button with margin on the positioned element, not manual coordinates.",
   "content": "<p class=\"mb-4\">A tooltip flush against the button hides the label. Nudging it with top: -8px breaks again when the button moves.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gap with margin</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>, after position-anchor and position-area, set margin-bottom on a tooltip that sits above the button. Margin is measured from the anchor edge, so the gap follows the button. Do not mix an absolute top with position-area.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the screen edge</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll the button near the top edge. The gap should hold, and position-try may flip the side. Record the margin on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS anchor positioning",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "sourceSnippet": "Margin on an anchor-positioned element offsets it from the anchor without fixed coordinates.",
   "source2": "MDN — position-try-fallbacks",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-try-fallbacks",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "anchor-balik-sisi-saat-terpotong-viewport",
 "langs": {
  "id":   {
   "title": "Cara Balik Sisi Popup saat Terpotong Viewport",
   "desc": "Tata cara memakai position-try di Clincoo supaya tooltip pindah ke sisi lain jika position-area awal terpotong tepi layar.",
   "content": "<p class=\"mb-4\">Tooltip yang selalu di atas tombol terpotong di header. Pengguna lalu tidak bisa membaca isinya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Siapkan urutan coba</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set position-area: top dan position-try-fallbacks: flip-block, flip-inline. Browser mencoba sisi berikutnya jika area pertama tidak muat. Jangan hitung sendiri sisi dengan listener scroll.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji empat tepi</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tempel tombol di atas, bawah, kiri, dan kanan viewport. Popup harus pindah sisi tanpa keluar layar. Catat urutan fallback di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS anchor positioning",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "sourceSnippet": "position-try-fallbacks lets an anchor-positioned box flip when the preferred area overflows.",
   "source2": "MDN — position-try-fallbacks",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-try-fallbacks",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Flip a Popup Side When the Viewport Clips It",
   "desc": "How to use position-try in Clincoo so a tooltip moves to another side when the first position-area is clipped.",
   "content": "<p class=\"mb-4\">A tooltip forced above the button gets clipped in the header. Readers then cannot see the text.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set a try order</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set position-area: top and position-try-fallbacks: flip-block, flip-inline. The browser tries the next side if the first area does not fit. Do not compute the side yourself with a scroll listener.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test four edges</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> place the button at the top, bottom, left, and right of the viewport. The popup should change side without leaving the screen. Record the fallback order on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS anchor positioning",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "sourceSnippet": "position-try-fallbacks lets an anchor-positioned box flip when the preferred area overflows.",
   "source2": "MDN — position-try-fallbacks",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-try-fallbacks",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "anchor-nama-unik-supaya-tidak-bentrok",
 "langs": {
  "id":   {
   "title": "Cara Beri Nama Jangkar Unik supaya Tidak Bentrok",
   "desc": "Tata cara menamai anchor-name per komponen di Clincoo supaya tooltip tidak menempel ke tombol komponen lain.",
   "content": "<p class=\"mb-4\">anchor-name adalah identitas global di halaman. Dua kartu yang sama-sama memakai --tips membuat popup menempel ke jangkar terakhir.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu nama per instance</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jangan salin --tips ke setiap kartu. Buat nama yang memuat peran, misalnya --tips-harga pada tombol harga. Popup di kartu yang sama harus memakai position-anchor yang sama persis, termasuk tanda minus ganda.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di daftar elemen</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> duplikasi kartu dua kali. Setiap tooltip harus mengikuti tombolnya sendiri. Jika menempel silang, ganti nama lalu catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS anchor positioning",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "sourceSnippet": "An anchor-name must be unique on the page or positioned elements attach to the wrong anchor.",
   "source2": "MDN — position-try-fallbacks",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-try-fallbacks",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Give Each CSS Anchor a Unique Name",
   "desc": "How to name each Clincoo anchor-name per component so a tooltip does not attach to another component's button.",
   "content": "<p class=\"mb-4\">anchor-name is a page-wide identity. Two cards that both use --tips make the popup attach to the last anchor.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One name per instance</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> do not copy --tips onto every card. Build a name that includes the role, such as --tips-harga on the price button. The popup in that same card must use the exact same position-anchor, including the double dash.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the element list</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> duplicate the card twice. Each tooltip should follow its own button. If they cross-attach, rename them and record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS anchor positioning",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "sourceSnippet": "An anchor-name must be unique on the page or positioned elements attach to the wrong anchor.",
   "source2": "MDN — position-try-fallbacks",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-try-fallbacks",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
