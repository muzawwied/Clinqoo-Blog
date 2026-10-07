// Clincoo Docs — tambah artikel Subgrid 5-12 (7 Oktober 2026, 11:00 WIB)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.subgrid) return;
  var list = window.countryDataFiles.subgrid.articles;
  var extra = [
{
 "id": "subgrid-debug-track-tidak-diwariskan",
 "langs": {
  "id": {
   "title": "Cara Debug subgrid yang Tidak Mewarisi Track",
   "desc": "Tata cara mencari penyebab subgrid Clincoo tetap membuat kolom sendiri, bukan memakai jalur induk.",
   "content": "<p class=\"mb-4\">subgrid hanya mewarisi track jika induk adalah grid dan anak menulis grid-template-columns: subgrid atau grid-template-rows: subgrid. Tanpa itu, kartu membuat grid baru.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek induk dan nilai subgrid</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih kartu, buka Computed, dan pastikan display: grid ada di induk, bukan hanya di anak. Nilai subgrid yang tertimpa auto-fit berarti warisan gagal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji satu tingkat dulu</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> samakan jumlah span anak dengan jumlah track induk. Catat gejala di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum menambah wrapper baru.</p>",
   "source": "MDN — subgrid",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "sourceSnippet": "The subgrid value lets a grid item adopt the tracks of its parent grid.",
   "source2": "MDN — grid-template-columns",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug a subgrid That Does Not Inherit Tracks",
   "desc": "How to find why a Clincoo subgrid still creates its own columns instead of using the parent tracks.",
   "content": "<p class=\"mb-4\">subgrid inherits tracks only when the parent is a grid and the child sets grid-template-columns: subgrid or grid-template-rows: subgrid. Otherwise the card builds a new grid.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the parent and the subgrid value</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> select the card, open Computed, and confirm display: grid is on the parent, not only the child. A subgrid value overridden by auto-fit means inheritance failed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test one level first</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> match the child span count to the parent track count. Note the symptom on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before adding another wrapper.</p>",
   "source": "MDN — subgrid",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "sourceSnippet": "The subgrid value lets a grid item adopt the tracks of its parent grid.",
   "source2": "MDN — grid-template-columns",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "subgrid-dua-sumbu-kolom-dan-baris",
 "langs": {
  "id": {
   "title": "Cara Pakai subgrid di Kolom dan Baris Sekaligus",
   "desc": "Tata cara mewarisi jalur kolom dan baris induk agar judul, isi, dan aksi kartu Clincoo sejajar.",
   "content": "<p class=\"mb-4\">subgrid di satu sumbu hanya merapikan kolom atau baris. Kartu dengan tinggi isi berbeda tetap butuh baris bersama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set kedua sumbu</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis grid-template-columns: subgrid dan grid-template-rows: subgrid pada anak. Induk harus sudah punya track baris eksplisit, bukan hanya auto.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan campur span liar</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan tiap bagian kartu menempati baris yang sama. Simpan pola di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Subgrid",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "sourceSnippet": "You can use subgrid for columns, rows, or both.",
   "source2": "MDN — grid-template-rows",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use subgrid on Both Columns and Rows",
   "desc": "How to inherit both column and row tracks so Clincoo card titles, body, and actions line up.",
   "content": "<p class=\"mb-4\">subgrid on one axis only lines up columns or rows. Cards with uneven content still need shared rows.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set both axes</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set grid-template-columns: subgrid and grid-template-rows: subgrid on the child. The parent needs explicit row tracks, not only auto rows.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not mix loose spans</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> place each card part on the same row. Keep the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Subgrid",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "sourceSnippet": "You can use subgrid for columns, rows, or both.",
   "source2": "MDN — grid-template-rows",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "subgrid-named-lines-yang-diwariskan",
 "langs": {
  "id": {
   "title": "Cara Pakai Named Lines yang Diwariskan subgrid",
   "desc": "Tata cara menempatkan isi kartu Clincoo lewat nama garis induk, bukan nomor kolom yang mudah bergeser.",
   "content": "<p class=\"mb-4\">Nomor kolom pecah saat track ditambah. Nama garis ikut diwariskan oleh subgrid dan tetap stabil.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri nama di induk</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis grid-template-columns: [label] 8rem [isi] 1fr [aksi] auto. Anak subgrid lalu memakai grid-column: isi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek nama di DevTools</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> overlay grid harus menampilkan nama yang sama di kartu. Dokumentasikan nama di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Grid layout named lines",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines",
   "sourceSnippet": "Named lines let you place items by a line name instead of a number.",
   "source2": "MDN — subgrid",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Named Lines Inherited by subgrid",
   "desc": "How to place Clincoo card content with parent line names instead of column numbers that drift.",
   "content": "<p class=\"mb-4\">Column numbers break when tracks are added. Line names are inherited by subgrid and stay stable.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Name lines on the parent</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write grid-template-columns: [label] 8rem [body] 1fr [action] auto. The subgrid child then uses grid-column: body.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check names in DevTools</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> the grid overlay should show the same names inside the card. Document the names on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Grid layout named lines",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines",
   "sourceSnippet": "Named lines let you place items by a line name instead of a number.",
   "source2": "MDN — subgrid",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "subgrid-align-konten-tanpa-merusak-track",
 "langs": {
  "id": {
   "title": "Cara Rata Isi subgrid Tanpa Merusak Track Induk",
   "desc": "Tata cara memakai justify-self dan align-self di kartu Clincoo tanpa mengubah lebar jalur yang diwariskan.",
   "content": "<p class=\"mb-4\">justify-items di anak subgrid menggeser isi, bukan ukuran track induk. Mengubah grid-template-columns anak justru memutus warisan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Rata isi, jangan track</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> biarkan subgrid, lalu set justify-self: start pada label dan justify-self: end pada aksi. Lebar kolom tetap milik induk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan sebelum sesudah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ukur garis kolom sebelum dan sesudah align. Jika garis pindah, ada properti track yang menimpa subgrid. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Box alignment in grid",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout",
   "sourceSnippet": "Alignment properties position items inside grid areas without defining the tracks.",
   "source2": "MDN — justify-self",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Align subgrid Content Without Breaking Parent Tracks",
   "desc": "How to use justify-self and align-self in Clincoo cards without changing inherited track sizes.",
   "content": "<p class=\"mb-4\">justify-items on a subgrid child moves content, not the parent track size. Changing the child grid-template-columns cuts inheritance.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Align content, not tracks</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> keep subgrid, then set justify-self: start on labels and justify-self: end on actions. Column width stays with the parent.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare before and after</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> measure column lines before and after alignment. If a line moves, a track property is overriding subgrid. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Box alignment in grid",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout",
   "sourceSnippet": "Alignment properties position items inside grid areas without defining the tracks.",
   "source2": "MDN — justify-self",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "subgrid-cek-dukungan-di-devtools",
 "langs": {
  "id": {
   "title": "Cara Cek Dukungan subgrid di DevTools",
   "desc": "Tata cara memastikan browser dan pratinjau Clincoo benar-benar memakai subgrid, bukan fallback diam-diam.",
   "content": "<p class=\"mb-4\">Layout yang terlihat rapi bisa berasal dari grid biasa. Dukungan subgrid harus dicek di Computed, bukan hanya dari tampilan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca nilai computed</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih anak, lihat grid-template-columns. Nilai subgrid berarti didukung. Nilai repeat atau angka berarti fallback atau properti tertimpa.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji overlay grid</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> nyalakan grid overlay. Garis anak harus menyambung ke garis induk. Simpan tangkapan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome Developers — CSS grid debugging",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/grid",
   "sourceSnippet": "DevTools can overlay grid lines and show the computed grid template.",
   "source2": "MDN — subgrid",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Check subgrid Support in DevTools",
   "desc": "How to confirm the browser and Clincoo preview are actually using subgrid, not a silent fallback.",
   "content": "<p class=\"mb-4\">A tidy layout can come from a normal grid. subgrid support must be checked in Computed, not only by looking at the page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read the computed value</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> select the child and read grid-template-columns. A subgrid value means it is supported. A repeat or length value means a fallback or an override.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test the grid overlay</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> turn on the grid overlay. Child lines should meet the parent lines. Save the capture on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome Developers — CSS grid debugging",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/grid",
   "sourceSnippet": "DevTools can overlay grid lines and show the computed grid template.",
   "source2": "MDN — subgrid",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
,
{
 "id": "subgrid-span-melebihi-jumlah-track",
 "langs": {
  "id": {
   "title": "Cara Debug Span subgrid yang Melebihi Jumlah Track",
   "desc": "Tata cara memperbaiki kartu subgrid yang meluber karena span lebih besar dari track induk.",
   "content": "<p class=\"mb-4\">Span yang lebih besar dari jumlah track induk membuat item subgrid meluber atau pindah baris tanpa pesan error di konsol.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hitung track, lalu span</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka panel Grid. Catat jumlah kolom induk, lalu bandingkan dengan grid-column: span N pada anak. Jika N lebih besar, kecilkan span atau tambah track induk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau sempit</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> sempitkan pratinjau. Span yang aman di desktop sering pecah di ponsel. Simpan cuplikan gejala di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum mengubah template.</p>",
   "source": "MDN — grid-column",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column",
   "sourceSnippet": "The grid-column CSS shorthand specifies a grid item's size and location within the grid column.",
   "source2": "MDN — subgrid",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug a subgrid Span That Exceeds the Track Count",
   "desc": "How to fix a subgrid card that overflows because its span is larger than the parent tracks.",
   "content": "<p class=\"mb-4\">A span larger than the parent track count makes a subgrid item overflow or wrap with no console error.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Count tracks, then the span</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open the Grid overlay. Note the parent column count, then compare it with grid-column: span N on the child. If N is larger, shrink the span or add a parent track.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the narrow preview</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> narrow the preview. A span that is safe on desktop often breaks on a phone. Save the symptom on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before changing the template.</p>",
   "source": "MDN — grid-column",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column",
   "sourceSnippet": "The grid-column CSS shorthand specifies a grid item's size and location within the grid column.",
   "source2": "MDN — subgrid",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "subgrid-areas-tidak-diwariskan",
 "langs": {
  "id": {
   "title": "Cara Mengganti grid-template-areas yang Tidak Diwariskan subgrid",
   "desc": "Tata cara menyusun ulang area kartu karena subgrid mewarisi track, bukan nama area induk.",
   "content": "<p class=\"mb-4\">subgrid mewarisi ukuran track dan nama garis, tetapi tidak menyalin grid-template-areas induk. Anak yang memakai nama area lama akan jatuh ke penempatan otomatis.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti area dengan garis</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis penempatan anak memakai grid-column dan grid-row, atau named lines yang memang diwariskan. Jangan mengharapkan nama area seperti header tetap ada di kartu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu kartu sebagai contoh</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> perbaiki satu kartu dulu, lalu salin pola ke kartu lain. Catat pemetaan lama ke baru di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — subgrid",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "sourceSnippet": "The subgrid value lets a grid item inherit the parent grid's tracks rather than defining its own.",
   "source2": "MDN — grid-template-areas",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Replace grid-template-areas That subgrid Does Not Inherit",
   "desc": "How to rebuild card areas because subgrid inherits tracks, not the parent's area names.",
   "content": "<p class=\"mb-4\">subgrid inherits track sizes and line names, but it does not copy the parent grid-template-areas. A child that still uses the old area name falls back to auto placement.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Replace areas with lines</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> place children with grid-column and grid-row, or with named lines that are actually inherited. Do not expect an area name such as header to exist on the card.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Fix one card first</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> fix one card, then copy the pattern. Record the old-to-new mapping on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — subgrid",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "sourceSnippet": "The subgrid value lets a grid item inherit the parent grid's tracks rather than defining its own.",
   "source2": "MDN — grid-template-areas",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "subgrid-debug-baris-tidak-sejajar",
 "langs": {
  "id": {
   "title": "Cara Debug Baris subgrid yang Tidak Sejajar",
   "desc": "Tata cara menyejajarkan baris kartu subgrid yang tingginya berbeda karena konten, bukan karena track.",
   "content": "<p class=\"mb-4\">Baris yang tidak sejajar biasanya berarti anak belum memakai grid-template-rows: subgrid, atau jumlah baris anak tidak sama dengan track induk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Samakan sumbu baris</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> setel grid-template-rows: subgrid pada kartu dan pastikan induk punya track baris yang eksplisit. Tinggi otomatis dari paragraf tidak akan menyamakan label jika track baris tidak diwariskan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan dua kartu</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> isi satu kartu dengan teks pendek dan satu dengan teks panjang. Jika garis label tetap sebaris, warisan baris sudah benar. Simpan tangkapan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — subgrid",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "sourceSnippet": "Using subgrid on rows lets nested items align to the same row tracks as the parent grid.",
   "source2": "MDN — grid-template-rows",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug subgrid Rows That Do Not Line Up",
   "desc": "How to align subgrid card rows whose heights differ because of content, not tracks.",
   "content": "<p class=\"mb-4\">Rows that do not line up usually mean the child is not using grid-template-rows: subgrid, or the child row count does not match the parent tracks.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match the row axis</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set grid-template-rows: subgrid on the card and make sure the parent has explicit row tracks. Auto height from a paragraph will not align labels if row tracks are not inherited.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare two cards</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> fill one card with short text and one with long text. If the label lines stay aligned, row inheritance is working. Save a capture on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — subgrid",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
   "sourceSnippet": "Using subgrid on rows lets nested items align to the same row tracks as the parent grid.",
   "source2": "MDN — grid-template-rows",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
  ];
  extra.forEach(function (item) {
    if (!list.some(function (a) { return a.id === item.id; })) list.push(item);
  });
})();
