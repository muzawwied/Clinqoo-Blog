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
    },
    {
      id: "search-kosongkan-hasil-saat-query-kosong",
      langs: {
        "id": {
          title: "Kosongkan Hasil Cari Clincoo saat Query Dihapus",
          desc: "Daftar lama yang tertinggal menyesatkan. Hapus hasil segera ketika kotak cari kosong.",
          content: "<p class=\"mb-4\">Pengunjung Clincoo menghapus query, tetapi sepuluh hasil lama masih tampil. Mereka mengira itu hasil baru.</p><p class=\"mb-4\">Di editor.clincoo.buzz, dengarkan input. Jika nilai trim kosong, kosongkan wadah hasil dan sembunyikan status memuat.</p><p class=\"mb-4\">Jangan biarkan request debounce yang tertunda menimpa daftar kosong. Batalkan timer dan AbortController.</p><p class=\"mb-4\">Minta AI menambah cabang query kosong pada handler input. Tempel renderer daftar yang sekarang statis.</p><p class=\"mb-4\">Clincoo merender HTML yang kamu tulis. Hasil yang bersih menjaga kotak cari di app.clincoo.buzz jujur.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Clear Clincoo Search Results when the Query Is Deleted",
          desc: "A leftover result list misleads people. Clear results as soon as the search box is empty.",
          content: "<p class=\"mb-4\">A Clincoo visitor deletes the query, but ten old results stay on screen. They think those are new matches.</p><p class=\"mb-4\">In editor.clincoo.buzz, listen to input. If the trimmed value is empty, clear the result container and hide the loading state.</p><p class=\"mb-4\">Do not let a pending debounce request overwrite the empty list. Cancel the timer and AbortController.</p><p class=\"mb-4\">Ask AI to add an empty-query branch on the input handler. Paste the list renderer that is now static.</p><p class=\"mb-4\">Clincoo renders the HTML you write. A clean list keeps search honest on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "search-pesan-tidak-ada-hasil",
      langs: {
        "id": {
          title: "Tampilkan Pesan Tidak Ada Hasil pada Cari Clincoo",
          desc: "Daftar kosong tanpa teks terlihat seperti error. Satu kalimat jelas lebih baik daripada ruang hampa.",
          content: "<p class=\"mb-4\">Query Clincoo tidak cocok, tetapi area hasil hanya putih. Pengunjung mengira skrip gagal.</p><p class=\"mb-4\">Di editor.clincoo.buzz, setelah fetch selesai dan array kosong, tampilkan satu kalimat yang mengulang query.</p><p class=\"mb-4\">Jangan tampilkan pesan itu saat masih memuat. Sembunyikan lagi begitu ada hasil atau query dikosongkan.</p><p class=\"mb-4\">Minta AI menambah state kosong pada renderer. Tempel markup daftar tanpa cabang empty.</p><p class=\"mb-4\">Clincoo tidak menulis copy otomatis. Pesan kosong yang jujur menenangkan pencari di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Show a No-Results Message in Clincoo Search",
          desc: "An empty list with no text looks like a crash. One clear sentence beats a blank space.",
          content: "<p class=\"mb-4\">A Clincoo query matches nothing, but the result area is just white. Visitors think the script failed.</p><p class=\"mb-4\">In editor.clincoo.buzz, after fetch finishes with an empty array, show one sentence that repeats the query.</p><p class=\"mb-4\">Do not show that message while loading. Hide it again as soon as results appear or the query is cleared.</p><p class=\"mb-4\">Ask AI to add an empty state on the renderer. Paste the list markup that has no empty branch.</p><p class=\"mb-4\">Clincoo does not write copy for you. An honest empty message calms searchers on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "search-escape-query-sebelum-regex",
      langs: {
        "id": {
          title: "Escape Query Cari Clincoo sebelum Jadi Pola Regex",
          desc: "Karakter seperti tanda kurung merusak RegExp. Escape dulu jika kamu memakai tes lokal.",
          content: "<p class=\"mb-4\">Pengunjung mengetik (harga) di kotak cari Clincoo. Skrip melempar SyntaxError dan daftar hilang.</p><p class=\"mb-4\">Jika filter lokal memakai new RegExp(query), escape karakter khusus dulu di editor.clincoo.buzz.</p><p class=\"mb-4\">Lebih aman: pakai includes setelah toLowerCase untuk teks biasa. Regex hanya jika butuh pola nyata.</p><p class=\"mb-4\">Minta AI menambah helper escapeRegExp. Tempel filter yang membangun RegExp dari input mentah.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu simpan. Query yang di-escape menjaga cari di app.clincoo.buzz tidak pecah.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Escape a Clincoo Search Query before It Becomes a Regex",
          desc: "Characters like parentheses break RegExp. Escape first if you test locally.",
          content: "<p class=\"mb-4\">A visitor types (price) in the Clincoo search box. The script throws SyntaxError and the list vanishes.</p><p class=\"mb-4\">If a local filter uses new RegExp(query), escape special characters first in editor.clincoo.buzz.</p><p class=\"mb-4\">Safer: use includes after toLowerCase for plain text. Use regex only when you need a real pattern.</p><p class=\"mb-4\">Ask AI to add an escapeRegExp helper. Paste the filter that builds RegExp from raw input.</p><p class=\"mb-4\">Clincoo runs the script you save. An escaped query keeps search on app.clincoo.buzz from crashing.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "search-aria-live-untuk-hasil",
      langs: {
        "id": {
          title: "Umumkan Perubahan Hasil Cari Clincoo lewat aria-live",
          desc: "Pembaca layar tidak tahu daftar berubah. Status sopan mengumumkan jumlah hasil.",
          content: "<p class=\"mb-4\">Hasil Clincoo berganti tanpa pengumuman. Pengguna pembaca layar tetap mendengar kotak input saja.</p><p class=\"mb-4\">Di editor.clincoo.buzz, taruh satu elemen aria-live=polite di luar daftar. Isi dengan jumlah hasil setelah fetch.</p><p class=\"mb-4\">Jangan pakai assertive untuk setiap ketikan. Debounce dulu agar pengumuman tidak membanjiri.</p><p class=\"mb-4\">Minta AI menambah region status. Tempel markup hasil yang sekarang diam bagi pembaca layar.</p><p class=\"mb-4\">Clincoo tidak mengumumkan DOM otomatis. Status langsung membuat cari di app.clincoo.buzz lebih aksesibel.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Announce Clincoo Search Result Changes with aria-live",
          desc: "Screen readers do not know the list changed. A polite status announces the result count.",
          content: "<p class=\"mb-4\">Clincoo results swap with no announcement. Screen reader users still hear only the input box.</p><p class=\"mb-4\">In editor.clincoo.buzz, place one aria-live=polite element outside the list. Fill it with the result count after fetch.</p><p class=\"mb-4\">Do not use assertive on every keystroke. Debounce first so announcements do not flood.</p><p class=\"mb-4\">Ask AI to add a status region. Paste the result markup that is now silent for screen readers.</p><p class=\"mb-4\">Clincoo does not announce DOM changes by itself. A live status makes search on app.clincoo.buzz more accessible.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "search-batasi-jumlah-hasil-awal",
      langs: {
        "id": {
          title: "Batasi Jumlah Hasil Awal pada Cari Clincoo",
          desc: "Merender ratusan baris sekaligus membekukan halaman. Tampilkan sepuluh dulu, lalu tombol lagi.",
          content: "<p class=\"mb-4\">API Clincoo mengembalikan 200 item. Renderer menulis semuanya dan input terasa macet.</p><p class=\"mb-4\">Di editor.clincoo.buzz, potong array tampilan jadi sepuluh. Sediakan tombol Tampilkan lagi yang menambah sepuluh.</p><p class=\"mb-4\">Jangan infinite scroll tanpa tombol jika daftar ada di dalam modal. Fokus keyboard mudah hilang.</p><p class=\"mb-4\">Minta AI memotong renderer plus tombol load more. Tempel loop yang sekarang map seluruh payload.</p><p class=\"mb-4\">Clincoo merender apa yang kamu tulis. Hasil bertahap menjaga app.clincoo.buzz tetap responsif.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Limit the First Batch of Clincoo Search Results",
          desc: "Rendering hundreds of rows at once freezes the page. Show ten first, then a show-more button.",
          content: "<p class=\"mb-4\">The Clincoo API returns 200 item. The renderer writes them all and the input feels stuck.</p><p class=\"mb-4\">In editor.clincoo.buzz, slice the display array to ten. Provide a Show more button that adds ten.</p><p class=\"mb-4\">Do not use buttonless infinite scroll if the list sits in a modal. Keyboard focus is easy to lose.</p><p class=\"mb-4\">Ask AI to slice the renderer plus a load-more button. Paste the loop that now maps the whole payload.</p><p class=\"mb-4\">Clincoo renders what you write. Staged results keep app.clincoo.buzz responsive.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
