// Clincoo Blog — artikel audit tambahan 2026-09-27
(function(){
  var extra = [
    {
      id: "audit-cek-urutan-heading",
      langs: {
        "id": {
          title: "Audit Urutan Heading H1–H3 di Halaman Clincoo",
          desc: "Melompat dari H1 ke H4 membingungkan pembaca layar. Cek outline sebelum rilis.",
          content: "<p class=\"mb-4\">Template Clincoo kadang menyisakan H4 untuk judul kartu karena desainer menyalin gaya, bukan semantik.</p><p class=\"mb-4\">Di editor.clincoo.buzz, daftar semua heading satu halaman. Urutan yang benar: satu H1, lalu H2 bagian, H3 di dalam H2.</p><p class=\"mb-4\">Jangan pakai heading hanya untuk memperbesar teks. Gunakan kelas CSS. Heading kosong atau tersembunyi tetap terbaca alat bantu.</p><p class=\"mb-4\">Tempel outline ke asisten AI dan minta perbaikan urutan, bukan desain ulang seluruh halaman.</p><p class=\"mb-4\">Clincoo menayangkan HTML apa adanya. Outline rapi membuat audit akses di app.clincoo.buzz lebih cepat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Audit H1–H3 Heading Order on a Clincoo Page",
          desc: "Jumping from H1 to H4 confuses screen readers. Check the outline before release.",
          content: "<p class=\"mb-4\">Clincoo templates sometimes leave H4 on card titles because a designer copied style, not semantics.</p><p class=\"mb-4\">In editor.clincoo.buzz, list every heading on one page. The right order is one H1, then section H2s, then H3s inside those H2s.</p><p class=\"mb-4\">Do not use headings only to enlarge text. Use a CSS class. Empty or hidden headings still get read by assistive tools.</p><p class=\"mb-4\">Paste the outline to the AI assistant and ask for order fixes, not a full page redesign.</p><p class=\"mb-4\">Clincoo ships the HTML as saved. A clean outline makes accessibility audits on app.clincoo.buzz faster.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "audit-cek-tap-target-sentuh",
      langs: {
        "id": {
          title: "Audit Ukuran Tap Target Sentuh di Proyek Clincoo",
          desc: "Tautan 20px di footer mudah miss-tap. Ukur area sentuh sebelum rilis mobile.",
          content: "<p class=\"mb-4\">Menu Clincoo yang rapat di HP membuat pengunjung menekan tautan tetangga. Konsol tidak menampilkan kesalahan ini.</p><p class=\"mb-4\">Di editor.clincoo.buzz, buka pratinjau lebar 375px. Setiap tautan dan tombol sebaiknya sekitar 44px tinggi sentuh, termasuk padding.</p><p class=\"mb-4\">Periksa footer, chip tag, dan ikon sosial. Jangan andalkan huruf kecil tanpa padding.</p><p class=\"mb-4\">Minta AI menambah padding pada satu blok nav, bukan mengubah seluruh grid.</p><p class=\"mb-4\">Clincoo tidak memperbaiki tap target otomatis. Audit sentuh menjaga app.clincoo.buzz nyaman di ibu jari.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Audit Touch Tap Targets in a Clincoo Project",
          desc: "A 20px footer link is easy to miss-tap. Measure hit areas before a mobile release.",
          content: "<p class=\"mb-4\">A tight Clincoo menu on a phone makes visitors hit the neighbor link. The console does not show this error.</p><p class=\"mb-4\">In editor.clincoo.buzz, open a 375px preview. Every link and button should be about 44px tall including padding.</p><p class=\"mb-4\">Check the footer, tag chips, and social icons. Do not rely on tiny type without padding.</p><p class=\"mb-4\">Ask the AI to add padding on one nav block, not to rewrite the whole grid.</p><p class=\"mb-4\">Clincoo does not auto-fix tap targets. A touch audit keeps app.clincoo.buzz comfortable for thumbs.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "audit-cek-mixed-content",
      langs: {
        "id": {
          title: "Audit Mixed Content HTTP di Halaman HTTPS Clincoo",
          desc: "Gambar atau skrip http:// di halaman https memicu peringatan dan kadang diblokir.",
          content: "<p class=\"mb-4\">Proyek Clincoo sudah HTTPS, tetapi hero masih memanggil http://cdn lama. Browser memblokir skrip dan form terlihat mati.</p><p class=\"mb-4\">Di editor.clincoo.buzz, cari http:// pada HTML dan CSS. Ganti ke https:// atau path relatif /assets/.</p><p class=\"mb-4\">Buka konsol pratinjau: mixed content muncul sebagai peringatan kuning atau error diblokir.</p><p class=\"mb-4\">Tempel daftar URL http ke AI dan minta pengganti aman. Tolak menyalin file dari host yang tidak kamu miliki.</p><p class=\"mb-4\">Clincoo menayangkan tautan apa adanya. Audit mixed content menjaga gembok di app.clincoo.buzz tetap valid.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Audit HTTP Mixed Content on HTTPS Clincoo Pages",
          desc: "An http:// image or script on an https page triggers warnings and is sometimes blocked.",
          content: "<p class=\"mb-4\">The Clincoo project is already HTTPS, but the hero still loads an old http:// CDN. The browser blocks the script and the form looks dead.</p><p class=\"mb-4\">In editor.clincoo.buzz, search for http:// in HTML and CSS. Switch to https:// or a relative /assets/ path.</p><p class=\"mb-4\">Open the preview console: mixed content shows as a yellow warning or a blocked error.</p><p class=\"mb-4\">Paste the http URL list to the AI and ask for a safe replacement. Refuse copying files from a host you do not own.</p><p class=\"mb-4\">Clincoo ships links as written. A mixed-content audit keeps the lock on app.clincoo.buzz valid.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "audit-cek-favicon-apple-touch",
      langs: {
        "id": {
          title: "Audit Favicon dan Apple Touch Icon Proyek Clincoo",
          desc: "Tab tanpa ikon terlihat belum selesai. Cek tautan icon di head sebelum bagikan URL.",
          content: "<p class=\"mb-4\">Banyak template Clincoo menunjuk favicon.ico yang tidak ada. Tab browser tampil globe kosong.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pastikan ada file logo atau favicon di root dan tautan rel=icon di setiap head.</p><p class=\"mb-4\">Tambah apple-touch-icon untuk simpan ke layar HP. Gunakan PNG persegi, bukan potongan hero 16:9.</p><p class=\"mb-4\">Minta AI menulis dua tautan icon saja. Tolak menyalin meta yang mengarah ke domain lain.</p><p class=\"mb-4\">Clincoo tidak membuat ikon otomatis. Audit favicon membuat bagikan tautan app.clincoo.buzz terlihat resmi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Audit Favicon and Apple Touch Icon in a Clincoo Project",
          desc: "A tab without an icon looks unfinished. Check icon links in head before you share the URL.",
          content: "<p class=\"mb-4\">Many Clincoo templates point at a missing favicon.ico. The browser tab shows an empty globe.</p><p class=\"mb-4\">In editor.clincoo.buzz, make sure a logo or favicon file exists at the root and every head has a rel=icon link.</p><p class=\"mb-4\">Add an apple-touch-icon for Add to Home Screen. Use a square PNG, not a 16:9 hero crop.</p><p class=\"mb-4\">Ask the AI to write only the two icon links. Refuse meta that points at another domain.</p><p class=\"mb-4\">Clincoo does not generate icons for you. A favicon audit makes shared app.clincoo.buzz links look official.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["audit"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["audit"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
