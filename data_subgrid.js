// Clincoo Docs — kategori Subgrid (7 Oktober 2026, 09:00 WIB) — 5 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["subgrid"] = {
 "names": { "id": "Subgrid", "en": "Subgrid" },
 "articles": [
{
 "id": "subgrid-wariskan-kolom-ke-kartu",
 "langs": {
  "id": {
   "title": "Cara Wariskan Kolom Grid ke Kartu Anak dengan subgrid",
   "desc": "Tata cara menyelaraskan isi kartu Clincoo dengan subgrid agar kolom induk tidak pecah per kartu.",
   "content": "<p class=\"mb-4\">Kartu yang masing-masing punya grid sendiri membuat judul dan tombol tidak sejajar. subgrid memakai jalur kolom induk sehingga baris kartu tetap rata.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set grid-template-columns subgrid</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat induk dengan grid-template-columns yang tetap, lalu pada kartu set display: grid dan grid-template-columns: subgrid serta grid-column: 1 / -1. Jangan ulang definisi fr di dalam kartu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di pratinjau sempit</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ubah jumlah kolom induk lewat media query. Kartu harus mengikuti, bukan membuat scroll horizontal. Simpan cuplikan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — subgrid",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "sourceSnippet": "The subgrid value of grid-template-columns and grid-template-rows lets a grid item use the tracks of its parent grid.",
   "source2": "MDN — grid-template-columns",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Inherit Parent Grid Columns in Cards with subgrid",
   "desc": "How to align Clincoo card content with subgrid so the parent columns do not break per card.",
   "content": "<p class=\"mb-4\">Cards that each own a grid make titles and buttons misalign. subgrid uses the parent column tracks so card rows stay even.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set grid-template-columns to subgrid</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> give the parent fixed grid-template-columns, then on the card set display: grid, grid-template-columns: subgrid, and grid-column: 1 / -1. Do not repeat the fr definition inside the card.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the narrow preview</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> change the parent column count with a media query. Cards should follow, not create horizontal scroll. Save the snippet on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — subgrid",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "sourceSnippet": "The subgrid value of grid-template-columns and grid-template-rows lets a grid item use the tracks of its parent grid.",
   "source2": "MDN — grid-template-columns",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "subgrid-samakan-baris-form",
 "langs": {
  "id": {
   "title": "Cara Samakan Baris Label Form dengan subgrid",
   "desc": "Tata cara meratakan label dan input Clincoo di beberapa kolom form memakai subgrid, bukan tinggi tetap.",
   "content": "<p class=\"mb-4\">Label yang membungkus dua baris membuat input di kolom sebelah turun tidak rata. subgrid pada baris memakai jalur induk sehingga input tetap sejajar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri induk baris yang bisa diwariskan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set grid-template-rows pada induk form, lalu pada tiap grup label-input set grid-template-rows: subgrid. Jangan kunci height pada label.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji pesan error</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tampilkan pesan error di bawah satu input. Baris lain tidak boleh meloncat. Fokus keyboard tetap masuk ke input yang salah. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — subgrid",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "sourceSnippet": "A subgrid participates in the sizing of the parent grid tracks.",
   "source2": "MDN — grid-template-rows",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Align Form Label Rows with subgrid",
   "desc": "How to line up Clincoo labels and inputs across form columns with subgrid, not a fixed height.",
   "content": "<p class=\"mb-4\">A label that wraps to two lines makes the input in the next column drop out of line. Row subgrid uses the parent tracks so inputs stay aligned.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Give the parent inheritable rows</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set grid-template-rows on the form parent, then on each label-input group set grid-template-rows: subgrid. Do not lock a height on the label.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test an error message</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> show an error under one input. Other rows should not jump. Keyboard focus should still enter the invalid input. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — subgrid",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "sourceSnippet": "A subgrid participates in the sizing of the parent grid tracks.",
   "source2": "MDN — grid-template-rows",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "subgrid-hindari-gap-ganda",
 "langs": {
  "id": {
   "title": "Cara Hindari Gap Ganda saat Pakai subgrid",
   "desc": "Tata cara mencegah jarak dobel di Clincoo ketika gap induk dan gap anak sama-sama aktif pada subgrid.",
   "content": "<p class=\"mb-4\">subgrid mewarisi jalur, tetapi gap pada anak menambah jarak lagi di atas gap induk. Hasilnya kartu terlihat renggang tidak merata.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Nolkan gap anak</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set gap: 0 pada elemen yang memakai subgrid. Biarkan gap hanya di induk. Jika butuh jarak dalam kartu, pakai padding pada isi, bukan gap kedua.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur di Computed</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bandingkan jarak antar kolom induk dan antar isi kartu. Keduanya harus sama. Simpan sebelum-sesudah di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — gap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/gap",
   "sourceSnippet": "The gap CSS shorthand property sets the gaps between rows and columns.",
   "source2": "MDN — subgrid",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid a Double Gap when Using subgrid",
   "desc": "How to stop doubled spacing in Clincoo when both parent and child gaps are active on a subgrid.",
   "content": "<p class=\"mb-4\">subgrid inherits tracks, but a gap on the child adds space on top of the parent gap. Cards then look unevenly loose.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Zero the child gap</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set gap: 0 on the element that uses subgrid. Leave gap only on the parent. If the card needs inner space, use padding on the content, not a second gap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure in Computed</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> compare the parent column gap with the gap inside the card. They should match. Save before-and-after on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — gap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/gap",
   "sourceSnippet": "The gap CSS shorthand property sets the gaps between rows and columns.",
   "source2": "MDN — subgrid",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "subgrid-fallback-browser-lama",
 "langs": {
  "id": {
   "title": "Cara Beri Fallback subgrid untuk Browser Lama",
   "desc": "Tata cara menyediakan grid biasa di Clincoo bila subgrid belum didukung, tanpa merusak layout baru.",
   "content": "<p class=\"mb-4\">subgrid belum ada di semua browser yang masih dipakai. Tanpa fallback, kartu bisa tumpuk jadi satu kolom atau hilang jalur.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bungkus dengan @supports</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis layout grid biasa dulu. Lalu di dalam @supports (grid-template-columns: subgrid) timpa dengan subgrid. Jangan taruh subgrid di luar dukungan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dua pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> cek browser yang mendukung dan yang tidak. Keduanya harus tetap bisa di-tab dan tidak overflow. Tulis catatan dukungan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @supports",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@supports",
   "sourceSnippet": "The @supports CSS at-rule lets you specify declarations that depend on a browser's support for CSS features.",
   "source2": "MDN — subgrid",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Provide a subgrid Fallback for Older Browsers",
   "desc": "How to ship a normal grid in Clincoo when subgrid is unsupported, without breaking the new layout.",
   "content": "<p class=\"mb-4\">subgrid is not in every browser still in use. Without a fallback, cards can collapse into one column or lose their tracks.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Wrap the enhancement in @supports</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write the normal grid first. Then inside @supports (grid-template-columns: subgrid) override with subgrid. Do not put subgrid outside the support query.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test two previews</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> check a supporting browser and one that does not. Both should stay keyboard reachable and not overflow. Write the support note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @supports",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@supports",
   "sourceSnippet": "The @supports CSS at-rule lets you specify declarations that depend on a browser's support for CSS features.",
   "source2": "MDN — subgrid",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "subgrid-selaraskan-header-konten",
 "langs": {
  "id": {
   "title": "Cara Selaraskan Header dan Konten dengan Subgrid",
   "desc": "Tata cara menyelaraskan header sticky dan konten utama Clincoo menggunakan subgrid agar kolom tetap rata.",
   "content": "<p class=\"mb-4\">Header dan konten yang tidak memakai jalur grid yang sama membuat tombol aksi tidak sejajar dengan judul di bawahnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gunakan subgrid pada konten</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set grid pada body atau wrapper, lalu header dan main memakai grid-template-columns: subgrid. Header dapat span semua kolom.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji scroll dan resize</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir dan ubah lebar. Kolom harus tetap rata. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — subgrid",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "sourceSnippet": "subgrid allows child grids to align to the parent tracks.",
   "source2": "MDN — CSS Grid",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Align Header and Content with Subgrid",
   "desc": "How to align a sticky header and main content in Clincoo using subgrid so columns stay even.",
   "content": "<p class=\"mb-4\">A header and content that do not share the same grid tracks make action buttons misalign with the title below.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use subgrid on the content</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set a grid on the body or wrapper, then have the header and main use grid-template-columns: subgrid. The header can span all columns.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test scroll and resize</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll and change the width. Columns should stay aligned. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — subgrid",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "sourceSnippet": "subgrid allows child grids to align to the parent tracks.",
   "source2": "MDN — CSS Grid",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
