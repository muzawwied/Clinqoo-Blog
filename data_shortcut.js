// Clincoo Blog — Data kategori: shortcut
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["shortcut"] = {
  names: { "id": "Shortcut", "en": "Shortcuts" },
  flag: "⌨️",
  articles: [
    {
      id: "shortcut-jangan-tabrak-browser",
      langs: {
        "id": {
          title: "Jangan Tabrak Pintasan Browser saat Menambah Shortcut Clincoo",
          desc: "Ctrl+T, Ctrl+W, dan Ctrl+L milik browser. Menimpanya membuat editor terasa rusak.",
          content: "<p class=\"mb-4\">Template Clincoo kadang memasang Ctrl+S, Ctrl+P, dan Ctrl+F tanpa cek. Pengunjung tidak bisa cari teks atau buka tab.</p><p class=\"mb-4\">Daftar pintasan yang aman di editor.clincoo.buzz: huruf dengan Alt atau kombinasi yang belum dipakai browser. Dokumentasikan di halaman bantuan.</p><p class=\"mb-4\">Jangan preventDefault pada tombol yang bukan milik aplikasi. Biarkan browser menangani tab, jendela, dan alamat.</p><p class=\"mb-4\">Minta AI audit satu file keydown. Tempel daftar pintasan yang sudah ada.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu simpan. Pintasan sopan menjaga app.clincoo.buzz tetap terasa seperti browser biasa.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Clash with Browser Shortcuts when Adding Clincoo Hotkeys",
          desc: "Ctrl+T, Ctrl+W, and Ctrl+L belong to the browser. Overriding them makes the editor feel broken.",
          content: "<p class=\"mb-4\">Clincoo templates sometimes bind Ctrl+S, Ctrl+P, and Ctrl+F with no check. Visitors cannot find text or open a tab.</p><p class=\"mb-4\">List safe shortcuts in editor.clincoo.buzz: Alt plus a letter, or combos the browser does not own. Document them on the help page.</p><p class=\"mb-4\">Do not preventDefault on keys the app does not own. Let the browser handle tabs, windows, and the address bar.</p><p class=\"mb-4\">Ask AI to audit one keydown file. Paste the existing shortcut list.</p><p class=\"mb-4\">Clincoo runs the script you save. Polite hotkeys keep app.clincoo.buzz feeling like a normal browser.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "shortcut-tampilkan-daftar-di-bantuan",
      langs: {
        "id": {
          title: "Tampilkan Daftar Shortcut Clincoo di Halaman Bantuan, Bukan Hanya di Kode",
          desc: "Pintasan yang hanya hidup di addEventListener tidak ditemukan pengguna baru.",
          content: "<p class=\"mb-4\">Banyak proyek Clincoo memasang ? untuk bantuan, tetapi daftar tombol hanya ada di komentar JavaScript.</p><p class=\"mb-4\">Buat modal atau halaman bantuan di editor.clincoo.buzz yang menuliskan setiap kombinasi dan aksinya. Samakan teks dengan kode.</p><p class=\"mb-4\">Jangan mengandalkan tooltip singkat. Pengguna keyboard butuh satu tempat untuk semua pintasan.</p><p class=\"mb-4\">Minta AI mengekstrak daftar dari file keydown menjadi markup bantuan. Tolak generate pintasan baru.</p><p class=\"mb-4\">Clincoo tidak membuat cheatsheet sendiri. Daftar yang terlihat membuat blog.clincoo.buzz dan app.clincoo.buzz lebih mudah dipelajari.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Show the Clincoo Shortcut List on a Help Page, Not Only in Code",
          desc: "Hotkeys that live only in addEventListener never get found by new users.",
          content: "<p class=\"mb-4\">Many Clincoo projects bind ? for help, but the key list exists only in a JavaScript comment.</p><p class=\"mb-4\">Build a modal or help page in editor.clincoo.buzz that writes every combo and its action. Keep the copy in sync with the code.</p><p class=\"mb-4\">Do not rely on a short tooltip. Keyboard users need one place for every shortcut.</p><p class=\"mb-4\">Ask AI to extract the list from the keydown file into help markup. Reject generating new hotkeys.</p><p class=\"mb-4\">Clincoo does not invent a cheatsheet. A visible list makes blog.clincoo.buzz and app.clincoo.buzz easier to learn.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "shortcut-fokus-input-slash",
      langs: {
        "id": {
          title: "Fokuskan Kotak Cari Clincoo dengan Tombol Slash, Lalu Lepaskan jika Sedang Mengetik",
          desc: "Slash yang selalu menangkap input merusak penulisan URL dan kode di textarea.",
          content: "<p class=\"mb-4\">Beberapa halaman Clincoo memetakan / ke kotak cari meski kursor sudah di dalam form. Karakter slash tidak pernah muncul.</p><p class=\"mb-4\">Di editor.clincoo.buzz, cek document.activeElement. Abaikan pintasan jika fokus ada di input, textarea, atau [contenteditable].</p><p class=\"mb-4\">Jangan memakai keydown tanpa filter tag. Slash hanya boleh memindah fokus dari area baca.</p><p class=\"mb-4\">Minta AI menambah satu penjaga target.tagName. Tempel handler / yang ada.</p><p class=\"mb-4\">Clincoo menjalankan logika yang kamu simpan. Slash yang sopan mempercepat cari tanpa merusak ketikan di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Focus the Clincoo Search Box with Slash, Then Ignore It while Typing",
          desc: "A slash that always captures input breaks URLs and code typed in a textarea.",
          content: "<p class=\"mb-4\">Some Clincoo pages map / to search even when the caret is already in a form. The slash character never appears.</p><p class=\"mb-4\">In editor.clincoo.buzz, check document.activeElement. Ignore the shortcut when focus is in an input, textarea, or [contenteditable].</p><p class=\"mb-4\">Do not use keydown without a tag filter. Slash should move focus only from a reading area.</p><p class=\"mb-4\">Ask AI to add one target.tagName guard. Paste the existing / handler.</p><p class=\"mb-4\">Clincoo runs the logic you save. A polite slash speeds search without breaking typing on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
