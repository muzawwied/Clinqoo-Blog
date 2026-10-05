// Clincoo Docs — artikel tambahan Testing (5 Oktober 2026, 22:00 WIB)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.testing) return;
  var list = window.countryDataFiles.testing.articles;
  var extra = [
{
 "id": "testing-uji-urutan-tab-keyboard",
 "langs": {
  "id": {
   "title": "Cara Uji Urutan Tab Keyboard sebelum Rilis",
   "desc": "Tata cara menekan Tab di pratinjau Clincoo untuk memastikan fokus berjalan masuk akal dan tidak terjebak di elemen tersembunyi.",
   "content": "<p class=\"mb-4\">Halaman yang hanya dicoba dengan mouse sering menyembunyikan fokus yang meloncat. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka pratinjau, klik sekali di area kosong, lalu tekan Tab berulang tanpa menyentuh tetikus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat urutan yang diharapkan</h2><p class=\"mb-4\">Tulis daftar singkat: header, tautan utama, kolom form, tombol kirim, lalu footer. Kalau fokus meloncat ke tombol yang tidak terlihat, elemen itu masih bisa difokus meski tersembunyi secara visual.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji Shift+Tab dan Enter</h2><p class=\"mb-4\">Shift+Tab harus kembali ke kontrol sebelumnya. Enter pada tombol dan tautan harus menjalankan aksi yang sama dengan klik. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> coba juga lebar 375px, karena menu mobile sering mengubah urutan DOM.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan satu putaran gagal</h2><p class=\"mb-4\">Kalau fokus hilang, catat elemen terakhir yang terlihat lalu tempel langkah itu di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Jangan minta bantuan AI sebelum urutan Tab tertulis.</p>",
   "source": "MDN — Keyboard-navigable JavaScript widgets",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets",
   "sourceSnippet": "Provide keyboard support so that users who rely on a keyboard can operate the widget.",
   "source2": "W3C WAI — Keyboard",
   "source2Url": "https://www.w3.org/WAI/perspective-videos/keyboard/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Test Keyboard Tab Order before Release",
   "desc": "How to press Tab in a Clincoo preview so focus moves in a sensible order and does not get trapped on a hidden element.",
   "content": "<p class=\"mb-4\">A page tested only with a mouse often hides a focus order that jumps. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open the preview, click once on empty space, then press Tab repeatedly without touching the pointer.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write the expected order</h2><p class=\"mb-4\">List header, main links, form fields, the submit button, then the footer. If focus lands on a control you cannot see, that element is still focusable while visually hidden.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test Shift+Tab and Enter</h2><p class=\"mb-4\">Shift+Tab should return to the previous control. Enter on a button or link should do the same thing as a click. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> also try a 375px width, because a mobile menu often changes DOM order.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Save one failed pass</h2><p class=\"mb-4\">If focus disappears, note the last visible element and paste those steps on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Do not ask an AI for help before the Tab order is written down.</p>",
   "source": "MDN — Keyboard-navigable JavaScript widgets",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets",
   "sourceSnippet": "Provide keyboard support so that users who rely on a keyboard can operate the widget.",
   "source2": "W3C WAI — Keyboard",
   "source2Url": "https://www.w3.org/WAI/perspective-videos/keyboard/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "testing-uji-kontras-teks-di-pratinjau",
 "langs": {
  "id": {
   "title": "Cara Uji Kontras Teks di Pratinjau sebelum Deploy",
   "desc": "Tata cara mengecek rasio kontras judul, isi, dan tombol di pratinjau Clincoo supaya teks abu-abu tidak hilang di layar terang.",
   "content": "<p class=\"mb-4\">Teks yang enak dilihat di editor bisa gagal saat matahari mengenai layar. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih tiga pasang warna: judul di atas latar, paragraf, dan teks pada tombol.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur, jangan tebak</h2><p class=\"mb-4\">DevTools punya pemeriksa kontras di panel elemen. Target umum adalah 4.5:1 untuk teks biasa dan 3:1 untuk teks besar. Placeholder bukan pengganti label, jadi jangan hanya mengukur teks samar di dalam input.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ulangi di status lain</h2><p class=\"mb-4\">Cek hover, fokus, dan pesan error. Merah di atas putih muda sering lolos di mata, tetapi gagal di alat ukur. Uji juga di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> setelah deploy pratinjau, karena font bawaan bisa berganti.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat pasangan yang gagal</h2><p class=\"mb-4\">Tulis kode warna dan rasio di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum mengganti palet. Satu catatan mencegah percobaan ulang yang sama minggu depan.</p>",
   "source": "MDN — Color contrast",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast",
   "sourceSnippet": "Text and images of text should have a contrast ratio of at least 4.5:1, except for large text.",
   "source2": "Chrome — Accessibility features in DevTools",
   "source2Url": "https://developer.chrome.com/docs/devtools/accessibility/reference",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Test Text Contrast in Preview before Deploy",
   "desc": "How to check contrast ratios for headings, body text, and buttons in a Clincoo preview so gray text does not vanish on a bright screen.",
   "content": "<p class=\"mb-4\">Text that looks fine in the editor can fail when sunlight hits the screen. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pick three pairs: a heading on its background, body copy, and button text.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure, do not guess</h2><p class=\"mb-4\">DevTools has a contrast checker in the elements panel. A common target is 4.5:1 for normal text and 3:1 for large text. A placeholder is not a label, so do not only measure faint text inside an input.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Repeat on other states</h2><p class=\"mb-4\">Check hover, focus, and error messages. Red on pale white often looks fine and still fails the tool. Also test in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> after a preview deploy, because the fallback font can change.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record the failing pair</h2><p class=\"mb-4\">Write the color codes and ratio on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before changing the palette. One note prevents the same trial next week.</p>",
   "source": "MDN — Color contrast",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast",
   "sourceSnippet": "Text and images of text should have a contrast ratio of at least 4.5:1, except for large text.",
   "source2": "Chrome — Accessibility features in DevTools",
   "source2Url": "https://developer.chrome.com/docs/devtools/accessibility/reference",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "testing-uji-gambar-pecah-dan-alt",
 "langs": {
  "id": {
   "title": "Cara Uji Gambar Pecah dan Teks Alt sebelum Rilis",
   "desc": "Tata cara memutus path gambar di pratinjau Clincoo dan membaca teks alt supaya ikon dekoratif tidak dibacakan sebagai konten.",
   "content": "<p class=\"mb-4\">Gambar yang tampil di mesin lokal bisa 404 setelah folder dipindah. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> sengaja ubah satu src menjadi path yang salah, lalu muat ulang pratinjau.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca yang tersisa</h2><p class=\"mb-4\">Teks alt harus menjelaskan fungsi gambar, bukan menulis \"gambar\" atau nama file. Ikon dekoratif memakai alt kosong agar tidak mengganggu. Kalau layout runtuh saat gambar gagal, beri lebar dan tinggi atau rasio tetap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji jaringan lambat</h2><p class=\"mb-4\">Di DevTools setel Slow 3G sebentar. Gambar besar tanpa width membuat halaman meloncat. Bandingkan pratinjau dengan halaman di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> karena path relatif berbeda setelah deploy.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kembalikan src, simpan catatan</h2><p class=\"mb-4\">Jangan deploy path yang sengaja rusak. Catat gambar mana yang alt-nya masih nama file di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTML img alt",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#alt",
   "sourceSnippet": "The alt attribute defines alternative text describing the image if it cannot be displayed.",
   "source2": "web.dev — Image elements have explicit width and height",
   "source2Url": "https://web.dev/articles/optimize-cls#images-without-dimensions",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Test Broken Images and Alt Text before Release",
   "desc": "How to break an image path in a Clincoo preview and read the alt text so decorative icons are not announced as content.",
   "content": "<p class=\"mb-4\">An image that loads on your machine can 404 after a folder move. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> deliberately change one src to a bad path, then reload the preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read what remains</h2><p class=\"mb-4\">Alt text should describe the image purpose, not say \"image\" or repeat the filename. Decorative icons use an empty alt so they are not announced. If the layout collapses when the image fails, set a width and height or a fixed ratio.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test a slow network</h2><p class=\"mb-4\">In DevTools set Slow 3G for a moment. A large image without width makes the page jump. Compare the preview with the page on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> because relative paths differ after deploy.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Restore the src and keep a note</h2><p class=\"mb-4\">Do not deploy the path you broke on purpose. Note which images still use a filename as alt on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTML img alt",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#alt",
   "sourceSnippet": "The alt attribute defines alternative text describing the image if it cannot be displayed.",
   "source2": "web.dev — Image elements have explicit width and height",
   "source2Url": "https://web.dev/articles/optimize-cls#images-without-dimensions",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "testing-bersihkan-error-console-sebelum-deploy",
 "langs": {
  "id": {
   "title": "Cara Bersihkan Error Console sebelum Deploy",
   "desc": "Tata cara memuat ulang pratinjau Clincoo dengan console kosong supaya error lama tidak tertukar dengan error rilis.",
   "content": "<p class=\"mb-4\">Console yang sudah penuh log membuat error baru tampak biasa. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka DevTools, kosongkan console, centang Preserve log hanya jika kamu sedang membandingkan navigasi, lalu muat ulang sekali.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pisahkan error dan peringatan</h2><p class=\"mb-4\">Merah adalah gagal yang harus disebut sebelum deploy. Kuning dicatat, tetapi jangan dicampur dengan 404 aset. Matikan console.log yang hanya menulis \"test\" agar jejak asli tidak tertimbun.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ulangi di halaman kedua</h2><p class=\"mb-4\">Buka beranda dan satu halaman dalam. Error yang hanya muncul setelah pindah rute sering lolos jika kamu hanya menguji URL pertama. Bandingkan dengan build di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Salin pesan utuh</h2><p class=\"mb-4\">Salin baris error beserta file dan nomor baris ke <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Cuplikan setengah kalimat membuat bantuan AI menebak file yang salah.</p>",
   "source": "MDN — console.error",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console/error_static",
   "sourceSnippet": "The console.error() static method outputs an error message to the console.",
   "source2": "Chrome — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Clear Console Errors before Deploy",
   "desc": "How to reload a Clincoo preview with a clean console so old errors are not mixed up with release errors.",
   "content": "<p class=\"mb-4\">A console already full of logs makes a new error look normal. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open DevTools, clear the console, enable Preserve log only if you are comparing navigation, then reload once.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Separate errors and warnings</h2><p class=\"mb-4\">Red means a failure you should name before deploy. Yellow gets a note, but do not mix it with a missing asset. Remove console.log lines that only print \"test\" so the real trace is not buried.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Repeat on a second page</h2><p class=\"mb-4\">Open the home page and one inner page. An error that appears only after a route change often slips through if you test the first URL alone. Compare with the build on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Copy the full message</h2><p class=\"mb-4\">Copy the error line with the file and line number to <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. A half sentence makes an AI helper guess the wrong file.</p>",
   "source": "MDN — console.error",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console/error_static",
   "sourceSnippet": "The console.error() static method outputs an error message to the console.",
   "source2": "Chrome — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "testing-uji-tautan-internal-mati",
 "langs": {
  "id": {
   "title": "Cara Uji Tautan Internal yang Mati sebelum Deploy",
   "desc": "Tata cara mengklik setiap tautan dalam di pratinjau Clincoo dan mencatat href yang mengarah ke halaman atau berkas yang tidak ada.",
   "content": "<p class=\"mb-4\">Menu yang terlihat rapi bisa mengarah ke slug lama. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> klik tiap tautan nav, footer, dan tombol, lalu catat URL yang berhenti di 404.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek href, bukan hanya teks</h2><p class=\"mb-4\">Arahkan kursor atau lihat panel elemen. Tautan \"Mulai\" yang href-nya masih # atau javascript:void(0) belum siap rilis. Path relatif seperti tentang.html gagal jika file deploy berada di folder lain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji target dan tab baru</h2><p class=\"mb-4\">Tautan keluar sebaiknya punya rel yang sesuai. Jangan biarkan tautan internal membuka tab baru tanpa alasan. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ulangi klik setelah deploy, karena pratinjau editor kadang memetakan path berbeda.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan daftar yang gagal</h2><p class=\"mb-4\">Satu baris per tautan mati — teks, href, halaman asal — cukup untuk perbaikan. Tempel daftar itu di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum meminta AI merapikan menu.</p>",
   "source": "MDN — HTML a href",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#href",
   "sourceSnippet": "The href attribute indicates the URL the link points to.",
   "source2": "Chrome — Network panel",
   "source2Url": "https://developer.chrome.com/docs/devtools/network",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Test Dead Internal Links before Deploy",
   "desc": "How to click every in-site link in a Clincoo preview and record hrefs that point to a missing page or file.",
   "content": "<p class=\"mb-4\">A tidy menu can still point at an old slug. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> click every nav, footer, and button link, then note any URL that ends on a 404.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the href, not only the label</h2><p class=\"mb-4\">Hover or inspect the element. A \"Start\" link whose href is still # or javascript:void(0) is not ready to ship. A relative path such as about.html fails if the deployed file lives in another folder.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test target and new tabs</h2><p class=\"mb-4\">Outbound links should use a fitting rel. Do not let internal links open a new tab without a reason. On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> click again after deploy, because the editor preview sometimes maps paths differently.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Save the failed list</h2><p class=\"mb-4\">One line per dead link — label, href, source page — is enough to fix. Paste that list on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before asking an AI to tidy the menu.</p>",
   "source": "MDN — HTML a href",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#href",
   "sourceSnippet": "The href attribute indicates the URL the link points to.",
   "source2": "Chrome — Network panel",
   "source2Url": "https://developer.chrome.com/docs/devtools/network",
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
