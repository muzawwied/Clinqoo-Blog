// Clincoo Docs — kategori Details (9 Oktober 2026, 06:00 WIB) — 3 artikel baru
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["details"] = {
 "names": { "id": "Details", "en": "Details" },
 "articles": [
{
 "id": "details-elemen-details-tanpa-javascript",
 "langs": {
  "id": {
   "title": "Cara Buka Tutup Panel dengan details tanpa JavaScript",
   "desc": "Tata cara memakai elemen details dan summary untuk panel lipat yang tetap berfungsi tanpa skrip.",
   "content": "<p class=\"mb-4\">Panel FAQ atau catatan lanjutan sering dibangun dengan div dan click handler. Jika skrip gagal, panel tidak bisa dibuka.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bungkus isi dengan details</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> letakkan judul yang diklik di dalam summary, lalu isi panel sebagai saudara summary di dalam details. Browser mengurus buka-tutup, fokus, dan status open tanpa kelas CSS tambahan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan sembunyikan summary</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> biarkan summary terlihat dan bisa difokus. Jangan mengganti klik dengan div kosong. Gaya marker boleh diubah, tetapi jangan hapus peran buka-tutup. Contoh markup ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — details element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",
   "sourceSnippet": "The details element creates a disclosure widget where information is visible only when the widget is toggled open.",
   "source2": "MDN — summary element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Toggle a Panel with details without JavaScript",
   "desc": "How to use the details and summary elements for a disclosure panel that still works without script.",
   "content": "<p class=\"mb-4\">FAQ or extra-note panels are often built with a div and a click handler. If the script fails, the panel cannot open.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Wrap the content in details</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> put the clickable heading inside summary, then the panel body as a sibling of summary inside details. The browser handles open, close, focus, and the open state without an extra CSS class.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not hide summary</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> keep summary visible and focusable. Do not replace the click with an empty div. You may restyle the marker, but do not remove the disclosure behavior. Sample markup is on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — details element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",
   "sourceSnippet": "The details element creates a disclosure widget where information is visible only when the widget is toggled open.",
   "source2": "MDN — summary element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
{
 "id": "details-accordion-eksklusif-dengan-name",
 "langs": {
  "id": {
   "title": "Cara Buat Accordion Eksklusif dengan atribut name",
   "desc": "Tata cara membuka satu panel details saja dengan atribut name, tanpa mengunci yang lain lewat skrip.",
   "content": "<p class=\"mb-4\">Accordion yang menutup panel lain lewat JavaScript mudah lupa kasus keyboard dan panel yang ditambah belakangan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri name yang sama</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri atribut name yang sama pada setiap details dalam satu kelompok. Browser menutup panel lain dalam kelompok itu saat satu panel dibuka.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pisahkan kelompok</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jangan pakai name yang sama untuk FAQ dan menu pengaturan. Kelompok berbeda butuh name berbeda. Jika beberapa panel boleh terbuka bersamaan, jangan isi name. Catatan pemakaian ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — details: name",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#name",
   "sourceSnippet": "The name attribute groups details elements so that only one in the group can be open at a time.",
   "source2": "HTML spec — details name",
   "source2Url": "https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Build an Exclusive Accordion with the name Attribute",
   "desc": "How to keep only one details panel open using the name attribute, without closing the others in script.",
   "content": "<p class=\"mb-4\">An accordion that closes other panels in JavaScript often misses keyboard cases and panels added later.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Share one name</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set the same name attribute on each details in a group. The browser closes the other panels in that group when one opens.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep groups separate</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> do not reuse the same name for an FAQ and a settings menu. Different groups need different names. If several panels may stay open, omit name. Usage notes are on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — details: name",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#name",
   "sourceSnippet": "The name attribute groups details elements so that only one in the group can be open at a time.",
   "source2": "HTML spec — details name",
   "source2Url": "https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
}
{
 "id": "details-summary-fokus-keyboard",
 "langs": {
  "id": {
   "title": "Cara Pastikan summary Bisa Difokus dari Keyboard",
   "desc": "Tata cara menjaga summary tetap tombol buka-tutup yang bisa dijangkau Tab dan Enter.",
   "content": "<p class=\"mb-4\">Summary yang dibungkus ulang atau ditimpa gaya pointer-events none tidak lagi bisa dioperasikan dari keyboard.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Biarkan summary sebagai kontrol</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jangan taruh tombol di dalam summary hanya untuk membuka panel. Summary sendiri yang menerima fokus. Uji dengan Tab lalu Enter atau Space.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan hanya andalkan hover</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> panel tidak boleh terbuka hanya saat hover. Pengguna keyboard dan layar sentuh tidak punya hover yang stabil. Tambahkan gaya :focus-visible pada summary dan catat ceknya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — summary element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary",
   "sourceSnippet": "The summary element is the disclosure widget control and is keyboard accessible by default.",
   "source2": "MDN — :focus-visible",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Keep summary Focusable from the Keyboard",
   "desc": "How to keep summary as a disclosure control reachable with Tab and Enter.",
   "content": "<p class=\"mb-4\">A summary that is wrapped again or covered with pointer-events: none can no longer be operated from the keyboard.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Leave summary as the control</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> do not put a button inside summary just to open the panel. Summary itself receives focus. Test with Tab, then Enter or Space.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not rely on hover alone</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> the panel must not open only on hover. Keyboard and touch users do not have a stable hover. Add a :focus-visible style on summary and record the check on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — summary element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary",
   "sourceSnippet": "The summary element is the disclosure widget control and is keyboard accessible by default.",
   "source2": "MDN — :focus-visible",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
