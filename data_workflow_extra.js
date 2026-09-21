// Clincoo Blog — artikel workflow tambahan 2026-09-21
(function(){
  var extra = [
    {
      id: "workflow-checklist-sebelum-push",
      langs: {
        "id": {
          title: "Checklist Pendek sebelum Push ke Clincoo",
          desc: "Push tanpa cek membuat pratinjau rusak. Tiga menit daftar periksa menghemat rollback.",
          content: "<p class=\"mb-4\">Developer Clincoo sering push begitu file tersimpan. Error konsol, tautan rusak, atau overflow mobile baru terlihat setelah subdomain terbit.</p><p class=\"mb-4\">Sebelum push: buka pratinjau editor.clincoo.buzz, cek konsol, kirim form kosong, dan sempitkan jendela ke 375px.</p><p class=\"mb-4\">Jika AI baru mengubah file, baca diff. Tolak perubahan di file yang tidak disebut di tugas.</p><p class=\"mb-4\">Tulis pesan commit yang menyebut halaman. Jangan \\\"update\\\" tanpa nama file.</p><p class=\"mb-4\">Clincoo menayangkan repo apa adanya. Checklist pendek adalah gerbang, bukan formalitas.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "A Short Checklist before You Push to Clincoo",
          desc: "Pushing without a check breaks preview. Three minutes of checklist saves a rollback.",
          content: "<p class=\"mb-4\">Clincoo developers often push as soon as a file is saved. Console errors, dead links, or mobile overflow show up only after the subdomain ships.</p><p class=\"mb-4\">Before you push: open the editor.clincoo.buzz preview, check the console, submit an empty form, and shrink the window to 375px.</p><p class=\"mb-4\">If the AI just changed a file, read the diff. Refuse edits in files the task did not name.</p><p class=\"mb-4\">Write a commit message that names the page. Do not use \\\"update\\\" with no file name.</p><p class=\"mb-4\">Clincoo ships the repo as it is. A short checklist is a gate, not ceremony.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "workflow-cabang-per-fitur",
      langs: {
        "id": {
          title: "Satu Cabang per Fitur di Proyek Clincoo",
          desc: "Semua eksperimen di cabang utama membuat situs hidup tidak stabil. Pisahkan fitur.",
          content: "<p class=\"mb-4\">Menumpuk hero baru, form, dan percobaan CSS di cabang utama membuat rollback menyentuh pekerjaan yang sudah lulus tes.</p><p class=\"mb-4\">Buat cabang dari utama untuk satu fitur. Selesai di editor.clincoo.buzz, uji pratinjau, baru gabungkan.</p><p class=\"mb-4\">Jika AI menyarankan edit di banyak file lintas fitur, pecah permintaan. Satu cabang, satu hasil yang bisa diukur.</p><p class=\"mb-4\">Hapus cabang setelah gabung agar daftar tidak membingungkan rekan atau asisten berikutnya.</p><p class=\"mb-4\">Clincoo mengikuti cabang yang kamu deploy. Isolasi fitur menjaga situs hidup tetap tenang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "One Branch per Feature on a Clincoo Project",
          desc: "Every experiment on main makes the live site unstable. Split features.",
          content: "<p class=\"mb-4\">Piling a new hero, a form, and CSS experiments on main makes rollback touch work that already passed tests.</p><p class=\"mb-4\">Branch from main for one feature. Finish it in editor.clincoo.buzz, test the preview, then merge.</p><p class=\"mb-4\">If the AI suggests edits across many files and features, split the request. One branch, one measurable result.</p><p class=\"mb-4\">Delete the branch after the merge so the list does not confuse the next teammate or assistant.</p><p class=\"mb-4\">Clincoo follows the branch you deploy. Isolating a feature keeps the live site calm.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "workflow-catat-keputusan-desain",
      langs: {
        "id": {
          title: "Catat Keputusan Desain di Repo Clincoo",
          desc: "Alasan spacing dan warna hilang setelah seminggu. Tulis keputusan singkat di catatan proyek.",
          content: "<p class=\"mb-4\">Saat AI atau rekan mengubah padding hero, kamu lupa kenapa 32px dipilih. Diskusi chat tidak ikut ke repo.</p><p class=\"mb-4\">Tambah file catatan pendek atau komentar di CSS: keputusan, tanggal, dan halaman yang terdampak.</p><p class=\"mb-4\">Jika asisten menawarkan palet baru, tempel keputusan lama. Tolak perubahan yang tidak menjelaskan alasan.</p><p class=\"mb-4\">Pratinjau di app.clincoo.buzz setelah menyalin catatan. Pastikan catatan tidak tampil di halaman publik.</p><p class=\"mb-4\">Clincoo menyimpan workspace. Keputusan tertulis menghemat putaran yang sama minggu depan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Write Design Decisions in the Clincoo Repo",
          desc: "Why you chose spacing and color fades in a week. Keep a short decision note.",
          content: "<p class=\"mb-4\">When an AI or teammate changes hero padding, you forget why 32px was chosen. Chat threads do not live in the repo.</p><p class=\"mb-4\">Add a short note file or a CSS comment: the decision, the date, and the page it affects.</p><p class=\"mb-4\">If the assistant offers a new palette, paste the old decision. Refuse a change that does not explain why.</p><p class=\"mb-4\">Preview on app.clincoo.buzz after you add the note. Make sure the note does not appear on a public page.</p><p class=\"mb-4\">Clincoo stores the workspace. Written decisions save you from the same loop next week.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "workflow-pratinjau-sebelum-gabung",
      langs: {
        "id": {
          title: "Gabung Cabang hanya setelah Pratinjau Lolos",
          desc: "Merge tanpa melihat subdomain menanam bug ke utama. Pratinjau dulu, gabung kemudian.",
          content: "<p class=\"mb-4\">Lolos di editor lokal belum berarti lolos di subdomain Clincoo. Path aset, form, dan cache berbeda.</p><p class=\"mb-4\">Buka pratinjau app.clincoo.buzz untuk cabang itu. Cek hero, tautan, form, dan lebar 375px.</p><p class=\"mb-4\">Jika AI bilang sudah beres, minta daftar tes yang dijalankan. Jangan gabung hanya karena tidak ada error linter.</p><p class=\"mb-4\">Catat hash commit yang lolos. Itu titik banding jika merge berikutnya merusak halaman.</p><p class=\"mb-4\">Clincoo menayangkan hasil gabungan. Pratinjau adalah tes terakhir, bukan langkah opsional.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Merge a Branch only after Preview Passes",
          desc: "Merging without the subdomain plants bugs on main. Preview first, then merge.",
          content: "<p class=\"mb-4\">Passing in the local editor does not mean passing on a Clincoo subdomain. Asset paths, forms, and cache differ.</p><p class=\"mb-4\">Open the app.clincoo.buzz preview for that branch. Check the hero, links, form, and 375px width.</p><p class=\"mb-4\">If the AI says it is done, ask for the tests it ran. Do not merge only because the linter is quiet.</p><p class=\"mb-4\">Note the commit hash that passed. That is the comparison point if the next merge breaks a page.</p><p class=\"mb-4\">Clincoo ships the merge result. Preview is the last test, not an optional step.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "workflow-jangan-edit-langsung-produksi",
      langs: {
        "id": {
          title: "Jangan Edit Langsung File yang Sudah Tayang",
          desc: "Ubah produksi tanpa cabang menghapus jejak. Kerjakan di salinan, lalu ganti dengan sadar.",
          content: "<p class=\"mb-4\">Mengedit index.html yang sedang tayang di editor.clincoo.buzz terasa cepat, sampai pengunjung melihat layout pecah.</p><p class=\"mb-4\">Salin halaman atau kerjakan di cabang. Setelah tes, ganti file produksi dalam satu commit jelas.</p><p class=\"mb-4\">Jika AI menempel perubahan ke file hidup, minta versi cadangan dulu. Simpan hash terakhir yang aman.</p><p class=\"mb-4\">Form dan skrip analitik mudah rusak saat edit langsung. Uji kirim dan konsol sebelum menganggap selesai.</p><p class=\"mb-4\">Clincoo tidak menahan tanganmu. Alur salin-uji-ganti melindungi pengunjung dan dirimu.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Edit a Live File in Place",
          desc: "Changing production without a branch erases the trail. Work on a copy, then swap on purpose.",
          content: "<p class=\"mb-4\">Editing a live index.html in editor.clincoo.buzz feels fast until visitors see a broken layout.</p><p class=\"mb-4\">Copy the page or work on a branch. After tests, replace the production file in one clear commit.</p><p class=\"mb-4\">If the AI pastes into a live file, ask for a backup first. Keep the last safe hash.</p><p class=\"mb-4\">Forms and analytics scripts break easily during in-place edits. Test submit and the console before you call it done.</p><p class=\"mb-4\">Clincoo will not hold your hand. Copy, test, then swap — that flow protects visitors and you.</p>",
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
