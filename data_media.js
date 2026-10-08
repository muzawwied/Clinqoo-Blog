// Clincoo Docs — kategori Media (8 Oktober 2026, 17:00 WIB) — 4 artikel baru
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["media"] = {
 "names": { "id": "Media", "en": "Media" },
 "articles": [
{
 "id": "media-breakpoint-mobile-first-min-width",
 "langs": {
  "id": {
   "title": "Cara Tulis Breakpoint Mobile-First dengan min-width",
   "desc": "Tata cara menyusun media query Clincoo dari layar sempit ke lebar memakai min-width, bukan menimpa desktop.",
   "content": "<p class=\"mb-4\">Query yang mulai dari desktop lalu menimpa di layar kecil sering tertinggal. Mobile-first menulis gaya dasar untuk layar sempit, lalu menambah aturan saat lebar cukup.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Dasar dulu, lalu min-width</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set kolom satu sebagai default. Tambah <code>@media (min-width: 48rem)</code> untuk dua kolom dan <code>@media (min-width: 64rem)</code> untuk tiga. Jangan campur max-width di berkas yang sama tanpa catatan, karena urutan sumber jadi sulit dilacak.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji tiga lebar nyata</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pratinjau 360, 768, dan 1200 piksel. Teks tombol tidak boleh terpotong di lebar terkecil. Simpan angka breakpoint di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya orang berikutnya tidak menambah 767px hanya karena kebiasaan lama.</p>",
   "source": "MDN — Using media queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries",
   "sourceSnippet": "min-width media queries add styles as the viewport grows, which matches a mobile-first cascade.",
   "source2": "MDN — min-width",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/min-width",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Write Mobile-First Breakpoints with min-width",
   "desc": "How to stack Clincoo media queries from a narrow screen upward with min-width instead of overriding a desktop layout.",
   "content": "<p class=\"mb-4\">Queries that start on desktop and then override small screens often leave leftovers. Mobile-first writes the base styles for a narrow screen, then adds rules when the width is enough.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Base first, then min-width</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set one column as the default. Add <code>@media (min-width: 48rem)</code> for two columns and <code>@media (min-width: 64rem)</code> for three. Do not mix max-width in the same file without a note, because source order becomes hard to trace.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test three real widths</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview 360, 768, and 1200 pixels. Button text must not clip at the smallest width. Save the breakpoint numbers on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next person does not add 767px out of old habit.</p>",
   "source": "MDN — Using media queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries",
   "sourceSnippet": "min-width media queries add styles as the viewport grows, which matches a mobile-first cascade.",
   "source2": "MDN — min-width",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/min-width",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "media-hover-hover-bukan-layar-sentuh",
 "langs": {
  "id": {
   "title": "Cara Pakai hover: hover supaya Gaya Hover Tidak Nyangkut di Layar Sentuh",
   "desc": "Tata cara membatasi gaya hover Clincoo ke perangkat yang benar-benar punya hover, bukan ke ketukan pertama di ponsel.",
   "content": "<p class=\"mb-4\">Di layar sentuh, :hover sering menempel setelah ketukan pertama sampai pengguna mengetuk tempat lain. Menu terlihat terbuka tanpa disengaja.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bungkus efek hover</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pindahkan perubahan warna dan bayangan ke <code>@media (hover: hover) and (pointer: fine)</code>. Di luar query itu, andalkan :focus-visible dan :active. Jangan menghapus fokus hanya karena hover ditiadakan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di pratinjau sentuh</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pakai mode perangkat sentuh. Ketuk kartu sekali: gaya tidak boleh tinggal. Jika tinggal, selektor hover masih di luar media query. Catat hasilnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — hover",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover",
   "sourceSnippet": "The hover media feature tests whether the primary input can hover over elements.",
   "source2": "MDN — pointer",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use hover: hover so Hover Styles Do Not Stick on Touch",
   "desc": "How to limit Clincoo hover styles to devices that really hover, instead of the first tap on a phone.",
   "content": "<p class=\"mb-4\">On a touch screen, :hover often sticks after the first tap until the user taps somewhere else. A menu looks open by accident.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Wrap the hover effect</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> move color and shadow changes into <code>@media (hover: hover) and (pointer: fine)</code>. Outside that query, rely on :focus-visible and :active. Do not remove focus just because hover is gated.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the touch preview</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> use touch device mode. Tap a card once: the style must not stay. If it stays, a hover selector is still outside the media query. Record the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — hover",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover",
   "sourceSnippet": "The hover media feature tests whether the primary input can hover over elements.",
   "source2": "MDN — pointer",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "media-prefers-color-scheme-tanpa-kilat",
 "langs": {
  "id": {
   "title": "Cara Pasang prefers-color-scheme tanpa Kilat Warna saat Muat",
   "desc": "Tata cara memilih tema terang atau gelap Clincoo dari media query tanpa warna salah yang berkedip di awal halaman.",
   "content": "<p class=\"mb-4\">Halaman yang mengatur warna hanya lewat skrip setelah muat akan berkedip putih atau gelap. Media query bisa menetapkan warna awal sebelum skrip jalan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Warna dasar di CSS</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set latar terang sebagai default, lalu <code>@media (prefers-color-scheme: dark)</code> menimpa variabel warna. Jangan menunggu kelas .dark dari skrip untuk warna pertama. Skrip hanya menyimpan pilihan manual pengguna.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Samakan dengan toggle</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ubah tema sistem, muat ulang, lalu bandingkan dengan tombol tema. Jika kilat muncul, ada warna inline yang menang sebelum query. Simpan urutan sumber di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — prefers-color-scheme",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",
   "sourceSnippet": "prefers-color-scheme detects whether the user prefers a light or dark color scheme.",
   "source2": "web.dev — prefers-color-scheme",
   "source2Url": "https://web.dev/articles/prefers-color-scheme",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Add prefers-color-scheme without a Color Flash on Load",
   "desc": "How to pick the Clincoo light or dark theme from a media query without a wrong color flashing at the start of the page.",
   "content": "<p class=\"mb-4\">A page that sets color only from script after load flashes white or dark. A media query can set the first colors before script runs.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Base colors in CSS</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set a light background as the default, then let <code>@media (prefers-color-scheme: dark)</code> override color variables. Do not wait for a .dark class from script for the first paint. Script only stores a manual user choice.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match the toggle</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> change the system theme, reload, then compare with the theme button. If a flash remains, an inline color wins before the query. Save the source order on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — prefers-color-scheme",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",
   "sourceSnippet": "prefers-color-scheme detects whether the user prefers a light or dark color scheme.",
   "source2": "web.dev — prefers-color-scheme",
   "source2Url": "https://web.dev/articles/prefers-color-scheme",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "media-width-bukan-device-width",
 "langs": {
  "id": {
   "title": "Cara Ganti device-width dengan width di Media Query",
   "desc": "Tata cara memperbaiki media query Clincoo yang memakai device-width sehingga breakpoint tidak ikut lebar viewport sungguhan.",
   "content": "<p class=\"mb-4\">device-width mengukur layar perangkat, bukan jendela. Di desktop yang diperkecil, query itu tidak pernah berubah dan tata letak tetap lebar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti fitur yang diukur</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> cari <code>max-device-width</code> dan <code>min-device-width</code>. Ganti dengan <code>max-width</code> atau <code>min-width</code>. Pastikan viewport meta memakai <code>width=device-width</code> supaya piksel CSS selaras, tetapi query tetap membaca lebar viewport.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan mengubah jendela</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> seret lebar pratinjau tanpa ganti perangkat. Tata letak harus berganti di breakpoint yang ditulis. Jika tidak, masih ada query device-width. Catat penggantinya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — width",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/width",
   "sourceSnippet": "The width media feature describes the width of the viewport, unlike device-width which describes the device screen.",
   "source2": "MDN — Viewport meta",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Replace device-width with width in a Media Query",
   "desc": "How to fix a Clincoo media query that uses device-width so the breakpoint follows the real viewport width.",
   "content": "<p class=\"mb-4\">device-width measures the device screen, not the window. On a narrowed desktop window that query never changes and the layout stays wide.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Change the feature you measure</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> find <code>max-device-width</code> and <code>min-device-width</code>. Replace them with <code>max-width</code> or <code>min-width</code>. Keep the viewport meta at <code>width=device-width</code> so CSS pixels line up, but let the query read the viewport width.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test by resizing the window</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> drag the preview width without switching devices. The layout should change at the written breakpoint. If it does not, a device-width query remains. Note the replacement on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — width",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/width",
   "sourceSnippet": "The width media feature describes the width of the viewport, unlike device-width which describes the device screen.",
   "source2": "MDN — Viewport meta",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
}
]
};
