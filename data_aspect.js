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
]
};
