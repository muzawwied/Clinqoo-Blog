// Loader: muat semua file data kategori Clinqoo Blog secara PARALEL, lalu app.js
// (sebelumnya sequential satu-satu — jauh lebih lambat karena menunggu tiap file selesai
// sebelum mulai file berikutnya, padahal file-file data ini independen satu sama lain)
(function() {
  var files = ["data_panduan.js", "data_editor.js", "data_ai.js", "data_deploy.js", "data_tips.js"];
  var loaded = 0;

  function onFileDone() {
    loaded++;
    if (loaded >= files.length) loadApp();
  }

  function loadApp() {
    var s = document.createElement('script');
    s.src = 'app.js';
    document.body.appendChild(s);
  }

  files.forEach(function(file) {
    var s = document.createElement('script');
    s.src = file;
    s.onload = onFileDone;
    s.onerror = onFileDone; // tetap lanjut walau satu file gagal, jangan sampai app.js tidak pernah dimuat
    document.body.appendChild(s);
  });
})();
