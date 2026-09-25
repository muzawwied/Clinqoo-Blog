// Clincoo Blog — Data kategori: export
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["export"] = {
  names: { "id": "Ekspor", "en": "Export" },
  flag: "\u2b07",
  articles: [
    {
      id: "export-unduh-proyek-sebelum-pindah",
      langs: {
        "id": {
          title: "Unduh Ekspor Proyek Clincoo sebelum Pindah Host",
          desc: "Pindah host tanpa salinan lokal merisikokan file yang tertinggal. Ekspor dulu, baru ubah DNS.",
          content: "<p class=\"mb-4\">Tim mengganti DNS ke host baru sebelum mengunduh proyek Clincoo. Beberapa halaman hanya ada di editor.</p><p class=\"mb-4\">Unduh zip atau salin folder dari editor.clincoo.buzz. Cek index.html, aset, dan halaman pengalih.</p><p class=\"mb-4\">Jangan andalkan cache browser sebagai cadangan. Simpan ekspor di tempat yang kamu kendalikan.</p><p class=\"mb-4\">Minta AI membuat checklist file yang wajib ada di zip. Tempel daftar folder proyek.</p><p class=\"mb-4\">Clincoo menyimpan apa yang kamu terbitkan. Ekspor lengkap menjaga pindah host aman ke app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Download a Clincoo Project Export before You Change Hosts",
          desc: "Moving hosts without a local copy risks leaving files behind. Export first, then change DNS.",
          content: "<p class=\"mb-4\">A team points DNS at a new host before downloading the Clincoo project. Some pages exist only in the editor.</p><p class=\"mb-4\">Download a zip or copy the folder from editor.clincoo.buzz. Check index.html, assets, and redirect pages.</p><p class=\"mb-4\">Do not treat the browser cache as a backup. Store the export somewhere you control.</p><p class=\"mb-4\">Ask AI for a checklist of files that must be in the zip. Paste the project folder list.</p><p class=\"mb-4\">Clincoo keeps what you publish. A complete export keeps a host move safe toward app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
