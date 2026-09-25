// Clincoo Blog — artikel export tambahan 2026-09-25
(function(){
  var extra = [
    {
      id: "export-cek-index-html-di-zip",
      langs: {
        "id": {
          title: "Cek index.html Ada di Akar Zip Ekspor Clincoo",
          desc: "Zip tanpa index.html di akar membuat host menolak situs. Buka arsip sebelum unggah.",
          content: "<p class=\"mb-4\">Tim mengunggah zip Clincoo, lalu host menampilkan daftar folder karena index.html tertanam di subfolder.</p><p class=\"mb-4\">Buka zip di komputer. Pastikan index.html, aset, dan halaman lain ada di akar, bukan di dalam folder bernama proyek.</p><p class=\"mb-4\">Jika editor membungkus satu folder extra, ekstrak dulu lalu zip ulang isi folder itu di editor.clincoo.buzz workflow kamu.</p><p class=\"mb-4\">Minta AI membuat checklist isi akar zip. Tempel daftar file hasil ekstrak.</p><p class=\"mb-4\">Clincoo mengekspor struktur yang kamu simpan. Akar yang benar membuat host merender situs di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Confirm index.html Sits at the Root of a Clincoo Export Zip",
          desc: "A zip without index.html at the root makes the host reject the site. Open the archive before you upload.",
          content: "<p class=\"mb-4\">A team uploads a Clincoo zip, then the host lists folders because index.html is nested in a subfolder.</p><p class=\"mb-4\">Open the zip on your computer. Confirm index.html, assets, and other pages sit at the root, not inside a project-named folder.</p><p class=\"mb-4\">If the editor wrapped an extra folder, extract first and re-zip the inner files in your editor.clincoo.buzz workflow.</p><p class=\"mb-4\">Ask AI for a root-of-zip checklist. Paste the extracted file list.</p><p class=\"mb-4\">Clincoo exports the structure you saved. A correct root lets the host render the site toward app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "export-aset-path-relatif",
      langs: {
        "id": {
          title: "Ubah Path Aset jadi Relatif sebelum Ekspor Clincoo",
          desc: "Path absolut ke laptop atau file:// pecah setelah zip diunggah ke host.",
          content: "<p class=\"mb-4\">Gambar hero Clincoo memakai src=\"C:/Users/...\" atau file:/// setelah disalin dari pratinjau lokal. Di host, aset 404.</p><p class=\"mb-4\">Ganti ke path relatif seperti ./assets/hero.webp di editor.clincoo.buzz. Cek CSS url() yang sama.</p><p class=\"mb-4\">Jangan andalkan domain preview sebagai path produksi. Ekspor harus berdiri sendiri.</p><p class=\"mb-4\">Minta AI mendaftar src dan url() pada satu file. Kamu yang memastikan file ada di zip.</p><p class=\"mb-4\">Clincoo tidak memperbaiki path saat unduh. Path relatif menjaga aset tampil di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Switch Asset Paths to Relative before a Clincoo Export",
          desc: "Absolute laptop paths or file:// links break after the zip is uploaded to a host.",
          content: "<p class=\"mb-4\">A Clincoo hero uses src=\"C:/Users/...\" or file:/// after a local preview copy. On the host the asset 404s.</p><p class=\"mb-4\">Change it to a relative path such as ./assets/hero.webp in editor.clincoo.buzz. Check CSS url() the same way.</p><p class=\"mb-4\">Do not treat the preview domain as a production path. The export must stand alone.</p><p class=\"mb-4\">Ask AI to list src and url() in one file. You confirm the files exist in the zip.</p><p class=\"mb-4\">Clincoo does not rewrite paths on download. Relative paths keep assets visible on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "export-jangan-lupakan-robots-sitemap",
      langs: {
        "id": {
          title: "Sertakan robots.txt dan sitemap.xml di Ekspor Clincoo",
          desc: "Zip tanpa robots dan sitemap membuat mesin telusur bingung setelah pindah host.",
          content: "<p class=\"mb-4\">Proyek Clincoo diunggah tanpa robots.txt. Host baru memakai default yang memblokir folder aset.</p><p class=\"mb-4\">Salin robots.txt dan sitemap.xml ke akar zip dari editor.clincoo.buzz. Perbarui hostname jika domain berubah.</p><p class=\"mb-4\">Jangan biarkan sitemap menunjuk preview.clincoo atau localhost. URL harus domain publik.</p><p class=\"mb-4\">Minta AI merapikan daftar loc sitemap agar cocok dengan file di zip. Tempel daftar halaman.</p><p class=\"mb-4\">Clincoo tidak menulis robots otomatis saat ekspor. File telusur yang ikut zip menjaga indeks di blog.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Include robots.txt and sitemap.xml in a Clincoo Export",
          desc: "A zip without robots and a sitemap leaves search engines lost after a host move.",
          content: "<p class=\"mb-4\">A Clincoo project is uploaded without robots.txt. The new host uses a default that blocks the assets folder.</p><p class=\"mb-4\">Copy robots.txt and sitemap.xml into the zip root from editor.clincoo.buzz. Update the hostname if the domain changed.</p><p class=\"mb-4\">Do not leave the sitemap pointing at preview.clincoo or localhost. URLs must be the public domain.</p><p class=\"mb-4\">Ask AI to tidy sitemap loc entries so they match files in the zip. Paste the page list.</p><p class=\"mb-4\">Clincoo does not write robots on export. Search files that travel with the zip keep the index healthy on blog.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "export-uji-zip-lokal-sebelum-unggah",
      langs: {
        "id": {
          title: "Uji Zip Ekspor Clincoo di Server Lokal sebelum Unggah",
          desc: "Membuka index.html lewat file:// menyembunyikan path rusak. Sajikan folder dulu.",
          content: "<p class=\"mb-4\">Setelah unduh, orang membuka index.html langsung. Modul JS dan fetch gagal diam-diam.</p><p class=\"mb-4\">Ekstrak zip, lalu sajikan folder dengan server statis sederhana. Buka di browser seperti pengunjung app.clincoo.buzz.</p><p class=\"mb-4\">Klik tautan, cek konsol, dan pastikan gambar serta CSS termuat dari path relatif.</p><p class=\"mb-4\">Minta AI menjelaskan error konsol setelah uji lokal. Tempel jejak lengkap, bukan screenshot saja.</p><p class=\"mb-4\">Clincoo tidak menguji zip untukmu. Uji lokal menghemat rollback setelah unggah ke host.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test a Clincoo Export Zip on a Local Server before Upload",
          desc: "Opening index.html via file:// hides broken paths. Serve the folder first.",
          content: "<p class=\"mb-4\">After download, people open index.html directly. JS modules and fetch fail quietly.</p><p class=\"mb-4\">Extract the zip, then serve the folder with a simple static server. Open it in a browser like a visitor on app.clincoo.buzz.</p><p class=\"mb-4\">Click links, check the console, and confirm images and CSS load from relative paths.</p><p class=\"mb-4\">Ask AI to explain console errors after the local test. Paste the full trace, not only a screenshot.</p><p class=\"mb-4\">Clincoo does not test the zip for you. A local test saves a rollback after you upload to the host.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "export-catat-versi-tanggal-ekspor",
      langs: {
        "id": {
          title: "Catat Tanggal dan Versi pada Setiap Ekspor Clincoo",
          desc: "Zip tanpa label membuat tim mengunggah salinan lama. Nama berkas harus berbicara.",
          content: "<p class=\"mb-4\">Folder Unduhan penuh proyek.zip. Tim tidak tahu zip mana yang terakhir dari editor.clincoo.buzz.</p><p class=\"mb-4\">Ganti nama jadi proyek-2026-09-25.zip atau tambah berkas VERSION.txt berisi tanggal, slug halaman, dan catatan singkat.</p><p class=\"mb-4\">Jangan menimpa zip lama dengan nama yang sama sebelum cadangan dipindah.</p><p class=\"mb-4\">Minta AI merancang satu baris VERSION.txt. Tempel daftar halaman yang ikut rilis.</p><p class=\"mb-4\">Clincoo tidak menandai versi zip otomatis. Label yang jelas menjaga rilis ke app.clincoo.buzz tetap terurut.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Record a Date and Version on Every Clincoo Export",
          desc: "An unlabeled zip lets a team upload an old copy. The filename should speak.",
          content: "<p class=\"mb-4\">The Downloads folder is full of project.zip files. The team cannot tell which zip last left editor.clincoo.buzz.</p><p class=\"mb-4\">Rename it to project-2026-09-25.zip or add a VERSION.txt with the date, page slugs, and a short note.</p><p class=\"mb-4\">Do not overwrite an old zip with the same name before the backup is moved.</p><p class=\"mb-4\">Ask AI to draft one VERSION.txt line. Paste the list of pages in the release.</p><p class=\"mb-4\">Clincoo does not stamp zip versions for you. A clear label keeps releases to app.clincoo.buzz in order.</p>",
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
