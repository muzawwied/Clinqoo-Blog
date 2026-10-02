// Clincoo Blog — artikel head tambahan 2026-10-03 WIB
(function(){
  var extra = [
{
  "id": "head-og-url-absolut-bukan-relatif",
  "langs": {
    "id": {
      "title": "Isi og:url dengan URL Absolut, Bukan Path Relatif",
      "desc": "Pratinjau tautan memakai og:url. Path relatif membuat kartu sosial menunjuk host yang salah.",
      "content": "<p class=\"mb-4\">Tag og:url di head halaman Clincoo harus URL penuh, termasuk https dan host blog.clincoo.buzz atau domain proyek.</p><p class=\"mb-4\">Path seperti /artikel/ rusak saat crawler tidak memakai base yang Anda kira. Kartu sosial lalu membuka host lama.</p><p class=\"mb-4\">Samakan og:url dengan canonical. Dua alamat untuk satu halaman memecah sinyal halaman utama.</p><p class=\"mb-4\">Minta AI memeriksa head dan menandai nilai yang tidak diawali https://. Jangan minta AI menebak domain produksi.</p><p class=\"mb-4\">Uji dengan berbagi tautan dari pratinjau editor.clincoo.buzz. Kartu harus membuka URL yang sama dengan bilah alamat.</p>",
      "source": "Clincoo",
      "sourceUrl": "https://editor.clincoo.buzz/",
      "sourceSnippet": "Editor resmi Clincoo",
      "source2": "Clincoo App",
      "source3": "Clincoo Blog"
    },
    "en": {
      "title": "Set og:url to an Absolute URL, Not a Relative Path",
      "desc": "Link previews read og:url. A relative path makes the social card point at the wrong host.",
      "content": "<p class=\"mb-4\">The og:url tag in a Clincoo page head must be a full URL, including https and the blog.clincoo.buzz host or the project domain.</p><p class=\"mb-4\">A path such as /artikel/ breaks when a crawler does not use the base you assumed. The social card then opens an old host.</p><p class=\"mb-4\">Match og:url to the canonical URL. Two addresses for one page split the signal for the main page.</p><p class=\"mb-4\">Ask AI to scan the head and flag values that do not start with https://. Do not ask AI to guess the production domain.</p><p class=\"mb-4\">Test by sharing a link from the editor.clincoo.buzz preview. The card should open the same URL as the address bar.</p>",
      "source": "Clincoo",
      "sourceUrl": "https://editor.clincoo.buzz/",
      "sourceSnippet": "Official Clincoo editor",
      "source2": "Clincoo App",
      "source3": "Clincoo Blog"
    }
  }
},
  {
    "id": "head-dns-prefetch-bukan-preconnect-semua",
    "langs": {
      "id": {
        "title": "Pakai dns-prefetch, Jangan Preconnect ke Semua Origin di Head Clincoo",
        "desc": "Preconnect ke banyak domain menahan koneksi. Batasi preconnect ke origin kritis, sisanya dns-prefetch.",
        "content": "<p class=\"mb-4\">Di head Clincoo, preconnect hanya untuk origin yang pasti dipakai di atas lipatan, misalnya font. Satu atau dua sudah cukup.</p><p class=\"mb-4\">Origin analitik, chat, atau gambar yang mungkin tidak tampil cukup memakai dns-prefetch. Jangan preconnect semuanya.</p><p class=\"mb-4\">Setiap preconnect meminta DNS, TCP, dan TLS lebih awal. Terlalu banyak membuat koneksi lain antre di pratinjau editor.clincoo.buzz.</p><p class=\"mb-4\">Cek tab Network di DevTools. Jika origin preconnect tidak pernah diunduh, hapus tag itu.</p><p class=\"mb-4\">Minta AI meninjau daftar link rel di head saja. Tempel cuplikan head, bukan seluruh halaman.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Editor resmi Clincoo",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Use dns-prefetch, Do Not Preconnect to Every Origin in the Clincoo Head",
        "desc": "Preconnect to many domains holds sockets open. Limit preconnect to critical origins and use dns-prefetch for the rest.",
        "content": "<p class=\"mb-4\">In the Clincoo head, preconnect only to origins that are certain above the fold, such as fonts. One or two is enough.</p><p class=\"mb-4\">Analytics, chat, or images that may never show only need dns-prefetch. Do not preconnect to all of them.</p><p class=\"mb-4\">Each preconnect asks for DNS, TCP, and TLS early. Too many makes other connections queue in the editor.clincoo.buzz preview.</p><p class=\"mb-4\">Check the Network tab in DevTools. If a preconnected origin is never downloaded, remove that tag.</p><p class=\"mb-4\">Ask AI to review the link rel list in the head only. Paste the head snippet, not the whole page.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Official Clincoo editor",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      }
    }
  }
];
  var b=window.countryDataFiles&&window.countryDataFiles["head"];
  if(b&&b.articles)b.articles=b.articles.concat(extra);
})();
