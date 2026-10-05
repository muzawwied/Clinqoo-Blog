// Clincoo Docs — kategori Fokus (6 Oktober 2026, 04:00 WIB — 2 artikel)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["fokus"] = {
 "names": { "id": "Fokus", "en": "Focus" },
 "articles": [
{
 "id": "fokus-focus-visible-bukan-outline-none",
 "langs": {
  "id": {
   "title": "Cara Pakai :focus-visible, Jangan outline: none",
   "desc": "Tata cara menjaga cincin fokus keyboard di Clincoo dengan :focus-visible, bukan menghapus outline.",
   "content": "<p class=\\\"mb-4\\\">outline: none membuat tombol tidak terlihat saat dinavigasi keyboard. Pengguna mouse tidak butuh cincin, pengguna keyboard butuh.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Ganti outline none dengan focus-visible</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> hapus outline: none pada tombol dan tautan. Beri :focus-visible dengan outline 2px solid dan offset 2px. Jangan mengandalkan hover sebagai satu-satunya penanda.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Uji dengan tombol Tab</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> tekan Tab sampai melewati menu. Cincin harus terlihat di setiap kontrol. Catat warna cincin di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a> agar kontrasnya cukup di latar terang dan gelap.</p>",
   "source": "MDN — :focus-visible",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible",
   "sourceSnippet": ":focus-visible matches when the browser decides a focus ring should be shown, usually for keyboard input.",
   "source2": "WCAG — Focus Visible",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use :focus-visible Instead of outline: none",
   "desc": "How to keep a Clincoo keyboard focus ring with :focus-visible instead of removing the outline.",
   "content": "<p class=\\\"mb-4\\\">outline: none hides the button when someone navigates with a keyboard. Mouse users do not need the ring; keyboard users do.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Replace outline none with focus-visible</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> remove outline: none on buttons and links. Add :focus-visible with a 2px solid outline and a 2px offset. Do not rely on hover as the only cue.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Test with Tab</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> press Tab through the menu. The ring should show on every control. Record the ring color on <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a> so contrast holds on light and dark backgrounds.</p>",
   "source": "MDN — :focus-visible",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible",
   "sourceSnippet": ":focus-visible matches when the browser decides a focus ring should be shown, usually for keyboard input.",
   "source2": "WCAG — Focus Visible",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "fokus-skip-link-ke-konten-utama",
 "langs": {
  "id": {
   "title": "Cara Tambah Skip Link ke Konten Utama",
   "desc": "Tata cara menambah tautan lewati ke konten utama di halaman Clincoo supaya keyboard tidak mengulang seluruh navigasi.",
   "content": "<p class=\\\"mb-4\\\">Menu panjang memaksa pengguna keyboard menekan Tab berkali-kali sebelum sampai ke judul halaman.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Tautan pertama menuju main</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> letakkan tautan Lewati ke konten sebagai elemen pertama di body. Arahkan href ke id pada elemen main. Sembunyikan secara visual sampai fokus, jangan display:none, supaya tetap bisa di-Tab.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Uji urutan fokus</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> muat ulang halaman dan tekan Tab sekali. Tautan harus muncul, dan Enter harus memindahkan fokus ke konten. Catat id target di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Skip links",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a",
   "sourceSnippet": "A skip link is an anchor to the main region so keyboard users can bypass repeated navigation.",
   "source2": "WCAG — Bypass Blocks",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Add a Skip Link to the Main Content",
   "desc": "How to add a skip link to the main content on a Clincoo page so the keyboard does not repeat the whole navigation.",
   "content": "<p class=\\\"mb-4\\\">A long menu forces a keyboard user to press Tab many times before reaching the page heading.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">First link points at main</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> place a Skip to content link as the first element in the body. Point href at the id on the main element. Hide it visually until focus; do not use display:none, or it cannot be tabbed.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Test the focus order</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> reload and press Tab once. The link should appear, and Enter should move focus to the content. Record the target id on <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Skip links",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a",
   "sourceSnippet": "A skip link is an anchor to the main region so keyboard users can bypass repeated navigation.",
   "source2": "WCAG — Bypass Blocks",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
