// Clincoo Blog — Data kategori: analytics
// File ini di-generate otomatis. Jangan edit manual.

if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["analytics"] = {
  names: { "id": "Analytics", "en": "Analytics" },
  flag: "📊",
  articles: [
    {
      id: "analytics-satu-skrip-pengukuran",
      langs: {
        "id": {
          title: "Pasang Satu Skrip Pengukuran di Situs Clincoo",
          desc: "Tiga pixel sekaligus memperlambat halaman. Pilih satu alat ukur dan muat setelah konten utama.",
          content: "<p class=\"mb-4\">Template sering menyalin Google, Meta, dan skrip heatmap sekaligus. Situs Clincoo statis tidak butuh tumpukan tracker untuk halaman profil.</p><p class=\"mb-4\">Pilih satu skrip. Taruh di akhir body atau defer agar HTML dan CSS Clincoo tampil dulu.</p><p class=\"mb-4\">Jika AI menempel snippet iklan di setiap halaman, minta ia menghapus duplikat dan menyisakan satu file.</p><p class=\"mb-4\">Ukur di pratinjau: buka Network di browser, pastikan hanya satu domain analitik yang dipanggil.</p><p class=\"mb-4\">Clincoo men-deploy file apa adanya. Pengukuran yang hemat menjaga performa di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Ship One Measurement Script on a Clincoo Site",
          desc: "Three pixels at once slow the page. Pick one analytics tool and load it after the main content.",
          content: "<p class=\"mb-4\">Templates often paste Google, Meta, and a heatmap script together. A static Clincoo site does not need a stack of trackers for a profile page.</p><p class=\"mb-4\">Pick one script. Place it at the end of body or defer so Clincoo HTML and CSS paint first.</p><p class=\"mb-4\">If the AI pastes an ad snippet on every page, ask it to drop duplicates and keep one file.</p><p class=\"mb-4\">Check preview: open Network in the browser and confirm only one analytics host is called.</p><p class=\"mb-4\">Clincoo deploys files as saved. Lean measurement keeps performance on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "analytics-izin-sebelum-lacak",
      langs: {
        "id": {
          title: "Minta Izin sebelum Melacak Pengunjung Clincoo",
          desc: "Skrip yang menyimpan cookie tanpa pemberitahuan berisiko legal. Tampilkan pilihan sebelum tracker jalan.",
          content: "<p class=\"mb-4\">Banyak snippet analitik langsung menulis cookie saat halaman Clincoo dibuka. Pengunjung tidak sempat menolak.</p><p class=\"mb-4\">Tampilkan banner singkat: terima atau tolak. Muat skrip pengukuran hanya setelah setuju.</p><p class=\"mb-4\">Jangan minta AI menanam tracker di head tanpa syarat. Satu file consent lebih aman daripada rewrite seluruh layout.</p><p class=\"mb-4\">Uji dua jalur di pratinjau editor.clincoo.buzz: tolak (tidak ada request analitik) dan terima (skrip muncul).</p><p class=\"mb-4\">Clincoo tidak mengelola izin untukmu. Keputusan analitik adalah bagian dari rilis yang sopan.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Ask Consent before Tracking Clincoo Visitors",
          desc: "A script that sets cookies with no notice is a legal risk. Show a choice before the tracker runs.",
          content: "<p class=\"mb-4\">Many analytics snippets write cookies as soon as a Clincoo page opens. Visitors never get to refuse.</p><p class=\"mb-4\">Show a short banner: accept or decline. Load the measurement script only after a yes.</p><p class=\"mb-4\">Do not ask the AI to plant a tracker in head unconditionally. One consent file is safer than a layout rewrite.</p><p class=\"mb-4\">Test both paths in editor.clincoo.buzz preview: decline (no analytics request) and accept (the script appears).</p><p class=\"mb-4\">Clincoo does not manage consent for you. Analytics policy is part of a polite release.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "analytics-event-cta-bukan-semua-klik",
      langs: {
        "id": {
          title: "Lacak Klik CTA, Bukan Setiap Klik di Clincoo",
          desc: "Event pada semua elemen membuat data ramai dan tidak berguna. Ukur aksi yang kamu pedulikan.",
          content: "<p class=\"mb-4\">AI sering menambah listener klik di document. Hasilnya ratusan event tanpa makna di laporan.</p><p class=\"mb-4\">Pasang event hanya pada tombol utama: kirim form, buka WhatsApp, atau unduh. Beri nama event yang manusiawi.</p><p class=\"mb-4\">Minta AI menyentuh satu file skrip. Tolak library analitik penuh untuk situs tiga halaman.</p><p class=\"mb-4\">Setelah deploy di app.clincoo.buzz, kirim satu event uji dan pastikan nama di dasbor sesuai.</p><p class=\"mb-4\">Pengukuran di Clincoo berguna jika setiap event mewakili keputusan pengunjung, bukan gerakan mouse.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Track CTA Clicks, Not Every Click on Clincoo",
          desc: "Events on every element flood the report. Measure the actions you actually care about.",
          content: "<p class=\"mb-4\">AI often adds a click listener on document. The report then fills with hundreds of meaningless events.</p><p class=\"mb-4\">Attach events only to primary buttons: submit, open WhatsApp, or download. Give the event a human name.</p><p class=\"mb-4\">Ask the AI to touch one script file. Refuse a full analytics suite for a three-page site.</p><p class=\"mb-4\">After deploy on app.clincoo.buzz, fire one test event and confirm the name in the dashboard.</p><p class=\"mb-4\">Measurement on Clincoo helps when each event is a visitor decision, not a mouse twitch.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ]
};
