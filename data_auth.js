// Clincoo Blog — Data kategori: auth
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["auth"] = {
  names: { "id": "Auth", "en": "Auth" },
  flag: "\u26d3",
  articles: [
    {
      id: "auth-autocomplete-password-login",
      langs: {
        "id": {
          title: "Setel autocomplete pada Form Login Clincoo",
          desc: "Tanpa autocomplete=username dan current-password, manajer sandi tidak mengisi form.",
          content: "<p class=\"mb-4\">Form login Clincoo memakai name acak. Browser tidak menawarkan sandi tersimpan dan pengguna mengetik ulang.</p><p class=\"mb-4\">Set autocomplete=\"username\" pada email dan autocomplete=\"current-password\" pada sandi di editor.clincoo.buzz. Pakai type=\"password\" yang benar.</p><p class=\"mb-4\">Jangan set autocomplete=\"off\" pada form login hanya agar terlihat bersih. Itu memutus manajer sandi.</p><p class=\"mb-4\">Minta AI hanya menambah atribut autocomplete. Tempel markup form login.</p><p class=\"mb-4\">Clincoo merender form yang kamu tempel. Autocomplete yang tepat mempercepat masuk di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set autocomplete on the Clincoo Login Form",
          desc: "Without autocomplete=username and current-password, password managers skip the form.",
          content: "<p class=\"mb-4\">The Clincoo login form uses random names. The browser does not offer a saved password and users retype it.</p><p class=\"mb-4\">Set autocomplete=\"username\" on email and autocomplete=\"current-password\" on the password in editor.clincoo.buzz. Use a real type=\"password\".</p><p class=\"mb-4\">Do not set autocomplete=\"off\" on login just to look clean. That breaks password managers.</p><p class=\"mb-4\">Ask AI to add only the autocomplete attributes. Paste the login markup.</p><p class=\"mb-4\">Clincoo renders the form you paste. Correct autocomplete speeds sign-in on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "auth-jangan-tampilkan-token-di-url",
      langs: {
        "id": {
          title: "Jangan Taruh Token Auth di Query URL Clincoo",
          desc: "Token di URL bocor lewat riwayat, referrer, dan log. Pakai header atau cookie HttpOnly.",
          content: "<p class=\"mb-4\">Halaman Clincoo memakai ?token= di tautan pratinjau. Token muncul di riwayat browser dan kadang di log server.</p><p class=\"mb-4\">Pindahkan token ke header Authorization atau cookie HttpOnly Secure di alur app.clincoo.buzz. Jangan tempel rahasia di query.</p><p class=\"mb-4\">Jika harus tautan sekali pakai, buat token pendek yang kedaluwarsa dan sekali pakai, bukan JWT panjang.</p><p class=\"mb-4\">Minta AI hanya menghapus token dari URL. Tempel cuplikan fetch atau tautan.</p><p class=\"mb-4\">Clincoo tidak menyembunyikan query sendiri. Token di luar URL lebih aman di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Aplikasi resmi Clincoo"
        },
        "en": {
          title: "Do Not Put Auth Tokens in Clincoo URL Query Strings",
          desc: "Tokens in URLs leak through history, referrers, and logs. Use a header or HttpOnly cookie.",
          content: "<p class=\"mb-4\">A Clincoo page uses ?token= on a preview link. The token shows in browser history and sometimes in server logs.</p><p class=\"mb-4\">Move the token to an Authorization header or an HttpOnly Secure cookie in the app.clincoo.buzz flow. Do not paste secrets in the query.</p><p class=\"mb-4\">If you need a one-time link, use a short expiring single-use token, not a long JWT.</p><p class=\"mb-4\">Ask AI to remove the token from the URL only. Paste the fetch or link snippet.</p><p class=\"mb-4\">Clincoo does not hide query strings for you. Tokens outside the URL stay safer on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo app"
        }
      }
    },
    {
      id: "auth-pesan-error-login-umum",
      langs: {
        "id": {
          title: "Pakai Pesan Error Login yang Umum di Clincoo",
          desc: "Email tidak ditemukan versus sandi salah membantu penyerang enumerasi akun.",
          content: "<p class=\"mb-4\">Form Clincoo menampilkan Email tidak terdaftar. Penyerang bisa menebak akun mana yang ada.</p><p class=\"mb-4\">Samakan pesan jadi Email atau sandi tidak cocok di editor.clincoo.buzz. Bedakan detail hanya di log server.</p><p class=\"mb-4\">Tetap beri tautan reset sandi yang sama, tanpa mengungkap apakah email itu terdaftar.</p><p class=\"mb-4\">Minta AI hanya merapikan teks error login. Tempel markup pesan saat ini.</p><p class=\"mb-4\">Clincoo menampilkan teks yang kamu tulis. Pesan umum mengurangi enumerasi di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use a Generic Login Error Message in Clincoo",
          desc: "Email not found versus wrong password helps attackers enumerate accounts.",
          content: "<p class=\"mb-4\">The Clincoo form shows Email is not registered. An attacker can guess which accounts exist.</p><p class=\"mb-4\">Unify the copy to Email or password does not match in editor.clincoo.buzz. Keep the detail in server logs only.</p><p class=\"mb-4\">Keep the same reset-password link without revealing whether that email is registered.</p><p class=\"mb-4\">Ask AI to tidy only the login error text. Paste the current message markup.</p><p class=\"mb-4\">Clincoo shows the text you write. Generic copy reduces enumeration on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "auth-timeout-sesi-peringatan",
      langs: {
        "id": {
          title: "Peringatkan sebelum Sesi Clincoo Kedaluwarsa",
          desc: "Sesi mati tanpa peringatan menghapus draf yang belum tersimpan. Beri waktu perpanjang.",
          content: "<p class=\"mb-4\">Pengguna Clincoo menulis lama lalu submit. Sesi sudah habis dan form menolak tanpa penjelasan.</p><p class=\"mb-4\">Tampilkan banner satu atau dua menit sebelum timeout di editor.clincoo.buzz. Tombol Perpanjang sesi memanggil endpoint refresh.</p><p class=\"mb-4\">Simpan draf ke localStorage sebelum redirect login agar isi form tidak hilang.</p><p class=\"mb-4\">Minta AI hanya menambah banner timeout plus tombol refresh. Tempel alur sesi saat ini.</p><p class=\"mb-4\">Clincoo tidak memperpanjang sesi sendiri. Peringatan menjaga pekerjaan di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Aplikasi resmi Clincoo"
        },
        "en": {
          title: "Warn Before a Clincoo Session Expires",
          desc: "A silent dead session wipes unsaved drafts. Give time to extend it.",
          content: "<p class=\"mb-4\">A Clincoo user writes for a long time then submits. The session is gone and the form fails with no explanation.</p><p class=\"mb-4\">Show a banner one or two minutes before timeout in editor.clincoo.buzz. An Extend session button calls the refresh endpoint.</p><p class=\"mb-4\">Save the draft to localStorage before the login redirect so the form is not lost.</p><p class=\"mb-4\">Ask AI to add only the timeout banner and refresh button. Paste the current session flow.</p><p class=\"mb-4\">Clincoo does not extend sessions by itself. A warning protects work on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo app"
        }
      }
    },
    {
      id: "auth-tombol-lihat-sandi-aman",
      langs: {
        "id": {
          title: "Tambah Tombol Lihat Sandi yang Aman di Clincoo",
          desc: "type=text permanen menampilkan sandi. Toggle singkat membantu tanpa membocorkan isi.",
          content: "<p class=\"mb-4\">Field sandi Clincoo selalu type=\"password\". Pengguna salah ketik dan tidak bisa memeriksa.</p><p class=\"mb-4\">Tambah tombol Lihat yang mengubah type sementara di editor.clincoo.buzz. Kembalikan ke password saat blur atau setelah beberapa detik.</p><p class=\"mb-4\">Beri aria-pressed dan label yang jelas. Jangan log nilai sandi ke konsol saat toggle.</p><p class=\"mb-4\">Minta AI hanya menambah toggle lihat sandi. Tempel input password saat ini.</p><p class=\"mb-4\">Clincoo merender kontrol yang kamu tulis. Toggle singkat mengurangi salah ketik di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add a Safe Show-Password Button in Clincoo",
          desc: "A permanent type=text reveals the password. A short toggle helps without leaking it.",
          content: "<p class=\"mb-4\">The Clincoo password field stays type=\"password\". Users mistype and cannot check the value.</p><p class=\"mb-4\">Add a Show button that flips the type briefly in editor.clincoo.buzz. Switch back to password on blur or after a few seconds.</p><p class=\"mb-4\">Set aria-pressed and a clear label. Do not log the password to the console on toggle.</p><p class=\"mb-4\">Ask AI to add only the show-password toggle. Paste the current password input.</p><p class=\"mb-4\">Clincoo renders the control you write. A short toggle cuts mistypes on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
