// Clincoo Blog — artikel security tambahan 2026-09-19
(function(){
  var extra = [
    {
      id: "security-jangan-andalkan-localstorage-untuk-rahasia",
      langs: {
        "id": {
          title: "Jangan Andalkan localStorage untuk Menyimpan Rahasia di Clincoo",
          desc: "Data di localStorage ikut terlihat di perangkat pengunjung. Jangan taruh token atau data pribadi di sana.",
          content: "<p class=\"mb-4\">Banyak contoh JavaScript memakai <code>localStorage</code> supaya form atau preferensi \"ingat\" pengunjung. Di situs Clincoo yang statis, itu berguna untuk tema gelap atau draft singkat — bukan untuk token, email orang lain, atau hasil form yang baru saja dikirim.</p><p class=\"mb-4\">Siapa pun yang membuka DevTools di HP atau laptop bisa membaca kunci penyimpanan itu. Asisten AI kadang menempel pola login palsu dengan token di <code>localStorage</code>. Hapus pola itu sebelum deploy ke subdomain <code>.clinqoo.biz.id</code>.</p><p class=\"mb-4\">Kalau butuh sesi, pindahkan ke layanan yang memang mengelola cookie HttpOnly di backend. Proyek Clincoo tidak menyembunyikan storage browser.</p><p class=\"mb-4\">Sebelum rilis, cari kata <code>localStorage.setItem</code> di editor. Tanyakan: apakah nilai itu boleh dibaca orang di kafe yang meminjam perangkat? Jika tidak, jangan simpan.</p><p class=\"mb-4\">Penyimpanan lokal adalah catatan di sisi klien. Clincoo mempercepat halaman; kamu yang memilih data mana yang pantas tinggal di perangkat.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Do Not Rely on localStorage to Hide Secrets on Clincoo",
          desc: "Data in localStorage is visible on the visitor's device. Do not put tokens or personal data there.",
          content: "<p class=\"mb-4\">Many JavaScript examples use <code>localStorage</code> so a form or preference \"remembers\" the visitor. On a static Clincoo site that helps with a dark theme or a short draft — not with tokens, other people's emails, or a form payload that was just submitted.</p><p class=\"mb-4\">Anyone who opens DevTools on a phone or laptop can read those keys. The AI assistant sometimes pastes a fake login pattern with a token in <code>localStorage</code>. Remove that pattern before you deploy to a <code>.clinqoo.biz.id</code> subdomain.</p><p class=\"mb-4\">If you need a session, move it to a service that sets HttpOnly cookies on a backend. A Clincoo project does not hide browser storage.</p><p class=\"mb-4\">Before release, search the editor for <code>localStorage.setItem</code>. Ask: may someone in a cafe who borrowed the device read this value? If not, do not store it.</p><p class=\"mb-4\">Local storage is a client-side notebook. Clincoo makes pages fast; you choose which data is allowed to stay on the device.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "security-periksa-tautan-keluar-sebelum-dibagikan",
      langs: {
        "id": {
          title: "Periksa Tautan Keluar sebelum Situs Clincoo Dibagikan",
          desc: "Tombol, footer, dan embed bisa mengarah ke domain yang salah. Audit tautan eksternal di pratinjau.",
          content: "<p class=\"mb-4\">Situs Clincoo sering memuat tautan media sosial, marketplace, atau dokumentasi. Satu huruf salah di <code>href</code> bisa mengirim pengunjung ke domain tiruan.</p><p class=\"mb-4\">Buka pratinjau editor, klik setiap tautan di header, hero, dan footer. Pastikan protokolnya HTTPS dan nama host persis. Jangan andalkan teks tautan saja.</p><p class=\"mb-4\">Jika AI menambahkan tombol \"Login dengan...\" ke layanan yang tidak kamu pakai, hapus. Tautan palsu merusak kepercayaan lebih cepat daripada tata letak yang sederhana.</p><p class=\"mb-4\">Untuk tautan yang membuka tab baru, tambahkan <code>rel=\"noopener\"</code>. Itu kebiasaan kecil yang membatasi halaman tujuan mengontrol jendela asal.</p><p class=\"mb-4\">Audit tautan adalah bagian rilis, bukan pekerjaan sampingan. Setelah lolos pratinjau, baru deploy.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Check Outbound Links before You Share a Clincoo Site",
          desc: "Buttons, footers, and embeds can point at the wrong domain. Audit external links in preview.",
          content: "<p class=\"mb-4\">Clincoo sites often load social, marketplace, or docs links. One wrong character in an <code>href</code> can send visitors to a look-alike domain.</p><p class=\"mb-4\">Open the editor preview and click every link in the header, hero, and footer. Confirm HTTPS and the exact hostname. Do not trust the link text alone.</p><p class=\"mb-4\">If the AI adds a \"Log in with...\" button for a service you do not use, delete it. A fake link damages trust faster than a simple layout.</p><p class=\"mb-4\">For links that open a new tab, add <code>rel=\"noopener\"</code>. That small habit stops the destination page from controlling the original window.</p><p class=\"mb-4\">Link audit is part of release, not a side task. Only deploy after preview passes.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "security-cadangkan-sebelum-ai-menyentuh-banyak-file",
      langs: {
        "id": {
          title: "Cadangkan Proyek Clincoo sebelum AI Menyentuh Banyak File",
          desc: "Perubahan massal dari asisten bisa menimpa kerja semalam. Ekspor atau salin dulu, baru izinkan edit besar.",
          content: "<p class=\"mb-4\">Asisten AI di Clincoo berguna saat merapikan CSS atau menambahkan seksi. Risiko muncul saat permintaan bersifat luas: \"perbaiki seluruh situs\" tanpa batas file.</p><p class=\"mb-4\">Sebelum perintah seperti itu, unduh ZIP atau salin file penting ke folder cadangan di workspace. Jika hasilnya buruk, kamu masih punya versi yang sudah kamu pahami.</p><p class=\"mb-4\">Minta AI merinci file yang akan diubah. Setujui daftar pendek. Keamanan di sini bukan hanya kunci API — itu juga integritas kerja kamu.</p><p class=\"mb-4\">Setelah edit, buka pratinjau dan bandingkan halaman utama. Jika ada skrip atau form yang tiba-tiba muncul, jangan deploy.</p><p class=\"mb-4\">Cadangan lima menit menghemat sore yang hilang. Clincoo mempercepat iterasi; kamu yang mengatur irama aman.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Back Up a Clincoo Project before the AI Touches Many Files",
          desc: "A bulk change from the assistant can overwrite last night's work. Export or copy first, then allow a large edit.",
          content: "<p class=\"mb-4\">The Clincoo AI assistant helps when you tidy CSS or add a section. Risk appears when the request is wide: \"fix the whole site\" with no file limit.</p><p class=\"mb-4\">Before a command like that, download a ZIP or copy important files into a backup folder in the workspace. If the result is poor, you still have a version you understand.</p><p class=\"mb-4\">Ask the AI to list the files it will change. Approve a short list. Security here is not only API keys — it is also the integrity of your work.</p><p class=\"mb-4\">After the edit, open preview and compare the home page. If a script or form appears out of nowhere, do not deploy.</p><p class=\"mb-4\">A five-minute backup saves a lost afternoon. Clincoo speeds up iteration; you set a safe pace.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "security-jangan-unggah-file-yang-tidak-untuk-publik",
      langs: {
        "id": {
          title: "Jangan Unggah File yang Tidak untuk Publik ke Deploy Clincoo",
          desc: "Catatan klien, invoice, dan dump uji bisa ikut terbit jika ada di workspace. Saring sebelum rilis.",
          content: "<p class=\"mb-4\">Workspace Clincoo terasa seperti folder kerja. Mudah menaruh <code>catatan.txt</code>, screenshot chat, atau CSV uji di samping <code>index.html</code>. Setelah deploy, URL file itu sering bisa ditebak.</p><p class=\"mb-4\">Jangan andalkan nama file yang \"tidak kentara\". Pengunjung atau crawler bisa menemukan tautan dari listing, riwayat, atau tebakan path.</p><p class=\"mb-4\">Simpan dokumen pribadi di luar proyek yang akan dirilis. Jika AI membuat file contoh berisi data fiktif yang menyerupai data nyata, ganti atau hapus.</p><p class=\"mb-4\">Sebelum deploy, lihat daftar file di editor atau terminal. Hapus <code>.bak</code>, dump, dan folder yang tidak ditautkan dari halaman.</p><p class=\"mb-4\">Yang tidak kamu tautkan tetap bisa terbuka jika path-nya diketahui. Rilis bersih artinya workspace bersih.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Do Not Upload Files That Are Not Meant to Be Public",
          desc: "Client notes, invoices, and test dumps can go live if they sit in the workspace. Filter before release.",
          content: "<p class=\"mb-4\">A Clincoo workspace feels like a working folder. It is easy to drop <code>notes.txt</code>, a chat screenshot, or a test CSV next to <code>index.html</code>. After deploy, that file URL is often guessable.</p><p class=\"mb-4\">Do not rely on an \"obscure\" filename. Visitors or crawlers can find a link from a listing, history, or a guessed path.</p><p class=\"mb-4\">Keep personal documents outside the project you will release. If the AI creates a sample file with data that looks real, replace or delete it.</p><p class=\"mb-4\">Before deploy, scan the file list in the editor or terminal. Remove <code>.bak</code> files, dumps, and folders the pages never link to.</p><p class=\"mb-4\">What you do not link can still open if the path is known. A clean release means a clean workspace.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "security-pesan-error-jangan-membocorkan-path",
      langs: {
        "id": {
          title: "Pesan Error di Situs Clincoo Jangan Membocorkan Path dan Data",
          desc: "Alert dan teks merah yang terlalu detail membantu penyerang tebakan. Tampilkan pesan ramah, simpan detail untukmu.",
          content: "<p class=\"mb-4\">Saat fetch gagal atau form tidak terkirim, contoh kode sering memakai <code>alert(error)</code> atau menempel seluruh objek ke halaman. Di produksi Clincoo, itu bisa menampilkan URL internal, status, atau cuplikan data.</p><p class=\"mb-4\">Tulis pesan yang bisa dibaca manusia: \"Pesan belum terkirim, coba lagi.\" Detail teknis cukup kamu lihat di konsol saat menguji di editor.</p><p class=\"mb-4\">Jika AI menambahkan stack trace ke DOM, hapus sebelum deploy. Pengunjung tidak perlu tahu nama file skrip atau baris yang gagal.</p><p class=\"mb-4\">Uji jalur gagal di pratinjau: putuskan jaringan atau salahkan URL sengaja. Pastikan halaman tetap sopan.</p><p class=\"mb-4\">Error yang tenang melindungi pengunjung dan setup kamu. Clincoo menampilkan apa yang kamu tulis — pilih kalimat yang aman.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Clincoo Error Messages Should Not Leak Paths or Data",
          desc: "Over-detailed alerts help someone guess your setup. Show a friendly message; keep the details for yourself.",
          content: "<p class=\"mb-4\">When a fetch fails or a form does not send, sample code often uses <code>alert(error)</code> or dumps the whole object onto the page. On a live Clincoo site that can expose an internal URL, a status, or a data snippet.</p><p class=\"mb-4\">Write a human message: \"The message did not send, try again.\" Keep technical detail for the console while you test in the editor.</p><p class=\"mb-4\">If the AI adds a stack trace to the DOM, remove it before deploy. Visitors do not need the script filename or the failing line.</p><p class=\"mb-4\">Test the failure path in preview: drop the network or break the URL on purpose. Make sure the page stays polite.</p><p class=\"mb-4\">A calm error protects visitors and your setup. Clincoo shows what you write — choose a safe sentence.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
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
