// Clincoo Blog — artikel offline tambahan 2026-09-26 (extra3)
(function(){
  var extra = [
    {
      id: "offline-jangan-cache-respons-post",
      langs: {
        "id": {
          title: "Jangan Cache Respons POST di Service Worker Clincoo",
          desc: "Menyimpan jawaban POST membuat data usang dan ganda. Cache hanya GET aset statis.",
          content: "<p class=\"mb-4\">Service worker Clincoo menyimpan hasil Simpan. Pengguna melihat sukses palsu saat jaringan putus, lalu data dobel saat online.</p><p class=\"mb-4\">Di editor.clincoo.buzz, batasi Cache API pada GET untuk HTML, CSS, dan gambar. Lewatkan POST, PUT, dan DELETE ke jaringan atau antrean.</p><p class=\"mb-4\">Jika harus antre, simpan body permintaan, bukan respons palsu 200.</p><p class=\"mb-4\">Minta AI menandai fetch.method selain GET di listener fetch. Tempel service worker yang ada.</p><p class=\"mb-4\">Clincoo tidak membedakan metode HTTP untukmu. Aturan cache yang ketat menjaga data jujur di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Cache POST Responses in a Clincoo Service Worker",
          desc: "Storing POST replies creates stale and duplicate data. Cache GET static assets only.",
          content: "<p class=\"mb-4\">A Clincoo service worker stores Save results. The user sees a fake success while offline, then duplicate data when back online.</p><p class=\"mb-4\">In editor.clincoo.buzz, limit Cache API to GET for HTML, CSS, and images. Send POST, PUT, and DELETE to the network or a queue.</p><p class=\"mb-4\">If you must queue, store the request body, not a fake 200 response.</p><p class=\"mb-4\">Ask AI to flag fetch.method values other than GET in the fetch listener. Paste the current service worker.</p><p class=\"mb-4\">Clincoo does not split HTTP methods for you. A strict cache rule keeps data honest on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["offline"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["offline"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
