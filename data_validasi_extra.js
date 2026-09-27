// Clincoo Blog — artikel validasi tambahan 2026-09-27
(function(){
  var extra = [
    {
      id: "validasi-trim-sebelum-required",
      langs: {
        "id": {
          title: "Trim Spasi sebelum Cek Required di Form Clincoo",
          desc: "Spasi saja lolos required HTML. Trim dulu agar field kosong benar-benar kosong.",
          content: "<p class=\"mb-4\">Input nama Clincoo berisi tiga spasi. Atribut required lolos karena string tidak kosong.</p><p class=\"mb-4\">Di editor.clincoo.buzz, trim setiap nilai teks sebelum cek panjang. Set value kembali ke hasil trim agar pengunjung melihat perbaikan.</p><p class=\"mb-4\">Jangan andalkan required native saja untuk field yang sering diisi spasi dari autocomplete.</p><p class=\"mb-4\">Minta AI menambah trim pada handler submit. Tempel form yang sekarang hanya memakai required.</p><p class=\"mb-4\">Clincoo menyimpan skrip apa adanya. Trim sebelum validasi menjaga data di app.clincoo.buzz tidak penuh spasi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Trim Spaces before a Required Check in Clincoo Forms",
          desc: "Spaces alone pass HTML required. Trim first so empty fields are truly empty.",
          content: "<p class=\"mb-4\">A Clincoo name input holds three spaces. The required attribute passes because the string is not empty.</p><p class=\"mb-4\">In editor.clincoo.buzz, trim every text value before checking length. Write the trimmed value back so visitors see the fix.</p><p class=\"mb-4\">Do not rely on native required alone for fields that autocomplete fills with spaces.</p><p class=\"mb-4\">Ask AI to add trim on the submit handler. Paste the form that now only uses required.</p><p class=\"mb-4\">Clincoo stores the script as-is. Trim before validation keeps data on app.clincoo.buzz free of leftover spaces.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "validasi-novalidate-pesan-kustom",
      langs: {
        "id": {
          title: "Pakai novalidate jika Form Clincoo Punya Pesan Kustom",
          desc: "Tooltip native menimpa teks error kamu. novalidate memberi kendali penuh pada pesan.",
          content: "<p class=\"mb-4\">Form Clincoo punya teks error di bawah field, tetapi browser menampilkan balloon native yang menutupinya.</p><p class=\"mb-4\">Di editor.clincoo.buzz, set novalidate pada form. Jalankan checkValidity per field lalu tulis pesan sendiri.</p><p class=\"mb-4\">Tetap pakai required, type, dan minlength di markup. novalidate hanya menonaktifkan UI native, bukan API validasi.</p><p class=\"mb-4\">Minta AI memindahkan reportValidity ke elemen pesan kustom. Tempel form yang masih menampilkan balloon.</p><p class=\"mb-4\">Clincoo merender HTML yang kamu tulis. Pesan kustom yang konsisten lebih jelas di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Use novalidate when a Clincoo Form Has Custom Messages",
          desc: "Native tooltips cover your error text. novalidate gives you full control of the copy.",
          content: "<p class=\"mb-4\">A Clincoo form has error text under the field, but the browser balloon covers it.</p><p class=\"mb-4\">In editor.clincoo.buzz, set novalidate on the form. Call checkValidity per field and write your own message.</p><p class=\"mb-4\">Keep required, type, and minlength in markup. novalidate only hides native UI, not the validation API.</p><p class=\"mb-4\">Ask AI to move reportValidity into a custom message element. Paste the form that still shows the balloon.</p><p class=\"mb-4\">Clincoo renders the HTML you write. Consistent custom copy is clearer on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "validasi-hitung-sisa-karakter",
      langs: {
        "id": {
          title: "Tampilkan Sisa Karakter pada Textarea Clincoo",
          desc: "maxlength diam-diam memotong teks. Penghitung sisa membuat batas terlihat sebelum kirim.",
          content: "<p class=\"mb-4\">Textarea Clincoo memotong kalimat di 280 karakter tanpa peringatan. Pengunjung kira kiriman utuh.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pasang maxlength plus teks sisa yang diperbarui di input. Hubungkan lewat aria-describedby.</p><p class=\"mb-4\">Jangan hanya mengandalkan maxlength tanpa umpan balik. Mobile sering menyembunyikan sisa native.</p><p class=\"mb-4\">Minta AI menambah penghitung sisa. Tempel textarea yang sekarang tanpa status.</p><p class=\"mb-4\">Clincoo menjalankan skrip halaman. Batas yang terlihat menjaga pesan di app.clincoo.buzz tidak terpotong diam-diam.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Show Remaining Characters on a Clincoo Textarea",
          desc: "maxlength silently cuts text. A remaining counter makes the limit visible before submit.",
          content: "<p class=\"mb-4\">A Clincoo textarea cuts the sentence at 280 characters with no warning. Visitors think the full message was sent.</p><p class=\"mb-4\">In editor.clincoo.buzz, add maxlength plus a remaining label updated on input. Wire it with aria-describedby.</p><p class=\"mb-4\">Do not rely on maxlength with no feedback. Mobile often hides the native remainder.</p><p class=\"mb-4\">Ask AI to add a remaining counter. Paste the textarea that now has no status.</p><p class=\"mb-4\">Clincoo runs the page script. A visible limit keeps messages on app.clincoo.buzz from being cut in silence.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "validasi-aria-invalid-saat-gagal",
      langs: {
        "id": {
          title: "Set aria-invalid saat Field Clincoo Gagal Validasi",
          desc: "Warna merah saja tidak sampai ke pembaca layar. aria-invalid dan describedby menyampaikan status.",
          content: "<p class=\"mb-4\">Field email Clincoo berubah merah, tetapi pembaca layar masih mengumumkan input biasa.</p><p class=\"mb-4\">Di editor.clincoo.buzz, set aria-invalid=true saat gagal dan false saat lolos. Arahkan aria-describedby ke id pesan error.</p><p class=\"mb-4\">Jangan biarkan aria-invalid=true setelah pengguna memperbaiki nilai. Perbarui di event input.</p><p class=\"mb-4\">Minta AI menambah aria-invalid plus describedby. Tempel field yang hanya berubah warna.</p><p class=\"mb-4\">Clincoo tidak menandai invalid otomatis. Status ARIA menjaga form di app.clincoo.buzz bisa diperbaiki semua orang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Set aria-invalid when a Clincoo Field Fails Validation",
          desc: "Red color alone never reaches a screen reader. aria-invalid and describedby carry the state.",
          content: "<p class=\"mb-4\">A Clincoo email field turns red, but a screen reader still announces a normal input.</p><p class=\"mb-4\">In editor.clincoo.buzz, set aria-invalid=true on failure and false on success. Point aria-describedby at the error message id.</p><p class=\"mb-4\">Do not leave aria-invalid=true after the user fixes the value. Update it on the input event.</p><p class=\"mb-4\">Ask AI to add aria-invalid plus describedby. Paste the field that only changes color.</p><p class=\"mb-4\">Clincoo does not mark invalid by itself. ARIA state keeps the form on app.clincoo.buzz fixable for everyone.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "validasi-cek-submit-ganda",
      langs: {
        "id": {
          title: "Kunci Tombol Submit setelah Validasi Form Clincoo Lolos",
          desc: "Klik ganda mengirim dua fetch. Nonaktifkan tombol sampai respons kembali.",
          content: "<p class=\"mb-4\">Pengunjung Clincoo mengklik Kirim dua kali karena spinner lambat. Server menerima dua entri.</p><p class=\"mb-4\">Di editor.clincoo.buzz, setelah validasi lolos, set disabled pada tombol dan tampilkan status Mengirim. Aktifkan lagi jika fetch gagal.</p><p class=\"mb-4\">Jangan disable sebelum validasi selesai. Pengunjung harus bisa memperbaiki field lalu kirim ulang.</p><p class=\"mb-4\">Minta AI menambah kunci tombol di handler submit. Tempel form yang masih bisa diklik berulang.</p><p class=\"mb-4\">Clincoo menjalankan fetch dari skrip kamu. Satu kiriman per lolos validasi menjaga data di app.clincoo.buzz utuh.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Lock the Submit Button after Clincoo Form Validation Passes",
          desc: "A double click sends two fetches. Disable the button until the response returns.",
          content: "<p class=\"mb-4\">A Clincoo visitor clicks Send twice because the spinner is slow. The server stores two entries.</p><p class=\"mb-4\">In editor.clincoo.buzz, after validation passes, disable the button and show Sending. Enable it again if fetch fails.</p><p class=\"mb-4\">Do not disable before validation finishes. Visitors must fix fields and submit again.</p><p class=\"mb-4\">Ask AI to lock the button in the submit handler. Paste the form that can still be clicked twice.</p><p class=\"mb-4\">Clincoo runs fetch from your script. One send per passing validation keeps data on app.clincoo.buzz intact.</p>",
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
