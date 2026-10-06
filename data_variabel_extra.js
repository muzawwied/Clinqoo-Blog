// Clincoo Docs — tambah artikel Variabel 1-2 (6 Oktober 2026, 17:00 WIB)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.variabel) return;
  var list = window.countryDataFiles.variabel.articles;
  var extra = [
    {
      "id": "variabel-hitung-dengan-calc",
      "langs": {
        "id": {
          "title": "Cara Hitung Ukuran dengan calc() dan Variabel CSS",
          "desc": "Tata cara memakai var() di dalam calc() supaya lebar kartu Clincoo mengikuti token tanpa angka ajaib.",
          "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kenapa angka ajaib pecah</h2><p class=\"mb-4\">Lebar kartu yang ditulis 320px tidak ikut saat sidebar berubah. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan token --lebar-sidebar: 16rem; lalu hitung sisa ruang dengan calc(100% - var(--lebar-sidebar) - 1.5rem).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satuan harus ada di token</h2><p class=\"mb-4\">var(--celah) di dalam calc() gagal jika nilainya hanya 16 tanpa rem. Simpan --celah: 1rem; lalu pakai calc(var(--celah) * 2). Pratinjau di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pada lebar 360px dan 1200px.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat rumus yang dipakai</h2><p class=\"mb-4\">Tulis rumus di komentar CSS dan ringkas di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya orang berikutnya tidak menimpa calc dengan piksel tetap.</p>",
          "source": "MDN — calc()",
          "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/calc",
          "sourceSnippet": "A custom property used inside calc() must include a unit when the expression needs a length.",
          "source2": "MDN — Using CSS custom properties",
          "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
          "source3": "Clincoo Editor",
          "source3Url": "https://editor.clincoo.buzz/"
        },
        "en": {
          "title": "How to Size with calc() and CSS Variables",
          "desc": "How to use var() inside calc() so Clincoo card widths follow tokens without magic numbers.",
          "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Why magic numbers break</h2><p class=\"mb-4\">A card width of 320px does not follow a sidebar change. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> store --lebar-sidebar: 16rem; then compute the rest with calc(100% - var(--lebar-sidebar) - 1.5rem).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">The token needs a unit</h2><p class=\"mb-4\">var(--celah) inside calc() fails if the value is 16 with no rem. Store --celah: 1rem; then use calc(var(--celah) * 2). Preview on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> at 360px and 1200px.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record the formula</h2><p class=\"mb-4\">Keep the formula in a CSS comment and a short note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next edit does not replace calc() with a fixed pixel width.</p>",
          "source": "MDN — calc()",
          "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/calc",
          "sourceSnippet": "A custom property used inside calc() must include a unit when the expression needs a length.",
          "source2": "MDN — Using CSS custom properties",
          "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
          "source3": "Clincoo Editor",
          "source3Url": "https://editor.clincoo.buzz/"
        }
      }
    },
    {
      "id": "variabel-ruang-lingkup-komponen",
      "langs": {
        "id": {
          "title": "Cara Batasi Ruang Lingkup Variabel di Komponen",
          "desc": "Tata cara menaruh custom property pada selector komponen, bukan hanya :root, supaya kartu tidak menimpa token global.",
          "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan timpa :root untuk satu kartu</h2><p class=\"mb-4\">Mengubah --warna-teks di :root mengubah seluruh halaman. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set --warna-teks pada .kartu-promo saja. Anak elemen mewarisi nilai itu, saudara di luar kartu tidak.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Nama lokal tetap jelas</h2><p class=\"mb-4\">Pakai awalan komponen, misalnya --promo-latar, jika nilai tidak boleh bocor. Cek di panel Styles bahwa properti yang menang adalah yang paling dekat dengan elemen.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dua komponen bersebelahan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> letakkan kartu promo dan kartu biasa. Keduanya harus mempertahankan warna sendiri. Catat keputusan ruang lingkup di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
          "source": "MDN — Using CSS custom properties",
          "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
          "sourceSnippet": "Custom properties inherit. A value set on a selector applies to that element and its descendants.",
          "source2": "MDN — Inheritance",
          "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Inheritance",
          "source3": "Clincoo Editor",
          "source3Url": "https://editor.clincoo.buzz/"
        },
        "en": {
          "title": "How to Scope CSS Variables to a Component",
          "desc": "How to put custom properties on a component selector, not only :root, so a card does not override global tokens.",
          "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not override :root for one card</h2><p class=\"mb-4\">Changing --warna-teks on :root restyles the whole page. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set --warna-teks on .kartu-promo only. Descendants inherit it; siblings outside the card do not.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep local names obvious</h2><p class=\"mb-4\">Use a component prefix such as --promo-latar when the value must not leak. In the Styles pane, confirm the winning property is the one closest to the element.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test two components side by side</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> place a promo card next to a plain card. Each should keep its own color. Record the scope decision on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
          "source": "MDN — Using CSS custom properties",
          "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
          "sourceSnippet": "Custom properties inherit. A value set on a selector applies to that element and its descendants.",
          "source2": "MDN — Inheritance",
          "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Inheritance",
          "source3": "Clincoo Editor",
          "source3Url": "https://editor.clincoo.buzz/"
        }
      }
    }
  ];
  extra.forEach(function (item) {
    if (!list.some(function (a) { return a.id === item.id; })) list.push(item);
  });
})();
