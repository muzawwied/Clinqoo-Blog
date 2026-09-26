// Clincoo Blog — artikel search tambahan 2026-09-27
(function(){
  var extra = [
    {
      id: "search-indikator-memuat",
      langs: {
        "id": {
          title: "Tampilkan Indikator Memuat pada Cari Clincoo",
          desc: "Tanpa status memuat, daftar kosong terlihat seperti error. Satu teks atau spinner jujur menenangkan.",
          content: "<p class=\"mb-4\">Query Clincoo sudah dikirim, tetapi area hasil tetap kosong. Pengunjung mengira skrip rusak.</p><p class=\"mb-4\">Di editor.clincoo.buzz, set flag loading sebelum fetch. Tampilkan satu kalimat Memuat hasil, lalu hapus saat selesai.</p><p class=\"mb-4\">Jangan biarkan spinner lama jika request di-abort. Reset flag di finally, bukan hanya di then.</p><p class=\"mb-4\">Minta AI menambah state loading pada renderer. Tempel handler fetch yang sekarang diam.</p><p class=\"mb-4\">Clincoo merender HTML yang kamu tulis. Status memuat menjaga kotak cari di app.clincoo.buzz terasa hidup.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Show a Loading Indicator in Clincoo Search",
          desc: "Without a loading state, an empty list looks like a crash. One honest line or spinner calms people.",
          content: "<p class=\"mb-4\">A Clincoo query is already sent, but the result area stays blank. Visitors think the script broke.</p><p class=\"mb-4\">In editor.clincoo.buzz, set a loading flag before fetch. Show one Loading results line, then remove it when done.</p><p class=\"mb-4\">Do not leave a spinner if the request was aborted. Reset the flag in finally, not only in then.</p><p class=\"mb-4\">Ask AI to add a loading state on the renderer. Paste the fetch handler that is now silent.</p><p class=\"mb-4\">Clincoo renders the HTML you write. A loading status keeps search on app.clincoo.buzz feeling alive.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "search-label-input-jelas",
      langs: {
        "id": {
          title: "Beri Label Jelas pada Kotak Cari Clincoo",
          desc: "Placeholder bukan label. Pembaca layar dan browser butuh label atau aria-label yang tetap.",
          content: "<p class=\"mb-4\">Kotak cari Clincoo hanya punya placeholder Cari.... Placeholder hilang saat mengetik, jadi nama kontrol ikut hilang.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pasang label yang terhubung lewat for/id, atau aria-label jika desain memang ikon saja.</p><p class=\"mb-4\">Jangan andalkan title atribut. Title tidak konsisten dibaca dan tidak tampil di sentuh.</p><p class=\"mb-4\">Minta AI menambah label tanpa mengubah layout besar. Tempel markup input yang sekarang telanjang.</p><p class=\"mb-4\">Clincoo tidak menambah label otomatis. Nama yang jelas membuat cari di app.clincoo.buzz bisa dipakai semua orang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Give the Clincoo Search Box a Clear Label",
          desc: "A placeholder is not a label. Screen readers and browsers need a lasting label or aria-label.",
          content: "<p class=\"mb-4\">The Clincoo search box only has a Search... placeholder. The placeholder vanishes while typing, so the control name vanishes too.</p><p class=\"mb-4\">In editor.clincoo.buzz, attach a label with for/id, or an aria-label if the design is icon-only.</p><p class=\"mb-4\">Do not rely on a title attribute. Title is read inconsistently and does not show on touch.</p><p class=\"mb-4\">Ask AI to add a label without a large layout change. Paste the input markup that is now bare.</p><p class=\"mb-4\">Clincoo does not add labels by itself. A clear name makes search on app.clincoo.buzz usable for everyone.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "search-navigasi-keyboard-hasil",
      langs: {
        "id": {
          title: "Izinkan Panah Keyboard Menelusuri Hasil Cari Clincoo",
          desc: "Hanya mouse membuat daftar hasil lambat. Panah bawah dan Enter mempercepat pilih item.",
          content: "<p class=\"mb-4\">Pengguna Clincoo mengetik query lalu harus pindah ke mouse untuk klik hasil pertama.</p><p class=\"mb-4\">Di editor.clincoo.buzz, tangkap ArrowDown/ArrowUp pada input. Pindahkan aria-selected dan fokus visual ke item aktif.</p><p class=\"mb-4\">Enter pada item aktif harus mengikuti tautan. Escape mengembalikan fokus ke kotak cari.</p><p class=\"mb-4\">Minta AI menambah indeks aktif plus handler panah. Tempel daftar hasil yang sekarang hanya tautan biasa.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu simpan. Navigasi keyboard membuat cari di app.clincoo.buzz lebih cepat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Let Arrow Keys Move through Clincoo Search Results",
          desc: "Mouse-only results feel slow. Down arrow and Enter speed up picking an item.",
          content: "<p class=\"mb-4\">A Clincoo user types a query then has to reach for the mouse to click the first result.</p><p class=\"mb-4\">In editor.clincoo.buzz, catch ArrowDown/ArrowUp on the input. Move aria-selected and a visual focus to the active item.</p><p class=\"mb-4\">Enter on the active item should follow the link. Escape returns focus to the search box.</p><p class=\"mb-4\">Ask AI to add an active index plus arrow handlers. Paste the result list that is now plain links.</p><p class=\"mb-4\">Clincoo runs the script you save. Keyboard navigation makes search on app.clincoo.buzz faster.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "search-normalisasi-spasi-query",
      langs: {
        "id": {
          title: "Normalkan Spasi pada Query Cari Clincoo",
          desc: "Spasi ganda dan trim yang terlewat membuat query yang sama terlihat beda. Rapikan dulu sebelum fetch.",
          content: "<p class=\"mb-4\">Pengunjung Clincoo mengetik dua spasi di tengah kata. API menganggap itu query baru dan hasil jadi aneh.</p><p class=\"mb-4\">Di editor.clincoo.buzz, trim ujung dan ganti spasi beruntun jadi satu sebelum debounce atau fetch.</p><p class=\"mb-4\">Jangan ubah huruf di tengah kata. Hanya rapikan whitespace. Simpan teks asli di input agar tidak loncat.</p><p class=\"mb-4\">Minta AI menambah helper normalizeQuery. Tempel pemanggilan fetch yang memakai value mentah.</p><p class=\"mb-4\">Clincoo mengirim string yang kamu susun. Query rapi menjaga hasil di app.clincoo.buzz konsisten.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Normalize Spaces in a Clincoo Search Query",
          desc: "Double spaces and a missed trim make the same query look different. Clean whitespace before fetch.",
          content: "<p class=\"mb-4\">A Clincoo visitor types two spaces in the middle of a word. The API treats it as a new query and results look odd.</p><p class=\"mb-4\">In editor.clincoo.buzz, trim the ends and collapse repeated spaces to one before debounce or fetch.</p><p class=\"mb-4\">Do not rewrite letters inside the word. Only tidy whitespace. Keep the raw text in the input so the caret does not jump.</p><p class=\"mb-4\">Ask AI to add a normalizeQuery helper. Paste the fetch call that now uses the raw value.</p><p class=\"mb-4\">Clincoo sends the string you build. A tidy query keeps results on app.clincoo.buzz consistent.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "search-shortcut-garis-miring",
      langs: {
        "id": {
          title: "Fokus Kotak Cari Clincoo dengan Pintasan Garis Miring",
          desc: "Tombol / di halaman dokumen mempercepat mulai cari. Jangan curi fokus saat pengguna sedang mengetik di field lain.",
          content: "<p class=\"mb-4\">Pengunjung Clincoo ingin mencari cepat, tetapi harus scroll mencari kotak di header.</p><p class=\"mb-4\">Di editor.clincoo.buzz, dengarkan keydown /. Jika target bukan input/textarea/contenteditable, fokuskan kotak cari dan preventDefault.</p><p class=\"mb-4\">Jangan picu pintasan saat modal form terbuka. Cek document.activeElement dulu.</p><p class=\"mb-4\">Minta AI menambah listener / plus penjaga field aktif. Tempel skrip header yang sekarang tanpa pintasan.</p><p class=\"mb-4\">Clincoo menjalankan listener yang kamu pasang. Pintasan / membuat cari di app.clincoo.buzz terasa cepat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Focus the Clincoo Search Box with a Slash Shortcut",
          desc: "The / key on a document page starts search faster. Do not steal focus when the user is already typing in another field.",
          content: "<p class=\"mb-4\">A Clincoo visitor wants to search quickly, but has to scroll to find the box in the header.</p><p class=\"mb-4\">In editor.clincoo.buzz, listen for keydown /. If the target is not an input, textarea, or contenteditable, focus the search box and preventDefault.</p><p class=\"mb-4\">Do not fire the shortcut while a form modal is open. Check document.activeElement first.</p><p class=\"mb-4\">Ask AI to add a / listener plus an active-field guard. Paste the header script that now has no shortcut.</p><p class=\"mb-4\">Clincoo runs the listener you attach. A / shortcut makes search on app.clincoo.buzz feel fast.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["search"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["search"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
