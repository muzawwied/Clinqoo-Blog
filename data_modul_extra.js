// Clincoo Docs — artikel tambahan Modul (6 Oktober 2026, 11:00 WIB — tambah 4 artikel)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["modul"]) {
    window.countryDataFiles["modul"] = { "names": { "id": "Modul", "en": "Modules" }, "articles": [] };
  }
  var list = window.countryDataFiles["modul"].articles;
  var extra = [
{
 "id": "modul-nomodule-fallback-browser-lama",
 "langs": {
  "id": {
   "title": "Cara Beri Fallback nomodule untuk Browser Lama",
   "desc": "Tata cara memasangkan skrip type=module dengan skrip nomodule di Clincoo supaya browser lama tetap punya jalur klasik.",
   "content": "<p class=\\\"mb-4\\\">Berkas type=module diabaikan oleh browser lama. Tanpa jalur kedua, tombol yang bergantung pada skrip itu diam.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Dua skrip, satu tugas</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> pasang skrip modern dengan type=module dan skrip klasik dengan nomodule. Jangan menaruh logika yang sama di keduanya tanpa penjaga, supaya browser baru tidak menjalankan dua kali.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Uji di pratinjau</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> buka konsol dan pastikan hanya satu jalur yang jalan. Catat nama berkas di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>. Jika nomodule ikut termuat di browser baru, hapus duplikat sebelum deploy.</p>",
   "source": "MDN — JavaScript modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "Older browsers ignore type=module; a nomodule script is the classic fallback.",
   "source2": "MDN — nomodule",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script#nomodule",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Add a nomodule Fallback for Older Browsers",
   "desc": "How to pair a type=module script with a nomodule script in Clincoo so an older browser still has a classic path.",
   "content": "<p class=\\\"mb-4\\\">A type=module file is ignored by older browsers. Without a second path, a button that depends on that script stays silent.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Two scripts, one job</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> add the modern script with type=module and the classic script with nomodule. Do not put the same logic in both without a guard, or a new browser runs it twice.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Test in preview</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> open the console and confirm only one path runs. Record the file names on <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>. If nomodule also loads in a new browser, remove the duplicate before deploy.</p>",
   "source": "MDN — JavaScript modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "Older browsers ignore type=module; a nomodule script is the classic fallback.",
   "source2": "MDN — nomodule",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script#nomodule",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
,
{
 "id": "modul-strict-mode-otomatis-di-type-module",
 "langs": {
  "id": {
   "title": "Cara Mengandalkan Strict Mode Otomatis di type=module",
   "desc": "Tata cara memanfaatkan strict mode bawaan modul JavaScript di Clincoo tanpa menulis use strict manual.",
   "content": "<p class=\"mb-4\">Berkas dengan type=module sudah berjalan di strict mode. Menulis use strict di dalamnya tidak mengubah apa pun, tetapi assignment ke variabel yang belum dideklarasikan tetap gagal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hapus use strict yang tersisa dari salinan skrip klasik</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ubah skrip menjadi type=module. Hapus baris use strict. Deklarasikan setiap variabel dengan let atau const. Jangan mengandalkan variabel global implisit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji error di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka konsol dan sengaja tulis nama tanpa deklarasi. Pesan ReferenceError berarti strict mode aktif. Catat berkasnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum deploy.</p>",
   "source": "MDN — JavaScript modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "Module code is always strict mode code.",
   "source2": "MDN — Strict mode",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Rely on Automatic Strict Mode in type=module",
   "desc": "How to use the strict mode that JavaScript modules already have in Clincoo, without a manual use strict line.",
   "content": "<p class=\"mb-4\">A file with type=module already runs in strict mode. Writing use strict inside it changes nothing, but assigning to an undeclared variable still fails.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Remove leftover use strict from a classic script copy</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> change the script to type=module. Remove the use strict line. Declare every variable with let or const. Do not rely on an implicit global.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test the error in preview</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the console and write a name without a declaration. A ReferenceError means strict mode is on. Note the file on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before deploy.</p>",
   "source": "MDN — JavaScript modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "Module code is always strict mode code.",
   "source2": "MDN — Strict mode",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "modul-this-undefined-di-level-atas",
 "langs": {
  "id": {
   "title": "Cara Menghindari this yang undefined di Modul",
   "desc": "Tata cara mengganti this di level atas modul Clincoo yang tidak menunjuk window.",
   "content": "<p class=\"mb-4\">Di skrip klasik, this di level atas sering sama dengan window. Di type=module, this di level atas adalah undefined. Kode yang membaca this.location akan pecah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti this dengan globalThis</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> cari this di luar fungsi pada berkas modul. Ganti akses window dengan globalThis, atau impor yang dibutuhkan secara eksplisit. Jangan memulihkan this dengan memanggil fungsi lewat window.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek konsol sebelum deploy</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> muat halaman dan pastikan tidak ada TypeError pada this. Tulis hasilnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Jika handler event butuh elemen, pakai event.currentTarget, bukan this di level atas.</p>",
   "source": "MDN — JavaScript modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "At the top level of a module, this is undefined.",
   "source2": "MDN — globalThis",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid undefined this at the Top of a Module",
   "desc": "How to replace top-level this in a Clincoo module, which does not point at window.",
   "content": "<p class=\"mb-4\">In a classic script, top-level this is often window. In type=module, top-level this is undefined. Code that reads this.location breaks.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Replace this with globalThis</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> find this outside a function in a module file. Replace window access with globalThis, or import what you need explicitly. Do not restore this by calling the function through window.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the console before deploy</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> load the page and confirm there is no TypeError on this. Write the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. If an event handler needs the element, use event.currentTarget, not top-level this.</p>",
   "source": "MDN — JavaScript modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "At the top level of a module, this is undefined.",
   "source2": "MDN — globalThis",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "modul-top-level-await-tahan-evaluasi",
 "langs": {
  "id": {
   "title": "Cara Menahan Evaluasi Modul dengan Top-Level Await",
   "desc": "Tata cara memakai top-level await di Clincoo supaya impor tidak lanjut sebelum data siap.",
   "content": "<p class=\"mb-4\">Top-level await menahan evaluasi modul dan semua yang mengimpornya. Satu permintaan yang lambat menahan seluruh pohon impor.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Batasi await di modul gerbang</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> letakkan top-level await hanya di modul yang memang harus selesai dulu, misalnya konfigurasi. Jangan await di modul yang diimpor halaman utama jika datanya tidak kritis. Beri batas waktu pada fetch.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur waktu muat</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka panel Network dan lihat kapan skrip berikutnya mulai. Catat penundaan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Jika halaman diam terlalu lama, pindahkan await ke impor dinamis.</p>",
   "source": "MDN — Top-level await",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await",
   "sourceSnippet": "Top-level await delays evaluation of the current module and its importers.",
   "source2": "MDN — JavaScript modules",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Hold Module Evaluation with Top-Level Await",
   "desc": "How to use top-level await in Clincoo so importers do not continue before data is ready.",
   "content": "<p class=\"mb-4\">Top-level await holds module evaluation and everything that imports it. One slow request holds the whole import tree.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Limit await to a gate module</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> put top-level await only in a module that must finish first, such as config. Do not await in a module imported by the home page if the data is not critical. Set a timeout on fetch.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure load time</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the Network panel and see when the next script starts. Record the delay on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. If the page stays blank too long, move the await into a dynamic import.</p>",
   "source": "MDN — Top-level await",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await",
   "sourceSnippet": "Top-level await delays evaluation of the current module and its importers.",
   "source2": "MDN — JavaScript modules",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "modul-variabel-tidak-bocor-ke-window",
 "langs": {
  "id": {
   "title": "Cara Menjaga Variabel Modul Tidak Bocor ke window",
   "desc": "Tata cara mengekspor fungsi Clincoo secara eksplisit alih-alih mengandalkan variabel global.",
   "content": "<p class=\"mb-4\">Variabel di type=module tidak menjadi properti window. Skrip lain yang memanggil nama itu akan dapat ReferenceError.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ekspor yang memang dibagikan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan export pada fungsi yang dipakai berkas lain. Di berkas pemakai, tulis import. Jangan menempel fungsi ke window hanya agar skrip klasik bisa melihatnya, kecuali ada fallback nomodule yang memang butuh.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pastikan tidak ada nama global</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ketik nama fungsi di konsol. undefined atau ReferenceError adalah hasil yang benar untuk modul. Catat impornya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — JavaScript modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "Module scope is private; bindings are not added to the global object.",
   "source2": "MDN — export",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Keep Module Variables Off window",
   "desc": "How to export a Clincoo function explicitly instead of relying on a global variable.",
   "content": "<p class=\"mb-4\">A variable in type=module does not become a window property. Another script that calls that name gets a ReferenceError.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Export only what is shared</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add export on functions used by other files. In the consumer file, write import. Do not attach a function to window just so a classic script can see it, unless a nomodule fallback truly needs it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Confirm there is no global name</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> type the function name in the console. undefined or ReferenceError is the correct result for a module. Note the import on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — JavaScript modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "Module scope is private; bindings are not added to the global object.",
   "source2": "MDN — export",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "modul-perbaiki-failed-to-resolve-module-specifier",
 "langs": {
  "id": {
   "title": "Cara Memperbaiki Failed to Resolve Module Specifier",
   "desc": "Tata cara memperbaiki error specifier modul Clincoo yang tidak relatif dan tidak terdaftar di import map.",
   "content": "<p class=\"mb-4\">Browser menolak specifier polos seperti lodash jika tidak ada import map. Pesan Failed to resolve module specifier muncul sebelum kode berjalan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai path relatif atau import map</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ubah impor menjadi path relatif yang diawali ./ atau ../, termasuk ekstensi. Jika nama polos memang dipakai, daftarkan di import map satu versi saja. Jangan mencampur URL absolut dan path relatif untuk berkas yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Muat ulang dan baca konsol</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> muat ulang tanpa cache. Error harus hilang. Simpan specifier akhir di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Jika MIME berkas salah, perbaiki ekstensi sebelum deploy.</p>",
   "source": "MDN — import",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import",
   "sourceSnippet": "Bare specifiers need an import map or a bundler; browsers do not resolve them alone.",
   "source2": "MDN — Import map",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Fix Failed to Resolve Module Specifier",
   "desc": "How to fix a Clincoo module specifier error when the name is neither relative nor registered in an import map.",
   "content": "<p class=\"mb-4\">The browser rejects a bare specifier such as lodash if there is no import map. Failed to resolve module specifier appears before the code runs.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use a relative path or an import map</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> change the import to a relative path starting with ./ or ../, including the extension. If a bare name is required, register one version in an import map. Do not mix an absolute URL and a relative path for the same file.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reload and read the console</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> reload without cache. The error should be gone. Save the final specifier on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. If the file MIME is wrong, fix the extension before deploy.</p>",
   "source": "MDN — import",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import",
   "sourceSnippet": "Bare specifiers need an import map or a bundler; browsers do not resolve them alone.",
   "source2": "MDN — Import map",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "modul-defer-bukan-pengganti-type-module",
 "langs": {
  "id": {
   "title": "Cara Jangan Pakai defer sebagai Pengganti type=module",
   "desc": "Tata cara membedakan skrip defer dan type=module di halaman Clincoo supaya impor tidak pecah.",
   "content": "<p class=\\\"mb-4\\\">Atribut defer menunda skrip klasik. Itu bukan modul dan tidak mendukung import. Di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> cek tag skrip sebelum mengubah urutan muat.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Pilih satu model</h2><p class=\\\"mb-4\\\">Jika berkas memakai import atau export, tag harus type=module. defer hanya untuk skrip klasik yang tidak saling impor. Mencampur keduanya pada berkas yang sama membuat browser mengabaikan impor.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Uji di konsol pratinjau</h2><p class=\\\"mb-4\\\">Buka pratinjau di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a>. Jika konsol menulis cannot use import statement outside a module, kembalikan type=module. Catat tag yang benar di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — script: defer and type",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script",
   "sourceSnippet": "defer applies to classic scripts; module scripts are deferred by default and support import and export.",
   "source2": "MDN — JavaScript modules",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How Not to Use defer as a Substitute for type=module",
   "desc": "How to tell a deferred classic script from type=module on a Clincoo page so imports do not break.",
   "content": "<p class=\\\"mb-4\\\">The defer attribute delays a classic script. It is not a module and does not support import. In <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> check the script tag before you change load order.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Pick one model</h2><p class=\\\"mb-4\\\">If the file uses import or export, the tag must be type=module. defer is only for classic scripts that do not import each other. Mixing them on the same file makes the browser ignore the import.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Test in the preview console</h2><p class=\\\"mb-4\\\">Open the preview in <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a>. If the console says cannot use import statement outside a module, restore type=module. Note the correct tag on <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — script: defer and type",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script",
   "sourceSnippet": "defer applies to classic scripts; module scripts are deferred by default and support import and export.",
   "source2": "MDN — JavaScript modules",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "modul-hindari-impor-sirkular",
 "langs": {
  "id": {
   "title": "Cara Hindari Impor Sirkular antar Modul",
   "desc": "Tata cara memutus impor sirkular di proyek Clincoo supaya binding belum siap tidak menjadi undefined.",
   "content": "<p class=\\\"mb-4\\\">Dua berkas yang saling import sering mengembalikan binding kosong saat dievaluasi. Gambar arah impor di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> sebelum menambah export baru.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Pecah bagian yang saling butuh</h2><p class=\\\"mb-4\\\">Pindahkan konstanta atau fungsi yang dipakai bersama ke berkas ketiga. Biarkan kedua modul mengimpor berkas itu, bukan saling mengimpor. Jangan menaruh efek samping di level atas modul yang masih saling menunggu.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Uji urutan evaluasi</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> muat ulang pratinjau dan baca konsol. Jika nilai impor undefined hanya pada muatan pertama, ada siklus. Catat berkas ketiga di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a> supaya perubahan berikutnya tidak menyambungkan siklus lagi.</p>",
   "source": "MDN — JavaScript modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "Modules are evaluated once; circular imports can expose bindings before their initialization has finished.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid Circular Imports Between Modules",
   "desc": "How to break a circular import in a Clincoo project so a binding is not undefined before it is initialized.",
   "content": "<p class=\\\"mb-4\\\">Two files that import each other often return an empty binding while they are evaluated. Draw the import direction in <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> before adding a new export.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Split the shared part</h2><p class=\\\"mb-4\\\">Move the shared constant or function into a third file. Let both modules import that file instead of each other. Do not put side effects at the top level of modules that still wait on each other.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Test evaluation order</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> reload the preview and read the console. If an import is undefined only on the first load, there is a cycle. Note the third file on <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a> so the next change does not reconnect the cycle.</p>",
   "source": "MDN — JavaScript modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "Modules are evaluated once; circular imports can expose bindings before their initialization has finished.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
,
{
 "id": "modul-tangkap-gagal-impor-dinamis",
 "langs": {
  "id": {
   "title": "Cara Tangkap Gagal Impor Dinamis di Konsol",
   "desc": "Tata cara menangkap import() yang gagal di Clincoo supaya halaman tidak diam saat jaringan atau jalur berkas salah.",
   "content": "<p class=\"mb-4\">import() mengembalikan janji. Kalau jalur atau jaringan gagal, penolakan yang tidak ditangkap hanya muncul di konsol dan panel tetap kosong.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bungkus dengan catch</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> panggil import() lalu tangkap error. Tampilkan pesan yang menyebut nama berkas, bukan alert generik. Jangan mengimpor panel yang jarang dipakai di level atas halaman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan jalur salah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ubah sementara jalur impor, muat ulang pratinjau, dan pastikan catch yang menulis status. Kembalikan jalur yang benar lalu catat polanya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — import()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import",
   "sourceSnippet": "Dynamic import() returns a promise that rejects when the module cannot be fetched or evaluated.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Catch a Failed Dynamic Import in the Console",
   "desc": "How to catch a rejected import() in Clincoo so the page does not stay blank when the network or file path is wrong.",
   "content": "<p class=\"mb-4\">import() returns a promise. If the path or network fails, an uncaught rejection only shows in the console and the panel stays empty.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Wrap it with catch</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> call import() and catch the error. Show a message that names the file, not a generic alert. Do not import a rarely used panel at the top level of the page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test with a wrong path</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> temporarily change the import path, reload the preview, and confirm the catch writes a status. Restore the correct path and note the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — import()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import",
   "sourceSnippet": "Dynamic import() returns a promise that rejects when the module cannot be fetched or evaluated.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "modul-jangan-andalkan-urutan-skrip-klasik",
 "langs": {
  "id": {
   "title": "Cara Jangan Andalkan Urutan Skrip Klasik di type=module",
   "desc": "Tata cara berhenti mengandalkan urutan tag script klasik saat berkas Clincoo sudah type=module.",
   "content": "<p class=\"mb-4\">Skrip klasik berjalan sesuai urutan tag. Modul ditunda, dievaluasi setelah dependensi, dan tidak berbagi variabel lewat window.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Impor yang benar-benar dipakai</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ganti anggapan fileA.js lalu fileB.js dengan import bernama. Kalau sebuah fungsi harus ada sebelum render, impor fungsi itu, jangan mengharapkan side effect dari tag di atasnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> muat ulang dan pastikan tidak ada ReferenceError karena variabel global hilang. Simpan urutan dependensi yang baru di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — JavaScript modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "Module scripts are deferred and their evaluation order follows the import graph, not classic script-tag order.",
   "source2": "Clincoo App",
   "source2Url": "https://app.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How Not to Rely on Classic Script Order with type=module",
   "desc": "How to stop relying on classic script-tag order once Clincoo files use type=module.",
   "content": "<p class=\"mb-4\">Classic scripts run in tag order. Modules are deferred, evaluated after their dependencies, and do not share variables through window.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Import what you actually use</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> replace the assumption that fileA.js then fileB.js with a named import. If a function must exist before render, import that function. Do not expect a side effect from a tag above it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> reload and confirm there is no ReferenceError from a missing global. Save the new dependency order on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — JavaScript modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "Module scripts are deferred and their evaluation order follows the import graph, not classic script-tag order.",
   "source2": "Clincoo App",
   "source2Url": "https://app.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "modul-konsisten-ekspor-named",
 "langs": {
  "id": {
   "title": "Cara Konsisten Pakai Ekspor Named, Jangan Dicampur Default",
   "desc": "Tata cara memilih ekspor named yang konsisten di modul Clincoo supaya impor tidak salah nama.",
   "content": "<p class=\"mb-4\">Mencampur export default dan export bernama pada berkas yang sama sering membuat impor default tertukar dengan nama fungsi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pilih satu gaya per berkas</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ekspor fungsi dengan nama yang sama dengan pemakaiannya. Impor dengan kurung kurawal dan nama itu. Jangan menambah default hanya supaya baris impor lebih pendek.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Samakan nama di pemanggil</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka konsol setelah pratinjau. SyntaxError atau fungsi yang undefined biasanya berarti nama impor tidak sama dengan ekspor. Catat gaya yang dipilih di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — export",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export",
   "sourceSnippet": "Named exports must be imported with the same name unless the import is renamed; a default export is a separate binding.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Stay Consistent with Named Exports Instead of Mixing Defaults",
   "desc": "How to pick a consistent named export in Clincoo modules so imports do not use the wrong name.",
   "content": "<p class=\"mb-4\">Mixing export default and named exports in the same file often swaps a default import with the function name.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pick one style per file</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> export the function under the name callers use. Import it with braces and that name. Do not add a default just to make the import line shorter.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match the name at the caller</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the console after preview. A SyntaxError or an undefined function usually means the import name does not match the export. Note the chosen style on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — export",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export",
   "sourceSnippet": "Named exports must be imported with the same name unless the import is renamed; a default export is a separate binding.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "modul-perbaiki-impor-relatif-salah-folder",
 "langs": {
  "id": {
   "title": "Cara Perbaiki Impor Relatif yang Salah Folder",
   "desc": "Tata cara mengoreksi jalur ./ dan ../ di modul Clincoo ketika berkas pindah folder.",
   "content": "<p class=\"mb-4\">Failed to resolve module specifier sering muncul setelah berkas dipindah, bukan karena modulnya rusak. Jalur relatif dihitung dari berkas pengimpor, bukan dari root proyek.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hitung dari berkas saat ini</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka berkas pengimpor. Satu ../ naik satu folder. Tambahkan ekstensi .js jika server menolak specifier tanpa ekstensi. Jangan menulis jalur dari folder mental root.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Muat ulang dan baca konsol</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> muat ulang pratinjau. Kalau error masih menyebut specifier, salin jalur itu dan bandingkan dengan pohon berkas. Simpan perbaikan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — import statement",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import",
   "sourceSnippet": "A relative module specifier is resolved against the URL of the module that contains the import.",
   "source2": "Clincoo App",
   "source2Url": "https://app.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Fix a Relative Import That Points at the Wrong Folder",
   "desc": "How to correct ./ and ../ paths in Clincoo modules after a file moves to another folder.",
   "content": "<p class=\"mb-4\">Failed to resolve module specifier often appears after a file moves, not because the module is broken. A relative path is resolved from the importing file, not from the project root.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Count from the current file</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open the importing file. One ../ goes up one folder. Add the .js extension if the server rejects a specifier without one. Do not write the path from an imagined root folder.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reload and read the console</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> reload the preview. If the error still names the specifier, copy that path and compare it with the file tree. Save the fix on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — import statement",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import",
   "sourceSnippet": "A relative module specifier is resolved against the URL of the module that contains the import.",
   "source2": "Clincoo App",
   "source2Url": "https://app.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
];
  extra.forEach(function (item) {
    if (!list.some(function (x) { return x.id === item.id; })) list.push(item);
  });
})();
