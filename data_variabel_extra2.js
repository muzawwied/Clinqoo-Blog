// Clincoo Docs — tambah artikel Variabel 6-7 (6 Oktober 2026, 18:00 WIB)
// Clincoo Docs — tambah artikel Variabel 3-5 (6 Oktober 2026, 17:00 WIB)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.variabel) return;
  var list = window.countryDataFiles.variabel.articles;
  var extra = [
    {
      "id": "variabel-setproperty-dari-js",
      "langs": {
        "id": {
          "title": "Cara Set Variabel CSS dari JavaScript",
          "desc": "Tata cara memakai setProperty untuk token tema Clincoo tanpa menulis ulang seluruh stylesheet.",
          "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ubah token, bukan puluhan kelas</h2><p class=\"mb-4\">Tombol tema tidak perlu menyentuh setiap warna. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> panggil document.documentElement.style.setProperty('--warna-latar', '#111827') saat pengguna memilih mode gelap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Nama harus persis</h2><p class=\"mb-4\">setProperty('--warna-latar', nilai) gagal diam-diam jika nama salah satu tanda hubung. Baca kembali getPropertyValue('--warna-latar') dan cocokkan dengan deklarasi :root.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan simpan rahasia di variabel</h2><p class=\"mb-4\">Token warna boleh di style inline. Jangan taruh kunci API di custom property karena tampil di DevTools. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> lalu catat nama token di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
          "source": "MDN — CSSStyleDeclaration.setProperty",
          "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty",
          "sourceSnippet": "CSSStyleDeclaration.setProperty sets or updates a CSS property, including a custom property name.",
          "source2": "MDN — Using CSS custom properties",
          "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
          "source3": "Clincoo Editor",
          "source3Url": "https://editor.clincoo.buzz/"
        },
        "en": {
          "title": "How to Set a CSS Variable from JavaScript",
          "desc": "How to use setProperty for a Clincoo theme token without rewriting the whole stylesheet.",
          "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Change the token, not dozens of classes</h2><p class=\"mb-4\">A theme button should not touch every color. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> call document.documentElement.style.setProperty('--warna-latar', '#111827') when the user picks dark mode.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">The name must match exactly</h2><p class=\"mb-4\">setProperty('--warna-latar', value) fails quietly if one hyphen is wrong. Read getPropertyValue('--warna-latar') and match it to the :root declaration.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not store secrets in variables</h2><p class=\"mb-4\">Color tokens may live in an inline style. Do not put an API key in a custom property; it shows in DevTools. Test on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> and record the token name on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
          "source": "MDN — CSSStyleDeclaration.setProperty",
          "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty",
          "sourceSnippet": "CSSStyleDeclaration.setProperty sets or updates a CSS property, including a custom property name.",
          "source2": "MDN — Using CSS custom properties",
          "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
          "source3": "Clincoo Editor",
          "source3Url": "https://editor.clincoo.buzz/"
        }
      }
    },
    {
      "id": "variabel-daftar-dengan-property",
      "langs": {
        "id": {
          "title": "Cara Daftarkan Variabel Bertipe dengan @property",
          "desc": "Tata cara mendaftarkan custom property Clincoo supaya animasi warna dan syntax error lebih mudah dilacak.",
          "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tanpa tipe, animasi warna sering meloncat</h2><p class=\"mb-4\">Custom property biasa tidak selalu bisa dianimasikan sebagai warna. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> daftarkan @property --warna-aksen dengan syntax '<color>', inherits: true, dan initial-value.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Nilai salah jadi initial</h2><p class=\"mb-4\">Jika syntax menolak nilai, properti jatuh ke initial-value, bukan ke fallback var() biasa. Cek di Computed bahwa warna aksen bukan transparan tak terduga.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji browser pratinjau</h2><p class=\"mb-4\">Buka pratinjau di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dan pastikan transisi hover berjalan. Jika @property tidak didukung, sediakan warna tetap. Catat dukungan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
          "source": "MDN — @property",
          "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@property",
          "sourceSnippet": "The @property at-rule registers a custom property with a syntax, inheritance flag, and initial value.",
          "source2": "MDN — CSS.registerProperty",
          "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/CSS/registerProperty_static",
          "source3": "Clincoo Editor",
          "source3Url": "https://editor.clincoo.buzz/"
        },
        "en": {
          "title": "How to Register a Typed Variable with @property",
          "desc": "How to register a Clincoo custom property so color animation and syntax errors are easier to trace.",
          "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Without a type, color animation often jumps</h2><p class=\"mb-4\">A plain custom property is not always animatable as a color. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> register @property --warna-aksen with syntax '<color>', inherits: true, and an initial-value.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">An invalid value becomes the initial value</h2><p class=\"mb-4\">If the syntax rejects a value, the property falls back to initial-value, not the usual var() fallback. In Computed, confirm the accent is not an unexpected transparent.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test the preview browser</h2><p class=\"mb-4\">Open the preview on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> and confirm the hover transition runs. If @property is unsupported, keep a solid color. Note support on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
          "source": "MDN — @property",
          "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@property",
          "sourceSnippet": "The @property at-rule registers a custom property with a syntax, inheritance flag, and initial value.",
          "source2": "MDN — CSS.registerProperty",
          "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/CSS/registerProperty_static",
          "source3": "Clincoo Editor",
          "source3Url": "https://editor.clincoo.buzz/"
        }
      }
    },
    {
      "id": "variabel-hindari-nama-bentrok",
      "langs": {
        "id": {
          "title": "Cara Hindari Nama Variabel CSS yang Bentrok",
          "desc": "Tata cara memberi awalan token Clincoo supaya stylesheet template tidak menimpa variabel satu sama lain.",
          "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu nama, dua arti</h2><p class=\"mb-4\">--gap di template dan di komponenmu bisa bentrok. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pakai awalan --clincoo-gap untuk token bersama dan --kartu-gap untuk lokal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Urutan stylesheet menentukan pemenang</h2><p class=\"mb-4\">File yang dimuat belakangan menimpa nama yang sama pada selector sama. Di DevTools lihat deklarasi yang dicoret, lalu pindahkan token bersama ke satu file token.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Daftar nama sebelum menambah</h2><p class=\"mb-4\">Sebelum menambah token, cari nama yang sama di proyek. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> setelah menggabungkan template. Simpan daftar di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
          "source": "MDN — Using CSS custom properties",
          "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
          "sourceSnippet": "Custom properties are case-sensitive and share one cascade; a later declaration of the same name wins.",
          "source2": "CSS Cascade — custom properties",
          "source2Url": "https://www.w3.org/TR/css-variables-1/",
          "source3": "Clincoo Editor",
          "source3Url": "https://editor.clincoo.buzz/"
        },
        "en": {
          "title": "How to Avoid Colliding CSS Variable Names",
          "desc": "How to prefix Clincoo tokens so template stylesheets do not overwrite each other's variables.",
          "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One name, two meanings</h2><p class=\"mb-4\">--gap in a template and in your component can collide. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> use --clincoo-gap for shared tokens and --kartu-gap for local ones.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Stylesheet order picks the winner</h2><p class=\"mb-4\">A file loaded later overrides the same name on the same selector. In DevTools, look at the crossed-out declaration, then move shared tokens into one token file.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">List names before adding one</h2><p class=\"mb-4\">Before adding a token, search the project for that name. Test on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> after merging a template. Keep the list on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
          "source": "MDN — Using CSS custom properties",
          "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
          "sourceSnippet": "Custom properties are case-sensitive and share one cascade; a later declaration of the same name wins.",
          "source2": "CSS Cascade — custom properties",
          "source2Url": "https://www.w3.org/TR/css-variables-1/",
          "source3": "Clincoo Editor",
          "source3Url": "https://editor.clincoo.buzz/"
        }
      }
    }
,
    {
      "id": "variabel-reset-di-komponen",
      "langs": {
        "id": {
          "title": "Cara Reset Variabel CSS di Komponen",
          "desc": "Tata cara mengembalikan custom property Clincoo ke nilai awal di komponen supaya token induk tidak bocor.",
          "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Token induk bisa bocor ke kartu</h2><p class=\"mb-4\">Variabel di :root diwariskan ke semua elemen. Kartu promo yang butuh warna sendiri ikut mewarisi --warna-teks dari halaman. Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> setel --warna-teks: initial pada kelas .kartu-promo jika ingin memutus pewarisan, lalu definisikan ulang nilai lokal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">initial bukan transparent</h2><p class=\"mb-4\">initial pada custom property berarti nilai awal (guaranteed-invalid), bukan warna transparan. Teks yang memakai var(--warna-teks) tanpa fallback bisa jadi tidak terlihat. Selalu beri fallback: var(--warna-teks, #111827).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di Computed</h2><p class=\"mb-4\">Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> buka DevTools, tab Computed, dan cari nama token. Jika masih mewarisi, selector reset kalah spesifisitas. Catat kelas yang di-reset di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
          "source": "MDN — Using CSS custom properties",
          "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
          "sourceSnippet": "Custom properties inherit. The initial value of a custom property is the guaranteed-invalid value.",
          "source2": "CSS Variables — inheritance",
          "source2Url": "https://www.w3.org/TR/css-variables-1/",
          "source3": "Clincoo Editor",
          "source3Url": "https://editor.clincoo.buzz/"
        },
        "en": {
          "title": "How to Reset a CSS Variable on a Component",
          "desc": "How to return a Clincoo custom property to its initial value so a parent token does not leak in.",
          "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">A parent token can leak into a card</h2><p class=\"mb-4\">A variable on :root inherits to every element. A promo card that needs its own color still inherits --warna-teks. In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> set --warna-teks: initial on .kartu-promo when you want to cut inheritance, then define a local value.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">initial is not transparent</h2><p class=\"mb-4\">initial on a custom property means the guaranteed-invalid initial value, not a transparent color. Text using var(--warna-teks) without a fallback can disappear. Always provide a fallback: var(--warna-teks, #111827).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check Computed</h2><p class=\"mb-4\">On <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> open DevTools, the Computed pane, and search the token name. If it still inherits, the reset selector lost specificity. Record the reset class on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
          "source": "MDN — Using CSS custom properties",
          "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
          "sourceSnippet": "Custom properties inherit. The initial value of a custom property is the guaranteed-invalid value.",
          "source2": "CSS Variables — inheritance",
          "source2Url": "https://www.w3.org/TR/css-variables-1/",
          "source3": "Clincoo Editor",
          "source3Url": "https://editor.clincoo.buzz/"
        }
      }
    },
    {
      "id": "variabel-invalid-saat-dihitung",
      "langs": {
        "id": {
          "title": "Cara Tangani Variabel CSS yang Invalid saat Dihitung",
          "desc": "Tata cara mengenali custom property Clincoo yang invalid at computed-value time dan memperbaiki fallback var().",
          "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gejala: properti diabaikan</h2><p class=\"mb-4\">Jika --ukuran-kartu berisi 16px tetapi dipakai di warna, browser menandai nilai invalid at computed-value time dan mengabaikan deklarasi. Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> pisahkan token ukuran dan token warna. Jangan menaruh satuan panjang di variabel yang dipakai color.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Fallback hanya untuk kosong, bukan untuk tipe salah</h2><p class=\"mb-4\">var(--ukuran-kartu, 1rem) tidak menyelamatkan pemakaian di color. Fallback dipakai jika variabel belum terdefinisi, bukan jika tipe salah. Beri nama --warna- dan --ukuran- supaya tidak tertukar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> sengaja salahkan satu token lalu lihat elemen mana yang hilang. Kembalikan nilai, muat ulang, dan tulis pasangan nama-tipe di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
          "source": "MDN — var()",
          "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/var",
          "sourceSnippet": "If the custom property is invalid for the property it is used in, the declaration is invalid at computed-value time.",
          "source2": "CSS Values — var()",
          "source2Url": "https://www.w3.org/TR/css-variables-1/#using-variables",
          "source3": "Clincoo Editor",
          "source3Url": "https://editor.clincoo.buzz/"
        },
        "en": {
          "title": "How to Handle a CSS Variable That Is Invalid at Computed-Value Time",
          "desc": "How to spot a Clincoo custom property that is invalid at computed-value time and fix the var() fallback.",
          "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Symptom: the property is dropped</h2><p class=\"mb-4\">If --ukuran-kartu holds 16px but is used as a color, the browser marks it invalid at computed-value time and drops the declaration. In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> keep size tokens and color tokens apart. Do not store a length in a variable used by color.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">A fallback is for missing, not for the wrong type</h2><p class=\"mb-4\">var(--ukuran-kartu, 1rem) does not save a color usage. The fallback applies when the variable is not defined, not when the type is wrong. Prefix names with --warna- and --ukuran- so they are not swapped.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in preview</h2><p class=\"mb-4\">On <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> break one token on purpose and see which element disappears. Restore the value, reload, and write the name-to-type pairs on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
          "source": "MDN — var()",
          "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/var",
          "sourceSnippet": "If the custom property is invalid for the property it is used in, the declaration is invalid at computed-value time.",
          "source2": "CSS Values — var()",
          "source2Url": "https://www.w3.org/TR/css-variables-1/#using-variables",
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
