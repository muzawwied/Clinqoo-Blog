// Clincoo Blog — artikel cdn tambahan 2026-09-29 WIB
(function(){
  var extra = [
    {
      id: "cdn-vary-header-accept-encoding",
      langs: {
        "id": {
          title: "Setel Header Vary: Accept-Encoding pada Aset Clincoo di CDN",
          desc: "Tanpa Vary, cache bisa memberi gzip ke klien yang minta br. Respons salah merusak CSS.",
          content: "<p class=\"mb-4\">CDN Clincoo menyimpan satu salinan CSS lalu membagikannya ke semua pengunjung. Jika header Vary absen, klien Brotli bisa menerima tubuh Gzip.</p><p class=\"mb-4\">Tambah Vary: Accept-Encoding pada aset teks. Edge memisahkan cache gzip dan br.</p><p class=\"mb-4\">Jangan menumpuk Vary berlebihan (User-Agent). Itu memecah cache dan menaikkan miss.</p><p class=\"mb-4\">Minta AI memeriksa header Network. Tempel respons CSS dari editor.clincoo.buzz.</p><p class=\"mb-4\">Setelah benar, app.clincoo.buzz menayangkan CSS utuh di Chrome dan Firefox tanpa karakter acak.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set a Vary: Accept-Encoding Header on Clincoo CDN Assets",
          desc: "Without Vary, cache may serve gzip to a client that asked for br. The wrong body breaks CSS.",
          content: "<p class=\"mb-4\">The Clincoo CDN stores one CSS copy and shares it with every visitor. If Vary is missing, a Brotli client can receive a Gzip body.</p><p class=\"mb-4\">Add Vary: Accept-Encoding on text assets. The edge splits gzip and br caches.</p><p class=\"mb-4\">Do not pile on Vary values such as User-Agent. That shards the cache and raises misses.</p><p class=\"mb-4\">Ask AI to inspect Network headers. Paste a CSS response from editor.clincoo.buzz.</p><p class=\"mb-4\">Once correct, app.clincoo.buzz serves intact CSS in Chrome and Firefox without garbled characters.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["cdn"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["cdn"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
