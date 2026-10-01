// Clincoo Blog analytics extra 2026-10-01
(function(){
  var extra = [
    {id:'analytics-debug-view-sebelum-rilis',langs:{id:{title:'Aktifkan Debug View Analytics sebelum Rilis Clincoo',desc:'Jangan tebak event sudah jalan. Nyalakan mode debug di pratinjau editor lalu cek hit satu per satu.',content:'<p class=\"mb-4\">Banyak proyek di editor.clincoo.buzz memasang skrip pengukuran lalu langsung deploy ke app.clincoo.buzz. Event tidak muncul, lalu tim menyalahkan filter bot.</p><p class=\"mb-4\">Nyalakan debug view atau flag debug di lingkungan pratinjau. Kirim satu aksi: buka halaman, klik CTA, kirim form. Pastikan nama event dan parameter sesuai rencana.</p><p class=\"mb-4\">Jika hit tidak muncul, cek pemblokir, consent, dan apakah skrip dimuat dua kali. Jangan menambah event baru sebelum yang pertama terlihat.</p><p class=\"mb-4\">Matikan debug sebelum produksi agar laporan mingguan tidak penuh hit percobaan. Catat checklist ini di blog.clincoo.buzz.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Editor resmi Clincoo',source2:'Clincoo App',source3:'Clincoo Blog'},en:{title:'Turn on Analytics Debug View before You Ship Clincoo',desc:'Do not guess that events fire. Enable debug mode in the editor preview and inspect hits one by one.',content:'<p class=\"mb-4\">Many projects in editor.clincoo.buzz drop a measurement script and deploy to app.clincoo.buzz. Events never show, then the team blames a bot filter.</p><p class=\"mb-4\">Turn on debug view or a debug flag in preview. Fire one action: open the page, click the CTA, submit the form. Confirm the event name and parameters match the plan.</p><p class=\"mb-4\">If the hit is missing, check blockers, consent, and whether the script loaded twice. Do not add new events before the first one is visible.</p><p class=\"mb-4\">Disable debug before production so weekly reports are not full of test hits. Record this checklist on blog.clincoo.buzz.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Official Clincoo editor',source2:'Clincoo App',source3:'Clincoo Blog'}}}
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
