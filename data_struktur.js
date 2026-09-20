// Clincoo Blog — Data kategori: struktur
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["struktur"] = {
  names: { "id": "Struktur", "en": "Structure" },
  flag: "🗂️",
  articles: [
    {
      id: "struktur-pisahkan-css-js-aset",
      langs: {
        "id": {
          title: "Pisahkan CSS, JS, dan Aset Clincoo dari index.html",
          desc: "Satu berkas raksasa sulit di-debug. Folder css, js, dan images membuat path jelas.",
          content: "<p class=\"mb-4\">Workspace Clincoo yang menumpuk gaya dan skrip di dalam index.html membuat diff berisik dan error sulit dilacak.</p><p class=\"mb-4\">Pindahkan gaya ke css/style.css, skrip ke js/main.js, gambar ke images/. Hubungkan dengan path relatif dari halaman yang memakai aset itu.</p><p class=\"mb-4\">Jangan buat folder bersarang tujuh tingkat. Dua atau tiga tingkat cukup untuk situs statis.</p><p class=\"mb-4\">Minta AI memindahkan satu jenis aset dulu. Tolak generate ulang seluruh proyek.</p><p class=\"mb-4\">Clincoo merender file sesuai path. Struktur folder adalah peta, bukan dekorasi repo.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Split Clincoo CSS, JS, and Assets out of index.html",
          desc: "One giant file is hard to debug. css, js, and images folders keep paths obvious.",
          content: "<p class=\"mb-4\">A Clincoo workspace that dumps styles and scripts inside index.html makes noisy diffs and hard-to-trace errors.</p><p class=\"mb-4\">Move styles to css/style.css, scripts to js/main.js, images to images/. Link them with relative paths from the page that uses the asset.</p><p class=\"mb-4\">Do not nest folders seven levels deep. Two or three levels are enough for a static site.</p><p class=\"mb-4\">Ask the AI to move one asset type first. Refuse a full project regenerate.</p><p class=\"mb-4\">Clincoo renders files by path. Folder structure is a map, not repo decoration.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "struktur-satu-halaman-satu-folder",
      langs: {
        "id": {
          title: "Satu Halaman Clincoo, Satu Folder, Satu index.html",
          desc: "about.html di root mudah bentrok. Folder about/index.html memberi URL bersih.",
          content: "<p class=\"mb-4\">Situs Clincoo dengan about.html, harga.html, dan kontak.html di root membuat tautan rawan salah ketik dan sitemap berantakan.</p><p class=\"mb-4\">Buat folder per halaman: about/index.html, harga/index.html. Tautan menjadi /about/ tanpa ekstensi. Aset bersama tetap di css/ dan images/ root.</p><p class=\"mb-4\">Jangan duplikasi style.css di setiap folder. Satu sumber gaya, banyak halaman.</p><p class=\"mb-4\">Minta AI memindahkan satu halaman. Tolak menyalin seluruh template ke setiap folder.</p><p class=\"mb-4\">Clincoo menayangkan path apa adanya. Folder per halaman adalah URL, bukan semrawut file.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "One Clincoo Page, One Folder, One index.html",
          desc: "about.html at the root collides easily. about/index.html gives a clean URL.",
          content: "<p class=\"mb-4\">A Clincoo site with about.html, pricing.html, and contact.html at the root makes typos in links and a messy sitemap.</p><p class=\"mb-4\">Make a folder per page: about/index.html, pricing/index.html. Links become /about/ without an extension. Shared assets stay in root css/ and images/.</p><p class=\"mb-4\">Do not duplicate style.css in every folder. One style source, many pages.</p><p class=\"mb-4\">Ask the AI to move one page. Refuse copying the whole template into every folder.</p><p class=\"mb-4\">Clincoo serves paths as stored. A folder per page is a URL, not a file pile.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "struktur-nama-file-konsisten",
      langs: {
        "id": {
          title: "Samakan Pola Nama File Clincoo: huruf-kecil dan tanda-hubung",
          desc: "Hero.PNG dan hero.png bentrok di server. Satu pola menghemat debug 404.",
          content: "<p class=\"mb-4\">Deploy Clincoo sering gagal memuat gambar karena file bernama Hero.PNG sementara HTML menulis hero.png. Server membedakan huruf besar-kecil.</p><p class=\"mb-4\">Pakai huruf kecil, tanda hubung, tanpa spasi: tim-produk.webp, bukan Tim Produk Final V2.png. Samakan nama kelas CSS dengan peran, bukan warna.</p><p class=\"mb-4\">Setelah ganti nama, perbarui setiap src dan href. Cek Network di pratinjau sampai tidak ada 404.</p><p class=\"mb-4\">Minta AI merapikan nama di satu folder. Tolak rename massal tanpa daftar path lama.</p><p class=\"mb-4\">Clincoo mengikuti path persis. Nama file yang konsisten memotong error senyap.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep Clincoo File Names Consistent: lowercase and hyphens",
          desc: "Hero.PNG and hero.png collide on the server. One pattern saves 404 debugging.",
          content: "<p class=\"mb-4\">Clincoo deploys often fail to load images because the file is Hero.PNG while HTML writes hero.png. Servers treat case as different files.</p><p class=\"mb-4\">Use lowercase, hyphens, no spaces: team-product.webp, not Team Product Final V2.png. Match CSS class names to roles, not colors.</p><p class=\"mb-4\">After renaming, update every src and href. Check Network in preview until 404s are gone.</p><p class=\"mb-4\">Ask the AI to tidy names in one folder. Refuse a mass rename without a list of old paths.</p><p class=\"mb-4\">Clincoo follows paths exactly. Consistent file names cut silent errors.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
