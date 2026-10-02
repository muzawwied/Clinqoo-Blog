// Clincoo Blog — artikel komponen tambahan 2026-10-02 WIB
(function(){
  var extra = [
  {
    "id": "komponen-scope-query-di-root",
    "langs": {
      "id": {
        "title": "Scope querySelector ke Root Komponen, Bukan document",
        "desc": "querySelector global menabrak komponen lain di halaman Clincoo. Cari node hanya di dalam root.",
        "content": "<p class=\"mb-4\">Di komponen Clincoo, simpan elemen root lalu panggil root.querySelector. Jangan document.querySelector untuk id internal.</p><p class=\"mb-4\">Id yang sama di dua kartu akan mengikat tombol yang salah. Pakai kelas di dalam root, atau id yang benar-benar unik.</p><p class=\"mb-4\">Uji dengan dua salinan komponen di pratinjau app.clincoo.buzz. Klik yang kedua harus mengubah kartu itu saja.</p><p class=\"mb-4\">Listener pasang pada root, dan lepas saat komponen dibuang, supaya halaman panjang tidak menumpuk handler.</p><p class=\"mb-4\">Minta AI mengganti query global pada satu fungsi. Tempel fungsi itu, bukan seluruh bundel.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Editor resmi Clincoo",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Scope querySelector to the Component Root, Not document",
        "desc": "A global querySelector collides with other components on a Clincoo page. Look up nodes only inside the root.",
        "content": "<p class=\"mb-4\">In a Clincoo component, keep the root element and call root.querySelector. Do not use document.querySelector for internal ids.</p><p class=\"mb-4\">The same id on two cards binds the wrong button. Use a class inside the root, or an id that is truly unique.</p><p class=\"mb-4\">Test with two copies of the component in the app.clincoo.buzz preview. Clicking the second must change only that card.</p><p class=\"mb-4\">Attach listeners on the root, and remove them when the component is destroyed, so long pages do not pile up handlers.</p><p class=\"mb-4\">Ask AI to replace the global query in one function. Paste that function, not the whole bundle.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Official Clincoo editor",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      }
    }
  }
];
  var b=window.countryDataFiles&&window.countryDataFiles["komponen"];
  if(b&&b.articles)b.articles=b.articles.concat(extra);
})();
