// Clincoo Blog — artikel deploy tambahan 2 (merge ke data_deploy)
(function(){
  var extra = [
    {
      id: "deploy-catat-url-sebelum-ubah-domain",
      langs: {
        "id": {
          title: "Catat URL Lama sebelum Mengganti Domain di Clincoo",
          desc: "Sebelum mengarah DNS baru, simpan alamat tayang yang masih hidup agar rollback tetap mungkin.",
          content: "<p class=\"mb-4\">Ganti domain terasa final. Sebelum menyentuh DNS, salin URL publik yang sekarang aktif ke catatan proyek. Itu jaring pengaman jika record baru belum merambat.</p><p class=\"mb-4\">Uji domain baru di tab penyamaran setelah TTL turun. Jangan hapus catatan lama sampai HTTPS dan tautan menu di alamat baru sudah benar.</p><p class=\"mb-4\">Kalau klien masih memegang tautan lama, siapkan pengalihan atau beri tahu jangka waktu tumpang tindih. Deploy Clincoo cepat; DNS kadang tidak.</p><p class=\"mb-4\">Satu baris URL cadangan menghemat sore yang habis karena situs hilang padahal baru ganti nama.</p>",
          source: "Clincoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Menu Deploy Clincoo",
          source2: "Cloudflare Docs", sourceUrl2: "https://developers.cloudflare.com/pages/", sourceSnippet2: "Hosting situs statis",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Praktik terbaik web"
        },
        "en": {
          title: "Write Down the Old URL before Changing a Domain in Clincoo",
          desc: "Before pointing new DNS, keep the live address that still works so rollback stays possible.",
          content: "<p class=\"mb-4\">A domain change feels final. Before you touch DNS, copy the current public URL into the project notes. That is the safety net if the new record has not propagated.</p><p class=\"mb-4\">Test the new domain in a private tab after TTL drops. Do not drop the old note until HTTPS and menu links work on the new address.</p><p class=\"mb-4\">If a client still holds the old link, plan a redirect or tell them the overlap window. Clincoo deploy is fast; DNS sometimes is not.</p><p class=\"mb-4\">One spare URL line saves an afternoon lost to a vanished site after a rename.</p>",
          source: "Clincoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clincoo Deploy menu",
          source2: "Cloudflare Docs", sourceUrl2: "https://developers.cloudflare.com/pages/", sourceSnippet2: "Static hosting",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Web best practices"
        }
      }
    },
    {
      id: "deploy-cek-favicon-judul-dan-og",
      langs: {
        "id": {
          title: "Cek Favicon, Judul Tab, dan Pratinjau Tautan setelah Deploy",
          desc: "Situs live terlihat di tab browser dan saat dibagikan. Pastikan ikon, title, dan gambar unggulan sudah benar.",
          content: "<p class=\"mb-4\">Setelah deploy Clincoo, buka URL publik dan lihat tab: judulnya masuk akal atau masih Document? Favicon tampil atau kotak kosong?</p><p class=\"mb-4\">Tempel tautan ke pesan tes. Gambar Open Graph yang salah atau deskripsi kosong membuat situs terasa belum selesai meski isinya sudah rapi.</p><p class=\"mb-4\">Perbaiki di editor, simpan, deploy ulang. Cache media sosial kadang menahan gambar lama; uji di jendela baru.</p><p class=\"mb-4\">Detail kecil di tab dan kartu tautan adalah kesan pertama orang yang belum sempat scroll.</p>",
          source: "Clincoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Menu Deploy Clincoo",
          source2: "Cloudflare Docs", sourceUrl2: "https://developers.cloudflare.com/pages/", sourceSnippet2: "Hosting situs statis",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Praktik terbaik web"
        },
        "en": {
          title: "Check Favicon, Tab Title, and Link Preview after Deploy",
          desc: "A live site shows up in a browser tab and when shared. Make sure the icon, title, and share image are right.",
          content: "<p class=\"mb-4\">After a Clincoo deploy, open the public URL and look at the tab: does the title make sense or still say Document? Does the favicon show or is it an empty square?</p><p class=\"mb-4\">Paste the link into a test message. A wrong Open Graph image or an empty description makes the site feel unfinished even when the pages are tidy.</p><p class=\"mb-4\">Fix it in the editor, save, and redeploy. Social caches sometimes keep an old image; test in a fresh window.</p><p class=\"mb-4\">Small details in the tab and the link card are the first impression for people who have not scrolled yet.</p>",
          source: "Clincoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clincoo Deploy menu",
          source2: "Cloudflare Docs", sourceUrl2: "https://developers.cloudflare.com/pages/", sourceSnippet2: "Static hosting",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Web best practices"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["deploy"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["deploy"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
