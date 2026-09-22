// Clincoo Blog — Data kategori: devtools
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["devtools"] = {
  names: { "id": "DevTools", "en": "DevTools" },
  flag: "🧰",
  articles: [
    {
      id: "devtools-baca-console-error-merah",
      langs: {
        "id": {
          title: "Baca Error Merah di Console sebelum Minta AI",
          desc: "Satu baris TypeError di Console menjelaskan lebih dari paragraf spekulasi. Salin pesan lengkap dulu.",
          content: "<p class=\"mb-4\">Banyak pengguna Clincoo menempel kode ke AI tanpa membuka Console. AI lalu menebak, padahal browser sudah menulis file dan baris yang gagal.</p><p class=\"mb-4\">Buka DevTools (F12), tab Console, muat ulang pratinjau editor.clincoo.buzz. Salin teks merah utuh, termasuk stack.</p><p class=\"mb-4\">Abaikan peringatan ekstensi browser. Fokus pada error yang menyebut file proyekmu.</p><p class=\"mb-4\">Minta AI menjelaskan satu error per obrolan. Tolak rewrite seluruh halaman hanya karena satu Uncaught.</p><p class=\"mb-4\">Clincoo menayangkan JS apa adanya. Console adalah sumber kebenaran pertama sebelum chat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Read the Red Console Error before You Ask AI",
          desc: "One TypeError line in the Console explains more than a paragraph of guesses. Copy the full message first.",
          content: "<p class=\"mb-4\">Many Clincoo users paste code into AI without opening the Console. The model then guesses, even though the browser already named the failing file and line.</p><p class=\"mb-4\">Open DevTools (F12), Console tab, reload the editor.clincoo.buzz preview. Copy the full red text, including the stack.</p><p class=\"mb-4\">Ignore extension warnings. Focus on errors that mention your project files.</p><p class=\"mb-4\">Ask the AI to explain one error per chat. Refuse a full-page rewrite for a single Uncaught.</p><p class=\"mb-4\">Clincoo ships JS as saved. The Console is the first source of truth before chat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "devtools-periksa-elemen-css-tertimpa",
      langs: {
        "id": {
          title: "Periksa Elemen untuk Menemukan CSS yang Tertimpa",
          desc: "Jika gaya tidak muncul, hampir selalu ada aturan lain yang lebih spesifik. Panel Styles menunjuk pelakunya.",
          content: "<p class=\"mb-4\">AI menambah kelas baru, tapi kartu Clincoo tetap terlihat lama. Kamu mengira file tidak tersimpan; sebenarnya selector lama menang.</p><p class=\"mb-4\">Klik kanan elemen di pratinjau editor.clincoo.buzz, Inspect. Di panel Styles, cari deklarasi yang dicoret.</p><p class=\"mb-4\">Naikkan spesifisitas dengan kelas yang sudah ada, atau hapus aturan lama. Jangan tumpuk !important.</p><p class=\"mb-4\">Minta AI satu selector pengganti. Tolak reset * { } yang merusak template.</p><p class=\"mb-4\">Clincoo tidak memproses CSS di server. Yang menang di DevTools itulah yang dilihat pengunjung.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Inspect an Element to Find Overridden CSS",
          desc: "If a style never shows, another rule is almost always more specific. The Styles pane names the winner.",
          content: "<p class=\"mb-4\">AI adds a new class, but the Clincoo card still looks old. You assume the file did not save; an older selector actually wins.</p><p class=\"mb-4\">Right-click the element in the editor.clincoo.buzz preview, Inspect. In the Styles pane, find the crossed-out declarations.</p><p class=\"mb-4\">Raise specificity with a class you already have, or delete the old rule. Do not pile on !important.</p><p class=\"mb-4\">Ask the AI for one replacement selector. Refuse a * { } reset that breaks the template.</p><p class=\"mb-4\">Clincoo does not process CSS on the server. Whatever wins in DevTools is what visitors see.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "devtools-network-lihat-berkas-404",
      langs: {
        "id": {
          title: "Pakai Tab Network untuk Menemukan Berkas 404",
          desc: "Gambar pecah atau font default sering karena path salah. Network menampilkan status dan URL yang benar-benar diminta.",
          content: "<p class=\"mb-4\">Landing Clincoo kadang menampilkan ikon rusak setelah ganti folder. AI menyalahkan cache, padahal request menuju /assets/lama.png.</p><p class=\"mb-4\">Buka DevTools Network, filter Img atau Font, muat ulang. Baris merah 404 adalah path yang harus kamu perbaiki.</p><p class=\"mb-4\">Samakan huruf besar-kecil dan folder. Uji lagi di editor.clincoo.buzz sampai status 200.</p><p class=\"mb-4\">Minta AI memperbaiki satu path. Tolak base64 raksasa sebagai ganti file yang hilang.</p><p class=\"mb-4\">Clincoo adalah situs statis. Berkas yang tidak ada di deploy tidak akan muncul, berapa pun CSS-nya.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use the Network Tab to Find 404 Files",
          desc: "Broken images or fallback fonts usually mean a bad path. Network shows the status and the URL that was actually requested.",
          content: "<p class=\"mb-4\">A Clincoo landing sometimes shows a broken icon after a folder rename. AI blames cache, but the request still hits /assets/old.png.</p><p class=\"mb-4\">Open DevTools Network, filter Img or Font, reload. Red 404 rows are the paths you must fix.</p><p class=\"mb-4\">Match case and folder names. Test again in editor.clincoo.buzz until the status is 200.</p><p class=\"mb-4\">Ask the AI to fix one path. Refuse a giant base64 stand-in for a missing file.</p><p class=\"mb-4\">Clincoo is a static site. A file that is not in the deploy will not appear, no matter the CSS.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "devtools-device-toolbar-uji-ponsel",
      langs: {
        "id": {
          title: "Uji Tata Letak Ponsel lewat Device Toolbar",
          desc: "Grid yang rapi di laptop sering pecah di 390px. Device toolbar meniru lebar tanpa menunggu HP fisik.",
          content: "<p class=\"mb-4\">Banyak template Clincoo ditulis di layar lebar. Baru setelah deploy, menu dan CTA bertumpuk di HP.</p><p class=\"mb-4\">Di DevTools, nyalakan Device toolbar (Ctrl+Shift+M), pilih 390\u00d7844, muat pratinjau editor.clincoo.buzz.</p><p class=\"mb-4\">Cek overflow horizontal, tombol yang terpotong, dan teks yang menempel tepi. Perbaiki satu breakpoint, lalu uji 768px.</p><p class=\"mb-4\">Minta AI menyesuaikan flex/grid untuk lebar itu. Tolak zoom meta yang mengunci pinch.</p><p class=\"mb-4\">Clincoo harus nyaman di genggaman. Toolbar perangkat menghemat waktu sebelum kamu buka HP sendiri.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test Phone Layout with the Device Toolbar",
          desc: "A grid that looks clean on a laptop often breaks at 390px. The device toolbar mimics width without waiting for a physical phone.",
          content: "<p class=\"mb-4\">Many Clincoo templates are written on a wide screen. Only after deploy do the menu and CTA stack on a phone.</p><p class=\"mb-4\">In DevTools, turn on the Device toolbar (Ctrl+Shift+M), pick 390\u00d7844, load the editor.clincoo.buzz preview.</p><p class=\"mb-4\">Check horizontal overflow, clipped buttons, and text stuck to the edge. Fix one breakpoint, then test 768px.</p><p class=\"mb-4\">Ask the AI to adjust flex/grid for that width. Refuse a meta zoom that locks pinch.</p><p class=\"mb-4\">Clincoo should feel fine in a hand. The device toolbar saves time before you pick up your own phone.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
