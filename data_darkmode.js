// Clincoo Blog — Data kategori: darkmode
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["darkmode"] = {
  names: { "id": "Mode gelap", "en": "Dark mode" },
  flag: "🌙",
  articles: [
    {
      id: "darkmode-prefers-color-scheme",
      langs: {
        "id": {
          title: "Pakai prefers-color-scheme sebelum Toggle Gelap Clincoo",
          desc: "Sistem operasi sudah punya preferensi. Hormati media query dulu, baru tambah sakelar.",
          content: "<p class=\"mb-4\">Banyak template Clincoo langsung memaksa tema gelap lewat kelas di body. Pengunjung yang sudah set terang di OS tetap kena overlay hitam.</p><p class=\"mb-4\">Tambah @media (prefers-color-scheme: dark) di CSS editor.clincoo.buzz untuk token latar, teks, dan border. Terang tetap default tanpa kelas.</p><p class=\"mb-4\">Sakelar manual boleh menyusul, tetapi nilai awal harus mengikuti media query agar tidak kedip.</p><p class=\"mb-4\">Uji di DevTools Rendering: emulasi prefers-color-scheme. Minta AI hanya menambah blok media, bukan menulis ulang palet.</p><p class=\"mb-4\">Clincoo tidak membaca preferensi OS untukmu. Satu media query membuat tema mengikuti perangkat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Honor prefers-color-scheme before a Clincoo Dark Toggle",
          desc: "The OS already has a preference. Respect the media query first, then add a switch.",
          content: "<p class=\"mb-4\">Many Clincoo templates force dark theme with a body class. Visitors who set light in the OS still get a black overlay.</p><p class=\"mb-4\">Add @media (prefers-color-scheme: dark) in editor.clincoo.buzz CSS for background, text, and border tokens. Keep light as the default without a class.</p><p class=\"mb-4\">A manual switch can follow, but the initial value should match the media query so the page does not flash.</p><p class=\"mb-4\">Test in DevTools Rendering: emulate prefers-color-scheme. Ask AI only to add the media block, not to rewrite the palette.</p><p class=\"mb-4\">Clincoo does not read the OS preference for you. One media query lets the theme follow the device.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "darkmode-token-warna-css",
      langs: {
        "id": {
          title: "Simpan Warna Gelap Clincoo sebagai Token, Bukan Hardcode",
          desc: "Hex tersebar di puluhan kelas sulit diganti. Satu set custom property lebih aman.",
          content: "<p class=\"mb-4\">AI sering menempel #111 dan #eee di setiap kartu. Ganti tema lalu puluhan selektor ketinggalan.</p><p class=\"mb-4\">Di editor.clincoo.buzz tetapkan --bg, --fg, --muted, --accent di :root, lalu timpa di prefers-color-scheme: dark.</p><p class=\"mb-4\">Komponen hanya memakai var(--bg). Jangan campur hex mentah di utilitas kecuali dekorasi sekali pakai.</p><p class=\"mb-4\">Cek kontras token gelap: teks body tetap minimal 4.5:1 terhadap latar baru.</p><p class=\"mb-4\">Clincoo menayangkan CSS apa adanya. Token yang terpusat membuat tema gelap bisa diuji dalam satu berkas.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Store Clincoo Dark Colors as Tokens, Not Hardcoded Hex",
          desc: "Hex scattered across dozens of classes is hard to swap. One set of custom properties is safer.",
          content: "<p class=\"mb-4\">AI often pastes #111 and #eee on every card. After a theme change, dozens of selectors lag behind.</p><p class=\"mb-4\">In editor.clincoo.buzz set --bg, --fg, --muted, and --accent on :root, then override them in prefers-color-scheme: dark.</p><p class=\"mb-4\">Components should use var(--bg). Do not mix raw hex into utilities except one-off decoration.</p><p class=\"mb-4\">Check dark token contrast: body text still needs at least 4.5:1 on the new background.</p><p class=\"mb-4\">Clincoo ships the CSS as saved. Central tokens let you test dark theme in one file.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "darkmode-gambar-ikon-kontras",
      langs: {
        "id": {
          title: "Siapkan Versi Gambar dan Ikon untuk Latar Gelap Clincoo",
          desc: "Logo gelap di hero hitam hilang. Sediakan aset terang atau filter yang terukur.",
          content: "<p class=\"mb-4\">Logo marka gelap di app.clincoo.buzz lenyap saat body jadi #0b0b0b. Pengunjung mengira aset 404.</p><p class=\"mb-4\">Pakai dua kelas .logo-light / .logo-dark. Sembunyikan yang tidak cocok lewat CSS tema.</p><p class=\"mb-4\">Ikon outline tipis perlu stroke lebih terang, bukan hanya invert yang merusak foto produk.</p><p class=\"mb-4\">Uji hero dan footer di editor.clincoo.buzz dengan emulasi dark. Minta AI menambah aset, bukan filter invert pada semua img.</p><p class=\"mb-4\">Clincoo tidak menukar gambar otomatis. Aset yang sadar tema menjaga merek tetap terbaca.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Prepare Image and Icon Variants for Clincoo Dark Backgrounds",
          desc: "A dark logo on a black hero vanishes. Ship a light asset or a measured filter.",
          content: "<p class=\"mb-4\">A dark brand mark on app.clincoo.buzz disappears when body becomes #0b0b0b. Visitors think the asset 404s.</p><p class=\"mb-4\">Use two classes .logo-light / .logo-dark. Hide the mismatch with theme CSS.</p><p class=\"mb-4\">Thin outline icons need a lighter stroke, not a blanket invert that wrecks product photos.</p><p class=\"mb-4\">Test the hero and footer in editor.clincoo.buzz with dark emulation. Ask AI to add assets, not invert every img.</p><p class=\"mb-4\">Clincoo does not swap images for you. Theme-aware assets keep the brand readable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "darkmode-input-autofill",
      langs: {
        "id": {
          title: "Rapikan Input dan Autofill pada Tema Gelap Clincoo",
          desc: "Kotak kuning autofill merusak form gelap. Set latar, teks, dan caret khusus input.",
          content: "<p class=\"mb-4\">Form kontak di situs Clincoo sering tetap putih saat tema gelap. Autofill Chrome menambah kuning yang menyilaukan.</p><p class=\"mb-4\">Set background dan color pada input, textarea, select di blok dark. Tambah caret-color agar kursor terlihat.</p><p class=\"mb-4\">Untuk autofill, uji -webkit-autofill dan box-shadow inset yang meniru token --bg.</p><p class=\"mb-4\">Isi form uji di editor.clincoo.buzz lalu emulasi dark. Minta AI hanya menyentuh selector form tema.</p><p class=\"mb-4\">Clincoo tidak menyesuaikan autofill. Aturan input yang sadar tema menjaga form tetap bisa dibaca.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Fix Inputs and Autofill on a Clincoo Dark Theme",
          desc: "Yellow autofill boxes wreck a dark form. Set input background, text, and caret.",
          content: "<p class=\"mb-4\">Contact forms on Clincoo sites often stay white in dark theme. Chrome autofill then adds a glaring yellow.</p><p class=\"mb-4\">Set background and color on input, textarea, and select in the dark block. Add caret-color so the cursor is visible.</p><p class=\"mb-4\">For autofill, test -webkit-autofill and an inset box-shadow that mimics the --bg token.</p><p class=\"mb-4\">Fill a test form in editor.clincoo.buzz then emulate dark. Ask AI to touch theme form selectors only.</p><p class=\"mb-4\">Clincoo does not restyle autofill. Theme-aware input rules keep the form readable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "darkmode-toggle-simpan-pilihan",
      langs: {
        "id": {
          title: "Simpan Pilihan Toggle Gelap Clincoo tanpa Flash Putih",
          desc: "Sakelar yang baru dibaca setelah CSS load membuat kedip. Terapkan kelas sedini mungkin.",
          content: "<p class=\"mb-4\">Toggle di footer app.clincoo.buzz sering menulis localStorage, tetapi skrip jalan setelah render. Halaman terang kedip dulu.</p><p class=\"mb-4\">Baca kunci tema di skrip kecil di head sebelum stylesheet berat. Pasang kelas di documentElement, bukan menunggu DOMContentLoaded lama.</p><p class=\"mb-4\">Hormati prefers-color-scheme jika kunci belum ada. Jangan default gelap untuk semua pengunjung baru.</p><p class=\"mb-4\">Uji muat ulang di editor.clincoo.buzz. Minta AI memindahkan satu skrip pendek, bukan pustaka tema.</p><p class=\"mb-4\">Clincoo tidak menahan flash. Urutan skrip yang kamu pilih menentukan apakah tema terasa instan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Persist the Clincoo Dark Toggle without a White Flash",
          desc: "A switch read after CSS loads causes a blink. Apply the class as early as you can.",
          content: "<p class=\"mb-4\">A footer toggle on app.clincoo.buzz often writes localStorage, but the script runs after first paint. The light page flashes first.</p><p class=\"mb-4\">Read the theme key in a tiny head script before heavy stylesheets. Set the class on documentElement; do not wait for a late DOMContentLoaded.</p><p class=\"mb-4\">Honor prefers-color-scheme if the key is missing. Do not default every new visitor to dark.</p><p class=\"mb-4\">Test a reload in editor.clincoo.buzz. Ask AI to move one short script, not a theme library.</p><p class=\"mb-4\">Clincoo does not hold the flash. The script order you choose decides whether the theme feels instant.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
