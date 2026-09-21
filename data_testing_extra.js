// Clincoo Blog — artikel testing tambahan 2026-09-21
(function(){
  var extra = [
    {
      id: "testing-konsol-browser-tanpa-error",
      langs: {
        "id": {
          title: "Buka Konsol Browser sebelum Deploy Situs Clincoo",
          desc: "F12 di pratinjau. Error merah di konsol adalah bug rilis, bukan catatan samping.",
          content: "<p class=\"mb-4\">Banyak situs Clincoo terlihat rapi sampai seseorang membuka DevTools. Satu file JS yang menunjuk ID yang sudah dihapus memunculkan TypeError di setiap kunjungan.</p><p class=\"mb-4\">Di editor.clincoo.buzz buka pratinjau, tekan F12, pilih tab Console. Segarkan halaman. Catat error merah, peringatan mixed content, dan 404 aset.</p><p class=\"mb-4\">Perbaiki satu error per commit. Jangan minta AI menelan seluruh file JS jika yang rusak hanya satu querySelector.</p><p class=\"mb-4\">Ulangi di tiga halaman: Beranda, Kontak, dan satu halaman dalam. Error yang hanya muncul setelah klik menu juga wajib dicatat.</p><p class=\"mb-4\">Clincoo menayangkan skrip yang kamu simpan. Konsol bersih adalah syarat rilis, bukan hiasan developer.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Open the Browser Console before You Deploy a Clincoo Site",
          desc: "Press F12 in preview. A red console error is a release bug, not a side note.",
          content: "<p class=\"mb-4\">Many Clincoo sites look fine until someone opens DevTools. One JS file that points at a deleted ID throws a TypeError on every visit.</p><p class=\"mb-4\">In editor.clincoo.buzz open preview, press F12, and pick the Console tab. Refresh. Note red errors, mixed-content warnings, and asset 404s.</p><p class=\"mb-4\">Fix one error per commit. Do not ask the AI to swallow the whole JS file if only one querySelector is broken.</p><p class=\"mb-4\">Repeat on three pages: Home, Contact, and one inner page. Errors that appear only after a menu click also count.</p><p class=\"mb-4\">Clincoo serves the scripts you save. A clean console is a release gate, not a developer ornament.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "testing-tautan-internal-semua-hidup",
      langs: {
        "id": {
          title: "Klik Semua Tautan Internal Clincoo sebelum Rilis",
          desc: "Menu, footer, dan tombol hero harus mendarat di halaman yang ada. Path lama adalah 404.",
          content: "<p class=\"mb-4\">Ganti nama file HTML di workspace Clincoo sering meninggalkan href lama di menu. Pengunjung menekan Harga dan mendarat di 404.</p><p class=\"mb-4\">Di editor.clincoo.buzz klik setiap item nav, setiap tautan footer, dan setiap tombol di hero. Catat path yang tidak cocok dengan nama file.</p><p class=\"mb-4\">Samakan href dengan file yang benar. Jangan andalkan redirect yang tidak Anda tulis.</p><p class=\"mb-4\">Minta AI mencari href yang merujuk file yang tidak ada. Tolak skrip crawler yang memuat dependensi baru.</p><p class=\"mb-4\">Situs Clincoo statis. Tes tautan internal adalah daftar periksa rilis, bukan pekerjaan nanti.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Click Every Internal Clincoo Link before You Publish",
          desc: "Menu, footer, and hero buttons must land on a real page. An old path is a 404.",
          content: "<p class=\"mb-4\">Renaming an HTML file in a Clincoo workspace often leaves an old href in the menu. Visitors tap Pricing and land on a 404.</p><p class=\"mb-4\">In editor.clincoo.buzz click every nav item, every footer link, and every hero button. Note paths that do not match a file name.</p><p class=\"mb-4\">Point the href at the real file. Do not rely on a redirect you never wrote.</p><p class=\"mb-4\">Ask the AI to find hrefs that point at missing files. Refuse a crawler script that pulls new dependencies.</p><p class=\"mb-4\">A Clincoo site is static. Internal-link checks belong on the release list, not on a later todo.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "testing-tab-keyboard-seluruh-halaman",
      langs: {
        "id": {
          title: "Uji Urutan Tab Keyboard di Halaman Clincoo",
          desc: "Tekan Tab dari logo sampai footer. Fokus harus terlihat dan tidak tersesat di elemen tersembunyi.",
          content: "<p class=\"mb-4\">Pengunjung yang tidak memakai mouse mengandalkan Tab. Menu Clincoo dengan tabindex acak atau outline:none membuat mereka tersesat.</p><p class=\"mb-4\">Buka pratinjau di editor.clincoo.buzz. Klik di luar halaman, lalu Tab berulang. Catat elemen yang dilewati, fokus yang hilang, dan trap di modal palsu.</p><p class=\"mb-4\">Hapus tabindex positif. Kembalikan outline pada :focus-visible. Jangan andalkan warna fokus yang sama dengan latar.</p><p class=\"mb-4\">Minta AI memperbaiki urutan di satu file HTML. Tolak pustaka fokus-trap untuk halaman statis tanpa dialog.</p><p class=\"mb-4\">Akses keyboard adalah tes rilis. Clincoo tidak menambah fokus otomatis setelah deploy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test Keyboard Tab Order on a Clincoo Page",
          desc: "Tab from the logo to the footer. Focus must be visible and must not vanish into hidden elements.",
          content: "<p class=\"mb-4\">Visitors who do not use a mouse rely on Tab. A Clincoo menu with random tabindex or outline:none leaves them lost.</p><p class=\"mb-4\">Open preview in editor.clincoo.buzz. Click outside the page, then Tab repeatedly. Note skipped items, vanished focus, and traps in a fake modal.</p><p class=\"mb-4\">Remove positive tabindex. Restore an outline on :focus-visible. Do not rely on a focus color that matches the background.</p><p class=\"mb-4\">Ask the AI to fix order in one HTML file. Refuse a focus-trap library on a static page with no dialog.</p><p class=\"mb-4\">Keyboard access is a release test. Clincoo does not add focus for you after deploy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "testing-favicon-judul-tab-benar",
      langs: {
        "id": {
          title: "Cek Favicon dan Judul Tab Clincoo di Setiap Halaman",
          desc: "Tab browser harus menampilkan nama halaman plus merek. Favicon pecah membuat situs terlihat belum siap.",
          content: "<p class=\"mb-4\">Template Clincoo yang diduplikasi sering menyisakan judul Default atau path file di tab. Favicon menunjuk file yang tidak diunggah.</p><p class=\"mb-4\">Buka setiap halaman di pratinjau editor.clincoo.buzz. Baca judul tab. Pastikan unik per halaman dan memuat nama merek Anda.</p><p class=\"mb-4\">Cek ikon di tab dan di bookmark. Path favicon harus relatif benar dari folder halaman, bukan hanya dari akar editor.</p><p class=\"mb-4\">Minta AI menulis title yang spesifik, bukan template sama di semua file. Tolak generator meta yang menambah file JSON besar.</p><p class=\"mb-4\">Judul tab dan favicon adalah kesan pertama di banyak tab. Tes ini murah dan wajib sebelum bagikan URL app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Check the Clincoo Favicon and Tab Title on Every Page",
          desc: "The browser tab should show the page name plus the brand. A broken favicon makes the site look unfinished.",
          content: "<p class=\"mb-4\">A copied Clincoo template often leaves Default or a file path in the tab. The favicon points at a file nobody uploaded.</p><p class=\"mb-4\">Open every page in editor.clincoo.buzz preview. Read the tab title. It should be unique per page and include your brand name.</p><p class=\"mb-4\">Check the icon in the tab and in a bookmark. The favicon path must be correct from the page folder, not only from the editor root.</p><p class=\"mb-4\">Ask the AI for a specific title, not the same template in every file. Refuse a meta generator that adds a large JSON file.</p><p class=\"mb-4\">Tab title and favicon are the first impression across many tabs. This test is cheap and required before you share an app.clincoo.buzz URL.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "testing-gambar-patah-di-pratinjau",
      langs: {
        "id": {
          title: "Cari Gambar Patah di Pratinjau Clincoo sebelum Deploy",
          desc: "Ikon pecah dan hero kosong adalah bug yang terlihat di detik pertama. Cek src sebelum rilis.",
          content: "<p class=\"mb-4\">Ganti nama folder assets di workspace Clincoo mematahkan src gambar yang masih menunjuk path lama. Pratinjau desktop kadang masih cache.</p><p class=\"mb-4\">Di editor.clincoo.buzz hard-refresh pratinjau. Scroll sampai footer. Catat ikon alt yang tampil sebagai teks dan area hero abu-abu.</p><p class=\"mb-4\">Samakan src dengan file yang ada. Isi width dan height agar slot tidak loncat saat gambar terlambat.</p><p class=\"mb-4\">Minta AI memperbaiki path di satu file. Tolak skrip lazy-load yang menyembunyikan 404 sampai pengguna scroll.</p><p class=\"mb-4\">Clincoo tidak memperbaiki path setelah GitHub Pages menayangkan file. Tes gambar patah adalah tes rilis.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Hunt Broken Images in Clincoo Preview before Deploy",
          desc: "A cracked icon and an empty hero are bugs visitors see in the first second. Check src before you publish.",
          content: "<p class=\"mb-4\">Renaming the assets folder in a Clincoo workspace breaks image src values that still point at the old path. Desktop preview may still be cached.</p><p class=\"mb-4\">In editor.clincoo.buzz hard-refresh the preview. Scroll to the footer. Note alt text showing as a label and a grey hero slot.</p><p class=\"mb-4\">Point src at a file that exists. Set width and height so the slot does not jump when the image is late.</p><p class=\"mb-4\">Ask the AI to fix paths in one file. Refuse a lazy-load script that hides a 404 until the user scrolls.</p><p class=\"mb-4\">Clincoo does not repair paths after GitHub Pages serves the files. Broken-image checks are a release test.</p>",
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
