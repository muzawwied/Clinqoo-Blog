// Clincoo Blog — Data kategori: preview
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["preview"] = {
  names: { "id": "Pratinjau", "en": "Preview" },
  flag: "\ud83d\udc41\ufe0f",
  articles: [
    {
      id: "preview-cek-lebar-sempit",
      langs: {
        "id": {
          title: "Uji Pratinjau Clincoo pada Lebar Sempit sebelum Rilis",
          desc: "Layout desktop terlihat rapi, lalu tombol bertumpuk di HP. Cek lebar sempit setiap edit.",
          content: "<p class=\"mb-4\">Banyak halaman Clincoo terlihat rapi di editor lebar, lalu tombol Kirim dan menu bertumpuk di layar 360px. Bug ini muncul karena pratinjau jarang diperkecil.</p><p class=\"mb-4\">Setelah setiap perubahan CSS atau grid, perkecil pratinjau editor.clincoo.buzz sampai sempit. Cek wrap teks, overflow horizontal, dan target sentuh.</p><p class=\"mb-4\">Jangan andalkan satu breakpoint. Uji juga 400px dan 768px. Form dengan dua kolom sering pecah di tengah.</p><p class=\"mb-4\">Minta AI hanya memperbaiki wadah yang pecah, bukan menulis ulang seluruh layout. Tempel cuplikan yang overflow sebagai konteks.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. Kebiasaan cek lebar sempit menghemat revisi setelah deploy ke app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test the Clincoo Preview at a Narrow Width before Release",
          desc: "Desktop looks tidy, then buttons stack on a phone. Check a narrow width after every edit.",
          content: "<p class=\"mb-4\">Many Clincoo pages look tidy in a wide editor, then the Submit button and menu stack on a 360px screen. The bug appears because preview is rarely resized.</p><p class=\"mb-4\">After every CSS or grid change, shrink the editor.clincoo.buzz preview until it is narrow. Check text wrap, horizontal overflow, and touch targets.</p><p class=\"mb-4\">Do not rely on one breakpoint. Also test 400px and 768px. Two-column forms often break in the middle.</p><p class=\"mb-4\">Ask AI only to fix the broken container, not to rewrite the whole layout. Paste the overflowing snippet as context.</p><p class=\"mb-4\">Clincoo ships the CSS you save. A habit of checking narrow width saves revisions after deploy to app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "preview-bandingkan-sebelum-sesudah",
      langs: {
        "id": {
          title: "Bandingkan Pratinjau sebelum dan sesudah Edit di Clincoo",
          desc: "Edit AI bisa menggeser spacing diam-diam. Simpan cuplikan sebelum dan bandingkan.",
          content: "<p class=\"mb-4\">Saran AI di editor Clincoo kadang mengubah margin yang tidak kamu minta. Tanpa bandingkan sebelum dan sesudah, regresi lolos ke rilis.</p><p class=\"mb-4\">Sebelum minta ubah, salin cuplikan terkait atau screenshot pratinjau. Sesudah edit, lihat diff visual: jarak heading, lebar tombol, dan urutan blok.</p><p class=\"mb-4\">Jika perubahan di luar permintaan, kembalikan file lalu minta ulang dengan batas yang lebih ketat. Satu file, satu tujuan.</p><p class=\"mb-4\">Gunakan pratinjau editor.clincoo.buzz, bukan hanya membaca kode. Mata menangkap geseran 8px yang mudah terlewat di diff teks.</p><p class=\"mb-4\">Clincoo tidak punya riwayat visual bawaan di setiap langkah. Perbandingan singkat adalah jaring pengaman sebelum deploy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Compare the Clincoo Preview before and after an Edit",
          desc: "AI edits can shift spacing quietly. Save a snippet first and compare.",
          content: "<p class=\"mb-4\">AI suggestions in the Clincoo editor sometimes change margins you did not ask for. Without a before-and-after check, the regression ships.</p><p class=\"mb-4\">Before you ask for a change, copy the related snippet or screenshot the preview. After the edit, look at the visual diff: heading gaps, button width, and block order.</p><p class=\"mb-4\">If the change goes beyond the request, restore the file and ask again with a tighter bound. One file, one goal.</p><p class=\"mb-4\">Use the editor.clincoo.buzz preview, not only the code. Eyes catch an 8px shift that a text diff easily misses.</p><p class=\"mb-4\">Clincoo does not keep a visual history at every step. A short comparison is the safety net before deploy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "preview-uji-tautan-dan-form",
      langs: {
        "id": {
          title: "Uji Tautan dan Form di Pratinjau Clincoo sebelum Publik",
          desc: "Tautan rusak dan action form kosong lolos jika pratinjau hanya dilihat, tidak diklik.",
          content: "<p class=\"mb-4\">Halaman Clincoo sering dirilis dengan href # dan action form yang masih contoh. Pratinjau terlihat bagus karena tidak ada yang mengklik.</p><p class=\"mb-4\">Sebelum deploy, klik setiap tautan navigasi, CTA, dan tautan footer di editor.clincoo.buzz. Isi form dummy dan pastikan action mengarah ke endpoint yang kamu miliki.</p><p class=\"mb-4\">Periksa target _blank punya rel noopener. Periksa mailto dan wa.me memakai alamat yang benar, bukan placeholder.</p><p class=\"mb-4\">Minta AI mendaftar tautan pada satu file, lalu kamu yang mengetuk satu per satu. Jangan minta rewrite seluruh halaman hanya karena satu href kosong.</p><p class=\"mb-4\">Clincoo memublikasikan markup apa adanya. Klik di pratinjau lebih murah daripada memperbaiki 404 setelah pengunjung datang dari blog.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test Links and Forms in the Clincoo Preview before Going Public",
          desc: "Broken links and empty form actions ship if preview is only looked at, not clicked.",
          content: "<p class=\"mb-4\">Clincoo pages often ship with href # and sample form actions. Preview looks fine because nobody clicks.</p><p class=\"mb-4\">Before deploy, click every nav link, CTA, and footer link in editor.clincoo.buzz. Fill a dummy form and confirm the action points at an endpoint you own.</p><p class=\"mb-4\">Check that target _blank has rel noopener. Check that mailto and wa.me use real addresses, not placeholders.</p><p class=\"mb-4\">Ask AI to list links in one file, then tap them yourself. Do not ask for a full page rewrite because one href is empty.</p><p class=\"mb-4\">Clincoo publishes the markup as saved. Clicks in preview cost less than fixing 404s after visitors arrive from blog.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "preview-cek-font-dan-gambar-terload",
      langs: {
        "id": {
          title: "Cek Font dan Gambar Benar-benar Termuat di Pratinjau Clincoo",
          desc: "Pratinjau bisa menipu jika font fallback dan gambar rusak tidak terlihat segera.",
          content: "<p class=\"mb-4\">Halaman Clincoo sering terlihat \u201champir benar\u201d karena browser memakai font sistem sementara gambar 404 tampil sebagai ikon rusak kecil.</p><p class=\"mb-4\">Di pratinjau editor.clincoo.buzz, buka tab Jaringan. Pastikan file font dan gambar berstatus 200, bukan 404 atau diblokir mixed content.</p><p class=\"mb-4\">Periksa alt pada gambar rusak dan fallback font-family. Jika heading bergeser setelah font kustom termuat, atur ukuran cadangan yang dekat.</p><p class=\"mb-4\">Minta AI hanya memperbaiki path aset yang gagal, bukan menulis ulang seluruh CSS. Tempel URL yang 404 sebagai konteks.</p><p class=\"mb-4\">Clincoo menayangkan aset yang kamu tautkan. Cek muat font dan gambar di pratinjau sebelum rilis ke app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Confirm Fonts and Images Actually Load in the Clincoo Preview",
          desc: "Preview can lie if fallback fonts and broken images are not spotted quickly.",
          content: "<p class=\"mb-4\">Clincoo pages often look \u201calmost right\u201d because the browser uses a system font while a 404 image shows as a tiny broken icon.</p><p class=\"mb-4\">In the editor.clincoo.buzz preview, open the Network tab. Confirm font and image files return 200, not 404 or mixed-content blocks.</p><p class=\"mb-4\">Check alt text on broken images and the font-family fallback. If headings shift after a custom font loads, set a close fallback size.</p><p class=\"mb-4\">Ask AI only to fix the failing asset paths, not to rewrite all CSS. Paste the 404 URL as context.</p><p class=\"mb-4\">Clincoo ships the assets you link. Check font and image loading in preview before you release to app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "preview-scrollbar-overflow-tersembunyi",
      langs: {
        "id": {
          title: "Cari Overflow Tersembunyi dan Scrollbar Tak Diinginkan di Pratinjau",
          desc: "Konten yang melebihi wadah sering hanya terlihat setelah kamu menggeser pratinjau.",
          content: "<p class=\"mb-4\">Banyak bug layout Clincoo bukan tombol pecah, melainkan scrollbar horizontal 8px yang muncul di HP.</p><p class=\"mb-4\">Di editor.clincoo.buzz, geser pratinjau ke kiri-kanan. Jika ada geseran, cari elemen dengan width tetap, padding besar, atau 100vw plus padding.</p><p class=\"mb-4\">Periksa juga overflow:hidden yang memotong fokus atau dropdown. Sembunyikan scrollbar bukan berarti konten muat.</p><p class=\"mb-4\">Minta AI menandai aturan width dan overflow pada satu file. Jangan minta rewrite grid seluruh halaman.</p><p class=\"mb-4\">Clincoo merender CSS apa adanya. Membersihkan overflow di pratinjau menghemat keluhan pengunjung dari blog.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Hunt Hidden Overflow and Unwanted Scrollbars in Preview",
          desc: "Content that overflows a box often shows only after you drag the preview.",
          content: "<p class=\"mb-4\">Many Clincoo layout bugs are not broken buttons, but an 8px horizontal scrollbar on a phone.</p><p class=\"mb-4\">In editor.clincoo.buzz, nudge the preview left and right. If it shifts, hunt fixed widths, large padding, or 100vw plus padding.</p><p class=\"mb-4\">Also check overflow:hidden that clips focus or dropdowns. Hiding the scrollbar does not mean the content fits.</p><p class=\"mb-4\">Ask AI to mark width and overflow rules in one file. Do not ask for a full-page grid rewrite.</p><p class=\"mb-4\">Clincoo renders the CSS as saved. Cleaning overflow in preview saves visitor complaints from blog.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "preview-urutan-tab-keyboard",
      langs: {
        "id": {
          title: "Uji Urutan Tab Keyboard di Pratinjau Clincoo",
          desc: "Fokus yang loncat acak lolos jika pratinjau hanya dicek dengan mouse.",
          content: "<p class=\"mb-4\">Pengunjung Clincoo yang memakai keyboard menemukan tautan tersembunyi, urutan tab terbalik, dan trap di modal.</p><p class=\"mb-4\">Di pratinjau editor.clincoo.buzz, tekan Tab dari logo sampai footer. Catat elemen yang dilewati atau yang mendapat fokus dua kali.</p><p class=\"mb-4\">Periksa tabindex positif yang mengacak urutan. Hapus tabindex kecuali kamu benar-benar mengatur dialog.</p><p class=\"mb-4\">Minta AI mendaftar elemen yang bisa difokus pada satu file. Kamu yang menekan Tab, bukan AI.</p><p class=\"mb-4\">Clincoo tidak memperbaiki urutan fokus otomatis. Uji keyboard di pratinjau sebelum deploy ke app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test Keyboard Tab Order in the Clincoo Preview",
          desc: "Focus that jumps around ships if preview is only checked with a mouse.",
          content: "<p class=\"mb-4\">Clincoo visitors who use a keyboard find hidden links, reversed tab order, and traps inside modals.</p><p class=\"mb-4\">In the editor.clincoo.buzz preview, press Tab from the logo to the footer. Note elements skipped or focused twice.</p><p class=\"mb-4\">Watch for positive tabindex values that scramble order. Remove tabindex unless you truly manage a dialog.</p><p class=\"mb-4\">Ask AI to list focusable elements in one file. You press Tab, not the AI.</p><p class=\"mb-4\">Clincoo does not fix focus order for you. Test the keyboard in preview before deploy to app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "preview-zoom-teks-125",
      langs: {
        "id": {
          title: "Uji Pratinjau Clincoo saat Teks Diperbesar 125 Persen",
          desc: "Layout yang rapat pecah saat pengunjung membesarkan teks, bukan hanya saat lebar berubah.",
          content: "<p class=\"mb-4\">Banyak halaman Clincoo lolos uji lebar 360px tetapi tombol terpotong saat zoom teks 125%.</p><p class=\"mb-4\">Di pratinjau, perbesar teks halaman. Cek heading yang overflow, label form yang menumpuk, dan kartu dengan tinggi tetap.</p><p class=\"mb-4\">Hindari tinggi tetap pada blok teks. Pakai min-height jika perlu ruang, biarkan konten mendorong wadah.</p><p class=\"mb-4\">Minta AI hanya mengubah wadah yang terpotong. Tempel cuplikan setelah zoom sebagai konteks.</p><p class=\"mb-4\">Clincoo mengikuti CSS yang kamu simpan. Uji zoom di editor.clincoo.buzz sebelum rilis.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test the Clincoo Preview when Text is Zoomed to 125 Percent",
          desc: "Tight layouts break when visitors enlarge text, not only when width changes.",
          content: "<p class=\"mb-4\">Many Clincoo pages pass a 360px width test, then buttons clip when text zoom is 125%.</p><p class=\"mb-4\">In preview, enlarge page text. Check overflowing headings, stacked form labels, and cards with a fixed height.</p><p class=\"mb-4\">Avoid fixed heights on text blocks. Use min-height if you need space and let content push the box.</p><p class=\"mb-4\">Ask AI only to change the clipped container. Paste the zoomed snippet as context.</p><p class=\"mb-4\">Clincoo follows the CSS you save. Test zoom in editor.clincoo.buzz before release.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "preview-konsol-error-saat-buka",
      langs: {
        "id": {
          title: "Baca Konsol Error saat Membuka Pratinjau Clincoo",
          desc: "Halaman terlihat diam-diam rusak jika skrip gagal dan kamu tidak membuka konsol.",
          content: "<p class=\"mb-4\">Pratinjau Clincoo bisa tampil rapi sementara addEventListener gagal karena elemen belum ada.</p><p class=\"mb-4\">Setiap kali membuka editor.clincoo.buzz, buka konsol. Catat TypeError, 404 skrip, dan peringatan mixed content.</p><p class=\"mb-4\">Perbaiki satu error dulu. Jangan minta AI merapikan seluruh file JavaScript karena satu null reference.</p><p class=\"mb-4\">Tempel jejak error lengkap, termasuk baris dan file, saat minta bantuan AI.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu simpan. Konsol di pratinjau adalah filter terakhir sebelum app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Read Console Errors when You Open the Clincoo Preview",
          desc: "A page can look fine while scripts fail if you never open the console.",
          content: "<p class=\"mb-4\">The Clincoo preview can look tidy while addEventListener fails because the element is missing.</p><p class=\"mb-4\">Each time you open editor.clincoo.buzz, open the console. Note TypeError, script 404s, and mixed-content warnings.</p><p class=\"mb-4\">Fix one error first. Do not ask AI to tidy the whole JavaScript file for one null reference.</p><p class=\"mb-4\">Paste the full error trace, including line and file, when you ask AI for help.</p><p class=\"mb-4\">Clincoo runs the scripts you save. The preview console is the last filter before app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
