// Clincoo Blog — artikel clipboard tambahan 2026-09-24
(function(){
  var extra = [
    {
      id: "clipboard-salin-tabel-jadi-tsv",
      langs: {
        "id": {
          title: "Salin Tabel Clincoo sebagai TSV agar Tempel ke Spreadsheet Rapi",
          desc: "Jangan salin HTML tabel. Bangun baris tab-separated lalu writeText.",
          content: "<p class=\"mb-4\">Tabel harga di situs Clincoo yang disalin lewat drag membawa border dan span. Spreadsheet menempel satu kolom berantakan.</p><p class=\"mb-4\">Saat tombol Salin tabel diklik, telusuri baris dan sel. Gabungkan sel dengan tab, baris dengan newline, lalu kirim string ke navigator.clipboard.writeText.</p><p class=\"mb-4\">Lewati sel yang display none. Jangan ambil innerHTML. textContent per sel sudah cukup.</p><p class=\"mb-4\">Uji tempel ke Sheets atau Excel dari pratinjau editor.clincoo.buzz. Minta AI satu fungsi toTSV, bukan pustaka export.</p><p class=\"mb-4\">Clincoo menayangkan skrip yang kamu simpan. TSV membuat data tabel siap diolah.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Copy a Clincoo Table as TSV so Spreadsheet Paste Stays Clean",
          desc: "Do not copy table HTML. Build tab-separated rows, then writeText.",
          content: "<p class=\"mb-4\">A price table on a Clincoo site copied by drag carries borders and spans. Spreadsheets paste into one messy column.</p><p class=\"mb-4\">When the Copy table button is clicked, walk rows and cells. Join cells with tabs, rows with newlines, then send the string to navigator.clipboard.writeText.</p><p class=\"mb-4\">Skip cells that are display none. Do not take innerHTML. textContent per cell is enough.</p><p class=\"mb-4\">Test paste into Sheets or Excel from the editor.clincoo.buzz preview. Ask the AI for one toTSV function, not an export library.</p><p class=\"mb-4\">Clincoo ships the script you save. TSV makes table data ready to work with.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "clipboard-jangan-blokir-ctrl-c-asli",
      langs: {
        "id": {
          title: "Jangan Blokir Ctrl+C Asli saat Menambah Pintasan Salin Clincoo",
          desc: "preventDefault pada keydown C merusak salin native. Ikat pintasan hanya ke tombolmu.",
          content: "<p class=\"mb-4\">Halaman Clincoo yang memanggil preventDefault pada setiap Ctrl+C membuat pengunjung tidak bisa menyalin teks biasa. Itu lebih merugikan daripada tombol Salin yang hilang.</p><p class=\"mb-4\">Jika kamu menambah pintasan, cek target.event. Hanya tangani jika fokus di blok kode atau tombol khusus. Biarkan seleksi teks biasa memakai clipboard native.</p><p class=\"mb-4\">Jangan menelan metaKey+C di seluruh document. Scope listener ke container cuplikan.</p><p class=\"mb-4\">Uji: seleksi paragraf, tekan Ctrl+C, tempel di catatan. Jika gagal, hapus preventDefault. Minta AI mempersempit handler di editor.clincoo.buzz.</p><p class=\"mb-4\">Clincoo menjalankan skrip halamanmu. Hormati pintasan browser yang sudah dipelajari orang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Block Native Ctrl+C when Adding a Clincoo Copy Shortcut",
          desc: "preventDefault on keydown C breaks native copy. Bind the shortcut only to your button.",
          content: "<p class=\"mb-4\">A Clincoo page that calls preventDefault on every Ctrl+C stops visitors from copying ordinary text. That hurts more than a missing Copy button.</p><p class=\"mb-4\">If you add a shortcut, check the event target. Handle it only when focus is in a code block or your special button. Let a normal text selection use the native clipboard.</p><p class=\"mb-4\">Do not swallow metaKey+C on the whole document. Scope the listener to the snippet container.</p><p class=\"mb-4\">Test: select a paragraph, press Ctrl+C, paste into notes. If it fails, remove preventDefault. Ask the AI to narrow the handler in editor.clincoo.buzz.</p><p class=\"mb-4\">Clincoo runs your page script. Respect the browser shortcut people already know.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "clipboard-tempel-gambar-ke-pratinjau",
      langs: {
        "id": {
          title: "Tangani Tempel Gambar ke Pratinjau Clincoo tanpa Mengandalkan Unggah Diam",
          desc: "Ambil item image dari clipboardData. Tampilkan blob preview, jangan tulis file tanpa izin.",
          content: "<p class=\"mb-4\">Editor Clincoo yang mengabaikan paste gambar memaksa orang mencari tombol unggah. Banyak orang sudah menyalin tangkapan layar.</p><p class=\"mb-4\">Pada paste, cek clipboardData.items bertipe image. Baca file, buat object URL, tampilkan pratinjau. Minta konfirmasi sebelum mengunggah.</p><p class=\"mb-4\">Jangan menulis ke server pada paste tanpa gestur jelas. Blob lokal cukup untuk pratinjau di editor.clincoo.buzz.</p><p class=\"mb-4\">Tolak item yang bukan gambar. Beri teks cadangan jika browser menolak baca klip.</p><p class=\"mb-4\">Clincoo menayangkan handler yang kamu simpan. Tempel gambar yang transparan mempercepat penyusunan artikel.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Handle Image Paste into a Clincoo Preview without Silent Upload",
          desc: "Take image items from clipboardData. Show a blob preview; do not write a file without consent.",
          content: "<p class=\"mb-4\">A Clincoo editor that ignores image paste forces people to hunt for an upload button. Many already copied a screenshot.</p><p class=\"mb-4\">On paste, check clipboardData.items of type image. Read the file, create an object URL, show a preview. Ask for confirm before upload.</p><p class=\"mb-4\">Do not write to the server on paste without a clear gesture. A local blob is enough for preview in editor.clincoo.buzz.</p><p class=\"mb-4\">Reject items that are not images. Give fallback text if the browser denies clipboard read.</p><p class=\"mb-4\">Clincoo ships the handler you save. Transparent image paste speeds up article layout.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "clipboard-fallback-select-execcommand",
      langs: {
        "id": {
          title: "Sediakan Cadangan Select dan execCommand jika Clipboard API Gagal di Clincoo",
          desc: "Beberapa WebView menolak writeText. Pilih teks di textarea tersembunyi sebagai rencana B.",
          content: "<p class=\"mb-4\">Tombol salin Clincoo yang hanya memakai Clipboard API diam di WebView lama. Pengunjung mengira fitur rusak.</p><p class=\"mb-4\">Jika writeText ditolak, buat textarea offscreen, isi teks, select, lalu document.execCommand(\"copy\"). Hapus node setelahnya.</p><p class=\"mb-4\">Ini cadangan, bukan jalur utama. Tetap utamakan Clipboard API di HTTPS pada app.clincoo.buzz.</p><p class=\"mb-4\">Uji di pratinjau editor.clincoo.buzz dan di WebView jika ada. Minta AI satu fungsi copyWithFallback.</p><p class=\"mb-4\">Clincoo tidak menambal browser. Cadangan kecil menjaga tombol salin tetap berguna.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Provide a Select and execCommand Fallback when Clipboard API Fails on Clincoo",
          desc: "Some WebViews deny writeText. Select text in a hidden textarea as plan B.",
          content: "<p class=\"mb-4\">A Clincoo copy button that only uses the Clipboard API stays silent in old WebViews. Visitors think the feature is broken.</p><p class=\"mb-4\">If writeText is denied, create an offscreen textarea, fill the text, select it, then document.execCommand(\"copy\"). Remove the node after.</p><p class=\"mb-4\">This is a fallback, not the main path. Still prefer the Clipboard API over HTTPS on app.clincoo.buzz.</p><p class=\"mb-4\">Test in the editor.clincoo.buzz preview and in a WebView if you have one. Ask the AI for one copyWithFallback function.</p><p class=\"mb-4\">Clincoo does not patch the browser. A small fallback keeps the copy button useful.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["clipboard"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["clipboard"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
