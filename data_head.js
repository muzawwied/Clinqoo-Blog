// Clincoo Blog — Data kategori: head
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["head"] = {
  names: { "id": "Head", "en": "Head" },
  flag: "📄",
  articles: [
    {
      id: "head-satu-title-unik-per-halaman",
      langs: {
        "id": {
          title: "Satu Title Unik per Halaman di Head Proyek Clincoo",
          desc: "Title yang sama di setiap halaman membuat tab dan hasil cari tidak bisa dibedakan.",
          content: "<p class=\"mb-4\">Banyak template Clincoo menyalin title beranda ke halaman harga dan blog. Tab browser lalu tampil identik.</p><p class=\"mb-4\">Di editor.clincoo.buzz, tulis title yang menyebut halaman plus merek, misalnya Harga — Clincoo. Jangan ulang kalimat meta description.</p><p class=\"mb-4\">Panjang yang aman sekitar 50–60 karakter. Potong kata isian AI yang berulang.</p><p class=\"mb-4\">Minta AI hanya mengganti satu title. Tempel head halaman yang salah, bukan seluruh situs.</p><p class=\"mb-4\">Clincoo menayangkan title yang kamu simpan. Title unik membantu tab dan bagikan tautan di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "One Unique Title per Page in a Clincoo Document Head",
          desc: "The same title on every page makes tabs and search results impossible to tell apart.",
          content: "<p class=\"mb-4\">Many Clincoo templates copy the home title onto pricing and blog pages. Browser tabs then look identical.</p><p class=\"mb-4\">In editor.clincoo.buzz, write a title that names the page plus the brand, for example Pricing — Clincoo. Do not repeat the meta description sentence.</p><p class=\"mb-4\">A safe length is about 50–60 characters. Cut filler words that AI repeats.</p><p class=\"mb-4\">Ask AI to change one title only. Paste the wrong page head, not the whole site.</p><p class=\"mb-4\">Clincoo ships the title you save. Unique titles help tabs and shared links on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "head-viewport-wajib-di-html",
      langs: {
        "id": {
          title: "Pasang Meta Viewport di Head HTML Clincoo",
          desc: "Tanpa viewport, halaman desktop di ponsel terlihat kecil dan harus di-zoom.",
          content: "<p class=\"mb-4\">Pratinjau Clincoo di ponsel menampilkan layout desktop mini karena meta viewport hilang setelah AI menulis ulang head.</p><p class=\"mb-4\">Tambah <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> tepat setelah charset di editor.clincoo.buzz.</p><p class=\"mb-4\">Jangan set user-scalable=no kecuali ada alasan akses yang kuat. Pengunjung perlu zoom teks.</p><p class=\"mb-4\">Minta AI hanya menambah satu baris viewport. Tempel head yang rusak.</p><p class=\"mb-4\">Clincoo merender HTML apa adanya. Viewport yang benar menjaga halaman terbaca di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Put a Viewport Meta Tag in the Clincoo HTML Head",
          desc: "Without a viewport tag, a desktop page looks tiny on a phone and needs pinch-zoom.",
          content: "<p class=\"mb-4\">A Clincoo phone preview shows a miniature desktop layout because AI rewrote the head and dropped viewport.</p><p class=\"mb-4\">Add <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> right after charset in editor.clincoo.buzz.</p><p class=\"mb-4\">Do not set user-scalable=no unless you have a strong access reason. Visitors still need to zoom text.</p><p class=\"mb-4\">Ask AI to add one viewport line only. Paste the broken head.</p><p class=\"mb-4\">Clincoo renders the HTML as saved. A correct viewport keeps the page readable on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "head-charset-utf8-paling-atas",
      langs: {
        "id": {
          title: "Letakkan Charset UTF-8 di Baris Awal Head Clincoo",
          desc: "Charset yang terlambat membuat tanda kutip dan huruf Indonesia berubah aneh.",
          content: "<p class=\"mb-4\">Judul Clincoo tampil sebagai karakter aneh karena charset ditaruh setelah skrip panjang di head.</p><p class=\"mb-4\">Tulis <meta charset=\"UTF-8\"> sebagai salah satu elemen pertama di head di editor.clincoo.buzz. Browser harus tahu encoding sebelum membaca teks.</p><p class=\"mb-4\">Jangan andalkan Content-Type server saja jika kamu membagikan file HTML statis.</p><p class=\"mb-4\">Minta AI memindahkan charset ke atas. Tempel head yang sudah acak.</p><p class=\"mb-4\">Clincoo tidak memperbaiki encoding sendiri. Charset awal menjaga teks benar di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Place UTF-8 Charset Near the Top of the Clincoo Head",
          desc: "A late charset makes quotes and Indonesian letters render as junk.",
          content: "<p class=\"mb-4\">A Clincoo title shows mojibake because charset sat after a long script in the head.</p><p class=\"mb-4\">Write <meta charset=\"UTF-8\"> as one of the first head elements in editor.clincoo.buzz. The browser must know encoding before it reads text.</p><p class=\"mb-4\">Do not rely on the server Content-Type alone when you share static HTML files.</p><p class=\"mb-4\">Ask AI to move charset to the top. Paste the scrambled head.</p><p class=\"mb-4\">Clincoo does not fix encoding for you. An early charset keeps text correct on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "head-satu-canonical-bukan-banyak",
      langs: {
        "id": {
          title: "Satu Canonical di Head, Jangan Duplikat di Clincoo",
          desc: "Dua tautan canonical membuat mesin cari tidak tahu URL resmi halaman.",
          content: "<p class=\"mb-4\">AI menambah canonical baru tanpa menghapus yang lama. Head Clincoo lalu punya dua URL resmi.</p><p class=\"mb-4\">Simpan satu <link rel=\"canonical\" href=\"https://...\"> yang menunjuk URL publik di editor.clincoo.buzz.</p><p class=\"mb-4\">Samakan dengan og:url jika kamu memakai Open Graph. Jangan arahkan canonical ke pratinjau lokal.</p><p class=\"mb-4\">Minta AI menghapus canonical ekstra. Tempel seluruh head, bukan satu baris.</p><p class=\"mb-4\">Clincoo tidak memilih canonical otomatis. Satu URL resmi menjaga bagikan tautan di blog.clincoo.buzz dan app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "One Canonical in the Head, Not Duplicates, on Clincoo",
          desc: "Two canonical links leave search engines unsure which URL is official.",
          content: "<p class=\"mb-4\">AI adds a new canonical without removing the old one. The Clincoo head then has two official URLs.</p><p class=\"mb-4\">Keep one <link rel=\"canonical\" href=\"https://...\"> that points at the public URL in editor.clincoo.buzz.</p><p class=\"mb-4\">Match og:url if you use Open Graph. Do not point canonical at a local preview.</p><p class=\"mb-4\">Ask AI to delete extra canonical tags. Paste the whole head, not one line.</p><p class=\"mb-4\">Clincoo does not pick a canonical for you. One official URL keeps shared links clean on blog.clincoo.buzz and app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "head-script-defer-bukan-blocking",
      langs: {
        "id": {
          title: "Pakai defer pada Skrip di Head Clincoo",
          desc: "Skrip tanpa defer menahan render HTML. Halaman terlihat kosong lebih lama.",
          content: "<p class=\"mb-4\">Berkas app.js di head Clincoo tanpa defer. Parser berhenti sampai skrip selesai diunduh.</p><p class=\"mb-4\">Tambah defer pada skrip yang tidak harus jalan sebelum HTML diparse di editor.clincoo.buzz. Biarkan body tampil dulu.</p><p class=\"mb-4\">Jangan campur defer dan DOMContentLoaded yang mengasumsikan urutan berbeda. Uji di pratinjau.</p><p class=\"mb-4\">Minta AI hanya menambah defer pada satu tag script. Tempel head, bukan seluruh berkas JS.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu tulis. defer menjaga first paint lebih cepat di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use defer on Scripts in the Clincoo Head",
          desc: "A script without defer blocks HTML parsing. The page stays blank longer.",
          content: "<p class=\"mb-4\">app.js sits in the Clincoo head without defer. The parser waits until the script finishes downloading.</p><p class=\"mb-4\">Add defer on scripts that do not need to run before HTML is parsed in editor.clincoo.buzz. Let the body paint first.</p><p class=\"mb-4\">Do not mix defer with DOMContentLoaded code that assumes a different order. Test in preview.</p><p class=\"mb-4\">Ask AI to add defer on one script tag only. Paste the head, not the whole JS file.</p><p class=\"mb-4\">Clincoo runs the scripts you write. defer keeps first paint faster on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
