// Clincoo Blog — artikel aksesibilitas tambahan 2026-09-23
(function(){
  var extra = [
    {
      id: "a11y-skip-link-ke-konten",
      langs: {
        "id": {
          title: "Tambah Skip Link ke Konten Utama Clincoo",
          desc: "Pengguna keyboard tidak perlu tab melewati seluruh navbar. Beri tautan lewati ke #konten.",
          content: "<p class=\"mb-4\">Navbar template Clincoo sering punya banyak tautan. Pengguna Tab mengulang menu di setiap halaman sebelum sampai ke artikel.</p><p class=\"mb-4\">Tambah tautan Lewati ke konten di awal body yang mengarah ke id pada main. Sembunyikan secara visual sampai mendapat fokus.</p><p class=\"mb-4\">Pastikan target punya tabindex -1 agar fokus benar-benar pindah di semua browser.</p><p class=\"mb-4\">Uji dengan Tab di pratinjau editor.clincoo.buzz. Minta AI hanya menambah skip link, bukan menulis ulang header.</p><p class=\"mb-4\">Clincoo merender markup yang kamu simpan. Satu tautan lewati menghemat waktu pengguna keyboard.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add a Skip Link to Main Content on Clincoo",
          desc: "Keyboard users should not tab through the whole navbar. Offer a skip link to #content.",
          content: "<p class=\"mb-4\">Clincoo template navbars often hold many links. Tab users repeat the menu on every page before reaching the article.</p><p class=\"mb-4\">Add a Skip to content link at the start of body that points at an id on main. Hide it visually until it receives focus.</p><p class=\"mb-4\">Give the target tabindex -1 so focus actually moves in every browser.</p><p class=\"mb-4\">Test with Tab in the editor.clincoo.buzz preview. Ask AI only to add the skip link, not to rewrite the header.</p><p class=\"mb-4\">Clincoo renders the markup you save. One skip link saves keyboard users time.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "a11y-label-terkait-input",
      langs: {
        "id": {
          title: "Hubungkan Label dengan Input Form Clincoo",
          desc: "Placeholder bukan pengganti label. Pakai for dan id agar pembaca layar menyebut nama field.",
          content: "<p class=\"mb-4\">Form kontak di template Clincoo sering hanya memakai placeholder. Saat field terisi, nama field hilang dari layar.</p><p class=\"mb-4\">Tulis label terlihat dan tautkan dengan atribut for ke id input. Jangan andalkan placeholder sebagai satu-satunya petunjuk.</p><p class=\"mb-4\">Untuk kelompok radio atau checkbox, bungkus dengan fieldset dan legend yang menjelaskan pilihan.</p><p class=\"mb-4\">Cek form di editor.clincoo.buzz dengan Tab dan pembaca layar. Minta AI memperbaiki satu field, bukan seluruh form.</p><p class=\"mb-4\">Clincoo mengirim markup apa adanya. Label yang terkait membuat pengisian lebih cepat dan lebih aman.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Associate Labels with Clincoo Form Inputs",
          desc: "A placeholder is not a label. Use for and id so screen readers name each field.",
          content: "<p class=\"mb-4\">Contact forms in Clincoo templates often rely on placeholders. Once the field is filled, the name disappears from the screen.</p><p class=\"mb-4\">Write a visible label and hook it with for to the input id. Do not treat placeholder as the only hint.</p><p class=\"mb-4\">For radio or checkbox groups, wrap them in a fieldset and a legend that names the choice.</p><p class=\"mb-4\">Check the form in editor.clincoo.buzz with Tab and a screen reader. Ask AI to fix one field, not the whole form.</p><p class=\"mb-4\">Clincoo ships markup as saved. Linked labels make filling faster and safer.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["aksesibilitas"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["aksesibilitas"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
