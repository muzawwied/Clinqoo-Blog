// Clincoo Blog — artikel html tambahan 2026-09-21 WIB
(function(){
  var extra = [
    {
      id: "html-viewport-dan-charset",
      langs: {
        "id": {
          title: "Pasang charset UTF-8 dan viewport di Head Halaman Clincoo",
          desc: "Tanpa keduanya, teks pecah dan zoom mobile kacau. Dua meta di paling atas head.",
          content: "<p class=\"mb-4\">Halaman Clincoo yang menampilkan karakter aneh biasanya kehilangan meta charset. Zoom yang terlalu besar di ponsel sering karena viewport tidak ada.</p><p class=\"mb-4\">Tulis meta charset UTF-8 sebagai anak pertama head, lalu viewport width=device-width initial-scale=1. Jangan kunci maximum-scale kecuali ada alasan akses yang kuat.</p><p class=\"mb-4\">Cek di pratinjau editor.clincoo.buzz pada lebar sempit. Judul tidak boleh terpotong dan teks tetap bisa diperbesar.</p><p class=\"mb-4\">Minta AI menambah dua tag di satu berkas. Tolak generate layout baru.</p><p class=\"mb-4\">Clincoo menayangkan HTML yang kamu simpan. Head yang lengkap menahan encoding dan skala.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set UTF-8 charset and viewport in the Clincoo Page Head",
          desc: "Without both, text breaks and mobile zoom goes wild. Put two meta tags at the top of head.",
          content: "<p class=\"mb-4\">A Clincoo page that shows garbled characters usually lost its charset meta. Oversized phone zoom often means the viewport is missing.</p><p class=\"mb-4\">Write meta charset UTF-8 as the first child of head, then viewport width=device-width initial-scale=1. Do not lock maximum-scale unless you have a strong access reason.</p><p class=\"mb-4\">Check the editor.clincoo.buzz preview at a narrow width. Titles should not clip and text should still enlarge.</p><p class=\"mb-4\">Ask the AI to add two tags in one file. Refuse a brand-new layout.</p><p class=\"mb-4\">Clincoo ships the HTML you save. A complete head holds encoding and scale.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "html-title-halaman-unik",
      langs: {
        "id": {
          title: "Isi title Halaman Clincoo yang Unik, Bukan Nama Template",
          desc: "Tab browser menampilkan title. Salinan index.html mewarisi judul yang sama.",
          content: "<p class=\"mb-4\">Proyek Clincoo dengan tiga halaman sering memakai title yang identik karena file disalin dari template. Tab dan hasil pencarian menjadi kembar.</p><p class=\"mb-4\">Tulis title yang menamai halaman plus merek: Paket Harga — Nama Usaha. Satu title per berkas HTML. Jangan isi keyword beruntun.</p><p class=\"mb-4\">Samakan nada dengan h1, tetapi title boleh lebih pendek. Cek tab pratinjau sebelum deploy.</p><p class=\"mb-4\">Minta AI mengganti title di satu berkas. Tolak rewrite meta massal.</p><p class=\"mb-4\">Clincoo menayangkan head yang kamu simpan. Title adalah nama tab, bukan slogan panjang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Give Each Clincoo Page a Unique title, Not the Template Name",
          desc: "The browser tab shows title. Copied index.html files inherit the same heading.",
          content: "<p class=\"mb-4\">A Clincoo project with three pages often reuses the same title because files were copied from a template. Tabs and search results look like twins.</p><p class=\"mb-4\">Write a title that names the page plus the brand: Pricing — Business Name. One title per HTML file. Do not stuff a keyword chain.</p><p class=\"mb-4\">Match the tone of the h1, but the title can be shorter. Check the preview tab before you deploy.</p><p class=\"mb-4\">Ask the AI to change the title in one file. Refuse a mass meta rewrite.</p><p class=\"mb-4\">Clincoo ships the head you save. The title is the tab name, not a long slogan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles[\"html\"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles[\"html\"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
