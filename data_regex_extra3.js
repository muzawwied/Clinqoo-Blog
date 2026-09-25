// Clincoo Blog — artikel regex tambahan 3 2026-09-26 WIB
(function(){
  var extra = [
    {
      id: "regex-word-boundary-batas-kata",
      langs: {
        "id": {
          title: "Pakai Word Boundary supaya Pola Regex Clincoo Tidak Menelan Kata Sebelah",
          desc: "Batas kata menjaga penggantian teks tidak merusak kata yang hanya mirip.",
          content: "<p class=\"mb-4\">Replace Clincoo mengubah \"form\" di dalam \"format\" dan \"information\". Konten jadi kacau.</p><p class=\"mb-4\">Di editor.clincoo.buzz, bungkus token dengan \\b di kedua sisi. Word boundary menolak huruf yang menempel.</p><p class=\"mb-4\">Uji \"form\", \"format\", dan \"perform\" di console. Hanya kata utuh yang boleh lolos.</p><p class=\"mb-4\">Minta AI menambah \\b pada satu replace yang menyentuh teks halaman. Tempel pola lama.</p><p class=\"mb-4\">Clincoo merender salinan pengguna. Boundary menjaga kata tetangga tetap utuh di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Word Boundaries so a Clincoo Regex Does Not Swallow Neighbor Words",
          desc: "Word boundaries keep a replace from damaging words that only look similar.",
          content: "<p class=\"mb-4\">A Clincoo replace changes \"form\" inside \"format\" and \"information\". The copy falls apart.</p><p class=\"mb-4\">In editor.clincoo.buzz, wrap the token with \\b on both sides. A word boundary rejects letters that stick to it.</p><p class=\"mb-4\">Test \"form\", \"format\", and \"perform\" in the console. Only the whole word should match.</p><p class=\"mb-4\">Ask AI to add \\b on one replace that touches page text. Paste the old pattern.</p><p class=\"mb-4\">Clincoo renders user copy. A boundary keeps neighbor words intact on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "regex-split-lebih-jelas-dari-match",
      langs: {
        "id": {
          title: "Pakai split() jika Daftar Token Clincoo Lebih Jelas daripada match()",
          desc: "Pemisah koma atau baris tidak butuh grup tangkap. split menjaga daftar tetap linier.",
          content: "<p class=\"mb-4\">Parser tag Clincoo gagal karena match() mengembalikan null saat input kosong.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pakai split(/\\s*,\\s*/) lalu trim tiap bagian. Array kosong lebih mudah ditangani.</p><p class=\"mb-4\">Buang entri kosong setelah split. Jangan tulis pola dengan banyak grup hanya untuk memecah daftar.</p><p class=\"mb-4\">Minta AI mengganti satu match kompleks jadi split plus filter. Tempel fungsi pemecah tag.</p><p class=\"mb-4\">Clincoo menyimpan daftar sederhana. split menjaga input tag aman di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Prefer split() when a Clincoo Token List Is Clearer than match()",
          desc: "Comma or line separators do not need capture groups. split keeps the list linear.",
          content: "<p class=\"mb-4\">A Clincoo tag parser fails because match() returns null on empty input.</p><p class=\"mb-4\">In editor.clincoo.buzz, use split(/\\s*,\\s*/) then trim each part. An empty array is easier to handle.</p><p class=\"mb-4\">Drop empty entries after the split. Do not write a pattern with many groups just to break a list.</p><p class=\"mb-4\">Ask AI to turn one complex match into split plus a filter. Paste the tag splitter.</p><p class=\"mb-4\">Clincoo stores simple lists. split keeps tag input safe on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "regex-flag-i-untuk-cari-tanpa-huruf-besar",
      langs: {
        "id": {
          title: "Pakai Flag i untuk Pencarian Clincoo tanpa Peduli Huruf Besar",
          desc: "Jangan gandakan pola A-Z dan a-z. Flag i merapikan pencarian judul dan slug.",
          content: "<p class=\"mb-4\">Kotak cari Clincoo melewatkan \"Hero\" karena pola hanya huruf kecil.</p><p class=\"mb-4\">Di editor.clincoo.buzz, tambah flag i pada RegExp pencarian. Tetap escape teks pengguna.</p><p class=\"mb-4\">Jangan tulis [Aa][Bb] untuk setiap huruf. Pola jadi panjang dan mudah salah.</p><p class=\"mb-4\">Minta AI menambah flag i pada satu pencarian judul. Tempel new RegExp yang ada.</p><p class=\"mb-4\">Clincoo menampilkan judul campuran. Flag i menjaga hasil cari lengkap di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use the i Flag for Case-Insensitive Clincoo Search",
          desc: "Do not duplicate A-Z and a-z. The i flag keeps title and slug search tidy.",
          content: "<p class=\"mb-4\">A Clincoo search box misses \"Hero\" because the pattern is lowercase only.</p><p class=\"mb-4\">In editor.clincoo.buzz, add the i flag on the search RegExp. Still escape user text.</p><p class=\"mb-4\">Do not write [Aa][Bb] for every letter. The pattern gets long and easy to break.</p><p class=\"mb-4\">Ask AI to add the i flag on one title search. Paste the current new RegExp.</p><p class=\"mb-4\">Clincoo shows mixed-case titles. The i flag keeps search results complete on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["regex"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["regex"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
