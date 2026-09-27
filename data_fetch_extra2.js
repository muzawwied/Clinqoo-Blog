// Clincoo Blog — artikel fetch tambahan 2026-09-27
(function(){
  var extra = [
    {
      id: "fetch-header-accept-json-eksplisit",
      langs: {
        "id": {
          title: "Set Header Accept: application/json pada Fetch Clincoo",
          desc: "Tanpa Accept, server bisa mengembalikan HTML error page. Parsing JSON lalu gagal diam-diam.",
          content: "<p class=\"mb-4\">Fetch Clincoo ke endpoint API tidak mengirim Accept. Saat 404, body berupa halaman HTML dan res.json() melempar.</p><p class=\"mb-4\">Di editor.clincoo.buzz, tambah headers: { Accept: 'application/json' } bersama Content-Type saat POST.</p><p class=\"mb-4\">Tetap cek res.ok dan Content-Type balasan sebelum parse. Jangan anggap setiap body adalah JSON.</p><p class=\"mb-4\">Tempel pemanggilan fetch ke AI. Minta header Accept plus cabang jika response bukan JSON.</p><p class=\"mb-4\">Clincoo tidak menambah header otomatis. Accept yang jelas menjaga app.clincoo.buzz menampilkan error API, bukan stack parse.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set an Accept: application/json Header on Clincoo Fetch",
          desc: "Without Accept, a server may return an HTML error page. JSON parsing then fails quietly.",
          content: "<p class=\"mb-4\">A Clincoo fetch to an API endpoint sends no Accept. On 404 the body is an HTML page and res.json() throws.</p><p class=\"mb-4\">In editor.clincoo.buzz, add headers: { Accept: 'application/json' } together with Content-Type on POST.</p><p class=\"mb-4\">Still check res.ok and the response Content-Type before parsing. Do not assume every body is JSON.</p><p class=\"mb-4\">Paste the fetch call into the AI. Ask for an Accept header plus a branch when the response is not JSON.</p><p class=\"mb-4\">Clincoo does not add headers for you. A clear Accept keeps app.clincoo.buzz showing the API error, not a parse stack.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["fetch"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["fetch"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
