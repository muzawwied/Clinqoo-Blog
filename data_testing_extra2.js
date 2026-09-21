// Clincoo Blog — extra testing 2026-09-21 WIB
(function(){
  var extra = [
    {
      id: "testing-zoom-teks-dua-ratus-persen",
      langs: {
        "id": {
          title: "Uji Zoom Teks 200% pada Pratinjau Clincoo",
          desc: "Layout yang pecah saat zoom 200% adalah bug akses, bukan selera desain.",
          content: "<p class=\"mb-4\">Banyak situs Clincoo terlihat rapi di 100% lalu menumpuk saat pengunjung membesarkan teks. Overflow tersembunyi dan tinggi tetap adalah biang keladinya.</p><p class=\"mb-4\">Di editor.clincoo.buzz buka pratinjau, tekan Ctrl + plus sampai 200%. Gulir header, kartu, dan form. Catat teks yang terpotong dan tombol yang keluar bingkai.</p><p class=\"mb-4\">Ganti tinggi tetap dengan min-height. Izinkan teks membungkus. Jangan kunci zoom di meta viewport.</p><p class=\"mb-4\">Minta AI memperbaiki satu komponen yang pecah. Tolak rewrite seluruh CSS.</p><p class=\"mb-4\">Clincoo menayangkan markup yang kamu simpan. Lulus zoom 200% adalah tes rilis.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test 200% Text Zoom in the Clincoo Preview",
          desc: "A layout that breaks at 200% zoom is an access bug, not a design preference.",
          content: "<p class=\"mb-4\">Many Clincoo sites look tidy at 100% then stack badly when a visitor enlarges text. Hidden overflow and fixed heights cause it.</p><p class=\"mb-4\">In editor.clincoo.buzz open preview and press Ctrl + plus to 200%. Scroll the header, cards, and form. Note clipped text and buttons leaving the frame.</p><p class=\"mb-4\">Swap fixed heights for min-height. Let text wrap. Do not lock zoom in the viewport meta.</p><p class=\"mb-4\">Ask the AI to fix one broken component. Refuse a full CSS rewrite.</p><p class=\"mb-4\">Clincoo serves the markup you save. Passing 200% zoom is a release test.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "testing-meta-og-saat-dibagikan",
      langs: {
        "id": {
          title: "Uji Pratinjau Open Graph sebelum Membagikan Situs Clincoo",
          desc: "Tautan tanpa judul dan gambar OG terlihat kosong di chat. Cek meta sebelum rilis.",
          content: "<p class=\"mb-4\">Teman yang menerima tautan Clincoo di WhatsApp atau X melihat judul tab mentah jika og:title dan og:image kosong.</p><p class=\"mb-4\">Isi title, description, og:image ke logo.png atau hero, dan canonical ke blog atau domain proyek. Samakan teks dengan h1 halaman.</p><p class=\"mb-4\">Setelah deploy, tempel URL ke debugger Open Graph atau cukup bagikan ke chat uji. Hard-refresh cache pratinjau jika gambar lama muncul.</p><p class=\"mb-4\">Minta AI menambah meta hanya di head satu file. Tolak plugin berbagi pihak ketiga.</p><p class=\"mb-4\">Clincoo tidak menulis kartu sosial otomatis. Tes bagikan adalah tes rilis.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test the Open Graph Preview before You Share a Clincoo Site",
          desc: "A link without OG title and image looks empty in chat. Check meta before you publish.",
          content: "<p class=\"mb-4\">Friends who receive a Clincoo link in WhatsApp or X see a raw tab title if og:title and og:image are missing.</p><p class=\"mb-4\">Set title, description, og:image to logo.png or the hero, and canonical to the project domain. Match the text to the page h1.</p><p class=\"mb-4\">After deploy, paste the URL into an Open Graph debugger or a test chat. Hard-refresh the preview cache if an old image appears.</p><p class=\"mb-4\">Ask the AI to add meta only in one file head. Refuse a third-party share plugin.</p><p class=\"mb-4\">Clincoo does not write social cards for you. Share tests are a release gate.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "testing-print-css-halaman",
      langs: {
        "id": {
          title: "Uji Tampilan Cetak Halaman Clincoo sebelum Rilis",
          desc: "Pengunjung masih mencetak harga dan syarat. Sembunyikan navigasi di @media print.",
          content: "<p class=\"mb-4\">Halaman Clincoo yang dicetak sering memuat menu, hero gelap, dan tombol yang memakan tinta. Itu bug tata letak, bukan masalah printer.</p><p class=\"mb-4\">Di pratinjau editor.clincoo.buzz buka dialog cetak browser. Cek apakah judul, harga, dan alamat tetap terbaca hitam di kertas putih.</p><p class=\"mb-4\">Tambah @media print: sembunyikan nav dan footer iklan, paksa latar putih, izinkan url tautan tampil jika perlu.</p><p class=\"mb-4\">Minta AI satu blok print saja. Tolak pustaka CSS cetak yang berat.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. Tes cetak menjaga halaman tetap berguna di kertas.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test the Print View of a Clincoo Page before Release",
          desc: "Visitors still print prices and terms. Hide navigation in @media print.",
          content: "<p class=\"mb-4\">A printed Clincoo page often keeps the menu, a dark hero, and buttons that waste ink. That is a layout bug, not a printer issue.</p><p class=\"mb-4\">In the editor.clincoo.buzz preview open the browser print dialog. Check that the title, prices, and address stay readable black on white paper.</p><p class=\"mb-4\">Add @media print: hide nav and promo footer, force a white background, and show link URLs if needed.</p><p class=\"mb-4\">Ask the AI for one print block only. Refuse a heavy print CSS library.</p><p class=\"mb-4\">Clincoo ships the CSS you save. Print tests keep the page useful on paper.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["testing"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["testing"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
