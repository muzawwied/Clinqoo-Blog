// Clincoo Blog — artikel devtools tambahan 2026-09-30
(function(){
  var extra = [{"id": "devtools-preserve-log-saat-redirect", "langs": {"id": {"title": "Hidupkan Preserve Log saat Halaman Clincoo Redirect", "desc": "Error sebelum pindah URL hilang jika Console dikosongkan otomatis.", "content": "<p class=\"mb-4\">Banyak alur login di app.clincoo.buzz mengirim Anda ke URL baru. Console kosong sebelum Anda sempat baca error.</p><p class=\"mb-4\">Buka DevTools, centang Preserve log di Console dan Persist log di Network.</p><p class=\"mb-4\">Ulangi aksi yang memicu redirect. Frame error dan status HTTP tetap terlihat.</p><p class=\"mb-4\">Salin stack plus request 3xx atau 4xx. Jangan menebak file di editor.clincoo.buzz.</p><p class=\"mb-4\">Clincoo di blog.clincoo.buzz lebih mudah di-debug bila jejak sebelum redirect tidak terhapus.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Editor resmi Clincoo", "source2": "Clincoo App", "source3": "Clincoo Blog"}, "en": {"title": "Turn on Preserve Log when a Clincoo Page Redirects", "desc": "Errors before a URL change vanish if the Console clears itself.", "content": "<p class=\"mb-4\">Many login flows on app.clincoo.buzz send you to a new URL. The Console is empty before you can read the error.</p><p class=\"mb-4\">Open DevTools, enable Preserve log in Console and Persist log in Network.</p><p class=\"mb-4\">Repeat the action that triggers the redirect. The error frame and HTTP status stay visible.</p><p class=\"mb-4\">Copy the stack plus the 3xx or 4xx request. Do not guess the file on editor.clincoo.buzz.</p><p class=\"mb-4\">Clincoo on blog.clincoo.buzz is easier to debug when the trail before the redirect is not wiped.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Official Clincoo editor", "source2": "Clincoo App", "source3": "Clincoo Blog"}}}];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["devtools"]) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles["devtools"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
