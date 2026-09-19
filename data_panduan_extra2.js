// Clincoo Blog — artikel panduan tambahan 2026-09-18
(function(){
  var extra = [
    {
      id: "cek-menu-di-setiap-halaman",
      langs: {
        "id": {
          title: "Cek Menu di Setiap Halaman Clincoo sebelum Membagikan Situs",
          desc: "Menu yang lengkap di beranda sering hilang di halaman dalam. Cek semua file HTML.",
          content: "<p class=\"mb-4\">Banyak situs pemula punya menu utuh hanya di index.html. Halaman tentang atau kontak kehilangan tautan pulang.</p><p class=\"mb-4\">Di Clincoo, buka setiap HTML dan bandingkan blok nav. Samakan urutan dan path relatif. Pratinjau tiap halaman, bukan hanya beranda.</p><p class=\"mb-4\">Halaman yang tidak masuk menu juga perlu tautan kembali ke beranda di dalam isi, minimal satu.</p><p class=\"mb-4\">Menu yang konsisten membuat situs terasa satu produk, bukan tumpukan file terpisah.</p>",
          source: "Clincoo", sourceUrl: "https://app.clincoo.buzz/", sourceSnippet: "Ruang kerja Clincoo",
          source2: "Clincoo Editor", sourceUrl2: "https://editor.clincoo.buzz/", sourceSnippet2: "Berkas proyek"
        },
        "en": {
          title: "Check the Menu on Every Clincoo Page before You Share the Site",
          desc: "A complete home menu often vanishes on inner pages. Check every HTML file.",
          content: "<p class=\"mb-4\">Many beginner sites have a full menu only on index.html. About or contact pages lose the way home.</p><p class=\"mb-4\">In Clincoo, open each HTML file and compare the nav block. Match the order and relative paths. Preview every page, not only home.</p><p class=\"mb-4\">A page that is not in the menu still needs one in-body link back to home.</p><p class=\"mb-4\">A consistent menu makes the site feel like one product, not a pile of separate files.</p>",
          source: "Clincoo", sourceUrl: "https://app.clincoo.buzz/", sourceSnippet: "Ruang kerja Clincoo",
          source2: "Clincoo Editor", sourceUrl2: "https://editor.clincoo.buzz/", sourceSnippet2: "Berkas proyek"
        }
      }
    },
    {
      id: "cek-form-kontak-sebelum-tayang",
      langs: {
        "id": {
          title: "Cek Form Kontak Clincoo sebelum Situs Tayang",
          desc: "Form yang tidak terkirim merusak kesan pertama. Uji isi, tombol, dan tujuan pesan sebelum membagikan tautan.",
          content: "<p class=\"mb-4\">Banyak template Clincoo sudah punya form kontak. Yang sering terlewat: tujuan pesan masih contoh, tombol tidak melakukan apa-apa, atau field wajib membingungkan di HP.</p><p class=\"mb-4\">Isi form dengan data uji dari pratinjau. Pastikan nama field jelas — nama, email atau WhatsApp, dan pesan. Jika form hanya menaut ke wa.me, cek nomornya benar dan kode negara lengkap.</p><p class=\"mb-4\">Di layar sempit, pastikan tombol kirim tidak tertutup menu. Setelah uji berhasil, hapus data dummy yang sempat kamu kirim ke diri sendiri.</p><p class=\"mb-4\">Form adalah janji: pengunjung percaya pesannya sampai. Janji itu lebih penting daripada animasi tombol. Selesaikan uji ini sebelum URL dibagikan.</p>",
          source: "Clincoo", sourceUrl: "https://app.clincoo.buzz/", sourceSnippet: "Platform Clincoo",
          source2: "Clincoo Blog", sourceUrl2: "https://blog.clincoo.buzz/", sourceSnippet2: "Clincoo Blog"
        },
        "en": {
          title: "Check the Clincoo Contact Form before the Site Goes Live",
          desc: "A form that never sends ruins the first impression. Test fields, the button, and the message destination before you share the link.",
          content: "<p class=\"mb-4\">Many Clincoo templates already include a contact form. What often slips: the destination is still a sample, the button does nothing, or required fields confuse people on a phone.</p><p class=\"mb-4\">Fill the form with test data in preview. Keep field names clear — name, email or WhatsApp, and message. If the form only links to wa.me, check the number and the country code.</p><p class=\"mb-4\">On a narrow screen, make sure the submit button is not hidden by the menu. After a successful test, delete the dummy message you sent yourself.</p><p class=\"mb-4\">A form is a promise: visitors trust the message will arrive. That promise matters more than a button animation. Finish this check before you share the URL.</p>",
          source: "Clincoo", sourceUrl: "https://app.clincoo.buzz/", sourceSnippet: "Clincoo platform",
          source2: "Clincoo Blog", sourceUrl2: "https://blog.clincoo.buzz/", sourceSnippet2: "Clincoo Blog"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["panduan"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["panduan"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
