// Clincoo Blog — artikel analytics tambahan 2026-09-21
(function(){
  var extra = [
    {
      id: "analytics-jangan-lacak-pratinjau-editor",
      langs: {
        "id": {
          title: "Jangan Lacak Halaman Pratinjau Editor Clincoo",
          desc: "Hit dari editor.clincoo.buzz merusak laporan. Blokir host pratinjau sebelum skrip analitik jalan.",
          content: "<p class=\"mb-4\">Pratinjau di editor.clincoo.buzz memuat halaman berkali-kali saat kamu menyimpan. Jika skrip analitik ikut jalan, dasbor penuh kunjungan palsu.</p><p class=\"mb-4\">Tambah satu syarat di skrip: jika hostname mengandung editor atau pages.dev pratinjau, jangan inisialisasi tracker.</p><p class=\"mb-4\">Minta AI menyentuh satu file pengukuran saja. Jangan biarkan ia menanam pixel di setiap HTML.</p><p class=\"mb-4\">Uji dua host: pratinjau (tidak ada request analitik) dan domain produksi app.clincoo.buzz (satu request setelah izin).</p><p class=\"mb-4\">Clincoo men-deploy file apa adanya. Pemisahan pratinjau dan produksi menjaga angka tetap jujur.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Do Not Track Clincoo Editor Preview Pages",
          desc: "Hits from editor.clincoo.buzz pollute the report. Block the preview host before the analytics script runs.",
          content: "<p class=\"mb-4\">Preview on editor.clincoo.buzz reloads the page every time you save. If the analytics script runs there, the dashboard fills with fake visits.</p><p class=\"mb-4\">Add one guard in the script: if the hostname contains editor or a preview pages.dev host, skip tracker init.</p><p class=\"mb-4\">Ask the AI to touch one measurement file. Do not let it plant a pixel in every HTML file.</p><p class=\"mb-4\">Test two hosts: preview (no analytics request) and the production domain on app.clincoo.buzz (one request after consent).</p><p class=\"mb-4\">Clincoo deploys files as saved. Separating preview from production keeps the numbers honest.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "analytics-pageview-setelah-judul-benar",
      langs: {
        "id": {
          title: "Kirim Pageview setelah Judul dan Canonical Benar",
          desc: "Mengukur URL salah atau judul default merusak laporan. Rapikan meta dulu, baru pasang tracker.",
          content: "<p class=\"mb-4\">Template Clincoo sering masih memakai judul 'Untitled' atau path folder. Pageview pada URL itu tidak bisa dibanding minggu ke minggu.</p><p class=\"mb-4\">Perbaiki title, description, dan canonical di setiap halaman sebelum menempel skrip analitik.</p><p class=\"mb-4\">Jika AI menambah tracker lebih dulu, minta ia menunda inisialisasi sampai meta sudah kamu cek di pratinjau.</p><p class=\"mb-4\">Setelah deploy di app.clincoo.buzz, buka satu halaman dan pastikan judul tab serta path di laporan sama.</p><p class=\"mb-4\">Pengukuran Clincoo berguna hanya jika setiap pageview menunjuk halaman yang memang kamu miliki.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Send Pageviews after Title and Canonical Are Correct",
          desc: "Measuring the wrong URL or a default title ruins the report. Fix meta first, then attach the tracker.",
          content: "<p class=\"mb-4\">Clincoo templates often still use an Untitled title or a folder path. Pageviews on those URLs cannot be compared week to week.</p><p class=\"mb-4\">Fix title, description, and canonical on every page before you paste an analytics script.</p><p class=\"mb-4\">If the AI adds a tracker first, ask it to delay init until you have checked meta in preview.</p><p class=\"mb-4\">After deploy on app.clincoo.buzz, open one page and confirm the tab title and the path in the report match.</p><p class=\"mb-4\">Measurement on Clincoo helps only when each pageview points at a page you actually own.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "analytics-utm-tautan-kampanye",
      langs: {
        "id": {
          title: "Tambah Parameter UTM hanya pada Tautan Kampanye",
          desc: "UTM di setiap tautan internal merusak sesi. Pakai UTM hanya saat membagikan URL ke luar.",
          content: "<p class=\"mb-4\">AI sering menempel utm_source di menu dan footer. Pengunjung yang pindah halaman terlihat seperti kampanye baru.</p><p class=\"mb-4\">Biarkan tautan internal Clincoo bersih. Tambah UTM hanya pada tautan yang kamu kirim di email, bio, atau iklan.</p><p class=\"mb-4\">Satu skema nama cukup: source, medium, campaign. Jangan minta AI membuat puluhan variasi.</p><p class=\"mb-4\">Uji tautan kampanye di pratinjau, lalu buka Network atau dasbor setelah deploy di app.clincoo.buzz.</p><p class=\"mb-4\">Clincoo tidak menulis UTM untukmu. Parameter yang hemat membuat sumber kunjungan tetap terbaca.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Add UTM Parameters only on Campaign Links",
          desc: "UTM on every internal link breaks sessions. Use UTM only when you share a URL outside the site.",
          content: "<p class=\"mb-4\">AI often pastes utm_source into menus and footers. Visitors who change pages then look like a new campaign.</p><p class=\"mb-4\">Keep internal Clincoo links clean. Add UTM only on links you send in email, a bio, or an ad.</p><p class=\"mb-4\">One naming scheme is enough: source, medium, campaign. Do not ask the AI for dozens of variants.</p><p class=\"mb-4\">Test the campaign link in preview, then check Network or the dashboard after deploy on app.clincoo.buzz.</p><p class=\"mb-4\">Clincoo does not write UTM for you. Lean parameters keep traffic sources readable.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "analytics-hapus-skrip-yang-tidak-dibaca",
      langs: {
        "id": {
          title: "Hapus Skrip Analitik yang Tidak Pernah Kamu Buka",
          desc: "Pixel yang dasbornya tidak pernah dibuka hanya memperlambat situs Clincoo.",
          content: "<p class=\"mb-4\">Banyak situs Clincoo membawa tiga akun analitik dari template. Dua di antaranya tidak punya login aktif.</p><p class=\"mb-4\">Buka dasbor. Jika kamu tidak masuk seminggu terakhir, cabut skrip dari HTML atau file defer.</p><p class=\"mb-4\">Minta AI menghapus satu blok skrip, bukan rewrite layout. Simpan cadangan sebelum generate.</p><p class=\"mb-4\">Cek Network di pratinjau editor.clincoo.buzz: domain analitik yang mati harus hilang.</p><p class=\"mb-4\">Clincoo men-deploy apa yang tersimpan. Skrip yang tidak dibaca adalah beban, bukan wawasan.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Remove Analytics Scripts You Never Open",
          desc: "A pixel whose dashboard you never open only slows the Clincoo site.",
          content: "<p class=\"mb-4\">Many Clincoo sites inherit three analytics accounts from a template. Two of them have no active login.</p><p class=\"mb-4\">Open the dashboard. If you have not signed in this week, pull the script out of HTML or the deferred file.</p><p class=\"mb-4\">Ask the AI to delete one script block, not rewrite the layout. Keep a backup before generate.</p><p class=\"mb-4\">Check Network in editor.clincoo.buzz preview: dead analytics hosts should be gone.</p><p class=\"mb-4\">Clincoo deploys what you save. A script you never read is weight, not insight.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "analytics-laporan-mingguan-satu-metrik",
      langs: {
        "id": {
          title: "Baca Satu Metrik per Minggu, Bukan Realtime",
          desc: "Dasbor realtime membuat keputusan reaktif. Pilih satu angka dan tinjau setelah situs Clincoo stabil.",
          content: "<p class=\"mb-4\">Realtime menggoda untuk mengubah CTA setiap jam. Situs Clincoo tiga halaman tidak butuh itu.</p><p class=\"mb-4\">Pilih satu metrik: kirim form, klik WhatsApp, atau unduh. Catat angka setiap Senin.</p><p class=\"mb-4\">Jangan minta AI menambah heatmap, session replay, dan A/B sekaligus. Satu event sudah cukup untuk iterasi.</p><p class=\"mb-4\">Setelah deploy di app.clincoo.buzz, biarkan seminggu. Baru ubah salinan atau tombol jika metrik turun.</p><p class=\"mb-4\">Pengukuran di Clincoo adalah alat rilis, bukan hiburan. Ritme mingguan menjaga fokus.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Read One Metric per Week, Not the Realtime View",
          desc: "A realtime dashboard drives reactive edits. Pick one number and review it after the Clincoo site is stable.",
          content: "<p class=\"mb-4\">Realtime tempts you to change the CTA every hour. A three-page Clincoo site does not need that.</p><p class=\"mb-4\">Pick one metric: form submit, WhatsApp click, or download. Write the number down each Monday.</p><p class=\"mb-4\">Do not ask the AI to add a heatmap, session replay, and A/B at once. One event is enough to iterate.</p><p class=\"mb-4\">After deploy on app.clincoo.buzz, wait a week. Only then change copy or the button if the metric dropped.</p><p class=\"mb-4\">Measurement on Clincoo is a release tool, not entertainment. A weekly rhythm keeps focus.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["analytics"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["analytics"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
