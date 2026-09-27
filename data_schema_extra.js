// Clincoo Blog — artikel schema tambahan 2026-09-27
(function(){
  var extra = [
    {
      id: "schema-breadcrumb-list",
      langs: {
        "id": {
          title: "Tandai Jejak Halaman Clincoo dengan BreadcrumbList",
          desc: "Breadcrumb di tampilan belum otomatis jadi schema. JSON-LD BreadcrumbList harus menyalin tautan yang terlihat.",
          content: "<p class=\"mb-4\">Halaman dalam Clincoo punya jejak Beranda / Kategori / Artikel, tetapi head tidak menjelaskan urutan itu ke mesin telusur.</p><p class=\"mb-4\">Di editor.clincoo.buzz, tulis JSON-LD @type BreadcrumbList. Setiap ListItem memuat name, item URL, dan position mulai 1.</p><p class=\"mb-4\">Samakan name dengan teks tautan yang tampil. Jangan sisipkan tingkat yang tidak ada di navigasi.</p><p class=\"mb-4\">Minta AI membangun BreadcrumbList dari markup jejak yang sudah ada. Tolak jika AI mengarang folder fiktif.</p><p class=\"mb-4\">Clincoo menayangkan markup yang kamu simpan. Jejak yang sinkron menjaga cuplikan di hasil telusur tetap jujur.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Mark a Clincoo Trail with BreadcrumbList",
          desc: "A visible breadcrumb is not schema by itself. BreadcrumbList JSON-LD must copy the links readers already see.",
          content: "<p class=\"mb-4\">A nested Clincoo page shows Home / Category / Article, but the head never explains that order to search engines.</p><p class=\"mb-4\">In editor.clincoo.buzz, write JSON-LD @type BreadcrumbList. Each ListItem needs name, item URL, and position starting at 1.</p><p class=\"mb-4\">Keep name equal to the visible link text. Do not invent levels missing from the navigation.</p><p class=\"mb-4\">Ask AI to build BreadcrumbList from existing trail markup. Reject fictional folders.</p><p class=\"mb-4\">Clincoo ships the markup you save. A synced trail keeps the search snippet honest.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "schema-samakan-canonical",
      langs: {
        "id": {
          title: "Samakan mainEntityOfPage Schema dengan Canonical Clincoo",
          desc: "URL di JSON-LD yang beda dari canonical membingungkan mesin telusur. Satu alamat resmi saja.",
          content: "<p class=\"mb-4\">Artikel Clincoo punya rel=canonical ke blog.clincoo.buzz, tetapi schema masih menunjuk path preview atau pages.dev.</p><p class=\"mb-4\">Di editor.clincoo.buzz, salin href canonical ke mainEntityOfPage atau url pada objek Article/WebPage.</p><p class=\"mb-4\">Jangan campur trailing slash. Jika canonical berakhiran /, schema harus sama persis.</p><p class=\"mb-4\">Minta AI membandingkan tag canonical dengan field url schema. Tempel head saja, bukan seluruh layout.</p><p class=\"mb-4\">Clincoo tidak merapikan URL otomatis. Alamat yang satu menjaga identitas halaman di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Match Clincoo Schema mainEntityOfPage to the Canonical",
          desc: "A JSON-LD URL that differs from the canonical confuses search engines. Keep one official address.",
          content: "<p class=\"mb-4\">A Clincoo article has rel=canonical to blog.clincoo.buzz, but schema still points at a preview or pages.dev path.</p><p class=\"mb-4\">In editor.clincoo.buzz, copy the canonical href into mainEntityOfPage or the Article/WebPage url.</p><p class=\"mb-4\">Do not mix trailing slashes. If the canonical ends with /, the schema must match exactly.</p><p class=\"mb-4\">Ask AI to compare the canonical tag with the schema url field. Paste the head only, not the whole layout.</p><p class=\"mb-4\">Clincoo does not rewrite URLs for you. One address keeps the page identity clear on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "schema-website-searchaction",
      langs: {
        "id": {
          title: "Pakai SearchAction Schema hanya jika Cari Clincoo Hidup",
          desc: "WebSite plus potentialAction tanpa kotak cari adalah janji kosong. Pasang aksi hanya jika form benar-benar ada.",
          content: "<p class=\"mb-4\">Template Clincoo kadang menyalin WebSite SearchAction padahal situs tidak punya halaman hasil.</p><p class=\"mb-4\">Di editor.clincoo.buzz, tambah potentialAction SearchAction hanya jika ada form GET dengan parameter q yang bekerja.</p><p class=\"mb-4\">target harus URL nyata, misalnya https://domainmu/cari?q={search_term_string}. Uji tautan itu di pratinjau.</p><p class=\"mb-4\">Minta AI menulis SearchAction dari action form yang sudah ada. Tolak jika AI mengarang endpoint /search.</p><p class=\"mb-4\">Clincoo menayangkan schema apa adanya. SearchAction yang benar-benar jalan menjaga sitelink cari tetap aman.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use SearchAction Schema only when Clincoo Search Works",
          desc: "WebSite plus potentialAction without a live search box is an empty promise. Add the action only if the form exists.",
          content: "<p class=\"mb-4\">A Clincoo template sometimes copies WebSite SearchAction even though the site has no results page.</p><p class=\"mb-4\">In editor.clincoo.buzz, add a SearchAction potentialAction only if a GET form with a working q parameter exists.</p><p class=\"mb-4\">target must be a real URL, for example https://yourdomain/search?q={search_term_string}. Test that link in preview.</p><p class=\"mb-4\">Ask AI to write SearchAction from the form action you already have. Reject a made-up /search endpoint.</p><p class=\"mb-4\">Clincoo ships schema as saved. A working SearchAction keeps search sitelinks safer.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "schema-logo-imageobject",
      langs: {
        "id": {
          title: "Hubungkan Logo Clincoo lewat ImageObject yang Valid",
          desc: "Field logo berupa string mentah sering diabaikan. ImageObject dengan url gambar yang bisa diunduh lebih jelas.",
          content: "<p class=\"mb-4\">Blok Organization di Clincoo menulis logo sebagai path relatif ./logo.png. Mesin telusur tidak selalu menyelesaikan path itu.</p><p class=\"mb-4\">Di editor.clincoo.buzz, ubah logo menjadi ImageObject berisi url absolut ke file yang benar-benar ada, plus width dan height jika kamu tahu.</p><p class=\"mb-4\">Jangan pakai data URI atau file yang diblokir robots. Logo harus bisa diunduh tanpa login.</p><p class=\"mb-4\">Minta AI mengganti string logo jadi ImageObject. Tempel URL publik logo.png yang sudah kamu unggah.</p><p class=\"mb-4\">Clincoo tidak mengecek apakah berkas logo hidup. URL absolut menjaga merek di app.clincoo.buzz terbaca.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Attach a Clincoo Logo with a Valid ImageObject",
          desc: "A raw string logo field is often ignored. An ImageObject with a fetchable image URL is clearer.",
          content: "<p class=\"mb-4\">A Clincoo Organization block writes logo as a relative ./logo.png path. Search engines do not always resolve that path.</p><p class=\"mb-4\">In editor.clincoo.buzz, turn logo into an ImageObject with an absolute url to a real file, plus width and height if you know them.</p><p class=\"mb-4\">Do not use a data URI or a file blocked by robots. The logo must download without a login.</p><p class=\"mb-4\">Ask AI to replace the logo string with an ImageObject. Paste the public logo.png URL you already uploaded.</p><p class=\"mb-4\">Clincoo does not check whether the logo file is live. An absolute URL keeps the brand readable on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "schema-graph-satu-script",
      langs: {
        "id": {
          title: "Gabung Beberapa Tipe Schema Clincoo dalam Satu @graph",
          desc: "Dua tag script JSON-LD mudah bentrok. Satu script dengan @graph menjaga Organization dan WebPage tetap terhubung.",
          content: "<p class=\"mb-4\">Halaman Clincoo menumpuk script Organization, WebPage, dan BreadcrumbList terpisah. ID @id lalu tidak saling merujuk.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pakai satu script application/ld+json dengan @graph. Beri @id unik, misalnya #org dan #page, lalu tautkan publisher.</p><p class=\"mb-4\">Jangan duplikat name di setiap objek tanpa @id. Referensi lewat @id lebih rapi daripada menyalin ulang.</p><p class=\"mb-4\">Minta AI menggabungkan blok yang sudah valid ke @graph. Tempel semua script JSON-LD yang sekarang terpisah.</p><p class=\"mb-4\">Clincoo merender script yang kamu tulis. Satu graf menjaga hubungan merek di app.clincoo.buzz tetap jelas.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Combine Several Clincoo Schema Types in One @graph",
          desc: "Two JSON-LD script tags collide easily. One script with @graph keeps Organization and WebPage linked.",
          content: "<p class=\"mb-4\">A Clincoo page stacks separate Organization, WebPage, and BreadcrumbList scripts. The @id values then never point at each other.</p><p class=\"mb-4\">In editor.clincoo.buzz, use one application/ld+json script with @graph. Give unique @id values such as #org and #page, then link publisher.</p><p class=\"mb-4\">Do not repeat name on every object without @id. Referencing via @id is cleaner than copying fields.</p><p class=\"mb-4\">Ask AI to merge already-valid blocks into @graph. Paste every JSON-LD script that is now separate.</p><p class=\"mb-4\">Clincoo renders the script you write. One graph keeps the brand relationship clear on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["schema"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["schema"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
