// Clincoo Blog — artikel offline tambahan 2026-09-26
(function(){
  var extra = [
    {
      id: "offline-antrian-simpan-saat-jaringan-putus",
      langs: {
        "id": {
          title: "Antrikan Aksi Simpan Clincoo saat Jaringan Putus lalu Kirim Ulang",
          desc: "Jangan buang form yang sudah diisi. Simpan antrian di localStorage, kirim saat online.",
          content: "<p class=\"mb-4\">Pengunjung mengisi formulir panjang di situs Clincoo lalu menekan Kirim saat sinyal hilang. Data hilang dan mereka harus mengetik ulang.</p><p class=\"mb-4\">Tangkap kegagalan fetch di editor.clincoo.buzz. Simpan payload ke antrean localStorage dengan id unik dan stempel waktu.</p><p class=\"mb-4\">Saat event online muncul, kirim antrean satu per satu. Hapus item hanya setelah respons sukses. Tampilkan sisa antrean di banner.</p><p class=\"mb-4\">Minta AI satu modul queueOffline, bukan rewrite seluruh form. Uji putus jaringan lewat DevTools sebelum deploy.</p><p class=\"mb-4\">Clincoo menayangkan skrip yang kamu simpan. Antrian membuat kerja pengguna tidak terbuang di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Queue Clincoo Save Actions when the Network Drops then Replay Them",
          desc: "Do not discard a filled form. Store a localStorage queue and send it when online.",
          content: "<p class=\"mb-4\">A visitor fills a long Clincoo form and hits Submit as the signal dies. The data is gone and they must type again.</p><p class=\"mb-4\">Catch fetch failures in editor.clincoo.buzz. Save the payload to a localStorage queue with a unique id and timestamp.</p><p class=\"mb-4\">When the online event fires, send the queue one item at a time. Delete an item only after a successful response. Show the remaining count on a banner.</p><p class=\"mb-4\">Ask the AI for one queueOffline module, not a full form rewrite. Test a network drop in DevTools before you deploy.</p><p class=\"mb-4\">Clincoo serves the script you save. A queue keeps user work from being wasted on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "offline-simpan-draf-ke-localstorage",
      langs: {
        "id": {
          title: "Simpan Draf Teks Clincoo ke localStorage sebelum Jaringan Hilang",
          desc: "Autosave ke server gagal saat offline. Tulis draf lokal setiap beberapa detik.",
          content: "<p class=\"mb-4\">Penulis di editor.clincoo.buzz mengetik paragraf lalu kereta masuk terowongan. Autosave server gagal dan draf lenyap.</p><p class=\"mb-4\">Pasang debounce input. Tulis isi textarea ke localStorage dengan kunci per halaman. Pulihkan saat load jika server belum punya versi lebih baru.</p><p class=\"mb-4\">Jangan simpan kata sandi atau data kartu. Batasi ukuran draf. Beri tombol Pulihkan draf agar pengguna sadar ada salinan lokal.</p><p class=\"mb-4\">Minta AI hanya fungsi saveDraft dan restoreDraft. Uji dengan Application tab DevTools, bukan tebak-tebakan.</p><p class=\"mb-4\">Clincoo tidak menyimpan draf otomatis. localStorage menjaga naskah sampai app.clincoo.buzz bisa menerima lagi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Save a Clincoo Text Draft to localStorage before the Network Drops",
          desc: "Server autosave fails offline. Write a local draft every few seconds.",
          content: "<p class=\"mb-4\">A writer in editor.clincoo.buzz types a paragraph then the train enters a tunnel. Server autosave fails and the draft vanishes.</p><p class=\"mb-4\">Attach a debounced input handler. Write the textarea to localStorage with a per-page key. Restore on load if the server has no newer version.</p><p class=\"mb-4\">Do not store passwords or card data. Cap draft size. Offer a Restore draft button so the user knows a local copy exists.</p><p class=\"mb-4\">Ask the AI only for saveDraft and restoreDraft. Test in the DevTools Application tab instead of guessing.</p><p class=\"mb-4\">Clincoo does not autosave drafts for you. localStorage keeps the copy until app.clincoo.buzz can accept it again.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "offline-nonaktifkan-submit-saat-offline",
      langs: {
        "id": {
          title: "Nonaktifkan Tombol Kirim Clincoo saat Peramban Melaporkan Offline",
          desc: "Tombol yang tetap aktif saat offline memicu error diam. Kunci tombol dan jelaskan alasan.",
          content: "<p class=\"mb-4\">Tombol Kirim di situs Clincoo tetap bisa diklik tanpa sinyal. Fetch gagal, spinner berhenti, pengguna mengira formulir rusak.</p><p class=\"mb-4\">Dengarkan offline dan online. Set disabled pada tombol utama dan ubah label menjadi Menunggu jaringan di editor.clincoo.buzz.</p><p class=\"mb-4\">Aktifkan kembali hanya setelah online dan satu ping ringan berhasil. Jangan andalkan navigator.onLine semata.</p><p class=\"mb-4\">Minta AI menambah dua listener dan satu fungsi setSubmitEnabled. Jangan minta rewrite markup seluruh form.</p><p class=\"mb-4\">Clincoo tidak mengunci tombol bawaan. Status tombol yang jujur menjaga kepercayaan di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Disable the Clincoo Submit Button when the Browser Reports Offline",
          desc: "A live button while offline causes a silent error. Lock it and explain why.",
          content: "<p class=\"mb-4\">The Submit button on a Clincoo site stays clickable with no signal. Fetch fails, the spinner stops, and users think the form is broken.</p><p class=\"mb-4\">Listen for offline and online. Disable the main button and change its label to Waiting for network in editor.clincoo.buzz.</p><p class=\"mb-4\">Enable it again only after online plus a light ping succeeds. Do not trust navigator.onLine alone.</p><p class=\"mb-4\">Ask the AI to add two listeners and one setSubmitEnabled helper. Do not request a full form markup rewrite.</p><p class=\"mb-4\">Clincoo does not lock buttons for you. An honest button state keeps trust on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "offline-tampilkan-waktu-sinkron-terakhir",
      langs: {
        "id": {
          title: "Tampilkan Waktu Sinkron Terakhir di Situs Clincoo yang Bisa Offline",
          desc: "Pengguna perlu tahu data lokal sudah usang. Simpan stempel sukses fetch terakhir.",
          content: "<p class=\"mb-4\">Dasbor Clincoo menampilkan angka stok dari cache. Tanpa stempel waktu, petugas mengira data masih baru padahal semalaman offline.</p><p class=\"mb-4\">Setelah fetch sukses, simpan Date.now ke localStorage. Render teks Diperbarui 14:02 di dekat judul pada editor.clincoo.buzz.</p><p class=\"mb-4\">Jika usia data lewat ambang, tambah peringatan Data mungkin usang dengan aria-live polite. Jangan hanya ubah warna.</p><p class=\"mb-4\">Minta AI fungsi formatRelatif dan satu tempat tulis stempel. Uji dengan jam sistem yang digeser di DevTools.</p><p class=\"mb-4\">Clincoo tidak menandai kesegaran data. Stempel sinkron membuat keputusan di app.clincoo.buzz lebih aman.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Show Last Sync Time on a Clincoo Site that Can Go Offline",
          desc: "Users need to know local data is stale. Store a timestamp of the last successful fetch.",
          content: "<p class=\"mb-4\">A Clincoo dashboard shows stock numbers from cache. Without a timestamp, staff think the data is fresh after a night offline.</p><p class=\"mb-4\">After a successful fetch, save Date.now to localStorage. Render Updated 14:02 near the title in editor.clincoo.buzz.</p><p class=\"mb-4\">If the data age passes a threshold, add a Data may be stale warning with aria-live polite. Do not rely on color alone.</p><p class=\"mb-4\">Ask the AI for a relative-time helper and one place to write the stamp. Test by shifting the system clock in DevTools.</p><p class=\"mb-4\">Clincoo does not mark data freshness. A sync stamp makes decisions on app.clincoo.buzz safer.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "offline-uji-mode-offline-devtools",
      langs: {
        "id": {
          title: "Uji Situs Clincoo di Mode Offline DevTools sebelum Menganggap Fitur Siap",
          desc: "Jangan percaya demo di Wi-Fi kantor. Throttle Offline menyingkap asumsi fetch.",
          content: "<p class=\"mb-4\">Fitur Clincoo terlihat lancar di Wi-Fi kantor. Di lapangan fetch gagal dan tidak ada jalur cadangan.</p><p class=\"mb-4\">Buka DevTools Network, pilih Offline, lalu ulangi alur Simpan dan Buka di pratinjau editor.clincoo.buzz.</p><p class=\"mb-4\">Catat tombol yang menggantung, error konsol, dan halaman kosong. Perbaiki satu masalah per commit.</p><p class=\"mb-4\">Minta AI merangkum stack trace yang kamu tempel, bukan menebak tanpa log. Ulangi tes setelah perbaikan.</p><p class=\"mb-4\">Clincoo tidak menguji jaringan untukmu. Mode Offline DevTools adalah gerbang rilis di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test a Clincoo Site in DevTools Offline Mode before Calling the Feature Ready",
          desc: "Do not trust an office Wi-Fi demo. The Offline throttle exposes fetch assumptions.",
          content: "<p class=\"mb-4\">A Clincoo feature looks smooth on office Wi-Fi. In the field the fetch fails and there is no fallback path.</p><p class=\"mb-4\">Open DevTools Network, choose Offline, then repeat the Save and Open flow in the editor.clincoo.buzz preview.</p><p class=\"mb-4\">Note hanging buttons, console errors, and blank pages. Fix one issue per commit.</p><p class=\"mb-4\">Ask the AI to summarize the stack trace you paste, not to guess without a log. Retest after the fix.</p><p class=\"mb-4\">Clincoo does not test the network for you. DevTools Offline mode is a release gate on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["offline"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["offline"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
