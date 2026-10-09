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
}
 ]
};
