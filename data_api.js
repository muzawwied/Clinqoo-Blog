// Clincoo Blog — Data kategori: api
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["api"] = {
  names: { "id": "API", "en": "API" },
  flag: "🔌",
  articles: [
    {
      id: "api-baca-status-http-sebelum-json",
      langs: {
        "id": {
          title: "Baca Status HTTP sebelum Mem-parse JSON di Situs Clincoo",
          desc: "res.ok false tetap bisa punya tubuh. Jangan langsung .json() tanpa cek kode.",
          content: "<p class=\"mb-4\">Tombol di halaman app.clincoo.buzz memanggil API lalu diam karena 401 atau 500 diabaikan.</p><p class=\"mb-4\">Cek res.status dan res.ok di editor.clincoo.buzz sebelum parse. Tampilkan pesan ke pengguna.</p><p class=\"mb-4\">Bedakan 4xx (salah klien) dan 5xx (salah server) agar retry tidak sia-sia.</p><p class=\"mb-4\">Log URL dan status ke konsol saat mengembangkan, hapus log berlebih sebelum rilis.</p><p class=\"mb-4\">Clincoo tidak menerjemahkan kode HTTP. Membaca status membuat form dan daftar bisa pulih.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Read the HTTP Status before Parsing JSON on a Clincoo Site",
          desc: "A false res.ok can still have a body. Do not call .json() without checking the code.",
          content: "<p class=\"mb-4\">A button on an app.clincoo.buzz page calls an API and then goes quiet because 401 or 500 is ignored.</p><p class=\"mb-4\">Check res.status and res.ok in editor.clincoo.buzz before parsing. Show a message to the user.</p><p class=\"mb-4\">Separate 4xx (client fault) from 5xx (server fault) so retries are not wasted.</p><p class=\"mb-4\">Log the URL and status while developing; drop noisy logs before release.</p><p class=\"mb-4\">Clincoo does not translate HTTP codes. Reading status lets forms and lists recover.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "api-timeout-abortcontroller-fetch",
      langs: {
        "id": {
          title: "Batasi Waktu Fetch dengan AbortController di Clincoo",
          desc: "Permintaan yang menggantung menahan tombol. Abort setelah beberapa detik.",
          content: "<p class=\"mb-4\">Jaringan lambat membuat fetch dari editor.clincoo.buzz tidak selesai dan spinner berputar terus.</p><p class=\"mb-4\">Buat AbortController, pasang signal ke fetch, dan setTimeout untuk abort.</p><p class=\"mb-4\">Tangkap DOMException AbortError terpisah dari gagal jaringan biasa.</p><p class=\"mb-4\">Berikan tombol batal manual pada unduhan besar setelah publish ke app.clincoo.buzz.</p><p class=\"mb-4\">Clincoo tidak memotong fetch otomatis. Timeout yang kamu pasang menjaga UI tetap hidup.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Time Out Fetch with AbortController in Clincoo",
          desc: "A hanging request holds the button. Abort after a few seconds.",
          content: "<p class=\"mb-4\">A slow network leaves fetch from editor.clincoo.buzz unfinished and the spinner spinning.</p><p class=\"mb-4\">Create an AbortController, pass its signal to fetch, and setTimeout to abort.</p><p class=\"mb-4\">Catch DOMException AbortError separately from a normal network failure.</p><p class=\"mb-4\">Offer a manual cancel on large downloads after publishing to app.clincoo.buzz.</p><p class=\"mb-4\">Clincoo does not cut fetch for you. The timeout you add keeps the UI alive.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
