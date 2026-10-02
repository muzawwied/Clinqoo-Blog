// Clincoo Blog — artikel event tambahan 2026-10-02 WIB
(function(){
  var extra = [
  {
    "id": "event-delegation-untuk-daftar-dinamis",
    "langs": {
      "id": {
        "title": "Pakai Event Delegation untuk Daftar Dinamis Clincoo",
        "desc": "Listener pada tiap baris hilang saat daftar digambar ulang. Dengarkan induk yang stabil.",
        "content": "<p class=\"mb-4\">Di editor.clincoo.buzz, daftar blok sering diganti innerHTML. Listener yang dipasang per tombol ikut terhapus.</p><p class=\"mb-4\">Pasang satu listener click pada induk yang tidak digambar ulang. Cek event.target.closest untuk tombol aksi.</p><p class=\"mb-4\">Jangan pasang listener baru setiap render tanpa melepas yang lama. Itu menggandakan simpan draf.</p><p class=\"mb-4\">Untuk input teks, delegation pada event input tetap jalan jika field ada di dalam induk. Uji keyboard, bukan hanya klik.</p><p class=\"mb-4\">Dokumentasikan selektor induk di blog.clincoo.buzz dan cek perilaku yang sama di app.clincoo.buzz.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events",
        "sourceSnippet": "Satu listener di induk",
        "source2": "MDN: Event delegation",
        "source3": "Clincoo Editor"
      },
      "en": {
        "title": "Use Event Delegation for Dynamic Clincoo Lists",
        "desc": "A listener on each row disappears when the list is redrawn. Listen on the stable parent.",
        "content": "<p class=\"mb-4\">On editor.clincoo.buzz, block lists are often replaced with innerHTML. Listeners attached per button are removed with them.</p><p class=\"mb-4\">Attach one click listener on a parent that is not redrawn. Check event.target.closest for the action button.</p><p class=\"mb-4\">Do not add a new listener on every render without removing the old one. That duplicates draft saves.</p><p class=\"mb-4\">For text fields, delegation on the input event still works if the field sits inside the parent. Test the keyboard, not only clicks.</p><p class=\"mb-4\">Document the parent selector on blog.clincoo.buzz and check the same behavior on app.clincoo.buzz.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events",
        "sourceSnippet": "One listener on the parent",
        "source2": "MDN: Event delegation",
        "source3": "Clincoo Editor"
      }
    }
  }
];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles['event']) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles['event'].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
