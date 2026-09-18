// Clincoo Blog — artikel panduan tambahan extra4 2026-09-18
(function(){
  var extra = [
    {
      id: "atur-halaman-layanan-di-clinqoo",
      langs: {
        "id": {
          title: "Atur Halaman Layanan di Clincoo tanpa Daftar Tak Berujung",
          desc: "Tulis tiga layanan yang benar-benar kamu kerjakan. Satu halaman yang jujur lebih mudah dibagikan ke klien.",
          content: "<p class=\"mb-4\">Template Clincoo sering punya halaman Services dengan enam kartu kosong. Isi semuanya terasa produktif, tapi pengunjung bingung apa yang benar-benar ditawarkan.</p><p class=\"mb-4\">Pilih paling banyak tiga layanan. Setiap kartu: nama singkat, satu kalimat hasil yang didapat klien, dan tautan ke kontak atau portofolio terkait.</p><p class=\"mb-4\">Hapus kartu sisa daripada mengisi dengan jargon. Halaman yang pendek terbaca utuh di pratinjau HP.</p><p class=\"mb-4\">Setelah teks diganti, cek menu mengarah ke file yang benar, lalu deploy. Tambah layanan baru hanya jika kamu sudah punya contoh kerja.</p>",
          source: "Clincoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clincoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "web.dev",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "MDN Web Docs"
        },
        "en": {
          title: "Set Up a Services Page in Clincoo without an Endless List",
          desc: "Write three services you actually deliver. One honest page is easier to share with a client.",
          content: "<p class=\"mb-4\">Clincoo templates often ship a Services page with six empty cards. Filling every card feels productive, but visitors cannot tell what you actually offer.</p><p class=\"mb-4\">Pick at most three services. Each card: a short name, one sentence about the outcome for the client, and a link to contact or a related portfolio piece.</p><p class=\"mb-4\">Delete leftover cards instead of stuffing them with jargon. A short page reads in one pass on the phone preview.</p><p class=\"mb-4\">After the copy changes, check that the menu points at the right file, then deploy. Add a new service only when you already have a work sample.</p>",
          source: "Clincoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clincoo",
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
