// Clincoo Blog — artikel dokumentasi tambahan 2026-09-24 WIB
(function(){
  var extra = [
    {
      id: "dokumentasi-checklist-rilis-halaman",
      langs: {
        "id": {
          title: "Simpan Checklist Rilis sebelum Publish Halaman Clincoo",
          desc: "Tiga sampai tujuh kotak centang mencegah rilis yang lupa form, alt, atau taut kanonik.",
          content: "<p class=\"mb-4\">Halaman Clincoo sering tayang setelah satu pratinjau. Form rusak, alt kosong, dan canonical lama baru ketahuan di app.clincoo.buzz.</p><p class=\"mb-4\">Tulis checklist.md: pratinjau HP, kirim form dummy, cek Console, cek alt hero, cek taut internal, cek judul tab.</p><p class=\"mb-4\">Centang di PR atau di catatan rilis. Jangan andalkan ingatan orang yang sedang terburu-buru.</p><p class=\"mb-4\">Minta AI merangkum checklist dari bug minggu lalu. Sunting sendiri item yang hanya berlaku di proyekmu.</p><p class=\"mb-4\">Clincoo tidak menahan tombol publish. Checklist singkat adalah gerbang terakhir sebelum blog.clincoo.buzz dan situs live.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep a Release Checklist before You Publish a Clincoo Page",
          desc: "Three to seven checkboxes stop a release that forgot the form, alt text, or canonical.",
          content: "<p class=\"mb-4\">A Clincoo page often goes live after one preview. A broken form, empty alt, and an old canonical only show up on app.clincoo.buzz.</p><p class=\"mb-4\">Write a checklist.md: phone preview, dummy form submit, Console check, hero alt, internal links, tab title.</p><p class=\"mb-4\">Tick the boxes on the PR or in the release note. Do not trust the memory of someone in a hurry.</p><p class=\"mb-4\">Ask the AI to draft the list from last week's bugs. Edit the items that only apply to your project.</p><p class=\"mb-4\">Clincoo will not hold the publish button. A short checklist is the last gate before blog.clincoo.buzz and the live site.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "dokumentasi-contoh-env-tanpa-rahasia",
      langs: {
        "id": {
          title: "Dokumentasikan Contoh Env tanpa Menyalin Rahasia Clincoo",
          desc: "Berkas .env.example menjelaskan kunci. Jangan tempel token asli ke README atau komentar HTML.",
          content: "<p class=\"mb-4\">Proyek Clincoo yang memakai endpoint form kadang menyimpan kunci di skrip. README lalu menempel nilai produksi.</p><p class=\"mb-4\">Buat .env.example berisi nama kunci dan nilai palsu. Tulis di README di mana nilai sungguhan disimpan, bukan isinya.</p><p class=\"mb-4\">Cari token di komentar HTML dan chat AI sebelum rilis. View Source di app.clincoo.buzz menampilkan apa yang kamu lupa hapus.</p><p class=\"mb-4\">Minta AI memindai string yang menyerupai kunci. Kamu yang memutuskan mana yang boleh contoh.</p><p class=\"mb-4\">Clincoo menayangkan berkas apa adanya. Dokumentasi env yang steril menjaga rahasia tetap di luar repo publik.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Document an Env Example without Copying Clincoo Secrets",
          desc: "An .env.example file names the keys. Do not paste real tokens into the README or HTML comments.",
          content: "<p class=\"mb-4\">A Clincoo project that posts to a form endpoint sometimes keeps keys in a script. The README then pastes production values.</p><p class=\"mb-4\">Make an .env.example with key names and fake values. Write in the README where real values live, not what they are.</p><p class=\"mb-4\">Search tokens in HTML comments and AI chat before release. View Source on app.clincoo.buzz shows what you forgot to delete.</p><p class=\"mb-4\">Ask the AI to scan strings that look like keys. You decide which ones may be examples.</p><p class=\"mb-4\">Clincoo ships files as written. A sterile env doc keeps secrets out of the public repo.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "dokumentasi-browser-yang-diuji",
      langs: {
        "id": {
          title: "Catat Browser dan Perangkat yang Sudah Diuji di Clincoo",
          desc: "Tanpa daftar uji, bug iOS dianggap 'baru' padahal belum pernah dicek.",
          content: "<p class=\"mb-4\">Tim Clincoo sering menguji hanya di Chrome desktop. Form lalu gagal di Safari iPhone tanpa siapa pun terkejut.</p><p class=\"mb-4\">Tulis di README: Chrome, Firefox, Safari, lebar 375 dan 1280, plus tanggal uji terakhir.</p><p class=\"mb-4\">Perbarui tanggal saat checklist rilis. Jangan biarkan daftar uji berumur tiga bulan.</p><p class=\"mb-4\">Minta AI merapikan tabel perangkat. Kamu yang mengisi hasil nyata dari editor.clincoo.buzz.</p><p class=\"mb-4\">Clincoo tidak menguji silang untukmu. Dokumentasi perangkat membuat lubang uji terlihat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Record the Browsers and Devices Already Tested on Clincoo",
          desc: "Without a test list, an iOS bug looks new when it was never checked.",
          content: "<p class=\"mb-4\">Clincoo teams often test only in desktop Chrome. The form then fails on iPhone Safari and nobody is surprised.</p><p class=\"mb-4\">Write in the README: Chrome, Firefox, Safari, 375 and 1280 widths, plus the last test date.</p><p class=\"mb-4\">Update the date when you run the release checklist. Do not leave a three-month-old test list.</p><p class=\"mb-4\">Ask the AI to tidy the device table. You fill in real results from editor.clincoo.buzz.</p><p class=\"mb-4\">Clincoo will not cross-test for you. Device docs make the test gaps visible.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "dokumentasi-tautan-editor-vs-live",
      langs: {
        "id": {
          title: "Pisahkan Tautan Editor, Pratinjau, dan Live di Docs Clincoo",
          desc: "Satu URL campur aduk membuat orang mengedit produksi atau membagikan draft.",
          content: "<p class=\"mb-4\">README Clincoo yang hanya menulis 'buka situs' tidak menjelaskan apakah itu editor.clincoo.buzz, pratinjau, atau app.clincoo.buzz.</p><p class=\"mb-4\">Buat tiga baris: URL edit, URL pratinjau, URL live. Tandai mana yang boleh dibagikan ke klien.</p><p class=\"mb-4\">Saat slug berubah, perbarui ketiga baris bersama daftar halaman.</p><p class=\"mb-4\">Minta AI mengekstrak taut dari repo. Periksa sendiri mana yang draft.</p><p class=\"mb-4\">Clincoo punya beberapa host. Dokumentasi URL mencegah edit di tempat salah.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Split Editor, Preview, and Live Links in Clincoo Docs",
          desc: "One mixed URL makes people edit production or share a draft.",
          content: "<p class=\"mb-4\">A Clincoo README that only says open the site does not say whether that is editor.clincoo.buzz, preview, or app.clincoo.buzz.</p><p class=\"mb-4\">Write three lines: edit URL, preview URL, live URL. Mark which one may be shared with a client.</p><p class=\"mb-4\">When a slug changes, update all three lines with the page list.</p><p class=\"mb-4\">Ask the AI to extract links from the repo. Check yourself which ones are drafts.</p><p class=\"mb-4\">Clincoo has several hosts. URL docs stop edits in the wrong place.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "dokumentasi-arsip-prompt-gagal",
      langs: {
        "id": {
          title: "Arsipkan Prompt AI yang Gagal agar Tim Clincoo Tidak Mengulanginya",
          desc: "Prompt yang merusak header atau menulis ulang CSS perlu dicatat, bukan dihapus diam-diam.",
          content: "<p class=\"mb-4\">Saat stuck di editor.clincoo.buzz, orang mengulang prompt yang seminggu lalu sudah merusak navbar.</p><p class=\"mb-4\">Simpan failed-prompts.md: tanggal, tujuan, cuplikan prompt, dan kerusakan yang terjadi. Satu paragraf cukup.</p><p class=\"mb-4\">Sampingkan dengan prompt yang berhasil. Bedanya harus explisit: minta diff, jangan rewrite.</p><p class=\"mb-4\">Minta AI merangkum pola gagal. Jangan biarkan arsip jadi tempat menyimpan token atau data klien.</p><p class=\"mb-4\">Clincoo tidak mengingat obrolan lama. Arsip prompt menjaga app.clincoo.buzz aman dari kesalahan yang sudah pernah dibayar.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Archive Failed AI Prompts so the Clincoo Team Does Not Repeat Them",
          desc: "A prompt that wrecked the header or rewrote CSS should be logged, not quietly deleted.",
          content: "<p class=\"mb-4\">When stuck in editor.clincoo.buzz, people reuse a prompt that already broke the navbar last week.</p><p class=\"mb-4\">Keep a failed-prompts.md: date, goal, prompt snippet, and the damage. One paragraph is enough.</p><p class=\"mb-4\">Put it beside the prompts that worked. The difference must be explicit: ask for a diff, do not rewrite.</p><p class=\"mb-4\">Ask the AI to summarize failure patterns. Do not let the archive store tokens or client data.</p><p class=\"mb-4\">Clincoo does not remember old chats. A prompt archive keeps app.clincoo.buzz safe from mistakes already paid for.</p>",
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
