// Clincoo Docs — tambah 1 artikel Flexbox (7 Oktober 2026, 09:00 WIB)
// Clincoo Docs — tambah 5 artikel Flexbox (7 Oktober 2026, 08:00 WIB)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["flexbox"]) {
    window.countryDataFiles["flexbox"] = { "names": { "id": "Flexbox", "en": "Flexbox" }, "articles": [] };
  }
  var list = window.countryDataFiles["flexbox"].articles;
  var extra = [
{
 "id": "flexbox-baca-flex-shorthand",
 "langs": {
  "id": {
   "title": "Cara Baca Shorthand flex Tanpa Menebak Basis",
   "desc": "Tata cara membaca flex: grow shrink basis di Clincoo supaya item tidak meluber karena basis tebakan.",
   "content": "<p class=\"mb-4\">Shorthand flex punya tiga nilai: grow, shrink, dan basis. Menulis flex: 1 tanpa basis sering membuat item berukuran lain dari yang diharapkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pecah shorthand di Computed</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih item flex, lalu buka Computed. Catat flex-grow, flex-shrink, dan flex-basis. flex: 1 berarti 1 1 0%. flex: auto berarti 1 1 auto. Jangan campur dengan width tetap pada item yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji satu baris lalu bungkus</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> sempitkan ke 360px. Jika item teks tidak menyusut, basis auto plus min-width bawaan yang menahan. Ganti ke flex: 1 1 0% dan min-width: 0 hanya pada item itu. Catat shorthand final di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — flex",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex",
   "sourceSnippet": "The flex CSS shorthand sets how a flex item will grow or shrink to fit the space available in its flex container.",
   "source2": "MDN — flex-basis",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Read the flex Shorthand Without Guessing the Basis",
   "desc": "How to read flex grow, shrink, and basis in Clincoo so items do not overflow from a guessed basis.",
   "content": "<p class=\"mb-4\">The flex shorthand has three values: grow, shrink, and basis. Writing flex: 1 without a basis often sizes the item differently than you expect.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Split the shorthand in Computed</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> select the flex item and open Computed. Note flex-grow, flex-shrink, and flex-basis. flex: 1 means 1 1 0%. flex: auto means 1 1 auto. Do not also set a fixed width on the same item.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test one row, then wrap</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> narrow to 360px. If a text item will not shrink, auto basis plus the default min-width is holding it. Switch that item to flex: 1 1 0% and min-width: 0. Record the final shorthand on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — flex",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex",
   "sourceSnippet": "The flex CSS shorthand sets how a flex item will grow or shrink to fit the space available in its flex container.",
   "source2": "MDN — flex-basis",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "flexbox-align-baseline-label-input",
 "langs": {
  "id": {
   "title": "Cara Sejajarkan Label dan Input dengan align-items baseline",
   "desc": "Tata cara menyelaraskan label dan input Clincoo pada satu baris flex memakai baseline, bukan center.",
   "content": "<p class=\"mb-4\">align-items: center membuat label dan input terlihat rata di tengah, tetapi teks label tidak sejajar dengan teks di dalam input.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai baseline pada baris form</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat baris flex untuk label dan input. Set align-items: baseline. Beri label line-height yang sama dengan teks input. Jangan pakai margin-top negatif untuk mengangkat label.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek saat error dan fokus</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> picu pesan error di bawah input. Baris tidak boleh melompat. Jika pesan membuat tinggi berubah, pindahkan pesan ke bawah baris, bukan di dalam item yang di-baseline. Catat pola di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — align-items",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
   "sourceSnippet": "The align-items CSS property sets the align-self value on all direct children as a group.",
   "source2": "MDN — Baseline alignment",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment#baseline_alignment",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Align Labels and Inputs with align-items baseline",
   "desc": "How to line up a Clincoo label and input on one flex row with baseline instead of center.",
   "content": "<p class=\"mb-4\">align-items: center looks vertically centered, but the label text does not sit on the same line as the text inside the input.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use baseline on the form row</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> make a flex row for the label and input. Set align-items: baseline. Give the label the same line-height as the input text. Do not use a negative margin-top to lift the label.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check error and focus states</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> trigger the error message under the input. The row should not jump. If the message changes the height, move it below the row, not inside the baseline item. Note the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — align-items",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
   "sourceSnippet": "The align-items CSS property sets the align-self value on all direct children as a group.",
   "source2": "MDN — Baseline alignment",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment#baseline_alignment",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "flexbox-wrap-kartu-responsif",
 "langs": {
  "id": {
   "title": "Cara Bungkus Kartu Flex tanpa Scroll Horizontal",
   "desc": "Tata cara memakai flex-wrap dan flex-basis agar kartu Clincoo turun baris, bukan mendorong scroll horizontal.",
   "content": "<p class=\"mb-4\">Kartu yang dipaksa satu baris akan membuat halaman melebar di ponsel. wrap tanpa basis minimum tetap bisa menumpuk aneh.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set basis minimum, bukan width kaku</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada kontainer kartu set display: flex, flex-wrap: wrap, dan gap. Pada kartu set flex: 1 1 16rem. Jangan set width: 100% sekaligus flex-basis tetap. nowrap hanya untuk toolbar yang memang harus digeser.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji 320px dan 768px</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> cek 320px: satu kartu per baris, tanpa scroll horizontal. Di 768px dua kartu. Jika satu kartu menolak turun, cari min-width lebih besar dari layar. Catat basis di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — flex-wrap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap",
   "sourceSnippet": "The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.",
   "source2": "MDN — Controlling flex item ratios",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Wrap Flex Cards without Horizontal Scroll",
   "desc": "How to use flex-wrap and flex-basis so Clincoo cards drop to the next line instead of forcing horizontal scroll.",
   "content": "<p class=\"mb-4\">Cards forced onto one row widen the page on a phone. wrap without a minimum basis can still stack awkwardly.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set a minimum basis, not a rigid width</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set display: flex, flex-wrap: wrap, and gap on the card container. On each card set flex: 1 1 16rem. Do not also set width: 100% with a fixed flex-basis. Keep nowrap only for a toolbar that is meant to scroll.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test 320px and 768px</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> check 320px: one card per row, no horizontal scroll. At 768px, two cards. If a card refuses to wrap, look for a min-width larger than the screen. Record the basis on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — flex-wrap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap",
   "sourceSnippet": "The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.",
   "source2": "MDN — Controlling flex item ratios",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "flexbox-kolom-nested-tinggi-nol",
 "langs": {
  "id": {
   "title": "Cara Debug Flex Kolom Bersarang yang Tingginya Nol",
   "desc": "Tata cara memperbaiki kontainer flex column Clincoo yang anaknya tidak kelihatan karena tinggi induk nol.",
   "content": "<p class=\"mb-4\">Flex column bersarang sering tinggi nol jika induk tidak punya tinggi dan anak memakai flex: 1. Area konten tampak kosong padahal DOM ada.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri tinggi pada rantai induk</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> telusuri induk sampai body. Set min-height: 100% atau min-height: 100dvh hanya pada shell halaman, lalu flex: 1 dan min-height: 0 pada kolom yang harus mengisi sisa. Jangan set height: 100% di setiap kartu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji isi panjang dan kosong</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> isi kolom dengan tiga paragraf, lalu kosongkan. Scroll harus ada di kolom, bukan di halaman ganda. Jika kolom hilang, Computed height 0 menandai rantai yang putus. Catat selector di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — flex-direction",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction",
   "sourceSnippet": "The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction.",
   "source2": "MDN — Typical use of flexbox",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug a Nested Column Flex with Zero Height",
   "desc": "How to fix a Clincoo nested flex column whose children disappear because the parent height is zero.",
   "content": "<p class=\"mb-4\">A nested flex column often has zero height when the parent has no height and the child uses flex: 1. The content area looks empty even though the DOM is there.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Give the parent chain a height</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> walk parents up to body. Set min-height: 100% or min-height: 100dvh only on the page shell, then flex: 1 and min-height: 0 on the column that should fill the rest. Do not set height: 100% on every card.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test long and empty content</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> fill the column with three paragraphs, then clear it. Scroll should live in the column, not as a double page scroll. If the column vanishes, a Computed height of 0 marks the broken chain. Note the selector on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — flex-direction",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction",
   "sourceSnippet": "The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction.",
   "source2": "MDN — Typical use of flexbox",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "flexbox-justify-safe-center",
 "langs": {
  "id": {
   "title": "Cara Pakai justify-content safe center agar Tidak Terpotong",
   "desc": "Tata cara memakai safe center pada flex Clincoo supaya item yang lebih lebar dari kontainer tetap bisa digulir.",
   "content": "<p class=\"mb-4\">justify-content: center memotong item yang lebih lebar dari kontainer. Awal konten tidak bisa dijangkau dengan scroll.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti center dengan safe center</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada baris tombol set justify-content: safe center. Jika browser belum mendukung, fallback center lalu overflow: auto pada kontainer. Jangan sembunyikan overflow-x.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji item yang lebih lebar</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> taruh label panjang di baris sempit. Kedua ujung label harus bisa digeser. Tab harus mencapai tombol pertama. Catat dukungan browser di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — justify-content",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content",
   "sourceSnippet": "The justify-content CSS property defines how the browser distributes space between and around content items along the main axis.",
   "source2": "CSS Overflow — safe alignment",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables#safe_and_unsafe_alignment",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use justify-content safe center so Items Are Not Clipped",
   "desc": "How to use safe center on a Clincoo flex row so an item wider than the container can still be scrolled.",
   "content": "<p class=\"mb-4\">justify-content: center clips an item wider than the container. The start of the content cannot be reached by scrolling.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Replace center with safe center</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set justify-content: safe center on the button row. If the browser does not support it yet, fall back to center and overflow: auto on the container. Do not hide overflow-x.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test an item wider than the row</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> place a long label in a narrow row. Both ends of the label should scroll into view. Tab should reach the first button. Note browser support on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — justify-content",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content",
   "sourceSnippet": "The justify-content CSS property defines how the browser distributes space between and around content items along the main axis.",
   "source2": "CSS Overflow — safe alignment",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables#safe_and_unsafe_alignment",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
,
{
 "id": "flexbox-margin-auto-dorong-item",
 "langs": {
  "id": {
   "title": "Cara Dorong Item Flex dengan margin auto",
   "desc": "Tata cara mendorong satu item flex Clincoo ke tepi dengan margin auto, tanpa spacer kosong.",
   "content": "<p class=\"mb-4\">Spacer div kosong sering dipakai untuk mendorong tombol ke kanan. Di flex, margin auto pada item itu sendiri sudah cukup dan tidak menambah elemen yang bisa terfokus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang margin-left auto pada item terakhir</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih item yang harus menempel ke tepi akhir. Set margin-left: auto jika barisnya row, atau margin-top: auto jika kolom. Jangan gabungkan dengan justify-content: space-between pada kontainer yang sama, karena keduanya berebut ruang bebas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji saat item membungkus</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> sempitkan ke 360px. Jika flex-wrap aktif, margin auto hanya mendorong di dalam baris item itu. Tab harus tetap mengikuti urutan DOM, bukan urutan visual semata. Catat hasilnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — margin",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin",
   "sourceSnippet": "The margin CSS shorthand property sets the margin area on all four sides of an element.",
   "source2": "CSS Flexible Box — auto margins",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Push a Flex Item with margin auto",
   "desc": "How to push one Clincoo flex item to the edge with margin auto, without an empty spacer.",
   "content": "<p class=\"mb-4\">An empty spacer div is often used to push a button to the right. In flex, margin auto on the item itself is enough and does not add a focusable element.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set margin-left auto on the last item</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> select the item that should sit on the end edge. Set margin-left: auto for a row, or margin-top: auto for a column. Do not also set justify-content: space-between on the same container, because both compete for free space.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test when items wrap</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> narrow the preview to 360px. If flex-wrap is on, margin auto only pushes within that item's line. Tab order should still follow the DOM, not only the visual order. Note the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — margin",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin",
   "sourceSnippet": "The margin CSS shorthand property sets the margin area on all four sides of an element.",
   "source2": "CSS Flexible Box — auto margins",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
];
  extra.forEach(function (a) {
    if (!list.some(function (x) { return x.id === a.id; })) list.push(a);
  });
})();
