// Clincoo Blog — artikel struktur tambahan 2026-09-21 WIB
(function(){
  var extra = [
    {
      id: "struktur-index-hanya-di-root",
      langs: {
        "id": {
          title: "Simpan index.html Utama Clincoo Hanya di Root Proyek",
          desc: "Banyak index.html di folder acak membingungkan pratinjau. Satu pintu masuk di root.",
          content: "<p class=\"mb-4\">Workspace Clincoo yang menaruh index.html di css/, draf/, dan halaman dalam tanpa pola membuat pratinjau membuka berkas yang salah.</p><p class=\"mb-4\">Tetapkan satu index.html di root sebagai beranda. Halaman lain memakai folder/nama/index.html, bukan salinan index di sembarang tempat.</p><p class=\"mb-4\">Hapus index.html cadangan yang tidak terhubung dari navigasi. Jika perlu arsip, pindahkan ke folder draf yang tidak di-deploy.</p><p class=\"mb-4\">Minta AI menandai semua path index.html dulu. Tolak generate beranda kedua.</p><p class=\"mb-4\">Clincoo merender path yang kamu buka. Satu pintu root menjaga peta tetap jelas.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep the Main Clincoo index.html Only at Project Root",
          desc: "Many index.html files in random folders confuse preview. One entry point at root.",
          content: "<p class=\"mb-4\">A Clincoo workspace that drops index.html into css/, drafts/, and inner pages without a pattern makes preview open the wrong file.</p><p class=\"mb-4\">Keep one index.html at root as the home page. Other pages use folder/name/index.html, not copies of index in arbitrary places.</p><p class=\"mb-4\">Delete spare index.html files that navigation never links. If you need an archive, move it into a draft folder that is not deployed.</p><p class=\"mb-4\">Ask the AI to list every index.html path first. Refuse a second generated home page.</p><p class=\"mb-4\">Clincoo renders the path you open. One root door keeps the map clear.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "struktur-font-di-folder-fonts",
      langs: {
        "id": {
          title: "Taruh File Font Clincoo di Folder fonts/, Bukan Campur Gambar",
          desc: "woff2 di images/ sulit dicari. Folder fonts memisahkan peran aset.",
          content: "<p class=\"mb-4\">Proyek Clincoo yang menaruh .woff2 di images/ atau css/ membuat path font berubah setiap kali folder gambar dirapikan.</p><p class=\"mb-4\">Buat fonts/ di root atau di assets/fonts/. Rujuk dengan path relatif yang sama dari setiap CSS. Satu keluarga font, satu subfolder.</p><p class=\"mb-4\">Jangan unggah TTF raksasa jika woff2 sudah ada. Hapus file font yang tidak dipakai di @font-face.</p><p class=\"mb-4\">Minta AI memindahkan font satu keluarga dulu. Tolak rewrite seluruh CSS.</p><p class=\"mb-4\">Clincoo memuat file sesuai URL. Folder fonts adalah rak, bukan tumpukan acak.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Put Clincoo Font Files in fonts/, Not Mixed with Images",
          desc: "woff2 files inside images/ are hard to find. A fonts folder splits asset roles.",
          content: "<p class=\"mb-4\">A Clincoo project that stores .woff2 inside images/ or css/ breaks font paths whenever the image folder is cleaned up.</p><p class=\"mb-4\">Create fonts/ at root or assets/fonts/. Reference them with the same relative path from every stylesheet. One font family, one subfolder.</p><p class=\"mb-4\">Do not upload a huge TTF when woff2 already exists. Delete font files that no @font-face rule uses.</p><p class=\"mb-4\">Ask the AI to move one font family first. Refuse a full CSS rewrite.</p><p class=\"mb-4\">Clincoo loads files by URL. The fonts folder is a shelf, not a mixed pile.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "struktur-vendor-terpisah-dari-kode",
      langs: {
        "id": {
          title: "Pisahkan Pustaka Vendor Clincoo dari Kode yang Kamu Tulis",
          desc: "vendor.js di samping main.js mudah tertimpa. Folder vendor menahan diff.",
          content: "<p class=\"mb-4\">Saat AI menulis ulang js/main.js, pustaka pihak ketiga yang menumpuk di berkas yang sama ikut terhapus atau dobel.</p><p class=\"mb-4\">Simpan skrip pihak ketiga di js/vendor/ atau vendor/. Kode kamu tetap di js/main.js. Hubungkan keduanya dari HTML secara terpisah.</p><p class=\"mb-4\">Jangan minify vendor secara manual di editor jika kamu tidak bisa mengulanginya. Catat versi pustaka di README singkat.</p><p class=\"mb-4\">Minta AI hanya menyentuh main.js. Tolak merge vendor ke satu berkas raksasa tanpa alasan.</p><p class=\"mb-4\">Clincoo tidak membedakan vendor dan kode. Kamu yang memisahkan agar diff tetap kecil.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep Clincoo Vendor Libraries Apart from Your Own Code",
          desc: "vendor.js sitting next to main.js gets overwritten. A vendor folder keeps diffs small.",
          content: "<p class=\"mb-4\">When AI rewrites js/main.js, third-party libraries dumped in the same file get deleted or duplicated.</p><p class=\"mb-4\">Store third-party scripts in js/vendor/ or vendor/. Keep your code in js/main.js. Link both from HTML separately.</p><p class=\"mb-4\">Do not minify vendor by hand in the editor if you cannot repeat the step. Note the library version in a short README.</p><p class=\"mb-4\">Ask the AI to touch only main.js. Refuse merging vendor into one giant file without a reason.</p><p class=\"mb-4\">Clincoo does not distinguish vendor from your code. You split them so diffs stay small.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "struktur-hapus-file-tak-tertaut",
      langs: {
        "id": {
          title: "Hapus File Clincoo yang Tidak Tertaut dari Navigasi atau CSS",
          desc: "Berkas yatim memenuhi pohon folder. Inventaris path sebelum delete.",
          content: "<p class=\"mb-4\">Workspace Clincoo cepat penuh salinan page-2.html, style-old.css, dan gambar yang tidak dirujuk siapa pun.</p><p class=\"mb-4\">Cari tautan, url() CSS, dan src gambar ke setiap kandidat hapus. Jika tidak ada rujukan, pindahkan ke draf dulu, bukan langsung buang saat ragu.</p><p class=\"mb-4\">Jalankan pratinjau beranda, tentang, dan kontak setelah membersihkan. Perhatikan 404 di tab jaringan.</p><p class=\"mb-4\">Minta AI membuat daftar file yatim. Tolak perintah hapus massal tanpa daftar itu.</p><p class=\"mb-4\">Clincoo menayangkan apa yang masih ada di repo. Folder bersih mempercepat debug dan unggah.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Remove Clincoo Files That Navigation or CSS Never Links",
          desc: "Orphan files fill the tree. Inventory paths before you delete.",
          content: "<p class=\"mb-4\">A Clincoo workspace fills up fast with copies of page-2.html, style-old.css, and images nobody references.</p><p class=\"mb-4\">Search links, CSS url() values, and image src attributes for every delete candidate. If nothing points at it, move it to drafts first when you are unsure.</p><p class=\"mb-4\">Preview home, about, and contact after the cleanup. Watch the network tab for 404s.</p><p class=\"mb-4\">Ask the AI for a list of orphan files. Refuse a mass-delete command without that list.</p><p class=\"mb-4\">Clincoo ships whatever is still in the repo. A clean folder speeds debug and upload.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["struktur"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["struktur"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
