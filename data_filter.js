// Clincoo Docs — kategori Filter (10 Oktober 2026, 12:00 WIB — tambah 5 artikel)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["filter"] = {
 "names": { "id": "Filter", "en": "Filter" },
 "articles": [
{
 "id": "filter-brightness-hover-tombol",
 "langs": {
  "id": {
   "title": "Cara Pakai filter: brightness untuk Hover Tombol",
   "desc": "Tata cara membuat tombol Clincoo lebih terang saat hover tanpa mengubah warna dasar atau menambah shadow.",
   "content": "<p class=\"mb-4\">Hover pada tombol sering memakai background lebih gelap. Itu bisa bentrok dengan desain sistem warna di editor.clincoo.buzz.</p><p class=\"mb-4\">Pakai filter: brightness(1.1) pada :hover. Nilai di atas 1 membuat tombol lebih terang tanpa mengganti background-color. Nilai di bawah 1 menggelapkan.</p><p class=\"mb-4\">Jangan taruh filter pada induk yang berisi teks. Filter pada induk memburamkan atau mengubah teks di dalamnya. Terapkan hanya pada elemen tombol itu sendiri.</p><p class=\"mb-4\">Uji di app.clincoo.buzz dengan prefers-reduced-motion. Jika animasi filter terasa berat, matikan dengan media query.</p><p class=\"mb-4\">Catat nilai brightness yang dipakai di blog.clincoo.buzz agar konsisten di seluruh komponen.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The brightness() CSS function applies a linear multiplier to the input image.",
   "source2": "MDN — :hover",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:hover",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use filter: brightness for Button Hover",
   "desc": "How to make a Clincoo button brighter on hover without changing its base color or adding a shadow.",
   "content": "<p class=\"mb-4\">Button hover often darkens the background. That can clash with the color system in editor.clincoo.buzz.</p><p class=\"mb-4\">Use filter: brightness(1.1) on :hover. A value above 1 brightens the button without replacing background-color. A value below 1 darkens it.</p><p class=\"mb-4\">Do not put the filter on a parent that contains text. A filter on the parent blurs or alters the text inside. Apply it only to the button element itself.</p><p class=\"mb-4\">Test on app.clincoo.buzz with prefers-reduced-motion. If the filter animation feels heavy, disable it with a media query.</p><p class=\"mb-4\">Record the brightness value used on blog.clincoo.buzz so it stays consistent across components.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The brightness() CSS function applies a linear multiplier to the input image.",
   "source2": "MDN — :hover",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:hover",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "filter-contrast-teks-di-atas-gambar",
 "langs": {
  "id": {
   "title": "Cara Naikkan contrast Agar Teks di Atas Gambar Terbaca",
   "desc": "Tata cara memakai filter: contrast pada overlay agar teks putih di atas foto Clincoo tetap kontras.",
   "content": "<p class=\"mb-4\">Teks putih di atas foto sering gagal lolos kontras karena foto terang di beberapa area.</p><p class=\"mb-4\">Pada overlay di editor.clincoo.buzz, set filter: contrast(1.2) brightness(0.9) pada gambar, bukan pada teks. Overlay semi-transparan gelap tetap diperlukan, tetapi contrast membantu memisahkan area terang.</p><p class=\"mb-4\">Jangan naikkan contrast terlalu tinggi. Nilai di atas 1.5 membuat gambar terlihat kasar dan tidak natural di app.clincoo.buzz.</p><p class=\"mb-4\">Uji dengan alat kontras di DevTools. Rasio teks harus tetap di atas 4.5:1 setelah filter.</p><p class=\"mb-4\">Jika foto sudah gelap, filter contrast bisa membuat teks terlalu menonjol. Sesuaikan per gambar.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The contrast() CSS function adjusts the contrast of the input image.",
   "source2": "WebAIM — Contrast Checker",
   "source2Url": "https://webaim.org/resources/contrastchecker/",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Raise contrast so Text on Images Stays Readable",
   "desc": "How to use filter: contrast on an overlay so white text over a Clincoo photo keeps enough contrast.",
   "content": "<p class=\"mb-4\">White text over a photo often fails contrast because some areas of the photo are bright.</p><p class=\"mb-4\">On an overlay in editor.clincoo.buzz, set filter: contrast(1.2) brightness(0.9) on the image, not on the text. A semi-transparent dark overlay is still needed, but contrast helps separate bright areas.</p><p class=\"mb-4\">Do not push contrast too high. Values above 1.5 make the image look harsh and unnatural on app.clincoo.buzz.</p><p class=\"mb-4\">Test with the contrast tool in DevTools. The text ratio must stay above 4.5:1 after the filter.</p><p class=\"mb-4\">If the photo is already dark, a contrast filter can make the text too stark. Adjust per image.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The contrast() CSS function adjusts the contrast of the input image.",
   "source2": "WebAIM — Contrast Checker",
   "source2Url": "https://webaim.org/resources/contrastchecker/",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "filter-invert-ikon-dark-mode",
 "langs": {
  "id": {
   "title": "Cara Invert Ikon dengan filter: invert untuk Dark Mode",
   "desc": "Tata cara mengubah ikon monokrom menjadi putih di dark mode Clincoo tanpa aset ganda.",
   "content": "<p class=\"mb-4\">Ikon SVG hitam menjadi tidak terlihat di latar gelap. Menggandakan aset untuk dark mode menambah ukuran bundle.</p><p class=\"mb-4\">Pada ikon di editor.clincoo.buzz, pakai filter: invert(1) saat data-theme=dark. invert(1) membalik hitam menjadi putih. Untuk ikon berwarna, invert bisa mengubah hue, jadi batasi pada ikon monokrom.</p><p class=\"mb-4\">Gabungkan dengan brightness(1) jika invert membuat ikon terlalu terang. Uji di app.clincoo.buzz pada tema sistem.</p><p class=\"mb-4\">Jangan invert pada teks. Teks terbalik menjadi tidak terbaca. Terapkan hanya pada elemen img atau svg ikon.</p><p class=\"mb-4\">Jika browser tidak mendukung filter, sediakan fallback currentColor dan ganti fill via CSS variable.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The invert() CSS function inverts the samples in the input image.",
   "source2": "MDN — prefers-color-scheme",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Invert Icons with filter: invert for Dark Mode",
   "desc": "How to turn monochrome icons white in Clincoo dark mode without duplicating assets.",
   "content": "<p class=\"mb-4\">Black SVG icons disappear on a dark background. Duplicating assets for dark mode increases bundle size.</p><p class=\"mb-4\">On icons in editor.clincoo.buzz, use filter: invert(1) when data-theme=dark. invert(1) flips black to white. For colored icons, invert can shift hue, so limit it to monochrome icons.</p><p class=\"mb-4\">Combine with brightness(1) if invert makes the icon too bright. Test on app.clincoo.buzz with the system theme.</p><p class=\"mb-4\">Do not invert text. Inverted text becomes unreadable. Apply it only to img or svg icon elements.</p><p class=\"mb-4\">If the browser does not support filter, fall back to currentColor and swap fill via a CSS variable.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The invert() CSS function inverts the samples in the input image.",
   "source2": "MDN — prefers-color-scheme",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "filter-saturate-gambar-produk-hover",
 "langs": {
  "id": {
   "title": "Cara Naikkan saturate pada Gambar Produk saat Hover",
   "desc": "Tata cara membuat gambar produk Clincoo lebih hidup saat hover dengan filter: saturate tanpa mengubah aset.",
   "content": "<p class=\"mb-4\">Gambar produk yang datar tidak menarik perhatian. Mengganti aset untuk hover menambah permintaan jaringan.</p><p class=\"mb-4\">Pada kartu di editor.clincoo.buzz, set filter: saturate(1.3) pada gambar saat :hover. Nilai 1 adalah normal. Di atas 1 membuat warna lebih jenuh.</p><p class=\"mb-4\">Transisi filter dengan transition: filter 200ms agar tidak tiba-tiba. Jangan transisi filter pada elemen besar karena bisa membebani GPU di app.clincoo.buzz.</p><p class=\"mb-4\">Jika gambar sudah sangat berwarna, saturate berlebih membuatnya terlihat palsu. Uji dengan foto nyata.</p><p class=\"mb-4\">Matikan efek saat prefers-reduced-motion agar tidak mengganggu pengguna.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The saturate() CSS function super-saturates or desaturates the input image.",
   "source2": "MDN — transition",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Raise saturate on Product Images on Hover",
   "desc": "How to make Clincoo product images more vivid on hover with filter: saturate without swapping assets.",
   "content": "<p class=\"mb-4\">Flat product images do not draw attention. Swapping assets for hover adds network requests.</p><p class=\"mb-4\">On a card in editor.clincoo.buzz, set filter: saturate(1.3) on the image on :hover. 1 is normal. Above 1 makes colors more saturated.</p><p class=\"mb-4\">Transition the filter with transition: filter 200ms so it is not abrupt. Do not transition filter on large elements because it can tax the GPU on app.clincoo.buzz.</p><p class=\"mb-4\">If the image is already very colorful, excess saturate makes it look artificial. Test with real photos.</p><p class=\"mb-4\">Disable the effect under prefers-reduced-motion so it does not bother users.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The saturate() CSS function super-saturates or desaturates the input image.",
   "source2": "MDN — transition",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "filter-sepia-arsip-foto",
 "langs": {
  "id": {
   "title": "Cara Pakai sepia untuk Memberi Kesan Arsip pada Foto",
   "desc": "Tata cara menerapkan filter: sepia pada foto lama di Clincoo agar terlihat seperti arsip tanpa mengedit file.",
   "content": "<p class=\"mb-4\">Foto arsip sering diedit di luar untuk memberi warna sepia. Itu membuat dua versi file.</p><p class=\"mb-4\">Pada galeri di editor.clincoo.buzz, pakai filter: sepia(0.6) pada img. Nilai 0 adalah normal, 1 adalah sepia penuh. 0.6 memberi kesan hangat tanpa menghilangkan detail.</p><p class=\"mb-4\">Gabungkan dengan brightness(1.05) jika sepia membuat foto terlalu gelap. Jangan pakai sepia pada ikon atau UI karena mengubah makna warna status.</p><p class=\"mb-4\">Uji di app.clincoo.buzz pada layar terang dan gelap. Sepia harus tetap terbaca sebagai foto, bukan filter rusak.</p><p class=\"mb-4\">Jika pengguna mematikan filter lewat prefers-reduced-motion atau kontras tinggi, sediakan fallback tanpa sepia.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The sepia() CSS function converts the input image to sepia.",
   "source2": "MDN — image",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use sepia to Give Photos an Archive Look",
   "desc": "How to apply filter: sepia to old photos in Clincoo so they look like archives without editing the files.",
   "content": "<p class=\"mb-4\">Archive photos are often edited outside to add a sepia tone. That creates two versions of the file.</p><p class=\"mb-4\">In a gallery in editor.clincoo.buzz, use filter: sepia(0.6) on the img. 0 is normal, 1 is full sepia. 0.6 gives a warm look without losing detail.</p><p class=\"mb-4\">Combine with brightness(1.05) if sepia makes the photo too dark. Do not use sepia on icons or UI because it changes the meaning of status colors.</p><p class=\"mb-4\">Test on app.clincoo.buzz in light and dark screens. Sepia should still read as a photo, not a broken filter.</p><p class=\"mb-4\">If the user disables filters via prefers-reduced-motion or high contrast, provide a fallback without sepia.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The sepia() CSS function converts the input image to sepia.",
   "source2": "MDN — image",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "filter-blur-latar-belakang-modal",
 "langs": {
  "id": {
   "title": "Cara Blur Latar Belakang Modal dengan filter: blur",
   "desc": "Tata cara membuat latar modal Clincoo kabur dengan filter: blur tanpa mengganggu performa.",
   "content": "<p class=\"mb-4\">Modal dengan latar kabur memfokuskan perhatian ke dialog. Filter blur pada backdrop membuatnya lebih halus daripada overlay datar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Terapkan blur pada backdrop saja</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri backdrop filter: blur(8px) dan background semi-transparan. Jangan blur pada dialog itu sendiri. Batasi blur di bawah 12px agar tidak berat di perangkat rendah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan prefers-reduced-motion</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> aktifkan reduced motion. Blur harus hilang atau dikurangi. Catat nilai di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The blur() CSS function applies a Gaussian blur to the input image.",
   "source2": "MDN — backdrop-filter",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Blur Modal Background with filter: blur",
   "desc": "How to make a Clincoo modal backdrop blurry with filter: blur without hurting performance.",
   "content": "<p class=\"mb-4\">A modal with a blurred background focuses attention on the dialog. A filter blur on the backdrop is smoother than a flat overlay.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Apply blur only to the backdrop</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> give the backdrop filter: blur(8px) and a semi-transparent background. Do not blur the dialog itself. Keep blur under 12px so it stays light on low-end devices.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test with prefers-reduced-motion</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> enable reduced motion. The blur should disappear or reduce. Record the value on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The blur() CSS function applies a Gaussian blur to the input image.",
   "source2": "MDN — backdrop-filter",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "filter-drop-shadow-bukan-box-shadow",
 "langs": {
  "id": {
   "title": "Cara Pakai drop-shadow daripada box-shadow pada Ikon SVG",
   "desc": "Tata cara memberi bayangan pada ikon SVG Clincoo dengan filter: drop-shadow yang mengikuti bentuk.",
   "content": "<p class=\"mb-4\">box-shadow pada SVG mengikuti kotak, bukan bentuk ikon. drop-shadow mengikuti alpha channel sehingga bayangan sesuai siluet.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Terapkan pada elemen SVG</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2)) pada svg. Hindari pada grup besar karena bisa mahal. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pada tema terang dan gelap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Fallback jika filter tidak didukung</h2><p class=\"mb-4\">Sediakan box-shadow sederhana sebagai cadangan. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The drop-shadow() CSS function applies a drop shadow effect to the input image.",
   "source2": "MDN — box-shadow",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use drop-shadow Instead of box-shadow on SVG Icons",
   "desc": "How to add a shadow to Clincoo SVG icons with filter: drop-shadow that follows the shape.",
   "content": "<p class=\"mb-4\">box-shadow on an SVG follows the box, not the icon shape. drop-shadow follows the alpha channel so the shadow matches the silhouette.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Apply to the SVG element</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2)) on the svg. Avoid it on large groups because it can be expensive. Test on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> in light and dark themes.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Fallback if filter is unsupported</h2><p class=\"mb-4\">Provide a simple box-shadow as backup. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The drop-shadow() CSS function applies a drop shadow effect to the input image.",
   "source2": "MDN — box-shadow",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "filter-grayscale-status-disabled",
 "langs": {
  "id": {
   "title": "Cara Grayscale untuk Status Disabled pada Tombol",
   "desc": "Tata cara membuat tombol disabled Clincoo terlihat nonaktif dengan filter: grayscale tanpa mengubah warna dasar.",
   "content": "<p class=\"mb-4\">Tombol disabled sering hanya opacity rendah. Grayscale membuatnya jelas tidak aktif tanpa mengaburkan teks.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gabungkan grayscale dan opacity</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada :disabled atau [aria-disabled], set filter: grayscale(1) opacity(0.6). Jangan hanya opacity karena warna aksen masih terlihat aktif.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pastikan kontras teks tetap</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> cek rasio kontras setelah filter. Teks harus tetap terbaca. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The grayscale() CSS function converts the input image to grayscale.",
   "source2": "WCAG — Contrast",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Grayscale for Disabled Button State",
   "desc": "How to make a Clincoo disabled button look inactive with filter: grayscale without changing the base color.",
   "content": "<p class=\"mb-4\">Disabled buttons often use only low opacity. Grayscale makes them clearly inactive without washing out the text.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Combine grayscale and opacity</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> on :disabled or [aria-disabled], set filter: grayscale(1) opacity(0.6). Do not use opacity alone because accent color still looks active.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep text contrast</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> check the contrast ratio after the filter. Text must stay readable. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The grayscale() CSS function converts the input image to grayscale.",
   "source2": "WCAG — Contrast",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "filter-hue-rotate-aksen-tema",
 "langs": {
  "id": {
   "title": "Cara Hue-rotate untuk Mengubah Aksen Tema",
   "desc": "Tata cara menyesuaikan warna aksen Clincoo dengan filter: hue-rotate tanpa mengganti banyak variabel.",
   "content": "<p class=\"mb-4\">Mengubah aksen tema sering butuh banyak CSS variable. hue-rotate pada elemen ikon atau badge bisa menyesuaikan cepat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Terapkan pada elemen monokrom</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set filter: hue-rotate(90deg) pada ikon aksen. Uji beberapa derajat untuk menemukan yang cocok dengan palet. Jangan pada foto karena mengubah makna warna.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan nilai di catatan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bandingkan sebelum dan sesudah. Catat derajat yang dipakai di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> agar konsisten.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The hue-rotate() CSS function rotates the hue of the input image.",
   "source2": "MDN — CSS filters",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use hue-rotate to Shift Theme Accent",
   "desc": "How to adjust Clincoo accent color with filter: hue-rotate without changing many variables.",
   "content": "<p class=\"mb-4\">Changing a theme accent often needs many CSS variables. hue-rotate on an icon or badge can shift it quickly.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Apply to monochrome elements</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set filter: hue-rotate(90deg) on an accent icon. Try a few degrees to match the palette. Do not use it on photos because it changes color meaning.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Save the value in a note</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> compare before and after. Record the degrees used on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so it stays consistent.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The hue-rotate() CSS function rotates the hue of the input image.",
   "source2": "MDN — CSS filters",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "filter-opacity-vs-filter-opacity",
 "langs": {
  "id": {
   "title": "Cara Pilih opacity Properti atau filter: opacity",
   "desc": "Tata cara membedakan opacity CSS dan filter: opacity di komponen Clincoo.",
   "content": "<p class=\"mb-4\">opacity properti memengaruhi seluruh elemen termasuk anak. filter: opacity hanya memengaruhi rendering filter stack.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai opacity untuk konten</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> untuk membuat tombol setengah transparan, pakai opacity: 0.7. Untuk efek filter bertumpuk, filter: opacity(0.7). Jangan campur jika tidak perlu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji stacking</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> lihat apakah anak ikut transparan. Catat pilihan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — opacity",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/opacity",
   "sourceSnippet": "The opacity CSS property sets the opacity of an element.",
   "source2": "MDN — filter",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Choose opacity Property or filter: opacity",
   "desc": "How to distinguish CSS opacity and filter: opacity in Clincoo components.",
   "content": "<p class=\"mb-4\">The opacity property affects the whole element including children. filter: opacity only affects the filter rendering stack.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use opacity for content</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> to make a button half-transparent, use opacity: 0.7. For stacked filter effects, use filter: opacity(0.7). Do not mix them unless needed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test stacking</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> see if children become transparent too. Record the choice on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — opacity",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/opacity",
   "sourceSnippet": "The opacity CSS property sets the opacity of an element.",
   "source2": "MDN — filter",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
