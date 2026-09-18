// Clinqoo Blog — artikel deploy tambahan (extra3)
(function(){
  var extra = [
    {
      id: "deploy-tunggu-cache-setelah-rilis",
      langs: {
        "id": {
          title: "Tunggu Cache Reda setelah Deploy Clinqoo, Baru Bagikan Tautan",
          desc: "Situs baru kadang masih menampilkan versi lama di browser. Tunggu sebentar, hard refresh, baru kirim URL ke orang lain.",
          content: "<p class=\"mb-4\">Setelah tombol deploy Clinqoo berhasil, jaringan CDN bisa masih memegang berkas lama beberapa saat. Itu normal, bukan tanda gagal total.</p><p class=\"mb-4\">Buka URL publik di tab penyamaran atau hard refresh. Bandingkan judul, gambar hero, dan satu perubahan yang baru kamu buat.</p><p class=\"mb-4\">Jika versi lama masih muncul setelah beberapa menit, cek apakah kamu men-deploy proyek yang benar dan apakah file sudah tersimpan.</p><p class=\"mb-4\">Baru kemudian bagikan tautan. Mengirim URL terlalu cepat membuat klien melihat draf kemarin dan mengira perubahanmu hilang.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clinqoo",
          source2: "Cloudflare Docs", sourceUrl2: "https://developers.cloudflare.com/pages/", sourceSnippet2: "Cloudflare Docs",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "web.dev"
        },
        "en": {
          title: "Wait for Cache after a Clinqoo Deploy before Sharing the Link",
          desc: "A new site can still show an old version in the browser. Wait a moment, hard-refresh, then send the URL to someone else.",
          content: "<p class=\"mb-4\">After the Clinqoo deploy button succeeds, the CDN can keep old files for a short time. That is normal, not a total failure.</p><p class=\"mb-4\">Open the public URL in a private tab or hard-refresh. Compare the title, the hero image, and one change you just made.</p><p class=\"mb-4\">If the old version is still there after a few minutes, check that you deployed the right project and that the file was saved.</p><p class=\"mb-4\">Only then share the link. Sending the URL too early lets a client see yesterday's draft and assume your change vanished.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clinqoo",
          source2: "Cloudflare Docs", sourceUrl2: "https://developers.cloudflare.com/pages/", sourceSnippet2: "Cloudflare Docs",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "web.dev"
        }
      }
    },
    {
      id: "deploy-satu-perubahan-satu-catatan",
      langs: {
        "id": {
          title: "Satu Perubahan, Satu Catatan sebelum Deploy Clinqoo",
          desc: "Tuliskan apa yang berubah sebelum menekan deploy agar rilis mudah dilacak dan mudah dikembalikan.",
          content: "<p class=\"mb-4\">Deploy tanpa catatan membuatmu lupa kenapa footer berubah minggu lalu. Di Clinqoo, tulis satu kalimat di komentar HTML atau di catatan proyek sebelum rilis.</p><p class=\"mb-4\">Catatan yang berguna menyebut file dan gejala: 'perbaiki menu HP di style.css agar tidak nutup logo'. Bukan 'update dikit'.</p><p class=\"mb-4\">Kalau rilis bermasalah, kamu tahu titik kembali. Kalau rilis aman, catatan itu jadi riwayat untuk klien atau diri sendiri bulan depan.</p><p class=\"mb-4\">Kebiasaan ini lebih ringan daripada sistem tiket. Satu baris sebelum deploy sudah cukup menahan kekacauan.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clinqoo",
          source2: "Cloudflare Docs", sourceUrl2: "https://developers.cloudflare.com/pages/", sourceSnippet2: "Cloudflare Docs",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "web.dev"
        },
        "en": {
          title: "One Change, One Note before You Deploy on Clinqoo",
          desc: "Write down what changed before you press deploy so a release is easy to trace and easy to roll back.",
          content: "<p class=\"mb-4\">A deploy with no note makes you forget why the footer changed last week. In Clinqoo, write one sentence in an HTML comment or a project note before you release.</p><p class=\"mb-4\">A useful note names the file and the symptom: 'fix the phone menu in style.css so it does not cover the logo'. Not 'small update'.</p><p class=\"mb-4\">If the release breaks, you know the rollback point. If it is fine, the note becomes history for a client or for yourself next month.</p><p class=\"mb-4\">This habit is lighter than a ticket system. One line before deploy is enough to keep chaos down.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clinqoo",
          source2: "Cloudflare Docs", sourceUrl2: "https://developers.cloudflare.com/pages/", sourceSnippet2: "Cloudflare Docs",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "web.dev"
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
