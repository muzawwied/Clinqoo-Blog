// Clincoo Docs — tambah 2 artikel Lazy (9 Oktober 2026, 14:00 WIB)
// Clincoo Docs — kategori Lazy (9 Oktober 2026, 13:00 WIB) — tambah 5 artikel, sisa 2 slot ke full 12
// Clincoo Docs — kategori Lazy (9 Oktober 2026, 12:00 WIB) — 5 artikel baru
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["lazy"] = {
 "names": { "id": "Lazy load", "en": "Lazy load" },
 "articles": [
{
 "id": "lazy-jangan-lazy-gambar-lcp",
 "langs": {
  "id": {
   "title": "Cara Jangan Pasang loading=lazy pada Gambar LCP",
   "desc": "Tata cara membiarkan gambar terbesar di layar pertama dimuat segera, bukan ditunda dengan loading=lazy.",
   "content": "<p class=\"mb-4\">Gambar yang menjadi Largest Contentful Paint sering terlambat hanya karena disalin dari kartu di bawah lipatan yang memakai loading=lazy.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tandai gambar layar pertama</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka pratinjau ponsel, catat gambar yang terlihat tanpa menggulir. Hapus loading=lazy dari gambar itu, lalu tambahkan fetchpriority=\"high\" hanya pada satu gambar utama. Gambar logo kecil tidak perlu prioritas tinggi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan waktu muat</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> muat ulang pratinjau dengan jaringan lambat. Gambar LCP harus mulai diunduh bersama HTML, bukan setelah gulir. Catat perbedaannya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya salinan template berikutnya tidak mengulang kesalahan yang sama.</p>",
   "source": "web.dev — Optimize LCP",
   "sourceUrl": "https://web.dev/articles/optimize-lcp",
   "sourceSnippet": "Do not lazy-load the LCP image; it should be discoverable in the initial HTML and loaded with high priority.",
   "source2": "MDN — img loading",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid loading=lazy on the LCP Image",
   "desc": "How to let the largest above-the-fold image load immediately instead of delaying it with loading=lazy.",
   "content": "<p class=\"mb-4\">The image that becomes Largest Contentful Paint is often late only because it was copied from a below-the-fold card that uses loading=lazy.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Mark the first-screen image</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open the phone preview and note the image visible without scrolling. Remove loading=lazy from that image, then add fetchpriority=\"high\" to only one hero. A small logo does not need high priority.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare load time</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> reload the preview on a slow network. The LCP image should start downloading with the HTML, not after a scroll. Note the difference on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next template copy does not repeat the same mistake.</p>",
   "source": "web.dev — Optimize LCP",
   "sourceUrl": "https://web.dev/articles/optimize-lcp",
   "sourceSnippet": "Do not lazy-load the LCP image; it should be discoverable in the initial HTML and loaded with high priority.",
   "source2": "MDN — img loading",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "lazy-gambar-bawah-lipatan",
 "langs": {
  "id": {
   "title": "Cara Tunda Gambar di Bawah Lipatan dengan loading=lazy",
   "desc": "Tata cara menunda gambar kartu dan galeri yang belum terlihat supaya unduhan pertama tetap ringan.",
   "content": "<p class=\"mb-4\">Galeri yang memuat dua puluh foto sekaligus membuat pratinjau Clincoo terasa macet, padahal pengunjung hanya melihat tiga kartu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang lazy hanya di bawah lipatan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan loading=\"lazy\" pada img yang baru muncul setelah gulir. Jangan pasang atribut yang sama pada gambar hero. Tulis alt yang menjelaskan foto, bukan nama berkas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji tanpa menggulir dulu</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka panel jaringan sebelum menggulir. Foto bawah tidak boleh ikut unduhan awal. Setelah gulir, foto itu baru muncul. Simpan pola ini di catatan <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Lazy loading",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading",
   "sourceSnippet": "Lazy-load images that are offscreen so the browser can prioritize content the user can see.",
   "source2": "web.dev — Browser-level lazy loading",
   "source2Url": "https://web.dev/articles/browser-level-image-lazy-loading",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Defer Below-the-Fold Images with loading=lazy",
   "desc": "How to defer card and gallery images that are not yet visible so the first download stays light.",
   "content": "<p class=\"mb-4\">A gallery that downloads twenty photos at once makes the Clincoo preview feel stuck, even though the visitor only sees three cards.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lazy-load only below the fold</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add loading=\"lazy\" to img elements that appear only after scroll. Do not put the same attribute on the hero. Write alt text that describes the photo, not the file name.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test before scrolling</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the network panel before scrolling. Below-the-fold photos should not be in the first download. After a scroll, they should appear. Keep this pattern in the notes on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Lazy loading",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading",
   "sourceSnippet": "Lazy-load images that are offscreen so the browser can prioritize content the user can see.",
   "source2": "web.dev — Browser-level lazy loading",
   "source2Url": "https://web.dev/articles/browser-level-image-lazy-loading",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "lazy-iframe-peta-dan-video",
 "langs": {
  "id": {
   "title": "Cara Tunda Iframe Peta dan Video yang Berat",
   "desc": "Tata cara menunda iframe peta atau video sampai pengunjung mendekatinya, tanpa menghilangkan judul bagian.",
   "content": "<p class=\"mb-4\">Iframe peta pihak ketiga sering mengunduh ratusan kilobita sebelum pengunjung sampai ke bagian lokasi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tunda iframe, bukan judulnya</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis alamat dalam teks biasa, lalu pasang loading=\"lazy\" pada iframe. Beri width dan height atau aspect-ratio supaya kotak tidak meloncat. Jangan sembunyikan iframe dengan display:none jika itu membuat judul bagian tidak punya konteks.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sediakan tombol muat</h2><p class=\"mb-4\">Kalau embed tetap berat, tampilkan tombol \"Muat peta\" yang baru mengisi src setelah diklik. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan mode offline: judul dan alamat tetap terbaca. Pola ini dicatat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — iframe loading",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#loading",
   "sourceSnippet": "The loading attribute on iframe defers fetching the embedded document until it is near the viewport.",
   "source2": "web.dev — Lazy-load third-party embeds",
   "source2Url": "https://web.dev/articles/embed-best-practices",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Defer a Heavy Map or Video Iframe",
   "desc": "How to defer a map or video iframe until the visitor is near it, without dropping the section heading.",
   "content": "<p class=\"mb-4\">A third-party map iframe often downloads hundreds of kilobytes before the visitor reaches the location section.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Defer the iframe, not the heading</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write the address as plain text, then set loading=\"lazy\" on the iframe. Give width and height or an aspect-ratio so the box does not jump. Do not hide the iframe with display:none if that leaves the heading without context.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Offer a load button</h2><p class=\"mb-4\">If the embed is still heavy, show a \"Load map\" button that sets src only after a click. Test in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> with offline mode: the heading and address should still be readable. This pattern is noted on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — iframe loading",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#loading",
   "sourceSnippet": "The loading attribute on iframe defers fetching the embedded document until it is near the viewport.",
   "source2": "web.dev — Lazy-load third-party embeds",
   "source2Url": "https://web.dev/articles/embed-best-practices",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "lazy-width-height-cegah-loncat",
 "langs": {
  "id": {
   "title": "Cara Pasang width dan height saat Gambar di-lazy",
   "desc": "Tata cara menyisakan ruang gambar yang ditunda supaya layout tidak meloncat saat foto datang.",
   "content": "<p class=\"mb-4\">loading=lazy tidak menahan layout. Tanpa lebar dan tinggi, kartu di bawah lipatan tetap mendorong teks saat foto selesai diunduh.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sisakan kotak sebelum unduh</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> isi atribut width dan height sesuai rasio asli, lalu biarkan CSS mengatur lebar tampilan. Atau bungkus gambar dengan kotak aspect-ratio. Jangan mengandalkan tinggi otomatis dari berkas yang belum ada.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gulir dan lihat loncatan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir pelan pada jaringan lambat. Teks di bawah gambar tidak boleh meloncat. Kalau masih bergeser, cek apakah template menimpa height dengan auto. Catatan perbaikannya ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Optimize CLS",
   "sourceUrl": "https://web.dev/articles/optimize-cls",
   "sourceSnippet": "Always include width and height on images so the browser can reserve space before the file loads.",
   "source2": "MDN — img width",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#width",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set width and height on Lazy Images",
   "desc": "How to reserve space for a deferred image so the layout does not jump when the photo arrives.",
   "content": "<p class=\"mb-4\">loading=lazy does not reserve layout. Without width and height, a below-the-fold card still pushes text when the photo finishes downloading.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reserve the box before download</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set width and height to the real ratio, then let CSS control the displayed width. Or wrap the image in an aspect-ratio box. Do not rely on automatic height from a file that is not there yet.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Scroll and watch for jumps</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll slowly on a slow network. Text below the image should not jump. If it still shifts, check whether the template overrides height to auto. The fix is noted on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Optimize CLS",
   "sourceUrl": "https://web.dev/articles/optimize-cls",
   "sourceSnippet": "Always include width and height on images so the browser can reserve space before the file loads.",
   "source2": "MDN — img width",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#width",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "lazy-fallback-tanpa-javascript",
 "langs": {
  "id": {
   "title": "Cara Siapkan Gambar Lazy yang Tetap Ada Tanpa JavaScript",
   "desc": "Tata cara memakai loading=lazy bawaan browser supaya gambar tetap tampil jika skrip kustom gagal.",
   "content": "<p class=\"mb-4\">Skrip lazy kustom yang mengganti data-src sering meninggalkan kotak kosong saat JavaScript diblokir atau berkas skrip gagal dimuat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Utamakan atribut bawaan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> isi src dengan URL gambar yang benar, lalu tambahkan loading=\"lazy\". Jangan kosongkan src hanya untuk menunggu skrip. Jika ada data-src lama dari template, salin nilainya ke src dan hapus pola yang menyembunyikan gambar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan skrip dimatikan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> muat pratinjau lalu blokir JavaScript di devtools. Gambar bawah lipatan harus tetap muncul setelah gulir, karena browser yang menundanya. Simpan hasil uji di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — loading attribute",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading",
   "sourceSnippet": "Native lazy loading works without custom JavaScript as long as the image has a real src.",
   "source2": "web.dev — Browser-level image lazy-loading",
   "source2Url": "https://web.dev/articles/browser-level-image-lazy-loading",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Keep Lazy Images Available Without JavaScript",
   "desc": "How to use native loading=lazy so images still appear if a custom script fails.",
   "content": "<p class=\"mb-4\">A custom lazy script that swaps data-src often leaves an empty box when JavaScript is blocked or the script file fails to load.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Prefer the native attribute</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set src to the real image URL, then add loading=\"lazy\". Do not leave src empty while waiting for a script. If an old template uses data-src, copy that value into src and remove the pattern that hides the image.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test with scripts disabled</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> load the preview and disable JavaScript in devtools. Below-the-fold images should still appear after scroll, because the browser defers them. Save the test result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — loading attribute",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading",
   "sourceSnippet": "Native lazy loading works without custom JavaScript as long as the image has a real src.",
   "source2": "web.dev — Browser-level image lazy-loading",
   "source2Url": "https://web.dev/articles/browser-level-image-lazy-loading",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "lazy-decoding-async-gambar",
 "langs": {
  "id": {
   "title": "Cara Pasang decoding=async pada Gambar yang Ditunda",
   "desc": "Tata cara memindahkan decode gambar non-kritis ke luar jalur utama supaya gulir pertama tidak tersendat.",
   "content": "<p class=\"mb-4\">Gambar yang sudah diunduh tetap bisa menahan main thread saat browser men-decode pikselnya. decoding=async memberi browser izin menunda decode itu sampai gambar hampir terlihat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tandai gambar non-kritis</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan decoding=\"async\" pada img kartu, galeri, dan avatar yang juga memakai loading=\"lazy\". Jangan pasang async pada gambar LCP: biarkan browser men-decode gambar itu secepat mungkin.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di jaringan lambat</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir pratinjau sambil panel Performance terbuka. Decode gambar bawah lipatan tidak boleh muncul sebagai tugas panjang sebelum pengguna sampai di sana. Catat tag yang lolos di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya template berikutnya menyalin kombinasi loading dan decoding yang sama.</p>",
   "source": "MDN — img decoding",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#decoding",
   "sourceSnippet": "decoding=async hints that the browser may decode the image off the critical path.",
   "source2": "HTML spec — decoding attribute",
   "source2Url": "https://html.spec.whatwg.org/multipage/images.html#decoding-hint",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set decoding=async on Deferred Images",
   "desc": "How to move decode of non-critical images off the main path so the first scroll does not stall.",
   "content": "<p class=\"mb-4\">An image that has already downloaded can still block the main thread while the browser decodes its pixels. decoding=async lets the browser postpone that decode until the image is about to be seen.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Mark non-critical images</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add decoding=\"async\" on card, gallery, and avatar images that already use loading=\"lazy\". Do not set async on the LCP image: let the browser decode that one as soon as possible.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test on a slow network</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll the preview with the Performance panel open. Decode of below-the-fold images should not show up as a long task before the user reaches them. Record the tags that pass on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next template copies the same loading and decoding pair.</p>",
   "source": "MDN — img decoding",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#decoding",
   "sourceSnippet": "decoding=async hints that the browser may decode the image off the critical path.",
   "source2": "HTML spec — decoding attribute",
   "source2Url": "https://html.spec.whatwg.org/multipage/images.html#decoding-hint",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "lazy-srcset-dan-sizes-bersamaan",
 "langs": {
  "id": {
   "title": "Cara Gabung srcset dan sizes dengan loading=lazy",
   "desc": "Tata cara memilih lebar gambar yang tepat sebelum browser menunda unduhan, supaya file kecil yang terpilih.",
   "content": "<p class=\"mb-4\">loading=lazy hanya menunda unduhan. Tanpa srcset, browser tetap mengunduh berkas lebar penuh begitu gambar mendekati layar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tuliskan kandidat lebar</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> isi srcset dengan 480w, 800w, dan 1200w, lalu sizes sesuai kolom nyata, misalnya (min-width: 768px) 40vw, 100vw. Biarkan src menunjuk kandidat terkecil yang masih tajam sebagai cadangan. Pasang loading=\"lazy\" hanya pada gambar di bawah lipatan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek berkas yang terpilih</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka Network, filter Img, gulir sampai kartu muncul. Nama berkas harus yang sesuai lebar slot, bukan master 2000px. Simpan pola srcset itu di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> agar galeri berikutnya tidak mengulang unduhan berlebih.</p>",
   "source": "MDN — Responsive images",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images",
   "sourceSnippet": "srcset and sizes let the browser pick a source that matches the layout slot before it downloads.",
   "source2": "web.dev — Serve responsive images",
   "source2Url": "https://web.dev/articles/serve-responsive-images",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Combine srcset and sizes with loading=lazy",
   "desc": "How to pick the right image width before the browser defers the download, so the smaller file is the one fetched.",
   "content": "<p class=\"mb-4\">loading=lazy only delays the download. Without srcset, the browser still fetches the full-width file once the image nears the viewport.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write width candidates</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> fill srcset with 480w, 800w, and 1200w, then sizes that match the real column, for example (min-width: 768px) 40vw, 100vw. Point src at the smallest candidate that still looks sharp as a fallback. Add loading=\"lazy\" only on below-the-fold images.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check which file was chosen</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open Network, filter Img, and scroll until the card appears. The file name should match the slot width, not a 2000px master. Save that srcset pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next gallery does not repeat the oversized download.</p>",
   "source": "MDN — Responsive images",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images",
   "sourceSnippet": "srcset and sizes let the browser pick a source that matches the layout slot before it downloads.",
   "source2": "web.dev — Serve responsive images",
   "source2Url": "https://web.dev/articles/serve-responsive-images",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "lazy-video-preload-none",
 "langs": {
  "id": {
   "title": "Cara Tunda Video dengan preload=none",
   "desc": "Tata cara mencegah video hero atau testimoni mengunduh berkas penuh sebelum pengguna menekan putar.",
   "content": "<p class=\"mb-4\">Tag video tanpa preload sering mengunduh metadata atau beberapa detik media begitu halaman dibuka, meskipun pemutarnya di bawah lipatan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Batasi unduhan awal</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> setel preload=\"none\" pada video yang tidak autoplay. Beri poster gambar ringan dengan width dan height tetap, dan jangan pasang autoplay pada video di bawah lipatan. Jika video harus autoplay sebagai latar, pakai muted playsinline dan sumber pendek, bukan master penuh.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pastikan berkas baru jalan saat play</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> muat ulang lalu buka Network sebelum menekan putar. Berkas media tidak boleh muncul di unduhan awal. Setelah klik, barulah segmen pertama masuk. Tuliskan aturan poster dan preload di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya embed berikutnya tidak meniru video yang langsung menguras kuota.</p>",
   "source": "MDN — video preload",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#preload",
   "sourceSnippet": "preload=none tells the browser not to load video data until the user starts playback.",
   "source2": "web.dev — Fast playback with video preload",
   "source2Url": "https://web.dev/articles/fast-playback-with-preload",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Defer Video with preload=none",
   "desc": "How to stop a hero or testimonial video from downloading the full file before the user presses play.",
   "content": "<p class=\"mb-4\">A video tag without preload often downloads metadata or a few seconds of media as soon as the page opens, even when the player sits below the fold.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Limit the initial download</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set preload=\"none\" on videos that do not autoplay. Give them a light poster image with fixed width and height, and do not set autoplay on below-the-fold video. If a video must autoplay as a background, use muted playsinline and a short source, not the full master.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Confirm the file starts only on play</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> reload, then open Network before pressing play. The media file should not appear in the initial download. After the click, the first segment arrives. Write the poster and preload rule on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next embed does not copy a video that drains the quota immediately.</p>",
   "source": "MDN — video preload",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#preload",
   "sourceSnippet": "preload=none tells the browser not to load video data until the user starts playback.",
   "source2": "web.dev — Fast playback with video preload",
   "source2Url": "https://web.dev/articles/fast-playback-with-preload",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "lazy-facade-embed-youtube",
 "langs": {
  "id": {
   "title": "Cara Ganti Embed YouTube dengan Facade Ringan",
   "desc": "Tata cara menampilkan poster dan tombol putar dulu, baru memuat iframe pemutar saat pengguna meminta.",
   "content": "<p class=\"mb-4\">Iframe YouTube menarik skrip, font, dan pemutar pihak ketiga sejak HTML diurai, bahkan jika video tidak pernah diputar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tampilkan poster dulu</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ganti iframe dengan gambar poster, judul, dan tombol putar yang bisa difokuskan. Simpan URL embed di data-src. Saat klik atau Enter, buat iframe, setel src, lalu pindahkan fokus ke pemutar. Pertahankan rasio aspek supaya layout tidak meloncat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur sebelum dan sesudah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bandingkan jumlah permintaan Network pada muat pertama. Facade tidak boleh menghubungi domain pemutar sebelum interaksi. Dokumentasikan pola tombolnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> agar halaman cerita tidak menempelkan iframe langsung.</p>",
   "source": "web.dev — Third-party facades",
   "sourceUrl": "https://web.dev/articles/embed-best-practices",
   "sourceSnippet": "A facade shows a static preview and loads the third-party iframe only after the user chooses to play.",
   "source2": "MDN — iframe loading",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#loading",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Replace a YouTube Embed with a Light Facade",
   "desc": "How to show a poster and play button first, then load the player iframe only when the user asks.",
   "content": "<p class=\"mb-4\">A YouTube iframe pulls scripts, fonts, and a third-party player as soon as HTML is parsed, even if the video is never played.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Show the poster first</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> replace the iframe with a poster image, a title, and a play button that can take focus. Store the embed URL in data-src. On click or Enter, create the iframe, set src, then move focus to the player. Keep the aspect ratio so layout does not jump.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure before and after</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> compare Network request counts on first load. The facade must not contact the player domain before interaction. Document the button pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so story pages do not paste a live iframe.</p>",
   "source": "web.dev — Third-party facades",
   "sourceUrl": "https://web.dev/articles/embed-best-practices",
   "sourceSnippet": "A facade shows a static preview and loads the third-party iframe only after the user chooses to play.",
   "source2": "MDN — iframe loading",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#loading",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "lazy-content-visibility-kartu",
 "langs": {
  "id": {
   "title": "Cara Tunda Render Kartu dengan content-visibility",
   "desc": "Tata cara melewatkan render kartu di luar layar tanpa menyembunyikan isinya dari mesin telusur.",
   "content": "<p class=\"mb-4\">Daftar kartu panjang tetap dihitung layout-nya meski pengguna belum menggulir. content-visibility: auto melewatkan kerja render di luar layar, asalkan contain-intrinsic-size menjaga tinggi slot.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri ukuran intrinsik</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pasang content-visibility: auto dan contain-intrinsic-size: auto 320px pada kartu di bawah lipatan. Jangan pakai pada kartu pertama yang menjadi LCP. Gambar di dalam kartu tetap memakai loading=\"lazy\" dan width/height.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek scrollbar dan fokus</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir cepat lalu tab ke tautan di dalam kartu. Scrollbar tidak boleh meloncat karena tinggi salah, dan fokus harus tetap sampai ke kartu yang baru dirender. Simpan nilai contain-intrinsic-size yang cocok di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — content-visibility",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/content-visibility",
   "sourceSnippet": "content-visibility: auto skips rendering off-screen content while contain-intrinsic-size reserves space.",
   "source2": "web.dev — content-visibility",
   "source2Url": "https://web.dev/articles/content-visibility",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Defer Card Rendering with content-visibility",
   "desc": "How to skip rendering off-screen cards without hiding their content from search engines.",
   "content": "<p class=\"mb-4\">A long card list still pays layout cost even before the user scrolls. content-visibility: auto skips off-screen rendering work, as long as contain-intrinsic-size holds the slot height.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Give an intrinsic size</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set content-visibility: auto and contain-intrinsic-size: auto 320px on below-the-fold cards. Do not use it on the first card if that card is the LCP. Images inside the card still use loading=\"lazy\" plus width and height.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the scrollbar and focus</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll quickly, then tab to a link inside a card. The scrollbar should not jump from a wrong height, and focus must still reach the newly rendered card. Save the contain-intrinsic-size value that fits on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — content-visibility",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/content-visibility",
   "sourceSnippet": "content-visibility: auto skips rendering off-screen content while contain-intrinsic-size reserves space.",
   "source2": "web.dev — content-visibility",
   "source2Url": "https://web.dev/articles/content-visibility",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
,
{
 "id": "lazy-fetchpriority-high-pada-lcp",
 "langs": {
  "id": {
   "title": "Cara Pasang fetchpriority=high pada Gambar LCP",
   "desc": "Tata cara menaikkan prioritas unduh gambar terbesar di layar pertama tanpa menunda gambar lain.",
   "content": "<p class=\"mb-4\">Gambar LCP yang sudah tidak memakai loading=lazy masih bisa kalah antrean dengan skrip dan gambar kecil. fetchpriority=high memberi isyarat ke browser agar unduhan itu didahulukan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tandai satu gambar saja</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pasang fetchpriority=\"high\" hanya pada gambar hero yang terukur sebagai LCP. Gambar di bawah lipatan tetap loading=\"lazy\" dan fetchpriority=\"low\". Jangan menandai dua hero sekaligus karena prioritas tinggi yang dobel saling meniadakan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cocokkan dengan preload</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka Network, filter Img, lalu muat ulang. Baris LCP harus mulai lebih awal dari gambar kartu. Kalau URL srcset berbeda dari preload, hapus preload yang salah agar tidak mengunduh dua berkas. Catat pilihan akhir di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — fetchpriority",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority",
   "sourceSnippet": "fetchpriority hints whether the browser should download an image with high, low, or auto priority.",
   "source2": "web.dev — optimize LCP",
   "source2Url": "https://web.dev/articles/optimize-lcp",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set fetchpriority=high on the LCP Image",
   "desc": "How to raise the download priority of the largest above-the-fold image without delaying the rest.",
   "content": "<p class=\"mb-4\">An LCP image that is not loading=lazy can still lose the queue to scripts and small images. fetchpriority=high tells the browser to fetch that file first.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Mark only one image</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set fetchpriority=\"high\" only on the hero measured as LCP. Below-the-fold images stay loading=\"lazy\" and fetchpriority=\"low\". Do not mark two heroes at once; doubled high priority cancels itself out.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match the preload</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open Network, filter Img, and reload. The LCP row should start before card images. If the srcset URL differs from the preload, remove the wrong preload so two files are not downloaded. Record the final choice on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — fetchpriority",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority",
   "sourceSnippet": "fetchpriority hints whether the browser should download an image with high, low, or auto priority.",
   "source2": "web.dev — optimize LCP",
   "source2Url": "https://web.dev/articles/optimize-lcp",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "lazy-preload-font-kritis",
 "langs": {
  "id": {
   "title": "Cara Preload Font Kritis, Jangan Ditunda",
   "desc": "Tata cara memuat font judul lebih awal supaya teks tidak berganti wajah saat halaman Clincoo tampil.",
   "content": "<p class=\"mb-4\">Font yang baru diminta saat CSS selesai diurai membuat teks judul berganti ukuran. Itu memperlambat LCP teks dan menggeser layout. Font kritis di-preload, font ikon dan dekorasi tidak.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Preload satu potongan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan link rel=\"preload\" as=\"font\" type=\"font/woff2\" crossorigin pada berkas woff2 yang dipakai h1. Jangan preload seluruh keluarga font. Font yang hanya ada di footer tidak perlu masuk head.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek pertukaran teks</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> muat ulang dengan cache kosong dan lihat apakah judul langsung memakai wajah yang benar. font-display: swap boleh tetap ada, tetapi preload mengurangi jeda fallback. Simpan nama berkas font di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya duplikat template tidak mengarah ke path lama.</p>",
   "source": "MDN — rel=preload",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/preload",
   "sourceSnippet": "rel=preload fetches a resource early; fonts need crossorigin even on the same origin.",
   "source2": "web.dev — font best practices",
   "source2Url": "https://web.dev/articles/font-best-practices",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Preload a Critical Font Instead of Deferring It",
   "desc": "How to load the heading font early so Clincoo text does not swap faces after first paint.",
   "content": "<p class=\"mb-4\">A font requested only after CSS is parsed makes the heading change size. That slows text LCP and shifts layout. Preload the critical font; leave icon and decorative fonts alone.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Preload one file</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add link rel=\"preload\" as=\"font\" type=\"font/woff2\" crossorigin for the woff2 used by h1. Do not preload the whole family. A footer-only font does not belong in the head.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the text swap</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> reload with an empty cache and confirm the heading uses the final face immediately. font-display: swap can stay, but preload shortens the fallback gap. Record the font filename on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so duplicated templates do not point at an old path.</p>",
   "source": "MDN — rel=preload",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/preload",
   "sourceSnippet": "rel=preload fetches a resource early; fonts need crossorigin even on the same origin.",
   "source2": "web.dev — font best practices",
   "source2Url": "https://web.dev/articles/font-best-practices",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};