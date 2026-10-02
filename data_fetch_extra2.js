// Clincoo Blog — artikel fetch tambahan 2026-10-02 WIB
(function(){
  var extra = [
  {
    "id": "fetch-abortcontroller-saat-ganti-halaman",
    "langs": {
      "id": {
        "title": "Batalkan Fetch dengan AbortController saat Ganti Halaman Clincoo",
        "desc": "Respons lama bisa menimpa UI baru. Batalkan permintaan saat pengguna pindah halaman.",
        "content": "<p class=\"mb-4\">Di app.clincoo.buzz, pindah halaman tidak otomatis menghentikan fetch yang masih jalan. Respons telat bisa mengisi daftar yang salah.</p><p class=\"mb-4\">Buat AbortController per permintaan. Kirim signal ke fetch, lalu panggil abort saat komponen dilepas atau rute berubah.</p><p class=\"mb-4\">Abaikan error AbortError di catch. Jangan tampilkan toast gagal jaringan untuk pembatalan yang disengaja.</p><p class=\"mb-4\">Setelah res.ok, cek lagi apakah permintaan masih aktif sebelum menulis DOM. Itu mencegah balapan dua respons.</p><p class=\"mb-4\">Uji dengan throttling di DevTools pada editor.clincoo.buzz, lalu catat polanya di blog.clincoo.buzz.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/AbortController",
        "sourceSnippet": "Batalkan fetch yang masih berjalan",
        "source2": "MDN: AbortController",
        "source3": "Clincoo App"
      },
      "en": {
        "title": "Cancel Fetch with AbortController when Leaving a Clincoo Page",
        "desc": "A late response can overwrite the new UI. Abort the request when the user leaves the page.",
        "content": "<p class=\"mb-4\">On app.clincoo.buzz, leaving a page does not automatically stop an in-flight fetch. A late response can fill the wrong list.</p><p class=\"mb-4\">Create an AbortController per request. Pass signal to fetch, then call abort when the component unmounts or the route changes.</p><p class=\"mb-4\">Ignore AbortError in catch. Do not show a network-failure toast for an intentional cancel.</p><p class=\"mb-4\">After res.ok, check again that the request is still current before writing the DOM. That prevents two responses from racing.</p><p class=\"mb-4\">Test with DevTools throttling on editor.clincoo.buzz, then record the pattern on blog.clincoo.buzz.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/AbortController",
        "sourceSnippet": "Abort an in-flight fetch",
        "source2": "MDN: AbortController",
        "source3": "Clincoo App"
      }
    }
  }
];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles['fetch']) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles['fetch'].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
