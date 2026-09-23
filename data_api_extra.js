// Clincoo Blog — artikel api tambahan 2026-09-23 malam
(function(){
  var extra = [
    {
      id: "api-header-content-type-saat-kirim-json",
      langs: {
        "id": {
          title: "Kirim Header Content-Type saat POST JSON di Clincoo",
          desc: "Tanpa header yang tepat server menolak tubuh. Set application/json sebelum fetch.",
          content: "<p class=\"mb-4\">Form di app.clincoo.buzz mengirim objek lewat fetch tapi server menjawab 415 karena tubuh dianggap teks biasa.</p><p class=\"mb-4\">Di editor.clincoo.buzz tambahkan headers Content-Type application/json dan JSON.stringify pada body.</p><p class=\"mb-4\">Jangan campur FormData dengan JSON di satu permintaan. FormData memicu multipart, bukan objek.</p><p class=\"mb-4\">Cek tab Network: Request Headers harus memuat content-type yang kamu set, bukan tebakan browser.</p><p class=\"mb-4\">Clincoo tidak menambahkan header fetch otomatis. Header yang sadar membuat API menerima data form.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Send a Content-Type Header when POSTing JSON in Clincoo",
          desc: "Without the right header the server rejects the body. Set application/json before fetch.",
          content: "<p class=\"mb-4\">A form on app.clincoo.buzz sends an object through fetch but the server answers 415 because the body looks like plain text.</p><p class=\"mb-4\">In editor.clincoo.buzz add a Content-Type application/json header and JSON.stringify the body.</p><p class=\"mb-4\">Do not mix FormData with JSON in one request. FormData triggers multipart, not an object.</p><p class=\"mb-4\">Check the Network tab: Request Headers must include the content-type you set, not a browser guess.</p><p class=\"mb-4\">Clincoo does not add fetch headers for you. A deliberate header lets the API accept form data.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "api-cors-bukan-bug-css",
      langs: {
        "id": {
          title: "Baca Pesan CORS sebelum Mengubah CSS di Clincoo",
          desc: "Gagal fetch lintas origin sering salah dikira layout. Baca konsol, bukan stylesheet.",
          content: "<p class=\"mb-4\">Daftar di app.clincoo.buzz kosong padahal CSS sudah benar. Konsol menulis blocked by CORS policy.</p><p class=\"mb-4\">CORS diatur di server API, bukan di editor.clincoo.buzz. Ubah Access-Control-Allow-Origin di backend.</p><p class=\"mb-4\">Jangan matikan keamanan browser hanya untuk uji. Gunakan origin yang sama atau proxy pengembangan.</p><p class=\"mb-4\">Preflight OPTIONS harus diizinkan jika kamu memakai header kustom atau metode PUT/DELETE.</p><p class=\"mb-4\">Clincoo tidak menonaktifkan CORS. Memahami pesan konsol menghemat waktu yang terbuang pada CSS.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Read the CORS Message before Changing CSS in Clincoo",
          desc: "A cross-origin fetch failure is often mistaken for layout. Read the console, not the stylesheet.",
          content: "<p class=\"mb-4\">A list on app.clincoo.buzz is empty even though CSS is fine. The console says blocked by CORS policy.</p><p class=\"mb-4\">CORS is set on the API server, not in editor.clincoo.buzz. Change Access-Control-Allow-Origin on the backend.</p><p class=\"mb-4\">Do not turn off browser security just to test. Use the same origin or a development proxy.</p><p class=\"mb-4\">Preflight OPTIONS must be allowed if you send custom headers or PUT/DELETE.</p><p class=\"mb-4\">Clincoo does not disable CORS. Reading the console saves time wasted on CSS.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "api-retry-hanya-5xx-bukan-4xx",
      langs: {
        "id": {
          title: "Ulangi Fetch hanya pada 5xx di Situs Clincoo",
          desc: "Mengulang 400 atau 401 tidak memperbaiki input. Retry hanya untuk kesalahan sementara.",
          content: "<p class=\"mb-4\">Tombol kirim di app.clincoo.buzz menekan API tiga kali saat 422 validasi. Server tetap menolak.</p><p class=\"mb-4\">Di editor.clincoo.buzz batasi retry ke 429, 502, 503, atau jaringan putus. Jangan ulang 4xx selain 429.</p><p class=\"mb-4\">Pakai jeda bertambah (backoff) agar tidak membanjiri API saat pemulihan.</p><p class=\"mb-4\">Tampilkan hitungan ulang ke pengguna agar spinner tidak terasa macet.</p><p class=\"mb-4\">Clincoo tidak mengulang fetch sendiri. Retry yang selektif menjaga kuota dan kesabaran pengunjung.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Retry Fetch only on 5xx on a Clincoo Site",
          desc: "Repeating 400 or 401 does not fix input. Retry only temporary failures.",
          content: "<p class=\"mb-4\">A submit button on app.clincoo.buzz hits the API three times on a 422 validation. The server still rejects it.</p><p class=\"mb-4\">In editor.clincoo.buzz limit retries to 429, 502, 503, or a dropped network. Do not retry other 4xx.</p><p class=\"mb-4\">Use increasing delay (backoff) so you do not flood the API during recovery.</p><p class=\"mb-4\">Show the retry count to the user so the spinner does not feel stuck.</p><p class=\"mb-4\">Clincoo does not retry fetch for you. Selective retry protects quota and visitor patience.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "api-jangan-simpan-kunci-di-javascript",
      langs: {
        "id": {
          title: "Jangan Simpan Kunci API di Berkas JavaScript Clincoo",
          desc: "Kode di browser bisa dibaca siapa saja. Rahasia harus tinggal di server.",
          content: "<p class=\"mb-4\">Kunci pihak ketiga yang ditempel di editor.clincoo.buzz ikut terbit ke app.clincoo.buzz dan terlihat di Sources.</p><p class=\"mb-4\">Pindahkan panggilan berbayar ke backend. Situs hanya memanggil endpoint milikmu.</p><p class=\"mb-4\">Jika layanan mensyaratkan kunci publik (maps, analitik), batasi domain di dasbor penyedia.</p><p class=\"mb-4\">Cari string sk- atau Bearer di proyek sebelum rilis. Hapus yang tidak sengaja tertinggal.</p><p class=\"mb-4\">Clincoo tidak menyembunyikan teks di berkas statis. Kunci di frontend bukan kunci.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Store API Keys in Clincoo JavaScript Files",
          desc: "Browser code is readable by anyone. Secrets must stay on the server.",
          content: "<p class=\"mb-4\">A third-party key pasted in editor.clincoo.buzz ships to app.clincoo.buzz and shows up in Sources.</p><p class=\"mb-4\">Move paid calls to a backend. The site should only call your own endpoint.</p><p class=\"mb-4\">If a service requires a public key (maps, analytics), restrict the domain in the provider dashboard.</p><p class=\"mb-4\">Search for sk- or Bearer in the project before release. Remove leftovers.</p><p class=\"mb-4\">Clincoo does not hide text in static files. A key in the frontend is not a secret.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "api-indikator-loading-saat-menunggu-respons",
      langs: {
        "id": {
          title: "Tampilkan Status Loading saat Menunggu Respons API Clincoo",
          desc: "Tombol diam terasa rusak. Nonaktifkan kontrol dan beri teks menunggu.",
          content: "<p class=\"mb-4\">Pengunjung menekan kirim dua kali di app.clincoo.buzz karena tidak ada tanda permintaan sedang jalan.</p><p class=\"mb-4\">Di editor.clincoo.buzz set aria-busy dan disabled pada tombol sampai fetch selesai, sukses atau gagal.</p><p class=\"mb-4\">Ganti label jadi Mengirim… lalu kembalikan teks semula. Jangan biarkan spinner tanpa arti.</p><p class=\"mb-4\">Jika daftar panjang, skeleton singkat lebih jelas daripada overlay penuh layar.</p><p class=\"mb-4\">Clincoo tidak menandai fetch otomatis. Status loading yang kamu pasang menjaga kepercayaan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Show a Loading State while Waiting for a Clincoo API Response",
          desc: "A silent button feels broken. Disable controls and give waiting text.",
          content: "<p class=\"mb-4\">Visitors double-tap submit on app.clincoo.buzz because nothing shows that a request is in flight.</p><p class=\"mb-4\">In editor.clincoo.buzz set aria-busy and disabled on the button until fetch finishes, success or failure.</p><p class=\"mb-4\">Change the label to Sending… then restore the original text. Do not leave a spinner without meaning.</p><p class=\"mb-4\">For a long list, a short skeleton is clearer than a full-screen overlay.</p><p class=\"mb-4\">Clincoo does not mark fetch for you. The loading state you add keeps trust.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["api"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["api"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
