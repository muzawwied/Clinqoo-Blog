// Clincoo Blog — artikel query tambahan 2026-09-28
(function(){
  var extra = [
    {
      id: "query-batas-panjang-url",
      langs: {
        "id": {
          title: "Batasi Panjang Query String Clincoo agar URL Tidak Dipotong Proxy",
          desc: "URL filter yang terlalu panjang dipotong diam-diam oleh proxy atau bookmark. Rapikan kunci sebelum menulis history.",
          content: "<p class=\"mb-4\">Filter Clincoo menumpuk banyak kunci di location.search. Beberapa proxy dan aplikasi chat memotong URL di sekitar dua ribu karakter.</p><p class=\"mb-4\">Di editor.clincoo.buzz, hitung string hasil URLSearchParams.toString() sebelum replaceState. Jika terlalu panjang, hapus kunci yang nilainya default.</p><p class=\"mb-4\">Jangan kirim seluruh state aplikasi lewat query. Simpan yang wajib dibagikan saja: halaman, urutan, dan filter utama.</p><p class=\"mb-4\">Minta AI hanya menulis fungsi yang menolak URL di atas batas yang kamu tetapkan. Tempel pembaca query, bukan seluruh berkas app.</p><p class=\"mb-4\">Clincoo menayangkan tautan yang pengunjung buka. URL pendek di app.clincoo.buzz lebih mudah disalin dan diuji.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Cap Clincoo Query String Length so Proxies Do Not Truncate the URL",
          desc: "An oversized filter URL is silently cut by proxies or bookmarks. Drop default keys before writing history.",
          content: "<p class=\"mb-4\">Clincoo filters pile many keys into location.search. Some proxies and chat apps cut URLs around two thousand characters.</p><p class=\"mb-4\">In editor.clincoo.buzz, measure URLSearchParams.toString() before replaceState. If it is too long, delete keys whose values are defaults.</p><p class=\"mb-4\">Do not send the whole app state through the query. Keep only what must be shared: page, sort, and the main filter.</p><p class=\"mb-4\">Ask AI only to write a helper that rejects a URL above the limit you set. Paste the query reader, not the whole app file.</p><p class=\"mb-4\">Clincoo serves the link the visitor opened. A short URL on app.clincoo.buzz is easier to copy and test.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "query-normalisasi-boolean",
      langs: {
        "id": {
          title: "Normalkan Nilai Boolean di Query Clincoo ke 1 atau 0",
          desc: "Campuran true, yes, dan 1 membuat filter terlihat acak. Pilih satu bentuk sebelum menulis URL.",
          content: "<p class=\"mb-4\">Kode Clincoo menulis ?draft=true di satu halaman dan ?draft=1 di halaman lain. Perbandingan string gagal meski maksudnya sama.</p><p class=\"mb-4\">Di editor.clincoo.buzz, ubah boolean jadi '1' atau hapus kuncinya jika false. Jangan tulis true, yes, atau on.</p><p class=\"mb-4\">Saat membaca, terima '1' dan 'true' lalu simpan ke state sebagai boolean asli. Jangan biarkan string hidup sampai render.</p><p class=\"mb-4\">Minta AI hanya merapikan helper baca/tulis query. Tolak rewrite seluruh router.</p><p class=\"mb-4\">Clincoo menayangkan URL yang kamu tulis. Nilai yang seragam menjaga tautan bagikan di app.clincoo.buzz tetap bisa dibandingkan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Normalize Clincoo Query Booleans to 1 or 0",
          desc: "Mixing true, yes, and 1 makes filters look random. Pick one shape before writing the URL.",
          content: "<p class=\"mb-4\">Clincoo code writes ?draft=true on one page and ?draft=1 on another. String compare fails even when the intent matches.</p><p class=\"mb-4\">In editor.clincoo.buzz, store a boolean as '1' or delete the key when it is false. Do not write true, yes, or on.</p><p class=\"mb-4\">When reading, accept '1' and 'true' then keep a real boolean in state. Do not let the string live until render.</p><p class=\"mb-4\">Ask AI only to tidy the query read/write helper. Refuse a rewrite of the whole router.</p><p class=\"mb-4\">Clincoo serves the URL you wrote. Uniform values keep share links on app.clincoo.buzz comparable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "query-dari-formdata",
      langs: {
        "id": {
          title: "Bangun Query String Clincoo dari FormData, Bukan Loop Manual yang Lupa Encode",
          desc: "Menggabungkan nama field dengan plus rawan pecah pada spasi dan ampersand. FormData plus URLSearchParams sudah aman.",
          content: "<p class=\"mb-4\">Form filter Clincoo diambil dengan querySelectorAll lalu dirangkai pakai '+'. Nilai yang berisi & memotong parameter berikutnya.</p><p class=\"mb-4\">Di editor.clincoo.buzz, new URLSearchParams(new FormData(form)) menyalin field yang punya name. File diabaikan otomatis.</p><p class=\"mb-4\">Hapus kunci kosong setelah FormData dibaca. Jangan biarkan checkbox yang tidak dicentang muncul sebagai string kosong.</p><p class=\"mb-4\">Minta AI hanya mengganti perakit string manual. Tempel handler submit form filter, bukan seluruh halaman.</p><p class=\"mb-4\">Clincoo menayangkan hasil kirim form yang kamu simpan. Query yang ter-encode menjaga filter di app.clincoo.buzz utuh.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Build a Clincoo Query String from FormData, Not a Manual Loop that Skips Encoding",
          desc: "Joining field names with plus breaks on spaces and ampersands. FormData plus URLSearchParams is already safe.",
          content: "<p class=\"mb-4\">A Clincoo filter form is read with querySelectorAll then joined with '+'. A value that contains & cuts the next param.</p><p class=\"mb-4\">In editor.clincoo.buzz, new URLSearchParams(new FormData(form)) copies fields that have a name. Files are skipped automatically.</p><p class=\"mb-4\">Delete empty keys after FormData is read. Do not let an unchecked checkbox appear as an empty string.</p><p class=\"mb-4\">Ask AI only to replace the manual string builder. Paste the filter form submit handler, not the whole page.</p><p class=\"mb-4\">Clincoo ships the form submit result you saved. An encoded query keeps filters intact on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "query-satu-sumber-state",
      langs: {
        "id": {
          title: "Jadikan Query String Clincoo Satu-Satunya Sumber Filter yang Bisa Dibagikan",
          desc: "State di memori dan URL yang berbeda membuat tombol bagikan menyesatkan. Tulis filter ke search sebelum menyalin tautan.",
          content: "<p class=\"mb-4\">Halaman Clincoo menyimpan filter di variabel, sementara URL masih menampilkan beranda. Pengunjung menyalin tautan dan kehilangan konteks.</p><p class=\"mb-4\">Di editor.clincoo.buzz, setiap perubahan filter wajib menulis URLSearchParams ke history. State yang tidak ada di URL dianggap sementara.</p><p class=\"mb-4\">Tombol bagikan hanya menyalin location.href setelah replaceState selesai. Jangan merangkai URL kedua di memori.</p><p class=\"mb-4\">Minta AI hanya menyatukan penulis URL dengan handler filter. Tolak salinan state tersembunyi di localStorage untuk tautan publik.</p><p class=\"mb-4\">Clincoo menayangkan alamat yang terlihat di bilah URL. Satu sumber di app.clincoo.buzz membuat bagikan bisa diuji.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Make the Clincoo Query String the Only Shareable Filter Source",
          desc: "Memory state that disagrees with the URL makes the share button lie. Write filters to search before copying the link.",
          content: "<p class=\"mb-4\">A Clincoo page keeps filters in a variable while the URL still shows the home view. Visitors copy the link and lose context.</p><p class=\"mb-4\">In editor.clincoo.buzz, every filter change must write URLSearchParams to history. State missing from the URL is treated as temporary.</p><p class=\"mb-4\">The share button copies location.href only after replaceState finishes. Do not build a second URL in memory.</p><p class=\"mb-4\">Ask AI only to unify the URL writer with the filter handler. Refuse a hidden localStorage copy for public links.</p><p class=\"mb-4\">Clincoo serves the address visible in the URL bar. One source on app.clincoo.buzz makes share links testable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["query"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["query"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
