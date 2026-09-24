// Clincoo Blog — artikel dokumentasi tambahan 2026-09-24 WIB
(function(){
  var extra = [
    {
      id: "dokumentasi-komentar-html-bermakna",
      langs: {
        "id": {
          title: "Tulis Komentar HTML yang Menjelaskan Kenapa, Bukan Apa",
          desc: "Komentar yang hanya mengulang tag tidak membantu. Catat alasan keputusan di markup Clincoo.",
          content: "<p class=\"mb-4\">Di editor.clincoo.buzz, komentar <!-- hero section --> tidak menambah nilai. Tag section sudah menjelaskan itu hero.</p><p class=\"mb-4\">Tuliskan alasan: mengapa dua kolom, mengapa form di bawah lipatan, mengapa kelas tidak diubah. Itu yang hilang saat orang baru membuka berkas.</p><p class=\"mb-4\">Jangan sisakan komentar yang memuat token, email klien, atau URL staging. View Source di app.clincoo.buzz menampilkannya.</p><p class=\"mb-4\">Minta AI menandai komentar yang hanya mengulang nama tag. Ganti dengan satu kalimat keputusan, atau hapus.</p><p class=\"mb-4\">Clincoo menyimpan markup apa adanya. Komentar bermakna adalah dokumentasi paling dekat dengan kode halaman.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Write HTML Comments that Explain Why, Not What",
          desc: "Comments that only repeat the tag do not help. Record the decision in Clincoo markup.",
          content: "<p class=\"mb-4\">In editor.clincoo.buzz, a comment like <!-- hero section --> adds no value. The section tag already says it is a hero.</p><p class=\"mb-4\">Write the why: why two columns, why the form sits below the fold, why a class was left alone. That is what a new reader loses.</p><p class=\"mb-4\">Do not leave comments that hold tokens, client emails, or staging URLs. View Source on app.clincoo.buzz will show them.</p><p class=\"mb-4\">Ask the AI to mark comments that only repeat tag names. Replace them with one decision sentence, or delete them.</p><p class=\"mb-4\">Clincoo stores markup as written. Meaningful comments are the docs closest to the page code.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "dokumentasi-daftar-halaman-dan-slug",
      langs: {
        "id": {
          title: "Simpan Daftar Halaman dan Slug Proyek Clincoo",
          desc: "Tabel slug mencegah taut rusak saat nama folder diganti di editor.",
          content: "<p class=\"mb-4\">Setiap halaman Clincoo punya slug folder. Tanpa daftar, taut internal di blog.clincoo.buzz dan menu situs mudah mengarah ke 404.</p><p class=\"mb-4\">Buat berkas pages.md: kolom nama tampilan, slug, status draft atau tayang, dan tanggal ubah terakhir.</p><p class=\"mb-4\">Saat mengganti slug di editor.clincoo.buzz, perbarui tabel dulu, lalu cari href lama di seluruh proyek.</p><p class=\"mb-4\">Minta AI merangkum folder menjadi tabel. Periksa sendiri slug yang sengaja berbeda dari judul.</p><p class=\"mb-4\">Clincoo tidak menjaga peta URL untuk Anda. Daftar slug adalah dokumentasi navigasi yang paling murah.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep a Page and Slug List for a Clincoo Project",
          desc: "A slug table stops broken links when a folder is renamed in the editor.",
          content: "<p class=\"mb-4\">Every Clincoo page has a folder slug. Without a list, internal links on blog.clincoo.buzz and the site menu easily hit a 404.</p><p class=\"mb-4\">Make a pages.md file: display name, slug, draft or live status, and last-changed date.</p><p class=\"mb-4\">When you rename a slug in editor.clincoo.buzz, update the table first, then search the whole project for the old href.</p><p class=\"mb-4\">Ask the AI to turn folders into a table. Check slugs that you meant to differ from the title.</p><p class=\"mb-4\">Clincoo does not keep a URL map for you. A slug list is the cheapest navigation documentation.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "dokumentasi-cara-minta-bantuan-ai",
      langs: {
        "id": {
          title: "Dokumentasikan Cara Minta Bantuan AI saat Stuck di Clincoo",
          desc: "Prompt yang sudah terbukti menghemat waktu. Simpan di README agar tim memakai pola yang sama.",
          content: "<p class=\"mb-4\">Saat halaman di editor.clincoo.buzz macet, orang baru sering menempel seluruh berkas ke AI tanpa konteks.</p><p class=\"mb-4\">Tuliskan di README: tempel error konsol lengkap, sebut file yang boleh diubah, dan minta daftar perubahan bukan rewrite.</p><p class=\"mb-4\">Sertakan contoh prompt yang pernah berhasil: perbaiki form tanpa menyentuh header, atau jelaskan selektor CSS yang menimpa tombol.</p><p class=\"mb-4\">Catat juga apa yang tidak boleh: mengganti nama brand Clincoo, menghapus canonical, atau menambahkan pustaka besar.</p><p class=\"mb-4\">Dokumentasi prompt menjaga app.clincoo.buzz tetap utuh saat AI membantu, dan mempercepat orang yang stuck.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Document How to Ask AI for Help when Stuck on Clincoo",
          desc: "Proven prompts save time. Keep them in the README so the team uses the same pattern.",
          content: "<p class=\"mb-4\">When a page in editor.clincoo.buzz stalls, a new person often pastes the whole file into an AI with no context.</p><p class=\"mb-4\">Write in the README: paste the full console error, name the files that may change, and ask for a change list instead of a rewrite.</p><p class=\"mb-4\">Include prompts that already worked: fix the form without touching the header, or explain the CSS selector that overrides a button.</p><p class=\"mb-4\">Also record what is off limits: renaming the Clincoo brand, dropping the canonical, or adding a large library.</p><p class=\"mb-4\">Prompt docs keep app.clincoo.buzz intact while AI helps, and they speed up anyone who gets stuck.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "dokumentasi-struktur-folder-proyek",
      langs: {
        "id": {
          title: "Jelaskan Struktur Folder Proyek Halaman Clincoo",
          desc: "Satu paragraf per folder mencegah aset tersesat dan CSS dobel.",
          content: "<p class=\"mb-4\">Proyek Clincoo cepat ramai: index.html, CSS halaman, gambar, dan salinan percobaan. Tanpa peta folder, orang mengunggah aset ke tempat salah.</p><p class=\"mb-4\">Di README, sebutkan peran setiap folder: halaman tayang, draf, aset gambar, dan berkas yang tidak boleh diedit AI.</p><p class=\"mb-4\">Larangan singkat membantu: jangan duplikasi style.css, jangan simpan screenshot debug di folder publik app.clincoo.buzz.</p><p class=\"mb-4\">Minta AI membuat pohon folder dari repo, lalu sunting deskripsi yang hanya Anda yang paham.</p><p class=\"mb-4\">Clincoo tidak memaksa struktur. Dokumentasi folder adalah yang menjaga editor.clincoo.buzz dan hasil deploy tetap selaras.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Explain the Folder Structure of a Clincoo Page Project",
          desc: "One paragraph per folder stops lost assets and duplicated CSS.",
          content: "<p class=\"mb-4\">A Clincoo project fills up fast: index.html, page CSS, images, and trial copies. Without a folder map, people upload assets to the wrong place.</p><p class=\"mb-4\">In the README, state each folder's job: live pages, drafts, image assets, and files the AI must not edit.</p><p class=\"mb-4\">Short rules help: do not duplicate style.css, do not keep debug screenshots in the public app.clincoo.buzz folder.</p><p class=\"mb-4\">Ask the AI to draw a folder tree from the repo, then edit the descriptions only you understand.</p><p class=\"mb-4\">Clincoo does not enforce a layout. Folder docs keep editor.clincoo.buzz and the deployed result aligned.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "dokumentasi-catat-keputusan-desain",
      langs: {
        "id": {
          title: "Catat Keputusan Desain yang Sengaja Tidak Diubah",
          desc: "Tanpa catatan, AI dan kontributor mengulang perdebatan yang sudah selesai.",
          content: "<p class=\"mb-4\">Halaman Clincoo sering kembali ke perdebatan lama: hero penuh layar, form satu kolom, atau tombol kontras tinggi.</p><p class=\"mb-4\">Buat decisions.md. Satu baris per keputusan: tanggal, pilihan, dan alasan singkat. Contoh: form tetap satu kolom agar mudah di HP.</p><p class=\"mb-4\">Saat meminta bantuan AI di editor.clincoo.buzz, tempel tiga keputusan teratas. Itu mencegah saran yang menggeser brand.</p><p class=\"mb-4\">Tinjau catatan tiap rilis. Jika keputusan sudah usang, coret dan ganti, jangan biarkan dokumen berbohong.</p><p class=\"mb-4\">Clincoo tidak menyimpan niat desain. Dokumentasi keputusan menjaga app.clincoo.buzz dan blog.clincoo.buzz tetap konsisten.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Record Design Decisions You Intentionally Will Not Change",
          desc: "Without notes, AI and contributors reopen debates that already ended.",
          content: "<p class=\"mb-4\">Clincoo pages often return to old debates: a full-bleed hero, a one-column form, or a high-contrast button.</p><p class=\"mb-4\">Keep a decisions.md. One line per decision: date, choice, and a short why. Example: the form stays one column so phones stay easy.</p><p class=\"mb-4\">When you ask AI for help in editor.clincoo.buzz, paste the top three decisions. That blocks suggestions that shift the brand.</p><p class=\"mb-4\">Review the notes each release. If a decision is stale, strike it and replace it. Do not let the file lie.</p><p class=\"mb-4\">Clincoo does not store design intent. Decision docs keep app.clincoo.buzz and blog.clincoo.buzz consistent.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["dokumentasi"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["dokumentasi"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
