// Clincoo Blog — artikel deploy tambahan 2026-09-19 (merge ke data_deploy)
(function(){
  var extra = [
    {
      id: "deploy-cek-tautan-internal-setelah-rilis",
      langs: {
        "id": {
          title: "Cek Semua Tautan Internal setelah Deploy Clincoo",
          desc: "Situs live sering menyimpan tautan pratinjau atau path yang pecah. Uji klik sekali di URL publik.",
          content: "<p class=\"mb-4\">Deploy di Clincoo menayangkan berkas yang tersimpan, bukan yang masih ada di kepala. Setelah URL publik hidup, klik setiap item menu, tombol hero, dan tautan footer.</p><p class=\"mb-4\">Cari tiga hal: tautan yang masih mengarah ke pratinjau editor, path relatif yang pecah dari subfolder, dan halaman yang judulnya masih Untitled.</p><p class=\"mb-4\">Perbaiki di editor, simpan, lalu deploy ulang. Jangan bagikan URL sebelum satu putaran klik selesai di HP dan desktop.</p><p class=\"mb-4\">Tautan yang utuh lebih meyakinkan daripada desain baru. Pengunjung menilai situs dari apa yang bisa mereka buka, bukan dari niatmu.</p>",
          source: "Clincoo", sourceUrl: "https://app.clincoo.buzz/", sourceSnippet: "Platform Clincoo",
          source2: "Clincoo Editor", sourceUrl2: "https://editor.clincoo.buzz/", sourceSnippet2: "Editor Clincoo",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Praktik terbaik web"
        },
        "en": {
          title: "Check Every Internal Link after a Clincoo Deploy",
          desc: "Live sites often keep preview links or broken paths. Click through once on the public URL.",
          content: "<p class=\"mb-4\">A Clincoo deploy publishes saved files, not what is still in your head. After the public URL is live, click every menu item, hero button, and footer link.</p><p class=\"mb-4\">Look for three things: links that still point at editor preview, relative paths that break from a subfolder, and pages whose title is still Untitled.</p><p class=\"mb-4\">Fix them in the editor, save, then redeploy. Do not share the URL until one click-through is done on phone and desktop.</p><p class=\"mb-4\">Working links convince more than a new design. Visitors judge the site by what they can open, not by your intention.</p>",
          source: "Clincoo", sourceUrl: "https://app.clincoo.buzz/", sourceSnippet: "Clincoo platform",
          source2: "Clincoo Editor", sourceUrl2: "https://editor.clincoo.buzz/", sourceSnippet2: "Clincoo editor",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Web best practices"
        }
      }
    },
    {
      id: "deploy-uji-kecepatan-halaman-pertama",
      langs: {
        "id": {
          title: "Uji Kecepatan Halaman Pertama setelah Deploy",
          desc: "Situs Clincoo yang berat di layar pertama membuat pengunjung mundur. Cek gambar dan skrip sebelum merayakan rilis.",
          content: "<p class=\"mb-4\">Setelah deploy, buka URL publik di jendela baru. Rasakan berapa lama hero dan teks pertama muncul. Kalau spinner lama, biasanya gambar terlalu besar atau skrip tidak perlu di beranda.</p><p class=\"mb-4\">Kembali ke editor Clincoo: kompres hero, tunda skrip yang tidak dipakai di layar pertama, hapus font yang tidak terpakai.</p><p class=\"mb-4\">Uji lagi di HP dengan jaringan yang tidak ideal. Deploy ulang hanya setelah halaman pertama terasa ringan.</p><p class=\"mb-4\">Rilis yang cepat dibaca lebih ramah daripada rilis yang penuh efek. Pengunjung pertama jarang menunggu.</p>",
          source: "Clincoo", sourceUrl: "https://app.clincoo.buzz/", sourceSnippet: "Platform Clincoo",
          source2: "Clincoo Editor", sourceUrl2: "https://editor.clincoo.buzz/", sourceSnippet2: "Editor Clincoo",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Praktik terbaik web"
        },
        "en": {
          title: "Test First-Page Speed after You Deploy",
          desc: "A Clincoo site that is heavy on the first screen makes visitors leave. Check images and scripts before celebrating the release.",
          content: "<p class=\"mb-4\">After deploy, open the public URL in a new window. Notice how long the hero and first text take. A long wait usually means oversized images or scripts the home page does not need.</p><p class=\"mb-4\">Back in the Clincoo editor: compress the hero, defer scripts unused on the first screen, drop unused fonts.</p><p class=\"mb-4\">Test again on a phone with imperfect network. Redeploy only when the first page feels light.</p><p class=\"mb-4\">A release that loads quickly is kinder than one full of effects. First visitors rarely wait.</p>",
          source: "Clincoo", sourceUrl: "https://app.clincoo.buzz/", sourceSnippet: "Clincoo platform",
          source2: "Clincoo Editor", sourceUrl2: "https://editor.clincoo.buzz/", sourceSnippet2: "Clincoo editor",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Web best practices"
        }
      }
    },
    {
      id: "deploy-siapkan-pesan-jika-rilis-gagal",
      langs: {
        "id": {
          title: "Siapkan Pesan Singkat jika Deploy Clincoo Gagal",
          desc: "Kegagalan terbitkan tidak harus panik. Catat apa yang sudah tersimpan dan apa yang boleh diulang.",
          content: "<p class=\"mb-4\">Kadang tombol Deploy di Clincoo tidak selesai karena jaringan atau berkas yang belum tersimpan. Jangan langsung merombak proyek.</p><p class=\"mb-4\">Cek dulu: file terakhir sudah disimpan, pratinjau masih utuh, dan URL lama masih membuka versi sebelumnya. Situs live jarang hilang hanya karena satu percobaan gagal.</p><p class=\"mb-4\">Tulis catatan satu baris: apa yang ingin terbit dan apa yang sudah aman. Ulangi deploy setelah koneksi tenang.</p><p class=\"mb-4\">Rilis yang sabar menjaga pengunjung. Kamu punya editor; situs publik tidak harus ikut gemetar.</p>",
          source: "Clincoo", sourceUrl: "https://app.clincoo.buzz/", sourceSnippet: "Platform Clincoo",
          source2: "Clincoo Editor", sourceUrl2: "https://editor.clincoo.buzz/", sourceSnippet2: "Editor Clincoo",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Praktik terbaik web"
        },
        "en": {
          title: "Keep a Short Plan if a Clincoo Deploy Fails",
          desc: "A failed publish does not have to be panic. Note what is saved and what is safe to retry.",
          content: "<p class=\"mb-4\">Sometimes the Clincoo Deploy button does not finish because of the network or unsaved files. Do not rebuild the project at once.</p><p class=\"mb-4\">Check first: the latest files are saved, preview is still intact, and the old URL still opens the previous version. A live site rarely vanishes after one failed attempt.</p><p class=\"mb-4\">Write one line: what you meant to publish and what is already safe. Retry deploy when the connection is calm.</p><p class=\"mb-4\">A patient release protects visitors. You have the editor; the public site does not need to shake with you.</p>",
          source: "Clincoo", sourceUrl: "https://app.clincoo.buzz/", sourceSnippet: "Clincoo platform",
          source2: "Clincoo Editor", sourceUrl2: "https://editor.clincoo.buzz/", sourceSnippet2: "Clincoo editor",
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
