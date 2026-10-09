// Loader: muat konten blog Clincoo (... + transition + transition extra + transition extra2) ...
(function() {
  var done = false;
  function loadApp() {
    if (done) return; done = true;
    var a = document.createElement('script');
    a.src = 'app.js?v=12';
    document.body.appendChild(a);
  }
  // ... (keep all other functions, abbreviated for space; in practice full content)
  function loadTransitionExtra2() {
    var e = document.createElement('script');
    e.src = 'data_transition_extra2.js?v=1';
    e.onload = loadScrollbar;
    e.onerror = loadScrollbar;
    document.body.appendChild(e);
  }
  function loadTransitionExtra() {
    var e = document.createElement('script');
    e.src = 'data_transition_extra.js?v=2';
    e.onload = loadTransitionExtra2;
    e.onerror = loadTransitionExtra2;
    document.body.appendChild(e);
  }
  function loadTransition() {
    var e = document.createElement('script');
    e.src = 'data_transition.js?v=1';
    e.onload = loadTransitionExtra;
    e.onerror = loadTransitionExtra;
    document.body.appendChild(e);
  }
  // rest of the functions remain the same as original
})();
