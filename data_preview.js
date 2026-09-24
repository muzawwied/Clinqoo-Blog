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
    }
  ]
};
