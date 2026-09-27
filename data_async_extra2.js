// Clincoo Blog — artikel async tambahan 2026-09-28
(function(){
  var extra = [
    {
      id: "async-urutkan-map-await",
      langs: {
        "id": {
          title: "Ganti forEach+await dengan map lalu await Promise.all di Clincoo",
          desc: "forEach tidak menunggu Promise. Daftar item selesai acak dan error tertelan.",
          content: "<p class=\"mb-4\">Skrip Clincoo memanggil items.forEach(async item => await fetch(item)). Loop selesai sebelum fetch pertama kembali.</p><p class=\"mb-4\">Pakai const jobs = items.map(item => fetch(item)); lalu const hasil = await Promise.all(jobs); atau allSettled jika satu gagal boleh dilanjut.</p><p class=\"mb-4\">Jika urutan dan batas rate penting, tetap for...of dengan await di dalam loop, bukan forEach.</p><p class=\"mb-4\">Tempel loop ke AI. Minta ganti forEach menjadi map plus satu await di luar. Jangan rewrite modul.</p><p class=\"mb-4\">Clincoo menjalankan JS di peramban pengunjung. Pola map-then-all menjaga pratinjau editor.clincoo.buzz prediktif.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Replace forEach+await with map then await Promise.all in Clincoo",
          desc: "forEach does not wait for Promises. Items finish in random order and errors get swallowed.",
          content: "<p class=\"mb-4\">A Clincoo script calls items.forEach(async item => await fetch(item)). The loop finishes before the first fetch returns.</p><p class=\"mb-4\">Use const jobs = items.map(item => fetch(item)); then const hasil = await Promise.all(jobs); or allSettled if one failure may continue.</p><p class=\"mb-4\">If order and rate limits matter, keep for...of with await inside the loop, not forEach.</p><p class=\"mb-4\">Paste the loop into the AI. Ask to change forEach into map plus one await outside. Do not rewrite the module.</p><p class=\"mb-4\">Clincoo runs JS in the visitor browser. The map-then-all pattern keeps the editor.clincoo.buzz preview predictable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "async-batch-promise-all-kecil",
      langs: {
        "id": {
          title: "Pecah Promise.all Clincoo menjadi Batch Kecil",
          desc: "all pada 200 URL sekaligus membebani jaringan dan memicu rate limit.",
          content: "<p class=\"mb-4\">Halaman Clincoo memuat galeri 200 gambar lewat Promise.all. Peramban membuka puluhan koneksi, sebagian 429.</p><p class=\"mb-4\">Potong array per 5–8 item. await Promise.all(batch) lalu lanjut batch berikutnya. Tampilkan progres per batch.</p><p class=\"mb-4\">Jangan all satu per satu jika paralel aman. Batch kecil menyeimbangkan kecepatan dan kuota.</p><p class=\"mb-4\">Minta AI menulis fungsi runBatches(urls, size) saja. Tempel daftar URL contoh.</p><p class=\"mb-4\">Clincoo tidak membatasi fetch otomatis. Batch sadar menjaga app.clincoo.buzz tetap responsif.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Split a Clincoo Promise.all into Small Batches",
          desc: "all on 200 URLs at once loads the network and trips rate limits.",
          content: "<p class=\"mb-4\">A Clincoo page loads a 200-image gallery via Promise.all. The browser opens dozens of connections; some return 429.</p><p class=\"mb-4\">Slice the array in groups of 5–8. await Promise.all(batch) then continue the next batch. Show progress per batch.</p><p class=\"mb-4\">Do not go one-by-one if parallelism is safe. Small batches balance speed and quota.</p><p class=\"mb-4\">Ask the AI to write only a runBatches(urls, size) function. Paste a sample URL list.</p><p class=\"mb-4\">Clincoo does not cap fetch for you. Conscious batches keep app.clincoo.buzz responsive.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge() {
    if (typeof window.countryDataFiles === "undefined" || !window.countryDataFiles["async"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["async"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
