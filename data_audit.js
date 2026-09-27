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
    },
    {
      id: "audit-title-dan-meta-unik",
      langs: {
        "id": {
          title: "Audit Title dan Meta Description Unik per Halaman Clincoo",
          desc: "Title sama di semua halaman membuat cuplikan telusur kabur. Cek satu file HTML per baris.",
          content: "<p class=\"mb-4\">Template Clincoo menyalin title Beranda ke halaman harga dan blog. Hasil pencarian terlihat kembar.</p><p class=\"mb-4\">Di editor.clincoo.buzz, buka setiap index.html. Catat isi <title> dan meta description. Tandai yang identik atau kosong.</p><p class=\"mb-4\">Tulis title yang menyebut halaman itu, bukan hanya merek. Description satu kalimat yang bisa ditebus pengunjung.</p><p class=\"mb-4\">Minta AI merangkum isi halaman yang kamu tempel menjadi title 50–60 karakter. Tolak satu title untuk seluruh situs.</p><p class=\"mb-4\">Clincoo tidak menulis meta otomatis. Title unik menjaga cuplikan di mesin telusur mengarah ke app.clincoo.buzz dengan benar.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Audit Unique Title and Meta Description on Each Clincoo Page",
          desc: "The same title on every page blurs search snippets. Check one HTML file at a time.",
          content: "<p class=\"mb-4\">A Clincoo template copies the Home title onto pricing and blog pages. Search results look identical.</p><p class=\"mb-4\">In editor.clincoo.buzz, open each index.html. Note the <title> and meta description. Mark identical or empty values.</p><p class=\"mb-4\">Write a title that names that page, not only the brand. Keep the description one sentence a visitor can cash in.</p><p class=\"mb-4\">Ask AI to summarize the page you pasted into a 50–60 character title. Refuse one title for the whole site.</p><p class=\"mb-4\">Clincoo does not write meta tags for you. Unique titles keep search snippets pointing at app.clincoo.buzz correctly.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "audit-satu-h1-per-halaman",
      langs: {
        "id": {
          title: "Audit Satu H1 per Halaman di Proyek Clincoo",
          desc: "Dua H1 atau H1 yang menyalin slogan merek membingungkan outline. Cek heading sebelum rilis.",
          content: "<p class=\"mb-4\">Halaman layanan Clincoo punya H1 di logo dan H1 lagi di hero. Outline dokumen pecah dua.</p><p class=\"mb-4\">Di editor.clincoo.buzz, cari semua tag h1 di satu file. Sisakan satu yang menyebut topik halaman. Turunkan yang lain ke h2.</p><p class=\"mb-4\">Jangan pakai h1 untuk gaya huruf besar. Gunakan kelas CSS.</p><p class=\"mb-4\">Tempel bagian header ke AI dan minta daftar heading berurutan. Tolak rewrite seluruh layout.</p><p class=\"mb-4\">Clincoo merender markup apa adanya. Satu H1 membuat struktur di app.clincoo.buzz mudah diaudit.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Audit a Single H1 per Page in a Clincoo Project",
          desc: "Two H1s or an H1 that copies the brand slogan break the outline. Check headings before release.",
          content: "<p class=\"mb-4\">A Clincoo services page has an H1 in the logo and another in the hero. The document outline splits.</p><p class=\"mb-4\">In editor.clincoo.buzz, search for every h1 in one file. Keep one that names the page topic. Demote the rest to h2.</p><p class=\"mb-4\">Do not use h1 just to get large type. Use a CSS class.</p><p class=\"mb-4\">Paste the header into AI and ask for a heading list in order. Refuse a full layout rewrite.</p><p class=\"mb-4\">Clincoo renders the markup as saved. One H1 makes structure on app.clincoo.buzz easy to audit.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "audit-error-konsol-sebelum-rilis",
      langs: {
        "id": {
          title: "Audit Error Konsol Pratinjau Clincoo sebelum Rilis",
          desc: "404 skrip dan CORS di konsol sering lolos mata. Buka DevTools sekali per halaman utama.",
          content: "<p class=\"mb-4\">Pratinjau Clincoo terlihat rapi, tetapi konsol penuh Failed to load resource untuk analytics.js yang path-nya salah.</p><p class=\"mb-4\">Di editor.clincoo.buzz, buka pratinjau, tekan F12, tab Console dan Network. Catat merah: 404, CORS, atau Uncaught.</p><p class=\"mb-4\">Perbaiki src yang salah atau hapus skrip yang tidak dipakai. Jangan tutup konsol lalu anggap selesai.</p><p class=\"mb-4\">Tempel stack trace lengkap ke AI. Sertakan nama file. Tolak saran yang menyembunyikan error dengan try kosong.</p><p class=\"mb-4\">Clincoo menayangkan file mentah. Konsol bersih di pratinjau berarti app.clincoo.buzz lebih bisa diprediksi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Audit Console Errors in Clincoo Preview before Release",
          desc: "Script 404s and CORS issues slip past a visual check. Open DevTools once per main page.",
          content: "<p class=\"mb-4\">A Clincoo preview looks fine, but the console is full of Failed to load resource for a mistyped analytics.js path.</p><p class=\"mb-4\">In editor.clincoo.buzz, open preview, press F12, then Console and Network. Log every red line: 404, CORS, or Uncaught.</p><p class=\"mb-4\">Fix the bad src or delete the unused script. Do not close the console and call it done.</p><p class=\"mb-4\">Paste the full stack trace into AI. Include the filename. Refuse a bare try that hides the error.</p><p class=\"mb-4\">Clincoo ships raw files. A clean preview console makes app.clincoo.buzz more predictable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "audit-label-form-wajib",
      langs: {
        "id": {
          title: "Audit Label dan Field Wajib pada Form Clincoo",
          desc: "Placeholder bukan label. Cek for/id dan tanda required sebelum form ditayangkan.",
          content: "<p class=\"mb-4\">Form kontak Clincoo hanya punya placeholder Nama. Setelah diketik, petunjuk hilang dan pembaca layar tidak punya nama field.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pastikan setiap input punya label dengan for yang sama dengan id. Tandai field wajib di teks, bukan hanya atribut required.</p><p class=\"mb-4\">Uji kirim kosong di pratinjau. Pesan error harus menyebut field yang gagal.</p><p class=\"mb-4\">Tempel markup form ke AI dan minta daftar input tanpa label. Tolak penggantian form dengan widget pihak ketiga.</p><p class=\"mb-4\">Clincoo tidak mengisi label otomatis. Form yang diaudit membuat app.clincoo.buzz bisa dipakai tanpa menebak.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Audit Labels and Required Fields on a Clincoo Form",
          desc: "A placeholder is not a label. Check for/id pairs and required hints before the form ships.",
          content: "<p class=\"mb-4\">A Clincoo contact form only has a Name placeholder. After typing, the hint vanishes and a screen reader has no field name.</p><p class=\"mb-4\">In editor.clincoo.buzz, give every input a label whose for matches the id. Mark required fields in text, not only with the required attribute.</p><p class=\"mb-4\">Submit empty in preview. The error must name the field that failed.</p><p class=\"mb-4\">Paste the form markup into AI and ask for inputs without labels. Refuse swapping the form for a third-party widget.</p><p class=\"mb-4\">Clincoo does not invent labels. An audited form makes app.clincoo.buzz usable without guessing.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "audit-alt-dan-berat-gambar",
      langs: {
        "id": {
          title: "Audit Teks Alt dan Berat Gambar di Halaman Clincoo",
          desc: "Alt kosong dan PNG 4 MB lolos desain. Cek atribut dan ukuran file sebelum rilis.",
          content: "<p class=\"mb-4\">Hero Clincoo memakai foto studio 4000px dalam PNG. LCP lambat dan alt-nya hanya image1.</p><p class=\"mb-4\">Di editor.clincoo.buzz, daftar semua img. Isi alt yang menjelaskan fungsi gambar. Gambar dekoratif boleh alt kosong yang disengaja, bukan nama file.</p><p class=\"mb-4\">Ganti PNG foto menjadi WebP atau JPEG. Tetapkan width dan height agar layout tidak loncat.</p><p class=\"mb-4\">Kirim nama file plus ukuran ke AI dan minta usulan format. Tolak kompresi yang merusak logo SVG.</p><p class=\"mb-4\">Clincoo mengunggah file apa adanya. Audit alt dan berat gambar menjaga app.clincoo.buzz cepat dan bisa dibaca.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Audit Image Alt Text and File Weight on a Clincoo Page",
          desc: "Empty alt and a 4 MB PNG slip past design review. Check attributes and file size before release.",
          content: "<p class=\"mb-4\">A Clincoo hero uses a 4000px studio photo as PNG. LCP is slow and the alt is just image1.</p><p class=\"mb-4\">In editor.clincoo.buzz, list every img. Write alt that explains the image job. Decorative images may have an intentional empty alt, not a filename.</p><p class=\"mb-4\">Swap photo PNGs for WebP or JPEG. Set width and height so the layout does not jump.</p><p class=\"mb-4\">Send filenames plus sizes to AI and ask for a format suggestion. Refuse compression that wrecks an SVG logo.</p><p class=\"mb-4\">Clincoo uploads files as they are. Auditing alt and weight keeps app.clincoo.buzz fast and readable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
