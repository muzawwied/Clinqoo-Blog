// Clincoo Blog — artikel print tambahan 2026-09-23
(function(){
  var extra = [
    {
      id: "print-sembunyikan-video-iframe",
      langs: {
        "id": {
          title: "Sembunyikan Video dan Iframe saat Mencetak Halaman Clincoo",
          desc: "Pemutar video dan peta tertanam hanya memakan kertas kosong. Sembunyikan di media print.",
          content: "<p class=\"mb-4\">Halaman layanan Clincoo sering memuat iframe peta atau video YouTube. Saat dicetak, kotak itu jadi area abu tanpa arti.</p><p class=\"mb-4\">Di @media print, set display none pada video, iframe, dan wadah embed. Jika alamat fisik penting, sisakan teks alamat di bawah peta.</p><p class=\"mb-4\">Jangan andalkan browser memotong media otomatis. Beberapa printer tetap mencetak bingkai kosong.</p><p class=\"mb-4\">Uji pratinjau cetak setelah simpan di editor.clincoo.buzz. Minta AI hanya menambah selector media, bukan menghapus embed di tampilan layar.</p><p class=\"mb-4\">Clincoo merender markup apa adanya. CSS print yang menyingkirkan media menjaga kertas tetap berguna.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Hide Video and Iframes when Printing a Clincoo Page",
          desc: "Players and embedded maps only waste blank paper. Hide them in print CSS.",
          content: "<p class=\"mb-4\">Clincoo service pages often embed a map iframe or a YouTube player. In print those boxes become empty gray frames.</p><p class=\"mb-4\">In @media print, set display none on video, iframe, and embed wrappers. If the street address matters, keep the text under the map.</p><p class=\"mb-4\">Do not trust the browser to crop media for you. Some printers still output an empty frame.</p><p class=\"mb-4\">Check print preview after saving in editor.clincoo.buzz. Ask AI only to add media selectors, not to remove embeds from the screen view.</p><p class=\"mb-4\">Clincoo renders markup as saved. Print CSS that drops media keeps paper useful.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "print-tampilkan-email-telepon",
      langs: {
        "id": {
          title: "Tampilkan Email dan Telepon secara Eksplisit pada Cetakan Clincoo",
          desc: "Tautan tel: dan mailto tanpa teks cadangan hilang artinya di kertas. Cetak nilai yang bisa dihubungi.",
          content: "<p class=\"mb-4\">Kartu kontak Clincoo sering hanya berisi ikon atau tautan Hubungi kami. Di kertas, pembaca tidak mendapat nomor.</p><p class=\"mb-4\">Tulis alamat email dan nomor telepon sebagai teks biasa di blok kontak. Pada @media print, tampilkan attr(href) untuk tautan mailto dan tel jika teksnya generik.</p><p class=\"mb-4\">Jangan mengandalkan QR saja. Tidak semua penerima cetakan punya kamera siap pindai.</p><p class=\"mb-4\">Pratinjau di editor.clincoo.buzz. Minta AI menambah satu aturan print untuk tautan kontak, bukan merombak kartu.</p><p class=\"mb-4\">Clincoo tidak mengekstrak kontak otomatis. Nilai yang terbaca di kertas membuat dokumen bisa ditindaklanjuti.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Print Email and Phone Numbers Explicitly on Clincoo Pages",
          desc: "tel: and mailto links without fallback text lose meaning on paper. Print a reachable value.",
          content: "<p class=\"mb-4\">Clincoo contact cards often hold only an icon or a Contact us link. On paper the reader never gets a number.</p><p class=\"mb-4\">Write the email and phone as plain text in the contact block. In @media print, show attr(href) for mailto and tel links when the label is generic.</p><p class=\"mb-4\">Do not rely on a QR code alone. Not every print recipient has a camera ready.</p><p class=\"mb-4\">Preview in editor.clincoo.buzz. Ask AI to add one print rule for contact links, not to rebuild the card.</p><p class=\"mb-4\">Clincoo does not extract contacts for you. Values that read on paper keep the document actionable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "print-nilai-form-terisi",
      langs: {
        "id": {
          title: "Pastikan Nilai Form Terlihat saat Halaman Clincoo Dicetak",
          desc: "Input tanpa border print dan nilai yang hilang membuat invoice kosong. Rapikan form khusus kertas.",
          content: "<p class=\"mb-4\">Beberapa tema Clincoo memakai input transparan. Saat dicetak, kotak dan nilai sulit dibedakan dari latar.</p><p class=\"mb-4\">Pada @media print, beri border tipis pada input, select, dan textarea. Pastikan color teks kontras dan background putih.</p><p class=\"mb-4\">Jangan cetak tombol Kirim atau kapcha. Sembunyikan kontrol aksi; sisakan label dan nilai.</p><p class=\"mb-4\">Isi form uji di pratinjau editor.clincoo.buzz lalu buka dialog cetak. Minta AI hanya menyentuh selector form print.</p><p class=\"mb-4\">Clincoo tidak mengubah form saat Ctrl+P. CSS print yang jelas menjaga salinan kertas tetap bisa dicek.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep Form Values Visible when a Clincoo Page is Printed",
          desc: "Inputs without print borders and missing values make a blank invoice. Style forms for paper.",
          content: "<p class=\"mb-4\">Some Clincoo themes use transparent inputs. In print the box and the value blend into the page.</p><p class=\"mb-4\">In @media print, add a thin border on input, select, and textarea. Keep text color contrasting and the background white.</p><p class=\"mb-4\">Do not print Submit buttons or captcha. Hide action controls; keep labels and values.</p><p class=\"mb-4\">Fill a test form in editor.clincoo.buzz preview and open the print dialog. Ask AI to touch print form selectors only.</p><p class=\"mb-4\">Clincoo does not restyle forms on Ctrl+P. Clear print CSS keeps the paper copy checkable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "print-header-nama-situs-ulang",
      langs: {
        "id": {
          title: "Ulangi Nama Situs di Header Cetak Clincoo",
          desc: "Lembar kedua tanpa identitas mudah tertukar. Tambah running header singkat.",
          content: "<p class=\"mb-4\">Artikel panjang dari blog.clincoo.buzz atau invoice multihalaman kehilangan konteks setelah lembar pertama.</p><p class=\"mb-4\">Pakai @page { @top-left { content: \"Nama proyek Clincoo\"; } } di browser yang mendukung, atau sisipkan baris identitas di atas artikel khusus print.</p><p class=\"mb-4\">Jangan meniru navbar lengkap di setiap halaman. Satu baris nama dan tanggal sudah cukup.</p><p class=\"mb-4\">Uji dua halaman di pratinjau editor.clincoo.buzz. Minta AI menjelaskan batas dukungan margin boxes, bukan menjanjikan hasil identik di semua mesin.</p><p class=\"mb-4\">Clincoo tidak menambah kop surat otomatis. Header singkat menjaga tumpukan kertas tetap bisa dikenali.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Repeat the Site Name in a Clincoo Print Header",
          desc: "A second sheet with no identity gets mixed up. Add a short running header.",
          content: "<p class=\"mb-4\">A long article from blog.clincoo.buzz or a multi-page invoice loses context after the first sheet.</p><p class=\"mb-4\">Use @page { @top-left { content: \"Clincoo project name\"; } } in browsers that support it, or insert an identity line above the article for print only.</p><p class=\"mb-4\">Do not reprint the full navbar on every page. One line with name and date is enough.</p><p class=\"mb-4\">Test two pages in editor.clincoo.buzz preview. Ask AI to explain margin-box support limits, not to promise identical output on every engine.</p><p class=\"mb-4\">Clincoo does not inject letterhead. A short header keeps a paper stack recognizable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "print-tabel-border-lebar-penuh",
      langs: {
        "id": {
          title: "Rapikan Border dan Lebar Tabel pada Cetakan Clincoo",
          desc: "Tabel harga tanpa garis dan kolom yang terlalu lebar pecah di kertas. Atur print table secara terpisah.",
          content: "<p class=\"mb-4\">Tabel paket Clincoo sering memakai kartu tanpa border. Di layar jelas, di kertas baris menyatu.</p><p class=\"mb-4\">Pada @media print, tambah border 1px pada th dan td, collapse border, dan set table-layout auto dengan max-width 100%.</p><p class=\"mb-4\">Sembunyikan kolom aksi seperti tombol Beli jika tidak relevan di kertas. Sisakan nama paket, harga, dan catatan.</p><p class=\"mb-4\">Cetak halaman uji dari editor.clincoo.buzz. Minta AI hanya menambah aturan table print, bukan mengubah grid kartu layar.</p><p class=\"mb-4\">Clincoo tidak merapikan tabel saat print. Garis tipis dan lebar yang jujur membuat angka tetap terbaca.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Tighten Table Borders and Width on Clincoo Printouts",
          desc: "Priceless tables without lines and oversized columns break on paper. Style print tables separately.",
          content: "<p class=\"mb-4\">Clincoo pricing tables often use borderless cards. On screen that is clear; on paper the rows merge.</p><p class=\"mb-4\">In @media print, add a 1px border on th and td, collapse borders, and set table-layout auto with max-width 100%.</p><p class=\"mb-4\">Hide action columns such as Buy if they do not matter on paper. Keep plan name, price, and notes.</p><p class=\"mb-4\">Print a test page from editor.clincoo.buzz. Ask AI only to add print table rules, not to change the screen card grid.</p><p class=\"mb-4\">Clincoo does not tidy tables for print. Thin lines and honest width keep the numbers readable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["print"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["print"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
