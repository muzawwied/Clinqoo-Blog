// Clincoo Blog — artikel git tambahan 2026-09-20
(function(){
  var extra = [
    {
      id: "git-log-cari-perubahan-lama",
      langs: {
        "id": {
          title: "Cari Perubahan Lama dengan Log, Jangan Mengandalkan Ingatan",
          desc: "Log Git menunjukkan kapan file berubah. Ingatan lemah saat proyek Clincoo sudah berbulan-bulan.",
          content: "<p class=\"mb-4\">Saat bug muncul di halaman yang seminggu lalu masih benar, jangan tebak file mana yang berubah. Buka log, filter nama file, baca pesan commit.</p><p class=\"mb-4\">Cari commit yang menyentuh form, CSS, atau skrip halaman itu. Bandingkan dengan versi sebelumnya sebelum menulis ulang seluruh file.</p><p class=\"mb-4\">Jika AI menawarkan rewrite, minta dulu ringkasan commit terkait. Tolak perubahan yang tidak merujuk file yang benar-benar berubah.</p><p class=\"mb-4\">Catat hash atau tag yang masih aman. Itu titik kembali jika perbaikan baru gagal di pratinjau app.clincoo.buzz.</p><p class=\"mb-4\">Clincoo menyimpan workspace. Log Git adalah peta kecil agar kamu tidak mengulang percobaan yang sudah pernah gagal.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Find Old Changes with the Log, Do Not Trust Memory",
          desc: "The Git log shows when a file changed. Memory fades after months on a Clincoo project.",
          content: "<p class=\"mb-4\">When a bug appears on a page that worked last week, do not guess which file changed. Open the log, filter by file name, and read the commit messages.</p><p class=\"mb-4\">Find the commit that touched the form, CSS, or script on that page. Compare it with the previous version before rewriting the whole file.</p><p class=\"mb-4\">If the AI offers a rewrite, first ask for a summary of related commits. Refuse edits that do not name the file that actually changed.</p><p class=\"mb-4\">Note the hash or tag that is still safe. That is your return point if the new fix fails in the app.clincoo.buzz preview.</p><p class=\"mb-4\">Clincoo stores the workspace. The Git log is a small map so you do not repeat an experiment that already failed.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "git-jangan-force-push-utama",
      langs: {
        "id": {
          title: "Jangan Force Push ke Cabang Utama Situs Clincoo",
          desc: "Force push menghapus jejak yang mungkin masih dipakai. Perbaiki di commit baru, bukan menimpa sejarah.",
          content: "<p class=\"mb-4\">Cabang utama adalah acuan deploy. Menimpa riwayatnya membuat hash lama hilang, tag bingung, dan rekan atau AI kehilangan konteks.</p><p class=\"mb-4\">Jika commit terakhir salah, buat commit perbaikan. Jika file rahasia sempat masuk, rotasi kunci dulu, baru bersihkan dengan prosedur yang disepakati.</p><p class=\"mb-4\">Uji perbaikan di cabang. Gabungkan ke utama hanya setelah pratinjau di app.clincoo.buzz lolos form, tautan, dan tampilan mobile.</p><p class=\"mb-4\">Minta AI menjelaskan dampak sebelum menimpa riwayat. Tolak perintah yang menghapus commit orang lain tanpa cadangan.</p><p class=\"mb-4\">Git di Clincoo menjaga jejak. Jejak yang utuh lebih berharga daripada riwayat yang tampak rapi tapi tidak bisa dipulihkan.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Do Not Force Push the Main Branch of a Clincoo Site",
          desc: "A force push erases history others may still need. Fix with a new commit instead of overwriting the past.",
          content: "<p class=\"mb-4\">Main is the deploy reference. Overwriting its history drops old hashes, confuses tags, and leaves teammates or an AI without context.</p><p class=\"mb-4\">If the last commit is wrong, add a fix commit. If a secret slipped in, rotate the key first, then clean history with an agreed procedure.</p><p class=\"mb-4\">Test the fix on a branch. Merge to main only after the app.clincoo.buzz preview passes the form, links, and mobile view.</p><p class=\"mb-4\">Ask the AI to explain the impact before rewriting history. Refuse a command that deletes someone else’s commit without a backup.</p><p class=\"mb-4\">Git on Clincoo keeps a trail. An intact trail is worth more than a tidy history you cannot restore.</p>",
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
