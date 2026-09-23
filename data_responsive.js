// Clincoo Blog — Data kategori: responsive
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["responsive"] = {
  names: { "id": "Responsif", "en": "Responsive" },
  flag: "📱",
  articles: [
    {
      id: "responsive-mobile-first-breakpoint",
      langs: {
        "id": {
          title: "Tulis CSS Clincoo Mobile-First lalu Naikkan Breakpoint",
          desc: "Mulai dari lebar ponsel, baru tambah min-width. Hindari max-width bertumpuk yang sulit dilacak.",
          content: "<p class=\"mb-4\">Banyak template Clincoo masih menulis desktop dulu, lalu menumpuk max-width untuk merapikan ponsel. Urutan itu membuat override sulit dibaca.</p><p class=\"mb-4\">Tulis gaya dasar untuk layar sempit: satu kolom, tombol full-width, gambar max-width 100%. Baru di min-width 768px atau 1024px naikkan grid.</p><p class=\"mb-4\">Jangan mencampur min-width dan max-width untuk kasus yang sama. Pilih satu arah agar AI dan kamu tidak saling menimpa.</p><p class=\"mb-4\">Uji 375px, 768px, dan 1280px di pratinjau editor.clincoo.buzz. Minta AI hanya menambah satu media query, bukan menulis ulang seluruh stylesheet.</p><p class=\"mb-4\">Clincoo merender CSS apa adanya. Mobile-first membuat layout tetap masuk akal saat pengunjung membuka situs dari HP.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Write Clincoo CSS Mobile-First then Raise Breakpoints",
          desc: "Start at phone width, then add min-width. Avoid stacked max-width rules that are hard to trace.",
          content: "<p class=\"mb-4\">Many Clincoo templates still style desktop first, then stack max-width rules to tidy phones. That order makes overrides hard to read.</p><p class=\"mb-4\">Write the base styles for a narrow screen: one column, full-width buttons, images at max-width 100%. Then at min-width 768px or 1024px raise the grid.</p><p class=\"mb-4\">Do not mix min-width and max-width for the same case. Pick one direction so you and the AI do not overwrite each other.</p><p class=\"mb-4\">Test 375px, 768px, and 1280px in editor.clincoo.buzz preview. Ask AI to add one media query, not to rewrite the whole stylesheet.</p><p class=\"mb-4\">Clincoo renders CSS as saved. Mobile-first keeps the layout usable when visitors open the site on a phone.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "responsive-gambar-max-width",
      langs: {
        "id": {
          title: "Paksa Gambar Clincoo Agar Tidak Meluber di Layar Sempit",
          desc: "Screenshot lebar memecah kartu di HP. Set max-width 100% dan height auto pada img.",
          content: "<p class=\"mb-4\">Gambar hero atau screenshot dari editor Clincoo sering punya lebar tetap 1200px. Di viewport 360px kartu jadi bergulir ke samping.</p><p class=\"mb-4\">Tambah aturan img, svg, video { max-width: 100%; height: auto; } di CSS dasar. Untuk gambar di samping teks, bungkus dengan figure yang juga max-width 100%.</p><p class=\"mb-4\">Jangan mengandalkan atribut width HTML saja. Browser tetap bisa memaksa piksel asli jika CSS tidak membatasi.</p><p class=\"mb-4\">Simpan di editor.clincoo.buzz lalu kecilkan jendela pratinjau. Minta AI hanya menyentuh selector gambar, bukan mengompres file.</p><p class=\"mb-4\">Clincoo tidak meresize aset otomatis. CSS yang jujur menjaga halaman tetap muat di saku.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Force Clincoo Images Not to Overflow on Narrow Screens",
          desc: "Wide screenshots break cards on phones. Set max-width 100% and height auto on img.",
          content: "<p class=\"mb-4\">Hero images or screenshots from the Clincoo editor often have a fixed 1200px width. On a 360px viewport the card scrolls sideways.</p><p class=\"mb-4\">Add img, svg, video { max-width: 100%; height: auto; } in the base CSS. For images beside text, wrap them in a figure that is also max-width 100%.</p><p class=\"mb-4\">Do not rely on the HTML width attribute alone. The browser can still force native pixels if CSS does not cap them.</p><p class=\"mb-4\">Save in editor.clincoo.buzz and shrink the preview pane. Ask AI to touch image selectors only, not to recompress files.</p><p class=\"mb-4\">Clincoo does not resize assets for you. Honest CSS keeps the page inside a pocket-sized screen.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "responsive-nav-hamburger-sederhana",
      langs: {
        "id": {
          title: "Sembunyikan Menu Lebar Clincoo di Ponsel dengan Toggle Sederhana",
          desc: "Navbar tujuh tautan tidak muat di 375px. Sembunyikan daftar, tampilkan tombol buka.",
          content: "<p class=\"mb-4\">Menu Clincoo dengan banyak halaman layanan merapat dan pecah di HP. Pengunjung tidak bisa mengetuk tautan yang terpotong.</p><p class=\"mb-4\">Di layar sempit, sembunyikan ul navigasi dan tampilkan tombol Menu. Saat diklik, tambah kelas is-open pada nav. Di min-width 768px tampilkan ul lagi dan sembunyikan tombol.</p><p class=\"mb-4\">Jangan memakai hover untuk membuka menu di sentuh. Pakai klik atau checkbox CSS yang jelas.</p><p class=\"mb-4\">Uji dengan jari di pratinjau editor.clincoo.buzz atau di HP nyata. Minta AI menambah toggle kecil, bukan memasang library hamburger.</p><p class=\"mb-4\">Clincoo tidak menyediakan menu responsif otomatis. Satu kelas dan satu media query sudah cukup untuk situs kecil.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Hide a Wide Clincoo Menu on Phones with a Simple Toggle",
          desc: "A seven-link navbar does not fit 375px. Hide the list and show an open button.",
          content: "<p class=\"mb-4\">A Clincoo menu with many service pages crushes and wraps on a phone. Visitors cannot tap clipped links.</p><p class=\"mb-4\">On a narrow screen, hide the nav ul and show a Menu button. On click, add an is-open class to nav. At min-width 768px show the ul again and hide the button.</p><p class=\"mb-4\">Do not use hover to open a menu on touch. Use a click or a clear CSS checkbox.</p><p class=\"mb-4\">Test with a finger in editor.clincoo.buzz preview or on a real phone. Ask AI to add a small toggle, not to install a hamburger library.</p><p class=\"mb-4\">Clincoo does not ship a responsive menu for you. One class and one media query are enough for a small site.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "responsive-grid-jadi-satu-kolom",
      langs: {
        "id": {
          title: "Ubah Grid Kartu Clincoo Jadi Satu Kolom di Mobile",
          desc: "Tiga kolom harga tidak terbaca di HP. Turunkan ke satu kolom lalu naik lagi di tablet.",
          content: "<p class=\"mb-4\">Bagian paket Clincoo sering memakai grid 3 kolom. Di layar sempit kartu jadi setipis sisa padding dan teks terpotong.</p><p class=\"mb-4\">Set display grid; grid-template-columns: 1fr; di gaya dasar. Pada min-width 700px naik ke 2fr 2fr, lalu 3 kolom di desktop.</p><p class=\"mb-4\">Jangan memaksa lebar kartu 320px di dalam grid. Biarkan 1fr yang mengatur, plus gap 16px.</p><p class=\"mb-4\">Pratinjau tiga lebar di editor.clincoo.buzz. Minta AI hanya mengubah template-columns, bukan merombak markup kartu.</p><p class=\"mb-4\">Clincoo menampilkan grid yang kamu tulis. Satu kolom di HP membuat harga dan CTA tetap bisa diketuk.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Collapse Clincoo Card Grids to One Column on Mobile",
          desc: "Three pricing columns are unreadable on a phone. Drop to one column, then rise again on tablet.",
          content: "<p class=\"mb-4\">Clincoo pricing blocks often use a 3-column grid. On a narrow screen cards become as thin as leftover padding and text clips.</p><p class=\"mb-4\">Set display grid; grid-template-columns: 1fr; in the base styles. At min-width 700px rise to two columns, then three on desktop.</p><p class=\"mb-4\">Do not force a 320px card width inside the grid. Let 1fr plus a 16px gap do the work.</p><p class=\"mb-4\">Preview three widths in editor.clincoo.buzz. Ask AI to change template-columns only, not to rebuild card markup.</p><p class=\"mb-4\">Clincoo renders the grid you write. One column on phones keeps prices and CTAs tappable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "responsive-uji-lebar-devtools",
      langs: {
        "id": {
          title: "Uji Lebar Responsif Clincoo di DevTools sebelum Deploy",
          desc: "Jangan andalkan jendela editor saja. Cek 320, 375, 768, dan 1280 plus rotasi.",
          content: "<p class=\"mb-4\">Pratinjau di editor.clincoo.buzz membantu, tetapi skala panel bisa menipu. Overflow 12px baru kelihatan di perangkat nyata atau DevTools.</p><p class=\"mb-4\">Buka situs deploy di Chrome DevTools, aktifkan device toolbar, dan uji 320, 375, 390, 768, 1024, 1280. Putar ke landscape. Cari scrollbar horizontal.</p><p class=\"mb-4\">Jangan hanya melihat homepage. Buka form, artikel panjang, dan tabel harga. Itulah tempat grid biasanya pecah.</p><p class=\"mb-4\">Catat satu masalah per catatan, lalu minta AI di editor.clincoo.buzz memperbaiki selector itu saja.</p><p class=\"mb-4\">Clincoo tidak mengunci layout per perangkat. Daftar lebar uji yang singkat mencegah kejutan setelah tayang di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test Clincoo Responsive Widths in DevTools before Deploy",
          desc: "Do not trust the editor pane alone. Check 320, 375, 768, and 1280 plus rotation.",
          content: "<p class=\"mb-4\">Preview in editor.clincoo.buzz helps, but the pane scale can lie. A 12px overflow only shows on a real device or in DevTools.</p><p class=\"mb-4\">Open the deployed site in Chrome DevTools, turn on the device toolbar, and test 320, 375, 390, 768, 1024, 1280. Rotate to landscape. Watch for a horizontal scrollbar.</p><p class=\"mb-4\">Do not check the homepage only. Open the form, a long article, and the pricing table. That is where grids usually break.</p><p class=\"mb-4\">Write one issue per note, then ask AI in editor.clincoo.buzz to fix that selector only.</p><p class=\"mb-4\">Clincoo does not lock layout per device. A short width checklist prevents surprises after the site goes live on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
