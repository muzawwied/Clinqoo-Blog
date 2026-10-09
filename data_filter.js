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
}
 ]
};
