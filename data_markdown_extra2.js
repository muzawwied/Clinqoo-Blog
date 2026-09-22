// Clincoo Blog — artikel markdown tambahan 2026-09-22 WIB
(function(){
  var extra = [
    {
      id: "markdown-html-mentah-minimal",
      langs: {
        "id": {
          title: "HTML Mentah di Markdown Clincoo: Sedikit dan Bertujuan",
          desc: "Tag HTML di draf Markdown mudah merusak pratinjau. Pakai hanya jika sintaks Markdown tidak cukup.",
          content: "<p class=\"mb-4\">AI sering menanam tag div, style, dan even script di tengah draf Markdown Clincoo. Pratinjau editor.clincoo.buzz pecah atau menampilkan blok kosong.</p><p class=\"mb-4\">Utamakan sintaks Markdown: heading, daftar, tautan, gambar. HTML mentah hanya untuk kasus yang Markdown tidak punya, misalnya iframe peta yang memang kamu izinkan.</p><p class=\"mb-4\">Jangan campur class Tailwind acak di dalam berkas .md. Simpan gaya di CSS proyek.</p><p class=\"mb-4\">Minta AI menghapus tag yang tidak perlu, bukan menambah wrapper baru.</p><p class=\"mb-4\">Clincoo merender draf yang kamu simpan. HTML hemat lebih mudah diaudit sebelum deploy di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Raw HTML in Clincoo Markdown: Keep It Rare and Intentional",
          desc: "HTML tags in a Markdown draft easily break preview. Use them only when Markdown cannot do the job.",
          content: "<p class=\"mb-4\">AI often plants a div, inline style, or even a script in a Clincoo Markdown draft. Preview in editor.clincoo.buzz breaks or shows an empty block.</p><p class=\"mb-4\">Prefer Markdown syntax: headings, lists, links, images. Use raw HTML only for cases Markdown cannot cover, such as a map iframe you actually allow.</p><p class=\"mb-4\">Do not sprinkle random Tailwind classes inside a .md file. Keep style in the project CSS.</p><p class=\"mb-4\">Ask the AI to strip needless tags, not to add another wrapper.</p><p class=\"mb-4\">Clincoo renders the draft you save. Lean HTML is easier to audit before deploy from app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "markdown-garis-pemisah-hemat",
      langs: {
        "id": {
          title: "Garis Pemisah Markdown: Satu Saja, Bukan Dekorasi Berulang",
          desc: "Tiga tanda minus berulang memotong halaman jadi potongan kecil. Pakai HR hanya antar bagian besar.",
          content: "<p class=\"mb-4\">Draf Clincoo sering punya --- setelah setiap paragraf. Pembaca melihat halaman terpotong-potong dan outline kehilangan alur.</p><p class=\"mb-4\">Pakai garis pemisah hanya antara dua bagian yang benar-benar terpisah, misalnya isi dan catatan kaki. Heading H2 sudah cukup sebagai pemisah biasa.</p><p class=\"mb-4\">Jangan menaruh HR di dalam daftar atau tepat setelah H1. Cek pratinjau di editor.clincoo.buzz.</p><p class=\"mb-4\">Minta AI menghapus garis berlebih, bukan menambah border CSS.</p><p class=\"mb-4\">Clincoo menayangkan HR apa adanya. Sedikit garis lebih tenang setelah situs live di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Markdown Horizontal Rules: One Break, Not Repeated Decoration",
          desc: "Repeated --- chops the page into scraps. Use an HR only between major sections.",
          content: "<p class=\"mb-4\">Clincoo drafts often put --- after every paragraph. Readers see a chopped page and the outline loses flow.</p><p class=\"mb-4\">Use a horizontal rule only between two truly separate blocks, such as body and footnotes. An H2 is enough for a normal section break.</p><p class=\"mb-4\">Do not put an HR inside a list or right after the H1. Check preview in editor.clincoo.buzz.</p><p class=\"mb-4\">Ask the AI to delete extra rules, not to add a CSS border.</p><p class=\"mb-4\">Clincoo ships HR as saved. Fewer lines look calmer after the site is live from app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "markdown-paragraf-bukan-break-ganda",
      langs: {
        "id": {
          title: "Paragraf Markdown: Satu Baris Kosong, Bukan Break Bertumpuk",
          desc: "Dua spasi atau tag break membuat jarak tidak konsisten. Pisahkan gagasan dengan paragraf sungguhan.",
          content: "<p class=\"mb-4\">AI suka menekan Enter dua kali lalu menambah break bertumpuk di draf Clincoo. Hasilnya ada rongga aneh di pratinjau ponsel.</p><p class=\"mb-4\">Satu baris kosong di antara blok sudah membuat paragraf baru. Jangan andalkan dua spasi di ujung baris kecuali kamu memang butuh pecah baris pendek, misalnya alamat.</p><p class=\"mb-4\">Rapikan draf di editor.clincoo.buzz sebelum minta AI menulis ulang seluruh halaman.</p><p class=\"mb-4\">Minta AI menggabungkan pecahan jadi paragraf utuh, bukan menambah margin inline.</p><p class=\"mb-4\">Clincoo merender spasi Markdown secara prediktif. Paragraf jernih lebih mudah dibaca setelah deploy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Markdown Paragraphs: One Blank Line, Not Stacked Breaks",
          desc: "Trailing spaces or stacked break tags make uneven gaps. Separate ideas with real paragraphs.",
          content: "<p class=\"mb-4\">AI likes to hit Enter twice then add stacked breaks in a Clincoo draft. Phone preview then shows odd gaps.</p><p class=\"mb-4\">One blank line between blocks already starts a new paragraph. Rely on two trailing spaces only when you truly need a short line break, such as an address.</p><p class=\"mb-4\">Tidy the draft in editor.clincoo.buzz before asking the AI to rewrite the whole page.</p><p class=\"mb-4\">Ask the AI to merge fragments into whole paragraphs, not to add inline margin.</p><p class=\"mb-4\">Clincoo renders Markdown spacing predictably. Clear paragraphs read better after deploy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "markdown-tautan-judul-opsional",
      langs: {
        "id": {
          title: "Judul pada Tautan Markdown: Opsional, Jangan Jadi Paragraf",
          desc: "Atribut title di tautan boleh singkat. Jangan menaruh seluruh deskripsi di dalam tanda kutip tautan.",
          content: "<p class=\"mb-4\">Beberapa draf Clincoo menulis tautan harga dengan title yang terlalu panjang. Tooltip terpotong.</p><p class=\"mb-4\">Teks tautan harus menjelaskan tujuan. Title opsional paling banyak beberapa kata. Isi detail di paragraf, bukan di atribut.</p><p class=\"mb-4\">Uji hover dan fokus keyboard di editor.clincoo.buzz. Pastikan tautan relatif tetap valid setelah ganti domain di app.clincoo.buzz.</p><p class=\"mb-4\">Minta AI memendekkan title, bukan menghapus teks tautan yang sudah jelas.</p><p class=\"mb-4\">Clincoo men-deploy tautan apa adanya. Label jujur lebih berguna daripada tooltip panjang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Markdown Link Titles: Optional, Never a Hidden Paragraph",
          desc: "A link title may be short. Do not hide a full description inside the link quotes.",
          content: "<p class=\"mb-4\">Some Clincoo drafts write a pricing link with a title that is a whole sentence. The tooltip gets clipped.</p><p class=\"mb-4\">The link text should name the destination. An optional title is a few words at most. Put detail in a paragraph, not in the attribute.</p><p class=\"mb-4\">Test hover and keyboard focus in editor.clincoo.buzz. Keep relative links valid after a domain change in app.clincoo.buzz.</p><p class=\"mb-4\">Ask the AI to shorten the title, not to delete already-clear link text.</p><p class=\"mb-4\">Clincoo deploys links as saved. An honest label beats a long tooltip.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "markdown-hindari-skrip-di-draf",
      langs: {
        "id": {
          title: "Jangan Tempel Skrip di Berkas Markdown Clincoo",
          desc: "Script, onload, dan iframe liar di .md adalah risiko. Simpan perilaku di berkas JS proyek.",
          content: "<p class=\"mb-4\">AI kadang menempel skrip pelacak atau widget obrolan langsung di halaman Markdown. Itu sulit diaudit dan bisa merusak CSP nanti.</p><p class=\"mb-4\">Markdown untuk isi. Perilaku taruh di file JavaScript yang kamu kendalikan. Tolak cuplikan yang meminta eval atau document write dari draf.</p><p class=\"mb-4\">Jika butuh embed resmi, isolasi di satu halaman dan cek pratinjau editor.clincoo.buzz plus jaringan di browser.</p><p class=\"mb-4\">Minta AI menghapus skrip dari .md, bukan menormalisasi tag berbahaya.</p><p class=\"mb-4\">Clincoo adalah situs statis yang kamu rilis lewat app.clincoo.buzz. Draf bersih lebih aman untuk pembaca dan untuk kamu.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Paste Scripts into a Clincoo Markdown Draft",
          desc: "Scripts, onload, and stray iframes in a .md file are a risk. Keep behavior in project JS.",
          content: "<p class=\"mb-4\">AI sometimes pastes a tracker script or chat widget straight into a Markdown page. That is hard to audit and can break CSP later.</p><p class=\"mb-4\">Markdown is for content. Put behavior in a JavaScript file you control. Refuse snippets that ask for eval or document.write from the draft.</p><p class=\"mb-4\">If you need an official embed, isolate it on one page and check editor.clincoo.buzz preview plus the browser network panel.</p><p class=\"mb-4\">Ask the AI to remove scripts from the .md, not to sanitize a dangerous tag in place.</p><p class=\"mb-4\">Clincoo is a static site you release from app.clincoo.buzz. A clean draft is safer for readers and for you.</p>",
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
