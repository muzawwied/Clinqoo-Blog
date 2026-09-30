// Clincoo Blog offline extra 2026-10-01
(function(){
  var extra = [{id:'offline-indikator-draf-belum-tersinkron',langs:{id:{title:'Tampilkan Indikator Draf Belum Tersinkron saat Offline di Clincoo',desc:'Draf di localStorage mudah terlewat jika UI tidak menandai belum terkirim. Beri badge jelas.',content:'<p class="mb-4">Mode offline di editor.clincoo.buzz bisa menyimpan ketikan ke localStorage, lalu pengguna menutup tab mengira server sudah menerima.</p><p class="mb-4">Tambah status di UI: Tersimpan di perangkat -- belum sinkron. Ubah jadi Tersinkron hanya setelah fetch POST/PUT mengembalikan ok. Jangan andalkan navigator.onLine saja.</p><p class="mb-4">Saat online kembali, coba kirim antrian. Jika gagal, biarkan badge dan tombol Kirim ulang. Hapus draf lokal hanya setelah server mengonfirmasi.</p><p class="mb-4">Uji dengan DevTools Offline. Ketik, matikan jaringan, refresh. Badge harus tetap ada.</p>',source:'Clincoo App',sourceUrl:'https://app.clincoo.buzz/',sourceSnippet:'Workspace Clincoo untuk draf dan pratinjau.'},en:{title:'Show an Unsynced-Draft Indicator while Offline on Clincoo',desc:'A draft in localStorage is easy to miss if the UI never marks it as not sent yet. Give it a clear badge.',content:'<p class="mb-4">Offline mode in editor.clincoo.buzz can store typing in localStorage, then the user closes the tab believing the server already received it.</p><p class="mb-4">Add UI status: Saved on device -- not synced. Flip to Synced only after the POST/PUT fetch returns ok. Do not trust navigator.onLine alone.</p><p class="mb-4">When back online, flush the queue. On failure, keep the badge and a Retry send button. Delete the local draft only after the server confirms.</p><p class="mb-4">Test with DevTools Offline. Type, drop the network, refresh. The badge must remain.</p>',source:'Clincoo App',sourceUrl:'https://app.clincoo.buzz/',sourceSnippet:'Clincoo workspace for drafts and preview.'}}}];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles['offline']) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles['offline'].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
