// Clincoo Blog — artikel regex tambahan 2 2026-09-26 WIB
(function(){
  var extra = [
    {
      id: "regex-nomor-telepon-longgar",
      langs: {
        "id": {
          title: "Validasi Nomor Telepon Clincoo secara Longgar",
          desc: "Jangan memaksa format satu negara. Hitung digit, izinkan plus dan spasi.",
          content: "<p class=\"mb-4\">Form Clincoo menolak nomor yang memakai spasi atau plus. Pengguna dari luar negeri mundur.</p><p class=\"mb-4\">Di editor.clincoo.buzz, hapus spasi dan tanda, lalu cek panjang digit 8–15. Plus di depan boleh.</p><p class=\"mb-4\">Jangan tulis pola untuk setiap kode negara. Simpan mentah, rapikan di server jika perlu.</p><p class=\"mb-4\">Minta AI mengganti satu pattern telp ketat jadi penghitung digit. Tempel input yang ada.</p><p class=\"mb-4\">Clincoo bukan operator seluler. Cek longgar menjaga form kontak hidup di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Validate Clincoo Phone Numbers Loosely",
          desc: "Do not force one country format. Count digits and allow plus or spaces.",
          content: "<p class=\"mb-4\">A Clincoo form rejects numbers that use spaces or a plus. International users leave.</p><p class=\"mb-4\">In editor.clincoo.buzz, strip spaces and marks, then check for 8–15 digits. A leading plus is fine.</p><p class=\"mb-4\">Do not write a pattern per country code. Store the raw value; tidy it on the server if needed.</p><p class=\"mb-4\">Ask AI to replace one strict phone pattern with a digit count. Paste the current input.</p><p class=\"mb-4\">Clincoo is not a carrier. A loose check keeps the contact form alive on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "regex-replace-hanya-kemunculan-pertama",
      langs: {
        "id": {
          title: "Ganti Hanya Kemunculan Pertama, Bukan Global, di Clincoo",
          desc: "Flag g mengubah semua cocokan. Untuk satu token, pakai replace tanpa g.",
          content: "<p class=\"mb-4\">Skrip Clincoo mengganti semua kata kunci sekaligus. Teks sah di konten ikut berubah.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pakai replace tanpa flag g jika hanya placeholder pertama yang harus diganti.</p><p class=\"mb-4\">Jika perlu beberapa tempat, sebutkan secara eksplisit atau batasi ke atribut tertentu, bukan seluruh innerHTML.</p><p class=\"mb-4\">Minta AI meninjau setiap replace(/.../g). Tempel fungsi yang menyentuh teks halaman.</p><p class=\"mb-4\">Clincoo merender konten pengguna. Replace sempit mencegah sidik yang salah di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Replace Only the First Match, Not Globally, in Clincoo",
          desc: "A g flag changes every match. For one token, call replace without g.",
          content: "<p class=\"mb-4\">A Clincoo script replaces every keyword at once. Real copy in the content changes too.</p><p class=\"mb-4\">In editor.clincoo.buzz, use replace without the g flag when only the first placeholder should change.</p><p class=\"mb-4\">If several spots need an update, name them or limit the edit to one attribute, not the whole innerHTML.</p><p class=\"mb-4\">Ask AI to review every replace(/.../g). Paste the helper that touches page text.</p><p class=\"mb-4\">Clincoo renders user content. A narrow replace prevents a wrong rewrite on app.clincoo.buzz.</p>",
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
