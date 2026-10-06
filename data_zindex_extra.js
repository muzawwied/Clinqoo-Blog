// Clincoo Docs — tambah artikel Z-Index 9-12 (7 Oktober 2026, 06:00 WIB)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.zindex) return;
  var list = window.countryDataFiles.zindex.articles;
  var extra = [
{
 "id": "zindex-sticky-header-menutup-dropdown",
 "langs": {
  "id": {
   "title": "Cara Perbaiki Sticky Header yang Menutup Dropdown",
   "desc": "Tata cara menaikkan dropdown Clincoo di atas header sticky tanpa menaikkan z-index seluruh halaman.",
   "content": "<p class=\"mb-4\">Dropdown yang terbuka di bawah header sticky sering tertutup, lalu orang menaikkan z-index semua elemen.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Naikkan pembungkus, bukan halaman</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri header sticky z-index 20 dan pembungkus dropdown z-index 30. Jangan set z-index pada body. Cek di panel Layers bahwa dropdown dan header berada di stacking context yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji saat scroll</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll sampai header menempel, buka dropdown, lalu pastikan item pertama bisa diklik. Catat skala di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya angka berikutnya tidak meloncat ke 9999.</p>",
   "source": "MDN — z-index",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
   "sourceSnippet": "z-index only applies to positioned elements and is compared inside the same stacking context.",
   "source2": "MDN — position",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Fix a Sticky Header Covering a Dropdown",
   "desc": "How to lift a Clincoo dropdown above a sticky header without raising z-index for the whole page.",
   "content": "<p class=\"mb-4\">A dropdown under a sticky header is often covered, then someone raises z-index on every element.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Raise the wrapper, not the page</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> give the sticky header z-index 20 and the dropdown wrapper z-index 30. Do not set z-index on body. In the Layers pane, confirm the dropdown and header share a stacking context.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test while scrolled</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll until the header sticks, open the dropdown, and confirm the first item can be clicked. Record the scale on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next number does not jump to 9999.</p>",
   "source": "MDN — z-index",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
   "sourceSnippet": "z-index only applies to positioned elements and is compared inside the same stacking context.",
   "source2": "MDN — position",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "zindex-modal-di-dalam-overflow",
 "langs": {
  "id": {
   "title": "Cara Keluarkan Modal dari Kontainer overflow",
   "desc": "Tata cara memindahkan modal Clincoo keluar dari induk overflow agar z-index tidak tertahan.",
   "content": "<p class=\"mb-4\">Modal di dalam kartu dengan overflow: hidden tetap kalah meskipun z-index-nya besar, karena tertahan di stacking context induk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pindahkan ke akhir body</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> letakkan dialog di akhir body, bukan di dalam section yang punya overflow atau transform. Hapus z-index raksasa yang hanya menyembunyikan gejala.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek induk yang memotong</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka modal dari kartu, scroll isi halaman, dan pastikan backdrop menutup header. Jika masih terpotong, inspeksi overflow, filter, dan transform pada induk. Catat induk penyebab di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — overflow",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "sourceSnippet": "A value other than visible can make the box a scroll container and clip descendants.",
   "source2": "CSS stacking context",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Free a Modal Trapped in an overflow Container",
   "desc": "How to move a Clincoo modal out of an overflow parent so its z-index is no longer trapped.",
   "content": "<p class=\"mb-4\">A modal inside a card with overflow: hidden still loses even with a large z-index, because it is trapped in the parent stacking context.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Move it to the end of body</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> place the dialog at the end of body, not inside a section that has overflow or transform. Remove the giant z-index that only hides the symptom.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the clipping parent</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the modal from a card, scroll the page, and confirm the backdrop covers the header. If it is still clipped, inspect overflow, filter, and transform on parents. Note the parent on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — overflow",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "sourceSnippet": "A value other than visible can make the box a scroll container and clip descendants.",
   "source2": "CSS stacking context",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "zindex-bandingkan-computed-style",
 "langs": {
  "id": {
   "title": "Cara Bandingkan z-index Computed, Bukan Angka Sumber",
   "desc": "Tata cara membaca z-index computed di DevTools saat angka di stylesheet Clincoo kalah dari stacking context.",
   "content": "<p class=\"mb-4\">Angka z-index di stylesheet bisa kalah jika elemen lain membentuk stacking context baru. Yang dipakai browser adalah nilai computed di konteks itu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca computed, lalu induk</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih elemen yang kalah, buka Computed, dan catat z-index serta position. Naik ke induk sampai ketemu opacity di bawah 1, transform, atau filter. Jangan menaikkan angka sebelum induknya ketemu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Samakan konteks, baru bandingkan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bandingkan dua overlay hanya setelah keduanya sekonteks. Simpan temuan computed di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya sesi berikutnya tidak mengulang tebakan 9999.</p>",
   "source": "MDN — z-index",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
   "sourceSnippet": "The used z-index is resolved inside the element's stacking context, not against every other page.",
   "source2": "Chrome DevTools — Computed",
   "source2Url": "https://developer.chrome.com/docs/devtools/css/reference",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Compare Computed z-index, Not the Source Number",
   "desc": "How to read computed z-index in DevTools when a Clincoo stylesheet number loses to a stacking context.",
   "content": "<p class=\"mb-4\">A stylesheet z-index can lose if another element creates a new stacking context. The browser uses the computed value inside that context.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read computed, then the parent</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> select the losing element, open Computed, and note z-index and position. Walk up until you find opacity below 1, a transform, or a filter. Do not raise the number before the parent is found.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match the context, then compare</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> compare two overlays only after they share a context. Save the computed finding on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next session does not guess 9999 again.</p>",
   "source": "MDN — z-index",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
   "sourceSnippet": "The used z-index is resolved inside the element's stacking context, not against every other page.",
   "source2": "Chrome DevTools — Computed",
   "source2Url": "https://developer.chrome.com/docs/devtools/css/reference",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "zindex-will-change-layer-baru",
 "langs": {
  "id": {
   "title": "Cara Cek will-change yang Membuat Layer Baru",
   "desc": "Tata cara menemukan will-change di Clincoo yang membuat layer baru dan menelan menu.",
   "content": "<p class=\"mb-4\">will-change: transform pada kartu sering membuat layer baru. Menu di dalamnya tidak bisa naik di atas overlay di luar kartu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cari will-change yang tidak perlu</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> cari will-change pada kartu, header, dan tombol. Hapus yang tidak sedang dianimasikan. Jika animasi memang perlu, batasi will-change ke saat interaksi, lalu lepas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji menu setelah dihapus</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka menu kartu dan overlay halaman. Menu harus muncul utuh. Catat selector yang dihapus di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — will-change",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/will-change",
   "sourceSnippet": "will-change can create a stacking context; do not leave it on elements that are not about to change.",
   "source2": "MDN — stacking context",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Check will-change That Creates a New Layer",
   "desc": "How to find a Clincoo will-change that creates a new layer and swallows a menu.",
   "content": "<p class=\"mb-4\">will-change: transform on a card often creates a new layer. A menu inside it cannot rise above an overlay outside the card.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Find will-change that is not needed</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> search for will-change on cards, headers, and buttons. Remove any that are not animating. If an animation really needs it, limit will-change to the interaction, then drop it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Retest the menu after removal</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the card menu and the page overlay. The menu should appear whole. Record the selector you removed on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — will-change",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/will-change",
   "sourceSnippet": "will-change can create a stacking context; do not leave it on elements that are not about to change.",
   "source2": "MDN — stacking context",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
  ];
  extra.forEach(function (item) {
    if (!list.some(function (a) { return a.id === item.id; })) list.push(item);
  });
})();
