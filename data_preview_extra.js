// Clincoo Blog preview extra 2026-09-30
(function(){
  var extra = [
    {id:'preview-device-toolbar-devtools',langs:{id:{title:'Uji Pratinjau Clincoo lewat Device Toolbar DevTools',desc:'Resize jendela kasar tidak meniru viewport HP. Device toolbar menampilkan lebar dan DPR yang lebih jujur.',content:'<p class="mb-4">Di editor.clincoo.buzz, layout lulus di jendela yang diperkecil tapi pecah di iPhone.</p><p class="mb-4">Buka DevTools Device Toolbar. Pilih 390px dan 360px. Cek overflow horizontal.</p><p class="mb-4">Kirim screenshot toolbar ke AI, bukan minta rewrite layout.</p><p class="mb-4">Ulangi di app.clincoo.buzz lalu tautkan checklist di blog.clincoo.buzz.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Editor resmi Clincoo',source2:'Clincoo App',source3:'Clincoo Blog'},en:{title:'Test a Clincoo Preview with the DevTools Device Toolbar',desc:'Roughly resizing the window does not mimic a phone viewport. The device toolbar shows honest width and DPR.',content:'<p class="mb-4">On editor.clincoo.buzz, a layout passes a shrunken window but breaks on iPhone.</p><p class="mb-4">Open the DevTools Device Toolbar. Pick 390px and 360px. Check horizontal overflow.</p><p class="mb-4">Send a toolbar screenshot to AI instead of a layout rewrite.</p><p class="mb-4">Repeat on app.clincoo.buzz and link the checklist on blog.clincoo.buzz.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Official Clincoo editor',source2:'Clincoo App',source3:'Clincoo Blog'}}}
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles['preview']) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles['preview'].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
