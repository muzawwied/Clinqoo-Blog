// Clincoo Docs — kategori Filter (10 Oktober 2026, 05:00 WIB) — tambah 5 artikel (total 9)
// Clincoo Docs — kategori Filter (10 Oktober 2026, 04:00 WIB) — 4 artikel baru
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["filter"] = {
 "names": { "id": "Filter", "en": "Filter" },
 "articles": [
{
 "id": "filter-backdrop-header-tanpa-patah-scroll",
 "langs": {
  "id": {
   "title": "Cara Pakai backdrop-filter di Header Tanpa Mematahkan Scroll",
   "desc": "Tata cara blur latar header Clincoo tanpa membuat area di belakangnya tidak bisa digulir.",
   "content": "<p class=\"mb-4\">backdrop-filter pada header sticky sering membuat lapisan baru yang menelan sentuhan, sehingga gulir terasa macet di atas kartu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Blur hanya pada lapisan dekoratif</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jangan taruh backdrop-filter pada header yang juga memegang tautan. Buat anak ::before dengan position absolute, inset 0, backdrop-filter: blur(8px), dan pointer-events: none.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jaga header tetap setipis mungkin</h2><p class=\"mb-4\">Beri header background semi-transparan, z-index rendah, dan isolation: isolate agar blur tidak bocor ke dropdown. Uji gulir di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan jari di atas header: halaman harus tetap jalan. Catat hasilnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><p class=\"mb-4\">Jika blur tidak muncul, elemen di belakang belum punya latar. Beri body warna solid dulu sebelum menilai filter.</p>",
   "source": "MDN — backdrop-filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter",
   "sourceSnippet": "backdrop-filter applies graphical effects to the area behind an element and can create a containing layer.",
   "source2": "MDN — pointer-events",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use backdrop-filter on a Header Without Breaking Scroll",
   "desc": "How to blur a Clincoo header background without making the area behind it unscrollable.",
   "content": "<p class=\"mb-4\">backdrop-filter on a sticky header often creates a layer that swallows hits, so scroll feels stuck over the cards.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Blur only a decorative layer</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> do not put backdrop-filter on the header that also holds links. Add a ::before child with position absolute, inset 0, backdrop-filter: blur(8px), and pointer-events: none.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep the header as thin as it can be</h2><p class=\"mb-4\">Give the header a semi-transparent background, a low z-index, and isolation: isolate so the blur does not leak into a dropdown. Test scroll in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> with a finger over the header: the page must still move. Note the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><p class=\"mb-4\">If the blur never appears, the element behind has no background. Give body a solid color before judging the filter.</p>",
   "source": "MDN — backdrop-filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter",
   "sourceSnippet": "backdrop-filter applies graphical effects to the area behind an element and can create a containing layer.",
   "source2": "MDN — pointer-events",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "filter-drop-shadow-ikon-svg",
 "langs": {
  "id": {
   "title": "Cara Ganti box-shadow Ikon SVG dengan filter: drop-shadow",
   "desc": "Tata cara memberi bayangan mengikuti bentuk ikon SVG di Clincoo, bukan kotak elemen.",
   "content": "<p class=\"mb-4\">box-shadow pada ikon SVG mengikuti kotak elemen, sehingga bayangan terlihat seperti kartu kecil di sekeliling garis ikon.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pindahkan bayangan ke filter</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> hapus box-shadow pada svg. Tulis filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.25)). Drop-shadow mengikuti kanal alfa, jadi hanya bentuk ikon yang berbayang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan gabung dengan filter lain tanpa sengaja</h2><p class=\"mb-4\">filter tidak menumpuk seperti box-shadow. Jika ikon juga butuh grayscale, gabungkan dalam satu deklarasi: filter: grayscale(1) drop-shadow(0 1px 1px rgb(0 0 0 / 0.25)). Cek di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pada latar terang dan gelap. Simpan cuplikan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><p class=\"mb-4\">Bayangan yang terpotong biasanya karena overflow: hidden pada induk. Longgarkan induk, bukan menaikkan blur.</p>",
   "source": "MDN — filter drop-shadow()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow",
   "sourceSnippet": "drop-shadow() applies a shadow following the alpha mask of the image, unlike box-shadow which follows the box.",
   "source2": "MDN — filter",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Replace an SVG Icon box-shadow with filter: drop-shadow",
   "desc": "How to shadow the shape of a Clincoo SVG icon instead of the element box.",
   "content": "<p class=\"mb-4\">box-shadow on an SVG icon follows the element box, so the shadow looks like a tiny card around the icon stroke.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Move the shadow to filter</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> remove box-shadow from the svg. Write filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.25)). drop-shadow follows the alpha channel, so only the icon shape is shadowed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not stack another filter by accident</h2><p class=\"mb-4\">filter does not stack like box-shadow. If the icon also needs grayscale, combine one declaration: filter: grayscale(1) drop-shadow(0 1px 1px rgb(0 0 0 / 0.25)). Check in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> on light and dark backgrounds. Save the snippet on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><p class=\"mb-4\">A clipped shadow is usually overflow: hidden on the parent. Loosen the parent instead of raising the blur.</p>",
   "source": "MDN — filter drop-shadow()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow",
   "sourceSnippet": "drop-shadow() applies a shadow following the alpha mask of the image, unlike box-shadow which follows the box.",
   "source2": "MDN — filter",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "filter-jangan-blur-teks-induk",
 "langs": {
  "id": {
   "title": "Cara Cegah filter pada Induk Memburamkan Teks",
   "desc": "Tata cara memindahkan filter Clincoo ke elemen dekoratif agar judul tetap tajam.",
   "content": "<p class=\"mb-4\">filter pada kartu ikut memproses semua anak, termasuk teks. blur(2px) pada induk membuat judul tidak bisa dibaca.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pisahkan lapisan gambar</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> taruh filter hanya pada img atau div latar, bukan pada article. Teks tetap saudara, bukan anak dari elemen yang difilter.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di zoom 200 persen</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> perbesar halaman. Jika tepi huruf pecah, filter masih menempel di induk. will-change: filter pada induk juga bisa memburamkan teks di beberapa mesin. Hapus will-change setelah uji. Catat tangkapan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><p class=\"mb-4\">Untuk hover, transisikan opacity lapisan latar, bukan filter pada seluruh kartu.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The filter property applies graphical effects to an element and its descendants.",
   "source2": "MDN — will-change",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/will-change",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Stop a Parent filter from Blurring Text",
   "desc": "How to move a Clincoo filter onto a decorative element so the heading stays sharp.",
   "content": "<p class=\"mb-4\">A filter on a card processes every child, including text. blur(2px) on the parent makes the heading unreadable.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Split the image layer</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> put the filter only on the img or the background div, not on the article. Text stays a sibling, not a child of the filtered element.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check at 200 percent zoom</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> zoom the page. If glyph edges break, the filter is still on the parent. will-change: filter on the parent can also blur text on some engines. Remove will-change after the test. Save a capture on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><p class=\"mb-4\">For hover, transition the background layer opacity, not a filter on the whole card.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The filter property applies graphical effects to an element and its descendants.",
   "source2": "MDN — will-change",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/will-change",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "filter-matikan-saat-reduced-motion",
 "langs": {
  "id": {
   "title": "Cara Matikan Filter Berat Saat prefers-reduced-motion",
   "desc": "Tata cara menonaktifkan blur dan drop-shadow Clincoo untuk pengguna yang meminta gerakan dikurangi.",
   "content": "<p class=\"mb-4\">Blur animasi dan drop-shadow besar tetap terasa seperti gerak, meskipun yang berubah bukan transform.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Nolkan filter di media query</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan @media (prefers-reduced-motion: reduce) { .card-glow { filter: none; backdrop-filter: none; } }. Jangan hanya mematikan transition.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sediakan pengganti statis</h2><p class=\"mb-4\">Ganti blur dengan border solid 1px dan latar sedikit lebih gelap. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> aktifkan reduced motion di sistem, lalu muat ulang. Header harus tetap terbaca tanpa kabut. Tulis keputusan itu di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><p class=\"mb-4\">Jangan andalkan kelas yang ditambah JavaScript. Media query tetap jalan jika skrip gagal.</p>",
   "source": "MDN — prefers-reduced-motion",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
   "sourceSnippet": "prefers-reduced-motion lets you remove non-essential motion, including effects that feel like movement.",
   "source2": "WCAG — Animation from Interactions",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Turn Off Heavy Filters When prefers-reduced-motion Is Set",
   "desc": "How to disable Clincoo blur and drop-shadow for people who request reduced motion.",
   "content": "<p class=\"mb-4\">Animated blur and a large drop-shadow still feel like motion, even when transform is not changing.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Zero the filter in a media query</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add @media (prefers-reduced-motion: reduce) { .card-glow { filter: none; backdrop-filter: none; } }. Do not only disable transition.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Offer a static replacement</h2><p class=\"mb-4\">Replace the blur with a 1px solid border and a slightly darker background. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> turn on reduced motion in the system, then reload. The header must stay readable without a haze. Write that decision on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><p class=\"mb-4\">Do not rely on a class added by JavaScript. The media query still works if the script fails.</p>",
   "source": "MDN — prefers-reduced-motion",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
   "sourceSnippet": "prefers-reduced-motion lets you remove non-essential motion, including effects that feel like movement.",
   "source2": "WCAG — Animation from Interactions",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "filter-grayscale-kartu-lalu-warna-saat-hover",
 "langs": {
  "id": {
   "title": "Cara Buat Kartu Grayscale yang Berwarna Saat Hover",
   "desc": "Tata cara menonaktifkan warna kartu gambar di Clincoo, lalu mengembalikannya saat pointer atau fokus masuk.",
   "content": "<p class=\"mb-4\">Kartu galeri yang selalu penuh warna saling berebut perhatian. Grayscale di keadaan diam, lalu warna penuh saat hover atau fokus, membuat pilihan terasa disengaja.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang filter di gambar, bukan di tautan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri img filter: grayscale(1) dan transition: filter 160ms ease. Jangan taruh filter di <a> karena teks judul ikut abu-abu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pulihkan warna untuk hover dan keyboard</h2><p class=\"mb-4\">Gunakan .kartu:hover img, .kartu:focus-within img { filter: grayscale(0); }. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tab ke kartu: warna harus kembali tanpa mouse. Catat polanya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><p class=\"mb-4\">Jangan andalkan hover saja. Di layar sentuh hover bisa tersangkut, jadi sediakan juga :focus-within.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The filter property applies graphical effects such as grayscale and can be transitioned.",
   "source2": "MDN — :focus-visible",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Make a Grayscale Card Turn Color on Hover",
   "desc": "How to desaturate a Clincoo image card, then restore color when the pointer or focus enters.",
   "content": "<p class=\"mb-4\">Gallery cards that stay fully saturated compete for attention. Grayscale at rest, then full color on hover or focus, makes the choice feel intentional.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Put the filter on the image, not the link</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set img to filter: grayscale(1) and transition: filter 160ms ease. Do not put the filter on the <a> or the title text turns gray too.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Restore color for hover and keyboard</h2><p class=\"mb-4\">Use .card:hover img, .card:focus-within img { filter: grayscale(0); }. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tab to the card: color must return without a mouse. Note the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><p class=\"mb-4\">Do not rely on hover alone. On touch screens hover can stick, so also provide :focus-within.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The filter property applies graphical effects such as grayscale and can be transitioned.",
   "source2": "MDN — :focus-visible",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "filter-gelapkan-foto-latar-agar-teks-terbaca",
 "langs": {
  "id": {
   "title": "Cara Gelapkan Foto Latar dengan brightness Agar Teks Terbaca",
   "desc": "Tata cara menurunkan kecerahan foto hero Clincoo tanpa menimpa kontras teks di atasnya.",
   "content": "<p class=\"mb-4\">Teks putih di atas foto terang gagal kontras begitu gambar ganti. Gelapkan foto lewat filter pada lapisan gambar, bukan pada seluruh section.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pisahkan gambar dan teks</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> taruh img position absolute inset 0 object-fit cover, lalu filter: brightness(0.45). Judul tetap di elemen berikutnya tanpa filter.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji kontras setelah gambar asli masuk</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ganti foto hero dengan gambar langit cerah. Teks harus tetap terbaca. Tulis ambang brightness yang dipakai di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><p class=\"mb-4\">opacity pada section ikut memudarkan teks. Filter hanya boleh ada di gambar.</p>",
   "source": "MDN — brightness()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness",
   "sourceSnippet": "brightness() multiplies the brightness of the element. Values below 1 darken the image.",
   "source2": "WCAG — Contrast (Minimum)",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Darken a Background Photo with brightness So Text Stays Readable",
   "desc": "How to lower a Clincoo hero photo brightness without crushing the contrast of text above it.",
   "content": "<p class=\"mb-4\">White text over a bright photo fails contrast as soon as the image changes. Darken the photo with a filter on the image layer, not on the whole section.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Separate the image and the text</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> place the img at position absolute, inset 0, object-fit cover, then filter: brightness(0.45). Keep the title on a following element with no filter.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check contrast after the real photo is in</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> swap the hero for a bright sky photo. The text must stay readable. Write down the brightness threshold on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><p class=\"mb-4\">opacity on the section also fades the text. The filter belongs only on the image.</p>",
   "source": "MDN — brightness()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness",
   "sourceSnippet": "brightness() multiplies the brightness of the element. Values below 1 darken the image.",
   "source2": "WCAG — Contrast (Minimum)",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "filter-blur-halaman-di-belakang-dialog",
 "langs": {
  "id": {
   "title": "Cara Blur Halaman di Belakang Dialog Tanpa Memburamkan Dialog",
   "desc": "Tata cara memberi backdrop blur pada halaman Clincoo saat dialog terbuka tanpa membuat isi dialog kabur.",
   "content": "<p class=\"mb-4\">Blur pada body saat modal terbuka ikut memburamkan dialog karena dialog masih keturunan body. Blur harus hidup di lapisan di belakang dialog.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai ::backdrop, bukan filter di body</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka dialog dengan showModal(). Beri dialog::backdrop { background: rgb(15 23 42 / 0.45); backdrop-filter: blur(6px); }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jaga isi dialog tetap tajam</h2><p class=\"mb-4\">Jangan tambah filter pada dialog itu sendiri. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka dialog konfirmasi: teks tombol harus tajam, halaman di belakang boleh kabur. Catat pengecualian browser di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><p class=\"mb-4\">Jika blur tidak didukung, latar semi-transparan tetap memisahkan dialog dari halaman.</p>",
   "source": "MDN — ::backdrop",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop",
   "sourceSnippet": "The ::backdrop pseudo-element is a box the size of the viewport rendered beneath the top layer element.",
   "source2": "MDN — dialog",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Blur the Page Behind a Dialog Without Blurring the Dialog",
   "desc": "How to blur the Clincoo page when a dialog opens without making the dialog content blurry.",
   "content": "<p class=\"mb-4\">A blur on body while a modal is open also blurs the dialog, because the dialog is still a descendant of body. The blur has to live on a layer behind the dialog.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use ::backdrop, not a filter on body</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open the dialog with showModal(). Set dialog::backdrop { background: rgb(15 23 42 / 0.45); backdrop-filter: blur(6px); }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep the dialog content sharp</h2><p class=\"mb-4\">Do not add a filter on the dialog itself. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open a confirm dialog: button text must be sharp, the page behind may be blurred. Note browser exceptions on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><p class=\"mb-4\">If blur is unsupported, the semi-transparent background still separates the dialog from the page.</p>",
   "source": "MDN — ::backdrop",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop",
   "sourceSnippet": "The ::backdrop pseudo-element is a box the size of the viewport rendered beneath the top layer element.",
   "source2": "MDN — dialog",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "filter-hue-rotate-status-ikon-tanpa-duplikat-aset",
 "langs": {
  "id": {
   "title": "Cara Ganti Warna Status Ikon dengan hue-rotate Tanpa Duplikat Aset",
   "desc": "Tata cara memakai satu ikon SVG Clincoo untuk status sukses dan bahaya lewat filter hue-rotate.",
   "content": "<p class=\"mb-4\">Menggandakan SVG hanya untuk mengganti warna status membuat aset cepat usang. Satu ikon plus filter cukup jika warna dasarnya diketahui.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur sudut dari warna dasar</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> mulai dari ikon biru. Status sukses: filter: hue-rotate(80deg) saturate(1.2). Status bahaya: hue-rotate(-40deg). Jangan putar ikon yang sudah multiwarna.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan jadikan warna satu-satunya petunjuk</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tambah teks atau ikon berbeda bentuk untuk gagal dan berhasil. Tulis sudut yang disepakati di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><p class=\"mb-4\">currentColor lebih tepat jika SVG inline. hue-rotate untuk ikon img yang tidak bisa diwarnai lewat CSS color.</p>",
   "source": "MDN — hue-rotate()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate",
   "sourceSnippet": "hue-rotate() rotates the hue of every color in the element by the given angle.",
   "source2": "MDN — filter",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Recolor an Icon Status with hue-rotate Without Duplicate Assets",
   "desc": "How to reuse one Clincoo SVG icon for success and danger states with a hue-rotate filter.",
   "content": "<p class=\"mb-4\">Duplicating an SVG only to change a status color makes assets go stale. One icon plus a filter is enough when the base hue is known.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure the angle from the base color</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> start from a blue icon. Success: filter: hue-rotate(80deg) saturate(1.2). Danger: hue-rotate(-40deg). Do not rotate an icon that is already multicolor.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not make color the only cue</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> add text or a different shape for failure and success. Write the agreed angles on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><p class=\"mb-4\">currentColor is better for inline SVG. hue-rotate is for img icons that cannot be tinted with CSS color.</p>",
   "source": "MDN — hue-rotate()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate",
   "sourceSnippet": "hue-rotate() rotates the hue of every color in the element by the given angle.",
   "source2": "MDN — filter",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "filter-webkit-backdrop-agar-jalan-di-safari",
 "langs": {
  "id": {
   "title": "Cara Tambah -webkit-backdrop-filter Supaya Blur Jalan di Safari",
   "desc": "Tata cara menulis backdrop-filter berawalan webkit di Clincoo supaya header buram tetap tampil di Safari.",
   "content": "<p class=\"mb-4\">Header yang buram di Chrome bisa tampil polos di Safari jika hanya properti standar yang ditulis. Prefiks lama masih perlu untuk sebagian versi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis prefiks sebelum properti standar</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada lapisan ::before header: -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px);. Latar semi-transparan wajib, kalau tidak blur tidak kelihatan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di Safari, bukan hanya di DevTools Chrome</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka halaman di Safari iOS. Jika blur hilang, cek elemen tidak punya opacity kurang dari 1 pada induk. Catat versi yang lolos di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><p class=\"mb-4\">Jangan hanya mengandalkan prefiks. Sediakan background solid sebagai cadangan.</p>",
   "source": "MDN — backdrop-filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter",
   "sourceSnippet": "backdrop-filter may still need the -webkit- prefix in some Safari versions.",
   "source2": "Can I use — backdrop-filter",
   "source2Url": "https://caniuse.com/css-backdrop-filter",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Add -webkit-backdrop-filter So Blur Works in Safari",
   "desc": "How to write the webkit-prefixed backdrop-filter in Clincoo so a frosted header still shows in Safari.",
   "content": "<p class=\"mb-4\">A header that looks frosted in Chrome can look flat in Safari if only the standard property is written. The old prefix is still needed on some versions.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write the prefix before the standard property</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> on the header ::before layer: -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px);. A semi-transparent background is required or the blur is invisible.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in Safari, not only in Chrome DevTools</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the page in Safari on iOS. If the blur disappears, check that no ancestor has opacity below 1. Note the versions that pass on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><p class=\"mb-4\">Do not rely on the prefix alone. Provide a solid background as a fallback.</p>",
   "source": "MDN — backdrop-filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter",
   "sourceSnippet": "backdrop-filter may still need the -webkit- prefix in some Safari versions.",
   "source2": "Can I use — backdrop-filter",
   "source2Url": "https://caniuse.com/css-backdrop-filter",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};