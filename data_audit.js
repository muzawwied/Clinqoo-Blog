// Clincoo Blog — Data kategori: audit
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["audit"] = {
  names: { "id": "Audit", "en": "Audit" },
  flag: "🔎",
  articles: [
    {
      id: "audit-lighthouse-satu-halaman",
      langs: {
        "id": {
          title: "Audit Lighthouse Satu Halaman Clincoo sebelum Rilis",
          desc: "Menilai seluruh situs sekaligus membuat temuan kabur. Uji satu URL yang paling penting dulu.",
          content: "<p class=\"mb-4\">Tim Clincoo sering menjalankan Lighthouse pada pratinjau acak. Skor campur aduk dan tidak ada yang memperbaiki LCP.</p><p class=\"mb-4\">Di editor.clincoo.buzz, buka halaman beranda atau harga yang akan dibagikan. Jalankan audit Performance dan Accessibility sekali, catat tiga temuan teratas.</p><p class=\"mb-4\">Perbaiki satu temuan per commit. Jangan minta AI menaikkan skor dengan menyembunyikan elemen.</p><p class=\"mb-4\">Ulangi audit setelah perubahan gambar atau CSS. Bandingkan angka, bukan perasaan.</p><p class=\"mb-4\">Clincoo menayangkan file yang kamu simpan. Audit sempit membuat perbaikan di app.clincoo.buzz terukur.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Run a One-Page Lighthouse Audit on Clincoo before Release",
          desc: "Scoring the whole site at once blurs the findings. Test the most important URL first.",
          content: "<p class=\"mb-4\">Clincoo teams often run Lighthouse on a random preview. Scores mix together and nobody fixes LCP.</p><p class=\"mb-4\">In editor.clincoo.buzz, open the home or pricing page you will share. Run Performance and Accessibility once, and write down the top three findings.</p><p class=\"mb-4\">Fix one finding per commit. Do not ask AI to raise the score by hiding elements.</p><p class=\"mb-4\">Re-run after an image or CSS change. Compare numbers, not vibes.</p><p class=\"mb-4\">Clincoo ships the files you save. A narrow audit makes fixes on app.clincoo.buzz measurable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
