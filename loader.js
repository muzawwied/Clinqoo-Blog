// Loader: muat semua file data kategori Clincoo Blog secara PARALEL, lalu app.js
(function() {
  var files = ["data_panduan.js", "data_editor.js", "data_ai.js", "data_deploy.js", "data_tips.js", "data_coding.js", "data_coding_extra.js", "data_legal.js", "data_panduan_extra.js", "data_legal_extra.js", "data_editor_extra.js", "data_coding_extra2.js", "data_ai_extra.js", "data_deploy_extra.js", "data_tips_extra.js", "data_editor_extra2.js", "data_panduan_extra2.js", "data_deploy_extra2.js", "data_legal_extra2.js", "data_coding_extra3.js", "data_cerita.js", "data_cerita_extra.js", "data_cerita_extra2.js", "data_cerita_extra3.js", "data_cerita_extra4.js", "data_ai_extra2.js", "data_deploy_extra3.js", "data_panduan_extra3.js", "data_cerita_extra5.js", "data_editor_extra3.js", "data_legal_extra3.js", "data_panduan_extra4.js", "data_deploy_extra4.js", "data_tips_extra2.js", "data_ai_extra3.js", "data_panduan_extra5.js", "data_editor_extra4.js", "data_legal_extra4.js", "data_security.js", "data_security_extra.js", "data_template.js", "data_template_extra.js", "data_legal_extra5.js", "data_mobile.js", "data_mobile_extra.js", "data_performa.js", "data_performa_extra.js", "data_security_extra2.js", "data_komunitas.js", "data_komunitas_extra.js", "data_seo.js", "data_akses.js", "data_akses_extra.js", "data_seo_extra.js", "data_akses_extra2.js", "data_mobile_extra2.js", "data_performa_extra2.js", "data_komunitas_extra2.js"];
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
