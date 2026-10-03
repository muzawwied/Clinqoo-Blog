// Loader: muat konten blog Clincoo (data_clinqoo.js + extra) lalu app.js
(function() {
  var done = false;
  function loadApp() {
    if (done) return; done = true;
    var a = document.createElement('script');
    a.src = 'app.js?v=12';
    document.body.appendChild(a);
  }
  function loadExtra() {
    var e = document.createElement('script');
    e.src = 'data_clinqoo_extra.js?v=1';
    e.onload = loadApp;
    e.onerror = loadApp;
    document.body.appendChild(e);
  }
  var s = document.createElement('script');
  s.src = 'data_clinqoo.js?v=9';
  s.onload = loadExtra;
  s.onerror = loadExtra;
  document.body.appendChild(s);
})();
