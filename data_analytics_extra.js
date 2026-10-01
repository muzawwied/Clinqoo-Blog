// Clincoo Blog analytics extra 2026-10-01
(function(){
  var extra = [
    {id:'analytics-debug-view-sebelum-rilis',langs:{id:{title:'Aktifkan Debug View Analytics sebelum Rilis Clincoo',desc:'Jangan tebak event sudah jalan. Nyalakan mode debug di pratinjau editor lalu cek hit satu per satu.',content:'<p class=\"mb-4\">Banyak proyek di editor.clincoo.buzz memasang skrip pengukuran lalu langsung deploy ke app.clincoo.buzz. Event tidak muncul, lalu tim menyalahkan filter bot.</p><p class=\"mb-4\">Nyalakan debug view atau flag debug di lingkungan pratinjau. Kirim satu aksi: buka halaman, klik CTA, kirim form. Pastikan nama event dan parameter sesuai rencana.</p><p class=\"mb-4\">Jika hit tidak muncul, cek pemblokir, consent, dan apakah skrip dimuat dua kali. Jangan menambah event baru sebelum yang pertama terlihat.</p><p class=\"mb-4\">Matikan debug sebelum produksi agar laporan mingguan tidak penuh hit percobaan. Catat checklist ini di blog.clincoo.buzz.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Editor resmi Clincoo',source2:'Clincoo App',source3:'Clincoo Blog'},en:{title:'Turn on Analytics Debug View before You Ship Clincoo',desc:'Do not guess that events fire. Enable debug mode in the editor preview and inspect hits one by one.',content:'<p class=\"mb-4\">Many projects in editor.clincoo.buzz drop a measurement script and deploy to app.clincoo.buzz. Events never show, then the team blames a bot filter.</p><p class=\"mb-4\">Turn on debug view or a debug flag in preview. Fire one action: open the page, click the CTA, submit the form. Confirm the event name and parameters match the plan.</p><p class=\"mb-4\">If the hit is missing, check blockers, consent, and whether the script loaded twice. Do not add new events before the first one is visible.</p><p class=\"mb-4\">Disable debug before production so weekly reports are not full of test hits. Record this checklist on blog.clincoo.buzz.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Official Clincoo editor',source2:'Clincoo App',source3:'Clincoo Blog'}}}
  ,
{
  "id": "analytics-pisahkan-event-debug-dan-produksi",
  "langs": {
    "id": {
      "title": "Pisahkan Event Debug dari Produksi di Analytics Clincoo",
      "desc": "Event dari pratinjau editor jangan masuk properti produksi. Pakai flag debug dan filter sebelum rilis.",
      "content": "<p class=\"mb-4\">Pratinjau di editor.clincoo.buzz sering menembakkan klik uji. Jika event itu masuk properti produksi, angka di app.clincoo.buzz terlihat ramai padahal pengunjung asli belum datang.</p><p class=\"mb-4\">Beri setiap event field env: preview atau production. Di pratinjau, set preview. Di situs yang sudah tayang, set production. Jangan andalkan hostname yang berubah-ubah.</p><p class=\"mb-4\">Di dasbor analytics, buat filter yang membuang env sama dengan preview. Simpan tampilan terpisah untuk uji. Jangan hapus filter itu saat membagikan laporan.</p><p class=\"mb-4\">Cek satu sesi uji: buka pratinjau, klik tombol utama, lalu pastikan event tidak muncul di laporan produksi. Ulangi di tab penyamaran situs tayang.</p><p class=\"mb-4\">Catat nama event dan field env di blog.clincoo.buzz supaya orang lain tidak mengirim ulang event uji ke properti yang sama.</p>",
      "source": "Clincoo",
      "sourceUrl": "https://editor.clincoo.buzz/",
      "sourceSnippet": "Official Clincoo editor",
      "source2": "Clincoo App",
      "source3": "Clincoo Blog"
    },
    "en": {
      "title": "Separate Debug Events from Production in Clincoo Analytics",
      "desc": "Events from the editor preview should not land in the production property. Use a debug flag and filter before release.",
      "content": "<p class=\"mb-4\">Preview on editor.clincoo.buzz often fires test clicks. If those events enter the production property, numbers on app.clincoo.buzz look busy before real visitors arrive.</p><p class=\"mb-4\">Give every event an env field: preview or production. Set preview in the editor preview. Set production on the published site. Do not rely on a hostname that changes.</p><p class=\"mb-4\">In the analytics dashboard, add a filter that drops env equal to preview. Keep a separate view for tests. Do not remove that filter when you share a report.</p><p class=\"mb-4\">Check one test session: open preview, click the main button, then confirm the event does not appear in the production report. Repeat in a private tab on the live site.</p><p class=\"mb-4\">Write the event name and env field on blog.clincoo.buzz so others do not send test events into the same property again.</p>",
      "source": "Clincoo",
      "sourceUrl": "https://editor.clincoo.buzz/",
      "sourceSnippet": "Official Clincoo editor",
      "source2": "Clincoo App",
      "source3": "Clincoo Blog"
    }
  }
}
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
