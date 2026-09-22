// Clincoo Blog — Data kategori: markdown
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["markdown"] = {
  names: { "id": "Markdown", "en": "Markdown" },
  flag: "📝",
  articles: [
    {
      id: "markdown-heading-urut-satu-h1",
      langs: {
        "id": {
          title: "Satu H1 dan Heading Berurutan di Markdown Clincoo",
          desc: "Lompat dari H1 ke H4 merusak outline. Struktur heading yang rapi membantu pembaca dan AI.",
          content: "<p class=\"mb-4\">Draf Clincoo sering punya tiga # di hero lalu #### di FAQ. Screen reader dan pratinjau SEO kehilangan hierarki.</p><p class=\"mb-4\">Pakai satu H1 untuk judul halaman. Lanjut H2 untuk bagian, H3 untuk subbagian. Jangan loncat level hanya demi ukuran visual.</p><p class=\"mb-4\">Cek outline di editor.clincoo.buzz sebelum deploy. Jika ada H4 tanpa H3, naikkan level atau ubah jadi paragraf tebal.</p><p class=\"mb-4\">Minta AI merapikan heading, bukan memperkecil font dengan tag yang salah.</p><p class=\"mb-4\">Clincoo menayangkan HTML dari Markdown yang kamu simpan. Outline yang jujur lebih penting daripada hiasan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "One H1 and Sequential Headings in Clincoo Markdown",
          desc: "Jumping from H1 ke H4 breaks the outline. A clean heading tree helps readers and AI.",
          content: "<p class=\"mb-4\">Clincoo drafts often use three # on the hero then #### on the FAQ. Screen readers and SEO preview lose the hierarchy.</p><p class=\"mb-4\">Use one H1 for the page title. Follow with H2 for sections and H3 for subsections. Do not skip a level just for visual size.</p><p class=\"mb-4\">Check the outline in editor.clincoo.buzz before deploy. If an H4 has no H3, raise the level or turn it into bold body copy.</p><p class=\"mb-4\">Ask the AI to tidy headings, not to shrink type with the wrong tag.</p><p class=\"mb-4\">Clincoo ships HTML from the Markdown you save. An honest outline matters more than decoration.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "markdown-tautan-relatif-internal",
      langs: {
        "id": {
          title: "Tautan Internal Relatif di Markdown Clincoo",
          desc: "URL absolut ke domain lama pecah saat ganti host. Tautan relatif antar halaman lebih tahan.",
          content: "<p class=\"mb-4\">AI suka menulis [harga](https://nama-sementara.pages.dev/harga). Setelah custom domain, tautan masih ke host lama.</p><p class=\"mb-4\">Untuk halaman di situs yang sama, pakai path relatif seperti /harga/ atau ./faq/. Simpan URL absolut hanya untuk sumber luar.</p><p class=\"mb-4\">Uji setiap tautan di pratinjau editor.clincoo.buzz setelah ganti domain di app.clincoo.buzz.</p><p class=\"mb-4\">Minta AI mengganti host keras menjadi path. Tolak Markdown yang menanam query tracking di tautan internal.</p><p class=\"mb-4\">Clincoo men-deploy berkas statis. Tautan yang kamu kendalikan tidak boleh mengunci hostname percobaan.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Relative Internal Links in Clincoo Markdown",
          desc: "Absolute URLs to an old host break after you change domain. Relative paths between pages last.",
          content: "<p class=\"mb-4\">AI likes to write [pricing](https://temp-name.pages.dev/pricing). After a custom domain, the link still points at the old host.</p><p class=\"mb-4\">For pages on the same site, use a relative path such as /pricing/ or ./faq/. Keep absolute URLs only for outside sources.</p><p class=\"mb-4\">Test every link in the editor.clincoo.buzz preview after you change the domain in app.clincoo.buzz.</p><p class=\"mb-4\">Ask the AI to replace a hard-coded host with a path. Refuse Markdown that plants tracking queries on internal links.</p><p class=\"mb-4\">Clincoo deploys static files. Links you control must not lock to a trial hostname.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ]
};
