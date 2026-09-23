// Clincoo Blog — Data kategori: lint
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["lint"] = {
  names: { "id": "Lint", "en": "Lint" },
  flag: "🧽",
  articles: [
    {
      id: "lint-html-tag-tertutup",
      langs: {
        "id": {
          title: "Periksa Tag HTML yang Tidak Tertutup sebelum Deploy Clincoo",
          desc: "Tag yang tidak ditutup merusak pratinjau. Cek pasangan tag sebelum menayangkan halaman.",
          content: "<p class=\"mb-4\">Halaman Clincoo yang terlihat \"geser sendiri\" sering karena div atau section lupa ditutup. Browser menebak, hasilnya beda di HP dan desktop.</p><p class=\"mb-4\">Indent setiap blok. Cari tag pembuka tanpa penutup. Validator HTML atau perintah AI \"temukan tag tidak seimbang\" mempercepat kerja.</p><p class=\"mb-4\">Jangan andalkan perbaikan otomatis buta. Perbaikan bisa memindahkan node ke tempat salah.</p><p class=\"mb-4\">Uji ulang di editor.clincoo.buzz setelah merapikan. Bandingkan struktur Elements di DevTools dengan sumber.</p><p class=\"mb-4\">Clincoo menayangkan markup apa adanya. Tag seimbang adalah lint paling murah sebelum deploy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Check Unclosed HTML Tags before Deploying a Clincoo Page",
          desc: "Unclosed tags break the preview. Pair every tag before you publish the page.",
          content: "<p class=\"mb-4\">A Clincoo page that \"shifts by itself\" often has a forgotten div or section close. The browser guesses, and phones differ from desktops.</p><p class=\"mb-4\">Indent every block. Hunt opening tags without a close. An HTML validator or an AI prompt to find unbalanced tags speeds the work.</p><p class=\"mb-4\">Do not trust a blind auto-fix. It can move a node to the wrong place.</p><p class=\"mb-4\">Retest in editor.clincoo.buzz after the cleanup. Compare the Elements tree in DevTools with the source.</p><p class=\"mb-4\">Clincoo serves markup as written. Balanced tags are the cheapest lint before deploy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "lint-nama-id-konsisten",
      langs: {
        "id": {
          title: "Samakan Pola Nama id dan class di Proyek Clincoo",
          desc: "id campur kebab-case dan camelCase membuat querySelector mudah salah ketik.",
          content: "<p class=\"mb-4\">Skrip Clincoo gagal diam-diam jika getElementById mencari formSubmit sementara markup memakai form-submit.</p><p class=\"mb-4\">Pilih satu pola. kebab-case cocok untuk id HTML. Catat daftar id di komentar atas berkas.</p><p class=\"mb-4\">Jangan daur ulang id yang sama di dua section. id harus unik di satu dokumen.</p><p class=\"mb-4\">Minta AI daftar semua id dan class, lalu tandai yang tidak konsisten sebelum merapikan di editor.clincoo.buzz.</p><p class=\"mb-4\">Clincoo tidak menormalisasi nama. Disiplin penamaan adalah lint yang mencegah bug selektor.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep id and class Naming Consistent in a Clincoo Project",
          desc: "Mixing kebab-case and camelCase in ids makes querySelector easy to mistype.",
          content: "<p class=\"mb-4\">A Clincoo script fails silently when getElementById looks for formSubmit while the markup uses form-submit.</p><p class=\"mb-4\">Pick one pattern. kebab-case fits HTML ids. Keep an id list in a comment at the top of the file.</p><p class=\"mb-4\">Do not reuse the same id in two sections. An id must be unique in one document.</p><p class=\"mb-4\">Ask the AI to list every id and class, then mark inconsistent names before you tidy the file in editor.clincoo.buzz.</p><p class=\"mb-4\">Clincoo does not normalize names. Naming discipline is lint that prevents selector bugs.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "lint-css-selektor-terlalu-lebar",
      langs: {
        "id": {
          title: "Persempit Selektor CSS yang Mengubah Terlalu Banyak Elemen",
          desc: "Selektor div atau button tanpa kelas menimpa gaya template Clincoo di tempat tak terduga.",
          content: "<p class=\"mb-4\">Menulis button { width: 100% } di halaman Clincoo bisa merusak tombol navigasi dan salin kode sekaligus.</p><p class=\"mb-4\">Pakai kelas spesifik. Batasi dengan section induk. Hindari !important kecuali menimpa gaya pihak ketiga yang sudah terlanjur kaku.</p><p class=\"mb-4\">Uji di DevTools: inspect tombol lain setelah mengubah satu aturan. Jika ikut berubah, selektor terlalu lebar.</p><p class=\"mb-4\">Minta AI menamai ulang selektor lebar menjadi kelas. Terapkan di editor.clincoo.buzz lalu hard-refresh.</p><p class=\"mb-4\">Clincoo menggabungkan CSS halaman. Selektor sempit menjaga template tetap utuh.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Narrow CSS Selectors that Restyle Too Many Elements",
          desc: "Bare div or button selectors overwrite Clincoo template styles in unexpected places.",
          content: "<p class=\"mb-4\">Writing button { width: 100% } on a Clincoo page can break navigation and copy-code buttons at once.</p><p class=\"mb-4\">Use a specific class. Scope it with a parent section. Avoid !important unless you must override a rigid third-party rule.</p><p class=\"mb-4\">Test in DevTools: inspect other buttons after changing one rule. If they change too, the selector is too wide.</p><p class=\"mb-4\">Ask the AI to rename wide selectors into classes. Apply the change in editor.clincoo.buzz and hard-refresh.</p><p class=\"mb-4\">Clincoo merges page CSS. Narrow selectors keep the template intact.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "lint-js-var-vs-const",
      langs: {
        "id": {
          title: "Ganti var dengan const atau let pada Skrip Clincoo",
          desc: "var menembus fungsi dan menimpa nama lain. const dan let membuat lingkup jelas.",
          content: "<p class=\"mb-4\">Skrip lama di halaman Clincoo masih memakai var i di loop. Nilai i bocor dan event listener memakai indeks terakhir.</p><p class=\"mb-4\">Ganti ke let untuk nilai yang berubah, const untuk yang tidak. Hindari mengulang nama di fungsi bersarang.</p><p class=\"mb-4\">Jangan campur satu berkas: setengah var, setengah const. Pilih satu gaya lalu rapikan.</p><p class=\"mb-4\">Minta AI menandai var yang aman diganti. Uji loop dan handler di pratinjau editor.clincoo.buzz.</p><p class=\"mb-4\">Clincoo tidak mentranspile skrip. Lingkup yang jelas adalah lint dasar agar bug loop tidak kembali.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Replace var with const or let in Clincoo Scripts",
          desc: "var leaks through functions and overwrites other names. const and let keep scope clear.",
          content: "<p class=\"mb-4\">Older Clincoo page scripts still use var i in a loop. The value leaks and listeners see the last index.</p><p class=\"mb-4\">Switch to let for changing values and const for stable ones. Do not reuse names in nested functions.</p><p class=\"mb-4\">Do not mix styles in one file: half var, half const. Pick one style and tidy it.</p><p class=\"mb-4\">Ask the AI to mark var that is safe to replace. Test loops and handlers in the editor.clincoo.buzz preview.</p><p class=\"mb-4\">Clincoo does not transpile scripts. Clear scope is basic lint so loop bugs do not return.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
