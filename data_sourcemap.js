// Clincoo Blog — Data kategori: sourcemap
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["sourcemap"] = {
  names: { "id": "Source Map", "en": "Source Map" },
  flag: "🗺️",
  articles: [
    {
      id: "sourcemap-hidup-saat-debug-mati-produksi",
      langs: {
        "id": {
          title: "Aktifkan Source Map Clincoo saat Debug, Matikan di Bundel Produksi Publik",
          desc: "Map di produksi membeberkan sumber asli. Pakai hanya di pratinjau lokal.",
          content: "<p class=\"mb-4\">Bundel Clincoo di Pages menyertakan .map. Siapa pun melihat folder editor mentah.</p><p class=\"mb-4\">Di dev, set devtool atau sourcemap true. Di build produksi publik, matikan atau unggah map ke host privat.</p><p class=\"mb-4\">Cek Network: jika ada file .map atau header SourceMap, pengunjung bisa unduh sumber.</p><p class=\"mb-4\">Minta AI memisahkan flag sourcemap dev vs prod. Tempel config dari editor.clincoo.buzz.</p><p class=\"mb-4\">app.clincoo.buzz tetap bisa di-debug lokal tanpa membuka isi bundel ke publik.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Turn Clincoo Source Maps On for Debug, Off in the Public Production Bundle",
          desc: "A map in production leaks original sources. Use it only in local preview.",
          content: "<p class=\"mb-4\">A Clincoo bundle on Pages ships .map files. Anyone can see the raw editor folder.</p><p class=\"mb-4\">In dev, set devtool or sourcemap true. In a public production build, turn it off or upload maps to a private host.</p><p class=\"mb-4\">Check Network: if a .map file or SourceMap header exists, visitors can download sources.</p><p class=\"mb-4\">Ask AI to split the sourcemap flag for dev vs prod. Paste config from editor.clincoo.buzz.</p><p class=\"mb-4\">app.clincoo.buzz stays debuggable locally without opening the bundle to the public.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "sourcemap-baca-stack-asli-di-devtools",
      langs: {
        "id": {
          title: "Baca Stack Asli Clincoo di DevTools lewat Source Map, Bukan Baris Bundel",
          desc: "Error di baris 1 file.min.js tidak membantu. Map mengembalikan berkas dan baris sumber.",
          content: "<p class=\"mb-4\">Console Clincoo menunjuk app.min.js:1. Perbaikan menebak-nebak.</p><p class=\"mb-4\">Pastikan pratinjau lokal memuat map. Buka Sources, centang Enable JavaScript source maps.</p><p class=\"mb-4\">Jangan minify nama fungsi saat debug. Satu klik stack harus membuka berkas yang Anda sunting di editor.clincoo.buzz.</p><p class=\"mb-4\">Minta AI menyesuaikan output map dengan path sumber. Tempel satu error uji.</p><p class=\"mb-4\">Stack di app.clincoo.buzz mengarah ke baris nyata, bukan gulungan bundel.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Read a Real Clincoo Stack in DevTools via Source Maps, Not Bundle Lines",
          desc: "An error on line 1 of file.min.js does not help. The map restores the source file and line.",
          content: "<p class=\"mb-4\">The Clincoo console points at app.min.js:1. Fixes become guesswork.</p><p class=\"mb-4\">Make sure local preview loads the map. Open Sources and enable JavaScript source maps.</p><p class=\"mb-4\">Do not mangle function names while debugging. One stack click should open the file you edit in editor.clincoo.buzz.</p><p class=\"mb-4\">Ask AI to align map output with source paths. Paste one test error.</p><p class=\"mb-4\">Stacks on app.clincoo.buzz point at real lines, not a bundle blob.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "sourcemap-path-sumber-jangan-bocor-lokal",
      langs: {
        "id": {
          title: "Jangan Biarkan Source Map Clincoo Membocorkan Path Disk Lokal",
          desc: "sourcesContent dan sources file:///C:/Users membeberkan nama mesin. Rapikan path.",
          content: "<p class=\"mb-4\">File .map Clincoo memuat C:\\Users\\nama\\project. Itu masuk commit publik.</p><p class=\"mb-4\">Set sources jadi path relatif dari repo. Hapus sourcesContent jika berkas sudah ada di git.</p><p class=\"mb-4\">Cari file:// dan Users di .map sebelum deploy. Jangan commit map yang berisi rahasia komentar.</p><p class=\"mb-4\">Minta AI menulis langkah cek path di map. Tempel output build dari editor.clincoo.buzz.</p><p class=\"mb-4\">Deploy app.clincoo.buzz tidak lagi menuliskan folder rumah pengembang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Let a Clincoo Source Map Leak Local Disk Paths",
          desc: "sourcesContent and sources file:///C:/Users expose a machine name. Clean the paths.",
          content: "<p class=\"mb-4\">A Clincoo .map file contains C:\\Users\\name\\project. That lands in a public commit.</p><p class=\"mb-4\">Set sources to repo-relative paths. Drop sourcesContent if the files already live in git.</p><p class=\"mb-4\">Search file:// and Users in .map before deploy. Do not commit a map that embeds secret comments.</p><p class=\"mb-4\">Ask AI for a path-check step on the map. Paste the build output from editor.clincoo.buzz.</p><p class=\"mb-4\">An app.clincoo.buzz deploy no longer writes a developer home folder.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
