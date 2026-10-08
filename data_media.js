// Clincoo Docs — tambah 3 artikel Media (8 Oktober 2026, 19:00 WIB)
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
,
{
 "id": "media-prefers-reduced-motion-matikan-animasi",
 "langs": {
  "id": {
   "title": "Cara Matikan Animasi dengan prefers-reduced-motion",
   "desc": "Tata cara membungkus animasi Clincoo di media query prefers-reduced-motion supaya pengunjung yang minta sedikit gerak tidak dapat transisi.",
   "content": "<p class=\"mb-4\">Animasi yang selalu jalan mengabaikan pengaturan sistem. Query prefers-reduced-motion harus mematikan transisi, bukan hanya memperlambatnya sedikit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bungkus gerak, jangan defaultkan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis gaya diam sebagai dasar. Tambah <code>@media (prefers-reduced-motion: no-preference)</code> hanya untuk transisi menu dan skeleton. Jangan set <code>animation: none</code> di akhir berkas tanpa query, karena aturan itu bisa kalah oleh komponen yang dimuat belakangan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dari emulasi browser</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka rendering prefers-reduced-motion. Kartu tidak boleh masih meluncur. Catat pengecualian yang disengaja, misalnya indikator progres yang wajib, di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — prefers-reduced-motion",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
   "sourceSnippet": "The prefers-reduced-motion media feature detects whether the user has requested the system minimize non-essential motion.",
   "source2": "WCAG — Animation from Interactions",
   "source2Url": "https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Turn Off Animation with prefers-reduced-motion",
   "desc": "How to wrap Clincoo animation in a prefers-reduced-motion media query so visitors who ask for less motion do not get transitions.",
   "content": "<p class=\"mb-4\">Animation that always runs ignores the system setting. A prefers-reduced-motion query should turn transitions off, not merely slow them a little.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Wrap motion, do not assume it</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write a still style as the base. Add <code>@media (prefers-reduced-motion: no-preference)</code> only for menu transitions and skeletons. Do not set <code>animation: none</code> at the end of the file without a query, because a later component can override it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test from browser emulation</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> enable the prefers-reduced-motion rendering. Cards must not still slide. Record intentional exceptions, such as a required progress indicator, on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — prefers-reduced-motion",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
   "sourceSnippet": "The prefers-reduced-motion media feature detects whether the user has requested the system minimize non-essential motion.",
   "source2": "WCAG — Animation from Interactions",
   "source2Url": "https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "media-pointer-coarse-perbesar-target",
 "langs": {
  "id": {
   "title": "Cara Perbesar Target Sentuh dengan pointer: coarse",
   "desc": "Tata cara memakai media query pointer: coarse di Clincoo supaya tombol dan tautan cukup besar di layar sentuh.",
   "content": "<p class=\"mb-4\">Lebar layar tidak sama dengan ketepatan penunjuk. Tablet lebar tetap memakai jari, jadi breakpoint min-width saja tidak memperbesar target.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Naikkan hit area saat coarse</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambah <code>@media (pointer: coarse)</code> untuk padding tombol minimal 44px dan jarak antar tautan. Jangan andalkan hover untuk membuka submenu di query yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek mouse dan jari</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> uji mode sentuh dan mouse. Target yang rapat di desktop boleh tetap rapat. Simpan ukuran minimum di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya komponen baru tidak kembali ke 28px.</p>",
   "source": "MDN — pointer",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer",
   "sourceSnippet": "The pointer media feature tests whether the primary input mechanism has a fine or coarse pointing accuracy.",
   "source2": "WCAG — Target Size",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Enlarge Touch Targets with pointer: coarse",
   "desc": "How to use a pointer: coarse media query in Clincoo so buttons and links stay large enough on touch screens.",
   "content": "<p class=\"mb-4\">Screen width is not pointer precision. A wide tablet still uses a finger, so a min-width breakpoint alone does not enlarge targets.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Raise the hit area when coarse</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add <code>@media (pointer: coarse)</code> for button padding of at least 44px and space between links. Do not rely on hover to open a submenu in the same query.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check mouse and finger</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> test touch mode and a mouse. Tight desktop targets can stay tight. Record the minimum size on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so new components do not drop back to 28px.</p>",
   "source": "MDN — pointer",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer",
   "sourceSnippet": "The pointer media feature tests whether the primary input mechanism has a fine or coarse pointing accuracy.",
   "source2": "WCAG — Target Size",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "media-orientation-uji-portrait-landscape",
 "langs": {
  "id": {
   "title": "Cara Uji Orientasi Portrait dan Landscape di Media Query",
   "desc": "Tata cara memakai orientation di Clincoo tanpa menggantikan breakpoint lebar, lalu menguji putar layar.",
   "content": "<p class=\"mb-4\">Query orientation berguna untuk tata letak yang berubah saat perangkat diputar, bukan pengganti min-width. Ponsel landscape sering lebih pendek daripada desktop sempit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gabungkan dengan tinggi</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pakai <code>@media (orientation: landscape) and (max-height: 30rem)</code> untuk menyembunyikan hero tinggi. Jangan pindahkan navigasi hanya karena orientation: landscape, karena monitor desktop juga landscape.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Putar pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> putar 390x844 menjadi landscape. Form tidak boleh tertutup keyboard virtual dalam catatan uji. Simpan pasangan lebar-tinggi di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — orientation",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation",
   "sourceSnippet": "The orientation media feature describes whether the viewport is portrait or landscape.",
   "source2": "MDN — Using media queries",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Test Portrait and Landscape Orientation in a Media Query",
   "desc": "How to use orientation in Clincoo without replacing width breakpoints, then test a screen rotation.",
   "content": "<p class=\"mb-4\">An orientation query helps layouts that change when the device rotates. It is not a replacement for min-width. A phone in landscape is often shorter than a narrow desktop.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Combine it with height</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> use <code>@media (orientation: landscape) and (max-height: 30rem)</code> to hide a tall hero. Do not move navigation only because of orientation: landscape, because a desktop monitor is landscape too.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Rotate the preview</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> rotate 390x844 into landscape. The form must not be covered by the virtual keyboard in the test notes. Save the width-height pair on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — orientation",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation",
   "sourceSnippet": "The orientation media feature describes whether the viewport is portrait or landscape.",
   "source2": "MDN — Using media queries",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "media-prefers-contrast-more-perkuat-batas",
 "langs": {
  "id": {
   "title": "Cara Perkuat Batas dengan prefers-contrast: more",
   "desc": "Tata cara menaikkan kontras batas dan teks Clincoo lewat media query prefers-contrast tanpa mengubah tema untuk semua orang.",
   "content": "<p class=\"mb-4\">Kartu yang hanya dibedakan warna latar gagal saat pengguna minta kontras lebih. Query prefers-contrast menambah batas, bukan mengganti seluruh palet secara diam-diam.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tambah batas yang terlihat</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis <code>@media (prefers-contrast: more)</code> untuk border 2px pada input dan kartu. Naikkan juga warna teks sekunder. Jangan hapus fokus; ring harus tetap lebih tebal daripada keadaan biasa.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Emulasikan, lalu bandingkan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> aktifkan prefers-contrast. Placeholder tidak boleh hilang. Simpan tangkapan sebelum-sesudah di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — prefers-contrast",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast",
   "sourceSnippet": "The prefers-contrast media feature detects whether the user has requested more or less contrast.",
   "source2": "WCAG — Contrast (Minimum)",
   "source2Url": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Strengthen Borders with prefers-contrast: more",
   "desc": "How to raise Clincoo border and text contrast with a prefers-contrast media query without changing the theme for everyone.",
   "content": "<p class=\"mb-4\">A card distinguished only by background color fails when the user asks for more contrast. A prefers-contrast query adds borders instead of silently replacing the whole palette.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add a visible border</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write <code>@media (prefers-contrast: more)</code> for a 2px border on inputs and cards. Raise secondary text color too. Do not remove focus; the ring should stay thicker than the default.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Emulate, then compare</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> enable prefers-contrast. Placeholders must not disappear. Save before-and-after captures on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — prefers-contrast",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast",
   "sourceSnippet": "The prefers-contrast media feature detects whether the user has requested more or less contrast.",
   "source2": "WCAG — Contrast (Minimum)",
   "source2Url": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "media-forced-colors-jangan-kunci-warna",
 "langs": {
  "id": {
   "title": "Cara Jangan Kunci Warna saat forced-colors Aktif",
   "desc": "Tata cara menata komponen Clincoo di media query forced-colors supaya border dan ikon tetap terlihat di mode kontras tinggi sistem.",
   "content": "<p class=\"mb-4\">Mode kontras tinggi sistem mengganti warna yang dikunci di CSS. Background tetap dan border transparan membuat tombol hilang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai warna sistem</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambah <code>@media (forced-colors: active)</code>. Set border <code>ButtonText</code>, latar <code>Canvas</code>, dan ikon <code>currentColor</code>. Hindari <code>background-image</code> sebagai satu-satunya penanda status.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Aktifkan forced colors</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> emulasikan forced-colors. Fokus dan status error harus tetap berupa garis, bukan hanya merah. Catat pengecualian di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — forced-colors",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors",
   "sourceSnippet": "The forced-colors media feature detects when the user agent is enforcing a limited palette, such as Windows high contrast.",
   "source2": "MDN — System colors",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/system-color",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid Locked Colors When forced-colors Is Active",
   "desc": "How to style Clincoo components in a forced-colors media query so borders and icons stay visible in the system high-contrast mode.",
   "content": "<p class=\"mb-4\">System high contrast replaces colors locked in CSS. A fixed background and a transparent border make a button disappear.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use system colors</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add <code>@media (forced-colors: active)</code>. Set the border to <code>ButtonText</code>, the background to <code>Canvas</code>, and icons to <code>currentColor</code>. Avoid a <code>background-image</code> as the only status cue.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Enable forced colors</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> emulate forced-colors. Focus and error state must remain a line, not only red. Record exceptions on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — forced-colors",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors",
   "sourceSnippet": "The forced-colors media feature detects when the user agent is enforcing a limited palette, such as Windows high contrast.",
   "source2": "MDN — System colors",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/system-color",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
,
{
 "id": "media-prefers-reduced-data-ringankan-aset",
 "langs": {
  "id": {
   "title": "Cara Ringankan Aset saat prefers-reduced-data Aktif",
   "desc": "Tata cara mendeteksi prefers-reduced-data di Clincoo supaya gambar hero dan video tidak diunduh saat pengunjung menghemat data.",
   "content": "<p class=\"mb-4\">Beberapa pengunjung menyalakan hemat data di sistem. Halaman yang tetap memuat video latar dan gambar lebar membuat pratinjau Clincoo terasa berat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek fitur media</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bungkus sumber berat dengan <code>@media (prefers-reduced-data: reduce)</code>. Sembunyikan video latar, turunkan kualitas gambar, dan tampilkan poster statis. Jangan andalkan fitur ini sendirian karena dukungannya belum merata.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> emulasikan reduced-data lewat DevTools Rendering. Pastikan teks dan tombol tetap ada tanpa video. Catat keputusan aset di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — prefers-reduced-data",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data",
   "sourceSnippet": "The prefers-reduced-data media feature detects when the user has requested the web content that consumes less internet traffic.",
   "source2": "web.dev — Adaptive loading",
   "source2Url": "https://web.dev/articles/adaptive-loading-cds-2019",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Lighten Assets When prefers-reduced-data Is Active",
   "desc": "How to detect prefers-reduced-data in Clincoo so the hero image and video are not downloaded when a visitor is saving data.",
   "content": "<p class=\"mb-4\">Some visitors enable data saver on the system. A page that still loads a background video and a wide image makes the Clincoo preview feel heavy.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the media feature</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> wrap heavy sources with <code>@media (prefers-reduced-data: reduce)</code>. Hide the background video, lower image quality, and show a static poster. Do not rely on this feature alone because support is not even yet.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in preview</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> emulate reduced-data through DevTools Rendering. Make sure text and buttons remain without the video. Record the asset decision on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — prefers-reduced-data",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data",
   "sourceSnippet": "The prefers-reduced-data media feature detects when the user has requested the web content that consumes less internet traffic.",
   "source2": "web.dev — Adaptive loading",
   "source2Url": "https://web.dev/articles/adaptive-loading-cds-2019",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "media-scripting-none-dasar-tanpa-js",
 "langs": {
  "id": {
   "title": "Cara Siapkan Tampilan Dasar saat scripting none",
   "desc": "Tata cara memakai media query scripting: none supaya halaman Clincoo tetap terbaca jika JavaScript tidak berjalan.",
   "content": "<p class=\"mb-4\">Menu yang hanya muncul setelah skrip berjalan kosong saat JavaScript diblokir. Pengunjung melihat halaman tanpa navigasi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis dasar di HTML</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> letakkan tautan utama di HTML, lalu tambah <code>@media (scripting: none)</code> untuk menampilkan daftar cadangan dan menyembunyikan tombol yang butuh skrip. Jangan sembunyikan konten utama dengan <code>hidden</code> yang hanya dibuka JS.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Matikan JavaScript sebentar</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> nonaktifkan JavaScript di DevTools dan muat ulang. Judul, harga, dan tautan kontak harus tetap ada. Simpan catatan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scripting",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/scripting",
   "sourceSnippet": "The scripting media feature tests whether scripting such as JavaScript is available.",
   "source2": "MDN — Progressive enhancement",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Prepare a Base View When scripting Is none",
   "desc": "How to use the scripting: none media query so a Clincoo page stays readable when JavaScript does not run.",
   "content": "<p class=\"mb-4\">A menu that appears only after a script runs is empty when JavaScript is blocked. The visitor sees a page without navigation.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write the base in HTML</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> put the main links in HTML, then add <code>@media (scripting: none)</code> to show a fallback list and hide buttons that need a script. Do not hide the main content with <code>hidden</code> that only JS opens.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Disable JavaScript briefly</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> disable JavaScript in DevTools and reload. The title, price, and contact link must remain. Save the note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scripting",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/scripting",
   "sourceSnippet": "The scripting media feature tests whether scripting such as JavaScript is available.",
   "source2": "MDN — Progressive enhancement",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "media-display-mode-standalone-bedakan-pwa",
 "langs": {
  "id": {
   "title": "Cara Bedakan Tampilan PWA dengan display-mode standalone",
   "desc": "Tata cara memakai display-mode: standalone di Clincoo supaya situs yang dipasang sebagai aplikasi tidak menampilkan ajakan pasang berulang.",
   "content": "<p class=\"mb-4\">Spanduk pasang aplikasi yang tetap muncul di jendela standalone membingungkan. Pengunjung sudah membuka Clincoo dari ikon layar utama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pisahkan gaya terpasang</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> sembunyikan spanduk dengan <code>@media (display-mode: standalone)</code>. Tambah jarak atas jika status bar menutup judul. Cek juga <code>display-mode: browser</code> untuk tombol pasang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji jendela terpasang</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka pratinjau lewat aplikasi terpasang atau emulasi display-mode. Pastikan navigasi tidak tertutup. Tulis hasilnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — display-mode",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/display-mode",
   "sourceSnippet": "The display-mode media feature tests the display mode of the web app, such as browser or standalone.",
   "source2": "web.dev — Add a web app manifest",
   "source2Url": "https://web.dev/articles/add-manifest",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Tell a PWA Apart with display-mode standalone",
   "desc": "How to use display-mode: standalone in Clincoo so a site installed as an app does not keep showing an install prompt.",
   "content": "<p class=\"mb-4\">An install banner that still appears in a standalone window is confusing. The visitor already opened Clincoo from the home-screen icon.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Separate the installed style</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> hide the banner with <code>@media (display-mode: standalone)</code>. Add top spacing if the status bar covers the title. Also check <code>display-mode: browser</code> for the install button.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test the installed window</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the preview through the installed app or a display-mode emulation. Make sure navigation is not covered. Write the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — display-mode",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/display-mode",
   "sourceSnippet": "The display-mode media feature tests the display mode of the web app, such as browser or standalone.",
   "source2": "web.dev — Add a web app manifest",
   "source2Url": "https://web.dev/articles/add-manifest",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
