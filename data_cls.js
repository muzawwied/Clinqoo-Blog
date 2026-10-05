// Clincoo Docs — kategori CLS (5 Oktober 2026, WIB) — 10 artikel
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
 ]
};
