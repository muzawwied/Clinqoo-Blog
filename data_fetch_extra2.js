// Clincoo Blog — artikel fetch tambahan 2026-10-03 WIB
(function(){
  var extra = [
{
  "id": "fetch-bedakan-error-jaringan-dan-404",
  "langs": {
    "id": {
      "title": "Bedakan Error Jaringan dan 404 pada Fetch Clincoo",
      "desc": "Pesan gagal yang sama untuk putus koneksi dan halaman hilang membuat debug berputar. Pisahkan kedua kasus.",
      "content": "<p class=\"mb-4\">fetch di editor.clincoo.buzz melempar TypeError saat jaringan putus, dan mengembalikan response saat server menjawab 404. Keduanya bukan error yang sama.</p><p class=\"mb-4\">Cek navigator.onLine hanya sebagai petunjuk. Yang menentukan adalah apakah promise ditolak, atau response.ok bernilai false.</p><p class=\"mb-4\">Tampilkan kode status bila ada. Untuk penolakan tanpa response, tulis bahwa permintaan tidak sampai ke server.</p><p class=\"mb-4\">Tempel stack pendek ke AI dan sebut apakah ada status code. Tanpa itu, AI sering menyarankan perbaikan endpoint yang sebenarnya hidup.</p><p class=\"mb-4\">Uji di pratinjau app.clincoo.buzz: matikan jaringan, lalu buka path yang memang tidak ada. Dua pesan harus berbeda.</p>",
      "source": "Clincoo",
      "sourceUrl": "https://editor.clincoo.buzz/",
      "sourceSnippet": "Editor resmi Clincoo",
      "source2": "Clincoo App",
      "source3": "Clincoo Blog"
    },
    "en": {
      "title": "Separate Network Errors from 404 on Clincoo Fetch",
      "desc": "One generic failure for a dropped connection and a missing page sends debugging in circles. Split the two cases.",
      "content": "<p class=\"mb-4\">fetch in editor.clincoo.buzz throws a TypeError when the network drops, and returns a response when the server answers 404. Those are not the same error.</p><p class=\"mb-4\">Treat navigator.onLine as a hint only. What matters is whether the promise rejected, or response.ok is false.</p><p class=\"mb-4\">Show the status code when you have one. For a rejection with no response, say the request never reached the server.</p><p class=\"mb-4\">Paste a short stack to AI and say whether a status code exists. Without that, AI often suggests fixing an endpoint that is actually up.</p><p class=\"mb-4\">Test in the app.clincoo.buzz preview: disable the network, then open a path that really does not exist. The two messages must differ.</p>",
      "source": "Clincoo",
      "sourceUrl": "https://editor.clincoo.buzz/",
      "sourceSnippet": "Official Clincoo editor",
      "source2": "Clincoo App",
      "source3": "Clincoo Blog"
    }
  }
},
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
