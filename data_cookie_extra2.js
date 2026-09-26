// Clincoo Blog — artikel cookie tambahan 2026-09-26 WIB
(function(){
  var extra = [
    {
      id: "cookie-http-only-bukan-js",
      langs: {
        "id": {
          title: "Simpan Sesi Clincoo di Cookie HttpOnly bukan JavaScript",
          desc: "Token di localStorage dibaca skrip pihak ketiga. HttpOnly menahan sesi dari document.cookie.",
          content: "<p class=\"mb-4\">Template Clincoo yang menyimpan JWT di localStorage memudahkan XSS merampas sesi. Satu skrip injeksi cukup.</p><p class=\"mb-4\">Jika backend kamu menulis Set-Cookie, pasang HttpOnly; Secure; SameSite=Lax. Jangan expose token ke window.</p><p class=\"mb-4\">Kode di editor.clincoo.buzz hanya perlu fetch dengan credentials. Jangan salin token ke variabel global.</p><p class=\"mb-4\">Minta AI menghapus penulisan token ke localStorage. Tempel helper auth yang sekarang memakai getItem.</p><p class=\"mb-4\">Clincoo tidak menyimpan sesi untukmu. HttpOnly menjaga akun lebih aman di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Store a Clincoo Session in an HttpOnly Cookie not JavaScript",
          desc: "A token in localStorage is readable by third-party script. HttpOnly keeps the session off document.cookie.",
          content: "<p class=\"mb-4\">A Clincoo template that stores a JWT in localStorage makes XSS able to steal the session. One injected script is enough.</p><p class=\"mb-4\">If your backend writes Set-Cookie, set HttpOnly; Secure; SameSite=Lax. Do not expose the token on window.</p><p class=\"mb-4\">Code in editor.clincoo.buzz only needs fetch with credentials. Do not copy the token into a global variable.</p><p class=\"mb-4\">Ask AI to remove token writes to localStorage. Paste the auth helper that now uses getItem.</p><p class=\"mb-4\">Clincoo does not store sessions for you. HttpOnly keeps accounts safer on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["cookie"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["cookie"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
