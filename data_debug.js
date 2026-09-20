// Clincoo Blog — Data kategori: debug
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["debug"] = {
  names: { "id": "Debug", "en": "Debug" },
  flag: "🐞",
  articles: [
    {
      id: "debug-baca-console-sebelum-ubah-kode",
      langs: {
        "id": {
          title: "Baca Pesan Console sebelum Mengubah Kode Clincoo",
          desc: "Error merah di DevTools biasanya menunjuk file dan baris. Baca dulu, baru minta AI mengedit.",
          content: "<p class=\"mb-4\">Saat menu mobile tidak terbuka, banyak orang langsung menyuruh AI menulis ulang JavaScript. Padahal console sudah menulis TypeError di baris yang tepat.</p><p class=\"mb-4\">Buka pratinjau Clincoo, tekan DevTools, tab Console. Salin pesan lengkap termasuk nama file. Jangan potong stack.</p><p class=\"mb-4\">Tempel error itu ke AI bersama nama file yang disebut. Satu masalah per obrolan. Tolak rewrite seluruh script.js.</p><p class=\"mb-4\">Jika console bersih tetapi tampilan salah, pindah ke tab Elements atau Network. Jangan tebak di editor.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu simpan. Console adalah laporan pertama, bukan dekorasi browser.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Read the Console Message before You Change Clincoo Code",
          desc: "A red DevTools error usually names a file and line. Read it first, then ask the AI to edit.",
          content: "<p class=\"mb-4\">When a mobile menu fails, many people tell the AI to rewrite the JavaScript. The console already printed a TypeError on the exact line.</p><p class=\"mb-4\">Open the Clincoo preview, open DevTools, Console tab. Copy the full message including the file name. Do not trim the stack.</p><p class=\"mb-4\">Paste that error to the AI with the named file. One problem per chat. Refuse a full script.js rewrite.</p><p class=\"mb-4\">If the console is clean but the layout is wrong, move to Elements or Network. Do not guess in the editor.</p><p class=\"mb-4\">Clincoo runs the scripts you save. The console is the first report, not browser decoration.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "debug-cek-network-404-gambar-css",
      langs: {
        "id": {
          title: "Cek Tab Network jika Gambar atau CSS Clincoo Hilang",
          desc: "Status 404 di Network menjelaskan path yang salah. Perbaiki href atau src, jangan ganti desain.",
          content: "<p class=\"mb-4\">Hero kosong sering bukan masalah CSS. File gambar mengarah ke folder yang tidak ada setelah template dipindah.</p><p class=\"mb-4\">Buka tab Network di pratinjau, filter Img atau CSS, lihat status merah. Catat path yang diminta browser.</p><p class=\"mb-4\">Samakan atribut src atau href dengan struktur folder workspace Clincoo. Path relatif dari subhalaman berbeda dari beranda.</p><p class=\"mb-4\">Minta AI memperbaiki satu atribut di satu file. Tolak unggah ulang seluruh aset jika hanya path yang salah.</p><p class=\"mb-4\">Clincoo menayangkan file sesuai path. 404 adalah peta yang jujur, bukan bug platform.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Check the Network Tab when Clincoo Images or CSS Vanish",
          desc: "A 404 in Network explains a wrong path. Fix href or src instead of changing the design.",
          content: "<p class=\"mb-4\">An empty hero is often not a CSS problem. The image file points at a folder that vanished after the template moved.</p><p class=\"mb-4\">Open the Network tab in preview, filter Img or CSS, look for red status. Note the path the browser requested.</p><p class=\"mb-4\">Match the src or href attribute to the Clincoo workspace folder tree. A relative path from a subpage differs from the home page.</p><p class=\"mb-4\">Ask the AI to fix one attribute in one file. Refuse a full asset re-upload if only the path is wrong.</p><p class=\"mb-4\">Clincoo serves files by path. A 404 is an honest map, not a platform bug.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "debug-matikan-css-sementara-untuk-isolasi",
      langs: {
        "id": {
          title: "Matikan Potongan CSS Sementara untuk Isolasi Bug Layout",
          desc: "Komentari aturan yang dicurigai, bukan menghapus seluruh stylesheet. Lihat apakah layout kembali.",
          content: "<p class=\"mb-4\">Kartu yang tumpang tindih bisa berasal dari satu float atau position absolut. Mengganti seluruh CSS menyembunyikan penyebab.</p><p class=\"mb-4\">Bungkus blok yang dicurigai dengan komentar CSS. Simpan, pratinjau ulang. Jika masalah hilang, kamu sudah isolasi file dan aturan.</p><p class=\"mb-4\">Kembalikan komentar setelah tes. Catat selektor yang bersalah. Baru minta AI mengubah aturan itu saja.</p><p class=\"mb-4\">Jangan disabled seluruh link stylesheet kecuali untuk tes 10 detik. Halaman tanpa CSS menyesatkan keputusan desain.</p><p class=\"mb-4\">Clincoo menyimpan CSS apa adanya. Isolasi dengan komentar lebih aman daripada rewrite tema.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Comment Out CSS Briefly to Isolate a Layout Bug",
          desc: "Comment the suspected rule instead of deleting the whole stylesheet. See if the layout returns.",
          content: "<p class=\"mb-4\">Overlapping cards can come from one float or an absolute position. Replacing all CSS hides the cause.</p><p class=\"mb-4\">Wrap the suspected block in a CSS comment. Save and preview again. If the issue vanishes, you isolated the file and the rule.</p><p class=\"mb-4\">Restore the comment after the test. Note the guilty selector. Then ask the AI to change only that rule.</p><p class=\"mb-4\">Do not disable the whole stylesheet link except for a ten-second test. A page with no CSS misleads design decisions.</p><p class=\"mb-4\">Clincoo stores CSS as written. Isolating with comments is safer than a theme rewrite.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ]
};
