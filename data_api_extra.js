// Clincoo Blog api extra 2026-10-01
(function(){
  var extra = [
    {id:'api-tampilkan-kode-status-di-ui-error',langs:{id:{title:'Tampilkan Kode Status API pada UI Error Clincoo',desc:'Spinner yang tidak berhenti tidak membantu. Tampilkan status HTTP dan request id agar debug cepat.',content:'<p class=\"mb-4\">Di editor.clincoo.buzz, fetch yang gagal sering hanya menampilkan coba lagi. Pengguna dan AI tidak tahu apakah masalahnya 401, 404, atau 503.</p><p class=\"mb-4\">Pada blok error, tulis kode status dan pesan singkat dari server. Simpan request id jika API mengirim header korelasi.</p><p class=\"mb-4\">Bedakan jaringan putus dari respons 4xx. Jaringan butuh undur; 4xx butuh perbaikan input atau sesi di app.clincoo.buzz.</p><p class=\"mb-4\">Salin teks error itu saat minta bantuan. Jangan minta AI menebak dari spinner. Dokumentasikan pola ini di blog.clincoo.buzz.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Editor resmi Clincoo',source2:'Clincoo App',source3:'Clincoo Blog'},en:{title:'Show the API Status Code on Clincoo Error UI',desc:'A spinner that never stops does not help. Show the HTTP status and request id so debugging stays fast.',content:'<p class=\"mb-4\">In editor.clincoo.buzz, failed fetches often show only try again. Users and AI cannot tell a 401 from a 404 or 503.</p><p class=\"mb-4\">On the error block, print the status code and a short server message. Keep the request id if the API sends a correlation header.</p><p class=\"mb-4\">Separate a dropped network from a 4xx response. Networks need backoff; 4xx needs input or session fixes on app.clincoo.buzz.</p><p class=\"mb-4\">Paste that error text when you ask for help. Do not ask AI to guess from a spinner. Document the pattern on blog.clincoo.buzz.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Official Clincoo editor',source2:'Clincoo App',source3:'Clincoo Blog'}}}
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles['api']) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles['api'].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
