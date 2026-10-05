// Clincoo Docs — artikel tambahan Stack (6 Oktober 2026, 01:00 WIB)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.stack) return;
  var list = window.countryDataFiles.stack.articles;
  var extra = [
{
 "id": "stack-transform-membuat-context-baru",
 "langs": {
  "id":   {
   "title": "Cara Transform dan Opacity Membuat Stacking Context Baru",
   "desc": "Tata cara mengenali transform, opacity, dan filter yang diam-diam membuat stacking context di halaman Clincoo.",
   "content": "<p class=\"mb-4\">z-index pada anak tidak dibandingkan dengan elemen di luar induk jika induk sudah membentuk stacking context baru.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cari properti pemicu</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka Computed pada induk kartu atau menu. Transform selain none, opacity di bawah 1, filter, will-change, dan contain tertentu membuat context. Catat properti itu sebelum menaikkan z-index anak.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pindahkan efek ke anak</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pratinjau hover. Kalau hanya kartu yang perlu scale, pasang transform pada kartu, bukan pada section yang membungkus dropdown. Tulis alasan singkat di catatan proyek di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya revisi berikutnya tidak mengulang 9999.</p>",
   "source": "MDN — Stacking context",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "sourceSnippet": "A stacking context is formed by properties such as opacity less than 1, transform, and filter.",
   "source2": "MDN — transform",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How Transform and Opacity Create a New Stacking Context",
   "desc": "How to spot transform, opacity, and filter values that quietly create a stacking context on a Clincoo page.",
   "content": "<p class=\"mb-4\">A child z-index is not compared with elements outside the parent once that parent has formed a new stacking context.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Find the triggering property</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open Computed on the card or menu parent. A transform other than none, opacity below 1, filter, will-change, and some contain values create a context. Note that property before raising the child z-index.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Move the effect onto the child</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview the hover. If only the card should scale, put the transform on the card, not on the section that wraps the dropdown. Write a short reason in the project note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next revision does not repeat 9999.</p>",
   "source": "MDN — Stacking context",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "sourceSnippet": "A stacking context is formed by properties such as opacity less than 1, transform, and filter.",
   "source2": "MDN — transform",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "stack-skala-z-index-terbatas",
 "langs": {
  "id":   {
   "title": "Cara Pakai Skala z-index yang Terbatas",
   "desc": "Tata cara mengganti z-index acak dengan skala kecil yang bisa diaudit di proyek Clincoo.",
   "content": "<p class=\"mb-4\">Angka 9999 tidak menjelaskan lapisan mana yang harus menang, dan angka itu cepat ditandingi salinan berikutnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tetapkan token lapisan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan variabel: dasar 0, dropdown 20, header 30, modal 40, toast 50. Pakai variabel itu di komponen, bukan angka baru di setiap file. Komentar satu baris cukup: untuk apa lapisan itu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tolak angka di luar skala</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> cari z-index di stylesheet. Nilai di luar token biasanya menandai context yang salah, bukan kebutuhan nyata. Catat pengecualian di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum deploy.</p>",
   "source": "MDN — z-index",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
   "sourceSnippet": "z-index only applies to positioned elements and compares values within the same stacking context.",
   "source2": "MDN — Using CSS custom properties",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Use a Limited z-index Scale",
   "desc": "How to replace random z-index values with a small auditable scale in a Clincoo project.",
   "content": "<p class=\"mb-4\">The number 9999 does not say which layer should win, and the next copy will outbid it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set layer tokens</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> store variables: base 0, dropdown 20, header 30, modal 40, toast 50. Use those variables in components, not a new number in every file. A one-line comment is enough: what the layer is for.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reject numbers outside the scale</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> search z-index in the stylesheet. A value outside the tokens usually marks a wrong context, not a real need. Record the exception on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before deploy.</p>",
   "source": "MDN — z-index",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
   "sourceSnippet": "z-index only applies to positioned elements and compares values within the same stacking context.",
   "source2": "MDN — Using CSS custom properties",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "stack-fixed-di-dalam-induk-transform",
 "langs": {
  "id":   {
   "title": "Cara Perbaiki position fixed yang Terjebak di Induk Transform",
   "desc": "Tata cara mengembalikan elemen fixed Clincoo ke viewport saat induk memakai transform atau filter.",
   "content": "<p class=\"mb-4\">position: fixed menempel ke viewport hanya jika tidak ada induk yang menjadi containing block lewat transform, filter, atau contain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Naikkan elemen keluar dari efek</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pindahkan modal atau toast ke akhir body, di luar section yang dianimasikan. Biarkan transform pada kartu, bukan pada pembungkus seluruh halaman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji gulir dan zoom</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir halaman lalu buka panel. Panel harus tetap di viewport, bukan ikut kartu. Jika masih ikut, cek will-change dan filter pada induk. Simpan cuplikan Computed di catatan <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — position",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
   "sourceSnippet": "A transformed ancestor can become the containing block for a fixed element.",
   "source2": "MDN — containing block",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Fix position:fixed Trapped in a Transformed Parent",
   "desc": "How to return a Clincoo fixed element to the viewport when a parent uses transform or filter.",
   "content": "<p class=\"mb-4\">position: fixed sticks to the viewport only when no ancestor becomes the containing block through transform, filter, or contain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lift the element out of the effect</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> move the modal or toast to the end of body, outside the animated section. Keep the transform on the card, not on the wrapper of the whole page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test scroll and zoom</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll the page, then open the panel. The panel should stay in the viewport, not follow the card. If it still follows, check will-change and filter on the parent. Save the Computed snippet in a note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — position",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
   "sourceSnippet": "A transformed ancestor can become the containing block for a fixed element.",
   "source2": "MDN — containing block",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "stack-modal-di-atas-header-sticky",
 "langs": {
  "id":   {
   "title": "Cara Naikkan Modal di Atas Header Sticky",
   "desc": "Tata cara menaruh dialog Clincoo di atas header sticky tanpa menaikkan z-index seluruh halaman.",
   "content": "<p class=\"mb-4\">Header sticky yang menang dari modal biasanya berada di context lebih tinggi, atau modal terjebak di section dengan context rendah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu context untuk overlay</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> letakkan dialog di akar body. Beri z-index di atas token header, misalnya 40 lawan 30. Backdrop dan panel harus satu context supaya backdrop tidak menutup panel sendiri.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan naikkan header</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka modal saat header menempel. Header, termasuk bayangannya, harus tertutup backdrop. Kalau tidak, perbaiki lokasi dialog, bukan angka header. Dokumentasikan token di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — dialog element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
   "sourceSnippet": "The dialog element is in the top layer when shown with showModal, above other page content.",
   "source2": "MDN — z-index",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Place a Modal Above a Sticky Header",
   "desc": "How to put a Clincoo dialog above a sticky header without raising the z-index of the whole page.",
   "content": "<p class=\"mb-4\">A sticky header that beats a modal is usually in a higher context, or the modal is trapped in a section with a lower context.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One context for the overlay</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> place the dialog at the body root. Give it a z-index above the header token, for example 40 against 30. The backdrop and panel must share one context so the backdrop does not cover its own panel.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not raise the header</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the modal while the header is stuck. The header, including its shadow, should sit under the backdrop. If it does not, fix the dialog location, not the header number. Document the token on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — dialog element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
   "sourceSnippet": "The dialog element is in the top layer when shown with showModal, above other page content.",
   "source2": "MDN — z-index",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "stack-cek-layers-di-devtools",
 "langs": {
  "id":   {
   "title": "Cara Cek Stacking Context di DevTools",
   "desc": "Tata cara memakai panel Layers dan Computed Clincoo untuk melihat context mana yang menutup elemen.",
   "content": "<p class=\"mb-4\">Menaikkan z-index tanpa melihat context hanya mengulang gejala. Panel Layers menunjukkan kelompok mana yang benar-benar di depan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan dua elemen</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih elemen yang kalah, lalu induknya, di panel Layers. Catat context yang berbeda. Di Computed, centang z-index, position, opacity, dan transform pada setiap induk sampai body.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ubah satu hal lalu muat ulang</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ubah satu properti pemicu, simpan, dan buka ulang menu. Jangan ubah tiga z-index sekaligus. Tulis hasil cek di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> agar orang berikutnya tidak mengulang tebakan.</p>",
   "source": "Chrome Developers — Inspect layers",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/reference#layers",
   "sourceSnippet": "The Layers panel shows how the page is composited and which elements form layers.",
   "source2": "MDN — Stacking context",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Inspect a Stacking Context in DevTools",
   "desc": "How to use the Clincoo Layers and Computed panels to see which context covers an element.",
   "content": "<p class=\"mb-4\">Raising z-index without looking at the context only repeats the symptom. The Layers panel shows which group is actually in front.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare two elements</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> select the losing element, then its parent, in the Layers panel. Note the different contexts. In Computed, check z-index, position, opacity, and transform on each ancestor up to body.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Change one thing, then reload</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> change one triggering property, save, and reopen the menu. Do not change three z-index values at once. Write the check result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next person does not repeat the guess.</p>",
   "source": "Chrome Developers — Inspect layers",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/reference#layers",
   "sourceSnippet": "The Layers panel shows how the page is composited and which elements form layers.",
   "source2": "MDN — Stacking context",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
];
  for (var i = 0; i < extra.length; i++) list.push(extra[i]);
})();
