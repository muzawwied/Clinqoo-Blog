// Clincoo Blog — artikel editor tambahan 2026-09-18
(function(){
  var extra = [
    {
      id: "cari-nama-kelas-di-berkas-editor",
      langs: {
        "id": {
          title: "Cari Nama Kelas di Berkas Editor sebelum Mengubah CSS",
          desc: "Pakai pencarian di editor Clincoo untuk memastikan kelas HTML benar-benar ada di CSS.",
          content: "<p class=\"mb-4\">Mengubah warna sering gagal karena nama kelas di HTML dan CSS tidak sama. Di editor Clincoo, salin nama kelas lalu cari di style.css sebelum menulis aturan baru.</p><p class=\"mb-4\">Kalau tidak ketemu, jangan menambah kelas kembar. Samakan ejaan dulu. Huruf besar-kecil dan tanda hubung sering jadi biang.</p><p class=\"mb-4\">Cari juga di halaman lain. Kelas yang dipakai dua file tidak boleh dihapus hanya karena satu seksi sudah tidak memakainya.</p><p class=\"mb-4\">Pencarian tiga detik menghemat satu jam menebak kenapa pratinjau tidak berubah.</p>",
          source: "Clincoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Editor kode Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Belajar HTML, CSS, JS",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Praktik terbaik web"
        },
        "en": {
          title: "Search for Class Names in the Editor before Changing CSS",
          desc: "Use search in the Clincoo editor to confirm an HTML class actually exists in CSS.",
          content: "<p class=\"mb-4\">Color changes often fail because the HTML and CSS class names do not match. In the Clincoo editor, copy the class name and search style.css before writing a new rule.</p><p class=\"mb-4\">If it is missing, do not invent a twin class. Fix the spelling first. Capitals and hyphens are usual culprits.</p><p class=\"mb-4\">Search other pages too. A class used in two files must not be deleted just because one section stopped using it.</p><p class=\"mb-4\">A three-second search saves an hour of guessing why preview did not change.</p>",
          source: "Clincoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Clincoo code editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Learn HTML, CSS, JS",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Web best practices"
        }
      }
    },
    {
      id: "pecah-css-panjang-jadi-bagian",
      langs: {
        "id": {
          title: "Pecah Berkas CSS Panjang jadi Bagian di Editor Clincoo",
          desc: "File style.css yang ribuan baris sulit diubah. Bagi menurut halaman atau komponen supaya tab editor tetap ringan.",
          content: "<p class=\"mb-4\">Template yang sudah diutak-atik sering menumpuk semua aturan di satu berkas. Mencari warna tombol lalu menjadi gulir tanpa akhir. Di editor Clincoo, pecah CSS sebelum berkas terasa berat.</p><p class=\"mb-4\">Mulai dari kelompok yang jelas: dasar (warna, huruf, spasi), header dan menu, lalu halaman spesifik. Buat berkas baru di explorer, pindahkan blok terkait, dan tautkan lewat tag link di HTML. Simpan, lalu cek pratinjau.</p><p class=\"mb-4\">Jangan memecah terlalu halus di hari yang sama. Dua atau tiga berkas sudah cukup untuk situs kecil. Nama file yang terang — nav.css, home.css — mengalahkan style2-final.css.</p><p class=\"mb-4\">Kalau ragu blok mana yang pindah, cari nama kelas di editor dulu. Satu pemindahan yang teruji lebih aman daripada merombak seluruh stylesheet semalam.</p>",
          source: "Clincoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Platform Clincoo",
          source2: "Clincoo Blog", sourceUrl2: "https://clinqoo.pages.dev/blog/", sourceSnippet2: "Clincoo Blog"
        },
        "en": {
          title: "Split a Long CSS File into Parts in the Clincoo Editor",
          desc: "A multi-thousand-line style.css is hard to change. Split it by page or component so editor tabs stay light.",
          content: "<p class=\"mb-4\">A heavily edited template often dumps every rule into one file. Finding a button color then becomes endless scrolling. In the Clincoo editor, split CSS before the file feels heavy.</p><p class=\"mb-4\">Start with clear groups: base (color, type, spacing), header and menu, then page-specific rules. Create a new file in the explorer, move the related block, and link it with a link tag in HTML. Save, then check preview.</p><p class=\"mb-4\">Do not split too finely in one sitting. Two or three files are enough for a small site. Clear names — nav.css, home.css — beat style2-final.css.</p><p class=\"mb-4\">If you are unsure which block to move, search the class name in the editor first. One tested move is safer than rewriting the whole stylesheet overnight.</p>",
          source: "Clincoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clincoo platform",
          source2: "Clincoo Blog", sourceUrl2: "https://clinqoo.pages.dev/blog/", sourceSnippet2: "Clincoo Blog"
        }
      }
    },
    {
      id: "tandai-todo-dengan-komentar-html",
      langs: {
        "id": {
          title: "Tandai Pekerjaan Belum Selesai dengan Komentar HTML",
          desc: "Jangan andalkan ingatan saat menutup tab editor Clincoo. Komentar TODO di HTML menandai sisa kerja untuk sesi berikutnya.",
          content: "<p class=\"mb-4\">Sesi pendek sering berhenti di tengah: gambar belum diganti, teks kontak masih milik template. Besok kamu membuka proyek dan lupa di file mana pekerjaan tersisa.</p><p class=\"mb-4\">Tulis komentar HTML di dekat elemen yang belum final, misalnya catatan singkat bahwa nomor WhatsApp masih contoh. Komentar tidak tampil di halaman pengunjung, tapi terlihat di tab editor.</p><p class=\"mb-4\">Pakai kata yang mudah dicari — TODO atau BELUM — lalu cari string itu sebelum deploy. Hapus komentar setelah tugas selesai supaya tidak jadi museum catatan usang.</p><p class=\"mb-4\">Cara ini lebih andal daripada meninggalkan sepuluh tab terbuka sebagai pengingat. Tab adalah meja kerja; komentar adalah daftar tugas yang ikut tersimpan di proyek.</p>",
          source: "Clincoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Platform Clincoo",
          source2: "Clincoo Blog", sourceUrl2: "https://clinqoo.pages.dev/blog/", sourceSnippet2: "Clincoo Blog"
        },
        "en": {
          title: "Mark Unfinished Work with HTML Comments",
          desc: "Do not trust memory when you close a Clincoo editor tab. A TODO comment in HTML marks leftover work for the next session.",
          content: "<p class=\"mb-4\">Short sessions often stop mid-task: an image still unchanged, contact copy still from the template. Tomorrow you open the project and forget which file still needs work.</p><p class=\"mb-4\">Put an HTML comment near the unfinished element, for example a short note that the WhatsApp number is still a sample. Comments do not show to visitors, but they show in the editor tab.</p><p class=\"mb-4\">Use a searchable word — TODO or TODO-ID — then search that string before deploy. Delete the comment when the task is done so it does not become a museum of stale notes.</p><p class=\"mb-4\">This is more reliable than leaving ten tabs open as reminders. Tabs are a workbench; comments are a task list that saves with the project.</p>",
          source: "Clincoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clincoo platform",
          source2: "Clincoo Blog", sourceUrl2: "https://clinqoo.pages.dev/blog/", sourceSnippet2: "Clincoo Blog"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["editor"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["editor"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
