// Clincoo Docs — tambah 5 artikel Color (9 Oktober 2026, 18:00 WIB)
// Clincoo Docs — kategori Color (9 Oktober 2026, 16:00 WIB) — 1 artikel baru
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["color"] = {
 "names": { "id": "Warna", "en": "Color" },
 "articles": [
{
 "id": "color-pakai-token-bukan-hex-acak",
 "langs": {
  "id": {
   "title": "Cara Pakai Token Warna, Bukan Hex Acak",
   "desc": "Tata cara menyimpan warna UI Clincoo sebagai token CSS supaya hex tidak berserakan.",
   "content": "<p class=\"mb-4\">Hex yang diketik langsung di setiap komponen membuat hover, fokus, dan mode gelap sulit diseragamkan. Token warna memusatkan keputusan di satu berkas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri nama peran, bukan merek mentah</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> definisikan <code>--color-text</code>, <code>--color-bg</code>, <code>--color-accent</code>, dan <code>--color-danger</code> pada <code>:root</code>. Komponen memakai <code>var(--color-text)</code>, bukan <code>#111</code> baru.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek kontras pasangan</h2><p class=\"mb-4\">Pasangkan teks dan latar, lalu uji di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Catat token yang lolos di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum menambah aksen baru.</p>",
   "source": "MDN — CSS custom properties",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "sourceSnippet": "Custom properties are subject to the cascade and inherit their value from their parent.",
   "source2": "W3C — CSS Color",
   "source2Url": "https://www.w3.org/TR/css-color-4/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Color Tokens Instead of Random Hex",
   "desc": "How to store Clincoo UI colors as CSS tokens so hex values do not scatter.",
   "content": "<p class=\"mb-4\">Hex typed directly into every component makes hover, focus, and dark mode hard to keep consistent. Color tokens keep the decision in one file.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Name the role, not a raw brand</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> define <code>--color-text</code>, <code>--color-bg</code>, <code>--color-accent</code>, and <code>--color-danger</code> on <code>:root</code>. Components use <code>var(--color-text)</code>, not a fresh <code>#111</code>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check contrast pairs</h2><p class=\"mb-4\">Pair text and background, then test in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview. Record tokens that pass on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before adding a new accent.</p>",
   "source": "MDN — CSS custom properties",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "sourceSnippet": "Custom properties are subject to the cascade and inherit their value from their parent.",
   "source2": "W3C — CSS Color",
   "source2Url": "https://www.w3.org/TR/css-color-4/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "color-cek-kontras-teks-latar",
 "langs": {
  "id": {
   "title": "Cara Cek Kontras Teks dan Latar Sebelum Rilis",
   "desc": "Tata cara menguji kontras pasangan warna di Clincoo sebelum halaman dipublikasikan.",
   "content": "<p class=\"mb-4\">Warna yang enak dilihat di layar desainer sering gagal saat dipakai sebagai teks tombol. Cek kontras sebelum rilis supaya pengunjung tetap bisa membaca.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur pasangan, bukan satu swatch</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> catat warna teks dan latar yang benar-benar dipakai bersama, termasuk hover dan status error. Rasio teks biasa sebaiknya minimal 4.5:1, teks besar minimal 3:1.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau terang</h2><p class=\"mb-4\">Buka halaman di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, lalu bandingkan dengan catatan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Jika gagal, ubah token, jangan menimpa satu komponen saja.</p>",
   "source": "W3C — Understanding Contrast Minimum",
   "sourceUrl": "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
   "sourceSnippet": "The visual presentation of text and images of text has a contrast ratio of at least 4.5:1.",
   "source2": "MDN — color contrast",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Check Text and Background Contrast Before Release",
   "desc": "How to test color pairs in Clincoo before a page is published.",
   "content": "<p class=\"mb-4\">A color that looks fine on a designer screen often fails as button text. Check contrast before release so visitors can still read.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure the pair, not a single swatch</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> record the text and background colors that are actually used together, including hover and error. Normal text should be at least 4.5:1, large text at least 3:1.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in the light preview</h2><p class=\"mb-4\">Open the page in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, then compare it with the note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. If it fails, change the token instead of patching one component.</p>",
   "source": "W3C — Understanding Contrast Minimum",
   "sourceUrl": "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
   "sourceSnippet": "The visual presentation of text and images of text has a contrast ratio of at least 4.5:1.",
   "source2": "MDN — color contrast",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "color-currentcolor-untuk-ikon",
 "langs": {
  "id": {
   "title": "Cara Pakai currentColor untuk Ikon",
   "desc": "Tata cara mewarnai ikon SVG lewat currentColor supaya ikut warna teks di Clincoo.",
   "content": "<p class=\"mb-4\">Ikon yang diwarnai hex sendiri sering tertinggal saat teks berubah state. currentColor membuat goresan ikut warna induk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set fill atau stroke ke currentColor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ubah atribut ikon menjadi <code>stroke=\"currentColor\"</code> atau <code>fill=\"currentColor\"</code>. Warna diatur di elemen pembungkus lewat token, bukan di file SVG.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek hover dan disabled</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> arahkan kursor dan coba status nonaktif. Jika ikon tetap hitam, hex masih tertanam. Catat perbaikan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — currentcolor",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/currentcolor",
   "sourceSnippet": "The currentcolor keyword represents the value of the element's color property.",
   "source2": "MDN — SVG presentation attributes",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use currentColor for Icons",
   "desc": "How to color SVG icons with currentColor so they follow Clincoo text color.",
   "content": "<p class=\"mb-4\">Icons colored with their own hex often lag when text changes state. currentColor makes the stroke follow the parent color.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set fill or stroke to currentColor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> change the icon attribute to <code>stroke=\"currentColor\"</code> or <code>fill=\"currentColor\"</code>. Color is set on the wrapper through a token, not inside the SVG file.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check hover and disabled</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> hover and try the disabled state. If the icon stays black, a hex is still embedded. Record the fix on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — currentcolor",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/currentcolor",
   "sourceSnippet": "The currentcolor keyword represents the value of the element's color property.",
   "source2": "MDN — SVG presentation attributes",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "color-mode-gelap-prefers-color-scheme",
 "langs": {
  "id": {
   "title": "Cara Susun Mode Gelap dengan prefers-color-scheme",
   "desc": "Tata cara menimpa token warna Clincoo saat sistem meminta mode gelap.",
   "content": "<p class=\"mb-4\">Mode gelap yang hanya membalik hex acak merusak kontras dan logo. Lebih aman menimpa token di query media.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Timpa token, jangan hex komponen</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis <code>@media (prefers-color-scheme: dark)</code> lalu set ulang <code>--color-bg</code>, <code>--color-text</code>, dan <code>--color-border</code>. Komponen tetap memakai <code>var()</code>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan balik gambar bermakna</h2><p class=\"mb-4\">Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan mode sistem gelap. Logo dan ilustrasi yang sudah gelap jangan di-invert. Simpan keputusan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — prefers-color-scheme",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",
   "sourceSnippet": "The prefers-color-scheme CSS media feature is used to detect if a user has requested light or dark color theme.",
   "source2": "W3C — CSS Color Module",
   "source2Url": "https://www.w3.org/TR/css-color-4/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Build Dark Mode with prefers-color-scheme",
   "desc": "How to override Clincoo color tokens when the system asks for dark mode.",
   "content": "<p class=\"mb-4\">Dark mode that only inverts random hex breaks contrast and logos. Overriding tokens in a media query is safer.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Override tokens, not component hex</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write <code>@media (prefers-color-scheme: dark)</code> and reset <code>--color-bg</code>, <code>--color-text</code>, and <code>--color-border</code>. Components still use <code>var()</code>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not invert meaningful images</h2><p class=\"mb-4\">Test in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> with the system dark mode. Do not invert logos and illustrations that are already dark. Save the decision on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — prefers-color-scheme",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",
   "sourceSnippet": "The prefers-color-scheme CSS media feature is used to detect if a user has requested light or dark color theme.",
   "source2": "W3C — CSS Color Module",
   "source2Url": "https://www.w3.org/TR/css-color-4/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "color-jangan-andalkan-warna-saja",
 "langs": {
  "id": {
   "title": "Cara Jangan Andalkan Warna Saja pada Status",
   "desc": "Tata cara menambah teks atau ikon di samping warna status di Clincoo.",
   "content": "<p class=\"mb-4\">Merah untuk error dan hijau untuk sukses tidak terbaca oleh sebagian pengunjung. Status butuh isyarat kedua.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tambah teks atau ikon</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis label “Gagal” atau “Tersimpan” di samping badge. Warna tetap memakai token, tetapi makna tidak hanya dari hue.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji tanpa membedakan warna</h2><p class=\"mb-4\">Buka pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dan bayangkan layar grayscale. Jika status hilang, tambahkan ikon. Catat pola di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "W3C — Understanding Use of Color",
   "sourceUrl": "https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html",
   "sourceSnippet": "Color is not used as the only visual means of conveying information.",
   "source2": "MDN — Accessibility color",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How Not to Rely on Color Alone for Status",
   "desc": "How to add text or an icon beside status color in Clincoo.",
   "content": "<p class=\"mb-4\">Red for error and green for success are not readable for every visitor. Status needs a second cue.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add text or an icon</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write a “Failed” or “Saved” label beside the badge. Color still uses a token, but meaning does not come from hue alone.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test without color distinction</h2><p class=\"mb-4\">Open the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview and imagine a grayscale screen. If the status disappears, add an icon. Record the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "W3C — Understanding Use of Color",
   "sourceUrl": "https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html",
   "sourceSnippet": "Color is not used as the only visual means of conveying information.",
   "source2": "MDN — Accessibility color",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "color-opacity-token-bukan-rgba-acak",
 "langs": {
  "id": {
   "title": "Cara Pakai Token Opacity, Bukan RGBA Acak",
   "desc": "Tata cara menyimpan lapisan transparan Clincoo sebagai token, bukan rgba yang disalin.",
   "content": "<p class=\"mb-4\">RGBA yang disalin antar komponen membuat overlay, disabled, dan bayangan tidak seragam. Token opacity lebih mudah diaudit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pisahkan warna dan alpha</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan <code>--color-overlay</code> dan <code>--opacity-disabled</code>. Pakai <code>rgb(from var(--color-text) r g b / var(--opacity-disabled))</code> atau kelas utilitas yang sudah memakai token.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di atas foto</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> letakkan overlay di atas gambar hero. Jika teks hilang, naikkan token, jangan tambah rgba baru. Catat nilai di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — relative color syntax",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Relative_colors",
   "sourceSnippet": "The relative color syntax lets you derive a new color from an existing one.",
   "source2": "MDN — opacity",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/opacity",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Opacity Tokens Instead of Random RGBA",
   "desc": "How to store Clincoo transparent layers as tokens instead of copied rgba values.",
   "content": "<p class=\"mb-4\">RGBA copied between components makes overlays, disabled states, and shadows inconsistent. Opacity tokens are easier to audit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Separate color and alpha</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> store <code>--color-overlay</code> and <code>--opacity-disabled</code>. Use <code>rgb(from var(--color-text) r g b / var(--opacity-disabled))</code> or a utility class that already uses the token.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check over a photo</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> place the overlay on a hero image. If text disappears, raise the token instead of adding a new rgba. Record the value on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — relative color syntax",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Relative_colors",
   "sourceSnippet": "The relative color syntax lets you derive a new color from an existing one.",
   "source2": "MDN — opacity",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/opacity",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}

 ]
};
