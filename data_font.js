// Clincoo Blog — Data kategori: font
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["font"] = {
  names: { "id": "Font", "en": "Fonts" },
  flag: "🔤",
  articles: [
    {
      id: "font-display-swap-agar-teks-langsung-terbaca",
      langs: {
        "id": {
          title: "Pakai font-display: swap pada Font Clincoo agar Teks Langsung Terbaca",
          desc: "Tanpa swap, teks menunggu file font dan halaman terlihat kosong beberapa detik.",
          content: "<p class=\"mb-4\">Template Clincoo sering memuat Google Fonts tanpa font-display. Pengunjung melihat ruang kosong sampai berkas woff2 selesai.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pada aturan @font-face tulis font-display: swap. Sistem font tampil dulu, lalu diganti saat file siap.</p><p class=\"mb-4\">Jangan memakai block atau fallback ekstrem jika merek butuh keterbacaan segera. Batasi dua berat font di halaman beranda.</p><p class=\"mb-4\">Minta AI menambah font-display pada berkas CSS @font-face yang ada. Tolak ganti keluarga font.</p><p class=\"mb-4\">Clincoo merender CSS yang kamu simpan. Teks yang muncul cepat membuat app.clincoo.buzz terasa ringan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use font-display: swap on Clincoo Fonts so Text Is Readable Immediately",
          desc: "Without swap, text waits for the font file and the page looks empty for seconds.",
          content: "<p class=\"mb-4\">Clincoo templates often load Google Fonts without font-display. Visitors see empty space until the woff2 file finishes.</p><p class=\"mb-4\">In editor.clincoo.buzz, add font-display: swap on the @font-face rule. The system font shows first, then swaps when the file is ready.</p><p class=\"mb-4\">Do not use block or an extreme fallback if the brand needs instant reading. Limit the home page to two font weights.</p><p class=\"mb-4\">Ask AI to add font-display on the existing @font-face CSS. Reject changing the font family.</p><p class=\"mb-4\">Clincoo renders the CSS you save. Text that appears quickly makes app.clincoo.buzz feel light.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
