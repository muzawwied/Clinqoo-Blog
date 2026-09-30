// Clincoo Blog — artikel notifikasi tambahan 2026-09-30
(function(){
  var extra = [{"id": "notifikasi-minta-izin-setelah-manfaat", "langs": {"id": {"title": "Minta Izin Notifikasi Clincoo setelah Manfaat Jelas", "desc": "Prompt izin di detik pertama hampir selalu ditolak. Tunjukkan nilai dulu, baru minta izin.", "content": "<p class=\"mb-4\">Halaman app.clincoo.buzz yang memanggil Notification.requestPermission saat load membuat pengguna menekan Blokir.</p><p class=\"mb-4\">Tunggu aksi: pengguna menyelesaikan draf atau menekan Simpan pengingat di editor.clincoo.buzz.</p><p class=\"mb-4\">Jelaskan satu kalimat apa yang akan dikirim. Jangan kirim promosi. Uji izin ditolak: UI harus tetap jalan.</p><p class=\"mb-4\">Tempel pesan izin plus hasil PermissionStatus ke AI. Jangan minta polyfill besar.</p><p class=\"mb-4\">Catat pola yang lolos di blog.clincoo.buzz.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Editor resmi Clincoo", "source2": "Clincoo App", "source3": "Clincoo Blog"}, "en": {"title": "Ask for Clincoo Notification Permission after the Benefit Is Clear", "desc": "A permission prompt in the first second is almost always denied. Show value first, then ask.", "content": "<p class=\"mb-4\">Pages on app.clincoo.buzz that call Notification.requestPermission on load make users press Block.</p><p class=\"mb-4\">Wait for an action: the user finishes a draft or taps Save reminder on editor.clincoo.buzz.</p><p class=\"mb-4\">Explain in one sentence what you will send. Do not send promotions. Test a denied permission: the UI must still work.</p><p class=\"mb-4\">Paste the permission copy plus the PermissionStatus to AI. Do not ask for a large polyfill.</p><p class=\"mb-4\">Record patterns that pass on blog.clincoo.buzz.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Official Clincoo editor", "source2": "Clincoo App", "source3": "Clincoo Blog"}}}];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["notifikasi"]) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles["notifikasi"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
