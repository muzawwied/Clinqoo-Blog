// Clincoo Blog — Data kategori: cors
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["cors"] = {
  names: { "id": "CORS", "en": "CORS" },
  flag: "🔀",
  articles: [
    {
      id: "cors-preflight-options-sebelum-fetch",
      langs: {
        "id": {
          title: "Pahami Preflight OPTIONS sebelum Fetch Lintas Origin di Clincoo",
          desc: "Fetch POST JSON memicu OPTIONS. Tanpa jawaban preflight, konsol hanya menulis failed to fetch.",
          content: "<p class=\"mb-4\">Form Clincoo mengirim JSON ke API di host lain. Browser menahan POST sampai OPTIONS berhasil.</p><p class=\"mb-4\">Server API harus menjawab OPTIONS dengan status 204, Access-Control-Allow-Origin, Allow-Methods, dan Allow-Headers yang sama dengan permintaan.</p><p class=\"mb-4\">Jangan kirim body pada OPTIONS. Timeout preflight terlihat seperti jaringan mati di app.clincoo.buzz.</p><p class=\"mb-4\">Minta AI memetakan header permintaan vs respons. Tempel tab Network dari editor.clincoo.buzz.</p><p class=\"mb-4\">Uji dari origin produksi, bukan hanya localhost. Preflight yang lolos di lokal bisa gagal di domain live.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Understand OPTIONS Preflight before a Cross-Origin Fetch in Clincoo",
          desc: "A JSON POST triggers OPTIONS. Without a preflight reply, the console only says failed to fetch.",
          content: "<p class=\"mb-4\">A Clincoo form posts JSON to an API on another host. The browser holds the POST until OPTIONS succeeds.</p><p class=\"mb-4\">The API must answer OPTIONS with 204, Access-Control-Allow-Origin, Allow-Methods, and Allow-Headers matching the request.</p><p class=\"mb-4\">Do not send a body on OPTIONS. A preflight timeout looks like a dead network on app.clincoo.buzz.</p><p class=\"mb-4\">Ask AI to map request headers to the response. Paste the Network tab from editor.clincoo.buzz.</p><p class=\"mb-4\">Test from the production origin, not only localhost. A preflight that passes locally can fail on the live domain.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cors-kredensial-bukan-wildcard-origin",
      langs: {
        "id": {
          title: "Jangan Pakai Origin Bintang jika Fetch Clincoo Membawa Kredensial",
          desc: "credentials: include menolak Access-Control-Allow-Origin: *. Tulis origin pasti.",
          content: "<p class=\"mb-4\">Skrip Clincoo mengirim cookie ke API. Browser membuang respons jika Allow-Origin bertuliskan *.</p><p class=\"mb-4\">Set Access-Control-Allow-Origin ke https://app.clincoo.buzz (atau origin halaman) dan Access-Control-Allow-Credentials: true.</p><p class=\"mb-4\">Jangan meniru origin mentah dari header tanpa daftar putih. Itu membuka API ke situs mana pun.</p><p class=\"mb-4\">Minta AI menulis daftar origin yang diizinkan. Tempel cuplikan fetch dari editor.clincoo.buzz.</p><p class=\"mb-4\">Uji login di dua origin. Hanya origin yang terdaftar yang boleh membaca JSON.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Use a Wildcard Origin when a Clincoo Fetch Sends Credentials",
          desc: "credentials: include rejects Access-Control-Allow-Origin: *. Write a concrete origin.",
          content: "<p class=\"mb-4\">Clincoo script sends a cookie to the API. The browser drops the response if Allow-Origin is *.</p><p class=\"mb-4\">Set Access-Control-Allow-Origin to https://app.clincoo.buzz (or the page origin) and Access-Control-Allow-Credentials: true.</p><p class=\"mb-4\">Do not echo the raw Origin header without a allowlist. That opens the API to any site.</p><p class=\"mb-4\">Ask AI to draft the allowed origin list. Paste the fetch snippet from editor.clincoo.buzz.</p><p class=\"mb-4\">Test login on two origins. Only listed origins may read the JSON.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cors-expose-header-untuk-baca-respons",
      langs: {
        "id": {
          title: "Expose Header CORS agar JS Clincoo Bisa Membaca Respons API",
          desc: "Header kustom seperti X-Request-Id tersembunyi. Access-Control-Expose-Headers membukanya.",
          content: "<p class=\"mb-4\">Halaman Clincoo ingin menampilkan X-Request-Id dari API. getResponseHeader mengembalikan null tanpa expose.</p><p class=\"mb-4\">Tambah Access-Control-Expose-Headers: X-Request-Id, Retry-After pada respons API. Hanya header yang disebut yang terlihat di JS.</p><p class=\"mb-4\">Content-Type dan beberapa header aman tetap terbaca tanpa expose. Jangan expose Set-Cookie.</p><p class=\"mb-4\">Minta AI menandai header mana yang perlu dibaca UI. Tempel respons Network dari editor.clincoo.buzz.</p><p class=\"mb-4\">Setelah expose, app.clincoo.buzz bisa menampilkan id permintaan di pesan error.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Expose CORS Headers so Clincoo JS Can Read the API Response",
          desc: "Custom headers such as X-Request-Id stay hidden. Access-Control-Expose-Headers opens them.",
          content: "<p class=\"mb-4\">A Clincoo page wants to show X-Request-Id from the API. getResponseHeader returns null without expose.</p><p class=\"mb-4\">Add Access-Control-Expose-Headers: X-Request-Id, Retry-After on the API response. Only named headers are visible to JS.</p><p class=\"mb-4\">Content-Type and a few safe headers stay readable without expose. Do not expose Set-Cookie.</p><p class=\"mb-4\">Ask AI which headers the UI must read. Paste the Network response from editor.clincoo.buzz.</p><p class=\"mb-4\">Once exposed, app.clincoo.buzz can show the request id in an error message.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cors-uji-origin-produksi-bukan-hanya-lokal",
      langs: {
        "id": {
          title: "Uji CORS Clincoo dari Origin Produksi, Bukan Hanya Lokal",
          desc: "localhost lolos sementara app.clincoo.buzz ditolak. Daftar origin harus mencakup domain live.",
          content: "<p class=\"mb-4\">Pengembang Clincoo menguji fetch di http://localhost:5173. API mengizinkan localhost, lalu produksi gagal.</p><p class=\"mb-4\">Tambah https://app.clincoo.buzz dan https://editor.clincoo.buzz ke daftar origin. Sertakan skema dan port yang tepat.</p><p class=\"mb-4\">Jangan andalkan ekstensi pemati CORS di browser. Itu menyembunyikan bug sampai pengguna nyata datang.</p><p class=\"mb-4\">Minta AI merancang matriks uji: lokal, pratinjau, produksi. Tempel error CORS lengkap dari konsol.</p><p class=\"mb-4\">Setelah daftar benar, fetch di app.clincoo.buzz dan pratinjau editor berjalan tanpa blokir.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test Clincoo CORS from the Production Origin, Not Only Localhost",
          desc: "localhost passes while app.clincoo.buzz is blocked. The origin list must include the live domain.",
          content: "<p class=\"mb-4\">A Clincoo developer tests fetch on http://localhost:5173. The API allows localhost, then production fails.</p><p class=\"mb-4\">Add https://app.clincoo.buzz and https://editor.clincoo.buzz to the origin list. Include the exact scheme and port.</p><p class=\"mb-4\">Do not rely on a browser CORS-disabler extension. It hides the bug until real users arrive.</p><p class=\"mb-4\">Ask AI for a test matrix: local, preview, production. Paste the full CORS error from the console.</p><p class=\"mb-4\">Once the list is correct, fetch on app.clincoo.buzz and the editor preview runs without a block.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
