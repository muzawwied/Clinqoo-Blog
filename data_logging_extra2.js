// Clincoo Blog — artikel logging tambahan 2026-09-28
(function(){
  var extra = [
    {
      id: "logging-jangan-log-nilai-form",
      langs: {
        "id": {
          title: "Jangan Log Nilai Form atau Token di Console Clincoo",
          desc: "console.log pada input password dan header auth membocorkan data ke siapa pun yang membuka DevTools.",
          content: "<p class=\"mb-4\">Skrip Clincoo yang mencetak event.target.value saat submit sering menampilkan kata sandi dan nomor kartu di tab Console.</p><p class=\"mb-4\">Log hanya nama field dan panjang nilai, atau status valid/invalid. Jangan cetak value mentah dari input type password atau token Authorization.</p><p class=\"mb-4\">Di editor.clincoo.buzz, cari console.log yang menyentuh FormData. Ganti dengan ringkasan aman sebelum rilis ke app.clincoo.buzz.</p><p class=\"mb-4\">Minta AI menandai satu handler submit yang mencetak value. Tolak rewrite seluruh form.</p><p class=\"mb-4\">Clincoo menayangkan skrip apa adanya. Log tanpa rahasia menjaga blog.clincoo.buzz dan app.clincoo.buzz aman saat debug.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Log Form Values or Tokens in the Clincoo Console",
          desc: "console.log on password inputs and auth headers leaks data to anyone who opens DevTools.",
          content: "<p class=\"mb-4\">A Clincoo script that prints event.target.value on submit often shows passwords and card numbers in the Console tab.</p><p class=\"mb-4\">Log only the field name and value length, or valid/invalid status. Do not print raw values from password inputs or Authorization tokens.</p><p class=\"mb-4\">In editor.clincoo.buzz, hunt console.log calls that touch FormData. Replace them with a safe summary before release to app.clincoo.buzz.</p><p class=\"mb-4\">Ask AI to mark one submit handler that prints values. Reject a full form rewrite.</p><p class=\"mb-4\">Clincoo ships the script as written. Logs without secrets keep blog.clincoo.buzz and app.clincoo.buzz safe during debug.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "logging-console-dir-elemen",
      langs: {
        "id": {
          title: "Pakai console.dir untuk Elemen DOM, Bukan console.log String Acak",
          desc: "console.dir menampilkan properti node yang bisa dilipat. Lebih cepat daripada log innerHTML panjang.",
          content: "<p class=\"mb-4\">Debug Clincoo sering mencetak el.outerHTML. String itu sulit dibandingkan dan membanjiri Console.</p><p class=\"mb-4\">Pakai console.dir(el) atau console.dirxml(el) di editor.clincoo.buzz. Kamu bisa melihat classList, dataset, dan child tanpa menyalin markup.</p><p class=\"mb-4\">Jangan dir seluruh document.body. Arahkan ke satu node yang gagal, misalnya form atau tombol yang tidak merespons.</p><p class=\"mb-4\">Minta AI mengganti satu console.log(el) menjadi dir. Tempel cuplikan handler, bukan seluruh berkas.</p><p class=\"mb-4\">Clincoo tidak merapikan Console. dir yang tepat mempercepat cek DOM sebelum deploy ke app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use console.dir for DOM Elements, Not Random console.log Strings",
          desc: "console.dir shows foldable node properties. It is faster than logging a long innerHTML string.",
          content: "<p class=\"mb-4\">Clincoo debugging often prints el.outerHTML. That string is hard to compare and floods the Console.</p><p class=\"mb-4\">Use console.dir(el) or console.dirxml(el) in editor.clincoo.buzz. You can inspect classList, dataset, and children without copying markup.</p><p class=\"mb-4\">Do not dir the whole document.body. Point at one failing node, such as a form or a button that does not respond.</p><p class=\"mb-4\">Ask AI to change one console.log(el) to dir. Paste the handler snippet, not the whole file.</p><p class=\"mb-4\">Clincoo does not tidy the Console. A precise dir speeds DOM checks before deploy to app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "logging-pisahkan-warn-dan-error",
      langs: {
        "id": {
          title: "Pisahkan console.warn dan console.error di Skrip Clincoo",
          desc: "Semua masalah yang dicetak sebagai log biasa tidak bisa disaring. Warn untuk pulih, error untuk gagal nyata.",
          content: "<p class=\"mb-4\">Halaman Clincoo yang memakai console.log untuk validasi gagal, 404, dan cabang cadangan membuat filter DevTools tidak berguna.</p><p class=\"mb-4\">Pakai console.warn jika alur masih jalan, misalnya fallback font. Pakai console.error jika permintaan gagal dan UI harus berhenti.</p><p class=\"mb-4\">Samakan pesan: mulai dengan kode singkat seperti WARN_FALLBACK atau ERR_FETCH agar mudah dicari di editor.clincoo.buzz.</p><p class=\"mb-4\">Minta AI memetakan lima log yang ada ke level yang tepat. Tolak menambah log baru di setiap fungsi.</p><p class=\"mb-4\">Clincoo menayangkan skrip apa adanya. Level yang jujur membuat debug di app.clincoo.buzz bisa disaring.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Split console.warn and console.error in a Clincoo Script",
          desc: "Every issue printed as a plain log cannot be filtered. Warn for recovered paths, error for real failures.",
          content: "<p class=\"mb-4\">A Clincoo page that uses console.log for failed validation, 404s, and fallback branches makes DevTools filters useless.</p><p class=\"mb-4\">Use console.warn when the flow still continues, such as a font fallback. Use console.error when a request fails and the UI must stop.</p><p class=\"mb-4\">Keep messages consistent: start with a short code such as WARN_FALLBACK or ERR_FETCH so they are easy to search in editor.clincoo.buzz.</p><p class=\"mb-4\">Ask AI to map five existing logs onto the right level. Reject adding a new log in every function.</p><p class=\"mb-4\">Clincoo ships the script as written. Honest levels make debug on app.clincoo.buzz filterable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "logging-hapus-debugger-sebelum-rilis",
      langs: {
        "id": {
          title: "Hapus Pernyataan debugger sebelum Rilis Halaman Clincoo",
          desc: "debugger; membekukan tab pengunjung yang kebetulan membuka DevTools. Cari dan buang sebelum deploy.",
          content: "<p class=\"mb-4\">Sesi debug di editor.clincoo.buzz sering meninggalkan debugger; di handler klik. Di produksi tab pengunjung berhenti jika DevTools terbuka.</p><p class=\"mb-4\">Cari kata debugger di seluruh proyek sebelum publish ke app.clincoo.buzz. Hapus, jangan komentari satu per satu tanpa cek ulang.</p><p class=\"mb-4\">Jangan andalkan minifier untuk membuangnya jika kamu menayangkan berkas apa adanya. Clincoo tidak menghapus pernyataan itu.</p><p class=\"mb-4\">Minta AI mendaftar kemunculan debugger di satu folder. Tolak rewrite file yang tidak mengandung kata itu.</p><p class=\"mb-4\">Pemeriksaan singkat ini menjaga blog.clincoo.buzz dan situs klien tidak membeku saat seseorang membuka Console.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Remove debugger Statements before You Release a Clincoo Page",
          desc: "debugger; freezes a visitor tab that happens to have DevTools open. Find and drop it before deploy.",
          content: "<p class=\"mb-4\">A debug session in editor.clincoo.buzz often leaves debugger; in a click handler. In production the visitor tab stops if DevTools is open.</p><p class=\"mb-4\">Search the whole project for debugger before you publish to app.clincoo.buzz. Remove it; do not comment lines one by one without a recheck.</p><p class=\"mb-4\">Do not trust a minifier to strip it if you ship files as written. Clincoo does not delete that statement for you.</p><p class=\"mb-4\">Ask AI to list debugger hits in one folder. Reject rewriting files that do not contain the word.</p><p class=\"mb-4\">This short check keeps blog.clincoo.buzz and client sites from freezing when someone opens the Console.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "logging-bungkus-satu-modul-logger",
      langs: {
        "id": {
          title: "Bungkus Console Clincoo ke Satu Modul Logger, Bukan Panggilan Langsung",
          desc: "console.log tersebar sulit dimatikan. Satu helper isDev membuat produksi tetap sunyi.",
          content: "<p class=\"mb-4\">Proyek Clincoo yang memanggil console di dua puluh file sulit dibersihkan sebelum rilis. Satu panggilan terlewat tetap bocor.</p><p class=\"mb-4\">Buat logger kecil di editor.clincoo.buzz: debug, warn, error. Di dalamnya cek host localhost atau editor sebelum menulis ke console.</p><p class=\"mb-4\">Ganti panggilan langsung secara bertahap per file. Jangan minta AI menghapus semua log tanpa pengganti.</p><p class=\"mb-4\">Uji: di pratinjau logger hidup, di domain publik app.clincoo.buzz logger diam.</p><p class=\"mb-4\">Clincoo menjalankan modul yang kamu simpan. Satu pintu log membuat kebijakan debug bisa ditegakkan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Wrap the Clincoo Console in One Logger Module, Not Direct Calls",
          desc: "Scattered console.log calls are hard to silence. One isDev helper keeps production quiet.",
          content: "<p class=\"mb-4\">A Clincoo project that calls console in twenty files is hard to clean before release. One leftover call still leaks.</p><p class=\"mb-4\">Build a small logger in editor.clincoo.buzz: debug, warn, error. Inside it, check for localhost or the editor host before writing to the console.</p><p class=\"mb-4\">Replace direct calls file by file. Do not ask AI to delete every log with no replacement.</p><p class=\"mb-4\">Test: in preview the logger is live; on the public app.clincoo.buzz domain the logger stays silent.</p><p class=\"mb-4\">Clincoo runs the module you save. One log door lets you enforce a debug policy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["logging"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["logging"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
