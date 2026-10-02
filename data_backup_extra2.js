// Clincoo Blog backup extra 2026-10-02 WIB
(function(){
  var extra = [
    {id:'backup-ekspor-json-sebelum-timpa',langs:{id:{title:'Ekspor JSON Proyek Sebelum Menimpa di Clincoo',desc:'Timpa proyek tanpa salinan membuat undo tidak cukup. Unduh JSON dulu, beri nama tanggal, baru lanjut edit besar.',content:'<p class="mb-4">Di app.clincoo.buzz, mengganti template bisa menimpa struktur halaman yang sudah diubah. Undo editor hanya mencakup beberapa langkah terakhir.</p><p class="mb-4">Sebelum refactor, ekspor proyek ke JSON dan simpan di luar browser. Nama berkas harus memuat tanggal WIB dan slug proyek, misalnya proyek-2026-10-02.json.</p><p class="mb-4">Jangan menaruh cadangan hanya di localStorage. Kuota penuh atau mode pribadi yang ditutup menghapus salinan itu.</p><p class="mb-4">Jika AI diminta merombak layout, tempel cuplikan kecil plus catatan bahwa JSON lengkap sudah diunduh. Jangan unggah data pengguna ke chat.</p><p class="mb-4">Setelah timpa, bandingkan jumlah section dengan berkas cadangan. Tulis langkah ini di blog.clincoo.buzz agar rekan tim mengulang ritual yang sama.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Aplikasi resmi Clincoo',source2:'Clincoo App',source3:'Clincoo Blog'},en:{title:'Export Project JSON Before Overwriting in Clincoo',desc:'Overwriting a project without a copy makes undo insufficient. Download JSON first, name it with the date, then continue the large edit.',content:'<p class="mb-4">On app.clincoo.buzz, switching a template can overwrite a page structure you already edited. Editor undo only covers the last few steps.</p><p class="mb-4">Before a refactor, export the project to JSON and store it outside the browser. The file name should include the WIB date and project slug, for example project-2026-10-02.json.</p><p class="mb-4">Do not keep the only copy in localStorage. A full quota or a closed private window drops that copy.</p><p class="mb-4">If AI is asked to rebuild the layout, paste a small snippet and note that the full JSON is already downloaded. Do not upload user data into chat.</p><p class="mb-4">After overwrite, compare section counts with the backup file. Write the step on blog.clincoo.buzz so teammates repeat the same ritual.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Official Clincoo app',source2:'Clincoo App',source3:'Clincoo Blog'}}}
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles['backup']) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles['backup'].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
