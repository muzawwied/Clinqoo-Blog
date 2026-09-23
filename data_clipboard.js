// Clincoo Blog — Data kategori: clipboard
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["clipboard"] = {
  names: { "id": "Papan klip", "en": "Clipboard" },
  flag: "📋",
  articles: [
    {
      id: "clipboard-salin-kode-tanpa-select",
      langs: {
        "id": {
          title: "Buat Tombol Salin Cuplikan tanpa Memaksa Select All di Clincoo",
          desc: "Pengunjung tidak perlu menyeret blok pre. Pakai Clipboard API pada tombol kecil.",
          content: "<p class=\"mb-4\">Blok kode di situs Clincoo yang hanya bisa disalin dengan drag sering gagal di ponsel. Jari menutupi teks.</p><p class=\"mb-4\">Tambah tombol Salin di pojok pre. Pada klik, panggil navigator.clipboard.writeText dengan isi teks murni, bukan innerHTML.</p><p class=\"mb-4\">Jangan andalkan document.execCommand('copy') kecuali kamu masih menargetkan browser lama secara sadar.</p><p class=\"mb-4\">Uji di pratinjau editor.clincoo.buzz pada HTTPS. Minta AI satu handler klik, bukan plugin clipboard berat.</p><p class=\"mb-4\">Clincoo menayangkan skrip yang kamu simpan. Tombol salin yang jelas mempercepat developer yang membaca panduan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add a Copy Snippet Button without Forcing Select All on Clincoo",
          desc: "Visitors should not drag a pre block. Use the Clipboard API on a small button.",
          content: "<p class=\"mb-4\">Clincoo code blocks that only copy via drag often fail on a phone. Fingers cover the text.</p><p class=\"mb-4\">Add a Copy button on the pre corner. On click, call navigator.clipboard.writeText with plain text, not innerHTML.</p><p class=\"mb-4\">Do not rely on document.execCommand('copy') unless you still target old browsers on purpose.</p><p class=\"mb-4\">Test in the editor.clincoo.buzz preview over HTTPS. Ask the AI for one click handler, not a heavy clipboard plugin.</p><p class=\"mb-4\">Clincoo ships the script you save. A clear copy button speeds up developers reading a guide.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "clipboard-izin-https-wajib",
      langs: {
        "id": {
          title: "Pahami Izin Clipboard dan Syarat HTTPS pada Situs Clincoo",
          desc: "writeText gagal di file:// atau HTTP biasa. Cek konteks aman sebelum menyalahkan skrip.",
          content: "<p class=\"mb-4\">Tombol salin Clincoo yang bekerja di editor kadang diam di hasil deploy. Bukan logika klik — konteks halaman tidak aman.</p><p class=\"mb-4\">Clipboard API butuh window.isSecureContext. Pakai HTTPS di app.clincoo.buzz atau domain kustom. localhost biasanya aman untuk uji.</p><p class=\"mb-4\">Tangani promise yang ditolak: tampilkan 'Salin manual' dan pilih teks sebagai cadangan.</p><p class=\"mb-4\">Cek tab Console di editor.clincoo.buzz. Minta AI menambah cabang catch, bukan mengulang writeText dalam loop.</p><p class=\"mb-4\">Clincoo tidak mengangkat izin browser. HTTPS yang benar membuat tombol salin bisa diandalkan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Understand Clipboard Permission and the HTTPS Requirement on Clincoo",
          desc: "writeText fails on file:// or plain HTTP. Check a secure context before blaming the script.",
          content: "<p class=\"mb-4\">A Clincoo copy button that works in the editor can stay silent after deploy. It is not the click logic — the page context is not secure.</p><p class=\"mb-4\">The Clipboard API needs window.isSecureContext. Use HTTPS on app.clincoo.buzz or a custom domain. localhost is usually fine for tests.</p><p class=\"mb-4\">Handle a rejected promise: show Copy manually and select the text as a fallback.</p><p class=\"mb-4\">Check the Console tab in editor.clincoo.buzz. Ask the AI to add a catch branch, not to retry writeText in a loop.</p><p class=\"mb-4\">Clincoo does not lift browser permission. Correct HTTPS makes the copy button dependable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "clipboard-umpan-balik-tombol-salin",
      langs: {
        "id": {
          title: "Beri Umpan Balik Visual saat Tombol Salin Clincoo Berhasil",
          desc: "Tanpa teks Tersalin, pengunjung menekan berulang. Ganti label singkat lalu kembalikan.",
          content: "<p class=\"mb-4\">Tombol Salin yang tidak berubah setelah sukses membuat orang menekan tiga kali. Isi papan klip sama, tetapi rasa gagal tetap ada.</p><p class=\"mb-4\">Setelah writeText selesai, ganti label jadi Tersalin selama dua detik. Kembalikan teks semula dengan timer yang dibatalkan jika diklik lagi.</p><p class=\"mb-4\">Jangan andalkan alert atau toast penuh layar untuk aksi sepele ini. Perubahan tombol cukup.</p><p class=\"mb-4\">Uji dengan keyboard Enter di editor.clincoo.buzz. Minta AI state singkat, bukan pustaka animasi.</p><p class=\"mb-4\">Clincoo merender UI yang kamu tulis. Umpan balik kecil menutup loop aksi salin.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Give Visual Feedback when a Clincoo Copy Button Succeeds",
          desc: "Without a Copied label, visitors click again. Swap a short label, then restore it.",
          content: "<p class=\"mb-4\">A Copy button that does not change after success makes people click three times. The clipboard is fine, but it still feels like a miss.</p><p class=\"mb-4\">After writeText resolves, switch the label to Copied for two seconds. Restore the original text with a timer you cancel if they click again.</p><p class=\"mb-4\">Do not use an alert or a full-screen toast for this small action. A button change is enough.</p><p class=\"mb-4\">Test with the Enter key in editor.clincoo.buzz. Ask the AI for brief state, not an animation library.</p><p class=\"mb-4\">Clincoo renders the UI you write. Small feedback closes the copy action loop.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
