// Clincoo Docs — kategori Baseline (8 Oktober 2026, 01:00 WIB) — 2 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["baseline"] = {
 "names": { "id": "Baseline", "en": "Baseline" },
 "articles": [
{
 "id": "baseline-selaraskan-teks-ikon",
 "langs": {
  "id": {
   "title": "Cara Selaraskan Teks dan Ikon dengan Baseline",
   "desc": "Tata cara memakai align-items: baseline agar label dan ikon di komponen Clincoo tidak tampak menggantung.",
   "content": "<p class=\"mb-4\">Ikon SVG dan teks sering tidak sejajar karena flex default memakai stretch atau center pada kotak, bukan pada garis dasar huruf.</p><p class=\"mb-4\">Pada baris aksi di editor.clincoo.buzz, set align-items: baseline di flex container. Beri ikon properti yang menempel ke baseline, misalnya align-self: baseline, lalu atur tinggi ikon agar tidak mengubah line box.</p><p class=\"mb-4\">Jika ikon tetap naik, bungkus teks dalam span. Baseline flex mengikuti peserta yang punya baseline. Elemen tanpa teks, seperti tombol ikon polos, tidak punya garis dasar yang bisa diikuti.</p><p class=\"mb-4\">Jangan pakai position relative dan top negatif untuk menggeser ikon. Itu rapuh saat ukuran font berubah di pratinjau mobile app.clincoo.buzz.</p><p class=\"mb-4\">Cek pada dua bahasa. Teks Indonesia dan Inggris punya panjang berbeda, tetapi garis dasarnya harus tetap satu. Itu tanda align-items bekerja, bukan kebetulan margin.</p>",
   "source": "MDN — align-items",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
   "sourceSnippet": "baseline aligns the flex items along their baselines.",
   "source2": "MDN — vertical-align",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Align Text and Icons to the Baseline",
   "desc": "How to use align-items: baseline so labels and icons in a Clincoo component do not look like they are hanging.",
   "content": "<p class=\"mb-4\">SVG icons and text often misalign because flex defaults to stretch or center on the box, not on the letter baseline.</p><p class=\"mb-4\">On an action row in editor.clincoo.buzz, set align-items: baseline on the flex container. Give the icon a property that sticks to the baseline, such as align-self: baseline, and size the icon so it does not change the line box.</p><p class=\"mb-4\">If the icon still sits high, wrap the text in a span. Flex baseline follows a participant that has a baseline. An element with no text, such as an icon-only button, has no baseline to follow.</p><p class=\"mb-4\">Do not nudge the icon with position relative and a negative top. That breaks when the font size changes in the app.clincoo.buzz mobile preview.</p><p class=\"mb-4\">Check both languages. Indonesian and English copy have different lengths, but the baseline should stay shared. That shows align-items is working, not a lucky margin.</p>",
   "source": "MDN — align-items",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
   "sourceSnippet": "baseline aligns the flex items along their baselines.",
   "source2": "MDN — vertical-align",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "baseline-line-height-unitless",
 "langs": {
  "id": {
   "title": "Cara Pakai line-height Tanpa Unit agar Baseline Stabil",
   "desc": "Tata cara memilih line-height tanpa unit supaya judul dan isi di situs Clincoo tidak saling mendorong.",
   "content": "<p class=\"mb-4\">line-height dengan satuan px tidak ikut saat font membesar. Akibatnya judul rapat, atau jarak baseline antarbaris berubah di setiap breakpoint.</p><p class=\"mb-4\">Pakai angka tanpa unit, misalnya 1.5 pada teks isi dan 1.2 pada judul. Nilai itu dikalikan ukuran font elemen, termasuk font yang diwariskan ke komponen.</p><p class=\"mb-4\">Hindari line-height pada body yang terlalu longgar jika kartu memakai baseline flex. Ruang ekstra mengubah garis dasar dan membuat ikon tampak turun.</p><p class=\"mb-4\">Di pratinjau editor.clincoo.buzz, ubah ukuran font root lalu lihat apakah ritme vertikal tetap. Jika hanya judul yang pecah, line-height judul masih memakai px.</p><p class=\"mb-4\">Untuk teks satu baris di tombol, line-height boleh mendekati 1, tetapi jangan mengunci tinggi tombol lebih kecil dari ukuran font ditambah padding. Itu memotong glyph beraksen.</p>",
   "source": "MDN — line-height",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/line-height",
   "sourceSnippet": "A unitless line-height is multiplied by the element's font size.",
   "source2": "CSS Tricks — line-height",
   "source2Url": "https://css-tricks.com/almanac/properties/l/line-height/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use a Unitless line-height so the Baseline Stays Stable",
   "desc": "How to choose a unitless line-height so headings and body copy on a Clincoo site do not shove each other.",
   "content": "<p class=\"mb-4\">A line-height in px does not scale when the font grows. Headings then feel tight, or the baseline rhythm changes at every breakpoint.</p><p class=\"mb-4\">Use a unitless number, such as 1.5 for body text and 1.2 for headings. That value multiplies the element's font size, including fonts inherited by a component.</p><p class=\"mb-4\">Avoid a very loose line-height on body if cards use flex baseline. The extra space shifts the baseline and makes icons look low.</p><p class=\"mb-4\">In the editor.clincoo.buzz preview, change the root font size and see whether the vertical rhythm holds. If only the heading breaks, its line-height is still in px.</p><p class=\"mb-4\">For single-line button text, line-height may sit near 1, but do not lock the button height smaller than the font size plus padding. That clips accented glyphs.</p>",
   "source": "MDN — line-height",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/line-height",
   "sourceSnippet": "A unitless line-height is multiplied by the element's font size.",
   "source2": "CSS Tricks — line-height",
   "source2Url": "https://css-tricks.com/almanac/properties/l/line-height/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
