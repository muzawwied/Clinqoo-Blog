// Clincoo Blog — artikel security tambahan 2026-09-19 sore
(function(){
  var extra = [
    {
      id: "security-komentar-html-jangan-simpan-rahasia",
      langs: {
        "id": {
          title: "Komentar HTML di Clincoo Bukan Tempat Menyimpan Rahasia",
          desc: "Teks di <!-- --> ikut terbit ke pengunjung. Jangan sisipkan token, catatan klien, atau URL internal di komentar.",
          content: "<p class=\"mb-4\">Editor Clincoo memudahkan menandai sisa kerja dengan komentar HTML. Kebiasaan itu aman untuk TODO tata letak. Tidak aman jika isinya token uji, nomor rekening, atau tautan panel yang tidak untuk publik.</p><p class=\"mb-4\">Setelah deploy ke subdomain, siapa pun bisa lihat sumber halaman. Komentar tidak hilang hanya karena tidak tampil di layar.</p><p class=\"mb-4\">Sebelum rilis, cari <code>&lt;!--</code> di editor. Pindahkan catatan pribadi ke file di luar workspace yang akan diterbitkan, atau hapus.</p><p class=\"mb-4\">Jika AI menempel komentar berisi contoh kunci, bersihkan. Contoh yang menyerupai data nyata tetap berisiko.</p><p class=\"mb-4\">Komentar adalah catatan di file publik. Clincoo menayangkan file apa adanya — kamu yang memilih kalimat yang boleh dibaca orang lain.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "HTML Comments on Clincoo Are Not a Vault for Secrets",
          desc: "Text inside <!-- --> ships to visitors. Do not leave tokens, client notes, or internal URLs in comments.",
          content: "<p class=\"mb-4\">The Clincoo editor makes it easy to mark leftover work with HTML comments. That habit is fine for layout TODOs. It is not fine when the text holds a test token, an account number, or a panel URL that should stay private.</p><p class=\"mb-4\">After you deploy to a subdomain, anyone can view page source. A comment does not vanish just because it is hidden on screen.</p><p class=\"mb-4\">Before release, search the editor for <code>&lt;!--</code>. Move private notes out of the published workspace, or delete them.</p><p class=\"mb-4\">If the AI pastes a comment that contains a sample key, clean it. A sample that looks real is still a risk.</p><p class=\"mb-4\">A comment is a note in a public file. Clincoo ships the file as-is — you choose which sentences strangers may read.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "security-izin-browser-kamera-lokasi",
      langs: {
        "id": {
          title: "Jangan Minta Izin Kamera atau Lokasi jika Situs Clincoo Tidak Memakainya",
          desc: "API geolocation dan getUserMedia memunculkan dialog sistem. Minta hanya jika fitur halaman benar-benar membutuhkannya.",
          content: "<p class=\"mb-4\">Contoh kode di internet sering menyertakan pelacak lokasi atau pratinjau kamera. Di halaman profil atau undangan acara Clincoo, dialog izin itu terasa mencurigakan.</p><p class=\"mb-4\">Buka pratinjau di HP. Jika browser meminta lokasi tanpa ada peta atau fitur terdekat, hapus pemanggilan itu dari skrip.</p><p class=\"mb-4\">Asisten AI kadang menempel snippet \"modern\" yang meminta izin terlalu awal, bahkan di <code>DOMContentLoaded</code>. Tunda permintaan sampai pengunjung menekan tombol yang jelas.</p><p class=\"mb-4\">Jelaskan di UI mengapa izin dibutuhkan. Tanpa kalimat itu, pengunjung akan menutup tab.</p><p class=\"mb-4\">Izin browser adalah janji. Clincoo tidak memaksa API perangkat; kamu yang memilih kapan dialog muncul.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Do Not Ask for Camera or Location if the Clincoo Site Does Not Need It",
          desc: "Geolocation and getUserMedia trigger a system dialog. Ask only when the page feature truly needs it.",
          content: "<p class=\"mb-4\">Sample code online often includes a location tracker or a camera preview. On a Clincoo profile or event page that dialog feels suspicious.</p><p class=\"mb-4\">Open preview on a phone. If the browser asks for location without a map or nearby feature, remove that call from the script.</p><p class=\"mb-4\">The AI assistant sometimes pastes a \"modern\" snippet that requests permission too early, even on <code>DOMContentLoaded</code>. Wait until the visitor taps a clear button.</p><p class=\"mb-4\">Explain in the UI why the permission is needed. Without that sentence, people close the tab.</p><p class=\"mb-4\">A browser permission is a promise. Clincoo does not force device APIs; you choose when the dialog appears.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "security-embed-admin-dan-iframe-asing",
      langs: {
        "id": {
          title: "Hindari Embed Panel Admin atau Iframe Asing di Situs Clincoo",
          desc: "Iframe ke dasbor, pembayaran belum diverifikasi, atau halaman login orang lain merusak kepercayaan pengunjung.",
          content: "<p class=\"mb-4\">Mudah menempel <code>iframe</code> agar form atau grafik \"langsung hidup\". Risiko muncul jika sumbernya panel admin, sandbox yang masih memakai HTTP, atau domain yang tidak kamu kenali.</p><p class=\"mb-4\">Periksa atribut <code>src</code> satu per satu di editor. Jika AI menambahkan iframe analytics atau chat yang tidak kamu minta, hapus sebelum deploy.</p><p class=\"mb-4\">Untuk pembayaran atau login, arahkan ke halaman resmi di tab baru — jangan bungkus dasbor pihak ketiga di dalam layout Clincoo.</p><p class=\"mb-4\">Tambahkan <code>sandbox</code> jika embed memang diperlukan, dan batasi fitur yang diizinkan.</p><p class=\"mb-4\">Halaman statis tetap bisa menipu jika memuat UI orang lain. Clincoo merilis file kamu; kamu yang menjaga batas iframe.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Avoid Embedding Admin Panels or Unknown Iframes on Clincoo",
          desc: "An iframe to a dashboard, an unverified checkout, or someone else's login page breaks visitor trust.",
          content: "<p class=\"mb-4\">It is easy to paste an <code>iframe</code> so a form or chart \"just works\". Risk appears when the source is an admin panel, an HTTP sandbox, or a domain you do not recognize.</p><p class=\"mb-4\">Check every <code>src</code> in the editor. If the AI adds an analytics or chat iframe you did not ask for, delete it before deploy.</p><p class=\"mb-4\">For payments or login, send people to the official page in a new tab — do not wrap a third-party dashboard inside a Clincoo layout.</p><p class=\"mb-4\">Add <code>sandbox</code> when an embed is truly required, and limit which features it may use.</p><p class=\"mb-4\">A static page can still deceive if it loads someone else's UI. Clincoo ships your files; you keep the iframe boundary.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "security-periksa-cdn-sebelum-rilis",
      langs: {
        "id": {
          title: "Periksa Domain CDN dan Hash Skrip sebelum Rilis Clincoo",
          desc: "Font dan pustaka dari CDN merapikan halaman, tetapi domain salah atau versi tanpa integritas bisa menyisipkan kode asing.",
          content: "<p class=\"mb-4\">Template Clincoo kadang memakai font atau ikon dari CDN. Itu wajar jika host-nya resmi dan URL-nya HTTPS.</p><p class=\"mb-4\">Salin URL skrip ke tab baru. Pastikan merek di halaman itu sama dengan yang kamu maksud. Jangan pakai mirror acak dari hasil pencarian.</p><p class=\"mb-4\">Jika ada atribut <code>integrity</code>, jangan hapus hanya karena AI bilang \"biar simpel\". Hash itu menahan perubahan diam-diam di file jarak jauh.</p><p class=\"mb-4\">Lebih aman lagi: unduh font yang kamu butuhkan ke workspace dan tautkan secara lokal, lalu lepas CDN yang tidak perlu.</p><p class=\"mb-4\">Ketergantungan luar adalah rantai. Clincoo menayangkan tautan yang kamu tulis — pilih rantai yang pendek dan jelas.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Check CDN Domains and Script Hashes before a Clincoo Release",
          desc: "CDN fonts and libraries tidy a page, but a wrong host or a file without integrity can inject foreign code.",
          content: "<p class=\"mb-4\">Clincoo templates sometimes load fonts or icons from a CDN. That is fine when the host is official and the URL is HTTPS.</p><p class=\"mb-4\">Paste the script URL into a new tab. Confirm the brand on that page matches what you meant. Do not use a random mirror from a search result.</p><p class=\"mb-4\">If an <code>integrity</code> attribute exists, do not delete it just because the AI said \"keep it simple\". That hash blocks a silent change in the remote file.</p><p class=\"mb-4\">Safer still: download the fonts you need into the workspace, link them locally, and drop CDNs you do not need.</p><p class=\"mb-4\">An outside dependency is a chain. Clincoo ships the links you write — pick a short, clear chain.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "security-form-action-hanya-ke-endpoint-resmi",
      langs: {
        "id": {
          title: "Arahkan Atribut Action Form Clincoo hanya ke Endpoint Resmi",
          desc: "Form yang cantik tetap berbahaya jika action mengirim data ke domain yang tidak kamu miliki.",
          content: "<p class=\"mb-4\">Banyak template menaruh <code>action=\"#\"</code> atau menunjuk layanan form pihak ketiga. Sebelum deploy, baca atribut itu dengan tenang.</p><p class=\"mb-4\">Jika kamu memakai layanan kirim pesan, pastikan akunnya milikmu dan domain di dokumentasi resmi. Jangan menempel endpoint dari cuplikan AI tanpa membuka situsnya.</p><p class=\"mb-4\">Uji di pratinjau: isi dummy, kirim, lihat jaringan. Data harus pergi ke host yang kamu kenali.</p><p class=\"mb-4\">Jangan kumpulkan field yang tidak kamu butuhkan. Nama dan pesan cukup untuk banyak halaman kontak Clincoo.</p><p class=\"mb-4\">Form adalah perjanjian kecil dengan pengunjung. Clincoo merilis markup-mu; kamu yang menjaga tujuan pengiriman.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Point Clincoo Form Actions Only at Official Endpoints",
          desc: "A pretty form is still unsafe if action sends data to a domain you do not own.",
          content: "<p class=\"mb-4\">Many templates set <code>action=\"#\"</code> or point at a third-party form service. Before deploy, read that attribute slowly.</p><p class=\"mb-4\">If you use a message service, confirm the account is yours and the domain matches official docs. Do not paste an endpoint from an AI snippet without opening the site.</p><p class=\"mb-4\">Test in preview: fill dummy values, submit, watch the network. Data should go to a host you recognize.</p><p class=\"mb-4\">Do not collect fields you do not need. Name and a message are enough for many Clincoo contact pages.</p><p class=\"mb-4\">A form is a small agreement with the visitor. Clincoo ships your markup; you guard where it is sent.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["security"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["security"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
