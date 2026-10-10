// Clincoo Docs — tambah 2 artikel Vitals (11 Oktober 2026, 06:00 WIB)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["vitals"]) {
    window.countryDataFiles["vitals"] = { "names": { "id": "Vitals", "en": "Vitals" }, "articles": [] };
  }
  var list = window.countryDataFiles["vitals"].articles;
  var extra = [
{
 "id": "vitals-ukur-cls-dengan-layout-shift",
 "langs": {
  "id": {
   "title": "Cara Ukur CLS dengan Layout Shift di DevTools",
   "desc": "Tata cara melihat Layout Shift di panel Performance untuk menemukan penyebab CLS tinggi di Clincoo.",
   "content": "<p class=\"mb-4\">CLS tinggi membuat konten Clincoo bergeser saat dimuat, mengganggu pengguna.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Rekam Performance</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka Performance, rekam muat ulang, lalu cari bar Layout Shift. Klik untuk melihat elemen yang bergeser.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Perbaiki sumber</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tambahkan dimensi pada gambar atau font. Target CLS di bawah 0.1. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Performance",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/performance",
   "sourceSnippet": "The Performance panel shows layout shifts and their impact on CLS.",
   "source2": "web.dev — CLS",
   "source2Url": "https://web.dev/articles/cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Measure CLS with Layout Shift in DevTools",
   "desc": "How to view Layout Shift in the Performance panel to find causes of high CLS in Clincoo.",
   "content": "<p class=\"mb-4\">High CLS makes Clincoo content jump during load, annoying users.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record Performance</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open Performance, record a reload, then look for Layout Shift bars. Click to see the shifting element.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Fix the source</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> add dimensions to images or fonts. Target CLS under 0.1. Record on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Performance",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/performance",
   "sourceSnippet": "The Performance panel shows layout shifts and their impact on CLS.",
   "source2": "web.dev — CLS",
   "source2Url": "https://web.dev/articles/cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "vitals-optimasi-inp-dengan-debounce",
 "langs": {
  "id": {
   "title": "Cara Optimasi INP dengan Debounce pada Input",
   "desc": "Tata cara menunda handler input di Clincoo agar Interaction to Next Paint tetap rendah.",
   "content": "<p class=\"mb-4\">Handler berat pada setiap ketikan membuat INP tinggi di form Clincoo.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Debounce input event</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bungkus handler pencarian atau validasi dengan debounce 150–200 ms. Hindari pekerjaan berat di dalam event listener langsung.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur ulang INP</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ketik cepat dan cek INP di Lighthouse atau Console. Harus di bawah 200 ms. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — INP",
   "sourceUrl": "https://web.dev/articles/inp",
   "sourceSnippet": "Interaction to Next Paint measures the responsiveness of user interactions.",
   "source2": "MDN — debounce",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Glossary/Debounce",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Optimize INP with Debounce on Input",
   "desc": "How to delay input handlers in Clincoo so Interaction to Next Paint stays low.",
   "content": "<p class=\"mb-4\">Heavy handlers on every keystroke raise INP on Clincoo forms.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Debounce the input event</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> wrap search or validation handlers with a 150–200 ms debounce. Avoid heavy work inside the raw event listener.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Re-measure INP</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> type quickly and check INP in Lighthouse or Console. It should stay under 200 ms. Record on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — INP",
   "sourceUrl": "https://web.dev/articles/inp",
   "sourceSnippet": "Interaction to Next Paint measures the responsiveness of user interactions.",
   "source2": "MDN — debounce",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Glossary/Debounce",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
];
  extra.forEach(function (item) {
    if (!list.some(function (x) { return x.id === item.id; })) list.push(item);
  });
})();
