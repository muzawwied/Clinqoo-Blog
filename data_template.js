// Clinqoo Blog — Data kategori: template
// File ini di-generate otomatis. Jangan edit manual.

if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["template"] = {
  names: { "id": "Template", "en": "Templates" },
  flag: "🧩",
  articles: [
    {
      id: "template-pilih-template-lalu-ganti-teks",
      langs: {
        "id": {
          title: "Pilih Template Clinqoo, Lalu Ganti Teks Dulu",
          desc: "Urutan aman: pilih template, ganti judul dan salinan, baru sentuh warna atau layout.",
          content: "<p class=\"mb-4\">Template Clinqoo bukan situs jadi. Itu kerangka. Judul, harga, alamat, dan foto contoh masih milik template — bukan milik bisnismu. Kalau langsung deploy, pengunjung melihat dummy.</p><p class=\"mb-4\">Mulai dari teks. Buka index.html di editor, cari heading, paragraf hero, dan tombol. Ganti dengan kalimat yang kamu ucapkan ke pelanggan. Hindari menumpuk kata kunci. Satu janji jelas lebih berguna.</p><p class=\"mb-4\">Setelah teks utama benar, baru ganti gambar. File contoh sering berukuran besar atau tidak relevan. Gunakan foto yang kamu punya haknya. Cek pratinjau di lebar sempit supaya teks tidak tertutup.</p><p class=\"mb-4\">Warna dan font belakangan. Banyak orang mengacak CSS dulu lalu bingung teks contoh masih ada. Urutan teks → gambar → gaya membuat diff kecil dan mudah di-rollback.</p><p class=\"mb-4\">Kalau asisten AI diminta \"rapikan template\", batasi: ganti salinan halaman beranda saja. Jangan izinkan rewrite seluruh folder sebelum kamu baca hasilnya.</p>",
          source: "Clinqoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clinqoo"
        },
        "en": {
          title: "Pick a Clinqoo Template, Then Change the Copy First",
          desc: "A safe order: pick a template, replace titles and copy, then touch color or layout.",
          content: "<p class=\"mb-4\">A Clinqoo template is not a finished site. It is a frame. Sample titles, prices, addresses, and photos still belong to the template — not to your business. Deploying immediately shows dummy content.</p><p class=\"mb-4\">Start with copy. Open index.html in the editor, find headings, the hero paragraph, and buttons. Replace them with sentences you actually tell customers. Do not stuff keywords. One clear promise is more useful.</p><p class=\"mb-4\">After the main copy is right, replace images. Sample files are often large or irrelevant. Use photos you have rights to. Check the preview at a narrow width so text is not covered.</p><p class=\"mb-4\">Color and fonts come later. Many people scramble CSS first and then notice sample copy is still there. The order copy → images → style keeps diffs small and easy to roll back.</p><p class=\"mb-4\">If you ask the AI assistant to \"clean up the template\", limit the job: replace homepage copy only. Do not allow a rewrite of the whole folder before you read the result.</p>",
          source: "Clinqoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clinqoo platform"
        }
      }
    },
    {
      id: "template-jaga-struktur-folder-setelah-pakai-template",
      langs: {
        "id": {
          title: "Jaga Struktur Folder setelah Memakai Template Clinqoo",
          desc: "Jangan acak nama file CSS dan aset template sebelum kamu paham tautan internalnya.",
          content: "<p class=\"mb-4\">Template Clinqoo biasanya punya index.html, folder aset, dan beberapa halaman tambahan. Path relatif sudah tertulis di tautan dan tag img. Mengganti nama folder tanpa menyesuaikan href merusak pratinjau.</p><p class=\"mb-4\">Sebelum merapikan, buka pratinjau dan klik semua menu. Catat file mana yang benar-benar dipakai. File yang tidak terhubung baru boleh dihapus. Jangan hapus CSS hanya karena namanya aneh.</p><p class=\"mb-4\">Kalau ingin nama yang lebih jelas, ubah satu file dulu, perbarui referensinya, lalu cek pratinjau. Perubahan massal dari AI sering melewatkan satu tautan di footer.</p><p class=\"mb-4\">Simpan struktur dangkal. Situs statis Clinqoo paling nyaman jika halaman tidak bersarang terlalu dalam. Subfolder dalam subfolder mempersulit path relatif setelah deploy.</p><p class=\"mb-4\">Struktur folder yang tenang membuat deploy bisa diulang. Template yang sudah kamu pahami lebih berharga daripada folder yang \"sudah dirapikan\" tapi pecah di produksi.</p>",
          source: "Clinqoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clinqoo"
        },
        "en": {
          title: "Keep the Folder Structure After Using a Clinqoo Template",
          desc: "Do not rename CSS and asset files until you understand the template's internal links.",
          content: "<p class=\"mb-4\">Clinqoo templates usually include index.html, an assets folder, and a few extra pages. Relative paths are already written in links and img tags. Renaming folders without updating hrefs breaks the preview.</p><p class=\"mb-4\">Before tidying, open the preview and click every menu item. Note which files are actually used. Only then delete unused files. Do not remove CSS just because the name looks odd.</p><p class=\"mb-4\">If you want clearer names, change one file, update its references, then check the preview. Mass edits from the AI often miss a single footer link.</p><p class=\"mb-4\">Keep the structure shallow. Static Clinqoo sites are easiest when pages are not nested too deep. Nested subfolders make relative paths fragile after deploy.</p><p class=\"mb-4\">A calm folder structure makes deploys repeatable. A template you understand is worth more than a folder that looks tidy but breaks in production.</p>",
          source: "Clinqoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clinqoo platform"
        }
      }
    },
    {
      id: "template-sesuaikan-warna-tanpa-rusak-layout",
      langs: {
        "id": {
          title: "Sesuaikan Warna Template Clinqoo tanpa Merusak Layout",
          desc: "Ubah variabel warna atau beberapa kelas, jangan rewrite seluruh CSS template.",
          content: "<p class=\"mb-4\">Template punya grid, spasi, dan breakpoint yang sudah diuji. Mengganti seluruh CSS karena tidak suka satu warna adalah cara paling cepat merusak mobile layout.</p><p class=\"mb-4\">Cari dulu apakah template memakai variabel CSS seperti --bg atau --accent. Ganti nilai itu. Jika tidak ada variabel, ubah warna di kelas yang terlihat di hero dan tombol saja.</p><p class=\"mb-4\">Setelah ganti warna, cek kontras teks. Latar gelap dengan teks abu-abu muda sering lolos di monitor, gagal di HP siang hari. Pratinjau Clinqoo cukup untuk tes kasar; zoom 100% dan lebar sempit.</p><p class=\"mb-4\">Jangan campur tiga sistem warna: inline style, kelas utility, dan file CSS besar. Pilih satu tempat. Inline style pada satu tombol boleh untuk tes, lalu pindahkan ke CSS.</p><p class=\"mb-4\">Minta AI: \"ganti warna aksen jadi hijau gelap, jangan ubah lebar kolom\". Perintah sempit menjaga layout. Kalau hasil aneh, undo dan ulangi dengan scope lebih kecil.</p>",
          source: "Clinqoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clinqoo"
        },
        "en": {
          title: "Restyle a Clinqoo Template Without Breaking the Layout",
          desc: "Change color variables or a few classes; do not rewrite the whole template stylesheet.",
          content: "<p class=\"mb-4\">Templates already ship with a grid, spacing, and breakpoints. Rewriting the whole stylesheet because you dislike one color is the fastest way to break the mobile layout.</p><p class=\"mb-4\">First check whether the template uses CSS variables such as --bg or --accent. Change those values. If there are no variables, edit colors only on classes you see in the hero and buttons.</p><p class=\"mb-4\">After changing color, check text contrast. Dark backgrounds with light-gray text often pass on a monitor and fail on a phone at noon. Clinqoo preview is enough for a rough test; keep zoom at 100% and use a narrow width.</p><p class=\"mb-4\">Do not mix three color systems: inline styles, utility classes, and a large CSS file. Pick one place. Inline style on a single button is fine for a test, then move it into CSS.</p><p class=\"mb-4\">Ask the AI: \"change the accent to dark green, do not change column widths\". A narrow command protects layout. If the result looks off, undo and retry with a smaller scope.</p>",
          source: "Clinqoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clinqoo platform"
        }
      }
    },
    {
      id: "template-hapus-konten-contoh-sebelum-deploy",
      langs: {
        "id": {
          title: "Hapus Konten Contoh Template sebelum Deploy Clinqoo",
          desc: "Lorem ipsum, nomor palsu, dan logo placeholder tidak boleh ikut ke subdomain publik.",
          content: "<p class=\"mb-4\">Konten contoh mempercepat desain, tapi memalukan setelah URL hidup. Cari \"Lorem\", \"Acme\", \"555-\", dan \"example@\". Hapus atau ganti semua.</p><p class=\"mb-4\">Bagian testimoni palsu lebih berbahaya daripada paragraf kosong. Pengunjung mengira itu klien nyata. Kalau belum punya kutipan asli, hapus bagian itu atau tulis proses kerjamu tanpa nama orang.</p><p class=\"mb-4\">Cek meta title dan description di head. Banyak template masih memakai judul generik. Itu yang muncul di tab dan pratinjau tautan. Samakan dengan judul halaman beranda.</p><p class=\"mb-4\">Formulir contoh sering mengarah ke layanan demo. Pastikan action form adalah tujuanmu, atau ganti dengan tautan email/WhatsApp yang kamu kendalikan.</p><p class=\"mb-4\">Checklist singkat sebelum deploy: tidak ada teks latin palsu, tidak ada harga dummy, tidak ada foto stok yang tidak kamu miliki, tidak ada tautan \"#\" pada menu utama.</p>",
          source: "Clinqoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clinqoo"
        },
        "en": {
          title: "Remove Template Dummy Content Before You Deploy on Clinqoo",
          desc: "Lorem ipsum, fake numbers, and placeholder logos must not ship to a public subdomain.",
          content: "<p class=\"mb-4\">Dummy content speeds up design and looks embarrassing once the URL is live. Search for \"Lorem\", \"Acme\", \"555-\", and \"example@\". Remove or replace every hit.</p><p class=\"mb-4\">Fake testimonials are worse than an empty section. Visitors assume those are real clients. If you do not have a real quote, delete the block or describe your process without naming people.</p><p class=\"mb-4\">Check the meta title and description in the head. Many templates still use a generic title. That is what shows in the tab and link previews. Match it to the homepage heading.</p><p class=\"mb-4\">Sample forms often post to a demo service. Make sure the form action is yours, or replace it with an email or WhatsApp link you control.</p><p class=\"mb-4\">A short checklist before deploy: no fake Latin, no dummy prices, no stock photos you do not own, no \"#\" links in the main menu.</p>",
          source: "Clinqoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clinqoo platform"
        }
      }
    },
    {
      id: "template-satu-template-banyak-halaman",
      langs: {
        "id": {
          title: "Dari Satu Template Clinqoo ke Beberapa Halaman yang Konsisten",
          desc: "Salin header dan footer yang sudah benar, lalu isi halaman baru tanpa mendesain ulang dari nol.",
          content: "<p class=\"mb-4\">Satu halaman bagus lebih berguna daripada lima halaman yang tidak sama. Setelah beranda rapi, salin header, navigasi, dan footer ke halaman baru seperti tentang atau layanan.</p><p class=\"mb-4\">Jaga path relatif. Jika halaman baru ada di folder yang sama dengan index.html, tautan aset tidak perlu diubah. Jika kamu buat subfolder, sesuaikan ../ pada CSS dan logo.</p><p class=\"mb-4\">Menu harus menandai halaman aktif secara sederhana. Jangan buat JavaScript rumit hanya untuk garis bawah. Kelas CSS pada tautan aktif sudah cukup.</p><p class=\"mb-4\">Minta AI menyalin struktur header, bukan menulis halaman baru dari imajinasi. Beri file sumber. Hasilnya lebih konsisten dan lebih mudah kamu periksa di pratinjau.</p><p class=\"mb-4\">Konsistensi visual membuat situs template terasa milik satu merek. Clinqoo men-deploy file apa adanya; kesatuan antarhalaman adalah pekerjaanmu di editor.</p>",
          source: "Clinqoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clinqoo"
        },
        "en": {
          title: "Turn One Clinqoo Template into Several Consistent Pages",
          desc: "Copy a header and footer that already work, then fill new pages without redesigning from scratch.",
          content: "<p class=\"mb-4\">One good page is more useful than five pages that do not match. After the homepage is tidy, copy the header, navigation, and footer to new pages such as about or services.</p><p class=\"mb-4\">Watch relative paths. If the new page lives next to index.html, asset links stay the same. If you create a subfolder, update ../ on CSS and the logo.</p><p class=\"mb-4\">The menu should mark the active page simply. Do not add complex JavaScript just for an underline. A CSS class on the active link is enough.</p><p class=\"mb-4\">Ask the AI to copy the header structure, not to invent a new page from imagination. Give it the source file. The result stays consistent and easier to check in preview.</p><p class=\"mb-4\">Visual consistency makes a template site feel like one brand. Clinqoo deploys the files as they are; unity across pages is your work in the editor.</p>",
          source: "Clinqoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clinqoo platform"
        }
      }
    }
  ]
};
