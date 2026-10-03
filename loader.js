// Loader: muat konten blog Clincoo (data_clinqoo.js) lalu app.js
(function() {
  var done = false;
  function loadApp() {
    if (done) return; done = true;
    var a = document.createElement('script');
    a.src = 'app.js?v=8';
    document.body.appendChild(a);
  }
  var s = document.createElement('script');
  s.src = 'data_clinqoo.js?v=2';
  s.onload = loadApp;
  s.onerror = loadApp;
  document.body.appendChild(s);
})();
