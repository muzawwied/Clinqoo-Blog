// Clincoo Blog api extra 2026-10-01
(function(){
  var extra = [
    {id:'api-tampilkan-kode-status-di-ui-error',langs:{id:{title:'Tampilkan Kode Status API pada UI Error Clincoo',desc:'Spinner yang tidak berhenti tidak membantu. Tampilkan status HTTP dan request id agar debug cepat.',content:'<p class=\"mb-4\">Di editor.clincoo.buzz, fetch yang gagal sering hanya menampilkan coba lagi. Pengguna dan AI tidak tahu apakah masalahnya 401, 404, atau 503.</p><p class=\"mb-4\">Pada blok error, tulis kode status dan pesan singkat dari server. Simpan request id jika API mengirim header korelasi.</p><p class=\"mb-4\">Bedakan jaringan putus dari respons 4xx. Jaringan butuh undur; 4xx butuh perbaikan input atau sesi di app.clincoo.buzz.</p><p class=\"mb-4\">Salin teks error itu saat minta bantuan. Jangan minta AI menebak dari spinner. Dokumentasikan pola ini di blog.clincoo.buzz.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Editor resmi Clincoo',source2:'Clincoo App',source3:'Clincoo Blog'},en:{title:'Show the API Status Code on Clincoo Error UI',desc:'A spinner that never stops does not help. Show the HTTP status and request id so debugging stays fast.',content:'<p class=\"mb-4\">In editor.clincoo.buzz, failed fetches often show only try again. Users and AI cannot tell a 401 from a 404 or 503.</p><p class=\"mb-4\">On the error block, print the status code and a short server message. Keep the request id if the API sends a correlation header.</p><p class=\"mb-4\">Separate a dropped network from a 4xx response. Networks need backoff; 4xx needs input or session fixes on app.clincoo.buzz.</p><p class=\"mb-4\">Paste that error text when you ask for help. Do not ask AI to guess from a spinner. Document the pattern on blog.clincoo.buzz.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Official Clincoo editor',source2:'Clincoo App',source3:'Clincoo Blog'}}}
  ,
{
  "id": "api-timeout-fetch-agar-ui-tidak-menggantung",
  "langs": {
    "id": {
      "title": "Beri Timeout pada Fetch API Clincoo agar UI Tidak Menggantung",
      "desc": "Fetch tanpa batas waktu membuat tombol simpan berputar selamanya. Batasi dengan AbortController lalu tampilkan pesan jelas.",
      "content": "<p class=\"mb-4\">Tombol simpan di editor.clincoo.buzz menunggu fetch selesai. Jika API diam, pengguna mengira halaman rusak dan menekan ulang.</p><p class=\"mb-4\">Buat AbortController, panggil abort setelah 8 sampai 12 detik, dan teruskan signal ke fetch. Jangan hanya mengandalkan timeout browser yang tidak konsisten.</p><p class=\"mb-4\">Bedakan error abort dari error jaringan dan dari status 4xx atau 5xx. Pesan abort: permintaan terlalu lama, coba lagi. Jangan tulis gagal tanpa sebab.</p><p class=\"mb-4\">Saat abort, kembalikan tombol ke keadaan bisa diklik. Jangan kosongkan isian form. Pengguna harus bisa mengulang tanpa mengetik ulang.</p><p class=\"mb-4\">Uji dengan mode offline DevTools dan dengan penundaan buatan. Catat batas waktu yang dipakai di blog.clincoo.buzz sebelum menayangkan di app.clincoo.buzz.</p>",
      "source": "Clincoo",
      "sourceUrl": "https://editor.clincoo.buzz/",
      "sourceSnippet": "Official Clincoo editor",
      "source2": "Clincoo App",
      "source3": "Clincoo Blog"
    },
    "en": {
      "title": "Add a Timeout to Clincoo API Fetch so the UI Does Not Hang",
      "desc": "A fetch with no time limit leaves the save button spinning forever. Cap it with AbortController, then show a clear message.",
      "content": "<p class=\"mb-4\">The save button on editor.clincoo.buzz waits for fetch to finish. If the API stays silent, people think the page is broken and click again.</p><p class=\"mb-4\">Create an AbortController, call abort after 8 to 12 seconds, and pass the signal to fetch. Do not rely only on a browser timeout that is inconsistent.</p><p class=\"mb-4\">Separate an abort error from a network error and from 4xx or 5xx status. Abort copy: the request took too long, try again. Do not write failed with no reason.</p><p class=\"mb-4\">On abort, return the button to a clickable state. Do not clear the form. People should retry without typing again.</p><p class=\"mb-4\">Test with DevTools offline mode and with an artificial delay. Record the timeout you use on blog.clincoo.buzz before shipping on app.clincoo.buzz.</p>",
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
    if (!window.countryDataFiles || !window.countryDataFiles['api']) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles['api'].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
