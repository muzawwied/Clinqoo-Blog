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
]
};
