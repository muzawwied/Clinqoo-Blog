// Clincoo Blog — artikel legal tambahan extra4 2026-09-19
(function(){
  var extra = [
    {
      id: "kebijakan-hak-cipta-konten-pengguna",
      langs: {
        "id": {
          title: "Kebijakan Hak Cipta Konten Pengguna Clincoo",
          desc: "Kamu tetap pemilik teks, gambar, dan kode yang diunggah. Clincoo hanya memakai lisensi terbatas untuk menjalankan layanan.",
          content: "<p class=\"mb-4\">Konten yang kamu tulis atau unggah ke proyek Clincoo tetap milikmu, sepanjang itu memang hakmu. Pembaruan: 19 September 2026.</p><h2>Apa yang kamu miliki</h2><p class=\"mb-4\">Teks, gambar, font berlisensi yang kamu pasang, dan kode kustom di proyek adalah milik akun yang mengunggahnya, kecuali lisensi pihak ketiga menentukan lain.</p><h2>Lisensi terbatas ke Clincoo</h2><p class=\"mb-4\">Dengan memakai layanan, kamu memberi Clincoo izin terbatas untuk menyimpan, menampilkan pratinjau, dan menayangkan situs sesuai perintahmu. Izin ini bukan pengalihan hak cipta.</p><h2>Konten yang tidak boleh diunggah</h2><p class=\"mb-4\">Jangan mengunggah karya orang lain tanpa izin, malware, atau materi yang melanggar hukum yang berlaku. Kami dapat menonaktifkan proyek yang laporan hak ciptanya berdasar.</p><h2>Tanya</h2><p class=\"mb-4\">Pertanyaan hak cipta ke <a href=\"mailto:halo@clincoo.buzz\">halo@clincoo.buzz</a>.</p>",
          source: "Clincoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Platform Clincoo",
          source2: "Clincoo Blog", sourceUrl2: "https://clinqoo.pages.dev/blog/", sourceSnippet2: "Clincoo Blog"
        },
        "en": {
          title: "Clincoo User Content Copyright Policy",
          desc: "You keep ownership of the text, images, and code you upload. Clincoo only takes a limited license to run the service.",
          content: "<p class=\"mb-4\">Content you write or upload into a Clincoo project stays yours, provided it is yours to use. Updated: 19 September 2026.</p><h2>What you own</h2><p class=\"mb-4\">Text, images, licensed fonts you add, and custom code in the project belong to the account that uploaded them, unless a third-party license says otherwise.</p><h2>Limited license to Clincoo</h2><p class=\"mb-4\">By using the service you grant Clincoo a limited permission to store, preview, and publish the site as you instruct. That permission is not a transfer of copyright.</p><h2>What you must not upload</h2><p class=\"mb-4\">Do not upload other people’s work without permission, malware, or material that breaks applicable law. We may disable a project when a copyright report is well founded.</p><h2>Questions</h2><p class=\"mb-4\">Copyright questions go to <a href=\"mailto:halo@clincoo.buzz\">halo@clincoo.buzz</a>.</p>",
          source: "Clincoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clincoo platform",
          source2: "Clincoo Blog", sourceUrl2: "https://clinqoo.pages.dev/blog/", sourceSnippet2: "Clincoo Blog"
        }
      }
    },
    {
      id: "kebijakan-penghapusan-akun-dan-proyek",
      langs: {
        "id": {
          title: "Kebijakan Penghapusan Akun dan Proyek Clincoo",
          desc: "Cara meminta hapus akun, apa yang dihapus dari server, dan jeda waktu cadangan sebelum data benar-benar hilang.",
          content: "<p class=\"mb-4\">Kamu boleh meminta penghapusan akun atau proyek. Permintaan ini tidak bisa dibatalkan setelah jeda cadangan berakhir. Pembaruan: 19 September 2026.</p><h2>Hapus proyek</h2><p class=\"mb-4\">Menghapus proyek di editor mengeluarkan berkas dari workspace aktif. Cadangan teknis dapat bertahan beberapa hari sebelum dihapus permanen.</p><h2>Hapus akun</h2><p class=\"mb-4\">Kirim permintaan dari email yang terdaftar ke <a href=\"mailto:halo@clincoo.buzz\">halo@clincoo.buzz</a>. Kami menonaktifkan masuk, lalu menghapus data akun sesuai retensi yang berlaku.</p><h2>Yang mungkin tersisa</h2><p class=\"mb-4\">Catatan transaksi, log keamanan ringkas, dan salinan yang sudah kamu unduh sendiri tidak otomatis hilang dari perangkatmu.</p><h2>Situs yang sudah ditayangkan</h2><p class=\"mb-4\">URL publik perlu dihentikan lewat langkah deploy atau domain. Penghapusan akun tidak selalu menarik cache pihak ketiga di hari yang sama.</p>",
          source: "Clincoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Platform Clincoo",
          source2: "Clincoo Blog", sourceUrl2: "https://clinqoo.pages.dev/blog/", sourceSnippet2: "Clincoo Blog"
        },
        "en": {
          title: "Clincoo Account and Project Deletion Policy",
          desc: "How to request account deletion, what leaves the server, and the backup window before data is gone for good.",
          content: "<p class=\"mb-4\">You may request deletion of an account or a project. The request cannot be undone after the backup window ends. Updated: 19 September 2026.</p><h2>Delete a project</h2><p class=\"mb-4\">Deleting a project in the editor removes files from the active workspace. Technical backups may remain for several days before permanent deletion.</p><h2>Delete an account</h2><p class=\"mb-4\">Send the request from the registered email to <a href=\"mailto:halo@clincoo.buzz\">halo@clincoo.buzz</a>. We disable sign-in, then delete account data under the retention rules that apply.</p><h2>What may remain</h2><p class=\"mb-4\">Transaction notes, brief security logs, and copies you already downloaded do not vanish from your own devices.</p><h2>Sites already published</h2><p class=\"mb-4\">A public URL must be stopped through deploy or domain steps. Account deletion does not always clear third-party caches the same day.</p>",
          source: "Clincoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clincoo platform",
          source2: "Clincoo Blog", sourceUrl2: "https://clinqoo.pages.dev/blog/", sourceSnippet2: "Clincoo Blog"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["legal"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["legal"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
