// Clincoo Blog — artikel warna tambahan 2026-10-02 WIB
(function(){
  var extra = [
  {
    "id": "warna-currentcolor-ikon-ikut-teks",
    "langs": {
      "id": {
        "title": "Pakai currentColor agar Ikon Clincoo Mengikuti Warna Teks",
        "desc": "Ikon SVG dengan fill hex tetap abu-abu saat teks berubah status. currentColor mengikuti warna induk.",
        "content": "<p class=\"mb-4\">Di editor.clincoo.buzz, ikon sering di-hardcode dengan fill hex abu-abu sementara teks tombol memakai token merek. Saat hover atau status error, ikon tidak ikut berubah.</p><p class=\"mb-4\">Set fill currentColor atau stroke currentColor pada SVG, lalu atur color pada tombol. Satu token warna mengendalikan teks dan ikon.</p><p class=\"mb-4\">Jangan duplikasi hex di atribut presentation. Untuk ikon dekoratif, beri aria-hidden true agar pembaca layar tidak mengulang nama.</p><p class=\"mb-4\">Minta AI mengganti satu ikon ke currentColor. Tolak palet baru. Kirim potongan SVG, bukan seluruh stylesheet.</p><p class=\"mb-4\">Cek kontras di app.clincoo.buzz pada status default, hover, dan disabled. Clincoo menayangkan warna yang kamu simpan di token.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Editor resmi Clincoo",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Use currentColor so Clincoo Icons Follow the Text Color",
        "desc": "An SVG icon with a fixed hex fill stays gray when text changes state. currentColor follows the parent color.",
        "content": "<p class=\"mb-4\">On editor.clincoo.buzz, icons are often hardcoded with a gray hex fill while the button label uses a brand token. On hover or error, the icon does not change.</p><p class=\"mb-4\">Set fill or stroke to currentColor on the SVG, then set color on the button. One color token drives text and icon.</p><p class=\"mb-4\">Do not duplicate the hex in presentation attributes. For decorative icons, add aria-hidden true so screen readers do not repeat the name.</p><p class=\"mb-4\">Ask AI to switch one icon to currentColor. Refuse a new palette. Send the SVG snippet, not the whole stylesheet.</p><p class=\"mb-4\">Check contrast on app.clincoo.buzz for default, hover, and disabled. Clincoo ships the colors you save in tokens.</p>",
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
    if (!window.countryDataFiles || !window.countryDataFiles["warna"]) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles["warna"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
