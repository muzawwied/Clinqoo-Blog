// Clincoo Blog — Data kategori: offline
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["offline"] = {
  names: { "id": "Offline", "en": "Offline" },
  flag: "\u26aa",
  articles: [
    {
      id: "offline-banner-status-jaringan",
      langs: {
        "id": {
          title: "Tampilkan Banner Status Jaringan saat Situs Clincoo Offline",
          desc: "Fetch yang gagal tanpa penjelasan membuat pengguna mengira tombol rusak. Deteksi navigator.onLine.",
          content: "<p class=\"mb-4\">Pengguna Clincoo di kereta menekan Simpan. Tombol berputar lalu diam karena jaringan putus.</p><p class=\"mb-4\">Dengarkan online dan offline di editor.clincoo.buzz. Tampilkan banner Anda sedang offline dengan aria-live polite.</p><p class=\"mb-4\">Sembunyikan banner saat online kembali. Jangan andalkan hanya navigator.onLine tanpa event.</p><p class=\"mb-4\">Minta AI menambah listener jaringan saja. Tempel handler simpan yang menelan TypeError fetch.</p><p class=\"mb-4\">Clincoo tidak memantau jaringan bawaan. Banner status menjaga ekspektasi di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Show a Network Status Banner when a Clincoo Site Goes Offline",
          desc: "A failed fetch with no explanation makes users think the button is broken. Watch navigator.onLine.",
          content: "<p class=\"mb-4\">A Clincoo user on a train hits Save. The button spins then stops because the network dropped.</p><p class=\"mb-4\">Listen for online and offline in editor.clincoo.buzz. Show a You are offline banner with aria-live polite.</p><p class=\"mb-4\">Hide the banner when online returns. Do not rely on navigator.onLine alone without events.</p><p class=\"mb-4\">Ask AI to add only the network listeners. Paste the save handler that swallows a fetch TypeError.</p><p class=\"mb-4\">Clincoo does not monitor the network for you. A status banner keeps expectations clear on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
