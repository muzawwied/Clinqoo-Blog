// Clincoo Docs — tambah 1 artikel Color (9 Oktober 2026, 20:00 WIB)
// Clincoo Docs — tambah 5 artikel Color (9 Oktober 2026, 19:00 WIB)
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
,
{
 "id": "color-mix-turunkan-shade-dari-token",
 "langs": {
  "id": {
   "title": "Cara Turunkan Shade dengan color-mix",
   "desc": "Tata cara membuat shade dan tint Clincoo dari satu token warna, tanpa mengetik hex baru.",
   "content": "<p class=\"mb-4\">Shade yang diketik manual cepat tidak sinkron saat token dasar berubah. color-mix menurunkan varian dari satu sumber.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Campur token dengan hitam atau putih</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis <code>--color-brand-hover: color-mix(in oklab, var(--color-brand) 88%, black)</code> dan <code>--color-brand-soft: color-mix(in oklab, var(--color-brand) 12%, white)</code>. Pakai oklab supaya langkah terang terasa lebih rata daripada rgb.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji hover dan disabled</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bandingkan tombol normal, hover, dan disabled. Jika hover hampir sama dengan normal, naikkan persentase campuran, jangan salin hex baru. Catat rumusnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — color-mix()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix",
   "sourceSnippet": "The color-mix() functional notation takes two color values and returns the result of mixing them in a given color space.",
   "source2": "MDN — color-mix",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Derive Shades with color-mix",
   "desc": "How to build Clincoo shades and tints from one color token without typing a new hex.",
   "content": "<p class=\"mb-4\">Hand-typed shades drift as soon as the base token changes. color-mix derives variants from one source.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Mix the token with black or white</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write <code>--color-brand-hover: color-mix(in oklab, var(--color-brand) 88%, black)</code> and <code>--color-brand-soft: color-mix(in oklab, var(--color-brand) 12%, white)</code>. Use oklab so lightness steps feel more even than rgb.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check hover and disabled</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> compare normal, hover, and disabled buttons. If hover is almost identical to normal, raise the mix percentage instead of copying a new hex. Record the formula on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — color-mix()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix",
   "sourceSnippet": "The color-mix() functional notation takes two color values and returns the result of mixing them in a given color space.",
   "source2": "MDN — color-mix",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "color-light-dark-satu-deklarasi",
 "langs": {
  "id": {
   "title": "Cara Pakai light-dark untuk Satu Deklarasi",
   "desc": "Tata cara menulis sepasang warna terang dan gelap Clincoo dalam satu properti CSS.",
   "content": "<p class=\"mb-4\">Duplikat aturan di dalam prefers-color-scheme mudah tertinggal saat properti baru ditambah. light-dark menaruh kedua nilai di satu deklarasi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set color-scheme dulu</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan <code>html { color-scheme: light dark; }</code>. Tanpa itu, light-dark selalu memakai nilai terang. Lalu tulis <code>background: light-dark(var(--color-canvas), var(--color-canvas-dark));</code>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan dengan override sistem</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ubah tema sistem lalu muat ulang halaman. Jika hanya sebagian blok berubah, properti itu masih hex mentah. Pindahkan ke light-dark dan catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — light-dark()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark",
   "sourceSnippet": "The light-dark() CSS function enables setting two colors for a property, returning one of the two based on the color scheme.",
   "source2": "MDN — color-scheme",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use light-dark for One Declaration",
   "desc": "How to write a Clincoo light and dark color pair in a single CSS property.",
   "content": "<p class=\"mb-4\">Duplicate rules inside prefers-color-scheme are easy to miss when a new property is added. light-dark keeps both values in one declaration.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set color-scheme first</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add <code>html { color-scheme: light dark; }</code>. Without it, light-dark always uses the light value. Then write <code>background: light-dark(var(--color-canvas), var(--color-canvas-dark));</code>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare with the system override</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> change the system theme and reload. If only part of the page changes, that property is still a raw hex. Move it to light-dark and note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — light-dark()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark",
   "sourceSnippet": "The light-dark() CSS function enables setting two colors for a property, returning one of the two based on the color scheme.",
   "source2": "MDN — color-scheme",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "color-accent-color-kontrol-form",
 "langs": {
  "id": {
   "title": "Cara Set accent-color pada Kontrol Form",
   "desc": "Tata cara mewarnai checkbox, radio, dan progress Clincoo tanpa menggambar ulang kontrol.",
   "content": "<p class=\"mb-4\">Checkbox bawaan browser sering tetap biru sistem meski merek sudah punya token. accent-color mewarnai bagian aksen tanpa mengganti markup.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang token di form</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set <code>form { accent-color: var(--color-brand); }</code>. Cakup checkbox, radio, dan range. Jangan set accent ke putih atau kuning pucat karena tanda centang bisa hilang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek kontras tanda centang</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> aktifkan checkbox di mode terang dan gelap. Jika centang tidak terbaca, pilih token yang lebih gelap untuk aksen, bukan outline kustom. Simpan keputusan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — accent-color",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color",
   "sourceSnippet": "The accent-color CSS property sets the accent color for user-interface controls generated by some elements.",
   "source2": "MDN — input checkbox",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set accent-color on Form Controls",
   "desc": "How to color Clincoo checkboxes, radios, and progress bars without redrawing the controls.",
   "content": "<p class=\"mb-4\">Native checkboxes often stay system blue even after the brand token exists. accent-color paints the accent without replacing the markup.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Apply the token on the form</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set <code>form { accent-color: var(--color-brand); }</code>. It covers checkbox, radio, and range. Do not set the accent to white or pale yellow or the check mark can disappear.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the check mark contrast</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> toggle a checkbox in light and dark mode. If the mark is unreadable, pick a darker accent token instead of a custom outline. Save the decision on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — accent-color",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color",
   "sourceSnippet": "The accent-color CSS property sets the accent color for user-interface controls generated by some elements.",
   "source2": "MDN — input checkbox",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "color-forced-colors-mode-kontras-tinggi",
 "langs": {
  "id": {
   "title": "Cara Uji forced-colors untuk Kontras Tinggi",
   "desc": "Tata cara menyesuaikan UI Clincoo saat sistem memaksa palet kontras tinggi.",
   "content": "<p class=\"mb-4\">Mode kontras tinggi sistem menimpa warna latar dan teks. Tombol yang hanya beda warna, atau ikon yang berupa background-image, bisa hilang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jaga batas dan teks sistem</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan <code>@media (forced-colors: active) { .btn { border: 1px solid ButtonText; } }</code>. Pakai CanvasText dan ButtonText, bukan hex merek. Jangan matikan forced-colors kecuali ada pengganti yang jelas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Aktifkan di sistem lalu klik alur</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> nyalakan kontras tinggi, buka form, dan pastikan fokus serta tombol sekunder masih terlihat. Catat komponen yang hilang di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — forced-colors",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors",
   "sourceSnippet": "The forced-colors CSS media feature detects when the user agent is enforcing a limited color palette.",
   "source2": "MDN — system colors",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/system-color",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Test forced-colors for High Contrast",
   "desc": "How to adapt the Clincoo UI when the system forces a high-contrast palette.",
   "content": "<p class=\"mb-4\">System high contrast overrides background and text colors. Buttons that differ only by color, or icons that are background images, can disappear.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep system borders and text</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add <code>@media (forced-colors: active) { .btn { border: 1px solid ButtonText; } }</code>. Use CanvasText and ButtonText, not the brand hex. Do not disable forced-colors unless a clear replacement exists.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Enable it in the system and click the flow</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> turn on high contrast, open a form, and confirm focus and secondary buttons are still visible. Note missing components on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — forced-colors",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors",
   "sourceSnippet": "The forced-colors CSS media feature detects when the user agent is enforcing a limited color palette.",
   "source2": "MDN — system colors",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/system-color",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "color-scheme-widget-asli-browser",
 "langs": {
  "id": {
   "title": "Cara Samakan color-scheme dengan Widget Asli",
   "desc": "Tata cara menyelaraskan scrollbar, input tanggal, dan dropdown Clincoo dengan tema halaman.",
   "content": "<p class=\"mb-4\">Halaman gelap dengan input bawaan yang tetap putih terlihat seperti bug. color-scheme memberi tahu browser widget mana yang boleh ikut gelap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Deklarasikan di root</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set <code>:root { color-scheme: light; }</code> untuk tema terang paksa, atau <code>color-scheme: dark</code> saat kelas gelap aktif. Widget tanggal, select, dan scrollbar mengikuti nilai itu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek kontrol yang tidak di-style</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka input date dan select di tema gelap. Jika popup tetap putih, color-scheme belum sampai ke elemen itu. Perbaiki pewarisan, lalu catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — color-scheme",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme",
   "sourceSnippet": "The color-scheme CSS property allows an element to indicate which color schemes it can be rendered in comfortably.",
   "source2": "MDN — prefers-color-scheme",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Match color-scheme with Native Widgets",
   "desc": "How to align Clincoo scrollbars, date inputs, and dropdowns with the page theme.",
   "content": "<p class=\"mb-4\">A dark page with native inputs that stay white looks like a bug. color-scheme tells the browser which widgets may go dark.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Declare it on the root</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set <code>:root { color-scheme: light; }</code> for a forced light theme, or <code>color-scheme: dark</code> when the dark class is active. Date widgets, selects, and scrollbars follow that value.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check unstyled controls</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open a date input and a select in the dark theme. If the popup stays white, color-scheme did not reach that element. Fix inheritance, then note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — color-scheme",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme",
   "sourceSnippet": "The color-scheme CSS property allows an element to indicate which color schemes it can be rendered in comfortably.",
   "source2": "MDN — prefers-color-scheme",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
,
{
 "id": "color-relative-color-syntax-dari-token",
 "langs": {
  "id": {
   "title": "Cara Terangkan atau Gelapkan Token dengan Relative Color Syntax",
   "desc": "Tata cara menurunkan shade hover dari token warna Clincoo tanpa hex acak.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ambil shade dari token, bukan dari tebakan hex</h2><p class=\"mb-4\">Hover yang lebih gelap sering ditulis ulang sebagai hex baru, lalu pecah saat tema berganti. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> turunkan shade dari token yang sudah ada dengan relative color syntax: oklch(from var(--accent) calc(l - 0.08) c h).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di tema terang dan gelap</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> arahkan kursor ke tombol utama. Latar hover harus tetap satu keluarga warna dengan token, bukan abu-abu asing. Simpan cuplikan sebelum-sesudah di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Relative color syntax",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Relative_colors",
   "sourceSnippet": "Relative color syntax lets you derive a new color from an existing one by adjusting individual components.",
   "source2": "MDN — oklch()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Lighten or Darken a Token with Relative Color Syntax",
   "desc": "How to derive a hover shade from a Clincoo color token without a random hex.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Derive the shade from the token, not a guessed hex</h2><p class=\"mb-4\">A darker hover is often rewritten as a new hex, then breaks when the theme changes. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> derive the shade from the existing token with relative color syntax: oklch(from var(--accent) calc(l - 0.08) c h).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check light and dark themes</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> hover the primary button. The hover fill should stay in the same color family as the token, not an unrelated gray. Keep the before-and-after capture on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Relative color syntax",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Relative_colors",
   "sourceSnippet": "Relative color syntax lets you derive a new color from an existing one by adjusting individual components.",
   "source2": "MDN — oklch()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
