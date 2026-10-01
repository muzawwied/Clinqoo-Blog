// Clincoo Blog async extra 2026-10-01
(function(){
  var extra = [
    {id:'async-jangan-campur-then-dengan-await',langs:{id:{title:'Jangan Campur .then dengan await di Satu Alur Clincoo',desc:'Mencampur gaya Promise membuat urutan susah dibaca dan catch terlewat di editor.',content:'<p class=\"mb-4\">File di editor.clincoo.buzz sering punya fetch().then di dalam fungsi async. Error di tengah rantai tidak masuk try/catch yang kamu tulis.</p><p class=\"mb-4\">Pilih satu gaya per fungsi. Jika sudah async, pakai await dan bungkus try/catch. Pindahkan sisi then ke fungsi baru jika terpaksa.</p><p class=\"mb-4\">Uji jalur gagal: putuskan jaringan di pratinjau app.clincoo.buzz dan pastikan pesan error muncul, bukan promise yang menggantung.</p><p class=\"mb-4\">Minta AI merapikan satu fungsi saja. Jangan biarkan ia menulis ulang seluruh berkas async. Simpan catatan di blog.clincoo.buzz.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Editor resmi Clincoo',source2:'Clincoo App',source3:'Clincoo Blog'},en:{title:'Do Not Mix .then with await in One Clincoo Flow',desc:'Mixing Promise styles makes order hard to read and lets catch blocks miss errors in the editor.',content:'<p class=\"mb-4\">Files in editor.clincoo.buzz often keep fetch().then inside an async function. Errors in the middle of the chain skip the try/catch you wrote.</p><p class=\"mb-4\">Pick one style per function. If it is already async, use await and wrap try/catch. Move leftover then calls into a new function if needed.</p><p class=\"mb-4\">Test the failure path: drop the network in the app.clincoo.buzz preview and confirm the error message appears instead of a hanging promise.</p><p class=\"mb-4\">Ask AI to tidy one function only. Do not let it rewrite the whole async file. Keep notes on blog.clincoo.buzz.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Official Clincoo editor',source2:'Clincoo App',source3:'Clincoo Blog'}}}
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles['async']) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles['async'].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
