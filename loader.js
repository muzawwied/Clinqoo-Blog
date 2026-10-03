// Loader: muat konten blog Clincoo (data_clinqoo.js + semantic + form + dialog + aria) lalu app.js
(function() {
  var done = false;
  function loadApp() {
    if (done) return; done = true;
    var a = document.createElement('script');
    a.src = 'app.js?v=12';
    document.body.appendChild(a);
  }
  function loadAria() {
    var e = document.createElement('script');
    e.src = 'data_aria.js?v=1';
    e.onload = loadApp;
    e.onerror = loadApp;
    document.body.appendChild(e);
  }
  function loadDialog() {
    var e = document.createElement('script');
    e.src = 'data_dialog.js?v=2';
    e.onload = loadAria;
    e.onerror = loadAria;
    document.body.appendChild(e);
  }
  function loadForm() {
    var e = document.createElement('script');
    e.src = 'data_form.js?v=2';
    e.onload = loadDialog;
    e.onerror = loadDialog;
    document.body.appendChild(e);
  }
  function loadSemantic() {
    var e = document.createElement('script');
    e.src = 'data_semantic.js?v=2';
    e.onload = loadForm;
    e.onerror = loadForm;
    document.body.appendChild(e);
  }
  function loadExtra() {
    var e = document.createElement('script');
    e.src = 'data_clinqoo_extra.js?v=1';
    e.onload = loadSemantic;
    e.onerror = loadSemantic;
    document.body.appendChild(e);
  }
  var s = document.createElement('script');
  s.src = 'data_clinqoo.js?v=10';
  s.onload = loadExtra;
  s.onerror = loadExtra;
  document.body.appendChild(s);
})();
