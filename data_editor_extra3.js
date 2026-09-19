// Clincoo Blog — artikel editor tambahan extra3 2026-09-18
(function(){
  var extra = [
    {
      id: "susun-urutan-tab-kerja-di-editor",
      langs: {
        "id": {
          title: "Susun Urutan Tab Kerja di Editor Clincoo",
          desc: "Buka HTML, CSS, lalu pratinjau dalam urutan tetap supaya tangan tidak berpindah acak setiap sesi.",
          content: "<p class=\"mb-4\">Editor Clincoo merapikan kerja kalau tab tidak bertebaran. Banyak orang membuka lima file sekaligus lalu mencari tab yang tadi diubah.</p><p class=\"mb-4\">Pakai urutan tetap: halaman yang sedang diedit di kiri, stylesheet terkait di kanan, aset hanya dibuka saat mengganti gambar. Tutup tab yang tidak disentuh dalam sepuluh menit.</p><p class=\"mb-4\">Kalau harus membandingkan dua halaman, biarkan keduanya terbuka berdampingan dan simpan masing-masing sebelum pindah. Jangan andalkan ingatan isi tab.</p><p class=\"mb-4\">Urutan tab adalah kebiasaan kecil. Setelah seminggu, mencari file terasa lebih pendek daripada menggulir explorer dari atas.</p>",
          source: "Clincoo Editor", sourceUrl: "https://editor.clincoo.buzz/", sourceSnippet: "Editor kode Clincoo",
          source2: "Clincoo Blog", sourceUrl2: "https://blog.clincoo.buzz/", sourceSnippet2: "Clincoo Blog"
        },
        "en": {
          title: "Order Your Working Tabs in the Clincoo Editor",
          desc: "Keep HTML, CSS, then preview in a fixed order so your hands do not jump around every session.",
          content: "<p class=\"mb-4\">The Clincoo editor feels calmer when tabs are not scattered. Many people open five files at once and then hunt for the tab they just changed.</p><p class=\"mb-4\">Use a fixed order: the page you are editing on the left, its stylesheet on the right, assets only when you swap an image. Close tabs you have not touched in ten minutes.</p><p class=\"mb-4\">If you must compare two pages, keep both open side by side and save each before switching. Do not trust tab memory.</p><p class=\"mb-4\">Tab order is a small habit. After a week, finding a file feels shorter than scrolling the explorer from the top.</p>",
          source: "Clincoo Editor", sourceUrl: "https://editor.clincoo.buzz/", sourceSnippet: "Clincoo code editor",
          source2: "Clincoo Blog", sourceUrl2: "https://blog.clincoo.buzz/", sourceSnippet2: "Clincoo Blog"
        }
      }
    },
    {
      id: "cek-tautan-relatif-dari-subfolder",
      langs: {
        "id": {
          title: "Cek Tautan Relatif dari Subfolder di Editor Clincoo",
          desc: "Halaman di folder dalam sering merusak gambar dan menu karena path relatif salah. Uji dari file yang baru kamu pindah.",
          content: "<p class=\"mb-4\">Memindahkan about.html ke folder pages terlihat rapi di explorer. Pratinjau lalu menampilkan logo pecah dan menu yang kembali ke path lama.</p><p class=\"mb-4\">Di editor Clincoo, buka file yang baru pindah dan telusuri setiap href serta src. Naik satu tingkat dengan ../ hanya jika file memang lebih dalam dari aset.</p><p class=\"mb-4\">Uji juga tautan antar halaman. Menu yang ditulis untuk root tidak otomatis benar dari subfolder. Simpan, buka pratinjau, klik setiap item.</p><p class=\"mb-4\">Perbaiki path sebelum menambah halaman baru. Satu folder yang rapi lebih berguna daripada sepuluh tautan yang hanya jalan di komputer sendiri.</p>",
          source: "Clincoo Editor", sourceUrl: "https://editor.clincoo.buzz/", sourceSnippet: "Editor kode Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Belajar HTML, CSS, JS",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Praktik terbaik web"
        },
        "en": {
          title: "Check Relative Links from Subfolders in the Clincoo Editor",
          desc: "Pages inside nested folders often break images and menus because relative paths are wrong. Test from the file you just moved.",
          content: "<p class=\"mb-4\">Moving about.html into a pages folder looks tidy in the explorer. Preview then shows a broken logo and a menu that still points at the old path.</p><p class=\"mb-4\">In the Clincoo editor, open the file you just moved and walk every href and src. Go up one level with ../ only if the file is actually deeper than the asset.</p><p class=\"mb-4\">Test links between pages too. A menu written for the root is not automatically correct from a subfolder. Save, open preview, click every item.</p><p class=\"mb-4\">Fix paths before adding another page. One tidy folder beats ten links that only work on your own machine.</p>",
          source: "Clincoo Editor", sourceUrl: "https://editor.clincoo.buzz/", sourceSnippet: "Clincoo code editor",
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
