// Clincoo Blog analytics extra2 2026-10-02 WIB
(function(){
  var extra = [
    {id:'analytics-nama-event-snake-case',langs:{id:{title:'Pakai snake_case Konsisten untuk Nama Event Analytics Clincoo',desc:'Nama event yang campur huruf besar dan spasi pecah laporan. Tetapkan satu pola sebelum menambah hit baru.',content:'<p class=\"mb-4\">Banyak halaman di editor.clincoo.buzz mengirim Click CTA, click_cta, dan clickCta untuk aksi yang sama. Laporan mingguan di app.clincoo.buzz lalu terlihat sepi padahal tombol sering ditekan.</p><p class=\"mb-4\">Tetapkan snake_case pendek: cta_click, form_submit, page_view. Simpan daftar nama di satu file, jangan ketik ulang di setiap halaman.</p><p class=\"mb-4\">Cek tab network atau debug view. Jika nama baru tidak ada di daftar, jangan deploy. Minta AI menandai string event yang menyimpang, satu file satu permintaan.</p><p class=\"mb-4\">Jangan masukkan email atau nama orang ke parameter event. Cukup id halaman dan hasil sukses atau gagal.</p><p class=\"mb-4\">Catat pola nama di blog.clincoo.buzz supaya kontributor berikutnya tidak membuat ejaan ketiga.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Editor resmi Clincoo',source2:'Clincoo App',source3:'Clincoo Blog'},en:{title:'Keep Analytics Event Names in Consistent snake_case',desc:'Mixed-case event names with spaces split your reports. Lock one pattern before you add another hit.',content:'<p class=\"mb-4\">Many pages in editor.clincoo.buzz send Click CTA, click_cta, and clickCta for the same action. Weekly reports in app.clincoo.buzz then look empty even though the button is used.</p><p class=\"mb-4\">Lock short snake_case names: cta_click, form_submit, page_view. Keep the list in one file instead of retyping it on every page.</p><p class=\"mb-4\">Check the network tab or debug view. If a new name is not on the list, do not deploy. Ask AI to flag event strings that drift, one file per request.</p><p class=\"mb-4\">Do not put email or a person\'s name in event parameters. A page id and success or failure is enough.</p><p class=\"mb-4\">Write the naming pattern on blog.clincoo.buzz so the next contributor does not invent a third spelling.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Official Clincoo editor',source2:'Clincoo App',source3:'Clincoo Blog'}}}
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles['analytics']) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles['analytics'].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
