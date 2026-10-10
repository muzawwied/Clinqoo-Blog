// Clincoo Docs — kategori Security baru (10 Oktober 2026, 08:00 WIB) — 3 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["security"] = {
 "names": { "id": "Security", "en": "Security" },
 "articles": [
{
 "id": "security-hindari-xss-di-input-form",
 "langs": {
  "id": {
   "title": "Cara Hindari XSS di Input Form Clincoo",
   "desc": "Tata cara membersihkan input pengguna sebelum ditampilkan agar tidak mengeksekusi skrip.",
   "content": "<p class=\"mb-4\">Input form yang ditampilkan ulang tanpa sanitasi bisa menjalankan skrip orang lain di halaman Clincoo.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Escape sebelum render</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jangan masukkan nilai form langsung ke innerHTML. Pakai textContent atau library escape. Tolak karakter < > jika tidak perlu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan payload sederhana</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> masukkan <script>alert(1)</script> dan pastikan tampil sebagai teks. Catat hasil di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — XSS",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS",
   "sourceSnippet": "Cross-site scripting (XSS) lets an attacker inject client-side scripts into web pages viewed by other users.",
   "source2": "OWASP — XSS Prevention",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid XSS in a Clincoo Form Input",
   "desc": "How to sanitize user input before display so it cannot execute a script.",
   "content": "<p class=\"mb-4\">Form input that is re-rendered without sanitization can run someone else's script on a Clincoo page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Escape before render</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> do not put form values straight into innerHTML. Use textContent or an escape helper. Reject < > characters if they are not needed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test with a simple payload</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> enter <script>alert(1)</script> and confirm it appears as text. Record the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — XSS",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS",
   "sourceSnippet": "Cross-site scripting (XSS) lets an attacker inject client-side scripts into web pages viewed by other users.",
   "source2": "OWASP — XSS Prevention",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "security-validasi-input-client-dan-server",
 "langs": {
  "id": {
   "title": "Cara Validasi Input di Client dan Server",
   "desc": "Tata cara memeriksa data form Clincoo di kedua sisi supaya data buruk tidak masuk.",
   "content": "<p class=\"mb-4\">Validasi hanya di browser mudah dilewati. Server harus menolak data yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Aturan yang sama di dua tempat</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis batas panjang, pola email, dan tipe angka di form. Duplikasi aturan itu di endpoint yang menerima data.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tolak di server meski client lolos</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> kirim data yang melewati form tapi rusak (panjang berlebih). Server harus menolak. Catat kode status di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Client-side form validation",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation",
   "sourceSnippet": "Client-side validation improves UX; server-side validation is required for security.",
   "source2": "OWASP — Input Validation",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Validate Input on Client and Server",
   "desc": "How to check Clincoo form data on both sides so bad data cannot enter.",
   "content": "<p class=\"mb-4\">Validation only in the browser is easy to bypass. The server must reject the same data.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Same rules in both places</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write length limits, email pattern, and number type on the form. Duplicate those rules on the endpoint that receives the data.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reject on the server even if the client passed</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> send data that passes the form but is broken (too long). The server must reject it. Record the status code on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Client-side form validation",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation",
   "sourceSnippet": "Client-side validation improves UX; server-side validation is required for security.",
   "source2": "OWASP — Input Validation",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "security-jangan-simpan-rahasia-di-localstorage",
 "langs": {
  "id": {
   "title": "Cara Jangan Simpan Rahasia di localStorage",
   "desc": "Tata cara menyimpan token atau kunci Clincoo hanya di memori atau cookie HttpOnly, bukan localStorage.",
   "content": "<p class=\"mb-4\">localStorage bisa dibaca skrip apa pun di halaman. Token di sana mudah dicuri jika ada XSS.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai memori atau cookie aman</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jangan tulis token ke localStorage. Simpan di variabel sesi atau minta cookie HttpOnly dari server.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di DevTools</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka Application > Local Storage dan pastikan tidak ada kunci. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — localStorage",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
   "sourceSnippet": "localStorage is accessible to any script on the origin and should not hold secrets.",
   "source2": "OWASP — Session Management",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid Storing Secrets in localStorage",
   "desc": "How to keep a Clincoo token or key only in memory or an HttpOnly cookie, not localStorage.",
   "content": "<p class=\"mb-4\">localStorage can be read by any script on the page. A token there is easy to steal if XSS exists.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use memory or a safe cookie</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> do not write a token to localStorage. Keep it in a session variable or request an HttpOnly cookie from the server.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check in DevTools</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open Application > Local Storage and confirm no key is present. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — localStorage",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
   "sourceSnippet": "localStorage is accessible to any script on the origin and should not hold secrets.",
   "source2": "OWASP — Session Management",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
