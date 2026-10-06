// Clincoo Docs — tambah 4 artikel Gambar (6 Oktober 2026, 20:00 WIB)
// Clincoo Docs — artikel tambahan Gambar (6 Oktober 2026, 19:00 WIB — tambah 5 artikel)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["gambar"]) {
    window.countryDataFiles["gambar"] = { "names": { "id": "Gambar", "en": "Images" }, "articles": [] };
  }
  var list = window.countryDataFiles["gambar"].articles;
  var extra = [
 {
  "id": "gambar-fallback-onerror-saat-src-gagal",
  "langs": {
   "id": {
    "title": "Cara Pasang Fallback Saat src Gambar Gagal",
    "desc": "Tata cara menampilkan gambar cadangan di Clincoo bila src 404, diblokir, atau berkas rusak.",
    "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kenapa gambar kosong membingungkan</h2><p class=\"mb-4\">Gambar yang pecah hanya menampilkan ikon rusak. Pengunjung tidak tahu itu foto produk, avatar, atau ilustrasi. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> siapkan satu berkas cadangan ringan, misalnya ilustrasi netral, lalu pasang onerror yang mengganti src sekali saja.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cegah loop onerror</h2><p class=\"mb-4\">Jika cadangan juga gagal, onerror bisa memanggil dirinya terus. Setelah penggantian pertama, hapus handler atau tandai elemen dengan data-fallback. Jangan arahkan cadangan ke URL yang sama dengan src asli.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji 404 sebelum publish</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> sengaja ubah src ke path yang tidak ada, lalu muat pratinjau. Cadangan harus tampil, layout tidak meloncat, dan konsol tidak banjir error. Catat path cadangan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — HTMLImageElement error event",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/error_event",
    "sourceSnippet": "The error event fires on an img when the resource fails to load. Use it once to swap in a fallback, then stop handling further errors.",
    "source2": "MDN — img element",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   },
   "en": {
    "title": "How to Add a Fallback When an Image src Fails",
    "desc": "How to show a backup image in Clincoo when src is 404, blocked, or corrupt.",
    "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Why a broken image confuses people</h2><p class=\"mb-4\">A broken image only shows a missing icon. Visitors cannot tell if it was a product photo, avatar, or illustration. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> prepare one light backup file, such as a neutral illustration, then set onerror to replace src only once.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Prevent an onerror loop</h2><p class=\"mb-4\">If the backup also fails, onerror can call itself forever. After the first swap, remove the handler or mark the element with data-fallback. Do not point the backup at the same URL as the original src.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test a 404 before publish</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> deliberately change src to a missing path, then load the preview. The backup should appear, the layout should not jump, and the console should not flood. Note the backup path on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — HTMLImageElement error event",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/error_event",
    "sourceSnippet": "The error event fires on an img when the resource fails to load. Use it once to swap in a fallback, then stop handling further errors.",
    "source2": "MDN — img element",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 },
 {
  "id": "gambar-avif-dengan-fallback-webp",
  "langs": {
   "id": {
    "title": "Cara Sajikan AVIF dengan Fallback WebP",
    "desc": "Tata cara memakai picture supaya browser baru mengambil AVIF dan browser lama tetap dapat WebP atau JPEG.",
    "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu URL tidak cukup untuk semua browser</h2><p class=\"mb-4\">AVIF lebih kecil, tetapi tidak semua browser lama membukanya. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bungkus img dengan picture: source type image/avif, lalu source type image/webp, dan img terakhir sebagai JPEG. Browser memilih sumber pertama yang didukung.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan duplikat unduhan</h2><p class=\"mb-4\">Jangan pasang src AVIF pada img sekaligus source AVIF. img adalah cadangan terakhir. width dan height tetap di img supaya slot tidak berubah saat format dipilih.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan ukuran berkas</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka Network dan lihat tipe yang benar-benar diunduh. AVIF harus lebih kecil dari JPEG untuk foto yang sama. Simpan trio berkas itu di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebagai acuan kompresi.</p>",
    "source": "MDN — picture element",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture",
    "sourceSnippet": "The picture element lets you offer multiple sources. The browser uses the first source it supports and falls back to the img.",
    "source2": "web.dev — Serve images in modern formats",
    "source2Url": "https://web.dev/articles/serve-images-webp",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   },
   "en": {
    "title": "How to Serve AVIF with a WebP Fallback",
    "desc": "How to use picture so newer browsers fetch AVIF while older ones still get WebP or JPEG.",
    "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One URL is not enough for every browser</h2><p class=\"mb-4\">AVIF is smaller, but not every older browser can open it. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> wrap img with picture: a source of type image/avif, then a source of type image/webp, and a final img as JPEG. The browser picks the first supported source.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not download twice</h2><p class=\"mb-4\">Do not set an AVIF src on img and also an AVIF source. img is the last fallback. Keep width and height on img so the slot does not change when a format is chosen.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare file sizes</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open Network and check which type was actually fetched. AVIF should be smaller than JPEG for the same photo. Keep that file trio on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> as a compression reference.</p>",
    "source": "MDN — picture element",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture",
    "sourceSnippet": "The picture element lets you offer multiple sources. The browser uses the first source it supports and falls back to the img.",
    "source2": "web.dev — Serve images in modern formats",
    "source2Url": "https://web.dev/articles/serve-images-webp",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 },
 {
  "id": "gambar-srcset-densitas-1x-2x",
  "langs": {
   "id": {
    "title": "Cara Pakai srcset 1x dan 2x untuk Layar Retina",
    "desc": "Tata cara memberi dua berkas gambar Clincoo dengan deskriptor densitas supaya layar biasa tidak mengunduh versi 2x.",
    "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Layar retina bukan alasan mengunduh besar ke semua orang</h2><p class=\"mb-4\">Ikon dan logo kecil sering hanya butuh dua ukuran. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis src ke berkas 1x, lalu srcset dengan nama-1x.png 1x dan nama-2x.png 2x. Browser memilih sesuai devicePixelRatio.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan campur 1x dengan lebar w</h2><p class=\"mb-4\">Deskriptor x dan w tidak dicampur pada srcset yang sama. Untuk foto yang melebar ikut kontainer, pakai w dan sizes. Untuk ikon ukuran tetap, pakai 1x dan 2x.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek berkas yang terunduh</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ubah zoom atau emulasi DPR di perangkat. Layar 1x tidak boleh mengambil berkas 2x. Catat pasangan ukuran di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — Responsive images",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images",
    "sourceSnippet": "Density descriptors such as 1x and 2x tell the browser which file matches the screen pixel density.",
    "source2": "web.dev — Responsive images",
    "source2Url": "https://web.dev/articles/responsive-images",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   },
   "en": {
    "title": "How to Use 1x and 2x srcset for Retina Screens",
    "desc": "How to offer two Clincoo image files with density descriptors so normal screens do not download the 2x version.",
    "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Retina is not a reason to download large files for everyone</h2><p class=\"mb-4\">Small icons and logos often need only two sizes. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set src to the 1x file, then srcset with name-1x.png 1x and name-2x.png 2x. The browser picks based on devicePixelRatio.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not mix 1x with width w</h2><p class=\"mb-4\">Do not mix x and w descriptors in the same srcset. For photos that grow with the container, use w and sizes. For fixed icons, use 1x and 2x.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the downloaded file</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> change zoom or emulate DPR in the device. A 1x screen must not fetch the 2x file. Note the size pair on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — Responsive images",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images",
    "sourceSnippet": "Density descriptors such as 1x and 2x tell the browser which file matches the screen pixel density.",
    "source2": "web.dev — Responsive images",
    "source2Url": "https://web.dev/articles/responsive-images",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 },
 {
  "id": "gambar-hindari-base64-besar-di-html",
  "langs": {
   "id": {
    "title": "Cara Hindari Base64 Besar di HTML",
    "desc": "Tata cara menolak data URI gambar besar di Clincoo supaya HTML tetap kecil dan cache gambar tetap terpakai.",
    "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Base64 membesar dan tidak ter-cache sendiri</h2><p class=\"mb-4\">Data URI ikut setiap unduhan HTML. Gambar 200 KB menjadi lebih besar setelah di-encode, dan tidak bisa di-cache terpisah. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan foto sebagai berkas, lalu rujuk dengan src biasa. Base64 hanya untuk ikon SVG sangat kecil yang dipakai sekali.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cari data URI yang menyelinap</h2><p class=\"mb-4\">Cari string data:image di HTML dan CSS. Jika lebih dari beberapa ratus byte, pindahkan ke berkas. Jangan tempel tangkapan layar utuh dari obrolan AI langsung ke markup.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur HTML setelah dibersihkan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bandingkan ukuran dokumen sebelum dan sesudah gambar dikeluarkan. HTML harus turun, dan gambar muncul sebagai permintaan terpisah yang bisa di-cache. Tuliskan batas ukuran di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — Data URLs",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Schemes/data",
    "sourceSnippet": "Data URLs embed a resource in the document. Large ones increase HTML size and skip separate HTTP caching.",
    "source2": "web.dev — Optimize images",
    "source2Url": "https://web.dev/articles/fast#optimize-your-images",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   },
   "en": {
    "title": "How to Avoid Large Base64 Images in HTML",
    "desc": "How to reject large image data URIs in Clincoo so HTML stays small and image caching still works.",
    "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Base64 grows and is not cached on its own</h2><p class=\"mb-4\">A data URI rides along with every HTML download. A 200 KB image gets larger after encoding and cannot be cached separately. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> save the photo as a file, then reference it with a normal src. Use Base64 only for a tiny SVG icon used once.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Find data URIs that slipped in</h2><p class=\"mb-4\">Search HTML and CSS for data:image. If it is more than a few hundred bytes, move it to a file. Do not paste a full screenshot from an AI chat straight into the markup.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure HTML after cleanup</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> compare document size before and after the image is extracted. HTML should shrink, and the image should appear as a separate cacheable request. Write the size limit on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — Data URLs",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Schemes/data",
    "sourceSnippet": "Data URLs embed a resource in the document. Large ones increase HTML size and skip separate HTTP caching.",
    "source2": "web.dev — Optimize images",
    "source2Url": "https://web.dev/articles/fast#optimize-your-images",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 },
 {
  "id": "gambar-art-direction-crop-mobile",
  "langs": {
   "id": {
    "title": "Cara Atur Crop Gambar Berbeda di Layar Sempit",
    "desc": "Tata cara art direction dengan picture dan media supaya foto Clincoo tidak terpotong salah di ponsel.",
    "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu crop lebar sering memotong wajah di ponsel</h2><p class=\"mb-4\">Hero desktop yang lebar bisa menyisakan wajah di tepi saat dipaksa masuk kolom sempit. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> siapkan dua crop: close-up untuk max-width 640px dan versi lebar untuk desktop. Pasang source media lalu img sebagai default.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Art direction bukan pengganti srcset</h2><p class=\"mb-4\">srcset memilih resolusi berkas yang sama. Art direction mengganti komposisi. Keduanya boleh dipakai bersama: source mobile punya srcset sendiri, source desktop punya srcset sendiri.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek kedua lebar</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ubah viewport ke 390 dan 1280. Subjek harus tetap di tengah pada keduanya, dan hanya satu crop yang diunduh. Simpan catatan crop di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — picture art direction",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture",
    "sourceSnippet": "Use media on source to art-direct different crops. The browser downloads the first matching source.",
    "source2": "web.dev — Art direction",
    "source2Url": "https://web.dev/articles/responsive-images#art-direction",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   },
   "en": {
    "title": "How to Use a Different Image Crop on Narrow Screens",
    "desc": "How to art-direct with picture and media so a Clincoo photo is not cropped badly on a phone.",
    "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One wide crop often cuts faces on phones</h2><p class=\"mb-4\">A wide desktop hero can leave the face at the edge when forced into a narrow column. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> prepare two crops: a close-up for max-width 640px and a wide version for desktop. Add a source with media, then img as the default.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Art direction is not a substitute for srcset</h2><p class=\"mb-4\">srcset picks a resolution of the same composition. Art direction changes the composition. You can use both: the mobile source has its own srcset, and the desktop source has its own srcset.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check both widths</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> set the viewport to 390 and 1280. The subject should stay centered on both, and only one crop should download. Keep the crop notes on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — picture art direction",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture",
    "sourceSnippet": "Use media on source to art-direct different crops. The browser downloads the first matching source.",
    "source2": "web.dev — Art direction",
    "source2Url": "https://web.dev/articles/responsive-images#art-direction",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 },
{
 "id": "gambar-object-position-jaga-wajah",
 "langs": {
  "id": {
   "title": "Cara Jaga Wajah di Crop dengan object-position",
   "desc": "Tata cara menggeser titik fokus object-position supaya wajah tidak terpotong saat gambar Clincoo di-crop.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">object-fit memotong, object-position memilih titik</h2><p class=\"mb-4\">object-fit: cover mengisi kotak, tetapi titik default adalah tengah. Jika wajah ada di kiri, cover memotongnya. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set object-fit: cover lalu object-position: 30% 20% sampai wajah masuk bingkai.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di dua lebar</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> cek 390px dan 1280px. Persentase yang bagus di desktop bisa memotong dagu di ponsel. Simpan nilai yang lolos kedua lebar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan andalkan hanya crop editor</h2><p class=\"mb-4\">Crop file tetap berguna, tetapi object-position menolong saat rasio kotak berubah. Catat nilai akhirnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya edit berikutnya tidak mengulang tebakan.</p>",
   "source": "MDN — object-position",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/object-position",
   "sourceSnippet": "object-position sets the alignment point of a replaced element inside its box when object-fit crops it.",
   "source2": "MDN — object-fit",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Keep a Face in Frame with object-position",
   "desc": "How to shift object-position so a face stays in frame when a Clincoo image is cropped.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">object-fit crops, object-position chooses the point</h2><p class=\"mb-4\">object-fit: cover fills the box, but the default point is the center. If the face sits left, cover cuts it. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set object-fit: cover, then object-position: 30% 20% until the face stays inside.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check two widths</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> check 390px and 1280px. A percentage that works on desktop can crop the chin on a phone. Keep the value that passes both widths.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not rely on file crop alone</h2><p class=\"mb-4\">A file crop still helps, but object-position covers ratio changes. Note the final value on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next edit does not guess again.</p>",
   "source": "MDN — object-position",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/object-position",
   "sourceSnippet": "object-position sets the alignment point of a replaced element inside its box when object-fit crops it.",
   "source2": "MDN — object-fit",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "gambar-max-width-cegah-meluber",
 "langs": {
  "id": {
   "title": "Cara Cegah Gambar Meluber dengan max-width",
   "desc": "Tata cara memakai max-width: 100% dan height: auto supaya gambar Clincoo tidak mendorong layout keluar kolom.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lebar intrinsik sering lebih besar dari kolom</h2><p class=\"mb-4\">Gambar 1600px di kolom 720px meluber jika CSS tidak membatasinya. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan img { max-width: 100%; height: auto; } pada stylesheet halaman, bukan inline di setiap tag.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan set height tetap tanpa width</h2><p class=\"mb-4\">height: 400px tanpa width membuat rasio rusak. Biarkan height: auto mengikuti width dan height atribut HTML. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> geser viewport; gambar harus mengecil, bukan memunculkan scroll horizontal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek induk yang overflow hidden</h2><p class=\"mb-4\">Jika masih terpotong, induk mungkin overflow: hidden atau flex item tanpa min-width: 0. Catat selector yang diperbaiki di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — max-width",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/max-width",
   "sourceSnippet": "max-width sets the maximum width of an element. A percentage is relative to the containing block.",
   "source2": "web.dev — Optimize images",
   "source2Url": "https://web.dev/learn/images",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Stop Images Overflowing with max-width",
   "desc": "How to use max-width: 100% and height: auto so a Clincoo image does not push the layout out of the column.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Intrinsic width is often wider than the column</h2><p class=\"mb-4\">A 1600px image in a 720px column overflows if CSS does not cap it. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add img { max-width: 100%; height: auto; } on the page stylesheet, not inline on every tag.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not set a fixed height without width</h2><p class=\"mb-4\">height: 400px without width breaks the ratio. Leave height: auto so the HTML width and height attributes can scale. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> resize the viewport; the image should shrink, not create horizontal scroll.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check a parent with overflow hidden</h2><p class=\"mb-4\">If it is still clipped, the parent may use overflow: hidden or a flex item without min-width: 0. Note the selector you fixed on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — max-width",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/max-width",
   "sourceSnippet": "max-width sets the maximum width of an element. A percentage is relative to the containing block.",
   "source2": "web.dev — Optimize images",
   "source2Url": "https://web.dev/learn/images",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "gambar-loading-eager-untuk-lcp",
 "langs": {
  "id": {
   "title": "Cara Pakai loading eager pada Gambar LCP",
   "desc": "Tata cara menandai gambar hero Clincoo dengan loading eager dan fetchpriority high supaya tidak tertunda seperti gambar bawah.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">lazy pada hero menunda LCP</h2><p class=\"mb-4\">loading=lazy berguna di bawah lipatan, tetapi pada gambar pertama membuat browser menunda unduhan. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set loading=eager pada hero, dan biarkan lazy hanya pada gambar setelah lipatan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu fetchpriority high</h2><p class=\"mb-4\">Tambahkan fetchpriority=high hanya pada satu gambar LCP. Jika semua gambar high, prioritas tidak berarti. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka Network, filter Img, dan pastikan hero mulai lebih dulu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan preload semua gambar</h2><p class=\"mb-4\">Preload hanya hero yang benar-benar LCP. Catat URL hero di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya revisi berikutnya tidak menandai thumbnail sebagai prioritas.</p>",
   "source": "MDN — img loading",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading",
   "sourceSnippet": "The loading attribute tells the browser whether to load the image immediately or defer it until needed.",
   "source2": "web.dev — Optimize LCP",
   "source2Url": "https://web.dev/articles/optimize-lcp",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use loading eager on the LCP Image",
   "desc": "How to mark a Clincoo hero with loading eager and fetchpriority high so it is not delayed like below-the-fold images.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">lazy on the hero delays LCP</h2><p class=\"mb-4\">loading=lazy helps below the fold, but on the first image it delays the download. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set loading=eager on the hero, and keep lazy only on images after the fold.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One fetchpriority high</h2><p class=\"mb-4\">Add fetchpriority=high on only one LCP image. If every image is high, priority means nothing. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open Network, filter Img, and confirm the hero starts first.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not preload every image</h2><p class=\"mb-4\">Preload only the hero that is truly LCP. Note the hero URL on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next revision does not mark a thumbnail as priority.</p>",
   "source": "MDN — img loading",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading",
   "sourceSnippet": "The loading attribute tells the browser whether to load the image immediately or defer it until needed.",
   "source2": "web.dev — Optimize LCP",
   "source2Url": "https://web.dev/articles/optimize-lcp",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "gambar-nama-berkas-deskriptif",
 "langs": {
  "id": {
   "title": "Cara Namai Berkas Gambar agar Mudah Dicari",
   "desc": "Tata cara menamai berkas gambar Clincoo dengan kata deskriptif, bukan IMG_1234, supaya SEO dan debug lebih jelas.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Nama acak menyulitkan debug 404</h2><p class=\"mb-4\">IMG_8841.jpg tidak menjelaskan bagian halaman. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ganti nama sebelum unggah: hero-warung-malam.webp, bukan hasil kamera. Gunakan huruf kecil dan tanda hubung.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Alt tetap terpisah dari nama berkas</h2><p class=\"mb-4\">Nama berkas membantu URL, alt menjelaskan isi untuk pembaca layar. Jangan menyalin nama berkas ke alt. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> cek panel aksesibilitas: alt harus kalimat singkat, nama berkas boleh kata kunci.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan ganti nama setelah publish tanpa redirect</h2><p class=\"mb-4\">Mengganti src memutus gambar yang sudah diindeks. Jika harus ganti, simpan nama lama atau perbarui semua referensi, lalu catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Google — Image SEO",
   "sourceUrl": "https://developers.google.com/search/docs/appearance/google-images",
   "sourceSnippet": "Descriptive file names and alt text help search engines understand the image.",
   "source2": "MDN — img alt",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Name Image Files So They Are Easy to Find",
   "desc": "How to name Clincoo image files with descriptive words instead of IMG_1234 so SEO and debugging stay clear.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Random names make 404s harder</h2><p class=\"mb-4\">IMG_8841.jpg does not say which section it belongs to. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> rename before upload: hero-warung-malam.webp, not the camera name. Use lowercase and hyphens.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Alt stays separate from the file name</h2><p class=\"mb-4\">The file name helps the URL; alt describes the content for screen readers. Do not copy the file name into alt. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> check the accessibility pane: alt should be a short sentence, the file name can be keywords.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not rename after publish without a redirect</h2><p class=\"mb-4\">Changing src breaks an image that is already indexed. If you must rename, keep the old name or update every reference, then note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Google — Image SEO",
   "sourceUrl": "https://developers.google.com/search/docs/appearance/google-images",
   "sourceSnippet": "Descriptive file names and alt text help search engines understand the image.",
   "source2": "MDN — img alt",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
];
  extra.forEach(function (item) {
    if (!list.some(function (x) { return x.id === item.id; })) list.push(item);
  });
})();
