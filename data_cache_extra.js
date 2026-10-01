// Clincoo Blog cache extra 2026-10-01
(function(){
  var extra = [
    {id:'cache-hard-refresh-setelah-ganti-service-worker',langs:{id:{title:'Lakukan Hard Refresh setelah Mengganti Service Worker Clincoo',desc:'SW lama menahan HTML dan CSS. Setelah mengubah worker, paksa unduh ulang di pratinjau.',content:'<p class=\"mb-4\">Perubahan di editor.clincoo.buzz kadang tidak terlihat di app.clincoo.buzz karena service worker masih menyajikan berkas kemarin.</p><p class=\"mb-4\">Setelah mengedit sw.js atau strategi cache, buka DevTools, hapus service worker, lalu hard refresh. Jangan andalkan refresh biasa.</p><p class=\"mb-4\">Pastikan versi worker naik dan klien lama menerima skipWaiting dengan aman. Uji dua tab: satu masih lama, satu sudah baru.</p><p class=\"mb-4\">Catat langkah bersihkan-SW di blog.clincoo.buzz supaya tim tidak menyalahkan CSS yang sebenarnya sudah benar.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Editor resmi Clincoo',source2:'Clincoo App',source3:'Clincoo Blog'},en:{title:'Hard Refresh after You Change the Clincoo Service Worker',desc:'An old SW keeps HTML and CSS. After you change the worker, force a fresh download in preview.',content:'<p class=\"mb-4\">Edits in editor.clincoo.buzz sometimes never appear on app.clincoo.buzz because the service worker still serves yesterday\u2019s files.</p><p class=\"mb-4\">After you edit sw.js or the cache strategy, open DevTools, unregister the service worker, then hard refresh. Do not trust a normal refresh.</p><p class=\"mb-4\">Make sure the worker version bumps and old clients get skipWaiting safely. Test two tabs: one still old, one already new.</p><p class=\"mb-4\">Write the clear-SW steps on blog.clincoo.buzz so the team does not blame CSS that is already correct.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Official Clincoo editor',source2:'Clincoo App',source3:'Clincoo Blog'}}}
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles['cache']) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles['cache'].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
