// Clincoo Blog — Data kategori: backup
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["backup"] = {
  names: { "id": "backup", "en": "backup" },
  flag: "💾",
  articles: [
    {
      id: "backup-unduh-zip-sebelum-ganti-template",
      langs: {
        "id": {
          title: "Unduh Cadangan Proyek Clincoo sebelum Ganti Template",
          desc: "Ganti template menimpa file. Simpan ZIP cadangan dulu agar teks dan gambar kustom tidak hilang.",
          content: "<p class=\"mb-4\">Developer yang stuck sering minta AI \"ganti saja templatenya\". File halaman yang sudah diisi klien ikut tertimpa.</p><p class=\"mb-4\">Di app.clincoo.buzz, unduh proyek sebagai ZIP sebelum menyentuh template. Simpan tanggal di nama berkas.</p><p class=\"mb-4\">Setelah template baru masuk, salin teks, gambar, dan token warna dari cadangan — jangan mengandalkan memori chat AI.</p><p class=\"mb-4\">Jika AI menawarkan rewrite seluruh folder, tolak. Minta daftar file yang akan diganti, lalu bandingkan dengan ZIP.</p><p class=\"mb-4\">Clincoo menyimpan yang ada di editor. Cadangan lokal adalah jaring pengaman sebelum eksperimen besar.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Download a Clincoo Project Backup before Switching Templates",
          desc: "A template swap overwrites files. Save a ZIP first so custom copy and images are not lost.",
          content: "<p class=\"mb-4\">Stuck developers often ask the AI to \"just switch the template\". Client-filled page files get overwritten too.</p><p class=\"mb-4\">In app.clincoo.buzz, download the project as a ZIP before touching the template. Put the date in the filename.</p><p class=\"mb-4\">After the new template lands, copy text, images, and color tokens from the backup — do not rely on AI chat memory.</p><p class=\"mb-4\">If the AI offers to rewrite the whole folder, refuse. Ask for the file list that will change, then compare it to the ZIP.</p><p class=\"mb-4\">Clincoo keeps what is in the editor. A local backup is the safety net before a large experiment.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo app"
        }
      }
    }
  ]
};
