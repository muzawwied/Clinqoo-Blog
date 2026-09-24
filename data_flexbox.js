// Clincoo Blog — Data kategori: flexbox
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["flexbox"] = {
  names: { "id": "Flexbox", "en": "Flexbox" },
  flag: "\ud83e\uddf1",
  articles: [
    {
      id: "flexbox-pakai-gap-bukan-margin",
      langs: {
        "id": {
          title: "Pakai Gap Flexbox, Bukan Margin Antar Anak, di Clincoo",
          desc: "Margin pada anak flex membuat jarak dobel di tepi dan sulit diratakan saat wrap.",
          content: "<p class=\"mb-4\">Banyak layout Clincoo memakai margin-right pada setiap kartu flex. Baris terakhir atau item yang wrap punya jarak yang tidak konsisten.</p><p class=\"mb-4\">Ganti margin antar anak dengan gap pada wadah flex di editor.clincoo.buzz. Gap tidak menambah ruang di tepi luar.</p><p class=\"mb-4\">Jika butuh jarak ke tepi wadah, pakai padding pada induk, bukan margin pada anak pertama dan terakhir.</p><p class=\"mb-4\">Minta AI hanya mengubah satu wadah flex. Tempel aturan display:flex yang ada sebagai konteks.</p><p class=\"mb-4\">Clincoo merender CSS modern yang kamu simpan. Gap membuat pratinjau dan app.clincoo.buzz terlihat sama saat item wrap.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Flexbox Gap, Not Child Margins, in Clincoo",
          desc: "Margins on flex children double the edge gap and look uneven when items wrap.",
          content: "<p class=\"mb-4\">Many Clincoo layouts put margin-right on every flex card. The last row or wrapped items get uneven gaps.</p><p class=\"mb-4\">Replace child margins with gap on the flex container in editor.clincoo.buzz. Gap does not add space on the outer edge.</p><p class=\"mb-4\">If you need space to the container edge, use padding on the parent, not margins on the first and last child.</p><p class=\"mb-4\">Ask AI to change only one flex container. Paste the existing display:flex rule as context.</p><p class=\"mb-4\">Clincoo renders the modern CSS you save. Gap keeps preview and app.clincoo.buzz consistent when items wrap.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
