// Clincoo Blog — Data kategori: audit
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["audit"] = {
  names: { "id": "Audit", "en": "Audit" },
  flag: "🔎",
  articles: [
    {
      id: "audit-lighthouse-satu-halaman",
      langs: {
        "id": {
          title: "Audit Lighthouse Satu Halaman Clincoo sebelum Rilis",
          desc: "Menilai seluruh situs sekaligus membuat temuan kabur. Uji satu URL yang paling penting dulu.",
          content: "<p class=\"mb-4\">Tim Clincoo sering menjalankan Lighthouse pada pratinjau acak. Skor campur aduk dan tidak ada yang memperbaiki LCP.</p><p class=\"mb-4\">Di editor.clincoo.buzz, buka halaman beranda atau harga yang akan dibagikan. Jalankan audit Performance dan Accessibility sekali, catat tiga temuan teratas.</p><p class=\"mb-4\">Perbaiki satu temuan per commit. Jangan minta AI menaikkan skor dengan menyembunyikan elemen.</p><p class=\"mb-4\">Ulangi audit setelah perubahan gambar atau CSS. Bandingkan angka, bukan perasaan.</p><p class=\"mb-4\">Clincoo menayangkan file yang kamu simpan. Audit sempit membuat perbaikan di app.clincoo.buzz terukur.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Run a One-Page Lighthouse Audit on Clincoo before Release",
          desc: "Scoring the whole site at once blurs the findings. Test the most important URL first.",
          content: "<p class=\"mb-4\">Clincoo teams often run Lighthouse on a random preview. Scores mix together and nobody fixes LCP.</p><p class=\"mb-4\">In editor.clincoo.buzz, open the home or pricing page you will share. Run Performance and Accessibility once, and write down the top three findings.</p><p class=\"mb-4\">Fix one finding per commit. Do not ask AI to raise the score by hiding elements.</p><p class=\"mb-4\">Re-run after an image or CSS change. Compare numbers, not vibes.</p><p class=\"mb-4\">Clincoo ships the files you save. A narrow audit makes fixes on app.clincoo.buzz measurable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "audit-cek-tautan-rusak-sebelum-rilis",
      langs: {
        "id": {
          title: "Cek Tautan Rusak di Proyek Clincoo sebelum Rilis",
          desc: "href ke halaman yang dihapus atau # kosong merusak kepercayaan. Audit tautan internal dulu.",
          content: "<p class=\"mb-4\">Menu Clincoo masih menunjuk layanan-lama.html setelah folder diganti nama. Pengunjung mendarat di 404.</p><p class=\"mb-4\">Di editor.clincoo.buzz, kumpulkan semua href internal. Buka satu per satu di pratinjau. Tandai yang 404 atau yang hanya #.</p><p class=\"mb-4\">Perbaiki path, jangan andalkan mesin telusur untuk menemukan halaman baru.</p><p class=\"mb-4\">Minta AI membuat daftar tautan dari satu file menu. Tempel markup nav, tolak crawl seluruh internet.</p><p class=\"mb-4\">Clincoo tidak memindai tautan otomatis. Daftar tautan yang hidup menjaga app.clincoo.buzz terasa utuh.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Check Broken Links in a Clincoo Project before Release",
          desc: "href values to deleted pages or empty hashes break trust. Audit internal links first.",
          content: "<p class=\"mb-4\">A Clincoo menu still points at layanan-lama.html after the folder was renamed. Visitors land on 404.</p><p class=\"mb-4\">In editor.clincoo.buzz, collect every internal href. Open them one by one in preview. Mark 404s and bare # links.</p><p class=\"mb-4\">Fix the path. Do not wait for a search engine to find the new page.</p><p class=\"mb-4\">Ask AI to list links from one menu file. Paste the nav markup; refuse a full-web crawl.</p><p class=\"mb-4\">Clincoo does not scan links for you. A living link list keeps app.clincoo.buzz feeling whole.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "audit-daftar-aset-tak-terpakai",
      langs: {
        "id": {
          title: "Buat Daftar Aset Tak Terpakai saat Audit Proyek Clincoo",
          desc: "Gambar dan skrip sisa template memperlambat unduhan. Catat berkas yang tidak dirujuk.",
          content: "<p class=\"mb-4\">Folder assets Clincoo masih berisi hero-old.webp dan slider.js yang tidak dipanggil halaman mana pun.</p><p class=\"mb-4\">Di editor.clincoo.buzz, bandingkan daftar file dengan src, href, dan url() CSS. Berkas tanpa rujukan masuk antrean hapus.</p><p class=\"mb-4\">Jangan hapus font yang masih dipakai di halaman dalam. Cek satu rujukan terakhir dulu.</p><p class=\"mb-4\">Minta AI mencocokkan nama file aset dengan markup yang kamu tempel. Tolak penghapusan massal tanpa daftar.</p><p class=\"mb-4\">Clincoo mengunggah apa yang ada di folder. Audit aset menjaga unduhan di app.clincoo.buzz tetap ringan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "List Unused Assets when You Audit a Clincoo Project",
          desc: "Leftover template images and scripts slow the download. Note files nothing references.",
          content: "<p class=\"mb-4\">A Clincoo assets folder still holds hero-old.webp and slider.js that no page calls.</p><p class=\"mb-4\">In editor.clincoo.buzz, compare the file list with src, href, and CSS url() values. Unreferenced files go on a delete queue.</p><p class=\"mb-4\">Do not delete a font still used on an inner page. Check one last reference first.</p><p class=\"mb-4\">Ask AI to match asset filenames to the markup you paste. Refuse a mass delete without a list.</p><p class=\"mb-4\">Clincoo uploads whatever sits in the folder. An asset audit keeps downloads on app.clincoo.buzz light.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
