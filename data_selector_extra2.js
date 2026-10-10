// Clincoo Docs — tambah 1 artikel Selector (10 Oktober 2026, 15:00 WIB)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["selector"]) {
    window.countryDataFiles["selector"] = { "names": { "id": "Selector", "en": "Selectors" }, "articles": [] };
  }
  var list = window.countryDataFiles["selector"].articles;
  var extra = [
{
 "id": "selector-pakai-is-untuk-grup",
 "langs": {
  "id": {
   "title": "Cara Pakai :is() untuk Mengelompokkan Selector",
   "desc": "Tata cara memakai :is() agar selector Clincoo lebih ringkas tanpa menaikkan spesifisitas.",
   "content": "<p class=\"mb-4\">Menulis ulang selector panjang untuk beberapa elemen membuat stylesheet sulit dirawat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kelompokkan dengan :is()</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ganti .nav a, .footer a, .sidebar a menjadi :is(.nav, .footer, .sidebar) a. Spesifisitas tetap sama dengan satu class.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di panel Styles</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan aturan tetap kena. Catat selector baru di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — :is()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/:is",
   "sourceSnippet": ":is() takes a selector list and matches any element that matches any of the selectors in the list.",
   "source2": "MDN — Specificity",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use :is() to Group Selectors",
   "desc": "How to use :is() so Clincoo selectors stay short without raising specificity.",
   "content": "<p class=\"mb-4\">Rewriting long selectors for several elements makes the stylesheet hard to maintain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Group with :is()</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> replace .nav a, .footer a, .sidebar a with :is(.nav, .footer, .sidebar) a. Specificity stays the same as one class.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in the Styles pane</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> confirm the rule still matches. Record the new selector on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — :is()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/:is",
   "sourceSnippet": ":is() takes a selector list and matches any element that matches any of the selectors in the list.",
   "source2": "MDN — Specificity",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",
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
