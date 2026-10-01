// Clincoo Blog — artikel tabel tambahan 2026-10-02 WIB
(function(){
  var extra = [
  {
    "id": "tabel-overflow-wrap-kata-panjang",
    "langs": {
      "id": {
        "title": "Bungkus Kata Panjang di Sel Tabel Clincoo, Jangan Biarkan Melebar",
        "desc": "URL, hash, dan nama file tanpa spasi mendorong tabel keluar layar. overflow-wrap memotong baris tanpa mengecilkan angka.",
        "content": "<p class=\"mb-4\">Di editor.clincoo.buzz, sel tabel sering berisi slug, URL, atau hash. Tanpa pemecah baris, satu token membuat seluruh tabel melebar dan overflow-x jadi satu-satunya jalan.</p><p class=\"mb-4\">Tambahkan overflow-wrap: anywhere pada td yang boleh pecah, dan biarkan kolom angka memakai white-space: nowrap. Jangan set font-size lebih kecil hanya agar muat.</p><p class=\"mb-4\">Beri kolom teks lebar minimum yang masuk akal, misalnya min-width: 8rem, lalu bungkus table dengan overflow-x: auto sebagai cadangan di 360px.</p><p class=\"mb-4\">Minta AI satu aturan CSS untuk td.token. Tolak rewrite seluruh tabel. Tempel cuplikan sel yang melebar, bukan seluruh halaman.</p><p class=\"mb-4\">Clincoo menayangkan HTML yang kamu simpan. Sel yang bisa pecah menjaga caption dan header tetap terbaca di app.clincoo.buzz.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Editor resmi Clincoo",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Wrap Long Tokens in Clincoo Table Cells, Do Not Let Them Stretch",
        "desc": "URLs, hashes, and filenames without spaces push the table off screen. overflow-wrap breaks the line without shrinking numbers.",
        "content": "<p class=\"mb-4\">On editor.clincoo.buzz, table cells often hold slugs, URLs, or hashes. Without a break opportunity, one token stretches the whole table and overflow-x becomes the only escape.</p><p class=\"mb-4\">Add overflow-wrap: anywhere on cells that may break, and keep numeric columns on white-space: nowrap. Do not shrink font-size just to fit.</p><p class=\"mb-4\">Give text columns a sensible minimum, such as min-width: 8rem, then wrap the table in overflow-x: auto as a fallback at 360px.</p><p class=\"mb-4\">Ask AI for one CSS rule for td.token. Refuse a full table rewrite. Paste the overflowing cell, not the whole page.</p><p class=\"mb-4\">Clincoo ships the HTML you save. Breakable cells keep the caption and header readable on app.clincoo.buzz.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Official Clincoo editor",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      }
    }
  }
];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["tabel"]) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles["tabel"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
