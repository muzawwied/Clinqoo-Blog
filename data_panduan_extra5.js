// Clinqoo Blog — artikel panduan tambahan extra5 2026-09-19
(function(){
  var extra = [
    {
      id: "atur-halaman-faq-di-clinqoo",
      langs: {
        "id": {
          title: "Atur Halaman FAQ di Clinqoo dengan Pertanyaan yang Benar-benar Ditanya",
          desc: "FAQ yang berguna menjawab ragu calon klien. Jangan isi dengan pertanyaan yang hanya terdengar pintar.",
          content: "<p class=\"mb-4\">Banyak template Clinqoo menyertakan halaman FAQ dengan enam pertanyaan generik. Ganti semuanya dengan hal yang orang tanyakan di chat: harga, waktu pengerjaan, revisi, dan cara mulai.</p><p class=\"mb-4\">Setiap jawaban dua sampai empat kalimat. Kalau butuh paragraf panjang, itu seharusnya jadi halaman sendiri, bukan FAQ.</p><p class=\"mb-4\">Urutkan dari yang paling sering ditanya. Di HP, orang jarang menggulir sampai item terakhir.</p><p class=\"mb-4\">Setelah teks siap, tautkan FAQ dari menu dan dari halaman layanan. Baru deploy. Tambah pertanyaan baru hanya jika benar-benar muncul dari klien.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "web.dev",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "MDN Web Docs"
        },
        "en": {
          title: "Set Up a Clinqoo FAQ Page with Questions People Actually Ask",
          desc: "A useful FAQ answers a prospect's real doubts. Do not fill it with questions that only sound clever.",
          content: "<p class=\"mb-4\">Many Clinqoo templates ship a FAQ page with six generic questions. Replace all of them with what people ask in chat: price, turnaround, revisions, and how to start.</p><p class=\"mb-4\">Keep each answer to two to four sentences. If it needs a long paragraph, it should be its own page, not a FAQ item.</p><p class=\"mb-4\">Sort from the most common question. On a phone, people rarely scroll to the last item.</p><p class=\"mb-4\">When the copy is ready, link the FAQ from the menu and from the services page. Then deploy. Add a new question only when a real client asked it.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "web.dev",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "MDN Web Docs"
        }
      }
    },
    {
      id: "atur-halaman-kontak-yang-jelas",
      langs: {
        "id": {
          title: "Atur Halaman Kontak Clinqoo supaya Orang Tahu Harus Apa",
          desc: "Halaman kontak yang bagus tidak hanya punya form. Jelaskan kapan kamu membalas dan saluran mana yang dipantau.",
          content: "<p class=\"mb-4\">Form kosong di template Clinqoo belum cukup. Tambahkan satu kalimat: kirim proyek lewat formulir ini, atau tulis WhatsApp jika mendesak. Orang ragu jika ada tiga tombol tanpa petunjuk.</p><p class=\"mb-4\">Tulis jam balasan yang jujur. 'Dibalas dalam dua hari kerja' lebih dipercaya daripada 'kami selalu online'.</p><p class=\"mb-4\">Uji form di pratinjau sampai pesan benar-benar sampai. Periksa juga tautan email dan nomor agar tidak tersalin dari dummy template.</p><p class=\"mb-4\">Halaman kontak adalah janji. Buat janji itu kecil, jelas, dan bisa kamu tepati setelah situs tayang.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "web.dev",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "MDN Web Docs"
        },
        "en": {
          title: "Set Up a Clear Contact Page in Clinqoo",
          desc: "A good contact page is more than a form. Say when you reply and which channel you actually watch.",
          content: "<p class=\"mb-4\">An empty form in a Clinqoo template is not enough. Add one sentence: send the project through this form, or write on WhatsApp if it is urgent. People hesitate when three buttons have no guidance.</p><p class=\"mb-4\">Write an honest reply window. 'Replies within two working days' is more trusted than 'we are always online'.</p><p class=\"mb-4\">Test the form in preview until a message actually arrives. Also check the email link and the number so they are not leftover dummy text.</p><p class=\"mb-4\">A contact page is a promise. Make that promise small, clear, and one you can keep after the site is live.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "web.dev",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "MDN Web Docs"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["panduan"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["panduan"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
