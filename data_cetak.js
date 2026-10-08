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
 ,
{
 "id": "cetak-ulang-thead-tiap-halaman",
 "langs": {
  "id": {
   "title": "Cara Ulangi Header Tabel di Setiap Halaman Cetak",
   "desc": "Tata cara memakai thead dan table-header-group supaya judul kolom ikut tercetak di tiap halaman.",
   "content": "<p class=\"mb-4\">Tabel panjang yang dicetak dari pratinjau kehilangan judul kolom di halaman kedua. Pembaca harus kembali ke halaman pertama untuk mengingat arti tiap sel.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tandai thead dan izinkan grup header</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bungkus baris judul dengan thead, lalu pada @media print set thead { display: table-header-group; } dan tr { break-inside: avoid; }. Jangan ubah tabel menjadi div, karena browser hanya mengulang header pada tabel sungguhan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau lebih dari satu halaman</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka print preview dengan data yang melewati satu halaman. Judul kolom harus muncul lagi di halaman dua. Catatan uji bisa disimpan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — display",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/display",
   "sourceSnippet": "table-header-group behaves like the thead HTML element.",
   "source2": "MDN — break-inside",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Repeat a Table Header on Every Printed Page",
   "desc": "How to use thead and table-header-group so column titles print on every page.",
   "content": "<p class=\"mb-4\">A long table printed from preview loses its column titles on page two. Readers have to flip back to remember what each cell means.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Mark thead and allow the header group</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> wrap the title row in thead, then in @media print set thead { display: table-header-group; } and tr { break-inside: avoid; }. Do not turn the table into divs, because browsers only repeat headers on a real table.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test a preview longer than one page</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open print preview with data that spans more than one page. Column titles should appear again on page two. Keep the check note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — display",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/display",
   "sourceSnippet": "table-header-group behaves like the thead HTML element.",
   "source2": "MDN — break-inside",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cetak-cegah-kartu-terbelah",
 "langs": {
  "id": {
   "title": "Cara Cegah Kartu dan Gambar Terbelah saat Dicetak",
   "desc": "Tata cara memakai break-inside: avoid supaya kartu, gambar, dan keterangan tidak terpotong antar halaman.",
   "content": "<p class=\"mb-4\">Kartu ringkas dan figure sering terbelah: gambar di akhir halaman, keterangan di halaman berikutnya. Hasil cetak lalu sulit dibaca.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jaga satu blok tetap utuh</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan di @media print: .card, figure { break-inside: avoid; page-break-inside: avoid; }. Pasangkan img dengan figcaption di dalam figure yang sama. Jangan memakai avoid pada section yang lebih tinggi dari satu halaman, karena browser akan mengabaikannya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek potongan di batas halaman</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> geser pratinjau ke batas halaman. Kartu harus pindah utuh, bukan terpotong. Pola ini dicatat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — break-inside",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside",
   "sourceSnippet": "The break-inside CSS property sets how page, column, or region breaks should behave inside a generated box.",
   "source2": "MDN — page-break-inside",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-inside",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Keep Cards and Figures from Splitting When Printed",
   "desc": "How to use break-inside: avoid so cards, figures, and captions are not split across pages.",
   "content": "<p class=\"mb-4\">Compact cards and figures often split: the image at the end of a page, the caption on the next. The printout is then hard to read.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep one block intact</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add this in @media print: .card, figure { break-inside: avoid; page-break-inside: avoid; }. Pair the img with figcaption inside the same figure. Do not set avoid on a section taller than one page, because the browser will ignore it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the cut at the page boundary</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll the preview to a page boundary. The card should move as a whole, not split. This pattern is noted on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — break-inside",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside",
   "sourceSnippet": "The break-inside CSS property sets how page, column, or region breaks should behave inside a generated box.",
   "source2": "MDN — page-break-inside",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-inside",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cetak-atur-orphans-widows",
 "langs": {
  "id": {
   "title": "Cara Atur Orphans dan Widows pada Teks Cetak",
   "desc": "Tata cara menahan minimal dua baris paragraf di awal dan akhir halaman cetak dengan orphans dan widows.",
   "content": "<p class=\"mb-4\">Satu baris paragraf yang tertinggal di awal atau akhir halaman membuat teks cetak terlihat putus. Pembaca mengira ada bagian yang hilang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Naikkan batas baris minimum</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada @media print set p { orphans: 3; widows: 3; }. Orphans menahan baris di awal halaman, widows menahan baris di akhir halaman. Gabungkan dengan break-after: avoid pada h2 supaya judul tidak menggantung sendirian.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan sebelum dan sesudah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> cetak pratinjau paragraf panjang. Tidak boleh ada satu baris yatim di puncak halaman. Contoh nilai ini ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — orphans",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/orphans",
   "sourceSnippet": "The orphans CSS property sets the minimum number of lines in a block container that must be shown at the bottom of a page.",
   "source2": "MDN — widows",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/widows",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set Orphans and Widows on Printed Text",
   "desc": "How to keep at least two paragraph lines at the start and end of a printed page with orphans and widows.",
   "content": "<p class=\"mb-4\">A single paragraph line left at the start or end of a page makes printed text look broken. Readers think a part is missing.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Raise the minimum line count</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set p { orphans: 3; widows: 3; } inside @media print. Orphans keep lines at the start of a page, widows keep lines at the end. Pair that with break-after: avoid on h2 so a heading is not left alone.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare before and after</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview a long paragraph. There should be no single orphan line at the top of a page. Sample values live on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — orphans",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/orphans",
   "sourceSnippet": "The orphans CSS property sets the minimum number of lines in a block container that must be shown at the bottom of a page.",
   "source2": "MDN — widows",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/widows",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cetak-sembunyikan-kontrol-form",
 "langs": {
  "id": {
   "title": "Cara Sembunyikan Kontrol Form dan Tampilkan Nilainya saat Cetak",
   "desc": "Tata cara menyembunyikan input, select, dan tombol lalu menampilkan nilai isian pada hasil cetak.",
   "content": "<p class=\"mb-4\">Form yang dicetak apa adanya memuat border input, panah select, dan tombol kirim. Yang dibutuhkan pembaca adalah label dan nilai, bukan kontrol.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Siapkan salinan nilai untuk cetak</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> letakkan span.print-value di samping tiap input. Saat nilai berubah, salin teks ke span itu. Pada @media print sembunyikan input, select, textarea, dan button, lalu tampilkan .print-value. Jangan mengandalkan placeholder, karena placeholder bukan nilai yang dikirim.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cetak satu isian contoh</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> isi nama dan jumlah, lalu buka print preview. Hanya label dan nilai yang terlihat. Langkah ini dirangkum di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @media print",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media#print",
   "sourceSnippet": "The print media type matches documents viewed in a print preview or sent to a printer.",
   "source2": "MDN — HTML input",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Hide Form Controls and Print Their Values",
   "desc": "How to hide inputs, selects, and buttons and show the filled values on the printout.",
   "content": "<p class=\"mb-4\">A form printed as-is includes input borders, select arrows, and the submit button. Readers need the label and the value, not the controls.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Prepare a print copy of the value</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> place a span.print-value next to each input. When the value changes, copy the text into that span. In @media print hide input, select, textarea, and button, then show .print-value. Do not rely on placeholder, because a placeholder is not the submitted value.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Print one sample entry</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> fill a name and an amount, then open print preview. Only the label and the value should show. This step is summarized on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @media print",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media#print",
   "sourceSnippet": "The print media type matches documents viewed in a print preview or sent to a printer.",
   "source2": "MDN — HTML input",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cetak-paksa-halaman-baru-sebelum-bab",
 "langs": {
  "id": {
   "title": "Cara Paksa Halaman Baru sebelum Bab",
   "desc": "Tata cara memakai break-before: page supaya tiap bab mulai di halaman cetak yang baru.",
   "content": "<p class=\"mb-4\">Dokumen panjang yang dicetak menempelkan bab baru di sisa halaman sebelumnya. Judul bab lalu terjepit di bawah, bukan di awal lembar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Putus halaman pada penanda bab</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri kelas .bab pada section, lalu di @media print set .bab { break-before: page; page-break-before: always; }. Kecualikan bab pertama dengan .bab:first-of-type { break-before: auto; } supaya tidak ada halaman kosong di depan. Hindari memaksa jeda pada setiap h2 pendek.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hitung lembar di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka print preview dua bab. Bab kedua harus mulai di halaman baru, tanpa lembar kosong ekstra. Pola ini ditulis di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — break-before",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/break-before",
   "sourceSnippet": "The break-before CSS property sets how page, column, or region breaks should behave before a generated box.",
   "source2": "MDN — page-break-before",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-before",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Force a Page Break Before a Chapter",
   "desc": "How to use break-before: page so each chapter starts on a new printed page.",
   "content": "<p class=\"mb-4\">A long document printed as one flow sticks a new chapter onto the leftover space of the previous page. The chapter title is then squeezed at the bottom instead of starting a sheet.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Break the page on the chapter marker</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add a .bab class on the section, then in @media print set .bab { break-before: page; page-break-before: always; }. Exclude the first chapter with .bab:first-of-type { break-before: auto; } so there is no blank page up front. Do not force a break on every short h2.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Count sheets in preview</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open print preview for two chapters. The second chapter should start on a new page, with no extra blank sheet. This pattern is written on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — break-before",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/break-before",
   "sourceSnippet": "The break-before CSS property sets how page, column, or region breaks should behave before a generated box.",
   "source2": "MDN — page-break-before",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-before",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
