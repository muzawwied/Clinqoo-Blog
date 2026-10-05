// Clincoo Docs — kategori Stack (5 Oktober 2026, 23:00 WIB) — 3 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["stack"] = {
 "names": { "id": "Stack", "en": "Stack" },
 "articles": [
{
 "id": "stack-debug-z-index-yang-kalah",
 "langs": {
  "id":   {
   "title": "Cara Debug z-index yang Kalah dari Elemen Lain",
   "desc": "Tata cara melacak stacking context di Clincoo saat dropdown kalah dari kartu, tanpa menaikkan z-index secara acak.",
   "content": "<p class=\"mb-4\">z-index: 9999 tidak menang jika induknya sudah membentuk stacking context yang lebih rendah dari elemen lain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Naik ke induk, jangan hanya ke anak</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka panel Layers atau Computed. Cek induk yang punya transform, opacity di bawah 1, filter, atau z-index. Itu context baru. Naikkan context induk yang memang harus di depan, bukan angka pada menu saja.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan dua context</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka dropdown di samping header. Jika menu tetap di belakang, catat properti induk di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> lalu minta AI menjelaskan context-nya, bukan menulis ulang stylesheet.</p>",
   "source": "MDN — Stacking context",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "sourceSnippet": "A stacking context is a group of elements rendered together; z-index only compares elements in the same context.",
   "source2": "Chrome — Layers panel",
   "source2Url": "https://developer.chrome.com/docs/devtools/layers",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Debug a z-index That Loses to Another Element",
   "desc": "How to trace the stacking context in Clincoo when a dropdown loses to a card, without raising z-index at random.",
   "content": "<p class=\"mb-4\">z-index: 9999 does not win if the parent already formed a stacking context that sits below another element.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Climb to the parent, not only the child</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open the Layers or Computed panel. Check parents with transform, opacity below 1, filter, or z-index. Those start a new context. Raise the parent context that should be in front, not only the number on the menu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare the two contexts</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the dropdown beside the header. If the menu stays behind, record the parent properties on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> and ask an AI to explain the context, not to rewrite the stylesheet.</p>",
   "source": "MDN — Stacking context",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "sourceSnippet": "A stacking context is a group of elements rendered together; z-index only compares elements in the same context.",
   "source2": "Chrome — Layers panel",
   "source2Url": "https://developer.chrome.com/docs/devtools/layers",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "stack-isolasi-dengan-isolation",
 "langs": {
  "id":   {
   "title": "Cara Isolasi Stacking Context dengan isolation",
   "desc": "Tata cara memakai isolation: isolate di Clincoo supaya z-index komponen tidak bocor ke kartu atau modal di sebelahnya.",
   "content": "<p class=\"mb-4\">Menu di dalam kartu bisa naik di atas modal karena z-index-nya dibandingkan di context halaman, bukan di dalam kartu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Batasi context komponen</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan isolation: isolate pada kartu atau panel yang punya dropdown lokal. z-index di dalam kartu hanya bertarung dengan saudaranya. Modal halaman tetap di context yang lebih tinggi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji modal dan menu bersamaan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka menu kartu, lalu buka modal. Modal harus menutup menu. Catat selector isolation di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya komponen lain tidak menyalin z-index global.</p>",
   "source": "MDN — isolation",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/isolation",
   "sourceSnippet": "isolation: isolate creates a new stacking context so descendants do not compete outside the element.",
   "source2": "MDN — Stacking context",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Isolate a Stacking Context with isolation",
   "desc": "How to use isolation: isolate in Clincoo so a component z-index does not leak over a neighboring card or modal.",
   "content": "<p class=\"mb-4\">A menu inside a card can climb over a modal because its z-index is compared in the page context, not inside the card.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Limit the component context</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add isolation: isolate on the card or panel that owns a local dropdown. z-index inside the card only competes with its siblings. The page modal stays in a higher context.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test the modal and menu together</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the card menu, then open the modal. The modal should cover the menu. Record the isolation selector on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so other components do not copy a global z-index.</p>",
   "source": "MDN — isolation",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/isolation",
   "sourceSnippet": "isolation: isolate creates a new stacking context so descendants do not compete outside the element.",
   "source2": "MDN — Stacking context",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "stack-dropdown-jangan-tertutup-header",
 "langs": {
  "id":   {
   "title": "Cara Agar Dropdown Tidak Tertutup Header Sticky",
   "desc": "Tata cara menyusun header sticky dan dropdown Clincoo supaya menu tidak tenggelam di bawah bar atas.",
   "content": "<p class=\"mb-4\">Header sticky dengan z-index tinggi sering menutup dropdown yang dibuka dari konten di bawahnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri urutan context yang disengaja</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set header position: sticky dan z-index yang kecil, misalnya 20. Dropdown yang harus menutup header taruh di context yang sama atau lebih tinggi, dan jangan bungkus pemicunya dengan transform. Cek juga isolation pada section.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di tepi atas</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir sampai pemicu tepat di bawah header, lalu buka menu. Seluruh opsi harus bisa diklik. Catat angka z-index di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>, jangan salin 9999 dari contoh lama.</p>",
   "source": "MDN — position",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
   "sourceSnippet": "position: sticky keeps an element in flow and can create a stacking context when z-index is set.",
   "source2": "MDN — z-index",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Keep a Dropdown from Hiding Under a Sticky Header",
   "desc": "How to stack a Clincoo sticky header and dropdown so the menu does not sink under the top bar.",
   "content": "<p class=\"mb-4\">A sticky header with a high z-index often covers a dropdown opened from content below it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set an intentional context order</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set the header to position: sticky and a small z-index, such as 20. Put a dropdown that must cover the header in the same or a higher context, and do not wrap its trigger in transform. Also check isolation on the section.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test at the top edge</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll until the trigger sits just under the header, then open the menu. Every option should be clickable. Record the z-index on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> instead of copying 9999 from an old example.</p>",
   "source": "MDN — position",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
   "sourceSnippet": "position: sticky keeps an element in flow and can create a stacking context when z-index is set.",
   "source2": "MDN — z-index",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
