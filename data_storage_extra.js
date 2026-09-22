// Clincoo Blog — artikel storage tambahan 2026-09-23 WIB
(function(){
  var extra = [
    {
      id: "storage-sessionstorage-vs-localstorage",
      langs: {
        "id": {
          title: "Pilih sessionStorage atau localStorage di Situs Clincoo",
          desc: "sessionStorage hilang saat tab ditutup. localStorage bertahan. Pilih sesuai umur data, bukan kebiasaan AI.",
          content: "<p class=\"mb-4\">AI sering memakai localStorage untuk semua state UI. Preferensi tema boleh bertahan; wizard empat langkah yang belum selesai lebih aman di sessionStorage.</p><p class=\"mb-4\">sessionStorage terikat satu tab. localStorage dibagi semua tab origin yang sama. Draf form antar-tab butuh localStorage plus event storage.</p><p class=\"mb-4\">Tulis kunci dengan prefiks halaman, misalnya clincoo-theme dan clincoo-wizard-step, agar tidak bentrok antar proyek di editor.clincoo.buzz.</p><p class=\"mb-4\">Minta AI menjelaskan umur data sebelum menulis setItem. Tolak satu objek raksasa yang mencampur tema, draf, dan flag tur.</p><p class=\"mb-4\">Clincoo adalah situs statis. Browser storage adalah cache klien, bukan pengganti akun.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Choose sessionStorage or localStorage on a Clincoo Site",
          desc: "sessionStorage dies with the tab. localStorage persists. Pick by data lifetime, not by the AI default.",
          content: "<p class=\"mb-4\">AI often uses localStorage for every UI state. Theme preference may persist; an unfinished four-step wizard is safer in sessionStorage.</p><p class=\"mb-4\">sessionStorage is one tab. localStorage is shared across tabs on the same origin. Cross-tab drafts need localStorage plus the storage event.</p><p class=\"mb-4\">Prefix keys by page, such as clincoo-theme and clincoo-wizard-step, so projects in editor.clincoo.buzz do not collide.</p><p class=\"mb-4\">Ask the AI to state the data lifetime before writing setItem. Refuse one giant object that mixes theme, draft, and tour flags.</p><p class=\"mb-4\">Clincoo is a static site. Browser storage is a client cache, not an account.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "storage-tangani-quota-exceeded",
      langs: {
        "id": {
          title: "Tangani QuotaExceededError saat localStorage Penuh",
          desc: "Browser membatasi kuota per origin. setItem bisa melempar error. Jangan biarkan formulir Clincoo diam tanpa pesan.",
          content: "<p class=\"mb-4\">Gambar base64 atau log debug yang ditumpuk AI cepat menghabiskan kuota 5 MB. Satu setItem gagal membuat seluruh skrip berhenti jika tidak di-try.</p><p class=\"mb-4\">Bungkus setItem dalam try/catch. Jika QuotaExceededError, hapus kunci lama milik proyek, lalu coba lagi sekali.</p><p class=\"mb-4\">Jangan simpan data URL gambar di storage. Simpan nama file atau pilihan tema yang pendek.</p><p class=\"mb-4\">Minta AI menambah cadangan: jika storage penuh, tetap biarkan form jalan di memori dan tampilkan satu kalimat ke pengguna.</p><p class=\"mb-4\">Clincoo tidak menambah kuota. Bersihkan draf usang di Application tab DevTools sebelum deploy ke app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Handle QuotaExceededError when localStorage Is Full",
          desc: "Browsers cap origin quota. setItem can throw. Do not let a Clincoo form fail silently.",
          content: "<p class=\"mb-4\">Base64 images or debug logs stacked by AI burn the 5 MB quota fast. One failed setItem stops the script if it is not in try.</p><p class=\"mb-4\">Wrap setItem in try/catch. On QuotaExceededError, delete old project keys, then retry once.</p><p class=\"mb-4\">Do not store image data URLs in storage. Store a filename or a short theme choice.</p><p class=\"mb-4\">Ask the AI for a fallback: if storage is full, keep the form in memory and show one sentence to the user.</p><p class=\"mb-4\">Clincoo does not raise the quota. Clear stale drafts in the DevTools Application tab before you deploy to app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "storage-json-parse-aman",
      langs: {
        "id": {
          title: "Parse JSON dari localStorage dengan Aman",
          desc: "getItem mengembalikan string atau null. JSON.parse tanpa jaga-jaga merusak halaman Clincoo saat data korup.",
          content: "<p class=\"mb-4\">Pengunjung atau versi skrip lama bisa menulis string bukan-JSON. Parse mentah melempar SyntaxError dan memutus inisialisasi tema.</p><p class=\"mb-4\">Baca nilai, jika null pakai default. Parse di dalam try/catch. Pastikan hasil berupa objek atau array yang diharapkan, bukan angka.</p><p class=\"mb-4\">Tulis versi skema di objek, misalnya v: 1. Jika versi tidak cocok, buang dan mulai bersih.</p><p class=\"mb-4\">Minta AI menulis satu helper loadJSON(kunci, cadangan). Tolak parse di setiap event input.</p><p class=\"mb-4\">Clincoo menayangkan JS apa adanya. Helper kecil lebih mudah diaudit daripada parse tersebar.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Parse JSON from localStorage Safely",
          desc: "getItem returns a string or null. JSON.parse without a guard breaks a Clincoo page when the data is corrupt.",
          content: "<p class=\"mb-4\">A visitor or an older script version may write a non-JSON string. A raw parse throws SyntaxError and kills theme init.</p><p class=\"mb-4\">Read the value; if it is null, use a default. Parse inside try/catch. Assert the result is the expected object or array, not a number.</p><p class=\"mb-4\">Store a schema version on the object, such as v: 1. If the version mismatches, drop it and start clean.</p><p class=\"mb-4\">Ask the AI for one loadJSON(key, fallback) helper. Refuse a parse on every input event.</p><p class=\"mb-4\">Clincoo ships JS as written. A small helper is easier to audit than scattered parses.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "storage-event-sinkron-antar-tab",
      langs: {
        "id": {
          title: "Sinkronkan Tab Clincoo lewat Event storage",
          desc: "localStorage berubah di tab lain memicu event storage. Pakai ini agar tema atau draf tidak bertolak belakang.",
          content: "<p class=\"mb-4\">Pengunjung membuka situs Clincoo di dua tab. Satu tab ganti tema gelap, tab lain tetap terang sampai di-refresh.</p><p class=\"mb-4\">Pasang listener window pada event storage. Jika key cocok, terapkan nilai baru ke DOM. Event tidak menyala di tab yang menulis.</p><p class=\"mb-4\">Jangan loop: listener hanya membaca, tidak memanggil setItem dengan nilai yang sama berulang-ulang.</p><p class=\"mb-4\">Minta AI menulis listener pendek di file yang sama dengan penulis tema. Uji dengan dua tab di pratinjau app.clincoo.buzz.</p><p class=\"mb-4\">Clincoo tidak punya websocket. Event storage adalah bus sederhana antar tab origin yang sama.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Sync Clincoo Tabs with the storage Event",
          desc: "localStorage changes in another tab fire a storage event. Use it so theme or drafts do not fight each other.",
          content: "<p class=\"mb-4\">A visitor opens the Clincoo site in two tabs. One tab switches to dark theme; the other stays light until refresh.</p><p class=\"mb-4\">Listen on window for the storage event. When the key matches, apply the new value to the DOM. The writing tab does not get the event.</p><p class=\"mb-4\">Do not loop: the listener only reads; it must not call setItem with the same value over and over.</p><p class=\"mb-4\">Ask the AI for a short listener in the same file that writes the theme. Test with two tabs on the app.clincoo.buzz preview.</p><p class=\"mb-4\">Clincoo has no websocket. The storage event is a simple bus across tabs on the same origin.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "storage-versi-kunci-saat-rilis",
      langs: {
        "id": {
          title: "Beri Versi pada Kunci Storage saat Rilis Baru",
          desc: "Struktur draf berubah antar rilis. Kunci tanpa versi membuat JSON lama merusak skrip baru di Clincoo.",
          content: "<p class=\"mb-4\">Setelah deploy, pengunjung lama masih punya objek draf tanpa field baru. Skrip mengasumsikan field itu ada dan melempar TypeError.</p><p class=\"mb-4\">Sertakan nomor rilis di nama kunci, misalnya draft-kontak-v2. Biarkan v1 sampai kamu yakin tidak terpakai, lalu hapus.</p><p class=\"mb-4\">Saat load, jika v2 kosong tetapi v1 ada, migrasi sekali lalu hapus v1. Jangan biarkan dua format hidup selamanya.</p><p class=\"mb-4\">Minta AI menambahkan konstanta STORAGE_VER di satu tempat. Tolak hardcode string kunci di lima file.</p><p class=\"mb-4\">Clincoo men-deploy folder statis. Versi kunci adalah cara kamu merilis tanpa memaksa pengunjung menghapus data situs.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Version Storage Keys on a New Clincoo Release",
          desc: "Draft shape changes between releases. Unversioned keys let old JSON break new Clincoo scripts.",
          content: "<p class=\"mb-4\">After deploy, returning visitors still have a draft object without the new field. The script assumes the field exists and throws TypeError.</p><p class=\"mb-4\">Put a release number in the key name, such as draft-contact-v2. Keep v1 until you know it is unused, then delete it.</p><p class=\"mb-4\">On load, if v2 is empty but v1 exists, migrate once and then remove v1. Do not keep two formats forever.</p><p class=\"mb-4\">Ask the AI to add a STORAGE_VER constant in one place. Refuse hardcoded key strings in five files.</p><p class=\"mb-4\">Clincoo deploys a static folder. Key versions let you ship without forcing visitors to clear site data.</p>",
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
