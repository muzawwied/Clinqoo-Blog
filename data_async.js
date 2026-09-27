// Clincoo Blog — Data kategori: async
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["async"] = {
  names: { "id": "Async", "en": "Async" },
  flag: "⏳",
  articles: [
    {
      id: "async-await-try-catch-satu-fetch",
      langs: {
        "id": {
          title: "Bungkus Satu Fetch Clincoo dengan async/await dan try/catch",
          desc: "Promise tanpa catch meninggalkan spinner. Satu fungsi async membuat alur gagal terlihat.",
          content: "<p class=\"mb-4\">Skrip Clincoo sering memanggil fetch lalu .then berlapis. Jika jaringan gagal, tombol tetap disabled.</p><p class=\"mb-4\">Tulis async function load() { try { const r = await fetch(url); if (!r.ok) throw new Error(r.status); const data = await r.json(); } catch (e) { tampilkan pesan; } finally { aktifkan tombol; } }</p><p class=\"mb-4\">Jangan campur .then dan await di fungsi yang sama. Pilih satu gaya agar AI tidak menumpuk rantai.</p><p class=\"mb-4\">Uji di editor.clincoo.buzz dengan URL salah sekali. Pesan error harus muncul tanpa reload.</p><p class=\"mb-4\">Clincoo menjalankan JS yang kamu simpan. try/catch pada satu fetch menjaga pratinjau app.clincoo.buzz tetap bisa dipakai.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Wrap One Clincoo Fetch in async/await and try/catch",
          desc: "A Promise without catch leaves the spinner spinning. One async function makes failure visible.",
          content: "<p class=\"mb-4\">Clincoo scripts often call fetch then stack .then. If the network fails, the button stays disabled.</p><p class=\"mb-4\">Write async function load() { try { const r = await fetch(url); if (!r.ok) throw new Error(r.status); const data = await r.json(); } catch (e) { show a message; } finally { enable the button; } }</p><p class=\"mb-4\">Do not mix .then and await in the same function. Pick one style so the AI does not pile chains.</p><p class=\"mb-4\">Test in editor.clincoo.buzz with one bad URL. The error message must appear without a reload.</p><p class=\"mb-4\">Clincoo runs the JS you save. try/catch on one fetch keeps the app.clincoo.buzz preview usable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "async-allsettled-bukan-all-gagal-satu",
      langs: {
        "id": {
          title: "Pakai Promise.allSettled, Bukan all, saat Satu Sumber Clincoo Gagal",
          desc: "Promise.all batal semua jika satu reject. allSettled tetap menampilkan hasil yang sukses.",
          content: "<p class=\"mb-4\">Dashboard Clincoo memuat tiga endpoint. Satu 404 membuat seluruh kartu kosong jika kamu memakai Promise.all.</p><p class=\"mb-4\">Ganti ke Promise.allSettled([fetchA, fetchB, fetchC]). Baca status fulfilled atau rejected per item.</p><p class=\"mb-4\">Jangan diamkan rejected. Tampilkan placeholder pada kartu yang gagal, biarkan kartu lain tetap isi.</p><p class=\"mb-4\">Minta AI hanya mengganti all menjadi allSettled plus cabang status. Jangan rewrite seluruh modul.</p><p class=\"mb-4\">Clincoo menayangkan data yang sampai. allSettled menjaga halaman parsial lebih baik daripada layar kosong.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Promise.allSettled, Not all, When One Clincoo Source Fails",
          desc: "Promise.all cancels everything if one rejects. allSettled still shows the successful results.",
          content: "<p class=\"mb-4\">A Clincoo dashboard loads three endpoints. One 404 empties every card if you use Promise.all.</p><p class=\"mb-4\">Switch to Promise.allSettled([fetchA, fetchB, fetchC]). Read fulfilled or rejected per item.</p><p class=\"mb-4\">Do not swallow rejected. Show a placeholder on the failed card and keep the others filled.</p><p class=\"mb-4\">Ask the AI only to swap all for allSettled plus a status branch. Do not rewrite the whole module.</p><p class=\"mb-4\">Clincoo renders the data that arrives. allSettled keeps a partial page better than a blank screen.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "async-abortcontroller-batal-fetch-lama",
      langs: {
        "id": {
          title: "Batalkan Fetch Lama Clincoo dengan AbortController",
          desc: "Pencarian cepat menumpuk respons acak. Abort request sebelumnya sebelum fetch baru.",
          content: "<p class=\"mb-4\">Kolom cari di proyek Clincoo menembak fetch setiap keystroke. Respons lambat menimpa hasil terbaru.</p><p class=\"mb-4\">Simpan AbortController di variabel. Pada input berikutnya panggil abort() lalu buat controller baru dan kirim signal ke fetch.</p><p class=\"mb-4\">Tangkap error name === 'AbortError' dan jangan tampilkan sebagai gagal jaringan.</p><p class=\"mb-4\">Uji di editor.clincoo.buzz dengan mengetik cepat. Hanya hasil terakhir yang boleh mengisi daftar.</p><p class=\"mb-4\">Clincoo tidak membatalkan fetch otomatis. AbortController menjaga urutan hasil di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Cancel a Stale Clincoo Fetch with AbortController",
          desc: "Fast search stacks random responses. Abort the previous request before a new fetch.",
          content: "<p class=\"mb-4\">A search field in a Clincoo project fires fetch on every keystroke. A slow response overwrites the newest result.</p><p class=\"mb-4\">Keep an AbortController in a variable. On the next input call abort(), create a new controller, and pass signal to fetch.</p><p class=\"mb-4\">Catch error name === 'AbortError' and do not show it as a network failure.</p><p class=\"mb-4\">Test in editor.clincoo.buzz by typing quickly. Only the last result should fill the list.</p><p class=\"mb-4\">Clincoo does not cancel fetch for you. AbortController keeps result order on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "async-jangan-lupa-await-di-loop",
      langs: {
        "id": {
          title: "Jangan Lupa await di dalam Loop pada Skrip Clincoo",
          desc: "for tanpa await menembak semua request sekaligus. Urutan dan batas rate rusak.",
          content: "<p class=\"mb-4\">AI sering menulis for (const id of ids) { fetch('/item/' + id) } tanpa await. Server menerima ledakan paralel.</p><p class=\"mb-4\">Jika urutan penting, tulis for ... { const r = await fetch(...) }. Jika paralel aman, kumpulkan Promise lalu allSettled.</p><p class=\"mb-4\">Jangan await di dalam forEach; forEach tidak menunggu async callback.</p><p class=\"mb-4\">Minta AI menandai loop mana yang wajib berurutan. Satu perubahan per permintaan.</p><p class=\"mb-4\">Clincoo menjalankan loop di browser pengguna. await yang sadar menjaga kuota dan urutan data.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Skip await inside Loops in Clincoo Scripts",
          desc: "A for loop without await fires every request at once. Order and rate limits break.",
          content: "<p class=\"mb-4\">The AI often writes for (const id of ids) { fetch('/item/' + id) } without await. The server gets a parallel burst.</p><p class=\"mb-4\">If order matters, write for ... { const r = await fetch(...) }. If parallel is safe, collect Promises then allSettled.</p><p class=\"mb-4\">Do not await inside forEach; forEach does not wait for an async callback.</p><p class=\"mb-4\">Ask the AI to mark which loop must stay sequential. One change per request.</p><p class=\"mb-4\">Clincoo runs the loop in the visitor browser. Conscious await protects quota and data order.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "async-race-timeout-permintaan-lambat",
      langs: {
        "id": {
          title: "Pasang Timeout Fetch Clincoo dengan Promise.race",
          desc: "fetch tanpa batas bisa menggantung UI. Race dengan timer memberi jalan keluar.",
          content: "<p class=\"mb-4\">Pratinjau Clincoo menunggu API pihak ketiga yang tidak menjawab. Spinner tidak pernah selesai.</p><p class=\"mb-4\">Buat Promise timeout yang reject setelah 8 detik. Promise.race([fetch(url), timeout]) memaksa cabang gagal.</p><p class=\"mb-4\">Bersihkan timer di finally agar tidak menumpuk di background.</p><p class=\"mb-4\">Jangan timeout 500ms untuk unggahan. Sesuaikan batas dengan jenis permintaan.</p><p class=\"mb-4\">Clincoo tidak memotong fetch sendiri. Timeout eksplisit menjaga editor.clincoo.buzz tetap responsif.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add a Clincoo Fetch Timeout with Promise.race",
          desc: "A fetch with no limit can hang the UI. Racing a timer gives an exit.",
          content: "<p class=\"mb-4\">A Clincoo preview waits on a third-party API that never answers. The spinner never ends.</p><p class=\"mb-4\">Make a timeout Promise that rejects after 8 seconds. Promise.race([fetch(url), timeout]) forces the fail branch.</p><p class=\"mb-4\">Clear the timer in finally so it does not pile up in the background.</p><p class=\"mb-4\">Do not use a 500ms timeout for uploads. Match the limit to the request type.</p><p class=\"mb-4\">Clincoo does not cut fetch by itself. An explicit timeout keeps editor.clincoo.buzz responsive.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
