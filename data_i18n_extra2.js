// Clincoo Blog — artikel i18n tambahan 2026-10-03 WIB
(function(){
  var extra = [
{
  "id": "i18n-jangan-hardcode-rupiah-di-string",
  "langs": {
    "id": {
      "title": "Jangan Hardcode Rupiah di String Terjemahan",
      "desc": "Mata uang yang menempel di kalimat terjemahan pecah saat locale berganti. Format angka terpisah dari salinan.",
      "content": "<p class=\"mb-4\">String ID dan EN di editor.clincoo.buzz sering berisi Rp 10.000. Saat halaman EN tampil, simbol itu tetap salah dan pemisah ribuan ikut rusak.</p><p class=\"mb-4\">Simpan angka polos, lalu format dengan Intl.NumberFormat memakai locale halaman. Taruh simbol di hasil format, bukan di file terjemahan.</p><p class=\"mb-4\">Jangan terjemahkan kode mata uang ISO. USD tetap USD. Yang berubah hanya pola tampilan.</p><p class=\"mb-4\">Minta AI memisahkan kalimat dan placeholder {harga}. Jangan minta AI mengubah nilai asli.</p><p class=\"mb-4\">Cek pratinjau app.clincoo.buzz dalam ID dan EN. Angka yang sama harus terbaca, dengan pemisah yang sesuai locale.</p>",
      "source": "Clincoo",
      "sourceUrl": "https://editor.clincoo.buzz/",
      "sourceSnippet": "Editor resmi Clincoo",
      "source2": "Clincoo App",
      "source3": "Clincoo Blog"
    },
    "en": {
      "title": "Do Not Hardcode Rupiah in Translation Strings",
      "desc": "Currency glued into a translated sentence breaks when the locale changes. Format the number apart from the copy.",
      "content": "<p class=\"mb-4\">ID and EN strings in editor.clincoo.buzz often contain Rp 10.000. When the EN page renders, that symbol stays wrong and the thousands separator breaks too.</p><p class=\"mb-4\">Store a plain number, then format it with Intl.NumberFormat using the page locale. Put the symbol in the formatted result, not in the translation file.</p><p class=\"mb-4\">Do not translate ISO currency codes. USD stays USD. Only the display pattern changes.</p><p class=\"mb-4\">Ask AI to split the sentence and a {harga} placeholder. Do not ask AI to change the original amount.</p><p class=\"mb-4\">Check the app.clincoo.buzz preview in ID and EN. The same number should be readable, with the separator that matches the locale.</p>",
      "source": "Clincoo",
      "sourceUrl": "https://editor.clincoo.buzz/",
      "sourceSnippet": "Official Clincoo editor",
      "source2": "Clincoo App",
      "source3": "Clincoo Blog"
    }
  }
},
  {
    "id": "i18n-jangan-terjemahkan-kode-error",
    "langs": {
      "id": {
        "title": "Jangan Terjemahkan Kode Error dan Nama Merek di Salinan i18n Clincoo",
        "desc": "Kode error, nama kelas, dan merek Clincoo harus sama di ID dan EN supaya log bisa dicari.",
        "content": "<p class=\"mb-4\">Di berkas salinan Clincoo, biarkan kode seperti E_TIMEOUT, nama kelas CSS, dan kata Clincoo tidak diterjemahkan.</p><p class=\"mb-4\">Terjemahkan kalimat di sekitarnya. Contoh: Gagal menyimpan (E_TIMEOUT), bukan kode yang diubah menjadi bahasa lain.</p><p class=\"mb-4\">Jika kode diterjemahkan, pencarian di konsol dan tiket komunitas tidak ketemu. Uji kedua bahasa di app.clincoo.buzz.</p><p class=\"mb-4\">Nama tombol boleh diterjemahkan. Identifier di atribut data dan pesan log tidak.</p><p class=\"mb-4\">Minta AI menandai string yang harus tetap harfiah. Tempel satu objek salinan, bukan seluruh proyek.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Editor resmi Clincoo",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Do Not Translate Error Codes and Brand Names in Clincoo i18n Copy",
        "desc": "Error codes, class names, and the Clincoo brand must stay identical in ID and EN so logs stay searchable.",
        "content": "<p class=\"mb-4\">In Clincoo copy files, leave codes such as E_TIMEOUT, CSS class names, and the word Clincoo untranslated.</p><p class=\"mb-4\">Translate the sentence around them. Example: Save failed (E_TIMEOUT), not a code rewritten into another language.</p><p class=\"mb-4\">If the code is translated, console search and community tickets will not match. Test both languages on app.clincoo.buzz.</p><p class=\"mb-4\">Button labels may be translated. Identifiers in data attributes and log messages must not.</p><p class=\"mb-4\">Ask AI to mark strings that must stay literal. Paste one copy object, not the whole project.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Official Clincoo editor",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      }
    }
  }
];
  var b=window.countryDataFiles&&window.countryDataFiles["i18n"];
  if(b&&b.articles)b.articles=b.articles.concat(extra);
})();
