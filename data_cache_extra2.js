// Clincoo Blog — artikel cache tambahan 2026-09-26 WIB
(function(){
  var extra = [
    {
      id: "cache-vary-accept-encoding",
      langs: {
        "id": {
          title: "Setel Vary Accept-Encoding pada Aset Clincoo yang Dikompres",
          desc: "Cache tanpa Vary bisa memberi gzip ke klien yang minta brotli atau sebaliknya. Header Vary memisahkan varian.",
          content: "<p class=\"mb-4\">CDN situs Clincoo kadang menyimpan satu salinan terkompresi lalu membaginya ke semua browser. Hasilnya encoding salah atau file rusak.</p><p class=\"mb-4\">Tandai respons CSS dan JS dengan Vary: Accept-Encoding. Pastikan nama file atau etag beda per encoding.</p><p class=\"mb-4\">Jangan menonaktifkan kompresi hanya karena takut cache. Perbaiki kunci cache, bukan membuang gzip.</p><p class=\"mb-4\">Uji dua UA berbeda di Network setelah publish dari app.clincoo.buzz. Minta AI hanya menambah header Vary di konfigurasi yang ada.</p><p class=\"mb-4\">Clincoo tidak menulis header CDN. Vary yang benar menjaga aset terkompresi aman.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set Vary Accept-Encoding on Compressed Clincoo Assets",
          desc: "A cache without Vary can serve gzip to a client that asked for brotli or the reverse. Vary splits the variants.",
          content: "<p class=\"mb-4\">A Clincoo site CDN sometimes stores one compressed copy and shares it with every browser. The result is the wrong encoding or a broken file.</p><p class=\"mb-4\">Mark CSS and JS responses with Vary: Accept-Encoding. Keep a different filename or etag per encoding.</p><p class=\"mb-4\">Do not turn compression off just because cache feels scary. Fix the cache key instead of dropping gzip.</p><p class=\"mb-4\">Test two different UAs in Network after a publish from app.clincoo.buzz. Ask AI only to add the Vary header in the current config.</p><p class=\"mb-4\">Clincoo does not write CDN headers. A correct Vary keeps compressed assets safe.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["cache"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["cache"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
