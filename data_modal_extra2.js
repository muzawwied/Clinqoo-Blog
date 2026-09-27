// Clincoo Blog — artikel modal tambahan 2026-09-27 WIB run
(function(){
  var extra = [
    {
      id: "modal-inert-konten-latar",
      langs: {
        "id": {
          title: "Tandai Konten Latar Modal Clincoo dengan inert",
          desc: "aria-hidden saja tidak memblokir Tab ke halaman belakang. Atribut inert menonaktifkan fokus dan klik.",
          content: "<p class=\"mb-4\">Modal Clincoo punya aria-hidden pada main, tetapi tautan di footer masih bisa di-Tab. Overlay hanya visual.</p><p class=\"mb-4\">Di editor.clincoo.buzz, tambahkan inert pada pembungkus halaman saat dialog terbuka. Lepas inert saat overlay ditutup.</p><p class=\"mb-4\">Jangan inert pada dialog itu sendiri. Inert menonaktifkan seluruh pohon, termasuk tombol tutup jika salah sasaran.</p><p class=\"mb-4\">Minta AI menambah toggle inert berdampingan dengan overflow hidden. Tempel markup yang sekarang hanya menyembunyikan dengan class.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu simpan. Latar inert menjaga modal di app.clincoo.buzz tidak bocor fokus.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Mark Background Content of a Clincoo Modal with inert",
          desc: "aria-hidden alone does not block Tab to the page behind. The inert attribute disables focus and clicks.",
          content: "<p class=\"mb-4\">A Clincoo modal sets aria-hidden on main, but footer links still receive Tab. The overlay is only visual.</p><p class=\"mb-4\">In editor.clincoo.buzz, add inert on the page wrapper while the dialog is open. Remove inert when the overlay closes.</p><p class=\"mb-4\">Do not set inert on the dialog itself. inert disables the whole tree, including the close button if you target the wrong node.</p><p class=\"mb-4\">Ask AI to toggle inert next to overflow hidden. Paste markup that now only hides with a class.</p><p class=\"mb-4\">Clincoo runs the script you save. An inert background keeps modals on app.clincoo.buzz from leaking focus.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "modal-elemen-dialog-asli",
      langs: {
        "id": {
          title: "Pertimbangkan Elemen dialog Asli untuk Modal Clincoo",
          desc: "div plus class sering lupa fokus dan Escape. HTML dialog punya showModal, backdrop, dan close bawaan.",
          content: "<p class=\"mb-4\">Modal Clincoo adalah tumpukan div. Setiap fitur aksesibel harus ditulis ulang di setiap halaman.</p><p class=\"mb-4\">Di editor.clincoo.buzz, coba ganti overlay dengan <dialog>. Panggil showModal() saat buka dan close() saat tutup.</p><p class=\"mb-4\">Tetap sediakan tombol tutup. Jangan andalkan hanya backdrop native jika desain butuh klik luar yang berbeda.</p><p class=\"mb-4\">Minta AI memigrasikan satu modal ke elemen dialog. Tempel markup div.hidden yang sekarang dipakai.</p><p class=\"mb-4\">Clincoo merender HTML yang kamu tulis. dialog asli menyederhanakan modal di app.clincoo.buzz tanpa pustaka.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Consider the Native dialog Element for Clincoo Modals",
          desc: "A div plus class often forgets focus and Escape. HTML dialog ships showModal, backdrop, and close.",
          content: "<p class=\"mb-4\">A Clincoo modal is a stack of divs. Every accessible feature has to be rewritten on every page.</p><p class=\"mb-4\">In editor.clincoo.buzz, try replacing the overlay with <dialog>. Call showModal() on open and close() on close.</p><p class=\"mb-4\">Still provide a close button. Do not rely only on the native backdrop if your design needs a different outside click.</p><p class=\"mb-4\">Ask AI to migrate one modal to the dialog element. Paste the div.hidden markup you use now.</p><p class=\"mb-4\">Clincoo renders the HTML you write. Native dialog simplifies modals on app.clincoo.buzz with no library.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["modal"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["modal"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
