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
    },
    {
      id: "sourcemap-jangan-commit-file-map",
      langs: {
        "id": {
          title: "Jangan Commit File .map Clincoo ke Repositori Publik",
          desc: "Berkas .map di git publik sama dengan membuka sumber minify. Abaikan atau simpan privat.",
          content: "<p class=\"mb-4\">Build Clincoo menaruh app.js.map di folder dist yang ikut di-commit. Siapa pun mengkloning repo melihat sumber asli.</p><p class=\"mb-4\">Tambah *.map ke .gitignore jika map hanya untuk debug lokal. Jika tim butuh map produksi, unggah ke bucket privat, bukan Pages publik.</p><p class=\"mb-4\">Cek git status sebelum commit dari editor.clincoo.buzz. File .map yang besar juga memperlambat clone.</p><p class=\"mb-4\">Minta AI meninjau .gitignore dan output bundler. Tempel daftar file dist, bukan seluruh repo.</p><p class=\"mb-4\">Clincoo menayangkan file yang kamu unggah. Tanpa .map di repo publik, app.clincoo.buzz tidak membocorkan sumber.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Commit Clincoo .map Files to a Public Repository",
          desc: "A .map file in a public git repo is the same as publishing unminified sources. Ignore it or keep it private.",
          content: "<p class=\"mb-4\">A Clincoo build drops app.js.map in dist and that folder gets committed. Anyone who clones the repo sees the original sources.</p><p class=\"mb-4\">Add *.map to .gitignore when maps are only for local debug. If the team needs production maps, upload them to a private bucket, not public Pages.</p><p class=\"mb-4\">Check git status before you commit from editor.clincoo.buzz. Large .map files also slow clones.</p><p class=\"mb-4\">Ask AI to review .gitignore and the bundler output. Paste the dist file list, not the whole repo.</p><p class=\"mb-4\">Clincoo serves the files you upload. Without public .map files, app.clincoo.buzz does not leak sources.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "sourcemap-cek-komentar-sourceMappingURL",
      langs: {
        "id": {
          title: "Cek Komentar sourceMappingURL di Bundel Clincoo sebelum Rilis",
          desc: "Komentar di akhir file.min.js menunjuk .map. Hapus atau arahkan privat saat produksi publik.",
          content: "<p class=\"mb-4\">Berkas minify Clincoo sering ditutup dengan //# sourceMappingURL=app.js.map. Browser lalu meminta file itu meski kamu tidak bermaksud membagikannya.</p><p class=\"mb-4\">Di build produksi publik, matikan emit komentar itu atau ganti URL ke host yang butuh autentikasi.</p><p class=\"mb-4\">Buka tab Network di pratinjau editor.clincoo.buzz. Jika ada request 404 ke .map, komentar masih hidup.</p><p class=\"mb-4\">Minta AI mencari sourceMappingURL di output bundel. Tempel 20 baris terakhir file minify.</p><p class=\"mb-4\">Clincoo tidak menghapus komentar map otomatis. Bundel bersih di app.clincoo.buzz tidak mengundang unduhan sumber.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Check the sourceMappingURL Comment in a Clincoo Bundle before Release",
          desc: "A comment at the end of file.min.js points at a .map. Remove it or point it at a private host for public production.",
          content: "<p class=\"mb-4\">A minified Clincoo file often ends with //# sourceMappingURL=app.js.map. The browser then requests that file even if you did not mean to share it.</p><p class=\"mb-4\">In a public production build, stop emitting that comment or change the URL to a host that needs auth.</p><p class=\"mb-4\">Open the Network tab in the editor.clincoo.buzz preview. A 404 request for a .map means the comment is still live.</p><p class=\"mb-4\">Ask AI to find sourceMappingURL in the bundle output. Paste the last 20 lines of the minified file.</p><p class=\"mb-4\">Clincoo does not strip map comments for you. A clean bundle on app.clincoo.buzz does not invite source downloads.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "sourcemap-css-sama-penting-js",
      langs: {
        "id": {
          title: "Aktifkan Source Map CSS Clincoo saat Debug, Sama seperti JavaScript",
          desc: "Aturan minify tanpa map CSS membuat Inspect menunjuk baris 1. Map stylesheet mengembalikan selektor asli.",
          content: "<p class=\"mb-4\">Inspect elemen Clincoo menunjuk styles.min.css:1 untuk semua aturan. Mencari selector asal jadi lambat.</p><p class=\"mb-4\">Hidupkan css sourcemap di bundler saat kerja di editor.clincoo.buzz. Matikan emit .css.map di rilis publik.</p><p class=\"mb-4\">Di DevTools, centang Enable CSS source maps. Satu klik di panel Styles harus membuka berkas yang kamu sunting.</p><p class=\"mb-4\">Minta AI memisahkan flag sourcemap CSS dev vs prod. Tempel config stylesheet saja.</p><p class=\"mb-4\">Map CSS di sesi debug membuat app.clincoo.buzz lebih mudah dirapikan tanpa menebak baris bundel.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Turn On Clincoo CSS Source Maps while Debugging, Same as JavaScript",
          desc: "Minified rules without a CSS map make Inspect point at line 1. A stylesheet map restores the original selector.",
          content: "<p class=\"mb-4\">Inspecting a Clincoo element points at styles.min.css:1 for every rule. Finding the original selector gets slow.</p><p class=\"mb-4\">Enable CSS sourcemaps in the bundler while you work in editor.clincoo.buzz. Turn off .css.map emit for a public release.</p><p class=\"mb-4\">In DevTools, enable CSS source maps. One click in the Styles pane should open the file you edit.</p><p class=\"mb-4\">Ask AI to split the CSS sourcemap flag for dev vs prod. Paste the stylesheet config only.</p><p class=\"mb-4\">A CSS map in a debug session makes app.clincoo.buzz easier to tidy without guessing bundle lines.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "sourcemap-uji-satu-error-sengaja",
      langs: {
        "id": {
          title: "Uji Source Map Clincoo dengan Satu Error Sengaja sebelum Percaya Stack",
          desc: "Map yang path-nya salah tetap dimuat. Lempar error uji dan pastikan baris cocok dengan editor.",
          content: "<p class=\"mb-4\">Tim Clincoo mengira map sudah benar karena file .map ada. Klik stack tetap membuka bundel atau file kosong.</p><p class=\"mb-4\">Tambah throw new Error('map-test') di satu fungsi yang kamu kenal. Buka pratinjau editor.clincoo.buzz dan baca stack.</p><p class=\"mb-4\">Baris dan nama berkas harus sama dengan yang terbuka di editor. Jika beda, perbaiki sources atau root di config bundler.</p><p class=\"mb-4\">Hapus error uji sebelum deploy ke app.clincoo.buzz. Jangan biarkan throw sengaja lolos rilis.</p><p class=\"mb-4\">Clincoo tidak memvalidasi map. Satu error uji menghemat semalam menebak path yang salah.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test a Clincoo Source Map with One Intentional Error before You Trust the Stack",
          desc: "A map with a wrong path still loads. Throw a test error and confirm the line matches the editor.",
          content: "<p class=\"mb-4\">A Clincoo team assumes the map is correct because a .map file exists. Clicking the stack still opens the bundle or an empty file.</p><p class=\"mb-4\">Add throw new Error('map-test') in one function you know. Open the editor.clincoo.buzz preview and read the stack.</p><p class=\"mb-4\">The line and file name must match what is open in the editor. If they differ, fix sources or the bundler root.</p><p class=\"mb-4\">Remove the test error before deploy to app.clincoo.buzz. Do not let an intentional throw ship.</p><p class=\"mb-4\">Clincoo does not validate maps. One test error saves a night of guessing a bad path.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "sourcemap-jangan-inline-map-produksi",
      langs: {
        "id": {
          title: "Jangan Sematkan Source Map Inline di Bundel Produksi Clincoo",
          desc: "devtool inline-source-map menggembungkan JS dan menempel sumber di file yang diunduh pengunjung.",
          content: "<p class=\"mb-4\">Config Clincoo memakai inline-source-map agar praktis. File app.js lalu berisi data URI base64 sepanjang ratusan kilobyte.</p><p class=\"mb-4\">Pakai file .map terpisah saat debug lokal. Di produksi publik, matikan map sama sekali atau unggah terpisah ke host privat.</p><p class=\"mb-4\">Cek ukuran bundel di Network editor.clincoo.buzz. Lonjakan tiba-tiba sering berasal dari map yang tertanam.</p><p class=\"mb-4\">Minta AI mengganti devtool inline menjadi file map di dev dan false di prod. Tempel satu baris config.</p><p class=\"mb-4\">Clincoo mengirim berkas apa adanya. Bundel tanpa map inline menjaga app.clincoo.buzz ringan dan tertutup.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Inline a Source Map in a Clincoo Production Bundle",
          desc: "devtool inline-source-map bloats JS and pastes sources into the file visitors download.",
          content: "<p class=\"mb-4\">A Clincoo config uses inline-source-map for convenience. app.js then holds a data URI base64 blob hundreds of kilobytes long.</p><p class=\"mb-4\">Use a separate .map file for local debug. In public production, turn maps off or upload them separately to a private host.</p><p class=\"mb-4\">Check bundle size in the editor.clincoo.buzz Network tab. A sudden jump often comes from an embedded map.</p><p class=\"mb-4\">Ask AI to change inline devtool to a file map in dev and false in prod. Paste the one config line.</p><p class=\"mb-4\">Clincoo ships files as saved. A bundle without an inline map keeps app.clincoo.buzz lean and closed.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
