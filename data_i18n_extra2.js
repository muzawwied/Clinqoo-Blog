// Clincoo Blog — Extra i18n
(function(){
  var extra = [
    {
      id: "i18n-rtl-dir-jika-bahasa-butuh",
      langs: {
        "id": {
          title: "Setel atribut dir hanya jika Bahasa Halaman Clincoo Membutuhkannya",
          desc: "dir=rtl bukan default. Pakai hanya untuk bahasa yang benar-benar kanan-ke-kiri.",
          content: "<p class=\"mb-4\">Banyak template Clincoo menempel dir=\"rtl\" karena AI meniru contoh Arab. Halaman ID dan EN jadi terbalik.</p><p class=\"mb-4\">Biarkan html memakai lang yang sesuai. Tambah dir=\"rtl\" hanya pada file bahasa RTL, bukan pada index.html Indonesia.</p><p class=\"mb-4\">Cek flex dan teks rata kanan di pratinjau. Tombol dan ikon sering loncat jika dir salah.</p><p class=\"mb-4\">Minta AI menjelaskan mengapa dir diubah. Tolak generate yang menyalin atribut ke semua halaman.</p><p class=\"mb-4\">Clincoo menayangkan markup apa adanya. Atribut arah yang jujur menjaga tata letak tetap masuk akal.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set the dir Attribute Only When the Clincoo Page Language Needs It",
          desc: "dir=rtl is not a default. Use it only for true right-to-left languages.",
          content: "<p class=\"mb-4\">Many Clincoo templates stamp dir=\"rtl\" because the AI copied an Arabic sample. ID and EN pages then flip.</p><p class=\"mb-4\">Keep html with the matching lang. Add dir=\"rtl\" only on RTL language files, not on the Indonesian index.html.</p><p class=\"mb-4\">Check flex and right-aligned text in preview. Buttons and icons often jump when dir is wrong.</p><p class=\"mb-4\">Ask the AI why dir changed. Reject a generate that copies the attribute onto every page.</p><p class=\"mb-4\">Clincoo ships the markup as saved. An honest direction attribute keeps layout sane.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "i18n-alt-gambar-ikut-bahasa-halaman",
      langs: {
        "id": {
          title: "Tulis Teks Alt Gambar Mengikuti Bahasa Halaman Clincoo",
          desc: "Alt Inggris di halaman ID merusak pembaca layar. Setiap file punya alt sendiri.",
          content: "<p class=\"mb-4\">AI sering menyalin alt English ke index.html. Pengguna pembaca layar mendengar bahasa yang salah.</p><p class=\"mb-4\">Buat daftar nama file gambar dan dua kolom alt: ID dan EN. Isi sebelum generate.</p><p class=\"mb-4\">Jangan terjemahkan kata per kata jika konteks beda. Alt menjelaskan fungsi, bukan file name.</p><p class=\"mb-4\">Pratinjau di editor.clincoo.buzz lalu inspect atribut alt pada kedua file.</p><p class=\"mb-4\">Clincoo tidak menerjemahkan alt otomatis. Kamu yang menjaga dua bahasa tetap selaras.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Write Image Alt Text in the Language of the Clincoo Page",
          desc: "English alt on an ID page breaks screen readers. Each file needs its own alt.",
          content: "<p class=\"mb-4\">AI often copies English alt into index.html. Screen-reader users then hear the wrong language.</p><p class=\"mb-4\">Make a list of image file names and two alt columns: ID and EN. Fill them before you generate.</p><p class=\"mb-4\">Do not translate word for word if context differs. Alt describes purpose, not the file name.</p><p class=\"mb-4\">Preview in editor.clincoo.buzz and inspect alt on both files.</p><p class=\"mb-4\">Clincoo does not auto-translate alt. You keep the two languages aligned.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["i18n"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["i18n"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
