// Clincoo Blog — artikel auth tambahan 2026-09-26 WIB
(function(){
  var extra = [
    {
      id: "auth-lockout-sementara-bukan-permanen",
      langs: {
        "id": {
          title: "Kunci Akun Clincoo Sementara, Bukan Permanen",
          desc: "Gagal login berulang yang mengunci selamanya memutus pengguna sah. Jeda bertahap lebih aman.",
          content: "<p class=\"mb-4\">Form Clincoo mengunci akun setelah lima gagal dan hanya admin yang bisa buka. Pengguna sah yang salah ketik kehilangan akses ke app.clincoo.buzz.</p><p class=\"mb-4\">Pakai jeda progresif: 30 detik, dua menit, lalu 15 menit. Simpan hitungan di server, bukan di klien editor.clincoo.buzz.</p><p class=\"mb-4\">Tampilkan sisa waktu, bukan jumlah percobaan tersisa yang membantu penyerang.</p><p class=\"mb-4\">Minta AI hanya menambah lockout bertahap. Tempel handler login saat ini.</p><p class=\"mb-4\">Clincoo merender alur yang kamu tulis. Lockout sementara menahan tebak sandi tanpa mengunci permanen di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Lock a Clincoo Account Temporarily, Not Forever",
          desc: "Repeated failed logins that lock forever cut off real users. A staged delay is safer.",
          content: "<p class=\"mb-4\">A Clincoo form locks the account after five failures and only an admin can reopen it. A real user who mistypes loses app.clincoo.buzz.</p><p class=\"mb-4\">Use a progressive delay: 30 seconds, two minutes, then 15 minutes. Store the count on the server, not in the editor.clincoo.buzz client.</p><p class=\"mb-4\">Show remaining wait time, not remaining attempts that help an attacker.</p><p class=\"mb-4\">Ask AI to add staged lockout only. Paste the current login handler.</p><p class=\"mb-4\">Clincoo renders the flow you write. Temporary lockout slows password guessing without a permanent lock on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "auth-verifikasi-email-sebelum-aksi-sensitif",
      langs: {
        "id": {
          title: "Verifikasi Email Clincoo sebelum Aksi Sensitif",
          desc: "Ganti email atau hapus proyek tanpa konfirmasi inbox memudahkan akun hijack.",
          content: "<p class=\"mb-4\">Halaman Clincoo mengganti alamat email langsung dari form. Siapa yang sudah masuk bisa mengalihkan pemulihan ke kotak masuk lain.</p><p class=\"mb-4\">Kirim tautan konfirmasi ke email lama dan email baru. Tahan aksi hapus proyek, ganti pemilik, atau unduh ekspor sampai tautan diklik di editor.clincoo.buzz.</p><p class=\"mb-4\">Samakan pesan sukses agar enumerasi email tidak bocor.</p><p class=\"mb-4\">Minta AI hanya menambah langkah verifikasi. Tempel form pengaturan akun.</p><p class=\"mb-4\">Clincoo menayangkan alur yang kamu tempel. Konfirmasi inbox melindungi aksi sensitif di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Verify the Clincoo Email before Sensitive Actions",
          desc: "Changing email or deleting a project without an inbox check makes account hijack easy.",
          content: "<p class=\"mb-4\">A Clincoo page changes the email address straight from a form. Anyone already signed in can move recovery to another inbox.</p><p class=\"mb-4\">Send a confirm link to the old and new address. Hold delete-project, owner-change, or export download until the link is clicked in editor.clincoo.buzz.</p><p class=\"mb-4\">Keep the success copy generic so email enumeration does not leak.</p><p class=\"mb-4\">Ask AI to add the verification step only. Paste the account-settings form.</p><p class=\"mb-4\">Clincoo ships the flow you paste. Inbox confirmation protects sensitive actions on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["auth"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["auth"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
