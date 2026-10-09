// Clincoo Docs — kategori Overscroll (10 Oktober 2026, 02:00 WIB — 12 artikel)
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
,
{
 "id": "overscroll-pasang-di-html-dan-body",
 "langs": {
  "id": {
   "title": "Cara Pasang overscroll-behavior di html dan body",
   "desc": "Tata cara memilih html atau body saat memasang overscroll-behavior di halaman Clincoo supaya rantai scroll benar-benar berhenti.",
   "content": "<p class=\"mb-4\">Tata cara memilih html atau body saat memasang overscroll-behavior di halaman Clincoo supaya rantai scroll benar-benar berhenti.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang di elemen yang menjadi scrollport</h2><p class=\"mb-4\">Browser sering menggulir dokumen lewat html, bukan body. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka DevTools, pilih html, lalu lihat apakah overflow-nya yang menghasilkan scrollbar. Pasang overscroll-behavior: none di situ jika yang ingin dihentikan adalah bounce halaman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan dobel tanpa alasan</h2><p class=\"mb-4\">Menaruh contain di html dan body sekaligus tidak merusak, tetapi menyulitkan debug. Pilih satu scrollport dokumen. Panel dalam tetap punya aturannya sendiri. Simpan catatan pilihan ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "overscroll-behavior sets what a scroll container does when it reaches its boundary.",
   "source2": "CSS Overscroll Behavior Module",
   "source2Url": "https://www.w3.org/TR/css-overscroll-1/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set overscroll-behavior on html and body",
   "desc": "How to choose html or body when setting overscroll-behavior on a Clincoo page so scroll chaining actually stops.",
   "content": "<p class=\"mb-4\">How to choose html or body when setting overscroll-behavior on a Clincoo page so scroll chaining actually stops.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set it on the element that scrolls</h2><p class=\"mb-4\">Browsers often scroll the document through html, not body. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open DevTools, select html, and check whether its overflow creates the scrollbar. Put overscroll-behavior: none there when you want to stop page bounce.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not double it without a reason</h2><p class=\"mb-4\">Putting contain on both html and body is harmless, but it makes debugging harder. Pick one document scrollport. Inner panels keep their own rules. Keep that choice noted on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "overscroll-behavior sets what a scroll container does when it reaches its boundary.",
   "source2": "CSS Overscroll Behavior Module",
   "source2Url": "https://www.w3.org/TR/css-overscroll-1/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "overscroll-iframe-preview-tidak-menyeret-induk",
 "langs": {
  "id": {
   "title": "Cara Cegah Preview iframe Menyeret Halaman Induk",
   "desc": "Tata cara menahan overscroll di iframe pratinjau Clincoo supaya guliran di dalam preview tidak menggeser editor.",
   "content": "<p class=\"mb-4\">Tata cara menahan overscroll di iframe pratinjau Clincoo supaya guliran di dalam preview tidak menggeser editor.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Contain di dokumen iframe</h2><p class=\"mb-4\">Pratinjau di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> adalah dokumen lain. Pasang overscroll-behavior: contain pada html di dalam iframe, bukan hanya di halaman editor. Saat ujung preview tercapai, roda berhenti di situ.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di batas atas dan bawah</h2><p class=\"mb-4\">Gulir sampai mentok, lalu lanjutkan satu putaran roda. Editor tidak boleh ikut. Jika ikut, scrollbar yang aktif ada di induk iframe. Beri iframe tinggi tetap dan overflow tersembunyi di pembungkus. Catat hasil uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "Scroll chaining can cross into a parent browsing context when the iframe document reaches its scroll boundary.",
   "source2": "CSS Overscroll Behavior Module",
   "source2Url": "https://www.w3.org/TR/css-overscroll-1/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Stop an iframe Preview from Dragging the Parent Page",
   "desc": "How to contain overscroll in a Clincoo preview iframe so scrolling inside the preview does not move the editor.",
   "content": "<p class=\"mb-4\">How to contain overscroll in a Clincoo preview iframe so scrolling inside the preview does not move the editor.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Contain inside the iframe document</h2><p class=\"mb-4\">The preview in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> is another document. Set overscroll-behavior: contain on html inside the iframe, not only on the editor page. When the preview hits an edge, the wheel stops there.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test both edges</h2><p class=\"mb-4\">Scroll until it stops, then give the wheel one more notch. The editor must not move. If it does, the active scrollbar is on the iframe parent. Give the iframe a fixed height and hide overflow on the wrapper. Record the check in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "Scroll chaining can cross into a parent browsing context when the iframe document reaches its scroll boundary.",
   "source2": "CSS Overscroll Behavior Module",
   "source2Url": "https://www.w3.org/TR/css-overscroll-1/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "overscroll-dan-scroll-snap-tidak-bentrok",
 "langs": {
  "id": {
   "title": "Cara Gabungkan overscroll-behavior dengan scroll-snap",
   "desc": "Tata cara memakai overscroll-behavior bersama scroll-snap di carousel Clincoo tanpa menyeret halaman.",
   "content": "<p class=\"mb-4\">Tata cara memakai overscroll-behavior bersama scroll-snap di carousel Clincoo tanpa menyeret halaman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sumbu yang sama, tugas berbeda</h2><p class=\"mb-4\">scroll-snap-type: x mandatory menempelkan slide. overscroll-behavior-x: contain menahan sisa gestur agar tidak pindah ke body. Pasang keduanya pada kontainer yang sama di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan matikan sumbu yang tidak dipakai</h2><p class=\"mb-4\">Jika carousel hanya horizontal, cukup overscroll-behavior-x. Sumbu Y biarkan auto supaya halaman tetap bisa digulir saat jari bergerak vertikal. Cek di ponsel lewat <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "overscroll-behavior-x contain stops horizontal scroll chaining while scroll-snap still aligns items.",
   "source2": "CSS Overscroll Behavior Module",
   "source2Url": "https://www.w3.org/TR/css-overscroll-1/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Combine overscroll-behavior with scroll-snap",
   "desc": "How to use overscroll-behavior with scroll-snap on a Clincoo carousel without dragging the page.",
   "content": "<p class=\"mb-4\">How to use overscroll-behavior with scroll-snap on a Clincoo carousel without dragging the page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Same axis, different jobs</h2><p class=\"mb-4\">scroll-snap-type: x mandatory locks slides. overscroll-behavior-x: contain keeps leftover gesture from moving the body. Set both on the same container in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not block the unused axis</h2><p class=\"mb-4\">If the carousel is horizontal only, overscroll-behavior-x is enough. Leave the Y axis on auto so the page can still scroll when the finger moves vertically. Check on a phone via <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "overscroll-behavior-x contain stops horizontal scroll chaining while scroll-snap still aligns items.",
   "source2": "CSS Overscroll Behavior Module",
   "source2Url": "https://www.w3.org/TR/css-overscroll-1/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "overscroll-panel-log-editor-contain",
 "langs": {
  "id": {
   "title": "Cara Kunci Rantai Scroll di Panel Log Editor",
   "desc": "Tata cara menahan gulir panel log dan konsol Clincoo supaya tidak menarik kanvas atau halaman di belakangnya.",
   "content": "<p class=\"mb-4\">Tata cara menahan gulir panel log dan konsol Clincoo supaya tidak menarik kanvas atau halaman di belakangnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Contain pada daftar log</h2><p class=\"mb-4\">Panel log di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> panjang dan sering di ujung bawah karena entri baru. Beri overflow-y: auto, max-height, dan overscroll-behavior: contain pada daftarnya, bukan pada seluruh layout editor.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Autoscroll tidak boleh merusak contain</h2><p class=\"mb-4\">Jika skrip menggulir ke entri terakhir, biarkan contain tetap ada. Gulir paksa ke dalam panel tidak boleh merambat ke induk. Uji dengan roda saat log sudah mentok. Pola yang lolos dicatat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "contain keeps scroll chaining inside the element even when script scrolls that element to its end.",
   "source2": "CSS Overscroll Behavior Module",
   "source2Url": "https://www.w3.org/TR/css-overscroll-1/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Contain Scroll Chaining in the Editor Log Panel",
   "desc": "How to contain scrolling in the Clincoo log and console panel so it does not pull the canvas or the page behind it.",
   "content": "<p class=\"mb-4\">How to contain scrolling in the Clincoo log and console panel so it does not pull the canvas or the page behind it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Contain on the log list</h2><p class=\"mb-4\">The log panel in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> is long and often sits at the bottom because of new entries. Give the list overflow-y: auto, a max-height, and overscroll-behavior: contain, not the whole editor layout.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Autoscroll must not break contain</h2><p class=\"mb-4\">If a script scrolls to the latest entry, leave contain in place. A forced scroll inside the panel must not chain to the parent. Test with the wheel while the log is already at the edge. Keep the pattern that passes on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "contain keeps scroll chaining inside the element even when script scrolls that element to its end.",
   "source2": "CSS Overscroll Behavior Module",
   "source2Url": "https://www.w3.org/TR/css-overscroll-1/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "overscroll-drawer-dengan-touch-action",
 "langs": {
  "id": {
   "title": "Cara Atur Drawer Mobile dengan overscroll-behavior dan touch-action",
   "desc": "Tata cara menggabungkan overscroll-behavior dan touch-action pada drawer Clincoo supaya gestur tutup tidak menyeret halaman.",
   "content": "<p class=\"mb-4\">Tata cara menggabungkan overscroll-behavior dan touch-action pada drawer Clincoo supaya gestur tutup tidak menyeret halaman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bagi tugas dua properti</h2><p class=\"mb-4\">touch-action: pan-y pada pegangan drawer mengizinkan geser vertikal untuk menutup. overscroll-behavior: contain pada isi drawer menahan sisa gulir. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jangan memakai touch-action: none pada seluruh drawer, karena isi panjang tidak bisa digulir.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kunci latar hanya saat terbuka</h2><p class=\"mb-4\">Selama drawer terbuka, halaman latar boleh overscroll-behavior: none. Saat ditutup, kembalikan auto. Uji tarik di ujung daftar dan di pegangan. Keduanya harus terasa terpisah di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "touch-action limits which gestures the browser handles, while overscroll-behavior controls boundary chaining.",
   "source2": "CSS Overscroll Behavior Module",
   "source2Url": "https://www.w3.org/TR/css-overscroll-1/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set a Mobile Drawer with overscroll-behavior and touch-action",
   "desc": "How to combine overscroll-behavior and touch-action on a Clincoo drawer so the close gesture does not drag the page.",
   "content": "<p class=\"mb-4\">How to combine overscroll-behavior and touch-action on a Clincoo drawer so the close gesture does not drag the page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Split the job across two properties</h2><p class=\"mb-4\">touch-action: pan-y on the drawer handle allows a vertical swipe to close. overscroll-behavior: contain on the drawer content holds leftover scrolling. On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> do not set touch-action: none on the whole drawer, or long content cannot scroll.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lock the backdrop only while open</h2><p class=\"mb-4\">While the drawer is open, the background page may use overscroll-behavior: none. Restore auto when it closes. Test a pull at the end of the list and on the handle. They should feel separate in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p>",
   "source": "MDN — overscroll-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
   "sourceSnippet": "touch-action limits which gestures the browser handles, while overscroll-behavior controls boundary chaining.",
   "source2": "CSS Overscroll Behavior Module",
   "source2Url": "https://www.w3.org/TR/css-overscroll-1/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
