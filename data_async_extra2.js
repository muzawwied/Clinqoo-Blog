// Clincoo Blog async extra2 2026-10-02 WIB
(function(){
  var extra = [
    {id:'async-paralel-dengan-batas-konkurensi',langs:{id:{title:'Jalankan Await Paralel dengan Batas, Bukan Selalu Berurutan',desc:'Menunggu setiap permintaan selesai sebelum yang berikutnya membuat unggah terasa macet. Batasi jumlah yang jalan bersamaan.',content:'<p class=\"mb-4\">Loop for dengan await di editor.clincoo.buzz mengunggah file satu per satu. Sepuluh gambar kecil bisa memakan waktu sama dengan satu antrean panjang.</p><p class=\"mb-4\">Jika urutan tidak penting, jalankan beberapa fetch bersamaan, tetapi batasi tiga atau empat. Antrean sederhana lebih aman daripada Promise.all tanpa batas.</p><p class=\"mb-4\">Tetap bungkus setiap tugas dengan try/catch. Satu gagal tidak boleh menggagalkan yang lain. Tampilkan yang gagal di pratinjau app.clincoo.buzz.</p><p class=\"mb-4\">Jangan campur .then di dalam fungsi async yang sama. Pilih await supaya alur mudah dibaca saat minta bantuan AI.</p><p class=\"mb-4\">Ukur waktu sebelum dan sesudah. Jika lebih cepat tetapi konsol penuh error, turunkan batas konkurensi.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Editor resmi Clincoo',source2:'Clincoo App',source3:'Clincoo Blog'},en:{title:'Run Awaits in Parallel with a Cap, Not Always in Series',desc:'Waiting for every request to finish before the next one makes uploads feel stuck. Cap how many run at once.',content:'<p class=\"mb-4\">A for loop with await in editor.clincoo.buzz uploads files one by one. Ten small images can take as long as one long queue.</p><p class=\"mb-4\">If order does not matter, run a few fetches together, but cap them at three or four. A small queue is safer than an unbounded Promise.all.</p><p class=\"mb-4\">Still wrap each task in try/catch. One failure must not fail the rest. Show the failed items in the app.clincoo.buzz preview.</p><p class=\"mb-4\">Do not mix .then inside the same async function. Prefer await so the flow is easy to read when you ask AI for help.</p><p class=\"mb-4\">Measure time before and after. If it is faster but the console fills with errors, lower the concurrency cap.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Official Clincoo editor',source2:'Clincoo App',source3:'Clincoo Blog'}}}
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
