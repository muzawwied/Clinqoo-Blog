// Clincoo Blog — Data extra2 kategori: webhook
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
(function() {
  var extra = [
    {
      id: "webhook-validasi-skema-payload",
      langs: {
        "id": {
          title: "Validasi Skema Payload Webhook Clincoo",
          desc: "Field yang hilang merusak handler. Cek skema sebelum menulis data.",
          content: "<p class=\"mb-4\">Handler Clincoo membaca event.type lalu event.data.id. Pengirim mengirim objek kosong dan skrip melempar error.</p><p class=\"mb-4\">Tentukan field wajib: type, id, dan timestamp. Tolak payload yang kurang di editor.clincoo.buzz dengan status 400.</p><p class=\"mb-4\">Jangan anggap setiap string adalah id. Batasi panjang dan karakter yang diizinkan.</p><p class=\"mb-4\">Minta AI hanya menambah validasi skema. Tempel handler webhook.</p><p class=\"mb-4\">Clincoo merender skrip yang kamu tempel. Skema yang ketat menjaga data di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Validate Clincoo Webhook Payload Schemas",
          desc: "A missing field breaks the handler. Check the schema before you write data.",
          content: "<p class=\"mb-4\">A Clincoo handler reads event.type then event.data.id. The sender posts an empty object and the script throws.</p><p class=\"mb-4\">Require type, id, and timestamp. Reject a thin payload in editor.clincoo.buzz with status 400.</p><p class=\"mb-4\">Do not treat every string as an id. Cap length and allowed characters.</p><p class=\"mb-4\">Ask AI to add schema checks only. Paste the webhook handler.</p><p class=\"mb-4\">Clincoo renders the script you paste. A strict schema keeps data safe on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "webhook-https-saja-untuk-callback",
      langs: {
        "id": {
          title: "Pakai HTTPS Saja untuk Callback Webhook Clincoo",
          desc: "URL HTTP merusak rahasia di transit. Tolak callback yang tidak terenkripsi.",
          content: "<p class=\"mb-4\">Halaman Clincoo menyimpan URL callback http://. Body dan signature lewat teks biasa.</p><p class=\"mb-4\">Izinkan hanya https:// saat menyimpan URL di editor.clincoo.buzz. Tolak skema lain sebelum tes kirim.</p><p class=\"mb-4\">Jangan ikut redirect dari HTTPS ke HTTP. Itu menurunkan perlindungan transit.</p><p class=\"mb-4\">Minta AI hanya menambah cek skema URL. Tempel form callback.</p><p class=\"mb-4\">Clincoo merender skrip yang kamu tempel. HTTPS menjaga payload di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Allow HTTPS Only for Clincoo Webhook Callbacks",
          desc: "An HTTP URL leaks secrets in transit. Reject an unencrypted callback.",
          content: "<p class=\"mb-4\">A Clincoo page stores an http:// callback URL. The body and signature travel in plain text.</p><p class=\"mb-4\">Allow https:// only when you save the URL in editor.clincoo.buzz. Reject other schemes before a test send.</p><p class=\"mb-4\">Do not follow a redirect from HTTPS to HTTP. That drops transit protection.</p><p class=\"mb-4\">Ask AI to add the URL-scheme check only. Paste the callback form.</p><p class=\"mb-4\">Clincoo renders the script you paste. HTTPS protects payloads on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "webhook-deduplikasi-jendela-waktu",
      langs: {
        "id": {
          title: "Deduplikasi Event Webhook Clincoo dalam Jendela Waktu",
          desc: "Event yang sama dalam beberapa detik menulis dua kali. Simpan id untuk jendela singkat.",
          content: "<p class=\"mb-4\">Pengirim Clincoo retry dalam 3 detik. Handler tanpa cache id menulis dua baris.</p><p class=\"mb-4\">Simpan event id di memori atau storage singkat di editor.clincoo.buzz. Abaikan id yang sama dalam 10 menit.</p><p class=\"mb-4\">Jangan andalkan hanya timestamp. Dua event berbeda bisa punya detik yang sama.</p><p class=\"mb-4\">Minta AI hanya menambah cache id. Tempel handler webhook.</p><p class=\"mb-4\">Clincoo menjalankan logika yang kamu tulis. Dedup menjaga catatan bersih di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Deduplicate Clincoo Webhook Events in a Time Window",
          desc: "The same event a few seconds apart writes twice. Store the id for a short window.",
          content: "<p class=\"mb-4\">A Clincoo sender retries in 3 seconds. A handler without an id cache writes two rows.</p><p class=\"mb-4\">Store the event id in memory or short storage in editor.clincoo.buzz. Ignore the same id for 10 minutes.</p><p class=\"mb-4\">Do not rely on timestamp alone. Two different events can share the same second.</p><p class=\"mb-4\">Ask AI to add the id cache only. Paste the webhook handler.</p><p class=\"mb-4\">Clincoo runs the logic you write. Dedup keeps records clean on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "webhook-uji-lokal-sebelum-publik",
      langs: {
        "id": {
          title: "Uji Webhook Clincoo secara Lokal sebelum URL Publik",
          desc: "URL publik yang belum diuji menerima sampah. Kirim payload contoh dulu di pratinjau.",
          content: "<p class=\"mb-4\">URL webhook Clincoo langsung dipasang ke layanan luar. Event pertama adalah data produksi yang rusak.</p><p class=\"mb-4\">Kirim POST contoh dari pratinjau editor.clincoo.buzz. Cek signature, skema, dan status sebelum membagi URL.</p><p class=\"mb-4\">Simpan dua payload: sukses dan gagal. Ulangi tes setelah ubah handler.</p><p class=\"mb-4\">Minta AI hanya menambah tombol tes kirim. Tempel handler webhook.</p><p class=\"mb-4\">Clincoo menayangkan kode yang kamu tempel. Tes lokal menahan event jelek di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test Clincoo Webhooks Locally before a Public URL",
          desc: "An untested public URL receives junk. Send a sample payload in preview first.",
          content: "<p class=\"mb-4\">A Clincoo webhook URL is pasted into an outside service at once. The first event is broken production data.</p><p class=\"mb-4\">POST a sample from the editor.clincoo.buzz preview. Check signature, schema, and status before you share the URL.</p><p class=\"mb-4\">Keep two payloads: success and failure. Repeat the test after you change the handler.</p><p class=\"mb-4\">Ask AI to add a test-send button only. Paste the webhook handler.</p><p class=\"mb-4\">Clincoo ships the code you paste. A local test blocks bad events on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "webhook-status-kode-yang-jelas",
      langs: {
        "id": {
          title: "Balas Status Kode yang Jelas pada Webhook Clincoo",
          desc: "Semua error jadi 200 membuat pengirim berhenti retry. Bedakan 4xx dan 5xx.",
          content: "<p class=\"mb-4\">Handler Clincoo menangkap semua error lalu tetap membalas 200. Pengirim mengira event sukses.</p><p class=\"mb-4\">Pakai 400 atau 401 untuk payload atau signature salah. Pakai 500 atau 503 jika penyimpanan gagal di editor.clincoo.buzz.</p><p class=\"mb-4\">Jangan kirim 200 jika kerja belum diantrikan. Pengirim tidak akan mengirim ulang.</p><p class=\"mb-4\">Minta AI hanya merapikan peta status. Tempel handler webhook.</p><p class=\"mb-4\">Clincoo merender skrip yang kamu tempel. Status yang jujur menjaga antrean di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Return Clear Status Codes on Clincoo Webhooks",
          desc: "Every error as 200 stops the sender from retrying. Split 4xx and 5xx.",
          content: "<p class=\"mb-4\">A Clincoo handler catches every error then still returns 200. The sender thinks the event succeeded.</p><p class=\"mb-4\">Use 400 or 401 for a bad payload or signature. Use 500 or 503 when storage fails in editor.clincoo.buzz.</p><p class=\"mb-4\">Do not send 200 if the work is not queued. The sender will not retry.</p><p class=\"mb-4\">Ask AI to tidy the status map only. Paste the webhook handler.</p><p class=\"mb-4\">Clincoo renders the script you paste. Honest status keeps the queue healthy on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  var cat = window.countryDataFiles["webhook"];
  if (!cat) {
    window.countryDataFiles["webhook"] = {
      names: { "id": "Webhook", "en": "Webhook" },
      flag: "\u19bf",
      articles: extra
    };
    return;
  }
  extra.forEach(function(a) { cat.articles.push(a); });
})();
