// Clincoo Blog — Data kategori: grid
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["grid"] = {
  names: { "id": "Grid", "en": "Grid" },
  flag: "\ud83d\uddd0",
  articles: [
    {
      id: "grid-repeat-auto-fit-kartu",
      langs: {
        "id": {
          title: "Pakai repeat(auto-fit) agar Kartu Grid Clincoo Mengisi Lebar",
          desc: "Kolom grid dengan angka tetap menyisakan ruang kosong atau memaksa scroll horizontal.",
          content: "<p class=\"mb-4\">Galeri kartu Clincoo sering memakai grid-template-columns:repeat(3,1fr). Di HP tiga kolom terlalu sempit; di layar lebar ada ruang mati jika hanya dua kartu.</p><p class=\"mb-4\">Ganti dengan repeat(auto-fit,minmax(240px,1fr)) di editor.clincoo.buzz. Kartu merapat dan pindah baris utuh.</p><p class=\"mb-4\">auto-fill menyisakan kolom kosong; auto-fit meruntuhkan trek kosong. Pilih auto-fit untuk kartu produk.</p><p class=\"mb-4\">Minta AI hanya mengubah satu aturan grid. Tempel lebar pratinjau yang pecah.</p><p class=\"mb-4\">Clincoo tidak menambah breakpoint ajaib. auto-fit menjaga galeri rapi di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use repeat(auto-fit) so Clincoo Grid Cards Fill the Width",
          desc: "Fixed-count grid columns leave empty space or force horizontal scroll.",
          content: "<p class=\"mb-4\">Clincoo card galleries often use grid-template-columns:repeat(3,1fr). On a phone three columns are too narrow; on a wide screen two cards leave dead space.</p><p class=\"mb-4\">Switch to repeat(auto-fit,minmax(240px,1fr)) in editor.clincoo.buzz. Cards pack and wrap whole.</p><p class=\"mb-4\">auto-fill leaves empty tracks; auto-fit collapses empty tracks. Choose auto-fit for product cards.</p><p class=\"mb-4\">Ask AI to change one grid rule only. Paste the preview width that breaks.</p><p class=\"mb-4\">Clincoo does not invent breakpoints. auto-fit keeps the gallery tidy on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "grid-gap-bukan-margin-sel",
      langs: {
        "id": {
          title: "Pakai gap Grid, Bukan Margin pada Setiap Sel Clincoo",
          desc: "Margin pada anak grid dobel di tepi dan merusak perhitungan trek.",
          content: "<p class=\"mb-4\">Sel harga atau form Clincoo sering punya margin:16px. Trek grid lalu tidak rata karena margin dihitung di luar sel.</p><p class=\"mb-4\">Hapus margin antar sel. Set gap pada wadah grid di editor.clincoo.buzz. Padding tetap pada induk jika butuh jarak ke tepi.</p><p class=\"mb-4\">gap bekerja pada kolom dan baris sekaligus. Jangan campur gap dan margin-bottom pada setiap kartu.</p><p class=\"mb-4\">Minta AI menyentuh satu wadah grid. Tolak rewrite seluruh halaman.</p><p class=\"mb-4\">Clincoo merender CSS Grid modern. gap membuat jarak di pratinjau sama dengan app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Grid gap, Not Margin on Every Clincoo Cell",
          desc: "Margins on grid children double at the edges and break track math.",
          content: "<p class=\"mb-4\">Clincoo pricing cells or form fields often have margin:16px. Grid tracks then misalign because margin sits outside the cell.</p><p class=\"mb-4\">Remove inter-cell margins. Set gap on the grid container in editor.clincoo.buzz. Keep padding on the parent if you need edge space.</p><p class=\"mb-4\">gap works on columns and rows together. Do not mix gap and margin-bottom on every card.</p><p class=\"mb-4\">Ask AI to touch one grid container. Reject a full-page rewrite.</p><p class=\"mb-4\">Clincoo renders modern CSS Grid. gap keeps preview spacing equal to app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "grid-minmax-cegah-kolom-gepencet",
      langs: {
        "id": {
          title: "Pakai minmax agar Kolom Grid Clincoo Tidak Gepencet",
          desc: "1fr murni bisa menyusut di bawah konten. minmax menjaga lebar minimum.",
          content: "<p class=\"mb-4\">Sidebar plus konten Clincoo dengan grid-template-columns:1fr 3fr membuat sidebar gepencet saat judul panjang.</p><p class=\"mb-4\">Pakai minmax(220px,1fr) minmax(0,3fr) di editor.clincoo.buzz. Trek pertama tidak boleh lebih kecil dari 220px.</p><p class=\"mb-4\">Tambah min-width:0 pada area yang boleh wrap teks. Grid item default menolak menyusut di bawah min-content.</p><p class=\"mb-4\">Minta AI hanya mengubah template-columns satu layout. Tempel HTML dua kolom.</p><p class=\"mb-4\">Clincoo tidak memperbaiki grid overflow sendiri. minmax menjaga sidebar tetap terbaca di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use minmax so Clincoo Grid Columns Do Not Get Squashed",
          desc: "Pure 1fr can shrink below the content. minmax keeps a minimum width.",
          content: "<p class=\"mb-4\">A Clincoo sidebar plus content with grid-template-columns:1fr 3fr squashes the sidebar when a title is long.</p><p class=\"mb-4\">Use minmax(220px,1fr) minmax(0,3fr) in editor.clincoo.buzz. The first track must not go below 220px.</p><p class=\"mb-4\">Add min-width:0 on the area that may wrap text. Grid items default to not shrinking below min-content.</p><p class=\"mb-4\">Ask AI to change only one layout template-columns. Paste the two-column HTML.</p><p class=\"mb-4\">Clincoo does not fix grid overflow for you. minmax keeps the sidebar readable on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "grid-area-nama-bukan-angka",
      langs: {
        "id": {
          title: "Pakai grid-area Bernama, Bukan Nomor Baris yang Rapuh",
          desc: "Nomor baris pecah saat kamu menambah header atau iklan di tengah grid.",
          content: "<p class=\"mb-4\">Template Clincoo sering menaruh hero di grid-row:1 / 2 dan sidebar di 1 / 3. Satu baris baru menggeser semua angka.</p><p class=\"mb-4\">Deklarasikan grid-template-areas dan grid-area bernama di editor.clincoo.buzz, misalnya hero, main, side.</p><p class=\"mb-4\">Saat mobile, tukar template-areas menjadi satu kolom tanpa mengubah nomor. Urutan DOM tetap jujur untuk Tab dan SEO.</p><p class=\"mb-4\">Minta AI menamai area pada satu layout. Tolak order atau position:absolute sebagai ganti.</p><p class=\"mb-4\">Clincoo merender area yang kamu tulis. Nama yang jelas memudahkan perbaikan berikutnya di blog.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Named grid-area, Not Fragile Line Numbers",
          desc: "Line numbers break when you insert a header or ad in the middle of the grid.",
          content: "<p class=\"mb-4\">Clincoo templates often put the hero at grid-row:1 / 2 and the sidebar at 1 / 3. One new row shifts every number.</p><p class=\"mb-4\">Declare grid-template-areas and named grid-area in editor.clincoo.buzz, such as hero, main, side.</p><p class=\"mb-4\">On mobile, swap template-areas to one column without changing numbers. DOM order stays honest for Tab and SEO.</p><p class=\"mb-4\">Ask AI to name areas on one layout. Reject order or position:absolute as a substitute.</p><p class=\"mb-4\">Clincoo renders the areas you write. Clear names make the next fix easier on blog.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
