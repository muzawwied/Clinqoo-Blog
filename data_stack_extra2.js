// Clincoo Docs — tambah 1 artikel Stack (10 Oktober 2026, 15:00 WIB)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["stack"]) {
    window.countryDataFiles["stack"] = { "names": { "id": "Stack", "en": "Stack" }, "articles": [] };
  }
  var list = window.countryDataFiles["stack"].articles;
  var extra = [
{
 "id": "stack-popover-di-atas-modal",
 "langs": {
  "id": {
   "title": "Cara Pastikan Popover di Atas Modal",
   "desc": "Tata cara menyusun z-index popover Clincoo agar muncul di atas modal tanpa merusak context lain.",
   "content": "<p class=\"mb-4\">Popover yang dibuka dari dalam modal sering tertutup oleh backdrop modal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Naikkan context popover</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pastikan popover tidak terjebak di stacking context modal. Pindahkan ke body atau beri z-index lebih tinggi dalam context yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji buka popover dari modal</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka modal lalu popover. Popover harus terlihat penuh. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Stacking context",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "sourceSnippet": "Elements in different stacking contexts are compared by their parent contexts.",
   "source2": "MDN — z-index",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Keep a Popover Above a Modal",
   "desc": "How to stack a Clincoo popover so it appears above a modal without breaking other contexts.",
   "content": "<p class=\"mb-4\">A popover opened from inside a modal is often covered by the modal backdrop.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Raise the popover context</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> make sure the popover is not trapped in the modal stacking context. Move it to the body or give it a higher z-index in the same context.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test opening the popover from the modal</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the modal then the popover. The popover should be fully visible. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Stacking context",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "sourceSnippet": "Elements in different stacking contexts are compared by their parent contexts.",
   "source2": "MDN — z-index",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
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
