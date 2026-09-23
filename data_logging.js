// Clincoo Blog — Data kategori: logging
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["logging"] = {
  names: { "id": "Logging", "en": "Logging" },
  flag: "📜",
  articles: [
    {
      id: "logging-console-level-bukan-alert",
      langs: {
        "id": {
          title: "Pakai Level Console bukan alert saat Debug Skrip Clincoo",
          desc: "alert membekukan UI. console.debug, info, warn, dan error bisa disaring di DevTools.",
          content: "<p class=\"mb-4\">Skrip Clincoo yang memanggil alert pada setiap langkah debug menghentikan halaman. Pengunjung tidak bisa lanjut, dan kamu kehilangan stack.</p><p class=\"mb-4\">Ganti alert dengan console.debug untuk jejak rutin, console.warn untuk kondisi aneh, dan console.error untuk kegagalan nyata.</p><p class=\"mb-4\">Jangan biarkan console.log produksi membanjiri tab. Bungkus logger kecil yang mati jika host bukan editor.clincoo.buzz atau localhost.</p><p class=\"mb-4\">Uji filter level di DevTools. Minta AI satu objek logger, bukan taburan log di setiap fungsi.</p><p class=\"mb-4\">Clincoo menayangkan skrip apa adanya. Level console yang rapi membuat debug cepat tanpa mengganggu pengguna.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Console Levels not alert when Debugging a Clincoo Script",
          desc: "alert freezes the UI. console.debug, info, warn, and error can be filtered in DevTools.",
          content: "<p class=\"mb-4\">A Clincoo script that calls alert on every debug step stops the page. Visitors cannot continue, and you lose the stack.</p><p class=\"mb-4\">Replace alert with console.debug for routine traces, console.warn for odd states, and console.error for real failures.</p><p class=\"mb-4\">Do not leave production console.log flooding the tab. Wrap a small logger that stays off unless the host is editor.clincoo.buzz or localhost.</p><p class=\"mb-4\">Test level filters in DevTools. Ask the AI for one logger object, not a log sprinkle in every function.</p><p class=\"mb-4\">Clincoo ships the script as written. Clean console levels make debug fast without blocking users.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
