// Clincoo Docs — kategori Filter (10 Oktober 2026, 11:00 WIB) — 5 artikel baru
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
}
]
};