// Clincoo Blog — artikel offline tambahan 2026-09-26 (extra2)
(function(){
  var extra = [
    {
      id: "offline-deteksi-kegagalan-fetch-bukan-hanya-online",
      langs: {
        "id": {
          title: "Deteksi Kegagalan Fetch Clincoo, Jangan Andalkan navigator.onLine Saja",
          desc: "navigator.onLine bisa salah. Tangkap error fetch dan tampilkan status nyata ke pengguna.",
          content: "<p class=\"mb-4\">Banner Offline di situs Clincoo menyala padahal fetch berhasil. Atau sebaliknya: status online tetapi Simpan gagal tanpa pesan.</p><p class=\"mb-4\">Di editor.clincoo.buzz, bungkus fetch dengan try/catch. Bedakan TypeError jaringan, HTTP 5xx, dan timeout.</p><p class=\"mb-4\">Update banner dari hasil request, bukan hanya event online. Perbarui status setelah setiap percobaan simpan.</p><p class=\"mb-4\">Minta AI menambah helper fetchWithStatus saja. Tempel fungsi simpan yang sekarang menelan error diam-diam.</p><p class=\"mb-4\">Clincoo tidak menjamin jaringan. Status yang jujur di app.clincoo.buzz menenangkan pengguna di kereta.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Detect Clincoo Fetch Failures; Do Not Rely on navigator.onLine Alone",
          desc: "navigator.onLine can lie. Catch fetch errors and show the real status to users.",
          content: "<p class=\"mb-4\">An Offline banner on a Clincoo site lights up even though fetch succeeded. Or the opposite: status online but Save fails with no message.</p><p class=\"mb-4\">In editor.clincoo.buzz, wrap fetch in try/catch. Distinguish a network TypeError, HTTP 5xx, and a timeout.</p><p class=\"mb-4\">Update the banner from the request result, not only the online event. Set status after each save attempt.</p><p class=\"mb-4\">Ask AI to add only a fetchWithStatus helper. Paste the save function that currently swallows errors silently.</p><p class=\"mb-4\">Clincoo does not guarantee the network. An honest status on app.clincoo.buzz calms users on a train.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "offline-pesan-error-jaringan-yang-jelas",
      langs: {
        "id": {
          title: "Tulis Pesan Error Jaringan Clincoo yang Bisa Ditindaklanjuti",
          desc: "Failed to fetch tidak membantu. Jelaskan apa yang terjadi dan apa yang bisa dicoba pengguna.",
          content: "<p class=\"mb-4\">Pengguna Clincoo melihat Failed to fetch lalu menutup tab. Mereka mengira akun rusak, bukan jaringan.</p><p class=\"mb-4\">Ganti teks teknis di editor.clincoo.buzz. Contoh: Tidak tersambung. Draf tersimpan di perangkat. Coba lagi saat sinyal kembali.</p><p class=\"mb-4\">Sertakan tombol Coba lagi yang memanggil ulang request, bukan reload penuh halaman.</p><p class=\"mb-4\">Minta AI merangkai salinan ID dan EN untuk tiga kasus: offline, timeout, dan server 503. Tempel handler error yang ada.</p><p class=\"mb-4\">Clincoo tidak menerjemahkan stack trace untuk pengunjung. Kalimat jelas menjaga kepercayaan di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Write Clincoo Network Error Copy Users Can Act On",
          desc: "Failed to fetch does not help. Explain what happened and what the user can try next.",
          content: "<p class=\"mb-4\">A Clincoo user sees Failed to fetch and closes the tab. They think the account is broken, not the network.</p><p class=\"mb-4\">Replace technical text in editor.clincoo.buzz. Example: You are offline. The draft is saved on this device. Retry when the signal returns.</p><p class=\"mb-4\">Include a Retry button that repeats the request, not a full page reload.</p><p class=\"mb-4\">Ask AI to draft ID and EN copy for three cases: offline, timeout, and HTTP 503. Paste the current error handler.</p><p class=\"mb-4\">Clincoo does not translate stack traces for visitors. Clear sentences keep trust on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "offline-jangan-hapus-isian-form-saat-gagal-jaringan",
      langs: {
        "id": {
          title: "Jangan Kosongkan Form Clincoo saat Request Jaringan Gagal",
          desc: "Reset form setelah fetch gagal menghapus kerja pengguna. Pertahankan nilai input.",
          content: "<p class=\"mb-4\">Form kontak Clincoo dikirim saat sinyal putus. Halaman mereset field. Pengguna harus mengetik ulang di kereta.</p><p class=\"mb-4\">Di editor.clincoo.buzz, panggil preventDefault dan jangan reset() sebelum respons sukses.</p><p class=\"mb-4\">Simpan nilai ke sessionStorage sebagai cadangan. Pulihkan jika tab masih terbuka setelah gagal.</p><p class=\"mb-4\">Minta AI menandai baris reset yang terlalu awal. Tempel listener submit yang ada, bukan seluruh berkas.</p><p class=\"mb-4\">Clincoo tidak menjaga isian form otomatis. Satu baris yang menahan reset menyelamatkan kerja di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Clear a Clincoo Form when a Network Request Fails",
          desc: "Resetting the form after a failed fetch erases user work. Keep the input values.",
          content: "<p class=\"mb-4\">A Clincoo contact form is submitted as the signal drops. The page resets the fields. The user must type again on a train.</p><p class=\"mb-4\">In editor.clincoo.buzz, call preventDefault and do not reset() before a successful response.</p><p class=\"mb-4\">Save values to sessionStorage as a backup. Restore them if the tab is still open after the failure.</p><p class=\"mb-4\">Ask AI to mark the reset line that runs too early. Paste the existing submit listener, not the whole file.</p><p class=\"mb-4\">Clincoo does not keep form values for you. One line that holds the reset saves work on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "offline-timeout-fetch-agar-ui-tidak-menggantung",
      langs: {
        "id": {
          title: "Pasang Timeout Fetch agar UI Clincoo Tidak Menggantung Offline",
          desc: "Fetch tanpa batas waktu memutar spinner selamanya. AbortController memotong harapan palsu.",
          content: "<p class=\"mb-4\">Tombol Simpan Clincoo berputar tiga menit karena request tidak pernah selesai. Pengguna menekan berkali-kali.</p><p class=\"mb-4\">Pakai AbortController di editor.clincoo.buzz. Batasi 8–12 detik lalu tampilkan timeout, bukan spinner abadi.</p><p class=\"mb-4\">Batalkan request lama jika pengguna menekan lagi. Satu in-flight request per aksi cukup.</p><p class=\"mb-4\">Minta AI menambah wrapper fetch dengan signal saja. Tempel pemanggilan fetch tanpa opsi.</p><p class=\"mb-4\">Clincoo tidak memotong request menggantung. Timeout menjaga UI tetap jujur di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add a Fetch Timeout so Clincoo UI Does Not Hang Offline",
          desc: "A fetch with no deadline spins the spinner forever. AbortController cuts false hope.",
          content: "<p class=\"mb-4\">A Clincoo Save button spins for three minutes because the request never finishes. The user taps it again and again.</p><p class=\"mb-4\">Use AbortController in editor.clincoo.buzz. Cap the wait at 8–12 seconds, then show a timeout instead of an endless spinner.</p><p class=\"mb-4\">Cancel the previous request if the user taps again. One in-flight request per action is enough.</p><p class=\"mb-4\">Ask AI to add only a fetch wrapper with a signal. Paste the fetch call that has no options.</p><p class=\"mb-4\">Clincoo does not cut hanging requests for you. A timeout keeps the UI honest on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "offline-cek-kuota-storage-sebelum-simpan-draf",
      langs: {
        "id": {
          title: "Cek Kuota Storage sebelum Menyimpan Draf Offline Clincoo",
          desc: "QuotaExceededError muncul diam-diam. Periksa estimasi penyimpanan sebelum menulis draf.",
          content: "<p class=\"mb-4\">Draf panjang Clincoo gagal tersimpan di perangkat penuh. Pengguna baru sadar setelah jaringan kembali dan data hilang.</p><p class=\"mb-4\">Panggil navigator.storage.estimate di editor.clincoo.buzz sebelum menulis localStorage atau IndexedDB.</p><p class=\"mb-4\">Jika sisa kecil, minta pengguna menghapus draf lama atau unduh cadangan. Jangan biarkan exception tanpa UI.</p><p class=\"mb-4\">Minta AI menambah pengecekan kuota di fungsi simpan draf. Tempel try/catch QuotaExceededError yang ada.</p><p class=\"mb-4\">Clincoo tidak memperbesar kuota browser. Peringatan awal melindungi kerja di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Check Storage Quota before Saving a Clincoo Offline Draft",
          desc: "QuotaExceededError can fail silently. Estimate storage before writing a draft.",
          content: "<p class=\"mb-4\">A long Clincoo draft fails to save on a full device. The user only notices after the network returns and the data is gone.</p><p class=\"mb-4\">Call navigator.storage.estimate in editor.clincoo.buzz before writing to localStorage or IndexedDB.</p><p class=\"mb-4\">If little space remains, ask the user to delete old drafts or download a backup. Do not leave the exception without UI.</p><p class=\"mb-4\">Ask AI to add a quota check in the draft-save function. Paste the existing QuotaExceededError try/catch.</p><p class=\"mb-4\">Clincoo does not raise the browser quota. An early warning protects work on app.clincoo.buzz.</p>",
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
