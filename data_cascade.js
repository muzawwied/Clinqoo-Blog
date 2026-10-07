// Clincoo Docs — kategori Cascade (7 Oktober 2026, 14:00 WIB) — 5 artikel baru
// Clincoo Docs — tambah 5 artikel Cascade (7 Oktober 2026, 15:00 WIB)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["cascade"] = {
 "names": { "id": "Cascade", "en": "Cascade" },
 "articles": [
{
 "id": "cascade-urutkan-layer-reset-komponen-utilitas",
 "langs": {
  "id": {
   "title": "Cara Urutkan Layer Reset, Komponen, dan Utilitas",
   "desc": "Tata cara menyusun @layer reset, komponen, lalu utilitas supaya gaya Clincoo tidak saling menimpa diam-diam.",
   "content": "<p class=\"mb-4\">Tanpa urutan layer, reset dan kelas utilitas bisa kalah dari selektor komponen yang ditulis belakangan, meski niatnya sebaliknya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Deklarasikan urutan sekali</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis <code>@layer reset, components, utilities;</code> di berkas CSS paling awal. Urutan nama ini yang menang, bukan urutan berkas yang diimpor kemudian.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Masukkan aturan ke layer yang tepat</h2><p class=\"mb-4\">Reset margin dan box-sizing masuk ke <code>reset</code>. Kartu, form, dan navigasi masuk ke <code>components</code>. Kelas jarak dan warna masuk ke <code>utilities</code>. Cek di DevTools panel Cascade. Jika aturan tidak bernama layer, ia unlayered dan mengalahkan semua layer. Catat pengecualian di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum dipakai di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p>",
   "source": "MDN — @layer",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@layer",
   "sourceSnippet": "The @layer at-rule declares a cascade layer, and the order of layer names controls which rules win.",
   "source2": "CSS Cascading and Inheritance Level 5",
   "source2Url": "https://www.w3.org/TR/css-cascade-5/#layering",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Order Reset, Component, and Utility Layers",
   "desc": "How to order @layer reset, components, then utilities so Clincoo styles do not override each other silently.",
   "content": "<p class=\"mb-4\">Without a layer order, a reset or utility class can lose to a component selector that appears later, even when you meant the opposite.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Declare the order once</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write <code>@layer reset, components, utilities;</code> in the first CSS file. That name order wins, not the order of files imported later.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Put rules in the right layer</h2><p class=\"mb-4\">Margin and box-sizing resets go in <code>reset</code>. Cards, forms, and navigation go in <code>components</code>. Spacing and color classes go in <code>utilities</code>. Check the Cascade pane in DevTools. An unlayered rule beats every layer. Note exceptions on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before using them in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p>",
   "source": "MDN — @layer",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@layer",
   "sourceSnippet": "The @layer at-rule declares a cascade layer, and the order of layer names controls which rules win.",
   "source2": "CSS Cascading and Inheritance Level 5",
   "source2Url": "https://www.w3.org/TR/css-cascade-5/#layering",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cascade-debug-aturan-yang-kalah-spesifisitas",
 "langs": {
  "id": {
   "title": "Cara Debug Aturan CSS yang Kalah Spesifisitas",
   "desc": "Tata cara membaca spesifisitas di DevTools saat gaya Clincoo dicoret, tanpa menambah selektor secara acak.",
   "content": "<p class=\"mb-4\">Aturan yang dicoret di DevTools belum tentu salah file. Sering ia kalah karena spesifisitas, layer, atau urutan sumber.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca pemenang, bukan hanya yang dicoret</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih elemen, buka Computed, lalu klik properti yang salah. Panel Styles menampilkan pemenang di atas aturan yang dicoret. Catat jumlah ID, kelas, dan elemen, plus nama layer.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Perbaiki di layer yang sama</h2><p class=\"mb-4\">Jangan menambahkan ID hanya agar menang. Samakan layer, lalu rapikan selektor komponen. Jika pemenang berasal dari utilitas, pindahkan pengecualian ke layer utilitas dengan kelas yang eksplisit. Uji di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dan tulis temuan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Specificity",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",
   "sourceSnippet": "Specificity is the algorithm the browser uses to decide which CSS declaration wins when several rules match.",
   "source2": "Chrome DevTools — CSS overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/css",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug a CSS Rule That Loses on Specificity",
   "desc": "How to read specificity in DevTools when a Clincoo style is crossed out, without adding selectors at random.",
   "content": "<p class=\"mb-4\">A crossed-out rule in DevTools is not always the wrong file. It often loses on specificity, layer, or source order.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read the winner, not only the strike-through</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> select the element, open Computed, then click the wrong property. The Styles pane shows the winner above the crossed-out rule. Note ID, class, and element counts, plus the layer name.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Fix inside the same layer</h2><p class=\"mb-4\">Do not add an ID just to win. Match the layer, then simplify the component selector. If a utility won, put the exception in the utilities layer with an explicit class. Check the preview in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> and write the finding on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Specificity",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",
   "sourceSnippet": "Specificity is the algorithm the browser uses to decide which CSS declaration wins when several rules match.",
   "source2": "Chrome DevTools — CSS overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/css",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cascade-jangan-naikkan-spesifisitas-dengan-id",
 "langs": {
  "id": {
   "title": "Cara Hindari Menaikkan Spesifisitas dengan ID",
   "desc": "Tata cara menjaga selektor Clincoo di kelas, bukan ID, supaya perbaikan berikutnya tidak jadi perang spesifisitas.",
   "content": "<p class=\"mb-4\">Selektor ID mengalahkan hampir semua kelas. Satu perbaikan dengan ID memaksa perbaikan berikutnya memakai ID lagi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti ID gaya dengan kelas</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> biarkan <code>id</code> untuk jangkar dan label form. Gaya kartu pakai kelas seperti <code>.card</code>, bukan <code>#hero</code>. Jika ID sudah terpakai, jangan salin polanya ke komponen baru.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Turunkan, jangan balas</h2><p class=\"mb-4\">Saat dua gaya bentrok, turunkan selektor pemenang yang berlebih, bukan menaikkan yang kalah. Cek ulang di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Simpan contoh sebelum-sesudah di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> agar tim tidak mengulang ID untuk warna.</p>",
   "source": "MDN — Specificity",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",
   "sourceSnippet": "An ID selector has higher specificity than a class selector, attribute selector, or pseudo-class.",
   "source2": "CSS Cascading and Inheritance Level 5",
   "source2Url": "https://www.w3.org/TR/css-cascade-5/#specificity",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid Raising Specificity with IDs",
   "desc": "How to keep Clincoo selectors on classes, not IDs, so the next fix does not become a specificity fight.",
   "content": "<p class=\"mb-4\">An ID selector beats almost every class. One ID fix forces the next fix to use an ID too.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Replace style IDs with classes</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> keep <code>id</code> for anchors and form labels. Style a card with a class such as <code>.card</code>, not <code>#hero</code>. If an ID is already in use, do not copy that pattern into a new component.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lower the winner, do not retaliate</h2><p class=\"mb-4\">When two styles clash, lower the over-specific winner instead of raising the loser. Recheck the preview in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Keep a before-and-after note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the team does not repeat an ID for color.</p>",
   "source": "MDN — Specificity",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",
   "sourceSnippet": "An ID selector has higher specificity than a class selector, attribute selector, or pseudo-class.",
   "source2": "CSS Cascading and Inheritance Level 5",
   "source2Url": "https://www.w3.org/TR/css-cascade-5/#specificity",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cascade-bungkus-css-pihak-ketiga-di-layer",
 "langs": {
  "id": {
   "title": "Cara Bungkus CSS Pihak Ketiga di Satu Layer",
   "desc": "Tata cara memasukkan CSS vendor Clincoo ke layer rendah supaya tidak menimpa komponen sendiri.",
   "content": "<p class=\"mb-4\">CSS pihak ketiga yang tidak berlayer sering menang hanya karena diimpor belakangan, lalu merusak tombol dan form.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Impor ke layer vendor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> deklarasikan <code>@layer reset, vendor, components, utilities;</code> lalu impor dengan <code>@import url(\"vendor.css\") layer(vendor);</code>. Jangan salin isi vendor ke layer komponen.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji properti yang sering bentrok</h2><p class=\"mb-4\">Cek font, tombol, dan input di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Jika vendor memakai <code>!important</code>, catat properti itu dan lawan di layer yang sama atau lebih tinggi, bukan dengan ID. Ringkas keputusan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @import",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@import",
   "sourceSnippet": "The layer() function on @import assigns the imported stylesheet to a named cascade layer.",
   "source2": "CSS Cascading and Inheritance Level 5",
   "source2Url": "https://www.w3.org/TR/css-cascade-5/#layer-import",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Wrap Third-Party CSS in One Layer",
   "desc": "How to place Clincoo vendor CSS in a low layer so it does not override your own components.",
   "content": "<p class=\"mb-4\">Unlayered third-party CSS often wins only because it is imported later, then breaks buttons and forms.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Import into a vendor layer</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> declare <code>@layer reset, vendor, components, utilities;</code> then import with <code>@import url(\"vendor.css\") layer(vendor);</code>. Do not paste vendor rules into the components layer.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test properties that clash often</h2><p class=\"mb-4\">Check font, button, and input in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview. If the vendor uses <code>!important</code>, note that property and override it in the same or a higher layer, not with an ID. Summarize the decision on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @import",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@import",
   "sourceSnippet": "The layer() function on @import assigns the imported stylesheet to a named cascade layer.",
   "source2": "CSS Cascading and Inheritance Level 5",
   "source2Url": "https://www.w3.org/TR/css-cascade-5/#layer-import",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cascade-batas-important-di-layer-utilitas",
 "langs": {
  "id": {
   "title": "Cara Batasi !important di Layer Utilitas",
   "desc": "Tata cara memakai !important hanya pada kelas utilitas Clincoo, bukan pada komponen, supaya cascade tetap bisa dilacak.",
   "content": "<p class=\"mb-4\"><code>!important</code> di komponen membuat utilitas dan tema tidak bisa menimpa tanpa important lagi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Izinkan hanya di utilitas</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> batasi <code>!important</code> ke kelas seperti <code>.hidden</code> atau <code>.sr-only</code> di layer <code>utilities</code>. Komponen memakai spesifisitas biasa. Cari <code>!important</code> di panel Styles sebelum merilis.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti important komponen</h2><p class=\"mb-4\">Jika komponen sudah memakai important, pindahkan pengecualian ke kelas utilitas atau ke layer yang lebih tinggi tanpa important. Uji tombol, modal, dan form di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Dokumentasikan sisa important di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — !important",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/important",
   "sourceSnippet": "Using !important is a last resort; it reverses the normal cascade and makes later overrides harder.",
   "source2": "CSS Cascading and Inheritance Level 5",
   "source2Url": "https://www.w3.org/TR/css-cascade-5/#importance",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Limit !important to the Utilities Layer",
   "desc": "How to use !important only on Clincoo utility classes, not on components, so the cascade stays traceable.",
   "content": "<p class=\"mb-4\"><code>!important</code> on a component makes utilities and themes unable to override it without another important.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Allow it only on utilities</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> limit <code>!important</code> to classes such as <code>.hidden</code> or <code>.sr-only</code> in the <code>utilities</code> layer. Components use normal specificity. Search for <code>!important</code> in the Styles pane before release.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Replace component important</h2><p class=\"mb-4\">If a component already uses important, move the exception to a utility class or a higher layer without important. Test buttons, modals, and forms in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Document remaining important flags on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — !important",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/important",
   "sourceSnippet": "Using !important is a last resort; it reverses the normal cascade and makes later overrides harder.",
   "source2": "CSS Cascading and Inheritance Level 5",
   "source2Url": "https://www.w3.org/TR/css-cascade-5/#importance",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cascade-pakai-revert-layer-bukan-revert",
 "langs": {
  "id": {
   "title": "Cara Pakai revert-layer, Bukan revert",
   "desc": "Tata cara mengembalikan properti Clincoo ke hasil layer sebelumnya dengan revert-layer, bukan ke user agent.",
   "content": "<p class=\"mb-4\"><code>revert</code> mengembalikan properti sampai ke stylesheet user agent. Di komponen yang sudah berlayer, itu sering menghapus reset yang seharusnya tetap hidup.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pilih revert-layer di komponen</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis <code>margin: revert-layer;</code> di dalam <code>@layer components</code> jika kartu harus mewarisi reset, bukan margin browser. <code>revert</code> hanya untuk properti yang memang ingin kembali ke asal browser.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek pemenang di Computed</h2><p class=\"mb-4\">Pilih elemen di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, buka Computed, lalu lihat layer pemenang. Jika pemenangnya user agent, ganti ke <code>revert-layer</code>. Catat properti yang sengaja di-revert di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — revert-layer",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/revert-layer",
   "sourceSnippet": "The revert-layer keyword rolls back the cascade to the previous cascade layer.",
   "source2": "CSS Cascading and Inheritance Level 5",
   "source2Url": "https://www.w3.org/TR/css-cascade-5/#revert-layer",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use revert-layer Instead of revert",
   "desc": "How to roll a Clincoo property back to the previous layer with revert-layer, not to the user agent.",
   "content": "<p class=\"mb-4\"><code>revert</code> rolls a property back to the user-agent stylesheet. Inside a layered component, that often wipes a reset that should stay in effect.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Prefer revert-layer in components</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write <code>margin: revert-layer;</code> inside <code>@layer components</code> when a card should inherit the reset, not the browser margin. Use <code>revert</code> only for properties that should truly return to the browser origin.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the winner in Computed</h2><p class=\"mb-4\">Select the element in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview, open Computed, and read the winning layer. If the user agent won, switch to <code>revert-layer</code>. Note properties you intentionally revert on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — revert-layer",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/revert-layer",
   "sourceSnippet": "The revert-layer keyword rolls back the cascade to the previous cascade layer.",
   "source2": "CSS Cascading and Inheritance Level 5",
   "source2Url": "https://www.w3.org/TR/css-cascade-5/#revert-layer",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cascade-baca-asal-aturan-author-user-agent",
 "langs": {
  "id": {
   "title": "Cara Baca Asal Aturan Author dan User Agent",
   "desc": "Tata cara membedakan stylesheet Clincoo, user agent, dan user di DevTools saat gaya tampak datang dari browser.",
   "content": "<p class=\"mb-4\">Warna tautan atau margin body yang aneh sering berasal dari user agent, bukan dari berkas yang baru disimpan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lihat nama sumber</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih elemen, buka Styles, lalu baca label di kanan aturan. <code>user agent stylesheet</code> adalah bawaan browser. Aturan dari berkas proyek adalah author origin. Jangan menimpa user agent dengan ID jika reset di layer <code>reset</code> sudah cukup.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Samakan reset sebelum komponen</h2><p class=\"mb-4\">Letakkan reset margin dan warna tautan di layer paling rendah. Uji di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pada Chrome dan Firefox. Tulis pengecualian browser di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Cascade origin",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade",
   "sourceSnippet": "The cascade considers origin and importance before specificity and source order.",
   "source2": "CSS Cascading and Inheritance Level 5",
   "source2Url": "https://www.w3.org/TR/css-cascade-5/#cascade-origin",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Read Author vs User-Agent Origins",
   "desc": "How to tell Clincoo stylesheets, user agent, and user styles apart in DevTools when a style looks like it came from the browser.",
   "content": "<p class=\"mb-4\">An odd link color or body margin often comes from the user agent, not from the file you just saved.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read the source label</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> select the element, open Styles, and read the label beside the rule. <code>user agent stylesheet</code> is the browser default. A project file is author origin. Do not override the user agent with an ID if a reset in the <code>reset</code> layer is enough.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Put the reset before components</h2><p class=\"mb-4\">Place margin and link-color resets in the lowest layer. Check the preview in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> in Chrome and Firefox. Write browser exceptions on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Cascade origin",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade",
   "sourceSnippet": "The cascade considers origin and importance before specificity and source order.",
   "source2": "CSS Cascading and Inheritance Level 5",
   "source2Url": "https://www.w3.org/TR/css-cascade-5/#cascade-origin",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cascade-bedakan-gaya-inline-dan-stylesheet",
 "langs": {
  "id": {
   "title": "Cara Bedakan Gaya Inline dan Stylesheet",
   "desc": "Tata cara menemukan style atribut yang mengalahkan berkas CSS Clincoo, lalu memindahkannya ke kelas.",
   "content": "<p class=\"mb-4\">Atribut <code>style</code> punya spesifisitas tinggi di author origin dan sering menang atas kelas di stylesheet.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cari elemen dengan style</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> cari <code>style=</code> di HTML. Di DevTools, aturan inline tampil sebagai <code>element.style</code>. Pindahkan warna, lebar, dan jarak ke kelas di layer komponen atau utilitas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sisakan inline hanya untuk nilai dinamis</h2><p class=\"mb-4\">Tinggi yang dihitung dari data boleh tetap inline. Warna tema tidak. Uji di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> setelah kelas menang. Ringkas pengecualian di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Specificity",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",
   "sourceSnippet": "Declarations in a style attribute are treated as author-origin declarations with high specificity.",
   "source2": "CSS Cascading and Inheritance Level 5",
   "source2Url": "https://www.w3.org/TR/css-cascade-5/#style-attr",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Tell Inline Styles from Stylesheets",
   "desc": "How to find a style attribute that beats a Clincoo stylesheet, then move it onto a class.",
   "content": "<p class=\"mb-4\">A <code>style</code> attribute has high author specificity and often beats a class in a stylesheet.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Find elements with style</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> search HTML for <code>style=</code>. In DevTools, an inline rule shows as <code>element.style</code>. Move color, width, and spacing onto a class in the components or utilities layer.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep inline only for dynamic values</h2><p class=\"mb-4\">A height computed from data may stay inline. A theme color should not. Check the preview in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> after the class wins. Summarize exceptions on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Specificity",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",
   "sourceSnippet": "Declarations in a style attribute are treated as author-origin declarations with high specificity.",
   "source2": "CSS Cascading and Inheritance Level 5",
   "source2Url": "https://www.w3.org/TR/css-cascade-5/#style-attr",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cascade-samakan-spesifisitas-lalu-andalkan-urutan",
 "langs": {
  "id": {
   "title": "Cara Samakan Spesifisitas lalu Andalkan Urutan Sumber",
   "desc": "Tata cara membuat dua selektor Clincoo seimbang supaya yang menang adalah yang ditulis belakangan, bukan yang lebih rumit.",
   "content": "<p class=\"mb-4\">Jika spesifisitas sama dan layer sama, urutan sumber yang menentukan. Selektor yang lebih panjang hanya membingungkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Samakan bentuk selektor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bandingkan dua aturan yang bentrok. Jika satu memakai dua kelas dan yang lain satu kelas, samakan keduanya jadi satu kelas, lalu letakkan pengecualian di bawah aturan dasar dalam berkas yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan mengandalkan urutan impor yang rapuh</h2><p class=\"mb-4\">Urutan menang di dalam satu berkas mudah dibaca. Urutan antar berkas mudah berubah saat impor pindah. Uji di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dan tulis urutan yang disepakati di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Cascade",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade",
   "sourceSnippet": "When origin, importance, and specificity tie, the declaration that appears last in source order wins.",
   "source2": "CSS Cascading and Inheritance Level 5",
   "source2Url": "https://www.w3.org/TR/css-cascade-5/#cascade-sort",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Match Specificity and Rely on Source Order",
   "desc": "How to balance two Clincoo selectors so the later rule wins, not the more complicated one.",
   "content": "<p class=\"mb-4\">When specificity and layer match, source order decides. A longer selector only makes the tie harder to see.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match selector shape</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> compare the two clashing rules. If one uses two classes and the other uses one, make both a single class, then place the exception below the base rule in the same file.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not rely on a fragile import order</h2><p class=\"mb-4\">Order inside one file is easy to read. Order across files breaks when an import moves. Check the preview in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> and write the agreed order on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Cascade",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade",
   "sourceSnippet": "When origin, importance, and specificity tie, the declaration that appears last in source order wins.",
   "source2": "CSS Cascading and Inheritance Level 5",
   "source2Url": "https://www.w3.org/TR/css-cascade-5/#cascade-sort",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cascade-scope-gaya-komponen-tanpa-menaikkan-selektor",
 "langs": {
  "id": {
   "title": "Cara Scope Gaya Komponen tanpa Menaikkan Selektor",
   "desc": "Tata cara membatasi gaya kartu Clincoo dengan @scope supaya tidak perlu selektor panjang yang menaikkan spesifisitas.",
   "content": "<p class=\"mb-4\">Membungkus setiap aturan dengan <code>.card .title</code> menaikkan spesifisitas dan menyulitkan utilitas. <code>@scope</code> membatasi wilayah tanpa menambah kelas pada setiap selektor.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Batasi akar komponen</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis <code>@scope (.card) { h2 { font-size: 1.25rem; } }</code> di layer komponen. Selektor di dalam scope hanya berlaku di bawah <code>.card</code>. Jangan menggabungkannya dengan ID.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji batas dan utilitas</h2><p class=\"mb-4\">Pastikan judul di luar kartu tidak berubah, dan kelas utilitas di layer lebih tinggi tetap bisa menimpa. Cek di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Simpan contoh scope di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @scope",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@scope",
   "sourceSnippet": "The @scope at-rule limits the reach of style rules to a subtree without raising specificity the way a long selector does.",
   "source2": "CSS Cascading and Inheritance Level 6",
   "source2Url": "https://www.w3.org/TR/css-cascade-6/#scope-atrule",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Scope Component Styles without Raising Selectors",
   "desc": "How to limit Clincoo card styles with @scope so you do not need a long selector that raises specificity.",
   "content": "<p class=\"mb-4\">Wrapping every rule in <code>.card .title</code> raises specificity and fights utilities. <code>@scope</code> limits the subtree without adding a class to every selector.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Limit the component root</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write <code>@scope (.card) { h2 { font-size: 1.25rem; } }</code> in the components layer. Rules inside the scope apply only under <code>.card</code>. Do not combine it with an ID.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test the boundary and utilities</h2><p class=\"mb-4\">Confirm a heading outside the card does not change, and that a utility in a higher layer can still override. Check the preview in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Keep a scope example on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @scope",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@scope",
   "sourceSnippet": "The @scope at-rule limits the reach of style rules to a subtree without raising specificity the way a long selector does.",
   "source2": "CSS Cascading and Inheritance Level 6",
   "source2Url": "https://www.w3.org/TR/css-cascade-6/#scope-atrule",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
