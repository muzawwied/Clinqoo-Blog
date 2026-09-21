// Clincoo Blog — artikel navigasi tambahan 2026-09-21 WIB
(function(){
  var extra = [
    {
      id: "nav-skip-link-ke-konten",
      langs: {
        "id": {
          title: "Tambah Skip Link ke Konten Utama di Clincoo",
          desc: "Pengguna keyboard butuh cara loncat melewati menu. Satu tautan Skip to content cukup.",
          content: '<p class="mb-4">Menu Clincoo yang panjang memaksa pengguna keyboard menekan Tab berkali-kali sebelum sampai ke judul halaman.</p><p class="mb-4">Letakkan tautan Skip to content sebagai elemen pertama di body. Arahkan ke id pada elemen main. Sembunyikan visual sampai fokus.</p><p class="mb-4">Uji di pratinjau editor.clincoo.buzz: Tab sekali, tautan muncul, Enter, fokus pindah ke konten. Jangan pakai display none yang menghapus dari urutan Tab.</p><p class="mb-4">Minta AI menambah satu tautan dan satu id. Tolak pustaka aksesibilitas yang memuat skrip besar.</p><p class="mb-4">Clincoo adalah HTML statis. Skip link adalah tautan biasa, bukan widget.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add a Skip Link to Main Content in Clincoo",
          desc: "Keyboard users need a way past the menu. One Skip to content link is enough.",
          content: '<p class="mb-4">A long Clincoo menu forces keyboard users to press Tab many times before they reach the page title.</p><p class="mb-4">Place a Skip to content link as the first element in the body. Point it at an id on the main element. Hide it visually until it receives focus.</p><p class="mb-4">Test in the editor.clincoo.buzz preview: Tab once, the link appears, Enter, focus moves to the content. Do not use display none, which removes it from the tab order.</p><p class="mb-4">Ask the AI to add one link and one id. Refuse an accessibility library that loads a large script.</p><p class="mb-4">Clincoo is static HTML. A skip link is a normal link, not a widget.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "nav-menu-pendek-enam-item",
      langs: {
        "id": {
          title: "Batasi Menu Clincoo Maksimal Enam Item",
          desc: "Menu yang berisi sepuluh tautan membuat pengunjung ragu. Pilih halaman inti saja.",
          content: '<p class="mb-4">Template Clincoo sering menaruh setiap halaman ke header. Hasilnya baris tautan yang pecah di layar sempit.</p><p class="mb-4">Simpan Beranda, Layanan, Tentang, Kontak, plus satu atau dua halaman inti. Pindahkan sisanya ke footer atau halaman daftar.</p><p class="mb-4">Buka setiap template di editor.clincoo.buzz. Hitung item. Jika lebih dari enam, potong. Jangan sembunyikan kelebihan di dropdown yang butuh JS.</p><p class="mb-4">Minta AI menghapus item dari satu file nav. Tolak mega-menu dengan hover bertingkat.</p><p class="mb-4">Navigasi Clincoo harus dibaca dalam satu napas. Enam item sudah cukup untuk situs statis.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep a Clincoo Menu to Six Items at Most",
          desc: "A header with ten links makes visitors hesitate. Keep only the core pages.",
          content: '<p class="mb-4">Clincoo templates often put every page in the header. The result is a line of links that wraps on a narrow screen.</p><p class="mb-4">Keep Home, Services, About, Contact, plus one or two core pages. Move the rest to the footer or a listing page.</p><p class="mb-4">Open each template in editor.clincoo.buzz. Count the items. If there are more than six, cut. Do not hide the overflow in a dropdown that needs JS.</p><p class="mb-4">Ask the AI to remove items from one nav file. Refuse a mega-menu with nested hover.</p><p class="mb-4">Clincoo navigation should be readable in one glance. Six items are enough for a static site.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "nav-hamburger-tanpa-pustaka",
      langs: {
        "id": {
          title: "Buat Menu Hamburger Clincoo Tanpa Pustaka",
          desc: "Layar kecil butuh tombol buka-tutup. Checkbox atau details cukup, jangan pasang framework.",
          content: '<p class="mb-4">Menu Clincoo yang selalu terbuka menumpuk di atas hero pada ponsel. Pengunjung harus gulir dulu sebelum melihat judul.</p><p class="mb-4">Gunakan checkbox tersembunyi plus label, atau elemen details. CSS mengatur tampil-sembunyi. Tidak perlu React atau plugin hamburger.</p><p class="mb-4">Cek di editor.clincoo.buzz dengan lebar 360px. Tombol terlihat, menu tertutup default, Esc atau klik di luar menutup jika kamu menambah sedikit JS vanila.</p><p class="mb-4">Minta AI menulis markup dan CSS di dua file. Tolak paket npm bernama menu-kit.</p><p class="mb-4">Clincoo tidak menjalankan bundler. Hamburger adalah HTML plus CSS.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Build a Clincoo Hamburger Menu Without a Library",
          desc: "Small screens need an open-close control. A checkbox or details element is enough.",
          content: '<p class="mb-4">A Clincoo menu that always stays open stacks on top of the hero on a phone. Visitors must scroll before they see the title.</p><p class="mb-4">Use a hidden checkbox plus a label, or a details element. CSS shows and hides the list. You do not need React or a hamburger plugin.</p><p class="mb-4">Check in editor.clincoo.buzz at 360px width. The button is visible, the menu is closed by default, and a little vanilla JS can close it on Escape.</p><p class="mb-4">Ask the AI to write markup and CSS in two files. Refuse an npm package named menu-kit.</p><p class="mb-4">Clincoo does not run a bundler. A hamburger is HTML plus CSS.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "nav-breadcrumb-tiga-tingkat",
      langs: {
        "id": {
          title: "Tambah Breadcrumb Tiga Tingkat di Halaman Dalam Clincoo",
          desc: "Halaman layanan atau artikel butuh jejak Beranda / Bagian / Halaman ini.",
          content: '<p class="mb-4">Pengunjung yang mendarat di halaman dalam Clincoo dari pencarian tidak tahu di cabang mana mereka berdiri.</p><p class="mb-4">Tulis nav breadcrumb dengan tiga tautan: Beranda, kategori, judul saat ini. Judul saat ini boleh span, bukan tautan.</p><p class="mb-4">Pratinjau di editor.clincoo.buzz. Teks kecil di atas h1, bukan di footer. Jangan generate breadcrumb dari JS router.</p><p class="mb-4">Minta AI menambah markup di satu template halaman dalam. Tolak skema JSON-LD yang salah jika kamu belum siap merawatnya.</p><p class="mb-4">Situs Clincoo dangkal. Tiga tingkat sudah menjelaskan posisi tanpa peta situs interaktif.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add a Three-Level Breadcrumb on Deep Clincoo Pages",
          desc: "A service or article page needs a trail: Home / Section / This page.",
          content: '<p class="mb-4">Visitors who land on a deep Clincoo page from search do not know which branch they are on.</p><p class="mb-4">Write a breadcrumb nav with three items: Home, the section, and the current title. The current title can be a span, not a link.</p><p class="mb-4">Preview in editor.clincoo.buzz. Small text above the h1, not in the footer. Do not generate breadcrumbs from a JS router.</p><p class="mb-4">Ask the AI to add markup in one inner-page template. Refuse a JSON-LD schema you are not ready to maintain.</p><p class="mb-4">Clincoo sites are shallow. Three levels explain position without an interactive sitemap.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "nav-footer-ulang-tautan-inti",
      langs: {
        "id": {
          title: "Ulang Tautan Inti di Footer Clincoo",
          desc: "Footer adalah jaring pengaman. Tampilkan lagi Beranda, Kontak, dan kebijakan.",
          content: '<p class="mb-4">Pengunjung yang sudah di bawah halaman Clincoo tidak ingin gulir naik hanya untuk mencari Kontak.</p><p class="mb-4">Buat daftar tautan pendek di footer: Beranda, Layanan, Kontak, Privasi. Samakan href dengan header. Jangan buat menu ketiga yang beda tujuan.</p><p class="mb-4">Cek di editor.clincoo.buzz setelah hero dan form. Footer tetap terbaca pada latar gelap atau terang.</p><p class="mb-4">Minta AI menyalin tautan inti ke satu file footer. Tolak widget peta situs otomatis.</p><p class="mb-4">Navigasi Clincoo yang baik muncul dua kali: ringkas di atas, diulang tenang di bawah.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Repeat Core Links in the Clincoo Footer",
          desc: "The footer is a safety net. Show Home, Contact, and policy links again.",
          content: '<p class="mb-4">Visitors already at the bottom of a Clincoo page do not want to scroll up just to find Contact.</p><p class="mb-4">Put a short link list in the footer: Home, Services, Contact, Privacy. Match the href values from the header. Do not invent a third menu with different targets.</p><p class="mb-4">Check in editor.clincoo.buzz after the hero and the form. The footer should stay readable on a dark or light background.</p><p class="mb-4">Ask the AI to copy the core links into one footer file. Refuse an automatic sitemap widget.</p><p class="mb-4">Good Clincoo navigation appears twice: compact at the top, calmly repeated at the bottom.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["navigasi"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["navigasi"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
