// Loader: muat konten blog Clincoo (data_clincoo.js + extra + semantic + form + dialog + aria + keyboard + prompt + console + seo + csp + network + prefetch + pembayaran + cls + popover + container + cerita extra + anchor + testing + testing extra + stack + stack extra + mcp + mcp extra + integrasi-ai extra + integrasi-ai extra2 + modul extra + fokus + fokus extra + fokus extra2 + selector + selector extra + variabel + variabel extra + variabel extra2 + gambar + gambar extra + git + motion + motion extra + spacing + zindex) lalu app.js
(function() {
  var done = false;
  function loadApp() {
    if (done) return; done = true;
    var a = document.createElement('script');
    a.src = 'app.js?v=12';
    document.body.appendChild(a);
  }
  function loadZindex() {
    var e = document.createElement('script');
    e.src = 'data_zindex.js?v=1';
    e.onload = loadApp;
    e.onerror = loadApp;
    document.body.appendChild(e);
  }
  function loadSpacing() {
    var e = document.createElement('script');
    e.src = 'data_spacing.js?v=2';
    e.onload = loadZindex;
    e.onerror = loadZindex;
    document.body.appendChild(e);
  }
  function loadMotionExtra() {
    var e = document.createElement('script');
    e.src = 'data_motion_extra.js?v=1';
    e.onload = loadSpacing;
    e.onerror = loadSpacing;
    document.body.appendChild(e);
  }
  function loadMotion() {
    var e = document.createElement('script');
    e.src = 'data_motion.js?v=1';
    e.onload = loadMotionExtra;
    e.onerror = loadMotionExtra;
    document.body.appendChild(e);
  }
  function loadGit() {
    var e = document.createElement('script');
    e.src = 'data_git.js?v=1';
    e.onload = loadMotion;
    e.onerror = loadMotion;
    document.body.appendChild(e);
  }
  function loadGambarExtra() {
    var e = document.createElement('script');
    e.src = 'data_gambar_extra.js?v=1';
    e.onload = loadGit;
    e.onerror = loadGit;
    document.body.appendChild(e);
  }
  function loadGambar() {
    var e = document.createElement('script');
    e.src = 'data_gambar.js?v=1';
    e.onload = loadGambarExtra;
    e.onerror = loadGambarExtra;
    document.body.appendChild(e);
  }
  function loadVariabelExtra2() {
    var e = document.createElement('script');
    e.src = 'data_variabel_extra2.js?v=2';
    e.onload = loadGambar;
    e.onerror = loadGambar;
    document.body.appendChild(e);
  }
  function loadVariabelExtra() {
    var e = document.createElement('script');
    e.src = 'data_variabel_extra.js?v=1';
    e.onload = loadVariabelExtra2;
    e.onerror = loadVariabelExtra2;
    document.body.appendChild(e);
  }
  function loadVariabel() {
    var e = document.createElement('script');
    e.src = 'data_variabel.js?v=1';
    e.onload = loadVariabelExtra;
    e.onerror = loadVariabelExtra;
    document.body.appendChild(e);
  }
  function loadSelectorExtra() {
    var e = document.createElement('script');
    e.src = 'data_selector_extra.js?v=2';
    e.onload = loadVariabel;
    e.onerror = loadVariabel;
    document.body.appendChild(e);
  }
  function loadSelector() {
    var e = document.createElement('script');
    e.src = 'data_selector.js?v=1';
    e.onload = loadSelectorExtra;
    e.onerror = loadSelectorExtra;
    document.body.appendChild(e);
  }
  function loadFokusExtra2() {
    var e = document.createElement('script');
    e.src = 'data_fokus_extra2.js?v=2';
    e.onload = loadSelector;
    e.onerror = loadSelector;
    document.body.appendChild(e);
  }
  function loadFokusExtra() {
    var e = document.createElement('script');
    e.src = 'data_fokus_extra.js?v=1';
    e.onload = loadFokusExtra2;
    e.onerror = loadFokusExtra2;
    document.body.appendChild(e);
  }
  function loadFokus() {
    var e = document.createElement('script');
    e.src = 'data_fokus.js?v=1';
    e.onload = loadFokusExtra;
    e.onerror = loadFokusExtra;
    document.body.appendChild(e);
  }
  function loadModulExtra() {
    var e = document.createElement('script');
    e.src = 'data_modul_extra.js?v=1';
    e.onload = loadFokus;
    e.onerror = loadFokus;
    document.body.appendChild(e);
  }
  function loadIntegrasiAiExtra2() {
    var e = document.createElement('script');
    e.src = 'data_integrasi_ai_extra2.js?v=1';
    e.onload = loadModulExtra;
    e.onerror = loadModulExtra;
    document.body.appendChild(e);
  }
  function loadIntegrasiAiExtra() {
    var e = document.createElement('script');
    e.src = 'data_integrasi_ai_extra.js?v=1';
    e.onload = loadIntegrasiAiExtra2;
    e.onerror = loadIntegrasiAiExtra2;
    document.body.appendChild(e);
  }
  function loadMcpExtra() {
    var e = document.createElement('script');
    e.src = 'data_mcp_extra.js?v=1';
    e.onload = loadIntegrasiAiExtra;
    e.onerror = loadIntegrasiAiExtra;
    document.body.appendChild(e);
  }
  function loadMcp() {
    var e = document.createElement('script');
    e.src = 'data_mcp.js?v=1';
    e.onload = loadMcpExtra;
    e.onerror = loadMcpExtra;
    document.body.appendChild(e);
  }
  function loadStackExtra() {
    var e = document.createElement('script');
    e.src = 'data_stack_extra.js?v=2';
    e.onload = loadMcp;
    e.onerror = loadMcp;
    document.body.appendChild(e);
  }
  function loadStack() {
    var e = document.createElement('script');
    e.src = 'data_stack.js?v=1';
    e.onload = loadStackExtra;
    e.onerror = loadStackExtra;
    document.body.appendChild(e);
  }
  function loadTestingExtra() {
    var e = document.createElement('script');
    e.src = 'data_testing_extra.js?v=3';
    e.onload = loadStack;
    e.onerror = loadStack;
    document.body.appendChild(e);
  }
  function loadTesting() {
    var e = document.createElement('script');
    e.src = 'data_testing.js?v=1';
    e.onload = loadTestingExtra;
    e.onerror = loadTestingExtra;
    document.body.appendChild(e);
  }
  function loadAnchor() {
    var e = document.createElement('script');
    e.src = 'data_anchor.js?v=1';
    e.onload = loadTesting;
    e.onerror = loadTesting;
    document.body.appendChild(e);
  }
  function loadCeritaExtra() {
    var e = document.createElement('script');
    e.src = 'data_cerita_extra.js?v=2';
    e.onload = loadAnchor;
    e.onerror = loadAnchor;
    document.body.appendChild(e);
  }
  function loadContainer() {
    var e = document.createElement('script');
    e.src = 'data_container.js?v=2';
    e.onload = loadCeritaExtra;
    e.onerror = loadCeritaExtra;
    document.body.appendChild(e);
  }
  function loadPopover() {
    var e = document.createElement('script');
    e.src = 'data_popover.js?v=2';
    e.onload = loadContainer;
    e.onerror = loadContainer;
    document.body.appendChild(e);
  }
  function loadCls() {
    var e = document.createElement('script');
    e.src = 'data_cls.js?v=2';
    e.onload = loadPopover;
    e.onerror = loadPopover;
    document.body.appendChild(e);
  }
  function loadPembayaranExtra() {
    var e = document.createElement('script');
    e.src = 'data_pembayaran_extra.js?v=1';
    e.onload = loadCls;
    e.onerror = loadCls;
    document.body.appendChild(e);
  }
  function loadPembayaran() {
    var e = document.createElement('script');
    e.src = 'data_pembayaran.js?v=1';
    e.onload = loadPembayaranExtra;
    e.onerror = loadPembayaranExtra;
    document.body.appendChild(e);
  }
  function loadPrefetch() {
    var e = document.createElement('script');
    e.src = 'data_prefetch.js?v=2';
    e.onload = loadPembayaran;
    e.onerror = loadPembayaran;
    document.body.appendChild(e);
  }
  function loadNetwork() {
    var e = document.createElement('script');
    e.src = 'data_network.js?v=2';
    e.onload = loadPrefetch;
    e.onerror = loadPrefetch;
    document.body.appendChild(e);
  }
  function loadCsp() {
    var e = document.createElement('script');
    e.src = 'data_csp.js?v=1';
    e.onload = loadNetwork;
    e.onerror = loadNetwork;
    document.body.appendChild(e);
  }
  function loadSeo() {
    var e = document.createElement('script');
    e.src = 'data_seo.js?v=1';
    e.onload = loadCsp;
    e.onerror = loadCsp;
    document.body.appendChild(e);
  }
  function loadConsole() {
    var e = document.createElement('script');
    e.src = 'data_console.js?v=3';
    e.onload = loadSeo;
    e.onerror = loadSeo;
    document.body.appendChild(e);
  }
  function loadPrompt() {
    var e = document.createElement('script');
    e.src = 'data_prompt.js?v=3';
    e.onload = loadConsole;
    e.onerror = loadConsole;
    document.body.appendChild(e);
  }
  function loadKeyboard() {
    var e = document.createElement('script');
    e.src = 'data_keyboard.js?v=2';
    e.onload = loadPrompt;
    e.onerror = loadPrompt;
    document.body.appendChild(e);
  }
  function loadAria() {
    var e = document.createElement('script');
    e.src = 'data_aria.js?v=1';
    e.onload = loadKeyboard;
    e.onerror = loadKeyboard;
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
    e.src = 'data_clincoo_extra.js?v=1';
    e.onload = loadSemantic;
    e.onerror = loadSemantic;
    document.body.appendChild(e);
  }
  var s = document.createElement('script');
  s.src = 'data_clincoo.js?v=10';
  s.onload = loadExtra;
  s.onerror = loadExtra;
  document.body.appendChild(s);
})();
