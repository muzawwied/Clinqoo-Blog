// Clincoo Docs — kategori Overscroll (10 Oktober 2026, 01:00 WIB) — tambah 5 artikel
// Clincoo Docs — kategori Overscroll (10 Oktober 2026, 00:00 WIB) — 2 artikel baru
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["overscroll"] = {
 "names": { "id": "Overscroll", "en": "Overscroll" },
 "articles": [
{
 "id": "overscroll-behavior-contain-cegah-rantai",
 "langs": {
  "id": {
   "title": "Cara Hentikan Rantai Scroll dengan overscroll-behavior",
   "desc": "Tata cara menahan gulir Clincoo di panel dalam supaya halaman induk tidak ikut bergerak.",
   "content": "<p class=\"mb-4\">Tata cara menahan gulir Clincoo di panel dalam supaya halaman induk tidak ikut bergerak.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Contain pada panel yang overflow</h2><p class=\"mb-4\">Rantai scroll terjadi saat panel dalam sudah di ujung lalu roda tetikus menggulir body. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set overscroll-behavior: contain pada panel obrolan dan daftar, bukan pada html.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji sampai ujung atas dan bawah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir panel sampai mentok, lalu lanjutkan roda. Body tidak boleh bergerak. Jika halaman ikut naik, properti ada di elemen yang salah. Simpan pemilih CSS di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "overscroll-behavior sets what a browser does when the boundary of a scrolling area is reached.",
   "source2": "CSS Overscroll Behavior Module",
   "source2Url": "https://www.w3.org/TR/css-overscroll-1/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Stop Scroll Chaining with overscroll-behavior",
   "desc": "How to keep Clincoo scrolling inside an inner panel so the parent page does not move.",
   "content": "<p class=\"mb-4\">How to keep Clincoo scrolling inside an inner panel so the parent page does not move.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Contain the overflowing panel</h2><p class=\"mb-4\">Scroll chaining happens when an inner panel is at its edge and the wheel still scrolls the body. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set overscroll-behavior: contain on the chat and list panels, not on html.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test both the top and bottom edges</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll a panel until it stops, then keep using the wheel. The body must not move. If the page still shifts, the property is on the wrong element. Save the CSS selector on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "overscroll-behavior sets what a browser does when the boundary of a scrolling area is reached.",
   "source2": "CSS Overscroll Behavior Module",
   "source2Url": "https://www.w3.org/TR/css-overscroll-1/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "overscroll-behavior-none-saat-modal",
 "langs": {
  "id": {
   "title": "Cara Matikan Bounce Latar dengan overscroll-behavior none",
   "desc": "Tata cara memakai overscroll-behavior none di Clincoo saat dialog terbuka supaya latar tidak memantul.",
   "content": "<p class=\"mb-4\">Tata cara memakai overscroll-behavior none di Clincoo saat dialog terbuka supaya latar tidak memantul.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">None hanya selama dialog terbuka</h2><p class=\"mb-4\">overscroll-behavior: none meniadakan bounce dan aksi navigasi gestur di beberapa browser. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pasang none pada body hanya saat dialog aktif, bersama kunci posisi yang sudah dicatat di kategori scrollbar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kembalikan auto saat ditutup</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka dialog di perangkat sentuh, tarik latar. Latar tidak boleh memantul atau pindah halaman. Tutup dialog, bounce halaman normal harus kembali. Jika tetap mati, kelas tidak dilepas. Catat urutan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "The none value prevents scroll chaining and default overscroll actions such as bounce.",
   "source2": "MDN — dialog element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Stop Background Bounce with overscroll-behavior none",
   "desc": "How to use overscroll-behavior none in Clincoo while a dialog is open so the background does not bounce.",
   "content": "<p class=\"mb-4\">How to use overscroll-behavior none in Clincoo while a dialog is open so the background does not bounce.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use none only while the dialog is open</h2><p class=\"mb-4\">overscroll-behavior: none removes bounce and some gesture navigation. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> put none on the body only while a dialog is active, together with the position lock already noted in the scrollbar category.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Restore auto when it closes</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open a dialog on a touch device and pull the background. The background must not bounce or change page. Close the dialog and normal page bounce must return. If it stays off, the class was not removed. Record the order on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "The none value prevents scroll chaining and default overscroll actions such as bounce.",
   "source2": "MDN — dialog element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
,
{
 "id": "overscroll-behavior-y-contain-sidebar",
 "langs": {
  "id": {
   "title": "Cara Kunci Scroll Vertikal Sidebar dengan overscroll-behavior-y",
   "desc": "Tata cara memakai overscroll-behavior-y contain di sidebar Clincoo supaya gulir vertikal tidak menyeret halaman.",
   "content": "<p class=\"mb-4\">Tata cara memakai overscroll-behavior-y contain di sidebar Clincoo supaya gulir vertikal tidak menyeret halaman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hanya sumbu Y yang dikunci</h2><p class=\"mb-4\">Sidebar daftar proyek di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> sering tinggi dan bisa di-scroll. Set overscroll-behavior-y: contain pada sidebar, bukan overscroll-behavior pada html. Sumbu X tetap auto supaya gestur horizontal tidak ikut tertahan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di ujung daftar</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir sidebar sampai item terakhir, lalu lanjutkan roda. Body tidak boleh ikut naik. Jika ikut, properti menempel di pembungkus yang salah. Catat pemilihnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior-y",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-y",
   "sourceSnippet": "overscroll-behavior-y sets the overscroll behavior on the vertical axis.",
   "source2": "CSS Overscroll Behavior Module",
   "source2Url": "https://www.w3.org/TR/css-overscroll-1/#overscroll-behavior-properties",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Lock Vertical Sidebar Scroll with overscroll-behavior-y",
   "desc": "How to use overscroll-behavior-y contain on a Clincoo sidebar so vertical scrolling does not drag the page.",
   "content": "<p class=\"mb-4\">How to use overscroll-behavior-y contain on a Clincoo sidebar so vertical scrolling does not drag the page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lock only the Y axis</h2><p class=\"mb-4\">The project list sidebar on <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> is often tall enough to scroll. Set overscroll-behavior-y: contain on the sidebar, not overscroll-behavior on html. Leave the X axis at auto so horizontal gestures stay free.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test at the end of the list</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll the sidebar to the last item, then keep wheeling. The body must not move. If it does, the property is on the wrong wrapper. Save the selector on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior-y",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-y",
   "sourceSnippet": "overscroll-behavior-y sets the overscroll behavior on the vertical axis.",
   "source2": "CSS Overscroll Behavior Module",
   "source2Url": "https://www.w3.org/TR/css-overscroll-1/#overscroll-behavior-properties",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "overscroll-behavior-x-carousel-tidak-ikut",
 "langs": {
  "id": {
   "title": "Cara Cegah Carousel Menyeret Halaman dengan overscroll-behavior-x",
   "desc": "Tata cara menahan gulir horizontal carousel Clincoo supaya swipe di ujung tidak menggeser halaman.",
   "content": "<p class=\"mb-4\">Tata cara menahan gulir horizontal carousel Clincoo supaya swipe di ujung tidak menggeser halaman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Contain hanya sumbu X</h2><p class=\"mb-4\">Galeri template di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> memakai overflow-x: auto. Tambahkan overscroll-behavior-x: contain pada track carousel. Jangan set none pada body, karena itu ikut mematikan riwayat geser mundur di beberapa browser.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di slide pertama dan terakhir</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> geser sampai slide ujung, lalu lanjutkan. Halaman induk harus diam. Jika halaman ikut, pastikan overflow ada di elemen yang sama dengan overscroll-behavior-x. Simpan contoh di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior-x",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-x",
   "sourceSnippet": "overscroll-behavior-x sets the overscroll behavior on the horizontal axis.",
   "source2": "CSS Overscroll Behavior Module",
   "source2Url": "https://www.w3.org/TR/css-overscroll-1/",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Stop a Carousel from Dragging the Page with overscroll-behavior-x",
   "desc": "How to contain horizontal carousel scrolling in Clincoo so an edge swipe does not move the page.",
   "content": "<p class=\"mb-4\">How to contain horizontal carousel scrolling in Clincoo so an edge swipe does not move the page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Contain only the X axis</h2><p class=\"mb-4\">The template gallery on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> uses overflow-x: auto. Add overscroll-behavior-x: contain on the carousel track. Do not set none on the body, because that can also disable swipe-back history in some browsers.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the first and last slide</h2><p class=\"mb-4\">On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> swipe to an edge slide, then keep going. The parent page should stay still. If it moves, overflow and overscroll-behavior-x must be on the same element. Save the example on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior-x",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-x",
   "sourceSnippet": "overscroll-behavior-x sets the overscroll behavior on the horizontal axis.",
   "source2": "CSS Overscroll Behavior Module",
   "source2Url": "https://www.w3.org/TR/css-overscroll-1/",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "overscroll-matikan-pull-to-refresh-mobile",
 "langs": {
  "id": {
   "title": "Cara Matikan Pull-to-Refresh di Halaman Clincoo",
   "desc": "Tata cara menahan tarikan refresh browser saat pengguna menarik editor Clincoo di ponsel.",
   "content": "<p class=\"mb-4\">Tata cara menahan tarikan refresh browser saat pengguna menarik editor Clincoo di ponsel.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">None pada area yang dipegang</h2><p class=\"mb-4\">Di Chrome Android, tarikan dari atas halaman memuat ulang. Pada kanvas <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set overscroll-behavior-y: none di elemen yang menjadi scrollport, biasanya html atau pembungkus app. Jangan pasang di setiap kartu, karena none tidak diwariskan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan matikan di halaman baca</h2><p class=\"mb-4\">Di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> biarkan auto. Pull-to-refresh berguna di halaman artikel. Batasi none ke shell aplikasi di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, lalu uji dengan tarikan lambat dari tepi atas.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "The none value prevents scroll chaining and default overscroll actions such as pull-to-refresh.",
   "source2": "Chrome Developers — overscroll-behavior",
   "source2Url": "https://developer.chrome.com/blog/overscroll-behavior",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Disable Pull-to-Refresh on a Clincoo Page",
   "desc": "How to stop the browser pull-to-refresh gesture when someone drags the Clincoo editor on a phone.",
   "content": "<p class=\"mb-4\">How to stop the browser pull-to-refresh gesture when someone drags the Clincoo editor on a phone.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">None on the element being dragged</h2><p class=\"mb-4\">On Chrome for Android, a pull from the top reloads the page. On the <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> canvas set overscroll-behavior-y: none on the scrollport, usually html or the app shell. Do not put it on every card, because none is not inherited.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Leave reading pages alone</h2><p class=\"mb-4\">On <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> keep auto. Pull-to-refresh is useful on article pages. Limit none to the app shell on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, then test with a slow pull from the top edge.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "The none value prevents scroll chaining and default overscroll actions such as pull-to-refresh.",
   "source2": "Chrome Developers — overscroll-behavior",
   "source2Url": "https://developer.chrome.com/blog/overscroll-behavior",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "overscroll-behavior-auto-kembalikan-default",
 "langs": {
  "id": {
   "title": "Cara Kembalikan overscroll-behavior ke auto",
   "desc": "Tata cara mengembalikan overscroll-behavior Clincoo ke auto setelah panel atau dialog ditutup.",
   "content": "<p class=\"mb-4\">Tata cara mengembalikan overscroll-behavior Clincoo ke auto setelah panel atau dialog ditutup.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan biarkan none menempel</h2><p class=\"mb-4\">Saat dialog pratinjau di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ditutup, kelas yang memasang overscroll-behavior: none pada body harus dilepas. Jika tertinggal, pengguna tidak bisa bounce atau pull-to-refresh di halaman berikutnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasangkan dengan penutup dialog</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengarkan close pada dialog, lalu hapus kelas kunci. Nilai auto mengembalikan perilaku bawaan browser. Cek di DevTools bahwa computed style kembali auto, dan catat langkahnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "auto is the initial value and allows the default overscroll behavior of the browser.",
   "source2": "MDN — dialog element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Restore overscroll-behavior to auto",
   "desc": "How to restore Clincoo overscroll-behavior to auto after a panel or dialog closes.",
   "content": "<p class=\"mb-4\">How to restore Clincoo overscroll-behavior to auto after a panel or dialog closes.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not leave none stuck on</h2><p class=\"mb-4\">When the preview dialog on <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> closes, the class that set overscroll-behavior: none on the body must be removed. If it stays, the user cannot bounce or pull to refresh on the next page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pair it with the dialog close</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> listen for close on the dialog, then remove the lock class. The auto value restores the browser default. In DevTools confirm the computed style is auto again, and note the step on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "auto is the initial value and allows the default overscroll behavior of the browser.",
   "source2": "MDN — dialog element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "overscroll-nested-scroll-di-dialog",
 "langs": {
  "id": {
   "title": "Cara Atur Scroll Bersarang di Dalam Dialog",
   "desc": "Tata cara memisahkan scroll isi dialog Clincoo dari halaman latar dengan overscroll-behavior contain.",
   "content": "<p class=\"mb-4\">Tata cara memisahkan scroll isi dialog Clincoo dari halaman latar dengan overscroll-behavior contain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu scrollport di dalam dialog</h2><p class=\"mb-4\">Dialog pengaturan di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> sering punya daftar panjang. Beri overflow: auto dan max-height pada isi, lalu overscroll-behavior: contain. Latar halaman kunci dengan none hanya selama dialog terbuka.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hindari dua rantai sekaligus</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> uji roda di tengah daftar dan di ujung. Hanya isi dialog yang bergerak. Jika keduanya bergerak, ada dua elemen overflow tanpa contain. Simpan pola ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "contain stops scroll chaining to the parent while still allowing bounce inside the element.",
   "source2": "CSS Overscroll Behavior Module",
   "source2Url": "https://www.w3.org/TR/css-overscroll-1/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Handle Nested Scroll Inside a Dialog",
   "desc": "How to separate Clincoo dialog content scrolling from the background page with overscroll-behavior contain.",
   "content": "<p class=\"mb-4\">How to separate Clincoo dialog content scrolling from the background page with overscroll-behavior contain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One scrollport inside the dialog</h2><p class=\"mb-4\">The settings dialog on <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> often has a long list. Give the content overflow: auto and a max-height, then overscroll-behavior: contain. Lock the page background with none only while the dialog is open.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Avoid two chains at once</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> test the wheel in the middle of the list and at the edge. Only the dialog content should move. If both move, two overflow elements lack contain. Save this pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "contain stops scroll chaining to the parent while still allowing bounce inside the element.",
   "source2": "CSS Overscroll Behavior Module",
   "source2Url": "https://www.w3.org/TR/css-overscroll-1/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
