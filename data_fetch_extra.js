// Clincoo Blog — artikel fetch tambahan 2026-09-27
(function(){
  var extra = [
    {
      id: "fetch-timeout-abortcontroller",
      langs: {
        "id": {
          title: "Pasang Timeout Fetch Clincoo dengan AbortController",
          desc: "Request yang menggantung membuat spinner tidak berhenti. Batasi waktu tunggu secara eksplisit.",
          content: "<p class=\"mb-4\">Fetch Clincoo ke endpoint lambat kadang tidak pernah selesai. Tanpa batas waktu, tombol Kirim tetap disabled.</p><p class=\"mb-4\">Di editor.clincoo.buzz, buat AbortController lalu setTimeout yang memanggil abort() setelah 8–15 detik. Masukkan signal ke opsi fetch.</p><p class=\"mb-4\">Bedakan abort karena timeout dan abort karena pengguna pindah halaman. Pesan UI-nya berbeda.</p><p class=\"mb-4\">Minta AI menambah timeout pada satu fungsi fetch. Tempel pemanggilan yang sekarang tanpa signal.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu simpan. Timeout menjaga app.clincoo.buzz tidak menggantung diam-diam.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Add a Clincoo Fetch Timeout with AbortController",
          desc: "A hanging request leaves the spinner running. Cap wait time explicitly.",
          content: "<p class=\"mb-4\">A Clincoo fetch to a slow endpoint sometimes never finishes. Without a deadline the Submit button stays disabled.</p><p class=\"mb-4\">In editor.clincoo.buzz, create an AbortController and a setTimeout that calls abort() after 8–15 seconds. Pass signal in the fetch options.</p><p class=\"mb-4\">Tell timeout aborts apart from navigations. The UI copy should differ.</p><p class=\"mb-4\">Ask AI to add a timeout on one fetch function. Paste the call that currently has no signal.</p><p class=\"mb-4\">Clincoo runs the script you save. A timeout keeps app.clincoo.buzz from hanging in silence.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "fetch-credentials-same-origin",
      langs: {
        "id": {
          title: "Setel credentials Fetch Clincoo dengan Sadar, Bukan Default Diam-diam",
          desc: "Cookie sesi tidak ikut jika credentials salah. Jangan tebak same-origin atau include.",
          content: "<p class=\"mb-4\">Form login Clincoo men-fetch API di domain yang sama tetapi cookie sesi tidak terkirim karena credentials diubah AI menjadi omit.</p><p class=\"mb-4\">Di editor.clincoo.buzz, untuk API same-origin biarkan default atau tulis credentials: 'same-origin'. Pakai include hanya jika kamu memang lintas subdomain dan CORS mengizinkan.</p><p class=\"mb-4\">Jangan mengirim cookie ke domain pihak ketiga. Itu membuka risiko CSRF dan kebocoran sesi.</p><p class=\"mb-4\">Minta AI hanya menyesuaikan satu opsi credentials. Tempel fetch login yang gagal menyimpan sesi.</p><p class=\"mb-4\">Clincoo tidak menambah cookie sendiri. Opsi yang tepat membuat app.clincoo.buzz mengenali pengguna setelah kirim form.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Set Clincoo Fetch credentials on Purpose, Not by Silent Default",
          desc: "Session cookies stay behind if credentials are wrong. Do not guess same-origin or include.",
          content: "<p class=\"mb-4\">A Clincoo login form fetches an API on the same origin but the session cookie never leaves because AI set credentials to omit.</p><p class=\"mb-4\">In editor.clincoo.buzz, for a same-origin API keep the default or write credentials: 'same-origin'. Use include only when you truly cross subdomains and CORS allows it.</p><p class=\"mb-4\">Do not send cookies to a third-party domain. That opens CSRF and session leaks.</p><p class=\"mb-4\">Ask AI to adjust one credentials option only. Paste the login fetch that fails to keep a session.</p><p class=\"mb-4\">Clincoo does not attach cookies for you. The right option lets app.clincoo.buzz recognize the user after submit.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "fetch-cache-no-store-data-segar",
      langs: {
        "id": {
          title: "Pakai cache: no-store pada Fetch Clincoo yang Harus Selalu Segar",
          desc: "Browser bisa menyajikan JSON lama. Data keranjang atau status login jangan diambil dari cache HTTP.",
          content: "<p class=\"mb-4\">Halaman akun Clincoo men-fetch /me lalu menampilkan nama lama karena respons di-cache. Pengguna sudah ganti profil.</p><p class=\"mb-4\">Di editor.clincoo.buzz, set cache: 'no-store' pada fetch data pengguna, keranjang, dan status. Biarkan cache default untuk aset statis.</p><p class=\"mb-4\">Jangan menumpuk query ?t=Date.now() jika header cache sudah jelas. Itu merusak log server.</p><p class=\"mb-4\">Minta AI menambah cache no-store pada satu pemanggilan. Tempel fetch profil yang stale.</p><p class=\"mb-4\">Clincoo menayangkan skrip halamanmu. Fetch tanpa cache menjaga app.clincoo.buzz menampilkan data terkini.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Use cache: no-store on Clincoo Fetch Calls that Must Stay Fresh",
          desc: "The browser may serve old JSON. Cart and login status must not come from the HTTP cache.",
          content: "<p class=\"mb-4\">A Clincoo account page fetches /me and shows an old name because the response was cached. The user already changed the profile.</p><p class=\"mb-4\">In editor.clincoo.buzz, set cache: 'no-store' on fetches for user data, cart, and status. Leave the default cache for static assets.</p><p class=\"mb-4\">Do not pile on ?t=Date.now() when cache headers are already clear. That clutters server logs.</p><p class=\"mb-4\">Ask AI to add cache no-store on one call. Paste the stale profile fetch.</p><p class=\"mb-4\">Clincoo ships your page script. Uncached fetch keeps app.clincoo.buzz showing current data.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "fetch-loading-lalu-reset-tombol",
      langs: {
        "id": {
          title: "Tampilkan Status Loading Fetch Clincoo, Lalu Reset Tombol di Akhir",
          desc: "Spinner tanpa cabang finally membuat tombol mati setelah error atau sukses.",
          content: "<p class=\"mb-4\">Handler submit Clincoo men-disable tombol lalu fetch. Jika json() gagal, tombol tidak pernah hidup lagi.</p><p class=\"mb-4\">Di editor.clincoo.buzz, set loading di awal dan kembalikan di finally, bukan hanya di then. Tunjukkan teks singkat saat gagal.</p><p class=\"mb-4\">Jangan biarkan dua submit paralel. Abaikan klik kedua selama request berjalan.</p><p class=\"mb-4\">Minta AI menambah blok finally. Tempel handler yang hanya punya then dan disable.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang tersimpan. Loading yang rapi menjaga app.clincoo.buzz bisa dikirim ulang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Show Clincoo Fetch Loading, Then Reset the Button at the End",
          desc: "A spinner without a finally branch leaves the button dead after error or success.",
          content: "<p class=\"mb-4\">A Clincoo submit handler disables the button then fetches. If json() fails, the button never comes back.</p><p class=\"mb-4\">In editor.clincoo.buzz, set loading at the start and clear it in finally, not only in then. Show a short message on failure.</p><p class=\"mb-4\">Do not allow two parallel submits. Ignore a second click while the request runs.</p><p class=\"mb-4\">Ask AI to add a finally block. Paste the handler that only has then and disable.</p><p class=\"mb-4\">Clincoo runs the saved script. Clean loading keeps app.clincoo.buzz submittable again.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "fetch-retry-hanya-idempotent",
      langs: {
        "id": {
          title: "Ulangi Fetch Clincoo Hanya untuk Permintaan Idempotent",
          desc: "Retry otomatis pada POST bisa mendobel pesanan. Batasi ulang ke GET yang aman.",
          content: "<p class=\"mb-4\">Skrip Clincoo mengulang fetch tiga kali setiap gagal jaringan. POST checkout terkirim dua kali dan stok berkurang ganda.</p><p class=\"mb-4\">Di editor.clincoo.buzz, retry hanya GET atau request yang kamu tandai idempotent. Untuk POST, biarkan pengguna menekan kirim lagi setelah pesan error.</p><p class=\"mb-4\">Jangan retry 4xx. Status 401 atau 400 tidak sembuh dengan menunggu.</p><p class=\"mb-4\">Minta AI memisahkan cabang retry. Tempel loop ulang yang sekarang menembak semua method.</p><p class=\"mb-4\">Clincoo menjalankan request halamanmu. Retry yang selektif menjaga app.clincoo.buzz tidak menggandakan aksi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Retry Clincoo Fetch Only for Idempotent Requests",
          desc: "Automatic retries on POST can double an order. Limit repeats to safe GET calls.",
          content: "<p class=\"mb-4\">A Clincoo script retries fetch three times on every network failure. A checkout POST fires twice and stock drops twice.</p><p class=\"mb-4\">In editor.clincoo.buzz, retry only GET or requests you mark idempotent. For POST, let the user press send again after an error message.</p><p class=\"mb-4\">Do not retry 4xx. A 401 or 400 will not heal if you wait.</p><p class=\"mb-4\">Ask AI to split the retry branch. Paste the loop that currently retries every method.</p><p class=\"mb-4\">Clincoo runs your page request. Selective retry keeps app.clincoo.buzz from doubling actions.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["fetch"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["fetch"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
