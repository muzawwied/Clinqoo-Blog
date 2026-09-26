// Clincoo Blog — Data kategori: json
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["json"] = {
  names: { "id": "JSON", "en": "JSON" },
  flag: "\u007b\u007d",
  articles: [
    {
      id: "json-parse-dalam-try-catch",
      langs: {
        "id": {
          title: "Bungkus JSON.parse Clincoo di try/catch, Jangan Biarkan Satu String Rusak Menghentikan Halaman",
          desc: "JSON.parse melempar SyntaxError. Tanpa try/catch, satu respons jelek merusak seluruh skrip.",
          content: "<p class=\"mb-4\">Halaman Clincoo sering mem-parse respons API atau cuplikan localStorage. Satu koma berlebih membuat seluruh init gagal.</p><p class=\"mb-4\">Di editor.clincoo.buzz, bungkus JSON.parse di try/catch. Tampilkan pesan singkat, jangan biarkan exception naik ke window.</p><p class=\"mb-4\">Jangan andalkan data selalu valid karena kamu yang menulisnya. Cache lama dan AI yang menempel JSON rusak tetap terjadi.</p><p class=\"mb-4\">Minta AI menambah satu helper parseSafe. Tempel pemanggilan parse yang ada, bukan seluruh app.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu simpan. Parse yang aman menjaga app.clincoo.buzz tetap terbuka saat data jelek.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Wrap Clincoo JSON.parse in try/catch, Do Not Let One Bad String Kill the Page",
          desc: "JSON.parse throws SyntaxError. Without try/catch, one bad payload stops the whole script.",
          content: "<p class=\"mb-4\">Clincoo pages often parse an API response or a localStorage snippet. One extra comma then kills all init.</p><p class=\"mb-4\">In editor.clincoo.buzz, wrap JSON.parse in try/catch. Show a short message; do not let the exception reach window.</p><p class=\"mb-4\">Do not assume the data is valid because you wrote it. Stale cache and AI-pasted broken JSON still happen.</p><p class=\"mb-4\">Ask AI to add one parseSafe helper. Paste the existing parse calls, not the whole app.</p><p class=\"mb-4\">Clincoo runs the script you save. Safe parse keeps app.clincoo.buzz open when the data is bad.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "json-stringify-pretty-debug",
      langs: {
        "id": {
          title: "Pakai JSON.stringify dengan Spasi saat Debug Clincoo, Lalu Hapus sebelum Rilis",
          desc: "Objek yang di-log tanpa indent sulit dibaca. Pretty-print di konsol, ringkas di produksi.",
          content: "<p class=\"mb-4\">Debug Clincoo sering menampilkan [object Object] atau satu baris JSON tanpa indent. Membaca kunci jadi lambat.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pakai JSON.stringify(data, null, 2) saat men-debug. Jangan stringify nilai yang memuat secret.</p><p class=\"mb-4\">Hapus log pretty-print sebelum deploy. String besar di konsol produksi membocorkan struktur dan memperlambat tab.</p><p class=\"mb-4\">Minta AI menandai console.log yang men-stringify objek besar. Tempel file skrip terkait.</p><p class=\"mb-4\">Clincoo tidak merapikan log sendiri. Pretty-print sementara mempercepat debug di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use JSON.stringify with Spaces when Debugging Clincoo, Then Remove It before Release",
          desc: "An object logged without indent is hard to read. Pretty-print in the console, keep production lean.",
          content: "<p class=\"mb-4\">Clincoo debugging often prints [object Object] or one unindented JSON line. Reading keys then gets slow.</p><p class=\"mb-4\">In editor.clincoo.buzz, use JSON.stringify(data, null, 2) while debugging. Do not stringify values that hold secrets.</p><p class=\"mb-4\">Remove pretty-print logs before deploy. Huge strings in a production console leak structure and slow the tab.</p><p class=\"mb-4\">Ask AI to mark console.log calls that stringify large objects. Paste the related script file.</p><p class=\"mb-4\">Clincoo does not tidy logs for you. Temporary pretty-print speeds debug on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "json-jangan-eval-string",
      langs: {
        "id": {
          title: "Jangan eval String JSON di Clincoo, Pakai JSON.parse",
          desc: "eval menjalankan kode, bukan hanya data. JSON.parse menolak fungsi dan pernyataan.",
          content: "<p class=\"mb-4\">Template lama Clincoo kadang memakai eval('(' + teks + ')') karena JSON.parse dulu dianggap kaku.</p><p class=\"mb-4\">Di editor.clincoo.buzz ganti eval dan new Function dengan JSON.parse. Tolak payload yang bukan JSON murni.</p><p class=\"mb-4\">Jangan membungkus respons API dengan eval agar 'lebih fleksibel'. Itu celah XSS jika teks datang dari luar.</p><p class=\"mb-4\">Minta AI mencari eval dan new Function pada satu file data. Tempel cuplikan, bukan seluruh repo.</p><p class=\"mb-4\">Clincoo menjalankan apa yang kamu simpan. JSON.parse menjaga app.clincoo.buzz dari kode tersembunyi di string data.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not eval a JSON String in Clincoo, Use JSON.parse",
          desc: "eval runs code, not only data. JSON.parse rejects functions and statements.",
          content: "<p class=\"mb-4\">Old Clincoo templates sometimes use eval('(' + text + ')') because JSON.parse once felt strict.</p><p class=\"mb-4\">In editor.clincoo.buzz replace eval and new Function with JSON.parse. Reject payloads that are not pure JSON.</p><p class=\"mb-4\">Do not wrap an API response in eval to look 'flexible'. That is an XSS hole if the text comes from outside.</p><p class=\"mb-4\">Ask AI to find eval and new Function in one data file. Paste the snippet, not the whole repo.</p><p class=\"mb-4\">Clincoo runs what you save. JSON.parse keeps app.clincoo.buzz safe from code hidden in a data string.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "json-cek-content-type-sebelum-parse",
      langs: {
        "id": {
          title: "Cek Content-Type sebelum JSON.parse Respons Fetch Clincoo",
          desc: "Halaman HTML error yang di-parse sebagai JSON melempar SyntaxError yang membingungkan.",
          content: "<p class=\"mb-4\">Fetch Clincoo ke endpoint yang 404 sering mengembalikan HTML. response.json() lalu gagal dengan pesan yang tidak menyebut status.</p><p class=\"mb-4\">Di editor.clincoo.buzz, cek response.ok dan header Content-Type mengandung json sebelum parse. Jika HTML, tampilkan status saja.</p><p class=\"mb-4\">Jangan menganggap setiap fetch mengembalikan objek. Proxy dan halaman login bisa menyisipkan HTML tanpa peringatan.</p><p class=\"mb-4\">Minta AI menambah penjaga content-type pada satu fungsi fetch. Tempel fungsi itu saja.</p><p class=\"mb-4\">Clincoo tidak memeriksa header untukmu. Cek tipe dulu menjaga pesan error jelas di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Check Content-Type before JSON.parse on a Clincoo Fetch Response",
          desc: "An HTML error page parsed as JSON throws a confusing SyntaxError.",
          content: "<p class=\"mb-4\">A Clincoo fetch to a 404 endpoint often returns HTML. response.json() then fails with a message that never mentions the status.</p><p class=\"mb-4\">In editor.clincoo.buzz, check response.ok and that Content-Type contains json before you parse. If it is HTML, show the status only.</p><p class=\"mb-4\">Do not assume every fetch returns an object. A proxy or login page can inject HTML with no warning.</p><p class=\"mb-4\">Ask AI to add a content-type guard on one fetch helper. Paste that function only.</p><p class=\"mb-4\">Clincoo does not inspect headers for you. Checking the type first keeps errors clear on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "json-localstorage-parse-aman",
      langs: {
        "id": {
          title: "Parse JSON dari localStorage Clincoo dengan Cadangan Objek Kosong",
          desc: "Nilai localStorage bisa rusak atau diubah pengguna. Parse tanpa cadangan membuat init meledak.",
          content: "<p class=\"mb-4\">Pengaturan tema Clincoo yang disimpan sebagai JSON di localStorage kadang terpotong setelah kuota penuh.</p><p class=\"mb-4\">Di editor.clincoo.buzz, baca string, parse di try/catch, dan jatuh ke objek default jika gagal. Jangan menulis ulang storage sampai parse sukses.</p><p class=\"mb-4\">Jangan percaya tipe hasil. Pastikan yang kembali adalah object atau array sebelum mengakses kunci.</p><p class=\"mb-4\">Minta AI menulis satu fungsi readJsonKey. Tempel pemakaian localStorage.getItem yang ada.</p><p class=\"mb-4\">Clincoo tidak memvalidasi storage. Parse dengan cadangan menjaga app.clincoo.buzz tetap bisa dibuka.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Parse JSON from Clincoo localStorage with an Empty-Object Fallback",
          desc: "A localStorage value can be corrupt or edited by the user. Parse without a fallback blows up init.",
          content: "<p class=\"mb-4\">Clincoo theme settings stored as JSON in localStorage sometimes get truncated after the quota fills.</p><p class=\"mb-4\">In editor.clincoo.buzz, read the string, parse in try/catch, and fall back to a default object on failure. Do not rewrite storage until parse succeeds.</p><p class=\"mb-4\">Do not trust the result type. Confirm you got an object or array before you read keys.</p><p class=\"mb-4\">Ask AI to write one readJsonKey helper. Paste the existing localStorage.getItem usage.</p><p class=\"mb-4\">Clincoo does not validate storage. Parse with a fallback keeps app.clincoo.buzz open.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
