// Clincoo Blog — Data extra kategori: webhook
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
(function() {
  var extra = [
    {
      id: "webhook-cek-content-type-json",
      langs: {
        "id": {
          title: "Cek Content-Type JSON pada Webhook Clincoo",
          desc: "Body webhook yang bukan JSON merusak parser. Tolak tipe yang salah sebelum parse.",
          content: "<p class=\"mb-4\">Halaman Clincoo menerima POST lalu langsung JSON.parse. Pengirim mengirim form-urlencoded dan parser melempar error.</p><p class=\"mb-4\">Baca header Content-Type. Izinkan application/json saja di editor.clincoo.buzz. Balas 415 jika berbeda.</p><p class=\"mb-4\">Jangan tebak format dari karakter pertama. Tipe yang salah adalah sinyal, bukan teka-teki.</p><p class=\"mb-4\">Minta AI hanya menambah cek Content-Type. Tempel handler webhook.</p><p class=\"mb-4\">Clincoo merender skrip yang kamu tempel. Tipe yang jelas menjaga parser di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Check JSON Content-Type on Clincoo Webhooks",
          desc: "A non-JSON webhook body breaks the parser. Reject the wrong type before you parse.",
          content: "<p class=\"mb-4\">A Clincoo page accepts a POST then calls JSON.parse at once. The sender posts form-urlencoded and the parser throws.</p><p class=\"mb-4\">Read the Content-Type header. Allow application/json only in editor.clincoo.buzz. Return 415 if it differs.</p><p class=\"mb-4\">Do not guess the format from the first character. A wrong type is a signal, not a puzzle.</p><p class=\"mb-4\">Ask AI to add the Content-Type check only. Paste the webhook handler.</p><p class=\"mb-4\">Clincoo renders the script you paste. A clear type keeps the parser safe on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "webhook-tolak-method-selain-post",
      langs: {
        "id": {
          title: "Tolak Method Selain POST pada Webhook Clincoo",
          desc: "GET pada URL webhook membocorkan atau memicu aksi. Izinkan POST saja.",
          content: "<p class=\"mb-4\">URL webhook Clincoo terbuka di tab. Browser mengirim GET dan handler tetap menulis data.</p><p class=\"mb-4\">Cek request.method di awal. Balas 405 untuk selain POST di editor.clincoo.buzz.</p><p class=\"mb-4\">Jangan pakai GET untuk tes produksi. Pakai alat yang mengirim POST dengan body mentah.</p><p class=\"mb-4\">Minta AI hanya membatasi method. Tempel handler webhook.</p><p class=\"mb-4\">Clincoo menjalankan logika yang kamu tulis. Method ketat menahan klik tak sengaja di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Reject Non-POST Methods on Clincoo Webhooks",
          desc: "A GET to a webhook URL leaks or triggers an action. Allow POST only.",
          content: "<p class=\"mb-4\">A Clincoo webhook URL opens in a tab. The browser sends GET and the handler still writes data.</p><p class=\"mb-4\">Check request.method first. Return 405 for anything but POST in editor.clincoo.buzz.</p><p class=\"mb-4\">Do not use GET to test production. Use a tool that sends POST with the raw body.</p><p class=\"mb-4\">Ask AI to restrict the method only. Paste the webhook handler.</p><p class=\"mb-4\">Clincoo runs the logic you write. A strict method blocks accidental clicks on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "webhook-log-tanpa-secret",
      langs: {
        "id": {
          title: "Catat Log Webhook Clincoo tanpa Secret",
          desc: "Log yang menampilkan signature dan token membocorkan rahasia. Saring field sensitif.",
          content: "<p class=\"mb-4\">Handler Clincoo menuliskan seluruh header ke console. Signature HMAC dan token ikut terbaca.</p><p class=\"mb-4\">Log event id, status, dan waktu saja. Hapus Authorization dan X-Signature di editor.clincoo.buzz.</p><p class=\"mb-4\">Jangan stringify seluruh request. Pilih field yang aman sebelum tulis.</p><p class=\"mb-4\">Minta AI hanya merapikan logger. Tempel handler webhook.</p><p class=\"mb-4\">Clincoo menayangkan kode yang kamu tempel. Log bersih menjaga rahasia di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Log Clincoo Webhooks without Secrets",
          desc: "A log that prints signatures and tokens leaks secrets. Filter sensitive fields.",
          content: "<p class=\"mb-4\">A Clincoo handler writes every header to the console. The HMAC signature and token appear in the log.</p><p class=\"mb-4\">Log the event id, status, and time only. Strip Authorization and X-Signature in editor.clincoo.buzz.</p><p class=\"mb-4\">Do not stringify the whole request. Pick safe fields before you write.</p><p class=\"mb-4\">Ask AI to tidy the logger only. Paste the webhook handler.</p><p class=\"mb-4\">Clincoo ships the code you paste. A clean log keeps secrets off app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "webhook-rate-limit-sumber",
      langs: {
        "id": {
          title: "Pasang Rate Limit pada Sumber Webhook Clincoo",
          desc: "Satu IP yang membanjiri POST mengunci handler. Batasi permintaan per kunci.",
          content: "<p class=\"mb-4\">Endpoint Clincoo menerima ratusan POST per detik dari satu host. Antrian penuh dan event asli tertunda.</p><p class=\"mb-4\">Hitung permintaan per IP atau per kunci API dalam jendela waktu di editor.clincoo.buzz. Balas 429 jika lewat.</p><p class=\"mb-4\">Jangan blokir selamanya. Reset hitungan setelah jendela selesai.</p><p class=\"mb-4\">Minta AI hanya menambah pembatas laju. Tempel handler webhook.</p><p class=\"mb-4\">Clincoo merender skrip yang kamu tempel. Batas laju menjaga kapasitas di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Rate-Limit Clincoo Webhook Sources",
          desc: "One IP that floods POST locks the handler. Cap requests per key.",
          content: "<p class=\"mb-4\">A Clincoo endpoint receives hundreds of POSTs per second from one host. The queue fills and real events wait.</p><p class=\"mb-4\">Count requests per IP or API key in a time window in editor.clincoo.buzz. Return 429 when it exceeds the cap.</p><p class=\"mb-4\">Do not block forever. Reset the count when the window ends.</p><p class=\"mb-4\">Ask AI to add the rate limit only. Paste the webhook handler.</p><p class=\"mb-4\">Clincoo renders the script you paste. A rate cap protects capacity on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "webhook-simpan-payload-mentah",
      langs: {
        "id": {
          title: "Simpan Payload Mentah Webhook Clincoo sebelum Parse",
          desc: "Payload yang hanya diparse lalu dibuang sulit diaudit. Simpan body mentah dulu.",
          content: "<p class=\"mb-4\">Handler Clincoo mem-parse JSON lalu membuang teks asli. Saat debug, tidak ada bukti apa yang dikirim.</p><p class=\"mb-4\">Tulis body mentah ke penyimpanan aman sebelum parse di editor.clincoo.buzz. Batasi ukuran file.</p><p class=\"mb-4\">Jangan simpan secret di payload publik. Masking field sensitif setelah simpan.</p><p class=\"mb-4\">Minta AI hanya menambah penyimpanan body. Tempel handler webhook.</p><p class=\"mb-4\">Clincoo menjalankan kode yang kamu tempel. Body mentah memudahkan audit di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Store Raw Clincoo Webhook Payloads before Parse",
          desc: "A payload that is parsed then discarded is hard to audit. Store the raw body first.",
          content: "<p class=\"mb-4\">A Clincoo handler parses JSON then drops the original text. During debug there is no proof of what was sent.</p><p class=\"mb-4\">Write the raw body to safe storage before parse in editor.clincoo.buzz. Cap the file size.</p><p class=\"mb-4\">Do not store secrets in a public payload. Mask sensitive fields after you save.</p><p class=\"mb-4\">Ask AI to add raw-body storage only. Paste the webhook handler.</p><p class=\"mb-4\">Clincoo runs the code you paste. A raw body makes audits easier on app.clincoo.buzz.</p>",
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
