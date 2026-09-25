// Clincoo Blog — artikel onboarding tambahan 2026-09-25 WIB
(function(){
  var extra = [
    {
      id: "onboarding-buat-folder-assets",
      langs: {
        "id": {
          title: "Buat Folder assets di Awal Proyek Clincoo",
          desc: "File gambar dan font yang tercecer di akar proyek sulit di-deploy dan mudah tertimpa.",
          content: "<p class=\"mb-4\">Pemula menaruh logo.png di samping index.html lalu menambah halaman di subfolder. Path relatif pecah.</p><p class=\"mb-4\">Di editor.clincoo.buzz buat folder assets/img dan assets/css sejak hari pertama. Semua unggahan masuk ke situ.</p><p class=\"mb-4\">Tulis path relatif dari setiap halaman. Jangan andalkan path absolut domain pratinjau.</p><p class=\"mb-4\">Minta AI hanya memindahkan tautan aset ke folder baru. Tempel daftar file akar yang berantakan.</p><p class=\"mb-4\">Clincoo menayangkan path apa adanya. Folder aset yang rapi menjaga app.clincoo.buzz tetap bisa diikuti.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Create an assets Folder at the Start of a Clincoo Project",
          desc: "Image and font files scattered at the project root are hard to deploy and easy to overwrite.",
          content: "<p class=\"mb-4\">Beginners drop logo.png next to index.html then add pages in a subfolder. Relative paths break.</p><p class=\"mb-4\">In editor.clincoo.buzz create assets/img and assets/css on day one. Put every upload there.</p><p class=\"mb-4\">Write relative paths from each page. Do not rely on the preview domain as an absolute path.</p><p class=\"mb-4\">Ask AI only to move asset links into the new folder. Paste the messy root file list.</p><p class=\"mb-4\">Clincoo serves paths as saved. A tidy assets folder keeps app.clincoo.buzz followable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "onboarding-satu-cta-beranda",
      langs: {
        "id": {
          title: "Pasang Satu CTA Jelas di Beranda Clincoo",
          desc: "Beranda dengan lima tombol membuat pengunjung baru tidak tahu langkah pertama.",
          content: "<p class=\"mb-4\">Proyek baru Clincoo sering punya tombol Mulai, Pelajari, Demo, dan Login sekaligus. Tidak ada yang menonjol.</p><p class=\"mb-4\">Pilih satu aksi: hubungi, daftar, atau buka editor.clincoo.buzz. Tombol lain jadi tautan teks.</p><p class=\"mb-4\">Uji di lebar sempit. CTA harus terlihat tanpa scroll panjang.</p><p class=\"mb-4\">Minta AI merapikan hero menjadi satu tombol. Tempel draf beranda yang ada.</p><p class=\"mb-4\">Clincoo di app.clincoo.buzz dinilai dari langkah pertama. Satu CTA lebih mudah diikuti daripada lima.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Put One Clear CTA on the Clincoo Home Page",
          desc: "A home page with five buttons leaves a new visitor unsure of the first step.",
          content: "<p class=\"mb-4\">New Clincoo projects often ship Start, Learn, Demo, and Login at once. Nothing stands out.</p><p class=\"mb-4\">Pick one action: contact, sign up, or open editor.clincoo.buzz. Turn the rest into text links.</p><p class=\"mb-4\">Test a narrow width. The CTA must be visible without a long scroll.</p><p class=\"mb-4\">Ask AI to tighten the hero to one button. Paste the current home draft.</p><p class=\"mb-4\">Clincoo on app.clincoo.buzz is judged by the first step. One CTA is easier to follow than five.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "onboarding-catat-akun-dan-domain",
      langs: {
        "id": {
          title: "Catat Akun Deploy dan Domain Clincoo di README",
          desc: "Tanpa catatan akun, tim mencari-cari siapa yang punya akses terbit setelah seminggu.",
          content: "<p class=\"mb-4\">Seseorang menerbitkan ke app.clincoo.buzz lalu cuti. Yang lain tidak tahu email akun.</p><p class=\"mb-4\">Tulis di README: siapa pemilik proyek, URL editor.clincoo.buzz, URL live, dan domain blog jika ada.</p><p class=\"mb-4\">Jangan simpan kata sandi di repo. Catat hanya peran dan tautan.</p><p class=\"mb-4\">Minta AI merancang blok README lima baris. Tempel URL yang sudah kamu punya.</p><p class=\"mb-4\">Clincoo memisahkan editor dan situs live. Catatan akun menjaga rilis tidak macet.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Record the Clincoo Deploy Account and Domain in the README",
          desc: "Without an account note, the team hunts for who can publish after a week.",
          content: "<p class=\"mb-4\">Someone publishes to app.clincoo.buzz then goes on leave. Nobody else knows the account email.</p><p class=\"mb-4\">Write in the README: project owner, editor.clincoo.buzz URL, live URL, and the blog domain if any.</p><p class=\"mb-4\">Do not store passwords in the repo. Record only roles and links.</p><p class=\"mb-4\">Ask AI to draft a five-line README block. Paste the URLs you already have.</p><p class=\"mb-4\">Clincoo separates the editor from the live site. An account note keeps releases from stalling.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "onboarding-uji-di-hp-sendiri",
      langs: {
        "id": {
          title: "Uji Situs Clincoo di HP Sendiri sebelum Rilis Pertama",
          desc: "Pratinjau desktop menyembunyikan tombol yang sulit diketuk dan teks yang overflow di ponsel.",
          content: "<p class=\"mb-4\">Beranda terlihat rapi di editor lebar. Di HP pribadi, CTA tertutup keyboard dan menu tidak terbuka.</p><p class=\"mb-4\">Buka URL pratinjau editor.clincoo.buzz di ponsel nyata. Ketuk setiap tautan dan form.</p><p class=\"mb-4\">Catat lebar dan browser. Jangan andalkan mode perangkat DevTools saja untuk rilis pertama.</p><p class=\"mb-4\">Minta AI memperbaiki satu wadah yang pecah. Tempel tangkapan layar HP.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. Uji HP sendiri melindungi pengunjung pertama di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test the Clincoo Site on Your Own Phone before the First Release",
          desc: "Desktop preview hides buttons that are hard to tap and text that overflows on a phone.",
          content: "<p class=\"mb-4\">Home looks tidy in a wide editor. On a real phone the CTA sits under the keyboard and the menu stays closed.</p><p class=\"mb-4\">Open the editor.clincoo.buzz preview URL on a real phone. Tap every link and form.</p><p class=\"mb-4\">Note the width and browser. Do not rely on DevTools device mode alone for the first release.</p><p class=\"mb-4\">Ask AI to fix one broken container. Paste the phone screenshot.</p><p class=\"mb-4\">Clincoo ships the CSS you save. A real-phone test protects the first visitor on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "onboarding-jangan-kejar-sempurna-hari-satu",
      langs: {
        "id": {
          title: "Jangan Kejar Sempurna di Hari Pertama Proyek Clincoo",
          desc: "Animasi, PWA, dan lima halaman kosong menunda beranda yang bisa dibaca.",
          content: "<p class=\"mb-4\">Pemula meminta AI menambah dark mode, service worker, dan toko di hari yang sama. Beranda masih Lorem.</p><p class=\"mb-4\">Batasi hari pertama: judul, satu paragraf, satu CTA, favicon. Simpan di editor.clincoo.buzz dan pratinjau.</p><p class=\"mb-4\">Fitur lain masuk daftar. Kerjakan setelah pengunjung bisa memahami tujuan situs.</p><p class=\"mb-4\">Minta AI menolak scope di luar beranda. Tempel kalimat tujuan proyek.</p><p class=\"mb-4\">Clincoo di app.clincoo.buzz lebih berguna dengan halaman sederhana yang hidup daripada kerangka sempurna.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Chase Perfect on Day One of a Clincoo Project",
          desc: "Animation, a PWA, and five empty pages delay a home page people can actually read.",
          content: "<p class=\"mb-4\">Beginners ask AI for dark mode, a service worker, and a shop on the same day. Home is still Lorem.</p><p class=\"mb-4\">Limit day one: a title, one paragraph, one CTA, a favicon. Save in editor.clincoo.buzz and preview.</p><p class=\"mb-4\">Other features go on a list. Work them after a visitor can understand the site goal.</p><p class=\"mb-4\">Ask AI to refuse scope beyond the home page. Paste the project goal sentence.</p><p class=\"mb-4\">Clincoo on app.clincoo.buzz is more useful with a simple live page than a perfect skeleton.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["onboarding"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["onboarding"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
