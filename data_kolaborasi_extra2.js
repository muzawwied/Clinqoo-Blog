// Clincoo Blog — artikel kolaborasi tambahan 2026-09-28b
(function(){
  var extra = [
    {
      id: "kolaborasi-satu-kanal-umpan-balik",
      langs: {
        "id": {
          title: "Satukan Umpan Balik Tim Clincoo di Satu Kanal",
          desc: "Masukan tersebar di chat, email, dan komentar file. Satu kanal membuat keputusan bisa ditelusuri.",
          content: "<p class=\"mb-4\">Tim Clincoo menerima revisi di tiga tempat. Tidak ada yang tahu versi mana yang final.</p><p class=\"mb-4\">Pilih satu kanal: komentar di file editor.clincoo.buzz atau satu thread tetap. Arahkan semua masukan ke situ.</p><p class=\"mb-4\">Jangan balas keputusan desain di DM. Salin ringkasan ke kanal bersama agar orang baru bisa membaca.</p><p class=\"mb-4\">Minta AI merangkum satu kanal jadi daftar keputusan. Tempel thread, bukan lima sumber campur.</p><p class=\"mb-4\">Clincoo menyimpan file, bukan percakapan. Satu kanal menjaga app.clincoo.buzz tidak ditarik dua arah.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Put Clincoo Team Feedback on One Channel",
          desc: "Notes spread across chat, email, and file comments. One channel makes decisions traceable.",
          content: "<p class=\"mb-4\">A Clincoo team gets revisions in three places. Nobody knows which version is final.</p><p class=\"mb-4\">Pick one channel: comments on the file in editor.clincoo.buzz or one standing thread. Send all feedback there.</p><p class=\"mb-4\">Do not settle design in DMs. Copy the summary to the shared channel so a new person can read it.</p><p class=\"mb-4\">Ask AI to turn one channel into a decision list. Paste the thread, not five mixed sources.</p><p class=\"mb-4\">Clincoo stores files, not conversations. One channel keeps app.clincoo.buzz from being pulled two ways.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "kolaborasi-batas-waktu-review",
      langs: {
        "id": {
          title: "Tetapkan Batas Waktu Review Draft Clincoo",
          desc: "Review tanpa tenggat menahan rilis. Sepakati jam, bukan 'nanti dilihat'.",
          content: "<p class=\"mb-4\">Draft Clincoo menunggu review tiga hari. Pemilik sudah pindah ke file lain dan konteks hilang.</p><p class=\"mb-4\">Saat menyerahkan di editor.clincoo.buzz, tulis tenggat: 'tinjau sebelum besok 16.00 WIB'. Jika lewat, pemilik boleh rilis dengan catatan.</p><p class=\"mb-4\">Jangan antre lima review sekaligus pada satu orang. Batasi dua draft terbuka.</p><p class=\"mb-4\">Minta AI merancang SLA review singkat. Tempel ukuran tim, bukan seluruh backlog.</p><p class=\"mb-4\">Clincoo tidak mengantri review otomatis. Tenggat menjaga app.clincoo.buzz bergerak.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set a Deadline for Clincoo Draft Review",
          desc: "Review without a due time stalls the release. Agree on a clock, not 'later'.",
          content: "<p class=\"mb-4\">A Clincoo draft waits three days for review. The owner has moved to another file and context is gone.</p><p class=\"mb-4\">When handing off in editor.clincoo.buzz, write a deadline: 'review before tomorrow 16:00 WIB'. If it slips, the owner may ship with a note.</p><p class=\"mb-4\">Do not queue five reviews on one person. Cap two open drafts.</p><p class=\"mb-4\">Ask AI for a short review SLA. Paste team size, not the whole backlog.</p><p class=\"mb-4\">Clincoo does not queue reviews for you. A deadline keeps app.clincoo.buzz moving.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["kolaborasi"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["kolaborasi"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
