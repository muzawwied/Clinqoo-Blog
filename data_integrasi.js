// Clincoo Blog — Data kategori: integrasi
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["integrasi"] = {
  names: { "id": "Integrasi", "en": "Integrations" },
  flag: "\ud83d\udd0c",
  articles: [
    {
      id: "integrasi-embed-peta-iframe",
      langs: {
        "id": {
          title: "Sisipkan Peta lewat Iframe tanpa Merusak Layout Clincoo",
          desc: "Peta tertanam sering mendorong footer. Kunci rasio aspek dan lazy-load iframe.",
          content: "<p class=\"mb-4\">Halaman kontak Clincoo sering butuh peta lokasi. Iframe peta tanpa tinggi tetap membuat footer meloncat saat peta selesai dimuat.</p><p class=\"mb-4\">Bungkus iframe dalam wadah dengan aspect-ratio 16/9 atau padding-bottom 56%. Set iframe width dan height 100%, border 0, dan loading lazy.</p><p class=\"mb-4\">Jangan menempel URL peta mentah ke body tanpa judul. Tambah title pada iframe agar pembaca layar tahu isinya.</p><p class=\"mb-4\">Simpan di editor.clincoo.buzz lalu cek mobile. Minta AI hanya menambah wadah peta, bukan mengganti seluruh halaman kontak.</p><p class=\"mb-4\">Clincoo merender HTML yang kamu tulis. Iframe yang terbungkus menjaga grid tetap utuh.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Embed a Map Iframe without Breaking the Clincoo Layout",
          desc: "Embedded maps often shove the footer down. Lock aspect ratio and lazy-load the iframe.",
          content: "<p class=\"mb-4\">A Clincoo contact page often needs a location map. A map iframe with no fixed height makes the footer jump when the map loads.</p><p class=\"mb-4\">Wrap the iframe in a box with aspect-ratio 16/9 or padding-bottom 56%. Set the iframe to width and height 100%, border 0, and loading lazy.</p><p class=\"mb-4\">Do not paste a raw map URL into the body with no label. Add a title on the iframe so screen readers know what it is.</p><p class=\"mb-4\">Save in editor.clincoo.buzz and check mobile. Ask AI only to add the map wrapper, not to replace the whole contact page.</p><p class=\"mb-4\">Clincoo renders the HTML you write. A wrapped iframe keeps the grid intact.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "integrasi-tombol-whatsapp",
      langs: {
        "id": {
          title: "Tambah Tombol WhatsApp yang Tidak Menutupi Konten Clincoo",
          desc: "Tombol chat mengambang sering menutup CTA. Atur posisi, z-index, dan teks cadangan.",
          content: "<p class=\"mb-4\">Banyak situs Clincoo menambah tautan wa.me agar pengunjung bisa chat. Tombol bundar di pojok kanan bawah sering menutup form atau menu mobile.</p><p class=\"mb-4\">Pakai tautan biasa dengan nomor internasional, teks yang jelas, dan target _blank. Jika mengambang, beri jarak aman dari footer dan naikkan hanya z-index yang perlu.</p><p class=\"mb-4\">Jangan hardcode nomor di lima tempat. Satu variabel atau satu tautan di header dan footer cukup.</p><p class=\"mb-4\">Uji di pratinjau editor.clincoo.buzz pada layar sempit. Minta AI menambah satu tautan, bukan widget pihak ketiga yang berat.</p><p class=\"mb-4\">Clincoo tidak menyisipkan WhatsApp otomatis. Tautan ringan lebih mudah dilacak dan tidak merusak akses.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add a WhatsApp Button that Does Not Cover Clincoo Content",
          desc: "Floating chat buttons often hide CTAs. Set position, z-index, and fallback text.",
          content: "<p class=\"mb-4\">Many Clincoo sites add a wa.me link so visitors can chat. A round button in the bottom-right often covers a form or the mobile menu.</p><p class=\"mb-4\">Use a normal link with an international number, clear text, and target _blank. If it floats, leave space above the footer and raise only the z-index you need.</p><p class=\"mb-4\">Do not hardcode the number in five places. One variable or one link in the header and footer is enough.</p><p class=\"mb-4\">Test the preview in editor.clincoo.buzz on a narrow screen. Ask AI to add one link, not a heavy third-party widget.</p><p class=\"mb-4\">Clincoo does not inject WhatsApp for you. A light link is easier to audit and does not break access.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "integrasi-form-ke-layanan-luar",
      langs: {
        "id": {
          title: "Hubungkan Form Clincoo ke Layanan Luar tanpa Kehilangan Validasi",
          desc: "Action form ke layanan email sering menonaktifkan cek HTML. Pertahankan required dan honeypot.",
          content: "<p class=\"mb-4\">Form kontak di proyek Clincoo biasanya dikirim ke layanan form atau endpoint email. Mengganti action tanpa menjaga atribut required membuat data kosong lolos.</p><p class=\"mb-4\">Tetapkan method post, action ke URL layanan, dan name field yang diminta dokumentasi. Biarkan required, type email, dan honeypot tersembunyi tetap ada.</p><p class=\"mb-4\">Jangan menaruh kunci rahasia di HTML publik. Token publik milik layanan form berbeda dari API secret.</p><p class=\"mb-4\">Uji kirim dari editor.clincoo.buzz lalu dari domain live app.clincoo.buzz. Minta AI hanya mengubah action dan name, bukan merombak markup field.</p><p class=\"mb-4\">Clincoo tidak mengirim email sendiri. Form yang tetap divalidasi di browser mengurangi sampah masuk.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Connect a Clincoo Form to an External Service without Losing Validation",
          desc: "Pointing a form action at an email service often drops HTML checks. Keep required and a honeypot.",
          content: "<p class=\"mb-4\">A contact form in a Clincoo project is usually posted to a form service or email endpoint. Changing action without keeping required lets empty data through.</p><p class=\"mb-4\">Set method post, action to the service URL, and field names the docs ask for. Leave required, type email, and a hidden honeypot in place.</p><p class=\"mb-4\">Do not put secrets in public HTML. A form-service public token is not the same as an API secret.</p><p class=\"mb-4\">Submit a test from editor.clincoo.buzz and from the live app.clincoo.buzz domain. Ask AI to change action and names only, not to rebuild the field markup.</p><p class=\"mb-4\">Clincoo does not send email itself. A form that still validates in the browser cuts incoming junk.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "integrasi-skrip-analitik-aman",
      langs: {
        "id": {
          title: "Pasang Skrip Analitik di Clincoo tanpa Mengunci Render",
          desc: "Tag di head tanpa defer menahan First Paint. Isolasi skrip dan hormati persetujuan cookie.",
          content: "<p class=\"mb-4\">Situs Clincoo yang menambah piksel atau tag manager di head sering terasa lambat di HP. Skrip sinkron menahan HTML selesai dilukis.</p><p class=\"mb-4\">Taruh skrip pihak ketiga di akhir body atau pakai defer. Jangan campur ID properti di lima file; satu cuplikan cukup.</p><p class=\"mb-4\">Jika ada banner cookie, jangan memuat piksel sebelum pengunjung setuju. Hormati juga Do Not Track jika kamu menjanjikannya di kebijakan.</p><p class=\"mb-4\">Uji Network di pratinjau editor.clincoo.buzz. Minta AI menempel satu blok skrip, bukan menggabungkannya ke app.js tema.</p><p class=\"mb-4\">Clincoo tidak memasang analitik default. Kamu yang memilih vendor dan kapan skrip boleh jalan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add Analytics Scripts on Clincoo without Blocking Render",
          desc: "A tag in head without defer holds First Paint. Isolate the script and respect cookie consent.",
          content: "<p class=\"mb-4\">A Clincoo site that drops a pixel or tag manager in head often feels slow on phones. A synchronous script holds the first paint.</p><p class=\"mb-4\">Put third-party scripts at the end of body or use defer. Do not scatter the property ID across five files; one snippet is enough.</p><p class=\"mb-4\">If you show a cookie banner, do not load the pixel before consent. Honor Do Not Track too if your policy promises it.</p><p class=\"mb-4\">Check the Network panel in the editor.clincoo.buzz preview. Ask AI to paste one script block, not to merge it into the theme app.js.</p><p class=\"mb-4\">Clincoo does not install analytics by default. You pick the vendor and when the script may run.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "integrasi-embed-kalender-janji",
      langs: {
        "id": {
          title: "Sisipkan Kalender Janji di Halaman Clincoo tanpa Overflow",
          desc: "Widget booking sering lebih tinggi dari kartu. Beri tinggi min, scroll, dan tautan cadangan.",
          content: "<p class=\"mb-4\">Layanan janji temu biasanya memberi cuplikan iframe atau skrip. Di grid Clincoo, widget itu sering memotong tombol di bawahnya.</p><p class=\"mb-4\">Beri wadah min-height yang realistis, overflow auto, dan tautan cadangan Buka kalender jika iframe diblokir. Hindari dua widget di satu layar mobile.</p><p class=\"mb-4\">Jangan memuat skrip kalender di semua halaman. Cukup halaman Hubungi atau Booking.</p><p class=\"mb-4\">Simpan di editor.clincoo.buzz dan gulir sampai footer. Minta AI merapikan wadah, bukan menyalin tema dari vendor.</p><p class=\"mb-4\">Clincoo hanya menampilkan markup yang kamu tempel. Cadangan tautan menjaga janji tetap bisa dibuat jika embed gagal.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Embed a Booking Calendar on a Clincoo Page without Overflow",
          desc: "Booking widgets are often taller than the card. Set a min-height, scroll, and a fallback link.",
          content: "<p class=\"mb-4\">Appointment tools usually give an iframe or script snippet. In a Clincoo grid that widget often clips the button below it.</p><p class=\"mb-4\">Give the wrapper a realistic min-height, overflow auto, and a fallback Open calendar link if the iframe is blocked. Avoid two widgets on one mobile screen.</p><p class=\"mb-4\">Do not load the calendar script on every page. Keep it on Contact or Booking only.</p><p class=\"mb-4\">Save in editor.clincoo.buzz and scroll to the footer. Ask AI to tidy the wrapper, not to copy the vendor theme.</p><p class=\"mb-4\">Clincoo only shows the markup you paste. A fallback link still lets people book if the embed fails.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "integrasi-embed-video-youtube",
      langs: {
        "id": {
          title: "Sisipkan Video YouTube di Clincoo tanpa Menggeser Grid",
          desc: "Iframe video tanpa rasio aspek merusak kartu. Kunci 16:9, lazy-load, dan judul yang jelas.",
          content: "<p class=\"mb-4\">Halaman Clincoo yang menempel iframe YouTube mentah sering pecah di mobile: tinggi meloncat setelah thumbnail muncul.</p><p class=\"mb-4\">Bungkus iframe dalam wadah aspect-ratio 16/9, width 100%, loading lazy, dan allow fullscreen yang memang kamu butuhkan. Isi title iframe dengan nama video, bukan kata embed.</p><p class=\"mb-4\">Jangan autoplay bersuara. Hormati pengunjung dan hemat kuota. Satu video per bagian lebih aman daripada playlist berat.</p><p class=\"mb-4\">Simpan di editor.clincoo.buzz, cek HP dan desktop. Minta AI hanya menambah wadah video, bukan mengganti hero.</p><p class=\"mb-4\">Clincoo merender HTML yang kamu tempel. Wadah rasio tetap menjaga footer tidak terdorong.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Embed a YouTube Video in Clincoo without Shifting the Grid",
          desc: "A video iframe with no aspect ratio breaks cards. Lock 16:9, lazy-load, and use a clear title.",
          content: "<p class=\"mb-4\">A Clincoo page that pastes a raw YouTube iframe often breaks on phones: height jumps after the thumbnail appears.</p><p class=\"mb-4\">Wrap the iframe in a 16/9 aspect-ratio box, width 100%, loading lazy, and only the fullscreen allow you need. Set the iframe title to the video name, not the word embed.</p><p class=\"mb-4\">Do not autoplay with sound. Respect visitors and save data. One video per section is safer than a heavy playlist.</p><p class=\"mb-4\">Save in editor.clincoo.buzz and check phone and desktop. Ask AI only to add the video wrapper, not to replace the hero.</p><p class=\"mb-4\">Clincoo renders the HTML you paste. A locked ratio keeps the footer from being shoved down.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "integrasi-font-pihak-ketiga",
      langs: {
        "id": {
          title: "Pasang Font Pihak Ketiga di Clincoo tanpa Menahan Teks",
          desc: "Tautan font sinkron menunda First Paint. Pakai display swap dan batasi keluarga huruf.",
          content: "<p class=\"mb-4\">Proyek Clincoo yang memuat lima file font di head sering menampilkan teks kosong lalu loncat saat file selesai.</p><p class=\"mb-4\">Pilih satu keluarga untuk isi dan satu untuk judul. Tambah font-display swap atau tautan yang sudah memuat parameter display=swap. Preconnect hanya ke host font yang benar.</p><p class=\"mb-4\">Jangan unduh seluruh set bobot 100 sampai 900. Regular dan bold biasanya cukup untuk situs UMKM.</p><p class=\"mb-4\">Uji di editor.clincoo.buzz dengan jaringan lambat. Minta AI menambah satu tautan font, bukan menyalin tema Google Fonts utuh.</p><p class=\"mb-4\">Clincoo tidak menyertakan font berbayar. Sistem fallback sans-serif menjaga halaman tetap terbaca jika CDN gagal.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Load Third-Party Fonts in Clincoo without Holding Text",
          desc: "A synchronous font link delays First Paint. Use display swap and limit families.",
          content: "<p class=\"mb-4\">A Clincoo project that loads five font files in head often shows blank text, then jumps when the files arrive.</p><p class=\"mb-4\">Pick one family for body and one for headings. Add font-display swap or a link that already has display=swap. Preconnect only to the real font host.</p><p class=\"mb-4\">Do not download every weight from 100 to 900. Regular and bold are usually enough for a small-business site.</p><p class=\"mb-4\">Test in editor.clincoo.buzz on a slow network. Ask AI to add one font link, not to copy a full Google Fonts theme.</p><p class=\"mb-4\">Clincoo does not ship paid fonts. A system sans-serif fallback keeps the page readable if the CDN fails.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "integrasi-webhook-form-sederhana",
      langs: {
        "id": {
          title: "Arahkan Form Clincoo ke Webhook tanpa Membocorkan Rahasia",
          desc: "URL webhook di HTML publik bisa disalahgunakan. Pakai endpoint publik terbatas dan honeypot.",
          content: "<p class=\"mb-4\">Beberapa layanan menerima POST form lalu meneruskan ke email atau chat. Menempel URL webhook mentah di atribut action memudahkan bot menembak endpoint.</p><p class=\"mb-4\">Gunakan URL yang hanya menerima field yang kamu tentukan, method post, dan honeypot tersembunyi. Jangan taruh token tulis penuh di halaman Clincoo.</p><p class=\"mb-4\">Uji kirim sah dan kirim kosong dari editor.clincoo.buzz. Cek apakah layanan menolak field tak dikenal.</p><p class=\"mb-4\">Minta AI hanya mengisi action dan name field, bukan menambah skrip fetch dengan kunci di client.</p><p class=\"mb-4\">Clincoo tidak menyembunyikan webhook. Batas di sisi layanan yang melindungi kotak masuk kamu.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Point a Clincoo Form at a Webhook without Leaking Secrets",
          desc: "A webhook URL in public HTML can be abused. Use a tight public endpoint and a honeypot.",
          content: "<p class=\"mb-4\">Some services accept a form POST and forward it to email or chat. Pasting a raw webhook URL in action makes it easy for bots to hit the endpoint.</p><p class=\"mb-4\">Use a URL that only accepts the fields you named, method post, and a hidden honeypot. Do not put a full write token on the Clincoo page.</p><p class=\"mb-4\">Test a valid submit and an empty submit from editor.clincoo.buzz. Check that the service rejects unknown fields.</p><p class=\"mb-4\">Ask AI only to fill action and field names, not to add a client fetch that embeds a key.</p><p class=\"mb-4\">Clincoo does not hide webhooks. Limits on the service side protect your inbox.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "integrasi-tombol-bagikan-sosial",
      langs: {
        "id": {
          title: "Tambah Tombol Bagikan di Clincoo tanpa Skrip Berat",
          desc: "SDK sosial menahan halaman. Pakai tautan intent resmi dan teks yang bisa disalin.",
          content: "<p class=\"mb-4\">Banyak template menempel SDK Facebook atau X hanya untuk satu tombol Bagikan. File itu lebih besar dari konten artikel.</p><p class=\"mb-4\">Gunakan tautan intent resmi: URL encode judul dan alamat halaman. Tambah tombol Salin tautan sebagai cadangan jika popup diblokir.</p><p class=\"mb-4\">Jangan memuat SDK di semua halaman. Cukup artikel atau produk yang memang ingin dibagikan.</p><p class=\"mb-4\">Uji di pratinjau editor.clincoo.buzz pada HP. Minta AI menambah tautan, bukan widget berbagi pihak ketiga.</p><p class=\"mb-4\">Clincoo tidak memasang tombol sosial default. Tautan intent menjaga privasi pengunjung dan waktu muat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add Share Buttons on Clincoo without Heavy Scripts",
          desc: "Social SDKs stall the page. Use official intent links and copyable text.",
          content: "<p class=\"mb-4\">Many templates drop a Facebook or X SDK just for one Share button. That file is larger than the article.</p><p class=\"mb-4\">Use official intent links: URL-encode the title and page address. Add a Copy link button as fallback if popups are blocked.</p><p class=\"mb-4\">Do not load the SDK on every page. Keep it on articles or products people actually share.</p><p class=\"mb-4\">Test the editor.clincoo.buzz preview on a phone. Ask AI to add links, not a third-party share widget.</p><p class=\"mb-4\">Clincoo does not install social buttons by default. Intent links protect visitor privacy and load time.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "integrasi-chat-widget-ringan",
      langs: {
        "id": {
          title: "Pasang Widget Chat Ringan di Clincoo tanpa Menutup Form",
          desc: "Bubble chat menutup CTA mobile. Tunda muat skrip dan sisakan ruang footer.",
          content: "<p class=\"mb-4\">Widget chat pihak ketiga sering dimuat di semua halaman Clincoo lalu menutup tombol Kirim di HP.</p><p class=\"mb-4\">Tunda skrip sampai idle atau setelah interaksi. Atur posisi bubble di atas footer, bukan menimpa field terakhir. Sediakan tautan email jika widget diblokir.</p><p class=\"mb-4\">Jangan pasang dua vendor chat sekaligus. Satu saluran yang kamu jawab lebih berguna.</p><p class=\"mb-4\">Cek pratinjau editor.clincoo.buzz dalam mode sempit. Minta AI menempatkan satu cuplikan, bukan menyalin tema vendor.</p><p class=\"mb-4\">Clincoo tidak menyediakan chat bawaan. Widget yang ditunda menjaga First Paint tetap cepat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add a Light Chat Widget on Clincoo without Covering Forms",
          desc: "Chat bubbles hide mobile CTAs. Defer the script and leave footer space.",
          content: "<p class=\"mb-4\">Third-party chat widgets often load on every Clincoo page and then cover the Submit button on phones.</p><p class=\"mb-4\">Defer the script until idle or after interaction. Place the bubble above the footer, not over the last field. Offer an email link if the widget is blocked.</p><p class=\"mb-4\">Do not install two chat vendors at once. One channel you actually answer is more useful.</p><p class=\"mb-4\">Check the editor.clincoo.buzz preview in a narrow view. Ask AI to place one snippet, not to copy the vendor theme.</p><p class=\"mb-4\">Clincoo does not ship built-in chat. A deferred widget keeps First Paint fast.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
