// Clincoo Docs — kategori Anchor (5 Oktober 2026, WIB) — 12 artikel
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
,
{
 "id": "anchor-lebar-popup-ikut-lebar-input",
 "langs": {
  "id":   {
   "title": "Cara Buat Lebar Dropdown Ikut Lebar Input dengan anchor-size",
   "desc": "Tata cara memakai anchor-size di Clincoo supaya panel opsi selebar input jangkar, bukan lebar isi yang meloncat.",
   "content": "<p class=\"mb-4\">Dropdown yang lebarnya mengikuti teks opsi sering lebih sempit atau lebih lebar dari input. Pengguna lalu mengira daftar itu milik field lain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ambil ukuran jangkar</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri input anchor-name: --field. Pada panel set position: absolute, position-anchor: --field, position-area: bottom, dan width: anchor-size(width). Jangan salin lebar dari getBoundingClientRect sekali jalan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji saat input meregang</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> perlebar kartu. Panel harus ikut lebar input. Catat token jangkar di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya field lain tidak memakai nama yang sama.</p>",
   "source": "MDN — anchor-size()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/anchor-size",
   "sourceSnippet": "anchor-size() returns the width or height of the anchor element for use in sizing the positioned popup.",
   "source2": "MDN — CSS anchor positioning",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Match Dropdown Width to the Input with anchor-size",
   "desc": "How to use anchor-size in Clincoo so the option panel matches the anchor input instead of jumping to the content width.",
   "content": "<p class=\"mb-4\">A dropdown sized by option text is often narrower or wider than the input. People then think the list belongs to another field.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read the anchor size</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set the input to anchor-name: --field. On the panel set position: absolute, position-anchor: --field, position-area: bottom, and width: anchor-size(width). Do not copy a one-shot getBoundingClientRect width.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test when the input stretches</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> widen the card. The panel should follow the input width. Record the anchor token on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so other fields do not reuse the name.</p>",
   "source": "MDN — anchor-size()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/anchor-size",
   "sourceSnippet": "anchor-size() returns the width or height of the anchor element for use in sizing the positioned popup.",
   "source2": "MDN — CSS anchor positioning",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "anchor-popover-api-menempel-ke-tombol",
 "langs": {
  "id":   {
   "title": "Cara Tempelkan Popover API ke Tombol dengan CSS Anchor",
   "desc": "Tata cara menggabungkan atribut popover dan position-anchor di Clincoo supaya menu light-dismiss tetap menempel tombol pemicu.",
   "content": "<p class=\"mb-4\">Popover API menutup sendiri saat klik di luar, tetapi posisi defaultnya menumpuk di tengah atau sudut. Tanpa jangkar, menu terasa lepas dari tombol.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pemicu dan panel</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri tombol popovertarget dan anchor-name: --menu. Pada panel set popover, position: absolute, position-anchor: --menu, dan position-area: bottom span-right. Biarkan browser mengurus light-dismiss, jangan tambah listener klik dokumen.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji buka dan tutup</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka menu, klik di luar, lalu buka lagi setelah tombol pindah baris. Panel harus kembali menempel. Catat id pemicu di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Popover API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",
   "sourceSnippet": "The Popover API creates top-layer elements that dismiss on an outside click and can be anchored with CSS.",
   "source2": "MDN — CSS anchor positioning",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Anchor the Popover API to a Button with CSS Anchor",
   "desc": "How to combine the popover attribute and position-anchor in Clincoo so a light-dismiss menu stays on its trigger.",
   "content": "<p class=\"mb-4\">The Popover API closes on an outside click, but its default position stacks in the center or a corner. Without an anchor the menu feels detached from the button.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Trigger and panel</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> give the button popovertarget and anchor-name: --menu. On the panel set popover, position: absolute, position-anchor: --menu, and position-area: bottom span-right. Let the browser handle light-dismiss. Do not add a document click listener.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test open and close</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the menu, click outside, then open it again after the button wraps. The panel should stick again. Record the trigger id on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Popover API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",
   "sourceSnippet": "The Popover API creates top-layer elements that dismiss on an outside click and can be anchored with CSS.",
   "source2": "MDN — CSS anchor positioning",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "anchor-badge-di-sudut-tombol",
 "langs": {
  "id":   {
   "title": "Cara Tempelkan Badge di Sudut Tombol dengan CSS Anchor",
   "desc": "Tata cara menaruh badge angka di sudut tombol Clincoo dengan position-area supaya lencana ikut saat tombol berpindah.",
   "content": "<p class=\"mb-4\">Badge yang diletakkan dengan right: -6px pada pembungkus relatif pecah jika tombol tidak lagi position relative, atau jika ikon diganti.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangkar pada tombol</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set tombol anchor-name: --act. Pada badge set position: absolute, position-anchor: --act, dan position-area: top span-right. Geser sedikit dengan margin, bukan dengan koordinat absolut tetap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek saat label berubah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> perpanjang label tombol. Badge harus tetap di sudut kanan atas, bukan tertinggal di posisi lama. Catat nama jangkar di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — position-area",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-area",
   "sourceSnippet": "position-area places an anchor-positioned element on a side or corner of its anchor.",
   "source2": "MDN — CSS anchor positioning",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Pin a Badge to a Button Corner with CSS Anchor",
   "desc": "How to place a count badge on a Clincoo button corner with position-area so the badge follows when the button moves.",
   "content": "<p class=\"mb-4\">A badge placed with right: -6px on a relative wrapper breaks when the button is no longer position relative, or when the icon is swapped.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Anchor the button</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set the button to anchor-name: --act. On the badge set position: absolute, position-anchor: --act, and position-area: top span-right. Nudge it with margin, not a fixed absolute coordinate.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check when the label changes</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> lengthen the button label. The badge should stay at the top-right corner, not linger at the old spot. Record the anchor name on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — position-area",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-area",
   "sourceSnippet": "position-area places an anchor-positioned element on a side or corner of its anchor.",
   "source2": "MDN — CSS anchor positioning",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "anchor-sembunyikan-jika-jangkar-keluar-layar",
 "langs": {
  "id":   {
   "title": "Cara Sembunyikan Popup jika Jangkar Keluar Layar",
   "desc": "Tata cara memakai position-visibility di Clincoo supaya tooltip hilang saat tombol jangkar tergulir keluar viewport.",
   "content": "<p class=\"mb-4\">Tooltip yang tetap tampil setelah tombolnya tergulir menutup konten di bawah. Pengguna mengira petunjuk itu milik elemen lain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ikat visibilitas ke jangkar</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada tooltip yang sudah memakai position-anchor, tambahkan position-visibility: anchors-visible. Browser menyembunyikan popup jika jangkar tidak terlihat. Jangan menghapus node lewat listener scroll.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji gulir</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka tooltip lalu gulir tombol keluar layar. Popup harus hilang, lalu muncul lagi saat tombol kembali. Catat propertinya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — position-visibility",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-visibility",
   "sourceSnippet": "position-visibility can hide an anchor-positioned element when its anchor is no longer visible.",
   "source2": "MDN — CSS anchor positioning",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Hide a Popup When Its Anchor Leaves the Screen",
   "desc": "How to use position-visibility in Clincoo so a tooltip hides when the anchor button scrolls out of the viewport.",
   "content": "<p class=\"mb-4\">A tooltip that stays after its button scrolls away covers content below. People then think the hint belongs to another element.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tie visibility to the anchor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> on a tooltip that already uses position-anchor, add position-visibility: anchors-visible. The browser hides the popup when the anchor is not visible. Do not remove the node from a scroll listener.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test scrolling</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the tooltip, then scroll the button off screen. The popup should hide, then return when the button comes back. Record the property on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — position-visibility",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-visibility",
   "sourceSnippet": "position-visibility can hide an anchor-positioned element when its anchor is no longer visible.",
   "source2": "MDN — CSS anchor positioning",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "anchor-debug-popup-yang-tidak-menempel",
 "langs": {
  "id":   {
   "title": "Cara Debug Popup CSS Anchor yang Tidak Menempel",
   "desc": "Tata cara melacak di Clincoo kenapa tooltip tidak menempel: nama jangkar salah, position belum absolute, atau elemen jangkar display none.",
   "content": "<p class=\"mb-4\">Popup yang jatuh ke kiri atas biasanya bukan bug layout acak. Jangkar tidak ketemu, atau elemen yang diposisikan masih dalam alur normal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek tiga syarat</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pastikan tombol punya anchor-name yang sama persis dengan position-anchor pada popup, termasuk tanda --. Popup harus position: absolute atau fixed. Jangkar tidak boleh display: none. Nama yang tidak ada tidak menghasilkan peringatan keras di konsol.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lihat di inspektur</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pilih popup di inspektur dan bandingkan nama jangkar dengan tombol. Jika nama beda satu huruf, perbaiki lalu muat ulang. Catat pasangan nama di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — anchor-name",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/anchor-name",
   "sourceSnippet": "anchor-name identifies the element that position-anchor should attach to. Names must match exactly.",
   "source2": "MDN — position-anchor",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-anchor",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Debug a CSS Anchor Popup That Does Not Stick",
   "desc": "How to trace in Clincoo why a tooltip does not stick: a wrong anchor name, a missing absolute position, or an anchor with display none.",
   "content": "<p class=\"mb-4\">A popup that falls to the top left is usually not a random layout bug. The anchor was not found, or the positioned element is still in normal flow.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check three requirements</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> make sure the button's anchor-name matches position-anchor on the popup exactly, including the --. The popup must be position: absolute or fixed. The anchor must not be display: none. A missing name does not raise a loud console warning.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Look in the inspector</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> select the popup in the inspector and compare the anchor name with the button. If the name differs by one letter, fix it and reload. Record the name pair on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — anchor-name",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/anchor-name",
   "sourceSnippet": "anchor-name identifies the element that position-anchor should attach to. Names must match exactly.",
   "source2": "MDN — position-anchor",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-anchor",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "anchor-tooltip-di-dalam-overflow-scroll",
 "langs": {
  "id":   {
   "title": "Cara Jaga Tooltip Anchor di Dalam Kontainer Overflow",
   "desc": "Tata cara menempelkan tooltip CSS anchor Clincoo pada tombol di dalam kartu yang di-scroll, supaya popup tidak terpotong atau tertinggal.",
   "content": "<p class=\"mb-4\">Tooltip yang menempel ke tombol di kartu overflow sering terpotong oleh overflow: hidden, atau tertinggal saat isi kartu di-scroll.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangkar ikut kontainer</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri tombol anchor-name: --tips. Pada tooltip set position-anchor: --tips dan position-area: top. Jika kartu memotong popup, pindahkan tooltip ke luar kartu dan biarkan jangkar menunjuk tombol, bukan menyalin koordinat scroll.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji saat kartu digulir</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir isi kartu sampai tombol naik ke tepi. Tooltip harus ikut tombol atau tersembunyi saat jangkar keluar, bukan mengambang di koordinat lama. Catat nama jangkar di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS anchor positioning",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "sourceSnippet": "Anchor positioning places an element relative to an anchor element using anchor-name and position-anchor.",
   "source2": "MDN — position-anchor",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-anchor",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Keep an Anchor Tooltip Inside an Overflow Container",
   "desc": "How to pin a Clincoo CSS anchor tooltip to a button inside a scrolling card so the popup is not clipped or left behind.",
   "content": "<p class=\"mb-4\">A tooltip pinned to a button inside an overflow card is often clipped by overflow: hidden, or left behind when the card content scrolls.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Let the anchor follow the container</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> give the button anchor-name: --tips. On the tooltip set position-anchor: --tips and position-area: top. If the card clips the popup, move the tooltip outside the card and keep the anchor pointing at the button instead of copying scroll coordinates.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test while the card scrolls</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll the card until the button reaches the edge. The tooltip should follow the button or hide when the anchor leaves, not float at the old coordinates. Record the anchor name on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS anchor positioning",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "sourceSnippet": "Anchor positioning places an element relative to an anchor element using anchor-name and position-anchor.",
   "source2": "MDN — position-anchor",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-anchor",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
