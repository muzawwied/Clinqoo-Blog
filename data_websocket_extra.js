// Clincoo Blog — artikel websocket tambahan 2026-09-29
(function(){
  var extra = [
    {
      id: "websocket-cek-readystate-sebelum-kirim",
      langs: {
        "id": {
          title: "Cek readyState WebSocket Clincoo sebelum send, Jangan Asumsi OPEN",
          desc: "send saat CONNECTING atau CLOSED melempar. Cek angka 1 dulu.",
          content: "<p class=\"mb-4\">Pratinjau Clincoo menekan kirim saat soket masih CONNECTING. Console menulis InvalidStateError.</p><p class=\"mb-4\">Sebelum ws.send, pastikan readyState === WebSocket.OPEN. Jika CONNECTING, antre payload.</p><p class=\"mb-4\">Jangan bungkus send dalam try saja tanpa antrean. Pesan hilang diam-diam.</p><p class=\"mb-4\">Minta AI menambah penjaga readyState pada helper kirim. Tempel skrip dari editor.clincoo.buzz.</p><p class=\"mb-4\">Pesan live di app.clincoo.buzz hanya jalan saat saluran benar-benar terbuka.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Check Clincoo WebSocket readyState before send; Do Not Assume OPEN",
          desc: "send while CONNECTING or CLOSED throws. Check for 1 first.",
          content: "<p class=\"mb-4\">A Clincoo preview hits send while the socket is still CONNECTING. The console writes InvalidStateError.</p><p class=\"mb-4\">Before ws.send, require readyState === WebSocket.OPEN. If CONNECTING, queue the payload.</p><p class=\"mb-4\">Do not wrap send in try alone with no queue. Messages vanish silently.</p><p class=\"mb-4\">Ask AI to add a readyState guard on the send helper. Paste the script from editor.clincoo.buzz.</p><p class=\"mb-4\">Live messages on app.clincoo.buzz only travel when the channel is truly open.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "websocket-binarytype-arraybuffer",
      langs: {
        "id": {
          title: "Set binaryType ArrayBuffer pada WebSocket Clincoo sebelum Blob Mengejutkan",
          desc: "Default blob membuat handler mengira buffer. Samakan tipe sebelum onmessage.",
          content: "<p class=\"mb-4\">Worker Clincoo menerima Blob padahal kode memanggil byteLength. Hasil parse gagal.</p><p class=\"mb-4\">Set ws.binaryType = 'arraybuffer' segera setelah new WebSocket di editor.clincoo.buzz.</p><p class=\"mb-4\">Jika memang butuh Blob, baca dengan arrayBuffer() dulu, jangan asumsikan FileReader di setiap pesan.</p><p class=\"mb-4\">Minta AI menetapkan binaryType di satu baris konstruktor. Tempel onmessage biner.</p><p class=\"mb-4\">Payload biner di app.clincoo.buzz jadi bisa dihitung tanpa tebak-tebakan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set binaryType to ArrayBuffer on a Clincoo WebSocket before a Blob Surprises You",
          desc: "The default blob type makes handlers expect a buffer. Align the type before onmessage.",
          content: "<p class=\"mb-4\">A Clincoo worker receives a Blob while the code reads byteLength. Parsing fails.</p><p class=\"mb-4\">Set ws.binaryType = 'arraybuffer' right after new WebSocket in editor.clincoo.buzz.</p><p class=\"mb-4\">If you truly need a Blob, call arrayBuffer() first; do not assume FileReader on every message.</p><p class=\"mb-4\">Ask AI to set binaryType on the constructor line. Paste the binary onmessage.</p><p class=\"mb-4\">Binary payloads on app.clincoo.buzz become measurable without guessing.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "websocket-antre-pesan-saat-connecting",
      langs: {
        "id": {
          title: "Antre Pesan WebSocket Clincoo saat Masih CONNECTING",
          desc: "Ketikan awal hilang jika dikirim sebelum OPEN. Simpan antrean lalu flush.",
          content: "<p class=\"mb-4\">Kolaborasi Clincoo membuang huruf pertama karena soket belum OPEN.</p><p class=\"mb-4\">Dorong payload ke array. Pada onopen, kirim isi antrean lalu kosongkan.</p><p class=\"mb-4\">Batasi panjang antrean. Buang yang usang jika pengguna sudah pindah halaman.</p><p class=\"mb-4\">Minta AI menulis flushQueue di onopen. Tempel send dari editor.clincoo.buzz.</p><p class=\"mb-4\">Huruf awal di app.clincoo.buzz sampai setelah saluran siap.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Queue Clincoo WebSocket Messages while Still CONNECTING",
          desc: "Early keystrokes vanish if sent before OPEN. Keep a queue and flush it.",
          content: "<p class=\"mb-4\">Clincoo collaboration drops the first letters because the socket is not OPEN yet.</p><p class=\"mb-4\">Push payloads into an array. On onopen, send the queue then clear it.</p><p class=\"mb-4\">Cap the queue length. Drop stale items if the visitor already left the page.</p><p class=\"mb-4\">Ask AI for a flushQueue in onopen. Paste send from editor.clincoo.buzz.</p><p class=\"mb-4\">Early letters on app.clincoo.buzz arrive after the channel is ready.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "websocket-tampilkan-status-koneksi-ui",
      langs: {
        "id": {
          title: "Tampilkan Status Koneksi WebSocket Clincoo di UI, Jangan Diam",
          desc: "Soket putus tanpa badge membuat pengguna mengetik ke saluran mati.",
          content: "<p class=\"mb-4\">Editor Clincoo tampak online padahal readyState sudah CLOSED.</p><p class=\"mb-4\">Tulis badge Connecting, Live, atau Terputus. Perbarui di onopen, onclose, dan onerror.</p><p class=\"mb-4\">Sembunyikan tombol kirim saat bukan OPEN. Aktifkan lagi setelah reconnect sukses.</p><p class=\"mb-4\">Minta AI menambah tiga state teks. Tempel markup status dari editor.clincoo.buzz.</p><p class=\"mb-4\">Status jujur di app.clincoo.buzz menahan ketikan ke soket yang sudah mati.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Show Clincoo WebSocket Connection Status in the UI; Do Not Stay Silent",
          desc: "A dropped socket with no badge lets people type into a dead channel.",
          content: "<p class=\"mb-4\">The Clincoo editor looks online while readyState is already CLOSED.</p><p class=\"mb-4\">Write a Connecting, Live, or Disconnected badge. Update it in onopen, onclose, and onerror.</p><p class=\"mb-4\">Hide the send button when the socket is not OPEN. Enable it after a successful reconnect.</p><p class=\"mb-4\">Ask AI for three status strings. Paste the status markup from editor.clincoo.buzz.</p><p class=\"mb-4\">Honest status on app.clincoo.buzz stops typing into a dead socket.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "websocket-jangan-kirim-token-di-query",
      langs: {
        "id": {
          title: "Jangan Kirim Token Clincoo di Query URL WebSocket",
          desc: "wss://host?token= tampil di log proxy dan riwayat. Pakai subprotokol atau pesan auth pertama.",
          content: "<p class=\"mb-4\">URL soket Clincoo memuat token di query. Akses log CDN menyimpan rahasia.</p><p class=\"mb-4\">Buka wss tanpa token. Setelah onopen, kirim satu pesan auth, atau pakai header lewat proxy yang kamu kendalikan.</p><p class=\"mb-4\">Jangan simpan URL lengkap di console.log. Log hanya host dan readyState.</p><p class=\"mb-4\">Minta AI memindahkan token keluar dari query. Tempel konstruktor dari editor.clincoo.buzz.</p><p class=\"mb-4\">Saluran live di app.clincoo.buzz tidak lagi menuliskan kunci di access log.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Put a Clincoo Token in the WebSocket Query URL",
          desc: "wss://host?token= shows up in proxy logs and history. Use a subprotocol or a first auth message.",
          content: "<p class=\"mb-4\">A Clincoo socket URL embeds a token in the query. CDN access logs then store the secret.</p><p class=\"mb-4\">Open wss without a token. After onopen, send one auth message, or use a header through a proxy you control.</p><p class=\"mb-4\">Do not log the full URL. Log only the host and readyState.</p><p class=\"mb-4\">Ask AI to move the token out of the query. Paste the constructor from editor.clincoo.buzz.</p><p class=\"mb-4\">The live channel on app.clincoo.buzz no longer writes keys into access logs.</p>",
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
