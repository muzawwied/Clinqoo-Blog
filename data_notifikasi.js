// Clincoo Blog — Data kategori: notifikasi
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["notifikasi"] = {
  names: { "id": "Notifikasi", "en": "Notifications" },
  flag: "\u25ce",
  articles: [
    {
      id: "notifikasi-aria-live-bukan-alert",
      langs: {
        "id": {
          title: "Pakai aria-live untuk Pesan Sukses Clincoo, Bukan alert()",
          desc: "alert() memblokir halaman dan kasar bagi pembaca layar. Region live lebih sopan.",
          content: "<p class=\"mb-4\">Form Clincoo memanggil alert('Terkirim') setelah submit. Fokus hilang dan pengguna harus menutup dialog sistem.</p><p class=\"mb-4\">Tambah elemen status dengan aria-live=\"polite\" di editor.clincoo.buzz. Isi teks setelah respons berhasil.</p><p class=\"mb-4\">Pakai assertive hanya untuk error yang harus segera diketahui. Jangan spam live region setiap keystroke.</p><p class=\"mb-4\">Minta AI hanya menambah region status. Tempel handler submit yang memakai alert.</p><p class=\"mb-4\">Clincoo tidak menyediakan toast bawaan. Region live menjaga umpan balik aksesibel di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use aria-live for Clincoo Success Messages, Not alert()",
          desc: "alert() blocks the page and is harsh for screen readers. A live region is kinder.",
          content: "<p class=\"mb-4\">A Clincoo form calls alert('Sent') after submit. Focus is lost and the user must dismiss a system dialog.</p><p class=\"mb-4\">Add a status element with aria-live=\"polite\" in editor.clincoo.buzz. Fill the text after a successful response.</p><p class=\"mb-4\">Use assertive only for errors that must be known at once. Do not spam the live region on every keystroke.</p><p class=\"mb-4\">Ask AI to add only the status region. Paste the submit handler that uses alert.</p><p class=\"mb-4\">Clincoo does not ship a built-in toast. A live region keeps feedback accessible on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "notifikasi-tutup-eksplisit",
      langs: {
        "id": {
          title: "Beri Tombol Tutup pada Notifikasi Clincoo yang Menutupi Konten",
          desc: "Banner tanpa tombol tutup menghalangi form. Pengguna harus merefresh halaman.",
          content: "<p class=\"mb-4\">Banner sukses Clincoo menempel di atas form dan tidak punya tombol tutup. Keyboard tidak bisa menyingkirkannya.</p><p class=\"mb-4\">Tambah tombol Tutup dengan aria-label di editor.clincoo.buzz. Kembalikan fokus ke kontrol yang memicu pesan.</p><p class=\"mb-4\">Jangan andalkan klik di luar saja. Perangkat sentuh dan keyboard butuh kontrol jelas.</p><p class=\"mb-4\">Minta AI hanya menambah tombol tutup dan handler fokus. Tempel markup banner.</p><p class=\"mb-4\">Clincoo tidak menutup banner otomatis. Kontrol eksplisit menjaga alur kerja di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Give Clincoo Notifications That Cover Content an Explicit Close Button",
          desc: "A banner with no close control blocks the form. Users have to refresh the page.",
          content: "<p class=\"mb-4\">A Clincoo success banner sticks over the form and has no close button. The keyboard cannot dismiss it.</p><p class=\"mb-4\">Add a Close button with an aria-label in editor.clincoo.buzz. Return focus to the control that triggered the message.</p><p class=\"mb-4\">Do not rely on an outside click alone. Touch and keyboard need a clear control.</p><p class=\"mb-4\">Ask AI to add only the close button and focus handler. Paste the banner markup.</p><p class=\"mb-4\">Clincoo does not dismiss banners for you. An explicit control keeps the flow usable on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "notifikasi-error-jangan-auto-hilang",
      langs: {
        "id": {
          title: "Jangan Hilangkan Pesan Error Clincoo secara Otomatis",
          desc: "Error yang lenyap dalam tiga detik tidak sempat dibaca. Pengguna mengulang kesalahan yang sama.",
          content: "<p class=\"mb-4\">Validasi Clincoo menampilkan 'Email tidak valid' lalu menghilang. Pengguna tidak sempat memperbaiki.</p><p class=\"mb-4\">Biarkan error tetap tampil sampai input berubah atau pengguna menutupnya di editor.clincoo.buzz.</p><p class=\"mb-4\">Toast sukses boleh singkat. Error butuh waktu baca dan tautan ke field yang bermasalah.</p><p class=\"mb-4\">Minta AI menghapus timer hide pada error saja. Tempel cuplikan setTimeout yang menyembunyikan pesan.</p><p class=\"mb-4\">Clincoo tidak mengatur durasi toast. Error yang menetap membantu perbaikan di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Auto-Dismiss Clincoo Error Messages",
          desc: "An error that vanishes in three seconds is not readable. Users repeat the same mistake.",
          content: "<p class=\"mb-4\">Clincoo validation shows 'Invalid email' then disappears. The user cannot fix it in time.</p><p class=\"mb-4\">Leave the error visible until the input changes or the user dismisses it in editor.clincoo.buzz.</p><p class=\"mb-4\">A short success toast is fine. Errors need reading time and a link to the failing field.</p><p class=\"mb-4\">Ask AI to remove the hide timer on errors only. Paste the setTimeout that hides the message.</p><p class=\"mb-4\">Clincoo does not manage toast duration for you. A persistent error helps the fix on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
