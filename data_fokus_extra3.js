// Clincoo Docs — tambah 1 artikel Fokus (10 Oktober 2026, 15:00 WIB)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["fokus"]) {
    window.countryDataFiles["fokus"] = { "names": { "id": "Fokus", "en": "Focus" }, "articles": [] };
  }
  var list = window.countryDataFiles["fokus"].articles;
  var extra = [
{
 "id": "fokus-fokus-awal-input-dialog",
 "langs": {
  "id": {
   "title": "Cara Fokus Awal pada Input di Dialog",
   "desc": "Tata cara memindahkan fokus keyboard ke input pertama saat dialog Clincoo terbuka.",
   "content": "<p class=\"mb-4\">Dialog yang terbuka tanpa fokus membuat pengguna keyboard harus Tab mencari input.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pindahkan fokus saat terbuka</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> setelah showModal, panggil focus() pada input pertama. Gunakan setTimeout 0 jika perlu menunggu render.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan keyboard</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka dialog dengan Enter. Fokus harus langsung di input. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTMLElement.focus",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus",
   "sourceSnippet": "The focus() method sets focus on the specified element, if it can be focused.",
   "source2": "WAI-ARIA APG — Dialog",
   "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set Initial Focus on an Input in a Dialog",
   "desc": "How to move keyboard focus to the first input when a Clincoo dialog opens.",
   "content": "<p class=\"mb-4\">A dialog that opens without focus forces a keyboard user to Tab looking for the input.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Move focus when it opens</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> after showModal, call focus() on the first input. Use setTimeout 0 if you need to wait for render.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test with the keyboard</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the dialog with Enter. Focus should land directly on the input. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTMLElement.focus",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus",
   "sourceSnippet": "The focus() method sets focus on the specified element, if it can be focused.",
   "source2": "WAI-ARIA APG — Dialog",
   "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
];
  extra.forEach(function (item) {
    if (!list.some(function (x) { return x.id === item.id; })) list.push(item);
  });
})();
