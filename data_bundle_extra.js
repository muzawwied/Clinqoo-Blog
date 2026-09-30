// Clincoo Blog bundle extra 2026-09-30
(function(){
  var extra = [
    {id:'bundle-ukur-ukuran-sebelum-tambah-pustaka',langs:{id:{title:'Ukur Ukuran Bundle Clincoo sebelum Menambah Pustaka',desc:'Satu dependensi baru bisa menambah puluhan kilobyte. Cek budget bundle di pratinjau sebelum import.',content:'<p class=\"mb-4\">Import di editor.clincoo.buzz sering terasa murah sampai Lighthouse menunjuk JavaScript yang tidak terpakai.</p><p class=\"mb-4\">Catat ukuran transfer halaman sebelum dan sesudah menambah pustaka. Tolak perubahan jika budget terlampaui tanpa alasan.</p><p class=\"mb-4\">Pilih fungsi sempit, bukan SDK utuh. Tree-shake hanya bekerja jika import spesifik.</p><p class=\"mb-4\">Tempel laporan ukuran ke AI dan minta alternatif lebih kecil. Jangan minta menelan bundler baru di commit yang sama.</p><p class=\"mb-4\">Simpan angka budget di README proyek app.clincoo.buzz dan tautkan contoh di blog.clincoo.buzz.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Editor resmi Clincoo',source2:'Clincoo App',source3:'Clincoo Blog'},en:{title:'Measure the Clincoo Bundle Size before Adding a Library',desc:'One new dependency can add tens of kilobytes. Check the bundle budget in preview before you import.',content:'<p class=\"mb-4\">An import on editor.clincoo.buzz often feels cheap until Lighthouse points at unused JavaScript.</p><p class=\"mb-4\">Record the page transfer size before and after adding the library. Reject the change if the budget is blown without a reason.</p><p class=\"mb-4\">Pick a narrow function, not a full SDK. Tree-shaking only works with a specific import.</p><p class=\"mb-4\">Paste the size report to AI and ask for a smaller alternative. Do not request a new bundler in the same commit.</p><p class=\"mb-4\">Store the budget number in the app.clincoo.buzz project README and link an example on blog.clincoo.buzz.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Official Clincoo editor',source2:'Clincoo App',source3:'Clincoo Blog'}}}
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles['bundle']) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles['bundle'].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
