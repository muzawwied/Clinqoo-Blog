// Clincoo Blog — artikel cookie tambahan 2026-09-23 WIB
(function(){
  var extra = [
    {
      id: "cookie-max-age-jangan-abadi",
      langs: {
        "id": {
          title: "Jangan Membuat Cookie Clincoo Berlaku Selamanya",
          desc: "Max-Age yang terlalu panjang menyimpan pilihan lama. Batasi umur cookie non-esensial.",
          content: "<p class=\"mb-4\">Banyak skrip Clincoo menulis cookie dengan Max-Age bertahun-tahun agar banner tidak muncul lagi. Pilihan itu tetap menempel setelah kebijakan berubah.</p><p class=\"mb-4\">Untuk preferensi tema atau bahasa, beberapa bulan cukup. Untuk analitik, ikuti masa retensi yang kamu tulis di kebijakan.</p><p class=\"mb-4\">Cookie sesi tanpa Max-Age hilang saat tab ditutup. Itu lebih aman untuk data sementara.</p><p class=\"mb-4\">Cek Application di DevTools dari pratinjau editor.clincoo.buzz. Minta AI hanya menyesuaikan Max-Age, bukan menambah pustaka consent.</p><p class=\"mb-4\">Clincoo tidak mengatur umur cookie otomatis. Batas waktu yang jujur lebih mudah dijelaskan ke pengunjung.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Make Clincoo Cookies Last Forever",
          desc: "A Max-Age that is too long keeps old choices. Limit the life of non-essential cookies.",
          content: "<p class=\"mb-4\">Many Clincoo scripts write cookies with a Max-Age of years so the banner never returns. That choice stays after the policy changes.</p><p class=\"mb-4\">For theme or language prefs, a few months is enough. For analytics, match the retention you wrote in the policy.</p><p class=\"mb-4\">A session cookie without Max-Age dies when the tab closes. That is safer for temporary data.</p><p class=\"mb-4\">Check Application in DevTools from the editor.clincoo.buzz preview. Ask AI only to adjust Max-Age, not to add a consent library.</p><p class=\"mb-4\">Clincoo does not set cookie lifetime for you. An honest expiry is easier to explain to visitors.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cookie-same-site-lax-default",
      langs: {
        "id": {
          title: "Setel SameSite=Lax pada Cookie yang Ditulis Halaman Clincoo",
          desc: "Tanpa SameSite, cookie ikut ke permintaan silang. Lax cukup untuk hampir semua situs statis.",
          content: "<p class=\"mb-4\">Form atau skrip Clincoo yang menulis document.cookie sering lupa atribut SameSite. Browser modern bisa memperingatkan atau memblokir.</p><p class=\"mb-4\">SameSite=Lax menjaga cookie tidak ikut POST silang sambil tetap mengirim GET navigasi biasa.</p><p class=\"mb-4\">Pakai Strict hanya jika cookie tidak diperlukan saat orang datang dari tautan luar. None+Secure hanya jika memang butuh embed silang.</p><p class=\"mb-4\">Uji login atau preferensi setelah datang dari mesin cari. Minta AI menambah SameSite, bukan mengganti seluruh helper cookie.</p><p class=\"mb-4\">Clincoo mengeksekusi string cookie yang kamu tulis. SameSite yang eksplisit mengurangi kejutan di Chrome.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set SameSite=Lax on Cookies Written by a Clincoo Page",
          desc: "Without SameSite, cookies ride along on cross-site requests. Lax is enough for most static sites.",
          content: "<p class=\"mb-4\">Clincoo forms or scripts that write document.cookie often omit SameSite. Modern browsers may warn or block.</p><p class=\"mb-4\">SameSite=Lax keeps the cookie off cross-site POSTs while still sending it on normal GET navigations.</p><p class=\"mb-4\">Use Strict only if the cookie is not needed when people arrive from an outside link. None+Secure only if you truly need a cross-site embed.</p><p class=\"mb-4\">Test login or prefs after arriving from a search engine. Ask AI to add SameSite, not to replace the whole cookie helper.</p><p class=\"mb-4\">Clincoo runs the cookie string you write. An explicit SameSite cuts surprises in Chrome.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cookie-hapus-saat-pengunjung-tolak",
      langs: {
        "id": {
          title: "Hapus Cookie Analitik Clincoo saat Pengunjung Menolak",
          desc: "Tombol Tolak yang hanya menyembunyikan banner tidak cukup. Cookie yang sudah tertulis harus dihapus.",
          content: "<p class=\"mb-4\">Beberapa template Clincoo menyembunyikan banner setelah Tolak tetapi membiarkan cookie pelacak tetap ada.</p><p class=\"mb-4\">Saat menolak, tulis ulang cookie analitik dengan Max-Age=0 atau tanggal kedaluwarsa di masa lalu, lalu jangan muat skripnya lagi.</p><p class=\"mb-4\">Simpan satu kunci lokal bahwa orang sudah menolak agar banner tidak memaksa setiap kunjungan.</p><p class=\"mb-4\">Uji alur Terima lalu Tolak di editor.clincoo.buzz. Minta AI menulis fungsi hapus, bukan modal baru.</p><p class=\"mb-4\">Clincoo tidak membersihkan cookie pihak ketiga untukmu. Tolak yang nyata berarti data ikut hilang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Delete Clincoo Analytics Cookies When the Visitor Declines",
          desc: "A Reject button that only hides the banner is not enough. Cookies already written must be removed.",
          content: "<p class=\"mb-4\">Some Clincoo templates hide the banner after Reject but leave tracker cookies in place.</p><p class=\"mb-4\">On reject, rewrite analytics cookies with Max-Age=0 or an expiry in the past, then do not load their scripts again.</p><p class=\"mb-4\">Store one local key that the person declined so the banner does not nag every visit.</p><p class=\"mb-4\">Test Accept then Reject in editor.clincoo.buzz. Ask AI to write a delete helper, not a new modal.</p><p class=\"mb-4\">Clincoo does not clear third-party cookies for you. A real reject means the data goes away.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cookie-path-sempit-bukan-seluruh-situs",
      langs: {
        "id": {
          title: "Persempit Path Cookie Clincoo ke Folder yang Memerlukannya",
          desc: "Cookie dengan path / ikut ke semua halaman. Batasi ke folder form atau akun jika bisa.",
          content: "<p class=\"mb-4\">Halaman Clincoo sering menulis cookie di path root meskipun hanya dipakai form kontak.</p><p class=\"mb-4\">Path yang sempit mengurangi kiriman header di halaman blog atau galeri yang tidak membutuhkannya.</p><p class=\"mb-4\">Jika seluruh situs membaca preferensi bahasa, path / masih masuk akal. Jangan campur token form ke situ.</p><p class=\"mb-4\">Periksa kolom Path di Application DevTools. Minta AI mengubah path, bukan menambah cookie kedua.</p><p class=\"mb-4\">Clincoo tidak memotong path otomatis. Cookie yang hemat tempat membuat Network lebih bersih.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Narrow the Path of a Clincoo Cookie to the Folder That Needs It",
          desc: "A cookie with path / rides to every page. Limit it to the form or account folder when you can.",
          content: "<p class=\"mb-4\">Clincoo pages often write a cookie at the root path even when only the contact form uses it.</p><p class=\"mb-4\">A narrow path cuts header traffic on blog or gallery pages that do not need it.</p><p class=\"mb-4\">If the whole site reads a language pref, path / still makes sense. Do not mix a form token into that cookie.</p><p class=\"mb-4\">Check the Path column in Application DevTools. Ask AI to change the path, not to add a second cookie.</p><p class=\"mb-4\">Clincoo does not trim paths for you. A lean cookie keeps the Network panel cleaner.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["cookie"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["cookie"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
