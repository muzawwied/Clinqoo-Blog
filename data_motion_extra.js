// Clincoo Docs — tambah 3 artikel Motion (6 Oktober 2026, 23:00 WIB)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["motion"]) {
    window.countryDataFiles["motion"] = { "names": { "id": "Motion", "en": "Motion" }, "articles": [] };
  }
  var list = window.countryDataFiles["motion"].articles;
  var extra = [
{
 "id": "motion-animasi-hanya-setelah-interaksi",
 "langs": {
  "id": {
   "title": "Cara Mulai Animasi Hanya Setelah Interaksi",
   "desc": "Tata cara menunda animasi Clincoo sampai pengunjung mengklik, mengetuk, atau menggulir.",
   "content": "<p class=\"mb-4\">Animasi yang jalan sendiri saat halaman terbuka sering mengalihkan perhatian dan tetap berjalan meski pengunjung belum siap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ikat animasi ke peristiwa nyata</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jangan pasang kelas animasi pada elemen di HTML awal. Tambahkan kelas saat click, pointerdown, atau setelah scroll melewati ambang pendek.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jatuhkan kelas saat selesai</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengarkan animationend lalu hapus kelas supaya animasi tidak mengulang. Catat peristiwa pemicu di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — animationend",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event",
   "sourceSnippet": "The animationend event fires when a CSS animation completes.",
   "source2": "MDN — pointer events",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Start Animation Only After Interaction",
   "desc": "How to delay Clincoo animation until a visitor clicks, taps, or scrolls.",
   "content": "<p class=\"mb-4\">Auto-playing animation on page load often distracts people and keeps running before they are ready.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bind animation to a real event</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> do not put the animation class on the element in the initial HTML. Add the class on click, pointerdown, or after a short scroll threshold.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Drop the class when it ends</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> listen for animationend and remove the class so it does not loop. Note the trigger event on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — animationend",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event",
   "sourceSnippet": "The animationend event fires when a CSS animation completes.",
   "source2": "MDN — pointer events",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "motion-jangan-animasikan-width-height",
 "langs": {
  "id": {
   "title": "Cara Hindari Animasi width dan height",
   "desc": "Tata cara menggerakkan komponen Clincoo tanpa memaksa browser menghitung ulang tata letak.",
   "content": "<p class=\"mb-4\">Mengubah width atau height di setiap frame membuat browser menghitung ulang layout. Halaman terasa patah, terutama di daftar panjang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti dengan transform</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ganti transisi width menjadi transform: scaleX atau translate. Untuk panel yang membuka, geser dengan translateY dan opacity, bukan menambah tinggi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur sekali, lalu animasikan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ukur tinggi hanya saat dibuka, simpan di variabel CSS, lalu transisikan transform. Catat properti yang masih menggeser layout di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — stick to compositor-friendly properties",
   "sourceUrl": "https://web.dev/articles/animations-guide",
   "sourceSnippet": "Prefer transform and opacity so animation can stay on the compositor.",
   "source2": "MDN — transform",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid Animating width and height",
   "desc": "How to move Clincoo components without forcing the browser to recalculate layout.",
   "content": "<p class=\"mb-4\">Changing width or height every frame forces layout. The page feels janky, especially on long lists.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Switch to transform</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> replace a width transition with transform: scaleX or translate. For an opening panel, slide with translateY and opacity instead of growing height.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure once, then animate</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> measure height only when opened, store it in a CSS variable, then transition transform. Note any property that still shifts layout on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — stick to compositor-friendly properties",
   "sourceUrl": "https://web.dev/articles/animations-guide",
   "sourceSnippet": "Prefer transform and opacity so animation can stay on the compositor.",
   "source2": "MDN — transform",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "motion-stagger-singkat-untuk-daftar",
 "langs": {
  "id": {
   "title": "Cara Buat Stagger Singkat untuk Daftar",
   "desc": "Tata cara memberi jeda kecil antar kartu Clincoo tanpa menahan seluruh daftar.",
   "content": "<p class=\"mb-4\">Stagger yang panjang membuat item terakhir baru muncul setelah pengunjung sudah menggulir. Jeda harus pendek dan berhenti di item yang terlihat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Batasi jeda dan jumlah</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set animation-delay dari indeks, maksimal 40 milidetik kali posisi, dan hentikan setelah delapan item. Item berikutnya tampil langsung.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hormati reduced motion</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jika prefers-reduced-motion reduce, set delay ke nol. Catat batas stagger di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — animation-delay",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay",
   "sourceSnippet": "animation-delay sets when an animation starts after it is applied.",
   "source2": "WCAG — Animation from Interactions",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Make a Short Stagger for a List",
   "desc": "How to add a small delay between Clincoo cards without holding the whole list.",
   "content": "<p class=\"mb-4\">A long stagger shows the last item only after the visitor has scrolled. Delays should be short and stop at visible items.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cap the delay and the count</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set animation-delay from the index, at most 40 milliseconds times the position, and stop after eight items. Later items appear immediately.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Honor reduced motion</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> if prefers-reduced-motion is reduce, set the delay to zero. Note the stagger cap on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — animation-delay",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay",
   "sourceSnippet": "animation-delay sets when an animation starts after it is applied.",
   "source2": "WCAG — Animation from Interactions",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
];
  extra.forEach(function (item) {
    var i = list.findIndex(function (x) { return x.id === item.id; });
    if (i >= 0) list[i] = item; else list.push(item);
  });
})();
