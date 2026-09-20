// Clincoo Blog — artikel komunitas tambahan 2026-09-20
(function(){
  var extra = [
    {
      id: "komunitas-tandai-versi-pratinjau",
      langs: {
        "id": {
          title: "Tandai Versi Pratinjau supaya Tim Tidak Review File Lama",
          desc: "URL deploy Clincoo tanpa label versi membuat masukan menumpuk di rilis yang sudah diganti.",
          content: "<p class=\"mb-4\">Seseorang mengomentari hero kemarin, padahal kamu sudah ganti foto pagi ini. Tanpa label, utas review bercampur antar versi.</p><p class=\"mb-4\">Tulis nomor singkat di kanal proyek: pratinjau v3, tanggal, dan URL subdomain. Satu baris lebih aman daripada mengandalkan urutan chat.</p><p class=\"mb-4\">Jika memakai beberapa deploy, jangan kirim tautan tanpa menyebut mana yang aktif. Orang nonteknis tidak membuka riwayat commit.</p><p class=\"mb-4\">Minta AI menambahkan teks versi kecil di footer pratinjau jika berguna, lalu hapus sebelum rilis publik.</p><p class=\"mb-4\">Clincoo mengganti file saat kamu deploy ulang. Tim hanya bisa mengikuti jika kamu menandai versi dengan jelas.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Label Preview Versions so the Team Does Not Review Old Files",
          desc: "A Clincoo deploy URL with no version label piles feedback onto a release you already replaced.",
          content: "<p class=\"mb-4\">Someone comments on yesterday's hero after you already swapped the photo this morning. Without a label, the review thread mixes versions.</p><p class=\"mb-4\">Write a short number in the project channel: preview v3, the date, and the subdomain URL. One line is safer than trusting chat order.</p><p class=\"mb-4\">If you keep several deploys, do not send a link without saying which one is active. Non-technical people will not open commit history.</p><p class=\"mb-4\">Ask the AI to add a tiny version line in the preview footer if it helps, then remove it before the public release.</p><p class=\"mb-4\">Clincoo replaces files when you deploy again. The team can follow only if you label the version clearly.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "komunitas-tulis-langkah-repro-bug",
      langs: {
        "id": {
          title: "Tulis Langkah Repro saat Melapor Bug ke Tim",
          desc: "Tangkapapan tanpa urutan langkah membuat reviewer Clincoo mengulang tebakan. Cantumkan URL, lebar layar, dan apa yang kamu klik.",
          content: "<p class=\"mb-4\">Pesan \"tombolnya rusak\" tidak bisa ditindak. Orang lain tidak tahu halaman, lebar layar, atau langkah sebelum error.</p><p class=\"mb-4\">Tulis urutan: buka URL pratinjau, lebar ponsel, ketuk menu, lalu tombol kirim. Tambah teks error konsol jika ada.</p><p class=\"mb-4\">Satu bug satu utas. Jangan campur permintaan warna hero di laporan form yang gagal.</p><p class=\"mb-4\">Minta AI merapikan catatan repro, bukan menebak perbaikan di banyak file.</p><p class=\"mb-4\">Clincoo menampilkan apa yang ada di workspace. Tim hanya bisa memperbaiki apa yang bisa mereka ulangi.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Write Repro Steps When You Report a Bug to the Team",
          desc: "A screenshot with no steps makes Clincoo reviewers guess. Include the URL, viewport width, and what you clicked.",
          content: "<p class=\"mb-4\">A note that says \"the button is broken\" cannot be acted on. Other people do not know the page, the width, or the steps before the error.</p><p class=\"mb-4\">Write the sequence: open the preview URL, phone width, tap the menu, then the submit button. Add the console error text if you have it.</p><p class=\"mb-4\">One bug per thread. Do not mix a hero color request into a failed-form report.</p><p class=\"mb-4\">Ask the AI to tidy the repro notes, not to guess fixes across many files.</p><p class=\"mb-4\">Clincoo shows what is in the workspace. The team can only fix what they can repeat.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["komunitas"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["komunitas"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
