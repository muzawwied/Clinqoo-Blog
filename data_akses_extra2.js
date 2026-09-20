// Clincoo Blog — artikel akses tambahan 2026-09-20
(function(){
  var extra = [
    {
      id: "akses-pesan-error-form-jelas",
      langs: {
        "id": {
          title: "Tulis Pesan Error Form yang Bisa Dibaca, Bukan Warna Saja",
          desc: "Border merah tanpa teks gagal bagi banyak pengunjung. Jelaskan field mana yang salah di halaman Clincoo.",
          content: "<p class=\"mb-4\">Validasi visual yang hanya mengubah warna input menyisakan tebakan. Pengunjung buta warna, pembaca layar, dan orang yang zoom tinggi butuh kalimat.</p><p class=\"mb-4\">Pasang teks error di dekat field, tautkan dengan aria-describedby atau id yang sama. Hindari alert() yang hilang sebelum sempat dibaca.</p><p class=\"mb-4\">Tulis apa yang harus diperbaiki: format email, nomor yang terlalu pendek, kotak wajib yang kosong. Jangan hanya tulis Error.</p><p class=\"mb-4\">Jika AI menambah validasi, batasi ke satu form. Tolak pustaka besar jika pengecekan HTML required sudah cukup.</p><p class=\"mb-4\">Clincoo menayangkan markup form yang kamu simpan. Pesan yang jelas adalah akses, bukan dekorasi.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Write Form Error Messages People Can Read, Not Color Alone",
          desc: "A red border with no text fails many visitors. Name the field that is wrong on the Clincoo page.",
          content: "<p class=\"mb-4\">Visual validation that only changes an input color leaves people guessing. Color-blind visitors, screen reader users, and people who zoom need a sentence.</p><p class=\"mb-4\">Place the error text next to the field and wire it with aria-describedby or a matching id. Avoid alert() that vanishes before it can be read.</p><p class=\"mb-4\">Say what to fix: email format, a number that is too short, a required box left empty. Do not only write Error.</p><p class=\"mb-4\">If the AI adds validation, limit it to one form. Refuse a large library when HTML required already covers the check.</p><p class=\"mb-4\">Clincoo ships the form markup you save. Clear messages are access work, not decoration.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["akses"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["akses"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
