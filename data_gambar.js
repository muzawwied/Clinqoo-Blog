// Clincoo Docs — kategori Gambar (10 Oktober 2026, 15:00 WIB — tambah 1 artikel)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["gambar"] = {
 "names": { "id": "Gambar", "en": "Images" },
 "articles": [
{
  "id": "gambar-isi-width-height",
  "langs": {
    "id": {
      "title": "Cara Isi width dan height agar Gambar Tidak Mendorong Layout",
      "desc": "Tata cara mengisi atribut width dan height gambar Clincoo supaya browser menyiapkan ruang sebelum berkas selesai dimuat.",
      "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tanpa ukuran, layout meloncat</h2><p class=\"mb-4\">Gambar tanpa width dan height membuat teks di bawahnya meloncat setelah berkas tiba. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> isi width dan height sesuai rasio asli, misalnya 1200 dan 630 pada hero. CSS boleh memakai height: auto dan width: 100% agar tetap responsif.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan mengarang rasio</h2><p class=\"mb-4\">Angka yang tidak sesuai rasio membuat gambar gepeng sebelum CSS memperbaiki. Ambil ukuran dari berkas, bukan dari tebakan. SVG dekoratif tetap butuh lebar dan tinggi tampilan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek Cumulative Layout Shift</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> muat ulang pratinjau dengan jaringan lambat. Jika blok tidak bergeser, atribut sudah benar. Catat ukuran baku tiap slot gambar di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
      "source": "MDN — HTMLImageElement width",
      "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#width",
      "sourceSnippet": "width and height attributes set the image's intrinsic size so the browser can reserve space before the image loads.",
      "source2": "web.dev — Optimize CLS",
      "source2Url": "https://web.dev/articles/optimize-cls",
      "source3": "Clincoo Editor",
      "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
      "title": "How to Set width and height so Images Do Not Push the Layout",
      "desc": "How to set width and height on Clincoo images so the browser reserves space before the file finishes loading.",
      "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Without sizes, the layout jumps</h2><p class=\"mb-4\">An image without width and height makes the text below jump when the file arrives. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set width and height to the intrinsic ratio, for example 1200 and 630 on a hero. CSS may use height: auto and width: 100% so it stays responsive.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not invent the ratio</h2><p class=\"mb-4\">Numbers that do not match the ratio squash the image before CSS corrects it. Read the size from the file, not from a guess. A decorative SVG still needs a display width and height.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check cumulative layout shift</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> reload the preview on a slow network. If the block does not shift, the attributes are correct. Record the standard size of each image slot on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
      "source": "MDN — HTMLImageElement width",
      "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#width",
      "sourceSnippet": "width and height attributes set the image's intrinsic size so the browser can reserve space before the image loads.",
      "source2": "web.dev — Optimize CLS",
      "source2Url": "https://web.dev/articles/optimize-cls",
      "source3": "Clincoo Editor",
      "source3Url": "https://editor.clincoo.buzz/"
    }
  }
},
{
  "id": "gambar-srcset-untuk-layar",
  "langs": {
    "id": {
      "title": "Cara Pakai srcset supaya Gambar Tidak Terlalu Besar",
      "desc": "Tata cara menyiapkan srcset dan sizes di Clincoo agar ponsel tidak mengunduh gambar desktop.",
      "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu berkas besar untuk semua layar</h2><p class=\"mb-4\">Gambar 2000px yang dipakai di kartu 400px membuang data. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> siapkan dua atau tiga lebar, lalu tulis srcset dengan deskriptor w dan sizes yang sesuai kolom. src tetap ada sebagai cadangan browser lama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">sizes harus jujur</h2><p class=\"mb-4\">sizes=\"100vw\" pada kartu sepertiga kolom membuat browser memilih berkas terlalu besar. Ukur lebar tampilan di layout, misalnya (min-width: 768px) 33vw, 100vw.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di Network</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka tab Network, filter Img, dan sempitkan jendela. Berkas yang terunduh harus yang kecil. Simpan daftar lebar di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
      "source": "MDN — Responsive images",
      "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Responsive_images",
      "sourceSnippet": "srcset lets the browser choose a source based on width descriptors and the sizes attribute.",
      "source2": "HTML — img srcset",
      "source2Url": "https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-srcset",
      "source3": "Clincoo Editor",
      "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
      "title": "How to Use srcset so Images Are Not Too Large",
      "desc": "How to set srcset and sizes in Clincoo so a phone does not download the desktop image.",
      "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One large file for every screen</h2><p class=\"mb-4\">A 2000px image used in a 400px card wastes data. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> prepare two or three widths, then write srcset with w descriptors and sizes that match the column. Keep src as a fallback for older browsers.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">sizes must be honest</h2><p class=\"mb-4\">sizes=\"100vw\" on a one-third column card makes the browser pick a file that is too large. Measure the display width in the layout, for example (min-width: 768px) 33vw, 100vw.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in Network</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the Network tab, filter Img, and narrow the window. The downloaded file should be the small one. Save the width list on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
      "source": "MDN — Responsive images",
      "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Responsive_images",
      "sourceSnippet": "srcset lets the browser choose a source based on width descriptors and the sizes attribute.",
      "source2": "HTML — img srcset",
      "source2Url": "https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-srcset",
      "source3": "Clincoo Editor",
      "source3Url": "https://editor.clincoo.buzz/"
    }
  }
},
{
  "id": "gambar-lazy-bawah-lipatan",
  "langs": {
    "id": {
      "title": "Cara Pasang loading lazy pada Gambar Bawah Lipatan",
      "desc": "Tata cara menunda unduhan gambar Clincoo di bawah lipatan tanpa membuat hero ikut terlambat.",
      "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan lazy pada hero</h2><p class=\"mb-4\">loading=\"lazy\" pada gambar pertama menunda LCP. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> biarkan hero tanpa lazy, dan pasang loading=\"lazy\" hanya pada gambar di bawah lipatan: galeri, kartu blog, dan avatar di footer.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tetap isi width dan height</h2><p class=\"mb-4\">Lazy tidak menggantikan ruang yang disiapkan. Tanpa width dan height, layout tetap meloncat saat gambar masuk viewport. Gabungkan dengan decoding=\"async\" jika decode terasa menahan gulir.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji urutan unduhan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> muat halaman dan lihat Network. Hero harus duluan. Gambar bawah baru muncul saat digulir. Catat pengecualian hero di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
      "source": "MDN — loading attribute",
      "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading",
      "sourceSnippet": "loading=lazy defers fetching the image until it is near the viewport. Do not use it for the LCP image.",
      "source2": "web.dev — Browser-level image lazy loading",
      "source2Url": "https://web.dev/articles/browser-level-image-lazy-loading",
      "source3": "Clincoo Editor",
      "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
      "title": "How to Use loading lazy on Below-the-Fold Images",
      "desc": "How to defer Clincoo images below the fold without delaying the hero.",
      "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not lazy-load the hero</h2><p class=\"mb-4\">loading=\"lazy\" on the first image delays LCP. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> leave the hero without lazy, and set loading=\"lazy\" only on images below the fold: galleries, blog cards, and footer avatars.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Still set width and height</h2><p class=\"mb-4\">Lazy does not replace reserved space. Without width and height the layout still jumps when the image enters the viewport. Add decoding=\"async\" if decode stalls scrolling.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test download order</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> load the page and watch Network. The hero should come first. Below-the-fold images appear when scrolled. Record the hero exception on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
      "source": "MDN — loading attribute",
      "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading",
      "sourceSnippet": "loading=lazy defers fetching the image until it is near the viewport. Do not use it for the LCP image.",
      "source2": "web.dev — Browser-level image lazy loading",
      "source2Url": "https://web.dev/articles/browser-level-image-lazy-loading",
      "source3": "Clincoo Editor",
      "source3Url": "https://editor.clincoo.buzz/"
    }
  }
},
{
  "id": "gambar-optimasi-webp-avif",
  "langs": {
    "id": {
      "title": "Cara Optimasi Gambar dengan WebP dan AVIF",
      "desc": "Tata cara menyiapkan gambar Clincoo dalam format modern untuk mengurangi ukuran unduhan.",
      "content": "<p class=\"mb-4\">Format JPEG atau PNG lama lebih besar dari WebP atau AVIF untuk kualitas yang sama. Browser modern mendukung keduanya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sediakan beberapa format</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> gunakan picture dengan source type=\"image/avif\" dan type=\"image/webp\", lalu img sebagai cadangan. Isi width dan height pada img.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji ukuran unduhan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> cek Network. AVIF atau WebP harus terpilih di browser yang mendukung. Catat penghematan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
      "source": "MDN — picture element",
      "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture",
      "sourceSnippet": "The picture element allows multiple sources for different formats and sizes.",
      "source2": "web.dev — Serve images in modern formats",
      "source2Url": "https://web.dev/articles/serve-images-webp",
      "source3": "Clincoo Editor",
      "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
      "title": "How to Optimize Images with WebP and AVIF",
      "desc": "How to prepare Clincoo images in modern formats to reduce download size.",
      "content": "<p class=\"mb-4\">Older JPEG or PNG formats are larger than WebP or AVIF for the same quality. Modern browsers support both.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Provide multiple formats</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> use a picture element with source type=\"image/avif\" and type=\"image/webp\", then img as fallback. Set width and height on the img.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test download size</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> check Network. AVIF or WebP should be chosen in supporting browsers. Record the savings on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
      "source": "MDN — picture element",
      "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture",
      "sourceSnippet": "The picture element allows multiple sources for different formats and sizes.",
      "source2": "web.dev — Serve images in modern formats",
      "source2Url": "https://web.dev/articles/serve-images-webp",
      "source3": "Clincoo Editor",
      "source3Url": "https://editor.clincoo.buzz/"
    }
  }
}
 ]
};
