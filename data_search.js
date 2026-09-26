// Clincoo Blog — Data kategori: search
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["search"] = {
  names: { "id": "Pencarian", "en": "Search" },
  flag: "\ud83d\udd0d",
  articles: [
    {
      id: "search-debounce-ketikan",
      langs: {
        "id": {
          title: "Tunda Permintaan Cari Clincoo sampai Ketikan Berhenti",
          desc: "Setiap huruf yang langsung fetch membebani API. Debounce 200–300 ms menjaga hasil tetap relevan.",
          content: "<p class=\"mb-4\">Kotak cari Clincoo memanggil API di setiap keyup. Empat huruf jadi empat request yang saling menimpa.</p><p class=\"mb-4\">Di editor.clincoo.buzz, bungkus fetch dengan timer. Batalkan request lama lewat AbortController saat huruf baru datang.</p><p class=\"mb-4\">Jangan debounce tombol Enter. Enter harus mencari segera. Kosongkan hasil jika query lebih pendek dari dua karakter.</p><p class=\"mb-4\">Minta AI menambah debounce plus abort pada handler input. Tempel listener keyup yang sekarang fetch langsung.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu simpan. Cari yang tenang menjaga app.clincoo.buzz tetap ringan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Delay Clincoo Search Requests until Typing Pauses",
          desc: "A fetch on every letter loads the API. A 200–300 ms debounce keeps results relevant.",
          content: "<p class=\"mb-4\">A Clincoo search box hits the API on every keyup. Four letters become four requests that overwrite each other.</p><p class=\"mb-4\">In editor.clincoo.buzz, wrap fetch in a timer. Abort the old request with AbortController when a new letter arrives.</p><p class=\"mb-4\">Do not debounce the Enter key. Enter should search at once. Clear results if the query is shorter than two characters.</p><p class=\"mb-4\">Ask AI to add debounce plus abort on the input handler. Paste the keyup listener that now fetches immediately.</p><p class=\"mb-4\">Clincoo runs the script you save. Calm search keeps app.clincoo.buzz light.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "search-tandai-kata-cocok",
      langs: {
        "id": {
          title: "Tandai Kata yang Cocok pada Hasil Cari Clincoo",
          desc: "Daftar hasil tanpa penanda memaksa mata memindai ulang. Highlight query di judul dan cuplikan.",
          content: "<p class=\"mb-4\">Hasil cari Clincoo menampilkan sepuluh judul polos. Pengunjung tidak yakin kenapa item itu muncul.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pecah teks hasil dan bungkus potongan yang cocok dengan mark. Escape HTML sebelum merangkai.</p><p class=\"mb-4\">Jangan highlight di dalam atribut href. Samakan pencocokan tanpa peduli huruf besar agar query campur tetap ketemu.</p><p class=\"mb-4\">Minta AI menambah helper highlight pada renderer daftar. Tempel markup hasil yang sekarang teks mentah.</p><p class=\"mb-4\">Clincoo merender HTML yang kamu tulis. Tanda yang jujur membuat cari di app.clincoo.buzz mudah dipindai.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Mark Matching Words in Clincoo Search Results",
          desc: "A plain result list forces the eye to scan again. Highlight the query in the title and snippet.",
          content: "<p class=\"mb-4\">Clincoo search results show ten plain titles. Visitors cannot tell why an item appeared.</p><p class=\"mb-4\">In editor.clincoo.buzz, split the result text and wrap matches in mark. Escape HTML before you assemble the string.</p><p class=\"mb-4\">Do not highlight inside an href attribute. Match case-insensitively so mixed queries still hit.</p><p class=\"mb-4\">Ask AI to add a highlight helper on the list renderer. Paste the result markup that is now raw text.</p><p class=\"mb-4\">Clincoo renders the HTML you write. Honest marks make search on app.clincoo.buzz easy to scan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
