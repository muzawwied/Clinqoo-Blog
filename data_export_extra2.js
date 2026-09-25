// Clincoo Blog — artikel export tambahan 2026-09-25 run2
(function(){
  var extra = [
    {
      id: "export-hapus-file-sementara-dari-zip",
      langs: {
        "id": {
          title: "Hapus File Sementara dari Zip Ekspor Clincoo",
          desc: "Berkas .DS_Store, Thumbs.db, dan cadangan editor membuat zip kotor dan host bingung.",
          content: "<p class=\"mb-4\">Zip Clincoo berisi .DS_Store, file~ cadangan, dan folder __MACOSX. Host menampilkan sampah di daftar file.</p><p class=\"mb-4\">Ekstrak zip, hapus berkas sistem dan cadangan, lalu zip ulang isi akar dari alur editor.clincoo.buzz kamu.</p><p class=\"mb-4\">Jangan mengunggah folder .git atau cache pratinjau. Ekspor publik hanya butuh HTML, CSS, JS, dan aset.</p><p class=\"mb-4\">Minta AI mendaftar nama berkas yang aman dihapus. Tempel daftar isi zip, bukan tebakan.</p><p class=\"mb-4\">Clincoo mengekspor apa yang ada di proyek. Zip bersih menjaga unggahan ke app.clincoo.buzz rapi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Remove Temporary Files from a Clincoo Export Zip",
          desc: ".DS_Store, Thumbs.db, and editor backups make a dirty zip and confuse the host.",
          content: "<p class=\"mb-4\">A Clincoo zip contains .DS_Store, backup file~ names, and a __MACOSX folder. The host lists junk.</p><p class=\"mb-4\">Extract the zip, delete system and backup files, then re-zip the root from your editor.clincoo.buzz flow.</p><p class=\"mb-4\">Do not upload a .git folder or preview cache. A public export only needs HTML, CSS, JS, and assets.</p><p class=\"mb-4\">Ask AI to list filenames that are safe to delete. Paste the zip listing, not a guess.</p><p class=\"mb-4\">Clincoo exports what sits in the project. A clean zip keeps the upload to app.clincoo.buzz tidy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "export-sertakan-404-html",
      langs: {
        "id": {
          title: "Sertakan 404.html di Akar Ekspor Clincoo",
          desc: "Host tanpa halaman 404 menampilkan daftar folder saat slug salah. Siapkan halaman ramah.",
          content: "<p class=\"mb-4\">Pengunjung mengetik slug lama setelah pindah host. Tanpa 404.html, server menampilkan indeks folder.</p><p class=\"mb-4\">Salin 404.html ke akar zip dari editor.clincoo.buzz. Tautkan kembali ke beranda dan sitemap.</p><p class=\"mb-4\">Jangan biarkan 404 meniru status 200. Mesin telusur harus tahu halaman hilang.</p><p class=\"mb-4\">Minta AI merapikan teks 404 dan daftar tautan penting. Tempel menu situs kamu.</p><p class=\"mb-4\">Clincoo tidak menulis 404 otomatis saat unduh. Halaman hilang yang jelas menjaga UX di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Include 404.html at the Root of a Clincoo Export",
          desc: "A host without a 404 page lists folders when a slug is wrong. Prepare a friendly page.",
          content: "<p class=\"mb-4\">A visitor types an old slug after a host move. Without 404.html the server lists the folder.</p><p class=\"mb-4\">Copy 404.html into the zip root from editor.clincoo.buzz. Link back to home and the sitemap.</p><p class=\"mb-4\">Do not let the 404 mimic a 200 status. Search engines must know the page is gone.</p><p class=\"mb-4\">Ask AI to tidy the 404 copy and key links. Paste your site menu.</p><p class=\"mb-4\">Clincoo does not write a 404 on download. A clear missing-page keeps UX healthy on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "export-cek-ukuran-zip-sebelum-unggah",
      langs: {
        "id": {
          title: "Cek Ukuran Zip Ekspor Clincoo sebelum Unggah",
          desc: "Zip ratusan megabyte biasanya menyimpan video mentah atau node_modules. Ukur dulu.",
          content: "<p class=\"mb-4\">Unggahan Clincoo gagal di tengah karena zip 400 MB. Isinya video yang seharusnya tautan, bukan berkas.</p><p class=\"mb-4\">Lihat ukuran zip di komputer. Jika jauh di atas aset halaman, buka arsip dan cari folder berat.</p><p class=\"mb-4\">Kompres gambar di editor.clincoo.buzz sebelum ekspor ulang. Pindahkan video besar ke host media.</p><p class=\"mb-4\">Minta AI memperkirakan folder mana yang membesarkan zip. Tempel daftar ukuran berkas.</p><p class=\"mb-4\">Clincoo tidak memotong zip saat unduh. Ukuran wajar membuat unggahan ke app.clincoo.buzz selesai.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Check Clincoo Export Zip Size before You Upload",
          desc: "A zip of hundreds of megabytes usually hides raw video or node_modules. Measure first.",
          content: "<p class=\"mb-4\">A Clincoo upload dies mid-way because the zip is 400 MB. It holds video that should be a link, not a file.</p><p class=\"mb-4\">Look at the zip size on disk. If it dwarfs the page assets, open the archive and find heavy folders.</p><p class=\"mb-4\">Compress images in editor.clincoo.buzz before you export again. Move large video to a media host.</p><p class=\"mb-4\">Ask AI which folders likely inflate the zip. Paste a file-size listing.</p><p class=\"mb-4\">Clincoo does not shrink the zip on download. A sane size lets the upload to app.clincoo.buzz finish.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "export-abaikan-node-modules-dari-ekspor",
      langs: {
        "id": {
          title: "Jangan Masukkan node_modules ke Ekspor Clincoo",
          desc: "Folder dependensi membangun situs, bukan yang disajikan host statis. Keluarkan dari zip.",
          content: "<p class=\"mb-4\">Zip Clincoo memuat node_modules. Host statis tidak menjalankan npm; folder itu hanya menambah risiko dan ukuran.</p><p class=\"mb-4\">Ekspor hanya hasil bangun: HTML, CSS, JS bundel, dan aset dari editor.clincoo.buzz.</p><p class=\"mb-4\">Simpan package.json di repo terpisah jika perlu, bukan di zip produksi.</p><p class=\"mb-4\">Minta AI membedakan berkas sumber dan berkas yang wajib live. Tempel pohon folder.</p><p class=\"mb-4\">Clincoo menayangkan situs statis. Zip tanpa node_modules menjaga app.clincoo.buzz tetap ringan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep node_modules out of a Clincoo Export",
          desc: "Dependency folders build the site; a static host does not serve them. Leave them out of the zip.",
          content: "<p class=\"mb-4\">A Clincoo zip includes node_modules. A static host does not run npm; the folder only adds risk and weight.</p><p class=\"mb-4\">Export only the build output: HTML, CSS, bundled JS, and assets from editor.clincoo.buzz.</p><p class=\"mb-4\">Keep package.json in a separate repo if you need it, not in the production zip.</p><p class=\"mb-4\">Ask AI to separate source files from files that must go live. Paste the folder tree.</p><p class=\"mb-4\">Clincoo serves a static site. A zip without node_modules keeps app.clincoo.buzz light.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "export-daftar-file-wajib-setelah-ekstrak",
      langs: {
        "id": {
          title: "Buat Daftar File Wajib setelah Ekstrak Ekspor Clincoo",
          desc: "Tanpa checklist, halaman atau aset mudah tertinggal saat zip dipindah antar orang.",
          content: "<p class=\"mb-4\">Satu orang mengekstrak zip Clincoo, orang lain mengunggah. Favicon dan halaman legal hilang tanpa sadar.</p><p class=\"mb-4\">Tulis MANIFEST.txt berisi index.html, 404.html, robots.txt, sitemap.xml, logo, dan folder aset.</p><p class=\"mb-4\">Centang daftar itu di komputer sebelum unggah dari alur editor.clincoo.buzz.</p><p class=\"mb-4\">Minta AI menyusun manifest dari daftar folder. Tempel output ls atau tree.</p><p class=\"mb-4\">Clincoo tidak mencetak manifest otomatis. Daftar wajib menjaga rilis ke app.clincoo.buzz lengkap.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Make a Required-File List after You Extract a Clincoo Export",
          desc: "Without a checklist, a page or asset is easy to leave behind when the zip changes hands.",
          content: "<p class=\"mb-4\">One person extracts a Clincoo zip, another uploads it. The favicon and legal pages vanish unnoticed.</p><p class=\"mb-4\">Write MANIFEST.txt listing index.html, 404.html, robots.txt, sitemap.xml, the logo, and the assets folder.</p><p class=\"mb-4\">Tick that list on disk before upload from your editor.clincoo.buzz flow.</p><p class=\"mb-4\">Ask AI to draft the manifest from a folder listing. Paste ls or tree output.</p><p class=\"mb-4\">Clincoo does not print a manifest for you. A required-file list keeps the release to app.clincoo.buzz complete.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["export"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["export"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
