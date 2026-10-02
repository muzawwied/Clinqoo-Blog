// Clincoo Blog audit extra 2026-10-02 WIB
(function(){
  var extra = [
    {id:'audit-kontras-teks-sebelum-publish',langs:{id:{title:'Cek Kontras Teks Sebelum Publish Halaman Clincoo',desc:'Teks abu-abu di atas kartu terang sering gagal WCAG. Ukur rasio sebelum publish, jangan andalkan mata di layar yang sudah dikalibrasi.',content:'<p class="mb-4">Halaman di app.clincoo.buzz sering lolos review visual, lalu gagal saat teks #9aa0a6 diletakkan di atas putih. Pengguna di luar ruangan tidak membaca deskripsi tombol.</p><p class="mb-4">Ukur pasangan warna dengan rasio minimal 4.5:1 untuk teks biasa dan 3:1 untuk teks besar atau komponen UI. DevTools punya panel Contrast pada color picker.</p><p class="mb-4">Jangan hanya menebalkan font untuk memperbaiki kontras. Ubah token warna di editor.clincoo.buzz, lalu cek ulang placeholder dan teks disabled.</p><p class="mb-4">Saat stuck, kirim dua nilai hex ke AI dan minta pasangan yang lolos, bukan palet baru seluruh merek.</p><p class="mb-4">Simpan tangkapan rasio di catatan rilis. Tautkan pola ini dari blog.clincoo.buzz agar audit berikutnya tidak mengulang kesalahan yang sama.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Editor resmi Clincoo',source2:'Clincoo App',source3:'Clincoo Blog'},en:{title:'Check Text Contrast Before Publishing a Clincoo Page',desc:'Gray text on a light card often fails WCAG. Measure the ratio before publish instead of trusting a calibrated screen.',content:'<p class="mb-4">A page on app.clincoo.buzz can pass a visual review, then fail when #9aa0a6 sits on white. People outdoors cannot read the button description.</p><p class="mb-4">Measure each pair to at least 4.5:1 for body text and 3:1 for large text or UI components. DevTools shows Contrast in the color picker.</p><p class="mb-4">Do not only bold the font to fake contrast. Change the color token in editor.clincoo.buzz, then recheck placeholders and disabled text.</p><p class="mb-4">When stuck, send two hex values to AI and ask for a passing pair, not a new brand palette.</p><p class="mb-4">Keep the ratio screenshot in the release note. Link the pattern from blog.clincoo.buzz so the next audit does not repeat it.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Official Clincoo editor',source2:'Clincoo App',source3:'Clincoo Blog'}}}
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles['audit']) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles['audit'].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
