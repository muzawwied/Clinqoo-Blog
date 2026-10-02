// Clincoo Blog — artikel head tambahan 2026-10-02 WIB
(function(){
  var extra = [
  {
    "id": "head-dns-prefetch-bukan-preconnect-semua",
    "langs": {
      "id": {
        "title": "Pakai dns-prefetch, Jangan Preconnect ke Semua Origin di Head Clincoo",
        "desc": "Preconnect ke banyak domain menahan koneksi. Batasi preconnect ke origin kritis, sisanya dns-prefetch.",
        "content": "<p class=\"mb-4\">Di head Clincoo, preconnect hanya untuk origin yang pasti dipakai di atas lipatan, misalnya font. Satu atau dua sudah cukup.</p><p class=\"mb-4\">Origin analitik, chat, atau gambar yang mungkin tidak tampil cukup memakai dns-prefetch. Jangan preconnect semuanya.</p><p class=\"mb-4\">Setiap preconnect meminta DNS, TCP, dan TLS lebih awal. Terlalu banyak membuat koneksi lain antre di pratinjau editor.clincoo.buzz.</p><p class=\"mb-4\">Cek tab Network di DevTools. Jika origin preconnect tidak pernah diunduh, hapus tag itu.</p><p class=\"mb-4\">Minta AI meninjau daftar link rel di head saja. Tempel cuplikan head, bukan seluruh halaman.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Editor resmi Clincoo",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Use dns-prefetch, Do Not Preconnect to Every Origin in the Clincoo Head",
        "desc": "Preconnect to many domains holds sockets open. Limit preconnect to critical origins and use dns-prefetch for the rest.",
        "content": "<p class=\"mb-4\">In the Clincoo head, preconnect only to origins that are certain above the fold, such as fonts. One or two is enough.</p><p class=\"mb-4\">Analytics, chat, or images that may never show only need dns-prefetch. Do not preconnect to all of them.</p><p class=\"mb-4\">Each preconnect asks for DNS, TCP, and TLS early. Too many makes other connections queue in the editor.clincoo.buzz preview.</p><p class=\"mb-4\">Check the Network tab in DevTools. If a preconnected origin is never downloaded, remove that tag.</p><p class=\"mb-4\">Ask AI to review the link rel list in the head only. Paste the head snippet, not the whole page.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Official Clincoo editor",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      }
    }
  }
];
  var b=window.countryDataFiles&&window.countryDataFiles["head"];
  if(b&&b.articles)b.articles=b.articles.concat(extra);
})();
