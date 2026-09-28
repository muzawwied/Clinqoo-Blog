// Clincoo Blog — artikel cors tambahan 2026-09-29
(function () {
  var extra = [
    {
      id: "cors-allow-headers-content-type",
      langs: {
        "id": {
          title: "Izinkan Header Content-Type pada Preflight CORS Clincoo",
          desc: "POST application/json gagal preflight jika Allow-Headers tidak menyebut Content-Type.",
          content: "<p class=\"mb-4\">Form Clincoo mengirim JSON. Browser menambah header Content-Type: application/json lalu memicu OPTIONS.</p><p class=\"mb-4\">Respons OPTIONS harus memuat Access-Control-Allow-Headers: Content-Type (plus Authorization jika dipakai).</p><p class=\"mb-4\">Jangan salin semua header permintaan mentah. Daftar yang diizinkan harus sempit.</p><p class=\"mb-4\">Minta AI membandingkan Request Headers vs Allow-Headers. Tempel tab Network dari editor.clincoo.buzz.</p><p class=\"mb-4\">Setelah header cocok, POST dari app.clincoo.buzz lolos preflight dan body JSON sampai ke API.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Allow the Content-Type Header on a Clincoo CORS Preflight",
          desc: "A JSON POST fails preflight if Allow-Headers does not name Content-Type.",
          content: "<p class=\"mb-4\">A Clincoo form sends JSON. The browser adds Content-Type: application/json and then fires OPTIONS.</p><p class=\"mb-4\">The OPTIONS response must include Access-Control-Allow-Headers: Content-Type (plus Authorization if used).</p><p class=\"mb-4\">Do not echo every request header raw. Keep the allowlist narrow.</p><p class=\"mb-4\">Ask AI to compare Request Headers with Allow-Headers. Paste the Network tab from editor.clincoo.buzz.</p><p class=\"mb-4\">Once headers match, the POST from app.clincoo.buzz passes preflight and the JSON body reaches the API.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cors-max-age-cache-preflight",
      langs: {
        "id": {
          title: "Cache Preflight CORS Clincoo dengan Max-Age yang Masuk Akal",
          desc: "Setiap klik memicu OPTIONS berulang. Access-Control-Max-Age mengurangi kebisingan Network.",
          content: "<p class=\"mb-4\">Halaman Clincoo memanggil API berkali-kali. Tanpa Max-Age, setiap fetch menunggu OPTIONS baru.</p><p class=\"mb-4\">Set Access-Control-Max-Age sekitar 600–7200 detik pada respons OPTIONS. Browser menyimpan hasil preflight.</p><p class=\"mb-4\">Jangan set Max-Age terlalu panjang saat daftar origin masih berubah. Cache lama menolak origin baru.</p><p class=\"mb-4\">Minta AI menghitung interval uji. Tempel rangkaian OPTIONS dari editor.clincoo.buzz.</p><p class=\"mb-4\">Setelah Max-Age aktif, app.clincoo.buzz hanya preflight sekali per sesi singkat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Cache Clincoo CORS Preflight with a Sensible Max-Age",
          desc: "Every click fires OPTIONS again. Access-Control-Max-Age quiets the Network tab.",
          content: "<p class=\"mb-4\">A Clincoo page calls the API many times. Without Max-Age, each fetch waits for a new OPTIONS.</p><p class=\"mb-4\">Set Access-Control-Max-Age around 600–7200 seconds on the OPTIONS response. The browser caches the preflight.</p><p class=\"mb-4\">Do not set Max-Age too long while the origin list is still changing. Stale cache rejects a new origin.</p><p class=\"mb-4\">Ask AI for a test interval. Paste the OPTIONS sequence from editor.clincoo.buzz.</p><p class=\"mb-4\">Once Max-Age is on, app.clincoo.buzz preflights once per short session.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cors-method-bukan-hanya-get",
      langs: {
        "id": {
          title: "Izinkan Method PUT PATCH DELETE pada CORS Clincoo",
          desc: "GET lolos, edit data gagal. Allow-Methods harus mencakup method yang benar-benar dipakai.",
          content: "<p class=\"mb-4\">Editor Clincoo mengirim PATCH ke API. Browser menahan permintaan jika Allow-Methods hanya GET dan POST.</p><p class=\"mb-4\">Tulis Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS sesuai kebutuhan nyata.</p><p class=\"mb-4\">Jangan izinkan method yang API tidak tangani. Daftar lebar membingungkan audit.</p><p class=\"mb-4\">Minta AI memetakan tombol UI ke method HTTP. Tempel fetch dari editor.clincoo.buzz.</p><p class=\"mb-4\">Setelah method cocok, simpan di app.clincoo.buzz tidak lagi gagal diam-diam.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Allow PUT PATCH DELETE Methods on Clincoo CORS",
          desc: "GET works, edits fail. Allow-Methods must name the methods you actually use.",
          content: "<p class=\"mb-4\">The Clincoo editor sends PATCH to the API. The browser holds the request if Allow-Methods is only GET and POST.</p><p class=\"mb-4\">Write Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS to match real use.</p><p class=\"mb-4\">Do not allow methods the API does not handle. A wide list confuses audits.</p><p class=\"mb-4\">Ask AI to map UI buttons to HTTP methods. Paste the fetch from editor.clincoo.buzz.</p><p class=\"mb-4\">Once methods match, save on app.clincoo.buzz no longer fails silently.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cors-font-stylesheet-lintas-origin",
      langs: {
        "id": {
          title: "Header CORS untuk Font dan Stylesheet Lintas Origin di Clincoo",
          desc: "Font dari host lain gagal tanpa Access-Control-Allow-Origin pada file CSS atau WOFF.",
          content: "<p class=\"mb-4\">Halaman Clincoo memuat font dari CDN. Konsol menulis blocked by CORS policy pada file .woff2.</p><p class=\"mb-4\">Server aset harus mengirim Access-Control-Allow-Origin untuk font dan stylesheet. Sering * aman untuk aset publik.</p><p class=\"mb-4\">Jangan taruh font di API yang memakai kredensial. Pisahkan host aset dari host JSON.</p><p class=\"mb-4\">Minta AI memeriksa header file font. Tempel URL aset dari editor.clincoo.buzz.</p><p class=\"mb-4\">Setelah header ada, teks di app.clincoo.buzz memakai font merek tanpa kotak kosong.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "CORS Headers for Cross-Origin Fonts and Stylesheets in Clincoo",
          desc: "Fonts from another host fail without Access-Control-Allow-Origin on the CSS or WOFF file.",
          content: "<p class=\"mb-4\">A Clincoo page loads a font from a CDN. The console writes blocked by CORS policy on the .woff2 file.</p><p class=\"mb-4\">The asset server must send Access-Control-Allow-Origin for fonts and stylesheets. * is often fine for public assets.</p><p class=\"mb-4\">Do not host fonts on an API that uses credentials. Split the asset host from the JSON host.</p><p class=\"mb-4\">Ask AI to inspect the font file headers. Paste the asset URL from editor.clincoo.buzz.</p><p class=\"mb-4\">Once the header is present, text on app.clincoo.buzz uses the brand font without empty boxes.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cors-error-console-baca-lengkap",
      langs: {
        "id": {
          title: "Baca Pesan Error CORS Clincoo di Konsol secara Lengkap",
          desc: "failed to fetch menyembunyikan penyebab. Baris CORS di konsol menyebut origin dan header.",
          content: "<p class=\"mb-4\">Pengembang Clincoo hanya melihat TypeError: Failed to fetch. Penyebab CORS ada di baris merah berikutnya.</p><p class=\"mb-4\">Salin seluruh teks: origin yang diblokir, header yang hilang, dan apakah preflight gagal.</p><p class=\"mb-4\">Jangan tebak dengan mematikan CORS di ekstensi. Itu menghapus bukti.</p><p class=\"mb-4\">Tempel error lengkap ke AI bersama URL dari editor.clincoo.buzz. Minta daftar header yang kurang.</p><p class=\"mb-4\">Setelah pesan dibaca utuh, perbaikan di API dan uji di app.clincoo.buzz jadi spesifik.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Read the Full Clincoo CORS Error in the Console",
          desc: "failed to fetch hides the cause. The CORS line names the origin and missing header.",
          content: "<p class=\"mb-4\">A Clincoo developer only sees TypeError: Failed to fetch. The CORS cause is the next red line.</p><p class=\"mb-4\">Copy the whole text: blocked origin, missing header, and whether preflight failed.</p><p class=\"mb-4\">Do not guess by disabling CORS in an extension. That deletes the evidence.</p><p class=\"mb-4\">Paste the full error to AI with the URL from editor.clincoo.buzz. Ask for the missing headers.</p><p class=\"mb-4\">Once the message is read whole, the API fix and the test on app.clincoo.buzz stay specific.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cors-authorization-header-preflight",
      langs: {
        "id": {
          title: "Izinkan Header Authorization pada Preflight CORS Clincoo",
          desc: "Bearer token memicu preflight. Allow-Headers harus menyebut Authorization.",
          content: "<p class=\"mb-4\">Fetch Clincoo menambah Authorization: Bearer. OPTIONS gagal karena header itu tidak diizinkan.</p><p class=\"mb-4\">Tambah Authorization ke Access-Control-Allow-Headers. Jangan gabungkan dengan wildcard origin plus kredensial.</p><p class=\"mb-4\">Uji token kadaluarsa terpisah dari gagal CORS. Pesan 401 bukan blocked by CORS policy.</p><p class=\"mb-4\">Minta AI memetakan header auth vs preflight. Tempel Network dari editor.clincoo.buzz.</p><p class=\"mb-4\">Setelah header cocok, sesi di app.clincoo.buzz bisa membaca API terlindungi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Allow the Authorization Header on a Clincoo CORS Preflight",
          desc: "A Bearer token triggers preflight. Allow-Headers must name Authorization.",
          content: "<p class=\"mb-4\">A Clincoo fetch adds Authorization: Bearer. OPTIONS fails because that header is not allowed.</p><p class=\"mb-4\">Add Authorization to Access-Control-Allow-Headers. Do not mix a wildcard origin with credentials.</p><p class=\"mb-4\">Test an expired token separately from a CORS failure. A 401 is not blocked by CORS policy.</p><p class=\"mb-4\">Ask AI to map auth headers to preflight. Paste Network from editor.clincoo.buzz.</p><p class=\"mb-4\">Once headers match, a session on app.clincoo.buzz can read a protected API.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cors-redirect-pecah-preflight",
      langs: {
        "id": {
          title: "Hindari Redirect yang Memecah Preflight CORS Clincoo",
          desc: "HTTP ke HTTPS atau slash ekstra membatalkan preflight. Samakan URL akhir dengan origin yang diizinkan.",
          content: "<p class=\"mb-4\">Fetch Clincoo ke http://api... diarahkan ke https. Browser membatalkan karena redirect silang pada preflight.</p><p class=\"mb-4\">Pakai URL akhir yang benar di skrip. Matikan redirect 301 pada endpoint OPTIONS jika bisa.</p><p class=\"mb-4\">Cek Location di tab Network. Origin setelah redirect harus ada di daftar Allow-Origin.</p><p class=\"mb-4\">Minta AI membandingkan URL fetch vs URL akhir. Tempel dari editor.clincoo.buzz.</p><p class=\"mb-4\">Tanpa redirect tersembunyi, preflight di app.clincoo.buzz selesai di hop pertama.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Avoid Redirects that Break a Clincoo CORS Preflight",
          desc: "HTTP to HTTPS or an extra slash cancels preflight. Match the final URL to an allowed origin.",
          content: "<p class=\"mb-4\">A Clincoo fetch to http://api... redirects to https. The browser cancels because of a cross-origin redirect on preflight.</p><p class=\"mb-4\">Use the final URL in the script. Disable a 301 on the OPTIONS endpoint when you can.</p><p class=\"mb-4\">Check Location in the Network tab. The origin after redirect must be on the Allow-Origin list.</p><p class=\"mb-4\">Ask AI to compare the fetch URL with the final URL. Paste from editor.clincoo.buzz.</p><p class=\"mb-4\">Without a hidden redirect, preflight on app.clincoo.buzz finishes on the first hop.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cors-vary-origin-cache-bersama",
      langs: {
        "id": {
          title: "Tambah Vary Origin pada Respons CORS Clincoo",
          desc: "Cache bersama tanpa Vary: Origin bisa menyajikan header milik situs lain.",
          content: "<p class=\"mb-4\">API Clincoo mengizinkan dua origin. CDN menyimpan Allow-Origin pertama dan memberikannya ke origin kedua.</p><p class=\"mb-4\">Set Vary: Origin pada respons API. Cache memisahkan salinan per origin.</p><p class=\"mb-4\">Jangan cache respons berkredensial di tepi publik. Token tidak boleh tertukar antar situs.</p><p class=\"mb-4\">Minta AI meninjau header cache. Tempel respons dari editor.clincoo.buzz.</p><p class=\"mb-4\">Setelah Vary benar, app.clincoo.buzz menerima Allow-Origin miliknya sendiri.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add Vary Origin on Clincoo CORS Responses",
          desc: "A shared cache without Vary: Origin can serve another site's headers.",
          content: "<p class=\"mb-4\">A Clincoo API allows two origins. The CDN stores the first Allow-Origin and serves it to the second origin.</p><p class=\"mb-4\">Set Vary: Origin on the API response. The cache keeps a copy per origin.</p><p class=\"mb-4\">Do not cache credentialed responses at a public edge. Tokens must not leak across sites.</p><p class=\"mb-4\">Ask AI to review cache headers. Paste the response from editor.clincoo.buzz.</p><p class=\"mb-4\">Once Vary is correct, app.clincoo.buzz receives its own Allow-Origin.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["cors"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["cors"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
