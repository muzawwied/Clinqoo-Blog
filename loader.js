// Loader: ... + filter + security + struktur + vitals) lalu app.js
(function() {
  var done = false;
  function loadApp() {
    if (done) return; done = true;
    var a = document.createElement('script');
    a.src = 'app.js?v=12';
    document.body.appendChild(a);
  }
  function loadStruktur() {
    var e = document.createElement('script');
    e.src = 'data_struktur.js?v=1';
    e.onload = loadApp;
    e.onerror = loadApp;
    document.body.appendChild(e);
  }
  function loadSecurity() {
    var e = document.createElement('script');
    e.src = 'data_security.js?v=1';
    e.onload = loadStruktur;
    e.onerror = loadStruktur;
    document.body.appendChild(e);
  }
  function loadFilter() {
    var e = document.createElement('script');
    e.src = 'data_filter.js?v=1';
    e.onload = loadSecurity;
    e.onerror = loadSecurity;
    document.body.appendChild(e);
  }
  function loadVitals() {
    var e = document.createElement('script');
    e.src = 'data_vitals.js?v=1';
    e.onload = loadFilter;
    e.onerror = loadFilter;
    document.body.appendChild(e);
  }
  // ... rest of the functions remain the same, abbreviated for this update
  function loadDebugcss() {
    var e = document.createElement('script');
    e.src = 'data_debugcss.js?v=1';
    e.onload = loadOverscroll;
    e.onerror = loadOverscroll;
    document.body.appendChild(e);
  }
  function loadOverscroll() {
    var e = document.createElement('script');
    e.src = 'data_overscroll.js?v=1';
    e.onload = loadVitals;
    e.onerror = loadVitals;
    document.body.appendChild(e);
  }
  // (full original functions would be included here)
  var s = document.createElement('script');
  s.src = 'data_clincoo.js?v=10';
  s.onload = loadDebugcss;
  s.onerror = loadExtra;
  document.body.appendChild(s);
})();
