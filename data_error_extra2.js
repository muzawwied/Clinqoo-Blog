// Clincoo Blog — artikel error tambahan 2026-09-23 sore WIB
(function(){
  var extra = [
    {
      id: "error-quotaexceeded-localstorage",
      langs: {
        "id": {
          title: "Perbaiki QuotaExceededError saat Menyimpan ke localStorage Clincoo",
          desc: "Browser menolak setItem jika kuota penuh. Cek ukuran JSON sebelum menulis.",
          content: "<p class=\"mb-4\">Draft panjang di editor.clincoo.buzz kadang gagal tersimpan lokal dengan QuotaExceededError di konsol.</p><p class=\"mb-4\">Bungkus localStorage.setItem dalam try/catch. Jika gagal, hapus kunci lama atau pangkas cache pratinjau.</p><p class=\"mb-4\">Jangan simpan blob gambar sebagai string base64 di storage. Unggah aset, simpan hanya URL.</p><p class=\"mb-4\">Uji dengan Application > Storage di DevTools setelah publish ke app.clincoo.buzz.</p><p class=\"mb-4\">Clincoo tidak memperbesar kuota browser. Menangani QuotaExceededError menjaga draft tetap aman.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Fix QuotaExceededError When Saving to Clincoo localStorage",
          desc: "The browser rejects setItem when the quota is full. Check JSON size before writing.",
          content: "<p class=\"mb-4\">A long draft in editor.clincoo.buzz sometimes fails to persist locally with QuotaExceededError in the console.</p><p class=\"mb-4\">Wrap localStorage.setItem in try/catch. On failure, drop old keys or trim preview cache.</p><p class=\"mb-4\">Do not store image blobs as base64 strings in storage. Upload the asset and keep only the URL.</p><p class=\"mb-4\">Inspect Application > Storage in DevTools after publishing to app.clincoo.buzz.</p><p class=\"mb-4\">Clincoo does not raise the browser quota. Handling QuotaExceededError keeps drafts safe.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "error-maximum-call-stack",
      langs: {
        "id": {
          title: "Hentikan Maximum Call Stack Size Exceeded di Skrip Clincoo",
          desc: "Rekursi tanpa basis atau event yang memanggil dirinya sendiri mengunci tab.",
          content: "<p class=\"mb-4\">Halaman di app.clincoo.buzz membeku dan konsol menuliskan RangeError: Maximum call stack size exceeded.</p><p class=\"mb-4\">Cari fungsi yang memanggil dirinya tanpa syarat keluar. Listener input yang menulis ke field yang sama juga bisa berputar.</p><p class=\"mb-4\">Tambah guard: flag isUpdating atau bandingkan nilai lama sebelum set ulang.</p><p class=\"mb-4\">Pause di Sources saat error muncul. Call stack yang berulang menunjuk loop, bukan pustaka Clincoo.</p><p class=\"mb-4\">Clincoo mengeksekusi skrip halaman apa adanya. Memutus rekursi mengembalikan tab yang bisa diedit.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Stop Maximum Call Stack Size Exceeded in Clincoo Scripts",
          desc: "Recursion without a base case or an event that retriggers itself freezes the tab.",
          content: "<p class=\"mb-4\">A page on app.clincoo.buzz freezes and the console prints RangeError: Maximum call stack size exceeded.</p><p class=\"mb-4\">Find the function that calls itself with no exit. An input listener that writes back to the same field can also loop.</p><p class=\"mb-4\">Add a guard: an isUpdating flag or a comparison with the previous value before writing again.</p><p class=\"mb-4\">Pause in Sources when the error fires. A repeating call stack points at your loop, not a Clincoo library.</p><p class=\"mb-4\">Clincoo runs page scripts as written. Breaking the recursion returns an editable tab.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "error-json-parse-unexpected",
      langs: {
        "id": {
          title: "Tangani SyntaxError JSON.parse Unexpected Token di Clincoo",
          desc: "Respons HTML atau string kosong bukan JSON. Cek Content-Type sebelum parse.",
          content: "<p class=\"mb-4\">fetch ke endpoint yang 404 sering mengembalikan halaman HTML. JSON.parse lalu melempar Unexpected token &lt;.</p><p class=\"mb-4\">Baca res.headers.get(\"content-type\") dan res.ok di editor.clincoo.buzz sebelum .json().</p><p class=\"mb-4\">Log res.text() saat parse gagal. Potongan awal membedakan HTML, BOM, atau koma ekstra.</p><p class=\"mb-4\">Jangan parse localStorage mentah jika nilainya pernah ditulis manual.</p><p class=\"mb-4\">Clincoo tidak membungkus JSON untukmu. Memvalidasi tubuh respons mencegah halaman putih.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Handle JSON.parse Unexpected Token SyntaxError in Clincoo",
          desc: "An HTML body or empty string is not JSON. Check Content-Type before parsing.",
          content: "<p class=\"mb-4\">A fetch to a 404 endpoint often returns an HTML page. JSON.parse then throws Unexpected token &lt;.</p><p class=\"mb-4\">Read res.headers.get(\"content-type\") and res.ok in editor.clincoo.buzz before calling .json().</p><p class=\"mb-4\">Log res.text() when parse fails. The first bytes tell HTML, a BOM, or a trailing comma apart.</p><p class=\"mb-4\">Do not parse raw localStorage if the value was ever written by hand.</p><p class=\"mb-4\">Clincoo does not wrap JSON for you. Validating the response body prevents a blank page.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["error"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["error"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
