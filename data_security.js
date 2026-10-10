// Clincoo Docs — kategori Security (10 Oktober 2026, 10:00 WIB) — 12 artikel (tambah 5, 10 Oktober 2026, 16:00 WIB)
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
}
]
};
