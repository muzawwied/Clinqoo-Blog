// Clincoo Docs — kategori Konsol (Oktober 2026)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["console"] = {
 "names": {
  "id": "Konsol",
  "en": "Console"
 },
 "articles": [
{
 "id": "console-baca-error-pertama-bukan-ikutannya",
 "langs": {
  "id": {
   "title": "Cara Baca Error Pertama di Konsol, Bukan yang Mengikutinya",
   "desc": "Tata cara menemukan error pertama di konsol browser saat halaman Clincoo gagal, lalu mengabaikan error ikutannya yang hanya muncul karena skrip di bawahnya tidak jalan.",
   "content": "<p class=\"mb-4\">Konsol sering menumpuk error setelah error pertama. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> gulir ke entri paling atas pada muatan yang gagal, bukan ke baris merah terakhir.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bersihkan konsol, lalu ulangi</h2><p class=\"mb-4\">Kosongkan konsol, muat ulang sekali, dan jangan klik dulu. Error yang muncul sebelum interaksi adalah kandidat pertama. Error setelah klik dicatat terpisah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Abaikan akibat, catat penyebab</h2><p class=\"mb-4\">Pesan 'X is not defined' di bawah sering akibat skrip di atas gagal di-parse. Salin pesan dan file:baris error pertama. Cek preview di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> setelah satu perbaikan saja.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan menempel seluruh log</h2><p class=\"mb-4\">Kirim error pertama plus satu stack. Log berulang hanya memperpanjang jawaban. Simpan pola ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console object provides access to the browser debugging console.",
   "source2": "Chrome Developers — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Read the First Console Error, Not the Cascade",
   "desc": "How to find the first browser console error when a Clincoo page fails, then ignore the cascade that only appears because later scripts never ran.",
   "content": "<p class=\"mb-4\">The console often stacks errors after the first one. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> scroll to the top entry of the failed load, not the last red line.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Clear the console, then repeat</h2><p class=\"mb-4\">Clear the console, reload once, and do not click yet. Errors that appear before interaction are the first candidates. Errors after a click are noted separately.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ignore the effect, record the cause</h2><p class=\"mb-4\">An 'X is not defined' message lower down is often because a script above failed to parse. Copy the message and file:line of the first error. Check the preview on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> after one fix only.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not paste the whole log</h2><p class=\"mb-4\">Send the first error plus one stack. Repeated logs only lengthen the answer. Keep this pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console object provides access to the browser debugging console.",
   "source2": "Chrome Developers — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
