// Clincoo Docs — artikel tambahan Pembayaran (5 Oktober 2026, WIB)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.pembayaran) return;
  var list = window.countryDataFiles.pembayaran.articles;
  var extra = [
{
 "id": "fitur-pembayaran-clincoo",
 "langs": {
  "id": {
   "title": "Fitur Pembayaran Clincoo: QRIS, Saldo, dan Penarikan — Panduan Lengkap",
   "desc": "Panduan lengkap fitur Pembayaran Clincoo (ClincooPay): terima pembayaran QRIS otomatis di situs deploy, saldo masuk sendiri, penarikan e-wallet ber-OTP, laporan real-time, keamanan, dan semua ketentuannya.",
   "content": "<p class=\"mb-4\">Fitur <b>Pembayaran Clincoo (ClincooPay)</b> membuat situs yang kamu deploy bisa menerima uang lewat <b>QRIS</b>: QR bayar dibuat lewat API, pembeli membuka tautan checkout resmi, dan dana masuk otomatis ke saldo proyek. Semua dikontrol dari <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> → Pengaturan proyek → Pembayaran.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kemampuan utama</h2><div class=\"overflow-x-auto mb-5\"><table class=\"w-full text-sm border border-gray-200 border-collapse\"><thead class=\"bg-gray-50\"><tr><th class=\"border border-gray-200 px-3 py-2 text-left font-bold text-gray-900\">Kemampuan</th><th class=\"border border-gray-200 px-3 py-2 text-left font-bold text-gray-900\">Keterangan</th></tr></thead><tbody><tr><td class=\"border border-gray-200 px-3 py-2 font-medium text-gray-900\">Terima pembayaran QRIS</td><td class=\"border border-gray-200 px-3 py-2 text-gray-700\">QR dinamis via API, siap discan GoPay, OVO, DANA, ShopeePay, LinkAja, dan semua bank anggota QRIS.</td></tr><tr><td class=\"border border-gray-200 px-3 py-2 font-medium text-gray-900\">Checkout siap pakai</td><td class=\"border border-gray-200 px-3 py-2 text-gray-700\">Tautan checkout resmi dengan QR, panduan bayar, dan status real-time — tanpa buat halaman bayar sendiri.</td></tr><tr><td class=\"border border-gray-200 px-3 py-2 font-medium text-gray-900\">Saldo otomatis</td><td class=\"border border-gray-200 px-3 py-2 text-gray-700\">Dana masuk ke saldo proyek begitu pembayaran terdeteksi, lengkap ringkasan dan grafik.</td></tr><tr><td class=\"border border-gray-200 px-3 py-2 font-medium text-gray-900\">Penarikan e-wallet</td><td class=\"border border-gray-200 px-3 py-2 text-gray-700\">Minimum Rp 10.000, verifikasi OTP email, saldo kembali bila ditolak.</td></tr><tr><td class=\"border border-gray-200 px-3 py-2 font-medium text-gray-900\">Webhook proyek</td><td class=\"border border-gray-200 px-3 py-2 text-gray-700\">Notifikasi payment.paid diteruskan ke webhook situs deploy-mu untuk otomatisasi.</td></tr></tbody></table></div><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ketentuan penting</h2><p class=\"mb-4\">Nominal Rp 1.000 sampai Rp 100.000.000, biaya QRIS 3,8% ditanggung pembeli, QR berlaku 15 menit, fitur tersedia mulai paket Pro. Panduan teknis lengkap ada di artikel <a href=\"https://docs.clincoo.buzz/dokumentasi/api-payment-gateway-qris/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">Dokumentasi API Payment Gateway QRIS</a> dan <a href=\"https://docs.clincoo.buzz/dokumentasi/cara-tarik-saldo-dari-clincoo/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">Cara Tarik Saldo dari Clincoo</a>.</p>",
   "source": "Clincoo App — Pembayaran",
   "sourceUrl": "https://app.clincoo.buzz/",
   "sourceSnippet": "Terima pembayaran QRIS di situs deploy-mu — dana masuk otomatis ke saldo ini.",
   "source2": "Clincoo Docs — API Payment Gateway QRIS",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/api-payment-gateway-qris/",
   "source3": "Clincoo Docs — Cara Tarik Saldo",
   "source3Url": "https://docs.clincoo.buzz/dokumentasi/cara-tarik-saldo-dari-clincoo/"
  },
  "en": {
   "title": "Clincoo Payments: QRIS, Balance, and Withdrawals — The Complete Guide",
   "desc": "The complete guide to Clincoo Payments (ClincooPay): accept QRIS payments automatically on your deployed site, automatic balance, OTP-protected e-wallet withdrawals, real-time reports, security, and every rule.",
   "content": "<p class=\"mb-4\"><b>Clincoo Payments (ClincooPay)</b> lets the site you deploy accept money through <b>QRIS</b>: the pay QR is created via the API, buyers open the official checkout link, and funds land in the project balance automatically. Everything is controlled from <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> → Project Settings → Payments.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Core capabilities</h2><div class=\"overflow-x-auto mb-5\"><table class=\"w-full text-sm border border-gray-200 border-collapse\"><thead class=\"bg-gray-50\"><tr><th class=\"border border-gray-200 px-3 py-2 text-left font-bold text-gray-900\">Capability</th><th class=\"border border-gray-200 px-3 py-2 text-left font-bold text-gray-900\">Details</th></tr></thead><tbody><tr><td class=\"border border-gray-200 px-3 py-2 font-medium text-gray-900\">Accept QRIS payments</td><td class=\"border border-gray-200 px-3 py-2 text-gray-700\">Dynamic QR via the API, scannable by GoPay, OVO, DANA, ShopeePay, LinkAja, and every QRIS member bank.</td></tr><tr><td class=\"border border-gray-200 px-3 py-2 font-medium text-gray-900\">Ready-made checkout</td><td class=\"border border-gray-200 px-3 py-2 text-gray-700\">Official checkout link with QR, payment instructions, and real-time status — no payment page to build.</td></tr><tr><td class=\"border border-gray-200 px-3 py-2 font-medium text-gray-900\">Automatic balance</td><td class=\"border border-gray-200 px-3 py-2 text-gray-700\">Funds enter the project balance the moment payment is detected, with summaries and charts.</td></tr><tr><td class=\"border border-gray-200 px-3 py-2 font-medium text-gray-900\">E-wallet withdrawals</td><td class=\"border border-gray-200 px-3 py-2 text-gray-700\">Minimum Rp 10,000, email OTP verification, automatic refund if rejected.</td></tr><tr><td class=\"border border-gray-200 px-3 py-2 font-medium text-gray-900\">Project webhook</td><td class=\"border border-gray-200 px-3 py-2 text-gray-700\">The payment.paid notification is forwarded to your deployed site webhook for automation.</td></tr></tbody></table></div><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Key rules</h2><p class=\"mb-4\">Amounts from Rp 1,000 to Rp 100,000,000, QRIS fee 3.8% borne by the buyer, QR valid for 15 minutes, available from the Pro plan. The full technical guide lives in <a href=\"https://docs.clincoo.buzz/dokumentasi/api-payment-gateway-qris/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">QRIS Payment Gateway API</a> and <a href=\"https://docs.clincoo.buzz/dokumentasi/cara-tarik-saldo-dari-clincoo/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">How to Withdraw from Clincoo</a>.</p>",
   "source": "Clincoo App — Payments",
   "sourceUrl": "https://app.clincoo.buzz/",
   "sourceSnippet": "Accept QRIS payments on your deployed site — funds land in this balance automatically.",
   "source2": "Clincoo Docs — QRIS Payment Gateway API",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/api-payment-gateway-qris/",
   "source3": "Clincoo Docs — How to Withdraw",
   "source3Url": "https://docs.clincoo.buzz/dokumentasi/cara-tarik-saldo-dari-clincoo/"
  }
 }
},
{
 "id": "pembayaran-tampilkan-alasan-gagal-yang-bisa-ditindak",
 "langs": {
  "id": {
   "title": "Cara Tampilkan Alasan Gagal yang Bisa Ditindak",
   "desc": "Tata cara memetakan kode gagal pembayaran Clincoo ke pesan singkat yang menyebut apa yang salah dan apa langkah berikutnya, tanpa membocorkan detail gateway.",
   "content": "<p class=\"mb-4\">Kode gagal dari gateway jarang cocok ditampilkan mentah. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> petakan kode ke tiga kelompok: dana tidak cukup, data kartu ditolak, dan gangguan sementara.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sebut langkah berikutnya</h2><p class=\"mb-4\">Pesan gagal sebaiknya menyebut satu tindakan: coba metode lain, periksa saldo, atau tunggu lalu muat ulang status. Jangan hanya menulis \"transaksi gagal\".</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan kode asli di log</h2><p class=\"mb-4\">Pembeli melihat kalimat manusia. Log server menyimpan kode gateway. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bahwa pesan tidak memuat nomor kartu atau token.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan samakan semua gagal</h2><p class=\"mb-4\">Timeout dan penolakan bank butuh tombol berbeda. Contoh peta kode dicatat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTTP response status codes",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
   "sourceSnippet": "HTTP response status codes indicate whether a specific HTTP request has been successfully completed.",
   "source2": "W3C WAI — Error identification",
   "source2Url": "https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Show an Actionable Failure Reason",
   "desc": "How to map a Clincoo payment failure code to a short message that says what went wrong and what to do next, without leaking gateway detail.",
   "content": "<p class=\"mb-4\">A gateway failure code is rarely fit to show raw. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> map codes into three groups: insufficient funds, card data declined, and a temporary outage.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Name the next step</h2><p class=\"mb-4\">A failure message should name one action: try another method, check the balance, or wait and reload status. Do not only write \"transaction failed\".</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep the raw code in the log</h2><p class=\"mb-4\">The buyer sees a human sentence. The server log keeps the gateway code. Test on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> that the message does not include a card number or token.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not treat every failure the same</h2><p class=\"mb-4\">A timeout and a bank decline need different buttons. A sample code map is noted on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTTP response status codes",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
   "sourceSnippet": "HTTP response status codes indicate whether a specific HTTP request has been successfully completed.",
   "source2": "W3C WAI — Error identification",
   "source2Url": "https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "pembayaran-hitung-pajak-di-server-bukan-klien",
 "langs": {
  "id": {
   "title": "Cara Hitung Pajak di Server, Bukan di Klien",
   "desc": "Tata cara menghitung pajak dan total pembayaran Clincoo di server supaya pembeli tidak bisa mengubah angka lewat konsol sebelum tagihan dibuat.",
   "content": "<p class=\"mb-4\">Angka di halaman hanya tampilan. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> kirim id produk dan jumlah, lalu biarkan server menghitung subtotal, pajak, dan total.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan percaya input harga</h2><p class=\"mb-4\">Field tersembunyi yang menyimpan harga bisa diubah. Server membaca harga dari katalog, bukan dari badan permintaan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bulatkan sekali</h2><p class=\"mb-4\">Pilih satuan terkecil, bulatkan sekali, lalu pakai angka itu di tagihan dan di UI. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bahwa total di ringkasan sama dengan total di gateway.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tunjukkan rincian</h2><p class=\"mb-4\">Pisahkan subtotal dan pajak agar pembeli bisa mencocokkan. Contoh rumus disimpan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Number.prototype.toFixed",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed",
   "sourceSnippet": "The toFixed() method formats a number using fixed-point notation.",
   "source2": "OWASP — Input validation",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Calculate Tax on the Server, Not the Client",
   "desc": "How to calculate Clincoo tax and the payment total on the server so a buyer cannot change the number from the console before the charge is created.",
   "content": "<p class=\"mb-4\">The number on the page is only a display. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> send the product id and quantity, then let the server compute subtotal, tax, and total.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not trust a price input</h2><p class=\"mb-4\">A hidden field that stores the price can be edited. The server reads the price from the catalog, not from the request body.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Round once</h2><p class=\"mb-4\">Pick the minor unit, round once, then use that number on the charge and in the UI. Test on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> that the summary total matches the gateway total.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Show the breakdown</h2><p class=\"mb-4\">Separate subtotal and tax so the buyer can reconcile. A sample formula is stored on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Number.prototype.toFixed",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed",
   "sourceSnippet": "The toFixed() method formats a number using fixed-point notation.",
   "source2": "OWASP — Input validation",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "pembayaran-jangan-andalkan-return-url",
 "langs": {
  "id": {
   "title": "Cara Jangan Andalkan Return URL sebagai Bukti Bayar",
   "desc": "Tata cara memperlakukan halaman kembali Clincoo hanya sebagai petunjuk, lalu menandai lunas setelah webhook terverifikasi, bukan setelah query string sukses.",
   "content": "<p class=\"mb-4\">Return URL bisa dibuka siapa saja. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> baca parameter hanya untuk menampilkan status menunggu konfirmasi, bukan untuk menulis lunas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tunggu webhook</h2><p class=\"mb-4\">Status lunas ditulis saat webhook terverifikasi masuk. Halaman boleh melakukan polling status server, bukan mengubah status sendiri.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tolak parameter palsu</h2><p class=\"mb-4\">Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan membuka return URL plus query sukses tanpa pembayaran. Order harus tetap pending.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri jalan keluar</h2><p class=\"mb-4\">Jika webhook terlambat, tampilkan order id agar dukungan bisa mengecek. Catatan alurnya ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — URLSearchParams",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams",
   "sourceSnippet": "The URLSearchParams interface defines utility methods to work with the query string of a URL.",
   "source2": "OWASP — Webhook security",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Webhook_Security_Cheat_Sheet.html",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How Not to Treat the Return URL as Proof of Payment",
   "desc": "How to treat the Clincoo return page as a hint only, then mark paid after a verified webhook, not after a success query string.",
   "content": "<p class=\"mb-4\">Anyone can open a return URL. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> read the parameters only to show waiting for confirmation, not to write paid.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Wait for the webhook</h2><p class=\"mb-4\">Paid status is written when a verified webhook arrives. The page may poll server status, not change status itself.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reject a fake parameter</h2><p class=\"mb-4\">Test on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> by opening the return URL with a success query and no payment. The order must stay pending.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Give a way out</h2><p class=\"mb-4\">If the webhook is late, show the order id so support can check. The flow is noted on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — URLSearchParams",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams",
   "sourceSnippet": "The URLSearchParams interface defines utility methods to work with the query string of a URL.",
   "source2": "OWASP — Webhook security",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Webhook_Security_Cheat_Sheet.html",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "pembayaran-format-nomor-virtual-account",
 "langs": {
  "id": {
   "title": "Cara Format Nomor Virtual Account agar Mudah Disalin",
   "desc": "Tata cara menampilkan nomor VA Clincoo dalam kelompok angka, menyediakan tombol salin, dan tetap mengirim nomor utuh tanpa spasi ke gateway.",
   "content": "<p class=\"mb-4\">Nomor VA panjang mudah salah ketik. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan nomor sebagai digit saja, lalu sisipkan spasi hanya saat digambar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tombol salin nomor utuh</h2><p class=\"mb-4\">Tombol salin menulis digit tanpa spasi ke papan klip. Tampilkan status tersalin yang tidak menggeser layout.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan pecah di tengah bank code</h2><p class=\"mb-4\">Kelompokkan per tiga atau empat digit setelah kode bank, sesuai panduan mitra. Cek di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pada lebar 320px agar nomor tidak terpotong.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sertakan nama merchant</h2><p class=\"mb-4\">Di samping nomor, tulis nama yang akan muncul di aplikasi bank. Contoh tata letak ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Clipboard: writeText",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText",
   "sourceSnippet": "The writeText() method of the Clipboard interface writes the specified text string to the system clipboard.",
   "source2": "W3C — Accessible name for buttons",
   "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Format a Virtual Account Number for Copying",
   "desc": "How to show a Clincoo VA number in digit groups, provide a copy button, and still send the full number without spaces to the gateway.",
   "content": "<p class=\"mb-4\">A long VA number is easy to mistype. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> store the number as digits only, then insert spaces only when painting it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Copy the full number</h2><p class=\"mb-4\">The copy button writes digits without spaces to the clipboard. Show a copied status that does not shift the layout.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not split the bank code</h2><p class=\"mb-4\">Group by three or four digits after the bank code, following the partner guide. Check on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> at 320px so the number is not clipped.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Include the merchant name</h2><p class=\"mb-4\">Beside the number, write the name that will appear in the banking app. A sample layout is on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Clipboard: writeText",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText",
   "sourceSnippet": "The writeText() method of the Clipboard interface writes the specified text string to the system clipboard.",
   "source2": "W3C — Accessible name for buttons",
   "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "pembayaran-batas-waktu-checkout-di-antarmuka",
 "langs": {
  "id": {
   "title": "Cara Tampilkan Batas Waktu Checkout di Antarmuka",
   "desc": "Tata cara menampilkan sisa waktu sesi checkout Clincoo dari waktu kedaluwarsa server, lalu mengunci tombol bayar saat sesi habis tanpa menutup order yang sudah terbayar.",
   "content": "<p class=\"mb-4\">Hitung mundur di klien hanya tampilan. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan waktu kedaluwarsa dari server, lalu kurangi dengan jam perangkat untuk teks sisa waktu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kunci tombol saat habis</h2><p class=\"mb-4\">Saat waktu tampilan habis, nonaktifkan tombol dan minta status baru. Kalau server masih mengizinkan, perbarui waktu. Kalau tidak, arahkan buat sesi baru.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan tutup order lunas</h2><p class=\"mb-4\">Sesi UI habis bukan berarti pembayaran gagal. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan menunda webhook sampai setelah hitung mundur nol.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Umumkan sisa waktu</h2><p class=\"mb-4\">Pakai teks yang bisa dibaca pembaca layar, bukan hanya warna. Pola pengumuman dicatat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Date",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
   "sourceSnippet": "JavaScript Date objects represent a single moment in time in a platform-independent format.",
   "source2": "W3C WAI — Status messages",
   "source2Url": "https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Show a Checkout Deadline in the Interface",
   "desc": "How to show the remaining Clincoo checkout time from the server expiry, then disable the pay button when the session ends without closing an order that is already paid.",
   "content": "<p class=\"mb-4\">A client countdown is only a display. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> store the expiry from the server, then subtract the device clock for the remaining-time text.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Disable the button when it ends</h2><p class=\"mb-4\">When the displayed time ends, disable the button and request fresh status. If the server still allows it, refresh the time. If not, send the buyer to start a new session.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not close a paid order</h2><p class=\"mb-4\">An expired UI session does not mean the payment failed. Test on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> by delaying the webhook until after the countdown hits zero.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Announce the remaining time</h2><p class=\"mb-4\">Use text a screen reader can read, not color alone. An announcement pattern is noted on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Date",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
   "sourceSnippet": "JavaScript Date objects represent a single moment in time in a platform-independent format.",
   "source2": "W3C WAI — Status messages",
   "source2Url": "https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
}
,
{
 "id": "pembayaran-verifikasi-tanda-tangan-webhook",
 "langs": {
  "id": {
   "title": "Cara Verifikasi Tanda Tangan Webhook Pembayaran",
   "desc": "Tata cara menolak webhook pembayaran Clincoo yang tidak lolos tanda tangan, sebelum status order diubah menjadi lunas.",
   "content": "<p class=\"mb-4\">Webhook yang sampai ke server belum tentu dari gateway. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bandingkan tanda tangan di header dengan HMAC dari badan mentah, memakai rahasia yang hanya ada di server.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai badan mentah</h2><p class=\"mb-4\">Hitung ulang tanda tangan dari byte yang diterima, bukan dari objek yang sudah diurai ulang. Perbedaan spasi atau urutan kunci membuat tanda tangan sah terlihat palsu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tolak sebelum mengubah status</h2><p class=\"mb-4\">Jika tanda tangan gagal, jawab 401 dan jangan sentuh order. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan payload yang diubah satu karakter.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan catat rahasia</h2><p class=\"mb-4\">Log boleh menyimpan id event dan hasil cocok atau tidak. Contoh alur dicatat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — SubtleCrypto.sign",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/sign",
   "sourceSnippet": "The sign() method generates a digital signature.",
   "source2": "OWASP — Webhook security",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Webhook_Security_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Verify a Payment Webhook Signature",
   "desc": "How to reject a Clincoo payment webhook that fails signature checks before an order is marked paid.",
   "content": "<p class=\"mb-4\">A webhook that reaches your server is not automatically from the gateway. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> compare the header signature with an HMAC of the raw body, using a secret that lives only on the server.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use the raw body</h2><p class=\"mb-4\">Recompute the signature from the bytes you received, not from a re-serialized object. A space or key-order change makes a valid signature look fake.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reject before changing status</h2><p class=\"mb-4\">If the signature fails, respond 401 and do not touch the order. Test in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> with a payload changed by one character.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not log the secret</h2><p class=\"mb-4\">Logs may store the event id and whether the check matched. A sample flow is noted on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — SubtleCrypto.sign",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/sign",
   "sourceSnippet": "The sign() method generates a digital signature.",
   "source2": "OWASP — Webhook security",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Webhook_Security_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "pembayaran-abaikan-callback-duplikat",
 "langs": {
  "id": {
   "title": "Cara Abaikan Callback Pembayaran yang Datang Dua Kali",
   "desc": "Tata cara membuat callback pembayaran Clincoo idempoten supaya event yang sama tidak menandai lunas dua kali atau mengirim email ganda.",
   "content": "<p class=\"mb-4\">Gateway sering mengirim event yang sama jika jawaban Anda lambat. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan id event yang sudah diproses sebelum mengubah order.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kunci pada id event</h2><p class=\"mb-4\">Jika id event sudah ada, jawab 200 dan berhenti. Jangan menambah saldo atau mengirim email lagi. Status akhir tetap lunas satu kali.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis jejak sesudah sukses</h2><p class=\"mb-4\">Catat id event hanya setelah penyimpanan order berhasil, atau pakai transaksi yang mengunci baris. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan dua permintaan berurutan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bedakan event lain</h2><p class=\"mb-4\">Event gagal dan event lunas punya id berbeda. Pola ini dirangkum di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTTP response status codes",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
   "sourceSnippet": "200 OK means the request succeeded.",
   "source2": "Stripe — Idempotent requests",
   "source2Url": "https://docs.stripe.com/api/idempotent_requests",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Ignore a Duplicate Payment Callback",
   "desc": "How to make a Clincoo payment callback idempotent so the same event does not mark paid twice or send a second email.",
   "content": "<p class=\"mb-4\">Gateways often resend the same event if your response is slow. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> store the event id you already processed before changing the order.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Key on the event id</h2><p class=\"mb-4\">If the event id already exists, respond 200 and stop. Do not add balance or send another email. The final status stays paid once.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write the trace after success</h2><p class=\"mb-4\">Record the event id only after the order save succeeds, or use a transaction that locks the row. Test in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> with two requests in a row.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep other events distinct</h2><p class=\"mb-4\">A failed event and a paid event have different ids. The pattern is summarized on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTTP response status codes",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
   "sourceSnippet": "200 OK means the request succeeded.",
   "source2": "Stripe — Idempotent requests",
   "source2Url": "https://docs.stripe.com/api/idempotent_requests",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
}
  ];
  extra.forEach(function (article) {
    var exists = list.some(function (item) { return item.id === article.id; });
    if (!exists) list.push(article);
  });
})();
