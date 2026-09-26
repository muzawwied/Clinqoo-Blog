// Clincoo Blog — Data kategori: upload
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["upload"] = {
  names: { "id": "Unggah", "en": "Upload" },
  flag: "\u2b06",
  articles: [
    {
      id: "upload-validasi-tipe-ukuran",
      langs: {
        "id": {
          title: "Validasi Tipe dan Ukuran File sebelum Unggah di Clincoo",
          desc: "Menerima sembarang berkas membuat server sibuk dan pratinjau rusak. Cek MIME dan ukuran di klien dulu.",
          content: "<p class=\"mb-4\">Form unggah Clincoo mengirim file 80 MB berformat .exe karena input tidak membatasi accept. Pratinjau macet dan antrean penuh.</p><p class=\"mb-4\">Set atribut accept dan cek file.type plus file.size di editor.clincoo.buzz sebelum FormData. Tolak dengan pesan yang menyebut batas nyata.</p><p class=\"mb-4\">Jangan andalkan ekstensi saja. Ganti nama file tidak mengubah isinya; tetap cek tipe di server saat deploy ke app.clincoo.buzz.</p><p class=\"mb-4\">Minta AI hanya menambah pemeriksaan ukuran dan tipe. Tempel markup input file yang sekarang terbuka.</p><p class=\"mb-4\">Clincoo tidak memfilter berkas otomatis. Validasi awal menjaga unggahan aman dan cepat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Validate File Type and Size before Upload in Clincoo",
          desc: "Accepting any file stalls the server and breaks preview. Check MIME type and size on the client first.",
          content: "<p class=\"mb-4\">A Clincoo upload form sends an 80 MB .exe because the input has no accept limit. Preview freezes and the queue fills up.</p><p class=\"mb-4\">Set the accept attribute and check file.type plus file.size in editor.clincoo.buzz before FormData. Reject with a message that states the real limit.</p><p class=\"mb-4\">Do not trust the extension alone. Renaming a file does not change its contents; still check type on the server when you deploy to app.clincoo.buzz.</p><p class=\"mb-4\">Ask AI to add only size and type checks. Paste the currently open file input markup.</p><p class=\"mb-4\">Clincoo does not filter files for you. Early validation keeps uploads safe and fast.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
