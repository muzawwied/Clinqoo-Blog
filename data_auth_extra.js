// Clincoo Blog auth extra 2026-10-01
(function(){
  var extra = [
    {id:'auth-cek-sesi-sebelum-aksi-tulis',langs:{id:{title:'Cek Sesi Auth sebelum Menjalankan Aksi Tulis di Clincoo',desc:'Tombol simpan yang menembak PUT tanpa sesi menghasilkan 401 yang membingungkan di pratinjau.',content:'<p class=\"mb-4\">Form di editor.clincoo.buzz sering langsung fetch PUT. Jika cookie sesi habis, pengguna melihat gagal simpan tanpa tahu harus masuk ulang.</p><p class=\"mb-4\">Sebelum aksi tulis, panggil endpoint sesi ringan atau baca flag login yang sudah ada. Jika kosong, arahkan ke masuk, jangan kirim body.</p><p class=\"mb-4\">Setelah login, kembalikan fokus ke formulir dan jangan kosongkan isian. Uji alur ini di app.clincoo.buzz dengan sesi yang sengaja dihapus.</p><p class=\"mb-4\">Tolak saran AI yang menaruh token di query string. Simpan pola cek-sesi-dulu di blog.clincoo.buzz.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Editor resmi Clincoo',source2:'Clincoo App',source3:'Clincoo Blog'},en:{title:'Check the Auth Session before a Write Action in Clincoo',desc:'A save button that fires PUT without a session produces a confusing 401 in preview.',content:'<p class=\"mb-4\">Forms in editor.clincoo.buzz often fetch PUT immediately. When the session cookie expires, users see save failed and do not know to sign in again.</p><p class=\"mb-4\">Before a write, call a light session endpoint or read an existing login flag. If it is empty, send them to sign-in; do not post the body.</p><p class=\"mb-4\">After login, restore focus to the form and do not clear the fields. Test this path on app.clincoo.buzz with a session you deleted on purpose.</p><p class=\"mb-4\">Reject AI advice that puts tokens in the query string. Save the check-session-first pattern on blog.clincoo.buzz.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Official Clincoo editor',source2:'Clincoo App',source3:'Clincoo Blog'}}}
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles['auth']) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles['auth'].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
