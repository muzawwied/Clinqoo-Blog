// Clincoo Blog — Extra struktur
(function(){
  var extra = [
    {
      id: "struktur-cache-bust-nama-aset",
      langs: {
        "id": {
          title: "Versi Nama File CSS dan JS Clincoo Saat Isi Berubah",
          desc: "Browser menahan style lama. Ganti nama aset atau query versi setelah edit penting.",
          content: "<p class=\"mb-4\">Setelah memperbaiki CSS, pengunjung masih melihat layout rusak karena cache style.css lama.</p><p class=\"mb-4\">Pakai nama style.v2.css atau style.css?v=20260922. Samakan tautan di semua halaman.</p><p class=\"mb-4\">Jangan menumpuk lima versi sekaligus. Hapus file lama setelah semua tautan pindah.</p><p class=\"mb-4\">Minta AI mencari setiap href dan src yang masih menunjuk nama lama.</p><p class=\"mb-4\">Clincoo menyajikan file statis. Nama versi adalah cara sederhana memaksa unduhan baru.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Version Clincoo CSS and JS File Names When the Contents Change",
          desc: "Browsers keep old styles. Rename assets or add a version query after important edits.",
          content: "<p class=\"mb-4\">After a CSS fix, visitors still see a broken layout because the old style.css is cached.</p><p class=\"mb-4\">Use style.v2.css or style.css?v=20260922. Match the link on every page.</p><p class=\"mb-4\">Do not pile up five versions. Delete the old file after every link moves.</p><p class=\"mb-4\">Ask the AI to find every href and src that still points at the old name.</p><p class=\"mb-4\">Clincoo serves static files. A versioned name is a simple way to force a fresh download.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "struktur-komponen-ulang-satu-folder",
      langs: {
        "id": {
          title: "Kumpulkan Potongan HTML Clincoo yang Dipakai Ulang ke Satu Folder",
          desc: "Header yang disalin ke lima halaman cepat menyimpang. Satu folder komponen lebih aman.",
          content: "<p class=\"mb-4\">Header, footer, dan CTA sering di-copy paste. Satu halaman dapat patch, yang lain tertinggal.</p><p class=\"mb-4\">Buat folder components/ berisi header.html, footer.html, dan catatan cara menempel.</p><p class=\"mb-4\">Jika editor belum mendukung include, tempel manual dari file itu. Jangan edit header di lima tempat.</p><p class=\"mb-4\">Minta AI membandingkan header di semua halaman dan daftar perbedaannya dulu.</p><p class=\"mb-4\">Clincoo menayangkan HTML final. Satu sumber komponen menekan drift.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep Reused Clincoo HTML Snippets in One Components Folder",
          desc: "A header copied across five pages drifts fast. One components folder is safer.",
          content: "<p class=\"mb-4\">Header, footer, and CTA blocks get copied. One page receives a patch; the others lag.</p><p class=\"mb-4\">Create a components/ folder with header.html, footer.html, and a note on how to paste.</p><p class=\"mb-4\">If the editor has no include yet, paste from that file. Do not edit the header in five places.</p><p class=\"mb-4\">Ask the AI to compare headers across pages and list differences first.</p><p class=\"mb-4\">Clincoo ships the final HTML. One component source slows drift.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "struktur-abaikan-draf-dan-rahasia",
      langs: {
        "id": {
          title: "Abaikan Folder Draf dan Berkas Rahasia dari Unggahan Clincoo",
          desc: "notes.md, .env, dan draf tidak boleh ikut deploy. Daftar abaikan sebelum push.",
          content: "<p class=\"mb-4\">Workspace Clincoo sering berisi catatan klien, token, dan page-draft.html. Semua itu ikut terunggah jika tidak disaring.</p><p class=\"mb-4\">Tulis daftar abaikan: drafts/, *.env, notes.md, .DS_Store. Pastikan proses deploy menghormatinya.</p><p class=\"mb-4\">Cek isi zip atau repo sebelum rilis. Hapus file yang tidak perlu publik.</p><p class=\"mb-4\">Minta AI meninjau pohon folder dan menandai kandidat privat. Jangan minta hapus massal tanpa daftar.</p><p class=\"mb-4\">Clincoo menayangkan apa yang kamu unggah. Filter draf adalah bagian dari rilis, bukan kerja tambahan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep Draft Folders and Secret Files out of a Clincoo Upload",
          desc: "notes.md, .env, and drafts must not ship. Write an ignore list before you push.",
          content: "<p class=\"mb-4\">A Clincoo workspace often holds client notes, tokens, and page-draft.html. They all upload if you never filter.</p><p class=\"mb-4\">Write an ignore list: drafts/, *.env, notes.md, .DS_Store. Make sure the deploy step honors it.</p><p class=\"mb-4\">Inspect the zip or repo before release. Remove files that should stay private.</p><p class=\"mb-4\">Ask the AI to review the tree and mark private candidates. Do not request a mass delete without that list.</p><p class=\"mb-4\">Clincoo ships what you upload. Filtering drafts is part of release, not extra work.</p>",
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
