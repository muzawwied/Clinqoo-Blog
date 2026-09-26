// Clincoo Blog — artikel css tambahan 2026-09-26 WIB
(function(){
  var extra = [
    {
      id: "css-specificity-tanpa-important",
      langs: {
        "id": {
          title: "Naikkan Spesifisitas CSS Clincoo tanpa !important",
          desc: "!important menumpuk sampai tidak ada yang menang. Naikkan selektor satu tingkat saja.",
          content: "<p class=\"mb-4\">Berkas tema Clincoo penuh !important karena AI menambal konflik. Perubahan kecil lalu mustahil.</p><p class=\"mb-4\">Di editor.clincoo.buzz, bandingkan dua aturan di DevTools. Tambah satu kelas pada elemen, bukan !important pada properti.</p><p class=\"mb-4\">Jangan rantai html body .wrap .card button. Satu kelas komponen cukup jika markup konsisten.</p><p class=\"mb-4\">Minta AI menghapus !important dan mengganti selektor. Tempel dua aturan yang bentrok.</p><p class=\"mb-4\">Clincoo merender CSS yang kamu simpan. Spesifisitas rapi membuat perbaikan warna aman di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Raise Clincoo CSS Specificity without !important",
          desc: "!important stacks until nothing wins. Raise the selector by one level only.",
          content: "<p class=\"mb-4\">A Clincoo theme file fills with !important because AI patched conflicts. Small changes then become impossible.</p><p class=\"mb-4\">In editor.clincoo.buzz, compare the two rules in DevTools. Add one class on the element instead of !important on the property.</p><p class=\"mb-4\">Do not chain html body .wrap .card button. One component class is enough when markup is consistent.</p><p class=\"mb-4\">Ask AI to drop !important and replace the selector. Paste the two colliding rules.</p><p class=\"mb-4\">Clincoo ships the CSS you save. Tidy specificity makes a color fix safe on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["css"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["css"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
