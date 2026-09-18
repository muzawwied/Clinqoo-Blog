// Loader: muat semua file data kategori Clinqoo Blog secara PARALEL, lalu app.js
(function() {
  var files = ["data_panduan.js", "data_editor.js", "data_ai.js", "data_deploy.js", "data_tips.js", "data_coding.js", "data_coding_extra.js", "data_legal.js", "data_panduan_extra.js", "data_legal_extra.js", "data_editor_extra.js", "data_coding_extra2.js", "data_ai_extra.js", "data_deploy_extra.js", "data_tips_extra.js", "data_editor_extra2.js", "data_panduan_extra2.js", "data_deploy_extra2.js", "data_legal_extra2.js", "data_coding_extra3.js", "data_cerita.js", "data_cerita_extra.js", "data_cerita_extra2.js", "data_cerita_extra3.js", "data_cerita_extra4.js", "data_ai_extra2.js", "data_deploy_extra3.js", "data_panduan_extra3.js"];
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
    s.onerror = onFileDone;
    document.body.appendChild(s);
  });
})();
