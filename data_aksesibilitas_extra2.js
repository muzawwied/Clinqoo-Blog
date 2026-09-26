// Clincoo Blog — artikel aksesibilitas tambahan 2026-09-27
(function(){
  var extra = [
    {
      id: "a11y-tombol-bukan-div-klik",
      langs: {
        "id": {
          title: "Pakai Tombol Asli, Bukan Div yang Bisa Diklik",
          desc: "Div dengan onclick tidak menerima Enter atau Space. Ganti ke button atau tautan.",
          content: "<p class=\"mb-4\">Banyak template Clincoo memakai div atau span sebagai tombol. Pengguna keyboard dan pembaca layar kehilangan kontrol.</p><p class=\"mb-4\">Ganti elemen itu ke button type button untuk aksi, atau a href untuk navigasi. Jangan menambahkan role button pada div jika semantik asli tersedia.</p><p class=\"mb-4\">Pastikan tombol punya teks terlihat atau aria-label jika hanya ikon.</p><p class=\"mb-4\">Uji Tab lalu Enter di pratinjau editor.clincoo.buzz. Minta AI mengganti satu div, bukan seluruh komponen.</p><p class=\"mb-4\">Clincoo merender markup yang kamu simpan. Tombol asli membuat aksi di app.clincoo.buzz bisa dipakai semua orang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use a Real Button, Not a Clickable Div",
          desc: "A div with onclick does not take Enter or Space. Switch to a button or a link.",
          content: "<p class=\"mb-4\">Many Clincoo templates use a div or span as a button. Keyboard and screen-reader users lose the control.</p><p class=\"mb-4\">Change that element to button type button for an action, or a href for navigation. Do not add role button on a div when a native tag exists.</p><p class=\"mb-4\">Give the button visible text or aria-label if it is icon-only.</p><p class=\"mb-4\">Test Tab then Enter in the editor.clincoo.buzz preview. Ask AI to replace one div, not the whole component.</p><p class=\"mb-4\">Clincoo renders the markup you save. Native buttons make actions on app.clincoo.buzz usable for everyone.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "a11y-error-form-aria-describedby",
      langs: {
        "id": {
          title: "Hubungkan Pesan Error Form lewat aria-describedby",
          desc: "Pembaca layar harus mendengar pesan error saat fokus kembali ke field yang salah.",
          content: "<p class=\"mb-4\">Form Clincoo sering menampilkan teks merah di bawah input tanpa menghubungkannya ke field. Fokus kembali ke input, pesan tidak terbaca.</p><p class=\"mb-4\">Beri id pada teks error. Tambah aria-describedby di input yang merujuk id itu. Set aria-invalid true saat field gagal.</p><p class=\"mb-4\">Jangan andalkan warna merah saja. Teks harus menjelaskan apa yang harus diperbaiki.</p><p class=\"mb-4\">Uji submit gagal di editor.clincoo.buzz dengan Tab. Minta AI menyambungkan satu field ke satu pesan error.</p><p class=\"mb-4\">Clincoo mengirim form apa adanya. Error yang terkait menjaga pengunjung app.clincoo.buzz bisa memperbaiki isian.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Tie Form Error Text with aria-describedby",
          desc: "A screen reader should hear the error when focus returns to the invalid field.",
          content: "<p class=\"mb-4\">Clincoo forms often show red text under an input without linking it to the field. Focus returns to the input and the message is never read.</p><p class=\"mb-4\">Give the error text an id. Add aria-describedby on the input pointing at that id. Set aria-invalid true when the field fails.</p><p class=\"mb-4\">Do not rely on red color alone. The text should say what to fix.</p><p class=\"mb-4\">Test a failed submit in editor.clincoo.buzz with Tab. Ask AI to wire one field to one error message.</p><p class=\"mb-4\">Clincoo ships the form as saved. Linked errors help visitors on app.clincoo.buzz correct the field.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "a11y-landmark-main-nav",
      langs: {
        "id": {
          title: "Tandai Landmark main dan nav di Template Clincoo",
          desc: "Pembaca layar meloncat antar wilayah halaman jika header, nav, dan main memakai tag semantik.",
          content: "<p class=\"mb-4\">Banyak halaman Clincoo membungkus semuanya dalam div. Daftar landmark di pembaca layar menjadi kosong.</p><p class=\"mb-4\">Ganti pembungkus header situs ke header, menu ke nav dengan aria-label, dan isi artikel ke main. Satu main per halaman.</p><p class=\"mb-4\">Jangan duplikat role banner atau navigation jika tag semantik sudah dipakai.</p><p class=\"mb-4\">Cek daftar landmark di pratinjau editor.clincoo.buzz. Minta AI hanya mengganti pembungkus, bukan menyalin ulang konten.</p><p class=\"mb-4\">Clincoo merender struktur yang kamu simpan. Landmark membuat blog.clincoo.buzz mudah dijelajahi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Mark main and nav Landmarks in a Clincoo Template",
          desc: "Screen readers jump between page regions when header, nav, and main use semantic tags.",
          content: "<p class=\"mb-4\">Many Clincoo pages wrap everything in divs. The landmark list in a screen reader stays empty.</p><p class=\"mb-4\">Change the site header wrapper to header, the menu to nav with an aria-label, and the article body to main. One main per page.</p><p class=\"mb-4\">Do not duplicate role banner or navigation when the semantic tag is already there.</p><p class=\"mb-4\">Check the landmark list in the editor.clincoo.buzz preview. Ask AI only to swap wrappers, not to copy the content again.</p><p class=\"mb-4\">Clincoo renders the structure you save. Landmarks make blog.clincoo.buzz easier to explore.</p>",
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
