// Clincoo Blog — artikel form tambahan 2026-09-20
(function(){
  var extra = [
    {
      id: "form-disabled-tombol-saat-kirim",
      langs: {
        "id": {
          title: "Nonaktifkan Tombol Submit saat Form Clincoo Sedang Dikirim",
          desc: "Klik ganda menghasilkan dua permintaan. Kunci tombol segera setelah kirim pertama.",
          content: "<p class=\"mb-4\">Pengunjung sering menekan Kirim dua kali jika jaringan lambat. Tanpa kunci tombol, form Clincoo mengirim data ganda ke endpoint yang sama.</p><p class=\"mb-4\">Set disabled pada tombol submit di handler pertama. Tampilkan teks singkat seperti Mengirim. Jangan andalkan animasi saja.</p><p class=\"mb-4\">Kembalikan tombol jika permintaan gagal. Jangan biarkan form terkunci permanen setelah error jaringan.</p><p class=\"mb-4\">Minta AI hanya menambah kunci tombol pada satu form. Tolak rewrite seluruh alur jadi wizard.</p><p class=\"mb-4\">Clincoo menayangkan skrip yang kamu simpan. Tombol terkunci adalah pencegah dobel kirim yang paling murah.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Disable the Submit Button while a Clincoo Form Is Sending",
          desc: "A double click creates two requests. Lock the button right after the first send.",
          content: "<p class=\"mb-4\">Visitors often tap Send twice when the network is slow. Without a lock, a Clincoo form posts the same data twice.</p><p class=\"mb-4\">Set disabled on the submit button in the first handler. Show a short Sending label. Do not rely on animation alone.</p><p class=\"mb-4\">Unlock the button if the request fails. Do not leave the form permanently locked after a network error.</p><p class=\"mb-4\">Ask the AI only to add a button lock on one form. Refuse rewriting the whole flow into a wizard.</p><p class=\"mb-4\">Clincoo ships the script you save. A locked button is the cheapest way to stop a double send.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "form-name-unik-setiap-field",
      langs: {
        "id": {
          title: "Beri name Unik pada Setiap Field Form Clincoo",
          desc: "name yang sama membuat data tertukar saat serialisasi. Satu field, satu name.",
          content: "<p class=\"mb-4\">Dua input dengan name=\"email\" membuat nilai terakhir menimpa yang pertama. Endpoint menerima data yang salah tanpa error jelas.</p><p class=\"mb-4\">Pakai name deskriptif: nama_lengkap, email_kerja, no_wa. Jangan pakai name1 atau field acak.</p><p class=\"mb-4\">Cek pratinjau dengan DevTools Network. Pastikan payload memuat setiap field sekali.</p><p class=\"mb-4\">Minta AI merapikan name pada satu form. Tolak mengganti seluruh markup jadi framework form.</p><p class=\"mb-4\">Clincoo menayangkan markup yang kamu simpan. name unik adalah kontrak antara form dan server.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Give Every Clincoo Form Field a Unique name",
          desc: "A shared name swaps values during serialization. One field, one name.",
          content: "<p class=\"mb-4\">Two inputs with name=\"email\" let the last value overwrite the first. The endpoint receives the wrong data without a clear error.</p><p class=\"mb-4\">Use descriptive names: full_name, work_email, wa_number. Do not use name1 or random tokens.</p><p class=\"mb-4\">Check preview with DevTools Network. Confirm the payload includes each field once.</p><p class=\"mb-4\">Ask the AI to tidy names on one form. Refuse turning the whole markup into a form framework.</p><p class=\"mb-4\">Clincoo ships the markup you save. Unique names are the contract between form and server.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "form-maxlength-sesuai-kebutuhan",
      langs: {
        "id": {
          title: "Pasang maxlength yang Masuk Akal pada Form Clincoo",
          desc: "Field tanpa batas menampung tempel teks raksasa. Batasi panjang sesuai jenis data.",
          content: "<p class=\"mb-4\">Input nama tanpa maxlength bisa menerima paragraf. Endpoint atau spreadsheet kemudian pecah saat diekspor.</p><p class=\"mb-4\">Nama cukup 80 karakter, subjek 120, pesan 1000 jika perlu. Jangan salin maxlength=\"255\" ke semua field.</p><p class=\"mb-4\">Tampilkan sisa karakter hanya jika pesan panjang. Field pendek tidak butuh penghitung.</p><p class=\"mb-4\">Minta AI menambah maxlength pada satu form. Tolak menambahkan pustaka validasi hanya untuk batas karakter.</p><p class=\"mb-4\">Clincoo menayangkan markup yang kamu simpan. Batas panjang melindungi data tanpa mengganggu isi wajar.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Set a Sensible maxlength on a Clincoo Form",
          desc: "A field with no limit accepts a giant paste. Cap length to match the data.",
          content: "<p class=\"mb-4\">A name input without maxlength can take a paragraph. The endpoint or spreadsheet then breaks on export.</p><p class=\"mb-4\">A name can use 80 characters, a subject 120, a message 1000 if needed. Do not copy maxlength=\"255\" onto every field.</p><p class=\"mb-4\">Show a remaining-character count only for a long message. Short fields do not need a counter.</p><p class=\"mb-4\">Ask the AI to add maxlength on one form. Refuse a validation library just for a character cap.</p><p class=\"mb-4\">Clincoo ships the markup you save. A length cap protects data without blocking a normal answer.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "form-error-di-dekat-field",
      langs: {
        "id": {
          title: "Taruh Pesan Error di Dekat Field Form Clincoo",
          desc: "Alert di puncak halaman mudah terlewat. Error harus muncul di samping field yang salah.",
          content: "<p class=\"mb-4\">Satu alert di atas form memaksa pengunjung mencari field mana yang bermasalah. Di ponsel, alert itu sudah keluar layar.</p><p class=\"mb-4\">Tampilkan teks error tepat di bawah input. Hubungkan dengan aria-describedby agar pembaca layar ikut mendengar.</p><p class=\"mb-4\">Fokuskan field pertama yang gagal setelah submit. Jangan scroll ke footer.</p><p class=\"mb-4\">Minta AI menaruh error pada satu form. Tolak mengganti validasi native dengan modal besar.</p><p class=\"mb-4\">Clincoo menayangkan markup yang kamu simpan. Error dekat field mempercepat perbaikan tanpa tebak-tebakan.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Place Error Text Next to the Clincoo Form Field",
          desc: "An alert at the top of the page is easy to miss. The error should sit beside the wrong field.",
          content: "<p class=\"mb-4\">One alert above the form forces visitors to hunt for the bad field. On a phone that alert is already off-screen.</p><p class=\"mb-4\">Show the error text right under the input. Wire it with aria-describedby so a screen reader hears it too.</p><p class=\"mb-4\">Focus the first failing field after submit. Do not scroll to the footer.</p><p class=\"mb-4\">Ask the AI to place errors on one form. Refuse replacing native validation with a large modal.</p><p class=\"mb-4\">Clincoo ships the markup you save. An error next to the field speeds the fix without guesswork.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["form"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["form"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
