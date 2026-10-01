// Clincoo Blog bundle extra3 2026-10-01 WIB
(function(){
  var extra = [
    {id:'bundle-audit-import-efek-samping',langs:{id:{title:'Audit Import Efek Samping sebelum Bundle Clincoo di-Tree-Shake',desc:'Import yang hanya menjalankan kode di level atas mengalahkan tree-shake. Cari efek samping dulu, baru pecah chunk.',content:'<p class=\"mb-4\">Pustaka yang menjalankan kode saat file diimpor membuat bundler di editor.clincoo.buzz takut membuang sisa modul.</p><p class=\"mb-4\">Cari pola import \"pkg\" tanpa kurung kurawal, lalu buka file itu. Jika ada polyfill, CSS, atau analytics di luar fungsi, itu efek samping.</p><p class=\"mb-4\">Pindahkan inisialisasi ke fungsi yang dipanggil eksplisit. Biarkan import bernama hanya menarik fungsi yang dipakai halaman.</p><p class=\"mb-4\">Tempel cuplikan import ke AI dan minta daftar efek samping, bukan rewrite bundler. Tolak saran yang menambah plugin baru di commit yang sama.</p><p class=\"mb-4\">Catat paket yang lolos audit di README app.clincoo.buzz dan tautkan contoh sebelum-sesudah di blog.clincoo.buzz.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Editor resmi Clincoo',source2:'Clincoo App',source3:'Clincoo Blog'},en:{title:'Audit Side-Effect Imports before Tree-Shaking the Clincoo Bundle',desc:'An import that runs top-level code defeats tree-shaking. Find the side effect first, then split the chunk.',content:'<p class=\"mb-4\">A library that runs code when the file is imported makes the bundler on editor.clincoo.buzz afraid to drop the rest of the module.</p><p class=\"mb-4\">Look for import \"pkg\" without braces, then open that file. Polyfill, CSS, or analytics outside a function is a side effect.</p><p class=\"mb-4\">Move initialization into a function that is called explicitly. Leave named imports pulling only what the page uses.</p><p class=\"mb-4\">Paste the import snippet to AI and ask for the side-effect list, not a bundler rewrite. Reject a new plugin in the same commit.</p><p class=\"mb-4\">Record packages that pass the audit in the app.clincoo.buzz README and link a before-after example on blog.clincoo.buzz.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Official Clincoo editor',source2:'Clincoo App',source3:'Clincoo Blog'}}}
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
