// Clincoo Blog — Data kategori: validasi
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["validasi"] = {
  names: { "id": "Validasi", "en": "Validation" },
  flag: "✅",
  articles: [
    {
      id: "validasi-pattern-telepon-longgar",
      langs: {
        "id": {
          title: "Pakai Pola Telepon Longgar pada Validasi Form Clincoo",
          desc: "Pola terlalu ketat menolak nomor asli. Izinkan spasi, plus, dan tanda kurung.",
          content: "<p class=\"mb-4\">Input tel Clincoo memakai pattern yang hanya angka 10 digit. Pengunjung dengan +62 atau spasi gagal kirim.</p><p class=\"mb-4\">Di editor.clincoo.buzz, normalisasi dulu: buang spasi dan tanda, baru cek panjang. Pattern HTML hanya sebagai petunjuk.</p><p class=\"mb-4\">Jangan memaksa satu format nasional jika audiens lintas negara.</p><p class=\"mb-4\">Tempel input tel ke AI. Minta pattern longgar plus sanitasi sebelum fetch.</p><p class=\"mb-4\">Clincoo menyimpan skrip form apa adanya. Validasi yang longgar menjaga app.clincoo.buzz menerima nomor yang manusiawi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Use a Loose Phone Pattern in Clincoo Form Validation",
          desc: "An overly strict pattern rejects real numbers. Allow spaces, plus, and parentheses.",
          content: "<p class=\"mb-4\">A Clincoo tel input uses a digits-only 10-character pattern. Visitors with +62 or spaces fail to submit.</p><p class=\"mb-4\">In editor.clincoo.buzz, normalize first: strip spaces and marks, then check length. The HTML pattern is only a hint.</p><p class=\"mb-4\">Do not force one national format if the audience is cross-border.</p><p class=\"mb-4\">Paste the tel input into the AI. Ask for a loose pattern plus sanitization before fetch.</p><p class=\"mb-4\">Clincoo stores the form script as-is. Loose validation keeps app.clincoo.buzz accepting human phone numbers.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "validasi-konfirmasi-email-cocok",
      langs: {
        "id": {
          title: "Samakan Email Konfirmasi sebelum Submit Form Clincoo",
          desc: "Typo pada email hilang selamanya. Field konfirmasi menangkap salah ketik sebelum fetch.",
          content: "<p class=\"mb-4\">Form Clincoo punya satu input email. Pengunjung salah ketik domain dan tidak pernah menerima balasan.</p><p class=\"mb-4\">Di editor.clincoo.buzz, tambah field email ulang. Bandingkan nilai setelah trim dan lower-case.</p><p class=\"mb-4\">Jangan menyalin nilai otomatis ke field kedua. Itu mengalahkan tujuan konfirmasi.</p><p class=\"mb-4\">Minta AI menambah perbandingan dua field. Tempel markup form email yang sekarang satu input.</p><p class=\"mb-4\">Clincoo tidak mengoreksi alamat. Konfirmasi menjaga data di app.clincoo.buzz tetap bisa dihubungi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Match Confirmation Email before Clincoo Form Submit",
          desc: "A typo in email is gone forever. A confirm field catches mistypes before fetch.",
          content: "<p class=\"mb-4\">A Clincoo form has one email input. A visitor mistypes the domain and never gets a reply.</p><p class=\"mb-4\">In editor.clincoo.buzz, add a repeat email field. Compare values after trim and lower-case.</p><p class=\"mb-4\">Do not auto-copy the first value into the second field. That defeats confirmation.</p><p class=\"mb-4\">Ask AI to add a two-field comparison. Paste the current single email markup.</p><p class=\"mb-4\">Clincoo does not correct addresses. Confirmation keeps data on app.clincoo.buzz reachable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "validasi-ukuran-dan-tipe-berkas",
      langs: {
        "id": {
          title: "Validasi Ukuran dan Tipe Berkas sebelum Unggah Clincoo",
          desc: "Berkas raksasa atau exe lolos jika hanya cek name. Cek size dan MIME di klien.",
          content: "<p class=\"mb-4\">Input file Clincoo tidak membatasi size. Pengunjung mengunggah 80MB dan tab macet.</p><p class=\"mb-4\">Di editor.clincoo.buzz, cek file.size dan file.type sebelum FormData. Tolak di atas batas yang kamu tulis di label.</p><p class=\"mb-4\">Jangan percaya hanya ekstensi. MIME bisa dipalsukan; tetap batasi di server jika ada.</p><p class=\"mb-4\">Tempel input file ke AI. Minta cek 2MB dan image/jpeg|png|webp plus pesan jelas.</p><p class=\"mb-4\">Clincoo menjalankan unggahan dari skrip halaman. Batas klien menjaga app.clincoo.buzz tidak menelan berkas liar.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Validate File Size and Type before a Clincoo Upload",
          desc: "Huge files or executables pass if you only check the name. Check size and MIME on the client.",
          content: "<p class=\"mb-4\">A Clincoo file input does not cap size. A visitor uploads 80MB and the tab freezes.</p><p class=\"mb-4\">In editor.clincoo.buzz, check file.size and file.type before FormData. Reject above the limit you wrote on the label.</p><p class=\"mb-4\">Do not trust the extension alone. MIME can be spoofed; still cap on the server if you have one.</p><p class=\"mb-4\">Paste the file input into the AI. Ask for a 2MB check and image/jpeg|png|webp plus a clear message.</p><p class=\"mb-4\">Clincoo runs uploads from page script. A client cap keeps app.clincoo.buzz from swallowing wild files.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "validasi-pesan-spesifik-per-aturan",
      langs: {
        "id": {
          title: "Tulis Pesan Validasi Spesifik per Aturan di Form Clincoo",
          desc: "Pesan 'tidak valid' tidak membantu. Sebut field, aturan, dan contoh nilai yang diterima.",
          content: "<p class=\"mb-4\">Form Clincoo menampilkan Invalid input untuk semua gagal. Pengunjung tidak tahu harus perbaiki apa.</p><p class=\"mb-4\">Di editor.clincoo.buzz, buat pesan per aturan: kosong, terlalu pendek, format salah. Letakkan di dekat field.</p><p class=\"mb-4\">Jangan andalkan browser tooltip native saja. Itu hilang saat pengguna klik di luar.</p><p class=\"mb-4\">Minta AI mengganti alert umum jadi teks di bawah input. Tempel handler submit sekarang.</p><p class=\"mb-4\">Clincoo tidak menulis copy error otomatis. Pesan spesifik menjaga form di app.clincoo.buzz bisa diselesaikan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Write a Specific Validation Message per Clincoo Form Rule",
          desc: "A generic 'invalid' message does not help. Name the field, the rule, and an accepted example.",
          content: "<p class=\"mb-4\">A Clincoo form shows Invalid input for every failure. Visitors do not know what to fix.</p><p class=\"mb-4\">In editor.clincoo.buzz, write one message per rule: empty, too short, bad format. Place it next to the field.</p><p class=\"mb-4\">Do not rely on the native browser tooltip alone. It vanishes when the user clicks away.</p><p class=\"mb-4\">Ask AI to replace a generic alert with text under the input. Paste the current submit handler.</p><p class=\"mb-4\">Clincoo does not write error copy for you. Specific messages keep the form on app.clincoo.buzz finishable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    }
  ]
};
