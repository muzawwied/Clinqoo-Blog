// Clincoo Blog — artikel devtools tambahan 2026-09-22 WIB
(function(){
  var extra = [
    {
      id: "devtools-lighthouse-skor-pratinjau",
      langs: {
        "id": {
          title: "Jalankan Lighthouse pada Pratinjau Clincoo sebelum Deploy",
          desc: "Skor hijau di laptop tidak menjamin halaman ringan. Lighthouse mengukur apa yang pengunjung benar-benar unduh.",
          content: "<p class=\"mb-4\">Banyak proyek Clincoo terasa cepat di Wi-Fi kantor. Lighthouse di mode mobile sering menunjuk CSS dan font sebagai tersangka.</p><p class=\"mb-4\">Buka DevTools, tab Lighthouse, pilih Navigation dan perangkat Mobile. Generate report pada pratinjau editor.clincoo.buzz.</p><p class=\"mb-4\">Catat tiga temuan teratas: render-blocking, image size, unused CSS. Jangan kejar angka 100 jika isi halaman sudah jelas.</p><p class=\"mb-4\">Minta AI memperbaiki satu temuan per obrolan. Tempel cuplikan report, bukan seluruh HTML.</p><p class=\"mb-4\">Clincoo adalah situs statis. Lighthouse adalah hakim yang lebih jujur daripada perasaan saat preview.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Run Lighthouse on the Clincoo Preview before You Deploy",
          desc: "A snappy laptop preview does not mean the page is light. Lighthouse measures what visitors actually download.",
          content: "<p class=\"mb-4\">Many Clincoo projects feel fast on office Wi-Fi. A mobile Lighthouse run often names CSS and fonts as the culprits.</p><p class=\"mb-4\">Open DevTools, Lighthouse tab, pick Navigation and Mobile. Generate the report on the editor.clincoo.buzz preview.</p><p class=\"mb-4\">Note the top three findings: render-blocking, image size, unused CSS. Do not chase 100 if the page already reads clearly.</p><p class=\"mb-4\">Ask the AI to fix one finding per chat. Paste the report snippet, not the entire HTML file.</p><p class=\"mb-4\">Clincoo is a static site. Lighthouse is a fairer judge than how the preview feels.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "devtools-local-overrides-uji-perbaikan",
      langs: {
        "id": {
          title: "Uji Perbaikan CSS lewat Local Overrides sebelum Menyimpan File",
          desc: "Mengubah file template lalu menyesal itu mahal. Overrides menempel perbaikan hanya di browser kamu.",
          content: "<p class=\"mb-4\">AI sering menulis ulang seluruh stylesheet karena satu margin. Overrides membiarkan kamu menguji tiga baris tanpa menyentuh repo.</p><p class=\"mb-4\">Di Sources, aktifkan Local overrides, pilih folder, lalu edit aturan di panel Styles pada pratinjau Clincoo.</p><p class=\"mb-4\">Muat ulang. Jika tata letak benar, salin hanya blok yang berubah ke editor.clincoo.buzz.</p><p class=\"mb-4\">Minta AI merapikan blok itu, bukan seluruh file. Tolak rewrite global setelah uji lokal berhasil.</p><p class=\"mb-4\">Clincoo menyimpan apa yang kamu tulis. Overrides adalah laboratorium; file proyek adalah hasil akhir.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test a CSS Fix with Local Overrides before Saving the File",
          desc: "Rewriting a template and regretting it is expensive. Overrides keep the experiment in your browser only.",
          content: "<p class=\"mb-4\">AI often rewrites a whole stylesheet for one margin. Overrides let you test three lines without touching the repo.</p><p class=\"mb-4\">In Sources enable Local overrides, pick a folder, then edit a rule in the Styles pane on the Clincoo preview.</p><p class=\"mb-4\">Reload. If the layout is right, copy only the changed block into editor.clincoo.buzz.</p><p class=\"mb-4\">Ask the AI to tidy that block, not the whole file. Refuse a global rewrite after a local test already worked.</p><p class=\"mb-4\">Clincoo stores what you type. Overrides are the lab; the project file is the release.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "devtools-contrast-dengan-color-picker",
      langs: {
        "id": {
          title: "Cek Kontras Teks dengan Color Picker di DevTools",
          desc: "Teks abu di atas foto hero sering gagal AA. Color picker menampilkan rasio tanpa plugin.",
          content: "<p class=\"mb-4\">Banyak template Clincoo memakai overlay tipis. Mata segar masih membaca; pengunjung di layar redup tidak.</p><p class=\"mb-4\">Inspect teks, klik kotak warna di Styles, lihat Contrast ratio. Target minimal 4.5:1 untuk isi biasa.</p><p class=\"mb-4\">Naikkan opacity overlay atau pilih warna teks dari palette yang sudah lulus, bukan menebak hex baru.</p><p class=\"mb-4\">Minta AI menyesuaikan satu pasangan warna. Tolak mengganti seluruh palet brand Clincoo.</p><p class=\"mb-4\">Clincoo menayangkan warna apa adanya. Kontras adalah akses, bukan selera semata.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Check Text Contrast with the DevTools Color Picker",
          desc: "Gray text on a hero photo often fails AA. The color picker shows the ratio without a plugin.",
          content: "<p class=\"mb-4\">Many Clincoo templates use a thin overlay. Fresh eyes still read it; visitors on a dim screen do not.</p><p class=\"mb-4\">Inspect the text, click the color swatch in Styles, read Contrast ratio. Aim for at least 4.5:1 on body copy.</p><p class=\"mb-4\">Raise overlay opacity or pick a passing text color from the existing palette instead of guessing a new hex.</p><p class=\"mb-4\">Ask the AI to adjust one color pair. Refuse a full Clincoo brand palette rewrite.</p><p class=\"mb-4\">Clincoo paints colors as written. Contrast is access, not taste alone.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["devtools"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["devtools"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
