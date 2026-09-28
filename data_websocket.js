// Clincoo Blog — Data kategori: websocket
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["websocket"] = {
  names: { "id": "WebSocket", "en": "WebSocket" },
  flag: "🔌",
  articles: [
    {
      id: "websocket-cek-protokol-wss-bukan-ws",
      langs: {
        "id": {
          title: "Sambungkan Clincoo lewat wss://, Jangan ws:// di Produksi",
          desc: "Halaman HTTPS menolak WebSocket tidak aman. Pakai wss agar pratinjau live tidak putus.",
          content: "<p class=\"mb-4\">Pratinjau Clincoo di HTTPS gagal membuka soket. Console menuliskan mixed content.</p><p class=\"mb-4\">Ganti url ws:// jadi wss:// di produksi. Lokal boleh ws hanya di http://localhost.</p><p class=\"mb-4\">Cek location.protocol sebelum menyusun URL. Jangan hardcode host yang salah.</p><p class=\"mb-4\">Minta AI menulis helper urlSoket() dari lokasi halaman. Tempel skrip dari editor.clincoo.buzz.</p><p class=\"mb-4\">Live update di app.clincoo.buzz tetap hidup di balik HTTPS.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Connect Clincoo over wss://, Not ws:// in Production",
          desc: "An HTTPS page rejects an insecure WebSocket. Use wss so live preview does not drop.",
          content: "<p class=\"mb-4\">A Clincoo preview on HTTPS fails to open the socket. The console writes mixed content.</p><p class=\"mb-4\">Change ws:// to wss:// in production. ws is fine only on http://localhost.</p><p class=\"mb-4\">Check location.protocol before building the URL. Do not hardcode the wrong host.</p><p class=\"mb-4\">Ask AI for a urlSoket() helper from the page location. Paste the script from editor.clincoo.buzz.</p><p class=\"mb-4\">Live updates on app.clincoo.buzz stay alive behind HTTPS.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "websocket-tutup-saat-pindah-halaman",
      langs: {
        "id": {
          title: "Tutup WebSocket Clincoo Saat Pengunjung Pindah Halaman",
          desc: "Soket yang tidak di-close tetap menerima pesan dan menulis DOM yang sudah diganti.",
          content: "<p class=\"mb-4\">Editor Clincoo membuka soket di halaman undangan. Pengunjung pindah, pesan lama masih menempel.</p><p class=\"mb-4\">Simpan instance WebSocket. Pada beforeunload atau teardown, panggil close() dan lepas onmessage.</p><p class=\"mb-4\">Set flag closed agar handler reconnect tidak membuka soket baru setelah navigasi.</p><p class=\"mb-4\">Minta AI menandai setiap new WebSocket di berkas. Tempel listener dari editor.clincoo.buzz.</p><p class=\"mb-4\">Navigasi di app.clincoo.buzz tidak lagi menumpuk koneksi zombie.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Close the Clincoo WebSocket When the Visitor Leaves the Page",
          desc: "A socket that is never closed still receives messages and writes a replaced DOM.",
          content: "<p class=\"mb-4\">The Clincoo editor opens a socket on the invite page. The visitor leaves, old messages still stick.</p><p class=\"mb-4\">Keep the WebSocket instance. On beforeunload or teardown, call close() and drop onmessage.</p><p class=\"mb-4\">Set a closed flag so the reconnect handler does not open a new socket after navigation.</p><p class=\"mb-4\">Ask AI to mark every new WebSocket in the file. Paste the listener from editor.clincoo.buzz.</p><p class=\"mb-4\">Navigation on app.clincoo.buzz no longer stacks zombie connections.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "websocket-reconnect-terbatas-bukan-loop",
      langs: {
        "id": {
          title: "Sambungkan Ulang WebSocket Clincoo, Tapi Batasi Percobaan",
          desc: "Loop reconnect tanpa jeda membanjiri server. Pakai backoff dan batas maksimum.",
          content: "<p class=\"mb-4\">Pratinjau Clincoo menutup soket lalu membuka lagi tiap 50 ms. Server menolak IP.</p><p class=\"mb-4\">Setelah onclose, jadwalkan reconnect dengan jeda 1, 2, 4 detik. Berhenti setelah 5 kali atau saat pengguna logout.</p><p class=\"mb-4\">Jangan reconnect jika close code 1000 dari Anda sendiri. Tampilkan status terputus di UI.</p><p class=\"mb-4\">Minta AI menulis backoff + counter. Tempel onclose dari editor.clincoo.buzz.</p><p class=\"mb-4\">app.clincoo.buzz pulih dari putus singkat tanpa menembak koneksi tanpa henti.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Reconnect a Clincoo WebSocket, but Cap the Attempts",
          desc: "A reconnect loop with no gap floods the server. Use backoff and a hard limit.",
          content: "<p class=\"mb-4\">A Clincoo preview closes the socket then opens again every 50 ms. The server bans the IP.</p><p class=\"mb-4\">After onclose, schedule reconnect with 1, 2, 4 second gaps. Stop after 5 tries or on logout.</p><p class=\"mb-4\">Do not reconnect on a close code 1000 you sent yourself. Show a disconnected state in the UI.</p><p class=\"mb-4\">Ask AI for backoff plus a counter. Paste onclose from editor.clincoo.buzz.</p><p class=\"mb-4\">app.clincoo.buzz recovers from a brief drop without firing sockets forever.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "websocket-pesan-json-validasi-dulu",
      langs: {
        "id": {
          title: "Validasi JSON dari WebSocket Clincoo Sebelum Menyentuh DOM",
          desc: "Pesan rusak atau asing merusak pratinjau. Parse aman, cek tipe, baru render.",
          content: "<p class=\"mb-4\">Soket Clincoo menerima teks bukan JSON. JSON.parse melempar dan mematikan handler.</p><p class=\"mb-4\">Bungkus parse di try/catch. Pastikan objek punya type yang dikenal. Abaikan field tak terduga.</p><p class=\"mb-4\">Jangan eval pesan. Jangan innerHTML mentah dari payload. Pakai textContent untuk nama.</p><p class=\"mb-4\">Minta AI menulis switch type yang ketat. Tempel onmessage dari editor.clincoo.buzz.</p><p class=\"mb-4\">Pratinjau app.clincoo.buzz tetap utuh meski satu pesan rusak.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Validate JSON from a Clincoo WebSocket Before Touching the DOM",
          desc: "A broken or foreign message wrecks preview. Parse safely, check type, then render.",
          content: "<p class=\"mb-4\">A Clincoo socket receives text that is not JSON. JSON.parse throws and kills the handler.</p><p class=\"mb-4\">Wrap parse in try/catch. Require a known type on the object. Ignore unexpected fields.</p><p class=\"mb-4\">Do not eval the message. Do not innerHTML raw payload. Use textContent for names.</p><p class=\"mb-4\">Ask AI for a strict type switch. Paste onmessage from editor.clincoo.buzz.</p><p class=\"mb-4\">The app.clincoo.buzz preview stays intact even if one message is corrupt.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "websocket-heartbeat-ping-agar-tidak-putus",
      langs: {
        "id": {
          title: "Kirim Heartbeat WebSocket Clincoo agar Proxy Tidak Memutus Diam",
          desc: "Soket tanpa lalu lintas dipotong load balancer. Ping berkala menjaga saluran hidup.",
          content: "<p class=\"mb-4\">Kolaborasi Clincoo tampak online lalu putus setelah satu menit tanpa ketikan.</p><p class=\"mb-4\">Kirim pesan ping kecil tiap 25–40 detik. Reset timer setiap ada pesan masuk. Jika pong tidak datang, close lalu reconnect.</p><p class=\"mb-4\">Hentikan interval saat tab hidden atau soket sudah CLOSED. Jangan menumpuk dua heartbeat.</p><p class=\"mb-4\">Minta AI menulis ping/pong terikat readyState. Tempel timer dari editor.clincoo.buzz.</p><p class=\"mb-4\">Sesi live di app.clincoo.buzz tidak lagi mati hanya karena sepi sejenak.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Send a Clincoo WebSocket Heartbeat so a Proxy Does Not Kill Silence",
          desc: "A socket with no traffic is cut by the load balancer. Periodic pings keep the channel alive.",
          content: "<p class=\"mb-4\">Clincoo collaboration looks online then drops after one quiet minute.</p><p class=\"mb-4\">Send a small ping every 25–40 seconds. Reset the timer on every inbound message. If pong never arrives, close and reconnect.</p><p class=\"mb-4\">Stop the interval when the tab is hidden or the socket is already CLOSED. Do not stack two heartbeats.</p><p class=\"mb-4\">Ask AI for ping/pong tied to readyState. Paste the timer from editor.clincoo.buzz.</p><p class=\"mb-4\">A live session on app.clincoo.buzz no longer dies only because it went quiet.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
