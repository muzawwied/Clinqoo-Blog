// Clincoo Blog — Data kategori: schema
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["schema"] = {
  names: { "id": "Schema", "en": "Schema" },
  flag: "S",
  articles: [
    {
      id: "schema-jsonld-organization",
      langs: {
        "id": {
          title: "Tambah JSON-LD Organization pada Situs Clincoo",
          desc: "Mesin telusur butuh nama dan URL resmi. Satu blok Organization di head lebih jujur daripada mengira meta biasa cukup.",
          content: "<p class=\"mb-4\">Halaman Clincoo sering hanya punya title. Kartu merek di hasil telusur lalu kosong atau memakai nama domain mentah.</p><p class=\"mb-4\">Di editor.clincoo.buzz, sisipkan script type=application/ld+json berisi @type Organization, name, url, dan logo jika ada. Samakan url dengan domain yang kamu bagikan.</p><p class=\"mb-4\">Jangan isi alamat atau nomor yang belum kamu miliki. Data palsu lebih merusak daripada tidak ada schema.</p><p class=\"mb-4\">Minta AI hanya menambah satu blok JSON-LD di head. Tempel head halaman, bukan seluruh layout.</p><p class=\"mb-4\">Clincoo menayangkan markup yang kamu simpan. Schema organisasi yang jujur membantu app.clincoo.buzz dikenali.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add Organization JSON-LD on a Clincoo Site",
          desc: "Search engines need an official name and URL. One Organization block in the head is clearer than hoping plain meta is enough.",
          content: "<p class=\"mb-4\">A Clincoo page often has only a title. The brand card in search then stays empty or uses the raw domain name.</p><p class=\"mb-4\">In editor.clincoo.buzz, insert a script type=application/ld+json with @type Organization, name, url, and a logo if you have one. Match url to the domain you share.</p><p class=\"mb-4\">Do not fill an address or phone you do not own. Fake data is worse than no schema.</p><p class=\"mb-4\">Ask AI to add one JSON-LD block in the head only. Paste the page head, not the whole layout.</p><p class=\"mb-4\">Clincoo ships the markup you save. Honest organization schema helps app.clincoo.buzz get recognized.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "schema-jsonld-article",
      langs: {
        "id": {
          title: "Tandai Artikel Clincoo dengan JSON-LD Article",
          desc: "Postingan blog tanpa tipe Article terlihat seperti halaman biasa. Headline dan tanggal bantu mesin telusur.",
          content: "<p class=\"mb-4\">Artikel di blog.clincoo.buzz atau situs klien sering tidak punya tipe terstruktur. Hasil telusur lalu tidak menampilkan tanggal.</p><p class=\"mb-4\">Di editor.clincoo.buzz, tambah JSON-LD @type Article dengan headline, datePublished, dan mainEntityOfPage yang sama dengan canonical.</p><p class=\"mb-4\">Samakan headline dengan title halaman. Jangan tulis judul schema yang berbeda dari H1.</p><p class=\"mb-4\">Minta AI menyusun satu objek Article dari title dan tanggal yang kamu berikan. Tolak jika AI mengarang author palsu.</p><p class=\"mb-4\">Clincoo tidak menulis schema otomatis. Article yang jujur menjaga cuplikan di hasil telusur tetap relevan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Mark a Clincoo Article with Article JSON-LD",
          desc: "A blog post without an Article type looks like a generic page. Headline and dates help search engines.",
          content: "<p class=\"mb-4\">Articles on blog.clincoo.buzz or a client site often have no structured type. Search results then hide the date.</p><p class=\"mb-4\">In editor.clincoo.buzz, add JSON-LD @type Article with headline, datePublished, and mainEntityOfPage matching the canonical.</p><p class=\"mb-4\">Keep the headline the same as the page title. Do not write a schema title that differs from the H1.</p><p class=\"mb-4\">Ask AI to build one Article object from the title and date you give. Reject a made-up author.</p><p class=\"mb-4\">Clincoo does not write schema for you. An honest Article keeps the search snippet relevant.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "schema-satu-script-valid",
      langs: {
        "id": {
          title: "Validasi Satu Blok JSON-LD Clincoo sebelum Deploy",
          desc: "Koma trailing dan kutip rusak mematikan seluruh script. Uji JSON sebelum rilis.",
          content: "<p class=\"mb-4\">AI sering menempel JSON-LD dengan koma di properti terakhir. Parser gagal diam-diam dan schema tidak terpakai.</p><p class=\"mb-4\">Salin isi script ke pemeriksa JSON di editor.clincoo.buzz atau konsol JSON.parse. Perbaiki dulu, baru deploy.</p><p class=\"mb-4\">Jangan gabungkan dua objek tanpa @graph jika kamu belum yakin. Satu objek valid lebih baik daripada tiga yang pecah.</p><p class=\"mb-4\">Minta AI memperbaiki sintaks saja. Tempel blok yang error, bukan seluruh file HTML.</p><p class=\"mb-4\">Clincoo merender script apa adanya. JSON yang valid menjaga schema hidup di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Validate One Clincoo JSON-LD Block before Deploy",
          desc: "A trailing comma or broken quote kills the whole script. Test the JSON before release.",
          content: "<p class=\"mb-4\">AI often pastes JSON-LD with a trailing comma on the last property. The parser fails quietly and schema never applies.</p><p class=\"mb-4\">Copy the script body into a JSON checker in editor.clincoo.buzz or JSON.parse in the console. Fix it before deploy.</p><p class=\"mb-4\">Do not merge two objects without @graph unless you are sure. One valid object beats three broken ones.</p><p class=\"mb-4\">Ask AI to fix syntax only. Paste the failing block, not the whole HTML file.</p><p class=\"mb-4\">Clincoo renders the script as saved. Valid JSON keeps schema alive on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "schema-jangan-markup-palsu",
      langs: {
        "id": {
          title: "Jangan Isi Schema Clincoo dengan Data yang Tidak Ada di Halaman",
          desc: "Rating, harga, dan FAQ fiktif bisa ditolak mesin telusur. Schema harus mencerminkan teks yang terlihat.",
          content: "<p class=\"mb-4\">Template Clincoo kadang menyisipkan AggregateRating 5 bintang padahal halaman tidak punya ulasan.</p><p class=\"mb-4\">Di editor.clincoo.buzz, hapus tipe yang tidak didukung konten. Schema hanya untuk fakta yang pembaca bisa lihat.</p><p class=\"mb-4\">Jika harga berubah, perbarui teks dan schema bersama. Angka usang lebih berbahaya daripada tidak ada Offer.</p><p class=\"mb-4\">Minta AI menghapus field yang tidak ada bukti di halaman. Tempel JSON-LD plus cuplikan konten.</p><p class=\"mb-4\">Clincoo tidak meninjau kebenaran schema. Data yang jujur menjaga kepercayaan di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Fill Clincoo Schema with Data Missing from the Page",
          desc: "Fake ratings, prices, and FAQs can be dropped by search engines. Schema must match visible text.",
          content: "<p class=\"mb-4\">A Clincoo template sometimes injects a 5-star AggregateRating even though the page has no reviews.</p><p class=\"mb-4\">In editor.clincoo.buzz, remove types the content does not support. Schema is only for facts a reader can see.</p><p class=\"mb-4\">If a price changes, update the copy and the schema together. A stale number is worse than no Offer.</p><p class=\"mb-4\">Ask AI to drop fields with no proof on the page. Paste the JSON-LD plus a content snippet.</p><p class=\"mb-4\">Clincoo does not audit schema truth. Honest data keeps trust on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "schema-faq-hanya-jika-ada",
      langs: {
        "id": {
          title: "Pakai FAQPage Schema hanya jika FAQ Terlihat di Clincoo",
          desc: "FAQ JSON-LD tanpa daftar tanya-jawab di halaman adalah markup menyesatkan. Tulis FAQ dulu.",
          content: "<p class=\"mb-4\">Banyak halaman Clincoo memasang FAQPage di head sementara body tidak punya bagian tanya jawab.</p><p class=\"mb-4\">Tulis daftar pertanyaan di HTML dulu di editor.clincoo.buzz. Baru buat JSON-LD yang menyalin pertanyaan dan jawaban yang sama.</p><p class=\"mb-4\">Jangan masukkan pertanyaan yang hanya ada di schema. Mesin telusur membandingkan dengan teks terlihat.</p><p class=\"mb-4\">Minta AI menghasilkan FAQPage dari markup FAQ yang sudah ada. Tolak jika AI mengarang pertanyaan baru.</p><p class=\"mb-4\">Clincoo menayangkan keduanya apa adanya. FAQ yang sinkron menjaga cuplikan kaya tetap aman di hasil telusur.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use FAQPage Schema only when the FAQ Is Visible on Clincoo",
          desc: "FAQ JSON-LD without a visible Q and A list is misleading markup. Write the FAQ first.",
          content: "<p class=\"mb-4\">Many Clincoo pages put FAQPage in the head while the body has no Q and A section.</p><p class=\"mb-4\">Write the question list in HTML first in editor.clincoo.buzz. Then build JSON-LD that copies the same questions and answers.</p><p class=\"mb-4\">Do not add questions that exist only in schema. Search engines compare against visible text.</p><p class=\"mb-4\">Ask AI to build FAQPage from FAQ markup that already exists. Reject newly invented questions.</p><p class=\"mb-4\">Clincoo ships both as saved. A synced FAQ keeps rich results safer in search.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
