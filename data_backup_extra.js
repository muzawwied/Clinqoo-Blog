// Clincoo Blog — artikel backup tambahan 2026-09-22 WIB
(function(){
  var extra = [
    {
      id: "backup-simpan-zip-sebelum-generate-ai",
      langs: {
        "id": {
          title: "Simpan ZIP Clincoo sebelum Generate AI Besar",
          desc: "Generate ulang halaman menimpa salinan klien. Unduh cadangan dulu, baru minta AI menulis ulang.",
          content: "<p class=\"mb-4\">Developer yang stuck sering menekan generate ulang di editor.clincoo.buzz. Hero, harga, dan form yang sudah diisi klien hilang dalam satu langkah.</p><p class=\"mb-4\">Unduh ZIP dari app.clincoo.buzz sebelum permintaan AI yang menyentuh lebih dari satu file. Nama berkas pakai tanggal WIB.</p><p class=\"mb-4\">Batasi generate ke satu halaman. Jika hasil buruk, buka ZIP dan salin file lama — jangan andalkan riwayat chat.</p><p class=\"mb-4\">Tolak rewrite seluruh folder. Minta daftar path yang akan diubah, bandingkan dengan cadangan.</p><p class=\"mb-4\">Clincoo menyimpan isi editor. ZIP lokal adalah jaring sebelum eksperimen AI.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Save a Clincoo ZIP before a Large AI Generate",
          desc: "A full-page generate overwrites client copy. Download a backup first, then ask the AI to rewrite.",
          content: "<p class=\"mb-4\">Stuck developers often hit regenerate in editor.clincoo.buzz. Hero, pricing, and form copy the client already filled vanish in one step.</p><p class=\"mb-4\">Download a ZIP from app.clincoo.buzz before any AI request that touches more than one file. Put the WIB date in the filename.</p><p class=\"mb-4\">Limit the generate to one page. If the result is bad, open the ZIP and copy the old file — do not trust chat history.</p><p class=\"mb-4\">Refuse a whole-folder rewrite. Ask for the path list that will change, then compare it to the backup.</p><p class=\"mb-4\">Clincoo keeps what is in the editor. A local ZIP is the net before an AI experiment.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "backup-versi-tanggal-nama-berkas",
      langs: {
        "id": {
          title: "Nama Cadangan Clincoo dengan Tanggal, Bukan final.zip",
          desc: "Beberapa ZIP bernama final saling menimpa. Tanggal di nama berkas membuat versi bisa dilacak.",
          content: "<p class=\"mb-4\">Folder Unduhan penuh proyek-final.zip dan cadangan2.zip. Saat butuh versi kemarin, tidak ada yang tahu file mana yang benar.</p><p class=\"mb-4\">Pakai pola proyek-YYYY-MM-DD-HHmm.zip. Satu cadangan per sesi kerja di app.clincoo.buzz.</p><p class=\"mb-4\">Jangan timpa ZIP lama. Simpan paling tidak dua versi: sebelum ubah besar dan sesudah rilis.</p><p class=\"mb-4\">Minta AI tidak menamai berkas export. Nama cadangan adalah keputusanmu, bukan output chat.</p><p class=\"mb-4\">Clincoo tidak mengarsipkan riwayat ZIP. Tanggal di nama adalah indeks versi yang bisa kamu buka.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Name Clincoo Backups with a Date, Not final.zip",
          desc: "Several ZIPs named final overwrite each other. A date in the filename makes versions traceable.",
          content: "<p class=\"mb-4\">The Downloads folder fills with project-final.zip and cadangan2.zip. When you need yesterday's version, nobody knows which file is right.</p><p class=\"mb-4\">Use a proyek-YYYY-MM-DD-HHmm.zip pattern. One backup per work session in app.clincoo.buzz.</p><p class=\"mb-4\">Do not overwrite the old ZIP. Keep at least two versions: before a large change and after release.</p><p class=\"mb-4\">Do not ask the AI to name the export. Backup names are your decision, not chat output.</p><p class=\"mb-4\">Clincoo does not archive ZIP history. A date in the name is the version index you can open.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "backup-pulihkan-satu-file-dari-zip",
      langs: {
        "id": {
          title: "Pulihkan Satu File Clincoo dari ZIP, Bukan Seluruh Proyek",
          desc: "Satu halaman rusak tidak perlu menimpa semua file. Ekstrak hanya path yang salah.",
          content: "<p class=\"mb-4\">Setelah generate AI merusak harga/index.html, banyak orang mengekstrak seluruh ZIP ke workspace. Perubahan bagus di file lain ikut hilang.</p><p class=\"mb-4\">Buka ZIP, salin hanya file yang rusak ke path yang sama di editor.clincoo.buzz. Cek pratinjau halaman itu saja.</p><p class=\"mb-4\">Jangan timpa css/style.css jika yang rusak hanya satu HTML. Bandingkan ukuran dan tanggal di dalam arsip.</p><p class=\"mb-4\">Minta AI tidak menimpa folder. Tulis path file yang boleh dikembalikan.</p><p class=\"mb-4\">Clincoo merender file per path. Pulih selektif menjaga sisa pekerjaan tetap utuh.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Restore One Clincoo File from a ZIP, Not the Whole Project",
          desc: "One broken page does not need to overwrite every file. Extract only the bad path.",
          content: "<p class=\"mb-4\">After an AI generate wrecks pricing/index.html, many people extract the whole ZIP into the workspace. Good changes in other files vanish too.</p><p class=\"mb-4\">Open the ZIP, copy only the broken file to the same path in editor.clincoo.buzz. Preview that page alone.</p><p class=\"mb-4\">Do not overwrite css/style.css if only one HTML file is broken. Compare size and dates inside the archive.</p><p class=\"mb-4\">Do not ask the AI to overwrite a folder. Name the path that may be restored.</p><p class=\"mb-4\">Clincoo renders file by path. Selective restore keeps the rest of the work intact.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "backup-cadangkan-aset-gambar-terpisah",
      langs: {
        "id": {
          title: "Cadangkan Folder Gambar Clincoo Terpisah dari HTML",
          desc: "ZIP penuh mudah terlewat. Folder images/ yang disalin sendiri menyelamatkan foto klien.",
          content: "<p class=\"mb-4\">Generate template sering menimpa images/hero.webp dengan aset stok. Foto tim klien hilang karena tidak ada salinan di luar proyek.</p><p class=\"mb-4\">Salin folder images/ atau assets/ ke disk lokal sebelum ganti template di app.clincoo.buzz. Simpan nama file asli.</p><p class=\"mb-4\">Setelah template baru, kembalikan foto ke path yang sama. Perbarui src hanya jika nama file berubah.</p><p class=\"mb-4\">Jangan andalkan CDN chat AI. Berkas biner tidak tinggal di riwayat percakapan.</p><p class=\"mb-4\">Clincoo menayangkan file yang ada di workspace. Cadangan gambar terpisah menjaga aset yang tidak bisa diketik ulang.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Back Up the Clincoo Image Folder Separate from HTML",
          desc: "A full ZIP is easy to skip. A copied images/ folder saves client photos.",
          content: "<p class=\"mb-4\">A template generate often overwrites images/hero.webp with stock. Client team photos vanish because no copy lives outside the project.</p><p class=\"mb-4\">Copy the images/ or assets/ folder to local disk before switching templates in app.clincoo.buzz. Keep the original filenames.</p><p class=\"mb-4\">After the new template, put the photos back on the same paths. Update src only if a filename changed.</p><p class=\"mb-4\">Do not rely on AI chat CDN. Binary files do not live in conversation history.</p><p class=\"mb-4\">Clincoo serves the files in the workspace. A separate image backup protects assets you cannot retype.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "backup-cek-zip-bisa-dibuka-sebelum-hapus",
      langs: {
        "id": {
          title: "Uji ZIP Cadangan Clincoo Bisa Dibuka sebelum Hapus Workspace",
          desc: "Arsip rusak baru ketahuan saat darurat. Buka ZIP dan cek index.html dulu.",
          content: "<p class=\"mb-4\">Developer menghapus proyek di app.clincoo.buzz setelah mengira ZIP sudah aman. Arsip 0 byte atau corrupt baru ketahuan minggu berikutnya.</p><p class=\"mb-4\">Setelah unduh, buka ZIP di mesin lokal. Pastikan index.html, css/, dan images/ ada dan ukurannya masuk akal.</p><p class=\"mb-4\">Jangan hapus workspace sampai pratinjau file dari arsip berhasil. Simpan ZIP di dua tempat jika rilis penting.</p><p class=\"mb-4\">AI tidak bisa memperbaiki arsip kosong. Verifikasi adalah langkah manusia.</p><p class=\"mb-4\">Clincoo tidak menyimpan salinan tersembunyi setelah proyek dihapus. ZIP yang sudah diuji adalah satu-satunya jaring.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Test That a Clincoo Backup ZIP Opens before You Delete the Workspace",
          desc: "A broken archive shows up only in an emergency. Open the ZIP and check index.html first.",
          content: "<p class=\"mb-4\">Developers delete a project in app.clincoo.buzz after assuming the ZIP is safe. A 0-byte or corrupt archive shows up the next week.</p><p class=\"mb-4\">After download, open the ZIP on your machine. Confirm index.html, css/, and images/ exist and the sizes look sane.</p><p class=\"mb-4\">Do not delete the workspace until a preview of files from the archive works. Keep the ZIP in two places for an important release.</p><p class=\"mb-4\">AI cannot repair an empty archive. Verification is a human step.</p><p class=\"mb-4\">Clincoo does not keep a hidden copy after a project is deleted. A tested ZIP is the only net.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["backup"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["backup"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
