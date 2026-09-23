// Clincoo Blog — artikel responsive tambahan 2026-09-23 (slot full)
(function(){
  var extra = [
    {
      id: "responsive-container-max-lebar",
      langs: {
        "id": {
          title: "Batasi Lebar Kontainer Clincoo agar Baris Teks Tidak Terlalu Panjang",
          desc: "Hero full-bleed boleh lebar, teks isi jangan 1600px. Pakai max-width pada kontainer bacaan.",
          content: "<p class=\"mb-4\">Halaman artikel Clincoo yang memakai lebar viewport penuh membuat baris 120 karakter. Mata cepat lelah di layar desktop.</p><p class=\"mb-4\">Bungkus isi dengan .container { max-width: 72ch; margin-inline: auto; padding-inline: 16px; }. Hero dan galeri boleh tetap full-bleed di luar kontainer itu.</p><p class=\"mb-4\">Jangan memaksa max-width pada body jika navbar harus full width. Pisahkan cangkang dan kolom bacaan.</p><p class=\"mb-4\">Pratinjau 1280px di editor.clincoo.buzz. Minta AI hanya menambah kelas kontainer, bukan merapikan seluruh grid.</p><p class=\"mb-4\">Clincoo merender CSS yang kamu simpan. Lebar bacaan yang manusiawi membuat artikel nyaman di semua perangkat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Cap the Clincoo Container Width so Lines Do Not Get Too Long",
          desc: "A full-bleed hero can be wide; body text should not span 1600px. Set max-width on the reading container.",
          content: "<p class=\"mb-4\">A Clincoo article that uses the full viewport width produces 120-character lines. Eyes tire quickly on a desktop.</p><p class=\"mb-4\">Wrap the body in .container { max-width: 72ch; margin-inline: auto; padding-inline: 16px; }. Heroes and galleries can stay full-bleed outside that container.</p><p class=\"mb-4\">Do not cap max-width on body if the navbar must stay full width. Split the shell from the reading column.</p><p class=\"mb-4\">Preview 1280px in editor.clincoo.buzz. Ask AI only to add a container class, not to rebuild the whole grid.</p><p class=\"mb-4\">Clincoo renders the CSS you save. A human reading width keeps articles comfortable on every device.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "responsive-input-font-16px",
      langs: {
        "id": {
          title: "Naikkan Font Input Clincoo ke 16px agar iOS Tidak Zoom",
          desc: "Input 14px memicu zoom otomatis di Safari iPhone. Set font-size 16px pada field form.",
          content: "<p class=\"mb-4\">Form kontak Clincoo yang memakai input 14px membuat Safari iOS memperbesar halaman saat fokus. Tata letak loncat dan tombol Kirim keluar viewport.</p><p class=\"mb-4\">Set input, select, textarea { font-size: 16px; } pada gaya dasar mobile. Placeholder ikut ukuran yang sama agar tidak tampak kecil.</p><p class=\"mb-4\">Jangan mengunci zoom dengan user-scalable=no sebagai solusi. Itu merugikan pengunjung yang butuh perbesar teks.</p><p class=\"mb-4\">Uji fokus field di pratinjau ponsel editor.clincoo.buzz atau di iPhone nyata. Minta AI hanya menyentuh selector form, bukan meta viewport.</p><p class=\"mb-4\">Clincoo tidak menormalkan ukuran input. 16px di field menjaga halaman tetap diam saat pengguna mulai mengetik.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Raise Clincoo Input Font to 16px so iOS Does Not Zoom",
          desc: "A 14px input triggers automatic zoom in iPhone Safari. Set font-size 16px on form fields.",
          content: "<p class=\"mb-4\">A Clincoo contact form with 14px inputs makes iOS Safari enlarge the page on focus. The layout jumps and Submit leaves the viewport.</p><p class=\"mb-4\">Set input, select, textarea { font-size: 16px; } in the base mobile styles. Keep the placeholder the same size so it does not look tiny.</p><p class=\"mb-4\">Do not lock zoom with user-scalable=no as a fix. That hurts visitors who need to enlarge text.</p><p class=\"mb-4\">Focus a field in the phone preview on editor.clincoo.buzz or on a real iPhone. Ask AI to touch form selectors only, not the viewport meta tag.</p><p class=\"mb-4\">Clincoo does not normalize input size. 16px on fields keeps the page still when someone starts typing.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["responsive"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["responsive"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
