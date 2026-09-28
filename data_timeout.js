// Clincoo Blog — Data kategori: timeout
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["timeout"] = {
  names: { "id": "Timeout", "en": "Timeout" },
  flag: "⏱",
  articles: [
    {
      id: "timeout-abortcontroller-fetch-clincoo",
      langs: {
        "id": {
          title: "Batasi Fetch Clincoo dengan AbortController, Jangan Spinner Abadi",
          desc: "Tanpa timeout, fetch yang macet menahan tombol simpan. Abort setelah beberapa detik.",
          content: "<p class=\"mb-4\">Form Clincoo menunggu API tanpa batas. Pengunjung mengira tombol rusak.</p><p class=\"mb-4\">Buat AbortController. Beri signal ke fetch. setTimeout memanggil abort() setelah 8–15 detik.</p><p class=\"mb-4\">Tangkap DOMException AbortError terpisah dari gagal jaringan. Tampilkan pesan coba lagi.</p><p class=\"mb-4\">Minta AI menulis pola abort + finally spinner. Tempel fetch dari editor.clincoo.buzz.</p><p class=\"mb-4\">Setelah timeout ada, app.clincoo.buzz tidak menggantung saat API diam.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Bound a Clincoo Fetch with AbortController; Do Not Spin Forever",
          desc: "Without a timeout, a stuck fetch holds the save button. Abort after a few seconds.",
          content: "<p class=\"mb-4\">A Clincoo form waits on the API with no limit. Visitors think the button is broken.</p><p class=\"mb-4\">Create an AbortController. Pass its signal to fetch. setTimeout calls abort() after 8–15 seconds.</p><p class=\"mb-4\">Catch AbortError separately from a network failure. Show a retry message.</p><p class=\"mb-4\">Ask AI for an abort + finally spinner pattern. Paste the fetch from editor.clincoo.buzz.</p><p class=\"mb-4\">Once a timeout exists, app.clincoo.buzz does not hang when the API stays silent.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "timeout-pesan-jelas-bukan-spinner",
      langs: {
        "id": {
          title: "Ganti Spinner Lama Clincoo dengan Pesan Timeout yang Jelas",
          desc: "Spinner tanpa teks setelah 10 detik terasa macet. Tulis apa yang gagal dan apa langkah berikutnya.",
          content: "<p class=\"mb-4\">Pratinjau Clincoo memutar ikon tanpa angka. Pengunjung menutup tab.</p><p class=\"mb-4\">Setelah abort atau timer, ganti spinner jadi kalimat: permintaan habis waktu, coba lagi, atau periksa jaringan.</p><p class=\"mb-4\">Jangan biarkan tombol disabled selamanya. Aktifkan kembali di finally.</p><p class=\"mb-4\">Minta AI merancang tiga state: loading, timeout, sukses. Tempel markup dari editor.clincoo.buzz.</p><p class=\"mb-4\">Pesan jelas di app.clincoo.buzz mengurangi tiket halaman hang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Replace a Long Clincoo Spinner with a Clear Timeout Message",
          desc: "A spinner with no text after 10 seconds feels frozen. Say what failed and what to do next.",
          content: "<p class=\"mb-4\">A Clincoo preview spins an icon with no number. Visitors close the tab.</p><p class=\"mb-4\">After abort or a timer, swap the spinner for a sentence: the request timed out, retry, or check the network.</p><p class=\"mb-4\">Do not leave the button disabled forever. Re-enable it in finally.</p><p class=\"mb-4\">Ask AI for three states: loading, timeout, success. Paste markup from editor.clincoo.buzz.</p><p class=\"mb-4\">A clear message on app.clincoo.buzz cuts page hung tickets.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "timeout-promise-race-batas-waktu",
      langs: {
        "id": {
          title: "Bungkus Promise Clincoo dengan Race agar Ada Batas Waktu",
          desc: "Promise tanpa race bisa menggantung selamanya. Selesaikan lebih dulu antara hasil atau timer.",
          content: "<p class=\"mb-4\">Skrip Clincoo menunggu Promise unggah tanpa batas. Pratinjau tampak beku.</p><p class=\"mb-4\">Gunakan Promise.race antara pekerjaan asli dan Promise yang reject setelah N detik.</p><p class=\"mb-4\">Tolak timer dengan Error bernama TimeoutError supaya cabang catch bisa membedakannya.</p><p class=\"mb-4\">Minta AI menulis helper raceTimeout(promise, ms). Tempel pemanggilan dari editor.clincoo.buzz.</p><p class=\"mb-4\">Di app.clincoo.buzz, unggah yang macet berhenti dan tombol hidup lagi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Wrap a Clincoo Promise with Race so It Has a Time Limit",
          desc: "A Promise without race can hang forever. Settle the work or the timer first.",
          content: "<p class=\"mb-4\">A Clincoo script waits on an upload Promise with no cap. Preview looks frozen.</p><p class=\"mb-4\">Use Promise.race between the real work and a Promise that rejects after N seconds.</p><p class=\"mb-4\">Reject the timer with a named TimeoutError so the catch branch can tell them apart.</p><p class=\"mb-4\">Ask AI for a raceTimeout(promise, ms) helper. Paste the call from editor.clincoo.buzz.</p><p class=\"mb-4\">On app.clincoo.buzz a stuck upload stops and the button comes back.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "timeout-bersihkan-timer-saat-navigasi",
      langs: {
        "id": {
          title: "Hapus Timer Timeout Clincoo Saat Pengunjung Pindah Halaman",
          desc: "setTimeout yang tidak di-clear tetap menembak setelah route berubah dan merusak state baru.",
          content: "<p class=\"mb-4\">Halaman Clincoo menyimpan id timer di variabel lokal. Pengunjung sudah pindah, alert masih muncul.</p><p class=\"mb-4\">Simpan id setTimeout. Pada beforeunload, popstate, atau teardown komponen, panggil clearTimeout.</p><p class=\"mb-4\">AbortController yang sama juga di-abort agar fetch lama tidak menulis DOM yang sudah diganti.</p><p class=\"mb-4\">Minta AI menandai semua timer di berkas. Tempel listener dari editor.clincoo.buzz.</p><p class=\"mb-4\">Navigasi di app.clincoo.buzz tidak lagi memunculkan pesan timeout halaman lama.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Clear Clincoo Timeout Timers When the Visitor Leaves the Page",
          desc: "An uncleared setTimeout still fires after the route changes and corrupts the new state.",
          content: "<p class=\"mb-4\">A Clincoo page stores a timer id in a local variable. The visitor already left, the alert still pops.</p><p class=\"mb-4\">Keep the setTimeout id. On beforeunload, popstate, or component teardown, call clearTimeout.</p><p class=\"mb-4\">Abort the same AbortController so an old fetch does not write a replaced DOM.</p><p class=\"mb-4\">Ask AI to mark every timer in the file. Paste the listeners from editor.clincoo.buzz.</p><p class=\"mb-4\">Navigation on app.clincoo.buzz no longer shows a timeout from the previous page.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "timeout-retry-terbatas-setelah-habis-waktu",
      langs: {
        "id": {
          title: "Ulangi Permintaan Clincoo yang Timeout, Tapi Batasi Jumlahnya",
          desc: "Satu timeout bukan alasan mengulang tanpa batas. Tetapkan retry, jeda, dan kondisi berhenti.",
          content: "<p class=\"mb-4\">Form Clincoo mengirim ulang otomatis setiap kali habis waktu. Server kebanjiran.</p><p class=\"mb-4\">Izinkan 1-2 retry dengan jeda 1-3 detik. Berhenti jika AbortError dari pengguna atau status 4xx.</p><p class=\"mb-4\">Tampilkan sisa percobaan di UI supaya pengunjung tahu sistem masih bekerja.</p><p class=\"mb-4\">Minta AI menulis loop retry + backoff. Tempel fetch dari editor.clincoo.buzz.</p><p class=\"mb-4\">app.clincoo.buzz pulih dari API sesaat tanpa menembak request tanpa henti.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Retry a Timed-Out Clincoo Request, but Cap How Many Times",
          desc: "One timeout is not a reason to retry forever. Set retries, delay, and a stop condition.",
          content: "<p class=\"mb-4\">A Clincoo form resends automatically on every timeout. The server floods.</p><p class=\"mb-4\">Allow 1-2 retries with a 1-3 second gap. Stop on a user AbortError or a 4xx status.</p><p class=\"mb-4\">Show remaining attempts in the UI so visitors know the system is still working.</p><p class=\"mb-4\">Ask AI for a retry + backoff loop. Paste the fetch from editor.clincoo.buzz.</p><p class=\"mb-4\">app.clincoo.buzz recovers from a brief API stall without firing requests endlessly.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "timeout-beda-jaringan-dan-server-lambat",
      langs: {
        "id": {
          title: "Bedakan Timeout Jaringan dan Server Lambat di Clincoo",
          desc: "Satu pesan gagal menyembunyikan penyebab. Pisahkan offline, abort, dan HTTP 504.",
          content: "<p class=\"mb-4\">Dashboard Clincoo menampilkan Gagal untuk semua kasus. Pengunjung tidak tahu harus cek Wi-Fi atau coba nanti.</p><p class=\"mb-4\">navigator.onLine false berarti pesan jaringan. AbortError berarti habis waktu klien. Respons 504 atau 408 berarti server lambat.</p><p class=\"mb-4\">Log kode ke console.error agar debug di DevTools cepat. Jangan log isi form.</p><p class=\"mb-4\">Minta AI membuat peta error ke tiga teks UI. Tempel handler dari editor.clincoo.buzz.</p><p class=\"mb-4\">Tiket di app.clincoo.buzz jadi spesifik, bukan tombol tidak jalan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Tell Network Timeouts from a Slow Server in Clincoo",
          desc: "One failed label hides the cause. Split offline, abort, and HTTP 504.",
          content: "<p class=\"mb-4\">A Clincoo dashboard shows Failed for every case. Visitors do not know to check Wi-Fi or try later.</p><p class=\"mb-4\">navigator.onLine false means network copy. AbortError means client time limit. 504 or 408 means slow server.</p><p class=\"mb-4\">Log the code with console.error so DevTools debug is fast. Do not log form values.</p><p class=\"mb-4\">Ask AI to map errors to three UI strings. Paste the handler from editor.clincoo.buzz.</p><p class=\"mb-4\">Tickets on app.clincoo.buzz become specific instead of a broken button report.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "timeout-input-lama-bukan-fetch-menggantung",
      langs: {
        "id": {
          title: "Batasi Waktu Tunggu Input Clincoo, Jangan Biarkan Fetch Menggantung",
          desc: "Pengunjung mengetik lama lalu fetch menumpuk. Gabungkan debounce dengan timeout request.",
          content: "<p class=\"mb-4\">Kolom cari Clincoo menembak fetch setiap huruf. Empat permintaan lama selesai acak.</p><p class=\"mb-4\">Debounce 300-500 ms sebelum fetch. Setiap fetch baru meng-abort yang sebelumnya.</p><p class=\"mb-4\">Timeout tetap ada pada fetch terakhir supaya hasil kosong tidak menunggu selamanya.</p><p class=\"mb-4\">Minta AI menggabungkan debounce dan AbortController. Tempel input dari editor.clincoo.buzz.</p><p class=\"mb-4\">Pencarian di app.clincoo.buzz menampilkan satu hasil terkini, bukan balapan respons.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Cap How Long Clincoo Waits on Input; Do Not Let Fetches Pile Up",
          desc: "A visitor types slowly and fetches stack. Combine debounce with a request timeout.",
          content: "<p class=\"mb-4\">A Clincoo search field fires a fetch on every key. Four old requests finish out of order.</p><p class=\"mb-4\">Debounce 300-500 ms before fetch. Each new fetch aborts the previous one.</p><p class=\"mb-4\">Keep a timeout on the last fetch so an empty result does not wait forever.</p><p class=\"mb-4\">Ask AI to combine debounce and AbortController. Paste the input from editor.clincoo.buzz.</p><p class=\"mb-4\">Search on app.clincoo.buzz shows one current result, not a race of responses.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "timeout-settimeout-bukan-setinterval-polling",
      langs: {
        "id": {
          title: "Pakai setTimeout Berantai untuk Polling Clincoo, Bukan setInterval Tetap",
          desc: "setInterval menumpuk jika pekerjaan lebih lama dari interval. Jadwalkan tick berikutnya setelah yang lama selesai.",
          content: "<p class=\"mb-4\">Dashboard Clincoo memanggil API tiap 2 detik dengan setInterval. Saat jaringan lambat, tiga request jalan bersamaan.</p><p class=\"mb-4\">Ganti dengan fungsi tick yang fetch, lalu setTimeout(tick, jeda) hanya di finally. Jangan jadwalkan tick baru sebelum yang lama selesai.</p><p class=\"mb-4\">Tambah AbortController per tick dan batas total polling. Hentikan saat tab tersembunyi atau pengguna logout.</p><p class=\"mb-4\">Minta AI mengubah satu setInterval jadi rantai setTimeout. Tempel loop dari editor.clincoo.buzz.</p><p class=\"mb-4\">Polling di app.clincoo.buzz tidak lagi menumpuk request saat API lambat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Chain setTimeout for Clincoo Polling, Not a Fixed setInterval",
          desc: "setInterval stacks work if a job lasts longer than the interval. Schedule the next tick after the last one finishes.",
          content: "<p class=\"mb-4\">A Clincoo dashboard hits the API every 2 seconds with setInterval. When the network is slow, three requests run at once.</p><p class=\"mb-4\">Replace it with a tick function that fetches, then setTimeout(tick, delay) only in finally. Do not schedule the next tick before the last one ends.</p><p class=\"mb-4\">Add an AbortController per tick and a total polling cap. Stop when the tab is hidden or the user logs out.</p><p class=\"mb-4\">Ask AI to turn one setInterval into a setTimeout chain. Paste the loop from editor.clincoo.buzz.</p><p class=\"mb-4\">Polling on app.clincoo.buzz no longer stacks requests when the API is slow.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "timeout-visibilitychange-jeda-timer",
      langs: {
        "id": {
          title: "Jeda Timer Timeout Clincoo saat Tab Tidak Terlihat",
          desc: "Timer tetap jalan di tab latar dan menembak alert di halaman yang sudah ditinggalkan. Hormati visibilitychange.",
          content: "<p class=\"mb-4\">Pengunjung Clincoo pindah tab. setTimeout tetap meng-abort fetch dan menampilkan toast di tab yang tidak dilihat.</p><p class=\"mb-4\">Pasang document.visibilitychange. Jika hidden, clearTimeout dan abort. Jika visible lagi, mulai ulang timer dari awal.</p><p class=\"mb-4\">Jangan mengandalkan angka sisa yang sudah berjalan di latar. Waktu di latar bukan waktu pengguna.</p><p class=\"mb-4\">Minta AI menambah listener visibilitychange pada satu timer. Tempel skrip dari editor.clincoo.buzz.</p><p class=\"mb-4\">Tab app.clincoo.buzz yang tersembunyi tidak lagi memicu timeout palsu.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Pause Clincoo Timeout Timers When the Tab Is Hidden",
          desc: "Timers keep running in a background tab and fire alerts on a page the visitor left. Honor visibilitychange.",
          content: "<p class=\"mb-4\">A Clincoo visitor switches tabs. setTimeout still aborts the fetch and shows a toast on a tab they are not watching.</p><p class=\"mb-4\">Listen to document.visibilitychange. If hidden, clearTimeout and abort. If visible again, restart the timer from zero.</p><p class=\"mb-4\">Do not trust leftover milliseconds from the background. Background time is not user time.</p><p class=\"mb-4\">Ask AI to add a visibilitychange listener on one timer. Paste the script from editor.clincoo.buzz.</p><p class=\"mb-4\">A hidden app.clincoo.buzz tab no longer fires a false timeout.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "timeout-ux-countdown-sisa-detik",
      langs: {
        "id": {
          title: "Tampilkan Hitungan Mundur Timeout Clincoo, Jangan Diam Saja",
          desc: "Pengunjung tidak tahu berapa lama sistem masih menunggu. Angka detik membuat spinner terasa jujur.",
          content: "<p class=\"mb-4\">Form Clincoo memutar ikon 12 detik tanpa angka. Pengunjung mengira halaman beku dan menekan ulang.</p><p class=\"mb-4\">Simpan deadline Date.now()+ms. Tiap 250–500 ms perbarui teks sisa detik di pratinjau editor.clincoo.buzz.</p><p class=\"mb-4\">Saat sisa 0, abort dan ganti teks jadi habis waktu. Hapus interval di finally agar tidak bocor.</p><p class=\"mb-4\">Minta AI menulis countdown terikat AbortController. Tempel markup spinner saja.</p><p class=\"mb-4\">Hitungan mundur di app.clincoo.buzz menahan klik ganda karena pengguna melihat sisa waktu.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Show a Clincoo Timeout Countdown; Do Not Stay Silent",
          desc: "Visitors cannot tell how long the system will wait. A second count makes the spinner feel honest.",
          content: "<p class=\"mb-4\">A Clincoo form spins an icon for 12 seconds with no number. Visitors think the page froze and click again.</p><p class=\"mb-4\">Store a deadline Date.now()+ms. Every 250–500 ms update remaining seconds in the editor.clincoo.buzz preview.</p><p class=\"mb-4\">At 0, abort and swap the text to timed out. Clear the interval in finally so it does not leak.</p><p class=\"mb-4\">Ask AI for a countdown tied to AbortController. Paste the spinner markup only.</p><p class=\"mb-4\">A countdown on app.clincoo.buzz cuts double clicks because people see time left.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "timeout-jangan-timeout-aksi-lokal",
      langs: {
        "id": {
          title: "Jangan Pasang Timeout pada Aksi Lokal Clincoo yang Sudah Selesai",
          desc: "Validasi form dan tulis localStorage tidak butuh abort 8 detik. Timeout hanya untuk I/O yang bisa menggantung.",
          content: "<p class=\"mb-4\">Tombol simpan Clincoo memulai timer 10 detik meski hanya menulis localStorage. Alert timeout muncul setelah sukses.</p><p class=\"mb-4\">Batasi AbortController dan Promise.race pada fetch, unggah, dan worker. Aksi sinkron selesai tanpa timer.</p><p class=\"mb-4\">Jika campuran lokal plus API, timeout hanya cabang jaringan. Cabang lokal langsung tutup spinner.</p><p class=\"mb-4\">Minta AI memisahkan path lokal dan fetch. Tempel handler tombol dari editor.clincoo.buzz.</p><p class=\"mb-4\">app.clincoo.buzz tidak lagi menampilkan habis waktu pada aksi yang sudah selesai di perangkat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Put a Timeout on Local Clincoo Actions That Already Finished",
          desc: "Form validation and localStorage writes do not need an 8 second abort. Timeouts are for I/O that can hang.",
          content: "<p class=\"mb-4\">A Clincoo save button starts a 10 second timer even though it only writes localStorage. A timeout alert appears after success.</p><p class=\"mb-4\">Limit AbortController and Promise.race to fetch, upload, and workers. Sync work finishes with no timer.</p><p class=\"mb-4\">If local work mixes with an API call, timeout only the network branch. The local branch should hide the spinner at once.</p><p class=\"mb-4\">Ask AI to split the local path from fetch. Paste the button handler from editor.clincoo.buzz.</p><p class=\"mb-4\">app.clincoo.buzz no longer shows timed out on work that already finished on the device.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "timeout-satu-batas-per-jenis-request",
      langs: {
        "id": {
          title: "Samakan Batas Waktu per Jenis Request Clincoo, Jangan Acak",
          desc: "Cari 3 detik dan unggah 3 detik membuat unggah sering gagal. Satu kebijakan per jenis I/O.",
          content: "<p class=\"mb-4\">Proyek Clincoo memakai 3000 ms untuk semua fetch. Unggah gambar selalu habis waktu, pencarian terasa lambat dibatalkan.</p><p class=\"mb-4\">Tetapkan peta: cari 8 detik, simpan 15 detik, unggah 30–60 detik. Simpan angka di satu modul, bukan tersebar.</p><p class=\"mb-4\">Tampilkan jenis request di pesan timeout agar debug di editor.clincoo.buzz cepat.</p><p class=\"mb-4\">Minta AI mengekstrak konstanta timeout per jenis. Tempel tiga pemanggilan fetch.</p><p class=\"mb-4\">Kebijakan seragam di app.clincoo.buzz mengurangi gagal semu pada unggah besar.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use One Time Limit per Clincoo Request Type, Not Random Numbers",
          desc: "Search at 3 seconds and upload at 3 seconds makes uploads fail often. One policy per I/O type.",
          content: "<p class=\"mb-4\">A Clincoo project uses 3000 ms for every fetch. Image uploads always time out; search feels cancelled too soon.</p><p class=\"mb-4\">Set a map: search 8 seconds, save 15 seconds, upload 30–60 seconds. Keep the numbers in one module, not scattered.</p><p class=\"mb-4\">Show the request type in the timeout message so debug in editor.clincoo.buzz is fast.</p><p class=\"mb-4\">Ask AI to extract timeout constants per type. Paste three fetch calls.</p><p class=\"mb-4\">A shared policy on app.clincoo.buzz cuts false failures on large uploads.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
