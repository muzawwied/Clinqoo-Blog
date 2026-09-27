// Clincoo Blog — artikel async tambahan 2026-09-28
(function(){
  var extra = [
    {
      id: "async-debounce-input-sebelum-fetch",
      langs: {
        "id": {
          title: "Debounce Input Clincoo Sebelum Memicu Fetch",
          desc: "Setiap ketikan yang langsung fetch membanjiri jaringan. Debounce memberi jeda sadar.",
          content: "<p class=\"mb-4\">Kolom cari di situs Clincoo memanggil API tiap keyup. Lima huruf menjadi lima permintaan yang saling balap.</p><p class=\"mb-4\">Simpan timer. Pada input, clearTimeout lalu setTimeout 300–400ms sebelum fetch. Hanya jeda terakhir yang jalan.</p><p class=\"mb-4\">Batalkan fetch lama dengan AbortController jika pengguna mengetik lagi sebelum respons tiba.</p><p class=\"mb-4\">Jangan debounce tombol kirim formulir. Debounce untuk ketikan, bukan untuk aksi eksplisit.</p><p class=\"mb-4\">Clincoo menjalankan skrip di peramban pengunjung. Debounce menjaga kuota dan pratinjau editor.clincoo.buzz tetap tenang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Debounce Clincoo Input Before Triggering Fetch",
          desc: "Every keystroke that fetches immediately floods the network. Debounce adds a conscious pause.",
          content: "<p class=\"mb-4\">A search field on a Clincoo site calls the API on every keyup. Five letters become five racing requests.</p><p class=\"mb-4\">Keep a timer. On input, clearTimeout then setTimeout 300–400ms before fetch. Only the last pause runs.</p><p class=\"mb-4\">Abort the old fetch with AbortController if the user types again before the response arrives.</p><p class=\"mb-4\">Do not debounce a form submit button. Debounce typing, not an explicit action.</p><p class=\"mb-4\">Clincoo runs the script in the visitor browser. Debounce protects quota and keeps the editor.clincoo.buzz preview calm.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "async-antrean-satu-permintaan-berjalan",
      langs: {
        "id": {
          title: "Antrekan Permintaan Clincoo Agar Tidak Tumpang Tindih",
          desc: "Dua fetch ke data yang sama bisa menimpa hasil yang lebih baru dengan yang lebih lama.",
          content: "<p class=\"mb-4\">Pengunjung mengklik Simpan dua kali cepat di app.clincoo.buzz. Respons pertama selesai belakangan dan menimpa data baru.</p><p class=\"mb-4\">Buat antrean sederhana: flag busy dan array tugas. Jika busy, dorong fungsi ke antrean. Setelah selesai, jalankan berikutnya.</p><p class=\"mb-4\">Untuk aksi yang sama, lebih baik abaikan klik kedua daripada menumpuk duplikat simpan.</p><p class=\"mb-4\">Jangan andalkan disable tombol saja. Respons lambat tetap bisa saling silang tanpa antrean atau token urutan.</p><p class=\"mb-4\">Clincoo tidak mengurutkan fetch otomatis. Antrean eksplisit menjaga urutan data di editor.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Queue Clincoo Requests So They Do Not Overlap",
          desc: "Two fetches of the same data can overwrite a newer result with an older one.",
          content: "<p class=\"mb-4\">A visitor double-clicks Save quickly on app.clincoo.buzz. The first response finishes later and overwrites newer data.</p><p class=\"mb-4\">Make a simple queue: a busy flag and an array of tasks. If busy, push the function. When done, run the next.</p><p class=\"mb-4\">For the same action, drop the second click instead of stacking duplicate saves.</p><p class=\"mb-4\">Do not rely on disabling the button alone. A slow response can still cross without a queue or sequence token.</p><p class=\"mb-4\">Clincoo does not order fetch for you. An explicit queue keeps data order in editor.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "async-retry-fetch-gagal-sementara",
      langs: {
        "id": {
          title: "Ulangi Fetch Clincoo yang Gagal Sementara",
          desc: "Jaringan goyah bukan alasan membiarkan spinner mati. Retry terbatas menolong tanpa loop tak terbatas.",
          content: "<p class=\"mb-4\">API pihak ketiga kadang menjawab 429 atau putus. Satu gagal langsung membuat blok Clincoo kosong.</p><p class=\"mb-4\">Tulis ulang fetch maksimal 3 kali dengan jeda 500ms, 1500ms, 3000ms. Hentikan jika status 4xx selain 429.</p><p class=\"mb-4\">Log setiap percobaan di console saat pratinjau. Jangan retry diam-diam tanpa batas.</p><p class=\"mb-4\">Jangan retry POST yang sudah mengubah data. Retry aman untuk GET atau permintaan idempotent.</p><p class=\"mb-4\">Clincoo menampilkan hasil skripmu. Retry sadar menjaga app.clincoo.buzz tetap terisi saat jaringan goyah.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Retry a Temporarily Failed Clincoo Fetch",
          desc: "A shaky network is not a reason to leave the spinner dead. Limited retries help without an infinite loop.",
          content: "<p class=\"mb-4\">A third-party API sometimes returns 429 or drops. One failure leaves a Clincoo block empty.</p><p class=\"mb-4\">Retry fetch at most 3 times with 500ms, 1500ms, 3000ms pauses. Stop on 4xx other than 429.</p><p class=\"mb-4\">Log each attempt in the console during preview. Do not retry silently without a cap.</p><p class=\"mb-4\">Do not retry a POST that already changed data. Retry is safe for GET or idempotent requests.</p><p class=\"mb-4\">Clincoo shows the result of your script. Conscious retries keep app.clincoo.buzz filled when the network wobbles.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "async-flag-loading-cegah-klik-ganda",
      langs: {
        "id": {
          title: "Pasang Flag Loading agar Klik Ganda Tidak Mengirim Dua Kali",
          desc: "Tanpa flag, event handler async menerima klik kedua sebelum await selesai.",
          content: "<p class=\"mb-4\">Tombol Kirim di formulir Clincoo menembak dua POST karena pengguna tidak sabar. Dua baris data muncul.</p><p class=\"mb-4\">Di awal handler: if (loading) return; loading = true. Di finally: loading = false. Nonaktifkan tombol di UI juga.</p><p class=\"mb-4\">Flag harus hidup di luar fungsi jika handler dibuat ulang tiap render.</p><p class=\"mb-4\">Jangan hanya mengandalkan atribut disabled jika skrip lain mengikat event di document.</p><p class=\"mb-4\">Clincoo menjalankan handler yang kamu tulis. Flag loading menjaga editor.clincoo.buzz tidak menduplikasi aksi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set a Loading Flag So Double Clicks Do Not Send Twice",
          desc: "Without a flag, an async event handler accepts a second click before await finishes.",
          content: "<p class=\"mb-4\">A Submit button on a Clincoo form fires two POSTs because the user is impatient. Two data rows appear.</p><p class=\"mb-4\">At the start of the handler: if (loading) return; loading = true. In finally: loading = false. Disable the button in the UI too.</p><p class=\"mb-4\">The flag must live outside the function if the handler is recreated on each render.</p><p class=\"mb-4\">Do not rely only on the disabled attribute if another script binds events on document.</p><p class=\"mb-4\">Clincoo runs the handler you write. A loading flag keeps editor.clincoo.buzz from duplicating the action.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "async-finally-selalu-matikan-spinner",
      langs: {
        "id": {
          title: "Matikan Spinner Clincoo di finally, Bukan Hanya di then",
          desc: "Spinner yang hanya mati di jalur sukses akan menggantung saat reject.",
          content: "<p class=\"mb-4\">Pratinjau Clincoo menampilkan overlay loading. Fetch gagal, overlay tetap ada, halaman terkunci.</p><p class=\"mb-4\">Letakkan hideSpinner() di blok finally setelah try/catch. Jalur sukses dan gagal sama-sama membersihkan UI.</p><p class=\"mb-4\">Jika memakai .then/.catch, tambahkan .finally dengan fungsi yang sama. Jangan duplikasi hide di dua cabang.</p><p class=\"mb-4\">Uji dengan memutus jaringan di DevTools. Spinner harus hilang dan pesan error harus terlihat.</p><p class=\"mb-4\">Clincoo tidak menutup overlay otomatis. finally di skripmu menjaga app.clincoo.buzz bisa diklik lagi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Turn Off the Clincoo Spinner in finally, Not Only in then",
          desc: "A spinner that hides only on the success path will hang when the Promise rejects.",
          content: "<p class=\"mb-4\">A Clincoo preview shows a loading overlay. The fetch fails, the overlay stays, the page is locked.</p><p class=\"mb-4\">Put hideSpinner() in the finally block after try/catch. Success and failure both clear the UI.</p><p class=\"mb-4\">If you use .then/.catch, add .finally with the same function. Do not duplicate hide in two branches.</p><p class=\"mb-4\">Test by going offline in DevTools. The spinner must vanish and the error message must show.</p><p class=\"mb-4\">Clincoo does not close the overlay for you. finally in your script keeps app.clincoo.buzz clickable again.</p>",
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
