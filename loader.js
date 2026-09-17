// Loader: muat semua file data kategori Clinqoo Blog, lalu app.js
(function() {
  var files = ["data_panduan.js", "data_editor.js", "data_ai.js", "data_deploy.js", "data_tips.js"];
  var i = 0;
  function loadNext() {
    if (i >= files.length) { loadApp(); return; }
    var s = document.createElement('script');
    s.src = files[i];
    s.onload = function() { i++; loadNext(); };
    document.body.appendChild(s);
  }
  function loadApp() {
    var s = document.createElement('script');
    s.src = 'app.js';
    document.body.appendChild(s);
  }
  loadNext();
})();
