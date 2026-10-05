// Clincoo Docs — kategori CLS (5 Oktober 2026, WIB) — 15 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["cls"] = {
 "names": { "id": "CLS", "en": "CLS" },
 "articles": [
{
 "id": "cls-ukur-di-panel-performance",
 "langs": {
  "id": {
   "title": "Cara Ukur Pergeseran Layout di Panel Performance",
   "desc": "Tata cara merekam sesi di panel Performance Clincoo dan membaca entri layout shift supaya perbaikan tidak ditebak dari layar yang hanya terlihat goyang.",
   "content": "<p class=\"mb-4\">Layar yang goyang belum tentu CLS tinggi. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka DevTools, panel Performance, lalu rekam muat ulang pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Rekam sekali, jangan klik dulu</h2><p class=\"mb-4\">Centang Web Vitals jika ada, mulai rekaman, muat ulang, lalu berhenti setelah konten utama terlihat. Entri Layout Shift menunjukkan elemen dan skor. Jangan campur dengan klik yang memang memindahkan layout.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat elemen, bukan hanya angka</h2><p class=\"mb-4\">Skor tanpa nama node tidak bisa diperbaiki. Salin selector atau teks node yang bergeser. Bandingkan dua rekaman: sebelum dan sesudah satu perubahan saja.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan cuplikan sesi</h2><p class=\"mb-4\">Tulis skor dan elemen di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya tim tidak mengulang rekaman yang sama saat deploy berikutnya.</p>",
   "source": "Chrome Developers — Layout shift",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/performance/reference",
   "sourceSnippet": "The Performance panel records a trace of what the browser does while a page loads or runs.",
   "source2": "web.dev — Cumulative Layout Shift",
   "source2Url": "https://web.dev/articles/cls",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Measure Layout Shift in the Performance Panel",
   "desc": "How to record a session in the Clincoo Performance panel and read layout-shift entries so a fix is not guessed from a screen that only looks jumpy.",
   "content": "<p class=\"mb-4\">A jumpy screen is not automatically a high CLS. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open DevTools, the Performance panel, and record a reload of the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record once, do not click yet</h2><p class=\"mb-4\">Enable Web Vitals if it is there, start the recording, reload, then stop after the main content is visible. A Layout Shift entry names the element and the score. Do not mix that with a click that is meant to move the layout.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Note the element, not only the number</h2><p class=\"mb-4\">A score without a node name cannot be fixed. Copy the selector or the text of the node that moved. Compare two recordings: before and after one change only.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep the session note</h2><p class=\"mb-4\">Write the score and the element on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the team does not repeat the same recording on the next deploy.</p>",
   "source": "Chrome Developers — Layout shift",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/performance/reference",
   "sourceSnippet": "The Performance panel records a trace of what the browser does while a page loads or runs.",
   "source2": "web.dev — Cumulative Layout Shift",
   "source2Url": "https://web.dev/articles/cls",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "cls-slot-tinggi-untuk-embed",
 "langs": {
  "id": {
   "title": "Cara Siapkan Slot Tinggi untuk Embed Pihak Ketiga",
   "desc": "Tata cara memberi iframe atau widget Clincoo tinggi minimum sebelum skrip pihak ketiga selesai, supaya konten di bawahnya tidak terdorong.",
   "content": "<p class=\"mb-4\">Embed yang tinggi nol lalu melonjak adalah sumber pergeseran yang sering. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bungkus iframe dengan div yang sudah punya min-height.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tentukan tinggi sebelum skrip jalan</h2><p class=\"mb-4\">Pakai aspect-ratio atau min-height yang mendekati ukuran akhir. Jangan menunggu onload untuk memberi tinggi. Jika ukuran tidak diketahui, pakai perkiraan yang lebih kecil daripada tinggi akhir yang biasa, lalu sesuaikan setelah diukur.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan sisipkan embed di atas lipatan tanpa slot</h2><p class=\"mb-4\">Widget yang disuntik di atas judul mendorong seluruh halaman. Taruh di bawah konten utama, atau siapkan slot kosong yang sudah terlihat di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji koneksi lambat</h2><p class=\"mb-4\">Throttle jaringan, muat ulang, dan pastikan teks di bawah embed tidak melompat. Catat tinggi slot di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — aspect-ratio",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "sourceSnippet": "The aspect-ratio CSS property allows you to define the desired width-to-height ratio of an element's box.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Reserve a Height Slot for a Third-Party Embed",
   "desc": "How to give a Clincoo iframe or widget a minimum height before the third-party script finishes, so content below it is not pushed down.",
   "content": "<p class=\"mb-4\">An embed that starts at zero height and then jumps is a common shift source. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> wrap the iframe in a div that already has min-height.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set the height before the script runs</h2><p class=\"mb-4\">Use aspect-ratio or a min-height close to the final size. Do not wait for onload to assign a height. If the size is unknown, use an estimate smaller than the usual final height, then adjust after you measure it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not inject an embed above the fold without a slot</h2><p class=\"mb-4\">A widget injected above the heading pushes the whole page. Place it below the main content, or reserve an empty slot that is already visible in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test a slow connection</h2><p class=\"mb-4\">Throttle the network, reload, and confirm the text below the embed does not jump. Note the slot height on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — aspect-ratio",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "sourceSnippet": "The aspect-ratio CSS property allows you to define the desired width-to-height ratio of an element's box.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cls-font-fallback-dengan-size-adjust",
 "langs": {
  "id": {
   "title": "Cara Samakan Font Cadangan dengan size-adjust",
   "desc": "Tata cara menyesuaikan font cadangan di Clincoo dengan size-adjust dan ascent-override supaya teks tidak meloncat saat webfont selesai dimuat.",
   "content": "<p class=\"mb-4\">Webfont yang datang terlambat mengubah lebar baris. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> deklarasikan font-face cadangan dengan size-adjust, bukan hanya font-display swap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur selisih dulu</h2><p class=\"mb-4\">Bandingkan lebar kalimat yang sama dengan font akhir dan font sistem. size-adjust mendekatkan ukuran. ascent-override dan descent-override menahan garis dasar. Jangan menebak angka tanpa mengukur di pratinjau.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Swap hanya setelah metrik dekat</h2><p class=\"mb-4\">font-display: swap tetap berguna, tetapi tanpa metrik cadangan ia justru membuat pergeseran. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan cache font dikosongkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan memuat banyak keluarga</h2><p class=\"mb-4\">Satu keluarga untuk judul dan isi sudah cukup. Catat nilai override di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> agar halaman lain memakai angka yang sama.</p>",
   "source": "MDN — size-adjust",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/size-adjust",
   "sourceSnippet": "The size-adjust CSS descriptor defines a multiplier for glyph outlines and metrics associated with this font.",
   "source2": "MDN — font-display",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Match a Fallback Font with size-adjust",
   "desc": "How to tune the Clincoo fallback font with size-adjust and ascent-override so text does not jump when the webfont finishes loading.",
   "content": "<p class=\"mb-4\">A late webfont changes line width. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> declare a fallback font-face with size-adjust, not only font-display swap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure the gap first</h2><p class=\"mb-4\">Compare the width of the same sentence in the final font and the system font. size-adjust brings the size closer. ascent-override and descent-override hold the baseline. Do not guess numbers without measuring in preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Swap only after the metrics are close</h2><p class=\"mb-4\">font-display: swap is still useful, but without fallback metrics it causes the shift. Test on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> with the font cache cleared.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not load many families</h2><p class=\"mb-4\">One family for headings and body is enough. Note the override values on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so other pages use the same numbers.</p>",
   "source": "MDN — size-adjust",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/size-adjust",
   "sourceSnippet": "The size-adjust CSS descriptor defines a multiplier for glyph outlines and metrics associated with this font.",
   "source2": "MDN — font-display",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cls-skeleton-tinggi-tetap",
 "langs": {
  "id": {
   "title": "Cara Buat Skeleton dengan Tinggi yang Tetap",
   "desc": "Tata cara membuat placeholder Clincoo yang tingginya sama dengan kartu akhir, supaya daftar tidak memanjang saat data selesai dimuat.",
   "content": "<p class=\"mb-4\">Skeleton yang lebih pendek dari kartu akhir mendorong konten di bawahnya. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> samakan tinggi blok placeholder dengan kartu yang akan menggantikannya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu tinggi untuk satu jenis kartu</h2><p class=\"mb-4\">Jika kartu punya gambar dan dua baris teks, skeleton harus punya ruang itu juga. Jangan memakai tiga garis pendek untuk kartu yang sebenarnya tinggi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti node, jangan menumpuk</h2><p class=\"mb-4\">Saat data datang, ganti skeleton, jangan sisipkan kartu di bawahnya. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan jaringan lambat: posisi footer tidak boleh turun setelah data tampil.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jumlah item yang stabil</h2><p class=\"mb-4\">Tampilkan jumlah skeleton yang sama dengan jumlah kartu yang diharapkan. Catat pola ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Optimize CLS",
   "sourceUrl": "https://web.dev/articles/optimize-cls",
   "sourceSnippet": "Always include size attributes on your images and video elements, or reserve the required space with CSS.",
   "source2": "MDN — min-height",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/min-height",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Build a Skeleton with a Fixed Height",
   "desc": "How to build a Clincoo placeholder with the same height as the final card, so a list does not grow when the data finishes loading.",
   "content": "<p class=\"mb-4\">A skeleton shorter than the final card pushes content below it. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> match the placeholder block height to the card that will replace it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One height for one card type</h2><p class=\"mb-4\">If the card has an image and two lines of text, the skeleton needs that space too. Do not use three short bars for a card that is actually tall.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Replace the node, do not stack</h2><p class=\"mb-4\">When data arrives, replace the skeleton. Do not insert the card below it. Test on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> with a slow network: the footer position should not drop after the data appears.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">A stable item count</h2><p class=\"mb-4\">Show the same number of skeletons as the expected cards. Note this pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Optimize CLS",
   "sourceUrl": "https://web.dev/articles/optimize-cls",
   "sourceSnippet": "Always include size attributes on your images and video elements, or reserve the required space with CSS.",
   "source2": "MDN — min-height",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/min-height",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "cls-banner-jangan-dorong-konten",
 "langs": {
  "id": {
   "title": "Cara Pasang Banner Tanpa Mendorong Konten",
   "desc": "Tata cara menaruh pengumuman Clincoo di atas halaman tanpa menggeser judul, dengan ruang yang sudah dicadangkan atau posisi yang tidak mendorong alur baca.",
   "content": "<p class=\"mb-4\">Banner yang disisipkan setelah muat mendorong h1. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> sisakan ruang di markup, atau tampilkan pengumuman di tempat yang tidak mengubah posisi judul.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cadangkan ruang jika banner pasti ada</h2><p class=\"mb-4\">Jika pengumuman selalu tampil, tulis tingginya di CSS sejak awal. Jangan menyuntikkan elemen baru di atas main setelah fetch selesai.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pilihan yang tidak mendorong</h2><p class=\"mb-4\">Banner yang hanya sesekali muncul bisa menempel di bawah viewport, bukan di atas judul. Cek pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pada lebar ponsel: banner tidak boleh menutup tombol utama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur sebelum dan sesudah</h2><p class=\"mb-4\">Rekam CLS dengan banner menyala dan mati. Selisihnya harus kecil. Simpan keputusan tata letak di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Cumulative Layout Shift",
   "sourceUrl": "https://web.dev/articles/cls",
   "sourceSnippet": "Unexpected layout shifts are bad for user experience and can happen when content moves without user interaction.",
   "source2": "MDN — position",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Place a Banner Without Pushing Content",
   "desc": "How to place a Clincoo announcement above the page without shifting the heading, using reserved space or a position that does not push the reading flow.",
   "content": "<p class=\"mb-4\">A banner inserted after load pushes the h1. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> reserve space in the markup, or show the announcement where it does not move the heading.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reserve space if the banner is always there</h2><p class=\"mb-4\">If the announcement always shows, set its height in CSS from the start. Do not inject a new element above main after fetch finishes.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">A choice that does not push</h2><p class=\"mb-4\">A banner that only appears sometimes can stick to the bottom of the viewport, not above the heading. Check the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview at phone width: the banner must not cover the primary button.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure before and after</h2><p class=\"mb-4\">Record CLS with the banner on and off. The difference should be small. Keep the layout decision on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Cumulative Layout Shift",
   "sourceUrl": "https://web.dev/articles/cls",
   "sourceSnippet": "Unexpected layout shifts are bad for user experience and can happen when content moves without user interaction.",
   "source2": "MDN — position",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "cls-scrollbar-gutter-stabil",
 "langs": {
  "id": {
   "title": "Cara Hentikan Pergeseran karena Scrollbar",
   "desc": "Tata cara memakai scrollbar-gutter di Clincoo supaya konten tidak bergeser saat scrollbar muncul setelah halaman tinggi.",
   "content": "<p class=\"mb-4\">Scrollbar yang muncul belakangan menyempitkan lebar konten. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> set scrollbar-gutter: stable pada html sebelum pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> diukur.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cadangkan ruang scrollbar dari awal</h2><p class=\"mb-4\">stable menahan gutter meski scrollbar belum ada. stable both juga mencadangkan sisi kiri jika arah tulisan RTL. Jangan mengandalkan overflow: scroll di body hanya untuk menyembunyikan gejala.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji halaman pendek dan panjang</h2><p class=\"mb-4\">Buka pratinjau yang muat di satu layar, lalu halaman yang lebih tinggi dari viewport. Judul dan tombol tidak boleh melompat horizontal saat tinggi berubah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat keputusan di docs</h2><p class=\"mb-4\">Tulis nilai gutter yang dipakai di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a> agar template lain tidak mengatur ulang lebar dengan trik margin.</p>",
   "source": "MDN — scrollbar-gutter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter",
   "sourceSnippet": "The scrollbar-gutter CSS property allows authors to reserve space for the scrollbar.",
   "source2": "web.dev — Cumulative Layout Shift",
   "source2Url": "https://web.dev/articles/cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Stop Layout Shift from the Scrollbar",
   "desc": "How to use scrollbar-gutter in Clincoo so content does not shift when a scrollbar appears after the page grows.",
   "content": "<p class=\"mb-4\">A scrollbar that appears late narrows the content. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> set scrollbar-gutter: stable on html before you measure the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reserve the scrollbar space from the start</h2><p class=\"mb-4\">stable keeps the gutter even when the scrollbar is not there yet. stable both also reserves the left side for RTL. Do not rely on overflow: scroll on body only to hide the symptom.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test a short page and a long page</h2><p class=\"mb-4\">Open a preview that fits one screen, then a page taller than the viewport. Headings and buttons must not jump sideways when the height changes.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Note the decision in docs</h2><p class=\"mb-4\">Write the gutter value you use on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a> so other templates do not redo the width with a margin trick.</p>",
   "source": "MDN — scrollbar-gutter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter",
   "sourceSnippet": "The scrollbar-gutter CSS property allows authors to reserve space for the scrollbar.",
   "source2": "web.dev — Cumulative Layout Shift",
   "source2Url": "https://web.dev/articles/cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cls-animasi-transform-bukan-tinggi",
 "langs": {
  "id": {
   "title": "Cara Animasikan Tanpa Menggeser Layout",
   "desc": "Tata cara memakai transform dan opacity di Clincoo, bukan animasi height atau top, supaya transisi tidak masuk skor CLS.",
   "content": "<p class=\"mb-4\">Animasi height, margin, atau top memindahkan tetangga. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> ganti animasi buka tutup dengan transform: scale atau translate, plus opacity.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gerakkan compositor, bukan alur dokumen</h2><p class=\"mb-4\">transform dan opacity tidak mengubah kotak layout. height dari 0 ke auto mendorong semua yang di bawahnya. Jika panel harus membuka ruang, siapkan tinggi akhir dulu, lalu baru tampilkan isi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan ukur saat animasi masih jalan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> rekam Performance setelah interaksi pengguna. Pergeseran dalam 500 ms setelah klik biasanya tidak dihitung, tetapi animasi yang jalan sendiri tetap dihitung.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan pola yang lolos</h2><p class=\"mb-4\">Catat properti yang aman di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a> supaya saran AI tidak mengembalikan transisi height.</p>",
   "source": "web.dev — Optimize CLS",
   "sourceUrl": "https://web.dev/articles/optimize-cls",
   "sourceSnippet": "Animations that trigger layout changes can cause layout shifts.",
   "source2": "MDN — transform",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Animate Without Shifting Layout",
   "desc": "How to use transform and opacity in Clincoo, not height or top animation, so a transition does not count toward CLS.",
   "content": "<p class=\"mb-4\">Animating height, margin, or top moves the neighbors. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> replace an open-close animation with transform: scale or translate, plus opacity.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Move the compositor, not the document flow</h2><p class=\"mb-4\">transform and opacity do not change the layout box. height from 0 to auto pushes everything below. If a panel must open space, reserve the final height first, then reveal the content.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not measure while the animation is still running</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> record Performance after a user action. A shift within 500 ms of a click is usually excluded, but an animation that runs on its own still counts.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep the pattern that passed</h2><p class=\"mb-4\">Note the safe properties on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a> so an AI suggestion does not bring back a height transition.</p>",
   "source": "web.dev — Optimize CLS",
   "sourceUrl": "https://web.dev/articles/optimize-cls",
   "sourceSnippet": "Animations that trigger layout changes can cause layout shifts.",
   "source2": "MDN — transform",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "cls-ukuran-video-dan-poster",
 "langs": {
  "id": {
   "title": "Cara Kunci Ukuran Video dan Poster",
   "desc": "Tata cara memberi width, height, dan poster pada video Clincoo supaya pemutar tidak melonjak saat metadata selesai dimuat.",
   "content": "<p class=\"mb-4\">Video tanpa ukuran mulai dari tinggi nol. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> tulis width dan height pada tag video, lalu bungkus dengan aspect-ratio yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Poster harus seukuran frame</h2><p class=\"mb-4\">Poster yang lebih kecil lalu diganti frame asli tetap menggeser. Ekspor poster dengan rasio yang sama dengan video. Jangan memakai gambar hero yang beda rasio sebagai poster.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan tunggu loadedmetadata untuk tinggi</h2><p class=\"mb-4\">Mengatur tinggi di event loadedmetadata sudah terlambat: konten di bawah sudah terdorong. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> dengan cache kosong dan jaringan lambat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat rasio di docs</h2><p class=\"mb-4\">Simpan rasio 16:9 atau 4:3 yang dipakai di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a> agar halaman lain tidak menebak ulang.</p>",
   "source": "MDN — video width",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#width",
   "sourceSnippet": "The width of the video's display area in CSS pixels.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Lock Video and Poster Size",
   "desc": "How to set width, height, and a poster on a Clincoo video so the player does not jump when metadata finishes loading.",
   "content": "<p class=\"mb-4\">A video without a size starts at zero height. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> set width and height on the video tag, then wrap it with the same aspect-ratio.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">The poster must match the frame</h2><p class=\"mb-4\">A smaller poster that is replaced by the real frame still shifts. Export the poster at the same ratio as the video. Do not use a hero image with a different ratio as the poster.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not wait for loadedmetadata to set height</h2><p class=\"mb-4\">Setting height on loadedmetadata is already late: content below has been pushed. Test on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> with an empty cache and a slow network.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Note the ratio in docs</h2><p class=\"mb-4\">Save the 16:9 or 4:3 ratio you use on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a> so other pages do not guess it again.</p>",
   "source": "MDN — video width",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#width",
   "sourceSnippet": "The width of the video's display area in CSS pixels.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cls-jangan-sisipkan-node-di-atas",
 "langs": {
  "id": {
   "title": "Cara Hindari Sisipan Node di Atas Konten",
   "desc": "Tata cara menaruh konten dinamis Clincoo di bawah atau di slot yang sudah ada, bukan menyisipkan elemen baru di atas judul setelah muat.",
   "content": "<p class=\"mb-4\">insertBefore pada judul menggeser seluruh halaman. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> siapkan slot kosong di posisi akhir, lalu isi slot itu. Jangan membuat node baru di atas konten yang sudah terlihat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Isi slot, jangan dorong saudara</h2><p class=\"mb-4\">Slot dengan min-height sudah dihitung browser. Mengganti isi slot tidak menambah tinggi jika isi tidak melebihi slot. Menyisipkan sibling baru selalu mendorong.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Toast dan notifikasi menumpuk, bukan mengalir</h2><p class=\"mb-4\">Pesan singkat di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> sebaiknya position: fixed. Jika harus di alur, taruh di bawah footer atau di area yang tingginya sudah tetap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis larangan di catatan tim</h2><p class=\"mb-4\">Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a> bahwa sisipan di atas lipatan hanya boleh ke slot yang sudah dirender.</p>",
   "source": "web.dev — Optimize CLS",
   "sourceUrl": "https://web.dev/articles/optimize-cls",
   "sourceSnippet": "Injecting content into the DOM without reserving space causes layout shifts.",
   "source2": "MDN — Element.insertBefore",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid Inserting a Node Above Content",
   "desc": "How to place Clincoo dynamic content below or in a reserved slot, not by inserting a new element above the heading after load.",
   "content": "<p class=\"mb-4\">insertBefore on the heading shifts the whole page. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> reserve an empty slot at the final position, then fill that slot. Do not create a new node above content that is already visible.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Fill the slot, do not push siblings</h2><p class=\"mb-4\">A slot with min-height is already counted by the browser. Replacing slot content does not add height if the content stays inside the slot. Inserting a new sibling always pushes.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Toasts and notices overlay, they do not flow</h2><p class=\"mb-4\">A short message on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> should use position: fixed. If it must be in flow, place it below the footer or in an area whose height is already fixed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write the rule in the team note</h2><p class=\"mb-4\">Note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a> that an above-the-fold insert may only go into a slot that is already rendered.</p>",
   "source": "web.dev — Optimize CLS",
   "sourceUrl": "https://web.dev/articles/optimize-cls",
   "sourceSnippet": "Injecting content into the DOM without reserving space causes layout shifts.",
   "source2": "MDN — Element.insertBefore",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "cls-tinggi-hero-sebelum-gambar",
 "langs": {
  "id": {
   "title": "Cara Kunci Tinggi Hero sebelum Gambar Datang",
   "desc": "Tata cara memberi min-height atau aspect-ratio pada hero Clincoo supaya judul tidak turun saat gambar latar selesai dimuat.",
   "content": "<p class=\"mb-4\">Hero yang tingginya mengikuti gambar akan melonjak. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> set min-height atau aspect-ratio pada section hero, bukan pada img yang belum datang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gambar latar bukan penentu tinggi</h2><p class=\"mb-4\">background-image tidak memberi tinggi. Section tetap butuh min-height dalam px, rem, atau svh. img di dalam hero tetap perlu width dan height, lalu object-fit: cover.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji sebelum gambar cache</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> kosongkan cache, throttle jaringan, dan pastikan tombol hero tidak pindah setelah gambar tampil.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Samakan angka antar template</h2><p class=\"mb-4\">Catat tinggi hero di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a> supaya template berikutnya tidak memakai nilai yang berbeda tanpa alasan.</p>",
   "source": "MDN — min-height",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/min-height",
   "sourceSnippet": "The min-height CSS property sets the minimum height of an element.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Lock Hero Height Before the Image Arrives",
   "desc": "How to give a Clincoo hero min-height or aspect-ratio so the heading does not drop when the background image finishes loading.",
   "content": "<p class=\"mb-4\">A hero whose height follows the image will jump. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> set min-height or aspect-ratio on the hero section, not on an img that has not arrived.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">A background image does not set height</h2><p class=\"mb-4\">background-image does not give height. The section still needs min-height in px, rem, or svh. An img inside the hero still needs width and height, then object-fit: cover.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test before the image is cached</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> clear the cache, throttle the network, and confirm the hero button does not move after the image appears.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Share the number across templates</h2><p class=\"mb-4\">Note the hero height on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a> so the next template does not use a different value without a reason.</p>",
   "source": "MDN — min-height",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/min-height",
   "sourceSnippet": "The min-height CSS property sets the minimum height of an element.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
 ,
{
 "id": "cls-width-height-pada-img",
 "langs": {
  "id": {
   "title": "Cara Pasang width dan height pada Gambar",
   "desc": "Tata cara mengisi atribut width dan height pada img Clincoo supaya browser menyiapkan rasio sebelum berkas gambar selesai diunduh.",
   "content": "<p class=\"mb-4\">Gambar tanpa ukuran membuat browser menebak tinggi nol, lalu mendorong teks saat berkas tiba. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> isi atribut width dan height sesuai piksel asli, bukan hanya CSS.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Isi atribut, bukan hanya style</h2><p class=\"mb-4\">Atribut width dan height memberi rasio intrinsik sebelum CSS kustom selesai. Tetap boleh memakai max-width: 100% dan height: auto agar gambar mengecil di layar sempit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan biarkan satu gambar tanpa rasio</h2><p class=\"mb-4\">Logo, thumbnail, dan gambar hero di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> perlu pasangan atribut yang sama. Jika hanya satu yang terisi, rasio tidak terbentuk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di panel Performance</h2><p class=\"mb-4\">Muat ulang dengan cache kosong. Entri layout shift tidak boleh menunjuk ke img yang sudah punya kedua atribut. Catat rasio yang dipakai di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTMLImageElement.width",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/width",
   "sourceSnippet": "The width property of the HTMLImageElement interface indicates the width of the image in CSS pixels.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set width and height on Images",
   "desc": "How to set width and height on a Clincoo img so the browser reserves the ratio before the image file finishes downloading.",
   "content": "<p class=\"mb-4\">An image without a size makes the browser assume zero height, then pushes text when the file arrives. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set the width and height attributes to the intrinsic pixels, not CSS alone.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set the attributes, not only style</h2><p class=\"mb-4\">The width and height attributes provide an intrinsic ratio before custom CSS finishes. You can still use max-width: 100% and height: auto so the image shrinks on a narrow screen.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not leave a single image without a ratio</h2><p class=\"mb-4\">Logos, thumbnails, and hero images in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> need the same attribute pair. If only one is set, the ratio is not formed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the Performance panel</h2><p class=\"mb-4\">Reload with an empty cache. A layout-shift entry should not point at an img that already has both attributes. Record the ratio you used on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTMLImageElement.width",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/width",
   "sourceSnippet": "The width property of the HTMLImageElement interface indicates the width of the image in CSS pixels.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cls-css-kritis-sebelum-cat",
 "langs": {
  "id": {
   "title": "Cara Muat CSS Kritis Sebelum Cat Pertama",
   "desc": "Tata cara menaruh CSS layout Clincoo di head supaya halaman tidak dicat tanpa gaya lalu bergeser saat berkas CSS terlambat.",
   "content": "<p class=\"mb-4\">Cat tanpa CSS lalu disusun ulang adalah pergeseran yang sering lolos jika hanya gambar yang dicek. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> taruh aturan layout di head, bukan di akhir body.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Utamakan aturan yang mengubah ukuran</h2><p class=\"mb-4\">Grid, flex, margin hero, dan tinggi header harus ada sebelum cat pertama. CSS dekoratif boleh ditunda. Jangan mengandalkan berkas besar yang memblokir hanya setelah teks terlihat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hindari sisipan style setelah konten</h2><p class=\"mb-4\">Skrip yang menyuntik elemen style di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> setelah paint bisa mengubah tinggi kartu. Pindahkan aturan itu ke stylesheet awal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan jaringan lambat</h2><p class=\"mb-4\">Throttle ke 3G, muat ulang, dan pastikan judul tidak meloncat saat CSS tiba. Simpan cuplikan aturan kritis di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — link rel stylesheet",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link",
   "sourceSnippet": "The link element specifies relationships between the current document and an external resource.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Load Critical CSS Before First Paint",
   "desc": "How to place Clincoo layout CSS in the head so the page is not painted unstyled and then shifted when the stylesheet arrives late.",
   "content": "<p class=\"mb-4\">A paint without CSS that is then restyled is a shift that slips through if you only check images. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> put layout rules in the head, not at the end of the body.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Prioritize rules that change size</h2><p class=\"mb-4\">Grid, flex, hero margin, and header height must exist before first paint. Decorative CSS can wait. Do not rely on a large file that only blocks after text is visible.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Avoid injecting style after content</h2><p class=\"mb-4\">A script that injects a style element in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> after paint can change card height. Move those rules into the early stylesheet.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test on a slow network</h2><p class=\"mb-4\">Throttle to 3G, reload, and confirm the heading does not jump when CSS arrives. Save the critical rule snippet on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — link rel stylesheet",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link",
   "sourceSnippet": "The link element specifies relationships between the current document and an external resource.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "cls-slot-avatar-dan-ikon",
 "langs": {
  "id": {
   "title": "Cara Kunci Slot Avatar dan Ikon",
   "desc": "Tata cara memberi kotak tetap untuk avatar dan ikon Clincoo supaya nama pengguna tidak bergeser saat gambar profil terlambat.",
   "content": "<p class=\"mb-4\">Avatar yang muncul belakangan mendorong nama dan tombol di sampingnya. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bungkus gambar profil dengan kotak yang sudah punya lebar dan tinggi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai kotak, bukan gambar polos</h2><p class=\"mb-4\">Div berukuran tetap, lalu img dengan width 100% dan height 100% serta object-fit: cover. Jika gambar gagal, inisial tetap di dalam kotak yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ikon SVG juga perlu ukuran</h2><p class=\"mb-4\">Ikon inline di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tanpa width dan height bisa membesar setelah font ikon tiba. Set ukuran di atribut atau CSS sebelum paint.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Samakan di daftar dan detail</h2><p class=\"mb-4\">Slot 40px di daftar dan 40px di header tidak boleh berubah antar halaman. Catat ukuran di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya template berikutnya tidak memakai nilai lain.</p>",
   "source": "MDN — object-fit",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",
   "sourceSnippet": "The object-fit CSS property sets how the content of a replaced element should be resized to fit its container.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Reserve Avatar and Icon Slots",
   "desc": "How to give Clincoo avatars and icons a fixed box so the user name does not shift when the profile image arrives late.",
   "content": "<p class=\"mb-4\">An avatar that appears later pushes the name and the button beside it. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> wrap the profile image in a box that already has width and height.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use a box, not a bare image</h2><p class=\"mb-4\">A fixed-size div, then an img with width 100% and height 100% and object-fit: cover. If the image fails, initials stay inside the same box.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">SVG icons need a size too</h2><p class=\"mb-4\">Inline icons in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> without width and height can grow after an icon font arrives. Set the size in an attribute or in CSS before paint.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match list and detail</h2><p class=\"mb-4\">A 40px slot in the list and 40px in the header should not change between pages. Record the size on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next template does not use another value.</p>",
   "source": "MDN — object-fit",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",
   "sourceSnippet": "The object-fit CSS property sets how the content of a replaced element should be resized to fit its container.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "cls-konten-bersyarat-tanpa-dorong",
 "langs": {
  "id": {
   "title": "Cara Tampilkan Konten Bersyarat Tanpa Mendorong",
   "desc": "Tata cara menyiapkan ruang untuk pesan login, kupon, atau peringatan Clincoo yang baru muncul setelah data siap, tanpa mendorong isi di bawahnya.",
   "content": "<p class=\"mb-4\">Blok yang disisipkan setelah fetch selesai sering mendorong judul. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> siapkan slot dengan min-height sebelum permintaan data dikirim.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reservasi sebelum respons datang</h2><p class=\"mb-4\">Jika pesan hanya muncul untuk sebagian pengguna, slot boleh kosong tetapi tingginya tetap. Jangan menambah node di atas konten utama setelah paint.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sembunyikan dengan visibility, bukan sisipan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pakai visibility atau opacity pada slot yang sudah ada. Menghapus display: none lalu menyisipkan elemen baru mengubah aliran dokumen.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur di dua keadaan</h2><p class=\"mb-4\">Bandingkan pengguna yang melihat pesan dan yang tidak. Selisih posisi judul harus nol. Simpan tinggi slot di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — min-height",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/min-height",
   "sourceSnippet": "The min-height CSS property sets the minimum height of an element.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Show Conditional Content Without Pushing",
   "desc": "How to reserve space for a Clincoo login note, coupon, or warning that appears only after data is ready, without pushing content below.",
   "content": "<p class=\"mb-4\">A block inserted after a fetch often pushes the heading. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> reserve a slot with min-height before the data request is sent.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reserve space before the response</h2><p class=\"mb-4\">If the message appears only for some users, the slot may stay empty but its height stays. Do not add a node above the main content after paint.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hide with visibility, not insertion</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> use visibility or opacity on a slot that already exists. Removing display: none and inserting a new element changes document flow.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure both states</h2><p class=\"mb-4\">Compare a user who sees the message and one who does not. The heading position difference should be zero. Save the slot height on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — min-height",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/min-height",
   "sourceSnippet": "The min-height CSS property sets the minimum height of an element.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "cls-tinggi-carousel-tetap",
 "langs": {
  "id": {
   "title": "Cara Kunci Tinggi Carousel",
   "desc": "Tata cara memberi carousel Clincoo tinggi tetap supaya slide berikutnya yang lebih tinggi tidak mendorong konten di bawahnya.",
   "content": "<p class=\"mb-4\">Carousel yang mengikuti tinggi slide aktif membuat halaman meloncat tiap geser. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> kunci tinggi ke slide tertinggi, atau pakai aspect-ratio yang sama untuk semua slide.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Samakan rasio setiap slide</h2><p class=\"mb-4\">Gambar slide memakai width, height, dan object-fit yang sama. Teks yang lebih panjang dipotong atau di-scroll di dalam kartu, bukan memperbesar carousel.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan hitung tinggi setelah transisi</h2><p class=\"mb-4\">Skrip di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> yang mengatur height ke offsetHeight slide aktif setelah animasi adalah sumber CLS. Tinggi harus ada di CSS sebelum slide pertama digambar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji geser pertama</h2><p class=\"mb-4\">Geser dari slide pendek ke slide tinggi. Konten di bawah carousel tidak boleh bergerak. Catat tinggi yang dikunci di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — aspect-ratio",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "sourceSnippet": "The aspect-ratio CSS property allows you to define the desired width-to-height ratio of an element's box.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Lock Carousel Height",
   "desc": "How to give a Clincoo carousel a fixed height so a taller next slide does not push the content below it.",
   "content": "<p class=\"mb-4\">A carousel that follows the active slide height makes the page jump on every swipe. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> lock the height to the tallest slide, or use the same aspect-ratio for every slide.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match the ratio of every slide</h2><p class=\"mb-4\">Slide images use the same width, height, and object-fit. Longer text is clipped or scrolled inside the card, not used to grow the carousel.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not measure height after the transition</h2><p class=\"mb-4\">A script in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> that sets height to the active slide offsetHeight after the animation is a CLS source. The height must exist in CSS before the first slide is painted.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test the first swipe</h2><p class=\"mb-4\">Swipe from a short slide to a tall one. Content below the carousel should not move. Record the locked height on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — aspect-ratio",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "sourceSnippet": "The aspect-ratio CSS property allows you to define the desired width-to-height ratio of an element's box.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
