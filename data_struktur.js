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
    },
    {
      id: "struktur-readme-peta-folder",
      langs: {
        "id": {
          title: "Tulis README Clincoo sebagai Peta Folder, Bukan Essay",
          desc: "Satu halaman yang menjelaskan css/, js/, dan pages/ menghemat waktu onboarding.",
          content: "<p class=\"mb-4\">Workspace Clincoo tanpa peta folder memaksa setiap kontributor menebak di mana hero.webp atau script checkout tinggal.</p><p class=\"mb-4\">Buat README.md pendek: daftar folder, peran masing-masing, dan contoh path yang boleh diubah. Hindari esai sejarah proyek.</p><p class=\"mb-4\">Tulis satu baris aturan path: aset bersama di root, halaman di folder sendiri, draf di folder _draft yang tidak di-deploy.</p><p class=\"mb-4\">Minta AI memperbarui README hanya setelah struktur folder berubah. Tolak generate dokumentasi sepuluh halaman.</p><p class=\"mb-4\">Clincoo merender file sesuai path. README adalah peta, bukan dekorasi repo.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Write a Clincoo README as a Folder Map, Not an Essay",
          desc: "One page that explains css/, js/, and pages/ saves onboarding time.",
          content: "<p class=\"mb-4\">A Clincoo workspace without a folder map forces every contributor to guess where hero.webp or the checkout script lives.</p><p class=\"mb-4\">Write a short README.md: list folders, their roles, and example paths that may change. Skip project-history essays.</p><p class=\"mb-4\">Add one path rule: shared assets at the root, pages in their own folders, drafts in a _draft folder that is not deployed.</p><p class=\"mb-4\">Ask the AI to update the README only after the folder structure changes. Refuse a ten-page documentation dump.</p><p class=\"mb-4\">Clincoo renders files by path. The README is a map, not repo decoration.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "struktur-folder-draf-terpisah",
      langs: {
        "id": {
          title: "Simpan Draf Clincoo di Folder Terpisah dari Halaman Tayang",
          desc: "File percobaan di root mudah ikut ter-deploy. Pisahkan draf dari produksi.",
          content: "<p class=\"mb-4\">Folder root Clincoo yang penuh uji-hero-v4.html dan copy-lama.html membuat sitemap dan deploy ikut mengirim sampah.</p><p class=\"mb-4\">Buat folder draf/, sandbox/, atau _wip/. Jangan tautkan folder itu dari navigasi publik. Hapus atau arsipkan sebelum rilis.</p><p class=\"mb-4\">Samakan nama draf dengan tugas: draf/harga-q3.html, bukan newnew2.html. Setelah selesai, pindahkan ke folder halaman resmi.</p><p class=\"mb-4\">Minta AI menandai file yang tidak tertaut dari index. Tolak menghapus massal tanpa daftar path.</p><p class=\"mb-4\">Clincoo menayangkan apa yang ada di repo publik. Struktur draf yang terpisah menjaga rilis tetap bersih.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Keep Clincoo Drafts in a Folder Separate from Live Pages",
          desc: "Experiment files at the root often ship by accident. Split drafts from production.",
          content: "<p class=\"mb-4\">A Clincoo root packed with uji-hero-v4.html and copy-lama.html lets sitemap and deploy ship junk.</p><p class=\"mb-4\">Make a drafts/, sandbox/, or _wip/ folder. Do not link that folder from public navigation. Delete or archive it before release.</p><p class=\"mb-4\">Name drafts after the task: drafts/pricing-q3.html, not newnew2.html. When done, move them into the official page folder.</p><p class=\"mb-4\">Ask the AI to list files that are not linked from index. Refuse a mass delete without a path list.</p><p class=\"mb-4\">Clincoo serves whatever sits in the public repo. Separate draft structure keeps a release clean.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "struktur-satu-sumber-navigasi",
      langs: {
        "id": {
          title: "Jaga Navigasi Clincoo di Satu Sumber, Bukan di Setiap Halaman",
          desc: "Menu yang disalin ke lima file cepat drift. Satu potongan nav mengurangi 404 internal.",
          content: "<p class=\"mb-4\">Situs Clincoo dengan header disalin ke about, harga, dan blog membuat tautan baru terlupakan di satu halaman.</p><p class=\"mb-4\">Simpan markup nav di satu file yang Anda salin sadar, atau satu blok yang selalu Anda sunting dulu. Daftar tautan harus identik di setiap halaman publik.</p><p class=\"mb-4\">Setelah menambah halaman, perbarui nav lalu cek setiap href di pratinjau. Jangan andalkan ingatan.</p><p class=\"mb-4\">Minta AI menampilkan daftar tautan nav sebelum mengedit. Tolak rewrite seluruh layout hanya untuk menambah satu menu.</p><p class=\"mb-4\">Clincoo tidak merakit nav ajaib. Satu sumber navigasi adalah struktur, bukan selera desain.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep Clincoo Navigation in One Source, Not on Every Page",
          desc: "A menu copied across five files drifts fast. One nav snippet cuts internal 404s.",
          content: "<p class=\"mb-4\">A Clincoo site with the header copied into about, pricing, and blog leaves a new link missing on one page.</p><p class=\"mb-4\">Keep nav markup in one file you copy on purpose, or one block you always edit first. The link list must match on every public page.</p><p class=\"mb-4\">After adding a page, update nav then check every href in preview. Do not trust memory.</p><p class=\"mb-4\">Ask the AI to show the nav link list before editing. Refuse a full layout rewrite just to add one menu item.</p><p class=\"mb-4\">Clincoo does not assemble nav by magic. One navigation source is structure, not design taste.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "struktur-path-relatif-satu-pola",
      langs: {
        "id": {
          title: "Pilih Satu Pola Path Relatif Clincoo dan Patuhi di Semua Halaman",
          desc: "Campuran /css/style.css dan ../css/style.css memicu 404 diam-diam.",
          content: "<p class=\"mb-4\">Halaman Clincoo di folder bersarang yang memakai href=\"/css/style.css\" bisa gagal di pratinjau lokal, sementara ../css/style.css gagal jika folder dipindah.</p><p class=\"mb-4\">Pilih satu pola: path relatif dari file pemanggil (../css/style.css) atau path dari root situs. Tuliskan pilihan itu di README.</p><p class=\"mb-4\">Setelah memindahkan halaman ke folder lebih dalam, hitung ulang setiap ../. Cek Network sampai CSS, JS, dan gambar 200.</p><p class=\"mb-4\">Minta AI memperbaiki path di satu folder dulu. Tolak penggantian global tanpa daftar file yang berubah.</p><p class=\"mb-4\">Clincoo memuat aset sesuai string path. Satu pola relatif memotong debug 404 yang berulang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Pick One Clincoo Relative-Path Pattern and Keep It on Every Page",
          desc: "Mixing /css/style.css and ../css/style.css silently causes 404s.",
          content: "<p class=\"mb-4\">A nested Clincoo page that uses href=\"/css/style.css\" can fail in local preview, while ../css/style.css fails if the folder moves.</p><p class=\"mb-4\">Pick one pattern: relative from the calling file (../css/style.css) or from the site root. Write that choice in the README.</p><p class=\"mb-4\">After moving a page deeper, recount every ../. Check Network until CSS, JS, and images return 200.</p><p class=\"mb-4\">Ask the AI to fix paths in one folder first. Refuse a global replace without a list of changed files.</p><p class=\"mb-4\">Clincoo loads assets from the path string. One relative-path pattern cuts repeated 404 debugging.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "struktur-batas-kedalaman-folder",
      langs: {
        "id": {
          title: "Batasi Kedalaman Folder Clincoo sampai Tiga Tingkat",
          desc: "css/tema/gelap/komponen/tombol.css sulit dilacak. Datar lebih mudah di-debug.",
          content: "<p class=\"mb-4\">Pohon folder Clincoo yang dalam membuat path ../../../../assets mudah salah hitung dan diff AI menjadi berisik.</p><p class=\"mb-4\">Batasi tiga tingkat dari root: css/components/button.css atau images/tim/foto.webp. Jika butuh tingkat keempat, pertimbangkan nama file yang lebih jelas.</p><p class=\"mb-4\">Gabungkan folder yang hanya berisi satu file. Pecah folder hanya ketika isinya benar-benar berbeda peran.</p><p class=\"mb-4\">Minta AI mengusulkan pohon baru dalam daftar path, bukan mengeksekusi pindah massal. Tinjau dulu di pratinjau.</p><p class=\"mb-4\">Clincoo tidak membutuhkan hierarki framework. Folder dangkal adalah peta yang bisa diingat.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Cap Clincoo Folder Depth at Three Levels",
          desc: "css/theme/dark/components/button.css is hard to trace. Flatter trees debug faster.",
          content: "<p class=\"mb-4\">A deep Clincoo folder tree makes paths like ../../../../assets easy to miscount and makes AI diffs noisy.</p><p class=\"mb-4\">Cap depth at three levels from root: css/components/button.css or images/team/photo.webp. If you need a fourth level, consider a clearer filename instead.</p><p class=\"mb-4\">Merge folders that hold a single file. Split a folder only when the contents serve different roles.</p><p class=\"mb-4\">Ask the AI to propose a new tree as a path list, not to run a mass move. Review it in preview first.</p><p class=\"mb-4\">Clincoo does not need a framework hierarchy. A shallow folder tree is a map you can remember.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ]
};
