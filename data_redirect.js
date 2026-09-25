// Clincoo Blog — Data kategori: redirect
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["redirect"] = {
  names: { "id": "Pengalihan", "en": "Redirect" },
  flag: "↪",
  articles: [
    {
      id: "redirect-trailing-slash-konsisten",
      langs: {
        "id": {
          title: "Samakan Trailing Slash pada URL Proyek Clincoo",
          desc: "Path dengan dan tanpa garis miring akhir bisa jadi dua URL. Pilih satu pola lalu patuhi.",
          content: "<p class=\"mb-4\">Setelah deploy Clincoo, /layanan dan /layanan/ kadang keduanya membuka. Mesin telusur bisa melihat duplikat.</p><p class=\"mb-4\">Pilih satu pola di tautan internal di editor.clincoo.buzz. Samakan canonical dengan tautan yang kamu bagikan.</p><p class=\"mb-4\">Jangan campur folder index.html dan file .html tanpa rencana. Satu pohon path lebih mudah dirawat.</p><p class=\"mb-4\">Minta AI hanya merapikan href di satu file navigasi. Jangan minta rewrite seluruh situs.</p><p class=\"mb-4\">Clincoo mengikuti path file. Konsistensi slash menjaga satu URL per halaman di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep Trailing Slashes Consistent on Clincoo URLs",
          desc: "Paths with and without a final slash can become two URLs. Pick one pattern and stick to it.",
          content: "<p class=\"mb-4\">After a Clincoo deploy, /services and /services/ may both open. Search engines can treat them as duplicates.</p><p class=\"mb-4\">Pick one pattern for internal links in editor.clincoo.buzz. Match the canonical to the link you share.</p><p class=\"mb-4\">Do not mix folder index.html and loose .html files without a plan. One path tree is easier to maintain.</p><p class=\"mb-4\">Ask AI only to tidy href values in one navigation file. Do not request a full-site rewrite.</p><p class=\"mb-4\">Clincoo follows the file path. Consistent slashes keep one URL per page on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "redirect-halaman-lama-ke-slug-baru",
      langs: {
        "id": {
          title: "Arahkan Halaman Lama ke Slug Baru di Proyek Clincoo",
          desc: "Mengganti nama folder memutus tautan. Sediakan halaman pengalih singkat di path lama.",
          content: "<p class=\"mb-4\">Klien masih membuka URL lama setelah kamu merapikan slug di Clincoo. Tanpa pengalih, mereka melihat 404.</p><p class=\"mb-4\">Simpan file tipis di path lama di editor.clincoo.buzz yang mengarah ke URL baru lewat meta refresh atau lokasi di skrip singkat.</p><p class=\"mb-4\">Jangan menghapus path lama pada hari yang sama dengan ganti slug jika tautan sudah tersebar.</p><p class=\"mb-4\">Minta AI hanya membuat satu file pengalih. Tempel URL lama dan baru sebagai konteks.</p><p class=\"mb-4\">Clincoo tidak memindahkan tautan otomatis. Pengalih sadar menjaga kunjungan sampai ke app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Point Old Pages to a New Slug in a Clincoo Project",
          desc: "Renaming a folder breaks links. Leave a short redirect page on the old path.",
          content: "<p class=\"mb-4\">Clients still open the old URL after you tidy slugs in Clincoo. Without a redirect they see a 404.</p><p class=\"mb-4\">Keep a thin file on the old path in editor.clincoo.buzz that sends people to the new URL with a meta refresh or a short location script.</p><p class=\"mb-4\">Do not delete the old path on the same day you change the slug if the link is already shared.</p><p class=\"mb-4\">Ask AI to create only one redirect file. Paste the old and new URLs as context.</p><p class=\"mb-4\">Clincoo does not move links for you. A conscious redirect keeps visits reaching app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "redirect-https-bukan-http",
      langs: {
        "id": {
          title: "Pakai HTTPS pada Setiap Tautan Internal Clincoo",
          desc: "Tautan http memicu peringatan dan konten campuran. Tulis https di href yang kamu kendalikan.",
          content: "<p class=\"mb-4\">Halaman Clincoo yang sudah aman masih menaut http ke aset atau halaman lain. Browser memblokir gambar atau memperingatkan pengunjung.</p><p class=\"mb-4\">Ganti href dan src yang kamu miliki menjadi https di editor.clincoo.buzz. Hindari protokol relatif hanya jika kamu yakin host sama.</p><p class=\"mb-4\">Jangan menaut domain contoh dari template. Ganti ke path relatif proyek.</p><p class=\"mb-4\">Minta AI mendaftar tautan http di satu file, lalu kamu yang memutuskan pengganti.</p><p class=\"mb-4\">Clincoo menayangkan tautan apa adanya. HTTPS konsisten menjaga prediksi di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use HTTPS on Every Internal Clincoo Link",
          desc: "http links trigger warnings and mixed content. Write https on href values you control.",
          content: "<p class=\"mb-4\">A Clincoo page that is already secure may still link http to assets or other pages. The browser blocks images or warns visitors.</p><p class=\"mb-4\">Change owned href and src values to https in editor.clincoo.buzz. Avoid protocol-relative URLs unless you are sure about the host.</p><p class=\"mb-4\">Do not leave example-domain links from a template. Switch them to relative project paths.</p><p class=\"mb-4\">Ask AI to list http links in one file, then you choose the replacements.</p><p class=\"mb-4\">Clincoo ships links as saved. Consistent HTTPS keeps behavior predictable on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
