// Clincoo Blog — artikel websocket tambahan 2026-09-29 WIB
(function(){
  var extra = [
    {
      id: "websocket-baca-kode-close-bukan-diam",
      langs: {
        "id": {
          title: "Baca Kode Close WebSocket Clincoo, Jangan Anggap Semua Putus Sama",
          desc: "1000, 1001, dan 1006 butuh respons berbeda. Log kode sebelum reconnect.",
          content: "<p class=\"mb-4\">Pratinjau Clincoo reconnect otomatis setiap onclose. Kode 1000 dari logout ikut membuka soket baru.</p><p class=\"mb-4\">Baca ev.code dan ev.reason. 1000 atau 1001 dari Anda: jangan reconnect. 1006 abnormal: boleh coba dengan backoff.</p><p class=\"mb-4\">Jangan tampilkan reason mentah ke pengunjung jika berisi host internal. Log ke console.error saja.</p><p class=\"mb-4\">Minta AI menulis peta kode close ke aksi. Tempel onclose dari editor.clincoo.buzz.</p><p class=\"mb-4\">app.clincoo.buzz membedakan keluar sadar dan putus jaringan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Read the Clincoo WebSocket Close Code; Do Not Treat Every Drop the Same",
          desc: "1000, 1001, and 1006 need different responses. Log the code before reconnect.",
          content: "<p class=\"mb-4\">A Clincoo preview reconnects on every onclose. A 1000 from logout opens a new socket too.</p><p class=\"mb-4\">Read ev.code and ev.reason. 1000 or 1001 from you: do not reconnect. 1006 abnormal: retry with backoff.</p><p class=\"mb-4\">Do not show a raw reason to visitors if it contains an internal host. Log it with console.error only.</p><p class=\"mb-4\">Ask AI for a close-code to action map. Paste onclose from editor.clincoo.buzz.</p><p class=\"mb-4\">app.clincoo.buzz tells a deliberate leave from a network drop.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "websocket-satu-instans-per-halaman",
      langs: {
        "id": {
          title: "Satu Instans WebSocket Clincoo per Halaman, Jangan Dobel di Hot Reload",
          desc: "Hot reload atau klik ganda membuka dua soket. Simpan satu referensi global.",
          content: "<p class=\"mb-4\">Editor Clincoo di localhost membuat soket baru setiap simpan berkas. Server melihat dua klien.</p><p class=\"mb-4\">Simpan ws di variabel modul. Jika instans lama masih CONNECTING atau OPEN, close dulu sebelum new WebSocket.</p><p class=\"mb-4\">Lepas onmessage lama. Jangan biarkan dua handler menulis DOM bersamaan.</p><p class=\"mb-4\">Minta AI menambah penjaga singleton. Tempel konstruktor dari editor.clincoo.buzz.</p><p class=\"mb-4\">Pratinjau app.clincoo.buzz hanya punya satu saluran live per tab.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "One Clincoo WebSocket Instance per Page; Do Not Double It on Hot Reload",
          desc: "Hot reload or a double click opens two sockets. Keep one global reference.",
          content: "<p class=\"mb-4\">The Clincoo editor on localhost creates a new socket on every file save. The server sees two clients.</p><p class=\"mb-4\">Store ws on a module variable. If the old instance is still CONNECTING or OPEN, close it before new WebSocket.</p><p class=\"mb-4\">Drop the old onmessage. Do not let two handlers write the DOM at once.</p><p class=\"mb-4\">Ask AI for a singleton guard. Paste the constructor from editor.clincoo.buzz.</p><p class=\"mb-4\">The app.clincoo.buzz preview keeps one live channel per tab.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  var pack = window.countryDataFiles && window.countryDataFiles["websocket"];
  if (pack && Array.isArray(pack.articles)) {
    pack.articles = pack.articles.concat(extra);
  }
})();
