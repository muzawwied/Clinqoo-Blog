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
,
  {"id":"komponen-variabel-css-di-root-komponen","langs":{"id":{"title":"Letakkan Variabel CSS di Root Komponen, Bukan di :root","desc":"Variabel global menimpa tema lain. Simpan token warna dan jarak di elemen komponen.","content":"<p class=\"mb-4\">Di editor.clincoo.buzz, variabel di :root sering menimpa kartu lain yang kebetulan memakai nama yang sama, misalnya --gap atau --accent.</p><p class=\"mb-4\">Pasang variabel pada kelas root komponen: .card { --card-gap: 12px; --card-accent: #0b6; }. Anak memakai var(--card-gap), bukan nilai ajaib.</p><p class=\"mb-4\">Jangan salin seluruh token tema ke setiap komponen. Hanya override yang memang berbeda dari tema halaman.</p><p class=\"mb-4\">Minta AI mengganti satu selektor :root menjadi kelas komponen. Tempel potongan CSS itu saja, bukan seluruh stylesheet.</p><p class=\"mb-4\">Pratinjau dua komponen berdampingan di app.clincoo.buzz. Jika warna kartu ikut berubah, variabel masih bocor ke global. Catat nama token di blog.clincoo.buzz.</p>","source":"MDN","sourceUrl":"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties","sourceSnippet":"Custom property bisa diwariskan dari elemen tempat ia didefinisikan.","source2":"Clincoo App","source3":"Clincoo Blog"},"en":{"title":"Put CSS Variables on the Component Root, Not on :root","desc":"Global variables overwrite other themes. Keep color and spacing tokens on the component element.","content":"<p class=\"mb-4\">On editor.clincoo.buzz, variables on :root often overwrite another card that happens to use the same name, such as --gap or --accent.</p><p class=\"mb-4\">Set variables on the component root class: .card { --card-gap: 12px; --card-accent: #0b6; }. Children use var(--card-gap), not a magic number.</p><p class=\"mb-4\">Do not copy every theme token into each component. Override only values that truly differ from the page theme.</p><p class=\"mb-4\">Ask AI to change one :root selector into a component class. Paste that CSS snippet only, not the whole stylesheet.</p><p class=\"mb-4\">Preview two components side by side on app.clincoo.buzz. If a card color changes with the other, the variable still leaks globally. Record token names on blog.clincoo.buzz.</p>","source":"MDN","sourceUrl":"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties","sourceSnippet":"A custom property inherits from the element where it is defined.","source2":"Clincoo App","source3":"Clincoo Blog"}}}
];
  var b=window.countryDataFiles&&window.countryDataFiles["komponen"];
  if(b&&b.articles)b.articles=b.articles.concat(extra);
})();
