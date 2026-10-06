// Clincoo Docs — kategori Selector (6 Oktober 2026, 13:00 WIB — 4 artikel)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["selector"] = {
 "names": { "id": "Selector", "en": "Selectors" },
 "articles": [

{
 "id": "selector-debug-yang-tidak-kena",
 "langs": {
  "id": {
   "title": "Cara Debug Selector CSS yang Tidak Kena",
   "desc": "Tata cara melacak selector CSS yang tidak mengenai elemen di editor Clincoo.",
   "content": "<p class=\"mb-4\">Selector kelihatan benar tetapi elemen tidak berubah. Biasanya ada spasi, typo, atau elemen berada di shadow yang tidak dijangkau.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cocokkan selector di panel Styles</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka DevTools, pilih elemen, lalu tempel selector di kotak pencarian Styles. Jika angka kena 0, pecah selector per bagian. Perhatikan spasi di depan > dan huruf besar pada atribut.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat yang benar-benar kena</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> uji selector yang sama pada pratinjau lebar desktop. Simpan selector final di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya tidak diduplikasi dengan aturan lama.</p>",
   "source": "MDN — CSS selectors",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors",
   "sourceSnippet": "A selector matches elements in the document; a stray combinator or case mismatch makes the count zero.",
   "source2": "Chrome DevTools — CSS overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/css",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug a CSS Selector That Does Not Match",
   "desc": "How to trace a CSS selector that does not match an element in the Clincoo editor.",
   "content": "<p class=\"mb-4\">The selector looks right but the element does not change. A space, a typo, or an element inside an unreachable shadow root is the usual cause.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match the selector in the Styles pane</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open DevTools, select the element, and paste the selector into the Styles search. If the match count is 0, split the selector. Watch for a space before > and case in attribute selectors.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record what actually matches</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> test the same selector in the desktop preview. Save the final selector on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so it is not duplicated by an older rule.</p>",
   "source": "MDN — CSS selectors",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors",
   "sourceSnippet": "A selector matches elements in the document; a stray combinator or case mismatch makes the count zero.",
   "source2": "Chrome DevTools — CSS overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/css",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},

{
 "id": "selector-spesifisitas-class-lawan-id",
 "langs": {
  "id": {
   "title": "Cara Hitung Spesifisitas Class lawan ID",
   "desc": "Tata cara menghitung spesifisitas agar class menang tanpa menaikkan ID di Clincoo.",
   "content": "<p class=\"mb-4\">Satu ID mengalahkan deretan class. Gaya tombol di #app kemudian tidak bisa ditimpa dari komponen.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hitung dulu, baru tulis selector</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> catat pemenang di panel Styles. Jika pemenang memakai ID, pindahkan gaya itu ke class komponen, misalnya .btn-utama. Jangan menambah ID kedua hanya untuk menang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dua komponen bersebelahan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bandingkan tombol di kartu dan di header. Keduanya harus mengikuti class yang sama. Tulis angka spesifisitas di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Specificity",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",
   "sourceSnippet": "An ID selector outweighs class selectors, so a later class rule can still lose.",
   "source2": "W3C — Selectors Level 4",
   "source2Url": "https://www.w3.org/TR/selectors-4/#specificity-rules",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Compare Class and ID Specificity",
   "desc": "How to compare specificity so a class wins without raising an ID in Clincoo.",
   "content": "<p class=\"mb-4\">One ID beats a row of classes. A button style on #app then cannot be overridden from a component.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Count first, then write the selector</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> note the winner in the Styles pane. If the winner uses an ID, move that style to a component class such as .btn-utama. Do not add a second ID just to win.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test two neighboring components</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> compare a button in a card and in the header. Both should follow the same class. Write the specificity numbers on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Specificity",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",
   "sourceSnippet": "An ID selector outweighs class selectors, so a later class rule can still lose.",
   "source2": "W3C — Selectors Level 4",
   "source2Url": "https://www.w3.org/TR/selectors-4/#specificity-rules",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},

{
 "id": "selector-pakai-has-untuk-state",
 "langs": {
  "id": {
   "title": "Cara Pakai :has() untuk State tanpa JS",
   "desc": "Tata cara memakai :has() untuk menandai kartu Clincoo yang berisi input invalid.",
   "content": "<p class=\"mb-4\">Kartu form sering butuh border merah saat ada field invalid, tanpa menambah class lewat JavaScript.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gaya induk dari state anak</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis .kartu:has(input:invalid) untuk border dan .kartu:has(input:checked) untuk status terpilih. Beri fallback class bila browser lama tidak mendukung :has(). Jangan menaruh :has() pada selector universal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji invalid dan checked</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> kosongkan field wajib dan centang opsi. Kartu harus berubah tanpa reload. Catat selector di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — :has()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/:has",
   "sourceSnippet": ":has() matches an element when a relative selector matches at least one descendant.",
   "source2": "Chrome — CSS :has",
   "source2Url": "https://developer.chrome.com/docs/css-ui/has-pseudo-class",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use :has() for State without JS",
   "desc": "How to use :has() to mark a Clincoo card that contains an invalid input.",
   "content": "<p class=\"mb-4\">A form card often needs a red border when a field is invalid, without adding a class through JavaScript.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Style the parent from a child state</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write .kartu:has(input:invalid) for the border and .kartu:has(input:checked) for a selected state. Add a class fallback if an old browser lacks :has(). Do not put :has() on the universal selector.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test invalid and checked</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> leave a required field empty and toggle an option. The card should change without a reload. Record the selector on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — :has()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/:has",
   "sourceSnippet": ":has() matches an element when a relative selector matches at least one descendant.",
   "source2": "Chrome — CSS :has",
   "source2Url": "https://developer.chrome.com/docs/css-ui/has-pseudo-class",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},

{
 "id": "selector-hindari-important-global",
 "langs": {
  "id": {
   "title": "Cara Hindari !important Global di Selector",
   "desc": "Tata cara mengganti !important global dengan selector yang lebih sempit di Clincoo.",
   "content": "<p class=\"mb-4\">!important pada body a membuat setiap tautan susah diubah di komponen. Perbaikan kecil jadi perang spesifisitas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Persempit selector, hapus important</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> cari !important di stylesheet. Pindahkan aturan ke class blok, misalnya .nav-utama a. Hapus !important setelah pemenang di panel Styles sudah class itu. Jangan menimpa reset browser dengan important.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek tautan di header dan footer</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bandingkan warna tautan header dan tautan di kartu. Hanya blok yang dimaksud yang berubah. Simpan sebelum-sesudah di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — !important",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/important",
   "sourceSnippet": "!important lifts a declaration above normal specificity and makes later overrides harder.",
   "source2": "MDN — Specificity",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid a Global !important Selector",
   "desc": "How to replace a global !important with a narrower selector in Clincoo.",
   "content": "<p class=\"mb-4\">!important on body a makes every link hard to change inside a component. A small fix becomes a specificity fight.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Narrow the selector, drop important</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> search the stylesheet for !important. Move the rule to a block class such as .nav-utama a. Remove !important once the Styles pane winner is that class. Do not override the browser reset with important.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check links in the header and footer</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> compare header link color with card links. Only the intended block should change. Save before-and-after on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — !important",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/important",
   "sourceSnippet": "!important lifts a declaration above normal specificity and makes later overrides harder.",
   "source2": "MDN — Specificity",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
