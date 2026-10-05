// Clincoo Docs — kategori Testing (5 Oktober 2026, WIB)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["testing"] = {
 "names": {
  "id": "Testing",
  "en": "Testing"
 },
 "articles": [
{
 "id": "testing-cek-form-kosong-sebelum-deploy",
 "langs": {
  "id": {
   "title": "Cara Uji Form Kosong sebelum Deploy",
   "desc": "Tata cara mengirim form Clincoo tanpa isi, dengan satu kolom terisi, dan dengan data lengkap supaya pesan error tidak hilang setelah deploy.",
   "content": "<p class=\"mb-4\">Form yang hanya dicoba saat semua kolom terisi menyembunyikan bug validasi. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> kirim sekali dengan semua kolom kosong, sekali dengan satu kolom terisi, lalu sekali dengan data lengkap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat pesan yang diharapkan</h2><p class=\"mb-4\">Tiap kolom wajib punya satu kalimat error. Jangan mengandalkan tooltip browser saja, karena pesan bawaan berubah menurut bahasa perangkat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek tombol saat permintaan berjalan</h2><p class=\"mb-4\">Tombol kirim harus nonaktif atau berganti teks selama permintaan belum selesai. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan jaringan lambat di DevTools supaya klik kedua tidak membuat dua entri.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan tiga hasil</h2><p class=\"mb-4\">Tulis hasil kosong, sebagian, dan lengkap di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum deploy. Kalau pesan hilang setelah rilis, bandingkan dengan catatan itu, bukan dengan ingatan.</p>",
   "source": "MDN — Constraint validation",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation",
   "sourceSnippet": "Constraint validation is the process of checking that user input meets the constraints set on form controls.",
   "source2": "MDN — HTMLFormElement: submit event",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Test an Empty Form before Deploy",
   "desc": "How to submit a Clincoo form empty, with one field filled, and with complete data so error messages do not disappear after deploy.",
   "content": "<p class=\"mb-4\">A form tried only when every field is filled hides validation bugs. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> submit once with every field empty, once with one field filled, then once with complete data.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write the expected message</h2><p class=\"mb-4\">Each required field needs one error sentence. Do not rely only on the browser tooltip, because the built-in message changes with the device language.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the button while the request runs</h2><p class=\"mb-4\">The submit button should be disabled or change its label until the request finishes. Test on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> with slow network in DevTools so a second click does not create two entries.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep the three results</h2><p class=\"mb-4\">Write the empty, partial, and complete results on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before deploy. If a message disappears after release, compare with that note, not with memory.</p>",
   "source": "MDN — Constraint validation",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation",
   "sourceSnippet": "Constraint validation is the process of checking that user input meets the constraints set on form controls.",
   "source2": "MDN — HTMLFormElement: submit event",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "testing-reproduksi-bug-dari-console",
 "langs": {
  "id": {
   "title": "Cara Reproduksi Bug dari Pesan Console",
   "desc": "Tata cara menyalin error console Clincoo, mengulang langkah yang sama, dan menandai baris yang benar-benar gagal sebelum mengubah kode.",
   "content": "<p class=\"mb-4\">Pesan merah di console adalah petunjuk, bukan kesimpulan. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka DevTools, ulangi aksi yang memicu error, lalu salin teks lengkap termasuk file dan nomor baris.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ulangi sekali lagi</h2><p class=\"mb-4\">Kalau error tidak muncul pada percobaan kedua, catat apa yang berbeda: data, lebar layar, atau urutan klik. Bug yang tidak stabil tetap perlu langkah, bukan tebakan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca stack dari atas</h2><p class=\"mb-4\">Baris pertama yang milik proyek biasanya penyebab terdekat. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bahwa baris itu benar-benar terpanggil, bukan hanya ada di file.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan ubah banyak hal sekaligus</h2><p class=\"mb-4\">Perbaiki satu dugaan, lalu ulangi langkah yang sama. Simpan cuplikan sebelum dan sesudah di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya regresi mudah dikenali.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console object provides access to the browser's debugging console.",
   "source2": "Chrome — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Reproduce a Bug from a Console Message",
   "desc": "How to copy a Clincoo console error, repeat the same steps, and mark the line that actually failed before changing code.",
   "content": "<p class=\"mb-4\">A red console message is a clue, not a conclusion. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open DevTools, repeat the action that triggers the error, then copy the full text including the file and line number.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Repeat it once more</h2><p class=\"mb-4\">If the error does not appear on the second try, note what changed: data, viewport width, or click order. An unstable bug still needs steps, not a guess.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read the stack from the top</h2><p class=\"mb-4\">The first line that belongs to the project is usually the nearest cause. Test on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> that the line actually runs, not merely exists in the file.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not change many things at once</h2><p class=\"mb-4\">Fix one hypothesis, then repeat the same steps. Keep the before and after snippet on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so a regression is easy to recognize.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console object provides access to the browser's debugging console.",
   "source2": "Chrome — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "testing-uji-lebar-layar-mobile",
 "langs": {
  "id": {
   "title": "Cara Uji Lebar Layar Mobile sebelum Rilis",
   "desc": "Tata cara memeriksa halaman Clincoo di lebar 360, 390, dan 768 piksel supaya tombol, form, dan menu tidak tertutup atau meluber.",
   "content": "<p class=\"mb-4\">Layout yang rapi di laptop sering pecah di ponsel. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> aktifkan mode perangkat, lalu cek tiga lebar: 360, 390, dan 768 piksel.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gulir sampai footer</h2><p class=\"mb-4\">Jangan hanya melihat hero. Form, tabel, dan tombol di bawah lipatan adalah tempat overflow paling sering.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji ketuk, bukan hanya lihat</h2><p class=\"mb-4\">Buka menu, isi satu kolom, dan tutup dialog. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan target ketuk tidak bertumpuk dengan bilah browser.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat lebar yang gagal</h2><p class=\"mb-4\">Tulis lebar dan nama blok yang meluber di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Perbaikan tanpa angka lebar sulit diuji ulang.</p>",
   "source": "MDN — Viewport meta tag",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag",
   "sourceSnippet": "The viewport meta tag lets you control the size and shape of the visual viewport.",
   "source2": "Chrome — Device mode",
   "source2Url": "https://developer.chrome.com/docs/devtools/device-mode",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Test Mobile Width before Release",
   "desc": "How to check a Clincoo page at 360, 390, and 768 pixels so buttons, forms, and menus are not covered or overflowing.",
   "content": "<p class=\"mb-4\">A layout that looks fine on a laptop often breaks on a phone. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> turn on device mode, then check three widths: 360, 390, and 768 pixels.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Scroll to the footer</h2><p class=\"mb-4\">Do not only look at the hero. Forms, tables, and buttons below the fold are where overflow shows up most often.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test taps, not only sight</h2><p class=\"mb-4\">Open the menu, fill one field, and close the dialog. On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> make sure the tap target does not sit under the browser bar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Note the width that fails</h2><p class=\"mb-4\">Write the width and the block name that overflows on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. A fix without a width number is hard to retest.</p>",
   "source": "MDN — Viewport meta tag",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag",
   "sourceSnippet": "The viewport meta tag lets you control the size and shape of the visual viewport.",
   "source2": "Chrome — Device mode",
   "source2Url": "https://developer.chrome.com/docs/devtools/device-mode",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "testing-bedakan-gagal-jaringan-dan-validasi",
 "langs": {
  "id": {
   "title": "Cara Bedakan Gagal Jaringan dan Gagal Validasi",
   "desc": "Tata cara memisahkan error isian Clincoo dari gagal fetch supaya pengguna tidak disuruh memperbaiki kolom yang sudah benar.",
   "content": "<p class=\"mb-4\">Dua gagal yang tampil sama membuat pengguna mengulang isi yang sudah benar. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tampilkan pesan validasi di kolom, dan pesan jaringan di area status terpisah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji offline dengan sengaja</h2><p class=\"mb-4\">Di DevTools set jaringan ke offline setelah isian lolos cek klien. Pesan harus bilang permintaan tidak terkirim, bukan bilang email tidak valid.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan campur kode status</h2><p class=\"mb-4\">Balasan 400 adalah data ditolak. Balasan gagal fetch tanpa status adalah jaringan. Uji keduanya di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dan pastikan tombol coba lagi hanya muncul pada gagal jaringan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan contoh kedua pesan</h2><p class=\"mb-4\">Tulis satu contoh tiap jenis di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> agar salinan berikutnya tidak menyamakan keduanya.</p>",
   "source": "MDN — Using the Fetch API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
   "sourceSnippet": "The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline.",
   "source2": "MDN — HTTP response status codes",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Tell a Network Failure from a Validation Failure",
   "desc": "How to separate a Clincoo field error from a failed fetch so users are not told to fix a field that is already valid.",
   "content": "<p class=\"mb-4\">Two failures that look the same make users redo input that was already valid. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> show validation text on the field, and network text in a separate status area.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test offline on purpose</h2><p class=\"mb-4\">In DevTools set the network to offline after the input passes the client check. The message should say the request was not sent, not that the email is invalid.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not mix status codes</h2><p class=\"mb-4\">A 400 response means the data was rejected. A failed fetch with no status is the network. Test both on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> and make sure retry appears only for the network failure.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep a sample of both messages</h2><p class=\"mb-4\">Write one example of each kind on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next copy does not treat them as the same.</p>",
   "source": "MDN — Using the Fetch API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
   "sourceSnippet": "The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline.",
   "source2": "MDN — HTTP response status codes",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "testing-catat-langkah-sebelum-minta-bantuan-ai",
 "langs": {
  "id": {
   "title": "Cara Catat Langkah sebelum Minta Bantuan AI",
   "desc": "Tata cara menyusun laporan bug Clincoo yang singkat — harapan, hasil, langkah, dan cuplikan — sebelum menanyakan asisten AI.",
   "content": "<p class=\"mb-4\">Asisten AI menjawab sesuai konteks yang diberi. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis dulu empat baris: apa yang diharapkan, apa yang terjadi, langkah ulang, dan cuplikan yang relevan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sertakan pesan error utuh</h2><p class=\"mb-4\">Jangan meringkas error menjadi kata gagal. Salin kalimat console atau status HTTP. Rahasia seperti kunci API tetap disunting.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sebut yang sudah dicoba</h2><p class=\"mb-4\">Satu kalimat tentang percobaan sebelumnya mencegah saran yang sama. Uji saran itu di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan langkah yang sama, bukan dengan skenario baru.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan jawaban yang terbukti</h2><p class=\"mb-4\">Kalau saran memperbaiki bug, tempel ringkasannya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> bersama langkah uji. Itu menjadi catatan tim, bukan hanya obrolan.</p>",
   "source": "MDN — console.error",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console/error_static",
   "sourceSnippet": "The console.error() static method outputs an error message to the console.",
   "source2": "Chrome — Debug JavaScript",
   "source2Url": "https://developer.chrome.com/docs/devtools/javascript",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Write Steps before Asking an AI for Help",
   "desc": "How to write a short Clincoo bug report — expected result, actual result, steps, and a snippet — before asking an AI assistant.",
   "content": "<p class=\"mb-4\">An AI assistant answers from the context it is given. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write four lines first: what you expected, what happened, the repeat steps, and the relevant snippet.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Include the full error text</h2><p class=\"mb-4\">Do not shorten the error to the word failed. Copy the console sentence or the HTTP status. Secrets such as API keys stay redacted.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Say what you already tried</h2><p class=\"mb-4\">One sentence about the previous attempt prevents the same suggestion. Test that suggestion on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> with the same steps, not with a new scenario.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep the answer that worked</h2><p class=\"mb-4\">If a suggestion fixes the bug, paste a short summary on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> with the test steps. That becomes a team note, not only a chat.</p>",
   "source": "MDN — console.error",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console/error_static",
   "sourceSnippet": "The console.error() static method outputs an error message to the console.",
   "source2": "Chrome — Debug JavaScript",
   "source2Url": "https://developer.chrome.com/docs/devtools/javascript",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
