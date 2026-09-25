// Clincoo Blog — Data kategori: regex
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["regex"] = {
  names: { "id": "Regex", "en": "Regex" },
  flag: "\u002a",
  articles: [
    {
      id: "regex-validasi-email-sederhana",
      langs: {
        "id": {
          title: "Pakai Validasi Email Sederhana, Bukan Regex Sempurna di Clincoo",
          desc: "Pola email yang sederhana lebih aman. Cek format longgar lalu konfirmasi lewat tautan.",
          content: "<p class=\"mb-4\">Form Clincoo menolak alamat yang memakai plus alias. Regex terlalu ketat membuat pengguna mundur.</p><p class=\"mb-4\">Di editor.clincoo.buzz, cek ada karakter @ dan domain dengan titik. Jangan kejar RFC penuh di klien.</p><p class=\"mb-4\">Kirim tautan konfirmasi di server. Validasi ketat milik backend, bukan input HTML.</p><p class=\"mb-4\">Minta AI merapikan satu pola email yang menolak plus. Tempel atribut pattern yang ada.</p><p class=\"mb-4\">Clincoo tidak memverifikasi kotak masuk. Pola longgar plus konfirmasi menjaga form di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Simple Email Checks, Not a Perfect Regex, in Clincoo",
          desc: "A simple email pattern is safer. Use a loose check, then confirm with a link.",
          content: "<p class=\"mb-4\">A Clincoo form rejects plus-alias addresses. An overly strict regex turns users away.</p><p class=\"mb-4\">In editor.clincoo.buzz, check for an @ and a dotted domain. Do not chase a full RFC on the client.</p><p class=\"mb-4\">Send a confirm link on the server. Strict validation belongs on the backend, not in HTML input.</p><p class=\"mb-4\">Ask AI to loosen one email pattern that rejects plus. Paste the current pattern attribute.</p><p class=\"mb-4\">Clincoo does not verify inboxes. A loose pattern plus confirmation keeps the form usable on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "regex-escape-teks-sebelum-cari",
      langs: {
        "id": {
          title: "Escape Teks Pengguna sebelum Menjadi Pola Cari Clincoo",
          desc: "Karakter seperti kurung atau titik merusak pencarian. Escape dulu sebelum new RegExp.",
          content: "<p class=\"mb-4\">Kotak cari Clincoo memecah saat pengguna mengetik (harga). Halaman kosong atau error console.</p><p class=\"mb-4\">Escape karakter khusus sebelum new RegExp di editor.clincoo.buzz.</p><p class=\"mb-4\">Jika hanya butuh cocok literal, pertimbangkan includes() daripada regex.</p><p class=\"mb-4\">Minta AI menambah helper escapeRegExp saja. Tempel pemanggilan new RegExp dari input.</p><p class=\"mb-4\">Clincoo tidak meng-escape input otomatis. Pola aman menjaga pencarian di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Escape User Text before It Becomes a Clincoo Search Pattern",
          desc: "Characters like parentheses or dots break search. Escape them before new RegExp.",
          content: "<p class=\"mb-4\">A Clincoo search box breaks when a user types (price). The page goes blank or the console errors.</p><p class=\"mb-4\">Escape special characters before new RegExp in editor.clincoo.buzz.</p><p class=\"mb-4\">If you only need a literal match, consider includes() instead of regex.</p><p class=\"mb-4\">Ask AI to add only an escapeRegExp helper. Paste the new RegExp call that uses input.</p><p class=\"mb-4\">Clincoo does not escape input for you. A safe pattern keeps search working on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "regex-jangan-parse-html",
      langs: {
        "id": {
          title: "Jangan Parse HTML Clincoo dengan Regex",
          desc: "HTML bersarang mematahkan pola. Pakai DOMParser atau querySelector.",
          content: "<p class=\"mb-4\">Skrip Clincoo memakai regex untuk mengambil isi div. Atribut tambahan membuat pola gagal.</p><p class=\"mb-4\">Pakai DOMParser.parseFromString di editor.clincoo.buzz, lalu querySelector. DOM memahami sarang tag.</p><p class=\"mb-4\">Regex boleh untuk potongan teks polos, bukan markup lengkap.</p><p class=\"mb-4\">Minta AI mengganti satu pemotong regex jadi DOMParser. Tempel fungsi parse yang ada.</p><p class=\"mb-4\">Clincoo merender HTML lewat DOM. Parser asli lebih tahan di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Parse Clincoo HTML with Regex",
          desc: "Nested HTML breaks patterns. Use DOMParser or querySelector.",
          content: "<p class=\"mb-4\">A Clincoo script uses regex to pull div content. Extra attributes make the pattern fail.</p><p class=\"mb-4\">Use DOMParser.parseFromString in editor.clincoo.buzz, then querySelector. The DOM understands nesting.</p><p class=\"mb-4\">Regex is fine for plain text slices, not full markup.</p><p class=\"mb-4\">Ask AI to replace one regex slice with DOMParser. Paste the current parse function.</p><p class=\"mb-4\">Clincoo renders HTML through the DOM. A real parser holds up on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "regex-uji-pola-di-console",
      langs: {
        "id": {
          title: "Uji Pola Regex di Console sebelum Menempelkannya ke Clincoo",
          desc: "Pola yang belum diuji mengunci form. Coba dummy string di DevTools dulu.",
          content: "<p class=\"mb-4\">Pola baru di form Clincoo menolak semua input. Pengguna tidak bisa kirim.</p><p class=\"mb-4\">Buka console di editor.clincoo.buzz. Uji pola dengan test() untuk kasus sah dan tidak sah.</p><p class=\"mb-4\">Cek flag g dan i. Flag g membuat test() loncat lastIndex di pemanggilan berikutnya.</p><p class=\"mb-4\">Minta AI menulis tiga contoh lulus dan tiga gagal. Tempel pola yang akan dipakai.</p><p class=\"mb-4\">Clincoo tidak menguji regex untukmu. Uji singkat di console mencegah form macet di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test a Regex in the Console before Pasting It into Clincoo",
          desc: "An untested pattern can lock a form. Try dummy strings in DevTools first.",
          content: "<p class=\"mb-4\">A new pattern on a Clincoo form rejects every input. Users cannot submit.</p><p class=\"mb-4\">Open the console in editor.clincoo.buzz. Run test() for valid and invalid cases.</p><p class=\"mb-4\">Watch the g and i flags. A g flag makes test() advance lastIndex on the next call.</p><p class=\"mb-4\">Ask AI for three passing and three failing examples. Paste the pattern you plan to use.</p><p class=\"mb-4\">Clincoo does not test regex for you. A short console check keeps the form moving on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
