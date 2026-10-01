// Clincoo Blog — artikel ux tambahan 2026-10-02 WIB
(function(){
  var extra = [
  {
    "id": "ux-pindahkan-fokus-setelah-dialog",
    "langs": {
      "id": {
        "title": "Pindahkan Fokus ke Dialog Clincoo, Lalu Kembalikan saat Ditutup",
        "desc": "Dialog yang tidak mengambil fokus membuat keyboard tetap di halaman belakang. Simpan elemen pemicu dan kembalikan fokus.",
        "content": "<p class=\"mb-4\">Tombol di editor.clincoo.buzz yang membuka dialog sering hanya mengubah display. Kursor keyboard tetap di tombol, jadi pengguna tidak tahu dialog sudah aktif.</p><p class=\"mb-4\">Saat dialog terbuka, simpan document.activeElement, lalu focus ke judul dialog atau tombol tutup. Pasang tabindex=-1 pada kontainer jika perlu.</p><p class=\"mb-4\">Saat ditutup, kembalikan fokus ke pemicu. Jangan pindah ke body. Perangkap Tab di dalam dialog agar tidak masuk ke halaman di belakang.</p><p class=\"mb-4\">Minta AI satu fungsi buka dan tutup. Tolak library modal penuh jika halaman hanya butuh satu dialog konfirmasi.</p><p class=\"mb-4\">Uji dengan keyboard di app.clincoo.buzz. Clincoo menayangkan interaksi yang kamu simpan, termasuk urutan fokus.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Editor resmi Clincoo",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Move Focus into a Clincoo Dialog, Then Restore It on Close",
        "desc": "A dialog that does not take focus leaves the keyboard on the page behind. Store the trigger and restore focus.",
        "content": "<p class=\"mb-4\">A button on editor.clincoo.buzz that opens a dialog often only toggles display. Keyboard focus stays on the button, so people never learn the dialog is active.</p><p class=\"mb-4\">When it opens, store document.activeElement, then focus the dialog heading or close button. Add tabindex=-1 on the container if needed.</p><p class=\"mb-4\">On close, restore focus to the trigger. Do not move it to body. Trap Tab inside the dialog so it cannot reach the page behind.</p><p class=\"mb-4\">Ask AI for one open and close function. Refuse a full modal library when the page only needs a confirm dialog.</p><p class=\"mb-4\">Test with the keyboard on app.clincoo.buzz. Clincoo ships the interaction you save, including focus order.</p>",
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
    if (!window.countryDataFiles || !window.countryDataFiles["ux"]) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles["ux"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
