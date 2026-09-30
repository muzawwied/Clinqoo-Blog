// Clincoo Blog performa extra 2026-10-01
(function(){
  var extra = [{id:'performa-hindari-png-screenshot-tanpa-kompres',langs:{id:{title:'Hindari PNG Screenshot Mentah tanpa Kompres di Clincoo',desc:'Screenshot PNG dari desktop mudah 2-8 MB. Kompres atau ganti WebP sebelum masuk hero atau galeri.',content:'<p class="mb-4">Banyak proyek Clincoo lambat karena satu gambar: capture layar penuh yang dijatuhkan ke folder aset tanpa diubah. Network panel DevTools menunjuk file itu di urutan atas.</p><p class="mb-4">Ukur dulu. Target kasar hero di bawah 200 KB. Screenshot UI lebih aman sebagai WebP atau JPEG kualitas 70-80, bukan PNG 32-bit.</p><p class="mb-4">Kalau butuh ketajaman teks pada UI, potong area relevan. Set width dan height di tag img agar layout tidak loncat.</p><p class="mb-4">Setelah ganti berkas, hard refresh pratinjau editor.clincoo.buzz. Bandingkan LCP sebelum dan sesudah.</p>',source:'web.dev images',sourceUrl:'https://web.dev/fast/#optimize-your-images',sourceSnippet:'Optimize images to reduce bytes and improve LCP.'},en:{title:'Avoid Raw Uncompressed PNG Screenshots on Clincoo',desc:'Desktop PNG screenshots easily weigh 2-8 MB. Compress or switch to WebP before they hit a hero or gallery.',content:'<p class="mb-4">Many Clincoo projects are slow because of one image: a full-screen capture dropped into the assets folder unchanged. The DevTools Network panel puts that file at the top.</p><p class="mb-4">Measure first. A rough hero target is under 200 KB. UI screenshots are safer as WebP or JPEG at quality 70-80, not 32-bit PNG.</p><p class="mb-4">If you need sharp UI text, crop the relevant region. Set width and height on the img tag so the layout does not jump.</p><p class="mb-4">After replacing the file, hard-refresh the preview on editor.clincoo.buzz. Compare LCP before and after.</p>',source:'web.dev images',sourceUrl:'https://web.dev/fast/#optimize-your-images',sourceSnippet:'Optimize images to reduce bytes and improve LCP.'}}}];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles['performa']) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles['performa'].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
