// Clincoo Blog — artikel workflow tambahan 2026-09-21 WIB
(function(){
  var extra = [
    {
      id: "workflow-readme-status-proyek",
      langs: {
        "id": {
          title: "Simpan README Status Proyek Clincoo",
          desc: "Tanpa catatan status, sesi berikutnya mengulang tebakan. Satu file teks cukup.",
          content: "<p class=\"mb-4\">Developer Clincoo sering menutup editor.clincoo.buzz tanpa menulis apa yang sudah selesai. Besok pagi harus membuka sepuluh file lagi.</p><p class=\"mb-4\">Buat README.md di root repo. Tulis tiga baris: halaman yang hidup, halaman yang setengah, dan blokir yang sedang menunggu.</p><p class=\"mb-4\">Perbarui README dalam commit yang sama dengan pekerjaan halaman. Jangan tunda sampai akhir minggu.</p><p class=\"mb-4\">Jika AI menulis ulang README jadi esai, tolak. Minta hanya tiga heading pendek.</p><p class=\"mb-4\">Clincoo menayangkan repo apa adanya. README status adalah peta, bukan dokumentasi resmi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep a Project Status README on Clincoo",
          desc: "Without a status note, the next session starts with guessing. One text file is enough.",
          content: "<p class=\"mb-4\">Clincoo developers often close editor.clincoo.buzz without writing what is done. Tomorrow morning they reopen ten files.</p><p class=\"mb-4\">Add README.md at the repo root. Write three lines: live pages, half-done pages, and the current blocker.</p><p class=\"mb-4\">Update the README in the same commit as the page work. Do not wait until the end of the week.</p><p class=\"mb-4\">If the AI rewrites the README into an essay, refuse. Ask for three short headings only.</p><p class=\"mb-4\">Clincoo ships the repo as it is. A status README is a map, not official docs.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "workflow-daftar-tugas-harian",
      langs: {
        "id": {
          title: "Tulis Daftar Tugas Harian sebelum Buka Editor",
          desc: "Membuka editor tanpa daftar membuat sesi menyimpang. Tiga item sudah cukup.",
          content: "<p class=\"mb-4\">Banyak sesi di editor.clincoo.buzz habis karena hero diubah lagi, padahal form belum diuji.</p><p class=\"mb-4\">Sebelum login, tulis tiga tugas di catatan. Urutkan dari yang memblokir pengunjung.</p><p class=\"mb-4\">Selesai satu item, coret, commit, lalu baru item berikutnya. Jangan campur CSS global di tengah daftar.</p><p class=\"mb-4\">Jika AI menawarkan fitur di luar daftar, simpan ide itu di README. Jangan kerjakan sekarang.</p><p class=\"mb-4\">Clincoo tidak mengatur kalendermu. Daftar pendek menjaga fokus sampai pratinjau bersih.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Write a Daily Task List before You Open the Editor",
          desc: "Opening the editor with no list lets the session drift. Three items are enough.",
          content: "<p class=\"mb-4\">Many sessions in editor.clincoo.buzz vanish because the hero is restyled again while the form is still untested.</p><p class=\"mb-4\">Before you log in, write three tasks in a note. Sort them by what blocks visitors.</p><p class=\"mb-4\">Finish one item, tick it, commit, then start the next. Do not mix global CSS in the middle of the list.</p><p class=\"mb-4\">If the AI offers a feature outside the list, park it in the README. Do not build it now.</p><p class=\"mb-4\">Clincoo will not run your calendar. A short list keeps focus until preview is clean.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "workflow-cadangkan-sebelum-generate-ai",
      langs: {
        "id": {
          title: "Cadangkan File sebelum Minta AI Generate Ulang",
          desc: "Generate tanpa salinan menghapus versi yang sudah lulus tes. Simpan dulu.",
          content: "<p class=\"mb-4\">Satu generate di editor.clincoo.buzz bisa menimpa markup yang baru saja lolos konsol dan form.</p><p class=\"mb-4\">Salin file ke nama .bak atau commit dulu. Baru tempel prompt generate.</p><p class=\"mb-4\">Setelah AI selesai, bandingkan diff. Ambil hanya blok yang diminta, buang sisanya.</p><p class=\"mb-4\">Jika hasilnya lebih buruk, kembalikan cadangan dalam satu commit jelas. Jangan menambal generate yang kacau.</p><p class=\"mb-4\">Clincoo menulis ke repo secara langsung. Cadangan adalah rem, bukan keraguan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Back Up the File before You Ask AI to Regenerate",
          desc: "Generating without a copy wipes a version that already passed tests. Save first.",
          content: "<p class=\"mb-4\">One generate in editor.clincoo.buzz can overwrite markup that just passed the console and the form.</p><p class=\"mb-4\">Copy the file to a .bak name or commit first. Only then paste the generate prompt.</p><p class=\"mb-4\">When the AI finishes, read the diff. Keep only the block you asked for and drop the rest.</p><p class=\"mb-4\">If the result is worse, restore the backup in one clear commit. Do not patch a messy generate.</p><p class=\"mb-4\">Clincoo writes straight to the repo. A backup is a brake, not hesitation.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "workflow-satu-orang-satu-file",
      langs: {
        "id": {
          title: "Satu Orang Menyentuh Satu File pada Satu Waktu",
          desc: "Dua editor di file yang sama saling menimpa. Bagi halaman, bukan baris.",
          content: "<p class=\"mb-4\">Kolaborasi di proyek Clincoo sering tabrakan: A merapikan CSS saat B menempel form di file yang sama.</p><p class=\"mb-4\">Sepakati pemilik file. Jika dua orang butuh halaman itu, pecah jadi partial atau giliran commit.</p><p class=\"mb-4\">Push sebelum istirahat. Pull sebelum mulai. Jangan biarkan salinan lokal menua dua jam.</p><p class=\"mb-4\">Jika AI mengedit file milik rekan, tolak dan sebut nama file yang boleh diubah.</p><p class=\"mb-4\">Clincoo tidak mengunci file. Disiplin satu-orang-satu-file mencegah overwrite diam-diam.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "One Person Touches One File at a Time",
          desc: "Two editors on the same file overwrite each other. Split pages, not lines.",
          content: "<p class=\"mb-4\">Clincoo collabs often collide: A tidies CSS while B pastes a form into the same file.</p><p class=\"mb-4\">Agree on a file owner. If two people need that page, split a partial or take turns committing.</p><p class=\"mb-4\">Push before a break. Pull before you start. Do not let a local copy age for two hours.</p><p class=\"mb-4\">If the AI edits a teammate's file, refuse and name the file that is allowed to change.</p><p class=\"mb-4\">Clincoo does not lock files. One-person-one-file stops silent overwrites.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "workflow-catat-bug-sebelum-perbaiki",
      langs: {
        "id": {
          title: "Catat Bug sebelum Mulai Memperbaiki",
          desc: "Perbaikan tanpa catatan mengulang tes yang sama. Tulis gejala dulu.",
          content: "<p class=\"mb-4\">Developer Clincoo melihat overflow di 375px lalu langsung ubah CSS. Seminggu kemudian bug yang sama kembali.</p><p class=\"mb-4\">Tulis tiga hal: halaman, lebar layar, dan teks error konsol. Simpan di issue atau README.</p><p class=\"mb-4\">Perbaiki satu gejala per commit. Jangan sekalian merapikan warna tombol.</p><p class=\"mb-4\">Setelah lulus pratinjau di editor.clincoo.buzz, tautkan catatan bug ke hash commit.</p><p class=\"mb-4\">Clincoo tidak punya tracker bawaan. Catatan pendek membuat regresi terlihat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Write the Bug Down before You Start Fixing It",
          desc: "A fix with no note repeats the same test. Record the symptom first.",
          content: "<p class=\"mb-4\">Clincoo developers see overflow at 375px and immediately tweak CSS. A week later the same bug returns.</p><p class=\"mb-4\">Write three things: the page, the viewport width, and the console error text. Keep it in an issue or the README.</p><p class=\"mb-4\">Fix one symptom per commit. Do not also restyle the button color.</p><p class=\"mb-4\">After preview passes in editor.clincoo.buzz, link the bug note to the commit hash.</p><p class=\"mb-4\">Clincoo has no built-in tracker. A short note makes regressions visible.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["workflow"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["workflow"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
