// Clincoo Blog — artikel layout tambahan 2026-10-03 WIB
(function(){
  var e = [{
  "id": "layout-min-height-nol-anak-grid",
  "langs": {
    "id": {
      "title": "Set min-height: 0 pada Anak Grid yang Kepanjangan",
      "desc": "Item grid menolak menyusut, lalu isi meluber. min-height: 0 mengizinkan scroll di dalam kartu.",
      "content": "<p class=\"mb-4\">Di editor.clincoo.buzz, kartu dalam grid sering memanjang sampai teks keluar layar. Default min-height: auto pada item grid menahan penyusutan.</p><p class=\"mb-4\">Set min-height: 0 pada item yang harus menggulung. Lalu beri overflow: auto pada badan kartu, bukan pada seluruh halaman.</p><p class=\"mb-4\">Jangan potong dengan overflow: hidden bila tombol aksi ada di bawah. Pengguna ponsel tidak bisa menjangkaunya.</p><p class=\"mb-4\">Minta AI menandai item grid tanpa min-height: 0 yang berisi daftar panjang. Sertakan cuplikan CSS, bukan tangkapan layar saja.</p><p class=\"mb-4\">Uji di pratinjau app.clincoo.buzz dengan daftar 20 baris. Kartu harus tetap di viewport dan isinya bisa digulir.</p>",
      "source": "Clincoo",
      "sourceUrl": "https://editor.clincoo.buzz/",
      "sourceSnippet": "Editor resmi Clincoo",
      "source2": "Clincoo App",
      "source3": "Clincoo Blog"
    },
    "en": {
      "title": "Set min-height: 0 on Overflowing Grid Children",
      "desc": "A grid item refuses to shrink, then content spills out. min-height: 0 allows scrolling inside the card.",
      "content": "<p class=\"mb-4\">In editor.clincoo.buzz, a card in a grid often grows until text leaves the screen. The default min-height: auto on a grid item blocks shrinking.</p><p class=\"mb-4\">Set min-height: 0 on the item that should scroll. Then put overflow: auto on the card body, not on the whole page.</p><p class=\"mb-4\">Do not clip with overflow: hidden if the action button sits at the bottom. A phone user cannot reach it.</p><p class=\"mb-4\">Ask AI to flag grid items without min-height: 0 that contain a long list. Include the CSS snippet, not only a screenshot.</p><p class=\"mb-4\">Test in the app.clincoo.buzz preview with a 20-row list. The card should stay in the viewport and its content should scroll.</p>",
      "source": "Clincoo",
      "sourceUrl": "https://editor.clincoo.buzz/",
      "sourceSnippet": "Official Clincoo editor",
      "source2": "Clincoo App",
      "source3": "Clincoo Blog"
    }
  }
}];
  var b = window.countryDataFiles && window.countryDataFiles["layout"];
  if (b && b.articles) b.articles = b.articles.concat(e);
})();
