// Clincoo Blog — artikel api tambahan 2026-09-23 malam WIB
(function(){
  var extra = [
    {
      id: "api-cek-tab-network-sebelum-salahkan-js",
      langs: {
        "id": {
          title: "Cek Tab Network sebelum Menyalahkan JavaScript di Clincoo",
          desc: "Error di konsol sering hanya gejala. Status, URL, dan tubuh respons ada di Network.",
          content: "<p class=\"mb-4\">Tombol di app.clincoo.buzz gagal dan konsol hanya menulis TypeError. Penyebabnya sering respons kosong atau 404.</p><p class=\"mb-4\">Buka tab Network di editor.clincoo.buzz, filter Fetch/XHR, lalu baca status, request URL, dan preview tubuh.</p><p class=\"mb-4\">Pastikan metode, query, dan header sesuai yang server harapkan sebelum mengubah logika JS.</p><p class=\"mb-4\">Simpan HAR singkat saat bug sulit diulang agar laporan ke komunitas.clincoo.buzz jelas.</p><p class=\"mb-4\">Clincoo tidak menjelaskan kegagalan fetch. Membaca Network memotong waktu debug.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Check the Network Tab before Blaming JavaScript in Clincoo",
          desc: "A console error is often only a symptom. Status, URL, and response body live in Network.",
          content: "<p class=\"mb-4\">A button on app.clincoo.buzz fails and the console only writes TypeError. The cause is often an empty body or a 404.</p><p class=\"mb-4\">Open the Network tab in editor.clincoo.buzz, filter Fetch/XHR, then read status, request URL, and body preview.</p><p class=\"mb-4\">Confirm method, query, and headers match what the server expects before changing JS logic.</p><p class=\"mb-4\">Save a short HAR when the bug is hard to replay so a report to komunitas.clincoo.buzz is clear.</p><p class=\"mb-4\">Clincoo does not explain a failed fetch. Reading Network cuts debug time.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "api-tangani-json-parse-yang-gagal",
      langs: {
        "id": {
          title: "Tangani JSON.parse yang Gagal pada Respons API Clincoo",
          desc: "HTML error page tidak bisa di-parse sebagai objek. Bungkus parse dan beri cadangan.",
          content: "<p class=\"mb-4\">Proxy atau 502 di app.clincoo.buzz mengembalikan HTML. Kode langsung .json() lalu halaman kosong.</p><p class=\"mb-4\">Di editor.clincoo.buzz pakai try/catch atau cek Content-Type text/html sebelum parse.</p><p class=\"mb-4\">Tampilkan pesan umum ke pengguna, log cuplikan tubuh ke konsol saat pengembangan.</p><p class=\"mb-4\">Jangan anggap setiap 200 berisi JSON. File statis yang salah path juga berstatus 200.</p><p class=\"mb-4\">Clincoo tidak mensterilkan tubuh API. Parse yang aman menjaga daftar dan form tetap hidup.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Handle a Failed JSON.parse on a Clincoo API Response",
          desc: "An HTML error page cannot parse as an object. Wrap parse and provide a fallback.",
          content: "<p class=\"mb-4\">A proxy or 502 on app.clincoo.buzz returns HTML. Code calls .json() immediately and the page goes blank.</p><p class=\"mb-4\">In editor.clincoo.buzz use try/catch or check a text/html Content-Type before parsing.</p><p class=\"mb-4\">Show a generic message to the user; log a body snippet to the console while developing.</p><p class=\"mb-4\">Do not assume every 200 contains JSON. A static file on the wrong path is also 200.</p><p class=\"mb-4\">Clincoo does not sanitize API bodies. Safe parse keeps lists and forms alive.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "api-query-string-untuk-get-bukan-body",
      langs: {
        "id": {
          title: "Pakai Query String pada GET, Bukan Body, di Clincoo",
          desc: "Banyak server mengabaikan tubuh GET. Filter dan pencarian cukup di URL.",
          content: "<p class=\"mb-4\">Form filter di app.clincoo.buzz mengirim GET plus JSON body. Server hanya membaca query dan hasilnya salah.</p><p class=\"mb-4\">Di editor.clincoo.buzz bangun URLSearchParams dari input, tempelkan ke URL fetch.</p><p class=\"mb-4\">Simpan filter di address bar agar bagikan tautan dan tombol kembali tetap masuk akal.</p><p class=\"mb-4\">Body JSON tetap untuk POST/PUT/PATCH. Jangan campur dua gaya dalam satu endpoint.</p><p class=\"mb-4\">Clincoo tidak menambahkan query otomatis. Parameter yang eksplisit membuat API bisa diuji.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use a Query String on GET, Not a Body, in Clincoo",
          desc: "Many servers ignore a GET body. Filters and search belong on the URL.",
          content: "<p class=\"mb-4\">A filter form on app.clincoo.buzz sends GET plus a JSON body. The server only reads the query and the result is wrong.</p><p class=\"mb-4\">In editor.clincoo.buzz build URLSearchParams from inputs and append them to the fetch URL.</p><p class=\"mb-4\">Keep filters in the address bar so share links and the back button still make sense.</p><p class=\"mb-4\">Keep a JSON body for POST/PUT/PATCH. Do not mix two styles on one endpoint.</p><p class=\"mb-4\">Clincoo does not add query params for you. Explicit parameters make the API testable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "api-debounce-fetch-pada-kolom-cari",
      langs: {
        "id": {
          title: "Debounce Fetch pada Kolom Cari di Situs Clincoo",
          desc: "Setiap ketikan memicu request. Tunda sampai pengguna berhenti mengetik.",
          content: "<p class=\"mb-4\">Kolom cari di app.clincoo.buzz menembak API per huruf dan memicu 429 atau urutan respons acak.</p><p class=\"mb-4\">Di editor.clincoo.buzz tunda 250–400 ms, batalkan AbortController request lama sebelum yang baru.</p><p class=\"mb-4\">Abaikan respons usang: bandingkan query saat ini dengan query yang dikirim.</p><p class=\"mb-4\">Tampilkan hint minimum karakter agar request pendek tidak membebani server.</p><p class=\"mb-4\">Clincoo tidak men-debounce input. Jedah yang kamu pasang menjaga kuota API.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Debounce Fetch on a Search Field on a Clincoo Site",
          desc: "Every keystroke fires a request. Wait until the user pauses typing.",
          content: "<p class=\"mb-4\">A search field on app.clincoo.buzz hits the API per letter and triggers 429 or out-of-order responses.</p><p class=\"mb-4\">In editor.clincoo.buzz delay 250–400 ms and abort the previous request with AbortController before the new one.</p><p class=\"mb-4\">Ignore stale responses: compare the current query with the query that was sent.</p><p class=\"mb-4\">Show a minimum-character hint so tiny requests do not load the server.</p><p class=\"mb-4\">Clincoo does not debounce input. The pause you add protects API quota.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "api-satu-basis-url-bukan-hardcode-host",
      langs: {
        "id": {
          title: "Pakai Satu Basis URL, Jangan Hardcode Host API Clincoo",
          desc: "Host produksi di skrip lokal memecah pratinjau. Simpan prefix di satu konstanta.",
          content: "<p class=\"mb-4\">Halaman pratinjau editor.clincoo.buzz memanggil host produksi dan CORS menolak cookie sesi lokal.</p><p class=\"mb-4\">Simpan const API_BASE di satu file, ganti nilai saat domain app.clincoo.buzz versus lokal.</p><p class=\"mb-4\">Hindari mencampur path relatif dan URL absolut di satu modul fetch.</p><p class=\"mb-4\">Uji satu endpoint di Network setelah ganti basis agar tidak ada sisa host lama.</p><p class=\"mb-4\">Clincoo tidak menyuntikkan host API. Basis URL yang tunggal membuat deploy ke blog.clincoo.buzz aman.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use One Base URL; Do Not Hardcode the Clincoo API Host",
          desc: "A production host in local scripts breaks preview. Keep the prefix in one constant.",
          content: "<p class=\"mb-4\">A preview page in editor.clincoo.buzz calls the production host and CORS rejects the local session cookie.</p><p class=\"mb-4\">Store const API_BASE in one file; swap the value for app.clincoo.buzz versus local.</p><p class=\"mb-4\">Do not mix relative paths and absolute URLs in one fetch module.</p><p class=\"mb-4\">Test one endpoint in Network after changing the base so no old host remains.</p><p class=\"mb-4\">Clincoo does not inject an API host. A single base URL keeps deploys to blog.clincoo.buzz safe.</p>",
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
