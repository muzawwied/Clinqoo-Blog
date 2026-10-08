// Clincoo Docs — kategori Cetak (8 Oktober 2026, 10:00 WIB) — 6 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["cetak"] = {
 "names": { "id": "Cetak", "en": "Print" },
 "articles": [
{
 "id": "cetak-sembunyikan-nav-saat-print",
 "langs": {
  "id": {
   "title": "Cara Sembunyikan Navigasi saat Halaman Dicetak",
   "desc": "Tata cara memakai @media print di Clincoo supaya menu dan tombol editor tidak ikut tercetak.",
   "content": "<p class=\"mb-4\">Halaman yang dicetak dari pratinjau masih memuat nav, tombol, dan banner. Aturan print menyembunyikan chrome dan menyisakan isi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis aturan di stylesheet cetak</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan @media print yang men-set display none pada nav, footer, dan tombol. Biarkan article selebar 100% dan warna teks hitam. Jangan andalkan kelas yang hanya ada di layar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pratinjau lewat dialog cetak</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka print preview dan pastikan hanya judul serta isi yang terlihat. Contoh aturan dicatat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @media print",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media#print",
   "sourceSnippet": "The print media type matches documents viewed in a print preview or sent to a printer.",
   "source2": "MDN — CSS media queries",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Hide Navigation When the Page Is Printed",
   "desc": "How to use @media print in Clincoo so menus and editor buttons are not printed.",
   "content": "<p class=\"mb-4\">A page printed from preview still includes the nav, buttons, and banner. Print rules hide the chrome and leave the content.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write rules in a print stylesheet</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add an @media print block that sets display none on nav, footer, and buttons. Let the article be 100% wide with black text. Do not rely on classes that exist only on screen.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Preview through the print dialog</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open print preview and confirm only the title and body show. The sample rule is noted on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @media print",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media#print",
   "sourceSnippet": "The print media type matches documents viewed in a print preview or sent to a printer.",
   "source2": "MDN — CSS media queries",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cetak-hindari-potong-judul",
 "langs": {
  "id": {
   "title": "Cara Cegah Judul Terpotong di Akhir Halaman Cetak",
   "desc": "Tata cara memakai break-after avoid supaya judul tidak tertinggal sendiri di bawah halaman cetak.",
   "content": "<p class=\"mb-4\">Judul yang tertinggal di baris terakhir halaman cetak memutus alur baca. Aturan break menahan judul bersama paragraf berikutnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tahan judul dengan paragrafnya</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan di dalam @media print: h2, h3 { break-after: avoid; break-inside: avoid; }. Jangan pakai page-break-before pada setiap judul karena itu membuang kertas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di pratinjau cetak</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka print preview, gulir ke batas halaman, dan pastikan judul tidak sendirian. Catat aturan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — break-after",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/break-after",
   "sourceSnippet": "The break-after CSS property sets how page, column, or region breaks should behave after a generated box.",
   "source2": "MDN — break-inside",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Keep a Heading from Splitting at the End of a Printed Page",
   "desc": "How to use break-after avoid so a heading is not left alone at the bottom of a printed page.",
   "content": "<p class=\"mb-4\">A heading left on the last line of a printed page breaks the reading flow. A break rule keeps the heading with the following paragraph.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep the heading with its paragraph</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add inside @media print: h2, h3 { break-after: avoid; break-inside: avoid; }. Do not put page-break-before on every heading, because that wastes paper.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check print preview</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open print preview, scroll to a page boundary, and confirm the heading is not alone. Record the rule on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — break-after",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/break-after",
   "sourceSnippet": "The break-after CSS property sets how page, column, or region breaks should behave after a generated box.",
   "source2": "MDN — break-inside",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cetak-atur-ukuran-kertas-dan-margin",
 "langs": {
  "id": {
   "title": "Cara Atur Ukuran Kertas dan Margin Cetak dengan @page",
   "desc": "Tata cara menetapkan ukuran A4 dan margin aman lewat aturan @page di stylesheet cetak.",
   "content": "<p class=\"mb-4\">Tanpa @page, browser memakai margin default yang sering memotong isi di tepi. Ukuran dan margin sebaiknya ditulis di stylesheet, bukan hanya di dialog cetak.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis ukuran dan margin</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan @page { size: A4; margin: 16mm; }. Untuk lembar pertama yang butuh ruang judul, pakai @page :first { margin-top: 24mm; }. Jangan set margin negatif.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cocokkan dengan dialog cetak</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pilih kertas A4 dan margin default supaya tidak menimpa @page. Simpan contoh di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @page",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@page",
   "sourceSnippet": "The @page at-rule is used to modify some CSS properties when printing a document.",
   "source2": "MDN — size",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@page/size",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set Paper Size and Print Margins with @page",
   "desc": "How to set A4 size and a safe margin with an @page rule in a print stylesheet.",
   "content": "<p class=\"mb-4\">Without @page, the browser uses a default margin that often clips content at the edge. Size and margin belong in the stylesheet, not only in the print dialog.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write size and margin</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add @page { size: A4; margin: 16mm; }. For a first sheet that needs title space, use @page :first { margin-top: 24mm; }. Do not set a negative margin.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match the print dialog</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> choose A4 and default margins so they do not override @page. Save the sample on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @page",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@page",
   "sourceSnippet": "The @page at-rule is used to modify some CSS properties when printing a document.",
   "source2": "MDN — size",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@page/size",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cetak-paksa-warna-latar-tercetak",
 "langs": {
  "id": {
   "title": "Cara Paksa Warna Latar Tercetak dengan print-color-adjust",
   "desc": "Tata cara memakai print-color-adjust exact agar latar penting tidak hilang saat dicetak.",
   "content": "<p class=\"mb-4\">Browser sering membuang warna latar untuk menghemat tinta. Badge atau kotak peringatan jadi tidak terbaca jika kontrasnya hanya dari latar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Terapkan hanya pada kotak penting</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis .peringatan { -webkit-print-color-adjust: exact; print-color-adjust: exact; }. Tetap beri border dan warna teks yang cukup, karena pengguna bisa menonaktifkan latar di dialog cetak.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan latar diaktifkan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> centang background graphics pada pratinjau. Jangan pasang exact di seluruh body. Catatan ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — print-color-adjust",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/print-color-adjust",
   "sourceSnippet": "The print-color-adjust CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device.",
   "source2": "CSS Color Adjust — print-color-adjust",
   "source2Url": "https://drafts.csswg.org/css-color-adjust/#propdef-print-color-adjust",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Force Background Colors to Print with print-color-adjust",
   "desc": "How to use print-color-adjust exact so an important background is not dropped when printing.",
   "content": "<p class=\"mb-4\">Browsers often drop background color to save ink. A badge or warning box becomes unreadable if contrast comes only from the background.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Apply it only to important boxes</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write .warning { -webkit-print-color-adjust: exact; print-color-adjust: exact; }. Still add a border and enough text color, because the user can turn backgrounds off in the print dialog.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test with backgrounds enabled</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> enable background graphics in preview. Do not set exact on the whole body. The note is on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — print-color-adjust",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/print-color-adjust",
   "sourceSnippet": "The print-color-adjust CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device.",
   "source2": "CSS Color Adjust — print-color-adjust",
   "source2Url": "https://drafts.csswg.org/css-color-adjust/#propdef-print-color-adjust",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cetak-tampilkan-url-tautan",
 "langs": {
  "id": {
   "title": "Cara Tampilkan URL Tautan pada Hasil Cetak",
   "desc": "Tata cara menampilkan href tautan di lembar cetak supaya pembaca kertas tetap tahu alamatnya.",
   "content": "<p class=\"mb-4\">Tautan di kertas tidak bisa diklik. Menulis URL di belakang teks tautan membuat rujukan tetap berguna setelah dicetak.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sisipkan href lewat ::after</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> di dalam @media print tulis a[href^=\"http\"]::after { content: \" (\" attr(href) \")\"; word-break: break-all; }. Lewati tautan yang href-nya diawali # atau javascript.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pendekkan URL yang panjang</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pratinjau satu paragraf berisi tautan dan pastikan URL tidak meluber keluar margin. Contoh ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — attr()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/attr",
   "sourceSnippet": "The attr() CSS function is used to retrieve the value of an attribute of the selected element and use it in the stylesheet.",
   "source2": "MDN — ::after",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::after",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Show Link URLs on a Printed Page",
   "desc": "How to print the href of a link so a paper reader still sees the address.",
   "content": "<p class=\"mb-4\">A link on paper cannot be clicked. Writing the URL after the link text keeps the reference useful after printing.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Insert the href with ::after</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> inside @media print write a[href^=\"http\"]::after { content: \" (\" attr(href) \")\"; word-break: break-all; }. Skip links whose href starts with # or javascript.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Shorten long URLs</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview a paragraph that contains a link and confirm the URL does not spill past the margin. The sample is on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — attr()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/attr",
   "sourceSnippet": "The attr() CSS function is used to retrieve the value of an attribute of the selected element and use it in the stylesheet.",
   "source2": "MDN — ::after",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::after",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cetak-sembunyikan-gambar-dekoratif",
 "langs": {
  "id": {
   "title": "Cara Sembunyikan Gambar Dekoratif saat Mencetak",
   "desc": "Tata cara menyembunyikan gambar hias di lembar cetak tanpa menghilangkan gambar yang menjelaskan isi.",
   "content": "<p class=\"mb-4\">Hero besar dan ikon hias menghabiskan tinta dan mendorong isi ke halaman berikutnya. Gambar yang menjelaskan langkah harus tetap tampil.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tandai gambar hias</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri kelas dekoratif atau alt kosong pada gambar hias, lalu di @media print set img.dekoratif, img[alt=\"\"] { display: none; }. Gambar langkah tetap punya alt dan lebar maksimal 100%.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hitung ulang halaman</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bandingkan jumlah halaman sebelum dan sesudah aturan. Catat pola di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @media print",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media#print",
   "sourceSnippet": "The print media type matches documents viewed in a print preview or sent to a printer.",
   "source2": "W3C WAI — decorative images",
   "source2Url": "https://www.w3.org/WAI/tutorials/images/decorative/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Hide Decorative Images When Printing",
   "desc": "How to hide decorative images on a printout without removing images that explain the content.",
   "content": "<p class=\"mb-4\">A large hero and decorative icons waste ink and push content to the next page. Images that explain a step must stay visible.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Mark decorative images</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> give decorative images a class or an empty alt, then in @media print set img.decorative, img[alt=\"\"] { display: none; }. Step images keep an alt and a max width of 100%.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Recount the pages</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> compare the page count before and after the rule. Record the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @media print",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media#print",
   "sourceSnippet": "The print media type matches documents viewed in a print preview or sent to a printer.",
   "source2": "W3C WAI — decorative images",
   "source2Url": "https://www.w3.org/WAI/tutorials/images/decorative/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
