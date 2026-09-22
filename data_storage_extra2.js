// Clincoo Blog — artikel storage tambahan 2026-09-23 WIB (extra2)
(function(){
  var extra = [
    {
      id: "storage-deteksi-mode-pribadi",
      langs: {
        "id": {
          title: "Deteksi Mode Pribadi saat localStorage Diblokir",
          desc: "Safari dan beberapa browser mematikan storage di jendela pribadi. Satu setItem tanpa jaga-jaga merusak halaman Clincoo.",
          content: "<p class=\"mb-4\">Di jendela pribadi, setItem bisa melempar atau diam-diam gagal. Skrip tema yang mengasumsikan storage selalu ada memutus inisialisasi.</p><p class=\"mb-4\">Tulis fungsi kecil: coba setItem dan hapus kunci uji. Jika gagal, pakai variabel di memori dan jangan panggil getItem lagi.</p><p class=\"mb-4\">Tampilkan satu kalimat jika draf tidak bisa disimpan, bukan error merah di konsol tanpa konteks.</p><p class=\"mb-4\">Minta AI membungkus semua akses storage lewat helper itu. Tolak try/catch yang menelan error lalu lanjut seolah data tersimpan.</p><p class=\"mb-4\">Clincoo adalah situs statis. Mode pribadi harus tetap menampilkan halaman, hanya tanpa draf bertahan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Detect Private Mode when localStorage Is Blocked",
          desc: "Safari and some browsers disable storage in a private window. One unguarded setItem breaks a Clincoo page.",
          content: "<p class=\"mb-4\">In a private window, setItem may throw or fail silently. Theme scripts that assume storage always exists kill init.</p><p class=\"mb-4\">Write a small helper: try setItem and remove a test key. On failure, keep state in memory and stop calling getItem.</p><p class=\"mb-4\">Show one sentence if a draft cannot be saved, not a red console error with no context.</p><p class=\"mb-4\">Ask the AI to route every storage call through that helper. Refuse a try/catch that swallows the error and pretends the data was saved.</p><p class=\"mb-4\">Clincoo is a static site. Private mode must still render the page; only the lasting draft is missing.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "storage-hapus-draf-kedaluwarsa",
      langs: {
        "id": {
          title: "Hapus Draf localStorage yang Sudah Kedaluwarsa",
          desc: "Draf form yang tidak pernah dikirim menumpuk. Beri stempel waktu dan buang data usang di situs Clincoo.",
          content: "<p class=\"mb-4\">Pengunjung mengisi form sekali, pergi, lalu kembali tiga bulan kemudian. Objek lama masih ada dan menimpa field baru.</p><p class=\"mb-4\">Simpan savedAt bersama data. Saat load, jika lebih dari tujuh hari, hapus kunci dan mulai kosong.</p><p class=\"mb-4\">Jangan mengandalkan pengunjung membuka Application tab. Pembersihan harus otomatis di skrip yang sama yang menulis draf.</p><p class=\"mb-4\">Minta AI menambah field savedAt dan satu fungsi sweep. Tolak timer setInterval yang berjalan setiap detik.</p><p class=\"mb-4\">Clincoo tidak punya cron server. Sweep saat halaman dimuat sudah cukup untuk menjaga kuota.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Delete Stale localStorage Drafts on a Timer",
          desc: "Unsent form drafts pile up. Stamp a time and drop old data on a Clincoo site.",
          content: "<p class=\"mb-4\">A visitor fills a form once, leaves, and returns three months later. The old object is still there and overwrites new fields.</p><p class=\"mb-4\">Store savedAt with the data. On load, if it is older than seven days, delete the key and start empty.</p><p class=\"mb-4\">Do not rely on the visitor opening the Application tab. Cleanup must live in the same script that writes the draft.</p><p class=\"mb-4\">Ask the AI to add a savedAt field and one sweep function. Refuse a setInterval that ticks every second.</p><p class=\"mb-4\">Clincoo has no server cron. A sweep on page load is enough to protect quota.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "storage-indexeddb-tidak-wajib",
      langs: {
        "id": {
          title: "Jangan Pakai IndexedDB untuk Draf Kecil Clincoo",
          desc: "IndexedDB kuat untuk data besar. Draf form dan tema di situs statis Clincoo lebih jelas di localStorage.",
          content: "<p class=\"mb-4\">AI suka menawarkan IndexedDB plus Promise plus migrasi skema untuk menyimpan satu string tema. Kompleksitas itu tidak sebanding.</p><p class=\"mb-4\">Pakai localStorage jika data di bawah beberapa kilobyte dan bisa jadi JSON. IndexedDB baru masuk akal untuk berkas atau daftar ribuan baris.</p><p class=\"mb-4\">Clincoo menayangkan folder statis tanpa backend. API asinkron IndexedDB mempersulit debug di konsol untuk pemula.</p><p class=\"mb-4\">Minta AI menolak IndexedDB kecuali kamu menjelaskan volume data. Tolak library pembungkus hanya untuk satu kunci.</p><p class=\"mb-4\">Sederhana lebih mudah diaudit sebelum deploy ke app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Skip IndexedDB for Small Clincoo Drafts",
          desc: "IndexedDB is built for large data. Form drafts and theme on a static Clincoo site stay clearer in localStorage.",
          content: "<p class=\"mb-4\">AI likes to offer IndexedDB plus Promises plus a schema migration to store one theme string. That complexity does not pay off.</p><p class=\"mb-4\">Use localStorage when the data is a few kilobytes and can be JSON. IndexedDB only makes sense for files or thousands of rows.</p><p class=\"mb-4\">Clincoo ships a static folder with no backend. The async IndexedDB API makes console debugging harder for beginners.</p><p class=\"mb-4\">Ask the AI to refuse IndexedDB unless you state the data volume. Refuse a wrapper library for a single key.</p><p class=\"mb-4\">Simple storage is easier to audit before you deploy to app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "storage-cookie-bukan-pengganti-localstorage",
      langs: {
        "id": {
          title: "Jangan Ganti localStorage dengan Cookie di Situs Clincoo",
          desc: "Cookie ikut setiap permintaan. Situs statis Clincoo tidak butuh itu untuk tema atau draf form.",
          content: "<p class=\"mb-4\">AI kadang menulis document.cookie untuk preferensi UI. Cookie terkirim ke server jika nanti ada request — termasuk aset statis jika path tidak dijaga.</p><p class=\"mb-4\">localStorage tetap di klien. Tidak menambah header. Cukup untuk tema, bahasa, dan draf.</p><p class=\"mb-4\">Cookie hanya masuk akal jika kamu benar-benar punya server yang harus membaca nilai itu. Clincoo pages tidak punya server sesi.</p><p class=\"mb-4\">Minta AI menghapus cookie UI dan memindahkan state ke storage. Tolak cookie tanpa Max-Age yang hidup selamanya.</p><p class=\"mb-4\">Lebih sedikit data di setiap request membuat pratinjau di app.clincoo.buzz tetap ringan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Replace localStorage with Cookies on Clincoo",
          desc: "Cookies ride on every request. A static Clincoo site does not need that for theme or form drafts.",
          content: "<p class=\"mb-4\">AI sometimes writes document.cookie for UI preferences. Cookies travel with later requests — including static assets if the path is loose.</p><p class=\"mb-4\">localStorage stays on the client. It adds no headers. That is enough for theme, language, and drafts.</p><p class=\"mb-4\">Cookies only make sense when a server must read the value. Clincoo pages have no session server.</p><p class=\"mb-4\">Ask the AI to drop UI cookies and move state to storage. Refuse a cookie with no Max-Age that lives forever.</p><p class=\"mb-4\">Less data on every request keeps the preview on app.clincoo.buzz light.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "storage-tombol-hapus-data-lokal",
      langs: {
        "id": {
          title: "Sediakan Tombol Hapus Data Lokal di Situs Clincoo",
          desc: "Pengunjung berhak menghapus draf dan preferensi tanpa membuka DevTools. Satu tombol menjaga privasi.",
          content: "<p class=\"mb-4\">Draf form dan tema tersimpan di origin. Banyak orang tidak tahu cara membersihkan data situs di browser.</p><p class=\"mb-4\">Tambah tautan atau tombol 'Hapus data lokal' yang memanggil removeItem untuk kunci milik proyek, lalu muat ulang.</p><p class=\"mb-4\">Jangan clear() seluruh origin jika kamu berbagi host dengan proyek lain di editor.clincoo.buzz. Hapus hanya prefiks kamu.</p><p class=\"mb-4\">Minta AI mendaftar kunci di satu array agar tombol dan penulis memakai daftar yang sama.</p><p class=\"mb-4\">Clincoo tidak menyimpan akun. Kontrol hapus di halaman adalah cara jujur memperlakukan data klien.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add a Clear Local Data Button on a Clincoo Site",
          desc: "Visitors should drop drafts and preferences without DevTools. One button protects privacy.",
          content: "<p class=\"mb-4\">Form drafts and theme live on the origin. Many people do not know how to clear site data in the browser.</p><p class=\"mb-4\">Add a 'Clear local data' link or button that removeItem the project keys, then reload.</p><p class=\"mb-4\">Do not clear() the whole origin if you share a host with other projects on editor.clincoo.buzz. Delete only your prefix.</p><p class=\"mb-4\">Ask the AI to list keys in one array so the button and the writer share the same list.</p><p class=\"mb-4\">Clincoo stores no accounts. An on-page clear control is the honest way to treat client data.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["storage"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["storage"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
