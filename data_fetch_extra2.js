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
    },
    {
      id: "fetch-tangani-status-204-tanpa-body",
      langs: {
        "id": {
          title: "Tangani Status 204 Fetch Clincoo tanpa Memanggil json()",
          desc: "Respons No Content tidak punya body. json() pada 204 melempar atau mengembalikan null yang merusak UI.",
          content: "<p class=\"mb-4\">Endpoint hapus draf Clincoo mengembalikan 204. Skrip tetap memanggil response.json() lalu catch menampilkan error palsu.</p><p class=\"mb-4\">Di editor.clincoo.buzz, cabangkan status 204 dan 205 sebelum parse. Anggap sukses tanpa data, lalu perbarui UI lokal.</p><p class=\"mb-4\">Jangan pakai text() lalu JSON.parse pada body kosong. String kosong bukan objek.</p><p class=\"mb-4\">Tempel fungsi fetch hapus ke AI. Minta cabang khusus 204 plus reset daftar tanpa membaca body.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu simpan. Status tanpa body tetap sukses di app.clincoo.buzz jika UI tidak memaksa parse.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Handle a Clincoo Fetch 204 Status without Calling json()",
          desc: "No Content has no body. json() on 204 throws or returns null that breaks the UI.",
          content: "<p class=\"mb-4\">A Clincoo draft-delete endpoint returns 204. The script still calls response.json() and the catch shows a fake error.</p><p class=\"mb-4\">In editor.clincoo.buzz, branch on status 204 and 205 before parsing. Treat them as success with no data, then update local UI.</p><p class=\"mb-4\">Do not call text() then JSON.parse on an empty body. An empty string is not an object.</p><p class=\"mb-4\">Paste the delete fetch into the AI. Ask for a 204 branch plus a list reset that does not read the body.</p><p class=\"mb-4\">Clincoo runs the script you save. A no-body status stays a success on app.clincoo.buzz if the UI does not force a parse.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
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
