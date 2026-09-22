// Clincoo Blog — artikel markdown tambahan 2026-09-22
(function(){
  var extra = [
    {
      id: "markdown-daftar-dan-checklist",
      langs: {
        "id": {
          title: "Daftar dan Checklist Markdown di Editor Clincoo",
          desc: "Campur minus, angka, dan kotak centang membuat outline kacau. Pilih satu gaya daftar per bagian.",
          content: "<p class=\"mb-4\">Draf Clincoo sering menyisipkan - item, 1. item, dan - [ ] dalam satu blok. Pratinjau pecah dan pembaca tidak tahu mana langkah, mana opsi.</p><p class=\"mb-4\">Pakai daftar bernomor hanya untuk urutan wajib. Pakai bullet untuk pilihan setara. Checklist hanya untuk tugas yang memang bisa ditandai selesai.</p><p class=\"mb-4\">Jangan menaruh heading di dalam item daftar. Tutup daftar dulu, lalu tulis H3 baru.</p><p class=\"mb-4\">Minta AI merapikan satu bagian, bukan mengubah seluruh halaman jadi checklist.</p><p class=\"mb-4\">Clincoo merender Markdown apa adanya. Daftar yang konsisten lebih mudah dibaca di editor.clincoo.buzz dan setelah deploy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Markdown Lists and Checklists in the Clincoo Editor",
          desc: "Mixing dashes, numbers, and checkboxes wrecks the outline. Pick one list style per section.",
          content: "<p class=\"mb-4\">Clincoo drafts often mix - item, 1. item, and - [ ] in one block. Preview breaks and readers cannot tell steps from options.</p><p class=\"mb-4\">Use a numbered list only for a required order. Use bullets for equal choices. Use a checklist only for tasks that can be marked done.</p><p class=\"mb-4\">Do not nest a heading inside a list item. Close the list first, then write a new H3.</p><p class=\"mb-4\">Ask the AI to tidy one section, not to turn the whole page into a checklist.</p><p class=\"mb-4\">Clincoo renders Markdown as saved. A consistent list is easier to read in editor.clincoo.buzz and after deploy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "markdown-gambar-alt-dan-lebar",
      langs: {
        "id": {
          title: "Gambar Markdown: Alt Wajib, Lebar Jangan Melebar",
          desc: "Sintaks ![](url) tanpa alt kosong bagi pembaca layar. Tambah teks dan cek ukuran file.",
          content: "<p class=\"mb-4\">AI sering menulis ![image](https://...) atau bahkan ![]() di draf Clincoo. Alt generik tidak menjelaskan foto.</p><p class=\"mb-4\">Isi alt dengan subjek singkat. Simpan gambar di folder proyek, bukan hotlink ke host sementara yang bisa hilang.</p><p class=\"mb-4\">Kompres sebelum unggah. File 4 MB di halaman Markdown memperlambat pratinjau di editor.clincoo.buzz.</p><p class=\"mb-4\">Minta AI hanya menambahkan alt dan path relatif, bukan menanam <img> dengan style inline acak.</p><p class=\"mb-4\">Clincoo menayangkan aset yang kamu simpan. Gambar yang jujur alt-nya dan ringan ukurannya bertahan setelah deploy di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Markdown Images: Required Alt, Keep Width in Check",
          desc: "A bare ![](url) is empty for screen readers. Add text and check the file size.",
          content: "<p class=\"mb-4\">AI often writes ![image](https://...) or even ![]() in a Clincoo draft. Generic alt does not describe the photo.</p><p class=\"mb-4\">Fill alt with a short subject. Keep the image in the project folder, not a hotlink to a temporary host that can vanish.</p><p class=\"mb-4\">Compress before upload. A 4 MB file on a Markdown page slows preview in editor.clincoo.buzz.</p><p class=\"mb-4\">Ask the AI only to add alt and a relative path, not to plant an <img> with random inline styles.</p><p class=\"mb-4\">Clincoo ships the assets you save. Honest alt and a light file survive deploy from app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "markdown-kode-blok-bahasa",
      langs: {
        "id": {
          title: "Blok Kode Markdown: Tandai Bahasa, Jangan Campur Prosa",
          desc: "Pagar tiga tanpa label membuat sorotan salah. Satu blok, satu bahasa, satu maksud.",
          content: "<p class=\"mb-4\">Draf Clincoo sering menaruh CSS, HTML, dan perintah terminal dalam satu fence tanpa nama bahasa. Pembaca menyalin baris yang salah.</p><p class=\"mb-4\">Tulis ```html, ```css, atau ```bash. Pisahkan penjelasan di paragraf biasa di luar blok.</p><p class=\"mb-4\">Jangan menaruh seluruh berkas 200 baris. Cuplik bagian yang relevan, lalu tunjuk nama file di proyek.</p><p class=\"mb-4\">Minta AI memperbaiki label fence, bukan men-generate ulang seluruh komponen.</p><p class=\"mb-4\">Clincoo merender blok kode apa adanya. Label yang benar membantu manusia dan AI di percakapan berikutnya.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Markdown Code Fences: Label the Language, Keep Prose Outside",
          desc: "A bare triple backtick highlights the wrong thing. One block, one language, one job.",
          content: "<p class=\"mb-4\">Clincoo drafts often dump CSS, HTML, and a shell command in one unlabeled fence. Readers copy the wrong line.</p><p class=\"mb-4\">Write ```html, ```css, or ```bash. Keep the explanation in a normal paragraph outside the block.</p><p class=\"mb-4\">Do not paste a 200-line file. Quote the relevant slice and name the project file.</p><p class=\"mb-4\">Ask the AI to fix fence labels, not to regenerate the whole component.</p><p class=\"mb-4\">Clincoo renders fences as saved. A correct label helps humans and the next AI chat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "markdown-tabel-sederhana",
      langs: {
        "id": {
          title: "Tabel Markdown Sederhana, Bukan Mini Spreadsheet",
          desc: "Tabel lebar pecah di ponsel. Batasi kolom dan jangan isi sel dengan paragraf panjang.",
          content: "<p class=\"mb-4\">AI suka membuat tabel 6 kolom untuk banding paket. Di pratinjau ponsel editor.clincoo.buzz, teks tertumpuk dan garis hilang.</p><p class=\"mb-4\">Pakai paling banyak tiga atau empat kolom. Isi sel pendek. Jika butuh narasi, pindahkan ke daftar di bawah tabel.</p><p class=\"mb-4\">Samakan jumlah pipa di setiap baris. Baris header dan pemisah |---| wajib ada.</p><p class=\"mb-4\">Minta AI merapikan satu tabel, bukan mengubah seluruh halaman jadi grid HTML.</p><p class=\"mb-4\">Clincoo men-deploy HTML dari Markdown. Tabel yang sempit tetap terbaca setelah rilis.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep Markdown Tables Simple, Not Mini Spreadsheets",
          desc: "Wide tables break on phones. Limit columns and do not put a paragraph in a cell.",
          content: "<p class=\"mb-4\">AI likes six-column plan tables. In the editor.clincoo.buzz phone preview, text stacks and rules vanish.</p><p class=\"mb-4\">Use three or four columns at most. Keep cells short. If you need narrative, move it to a list under the table.</p><p class=\"mb-4\">Match the pipe count on every row. A header row and a |---| separator are required.</p><p class=\"mb-4\">Ask the AI to tidy one table, not to turn the page into an HTML grid.</p><p class=\"mb-4\">Clincoo deploys HTML from Markdown. A narrow table stays readable after release.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "markdown-kutipan-bukan-dekorasi",
      langs: {
        "id": {
          title: "Kutipan Markdown untuk Sumber, Bukan untuk Hiasan",
          desc: "> dipakai untuk ucapan atau peringatan singkat. Jangan membungkus seluruh artikel dalam blockquote.",
          content: "<p class=\"mb-4\">Template kadang menaruh hero dan CTA di dalam > agar tampak menjorok. Hasilnya seluruh halaman terdengar seperti kutipan.</p><p class=\"mb-4\">Pakai blockquote hanya untuk kalimat sumber, peringatan singkat, atau ucapan klien. Isi utama tetap paragraf biasa.</p><p class=\"mb-4\">Jangan menumpuk >>>. Satu tingkat cukup. Cantumkan sumber di baris berikutnya jika relevan.</p><p class=\"mb-4\">Minta AI mengembalikan prosa ke paragraf, bukan menambah garis vertikal CSS.</p><p class=\"mb-4\">Clincoo merender > sebagai blockquote. Gunakan untuk makna, bukan untuk dekorasi di editor.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Markdown Quotes Are for Sources, Not Decoration",
          desc: "> is for a short citation or warning. Do not wrap the whole article in a blockquote.",
          content: "<p class=\"mb-4\">Templates sometimes put the hero and CTA inside > so the block looks indented. The whole page then sounds like a quotation.</p><p class=\"mb-4\">Use a blockquote only for a source line, a short warning, or a client quote. Keep the main copy in normal paragraphs.</p><p class=\"mb-4\">Do not stack >>>. One level is enough. Credit the source on the next line when it matters.</p><p class=\"mb-4\">Ask the AI to return prose to paragraphs, not to add a CSS vertical rule.</p><p class=\"mb-4\">Clincoo renders > as a blockquote. Use it for meaning, not decoration, in editor.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["markdown"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["markdown"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
