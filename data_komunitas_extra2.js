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
