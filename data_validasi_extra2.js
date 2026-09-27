// Clincoo Blog — artikel validasi tambahan 2026-09-28
(function(){
  var extra = [
    {
      id: "validasi-fokus-ke-field-pertama-gagal",
      langs: {
        "id": {
          title: "Pindahkan Fokus ke Field Pertama yang Gagal di Form Clincoo",
          desc: "Pesan error di bawah fold tidak terlihat. Fokus ke field pertama yang gagal mempercepat perbaikan.",
          content: "<p class=\"mb-4\">Form Clincoo menampilkan teks error, tetapi viewport tetap di tombol Kirim. Pengunjung tidak melihat field yang salah.</p><p class=\"mb-4\">Di editor.clincoo.buzz, setelah validasi gagal, panggil focus() pada input pertama yang invalid. ScrollIntoView jika field di luar layar.</p><p class=\"mb-4\">Jangan pindahkan fokus pada setiap keyup. Cukup saat submit gagal agar caret tidak loncat saat mengetik.</p><p class=\"mb-4\">Minta AI menambah focus ke field pertama yang gagal. Tempel handler submit yang sekarang hanya menulis teks merah.</p><p class=\"mb-4\">Clincoo menjalankan skrip halaman. Fokus yang jujur menjaga form di app.clincoo.buzz bisa diperbaiki tanpa tebak-tebakan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Move Focus to the First Failing Field in a Clincoo Form",
          desc: "An error below the fold stays invisible. Focusing the first invalid field speeds up the fix.",
          content: "<p class=\"mb-4\">A Clincoo form writes error text, but the viewport stays on Send. Visitors never see the bad field.</p><p class=\"mb-4\">In editor.clincoo.buzz, after validation fails, call focus() on the first invalid input. Use scrollIntoView if the field is off-screen.</p><p class=\"mb-4\">Do not move focus on every keyup. Only on a failed submit so the caret does not jump while typing.</p><p class=\"mb-4\">Ask AI to add focus on the first failing field. Paste the submit handler that now only paints red text.</p><p class=\"mb-4\">Clincoo runs the page script. Honest focus keeps the form on app.clincoo.buzz fixable without guessing.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "validasi-min-max-angka-jelas",
      langs: {
        "id": {
          title: "Tulis Batas min dan max Angka secara Jelas di Form Clincoo",
          desc: "Input number tanpa batas membuat nilai mustahil lolos diam-diam. Tampilkan rentang di label.",
          content: "<p class=\"mb-4\">Field jumlah Clincoo menerima 0 atau 999999. Server menolak, tetapi pesan klien tidak menyebut rentang.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pasang min, max, dan step pada input number. Ulangi rentang di label atau aria-describedby.</p><p class=\"mb-4\">Jangan andalkan spinner native saja. Di ponsel, pengguna sering mengetik angka langsung.</p><p class=\"mb-4\">Minta AI menambah min/max plus pesan rentang. Tempel input number yang sekarang tanpa batas.</p><p class=\"mb-4\">Clincoo menyimpan markup apa adanya. Batas yang terlihat menjaga angka di app.clincoo.buzz masuk akal sebelum fetch.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "State Number min and max Clearly on a Clincoo Form",
          desc: "A number input with no bounds lets impossible values pass quietly. Show the range on the label.",
          content: "<p class=\"mb-4\">A Clincoo quantity field accepts 0 or 999999. The server rejects it, but the client message never names the range.</p><p class=\"mb-4\">In editor.clincoo.buzz, set min, max, and step on the number input. Repeat the range in the label or aria-describedby.</p><p class=\"mb-4\">Do not rely on the native spinner alone. On a phone, people often type the number directly.</p><p class=\"mb-4\">Ask AI to add min/max plus a range message. Paste the number input that now has no bounds.</p><p class=\"mb-4\">Clincoo stores markup as-is. A visible range keeps numbers on app.clincoo.buzz sane before fetch.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "validasi-cek-url-http-saat-tautan",
      langs: {
        "id": {
          title: "Validasi URL http atau https pada Field Tautan Clincoo",
          desc: "Teks tanpa skema pecah saat jadi href. Cek protocol sebelum menyimpan tautan.",
          content: "<p class=\"mb-4\">Pengunjung Clincoo mengetik www.contoh.com tanpa https. Tautan lalu menjadi path relatif yang 404.</p><p class=\"mb-4\">Di editor.clincoo.buzz, cek nilai dengan URL API atau pattern https?://. Tolak javascript: dan data: pada field tautan publik.</p><p class=\"mb-4\">Jangan menambahkan https secara diam-diam tanpa memberi tahu. Tampilkan pratinjau URL yang akan disimpan.</p><p class=\"mb-4\">Minta AI menambah cek protocol pada field tautan. Tempel input URL yang sekarang type=text biasa.</p><p class=\"mb-4\">Clincoo merender href apa adanya. Validasi skema menjaga tautan di app.clincoo.buzz tidak pecah.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Validate http or https URLs on a Clincoo Link Field",
          desc: "Text without a scheme breaks when it becomes an href. Check the protocol before you save the link.",
          content: "<p class=\"mb-4\">A Clincoo visitor types www.example.com without https. The link then becomes a relative path that 404s.</p><p class=\"mb-4\">In editor.clincoo.buzz, check the value with the URL API or an https?:// pattern. Reject javascript: and data: on public link fields.</p><p class=\"mb-4\">Do not prepend https silently. Show a preview of the URL that will be stored.</p><p class=\"mb-4\">Ask AI to add a protocol check on the link field. Paste the URL input that is now a plain type=text.</p><p class=\"mb-4\">Clincoo renders the href as saved. Scheme validation keeps links on app.clincoo.buzz from breaking.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["validasi"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["validasi"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
