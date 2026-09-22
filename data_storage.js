// Clincoo Blog — Data kategori: storage
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["storage"] = {
  names: { "id": "Storage", "en": "Storage" },
  flag: "💾",
  articles: [
    {
      id: "storage-localstorage-simpan-draf-form",
      langs: {
        "id": {
          title: "Simpan Draf Form Clincoo di localStorage tanpa Server",
          desc: "Form statis tidak punya backend. localStorage menjaga isian jika tab tertutup tanpa mengirim data ke mana pun.",
          content: "<p class=\"mb-4\">Pengunjung Clincoo mengisi formulir panjang lalu tidak sengaja menutup tab. Tanpa draf, mereka jarang kembali.</p><p class=\"mb-4\">Pada input, tulis ke localStorage.setItem dengan kunci yang spesifik halaman, misalnya draft-kontak.</p><p class=\"mb-4\">Saat load, isi kembali field jika kunci ada. Hapus kunci setelah submit berhasil atau tombol reset.</p><p class=\"mb-4\">Minta AI menulis listener input dan restore, satu file. Jangan simpan kata sandi atau nomor kartu.</p><p class=\"mb-4\">Clincoo tidak punya server form. Browser storage adalah draf, bukan database.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Save a Clincoo Form Draft in localStorage without a Server",
          desc: "A static form has no backend. localStorage keeps the fields if the tab closes and never sends the data away.",
          content: "<p class=\"mb-4\">Clincoo visitors fill a long form and close the tab by accident. Without a draft they rarely come back.</p><p class=\"mb-4\">On input, write localStorage.setItem with a page-specific key such as draft-contact.</p><p class=\"mb-4\">On load, refill fields when the key exists. Clear the key after a successful submit or a reset click.</p><p class=\"mb-4\">Ask the AI for an input listener and restore in one file. Never store passwords or card numbers.</p><p class=\"mb-4\">Clincoo has no form server. Browser storage is a draft, not a database.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "storage-jangan-simpan-rahasia-di-browser",
      langs: {
        "id": {
          title: "Jangan Simpan Token atau Kunci API di localStorage",
          desc: "Penyimpanan browser bisa dibaca skrip lain di origin yang sama. Rahasia milik server, bukan halaman Clincoo.",
          content: "<p class=\"mb-4\">AI sering menempel kunci layanan pihak ketiga di JavaScript agar form 'langsung jalan'. Itu bocor ke siapa pun yang View Source.</p><p class=\"mb-4\">Audit proyek: cari localStorage, sessionStorage, dan string yang tampak seperti sk- atau token.</p><p class=\"mb-4\">Pindahkan panggilan berbayar ke layanan yang menerima form tanpa mengekspos kunci, atau hapus fitur itu.</p><p class=\"mb-4\">Minta AI membersihkan kunci dari file publik. Tolak menyembunyikan string dengan Base64.</p><p class=\"mb-4\">Clincoo menayangkan file apa adanya. Storage browser bukan brankas.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Keep Tokens or API Keys in localStorage",
          desc: "Browser storage is readable by other scripts on the same origin. Secrets belong on a server, not a Clincoo page.",
          content: "<p class=\"mb-4\">AI often pastes a third-party key into JavaScript so a form 'just works'. Anyone who views source can copy it.</p><p class=\"mb-4\">Audit the project: search localStorage, sessionStorage, and strings that look like sk- or token.</p><p class=\"mb-4\">Move paid calls to a service that accepts the form without exposing a key, or drop the feature.</p><p class=\"mb-4\">Ask the AI to strip keys from public files. Refuse Base64 as a hiding place.</p><p class=\"mb-4\">Clincoo ships files as written. Browser storage is not a vault.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
