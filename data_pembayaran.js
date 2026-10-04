// Clincoo Docs — kategori Pembayaran (5 Oktober 2026, WIB)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["pembayaran"] = {
 "names": {
  "id": "Pembayaran",
  "en": "Payments"
 },
 "articles": [
{
 "id": "pembayaran-tampilkan-nominal-dan-mata-uang",
 "langs": {
  "id": {
   "title": "Cara Tampilkan Nominal dan Mata Uang yang Konsisten",
   "desc": "Tata cara menampilkan nominal pembayaran Clincoo dalam satuan terkecil yang sama di tombol, ringkasan, dan webhook supaya pembeli tidak melihat angka yang bergeser.",
   "content": "<p class=\"mb-4\">Nominal yang tampil di halaman dan nominal yang dikirim ke gateway harus satu satuan. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan harga dalam integer sen atau rupiah utuh, lalu format hanya saat digambar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan format dua kali</h2><p class=\"mb-4\">Kalau API minta rupiah utuh, jangan kali 100 lagi di klien. Kalau API minta sen, jangan kirim angka yang sudah berformat ribuan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Samakan label mata uang</h2><p class=\"mb-4\">Tombol bayar, ringkasan order, dan email memakai kode yang sama, misalnya IDR. Cek pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> di lebar ponsel supaya simbol tidak terpotong.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat contoh payload</h2><p class=\"mb-4\">Simpan satu payload sukses di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> agar tim tidak menebak ulang satuan saat menambah metode bayar.</p>",
   "source": "MDN — Intl.NumberFormat",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat",
   "sourceSnippet": "The Intl.NumberFormat object enables language-sensitive number formatting.",
   "source2": "Stripe — Currency amounts",
   "source2Url": "https://docs.stripe.com/currencies",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Show Amount and Currency Consistently",
   "desc": "How to show a Clincoo payment amount in the same minor unit on the button, the summary, and the webhook so buyers do not see a shifted number.",
   "content": "<p class=\"mb-4\">The amount on the page and the amount sent to the gateway must share one unit. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> store the price as an integer of cents or whole rupiah, then format only when painting the UI.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not format twice</h2><p class=\"mb-4\">If the API wants whole rupiah, do not multiply by 100 again on the client. If the API wants cents, do not send a number already grouped with thousands separators.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep the currency label the same</h2><p class=\"mb-4\">The pay button, the order summary, and the email use the same code, for example IDR. Check the preview on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> at phone width so the symbol is not clipped.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep a sample payload</h2><p class=\"mb-4\">Store one successful payload on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the team does not guess the unit again when a new method is added.</p>",
   "source": "MDN — Intl.NumberFormat",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat",
   "sourceSnippet": "The Intl.NumberFormat object enables language-sensitive number formatting.",
   "source2": "Stripe — Currency amounts",
   "source2Url": "https://docs.stripe.com/currencies",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "pembayaran-tangani-qris-kedaluwarsa",
 "langs": {
  "id": {
   "title": "Cara Tangani QRIS yang Kedaluwarsa",
   "desc": "Tata cara mendeteksi QRIS Clincoo yang lewat batas waktu, menyembunyikan kode lama, dan membuat tagihan baru tanpa menimpa order yang masih tertunda.",
   "content": "<p class=\"mb-4\">QRIS punya masa hidup. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan waktu kedaluwarsa bersama id tagihan, lalu bandingkan dengan jam perangkat hanya sebagai petunjuk, bukan sumber kebenaran.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tanya status sebelum buat ulang</h2><p class=\"mb-4\">Sebelum menerbitkan kode baru, minta status tagihan lama. Kalau sudah sukses, jangan buat tagihan kedua.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sembunyikan gambar lama</h2><p class=\"mb-4\">Ganti gambar QR dengan pesan singkat dan tombol buat kode baru. Uji alurnya di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan memajukan jam sandbox jika gateway menyediakan mode uji.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan pakai ulang id yang sama</h2><p class=\"mb-4\">Tagihan baru butuh idempotency key baru. Catat pasangan id lama dan baru di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya rekonsiliasi tidak mencampur dua pembayaran.</p>",
   "source": "MDN — Date",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
   "sourceSnippet": "JavaScript Date objects represent a single moment in time in a platform-independent format.",
   "source2": "Bank Indonesia — QRIS",
   "source2Url": "https://www.bi.go.id/id/fungsi-utama/sistem-pembayaran/ritel/kanal-layanan/qris/default.aspx",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Handle an Expired QRIS Code",
   "desc": "How to detect a Clincoo QRIS code past its deadline, hide the old code, and create a new charge without overwriting an order that is still pending.",
   "content": "<p class=\"mb-4\">A QRIS code has a lifetime. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> store the expiry with the charge id, then compare it with the device clock only as a hint, not the source of truth.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ask for status before creating another</h2><p class=\"mb-4\">Before issuing a new code, request the old charge status. If it is already successful, do not create a second charge.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hide the old image</h2><p class=\"mb-4\">Replace the QR image with a short message and a button to create a new code. Test the flow on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> by advancing the sandbox clock if the gateway offers a test mode.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not reuse the same id</h2><p class=\"mb-4\">A new charge needs a new idempotency key. Note the old and new id pair on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so reconciliation does not mix two payments.</p>",
   "source": "MDN — Date",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
   "sourceSnippet": "JavaScript Date objects represent a single moment in time in a platform-independent format.",
   "source2": "Bank Indonesia — QRIS",
   "source2Url": "https://www.bi.go.id/id/fungsi-utama/sistem-pembayaran/ritel/kanal-layanan/qris/default.aspx",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "pembayaran-simpan-order-id-yang-bisa-dilacak",
 "langs": {
  "id": {
   "title": "Cara Simpan Order ID yang Bisa Dilacak",
   "desc": "Tata cara memberi tiap checkout Clincoo order id yang stabil, menampilkannya ke pembeli, dan mengirimkannya di webhook supaya dukungan bisa mencari satu transaksi.",
   "content": "<p class=\"mb-4\">Order id adalah jangkar. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat id sebelum memanggil gateway, simpan di basis data, lalu kirim sebagai referensi merchant.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tampilkan di halaman terima kasih</h2><p class=\"mb-4\">Pembeli harus bisa menyalin id. Jangan hanya menaruhnya di query string yang hilang saat dibagikan ulang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Samakan dengan webhook</h2><p class=\"mb-4\">Handler webhook mencari order lewat id itu, bukan lewat nominal. Nominal bisa bentrok. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bahwa id di UI sama dengan id di log.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan pakai email sebagai kunci</h2><p class=\"mb-4\">Satu email bisa punya banyak order. Kunci utama tetap order id. Contoh format dicatat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Crypto: randomUUID",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID",
   "sourceSnippet": "The randomUUID() method of the Crypto interface is used to generate a v4 UUID using a cryptographically secure random number generator.",
   "source2": "OWASP — Transaction authorization",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Transaction_Authorization_Cheat_Sheet.html",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Store a Traceable Order ID",
   "desc": "How to give each Clincoo checkout a stable order id, show it to the buyer, and send it on the webhook so support can look up one transaction.",
   "content": "<p class=\"mb-4\">The order id is the anchor. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create the id before calling the gateway, store it, then send it as the merchant reference.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Show it on the thank-you page</h2><p class=\"mb-4\">The buyer must be able to copy the id. Do not leave it only in a query string that disappears when the page is shared again.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match the webhook</h2><p class=\"mb-4\">The webhook handler looks up the order by that id, not by amount. Amounts can collide. Test on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> that the id in the UI matches the id in the log.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not use email as the key</h2><p class=\"mb-4\">One email can have many orders. The primary key stays the order id. A sample format is noted on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Crypto: randomUUID",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID",
   "sourceSnippet": "The randomUUID() method of the Crypto interface is used to generate a v4 UUID using a cryptographically secure random number generator.",
   "source2": "OWASP — Transaction authorization",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Transaction_Authorization_Cheat_Sheet.html",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "pembayaran-uji-callback-gagal-lalu-ulang",
 "langs": {
  "id": {
   "title": "Cara Uji Callback Gagal lalu Ulangi dengan Aman",
   "desc": "Tata cara menolak callback pembayaran Clincoo yang tanda tangannya salah, mencatat percobaan, dan menerima ulang notifikasi yang sama tanpa mengubah status dua kali.",
   "content": "<p class=\"mb-4\">Gateway mengulang notifikasi jika server tidak menjawab 2xx. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> verifikasi tanda tangan dulu. Tolak badan yang rusak dengan 401, jangan dengan 200.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan id notifikasi</h2><p class=\"mb-4\">Kalau id notifikasi sudah diproses, jawab 200 tanpa menulis status lagi. Itu yang membuat ulang aman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan perbarui dari klien</h2><p class=\"mb-4\">Halaman terima kasih hanya menampilkan status yang sudah ditulis server. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan mengirim ulang payload sandbox.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat alasan gagal</h2><p class=\"mb-4\">Log singkat tanpa kunci rahasia cukup untuk dukungan. Contoh alur ulang ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTTP response status codes",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
   "sourceSnippet": "HTTP response status codes indicate whether a specific HTTP request has been successfully completed.",
   "source2": "OWASP — Webhook security",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Webhook_Security_Cheat_Sheet.html",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Test a Failed Callback and Retry Safely",
   "desc": "How to reject a Clincoo payment callback with a bad signature, log the attempt, and accept the same notification again without changing status twice.",
   "content": "<p class=\"mb-4\">The gateway retries a notification if the server does not answer 2xx. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> verify the signature first. Reject a broken body with 401, not with 200.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Store the notification id</h2><p class=\"mb-4\">If the notification id was already processed, answer 200 without writing status again. That is what makes the retry safe.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not update from the client</h2><p class=\"mb-4\">The thank-you page only shows status the server already wrote. Test on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> by resending a sandbox payload.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Log the failure reason</h2><p class=\"mb-4\">A short log without secrets is enough for support. A sample retry flow lives on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTTP response status codes",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
   "sourceSnippet": "HTTP response status codes indicate whether a specific HTTP request has been successfully completed.",
   "source2": "OWASP — Webhook security",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Webhook_Security_Cheat_Sheet.html",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "pembayaran-sembunyikan-tombol-setelah-sukses",
 "langs": {
  "id": {
   "title": "Cara Sembunyikan Tombol Bayar setelah Sukses",
   "desc": "Tata cara mengganti tombol bayar Clincoo dengan status lunas setelah webhook sukses, termasuk saat pembeli membuka kembali tab lama.",
   "content": "<p class=\"mb-4\">Tombol yang tetap aktif setelah lunas mengundang pembayaran kedua. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> baca status order saat halaman dimuat, jangan hanya mengandalkan klik terakhir.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Disable selama permintaan berjalan</h2><p class=\"mb-4\">Saat checkout dikirim, nonaktifkan tombol dan tunjukkan teks memproses. Aktifkan lagi hanya jika permintaan gagal sebelum tagihan terbuat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Muat ulang status dari server</h2><p class=\"mb-4\">Tab lama harus memanggil endpoint status, bukan localStorage. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan dua tab: satu selesai bayar, satu masih menampilkan tombol.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pesan yang bisa dibaca pembaca layar</h2><p class=\"mb-4\">Ganti tombol dengan teks status di elemen yang sama alurnya, plus aria-live sopan. Pola ini dicatat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — button disabled",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#disabled",
   "sourceSnippet": "The disabled attribute prevents the user from interacting with the button.",
   "source2": "W3C WAI — Status messages",
   "source2Url": "https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Hide the Pay Button after Success",
   "desc": "How to replace the Clincoo pay button with a paid status after a successful webhook, including when the buyer reopens an old tab.",
   "content": "<p class=\"mb-4\">A button that stays active after payment invites a second charge. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> read the order status when the page loads, do not rely only on the last click.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Disable while the request runs</h2><p class=\"mb-4\">When checkout is submitted, disable the button and show a processing label. Enable it again only if the request fails before a charge exists.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reload status from the server</h2><p class=\"mb-4\">An old tab must call the status endpoint, not localStorage. Test on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> with two tabs: one finished paying, one still showing the button.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">A message screen readers can hear</h2><p class=\"mb-4\">Replace the button with status text in the same flow, plus a polite aria-live region. This pattern is noted on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — button disabled",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#disabled",
   "sourceSnippet": "The disabled attribute prevents the user from interacting with the button.",
   "source2": "W3C WAI — Status messages",
   "source2Url": "https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
