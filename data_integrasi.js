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
    }
  ]
};
