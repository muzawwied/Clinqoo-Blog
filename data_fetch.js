// Clincoo Blog — Data kategori: fetch
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["fetch"] = {
  names: { "id": "Fetch", "en": "Fetch" },
  flag: "🌐",
  articles: [
    {
      id: "fetch-cek-response-ok-sebelum-json",
      langs: {
        "id": {
          title: "Cek response.ok pada Fetch Clincoo Sebelum Memanggil json()",
          desc: "Status 404 tetap punya body. json() tanpa cek ok menelan halaman error sebagai data.",
          content: "<p class=\"mb-4\">Skrip Clincoo memanggil fetch lalu langsung response.json(). Endpoint yang 404 mengembalikan HTML, parsing gagal, UI kosong.</p><p class=\"mb-4\">Di editor.clincoo.buzz, cek response.ok atau response.status sebelum parse. Cabangkan pesan untuk 4xx dan 5xx.</p><p class=\"mb-4\">Jangan anggap status selain 200 sebagai sukses hanya karena promise fetch resolved. Fetch hanya menolak saat jaringan putus.</p><p class=\"mb-4\">Minta AI menambahkan cabang if (!response.ok). Tempel fungsi yang sekarang langsung json().</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu simpan. Cek status menjaga data di app.clincoo.buzz tidak tertukar dengan halaman error.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Check response.ok on Clincoo Fetch Before Calling json()",
          desc: "A 404 still has a body. json() without an ok check swallows an error page as data.",
          content: "<p class=\"mb-4\">A Clincoo script calls fetch then immediately response.json(). A 404 endpoint returns HTML, parsing fails, the UI is empty.</p><p class=\"mb-4\">In editor.clincoo.buzz, check response.ok or response.status before parsing. Branch messages for 4xx and 5xx.</p><p class=\"mb-4\">Do not treat any non-200 as success just because the fetch promise resolved. Fetch only rejects when the network drops.</p><p class=\"mb-4\">Ask AI to add an if (!response.ok) branch. Paste the function that now calls json() immediately.</p><p class=\"mb-4\">Clincoo runs the script you save. A status check keeps data on app.clincoo.buzz from being swapped with an error page.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "fetch-tangani-jaringan-putus",
      langs: {
        "id": {
          title: "Tangani Jaringan Putus pada Fetch Clincoo, Jangan Diam Saja",
          desc: "Promise fetch menolak saat offline. Tanpa catch, tombol kirim menggantung tanpa umpan balik.",
          content: "<p class=\"mb-4\">Form Clincoo men-fetch endpoint saat offline. Promise ditolak, catch kosong, spinner berputar selamanya.</p><p class=\"mb-4\">Di editor.clincoo.buzz, bungkus fetch dengan try/catch atau .catch. Tampilkan pesan singkat dan aktifkan lagi tombol.</p><p class=\"mb-4\">Jangan andalkan status HTTP untuk kasus DNS gagal atau kabel dicabut. Itu bukan response.</p><p class=\"mb-4\">Minta AI menulis catch yang mereset UI. Tempel handler submit yang hanya punya then.</p><p class=\"mb-4\">Clincoo menayangkan skrip halamanmu. Catch yang jelas menjaga app.clincoo.buzz tetap sopan saat jaringan hilang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Handle a Dropped Network on Clincoo Fetch, Do Not Stay Silent",
          desc: "The fetch promise rejects when offline. Without catch, the submit button hangs with no feedback.",
          content: "<p class=\"mb-4\">A Clincoo form fetches an endpoint while offline. The promise rejects, catch is empty, the spinner spins forever.</p><p class=\"mb-4\">In editor.clincoo.buzz, wrap fetch with try/catch or .catch. Show a short message and re-enable the button.</p><p class=\"mb-4\">Do not rely on an HTTP status for a failed DNS lookup or an unplugged cable. That is not a response.</p><p class=\"mb-4\">Ask AI to write a catch that resets the UI. Paste the submit handler that only has then.</p><p class=\"mb-4\">Clincoo ships your page script. A clear catch keeps app.clincoo.buzz polite when the network disappears.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "fetch-jangan-asumsi-body-json",
      langs: {
        "id": {
          title: "Jangan Asumsikan Body Fetch Clincoo Selalu JSON",
          desc: "Content-Type text/html atau kosong merusak json(). Baca header sebelum parse.",
          content: "<p class=\"mb-4\">Halaman Clincoo men-fetch URL yang mengembalikan HTML pratinjau. json() melempar, daftar produk lenyap.</p><p class=\"mb-4\">Di editor.clincoo.buzz, baca response.headers.get('content-type'). Parse JSON hanya jika header menyebut json.</p><p class=\"mb-4\">Jangan mengandalkan ekstensi .json pada path. Server bisa mengirim apa saja.</p><p class=\"mb-4\">Minta AI memeriksa content-type. Tempel baris yang selalu memanggil json() tanpa cek header.</p><p class=\"mb-4\">Clincoo menjalankan kode yang kamu tulis. Parse yang hati-hati menjaga app.clincoo.buzz tidak jatuh pada body asing.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Do Not Assume a Clincoo Fetch Body Is Always JSON",
          desc: "A text/html or empty Content-Type breaks json(). Read the header before parsing.",
          content: "<p class=\"mb-4\">A Clincoo page fetches a URL that returns preview HTML. json() throws, the product list vanishes.</p><p class=\"mb-4\">In editor.clincoo.buzz, read response.headers.get('content-type'). Parse JSON only when the header names json.</p><p class=\"mb-4\">Do not trust a .json path suffix. The server can send anything.</p><p class=\"mb-4\">Ask AI to check content-type. Paste the line that always calls json() without a header check.</p><p class=\"mb-4\">Clincoo runs the code you write. Careful parsing keeps app.clincoo.buzz from falling over on a foreign body.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "fetch-abortcontroller-batal-stale",
      langs: {
        "id": {
          title: "Batalkan Fetch Clincoo yang Usang dengan AbortController",
          desc: "Ketik cepat menumpuk request. Respons lama bisa menimpa hasil pencarian terbaru.",
          content: "<p class=\"mb-4\">Kolom cari Clincoo men-fetch setiap keyup. Respons lambat dari huruf pertama menimpa hasil huruf terakhir.</p><p class=\"mb-4\">Di editor.clincoo.buzz, simpan AbortController. Abort sinyal lama sebelum fetch baru, lalu pasang signal pada request.</p><p class=\"mb-4\">Jangan membiarkan semua request hidup. Itu membuang kuota dan merusak urutan UI.</p><p class=\"mb-4\">Minta AI menambah AbortController pada pencarian. Tempel listener input yang fetch tanpa batal.</p><p class=\"mb-4\">Clincoo menayangkan skrip yang tersimpan. Abort menjaga hasil di app.clincoo.buzz sesuai ketikan terakhir.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Cancel Stale Clincoo Fetch Calls with AbortController",
          desc: "Fast typing stacks requests. A slow older response can overwrite the latest search result.",
          content: "<p class=\"mb-4\">A Clincoo search field fetches on every keyup. A slow response from the first letter overwrites the last letter's result.</p><p class=\"mb-4\">In editor.clincoo.buzz, keep an AbortController. Abort the old signal before a new fetch, then pass signal on the request.</p><p class=\"mb-4\">Do not leave every request alive. That wastes quota and scrambles UI order.</p><p class=\"mb-4\">Ask AI to add AbortController on search. Paste the input listener that fetches without canceling.</p><p class=\"mb-4\">Clincoo ships the saved script. Abort keeps results on app.clincoo.buzz aligned with the latest keystroke.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "fetch-set-content-type-saat-post",
      langs: {
        "id": {
          title: "Setel Content-Type saat POST Fetch Clincoo, Jangan Kirim Body Mentah",
          desc: "Body JSON tanpa header application/json sering dibaca sebagai teks kosong di server.",
          content: "<p class=\"mb-4\">Form kontak Clincoo mengirim JSON.stringify(payload) tanpa header. Server menolak atau menyimpan string kosong.</p><p class=\"mb-4\">Di editor.clincoo.buzz, isi headers Content-Type: application/json saat method POST atau PUT dan body-nya JSON.</p><p class=\"mb-4\">Jangan campur FormData dengan JSON header. FormData butuh boundary yang diset browser.</p><p class=\"mb-4\">Minta AI menambahkan header pada fetch kirim. Tempel opsi yang hanya punya method dan body.</p><p class=\"mb-4\">Clincoo menjalankan request halamanmu. Header yang tepat membuat endpoint di app.clincoo.buzz membaca payload utuh.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Set Content-Type on Clincoo POST Fetch, Do Not Send a Raw Body",
          desc: "A JSON body without an application/json header is often read as empty text on the server.",
          content: "<p class=\"mb-4\">A Clincoo contact form sends JSON.stringify(payload) with no header. The server rejects it or stores an empty text string.</p><p class=\"mb-4\">In editor.clincoo.buzz, set headers Content-Type: application/json when the method is POST or PUT and the body is JSON.</p><p class=\"mb-4\">Do not mix FormData with a JSON header. FormData needs the browser-set boundary.</p><p class=\"mb-4\">Ask AI to add the header on the send fetch. Paste the options that only have method and body.</p><p class=\"mb-4\">Clincoo runs your page request. The right header lets the endpoint on app.clincoo.buzz read the full payload.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    }
  ]
};
