// Clinqoo Blog — artikel editor tambahan (merge ke data_editor)
(function(){
  var extra = [
    {
      id: "indentasi-konsisten-di-editor",
      langs: {
        "id": {
          title: "Samakan Indentasi di Editor Clinqoo agar Kode Mudah Dibaca",
          desc: "Campuran tab dan spasi membuat HTML terasa berantakan. Pilih satu pola indentasi lalu patuhi di seluruh proyek.",
          content: "<p class=\"mb-4\">File HTML yang tumbuh cepat sering punya campuran tab dan spasi. Di editor Clinqoo, pilih satu pola — misalnya dua spasi — lalu pakai itu di setiap berkas.</p><p class=\"mb-4\">Indentasi yang sama membuat mata langsung melihat tag pembuka dan penutup. Saat pratinjau pecah, kamu lebih mudah menemukan div yang tidak tertutup.</p><p class=\"mb-4\">Kalau menyalin potongan dari AI atau template, rapikan indentasinya sebelum menyimpan. Jangan biarkan satu blok menonjol hanya karena berasal dari sumber lain.</p><p class=\"mb-4\">Kerapian kecil ini bukan soal selera. Kode yang rata lebih aman diubah minggu depan, baik oleh kamu maupun oleh asisten AI.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Editor kode Clinqoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Belajar HTML, CSS, JS",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Praktik terbaik web"
        },
        "en": {
          title: "Keep Indentation Consistent in the Clinqoo Editor",
          desc: "Mixing tabs and spaces makes HTML look messy. Pick one indent style and stick to it across the project.",
          content: "<p class=\"mb-4\">A growing HTML file often mixes tabs and spaces. In the Clinqoo editor, pick one pattern — two spaces, for example — and use it in every file.</p><p class=\"mb-4\">Matching indent lets your eyes see opening and closing tags. When preview breaks, an unclosed div is easier to find.</p><p class=\"mb-4\">If you paste a snippet from the AI or a template, tidy the indent before you save. Do not leave one block standing out just because it came from elsewhere.</p><p class=\"mb-4\">This small neatness is not taste. Even code is safer to change next week, whether by you or by the AI assistant.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Clinqoo code editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Learn HTML, CSS, JS",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Web best practices"
        }
      }
    },
    {
      id: "pratinjau-setelah-ubah-gambar",
      langs: {
        "id": {
          title: "Buka Pratinjau Setiap Kali Mengganti Gambar di Editor",
          desc: "Gambar baru sering merusak lebar halaman. Di Clinqoo, simpan file lalu cek pratinjau desktop dan HP sebelum lanjut.",
          content: "<p class=\"mb-4\">Mengganti foto hero terasa sepele sampai halaman tiba-tiba bisa digeser ke samping. Di editor Clinqoo, setiap kali src gambar berubah, simpan lalu buka pratinjau.</p><p class=\"mb-4\">Periksa dua lebar: layar kerja dan ukuran HP. Lihat apakah gambar mendorong teks, memotong tombol, atau membuat footer jauh di bawah.</p><p class=\"mb-4\">Kalau file terlalu berat, kompres dulu sebelum masuk folder aset. Pratinjau yang lambat hampir selalu menyimpan petunjuk bahwa pengunjung juga akan menunggu.</p><p class=\"mb-4\">Satu kebiasaan ini mencegah deploy yang rapi di laptop, pecah di HP. Gambar adalah isi; ia tetap harus muat di bingkai halaman.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Editor kode Clinqoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Belajar HTML, CSS, JS",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Praktik terbaik web"
        },
        "en": {
          title: "Preview Every Time You Swap an Image in the Editor",
          desc: "A new image often breaks page width. In Clinqoo, save the file and check desktop and phone preview before you continue.",
          content: "<p class=\"mb-4\">Swapping a hero photo feels minor until the page suddenly scrolls sideways. In the Clinqoo editor, every time an image src changes, save and open preview.</p><p class=\"mb-4\">Check two widths: your work screen and a phone size. Watch for images shoving text, clipping buttons, or pushing the footer far down.</p><p class=\"mb-4\">If the file is heavy, compress it before it enters the assets folder. A slow preview is usually a hint that visitors will wait too.</p><p class=\"mb-4\">This one habit prevents a deploy that looks tidy on a laptop and breaks on a phone. Images are content; they still have to fit the page frame.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Clinqoo code editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Learn HTML, CSS, JS",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Web best practices"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["editor"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["editor"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
