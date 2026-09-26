// Clincoo Blog — artikel monitoring tambahan 2026-09-27
(function(){
  var extra = [
    {
      id: "monitoring-web-vitals-cls-lcp",
      langs: {
        "id": {
          title: "Pantau LCP dan CLS di Halaman Live Clincoo",
          desc: "LCP dan CLS menjelaskan mengapa halaman terasa loncat atau hero terlambat muncul.",
          content: "<p class=\"mb-4\">Skor Lighthouse sekali jalan mudah kedaluwarsa. LCP dan CLS di halaman publik lebih relevan setelah traffic nyata.</p><p class=\"mb-4\">Di DevTools buka Performance insight atau PerformanceObserver untuk largest-contentful-paint dan layout-shift. Catat elemen yang jadi LCP dan sumber shift.</p><p class=\"mb-4\">Tetapkan width height pada gambar hero di editor.clincoo.buzz. Hindari iklan atau font yang mendorong teks setelah paint pertama.</p><p class=\"mb-4\">Minta AI hanya memperbaiki satu elemen LCP atau satu penyebab CLS. Tempel selector, bukan seluruh CSS.</p><p class=\"mb-4\">Clincoo tidak mengirim Web Vitals otomatis. Mengukur LCP dan CLS menjaga blog.clincoo.buzz nyaman dibaca.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Watch LCP and CLS on a Live Clincoo Page",
          desc: "LCP and CLS explain why a page jumps or the hero arrives late.",
          content: "<p class=\"mb-4\">A one-off Lighthouse score goes stale quickly. LCP and CLS on the public page matter more after real traffic.</p><p class=\"mb-4\">In DevTools open Performance insights or a PerformanceObserver for largest-contentful-paint and layout-shift. Note the LCP element and the shift source.</p><p class=\"mb-4\">Set width and height on the hero image in editor.clincoo.buzz. Avoid ads or fonts that push text after first paint.</p><p class=\"mb-4\">Ask AI to fix only one LCP element or one CLS cause. Paste the selector, not the whole stylesheet.</p><p class=\"mb-4\">Clincoo does not ship Web Vitals for you. Measuring LCP and CLS keeps blog.clincoo.buzz comfortable to read.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "monitoring-performance-observer-longtask",
      langs: {
        "id": {
          title: "Pantau Long Task dengan PerformanceObserver di Clincoo",
          desc: "Task JS di atas 50 ms membuat halaman terasa macet saat klik. Observer longtask menunjuk pelakunya.",
          content: "<p class=\"mb-4\">Halaman Clincoo bisa lulus Lighthouse tetapi terasa macet saat tombol diklik. Penyebabnya sering long task di thread utama.</p><p class=\"mb-4\">Di konsol produksi pasang PerformanceObserver dengan type longtask. Catat duration dan attribution.name. Task di atas 50 ms layak dipotong.</p><p class=\"mb-4\">Pecah loop berat, tunda widget pihak ketiga, atau pindahkan kerja ke requestIdleCallback.</p><p class=\"mb-4\">Tempel ke AI satu entri longtask plus fungsi tersangka. Jangan minta rewrite seluruh JavaScript.</p><p class=\"mb-4\">Clincoo menjalankan skrip halaman apa adanya. Memantau long task menjaga app.clincoo.buzz tetap responsif.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Watch Long Tasks with PerformanceObserver in Clincoo",
          desc: "A JS task over 50 ms makes clicks feel stuck. A longtask observer points at the culprit.",
          content: "<p class=\"mb-4\">A Clincoo page can pass Lighthouse and still feel stuck when a button is clicked. The cause is often a long task on the main thread.</p><p class=\"mb-4\">In the production console attach a PerformanceObserver with type longtask. Note duration and attribution.name. Tasks over 50 ms are worth cutting.</p><p class=\"mb-4\">Split heavy loops, defer third-party widgets, or move work to requestIdleCallback.</p><p class=\"mb-4\">Paste into AI one longtask entry plus the suspected function. Do not ask for a full JavaScript rewrite.</p><p class=\"mb-4\">Clincoo runs page scripts as saved. Watching long tasks keeps app.clincoo.buzz responsive.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["monitoring"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["monitoring"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
