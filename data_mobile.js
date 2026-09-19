// Clincoo Blog — Data kategori: mobile
// File ini di-generate otomatis. Jangan edit manual.

if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["mobile"] = {
  names: { "id": "Mobile", "en": "Mobile" },
  flag: "📱",
  articles: [
    {
      id: "mobile-pratinjau-lebar-sempit-di-hp",
      langs: {
        "id": {
          title: "Pratinjau Lebar Sempit sebelum Situs Clincoo Dibuka di HP",
          desc: "Editor di laptop menipu. Cek layout di lebar ponsel sebelum deploy ke subdomain.",
          content: "<p class=\"mb-4\">Banyak proyek Clincoo terlihat rapi di layar lebar editor, lalu pecah saat dibuka di HP: teks menumpuk, tombol keluar frame, atau gambar menutup heading. Pengunjung pertama sering memakai ponsel, bukan monitor.</p><p class=\"mb-4\">Sebelum deploy, kecilkan panel pratinjau atau uji URL setelah rilis di perangkatmu. Cari overflow horizontal. Jika halaman bisa digeser ke samping, ada elemen yang terlalu lebar — biasanya gambar tanpa max-width atau baris kode yang tidak wrap.</p><p class=\"mb-4\">Minta AI hanya menyesuaikan media query untuk lebar di bawah 640px, bukan rewrite seluruh CSS. Setelah itu cek lagi hero, menu, dan footer.</p><p class=\"mb-4\">Satu menit pratinjau sempit menghemat pesan \"di HP saya berantakan\". Clincoo men-deploy file apa adanya; lebar layar pengunjung tidak menunggu kamu merapikan nanti.</p><p class=\"mb-4\">Biasakan rilis dengan dua lebar: desktop dan HP. Itu kebiasaan mobile yang paling murah.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Preview a Narrow Width before a Clincoo Site Opens on a Phone",
          desc: "The laptop editor lies. Check the layout at phone width before you deploy to a subdomain.",
          content: "<p class=\"mb-4\">Many Clincoo projects look tidy in a wide editor, then break on a phone: text stacks, buttons leave the frame, or an image covers the heading. First visitors often use a phone, not a monitor.</p><p class=\"mb-4\">Before deploy, shrink the preview pane or test the live URL on your device. Watch for horizontal overflow. If the page can swipe sideways, something is too wide — usually an image without max-width or a code line that does not wrap.</p><p class=\"mb-4\">Ask the AI only to tune the media query below 640px, not to rewrite the whole stylesheet. Then check the hero, menu, and footer again.</p><p class=\"mb-4\">One minute of narrow preview saves a \"it is messy on my phone\" message. Clincoo deploys the files as they are; visitor screen width will not wait for a later tidy-up.</p><p class=\"mb-4\">Release at two widths: desktop and phone. That is the cheapest mobile habit.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "mobile-pasang-pwa-clinqoo-di-layar-utama",
      langs: {
        "id": {
          title: "Pasang Clincoo di Layar Utama HP seperti Aplikasi",
          desc: "Clincoo adalah PWA. Pasang ke home screen supaya editor dan pratinjau cepat dibuka ulang.",
          content: "<p class=\"mb-4\">Kalau kamu sering mengedit dari ponsel, buka Clincoo di browser lalu pilih Tambah ke layar utama. Ikonnya duduk di antara aplikasi lain, tanpa toko aplikasi.</p><p class=\"mb-4\">PWA tidak mengganti cadangan file. Tetap unduh ZIP penting sebelum perubahan besar. Yang kamu dapat adalah akses cepat ke editor, bukan vault offline penuh.</p><p class=\"mb-4\">Setelah terpasang, uji buka proyek, pratinjau, dan menu deploy. Pastikan login masih aktif. Jika sesi habis, masuk lagi sebelum menekan simpan.</p><p class=\"mb-4\">Jangan mengira ikon di HP berarti situs pengunjung juga otomatis jadi aplikasi. Situs yang kamu deploy adalah file statis terpisah. PWA Clincoo adalah alat kerjamu.</p><p class=\"mb-4\">Layar utama yang berisi Clincoo memotong langkah buka bookmark. Itu cukup untuk sesi edit singkat di perjalanan.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Install Clincoo on Your Phone Home Screen like an App",
          desc: "Clincoo is a PWA. Add it to the home screen so the editor and preview open again quickly.",
          content: "<p class=\"mb-4\">If you often edit from a phone, open Clincoo in the browser and choose Add to Home Screen. The icon sits with your other apps, with no app store.</p><p class=\"mb-4\">A PWA does not replace file backups. Still download an important ZIP before a large change. What you gain is fast access to the editor, not a full offline vault.</p><p class=\"mb-4\">After install, test opening a project, preview, and the deploy menu. Confirm you are still signed in. If the session expired, sign in again before you hit save.</p><p class=\"mb-4\">Do not assume the phone icon means your visitors' site is also an app. The site you deploy is a separate set of static files. The Clincoo PWA is your work tool.</p><p class=\"mb-4\">A home screen that includes Clincoo cuts the bookmark step. That is enough for a short edit on the road.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "mobile-ketik-kode-di-ponsel-dengan-tab",
      langs: {
        "id": {
          title: "Ketik Kode di Ponsel: Satu File, Satu Perubahan",
          desc: "Editor Clincoo di HP cocok untuk perbaikan kecil. Jangan rewrite banyak file dari layar sempit.",
          content: "<p class=\"mb-4\">Menyentuh index.html di HP masuk akal untuk ganti nomor WhatsApp atau teks tombol. Menyuruh AI merapikan seluruh CSS dari layar kecil mudah terlewat salah.</p><p class=\"mb-4\">Buka satu file. Ubah satu hal. Simpan. Buka pratinjau. Baru file berikutnya. Tab di editor HP mudah tertutup atau tertimpa jika terlalu banyak.</p><p class=\"mb-4\">Kalau butuh diff panjang, tunda sampai di laptop. Di ponsel, minta AI menampilkan potongan yang berubah saja, lalu kamu tempel sadar.</p><p class=\"mb-4\">Perbesar font editor jika tersedia, atau zoom halaman. Salah ketik pada class CSS lebih mahal daripada menunda rilis satu jam.</p><p class=\"mb-4\">Clincoo di HP adalah pena saku, bukan bengkel penuh. Pakai untuk koreksi, bukan renovasi.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Type Code on a Phone: One File, One Change",
          desc: "The Clincoo editor on a phone is right for small fixes. Do not rewrite many files from a narrow screen.",
          content: "<p class=\"mb-4\">Touching index.html on a phone makes sense to change a WhatsApp number or button label. Asking the AI to tidy the whole stylesheet from a small screen is easy to miss.</p><p class=\"mb-4\">Open one file. Change one thing. Save. Open preview. Only then the next file. Tabs on a phone editor close or overwrite easily when there are too many.</p><p class=\"mb-4\">If you need a long diff, wait for a laptop. On a phone, ask the AI to show only the changed snippet, then paste it on purpose.</p><p class=\"mb-4\">Increase the editor font if you can, or zoom the page. A typo in a CSS class costs more than delaying release by an hour.</p><p class=\"mb-4\">Clincoo on a phone is a pocket pen, not a full workshop. Use it for corrections, not renovations.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "mobile-gambar-dan-ukuran-layar-kecil",
      langs: {
        "id": {
          title: "Kompres Gambar supaya Situs Clincoo Ringan di HP",
          desc: "Foto hero 3MB membuat pratinjau dan subdomain terasa lambat di jaringan seluler.",
          content: "<p class=\"mb-4\">Jaringan HP tidak selalu Wi-Fi kantor. Gambar besar di template atau unggahan langsung membuat First Contentful Paint lama, meski HTML-nya pendek.</p><p class=\"mb-4\">Kompres JPG atau WebP sebelum masuk workspace. Target kasar: hero di bawah 200KB jika bisa, ikon jauh lebih kecil. Isi atribut width dan height agar layout tidak loncat.</p><p class=\"mb-4\">Jangan andalkan CDN gambar pihak ketiga jika satu file lokal sudah cukup. Request tambahan di seluler lebih terasa daripada di desktop.</p><p class=\"mb-4\">Setelah ganti src, buka pratinjau HP. Pastikan object-fit tidak memotong subjek. Alt text tetap diisi — berguna saat gambar gagal dimuat.</p><p class=\"mb-4\">Situs Clincoo yang ringan di HP terasa sopan. Deploy cepat tidak menolong jika asetnya berat.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Compress Images so a Clincoo Site Stays Light on Phones",
          desc: "A 3MB hero photo makes preview and the subdomain feel slow on mobile networks.",
          content: "<p class=\"mb-4\">A phone network is not always office Wi-Fi. Large template photos or raw uploads delay First Contentful Paint even when the HTML is short.</p><p class=\"mb-4\">Compress JPG or WebP before it enters the workspace. A rough target: keep the hero under 200KB if you can, and icons much smaller. Set width and height so the layout does not jump.</p><p class=\"mb-4\">Do not lean on a third-party image CDN if one local file is enough. Extra requests hurt more on cellular than on desktop.</p><p class=\"mb-4\">After you change the src, open phone preview. Make sure object-fit does not crop the subject. Keep alt text — it helps when the image fails to load.</p><p class=\"mb-4\">A Clincoo site that is light on a phone feels polite. Fast deploy does not help if the assets are heavy.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "mobile-uji-tap-target-sebelum-deploy",
      langs: {
        "id": {
          title: "Uji Target Sentuh Tombol sebelum Deploy dari Clincoo",
          desc: "Menu, CTA, dan tautan footer harus mudah diketuk. Padding lebih berguna daripada font kecil.",
          content: "<p class=\"mb-4\">Di desktop, tautan rapat masih bisa diklik. Di HP, jari mengenai dua tautan sekaligus atau melewatkan tombol CTA. Itu bukan selera desain — itu gesekan.</p><p class=\"mb-4\">Perbesar area sentuh dengan padding, bukan hanya memperbesar huruf sampai navbar pecah. Jarak antar item menu sekitar sentuhan nyaman, kira-kira 44px.</p><p class=\"mb-4\">Cek footer: deretan ikon sosial yang kecil sering gagal diketuk. Sederhanakan atau beri ruang.</p><p class=\"mb-4\">Jika AI merapikan navbar, batasi ke CSS padding dan urutan tautan. Tolak hamburger baru yang menambah skrip jika menu lama sudah jalan.</p><p class=\"mb-4\">Uji dengan ibu jari di pratinjau atau di subdomain uji. Clincoo tidak menyesuaikan sentuhan untukmu; kamu yang mengatur target.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Test Tap Targets before You Deploy from Clincoo",
          desc: "Menus, CTAs, and footer links must be easy to tap. Padding helps more than tiny type.",
          content: "<p class=\"mb-4\">On desktop, tight links still click. On a phone, a finger hits two links or misses the CTA. That is not taste — it is friction.</p><p class=\"mb-4\">Grow the tap area with padding instead of enlarging type until the navbar breaks. Space menu items for a comfortable tap, around 44px.</p><p class=\"mb-4\">Check the footer: a row of tiny social icons often fails. Simplify them or add space.</p><p class=\"mb-4\">If the AI tidies the navbar, limit the job to padding CSS and link order. Refuse a new hamburger that adds script when the old menu already works.</p><p class=\"mb-4\">Test with a thumb in preview or on a test subdomain. Clincoo does not tune touch for you; you set the targets.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ]
};
