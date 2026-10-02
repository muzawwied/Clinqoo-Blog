// Clincoo Blog clincoopay extra (gateway pembayaran per proyek) 2026-10-02
(function(){
  var extra = [
  {
    "id": "clincoopay-gateway-qr-untuk-situs-deploy",
    "langs": {
      "id": {
        "title": "ClincooPay Gateway: Terima QRIS di Situs Hasil Deploy-mu",
        "desc": "ClincooPay kini menjadi payment gateway: aktifkan sekali per proyek, terima QRIS, dana masuk ke saldo ClincooPay.",
        "content": "<p class=\"mb-4\">ClincooPay kini berperan sebagai payment gateway internal Clincoo. Setiap proyek yang kamu deploy bisa menerima pembayaran QRIS tanpa mendaftar ke penyedia pembayaran eksternal — Clincoo yang mengurusnya di belakang layar.</p><p class=\"mb-4\">Untuk mengaktifkannya, buka proyekmu, masuk ke Pengaturan, lalu pilih halaman Pembayaran. Tekan tombol <b>Aktifkan ClincooPay</b>; Clincoo otomatis menerbitkan kredensial pembayaran khusus proyek itu, termasuk kunci publik untuk situs deploy-mu.</p><p class=\"mb-4\">Setelah aktif, halaman Pembayaran menjadi dashboard keuangan: saldo tersedia, total masuk, dan total ditarik. Kamu bisa menarik saldo (minimal Rp 10.000) dan semua transaksi serta penarikan tercatat di log.</p><p class=\"mb-4\">Karena dikelola penuh Clincoo, kamu tidak pernah memasukkan kredensial penyedia pembayaran apa pun. Status aktif tersimpan per proyek dan tetap ada meski halaman di-refresh.</p>",
        "source": "Clincoo App",
        "sourceUrl": "https://app.clincoo.buzz/",
        "sourceSnippet": "Halaman Pembayaran Clincoo",
        "source2": "Clincoo Blog",
        "sourceUrl2": "https://blog.clincoo.buzz/",
        "sourceSnippet2": "Dokumentasi resmi Clincoo",
        "source3": "Clincoo",
        "sourceUrl3": "https://muzawwied.github.io/",
        "sourceSnippet3": "Situs utama Clincoo"
      },
      "en": {
        "title": "ClincooPay Gateway: Accept QRIS on Your Deployed Sites",
        "desc": "ClincooPay now acts as a payment gateway: activate once per project, accept QRIS, and funds land in your ClincooPay balance.",
        "content": "<p class=\"mb-4\">ClincooPay now serves as the Clincoo payment gateway. Every project you deploy can accept QRIS payments without registering an external provider — Clincoo handles it behind the scenes.</p><p class=\"mb-4\">To activate it, open your project, go to Settings, then open the Payments page. Press <b>Aktifkan ClincooPay</b>; Clincoo automatically issues payment credentials for that project, including the public key for your deployed site.</p><p class=\"mb-4\">Once active, the Payments page becomes a finance dashboard: available balance, total incoming, and total withdrawn. You can withdraw funds (minimum Rp 10,000) and every transaction and withdrawal is recorded in the log.</p><p class=\"mb-4\">Because it is fully managed by Clincoo, you never enter external provider credentials. The active state is stored per project and survives page refreshes.</p>",
        "source": "Clincoo App",
        "sourceUrl": "https://app.clincoo.buzz/",
        "sourceSnippet": "Halaman Pembayaran Clincoo",
        "source2": "Clincoo Blog",
        "sourceUrl2": "https://blog.clincoo.buzz/",
        "sourceSnippet2": "Dokumentasi resmi Clincoo",
        "source3": "Clincoo",
        "sourceUrl3": "https://muzawwied.github.io/",
        "sourceSnippet3": "Situs utama Clincoo"
      }
    }
  },
  {
    "id": "clincoopay-api-buat-qr-pembayaran",
    "langs": {
      "id": {
        "title": "Membuat QR Pembayaran ClincooPay dari Situs Deploy-mu",
        "desc": "Satu POST ke /api/pay dengan kunci publik proyek menghasilkan QR QRIS siap tampilkan ke pembeli.",
        "content": "<p class=\"mb-4\">Situs hasil deploy-mu bisa membuat QR pembayaran kapan pun memakai kunci publik proyek (berawalan <code>pk_</code>). Salin kunci itu dari halaman Pembayaran setelah ClincooPay aktif.</p><p class=\"mb-4\">Kirim POST ke endpoint <code>/api/pay</code> dengan action <code>create</code>, kunci publik, nominal (Rp 1.000 sampai Rp 100.000.000), dan deskripsi singkat. Tidak perlu token rahasia — kunci publik memang aman untuk halaman publik.</p><pre class=\"mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50 overflow-x-auto text-sm\"><code>const res = await fetch(&quot;https://app.clincoo.buzz/api/pay&quot;, {&#10;  method: &quot;POST&quot;,&#10;  headers: { &quot;Content-Type&quot;: &quot;application/json&quot; },&#10;  body: JSON.stringify({&#10;    action: &quot;create&quot;,&#10;    key: &quot;pk_kunci_publik_proyekmu&quot;,&#10;    amount: 25000,&#10;    description: &quot;Paket Premium&quot;&#10;  })&#10;});&#10;const data = await res.json();&#10;// data.order_id, data.qr_image, data.payment_url</code></pre><p class=\"mb-4\">Respon berisi <code>order_id</code> (simpan untuk cek status), <code>qr_image</code> (QRIS untuk pembeli), dan <code>payment_url</code>. Tampilkan QR-nya lalu pantau status pembayarannya.</p><p class=\"mb-4\">Jika muncul pesan gateway sedang dalam proses aktivasi, penyedia pembayaran di sisi Clincoo belum dikonfigurasi — cukup hubungi tim Clincoo.</p>",
        "source": "Clincoo App",
        "sourceUrl": "https://app.clincoo.buzz/",
        "sourceSnippet": "Halaman Pembayaran Clincoo",
        "source2": "Clincoo Blog",
        "sourceUrl2": "https://blog.clincoo.buzz/",
        "sourceSnippet2": "Dokumentasi resmi Clincoo",
        "source3": "Clincoo",
        "sourceUrl3": "https://muzawwied.github.io/",
        "sourceSnippet3": "Situs utama Clincoo"
      },
      "en": {
        "title": "Generating a ClincooPay Payment QR from Your Deployed Site",
        "desc": "A single POST to /api/pay with your project public key produces a QRIS ready to show the buyer.",
        "content": "<p class=\"mb-4\">Your deployed site can create a payment QR anytime using your project public key (prefixed <code>pk_</code>). Copy it from the Payments page once ClincooPay is active.</p><p class=\"mb-4\">Send a POST to the <code>/api/pay</code> endpoint with action <code>create</code>, the public key, the amount (Rp 1,000 to Rp 100,000,000), and a short description. No secret token is needed — the public key is safe for public pages.</p><pre class=\"mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50 overflow-x-auto text-sm\"><code>const res = await fetch(&quot;https://app.clincoo.buzz/api/pay&quot;, {&#10;  method: &quot;POST&quot;,&#10;  headers: { &quot;Content-Type&quot;: &quot;application/json&quot; },&#10;  body: JSON.stringify({&#10;    action: &quot;create&quot;,&#10;    key: &quot;pk_kunci_publik_proyekmu&quot;,&#10;    amount: 25000,&#10;    description: &quot;Paket Premium&quot;&#10;  })&#10;});&#10;const data = await res.json();&#10;// data.order_id, data.qr_image, data.payment_url</code></pre><p class=\"mb-4\">The response contains <code>order_id</code> (keep it for status checks), <code>qr_image</code> (the QRIS for the buyer), and <code>payment_url</code>. Render the QR, then watch the payment status.</p><p class=\"mb-4\">If you see a gateway activation message, the payment provider on the Clincoo side is not configured yet — just contact the Clincoo team.</p>",
        "source": "Clincoo App",
        "sourceUrl": "https://app.clincoo.buzz/",
        "sourceSnippet": "Halaman Pembayaran Clincoo",
        "source2": "Clincoo Blog",
        "sourceUrl2": "https://blog.clincoo.buzz/",
        "sourceSnippet2": "Dokumentasi resmi Clincoo",
        "source3": "Clincoo",
        "sourceUrl3": "https://muzawwied.github.io/",
        "sourceSnippet3": "Situs utama Clincoo"
      }
    }
  },
  {
    "id": "clincoopay-cek-status-pembayaran",
    "langs": {
      "id": {
        "title": "Mengecek Status Pembayaran ClincooPay",
        "desc": "Polling status transaksi dengan order_id: pending, paid, atau expired — langsung dari halaman publik.",
        "content": "<p class=\"mb-4\">Setelah QR tampil, situsmu perlu tahu kapan pembeli benar-benar membayar. ClincooPay menyediakan endpoint status yang bisa dipanggil dari halaman publik memakai kunci publik dan <code>order_id</code> yang kamu simpan saat membuat QR.</p><pre class=\"mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50 overflow-x-auto text-sm\"><code>const res = await fetch(&#10;  &quot;https://app.clincoo.buzz/api/pay?action=status&quot; +&#10;  &quot;&key=pk_kunci_publik_proyekmu&order_id=PAY123ABCD&quot;&#10;);&#10;const data = await res.json();&#10;// data.status: &quot;pending&quot; | &quot;paid&quot; | &quot;expired&quot;</code></pre><p class=\"mb-4\"><code>pending</code> berarti pembeli belum menyelesaikan pembayaran, <code>paid</code> berarti dana sudah masuk ke saldo ClincooPay proyekmu, dan <code>expired</code> berarti QR kedaluwarsa — buat transaksi baru bila perlu.</p><p class=\"mb-4\">Panggil endpoint tiap 3-5 detik selama pembeli masih di halaman pembayaran, lalu berhenti begitu status berubah. Untuk notifikasi tanpa polling, gunakan webhook pembayaran ClincooPay.</p>",
        "source": "Clincoo App",
        "sourceUrl": "https://app.clincoo.buzz/",
        "sourceSnippet": "Halaman Pembayaran Clincoo",
        "source2": "Clincoo Blog",
        "sourceUrl2": "https://blog.clincoo.buzz/",
        "sourceSnippet2": "Dokumentasi resmi Clincoo",
        "source3": "Clincoo",
        "sourceUrl3": "https://muzawwied.github.io/",
        "sourceSnippet3": "Situs utama Clincoo"
      },
      "en": {
        "title": "Checking a ClincooPay Payment Status",
        "desc": "Poll the transaction status with order_id: pending, paid, or expired — straight from a public page.",
        "content": "<p class=\"mb-4\">After the QR appears, your site needs to know when the buyer actually pays. ClincooPay provides a status endpoint callable from a public page using the public key and the <code>order_id</code> you saved when creating the QR.</p><pre class=\"mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50 overflow-x-auto text-sm\"><code>const res = await fetch(&#10;  &quot;https://app.clincoo.buzz/api/pay?action=status&quot; +&#10;  &quot;&key=pk_kunci_publik_proyekmu&order_id=PAY123ABCD&quot;&#10;);&#10;const data = await res.json();&#10;// data.status: &quot;pending&quot; | &quot;paid&quot; | &quot;expired&quot;</code></pre><p class=\"mb-4\"><code>pending</code> means the buyer has not completed payment, <code>paid</code> means funds landed in your project ClincooPay balance, and <code>expired</code> means the QR timed out — create a new transaction if needed.</p><p class=\"mb-4\">Call the endpoint every 3-5 seconds while the buyer is on the payment page, then stop once the status changes. For polling-free notifications, use the ClincooPay payment webhook.</p>",
        "source": "Clincoo App",
        "sourceUrl": "https://app.clincoo.buzz/",
        "sourceSnippet": "Halaman Pembayaran Clincoo",
        "source2": "Clincoo Blog",
        "sourceUrl2": "https://blog.clincoo.buzz/",
        "sourceSnippet2": "Dokumentasi resmi Clincoo",
        "source3": "Clincoo",
        "sourceUrl3": "https://muzawwied.github.io/",
        "sourceSnippet3": "Situs utama Clincoo"
      }
    }
  },
  {
    "id": "clincoopay-webhook-pembayaran",
    "langs": {
      "id": {
        "title": "Memasang Webhook Pembayaran ClincooPay",
        "desc": "Terima notifikasi otomatis saat pembayaran sukses: pasang URL webhook di halaman Integrasi & Webhook.",
        "content": "<p class=\"mb-4\">Supaya tidak perlu polling terus-menerus, ClincooPay mengirim notifikasi otomatis ke servermu setiap kali pembayaran berhasil. Konfigurasinya ada di halaman <b>Integrasi &amp; Webhook</b> proyekmu, bagian <b>Webhook Pembayaran (ClincooPay)</b>.</p><p class=\"mb-4\">Isi URL endpoint milikmu lalu simpan. Tiap transaksi yang dibayar dikirim sebagai POST JSON berisi <code>event</code> (<code>payment.paid</code>), <code>order_id</code>, <code>amount</code>, <code>description</code>, <code>status</code>, dan <code>paid_at</code>.</p><pre class=\"mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50 overflow-x-auto text-sm\"><code>app.post(&quot;/webhook/bayar&quot;, (req, res) => {&#10;  const d = req.body;&#10;  if (d.event === &quot;payment.paid&quot;) {&#10;    // verifikasi d.order_id milik pesananmu, lalu proses&#10;  }&#10;  res.sendStatus(200);&#10;});</code></pre><p class=\"mb-4\">Selalu verifikasi bahwa <code>order_id</code> yang masuk benar-benar milik pesanan di sistemmu sebelum mengaktifkan pesanan. Balas status 200 agar tidak dikirim ulang, dan jangan taruh proses berat di handler ini.</p>",
        "source": "Clincoo App",
        "sourceUrl": "https://app.clincoo.buzz/",
        "sourceSnippet": "Halaman Pembayaran Clincoo",
        "source2": "Clincoo Blog",
        "sourceUrl2": "https://blog.clincoo.buzz/",
        "sourceSnippet2": "Dokumentasi resmi Clincoo",
        "source3": "Clincoo",
        "sourceUrl3": "https://muzawwied.github.io/",
        "sourceSnippet3": "Situs utama Clincoo"
      },
      "en": {
        "title": "Setting Up the ClincooPay Payment Webhook",
        "desc": "Get automatic notifications when a payment succeeds: set the webhook URL on the Integrations & Webhooks page.",
        "content": "<p class=\"mb-4\">To avoid endless polling, ClincooPay sends automatic notifications to your server whenever a payment succeeds. Configure it on your project's <b>Integrations &amp; Webhooks</b> page, in the <b>Webhook Pembayaran (ClincooPay)</b> section.</p><p class=\"mb-4\">Enter your endpoint URL and save. Every paid transaction is delivered as a JSON POST containing <code>event</code> (<code>payment.paid</code>), <code>order_id</code>, <code>amount</code>, <code>description</code>, <code>status</code>, and <code>paid_at</code>.</p><pre class=\"mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50 overflow-x-auto text-sm\"><code>app.post(&quot;/webhook/bayar&quot;, (req, res) => {&#10;  const d = req.body;&#10;  if (d.event === &quot;payment.paid&quot;) {&#10;    // verifikasi d.order_id milik pesananmu, lalu proses&#10;  }&#10;  res.sendStatus(200);&#10;});</code></pre><p class=\"mb-4\">Always verify the incoming <code>order_id</code> belongs to an order in your system before fulfilling it. Respond with status 200 to prevent retries, and keep heavy processing out of the handler.</p>",
        "source": "Clincoo App",
        "sourceUrl": "https://app.clincoo.buzz/",
        "sourceSnippet": "Halaman Pembayaran Clincoo",
        "source2": "Clincoo Blog",
        "sourceUrl2": "https://blog.clincoo.buzz/",
        "sourceSnippet2": "Dokumentasi resmi Clincoo",
        "source3": "Clincoo",
        "sourceUrl3": "https://muzawwied.github.io/",
        "sourceSnippet3": "Situs utama Clincoo"
      }
    }
  },
  {
    "id": "clincoopay-tarik-saldo-dan-log",
    "langs": {
      "id": {
        "title": "Menarik Saldo ClincooPay dan Membaca Log Transaksi",
        "desc": "Saldo dari pembayaran sukses bisa ditarik kapan saja mulai Rp 10.000. Semua riwayat tercatat di halaman Pembayaran.",
        "content": "<p class=\"mb-4\">Dari setiap pembayaran sukses, dana otomatis masuk ke saldo ClincooPay proyekmu. Saldo tersedia dihitung dari total masuk dikurangi yang sudah ditarik atau sedang diproses.</p><p class=\"mb-4\">Untuk menarik dana, tekan <b>Tarik Saldo</b> di halaman Pembayaran, masukkan nominal (minimal Rp 10.000), lalu kirim permintaannya. Tim Clincoo memprosesnya dan statusnya tampil di log: <b>Diproses</b>, <b>Selesai</b>, atau <b>Ditolak</b>.</p><p class=\"mb-4\">Semua aktivitas tercatat di dua log: transaksi masuk (Berhasil, Menunggu, Kedaluwarsa, atau Gagal) dan riwayat penarikan. Log ini rujukan cepat saat ada pertanyaan soal pembayaran.</p><p class=\"mb-4\">Karena saldo terikat per proyek, keuangan tiap situs deploy-mu terpisah dan mudah diaudit.</p>",
        "source": "Clincoo App",
        "sourceUrl": "https://app.clincoo.buzz/",
        "sourceSnippet": "Halaman Pembayaran Clincoo",
        "source2": "Clincoo Blog",
        "sourceUrl2": "https://blog.clincoo.buzz/",
        "sourceSnippet2": "Dokumentasi resmi Clincoo",
        "source3": "Clincoo",
        "sourceUrl3": "https://muzawwied.github.io/",
        "sourceSnippet3": "Situs utama Clincoo"
      },
      "en": {
        "title": "Withdrawing Your ClincooPay Balance and Reading the Logs",
        "desc": "Funds from successful payments can be withdrawn anytime from Rp 10,000. Every record lives on the Payments page.",
        "content": "<p class=\"mb-4\">Funds from every successful payment land automatically in your project's ClincooPay balance. Available balance is total income minus amounts withdrawn or being processed.</p><p class=\"mb-4\">To withdraw, press <b>Tarik Saldo</b> on the Payments page, enter the amount (minimum Rp 10,000), and submit. The Clincoo team processes it and the log shows each one as <b>Diproses</b>, <b>Selesai</b>, or <b>Ditolak</b>.</p><p class=\"mb-4\">All activity is recorded in two logs: incoming transactions (Berhasil, Menunggu, Kedaluwarsa, Gagal) and withdrawal history. They are a quick reference whenever a payment question comes up.</p><p class=\"mb-4\">Since balances are scoped per project, each deployed site's finances stay separate and easy to audit.</p>",
        "source": "Clincoo App",
        "sourceUrl": "https://app.clincoo.buzz/",
        "sourceSnippet": "Halaman Pembayaran Clincoo",
        "source2": "Clincoo Blog",
        "sourceUrl2": "https://blog.clincoo.buzz/",
        "sourceSnippet2": "Dokumentasi resmi Clincoo",
        "source3": "Clincoo",
        "sourceUrl3": "https://muzawwied.github.io/",
        "sourceSnippet3": "Situs utama Clincoo"
      }
    }
  }
];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles['clincoopay']) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles['clincoopay'].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
