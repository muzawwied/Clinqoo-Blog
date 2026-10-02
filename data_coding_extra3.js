// Clincoo Blog — artikel coding tambahan 2026-10-03
(function(){
  var extra = [
  {
    "id": "coding-nama-fungsi-menjelaskan-niat",
    "langs": {
      "id": {
        "title": "Nama Fungsi yang Menjelaskan Niat, Bukan Mekanisme",
        "desc": "Nama seperti doStuff menyembunyikan efek samping. Nama yang menyebut niat mempercepat debug di editor Clincoo.",
        "content": "<p class=\"mb-4\">Di editor.clincoo.buzz, fungsi handle() atau process() tidak memberitahu apakah ia menyimpan draf, mengirim formulir, atau hanya mengubah kelas.</p><p class=\"mb-4\">Pakai nama yang menyebut hasil: simpanDraf, tampilkanErrorForm, atau setTemaGelap. Pembaca tidak perlu membuka badan fungsi untuk tahu niat.</p><p class=\"mb-4\">Hindari nama yang mengunci implementasi, misalnya simpanKeLocalStorage, jika penyimpanan bisa pindah. Niat tetap, mekanisme boleh berganti.</p><p class=\"mb-4\">Jika AI menamai ulang semua fungsi tanpa diminta, tolak. Minta satu fungsi yang sedang error, plus alasan nama baru.</p><p class=\"mb-4\">Terapkan pada file yang Anda sentuh hari ini di app.clincoo.buzz, lalu catat contoh singkat di blog.clincoo.buzz.</p>",
        "source": "MDN: Functions",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
        "sourceSnippet": "developer.mozilla.org",
        "source2": "MDN: JavaScript naming",
        "source3": "web.dev: JavaScript"
      },
      "en": {
        "title": "Name Functions After Intent, Not Mechanism",
        "desc": "Names like doStuff hide side effects. A name that states intent speeds up debugging in the Clincoo editor.",
        "content": "<p class=\"mb-4\">On editor.clincoo.buzz, handle() or process() does not say whether it saves a draft, submits a form, or only toggles a class.</p><p class=\"mb-4\">Use a name that states the result: saveDraft, showFormError, or setDarkTheme. A reader should not open the body to learn the intent.</p><p class=\"mb-4\">Avoid names that lock the implementation, such as saveToLocalStorage, if storage may move. Intent stays, mechanism can change.</p><p class=\"mb-4\">If AI renames every function unasked, reject it. Ask for the one function that is failing, plus why the new name is better.</p><p class=\"mb-4\">Apply it to the file you touch today on app.clincoo.buzz, then keep a short example on blog.clincoo.buzz.</p>",
        "source": "MDN: Functions",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
        "sourceSnippet": "developer.mozilla.org",
        "source2": "MDN: JavaScript naming",
        "source3": "web.dev: JavaScript"
      }
    }
  }
];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["coding"]) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles["coding"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
