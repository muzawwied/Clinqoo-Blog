// Clincoo Docs — kategori CLS (5 Oktober 2026, WIB)
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
}
 ]
};
