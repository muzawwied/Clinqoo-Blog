// Clincoo Blog — Data kategori: javascript
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["javascript"] = {
  names: { "id": "JavaScript", "en": "JavaScript" },
  flag: "⚡",
  articles: [
    {
      id: "js-tunggu-domcontentloaded",
      langs: {
        "id": {
          title: "Tunggu DOMContentLoaded sebelum Mengikat Tombol Clincoo",
          desc: "Script yang jalan sebelum HTML siap mendapat null. Tunggu DOM, baru querySelector.",
          content: "<p class=\"mb-4\">Tombol menu yang 'mati' sering karena script Clincoo mencari elemen sebelum body selesai diurai. querySelector mengembalikan null, lalu classList meledak.</p><p class=\"mb-4\">Bungkus inisialisasi di listener DOMContentLoaded atau pindahkan tag script ke akhir body. Jangan tebak urutan dengan setTimeout acak.</p><p class=\"mb-4\">Di pratinjau editor.clincoo.buzz buka Console. Jika muncul Cannot read properties of null, urutan muat yang salah — bukan logika menu.</p><p class=\"mb-4\">Minta AI hanya memindahkan satu blok init. Tolak rewrite seluruh script.js.</p><p class=\"mb-4\">Clincoo menjalankan berkas yang kamu simpan. DOM harus ada sebelum kamu menyentuhnya.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Wait for DOMContentLoaded before You Bind Clincoo Buttons",
          desc: "A script that runs before HTML is ready gets null. Wait for the DOM, then querySelector.",
          content: "<p class=\"mb-4\">A 'dead' menu button often happens because Clincoo script looks up a node before the body finishes parsing. querySelector returns null, then classList blows up.</p><p class=\"mb-4\">Wrap init in a DOMContentLoaded listener or move the script tag to the end of body. Do not guess order with a random setTimeout.</p><p class=\"mb-4\">In the editor.clincoo.buzz preview open Console. If you see Cannot read properties of null, load order is wrong — not the menu logic.</p><p class=\"mb-4\">Ask the AI to move one init block only. Refuse a full script.js rewrite.</p><p class=\"mb-4\">Clincoo runs the files you save. The DOM must exist before you touch it.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "js-cek-elemen-sebelum-classlist",
      langs: {
        "id": {
          title: "Cek Elemen Ada sebelum classList di Skrip Clincoo",
          desc: "Halaman tanpa menu mobile tidak boleh merusak beranda. Guard null sebelum classList.toggle.",
          content: "<p class=\"mb-4\">Satu file script.js dipakai banyak halaman Clincoo. Halaman kontak mungkin tidak punya #nav-toggle. Tanpa guard, error merusak skrip lain di halaman itu.</p><p class=\"mb-4\">Simpan hasil querySelector ke variabel. Jika nilainya null, return. Baru panggil classList atau addEventListener.</p><p class=\"mb-4\">Jangan bungkus seluruh berkas dalam try/catch diam. Error yang ditelan menyulitkan debug di Console.</p><p class=\"mb-4\">Minta AI menambah satu if (!el) return pada fungsi yang gagal. Tolak menulis framework baru.</p><p class=\"mb-4\">Clincoo membagikan skrip apa adanya. Guard null adalah sopan santun antar halaman.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Check the Element Exists before classList in Clincoo Scripts",
          desc: "A page without a mobile menu must not break the home page. Guard null before classList.toggle.",
          content: "<p class=\"mb-4\">One script.js is reused across Clincoo pages. The contact page may not have #nav-toggle. Without a guard, the error breaks other scripts on that page.</p><p class=\"mb-4\">Store querySelector in a variable. If it is null, return. Only then call classList or addEventListener.</p><p class=\"mb-4\">Do not wrap the whole file in a silent try/catch. Swallowed errors make Console debugging harder.</p><p class=\"mb-4\">Ask the AI to add one if (!el) return on the failing function. Refuse a new framework.</p><p class=\"mb-4\">Clincoo ships scripts as stored. A null guard is courtesy between pages.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "js-delegasi-klik-di-parent",
      langs: {
        "id": {
          title: "Delegasikan Klik ke Parent jika Daftar Clincoo Bertambah",
          desc: "Listener di setiap item hilang saat innerHTML diganti. Satu listener di ul lebih tahan.",
          content: "<p class=\"mb-4\">Kartu produk yang dimuat ulang sering kehilangan tombol 'detail' karena listener lama menempel di node yang sudah dibuang.</p><p class=\"mb-4\">Pasang satu addEventListener di ul atau section induk. Di handler, cek event.target.closest('.js-detail'). Jika ada, proses item itu.</p><p class=\"mb-4\">Uji di pratinjau: tambah satu kartu baru lewat skrip, klik tombolnya. Jika tidak merespons, listener masih di anak lama.</p><p class=\"mb-4\">Minta AI memindahkan satu listener ke parent. Tolak memasang onclick inline di setiap kartu.</p><p class=\"mb-4\">Clincoo merender HTML dinamis yang kamu tulis. Delegasi event mengikuti node baru tanpa upacara.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Delegate Clicks to a Parent when a Clincoo List Grows",
          desc: "Per-item listeners vanish when innerHTML is replaced. One listener on the ul survives.",
          content: "<p class=\"mb-4\">Reloaded product cards often lose the 'detail' button because old listeners sat on nodes that were thrown away.</p><p class=\"mb-4\">Attach one addEventListener on the parent ul or section. In the handler, check event.target.closest('.js-detail'). If it exists, handle that item.</p><p class=\"mb-4\">Test in preview: add one new card via script, click its button. If nothing happens, the listener is still on the old children.</p><p class=\"mb-4\">Ask the AI to move one listener to the parent. Refuse inline onclick on every card.</p><p class=\"mb-4\">Clincoo renders the dynamic HTML you write. Event delegation follows new nodes without ceremony.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "js-satu-listener-satu-tugas",
      langs: {
        "id": {
          title: "Satu Listener untuk Satu Tugas di Halaman Clincoo",
          desc: "Dua handler klik pada tombol yang sama saling menimpa atau menggandakan aksi. Pisahkan tanggung jawab.",
          content: "<p class=\"mb-4\">Tombol kirim yang membuka modal dan mengirim fetch sekaligus sulit diuji. Satu gagal, semuanya terasa rusak.</p><p class=\"mb-4\">Pisahkan: listener A hanya validasi tampilan, listener B hanya kirim data, atau gabungkan dalam satu fungsi bernama jelas dengan langkah berurutan.</p><p class=\"mb-4\">Cari addEventListener ganda pada selektor yang sama di script.js. Duplikat sering tersisa setelah AI menambah fitur.</p><p class=\"mb-4\">Minta AI menghapus listener cadangan dan menamai fungsi tersisa. Tolak menumpuk setTimeout sebagai perekat.</p><p class=\"mb-4\">Clincoo menjalankan setiap listener yang kamu pasang. Kejelasan tugas mengalahkan jumlah baris.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "One Listener for One Job on a Clincoo Page",
          desc: "Two click handlers on the same button overwrite each other or double the action. Split the jobs.",
          content: "<p class=\"mb-4\">A submit button that both opens a modal and fires fetch is hard to test. One failure makes everything feel broken.</p><p class=\"mb-4\">Split it: listener A only handles UI validation, listener B only sends data, or combine them in one clearly named function with ordered steps.</p><p class=\"mb-4\">Search script.js for duplicate addEventListener on the same selector. Leftovers often remain after the AI adds a feature.</p><p class=\"mb-4\">Ask the AI to remove the spare listener and name the remaining function. Refuse setTimeout glue.</p><p class=\"mb-4\">Clincoo runs every listener you attach. Clear jobs beat extra lines.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "js-hindari-eval-dan-inline-handler",
      langs: {
        "id": {
          title: "Hindari eval dan onclick Inline di Proyek Clincoo",
          desc: "eval dan atribut onclick mencampur data dengan kode. Listener di berkas JS lebih aman dan mudah di-debug.",
          content: "<p class=\"mb-4\">Template yang menempel onclick=\"beli('id')\" pecah saat tanda kutip di nama produk. eval dari string query lebih berbahaya lagi.</p><p class=\"mb-4\">Pindahkan aksi ke addEventListener. Simpan id di data-id. Baca dataset di handler. Tidak perlu merangkai string fungsi.</p><p class=\"mb-4\">Di Console, breakpoint pada listener berkas jauh lebih mudah daripada atribut HTML yang ter-render ulang.</p><p class=\"mb-4\">Minta AI menghapus satu onclick dan mengganti dengan data-attribute. Tolak eval 'supaya cepat'.</p><p class=\"mb-4\">Clincoo menayangkan skrip yang kamu simpan. Kode dan data yang terpisah lebih mudah diawasi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Avoid eval and Inline onclick in a Clincoo Project",
          desc: "eval and onclick attributes mix data with code. A listener in a JS file is safer and easier to debug.",
          content: "<p class=\"mb-4\">A template that pastes onclick=\"buy('id')\" breaks when a product name has quotes. eval from a query string is worse.</p><p class=\"mb-4\">Move the action to addEventListener. Store the id in data-id. Read dataset in the handler. You do not need to build a function string.</p><p class=\"mb-4\">In Console, a breakpoint on a file listener is far easier than an HTML attribute that re-renders.</p><p class=\"mb-4\">Ask the AI to remove one onclick and replace it with a data-attribute. Refuse eval 'to go faster'.</p><p class=\"mb-4\">Clincoo serves the scripts you save. Separated code and data are easier to watch.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
