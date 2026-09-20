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
    },
    {
      id: "akses-nama-tautan-bukan-klik-disini",
      langs: {
        "id": {
          title: "Beri Nama Tautan yang Bermakna, Bukan Klik di Sini",
          desc: "Teks tautan harus menjelaskan tujuan. Pembaca layar dan pratinjau daftar tautan butuh kata yang spesifik di halaman Clincoo.",
          content: "<p class=\"mb-4\">Klik di sini dan selengkapnya tidak menjelaskan tujuan. Daftar tautan di pembaca layar jadi deretan kata yang sama.</p><p class=\"mb-4\">Tulis tujuan: Lihat paket harga, Unduh brosur PDF, Hubungi lewat WhatsApp. Kata kerja plus objek lebih jelas daripada instruksi kosong.</p><p class=\"mb-4\">Jika desain memaksa teks pendek, tambah aria-label yang lebih lengkap, tetap jaga teks terlihat agar orang yang zoom juga paham.</p><p class=\"mb-4\">Minta AI hanya mengganti teks tautan di satu section. Tolak rewrite seluruh navigasi.</p><p class=\"mb-4\">Clincoo menayangkan markup yang kamu simpan. Nama tautan adalah akses, bukan slogan dekoratif.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Name Links by Destination, Not Click Here",
          desc: "Link text should say where it goes. Screen readers and link lists need specific words on a Clincoo page.",
          content: "<p class=\"mb-4\">Click here and read more do not name a destination. A screen reader link list becomes a row of the same words.</p><p class=\"mb-4\">Write the destination: View pricing plans, Download the PDF brochure, Contact us on WhatsApp. A verb plus an object is clearer than an empty instruction.</p><p class=\"mb-4\">If the design forces short visible text, add a fuller aria-label, but keep visible text clear for people who zoom.</p><p class=\"mb-4\">Ask the AI only to change link text in one section. Refuse a full navigation rewrite.</p><p class=\"mb-4\">Clincoo ships the markup you save. Link names are access work, not decorative slogans.</p>",
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
