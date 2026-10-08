// Clincoo Docs — kategori Aspect (8 Oktober 2026, 16:00 WIB) — tambah 5 artikel
// Clincoo Docs — kategori Aspect (8 Oktober 2026, 15:00 WIB) — 5 artikel baru
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["aspect"] = {
 "names": { "id": "Aspect", "en": "Aspect" },
 "articles": [
{
 "id": "aspect-cadangkan-kotak-gambar-sebelum-muat",
 "langs": {
  "id": {
   "title": "Cara Cadangkan Kotak Gambar dengan aspect-ratio Sebelum Muat",
   "desc": "Tata cara memakai aspect-ratio di Clincoo supaya gambar tidak mendorong tata letak saat berkas belum selesai diunduh.",
   "content": "<p class=\"mb-4\">Gambar tanpa ukuran cadangan membuat kartu melonjak begitu berkas selesai. Di Clincoo, rasio sebaiknya ditulis di CSS sebelum src dimuat, bukan ditebak setelah gambar tampil.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis rasio di pembungkus</h2><p class=\"mb-4\">Beri pembungkus <code>aspect-ratio: 3 / 2</code> dan <code>width: 100%</code>. Gambar di dalamnya memakai <code>width: 100%</code>, <code>height: 100%</code>, dan <code>object-fit: cover</code>. Jangan andalkan atribut width saja kalau tinggi tidak ikut.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cocokkan dengan berkas asli</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> catat lebar dan tinggi asli, lalu samakan rasio. Pratinjau di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan jaringan lambat: kotak harus sudah ada sebelum gambar terlihat. Catatan langkahnya bisa disimpan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — aspect-ratio",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "sourceSnippet": "The aspect-ratio CSS property sets a preferred aspect ratio for the box, which is used in calculating auto sizes and some other layout functions.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Reserve an Image Box with aspect-ratio Before It Loads",
   "desc": "How to use aspect-ratio in Clincoo so an image does not push the layout before the file finishes downloading.",
   "content": "<p class=\"mb-4\">An image without a reserved size makes the card jump when the file arrives. In Clincoo, set the ratio in CSS before the src loads, not after the picture appears.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Put the ratio on the wrapper</h2><p class=\"mb-4\">Give the wrapper <code>aspect-ratio: 3 / 2</code> and <code>width: 100%</code>. The image inside uses <code>width: 100%</code>, <code>height: 100%</code>, and <code>object-fit: cover</code>. Do not rely on the width attribute alone if height is missing.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match the real file</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> note the original width and height, then match the ratio. Preview in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> on a slow network: the box should exist before the image is visible. Keep the steps on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — aspect-ratio",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "sourceSnippet": "The aspect-ratio CSS property sets a preferred aspect ratio for the box, which is used in calculating auto sizes and some other layout functions.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "aspect-object-fit-cover-dan-posisi",
 "langs": {
  "id": {
   "title": "Cara Pakai object-fit cover tanpa Memotong Bagian Penting",
   "desc": "Tata cara memilih cover atau contain, lalu menggeser object-position supaya wajah atau produk tetap di dalam bingkai Clincoo.",
   "content": "<p class=\"mb-4\">cover mengisi bingkai dan memotong sisi. contain menampilkan seluruh gambar dan menyisakan pita kosong. Pilihan yang salah bikin potret terpotong di dagu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dua mode</h2><p class=\"mb-4\">Untuk foto produk, mulai dari <code>object-fit: contain</code> dengan latar netral. Untuk sampul, pakai cover lalu set <code>object-position: center 30%</code> supaya titik fokus tidak selalu di tengah matematis.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan memotong dengan overflow diam-diam</h2><p class=\"mb-4\">Di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ubah lebar kartu. Jika bagian penting hilang, geser object-position, jangan mengecilkan rasio diam-diam. Simpan contoh sebelum-sesudah di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p>",
   "source": "MDN — object-fit",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",
   "sourceSnippet": "The object-fit CSS property sets how the content of a replaced element should be resized to fit its container.",
   "source2": "MDN — object-position",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/object-position",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use object-fit cover without Cropping the Important Part",
   "desc": "How to choose cover or contain, then shift object-position so a face or product stays inside the Clincoo frame.",
   "content": "<p class=\"mb-4\">cover fills the frame and crops the edges. contain shows the whole image and leaves empty bands. The wrong choice cuts a portrait at the chin.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Try both modes</h2><p class=\"mb-4\">For a product photo, start with <code>object-fit: contain</code> and a neutral background. For a cover, use cover then set <code>object-position: center 30%</code> so the focal point is not always the mathematical center.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not crop with silent overflow</h2><p class=\"mb-4\">In the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview, change the card width. If the important part disappears, shift object-position instead of quietly changing the ratio. Save a before-and-after note in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p>",
   "source": "MDN — object-fit",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",
   "sourceSnippet": "The object-fit CSS property sets how the content of a replaced element should be resized to fit its container.",
   "source2": "MDN — object-position",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/object-position",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "aspect-video-16-9-tanpa-trik-padding",
 "langs": {
  "id": {
   "title": "Cara Bingkai Video 16:9 tanpa Trik padding-bottom",
   "desc": "Tata cara mengganti trik padding-bottom pada video Clincoo dengan aspect-ratio supaya tinggi mengikuti lebar.",
   "content": "<p class=\"mb-4\">Trik padding-bottom 56.25% masih dipakai di cuplikan lama. aspect-ratio: 16 / 9 melakukan hal yang sama dengan satu properti dan tidak butuh elemen absolut di dalam.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang pada pembungkus video</h2><p class=\"mb-4\">Pembungkus: <code>aspect-ratio: 16 / 9</code>, <code>width: 100%</code>, <code>max-width</code> sesuai kolom. Elemen video atau iframe: <code>width: 100%</code>, <code>height: 100%</code>, <code>border: 0</code>. Jangan set tinggi piksel tetap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji saat kolom menyempit</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> kecilkan lebar pratinjau. Tinggi harus ikut turun. Jika muncul bilah gulir di dalam bingkai, hapus tinggi tetap yang masih tertinggal di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p>",
   "source": "MDN — aspect-ratio",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "sourceSnippet": "aspect-ratio can replace the older padding-bottom technique used to keep embedded videos at 16:9.",
   "source2": "CSS-Tricks — Aspect Ratio Boxes",
   "source2Url": "https://css-tricks.com/aspect-ratio-boxes/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Frame a 16:9 Video without the padding-bottom Hack",
   "desc": "How to replace the padding-bottom hack on a Clincoo video with aspect-ratio so height follows width.",
   "content": "<p class=\"mb-4\">The 56.25% padding-bottom hack still appears in old snippets. aspect-ratio: 16 / 9 does the same job with one property and does not need an absolutely positioned child.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Put it on the video wrapper</h2><p class=\"mb-4\">Wrapper: <code>aspect-ratio: 16 / 9</code>, <code>width: 100%</code>, and a <code>max-width</code> that matches the column. The video or iframe: <code>width: 100%</code>, <code>height: 100%</code>, <code>border: 0</code>. Do not set a fixed pixel height.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test when the column narrows</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> shrink the preview width. Height should drop with it. If a scrollbar appears inside the frame, remove the leftover fixed height in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p>",
   "source": "MDN — aspect-ratio",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "sourceSnippet": "aspect-ratio can replace the older padding-bottom technique used to keep embedded videos at 16:9.",
   "source2": "CSS-Tricks — Aspect Ratio Boxes",
   "source2Url": "https://css-tricks.com/aspect-ratio-boxes/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "aspect-kartu-produk-rasio-sama",
 "langs": {
  "id": {
   "title": "Cara Samakan Rasio Kartu Produk di Grid",
   "desc": "Tata cara memaksa setiap gambar produk Clincoo memakai rasio yang sama supaya baris grid tidak bergerigi.",
   "content": "<p class=\"mb-4\">Foto pemasok punya rasio campur. Jika tiap gambar mengatur tingginya sendiri, baris grid bergerigi dan tombol beli tidak sejajar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu rasio untuk semua kartu</h2><p class=\"mb-4\">Pilih satu rasio, misalnya 1 / 1 atau 4 / 5, di kelas gambar. <code>object-fit: cover</code> merapikan sisi. Jangan baca tinggi asli lewat skrip hanya untuk meniru foto pertama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek baris setelah data berganti</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ganti daftar produk. Tombol di bawah gambar harus tetap sebaris. Jika satu kartu lebih tinggi, cari gambar yang tidak memakai kelas rasio di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p>",
   "source": "MDN — aspect-ratio",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "sourceSnippet": "A preferred aspect ratio keeps replaced content from defining a different block size in each grid item.",
   "source2": "MDN — object-fit",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Keep Product Card Ratios the Same in a Grid",
   "desc": "How to force every Clincoo product image to share one ratio so a grid row does not turn jagged.",
   "content": "<p class=\"mb-4\">Supplier photos mix ratios. If each image sets its own height, the grid row turns jagged and buy buttons no longer line up.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One ratio for every card</h2><p class=\"mb-4\">Pick one ratio, such as 1 / 1 or 4 / 5, on the image class. <code>object-fit: cover</code> tidies the edges. Do not read the intrinsic height in script just to copy the first photo.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the row after data changes</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> swap the product list. Buttons under the images should stay on one line. If one card is taller, find the image missing the ratio class in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p>",
   "source": "MDN — aspect-ratio",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "sourceSnippet": "A preferred aspect ratio keeps replaced content from defining a different block size in each grid item.",
   "source2": "MDN — object-fit",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "aspect-jangan-gabung-tinggi-tetap",
 "langs": {
  "id": {
   "title": "Cara Hindari Bentrok aspect-ratio dan Tinggi Tetap",
   "desc": "Tata cara melepas tinggi piksel yang menimpa aspect-ratio di Clincoo supaya rasio yang ditulis benar-benar dipakai.",
   "content": "<p class=\"mb-4\">aspect-ratio kalah jika tinggi dan lebar sama-sama pasti. Gejalanya: rasio tertulis 16 / 9 tetapi kotak tetap 200px dan gambar penyok.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Biarkan satu sumbu otomatis</h2><p class=\"mb-4\">Set lebar, biarkan tinggi auto, lalu tulis aspect-ratio. Hapus <code>height: 200px</code> dan <code>min-height</code> yang menyamai tinggi lama. min-height hanya untuk batas, bukan untuk mengganti rasio.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lihat di panel Computed</h2><p class=\"mb-4\">Di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka Computed. Jika tinggi tidak berubah saat lebar berubah, ada aturan lain yang menang. Catat selektor pemenang di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> sebelum mengubah rasio lagi.</p>",
   "source": "MDN — aspect-ratio",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "sourceSnippet": "If both width and height are definite, aspect-ratio is ignored for the used size.",
   "source2": "CSSWG — CSS Sizing",
   "source2Url": "https://drafts.csswg.org/css-sizing-4/#aspect-ratio",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid a Clash between aspect-ratio and a Fixed Height",
   "desc": "How to remove a pixel height that overrides aspect-ratio in Clincoo so the ratio you wrote is actually used.",
   "content": "<p class=\"mb-4\">aspect-ratio loses when both height and width are definite. The symptom: the ratio says 16 / 9 but the box stays 200px and the image looks squashed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Leave one axis automatic</h2><p class=\"mb-4\">Set the width, leave height auto, then write aspect-ratio. Remove <code>height: 200px</code> and any <code>min-height</code> copied from the old layout. min-height is a floor, not a replacement for the ratio.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the Computed pane</h2><p class=\"mb-4\">In the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview open Computed. If height does not change when width changes, another rule is winning. Note the winning selector in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> before changing the ratio again.</p>",
   "source": "MDN — aspect-ratio",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "sourceSnippet": "If both width and height are definite, aspect-ratio is ignored for the used size.",
   "source2": "CSSWG — CSS Sizing",
   "source2Url": "https://drafts.csswg.org/css-sizing-4/#aspect-ratio",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
,
{
 "id": "aspect-avatar-kotak-1-1",
 "langs": {
  "id": {
   "title": "Cara Kunci Avatar Persegi dengan aspect-ratio 1 / 1",
   "desc": "Tata cara membuat foto profil Clincoo tetap persegi saat gambar gagal dimuat atau ukurannya beda.",
   "content": "<p class="mb-4">Foto profil yang lebarnya mengikuti gambar asli membuat baris nama bergeser. Di Clincoo, kotak avatar sebaiknya dikunci dulu, baru src diisi.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Kunci sumbu sebelum src</h2><p class="mb-4">Beri elemen lebar tetap, misalnya 40px, lalu <code>aspect-ratio: 1 / 1</code> dan <code>object-fit: cover</code>. Jangan set tinggi dan lebar sekaligus dari piksel gambar. Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> simpan aturan ini di kelas avatar, bukan inline pada tiap kartu.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Cadangkan jika gambar gagal</h2><p class="mb-4">Di pratinjau <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> matikan jaringan sebentar. Kotak harus tetap persegi dan inisial nama tetap di tengah. Kalau kotak pipih, tinggi masih ikut atribut height gambar.</p>",
   "source": "MDN — aspect-ratio",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "sourceSnippet": "aspect-ratio sets a preferred aspect ratio for the box, used when one axis is automatic.",
   "source2": "MDN — object-fit",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Lock a Square Avatar with aspect-ratio 1 / 1",
   "desc": "How to keep a Clincoo profile photo square when the image fails or arrives at a different size.",
   "content": "<p class="mb-4">A profile photo that sizes itself from the file shifts the name row. In Clincoo, lock the avatar box first, then set src.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Lock an axis before src</h2><p class="mb-4">Give the element a fixed width, for example 40px, then <code>aspect-ratio: 1 / 1</code> and <code>object-fit: cover</code>. Do not set both height and width from the image pixels. In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> keep this on the avatar class, not inline on every card.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Reserve the box if the image fails</h2><p class="mb-4">In the <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> preview, drop the network briefly. The box should stay square and the initials stay centered. If it collapses, height is still following the image height attribute.</p>",
   "source": "MDN — aspect-ratio",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "sourceSnippet": "aspect-ratio sets a preferred aspect ratio for the box, used when one axis is automatic.",
   "source2": "MDN — object-fit",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "aspect-skeleton-samakan-rasio-akhir",
 "langs": {
  "id": {
   "title": "Cara Samakan Skeleton dengan Rasio Konten Akhir",
   "desc": "Tata cara menulis aspect-ratio pada placeholder Clincoo supaya pergantian ke gambar tidak menggeser tata letak.",
   "content": "<p class="mb-4">Skeleton yang tingginya 120px lalu diganti gambar 16:9 membuat kartu melonjak. Rasio cadangan harus sama dengan rasio konten akhir.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Satu rasio untuk dua keadaan</h2><p class="mb-4">Beri div skeleton dan img penggantinya <code>aspect-ratio</code> yang sama, misalnya <code>16 / 9</code>. Lebar mengikuti kolom, tinggi dihitung browser. Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> jangan animasikan height dari 0 ke auto.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Ukur lompatan di pratinjau</h2><p class="mb-4">Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> throttle jaringan ke Slow 3G. Judul di bawah gambar tidak boleh bergeser saat skeleton hilang. Kalau bergeser, rasio placeholder dan gambar belum sama.</p>",
   "source": "web.dev — Optimize CLS",
   "sourceUrl": "https://web.dev/articles/optimize-cls",
   "sourceSnippet": "Always include width and height size attributes, or an equivalent reserved space, on images and video.",
   "source2": "MDN — aspect-ratio",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Match a Skeleton to the Final Content Ratio",
   "desc": "How to set aspect-ratio on a Clincoo placeholder so swapping in the image does not shift the layout.",
   "content": "<p class="mb-4">A 120px skeleton swapped for a 16:9 image makes the card jump. The reserved ratio must match the final content.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">One ratio for both states</h2><p class="mb-4">Give the skeleton div and the image that replaces it the same <code>aspect-ratio</code>, for example <code>16 / 9</code>. Width follows the column; the browser computes height. In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> do not animate height from 0 to auto.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Measure the jump in preview</h2><p class="mb-4">In <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> throttle the network to Slow 3G. The title under the image must not move when the skeleton leaves. If it moves, the placeholder and image ratios still differ.</p>",
   "source": "web.dev — Optimize CLS",
   "sourceUrl": "https://web.dev/articles/optimize-cls",
   "sourceSnippet": "Always include width and height size attributes, or an equivalent reserved space, on images and video.",
   "source2": "MDN — aspect-ratio",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "aspect-iframe-peta-tanpa-tinggi-ajaib",
 "langs": {
  "id": {
   "title": "Cara Bingkai Iframe Peta tanpa Tinggi Ajaib",
   "desc": "Tata cara mengganti height piksel pada iframe peta Clincoo dengan aspect-ratio supaya proporsi ikut lebar kolom.",
   "content": "<p class="mb-4">Iframe peta dengan <code>height: 400px</code> terlihat baik di desktop lalu jadi pita tipis di ponsel, atau memakan seluruh layar. Rasio lebih stabil daripada tinggi ajaib.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Bungkus lalu kunci rasio</h2><p class="mb-4">Bungkus iframe dalam div dengan <code>aspect-ratio: 4 / 3</code> atau <code>16 / 9</code>, lebar 100%, dan iframe <code>width: 100%; height: 100%</code>. Hapus atribut height bawaan embed. Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> catat rasio di komentar CSS supaya orang berikutnya tidak mengembalikan 400px.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Cek di lebar sempit</h2><p class="mb-4">Di pratinjau <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> kecilkan jendela ke 360px. Peta harus tetap proporsional dan tidak mendorong footer keluar viewport secara tiba-tiba. Jika iframe menolak mengisi bungkus, pembungkus belum punya tinggi terhitung.</p>",
   "source": "MDN — aspect-ratio",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "sourceSnippet": "The aspect-ratio property can size a box when only one of width or height is specified.",
   "source2": "MDN — iframe",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Frame a Map Iframe without a Magic Height",
   "desc": "How to replace a pixel height on a Clincoo map iframe with aspect-ratio so the proportion follows the column width.",
   "content": "<p class="mb-4">A map iframe with <code>height: 400px</code> looks fine on desktop, then becomes a thin strip on a phone, or eats the screen. A ratio is more stable than a magic height.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Wrap it, then lock the ratio</h2><p class="mb-4">Wrap the iframe in a div with <code>aspect-ratio: 4 / 3</code> or <code>16 / 9</code>, width 100%, and set the iframe to <code>width: 100%; height: 100%</code>. Remove the embed's default height attribute. In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> note the ratio in a CSS comment so the next edit does not restore 400px.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Check a narrow width</h2><p class="mb-4">In the <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> preview, shrink the window to 360px. The map should stay proportional and should not shove the footer out of the viewport all at once. If the iframe refuses to fill the wrapper, the wrapper has no computed height yet.</p>",
   "source": "MDN — aspect-ratio",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "sourceSnippet": "The aspect-ratio property can size a box when only one of width or height is specified.",
   "source2": "MDN — iframe",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "aspect-token-rasio-di-variabel",
 "langs": {
  "id": {
   "title": "Cara Simpan Token Rasio di Variabel CSS",
   "desc": "Tata cara menulis --ratio sekali di Clincoo lalu memakainya di kartu, hero, dan video tanpa mengulang angka.",
   "content": "<p class="mb-4">Rasio yang disalin sebagai 16/9, 1.77, dan 56.25% di file berbeda cepat tidak selaras. Satu token lebih mudah diaudit.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Satu custom property</h2><p class="mb-4">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> tetapkan <code>--ratio-media: 16 / 9</code> pada :root, lalu <code>aspect-ratio: var(--ratio-media)</code> pada kartu dan video. Jangan campur pecahan CSS dengan persen padding lama di selektor yang sama.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Ubah token, cek semua pemakai</h2><p class="mb-4">Ubah token menjadi <code>4 / 3</code> di pratinjau <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a>. Setiap kotak yang memakai var harus ikut berubah. Yang tidak berubah masih menulis rasio mentah.</p>",
   "source": "MDN — Using CSS custom properties",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "sourceSnippet": "Custom properties are entities defined by authors that contain specific values to be reused throughout a document.",
   "source2": "MDN — aspect-ratio",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Store a Ratio Token in a CSS Variable",
   "desc": "How to write --ratio once in Clincoo and reuse it on cards, heroes, and video without repeating numbers.",
   "content": "<p class="mb-4">A ratio copied as 16/9, 1.77, and 56.25% across files drifts quickly. One token is easier to audit.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">One custom property</h2><p class="mb-4">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> set <code>--ratio-media: 16 / 9</code> on :root, then <code>aspect-ratio: var(--ratio-media)</code> on cards and video. Do not mix a CSS ratio with the old padding percent on the same selector.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Change the token, check every user</h2><p class="mb-4">Switch the token to <code>4 / 3</code> in the <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> preview. Every box using the variable should follow. A box that does not change is still writing a raw ratio.</p>",
   "source": "MDN — Using CSS custom properties",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "sourceSnippet": "Custom properties are entities defined by authors that contain specific values to be reused throughout a document.",
   "source2": "MDN — aspect-ratio",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "aspect-media-query-orientasi-layar",
 "langs": {
  "id": {
   "title": "Cara Ubah Tata Letak dengan @media (aspect-ratio)",
   "desc": "Tata cara menata Clincoo untuk layar lebar versus tinggi memakai media query aspect-ratio, bukan hanya lebar piksel.",
   "content": "<p class="mb-4">Breakpoint 768px tidak membedakan tablet landscape dan ponsel yang diputar. Media query rasio layar menangkap orientasi tanpa mengira lebar.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Pilih rasio viewport</h2><p class="mb-4">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> tulis <code>@media (min-aspect-ratio: 4/3)</code> untuk baris dua kolom, dan <code>@media (max-aspect-ratio: 3/4)</code> untuk tumpukan. Ini rasio viewport, bukan aspect-ratio pada kotak gambar.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Putar pratinjau</h2><p class="mb-4">Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> ubah ukuran jendela dari tinggi ke lebar dengan lebar yang sama. Tata letak harus berpindah saat rasio melewati 1, bukan hanya saat lebar melewati 768. Kalau tidak berpindah, query masih memakai min-width.</p>",
   "source": "MDN — aspect-ratio media feature",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/aspect-ratio",
   "sourceSnippet": "The aspect-ratio CSS media feature can be used to apply styles based on the aspect ratio of the viewport.",
   "source2": "MDN — orientation",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Switch Layout with @media (aspect-ratio)",
   "desc": "How to lay out Clincoo for wide versus tall screens with an aspect-ratio media query, not width alone.",
   "content": "<p class="mb-4">A 768px breakpoint does not tell a landscape tablet from a rotated phone. A viewport ratio query captures orientation without guessing width.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Pick a viewport ratio</h2><p class="mb-4">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> write <code>@media (min-aspect-ratio: 4/3)</code> for a two-column row, and <code>@media (max-aspect-ratio: 3/4)</code> for a stack. This is the viewport ratio, not aspect-ratio on an image box.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Rotate the preview</h2><p class="mb-4">In <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> resize the window from tall to wide at the same width. Layout should switch when the ratio crosses 1, not only when width crosses 768. If it does not switch, the query is still using min-width.</p>",
   "source": "MDN — aspect-ratio media feature",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/aspect-ratio",
   "sourceSnippet": "The aspect-ratio CSS media feature can be used to apply styles based on the aspect ratio of the viewport.",
   "source2": "MDN — orientation",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
}
]
};
