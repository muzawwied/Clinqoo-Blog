// Clincoo Docs — kategori Konsol (Oktober 2026)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["console"] = {
 "names": {
  "id": "Konsol",
  "en": "Console"
 },
 "articles": [
{
 "id": "console-baca-error-pertama-bukan-ikutannya",
 "langs": {
  "id": {
   "title": "Cara Baca Error Pertama di Konsol, Bukan yang Mengikutinya",
   "desc": "Tata cara menemukan error pertama di konsol browser saat halaman Clincoo gagal, lalu mengabaikan error ikutannya yang hanya muncul karena skrip di bawahnya tidak jalan.",
   "content": "<p class=\"mb-4\">Konsol sering menumpuk error setelah error pertama. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> gulir ke entri paling atas pada muatan yang gagal, bukan ke baris merah terakhir.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bersihkan konsol, lalu ulangi</h2><p class=\"mb-4\">Kosongkan konsol, muat ulang sekali, dan jangan klik dulu. Error yang muncul sebelum interaksi adalah kandidat pertama. Error setelah klik dicatat terpisah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Abaikan akibat, catat penyebab</h2><p class=\"mb-4\">Pesan 'X is not defined' di bawah sering akibat skrip di atas gagal di-parse. Salin pesan dan file:baris error pertama. Cek preview di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> setelah satu perbaikan saja.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan menempel seluruh log</h2><p class=\"mb-4\">Kirim error pertama plus satu stack. Log berulang hanya memperpanjang jawaban. Simpan pola ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console object provides access to the browser debugging console.",
   "source2": "Chrome Developers — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Read the First Console Error, Not the Cascade",
   "desc": "How to find the first browser console error when a Clincoo page fails, then ignore the cascade that only appears because later scripts never ran.",
   "content": "<p class=\"mb-4\">The console often stacks errors after the first one. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> scroll to the top entry of the failed load, not the last red line.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Clear the console, then repeat</h2><p class=\"mb-4\">Clear the console, reload once, and do not click yet. Errors that appear before interaction are the first candidates. Errors after a click are noted separately.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ignore the effect, record the cause</h2><p class=\"mb-4\">An 'X is not defined' message lower down is often because a script above failed to parse. Copy the message and file:line of the first error. Check the preview on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> after one fix only.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not paste the whole log</h2><p class=\"mb-4\">Send the first error plus one stack. Repeated logs only lengthen the answer. Keep this pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console object provides access to the browser debugging console.",
   "source2": "Chrome Developers — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "console-preserve-log-saat-navigasi",
 "langs": {
  "id": {
   "title": "Cara Aktifkan Preserve Log Saat Halaman Pindah",
   "desc": "Tata cara menyalakan Preserve log di konsol supaya error saat pindah halaman atau muat ulang di Clincoo tidak hilang sebelum sempat disalin.",
   "content": "<p class=\"mb-4\">Error yang muncul tepat sebelum halaman pindah sering hilang karena konsol ikut dibersihkan. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka konsol, lalu aktifkan Preserve log sebelum mengulang aksi yang gagal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Nyalakan sebelum mengulang</h2><p class=\"mb-4\">Centang Preserve log, kosongkan konsol sekali, lalu picu ulang alur yang pindah halaman. Entri lama tetap ada sehingga error pertama masih terlihat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bedakan muatan lama dan baru</h2><p class=\"mb-4\">Setelah navigasi, catatan dari dokumen sebelumnya tetap tercampur. Catat URL dan waktu, lalu bandingkan dengan preview di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> setelah satu perubahan saja.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Matikan lagi setelah selesai</h2><p class=\"mb-4\">Preserve log yang terus nyala membuat log sesi lama mengganggu debug berikutnya. Matikan setelah kasus tertutup, lalu simpan langkahnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console object provides access to the browser debugging console.",
   "source2": "Chrome Developers — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Keep Preserve Log Across Navigation",
   "desc": "How to enable Preserve log so errors during navigation or reload in Clincoo stay visible long enough to copy.",
   "content": "<p class=\"mb-4\">An error that fires just before navigation often vanishes because the console is cleared with the page. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open the console and enable Preserve log before repeating the failing action.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Enable it before you retry</h2><p class=\"mb-4\">Check Preserve log, clear the console once, then retrigger the flow that navigates. Older entries stay, so the first error is still visible.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Separate old and new loads</h2><p class=\"mb-4\">After navigation, notes from the previous document remain mixed in. Record the URL and time, then compare with the preview on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> after one change only.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Turn it off when you are done</h2><p class=\"mb-4\">Leaving Preserve log on lets old session noise clutter the next debug. Turn it off after the case is closed, and keep the steps on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console object provides access to the browser debugging console.",
   "source2": "Chrome Developers — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "console-tampilkan-timestamp-log",
 "langs": {
  "id": {
   "title": "Cara Nyalakan Timestamp di Setiap Baris Konsol",
   "desc": "Tata cara menampilkan jam di tiap log konsol supaya urutan kejadian di halaman Clincoo bisa dicocokkan dengan klik dan respons jaringan.",
   "content": "<p class=\"mb-4\">Tanpa jam, dua log yang berdekatan terlihat seperti terjadi bersamaan. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka setelan konsol dan nyalakan Show timestamps sebelum mengulang skenario.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cocokkan dengan klik</h2><p class=\"mb-4\">Ulangi satu aksi saja, lalu baca selisih detik antara log klik dan log gagal. Selisih besar berarti proses lain menyela, bukan baris yang sedang kamu curigai.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan andalkan urutan visual saja</h2><p class=\"mb-4\">Log async bisa tercetak setelah await selesai. Timestamp membantu memisahkan janji yang lambat dari error parse. Cek hasil di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Salin jam bersama pesan</h2><p class=\"mb-4\">Saat minta bantuan, sertakan jam dan pesan, bukan tangkapan layar terpotong. Pola ini dicatat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console object provides access to the browser debugging console.",
   "source2": "Chrome Developers — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Show a Timestamp on Every Console Line",
   "desc": "How to show a time on each console line so events on a Clincoo page can be matched to clicks and network responses.",
   "content": "<p class=\"mb-4\">Without a clock, two nearby logs look simultaneous. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open console settings and enable Show timestamps before you replay the scenario.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match them to the click</h2><p class=\"mb-4\">Repeat one action, then read the seconds between the click log and the failure log. A large gap means another process intervened, not the line you suspect.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not trust visual order alone</h2><p class=\"mb-4\">Async logs can print after an await finishes. Timestamps separate a slow promise from a parse error. Check the result on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Copy the time with the message</h2><p class=\"mb-4\">When you ask for help, include the time and the message, not a cropped screenshot. Keep this pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console object provides access to the browser debugging console.",
   "source2": "Chrome Developers — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "console-salin-objek-dengan-copy",
 "langs": {
  "id": {
   "title": "Cara Salin Objek dari Konsol dengan copy()",
   "desc": "Tata cara menyalin objek atau array dari konsol ke papan klip tanpa tangkapan layar, supaya data debug Clincoo utuh saat dibagikan.",
   "content": "<p class=\"mb-4\">Tangkapan layar memotong objek bersarang dan tidak bisa ditempel sebagai data. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> log objeknya, lalu jalankan copy() pada referensi yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan referensi dulu</h2><p class=\"mb-4\">Tulis const dump = objek di konsol, lalu copy(dump). Fungsi copy menulis JSON atau string ke papan klip. Jangan salin [object Object] dari templat string.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Potong data rahasia</h2><p class=\"mb-4\">Hapus token, surel, dan id pengguna sebelum menempel. Preview di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> cukup untuk memastikan bentuk data, bukan isi produksi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tempel sebagai teks</h2><p class=\"mb-4\">Tempel hasil copy ke catatan, bukan gambar. Langkah ini dirangkum di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console object provides access to the browser debugging console.",
   "source2": "Chrome Developers — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Copy a Console Object with copy()",
   "desc": "How to copy an object or array from the console to the clipboard without a screenshot so Clincoo debug data stays intact.",
   "content": "<p class=\"mb-4\">A screenshot crops nested objects and cannot be pasted as data. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> log the object, then run copy() on the same reference.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep a reference first</h2><p class=\"mb-4\">Type const dump = the object in the console, then copy(dump). copy writes JSON or a string to the clipboard. Do not copy [object Object] from a template string.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Strip secrets</h2><p class=\"mb-4\">Remove tokens, emails, and user ids before pasting. The preview on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> is enough to check the shape, not production contents.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Paste as text</h2><p class=\"mb-4\">Paste the copy result into notes, not an image. This step is summarized on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console object provides access to the browser debugging console.",
   "source2": "Chrome Developers — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "console-groupcollapsed-detail-opsional",
 "langs": {
  "id": {
   "title": "Cara Pakai groupCollapsed untuk Detail Opsional",
   "desc": "Tata cara mengelompokkan log panjang dengan console.groupCollapsed supaya konsol Clincoo tetap ringkas dan detail hanya dibuka saat dibutuhkan.",
   "content": "<p class=\"mb-4\">Sepuluh baris log untuk satu aksi membuat error lain tenggelam. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bungkus detail dengan console.groupCollapsed dan tutup dengan console.groupEnd.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Judul yang bisa difilter</h2><p class=\"mb-4\">Beri judul stabil, misalnya checkout:payload. Filter konsol memakai judul itu. Isi grup hanya state yang relevan, bukan seluruh window.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan lupa groupEnd</h2><p class=\"mb-4\">Tanpa groupEnd, log berikutnya masuk grup yang sama. Tutup grup di jalur sukses dan gagal. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lepas sebelum rilis</h2><p class=\"mb-4\">Grup debug bukan pesan pengguna. Hapus atau pagar saat build produksi. Catatan pola ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console object provides access to the browser debugging console.",
   "source2": "Chrome Developers — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use groupCollapsed for Optional Detail",
   "desc": "How to group long logs with console.groupCollapsed so the Clincoo console stays short and detail opens only when needed.",
   "content": "<p class=\"mb-4\">Ten log lines for one action hide the next error. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> wrap detail with console.groupCollapsed and close it with console.groupEnd.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">A title you can filter</h2><p class=\"mb-4\">Use a stable title, such as checkout:payload. The console filter matches that title. Put only relevant state in the group, not the whole window.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not forget groupEnd</h2><p class=\"mb-4\">Without groupEnd, later logs fall into the same group. Close the group on both success and failure paths. Test on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Remove it before release</h2><p class=\"mb-4\">Debug groups are not user messages. Delete or gate them in the production build. The pattern is noted on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console object provides access to the browser debugging console.",
   "source2": "Chrome Developers — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "console-kirim-objek-error-utuh",
 "langs": {
  "id": {
   "title": "Cara Kirim Objek Error Utuh, Bukan String Saja",
   "desc": "Tata cara mencatat objek Error di konsol Clincoo supaya stack dan nama error ikut terbawa, bukan hanya kalimat yang kamu tulis sendiri.",
   "content": "<p class=\"mb-4\">console.error('gagal') menyembunyikan stack asli. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> teruskan objek error sebagai argumen terpisah: console.error('gagal simpan', err).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan gabung jadi string</h2><p class=\"mb-4\">err + '' atau template string hanya menyisakan pesan. Argumen kedua membuat konsol menampilkan nama, pesan, dan stack yang bisa dilacak.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tangkap lalu lempar ulang bila perlu</h2><p class=\"mb-4\">Di catch, catat err dulu, perbaiki state UI, lalu lempar ulang jika pemanggil harus tahu. Cek preview di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> setelah satu jalur saja.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu error, satu konteks</h2><p class=\"mb-4\">Sertakan aksi pengguna, bukan seluruh state. Ringkas pola ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console object provides access to the browser debugging console.",
   "source2": "Chrome Developers — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Log the Full Error Object, Not Only a String",
   "desc": "How to log the Error object in the Clincoo console so the stack and error name travel with it, not only the sentence you wrote.",
   "content": "<p class=\"mb-4\">console.error('failed') hides the original stack. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pass the error object as its own argument: console.error('save failed', err).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not concatenate it into a string</h2><p class=\"mb-4\">err + '' or a template string keeps only the message. A second argument lets the console show the name, message, and a stack you can trace.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Log, then rethrow if needed</h2><p class=\"mb-4\">In catch, log err first, fix UI state, then rethrow if the caller must know. Check the preview on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> after one path only.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One error, one context</h2><p class=\"mb-4\">Include the user action, not the entire state. Keep this pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console object provides access to the browser debugging console.",
   "source2": "Chrome Developers — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
