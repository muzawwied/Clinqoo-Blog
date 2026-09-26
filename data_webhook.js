// Clincoo Blog — Data kategori: webhook
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["webhook"] = {
  names: { "id": "Webhook", "en": "Webhook" },
  flag: "\u19bf",
  articles: [
    {
      id: "webhook-verifikasi-signature-hmac",
      langs: {
        "id": {
          title: "Verifikasi Signature HMAC pada Webhook Clincoo",
          desc: "Endpoint webhook tanpa tanda tangan menerima payload palsu. Cek HMAC sebelum memproses.",
          content: "<p class=\"mb-4\">Halaman Clincoo menerima POST webhook lalu langsung menulis data. Siapa pun yang tahu URL bisa mengirim event palsu.</p><p class=\"mb-4\">Hitung HMAC-SHA256 dari body mentah plus rahasia. Bandingkan dengan header signature memakai perbandingan waktu-konstan di editor.clincoo.buzz.</p><p class=\"mb-4\">Tolak body yang sudah di-parse ulang sebelum hash. Satu spasi berbeda membatalkan tanda tangan.</p><p class=\"mb-4\">Minta AI hanya menambah verifikasi signature. Tempel handler webhook.</p><p class=\"mb-4\">Clincoo merender skrip yang kamu tempel. HMAC menahan payload palsu di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Verify HMAC Signatures on Clincoo Webhooks",
          desc: "A webhook endpoint without a signature accepts fake payloads. Check HMAC before you process.",
          content: "<p class=\"mb-4\">A Clincoo page accepts a webhook POST and writes data at once. Anyone who knows the URL can send a fake event.</p><p class=\"mb-4\">Compute HMAC-SHA256 of the raw body plus the secret. Compare it to the signature header with a constant-time check in editor.clincoo.buzz.</p><p class=\"mb-4\">Reject a body that was parsed and re-stringified before the hash. One extra space breaks the signature.</p><p class=\"mb-4\">Ask AI to add signature verification only. Paste the webhook handler.</p><p class=\"mb-4\">Clincoo renders the script you paste. HMAC blocks fake payloads on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "webhook-retry-harus-idempoten",
      langs: {
        "id": {
          title: "Buat Retry Webhook Clincoo yang Idempoten",
          desc: "Event yang dikirim ulang tanpa kunci unik menduplikasi data. Simpan event id yang sudah diproses.",
          content: "<p class=\"mb-4\">Layanan Clincoo mengirim ulang webhook saat timeout. Handler menulis baris baru setiap kali sehingga pesanan dobel muncul.</p><p class=\"mb-4\">Simpan event id di penyimpanan server. Jika id sudah ada, balas 200 tanpa menulis ulang di editor.clincoo.buzz.</p><p class=\"mb-4\">Jangan andalkan hanya status 200 di sisi pengirim. Klien juga harus mengirim id yang sama saat retry.</p><p class=\"mb-4\">Minta AI hanya menambah cek event id. Tempel handler dan skema data.</p><p class=\"mb-4\">Clincoo menjalankan logika yang kamu tulis. Idempoten menjaga data bersih di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Make Clincoo Webhook Retries Idempotent",
          desc: "A resent event without a unique key duplicates data. Store event ids you already processed.",
          content: "<p class=\"mb-4\">A Clincoo service resends a webhook after a timeout. The handler inserts a new row each time so orders double.</p><p class=\"mb-4\">Store the event id on the server. If the id exists, return 200 without writing again in editor.clincoo.buzz.</p><p class=\"mb-4\">Do not rely only on the sender 200 status. The client must send the same id on retry.</p><p class=\"mb-4\">Ask AI to add the event-id check only. Paste the handler and data schema.</p><p class=\"mb-4\">Clincoo runs the logic you write. Idempotent handling keeps data clean on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "webhook-timeout-pendek-lalu-antrian",
      langs: {
        "id": {
          title: "Batasi Timeout Webhook Clincoo lalu Antrikan Kerja Berat",
          desc: "Handler yang memproses lama membuat pengirim timeout dan mengirim ulang. Jawab cepat, kerja di belakang.",
          content: "<p class=\"mb-4\">Endpoint Clincoo mengunduh file dan merender halaman di dalam request webhook. Pengirim menunggu 30 detik lalu retry.</p><p class=\"mb-4\">Validasi signature, simpan payload, balas 202 atau 200 dalam satu detik. Proses berat jalan di antrean di editor.clincoo.buzz.</p><p class=\"mb-4\">Catat job id agar gagal bisa diulang tanpa event baru.</p><p class=\"mb-4\">Minta AI hanya memisahkan terima dan proses. Tempel handler webhook.</p><p class=\"mb-4\">Clincoo menayangkan kode yang kamu tempel. Jawaban cepat mengurangi retry berlebih di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep Clincoo Webhook Timeouts Short then Queue Heavy Work",
          desc: "A slow handler makes the sender time out and retry. Reply fast, work in the background.",
          content: "<p class=\"mb-4\">A Clincoo endpoint downloads a file and renders a page inside the webhook request. The sender waits 30 seconds then retries.</p><p class=\"mb-4\">Verify the signature, store the payload, and return 202 or 200 within one second. Heavy work runs on a queue in editor.clincoo.buzz.</p><p class=\"mb-4\">Record a job id so a failure can retry without a new event.</p><p class=\"mb-4\">Ask AI to split receive and process only. Paste the webhook handler.</p><p class=\"mb-4\">Clincoo ships the code you paste. A fast reply cuts extra retries on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
