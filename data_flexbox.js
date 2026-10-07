// Clincoo Docs — kategori Flexbox (7 Oktober 2026, 07:00 WIB) — 6 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["flexbox"] = {
 "names": { "id": "Flexbox", "en": "Flexbox" },
 "articles": [
{
 "id": "flexbox-debug-item-tidak-menyusut",
 "langs": {
  "id": {
   "title": "Cara Debug Item Flexbox yang Tidak Menyusut",
   "desc": "Tata cara memperbaiki item flex Clincoo yang meluber karena min-width bawaan dan flex-shrink nol.",
   "content": "<p class=\"mb-4\">Item flex yang menolak menyusut biasanya bukan karena flex-direction salah, melainkan min-width: auto bawaan atau konten yang tidak boleh pecah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca flex-shrink dan min-width</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih item yang meluber. Di Computed cek flex-shrink, flex-basis, dan min-width. Untuk teks panjang set min-width: 0 dan overflow-wrap: anywhere pada item, bukan pada seluruh halaman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di lebar sempit</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> sempitkan ke 360px. Item harus menyusut tanpa scroll horizontal. Jika gambar yang menahan, beri max-width: 100% pada gambar itu. Catat selector di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — flex-shrink",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink",
   "sourceSnippet": "The default min-width: auto can stop a flex item from shrinking below its content size.",
   "source2": "MDN — Controlling flex item ratios",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug a Flex Item That Will Not Shrink",
   "desc": "How to fix a Clincoo flex item that overflows because of the default min-width and a zero flex-shrink.",
   "content": "<p class=\"mb-4\">A flex item that refuses to shrink is usually not a wrong flex-direction. It is the default min-width: auto or content that cannot break.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read flex-shrink and min-width</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> select the overflowing item. In Computed check flex-shrink, flex-basis, and min-width. For long text set min-width: 0 and overflow-wrap: anywhere on the item, not on the whole page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test at a narrow width</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> narrow the page to 360px. The item should shrink without horizontal scroll. If an image holds it open, set max-width: 100% on that image. Record the selector on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — flex-shrink",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink",
   "sourceSnippet": "The default min-width: auto can stop a flex item from shrinking below its content size.",
   "source2": "MDN — Controlling flex item ratios",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "flexbox-debug-item-tidak-tumbuh",
 "langs": {
  "id": {
   "title": "Cara Debug Item Flexbox yang Tidak Tumbuh",
   "desc": "Tata cara memperbaiki item flex Clincoo yang tidak melebar meski ada sisa ruang, karena flex-grow nol atau shorthand flex yang menimpa basis.",
   "content": "<p class="mb-4">Item yang tidak tumbuh hampir selalu flex-grow: 0, atau shorthand flex yang mengembalikan basis ke auto. Ruang kosong di baris tidak otomatis dibagi.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Baca grow, basis, dan shorthand</h2><p class="mb-4">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> pilih item yang tetap sempit. Di Computed cek flex-grow, flex-basis, dan apakah ada flex: none atau flex: 0 1 auto dari stylesheet lain. flex: 1 artinya grow 1, shrink 1, basis 0%.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Uji sisa ruang</h2><p class="mb-4">Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> lebarkan kontainer. Item dengan grow 1 harus mengambil sisa ruang setelah basis item lain. Jangan set width tetap pada item yang ingin tumbuh. Catat aturan pemenang di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — flex-grow",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow",
   "sourceSnippet": "flex-grow sets how much of the positive free space, if any, should be assigned to the item.",
   "source2": "MDN — flex",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug a Flex Item That Will Not Grow",
   "desc": "How to fix a Clincoo flex item that stays narrow even when free space remains, because flex-grow is zero or the flex shorthand reset the basis.",
   "content": "<p class="mb-4">An item that will not grow is almost always flex-grow: 0, or a flex shorthand that put the basis back to auto. Free space on the row is not shared automatically.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Read grow, basis, and the shorthand</h2><p class="mb-4">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> select the item that stays narrow. In Computed check flex-grow, flex-basis, and whether flex: none or flex: 0 1 auto comes from another stylesheet. flex: 1 means grow 1, shrink 1, basis 0%.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Test the free space</h2><p class="mb-4">On <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> widen the container. An item with grow 1 should take the leftover space after the other items' basis. Do not set a fixed width on the item you want to grow. Record the winning rule on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — flex-grow",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow",
   "sourceSnippet": "flex-grow sets how much of the positive free space, if any, should be assigned to the item.",
   "source2": "MDN — flex",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "flexbox-nowrap-bikin-scroll-horizontal",
 "langs": {
  "id": {
   "title": "Cara Hentikan Scroll Horizontal dari flex-wrap nowrap",
   "desc": "Tata cara menemukan baris flex Clincoo yang memaksa scroll horizontal karena nowrap bawaan dan item yang tidak boleh menyusut.",
   "content": "<p class="mb-4">flex-wrap bawaan adalah nowrap. Semua item dipaksa satu baris, lalu halaman melebar jika jumlah min-content melebihi kontainer.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Cek wrap di kontainer, bukan di item</h2><p class="mb-4">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> pilih induk flex. Computed harus flex-wrap: wrap jika kartu boleh turun. nowrap hanya untuk toolbar yang memang satu baris dan punya scroll sendiri.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Uji 360px tanpa scroll halaman</h2><p class="mb-4">Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> sempitkan ke 360px. Scroll horizontal halaman harus hilang. Jika satu kartu tetap menahan, set min-width: 0 pada item itu. Simpan sebelum/sesudah di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — flex-wrap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap",
   "sourceSnippet": "The default value is nowrap, so flex items stay on a single line.",
   "source2": "MDN — Basic concepts of flexbox",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Stop Horizontal Scroll from flex-wrap: nowrap",
   "desc": "How to find a Clincoo flex row that forces horizontal scroll because of the default nowrap and items that cannot shrink.",
   "content": "<p class="mb-4">The default flex-wrap is nowrap. Every item is forced onto one line, then the page widens if the sum of min-content exceeds the container.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Check wrap on the container, not the item</h2><p class="mb-4">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> select the flex parent. Computed should be flex-wrap: wrap if cards may drop. Keep nowrap only for a toolbar that is meant to stay one row and has its own scroll.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Test 360px without page scroll</h2><p class="mb-4">On <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> narrow to 360px. Page-level horizontal scroll should disappear. If one card still holds the row open, set min-width: 0 on that item. Save the before and after on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — flex-wrap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap",
   "sourceSnippet": "The default value is nowrap, so flex items stay on a single line.",
   "source2": "MDN — Basic concepts of flexbox",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "flexbox-align-items-vs-align-content",
 "langs": {
  "id": {
   "title": "Cara Bedakan align-items dan align-content",
   "desc": "Tata cara memilih align-items untuk satu baris dan align-content saat baris flex Clincoo sudah wrap dan ada sisa ruang silang.",
   "content": "<p class="mb-4">align-items meratakan item di dalam satu baris. align-content meratakan baris-baris itu di dalam kontainer. Keduanya sering tertukar saat kartu turun.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Satu baris lawan banyak baris</h2><p class="mb-4">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> set dulu flex-wrap: wrap. align-items: center menengahkan item pada barisnya. align-content: space-between hanya terlihat jika tinggi kontainer lebih besar dari tinggi baris.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Jangan atur keduanya untuk gejala yang sama</h2><p class="mb-4">Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> tinggi kontainer dibuat tetap, lalu lihat apakah yang bergeser item atau seluruh baris. Catat properti yang benar-benar mengubah layout di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — align-items",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
   "sourceSnippet": "align-items sets the align-self value on all direct children as a group.",
   "source2": "MDN — align-content",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-content",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Tell align-items from align-content",
   "desc": "How to use align-items for a single flex line and align-content once Clincoo rows wrap and leftover cross-axis space appears.",
   "content": "<p class="mb-4">align-items aligns items inside a single line. align-content aligns those lines inside the container. They are often swapped once cards wrap.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">One line versus many lines</h2><p class="mb-4">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> set flex-wrap: wrap first. align-items: center centers items on their line. align-content: space-between only shows if the container is taller than the lines.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Do not set both for the same symptom</h2><p class="mb-4">On <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> give the container a fixed height, then see whether the items move or the whole line moves. Record the property that actually changes the layout on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — align-items",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
   "sourceSnippet": "align-items sets the align-self value on all direct children as a group.",
   "source2": "MDN — align-content",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-content",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "flexbox-gap-bukan-margin-antar-item",
 "langs": {
  "id": {
   "title": "Cara Pakai gap, Bukan Margin, di Antara Item Flex",
   "desc": "Tata cara mengganti margin kiri-kanan item flex Clincoo dengan gap agar jarak tidak dobel di tepi dan tidak rusak saat wrap.",
   "content": "<p class="mb-4">Margin pada setiap item menambah jarak di tepi dan tetap menempel saat item pindah baris. gap hanya mengisi celah antar item.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Set gap di induk</h2><p class="mb-4">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> pilih kontainer flex, set gap: 1rem, lalu hapus margin horizontal pada anak. Jangan gabungkan gap dan margin untuk jarak yang sama, hasilnya dobel.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Cek setelah wrap</h2><p class="mb-4">Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> sempitkan sampai item turun. Jarak vertikal harus ikut row-gap, bukan sisa margin bawah. Tulis nilai akhir di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — gap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/gap",
   "sourceSnippet": "The gap property sets the gutters between rows and columns, including in flex layout.",
   "source2": "MDN — Mastering wrapping of flex items",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use gap Instead of Margin Between Flex Items",
   "desc": "How to replace left and right margins on Clincoo flex items with gap so spacing is not doubled at the edges and does not break when the row wraps.",
   "content": "<p class="mb-4">Margin on every item adds space at the edges and stays stuck when an item moves to the next line. gap only fills the space between items.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Set gap on the parent</h2><p class="mb-4">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> select the flex container, set gap: 1rem, then remove horizontal margin on the children. Do not combine gap and margin for the same spacing, or the gap doubles.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Check after wrap</h2><p class="mb-4">On <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> narrow the page until items wrap. Vertical space should follow row-gap, not a leftover bottom margin. Write the final value on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — gap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/gap",
   "sourceSnippet": "The gap property sets the gutters between rows and columns, including in flex layout.",
   "source2": "MDN — Mastering wrapping of flex items",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "flexbox-order-dan-urutan-fokus",
 "langs": {
  "id": {
   "title": "Cara Pakai order Tanpa Mengacak Fokus Keyboard",
   "desc": "Tata cara memakai order pada flex Clincoo untuk urutan visual, lalu mengecek bahwa Tab tetap mengikuti urutan DOM.",
   "content": "<p class="mb-4">order hanya mengubah urutan visual. Tab, pembaca layar, dan urutan salin tetap mengikuti DOM. Memindahkan tombol utama dengan order sering membuat fokus terasa acak.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Ubah HTML jika urutan makna berubah</h2><p class="mb-4">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> pakai order hanya untuk dekorasi, misalnya badge. Jika tombol utama harus pertama secara makna, pindahkan elemen di HTML, bukan hanya di CSS.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Uji Tab setelah order</h2><p class="mb-4">Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> tekan Tab dari atas halaman. Fokus harus masuk akal meski kartu terlihat tertukar. Jika tidak, kembalikan order: 0 dan catat di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — order",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/order",
   "sourceSnippet": "The order property sets the order to lay out an item in a flex or grid container.",
   "source2": "MDN — Ordering flex items",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use order Without Scrambling Keyboard Focus",
   "desc": "How to use order on a Clincoo flex layout for visual order, then check that Tab still follows DOM order.",
   "content": "<p class="mb-4">order only changes visual order. Tab, screen readers, and copy order still follow the DOM. Moving the primary button with order often makes focus feel random.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Change the HTML if meaning order changes</h2><p class="mb-4">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> use order only for decoration, such as a badge. If the primary button must be first in meaning, move the element in HTML, not only in CSS.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Test Tab after order</h2><p class="mb-4">On <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> press Tab from the top of the page. Focus should still make sense even if cards look swapped. If it does not, set order back to 0 and note it on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — order",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/order",
   "sourceSnippet": "The order property sets the order to lay out an item in a flex or grid container.",
   "source2": "MDN — Ordering flex items",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
