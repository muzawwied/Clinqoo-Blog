// Clincoo Blog — Data kategori: tabel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["tabel"] = {
  names: { "id": "Tabel", "en": "Tables" },
  flag: "\u25a6",
  articles: [
    {
      id: "tabel-caption-dan-th-scope",
      langs: {
        "id": {
          title: "Beri caption dan scope pada th Tabel Clincoo, Jangan Hanya Baris Tebal",
          desc: "Tabel tanpa caption dan scope membingungkan pembaca layar saat kolom banyak.",
          content: "<p class=\"mb-4\">Daftar harga di template Clincoo sering memakai tabel polos. Pengunjung yang memakai pembaca layar mendengar sel tanpa nama kolom.</p><p class=\"mb-4\">Di editor.clincoo.buzz, tambah caption singkat di atas tabel. Pada th tulis scope=\"col\" atau scope=\"row\" sesuai arah heading.</p><p class=\"mb-4\">Jangan mengganti tabel data jadi div grid jika isinya perbandingan. Grid visual tidak membawa semantik sel.</p><p class=\"mb-4\">Minta AI hanya menambah caption dan scope. Tempel HTML tabel, tolak rewrite seluruh halaman.</p><p class=\"mb-4\">Clincoo merender markup apa adanya. Tabel bernama membuat app.clincoo.buzz lebih mudah dipahami.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add a caption and th scope on Clincoo Tables, Not Only Bold Rows",
          desc: "A table without caption and scope confuses screen readers when many columns exist.",
          content: "<p class=\"mb-4\">Price lists in Clincoo templates often use a bare table. Screen reader visitors hear cells without column names.</p><p class=\"mb-4\">In editor.clincoo.buzz, add a short caption above the table. On th, write scope=\"col\" or scope=\"row\" to match heading direction.</p><p class=\"mb-4\">Do not replace a data table with a div grid if the content is a comparison. Visual grids carry no cell semantics.</p><p class=\"mb-4\">Ask AI to add caption and scope only. Paste the table HTML and reject a full page rewrite.</p><p class=\"mb-4\">Clincoo renders markup as saved. A named table makes app.clincoo.buzz easier to understand.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "tabel-overflow-x-bukan-perkecil-teks",
      langs: {
        "id": {
          title: "Bungkus Tabel Clincoo dengan overflow-x, Jangan Perkecil Font Sel",
          desc: "Memampatkan teks kolom di ponsel merusak angka dan membuat baris tidak terbaca.",
          content: "<p class=\"mb-4\">Tabel jadwal di Clincoo sering dipaksa muat lebar 320px dengan font 10px. Angka harga dan tanggal saling menempel.</p><p class=\"mb-4\">Di editor.clincoo.buzz, bungkus table dalam div dengan overflow-x: auto. Biarkan kolom menjaga min-width yang wajar.</p><p class=\"mb-4\">Jangan menyembunyikan kolom penting hanya di CSS tanpa alternatif. Sediakan kartu ringkas terpisah jika data wajib tampil.</p><p class=\"mb-4\">Minta AI menambah pembungkus overflow, bukan mengubah font-size sel. Tempel HTML tabel utuh.</p><p class=\"mb-4\">Clincoo tidak memotong tabel sendiri. Gulir horizontal menjaga app.clincoo.buzz tetap akurat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Wrap Clincoo Tables with overflow-x, Do Not Shrink Cell Fonts",
          desc: "Cramming column text on phones ruins numbers and makes rows unreadable.",
          content: "<p class=\"mb-4\">Schedule tables in Clincoo are often forced into 320px with 10px type. Prices and dates stick together.</p><p class=\"mb-4\">In editor.clincoo.buzz, wrap the table in a div with overflow-x: auto. Let columns keep a sensible min-width.</p><p class=\"mb-4\">Do not hide important columns in CSS with no alternative. Offer a separate compact card if the data must stay visible.</p><p class=\"mb-4\">Ask AI to add an overflow wrapper, not to change cell font-size. Paste the full table HTML.</p><p class=\"mb-4\">Clincoo does not clip tables on its own. Horizontal scroll keeps app.clincoo.buzz accurate.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "tabel-thead-sticky-saat-scroll",
      langs: {
        "id": {
          title: "Buat thead Tabel Clincoo Sticky saat Gulir, Jangan Ulangi Judul Kolom",
          desc: "Tanpa heading yang menempel, baris ke-20 kehilangan konteks nama kolom.",
          content: "<p class=\"mb-4\">Tabel inventaris panjang di Clincoo memaksa pengunjung mengingat urutan kolom. Setelah gulir, angka tanpa label mudah tertukar.</p><p class=\"mb-4\">Di editor.clincoo.buzz, set thead th ke position: sticky; top: 0 dengan latar solid. Pastikan z-index kecil agar tidak menimpa header situs.</p><p class=\"mb-4\">Jangan memakai position sticky pada table jika overflow induk memutus konteks. Sticky bekerja pada sel th di dalam wadah yang digulir.</p><p class=\"mb-4\">Minta AI hanya menambah aturan sticky pada thead. Tempel CSS tabel, tolak ganti markup kolom.</p><p class=\"mb-4\">Clincoo tidak menambahkan sticky otomatis. Heading yang menempel menjaga app.clincoo.buzz tetap jelas.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Make Clincoo Table thead Sticky on Scroll, Do Not Repeat Column Titles",
          desc: "Without a sticky heading, row 20 loses the column name context.",
          content: "<p class=\"mb-4\">Long inventory tables in Clincoo force visitors to memorize column order. After scrolling, unlabeled numbers are easy to mix up.</p><p class=\"mb-4\">In editor.clincoo.buzz, set thead th to position: sticky; top: 0 with a solid background. Keep z-index small so it does not cover the site header.</p><p class=\"mb-4\">Do not put position sticky on the table if a parent overflow breaks the context. Sticky works on th cells inside the scrolled wrapper.</p><p class=\"mb-4\">Ask AI to add sticky rules on thead only. Paste the table CSS and reject a column markup rewrite.</p><p class=\"mb-4\">Clincoo does not add sticky on its own. A pinned heading keeps app.clincoo.buzz clear.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "tabel-zebra-bukan-warna-acak",
      langs: {
        "id": {
          title: "Pakai Belang Zebra Lembut pada Baris Tabel Clincoo, Bukan Warna Acak",
          desc: "Warna sel acak dari mockup merusak kontras dan membuat fokus keyboard sulit dilihat.",
          content: "<p class=\"mb-4\">Beberapa template Clincoo mewarnai setiap sel berbeda agar hidup. Baris menjadi sulit dilacak saat mata bergerak horizontal.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pakai nth-child(even) dengan latar sangat lembut. Jaga kontras teks tetap lulus uji sederhana.</p><p class=\"mb-4\">Jangan mewarnai sel berdasarkan status hanya dengan warna tanpa teks. Tambah label atau ikon bermakna.</p><p class=\"mb-4\">Minta AI merapikan warna baris jadi zebra satu nada. Tempel CSS tabel, tolak palet baru.</p><p class=\"mb-4\">Clincoo tidak menormalkan warna sel. Belang lembut membuat app.clincoo.buzz lebih mudah dipindai.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Soft Zebra Striping on Clincoo Table Rows, Not Random Cell Colors",
          desc: "Random cell colors from a mockup hurt contrast and hide keyboard focus.",
          content: "<p class=\"mb-4\">Some Clincoo templates color every cell differently to look lively. Rows become hard to track as the eye moves horizontally.</p><p class=\"mb-4\">In editor.clincoo.buzz, use nth-child(even) with a very soft background. Keep text contrast passing a simple check.</p><p class=\"mb-4\">Do not encode status with color alone. Add a label or a meaningful icon.</p><p class=\"mb-4\">Ask AI to tidy row colors into one-tone zebra. Paste the table CSS and reject a new palette.</p><p class=\"mb-4\">Clincoo does not normalize cell colors. Soft stripes make app.clincoo.buzz easier to scan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
