// Clincoo Docs — kategori Z-Index (7 Oktober 2026, WIB) — 8 artikel
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
,
{
 "id": "zindex-transform-mengurung-overlay",
 "langs": {
  "id":   {
   "title": "Cara Temukan transform yang Mengurung Overlay",
   "desc": "Tata cara melepas dropdown Clincoo yang tertahan parent dengan transform, tanpa menaikkan z-index jadi 9999.",
   "content": "<p class=\"mb-4\">Dropdown sudah memakai token --z-dropdown tetapi tetap terpotong di dalam kartu. DevTools menunjukkan parent punya transform: translateY(0) dari animasi masuk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek pemicu di editor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih parent overlay, lalu panel Computed. transform selain none, filter, atau perspective membuat stacking context. Anak tidak bisa menimpa saudara parent meski z-index-nya lebih besar. Pindahkan menu ke akhir body, atau ganti animasi parent ke opacity saja.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka kartu yang beranimasi, lalu dropdown di dalamnya. Menu harus menutupi kartu sebelah. Catat properti pemicu di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum minta AI menulis z-index baru.</p>",
   "source": "MDN — Stacking context",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "sourceSnippet": "A stacking context is formed by any element with a transform value other than none.",
   "source2": "MDN — transform",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Find a transform That Traps an Overlay",
   "desc": "How to free a Clincoo dropdown trapped by a parent transform without raising z-index to 9999.",
   "content": "<p class=\"mb-4\">The dropdown already uses the --z-dropdown token but is still clipped inside the card. DevTools shows the parent has transform: translateY(0) from an entrance animation.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the trigger in the editor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> select the overlay parent, then the Computed panel. A transform other than none, a filter, or perspective creates a stacking context. The child cannot cover the parent siblings even with a higher z-index. Move the menu to the end of body, or change the parent animation to opacity only.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open an animated card, then the dropdown inside it. The menu should cover the neighboring card. Record the triggering property on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before asking AI to write a new z-index.</p>",
   "source": "MDN — Stacking context",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "sourceSnippet": "A stacking context is formed by any element with a transform value other than none.",
   "source2": "MDN — transform",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "zindex-static-mengabaikan-angka",
 "langs": {
  "id":   {
   "title": "Cara Perbaiki z-index yang Diabaikan pada static",
   "desc": "Tata cara membuat z-index Clincoo berlaku dengan position selain static, tanpa mengubah seluruh layout.",
   "content": "<p class=\"mb-4\">Badge sudah z-index: 20 tetapi tetap di bawah gambar. Di panel Styles, position masih static, jadi z-index tidak ikut dihitung.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri position di editor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> setel position: relative pada elemen yang perlu naik, lalu z-index: var(--z-dropdown). Jangan setel position: absolute jika elemen harus tetap di alur dokumen. Cek juga parent: isolation atau transform bisa tetap mengurungnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bandingkan badge sebelum dan sesudah relative. Badge harus menimpa gambar di kartu yang sama. Catat pasangan position dan token di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — z-index",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
   "sourceSnippet": "For a positioned box, the z-index property specifies the stack level.",
   "source2": "MDN — position",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Fix z-index Ignored on position static",
   "desc": "How to make a Clincoo z-index apply by using a position other than static, without restyling the whole layout.",
   "content": "<p class=\"mb-4\">The badge already has z-index: 20 but still sits under the image. In the Styles panel, position is still static, so z-index is not applied.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set position in the editor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set position: relative on the element that needs to rise, then z-index: var(--z-dropdown). Do not use position: absolute if the element should stay in document flow. Also check the parent: isolation or a transform can still trap it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> compare the badge before and after relative. The badge should cover the image in the same card. Record the position and token pair on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — z-index",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
   "sourceSnippet": "For a positioned box, the z-index property specifies the stack level.",
   "source2": "MDN — position",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "zindex-toast-di-atas-modal",
 "langs": {
  "id":   {
   "title": "Cara Jaga Toast Tetap di Atas Modal",
   "desc": "Tata cara menata urutan toast, modal, dan dropdown Clincoo dengan token, bukan angka dadakan.",
   "content": "<p class=\"mb-4\">Toast sukses muncul di belakang dialog konfirmasi. Pengguna tidak melihat pesan, lalu mengira simpan gagal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Urutkan token di editor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tetapkan --z-dropdown: 10, --z-modal: 30, --z-toast: 40. Pasang token itu pada container portal, bukan pada tiap item. Toast dan modal harus saudara di akhir body, keduanya position: fixed. Jangan memberi toast angka lebih kecil hanya karena tampil belakangan di HTML.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka modal lalu picu toast. Toast harus menutupi dialog dan tetap bisa ditutup keyboard. Catat urutan token di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — z-index",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
   "sourceSnippet": "The z-index property sets the z-order of a positioned element and its descendants or flex items.",
   "source2": "MDN — position",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Keep a Toast Above the Modal",
   "desc": "How to order Clincoo toasts, modals, and dropdowns with tokens instead of one-off numbers.",
   "content": "<p class=\"mb-4\">The success toast appears behind the confirm dialog. The user never sees the message and assumes save failed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Order the tokens in the editor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set --z-dropdown: 10, --z-modal: 30, --z-toast: 40. Put those tokens on the portal container, not on each item. Toast and modal should be siblings at the end of body, both position: fixed. Do not give the toast a smaller number just because it appears later in HTML.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open a modal, then trigger a toast. The toast should cover the dialog and still close from the keyboard. Record the token order on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — z-index",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
   "sourceSnippet": "The z-index property sets the z-order of a positioned element and its descendants or flex items.",
   "source2": "MDN — position",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "zindex-negatif-untuk-dekorasi",
 "langs": {
  "id":   {
   "title": "Cara Pakai z-index Negatif untuk Dekorasi",
   "desc": "Tata cara menaruh pola latar Clincoo di belakang konten dengan z-index negatif tanpa menelan klik.",
   "content": "<p class=\"mb-4\">Blob dekorasi menutupi tombol karena z-index-nya 0 dan datang belakangan di DOM. Menurunkan opacity tidak mengembalikan klik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Turunkan dekorasi di editor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri pembungkus position: relative dan z-index: 0. Dekorasi memakai position: absolute dan z-index: -1, plus pointer-events: none. Jangan taruh z-index negatif pada elemen yang perlu fokus keyboard. Jika parent membuat stacking context, negatif hanya berlaku di dalam parent itu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> klik tombol yang berimpit dengan blob. Klik dan Tab harus mengenai tombol, bukan pola. Catat pasangan token di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — z-index",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
   "sourceSnippet": "Negative values place the element behind elements with a stack level of 0 or auto.",
   "source2": "MDN — pointer-events",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Use a Negative z-index for Decoration",
   "desc": "How to place a Clincoo background pattern behind content with a negative z-index without swallowing clicks.",
   "content": "<p class=\"mb-4\">A decorative blob covers the button because its z-index is 0 and it comes later in the DOM. Lowering opacity does not restore the click.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lower the decoration in the editor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> give the wrapper position: relative and z-index: 0. The decoration uses position: absolute and z-index: -1, plus pointer-events: none. Do not put a negative z-index on an element that needs keyboard focus. If the parent creates a stacking context, the negative value only applies inside that parent.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> click the button that overlaps the blob. Click and Tab should hit the button, not the pattern. Record the token pair on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — z-index",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
   "sourceSnippet": "Negative values place the element behind elements with a stack level of 0 or auto.",
   "source2": "MDN — pointer-events",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "zindex-isolation-tanpa-menelan-menu",
 "langs": {
  "id":   {
   "title": "Cara Pakai isolation Tanpa Menelan Menu",
   "desc": "Tata cara memakai isolation: isolate di kartu Clincoo tanpa mengurung dropdown yang harus keluar kartu.",
   "content": "<p class=\"mb-4\">isolation: isolate merapikan bayangan kartu, tetapi dropdown di dalam kartu tidak lagi menimpa kartu sebelah. Angka z-index anak jadi tidak berarti di luar konteks itu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pisahkan menu di editor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> biarkan isolate pada kartu yang hanya berisi dekorasi. Portal dropdown ke body dan beri z-index: var(--z-dropdown). Jangan menaruh isolate pada section yang memuat menu, modal, atau toast. Jika AI menyarankan isolate di root, tolak sampai overlay diuji.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka dua kartu bersebelahan lalu menu kartu kiri. Menu harus menutupi kartu kanan. Catat keputusan portal di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — isolation",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/isolation",
   "sourceSnippet": "The isolation property determines whether an element must create a new stacking context.",
   "source2": "MDN — Stacking context",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Use isolation Without Swallowing a Menu",
   "desc": "How to use isolation: isolate on a Clincoo card without trapping a dropdown that must leave the card.",
   "content": "<p class=\"mb-4\">isolation: isolate tidies the card shadow, but the dropdown inside the card no longer covers the next card. The child z-index no longer means anything outside that context.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Split the menu in the editor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> keep isolate on cards that only hold decoration. Portal the dropdown to body and give it z-index: var(--z-dropdown). Do not put isolate on a section that contains a menu, modal, or toast. If AI suggests isolate on the root, refuse until the overlay is tested.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open two neighboring cards, then the left card menu. The menu should cover the right card. Record the portal decision on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — isolation",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/isolation",
   "sourceSnippet": "The isolation property determines whether an element must create a new stacking context.",
   "source2": "MDN — Stacking context",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
