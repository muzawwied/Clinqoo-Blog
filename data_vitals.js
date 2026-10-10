// Clincoo Docs — kategori Vitals (10 Oktober 2026, 21:00 WIB — 5 artikel)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["vitals"] = {
 "names": { "id": "Vitals", "en": "Vitals" },
 "articles": [
{
 "id": "vitals-ukur-lcp-dengan-devtools",
 "langs": {
  "id": {
   "title": "Cara Ukur LCP dengan DevTools",
   "desc": "Tata cara mengukur Largest Contentful Paint di Clincoo menggunakan panel Performance DevTools.",
   "content": "<p class=\"mb-4\">LCP yang lambat membuat halaman Clincoo terasa belum siap. Ukur dulu sebelum mengubah kode.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Rekam sesi di Performance</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka DevTools, panel Performance, lalu rekam muat ulang. Cari marker LCP. Catat elemen mana yang menjadi LCP dan waktu berapa milidetik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan di jaringan lambat</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> throttle ke Slow 3G lalu rekam lagi. LCP harus tetap di bawah 2,5 detik. Catat hasilnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — LCP",
   "sourceUrl": "https://web.dev/articles/lcp",
   "sourceSnippet": "Largest Contentful Paint measures the time until the largest content element is rendered.",
   "source2": "Chrome DevTools — Performance",
   "source2Url": "https://developer.chrome.com/docs/devtools/performance/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Measure LCP with DevTools",
   "desc": "How to measure Largest Contentful Paint on Clincoo using the Performance panel in DevTools.",
   "content": "<p class=\"mb-4\">A slow LCP makes a Clincoo page feel unfinished. Measure first before changing code.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record a session in Performance</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open DevTools, the Performance panel, then record a reload. Find the LCP marker. Note which element is the LCP and how many milliseconds it took.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare on a slow network</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> throttle to Slow 3G and record again. LCP should stay under 2.5 seconds. Record the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — LCP",
   "sourceUrl": "https://web.dev/articles/lcp",
   "sourceSnippet": "Largest Contentful Paint measures the time until the largest content element is rendered.",
   "source2": "Chrome DevTools — Performance",
   "source2Url": "https://developer.chrome.com/docs/devtools/performance/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "vitals-optimasi-gambar-untuk-lcp",
 "langs": {
  "id": {
   "title": "Cara Optimasi Gambar untuk Mempercepat LCP",
   "desc": "Tata cara menandai gambar LCP di Clincoo dengan fetchpriority dan ukuran yang tepat.",
   "content": "<p class=\"mb-4\">Gambar hero sering menjadi LCP. Tanpa prioritas, browser menundanya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tambah fetchpriority dan width height</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada img LCP set fetchpriority=\"high\" dan loading=\"eager\". Beri width dan height agar tidak ada CLS. Kompres gambar di bawah 100 KB jika memungkinkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji sebelum dan sesudah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ukur LCP sebelum dan sesudah perubahan. Penurunan harus terlihat di panel Performance. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Optimize LCP",
   "sourceUrl": "https://web.dev/articles/optimize-lcp",
   "sourceSnippet": "Set fetchpriority high on the LCP image and provide width and height.",
   "source2": "MDN — fetchpriority",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#fetchpriority",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Optimize Images to Speed Up LCP",
   "desc": "How to mark the LCP image on Clincoo with fetchpriority and the right dimensions.",
   "content": "<p class=\"mb-4\">The hero image is often the LCP. Without priority the browser delays it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add fetchpriority and width height</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> on the LCP img set fetchpriority=\"high\" and loading=\"eager\". Give width and height so there is no CLS. Compress the image under 100 KB when possible.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test before and after</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> measure LCP before and after the change. The drop should show in the Performance panel. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Optimize LCP",
   "sourceUrl": "https://web.dev/articles/optimize-lcp",
   "sourceSnippet": "Set fetchpriority high on the LCP image and provide width and height.",
   "source2": "MDN — fetchpriority",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#fetchpriority",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "vitals-hindari-cls-dari-font",
 "langs": {
  "id": {
   "title": "Cara Hindari CLS dari Font yang Berganti",
   "desc": "Tata cara mengurangi Cumulative Layout Shift di Clincoo saat font utama selesai dimuat.",
   "content": "<p class=\"mb-4\">Font swap menggeser teks dan memicu CLS. Pengguna melihat konten meloncat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai font-display dan metric override</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set font-display: optional atau swap dengan ascent-override pada fallback. Beri size-adjust jika lebar berbeda jauh. Hindari font yang sangat berbeda metriknya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur CLS di Lighthouse</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jalankan Lighthouse. CLS harus di bawah 0,1. Catat skor sebelum dan sesudah di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — CLS",
   "sourceUrl": "https://web.dev/articles/cls",
   "sourceSnippet": "Cumulative Layout Shift measures unexpected layout movement.",
   "source2": "web.dev — font best practices",
   "source2Url": "https://web.dev/articles/font-best-practices",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid CLS from a Font Swap",
   "desc": "How to reduce Cumulative Layout Shift on Clincoo when the primary font finishes loading.",
   "content": "<p class=\"mb-4\">A font swap shifts text and triggers CLS. Users see the content jump.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use font-display and metric override</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set font-display: optional or swap with ascent-override on the fallback. Use size-adjust if the width differs a lot. Avoid fonts whose metrics are very different.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure CLS in Lighthouse</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> run Lighthouse. CLS should stay under 0.1. Record the score before and after on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — CLS",
   "sourceUrl": "https://web.dev/articles/cls",
   "sourceSnippet": "Cumulative Layout Shift measures unexpected layout movement.",
   "source2": "web.dev — font best practices",
   "source2Url": "https://web.dev/articles/font-best-practices",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "vitals-ukur-inp-dengan-console",
 "langs": {
  "id": {
   "title": "Cara Ukur INP dengan Console",
   "desc": "Tata cara mengukur Interaction to Next Paint di Clincoo menggunakan console dan web-vitals library atau observer.",
   "content": "<p class=\"mb-4\">INP yang tinggi membuat klik terasa lambat. Ukur interaksi nyata, bukan hanya TBT.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang observer atau library</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tempel cuplikan web-vitals atau PerformanceObserver untuk event. Log nilai INP ke console. Interaksi klik tombol utama harus di bawah 200 ms.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji beberapa interaksi</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> klik tombol, buka dialog, dan gulir. Catat INP terburuk. Bandingkan dengan catatan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — INP",
   "sourceUrl": "https://web.dev/articles/inp",
   "sourceSnippet": "Interaction to Next Paint measures the latency of user interactions.",
   "source2": "web-vitals library",
   "source2Url": "https://github.com/GoogleChrome/web-vitals",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Measure INP with the Console",
   "desc": "How to measure Interaction to Next Paint on Clincoo using the console and the web-vitals library or an observer.",
   "content": "<p class=\"mb-4\">A high INP makes clicks feel slow. Measure real interactions, not only TBT.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add an observer or the library</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> paste a web-vitals snippet or a PerformanceObserver for events. Log the INP value to the console. Clicks on the main button should stay under 200 ms.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test several interactions</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> click buttons, open a dialog, and scroll. Note the worst INP. Compare it with the note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — INP",
   "sourceUrl": "https://web.dev/articles/inp",
   "sourceSnippet": "Interaction to Next Paint measures the latency of user interactions.",
   "source2": "web-vitals library",
   "source2Url": "https://github.com/GoogleChrome/web-vitals",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "vitals-set-priority-hint-untuk-lcp",
 "langs": {
  "id": {
   "title": "Cara Set Priority Hint untuk Elemen LCP",
   "desc": "Tata cara memberi petunjuk prioritas pada sumber daya LCP di Clincoo agar browser memuatnya lebih dulu.",
   "content": "<p class=\"mb-4\">Sumber daya LCP yang tidak diprioritaskan menunggu di antrean. Priority hint membantu browser.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gunakan fetchpriority pada link dan img</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada link stylesheet kritis atau img LCP set fetchpriority=\"high\". Untuk script non-kritis set low. Jangan set high pada semuanya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek urutan di Network</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka Network, muat ulang, lihat apakah sumber LCP dimulai lebih awal. Catat waterfall di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Priority Hints",
   "sourceUrl": "https://web.dev/articles/priority-hints",
   "sourceSnippet": "fetchpriority lets you hint the relative priority of a resource.",
   "source2": "MDN — fetchpriority",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#fetchpriority",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set a Priority Hint for the LCP Element",
   "desc": "How to give a priority hint to the LCP resource on Clincoo so the browser loads it earlier.",
   "content": "<p class=\"mb-4\">An LCP resource that is not prioritized waits in the queue. A priority hint helps the browser.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use fetchpriority on link and img</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> on a critical stylesheet link or the LCP img set fetchpriority=\"high\". For non-critical scripts set low. Do not set high on everything.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the order in Network</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open Network, reload, and see whether the LCP resource starts earlier. Record the waterfall on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Priority Hints",
   "sourceUrl": "https://web.dev/articles/priority-hints",
   "sourceSnippet": "fetchpriority lets you hint the relative priority of a resource.",
   "source2": "MDN — fetchpriority",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#fetchpriority",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
