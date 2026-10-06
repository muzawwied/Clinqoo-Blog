// Clincoo Docs — tambah 1 artikel Cerita (6 Oktober 2026, 21:00 WIB)
// Clincoo Docs — tambah 1 artikel Cerita (6 Oktober 2026, 15:00 WIB)
// Clincoo Docs — artikel tambahan Cerita (5 Oktober 2026, WIB)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.cerita) return;
  var list = window.countryDataFiles.cerita.articles;
  var extra = [
{
 "id": "cerita-gambar-hero-yang-terlalu-berat",
 "langs": {
  "id": {
   "title": "Cara Meringankan Gambar Hero yang Membuat Halaman Lambat",
   "desc": "Tata cara mengecilkan gambar hero di Clincoo supaya halaman pertama tidak menunggu unduhan berukuran megabita.",
   "content": "<p class=\"mb-4\">Di sebuah halaman acara, gambar hero berukuran 4 MB membuat pratinjau Clincoo terasa macet di jaringan ponsel. Yang terlihat hanya judul, sementara foto masih berputar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur dulu, baru potong</h2><p class=\"mb-4\">Buka panel Network di pratinjau <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> dan urutkan menurut ukuran. Catat berkas gambar terbesar, lebar tampilannya, dan formatnya. Foto 4000 piksel yang ditampilkan 800 piksel adalah pemborosan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ekspor ulang yang pas</h2><p class=\"mb-4\">Ekspor ulang ke lebar tampilan kali dua untuk layar tajam, biasanya WebP atau JPEG di bawah 200 KB. Pasang width dan height supaya layout tidak meloncat saat gambar datang. Unggah penggantinya lewat <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, lalu bandingkan waktu muat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Optimize images",
   "sourceUrl": "https://web.dev/learn/images/",
   "sourceSnippet": "Serving images at the right size and format is one of the largest wins for page load.",
   "source2": "MDN — img width and height",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Slim a Hero Image That Made the Page Slow",
   "desc": "How to shrink a hero image in Clincoo so the first page does not wait on a multi-megabyte download.",
   "content": "<p class=\"mb-4\">On an event page, a 4 MB hero image made the Clincoo preview feel stuck on a phone network. Only the title showed while the photo kept spinning.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure before you crop</h2><p class=\"mb-4\">Open the Network panel in the <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> preview and sort by size. Note the largest image file, its displayed width, and its format. A 4000 pixel photo shown at 800 pixels is waste.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Re-export to fit</h2><p class=\"mb-4\">Re-export at twice the display width for sharp screens, usually WebP or JPEG under 200 KB. Set width and height so the layout does not jump when the image arrives. Upload the replacement through <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, then compare load time on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Optimize images",
   "sourceUrl": "https://web.dev/learn/images/",
   "sourceSnippet": "Serving images at the right size and format is one of the largest wins for page load.",
   "source2": "MDN — img width and height",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cerita-flex-yang-meluber-keluar-layar",
 "langs": {
  "id": {
   "title": "Cara Menahan Flexbox yang Meluber Keluar Layar",
   "desc": "Tata cara memperbaiki baris Flexbox di Clincoo yang mendorong tombol keluar layar sempit.",
   "content": "<p class=\"mb-4\">Kartu harga terlihat rapi di laptop, tetapi di pratinjau ponsel tombol bayar terdorong ke kanan sampai hilang. Penyebabnya baris flex yang tidak boleh menyusut.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Izinkan item menyusut</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set min-width: 0 pada anak flex yang berisi teks panjang, dan flex-wrap: wrap pada induk. Tanpa min-width 0, teks menolak menyusut dan mendorong saudara kandungnya keluar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji lebar 360 piksel</h2><p class=\"mb-4\">Gunakan mode perangkat di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pada 360 piksel. Kalau masih meluber, pindahkan tombol ke baris baru lewat wrap, bukan dengan overflow tersembunyi. Catatan pendeknya ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "CSS-Tricks — A Complete Guide to Flexbox",
   "sourceUrl": "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
   "sourceSnippet": "The flex-wrap property controls whether flex items are forced onto one line or can wrap.",
   "source2": "MDN — min-width",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/min-width",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Stop a Flex Row from Spilling Off Screen",
   "desc": "How to fix a Flexbox row in Clincoo that pushes a button off a narrow screen.",
   "content": "<p class=\"mb-4\">The price card looked fine on a laptop, but in the phone preview the pay button was pushed off the right edge. The cause was a flex row that was not allowed to shrink.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Let the item shrink</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set min-width: 0 on the flex child that holds long text, and flex-wrap: wrap on the parent. Without min-width 0, the text refuses to shrink and shoves its sibling out.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test at 360 pixels</h2><p class=\"mb-4\">Use device mode in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview at 360 pixels. If it still spills, move the button to a new line with wrap, not with hidden overflow. A short note lives on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "CSS-Tricks — A Complete Guide to Flexbox",
   "sourceUrl": "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
   "sourceSnippet": "The flex-wrap property controls whether flex items are forced onto one line or can wrap.",
   "source2": "MDN — min-width",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/min-width",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "cerita-form-kirim-tanpa-umpan-balik",
 "langs": {
  "id": {
   "title": "Cara Memberi Umpan Balik saat Form Terkirim",
   "desc": "Tata cara menampilkan status kirim pada form Clincoo supaya pengunjung tidak menekan tombol berulang kali.",
   "content": "<p class=\"mb-4\">Form kontak di halaman usaha kecil diam setelah dikirim. Pengunjung mengira gagal, lalu menekan kirim tiga kali dan data masuk ganda.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kunci tombol dan tulis status</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> nonaktifkan tombol saat permintaan berjalan, ganti teksnya menjadi Mengirim, dan taruh pesan di elemen dengan aria-live polite. Setelah respons tiba, tulis berhasil atau gagal di tempat yang sama, jangan hanya di konsol.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Coba jalur gagal</h2><p class=\"mb-4\">Putuskan jaringan sebentar di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Form harus tetap terisi dan menampilkan pesan yang bisa ditindak, lalu tombol aktif lagi. Contoh pesannya dicatat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — aria-live",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live",
   "sourceSnippet": "The aria-live attribute sets how assistive technology should announce updates.",
   "source2": "HTML — button disabled",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Show Feedback When a Form Is Submitted",
   "desc": "How to show a submit status on a Clincoo form so visitors do not press the button again and again.",
   "content": "<p class=\"mb-4\">The contact form on a small-business page went quiet after submit. Visitors thought it failed, pressed send three times, and duplicate rows landed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lock the button and write a status</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> disable the button while the request runs, change its text to Sending, and place the message in an element with aria-live polite. When the response arrives, write success or failure in that same spot, not only in the console.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Try the failure path</h2><p class=\"mb-4\">Drop the network briefly in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview. The form should keep its values and show an actionable message, then enable the button again. A sample message is noted on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — aria-live",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live",
   "sourceSnippet": "The aria-live attribute sets how assistive technology should announce updates.",
   "source2": "HTML — button disabled",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cerita-commit-kecil-sebelum-deploy",
 "langs": {
  "id": {
   "title": "Cara Commit Kecil sebelum Deploy Clincoo",
   "desc": "Tata cara menyimpan perubahan kecil di Git sebelum deploy Clincoo supaya regresi mudah dilacak.",
   "content": "<p class=\"mb-4\">Satu deploy mengubah hero, form, dan warna sekaligus. Saat tombol hilang, tidak ada cara cepat tahu perubahan mana yang penyebabnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu maksud, satu commit</h2><p class=\"mb-4\">Di terminal <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> lihat git status, stage hanya berkas yang satu maksud, lalu commit dengan kalimat yang menyebut apa yang diubah. Jangan campur rapikan spasi dengan perbaikan form.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Deploy dari titik yang jelas</h2><p class=\"mb-4\">Baru setelah commit itu lolos pratinjau di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, jalankan deploy. Kalau produksi rusak, kembali ke commit sebelumnya alih-alih mengira-ngira. Jejaknya bisa ditulis di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Git — Recording changes",
   "sourceUrl": "https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository",
   "sourceSnippet": "A commit records a snapshot of the staged changes with a message.",
   "source2": "Git — git status",
   "source2Url": "https://git-scm.com/docs/git-status",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Make a Small Commit Before a Clincoo Deploy",
   "desc": "How to save a small Git commit before a Clincoo deploy so a regression is easy to trace.",
   "content": "<p class=\"mb-4\">One deploy changed the hero, the form, and the colors at once. When the button vanished, there was no quick way to know which change caused it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One intent, one commit</h2><p class=\"mb-4\">In the <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> terminal check git status, stage only the files for one intent, then commit with a sentence that says what changed. Do not mix whitespace cleanup with a form fix.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Deploy from a known point</h2><p class=\"mb-4\">Only after that commit passes the preview on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> run the deploy. If production breaks, return to the previous commit instead of guessing. The trail can be written on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Git — Recording changes",
   "sourceUrl": "https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository",
   "sourceSnippet": "A commit records a snapshot of the staged changes with a message.",
   "source2": "Git — git status",
   "source2Url": "https://git-scm.com/docs/git-status",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "cerita-alt-kosong-pada-gambar-menu",
 "langs": {
  "id": {
   "title": "Cara Mengisi Alt pada Gambar Menu yang Kosong",
   "desc": "Tata cara menulis alt yang berguna pada gambar menu Clincoo supaya pembaca layar tidak hanya menyebut gambar.",
   "content": "<p class=\"mb-4\">Halaman warung memakai foto makanan sebagai menu. Alt kosong membuat pembaca layar hanya bilang gambar, dan pengunjung tidak tahu nama hidangan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis yang tidak terlihat</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> isi alt dengan nama hidangan dan ciri yang tidak ada di teks di sampingnya, misalnya Nasi goreng dengan telur. Kalau teks di sebelah sudah menyebut nama itu, alt boleh singkat atau kosong hanya jika gambar murni dekoratif.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di pohon aksesibilitas</h2><p class=\"mb-4\">Buka panel Accessibility pada pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dan pastikan setiap foto menu punya nama. Jangan menaruh kata gambar atau foto di awal alt. Pola kalimatnya disimpan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — alt attribute",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt",
   "sourceSnippet": "The alt attribute provides fallback text when the image cannot be displayed.",
   "source2": "W3C — Images tutorial",
   "source2Url": "https://www.w3.org/WAI/tutorials/images/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Fill Empty Alt Text on Menu Images",
   "desc": "How to write useful alt text on Clincoo menu images so a screen reader does not only say image.",
   "content": "<p class=\"mb-4\">A food-stall page used dish photos as the menu. Empty alt text made a screen reader only say image, and the visitor never heard the dish name.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write what is not already visible</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set alt to the dish name and a trait that is not already in the nearby text, for example Fried rice with egg. If the text beside it already names the dish, alt can be short, or empty only when the image is purely decorative.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the accessibility tree</h2><p class=\"mb-4\">Open the Accessibility panel in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview and confirm every menu photo has a name. Do not start alt with the word image or photo. The sentence pattern is kept on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — alt attribute",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt",
   "sourceSnippet": "The alt attribute provides fallback text when the image cannot be displayed.",
   "source2": "W3C — Images tutorial",
   "source2Url": "https://www.w3.org/WAI/tutorials/images/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
,
{
 "id": "cerita-z-index-kalah-karena-stacking-context",
 "langs": {
  "id": {
   "title": "Cara Memperbaiki z-index yang Kalah karena Stacking Context",
   "desc": "Tata cara menelusuri induk yang membuat konteks tumpukan baru saat dropdown Clincoo tetap tertutup elemen lain meski z-index-nya besar.",
   "content": "<p class=\"mb-4\">Di halaman menu, dropdown diberi z-index 9999 tetapi tetap tertutup kartu di sebelahnya. Angka besar tidak menang jika induknya sudah membuat konteks tumpukan sendiri.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cari induk yang membentuk konteks</h2><p class=\"mb-4\">Di pratinjau <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>, pilih dropdown lalu naik ke induk. Opacity di bawah 1, transform, filter, atau will-change pada pembungkus membuat konteks baru. z-index anak hanya dibanding di dalam konteks itu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pindahkan z-index ke induk yang tepat</h2><p class=\"mb-4\">Naikkan z-index pada pembungkus yang sejajar dengan elemen penutup, bukan pada tombol di dalam kartu. Hapus transform yang hanya dipakai untuk trik posisi. Uji buka menu di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pada lebar desktop dan ponsel.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat sebelum mengubah</h2><p class=\"mb-4\">Simpan cuplikan CSS induk di catatan proyek. Perubahan z-index tanpa catatan sering kembali saat template diganti.</p>",
   "source": "MDN — Stacking context",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "sourceSnippet": "A stacking context is formed by certain CSS properties, and z-index only competes inside that context.",
   "source2": "CSS Tricks — What The Heck, z-index??",
   "source2Url": "https://css-tricks.com/almanac/properties/z/z-index/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Fix a z-index That Loses Because of a Stacking Context",
   "desc": "How to trace the parent that creates a new stacking context when a Clincoo dropdown stays covered even with a large z-index.",
   "content": "<p class=\"mb-4\">On a menu page, a dropdown had z-index 9999 and still sat under the card beside it. A large number does not win if a parent already created its own stacking context.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Find the parent that creates a context</h2><p class=\"mb-4\">In the <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> preview, select the dropdown and walk up the parents. Opacity below 1, transform, filter, or will-change on a wrapper creates a new context. A child z-index is compared only inside that context.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Move z-index to the right parent</h2><p class=\"mb-4\">Raise z-index on the wrapper that is a sibling of the covering element, not on the button inside the card. Remove a transform that was only a positioning trick. Open the menu in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> at desktop and phone widths.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Note it before you change it</h2><p class=\"mb-4\">Save the parent CSS snippet in the project notes. A z-index change without a note often returns when the template is swapped.</p>",
   "source": "MDN — Stacking context",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "sourceSnippet": "A stacking context is formed by certain CSS properties, and z-index only competes inside that context.",
   "source2": "CSS Tricks — What The Heck, z-index??",
   "source2Url": "https://css-tricks.com/almanac/properties/z/z-index/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cerita-path-gambar-pecah-setelah-pindah-folder",
 "langs": {
  "id": {
   "title": "Cara Memperbaiki Path Gambar yang Pecah setelah Pindah Folder",
   "desc": "Tata cara mengganti path relatif yang salah setelah berkas dipindah di Clincoo supaya gambar tidak menjadi ikon rusak di pratinjau.",
   "content": "<p class=\"mb-4\">Setelah halaman About dipindah ke folder proyek, semua foto jadi ikon rusak. HTML-nya tidak berubah, hanya kedalaman folder yang berubah, sehingga path relatif menunjuk tempat lama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan URL yang diminta</h2><p class=\"mb-4\">Buka panel Network di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> dan saring Img. URL 404 menunjukkan path yang benar-benar diminta browser. Bandingkan dengan lokasi berkas di pohon folder.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai path dari root situs</h2><p class=\"mb-4\">Ganti src seperti ../images/hero.jpg menjadi /images/hero.jpg jika berkas ada di root situs. Path yang diawali garis miring tidak bergantung pada folder halaman. Cek lagi di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> hanya sebagai referensi pola, lalu uji pratinjau proyek sendiri.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji satu gambar dulu</h2><p class=\"mb-4\">Perbaiki satu src, muat ulang, lalu baru salin pola ke gambar lain. Mengganti semua path sekaligus menyulitkan jika ada folder gambar kedua.</p>",
   "source": "MDN — URL paths",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL",
   "sourceSnippet": "A path-absolute URL starts with a slash and is resolved from the host root, not from the current document folder.",
   "source2": "web.dev — Image issues",
   "source2Url": "https://web.dev/learn/images/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Fix Image Paths That Break After a Folder Move",
   "desc": "How to replace a wrong relative path after a file move in Clincoo so images do not turn into broken icons in preview.",
   "content": "<p class=\"mb-4\">After the About page moved into a project folder, every photo became a broken icon. The HTML had not changed; only the folder depth had, so relative paths still pointed at the old place.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare the requested URL</h2><p class=\"mb-4\">Open the Network panel in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> and filter Img. A 404 shows the path the browser actually requested. Compare it with the file location in the folder tree.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use a site-root path</h2><p class=\"mb-4\">Change a src such as ../images/hero.jpg to /images/hero.jpg if the file lives at the site root. A leading slash does not depend on the page folder. Check <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> only as a pattern reference, then test your own project preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Fix one image first</h2><p class=\"mb-4\">Repair one src, reload, then copy the pattern to the other images. Replacing every path at once is hard to undo if a second image folder exists.</p>",
   "source": "MDN — URL paths",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL",
   "sourceSnippet": "A path-absolute URL starts with a slash and is resolved from the host root, not from the current document folder.",
   "source2": "web.dev — Image issues",
   "source2Url": "https://web.dev/learn/images/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cerita-console-log-menimbun-error-asli",
 "langs": {
  "id": {
   "title": "Cara Membersihkan console.log yang Menimbun Error Asli",
   "desc": "Tata cara menyaring log debug di konsol Clincoo supaya pesan merah pertama tetap kelihatan dan tidak tertutup jejak percobaan.",
   "content": "<p class=\"mb-4\">Halaman checkout diam saja. Konsol penuh baris \"masuk fungsi\" dari percobaan kemarin, dan error asli ada di atas sekali sampai harus digulir.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Saring level error dulu</h2><p class=\"mb-4\">Di pratinjau <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>, buka konsol dan aktifkan hanya level Error. Baca pesan pertama, berkas, dan nomor baris. Pesan berikutnya sering hanya akibat yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hapus log yang bukan keputusan</h2><p class=\"mb-4\">Cari console.log yang hanya menandai \"sampai sini\". Hapus atau bungkus dengan syarat yang mati di produksi. Simpan satu log yang mencetak nilai yang benar-benar dipakai cabang if.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ulangi alurnya sekali</h2><p class=\"mb-4\">Muat ulang dari <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, ulangi klik yang gagal, dan pastikan konsol hanya menyisakan error yang bisa ditindak. Jangan tempel seluruh riwayat log ke catatan jika baris pertama sudah cukup.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console object provides access to the browser debugging console, including error and log levels.",
   "source2": "Chrome — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Clear console.log Calls That Bury the Real Error",
   "desc": "How to filter debug logs in the Clincoo console so the first red message stays visible and is not covered by trial traces.",
   "content": "<p class=\"mb-4\">The checkout page did nothing. The console was full of \"entered function\" lines from yesterday, and the real error sat so far up that it needed a scroll.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Filter to errors first</h2><p class=\"mb-4\">In the <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> preview, open the console and enable only the Error level. Read the first message, file, and line number. Later messages are often the same failure again.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Remove logs that are not decisions</h2><p class=\"mb-4\">Find console.log calls that only mark \"got here\". Delete them or wrap them in a flag that is off in production. Keep one log that prints the value a branch actually uses.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Replay the flow once</h2><p class=\"mb-4\">Reload from <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, repeat the click that failed, and confirm the console only leaves an error you can act on. Do not paste the whole log history into notes if the first line is enough.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console object provides access to the browser debugging console, including error and log levels.",
   "source2": "Chrome — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cerita-placeholder-dipakai-sebagai-label",
 "langs": {
  "id": {
   "title": "Cara Mengganti Placeholder yang Dipakai sebagai Label Form",
   "desc": "Tata cara mengembalikan label terlihat pada form Clincoo saat placeholder hilang begitu pengunjung mulai mengetik.",
   "content": "<p class=\"mb-4\">Form daftar hanya punya placeholder abu-abu. Setelah pengunjung mengetik, petunjuk hilang dan mereka tidak ingat kolom itu email atau nama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasangkan label yang tetap terlihat</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>, tambah elemen label dengan atribut for yang sama dengan id input. Biarkan placeholder untuk contoh format, misalnya nama@domain.com, bukan sebagai satu-satunya nama kolom.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan mengandalkan warna saja</h2><p class=\"mb-4\">Placeholder sering kontrasnya rendah. Label biasa tetap terbaca dan tetap ada saat nilai terisi. Cek urutan tab di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan isian setengah</h2><p class=\"mb-4\">Isi dua kolom, kosongkan satu, lalu lihat apakah nama kolom masih terbaca tanpa menghapus isian. Itu yang terjadi saat orang kembali ke form setelah gangguan.</p>",
   "source": "W3C WAI — Labels",
   "sourceUrl": "https://www.w3.org/WAI/tutorials/forms/labels/",
   "sourceSnippet": "Provide labels to identify all form controls and do not rely on placeholder text as the only label.",
   "source2": "MDN — placeholder attribute",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholder",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Replace a Placeholder Used as a Form Label",
   "desc": "How to restore a visible label on a Clincoo form when the placeholder disappears as soon as the visitor types.",
   "content": "<p class=\"mb-4\">A signup form had only grey placeholders. Once the visitor typed, the hint vanished and they could not tell whether the field was email or name.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pair a label that stays visible</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>, add a label element whose for attribute matches the input id. Keep the placeholder for an example format, such as name@domain.com, not as the only field name.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not rely on color alone</h2><p class=\"mb-4\">Placeholders often have low contrast. A normal label stays readable and stays present when the value is filled. Check tab order in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test a half-filled form</h2><p class=\"mb-4\">Fill two fields, leave one empty, and see whether the field name is still readable without clearing the input. That is what happens when someone returns to the form after an interruption.</p>",
   "source": "W3C WAI — Labels",
   "sourceUrl": "https://www.w3.org/WAI/tutorials/forms/labels/",
   "sourceSnippet": "Provide labels to identify all form controls and do not rely on placeholder text as the only label.",
   "source2": "MDN — placeholder attribute",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholder",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cerita-git-status-sebelum-pull",
 "langs": {
  "id": {
   "title": "Cara Cek git status sebelum Pull agar Kerjaan Tidak Tertimpa",
   "desc": "Tata cara melihat perubahan lokal di proyek Clincoo sebelum pull supaya berkas yang belum commit tidak bentrok diam-diam.",
   "content": "<p class=\"mb-4\">Dua orang mengedit stylesheet yang sama. Yang satu langsung pull. Perubahan lokal yang belum commit bercampur, dan pratinjau menampilkan tombol yang bukan milik siapa pun.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca status sebelum mengambil remote</h2><p class=\"mb-4\">Di folder proyek, jalankan git status. Catat berkas modified dan untracked. Jika ada kerjaan yang ingin disimpan, commit kecil dulu atau pindahkan ke stash dengan pesan yang menyebut halaman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pull, lalu lihat diff</h2><p class=\"mb-4\">Setelah pull, jalankan git diff pada berkas yang tadi kamu sentuh. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>, muat ulang pratinjau dan bandingkan dengan tampilan di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan selesaikan konflik dengan mengambil semua</h2><p class=\"mb-4\">Jika Git menandai konflik, baca kedua sisi. Mengambil \"ours\" atau \"theirs\" untuk seluruh berkas sering menghapus aturan CSS yang baru saja diperbaiki.</p>",
   "source": "Git — git status",
   "sourceUrl": "https://git-scm.com/docs/git-status",
   "sourceSnippet": "git status shows the working tree status, including paths that have differences between the index and the working tree.",
   "source2": "Git — git pull",
   "source2Url": "https://git-scm.com/docs/git-pull",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Check git status Before a Pull So Work Is Not Overwritten",
   "desc": "How to inspect local changes in a Clincoo project before a pull so uncommitted files do not clash quietly.",
   "content": "<p class=\"mb-4\">Two people edited the same stylesheet. One pulled immediately. Uncommitted local edits mixed in, and the preview showed a button that belonged to neither person.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read status before taking remote</h2><p class=\"mb-4\">In the project folder, run git status. Note modified and untracked files. If there is work you want to keep, make a small commit first or move it to a stash with a message that names the page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pull, then read the diff</h2><p class=\"mb-4\">After the pull, run git diff on the files you had touched. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>, reload the preview and compare it with <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not finish a conflict by taking everything</h2><p class=\"mb-4\">If Git marks a conflict, read both sides. Taking ours or theirs for the whole file often deletes a CSS rule that was just fixed.</p>",
   "source": "Git — git status",
   "sourceUrl": "https://git-scm.com/docs/git-status",
   "sourceSnippet": "git status shows the working tree status, including paths that have differences between the index and the working tree.",
   "source2": "Git — git pull",
   "source2Url": "https://git-scm.com/docs/git-pull",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
  ,
{
 "id": "cerita-selector-terlalu-umum-menimpa-kartu",
 "langs": {
  "id": {
   "title": "Cara Memperbaiki Selector Terlalu Umum yang Menimpa Kartu",
   "desc": "Kisah tata cara mengecilkan selector button dan a yang tanpa sengaja mengubah kartu di seluruh halaman.",
   "content": "<p class=\"mb-4\">Satu aturan <code>button, a &#123; width: 100% &#125;</code> membuat tombol kartu melebar dan tautan menu turun baris. Gejalanya muncul setelah AI merapikan CSS.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Batalkan aturan global</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> cari selector tag polos di stylesheet. Ganti dengan kelas komponen, misalnya <code>.kartu .aksi</code>. Jangan menambal dengan !important di setiap kartu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan sebelum deploy</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka pratinjau lebar meja dan layar sempit. Tombol aksi harus mengikuti kartu, bukan sebaliknya. Tulis selector yang diganti di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> agar kejadian yang sama tidak diulang pada halaman lain.</p>",
   "source": "MDN — CSS selectors",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors",
   "sourceSnippet": "Type selectors match every element of that name; a class selector limits the match.",
   "source2": "MDN — !important",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/important",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Fix an Overly Broad Selector That Overrode the Cards",
   "desc": "A how-to story about narrowing bare button and a selectors that accidentally restyled cards across the page.",
   "content": "<p class=\"mb-4\">One rule <code>button, a &#123; width: 100% &#125;</code> stretched card buttons and wrapped menu links. The symptom showed up after AI tidied the CSS.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Remove the global rule</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> find bare tag selectors in the stylesheet. Replace them with a component class, for example <code>.card .action</code>. Do not patch every card with !important.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare before deploy</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the desktop and narrow previews. Action buttons should follow the card, not the other way around. Write down the replaced selector on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the same leak is not repeated on another page.</p>",
   "source": "MDN — CSS selectors",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors",
   "sourceSnippet": "Type selectors match every element of that name; a class selector limits the match.",
   "source2": "MDN — !important",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/important",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}

{
 "id": "cerita-meta-viewport-tertinggal",
 "langs": {
  "id": {
   "title": "Cara Sadar Meta Viewport Tertinggal setelah Salin HTML",
   "desc": "Tata cara menemukan halaman Clincoo yang terlihat desktop di ponsel karena tag viewport tidak ikut tersalin.",
   "content": "<p class=\"mb-4\">Halaman baru disalin dari berkas lama. Di laptop terlihat rapi. Di ponsel teks mengecil dan pengunjung harus mencubit layar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek head sebelum pratinjau ponsel</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka head. Pastikan ada meta name viewport dengan content width=device-width, initial-scale=1. Tanpa tag ini browser menganggap lebar sekitar 980 piksel.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ulangi di lebar 375</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> kecilkan pratinjau ke lebar ponsel. Judul, kartu, dan tombol harus turun, bukan mengecil bersama halaman. Catat hasilnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya salinan berikutnya tidak mengulang kelupaan yang sama.</p>",
   "source": "MDN — Viewport meta tag",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag",
   "sourceSnippet": "The viewport meta tag controls the layout viewport width on mobile browsers.",
   "source2": "web.dev — Responsive web design basics",
   "source2Url": "https://web.dev/articles/responsive-web-design-basics",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Notice a Missing Viewport Meta after Copying HTML",
   "desc": "How to catch a Clincoo page that looks desktop-only on a phone because the viewport tag was not copied.",
   "content": "<p class=\"mb-4\">A new page was copied from an old file. On a laptop it looked fine. On a phone the text shrank and visitors had to pinch the screen.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the head before a phone preview</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open the head. Confirm a meta name viewport with content width=device-width, initial-scale=1. Without that tag the browser assumes a width near 980 pixels.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Retest at 375</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> shrink the preview to phone width. Headings, cards, and buttons should stack, not shrink with the page. Note the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next copy does not repeat the miss.</p>",
   "source": "MDN — Viewport meta tag",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag",
   "sourceSnippet": "The viewport meta tag controls the layout viewport width on mobile browsers.",
   "source2": "web.dev — Responsive web design basics",
   "source2Url": "https://web.dev/articles/responsive-web-design-basics",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
];
  extra.forEach(function (article) {
    var exists = list.some(function (item) { return item.id === article.id; });
    if (!exists) list.push(article);
  });
})();
