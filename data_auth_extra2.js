// Clincoo Blog auth extra2 2026-10-02 WIB
(function(){
  var extra = [
    {id:'auth-jangan-log-token-di-konsol',langs:{id:{title:'Jangan Cetak Token Auth di Konsol saat Debug Clincoo',desc:'console.log pada sesi sering tertinggal sampai produksi. Log status login, bukan isi token.',content:'<p class=\"mb-4\">Saat login gagal di editor.clincoo.buzz, banyak draf menempel seluruh objek sesi ke konsol. Token ikut tersalin ke tangkapan layar dan riwayat chat AI.</p><p class=\"mb-4\">Log hanya boolean sudah login, kode status, dan waktu kedaluwarsa. Jangan cetak access token, refresh token, atau cookie.</p><p class=\"mb-4\">Sebelum deploy ke app.clincoo.buzz, cari console.log dan debugger di file auth. Minta AI menandai baris itu, jangan minta rewrite modul login.</p><p class=\"mb-4\">Jika perlu jejak, pakai id permintaan acak. Id itu aman dibagikan di blog.clincoo.buzz, token tidak.</p><p class=\"mb-4\">Hapus log setelah bug tertutup. Pratinjau yang bersih lebih berguna daripada konsol yang ramai.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Editor resmi Clincoo',source2:'Clincoo App',source3:'Clincoo Blog'},en:{title:'Do Not Print Auth Tokens in the Console while Debugging Clincoo',desc:'A console.log of the session often survives into production. Log the login state, not the token value.',content:'<p class=\"mb-4\">When login fails in editor.clincoo.buzz, many drafts paste the whole session object into the console. The token then lands in screenshots and AI chat history.</p><p class=\"mb-4\">Log only a logged-in boolean, the status code, and the expiry time. Do not print the access token, refresh token, or cookie.</p><p class=\"mb-4\">Before deploying to app.clincoo.buzz, search for console.log and debugger in the auth file. Ask AI to flag those lines, not to rewrite the login module.</p><p class=\"mb-4\">If you need a trace, use a random request id. That id is safe to share on blog.clincoo.buzz; the token is not.</p><p class=\"mb-4\">Remove the log after the bug is closed. A clean preview is more useful than a noisy console.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Official Clincoo editor',source2:'Clincoo App',source3:'Clincoo Blog'}}}
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles['auth']) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles['auth'].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
