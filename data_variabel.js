// Clincoo Docs — kategori Variabel (6 Oktober 2026, WIB) — 5 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["variabel"] = {
 "names": { "id": "Variabel", "en": "Variables" },
 "articles": [
{
 "id": "variabel-definisi-di-root",
 "langs": {
  "id":   {
   "title": "Cara Definisikan CSS Custom Property di :root",
   "desc": "Tata cara menaruh token warna dan jarak Clincoo di :root supaya komponen tidak mengulang nilai hex dan piksel.",
   "content": "<p class=\"mb-4\">Warna dan jarak yang ditulis ulang di setiap komponen mudah pecah saat tema berubah. Satu nilai hex yang berbeda sudah cukup membuat kartu tidak seragam.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu tempat untuk token</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> definisikan --warna-teks, --warna-latar, dan --jarak-kartu pada :root. Komponen memakai var(--warna-teks), bukan salinan hex. Nama diawali dua tanda hubung dan memakai huruf kecil.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji setelah ganti nilai</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ubah satu token lalu muat ulang pratinjau. Semua pemakai token harus ikut berubah. Catat daftar token di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya nama baru tidak bentrok.</p>",
   "source": "MDN — Using CSS custom properties",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "sourceSnippet": "Custom properties are defined with a -- prefix and read with the var() function.",
   "source2": "MDN — var()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/var",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Define CSS Custom Properties on :root",
   "desc": "How to put Clincoo color and spacing tokens on :root so components do not repeat hex and pixel values.",
   "content": "<p class=\"mb-4\">Colors and gaps copied into every component break when the theme changes. One mismatched hex is enough to make cards look uneven.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One place for tokens</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> define --warna-teks, --warna-latar, and --jarak-kartu on :root. Components use var(--warna-teks), not a copied hex. Names start with two hyphens and stay lowercase.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test after changing a value</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> change one token and reload the preview. Every consumer of that token should follow. Record the token list on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so new names do not collide.</p>",
   "source": "MDN — Using CSS custom properties",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "sourceSnippet": "Custom properties are defined with a -- prefix and read with the var() function.",
   "source2": "MDN — var()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/var",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "variabel-fallback-var",
 "langs": {
  "id":   {
   "title": "Cara Beri Fallback pada var() yang Kosong",
   "desc": "Tata cara menulis var(--token, nilai-cadangan) di Clincoo supaya komponen tetap tampil jika token belum didefinisikan.",
   "content": "<p class=\"mb-4\">var(--warna-aksen) tanpa cadangan membuat properti tidak valid jika token belum ada. Teks bisa jatuh ke warna awal browser dan hilang di latar gelap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cadangan di argumen kedua</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis color: var(--warna-aksen, #1f2937). Argumen kedua dipakai hanya jika token belum diwariskan. Jangan taruh var() lain yang juga kosong sebagai satu-satunya cadangan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan token dihapus</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> komen token di :root lalu muat ulang. Komponen harus tetap terbaca. Catat cadangan yang dipakai di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — var()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/var",
   "sourceSnippet": "The var() function accepts a fallback value used when the custom property is invalid or unset.",
   "source2": "MDN — Using CSS custom properties",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Give var() a Fallback When the Token Is Missing",
   "desc": "How to write var(--token, fallback) in Clincoo so a component still renders when the token is not defined.",
   "content": "<p class=\"mb-4\">var(--warna-aksen) with no fallback makes the property invalid if the token is missing. Text can fall back to the browser default and disappear on a dark background.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Fallback in the second argument</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write color: var(--warna-aksen, #1f2937). The second argument applies only when the token is not inherited. Do not use another empty var() as the only fallback.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test with the token removed</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> comment out the :root token and reload. The component should stay readable. Record the fallback on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — var()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/var",
   "sourceSnippet": "The var() function accepts a fallback value used when the custom property is invalid or unset.",
   "source2": "MDN — Using CSS custom properties",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "variabel-tema-gelap",
 "langs": {
  "id":   {
   "title": "Cara Ganti Tema Gelap lewat Variabel Warna",
   "desc": "Tata cara menimpa token warna Clincoo di prefers-color-scheme atau kelas .gelap tanpa menyalin ulang stylesheet.",
   "content": "<p class=\"mb-4\">Tema gelap yang menduplikasi seluruh stylesheet mudah ketinggalan. Satu komponen baru sering tetap terang karena lupa disalin.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Timpa token, bukan aturan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> biarkan komponen memakai var(--warna-latar). Di blok @media (prefers-color-scheme: dark) atau .gelap, timpa --warna-latar dan --warna-teks saja. Jangan ulangi margin dan ukuran font di blok tema.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji kontras</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> nyalakan mode gelap sistem. Teks dan tombol harus tetap kontras. Catat pasangan token di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — prefers-color-scheme",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",
   "sourceSnippet": "The prefers-color-scheme media feature lets a page match the user light or dark preference.",
   "source2": "MDN — Using CSS custom properties",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Switch a Dark Theme with Color Variables",
   "desc": "How to override Clincoo color tokens in prefers-color-scheme or a .gelap class without copying the stylesheet.",
   "content": "<p class=\"mb-4\">A dark theme that duplicates the whole stylesheet falls behind. A new component often stays light because nobody copied its rules.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Override tokens, not rules</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> keep components on var(--warna-latar). In @media (prefers-color-scheme: dark) or .gelap, override --warna-latar and --warna-teks only. Do not repeat margin and font size in the theme block.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check contrast</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> enable the system dark mode. Text and buttons should stay contrasted. Record the token pairs on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — prefers-color-scheme",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",
   "sourceSnippet": "The prefers-color-scheme media feature lets a page match the user light or dark preference.",
   "source2": "MDN — Using CSS custom properties",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "variabel-skala-jarak",
 "langs": {
  "id":   {
   "title": "Cara Satukan Skala Jarak dengan Variabel",
   "desc": "Tata cara mengganti margin dan gap acak di Clincoo dengan tangga token --jarak-1 sampai --jarak-4.",
   "content": "<p class=\"mb-4\">Margin 13px di satu kartu dan 16px di kartu lain membuat irama halaman pecah. Angka ajaib sulit diaudit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tangga kelipatan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set --jarak-1: 0.25rem, --jarak-2: 0.5rem, --jarak-3: 1rem, --jarak-4: 1.5rem pada :root. Gap dan padding memakai var(--jarak-3). Jangan campur piksel lepas di komponen yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di layar sempit</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> sempitkan pratinjau. Jarak harus tetap proporsional, bukan menumpuk. Catat tangga yang disepakati di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using CSS custom properties",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "sourceSnippet": "Custom properties can store spacing tokens and be reused with var() across a stylesheet.",
   "source2": "MDN — gap",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/gap",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Unify a Spacing Scale with Variables",
   "desc": "How to replace ad-hoc Clincoo margins and gaps with a --jarak-1 to --jarak-4 token scale.",
   "content": "<p class=\"mb-4\">A 13px margin on one card and 16px on another breaks the page rhythm. Magic numbers are hard to audit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">A stepped scale</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set --jarak-1: 0.25rem, --jarak-2: 0.5rem, --jarak-3: 1rem, and --jarak-4: 1.5rem on :root. Gap and padding use var(--jarak-3). Do not mix loose pixels in the same component.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test on a narrow screen</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> narrow the preview. Spacing should stay proportional, not stack into a lump. Record the agreed scale on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using CSS custom properties",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "sourceSnippet": "Custom properties can store spacing tokens and be reused with var() across a stylesheet.",
   "source2": "MDN — gap",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/gap",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "variabel-debug-tidak-terpakai",
 "langs": {
  "id":   {
   "title": "Cara Debug Variabel CSS yang Tidak Terpakai",
   "desc": "Tata cara melacak token Clincoo yang tidak berubah: salah ejaan, tidak diwariskan, atau ditimpa di scope yang lebih dekat.",
   "content": "<p class=\"mb-4\">Mengubah --warna-aksen di :root tidak memengaruhi tombol jika komponen memakai --warna-aksen-btn atau menimpa token di kelas sendiri.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek nama dan computed</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> samakan ejaan token di definisi dan di var(). Di DevTools lihat Computed: jika nilai invalid, token tidak terwariskan ke elemen itu. Hapus penimpaan di kelas yang lebih dekat sebelum menambah token baru.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji satu elemen</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pilih tombol yang bandel dan cocokkan nama token dengan :root. Catat penyebabnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya debug berikutnya tidak mengulang tebakan.</p>",
   "source": "MDN — Using CSS custom properties",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "sourceSnippet": "Invalid custom properties are treated as unset at computed-value time when used with var().",
   "source2": "Chrome DevTools — CSS overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/css",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Debug an Unused or Invalid CSS Variable",
   "desc": "How to trace a Clincoo token that does not change: a typo, a missing inheritance, or a nearer scope override.",
   "content": "<p class=\"mb-4\">Changing --warna-aksen on :root does nothing to a button that uses --warna-aksen-btn or overrides the token on its own class.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the name and computed style</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> match the token spelling in the definition and in var(). In DevTools check Computed: an invalid value means the token is not inherited there. Remove the nearer override before adding a new token.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test one element</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> select the stubborn button and match its token name to :root. Record the cause on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next debug does not repeat the guess.</p>",
   "source": "MDN — Using CSS custom properties",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "sourceSnippet": "Invalid custom properties are treated as unset at computed-value time when used with var().",
   "source2": "Chrome DevTools — CSS overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/css",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
