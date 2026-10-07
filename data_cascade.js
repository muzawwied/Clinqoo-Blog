// Clincoo Docs — kategori Cascade (7 Oktober 2026, 14:00 WIB) — 5 artikel baru
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
}
 ]
};
