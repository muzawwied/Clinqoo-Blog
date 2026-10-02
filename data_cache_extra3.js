// Clincoo Blog — artikel cache tambahan 2026-10-03
(function(){
  var extra = [
  {
    "id": "cache-no-store-json-draf-editor",
    "langs": {
      "id": {
        "title": "Jangan Cache JSON Draf Editor Clincoo",
        "desc": "Respons draf yang ikut cache browser bisa menampilkan proyek orang lain di tab yang sama. no-store memaksa ambil salinan baru.",
        "content": "<p class=\"mb-4\">Di editor.clincoo.buzz, endpoint draf mengembalikan JSON proyek yang sedang disunting. Jika Cache-Control tidak diset, browser boleh menyimpan respons itu.</p><p class=\"mb-4\">Pasang Cache-Control: no-store pada respons JSON draf, status sesi, dan pratinjau yang bergantung login. HTML publik boleh beda, data kerja tidak.</p><p class=\"mb-4\">Jangan andalkan query acak sebagai satu-satunya cache bust. Header no-store tetap berlaku saat pengguna menekan Back.</p><p class=\"mb-4\">Jika AI menyarankan max-age panjang untuk semua fetch, tolak untuk rute draf. Minta contoh header terpisah untuk aset statis dan untuk API.</p><p class=\"mb-4\">Uji di app.clincoo.buzz: buka dua proyek bergantian, lalu pastikan judul draf tidak tertukar. Catat header yang lolos ke blog.clincoo.buzz.</p>",
        "source": "MDN: Cache-Control",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control",
        "sourceSnippet": "developer.mozilla.org",
        "source2": "MDN: HTTP caching",
        "source3": "web.dev: HTTP cache"
      },
      "en": {
        "title": "Do Not Cache Clincoo Editor Draft JSON",
        "desc": "A cached draft response can show another project in the same tab. no-store forces a fresh copy.",
        "content": "<p class=\"mb-4\">On editor.clincoo.buzz, the draft endpoint returns JSON for the project being edited. If Cache-Control is missing, the browser may store that response.</p><p class=\"mb-4\">Set Cache-Control: no-store on draft JSON, session status, and login-bound previews. Public HTML can differ; working data should not.</p><p class=\"mb-4\">Do not rely on a random query as the only cache bust. no-store still applies when the user hits Back.</p><p class=\"mb-4\">If AI suggests a long max-age on every fetch, reject it for draft routes. Ask for separate headers for static assets and for the API.</p><p class=\"mb-4\">Test on app.clincoo.buzz: open two projects in turn and confirm draft titles do not swap. Record the header that you keep on blog.clincoo.buzz.</p>",
        "source": "MDN: Cache-Control",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control",
        "sourceSnippet": "developer.mozilla.org",
        "source2": "MDN: HTTP caching",
        "source3": "web.dev: HTTP cache"
      }
    }
  }
];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["cache"]) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles["cache"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
