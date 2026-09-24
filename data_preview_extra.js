// Clincoo Blog — artikel preview tambahan 2026-09-24
(function(){
  var extra = [
    {
      id: "preview-mode-gelap-dan-terang",
      langs: {
        "id": {
          title: "Uji Pratinjau Clincoo di Mode Gelap dan Terang",
          desc: "Kontras yang aman di tema terang bisa gagal saat pengunjung memakai mode gelap sistem.",
          content: "<p class=\"mb-4\">Banyak halaman Clincoo diuji hanya di latar putih. Saat sistem operasi memakai mode gelap, teks sekunder dan ikon menjadi hampir tak terlihat.</p><p class=\"mb-4\">Di editor.clincoo.buzz, nyalakan prefers-color-scheme gelap pada pratinjau atau DevTools. Cek kontras tombol, border, dan placeholder form.</p><p class=\"mb-4\">Jangan andalkan warna hex yang hanya cocok untuk satu tema. Siapkan pasangan warna atau pastikan latar tetap terang secara eksplisit.</p><p class=\"mb-4\">Minta AI hanya menyesuaikan token warna yang gagal, bukan menulis ulang seluruh stylesheet.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. Uji dua tema di pratinjau sebelum rilis ke app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test the Clincoo Preview in Dark and Light Mode",
          desc: "Contrast that is safe on a light theme can fail when a visitor uses system dark mode.",
          content: "<p class=\"mb-4\">Many Clincoo pages are tested only on a white background. When the OS uses dark mode, secondary text and icons nearly vanish.</p><p class=\"mb-4\">In editor.clincoo.buzz, turn on prefers-color-scheme dark in the preview or DevTools. Check button contrast, borders, and form placeholders.</p><p class=\"mb-4\">Do not rely on hex colors that only work for one theme. Prepare color pairs or keep the background explicitly light.</p><p class=\"mb-4\">Ask AI only to adjust the failing color tokens, not to rewrite the whole stylesheet.</p><p class=\"mb-4\">Clincoo ships the CSS you save. Test both themes in preview before release to app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "preview-hover-bukan-sentuh",
      langs: {
        "id": {
          title: "Jangan Andalkan Hover Saat Menguji Pratinjau Clincoo",
          desc: "Menu yang hanya muncul saat hover lolos di desktop dan hilang di layar sentuh.",
          content: "<p class=\"mb-4\">Dropdown Clincoo sering memakai :hover. Di pratinjau lebar itu terlihat benar. Di HP, submenu tidak pernah terbuka.</p><p class=\"mb-4\">Uji pratinjau editor.clincoo.buzz dengan pointer kasar atau mode perangkat. Pastikan menu punya jalur klik atau tap, bukan hanya hover.</p><p class=\"mb-4\">Periksa tooltip dan tombol sekunder yang sama. Jika informasi penting hanya di hover, pindahkan ke teks terlihat.</p><p class=\"mb-4\">Minta AI menambah penanganan klik pada satu menu, bukan menulis ulang navigasi seluruh situs.</p><p class=\"mb-4\">Clincoo merender interaksi yang kamu tulis. Uji tanpa hover sebelum deploy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Rely on Hover when Testing the Clincoo Preview",
          desc: "Menus that only appear on hover pass on desktop and vanish on a touch screen.",
          content: "<p class=\"mb-4\">Clincoo dropdowns often use :hover. In a wide preview that looks correct. On a phone the submenu never opens.</p><p class=\"mb-4\">Test the editor.clincoo.buzz preview with a coarse pointer or device mode. Make sure the menu has a click or tap path, not only hover.</p><p class=\"mb-4\">Check tooltips and secondary buttons the same way. If important information lives only in hover, move it into visible text.</p><p class=\"mb-4\">Ask AI to add click handling on one menu, not to rewrite site-wide navigation.</p><p class=\"mb-4\">Clincoo renders the interactions you write. Test without hover before deploy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "preview-konten-teks-panjang",
      langs: {
        "id": {
          title: "Uji Pratinjau Clincoo dengan Teks Nyata yang Panjang",
          desc: "Kartu dan heading pecah saat copy asli lebih panjang dari lorem pendek di editor.",
          content: "<p class=\"mb-4\">Desain Clincoo sering memakai judul tiga kata. Saat klien menempel paragraf nyata, kartu merenggang dan tombol terdorong keluar.</p><p class=\"mb-4\">Di pratinjau editor.clincoo.buzz, tempel teks terpanjang yang mungkin muncul: nama produk, alamat, dan kutipan.</p><p class=\"mb-4\">Cek line-clamp, overflow, dan tinggi kartu. Biarkan wadah tumbuh; hindari memotong kata di tengah.</p><p class=\"mb-4\">Minta AI hanya merapikan satu kartu yang pecah. Tempel contoh teks panjang sebagai konteks.</p><p class=\"mb-4\">Clincoo menampilkan copy yang kamu simpan. Uji panjang nyata sebelum rilis ke app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test the Clincoo Preview with Real Long Text",
          desc: "Cards and headings break when real copy is longer than the short lorem in the editor.",
          content: "<p class=\"mb-4\">Clincoo designs often use three-word titles. When a client pastes a real paragraph, cards stretch and buttons get pushed out.</p><p class=\"mb-4\">In the editor.clincoo.buzz preview, paste the longest text that might appear: product names, addresses, and quotes.</p><p class=\"mb-4\">Check line-clamp, overflow, and card height. Let the box grow; do not clip words in the middle.</p><p class=\"mb-4\">Ask AI only to tidy the one card that breaks. Paste the long sample as context.</p><p class=\"mb-4\">Clincoo shows the copy you save. Test real length before release to app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "preview-status-jaringan-lambat",
      langs: {
        "id": {
          title: "Uji Pratinjau Clincoo saat Jaringan Diperlambat",
          desc: "Gambar hero dan font kustom terlihat rapi di Wi-Fi kantor, lalu kosong di 3G.",
          content: "<p class=\"mb-4\">Pratinjau Clincoo di jaringan cepat menyembunyikan flash konten tanpa gaya dan gambar yang telat.</p><p class=\"mb-4\">Di DevTools, aktifkan throttling Slow 3G lalu muat ulang pratinjau editor.clincoo.buzz. Catat urutan munculnya teks, font, dan gambar.</p><p class=\"mb-4\">Sediakan lebar dan tinggi gambar agar layout tidak meloncat. Pakai font cadangan yang ukurannya dekat.</p><p class=\"mb-4\">Minta AI hanya menambah atribut dimensi atau fallback, bukan menghapus aset.</p><p class=\"mb-4\">Clincoo tidak mempercepat jaringan pengunjung. Uji lambat di pratinjau sebelum publik di blog.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test the Clincoo Preview on a Slow Network",
          desc: "Hero images and custom fonts look fine on office Wi-Fi, then stay empty on 3G.",
          content: "<p class=\"mb-4\">A fast-network Clincoo preview hides flashes of unstyled content and late images.</p><p class=\"mb-4\">In DevTools, turn on Slow 3G throttling and reload the editor.clincoo.buzz preview. Note the order that text, fonts, and images appear.</p><p class=\"mb-4\">Give images width and height so the layout does not jump. Use a fallback font of similar size.</p><p class=\"mb-4\">Ask AI only to add dimension attributes or fallbacks, not to remove assets.</p><p class=\"mb-4\">Clincoo does not speed up the visitor network. Test slow preview before you publish on blog.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["preview"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["preview"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
