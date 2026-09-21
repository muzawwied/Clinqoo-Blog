// Clincoo Blog — Data kategori: gambar
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["gambar"] = {
  names: { "id": "Gambar", "en": "Images" },
  flag: "🖼️",
  articles: [
    {
      id: "gambar-webp-sebelum-png-berat",
      langs: {
        "id": {
          title: "Ganti PNG Berat Clincoo ke WebP sebelum Deploy",
          desc: "Hero PNG 4 MB menahan LCP. Ekspor WebP, simpan cadangan, lalu perbarui src.",
          content: "<p class=\"mb-4\">Halaman Clincoo yang memakai foto kamera dalam PNG membuat pratinjau terasa lambat meski CSS sudah rapi.</p><p class=\"mb-4\">Ekspor ulang ke WebP dengan kualitas 75–85. Simpan PNG asli di folder draf, bukan di path publik. Perbarui setiap atribut src.</p><p class=\"mb-4\">Cek tab Network di editor.clincoo.buzz: ukuran hero harus turun tajam dan status 200.</p><p class=\"mb-4\">Minta AI hanya mengganti ekstensi di satu halaman. Tolak plugin kompresi yang tidak bisa kamu ulang.</p><p class=\"mb-4\">Clincoo menayangkan file apa adanya. Format yang lebih ringan adalah pekerjaan sebelum unggah.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Swap Heavy Clincoo PNGs to WebP before Deploy",
          desc: "A 4 MB PNG hero stalls LCP. Export WebP, keep a backup, then update src.",
          content: "<p class=\"mb-4\">A Clincoo page that ships camera photos as PNG makes preview feel slow even when CSS is tidy.</p><p class=\"mb-4\">Re-export to WebP at quality 75–85. Keep the original PNG in a draft folder, not on the public path. Update every src attribute.</p><p class=\"mb-4\">Check the Network tab in editor.clincoo.buzz: hero size should drop sharply and return 200.</p><p class=\"mb-4\">Ask the AI only to change extensions on one page. Refuse a compression plugin you cannot repeat.</p><p class=\"mb-4\">Clincoo serves files as stored. A lighter format is work you do before upload.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "gambar-lebar-tinggi-cegah-layout-shift",
      langs: {
        "id": {
          title: "Isi width dan height Gambar Clincoo agar Layout Tidak Loncat",
          desc: "Img tanpa ukuran membuat teks meloncat saat file tiba. Tulis lebar-tinggi asli.",
          content: "<p class=\"mb-4\">Kartu tim Clincoo yang loncat saat foto termuat merusak klik dan skor CLS.</p><p class=\"mb-4\">Tulis atribut width dan height sesuai piksel file, atau pasang aspect-ratio di CSS yang sama dengan rasio gambar.</p><p class=\"mb-4\">Uji di pratinjau: hard refresh dengan Network throttling. Teks di bawah gambar tidak boleh bergeser setelah load.</p><p class=\"mb-4\">Minta AI menambah width height pada satu galeri. Tolak rewrite seluruh grid.</p><p class=\"mb-4\">Clincoo tidak mengisi ukuran ajaib. Atribut yang kamu tulis menahan ruang.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Set Clincoo Image width and height so Layout Does Not Jump",
          desc: "An img without size makes text jump when the file arrives. Write the real width and height.",
          content: "<p class=\"mb-4\">Clincoo team cards that jump when photos load break clicks and CLS scores.</p><p class=\"mb-4\">Write width and height attributes that match the file pixels, or set the same aspect-ratio in CSS.</p><p class=\"mb-4\">Test in preview: hard refresh with Network throttling. Text below the image must not shift after load.</p><p class=\"mb-4\">Ask the AI to add width and height on one gallery. Refuse a full grid rewrite.</p><p class=\"mb-4\">Clincoo does not invent sizes. The attributes you write reserve space.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "gambar-srcset-dua-ukuran-hero",
      langs: {
        "id": {
          title: "Sediakan Dua Ukuran Hero Clincoo lewat srcset",
          desc: "Ponsel tidak perlu mengunduh hero 2400px. Satu srcset membagi beban.",
          content: "<p class=\"mb-4\">Hero desktop yang dipaksa ke layar 390px tetap mengunduh file penuh jika hanya ada satu src.</p><p class=\"mb-4\">Siapkan dua file: hero-800.webp dan hero-1600.webp. Tulis srcset plus sizes yang sesuai kolom layout.</p><p class=\"mb-4\">Di Network pratinjau ponsel, pastikan yang terunduh file yang lebih kecil. Jika yang besar yang terambil, perbaiki sizes.</p><p class=\"mb-4\">Minta AI menambah srcset pada satu img hero. Tolak generate lima breakpoint tanpa file nyata.</p><p class=\"mb-4\">Clincoo memuat URL yang tertulis. srcset adalah daftar jujur, bukan tebakan otomatis.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Give a Clincoo Hero Two Sizes with srcset",
          desc: "A phone should not download a 2400px hero. One srcset splits the load.",
          content: "<p class=\"mb-4\">A desktop hero forced onto a 390px screen still downloads the full file when only one src exists.</p><p class=\"mb-4\">Prepare two files: hero-800.webp and hero-1600.webp. Write srcset plus sizes that match the layout column.</p><p class=\"mb-4\">In the phone preview Network tab, confirm the smaller file is fetched. If the large one wins, fix sizes.</p><p class=\"mb-4\">Ask the AI to add srcset on one hero img. Refuse five breakpoints with no real files.</p><p class=\"mb-4\">Clincoo loads the URLs you write. srcset is an honest list, not an automatic guess.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
