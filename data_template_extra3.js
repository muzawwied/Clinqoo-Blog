// Clincoo Blog — artikel template tambahan 2026-09-20
(function(){
  var extra = [
    {
      id: "template-salin-satu-section",
      langs: {
        "id": {
          title: "Salin Satu Section Template, Jangan Tempel Semua Sekaligus",
          desc: "Pindahkan hero, layanan, atau footer satu per satu supaya kelas CSS tidak bertabrakan di workspace Clincoo.",
          content: "<p class=\"mb-4\">Template utuh terasa praktis, tapi menempel seluruh file ke proyek yang sudah diedit mencampur id, kelas, dan skrip yang bentrok.</p><p class=\"mb-4\">Salin satu section: hero dulu, atau blok layanan, atau footer. Tempel ke index.html di tempat yang jelas, lalu cek pratinjau sebelum mengambil bagian berikutnya.</p><p class=\"mb-4\">Periksa nama kelas. Dua template sering memakai .hero atau .nav dengan aturan berbeda. Ganti prefiks jika perlu, jangan biarkan dua aturan saling menimpa.</p><p class=\"mb-4\">Minta AI hanya menempel markup satu section dan menyesuaikan path gambar. Tolak perintah \"gabungkan kedua template\".</p><p class=\"mb-4\">Clincoo menayangkan file yang ada di editor. Section yang kamu pindahkan sadar lebih aman daripada menimpa seluruh kerangka.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Copy One Template Section, Do Not Paste the Whole File",
          desc: "Move the hero, services, or footer one piece at a time so CSS classes do not collide in the Clincoo workspace.",
          content: "<p class=\"mb-4\">A full template feels convenient, but pasting the entire file into a project you already edited mixes colliding ids, classes, and scripts.</p><p class=\"mb-4\">Copy one section: the hero first, or the services block, or the footer. Paste it in a clear spot in index.html, then preview before you take the next piece.</p><p class=\"mb-4\">Check class names. Two templates often both use .hero or .nav with different rules. Add a prefix if needed instead of letting two rules override each other.</p><p class=\"mb-4\">Ask the AI only to paste one section and fix image paths. Refuse the command \"merge both templates\".</p><p class=\"mb-4\">Clincoo ships the files in the editor. A section you moved on purpose is safer than overwriting the whole frame.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "template-cek-tautan-setelah-edit",
      langs: {
        "id": {
          title: "Cek Tautan Template setelah Mengganti Teks dan Folder",
          desc: "Href contoh #, index.html palsu, atau path aset lama sering tertinggal setelah kamu mengisi template Clincoo.",
          content: "<p class=\"mb-4\">Template datang dengan tautan dummy. Setelah ganti teks, banyak orang lupa menelusuri setiap a href dan src gambar.</p><p class=\"mb-4\">Buka pratinjau, klik menu, tombol CTA, tautan footer, dan logo. Catat yang masih menuju #, halaman 404, atau folder yang sudah kamu hapus.</p><p class=\"mb-4\">Samakan path dengan struktur folder workspace. Jika gambar pindah ke assets/, perbarui setiap src, bukan hanya yang terlihat di hero.</p><p class=\"mb-4\">Minta AI mendaftar semua href dan src di satu file. Jangan minta rewrite navigasi dari nol.</p><p class=\"mb-4\">Clincoo men-deploy tautan apa adanya. Halaman yang bagus tetap gagal jika pengunjung menekan tombol yang tidak menuju ke mana-mana.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Check Template Links after You Change Copy and Folders",
          desc: "Dummy href values, fake index.html paths, and old asset folders often linger after you fill a Clincoo template.",
          content: "<p class=\"mb-4\">Templates ship with dummy links. After you replace the copy, many people forget to walk every a href and image src.</p><p class=\"mb-4\">Open preview and click the menu, CTA buttons, footer links, and the logo. Note anything that still goes to #, a 404, or a folder you already deleted.</p><p class=\"mb-4\">Match paths to the workspace folder structure. If images moved into assets/, update every src, not only the hero.</p><p class=\"mb-4\">Ask the AI to list every href and src in one file. Do not ask it to rewrite navigation from scratch.</p><p class=\"mb-4\">Clincoo deploys the links as they are. A good-looking page still fails if visitors tap a button that goes nowhere.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["template"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["template"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
