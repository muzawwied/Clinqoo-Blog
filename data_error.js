// Clincoo Blog — Data kategori: error
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["error"] = {
  names: { "id": "Error", "en": "Error" },
  flag: "⚠️",
  articles: [
    {
      id: "error-baca-stack-trace-dari-atas",
      langs: {
        "id": {
          title: "Baca Stack Trace dari Baris Paling Atas di Konsol Clincoo",
          desc: "Error merahlah petunjuk pertama. Baris atas menunjuk file dan nomor yang harus dibuka dulu.",
          content: "<p class=\"mb-4\">Saat pratinjau editor.clincoo.buzz berhenti merespons klik, konsol sering sudah menampilkan TypeError lengkap.</p><p class=\"mb-4\">Buka baris pertama stack, bukan yang paling bawah. Itu biasanya kode milikmu, bukan pustaka browser.</p><p class=\"mb-4\">Klik tautan file:baris. Bandingkan dengan sumber di panel Sources. Jika file di-minify, aktifkan pretty-print.</p><p class=\"mb-4\">Salin pesan utuh sebelum bertanya ke asisten AI. Potongan setengah baris membuat saran meleset.</p><p class=\"mb-4\">Clincoo tidak menyembunyikan stack. Membaca dari atas mempersingkat debug dari jam menjadi menit.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Read the Stack Trace from the Top Line in the Clincoo Console",
          desc: "The red error is the first clue. The top line points to the file and number you should open first.",
          content: "<p class=\"mb-4\">When the editor.clincoo.buzz preview stops responding to clicks, the console often already shows a full TypeError.</p><p class=\"mb-4\">Open the first stack line, not the last. That is usually your code, not a browser library.</p><p class=\"mb-4\">Click the file:line link. Compare it with Sources. If the file is minified, turn on pretty-print.</p><p class=\"mb-4\">Copy the whole message before asking an AI assistant. A half line makes the advice miss.</p><p class=\"mb-4\">Clincoo does not hide the stack. Reading from the top shortens debug from hours to minutes.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "error-uncaught-typeerror-null",
      langs: {
        "id": {
          title: "Tangani Uncaught TypeError: Cannot Read Property of Null",
          desc: "Skrip Clincoo sering mengeksekusi sebelum elemen ada. Cek null sebelum mengakses properti.",
          content: "<p class=\"mb-4\">querySelector mengembalikan null jika id di HTML berubah atau skrip dimuat di head tanpa defer.</p><p class=\"mb-4\">Simpan hasil selektor ke variabel, lalu if (!el) return sebelum el.classList atau el.value.</p><p class=\"mb-4\">Pindahkan skrip ke akhir body atau pakai DOMContentLoaded. Di editor.clincoo.buzz, pastikan id di markup sama persis.</p><p class=\"mb-4\">Ulangi di konsol: ketik selektor yang sama. Null di konsol berarti markup, bukan logika klik.</p><p class=\"mb-4\">Clincoo tidak menunda skrip untukmu. Guard null mencegah satu elemen hilang merusak seluruh halaman.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Handle Uncaught TypeError: Cannot Read Property of Null",
          desc: "Clincoo scripts often run before the element exists. Check for null before reading a property.",
          content: "<p class=\"mb-4\">querySelector returns null if the HTML id changed or the script loaded in head without defer.</p><p class=\"mb-4\">Store the selector result, then if (!el) return before el.classList or el.value.</p><p class=\"mb-4\">Move the script to the end of body or wait for DOMContentLoaded. In editor.clincoo.buzz, keep the markup id identical.</p><p class=\"mb-4\">Retry in the console: type the same selector. Null in the console means markup, not click logic.</p><p class=\"mb-4\">Clincoo does not delay scripts for you. A null guard stops one missing element from breaking the whole page.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "error-cors-bukan-kesalahan-css",
      langs: {
        "id": {
          title: "Bedakan Error CORS dari Masalah CSS di Situs Clincoo",
          desc: "Pesan blocked by CORS policy bukan stylesheet rusak. Itu permintaan silang origin yang ditolak server.",
          content: "<p class=\"mb-4\">Font atau API dari domain lain memicu merah di konsol meski CSS Flexbox sudah benar.</p><p class=\"mb-4\">Lihat tab Network: status 200 tanpa header Access-Control-Allow-Origin, atau gagal preflight OPTIONS.</p><p class=\"mb-4\">Host font dan JSON di origin yang sama dengan halaman yang di-publish dari app.clincoo.buzz bila memungkinkan.</p><p class=\"mb-4\">Jangan menonaktifkan keamanan browser sebagai perbaikan. Itu hanya menyembunyikan masalah di mesinmu.</p><p class=\"mb-4\">Clincoo tidak menambahkan header CORS hosting. Memisahkan CORS dari bug tampilan menghemat waktu debug.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Tell CORS Errors Apart from CSS Bugs on a Clincoo Site",
          desc: "blocked by CORS policy is not a broken stylesheet. It is a cross-origin request the server refused.",
          content: "<p class=\"mb-4\">A font or API from another domain turns the console red even when Flexbox is correct.</p><p class=\"mb-4\">Check Network: a 200 without Access-Control-Allow-Origin, or a failed OPTIONS preflight.</p><p class=\"mb-4\">Host fonts and JSON on the same origin as the page published from app.clincoo.buzz when you can.</p><p class=\"mb-4\">Do not disable browser security as a fix. That only hides the issue on your machine.</p><p class=\"mb-4\">Clincoo does not add hosting CORS headers. Separating CORS from layout bugs saves debug time.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "error-syntax-cek-kurung-di-konsol",
      langs: {
        "id": {
          title: "Perbaiki SyntaxError dengan Mengecek Kurung di Konsol",
          desc: "Unexpected token sering berarti kurung atau koma tersisa. Konsol menunjuk baris, bukan file lain.",
          content: "<p class=\"mb-4\">Satu koma berlebih di objek JS membuat seluruh berkas gagal parse. Halaman Clincoo tampak kosong.</p><p class=\"mb-4\">Buka pesan SyntaxError Unexpected token. Nomor baris di Sources hampir selalu tepat pada file yang baru disimpan.</p><p class=\"mb-4\">Hitung kurung kurawal dan siku di fungsi terakhir yang kamu edit di editor.clincoo.buzz. Prettier atau format otomatis membantu.</p><p class=\"mb-4\">Jangan menambahkan skrip baru sebelum error parse hilang. Browser berhenti di token pertama yang rusak.</p><p class=\"mb-4\">Clincoo tidak memvalidasi JS sebelum publish. Membersihkan syntax membuat error berikutnya bisa dibaca.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Fix a SyntaxError by Checking Brackets in the Console",
          desc: "Unexpected token often means a leftover bracket or comma. The console points to the line, not another file.",
          content: "<p class=\"mb-4\">One extra comma in a JS object makes the whole file fail to parse. The Clincoo page looks blank.</p><p class=\"mb-4\">Open the SyntaxError Unexpected token message. The line number in Sources is almost always right on the file you just saved.</p><p class=\"mb-4\">Count curly and square brackets in the last function you edited in editor.clincoo.buzz. Prettier or auto-format helps.</p><p class=\"mb-4\">Do not add a new script until the parse error is gone. The browser stops at the first broken token.</p><p class=\"mb-4\">Clincoo does not validate JS before publish. Cleaning syntax lets the next error be readable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
