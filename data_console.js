// Clincoo Blog — Data kategori: console
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["console"] = {
  names: { "id": "Konsol", "en": "Console" },
  flag: "🖥️",
  articles: [
    {
      id: "console-beda-log-warn-error",
      langs: {
        "id": {
          title: "Pilih console.log, warn, atau error di Clincoo sesuai Tingkat Masalah",
          desc: "Semua pesan sebagai log membuat bug nyata tenggelam. Bedakan info, peringatan, dan gagal.",
          content: "<p class=\"mb-4\">Halaman Clincoo yang ramai di app.clincoo.buzz sering menumpuk console.log dari template. Error sungguhan tidak kelihatan.</p><p class=\"mb-4\">Pakai log untuk jejak alur, warn untuk data aneh yang masih bisa jalan, error untuk cabang yang harus berhenti.</p><p class=\"mb-4\">Filter di DevTools menurut level. Jangan andalkan mata telanjang pada ratusan baris hijau.</p><p class=\"mb-4\">Minta AI mengganti log menjadi warn atau error hanya di satu file. Tolak rewrite seluruh proyek.</p><p class=\"mb-4\">Clincoo menayangkan skrip apa adanya. Level konsol yang jujur mempercepat debug sebelum deploy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Pick console.log, warn, atau error on Clincoo by How Serious the Problem Is",
          desc: "Treating every message as a log buries real bugs. Separate info, warnings, and failures.",
          content: "<p class=\"mb-4\">Busy Clincoo pages on app.clincoo.buzz often stack console.log from the template. Real errors disappear.</p><p class=\"mb-4\">Use log for flow traces, warn for odd data that can still run, error for branches that must stop.</p><p class=\"mb-4\">Filter in DevTools by level. Do not rely on the naked eye across hundreds of green lines.</p><p class=\"mb-4\">Ask the AI to retarget logs to warn or error in one file only. Refuse a full-project rewrite.</p><p class=\"mb-4\">Clincoo ships the script as saved. Honest console levels speed up debug before deploy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
