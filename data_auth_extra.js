// Clincoo Blog — artikel auth tambahan 2026-09-26 WIB
(function(){
  var extra = [
    {
      id: "auth-jangan-simpan-jwt-localstorage",
      langs: {
        "id": {
          title: "Jangan Simpan JWT di localStorage Clincoo",
          desc: "Token di localStorage mudah dibaca skrip. Pakai cookie HttpOnly atau memori sesi.",
          content: "<p class=\"mb-4\">Halaman Clincoo menaruh JWT di localStorage agar fetch mudah. XSS kecil bisa menyalin token ke situs lain.</p><p class=\"mb-4\">Pindahkan token ke cookie HttpOnly Secure SameSite=Lax, atau simpan hanya di memori tab. Jangan tulis Authorization ke storage di editor.clincoo.buzz.</p><p class=\"mb-4\">Jika harus bertahan setelah reload, biarkan server yang set cookie. Klien hanya mengirim kredensial sekali.</p><p class=\"mb-4\">Minta AI hanya memindahkan penyimpanan token. Tempel cuplikan login dan fetch.</p><p class=\"mb-4\">Clincoo merender skrip yang kamu tempel. Token di luar localStorage lebih aman di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Store JWTs in Clincoo localStorage",
          desc: "Tokens in localStorage are readable by any script. Use an HttpOnly cookie or session memory.",
          content: "<p class=\"mb-4\">A Clincoo page puts the JWT in localStorage so fetch is easy. A small XSS can copy the token to another site.</p><p class=\"mb-4\">Move the token to an HttpOnly Secure SameSite=Lax cookie, or keep it only in tab memory. Do not write Authorization into storage in editor.clincoo.buzz.</p><p class=\"mb-4\">If it must survive a reload, let the server set the cookie. The client sends credentials once.</p><p class=\"mb-4\">Ask AI to move token storage only. Paste the login and fetch snippets.</p><p class=\"mb-4\">Clincoo renders the script you paste. A token outside localStorage is safer on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "auth-fokus-pesan-error-login",
      langs: {
        "id": {
          title: "Fokuskan Field Error setelah Login Clincoo Gagal",
          desc: "Pesan error tanpa fokus membuat pengguna mencari field yang salah. Pindahkan fokus ke input.",
          content: "<p class=\"mb-4\">Form login Clincoo menampilkan teks merah di atas, tetapi kursor tetap di tombol kirim. Pengguna tidak tahu field mana yang diisi ulang.</p><p class=\"mb-4\">Setelah respons gagal, set focus ke input email atau sandi di editor.clincoo.buzz. Tambah aria-invalid dan tautkan aria-describedby ke pesan.</p><p class=\"mb-4\">Jangan hapus nilai email yang sudah benar. Hanya kosongkan sandi jika kebijakan kamu menuntut itu.</p><p class=\"mb-4\">Minta AI hanya menambah fokus dan atribut error. Tempel markup form login.</p><p class=\"mb-4\">Clincoo merender form apa adanya. Fokus yang tepat mempercepat perbaikan di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Move Focus to the Error Field after Clincoo Login Fails",
          desc: "An error message without focus makes users hunt for the wrong field. Move focus to the input.",
          content: "<p class=\"mb-4\">The Clincoo login form shows red text at the top, but the cursor stays on submit. Users do not know which field to retry.</p><p class=\"mb-4\">After a failed response, focus the email or password input in editor.clincoo.buzz. Add aria-invalid and point aria-describedby at the message.</p><p class=\"mb-4\">Do not clear a correct email. Only clear the password if your policy requires it.</p><p class=\"mb-4\">Ask AI to add focus and error attributes only. Paste the login markup.</p><p class=\"mb-4\">Clincoo renders the form as written. Correct focus speeds the retry on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "auth-reset-sandi-tautan-kedaluwarsa",
      langs: {
        "id": {
          title: "Buat Tautan Reset Sandi Clincoo yang Kedaluwarsa",
          desc: "Tautan reset tanpa batas waktu bisa dipakai berhari-hari. Token pendek dan sekali pakai lebih aman.",
          content: "<p class=\"mb-4\">Halaman lupa sandi Clincoo mengirim tautan yang valid tanpa batas. Kotak masuk lama tetap bisa mengganti akun.</p><p class=\"mb-4\">Buat token reset acak, simpan hash-nya, dan tetapkan kedaluwarsa 15–60 menit. Tandai terpakai setelah berhasil di app.clincoo.buzz.</p><p class=\"mb-4\">Jangan kirim sandi baru lewat email. Pengguna yang memilih sandi sendiri lebih ingat dan lebih aman.</p><p class=\"mb-4\">Minta AI hanya menambah cek kedaluwarsa dan flag terpakai. Tempel handler reset.</p><p class=\"mb-4\">Clincoo tidak membatasi tautan sendiri. Token reset yang mati cepat melindungi app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Make Clincoo Password Reset Links Expire",
          desc: "A reset link with no time limit can be used days later. A short single-use token is safer.",
          content: "<p class=\"mb-4\">The Clincoo forgot-password page sends a link with no expiry. An old inbox can still change the account.</p><p class=\"mb-4\">Create a random reset token, store its hash, and expire it in 15–60 minutes. Mark it used after success on app.clincoo.buzz.</p><p class=\"mb-4\">Do not email a new password. Users who choose their own password remember it and stay safer.</p><p class=\"mb-4\">Ask AI to add expiry and a used flag only. Paste the reset handler.</p><p class=\"mb-4\">Clincoo does not expire links by itself. A short-lived reset token protects app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "auth-kode-cadangan-2fa",
      langs: {
        "id": {
          title: "Sediakan Kode Cadangan 2FA di Clincoo",
          desc: "Perangkat 2FA hilang mengunci akun. Kode cadangan sekali pakai memberi jalan masuk darurat.",
          content: "<p class=\"mb-4\">Pengguna Clincoo mengaktifkan 2FA lalu kehilangan ponsel. Tanpa kode cadangan mereka tidak bisa masuk ke app.clincoo.buzz.</p><p class=\"mb-4\">Setelah 2FA aktif, tampilkan 8–10 kode sekali pakai. Hash kode di server dan minta pengguna menyalinnya di editor.clincoo.buzz.</p><p class=\"mb-4\">Jangan tampilkan kode itu lagi setelah halaman ditutup. Sediakan alur generate ulang setelah login berhasil.</p><p class=\"mb-4\">Minta AI hanya menambah daftar cadangan dan penanda terpakai. Tempel alur 2FA.</p><p class=\"mb-4\">Clincoo merender halaman yang kamu buat. Kode cadangan mencegah kunci permanen di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Provide 2FA Backup Codes in Clincoo",
          desc: "A lost 2FA device locks the account. Single-use backup codes give an emergency path in.",
          content: "<p class=\"mb-4\">A Clincoo user turns on 2FA and then loses the phone. Without backup codes they cannot reach app.clincoo.buzz.</p><p class=\"mb-4\">After 2FA is on, show 8–10 single-use codes. Hash the codes on the server and ask the user to copy them in editor.clincoo.buzz.</p><p class=\"mb-4\">Do not show those codes again after the page closes. Offer a regenerate flow after a successful login.</p><p class=\"mb-4\">Ask AI to add the backup list and a used flag only. Paste the 2FA flow.</p><p class=\"mb-4\">Clincoo renders the page you build. Backup codes prevent a permanent lockout on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "auth-remember-me-bukan-simpan-sandi",
      langs: {
        "id": {
          title: "Remember Me Clincoo Bukan Menyimpan Sandi",
          desc: "Kotak remember me yang menulis sandi ke storage adalah jebakan. Perpanjang sesi, jangan salin rahasia.",
          content: "<p class=\"mb-4\">Form Clincoo menyimpan email dan sandi di localStorage saat Remember me dicentang. Siapa pun di perangkat itu bisa menyalinnya.</p><p class=\"mb-4\">Remember me hanya boleh memperpanjang cookie sesi. Jangan tulis type=password ke storage di editor.clincoo.buzz.</p><p class=\"mb-4\">Tandai sesi panjang di server dan rotasi cookie. Beri cara keluar dari semua perangkat.</p><p class=\"mb-4\">Minta AI hanya mengubah perilaku Remember me. Tempel handler checkbox dan login.</p><p class=\"mb-4\">Clincoo menayangkan logika yang kamu tempel. Sesi panjang tanpa salinan sandi lebih aman di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Clincoo Remember Me Must Not Store the Password",
          desc: "A remember-me box that writes the password to storage is a trap. Extend the session, do not copy the secret.",
          content: "<p class=\"mb-4\">A Clincoo form stores email and password in localStorage when Remember me is checked. Anyone on that device can copy them.</p><p class=\"mb-4\">Remember me should only extend the session cookie. Do not write type=password into storage in editor.clincoo.buzz.</p><p class=\"mb-4\">Mark the long session on the server and rotate the cookie. Offer a sign-out-everywhere action.</p><p class=\"mb-4\">Ask AI to change Remember me behavior only. Paste the checkbox and login handler.</p><p class=\"mb-4\">Clincoo ships the logic you paste. A long session without a copied password is safer on app.clincoo.buzz.</p>",
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
