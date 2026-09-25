// Clincoo Blog — artikel email tambahan 2026-09-25
(function(){
  var extra = [
    {
      id: "email-cc-bcc-mailto",
      langs: {
        "id": {
          title: "Tambah cc dan bcc pada Tautan mailto Clincoo dengan Benar",
          desc: "Parameter cc dan bcc mudah pecah jika tidak di-encode. Bangun query mailto langkah demi langkah.",
          content: "<p class=\"mb-4\">Banyak tautan mailto Clincoo menambahkan cc mentah dengan spasi. Klien email lalu membuka draf tanpa penerima salinan.</p><p class=\"mb-4\">Di editor.clincoo.buzz, susun href sebagai mailto:alamat?subject=...&cc=...&bcc=... dan encode setiap nilai dengan encodeURIComponent.</p><p class=\"mb-4\">Jangan menaruh banyak alamat di satu parameter tanpa koma yang ter-encode. Uji tautan di pratinjau sebelum rilis.</p><p class=\"mb-4\">Minta AI hanya memperbaiki satu href. Tempel tautan yang pecah sebagai konteks, bukan seluruh footer.</p><p class=\"mb-4\">Clincoo merender href apa adanya. Query mailto yang rapi membuat draf di app.clincoo.buzz berisi cc yang benar.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add cc and bcc on Clincoo mailto Links the Right Way",
          desc: "cc and bcc parameters break easily if they are not encoded. Build the mailto query step by step.",
          content: "<p class=\"mb-4\">Many Clincoo mailto links add a raw cc with spaces. The mail client then opens a draft with no copy recipients.</p><p class=\"mb-4\">In editor.clincoo.buzz, build href as mailto:address?subject=...&cc=...&bcc=... and encode each value with encodeURIComponent.</p><p class=\"mb-4\">Do not pack many addresses into one parameter without an encoded comma. Test the link in preview before release.</p><p class=\"mb-4\">Ask AI to fix only one href. Paste the broken link as context, not the whole footer.</p><p class=\"mb-4\">Clincoo renders the href as saved. A clean mailto query puts the right cc into the draft on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "email-honeypot-field-tersembunyi",
      langs: {
        "id": {
          title: "Pasang Honeypot Sederhana pada Form Email Clincoo",
          desc: "Bot mengisi semua field. Satu input tersembunyi memotong spam tanpa captcha berat.",
          content: "<p class=\"mb-4\">Form kontak Clincoo tanpa proteksi cepat penuh pesan acak. Captcha pihak ketiga sering memperlambat halaman.</p><p class=\"mb-4\">Tambah input teks tersembunyi dengan CSS (bukan type=hidden) dan name yang tidak biasa di editor.clincoo.buzz. Manusia tidak melihatnya; bot biasanya mengisinya.</p><p class=\"mb-4\">Di layanan form, tolak kiriman jika honeypot terisi. Jangan andalkan display:none saja jika layanan tidak membaca field itu.</p><p class=\"mb-4\">Minta AI hanya menambah satu field dan satu aturan CSS. Jangan minta widget captcha jika belum perlu.</p><p class=\"mb-4\">Clincoo tidak menyaring spam sendiri. Honeypot ringan menjaga kotak masuk di app.clincoo.buzz tetap bisa dibaca.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add a Simple Honeypot on a Clincoo Email Form",
          desc: "Bots fill every field. One hidden input cuts spam without a heavy captcha.",
          content: "<p class=\"mb-4\">An unprotected Clincoo contact form fills with junk fast. Third-party captchas often slow the page.</p><p class=\"mb-4\">Add a CSS-hidden text input (not type=hidden) with an unusual name in editor.clincoo.buzz. Humans miss it; bots usually fill it.</p><p class=\"mb-4\">In the form service, reject submissions when the honeypot has a value. Do not rely on display:none alone if the service never reads that field.</p><p class=\"mb-4\">Ask AI to add one field and one CSS rule. Do not request a captcha widget unless you need it.</p><p class=\"mb-4\">Clincoo does not filter spam for you. A light honeypot keeps the inbox on app.clincoo.buzz readable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "email-name-autocomplete-form",
      langs: {
        "id": {
          title: "Isi name dan autocomplete agar Form Email Clincoo Bisa Diisi Cepat",
          desc: "Tanpa name dan autocomplete, browser tidak menawar isi tersimpan. Pengunjung mengetik ulang.",
          content: "<p class=\"mb-4\">Form Clincoo yang memakai id acak tanpa name membuat pengisian lambat di HP. Browser tidak mengenali field email atau nama.</p><p class=\"mb-4\">Set name dan autocomplete yang sesuai: name, email, tel, organization di editor.clincoo.buzz. Samakan label dengan field.</p><p class=\"mb-4\">Jangan memakai satu name untuk semua input. Duplikat name merusak isi yang dikirim ke layanan form.</p><p class=\"mb-4\">Minta AI hanya merapikan atribut field. Uji isi otomatis di pratinjau sebelum rilis.</p><p class=\"mb-4\">Clincoo merender atribut form apa adanya. Field yang dikenali browser mempercepat kiriman di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set name and autocomplete so Clincoo Email Forms Fill Faster",
          desc: "Without name and autocomplete, the browser will not offer saved values. Visitors type everything again.",
          content: "<p class=\"mb-4\">A Clincoo form that uses random ids and no name is slow on a phone. The browser cannot recognize email or name fields.</p><p class=\"mb-4\">Set matching name and autocomplete values: name, email, tel, organization in editor.clincoo.buzz. Keep the label tied to the field.</p><p class=\"mb-4\">Do not reuse one name on every input. Duplicate names break the payload sent to the form service.</p><p class=\"mb-4\">Ask AI only to tidy field attributes. Test autofill in preview before release.</p><p class=\"mb-4\">Clincoo renders form attributes as saved. Fields the browser understands speed up sends on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "email-satu-cta-kirim",
      langs: {
        "id": {
          title: "Satu Tombol Kirim pada Form Email Clincoo, Bukan Dua Aksi Bentrok",
          desc: "Tombol Kirim dan mailto berdampingan membingungkan. Pilih satu jalur yang benar-benar bekerja.",
          content: "<p class=\"mb-4\">Halaman kontak Clincoo sering punya form plus tombol Email kami. Pengunjung tidak tahu mana yang sampai.</p><p class=\"mb-4\">Pilih satu CTA utama di editor.clincoo.buzz. Jika form punya action nyata, sembunyikan mailto. Jika belum ada endpoint, biarkan satu tautan email.</p><p class=\"mb-4\">Jangan memasang dua type=submit. Satu tombol ekstra bisa mengirim data kosong atau memicu validasi ganda.</p><p class=\"mb-4\">Minta AI menghapus CTA yang mati, bukan menambah yang ketiga. Tempel markup form sebagai konteks.</p><p class=\"mb-4\">Clincoo tidak menggabungkan saluran kontak. Satu aksi yang jujur menjaga kepercayaan di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "One Send Button on a Clincoo Email Form, Not Two Conflicting Actions",
          desc: "A Send button next to a mailto link confuses people. Pick one path that actually works.",
          content: "<p class=\"mb-4\">Clincoo contact pages often ship a form plus an Email us button. Visitors cannot tell which one arrives.</p><p class=\"mb-4\">Pick one primary CTA in editor.clincoo.buzz. If the form has a real action, hide mailto. If there is no endpoint yet, keep a single email link.</p><p class=\"mb-4\">Do not place two type=submit controls. An extra button can send empty data or fire validation twice.</p><p class=\"mb-4\">Ask AI to remove the dead CTA, not to add a third one. Paste the form markup as context.</p><p class=\"mb-4\">Clincoo does not merge contact channels. One honest action keeps trust on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "email-batas-panjang-textarea",
      langs: {
        "id": {
          title: "Batasi Panjang Pesan pada Textarea Form Email Clincoo",
          desc: "Pesan tanpa maxlength membanjiri layanan form. Tetapkan batas yang terlihat.",
          content: "<p class=\"mb-4\">Textarea Clincoo tanpa batas sering diisi ribuan karakter. Beberapa layanan form memotong diam-diam atau menolak kiriman.</p><p class=\"mb-4\">Pasang maxlength yang masuk akal (misalnya 2000) dan tampilkan sisa karakter di editor.clincoo.buzz. Pakai aria-live polite untuk hitungan.</p><p class=\"mb-4\">Jangan mengandalkan cek hanya di JavaScript. Atribut HTML tetap bekerja jika skrip gagal dimuat.</p><p class=\"mb-4\">Minta AI menambah maxlength dan satu penanda sisa. Uji tempel teks panjang di pratinjau.</p><p class=\"mb-4\">Clincoo tidak memotong pesan sendiri. Batas yang terlihat menjaga kiriman tetap diterima layanan tujuan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Cap Message Length on a Clincoo Email Form Textarea",
          desc: "A textarea with no maxlength floods the form service. Set a visible limit.",
          content: "<p class=\"mb-4\">A Clincoo textarea with no cap often receives thousands of characters. Some form services truncate silently or reject the post.</p><p class=\"mb-4\">Set a sensible maxlength (for example 2000) and show remaining characters in editor.clincoo.buzz. Use aria-live polite for the count.</p><p class=\"mb-4\">Do not rely on a JavaScript-only check. The HTML attribute still works if the script fails to load.</p><p class=\"mb-4\">Ask AI to add maxlength and one remaining-count label. Test a long paste in preview.</p><p class=\"mb-4\">Clincoo does not trim messages for you. A visible limit keeps submissions accepted by the destination service.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["email"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["email"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
