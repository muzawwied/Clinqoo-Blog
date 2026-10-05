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
  ];
  extra.forEach(function (article) {
    var exists = list.some(function (item) { return item.id === article.id; });
    if (!exists) list.push(article);
  });
})();
