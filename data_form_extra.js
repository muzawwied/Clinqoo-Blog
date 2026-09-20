// Clincoo Blog — artikel form tambahan 2026-09-20
(function(){
  var extra = [
    {
      id: "form-autocomplete-nama-dan-email",
      langs: {
        "id": {
          title: "Isi autocomplete Nama dan Email pada Form Clincoo",
          desc: "Atribut autocomplete membantu peramban mengisi field yang sudah dikenal. Jangan biarkan nama dan email diketik ulang setiap kali.",
          content: "<p class=\"mb-4\">Pengunjung sering mengisi form Clincoo dari ponsel. Tanpa autocomplete, mereka mengetik nama dan email berulang meski data sudah tersimpan di peramban.</p><p class=\"mb-4\">Pasang autocomplete=\"name\" pada field nama dan autocomplete=\"email\" pada field email. Untuk telepon gunakan tel. Nilai harus sesuai spektrum HTML, bukan kata acak.</p><p class=\"mb-4\">Jangan campur satu input untuk nama plus email. Peramban tidak bisa mengisi field campur dengan aman.</p><p class=\"mb-4\">Minta AI hanya menambah atribut autocomplete pada satu form. Tolak rewrite skrip kirim hanya untuk atribut ini.</p><p class=\"mb-4\">Clincoo menayangkan markup yang kamu simpan. Autocomplete yang benar mempercepat isi form tanpa menambah pustaka.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Set Name and Email Autocomplete on a Clincoo Form",
          desc: "The autocomplete attribute helps the browser fill known fields. Do not make people retype name and email every time.",
          content: "<p class=\"mb-4\">Visitors often fill a Clincoo form on a phone. Without autocomplete they retype name and email even when the browser already stored them.</p><p class=\"mb-4\">Set autocomplete=\"name\" on the name field and autocomplete=\"email\" on the email field. Use tel for a phone field. Values must match the HTML tokens, not random words.</p><p class=\"mb-4\">Do not mix name plus email in one input. The browser cannot fill a mixed field safely.</p><p class=\"mb-4\">Ask the AI only to add autocomplete on one form. Refuse a rewrite of the submit script just for this attribute.</p><p class=\"mb-4\">Clincoo ships the markup you save. Correct autocomplete speeds the form without a new library.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "form-tipe-input-sesuai-data",
      langs: {
        "id": {
          title: "Pilih type Input yang Sesuai Data Form Clincoo",
          desc: "type=email, tel, dan number membuka papan tombol yang tepat di ponsel. Jangan biarkan semua field jadi text.",
          content: "<p class=\"mb-4\">Field email dengan type=text memaksa papan huruf biasa. Di ponsel, pengunjung harus pindah layout hanya untuk mengetik @.</p><p class=\"mb-4\">Gunakan type=email untuk email, type=tel untuk telepon, type=url untuk tautan. type=number hanya untuk angka murni, bukan nomor telepon.</p><p class=\"mb-4\">Cek pratinjau di app.clincoo.buzz dengan jendela sempit. Pastikan papan tombol berubah saat field mendapat fokus.</p><p class=\"mb-4\">Minta AI mengganti type pada satu form saja. Tolak mengubah semua input jadi komponen kustom.</p><p class=\"mb-4\">Clincoo menayangkan markup yang kamu simpan. Type yang tepat adalah bantuan kecil yang terasa setiap hari.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Pick an Input type That Matches Clincoo Form Data",
          desc: "type=email, tel, and number open the right mobile keyboard. Do not leave every field as text.",
          content: "<p class=\"mb-4\">An email field with type=text forces a plain letter keyboard. On a phone, visitors switch layouts just to type @.</p><p class=\"mb-4\">Use type=email for email, type=tel for phone, type=url for a link. type=number is only for pure numbers, not phone numbers.</p><p class=\"mb-4\">Check the app.clincoo.buzz preview in a narrow window. Confirm the keyboard changes when the field is focused.</p><p class=\"mb-4\">Ask the AI to change type on one form only. Refuse turning every input into a custom widget.</p><p class=\"mb-4\">Clincoo ships the markup you save. The right type is a small help people feel every day.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "form-pesan-sukses-setelah-kirim",
      langs: {
        "id": {
          title: "Tampilkan Pesan Sukses setelah Form Clincoo Terkirim",
          desc: "Setelah kirim, orang perlu konfirmasi di halaman yang sama. Jangan biarkan tombol diam tanpa umpan balik.",
          content: "<p class=\"mb-4\">Form yang menghilang tanpa pesan membuat pengunjung mengirim ulang. Mereka tidak yakin data sampai.</p><p class=\"mb-4\">Tampilkan teks singkat di atas form: Pesan terkirim. Kami balas ke email yang kamu tulis. Jangan andalkan alert yang mudah ditutup.</p><p class=\"mb-4\">Jika kirim gagal, tetap tampilkan form dan tulis alasan singkat. Jangan kosongkan field yang sudah diisi.</p><p class=\"mb-4\">Minta AI menambah satu blok pesan sukses pada form kontak. Tolak redirect ke halaman baru tanpa alasan.</p><p class=\"mb-4\">Clincoo menayangkan halaman yang kamu simpan. Konfirmasi kirim adalah sopan santun, bukan fitur premium.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Show a Success Note after a Clincoo Form Sends",
          desc: "After submit, people need confirmation on the same page. Do not leave the button silent.",
          content: "<p class=\"mb-4\">A form that vanishes with no message makes visitors send again. They are not sure the data arrived.</p><p class=\"mb-4\">Show a short line above the form: Message sent. We will reply to the email you entered. Do not rely on an alert that is easy to dismiss.</p><p class=\"mb-4\">If send fails, keep the form and write a short reason. Do not clear fields that were already filled.</p><p class=\"mb-4\">Ask the AI to add one success block on the contact form. Refuse a redirect to a new page without a reason.</p><p class=\"mb-4\">Clincoo ships the page you save. Send confirmation is courtesy, not a premium feature.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "form-jangan-blokir-tempel-sandi",
      langs: {
        "id": {
          title: "Jangan Blokir Tempel pada Field Sandi Form Clincoo",
          desc: "Manajer sandi menempel nilai. Mematikan paste memaksa ketik manual dan menambah salah ketik.",
          content: "<p class=\"mb-4\">Beberapa skrip menonaktifkan paste di input sandi dengan niat keamanan. Hasilnya orang mengetik sandi panjang secara manual.</p><p class=\"mb-4\">Biarkan paste. Ancaman utama bukan tempel dari clipboard pengguna, melainkan sandi yang lemah atau form yang dikirim ke domain asing.</p><p class=\"mb-4\">Jika AI menambah onpaste=\"return false\", hapus atribut itu. Uji tempel di pratinjau editor.clincoo.buzz.</p><p class=\"mb-4\">Minta AI hanya meninjau event pada satu form login. Tolak pustaka validasi berat untuk menahan paste.</p><p class=\"mb-4\">Clincoo menayangkan skrip yang kamu simpan. Form yang menghormati manajer sandi lebih aman daripada form yang memaksa ketik.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Do Not Block Paste on a Clincoo Password Field",
          desc: "Password managers paste values. Disabling paste forces manual typing and more typos.",
          content: "<p class=\"mb-4\">Some scripts disable paste on password inputs in the name of security. The result is people typing a long password by hand.</p><p class=\"mb-4\">Allow paste. The main risk is not the user clipboard. It is a weak password or a form that posts to a foreign domain.</p><p class=\"mb-4\">If the AI adds onpaste=\"return false\", remove that attribute. Test paste in the editor.clincoo.buzz preview.</p><p class=\"mb-4\">Ask the AI to review events on one login form only. Refuse a heavy validation library just to block paste.</p><p class=\"mb-4\">Clincoo ships the script you save. A form that respects a password manager is safer than one that forces typing.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "form-fieldset-untuk-pilihan-grup",
      langs: {
        "id": {
          title: "Bungkus Pilihan Radio Form Clincoo dengan Fieldset",
          desc: "Grup ya/tidak atau paket harga butuh legend. Radio tanpa pembungkus sulit dipahami pembaca layar.",
          content: "<p class=\"mb-4\">Tiga radio tanpa fieldset terlihat seperti daftar terpisah. Pembaca layar tidak tahu mereka saling meniadakan.</p><p class=\"mb-4\">Bungkus grup dengan fieldset dan tulis legend singkat: Pilih paket. Setiap radio tetap punya label sendiri.</p><p class=\"mb-4\">Jangan ganti radio dengan div yang hanya berubah warna. Jika desain menuntut kartu, tetap simpan input asli di dalam.</p><p class=\"mb-4\">Minta AI membungkus satu grup pilihan saja. Tolak mengubah seluruh form jadi wizard.</p><p class=\"mb-4\">Clincoo menayangkan markup yang kamu simpan. Fieldset adalah struktur, bukan hiasan lama.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Wrap Clincoo Radio Choices in a Fieldset",
          desc: "Yes/no or pricing groups need a legend. Radios without a wrapper are hard for screen readers.",
          content: "<p class=\"mb-4\">Three radios without a fieldset look like separate items. A screen reader does not know they cancel each other.</p><p class=\"mb-4\">Wrap the group in a fieldset and write a short legend: Choose a plan. Each radio still needs its own label.</p><p class=\"mb-4\">Do not replace radios with divs that only change color. If the design wants cards, keep the real inputs inside.</p><p class=\"mb-4\">Ask the AI to wrap one choice group only. Refuse turning the whole form into a wizard.</p><p class=\"mb-4\">Clincoo ships the markup you save. A fieldset is structure, not old decoration.</p>",
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
