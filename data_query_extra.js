// Clincoo Blog — artikel query tambahan 2026-09-28
(function(){
  var extra = [
    {
      id: "query-hapus-param-kosong",
      langs: {
        "id": {
          title: "Hapus Parameter Kosong dari Query String Clincoo Sebelum Menulis URL",
          desc: "Kunci dengan nilai kosong menyesatkan filter dan membuat tautan bagikan terlihat rusak.",
          content: "<p class=\"mb-4\">Filter Clincoo menulis ?tag=&q= beranda. Pengunjung menyalin URL itu dan membuka halaman tanpa hasil yang jelas.</p><p class=\"mb-4\">Bangun URLSearchParams dari state. Jika nilai kosong atau hanya spasi, panggil delete(kunci) di editor.clincoo.buzz.</p><p class=\"mb-4\">Jangan biarkan = tanpa nilai. Parameter kosong dan parameter yang absen harus dibedakan di kode, lalu hanya yang bermakna yang ditulis ke URL.</p><p class=\"mb-4\">Minta AI hanya merapikan fungsi serialize query. Tempel objek filter, bukan seluruh router.</p><p class=\"mb-4\">Clincoo menayangkan tautan yang pengunjung bagikan. Query bersih di app.clincoo.buzz lebih mudah dibuka ulang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Drop Empty Params from a Clincoo Query String Before Writing the URL",
          desc: "Keys with empty values mislead filters and make share links look broken.",
          content: "<p class=\"mb-4\">A Clincoo filter writes ?tag=&q= home. A visitor copies that URL and opens a page with no clear result.</p><p class=\"mb-4\">Build URLSearchParams from state. If a value is empty or only spaces, call delete(key) in editor.clincoo.buzz.</p><p class=\"mb-4\">Do not leave a bare equals sign. Empty and missing params must differ in code, then only meaningful keys go into the URL.</p><p class=\"mb-4\">Ask AI only to tidy the query serializer. Paste the filter object, not the whole router.</p><p class=\"mb-4\">Clincoo serves the link a visitor shares. A clean query on app.clincoo.buzz is easier to reopen.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "query-encode-nilai-unicode",
      langs: {
        "id": {
          title: "Biarkan URLSearchParams yang Encode Nilai Unicode di Query Clincoo",
          desc: "Menempel teks mentah ke location.search merusak karakter non-ASCII dan memecah parser.",
          content: "<p class=\"mb-4\">Skrip Clincoo menulis '?q=' + kata. Kata berhuruf Indonesia seperti 'pemula' aman, tetapi spasi dan tanda kutip pecah.</p><p class=\"mb-4\">Pakai params.set('q', nilai) lalu params.toString(). Encoding persen dilakukan API, bukan concat string di editor.clincoo.buzz.</p><p class=\"mb-4\">Jangan decode dua kali. get() sudah mengembalikan string asli. decodeURIComponent kedua membuat plus dan persen kacau.</p><p class=\"mb-4\">Minta AI hanya mengganti concat query jadi set + toString. Tempel fungsi tulis URL.</p><p class=\"mb-4\">Clincoo harus membuka filter yang sama di perangkat lain. Encoding resmi menjaga tautan di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Let URLSearchParams Encode Unicode Values in a Clincoo Query",
          desc: "Pasting raw text into location.search breaks non-ASCII characters and the parser.",
          content: "<p class=\"mb-4\">A Clincoo script writes '?q=' + word. A simple word may survive, but spaces and quotes break.</p><p class=\"mb-4\">Use params.set('q', value) then params.toString(). Percent-encoding is the API’s job, not string concat in editor.clincoo.buzz.</p><p class=\"mb-4\">Do not decode twice. get() already returns the original string. A second decodeURIComponent scrambles plus and percent signs.</p><p class=\"mb-4\">Ask AI only to replace query concat with set + toString. Paste the URL writer.</p><p class=\"mb-4\">Clincoo must open the same filter on another device. Official encoding keeps links intact on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "query-satu-kunci-banyak-nilai",
      langs: {
        "id": {
          title: "Tangani Satu Kunci Query Clincoo yang Punya Banyak Nilai",
          desc: "get() hanya mengambil nilai pertama. Filter tag ganda butuh getAll atau append.",
          content: "<p class=\"mb-4\">Halaman Clincoo memakai ?tag=berita&tag=tutorial. params.get('tag') hanya mengembalikan berita. Tag kedua hilang diam-diam.</p><p class=\"mb-4\">Untuk baca, pakai getAll('tag'). Untuk tulis, pakai append per nilai, bukan set yang menimpa di editor.clincoo.buzz.</p><p class=\"mb-4\">Rapikan duplikat sebelum menulis ulang URL. Dua tag sama tidak membantu pengunjung atau analitik.</p><p class=\"mb-4\">Minta AI hanya menukar get jadi getAll pada filter multi-nilai. Tempel daftar tag, bukan seluruh halaman.</p><p class=\"mb-4\">Clincoo menayangkan kombinasi filter. Query yang utuh di app.clincoo.buzz menjaga kartu yang sama saat dibagikan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Handle One Clincoo Query Key That Holds Many Values",
          desc: "get() only returns the first value. Multi-tag filters need getAll or append.",
          content: "<p class=\"mb-4\">A Clincoo page uses ?tag=news&tag=guide. params.get('tag') returns only news. The second tag disappears silently.</p><p class=\"mb-4\">To read, use getAll('tag'). To write, append each value instead of set, which overwrites, in editor.clincoo.buzz.</p><p class=\"mb-4\">Dedupe before rewriting the URL. Two identical tags help neither the visitor nor analytics.</p><p class=\"mb-4\">Ask AI only to swap get for getAll on multi-value filters. Paste the tag list, not the whole page.</p><p class=\"mb-4\">Clincoo serves a filter combination. A complete query on app.clincoo.buzz keeps the same cards when shared.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "query-hash-bukan-search",
      langs: {
        "id": {
          title: "Jangan Campur location.hash dengan Query String Clincoo",
          desc: "Hash tidak dikirim ke server dan tidak terbaca URLSearchParams. Anchor bukan filter.",
          content: "<p class=\"mb-4\">Skrip Clincoo menulis #q=hero lalu mencari di location.search. Nilai tidak pernah muncul. Filter seolah kosong.</p><p class=\"mb-4\">Simpan filter di search (?q=). Pakai hash hanya untuk loncat ke id di halaman, misalnya #kontak, di editor.clincoo.buzz.</p><p class=\"mb-4\">Saat mengganti query dengan replaceState, pertahankan hash yang sudah ada agar scroll ke bagian tidak hilang.</p><p class=\"mb-4\">Minta AI memisahkan parser search dan hash. Tempel dua fungsi pendek, bukan seluruh listener popstate.</p><p class=\"mb-4\">Clincoo adalah situs statis. Search menjaga filter; hash menjaga posisi. Campur keduanya membingungkan app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Mix location.hash with a Clincoo Query String",
          desc: "A hash is not sent to the server and URLSearchParams will not read it. An anchor is not a filter.",
          content: "<p class=\"mb-4\">A Clincoo script writes #q=hero then reads location.search. The value never appears. The filter looks empty.</p><p class=\"mb-4\">Store filters in search (?q=). Use a hash only to jump to a page id, such as #contact, in editor.clincoo.buzz.</p><p class=\"mb-4\">When you replace the query with replaceState, keep the existing hash so the section scroll is not lost.</p><p class=\"mb-4\">Ask AI to split the search parser from the hash parser. Paste two short functions, not the whole popstate listener.</p><p class=\"mb-4\">Clincoo is a static site. Search keeps the filter; hash keeps position. Mixing them confuses app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "query-default-saat-param-hilang",
      langs: {
        "id": {
          title: "Tetapkan Default Filter Clincoo Saat Parameter Query Hilang",
          desc: "Pengunjung membuka path tanpa search. Jangan biarkan UI filter menunjuk nilai yang tidak ada di URL.",
          content: "<p class=\"mb-4\">Beranda Clincoo tanpa ?sort= menampilkan urutan acak di kode, tetapi dropdown menulis Terbaru. Tampilan dan URL tidak cocok.</p><p class=\"mb-4\">Jika get('sort') null, pakai default di memori. Tulis ke URL hanya setelah pengunjung mengubah filter di editor.clincoo.buzz.</p><p class=\"mb-4\">Jangan memaksa replaceState ke default saat halaman pertama kali dibuka. Itu menimpa tautan bersih kategori.</p><p class=\"mb-4\">Minta AI memisahkan 'nilai tampilan' dan 'nilai URL'. Tempel objek default, bukan seluruh daftar artikel.</p><p class=\"mb-4\">Clincoo menayangkan path yang pengunjung ketik. Default yang jujur menjaga app.clincoo.buzz tetap bisa dibagikan tanpa query.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set a Clincoo Filter Default When the Query Param Is Missing",
          desc: "A visitor opens a path with no search. Do not let the filter UI point at a value that is not in the URL.",
          content: "<p class=\"mb-4\">A Clincoo home page without ?sort= uses a random order in code, but the dropdown says Newest. The view and the URL disagree.</p><p class=\"mb-4\">If get('sort') is null, use an in-memory default. Write to the URL only after the visitor changes the filter in editor.clincoo.buzz.</p><p class=\"mb-4\">Do not force replaceState to the default on first load. That overwrites a clean category link.</p><p class=\"mb-4\">Ask AI to separate display value from URL value. Paste the default object, not the whole article list.</p><p class=\"mb-4\">Clincoo serves the path the visitor typed. An honest default keeps app.clincoo.buzz shareable without a query.</p>",
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
