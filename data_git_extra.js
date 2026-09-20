// Clincoo Blog — artikel git tambahan 2026-09-20
(function(){
  var extra = [
    {
      id: "git-checkout-file-tunggal",
      langs: {
        "id": {
          title: "Kembalikan Satu File Clincoo tanpa Membuang Seluruh Perubahan",
          desc: "Rollback satu file yang rusak lebih aman daripada membuang semua edit workspace hari ini.",
          content: "<p class=\"mb-4\">Satu file CSS yang tertimpa AI tidak berarti seluruh halaman beranda harus dikembalikan. Git bisa mengambil versi lama untuk satu path saja.</p><p class=\"mb-4\">Catat nama file yang benar-benar rusak. Bandingkan isinya dengan versi terakhir yang masih bagus di riwayat.</p><p class=\"mb-4\">Kembalikan hanya file itu. Biarkan file HTML, gambar, dan skrip yang sudah benar tetap di workspace Clincoo.</p><p class=\"mb-4\">Setelah file kembali, pratinjau di editor.clincoo.buzz. Pastikan class yang hilang muncul lagi sebelum commit perbaikan.</p><p class=\"mb-4\">Git berguna saat kamu tepat sasaran. Jangan hukuman seluruh proyek karena satu file.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Restore One Clincoo File without Throwing Away the Whole Day",
          desc: "Rolling back a single broken file is safer than discarding every workspace edit.",
          content: "<p class=\"mb-4\">One CSS file overwritten by AI does not mean the home page must revert. Git can restore a single path.</p><p class=\"mb-4\">Write down the file that is actually broken. Compare it with the last good version in history.</p><p class=\"mb-4\">Restore only that file. Leave the HTML, images, and scripts that already work in the Clincoo workspace.</p><p class=\"mb-4\">After the file returns, preview on editor.clincoo.buzz. Confirm missing classes are back before you commit the fix.</p><p class=\"mb-4\">Git helps when you aim. Do not punish the whole project for one file.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "git-gitignore-file-sementara",
      langs: {
        "id": {
          title: "Abaikan File Sementara Clincoo lewat Gitignore",
          desc: "Cadangan, dump, dan hasil unduhan tidak boleh masuk riwayat. Tulis aturan ignore sebelum commit.",
          content: "<p class=\"mb-4\">Folder workspace sering menumpuk file.zip, salinan index-lama.html, dan log pratinjau. Jika ikut ter-commit, riwayat jadi berisik.</p><p class=\"mb-4\">Buat atau perbarui .gitignore. Masukkan pola file cadangan, arsip, dan folder yang hanya untuk mesin lokal.</p><p class=\"mb-4\">Cek status Git. File yang sudah diabaikan tidak boleh muncul di daftar siap commit.</p><p class=\"mb-4\">Jika file sudah terlanjur masuk riwayat, hapus dari indeks tanpa menghapus salinan kerja, lalu commit perbaikan itu sendiri.</p><p class=\"mb-4\">Clincoo menyimpan proyekmu. Gitignore menjaga pengunjung dan kolaborator tidak mengunduh sampah.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Ignore Temporary Clincoo Files with Gitignore",
          desc: "Backups, dumps, and downloads do not belong in history. Write ignore rules before you commit.",
          content: "<p class=\"mb-4\">A workspace folder often collects zip files, old index copies, and preview logs. If they get committed, history turns noisy.</p><p class=\"mb-4\">Create or update .gitignore. Add patterns for backups, archives, and folders that only exist on your machine.</p><p class=\"mb-4\">Check Git status. Ignored files must not appear in the ready-to-commit list.</p><p class=\"mb-4\">If a file already landed in history, remove it from the index without deleting the working copy, then commit that cleanup alone.</p><p class=\"mb-4\">Clincoo stores your project. Gitignore keeps visitors and teammates from downloading junk.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "git-stash-perubahan-setengah-jadi",
      langs: {
        "id": {
          title: "Simpan Perubahan Setengah Jadi Clincoo dengan Stash",
          desc: "Tugas mendadak tidak harus merusak edit yang belum siap commit. Stash menahan dulu.",
          content: "<p class=\"mb-4\">Kamu sedang merapikan form, lalu harus memperbaiki tautan rusak di beranda. Dua pekerjaan di workspace yang sama mudah tercampur.</p><p class=\"mb-4\">Stash menaruh edit yang belum selesai ke rak sementara. Workspace kembali bersih untuk perbaikan mendesak.</p><p class=\"mb-4\">Selesaikan perbaikan, commit, lalu ambil stash. Baca diff stash sebelum menerapkan, karena konteks halaman mungkin sudah berubah.</p><p class=\"mb-4\">Jangan menumpuk banyak stash tanpa nama. Beri catatan singkat: form kontak atau warna header.</p><p class=\"mb-4\">Di Clincoo, stash adalah jeda, bukan tempat menyimpan pekerjaan selama berminggu-minggu.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Park Half-Finished Clincoo Edits with Stash",
          desc: "An urgent fix should not smash work that is not ready to commit. Stash holds it first.",
          content: "<p class=\"mb-4\">You are cleaning a form, then a broken home-page link needs a fix. Two jobs in one workspace mix easily.</p><p class=\"mb-4\">Stash shelves unfinished edits. The workspace goes clean for the urgent repair.</p><p class=\"mb-4\">Finish the fix, commit, then pop the stash. Read the stash diff before applying it, because the page context may have changed.</p><p class=\"mb-4\">Do not pile unnamed stashes. Add a short note: contact form or header color.</p><p class=\"mb-4\">On Clincoo, stash is a pause, not a place to store work for weeks.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "git-bandingkan-dua-commit",
      langs: {
        "id": {
          title: "Bandingkan Dua Commit Clincoo sebelum Rollback",
          desc: "Rollback buta bisa menghapus perbaikan yang sudah benar. Baca selisih dua titik riwayat dulu.",
          content: "<p class=\"mb-4\">Situs terasa rusak setelah tiga commit. Mengembalikan ke commit lama tanpa membaca selisih bisa menghapus perbaikan akses atau SEO yang sudah jalan.</p><p class=\"mb-4\">Pilih dua titik: versi yang masih bagus dan versi sekarang. Baca file mana yang berubah dan baris mana yang hilang.</p><p class=\"mb-4\">Jika yang rusak hanya satu fungsi, perbaiki fungsi itu. Jangan rewind seluruh proyek.</p><p class=\"mb-4\">Salin potongan diff yang mencurigakan ke asisten AI. Minta penjelasan perubahan, bukan generate ulang file.</p><p class=\"mb-4\">Riwayat Git di workspace Clincoo adalah bukti. Gunakan sebelum menekan undo besar.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Compare Two Clincoo Commits before You Roll Back",
          desc: "A blind rollback can delete fixes that already work. Read the gap between two history points first.",
          content: "<p class=\"mb-4\">The site feels broken after three commits. Reverting to an old commit without reading the gap can wipe access or SEO fixes that already work.</p><p class=\"mb-4\">Pick two points: the last good version and now. Read which files changed and which lines disappeared.</p><p class=\"mb-4\">If only one function broke, fix that function. Do not rewind the whole project.</p><p class=\"mb-4\">Paste the suspicious diff hunk to the AI assistant. Ask for an explanation of the change, not a full file regenerate.</p><p class=\"mb-4\">Git history in a Clincoo workspace is evidence. Use it before a large undo.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "git-tag-rilis-situs-stabil",
      langs: {
        "id": {
          title: "Tandai Rilis Situs Clincoo yang Sudah Stabil",
          desc: "Tag memberi nama pada versi yang aman dipulihkan. Jangan andalkan pesan commit longgar saja.",
          content: "<p class=\"mb-4\">Setelah form, mobile, dan tautan lolos cek, beri tanda pada commit itu. Nama seperti rilis-beranda-20-sep lebih mudah dicari daripada hash.</p><p class=\"mb-4\">Tag bukan pengganti commit rapi. Pesan commit tetap menjelaskan apa yang berubah.</p><p class=\"mb-4\">Jangan menandai setiap percobaan. Tandai titik yang sudah kamu pratinjau di app.clincoo.buzz dan siap dilihat pengunjung.</p><p class=\"mb-4\">Jika rilis berikutnya rusak, kembali ke tag terakhir yang stabil, lalu buat cabang perbaikan dari situ.</p><p class=\"mb-4\">Git di Clincoo menjaga jejak. Tag adalah papan nama di jejak itu.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Tag a Stable Clincoo Site Release",
          desc: "A tag names a version you can restore safely. Do not rely on loose commit messages alone.",
          content: "<p class=\"mb-4\">After the form, mobile view, and links pass review, mark that commit. A name like home-release-20-sep is easier to find than a hash.</p><p class=\"mb-4\">A tag does not replace a clean commit. The commit message still explains what changed.</p><p class=\"mb-4\">Do not tag every experiment. Tag a point you previewed on app.clincoo.buzz and would show a visitor.</p><p class=\"mb-4\">If the next release breaks, return to the last stable tag, then branch a fix from there.</p><p class=\"mb-4\">Git on Clincoo keeps a trail. A tag is the sign on that trail.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["git"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["git"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
