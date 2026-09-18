// Clinqoo Blog — artikel editor tambahan 2026-09-18
(function(){
  var extra = [
    {
      id: "cari-nama-kelas-di-berkas-editor",
      langs: {
        "id": {
          title: "Cari Nama Kelas di Berkas Editor sebelum Mengubah CSS",
          desc: "Pakai pencarian di editor Clinqoo untuk memastikan kelas HTML benar-benar ada di CSS.",
          content: "<p class=\"mb-4\">Mengubah warna sering gagal karena nama kelas di HTML dan CSS tidak sama. Di editor Clinqoo, salin nama kelas lalu cari di style.css sebelum menulis aturan baru.</p><p class=\"mb-4\">Kalau tidak ketemu, jangan menambah kelas kembar. Samakan ejaan dulu. Huruf besar-kecil dan tanda hubung sering jadi biang.</p><p class=\"mb-4\">Cari juga di halaman lain. Kelas yang dipakai dua file tidak boleh dihapus hanya karena satu seksi sudah tidak memakainya.</p><p class=\"mb-4\">Pencarian tiga detik menghemat satu jam menebak kenapa pratinjau tidak berubah.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Editor kode Clinqoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Belajar HTML, CSS, JS",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Praktik terbaik web"
        },
        "en": {
          title: "Search for Class Names in the Editor before Changing CSS",
          desc: "Use search in the Clinqoo editor to confirm an HTML class actually exists in CSS.",
          content: "<p class=\"mb-4\">Color changes often fail because the HTML and CSS class names do not match. In the Clinqoo editor, copy the class name and search style.css before writing a new rule.</p><p class=\"mb-4\">If it is missing, do not invent a twin class. Fix the spelling first. Capitals and hyphens are usual culprits.</p><p class=\"mb-4\">Search other pages too. A class used in two files must not be deleted just because one section stopped using it.</p><p class=\"mb-4\">A three-second search saves an hour of guessing why preview did not change.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Clinqoo code editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Learn HTML, CSS, JS",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Web best practices"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["editor"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["editor"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
