// Clincoo Blog — artikel ssl extra3 2026-09-30
(function(){
  var extra = [
    {id:'ssl-service-worker-hanya-https',langs:{id:{title:'Service Worker Clincoo Hanya Jalan di HTTPS',desc:'Service worker ditolak di HTTP. PWA dan cache pratinjau pecah jika host belum aman.',content:'<p class="mb-4">Di editor.clincoo.buzz, register service worker gagal jika halaman masih http:// atau sertifikat tidak dipercaya.</p><p class="mb-4">Buka konsol: Failed to register a ServiceWorker. Screenshot plus URL lengkap, bukan hanya "PWA tidak jalan".</p><p class="mb-4">Pastikan app.clincoo.buzz sudah gembok valid sebelum menguji offline cache. Localhost adalah pengecualian; domain publik bukan.</p><p class="mb-4">Tempel error register ke AI. Jangan minta AI memaksa worker di konteks tidak aman.</p><p class="mb-4">Clincoo di blog.clincoo.buzz memakai HTTPS agar cache dan notifikasi tidak diam-diam mati.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Editor resmi Clincoo',source2:'Clincoo App',source3:'Clincoo Blog'},en:{title:'Clincoo Service Workers Run Only on HTTPS',desc:'A service worker is rejected on HTTP. PWA and preview cache break if the host is not secure.',content:'<p class="mb-4">On editor.clincoo.buzz, service worker registration fails if the page is still http:// or the certificate is untrusted.</p><p class="mb-4">Open the console: Failed to register a ServiceWorker. Screenshot plus the full URL, not only "PWA does not work".</p><p class="mb-4">Confirm app.clincoo.buzz has a valid lock before testing offline cache. Localhost is an exception; a public host is not.</p><p class="mb-4">Paste the register error to AI. Do not ask AI to force a worker in an insecure context.</p><p class="mb-4">Clincoo on blog.clincoo.buzz uses HTTPS so cache and notifications do not fail quietly.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Official Clincoo editor',source2:'Clincoo App',source3:'Clincoo Blog'}}}
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles['ssl']) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles['ssl'].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
