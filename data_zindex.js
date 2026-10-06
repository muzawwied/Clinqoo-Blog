// Clincoo Docs — kategori Z-Index (7 Oktober 2026, WIB) — 3 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["zindex"] = {
 "names": { "id": "Z-Index", "en": "Z-Index" },
 "articles": [
{
 "id": "zindex-batasi-skala-bukan-angka-9999",
 "langs": {
  "id":   {
   "title": "Cara Batasi z-index ke Skala, Bukan 9999",
   "desc": "Tata cara mengganti z-index raksasa di Clincoo dengan skala pendek supaya overlay tidak saling menelan.",
   "content": "<p class=\"mb-4\">Modal yang kalah dari tooltip biasanya diatasi dengan z-index: 9999. Angka berikutnya jadi 99999, dan tidak ada yang ingat urutan aslinya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Skala di editor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tetapkan token: --z-base: 1; --z-dropdown: 10; --z-sticky: 20; --z-modal: 30; --z-toast: 40. Pakai z-index: var(--z-modal) pada dialog. Jangan menulis 9999 di komponen. Cek dulu apakah parent membuat stacking context.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka dropdown, header lengket, lalu modal. Modal harus di atas header, toast di atas modal. Catat skala di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum minta AI menaikkan angka.</p>",
   "source": "MDN — z-index",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
   "sourceSnippet": "The z-index property sets the z-order of a positioned element and its descendants or flex items.",
   "source2": "MDN — Stacking context",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Limit z-index to a Scale, Not 9999",
   "desc": "How to replace giant Clincoo z-index values with a short scale so overlays stop swallowing each other.",
   "content": "<p class=\"mb-4\">A modal that loses to a tooltip is usually fixed with z-index: 9999. The next fix becomes 99999, and nobody remembers the original order.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">A scale in the editor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set tokens: --z-base: 1; --z-dropdown: 10; --z-sticky: 20; --z-modal: 30; --z-toast: 40. Use z-index: var(--z-modal) on the dialog. Do not write 9999 on a component. Check first whether a parent creates a stacking context.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open a dropdown, the sticky header, then a modal. The modal should sit above the header and the toast above the modal. Record the scale on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before asking AI to raise the number.</p>",
   "source": "MDN — z-index",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
   "sourceSnippet": "The z-index property sets the z-order of a positioned element and its descendants or flex items.",
   "source2": "MDN — Stacking context",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "zindex-opacity-membuat-stacking-context",
 "langs": {
  "id":   {
   "title": "Cara Cek opacity yang Membuat Stacking Context",
   "desc": "Tata cara menemukan z-index Clincoo yang tidak mempan karena parent memakai opacity kurang dari 1.",
   "content": "<p class=\"mb-4\">Dropdown sudah z-index: 30 tetapi tetap di bawah kartu sebelah. Penyebab sering bukan angkanya, melainkan parent dengan opacity: 0.99 atau transform yang membuat stacking context baru.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Periksa parent di editor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka panel Computed. Jika parent punya opacity di bawah 1, transform selain none, filter, atau will-change, anak tidak bisa keluar dari konteks itu. Pindahkan overlay ke akhir body, atau hilangkan opacity parent. Jangan menaikkan z-index anak dulu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bandingkan sebelum dan sesudah opacity parent diubah ke 1. Dropdown harus menutupi saudara parent. Catat properti pemicu di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Stacking context",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "sourceSnippet": "A stacking context is formed by elements with opacity less than 1, among other properties.",
   "source2": "MDN — opacity",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/opacity",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Check opacity That Creates a Stacking Context",
   "desc": "How to find a Clincoo z-index that does nothing because a parent uses opacity less than 1.",
   "content": "<p class=\"mb-4\">A dropdown already has z-index: 30 but still sits under the neighboring card. The cause is often not the number, but a parent with opacity: 0.99 or a transform that creates a new stacking context.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Inspect the parent in the editor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open the Computed panel. If the parent has opacity below 1, a transform other than none, a filter, or will-change, the child cannot escape that context. Move the overlay to the end of body, or remove the parent opacity. Do not raise the child z-index first.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> compare before and after the parent opacity is set to 1. The dropdown should cover the parent's siblings. Record the triggering property on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Stacking context",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "sourceSnippet": "A stacking context is formed by elements with opacity less than 1, among other properties.",
   "source2": "MDN — opacity",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/opacity",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "zindex-overlay-tertutup-header",
 "langs": {
  "id":   {
   "title": "Cara Debug Overlay yang Tertutup Header",
   "desc": "Tata cara mengangkat menu Clincoo yang tertutup header lengket tanpa mengubah seluruh stylesheet.",
   "content": "<p class=\"mb-4\">Menu mobile terbuka tetapi separuh atasnya hilang di belakang header position: sticky. Menyalin z-index header ke menu tidak menolong jika keduanya berada di konteks berbeda.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan konteks di editor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pastikan header dan overlay berbagi parent yang sama, atau portal overlay ke body. Beri header z-index: var(--z-sticky) dan overlay z-index: var(--z-modal). Keduanya perlu position selain static. Jangan hanya menaikkan z-index menu di dalam section yang sudah ter-transform.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir lalu buka menu. Seluruh panel harus menutupi header dan tetap bisa ditutup keyboard. Catat pasangan token di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — position",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
   "sourceSnippet": "A positioned element is one whose computed position value is relative, absolute, fixed, or sticky.",
   "source2": "MDN — z-index",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Debug an Overlay Covered by the Header",
   "desc": "How to lift a Clincoo menu covered by a sticky header without rewriting the whole stylesheet.",
   "content": "<p class=\"mb-4\">The mobile menu opens but its top half disappears behind a position: sticky header. Copying the header z-index onto the menu does not help if they live in different contexts.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare contexts in the editor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> make the header and overlay share a parent, or portal the overlay to body. Give the header z-index: var(--z-sticky) and the overlay z-index: var(--z-modal). Both need a position other than static. Do not only raise the menu z-index inside a transformed section.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll, then open the menu. The whole panel should cover the header and still close from the keyboard. Record the token pair on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — position",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
   "sourceSnippet": "A positioned element is one whose computed position value is relative, absolute, fixed, or sticky.",
   "source2": "MDN — z-index",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
