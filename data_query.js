// Clincoo Blog — Data kategori: query
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["query"] = {
  names: { "id": "Query", "en": "Query" },
  flag: "🔎",
  articles: [
    {
      id: "query-baca-searchparams",
      langs: {
        "id": {
          title: "Baca Parameter URL Clincoo lewat URLSearchParams, Bukan split Manual",
          desc: "Memotong location.search dengan split mudah pecah pada encoding. URLSearchParams sudah menangani plus dan persen.",
          content: "<p class=\"mb-4\">Skrip Clincoo memakai location.search.split('=')[1]. Nilai yang berisi &amp; atau spasi terpotong diam-diam.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pakai new URLSearchParams(location.search).get('q'). decode sudah termasuk.</p><p class=\"mb-4\">Cek null jika parameter absen. Jangan asumsikan string kosong sama dengan tidak ada kunci.</p><p class=\"mb-4\">Minta AI hanya mengganti parser split jadi URLSearchParams. Tempel fungsi baca query, bukan seluruh app.</p><p class=\"mb-4\">Clincoo menayangkan URL yang pengunjung buka. Parser resmi menjaga filter di app.clincoo.buzz tetap utuh.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Read Clincoo URL Params with URLSearchParams, Not a Manual split",
          desc: "Cutting location.search with split breaks on encoding. URLSearchParams already handles plus and percent.",
          content: "<p class=\"mb-4\">A Clincoo script uses location.search.split('=')[1]. A value with &amp; or a space is silently truncated.</p><p class=\"mb-4\">In editor.clincoo.buzz, use new URLSearchParams(location.search).get('q'). Decoding is included.</p><p class=\"mb-4\">Check for null when the param is missing. Do not treat an empty string as a missing key.</p><p class=\"mb-4\">Ask AI only to replace the split parser with URLSearchParams. Paste the query reader, not the whole app.</p><p class=\"mb-4\">Clincoo serves the URL the visitor opened. The official parser keeps filters intact on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "query-update-tanpa-reload",
      langs: {
        "id": {
          title: "Perbarui Query String Clincoo dengan history.replaceState, Tanpa Reload",
          desc: "Mengubah location.search langsung memuat ulang halaman. replaceState menyimpan filter tanpa kehilangan scroll.",
          content: "<p class=\"mb-4\">Filter Clincoo menulis window.location.search = '?tag=baru'. Halaman reload dan form terisi ulang dari awal.</p><p class=\"mb-4\">Bangun URLSearchParams dari state, lalu history.replaceState(null, '', '?' + params) di editor.clincoo.buzz.</p><p class=\"mb-4\">Jangan pushState untuk setiap ketikan filter. replaceState menjaga tombol Back tidak menumpuk 20 langkah filter.</p><p class=\"mb-4\">Minta AI hanya menukar assignment location.search jadi replaceState. Tempel handler filter.</p><p class=\"mb-4\">Clincoo adalah situs statis. Query di URL menjaga tautan bagikan di app.clincoo.buzz tetap bisa dibuka ulang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Update a Clincoo Query String with history.replaceState, No Reload",
          desc: "Assigning location.search reloads the page. replaceState keeps the filter without losing scroll.",
          content: "<p class=\"mb-4\">A Clincoo filter writes window.location.search = '?tag=new'. The page reloads and the form resets.</p><p class=\"mb-4\">Build URLSearchParams from state, then history.replaceState(null, '', '?' + params) di editor.clincoo.buzz.</p><p class=\"mb-4\">Do not pushState on every filter keystroke. replaceState keeps Back from stacking 20 filter steps.</p><p class=\"mb-4\">Ask AI only to swap the location.search assignment for replaceState. Paste the filter handler.</p><p class=\"mb-4\">Clincoo is a static site. Query in the URL keeps a shared link on app.clincoo.buzz reopenable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "query-jangan-simpan-rahasia",
      langs: {
        "id": {
          title: "Jangan Taruh Token atau Email di Query String Clincoo",
          desc: "Query masuk riwayat, referrer, dan log server. Secret di URL bocor lebih cepat daripada di body.",
          content: "<p class=\"mb-4\">Tautan ajaib Clincoo memuat ?token= di address bar. Orang menyalin URL ke chat beserta kuncinya.</p><p class=\"mb-4\">Pakai fragment (#) hanya jika nilai tidak boleh ke server, atau kirim token lewat POST/header. Hapus query setelah dipakai di editor.clincoo.buzz.</p><p class=\"mb-4\">Jangan log location.href utuh jika ada parameter sesi. Potong search sebelum menulis konsol.</p><p class=\"mb-4\">Minta AI mencari token di URLSearchParams. Tempel router, bukan seluruh bundel.</p><p class=\"mb-4\">Clincoo tidak menyembunyikan address bar. Query bersih menjaga app.clincoo.buzz tidak membocorkan kunci.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Put a Token or Email in a Clincoo Query String",
          desc: "Query lands in history, referrers, and server logs. A secret in the URL leaks faster than one in the body.",
          content: "<p class=\"mb-4\">A Clincoo magic link loads ?token= in the address bar. People paste the URL into chat with the key included.</p><p class=\"mb-4\">Use a fragment (#) only if the value must not hit the server, or send the token via POST/header. Strip the query after use in editor.clincoo.buzz.</p><p class=\"mb-4\">Do not log the full location.href if a session param is present. Cut search before writing the console.</p><p class=\"mb-4\">Ask AI to find tokens in URLSearchParams. Paste the router, not the whole bundle.</p><p class=\"mb-4\">Clincoo does not hide the address bar. A clean query keeps app.clincoo.buzz from leaking keys.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
