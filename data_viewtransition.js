// Clincoo Docs — kategori View Transition (8 Oktober 2026, 19:00 WIB) — 1 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["viewtransition"] = {
 "names": { "id": "View Transition", "en": "View Transition" },
 "articles": [
{
 "id": "viewtransition-nama-kartu-halaman",
 "langs": {
  "id": {
   "title": "Cara Namai Kartu agar View Transition Tidak Tertukar",
   "desc": "Tata cara memberi view-transition-name unik pada kartu Clincoo supaya animasi ganti halaman tidak menempel ke elemen yang salah.",
   "content": "<p class=\"mb-4\">Nama transisi yang sama pada dua kartu membuat gambar hero terbang ke kartu lain saat navigasi. Animasi terlihat rusak, bukan mulus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri nama unik</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set <code>view-transition-name</code> hanya pada elemen yang benar-benar berpindah, misalnya <code>hero-harga</code>. Jangan pakai nama sama di daftar. Bungkus perubahan dengan <code>document.startViewTransition</code> setelah DOM tujuan siap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hormati reduced motion</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> uji ganti halaman dengan dan tanpa prefers-reduced-motion. Jika reduce, lewati animasi. Catat nama yang dipakai di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — View Transition API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API",
   "sourceSnippet": "The View Transition API provides a mechanism for easily creating animated transitions between different DOM states.",
   "source2": "MDN — view-transition-name",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/view-transition-name",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Name a Card so a View Transition Does Not Cross",
   "desc": "How to give a unique view-transition-name to a Clincoo card so a page change does not stick to the wrong element.",
   "content": "<p class=\"mb-4\">The same transition name on two cards makes the hero image fly to another card during navigation. The animation looks broken, not smooth.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Give a unique name</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set <code>view-transition-name</code> only on the element that really moves, for example <code>hero-harga</code>. Do not reuse the name in a list. Wrap the change with <code>document.startViewTransition</code> after the destination DOM is ready.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Respect reduced motion</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> test the page change with and without prefers-reduced-motion. If reduce, skip the animation. Record the names you used on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — View Transition API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API",
   "sourceSnippet": "The View Transition API provides a mechanism for easily creating animated transitions between different DOM states.",
   "source2": "MDN — view-transition-name",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/view-transition-name",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
