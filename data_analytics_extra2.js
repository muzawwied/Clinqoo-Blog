// Clincoo Blog — artikel analytics tambahan 2026-09-22
(function(){
  var extra = [
    {
      id: "analytics-404-sebagai-sinyal",
      langs: {
        "id": {
          title: "Catat Halaman 404 sebagai Sinyal, Bukan Noise",
          desc: "404 yang tidak diukur menyembunyikan tautan rusak. Kirim satu event saat template error tampil.",
          content: "<p class=\"mb-4\">Situs Clincoo statis tetap bisa menampilkan 404.html. Tanpa event, kamu tidak tahu tautan mana yang pecah setelah rilis.</p><p class=\"mb-4\">Tambah satu event bernama page_not_found saat template 404 dimuat. Sertakan path yang diminta, bukan hanya judul generik.</p><p class=\"mb-4\">Jangan minta AI menanam tracker di setiap folder. Satu file 404 plus satu baris event sudah cukup.</p><p class=\"mb-4\">Uji di pratinjau editor.clincoo.buzz: buka path acak, pastikan event muncul, lalu perbaiki tautan sumber.</p><p class=\"mb-4\">Clincoo men-deploy file apa adanya. 404 yang terukur mempercepat perbaikan sebelum pengunjung pergi.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Log 404 Pages as a Signal, Not Noise",
          desc: "Unmeasured 404s hide broken links. Fire one event when the error template shows.",
          content: "<p class=\"mb-4\">A static Clincoo site still serves 404.html. Without an event you never learn which link broke after release.</p><p class=\"mb-4\">Add one event named page_not_found when the 404 template loads. Include the requested path, not only a generic title.</p><p class=\"mb-4\">Do not ask the AI to plant a tracker in every folder. One 404 file plus one event line is enough.</p><p class=\"mb-4\">Test in editor.clincoo.buzz preview: open a random path, confirm the event, then fix the source link.</p><p class=\"mb-4\">Clincoo deploys files as saved. A measured 404 speeds the fix before visitors leave.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "analytics-referrer-internal-vs-luar",
      langs: {
        "id": {
          title: "Pisahkan Referrer Internal dan Lalu Lintas Luar",
          desc: "Laporan campur membuat sumber kunjungan kabur. Filter host sendiri sebelum membaca dasbor.",
          content: "<p class=\"mb-4\">app.clincoo.buzz, editor.clincoo.buzz, dan blog.clincoo.buzz sering muncul sebagai referrer. Itu navigasi sendiri, bukan kampanye.</p><p class=\"mb-4\">Di dasbor, kecualikan host Clincoo milikmu. Sisakan mesin cari, media sosial, dan tautan eksternal.</p><p class=\"mb-4\">Jika AI menulis filter rumit, minta satu daftar hostname saja. Jangan rewrite seluruh skrip pengukuran.</p><p class=\"mb-4\">Setelah deploy, buka satu tautan internal lalu satu tautan dari catatan. Pastikan hanya yang kedua masuk laporan sumber.</p><p class=\"mb-4\">Pengukuran Clincoo berguna jika referrer membedakan pengunjung baru dari kamu yang sedang menguji.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Separate Internal Referrers from Outside Traffic",
          desc: "A mixed report blurs traffic sources. Filter your own hosts before you read the dashboard.",
          content: "<p class=\"mb-4\">app.clincoo.buzz, editor.clincoo.buzz, and blog.clincoo.buzz often show up as referrers. That is your own navigation, not a campaign.</p><p class=\"mb-4\">In the dashboard, exclude your Clincoo hosts. Keep search, social, and true external links.</p><p class=\"mb-4\">If the AI writes a complex filter, ask for one hostname list. Do not rewrite the whole measurement script.</p><p class=\"mb-4\">After deploy, follow one internal link and one link from your notes. Only the second should appear as a source.</p><p class=\"mb-4\">Measurement on Clincoo helps when referrers distinguish new visitors from you testing the site.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "analytics-filter-bot-dan-pratinjau",
      langs: {
        "id": {
          title: "Saring Bot dan Hit Pratinjau dari Laporan Clincoo",
          desc: "Crawler dan reload editor menggembungkan angka. Filter user-agent plus host pratinjau.",
          content: "<p class=\"mb-4\">Setelah rilis di app.clincoo.buzz, crawler indexing dan reload pratinjau bisa mengisi pageview dalam semalam.</p><p class=\"mb-4\">Aktifkan filter bot di dasbor. Tambah aturan: hostname editor atau pages.dev pratinjau tidak dihitung produksi.</p><p class=\"mb-4\">Jangan minta AI menambah library deteksi bot di klien. Filter server-side atau pengaturan dasbor lebih ringan.</p><p class=\"mb-4\">Bandingkan seminggu sebelum dan sesudah filter. Jika angka turun tajam, itu noise yang berhasil dibuang.</p><p class=\"mb-4\">Clincoo tidak membedakan bot untukmu. Laporan yang bersih dimulai dari filter yang sadar.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Filter Bots and Preview Hits from Clincoo Reports",
          desc: "Crawlers and editor reloads inflate the numbers. Filter user-agents plus the preview host.",
          content: "<p class=\"mb-4\">After a release on app.clincoo.buzz, indexing crawlers and preview reloads can fill pageviews overnight.</p><p class=\"mb-4\">Turn on the dashboard bot filter. Add a rule: editor or preview pages.dev hosts do not count as production.</p><p class=\"mb-4\">Do not ask the AI to ship a client-side bot library. A dashboard rule or server-side filter is lighter.</p><p class=\"mb-4\">Compare a week before and after the filter. A sharp drop is noise you successfully removed.</p><p class=\"mb-4\">Clincoo does not separate bots for you. A clean report starts with a conscious filter.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "analytics-event-form-sukses-bukan-klik-submit",
      langs: {
        "id": {
          title: "Ukur Form Sukses, Bukan Klik Tombol Kirim",
          desc: "Klik submit termasuk percobaan gagal. Event hanya setelah validasi lolos atau redirect terima kasih.",
          content: "<p class=\"mb-4\">AI sering menempel listener pada tombol kirim. Setiap klik kosong tercatat sebagai konversi.</p><p class=\"mb-4\">Pasang event setelah form lolos validasi, atau di halaman terima kasih. Nama event: form_success, bukan click_submit.</p><p class=\"mb-4\">Minta AI menyentuh satu handler. Tolak skrip yang menghitung setiap input sebagai event.</p><p class=\"mb-4\">Uji dua jalur di pratinjau: kirim kosong (tidak ada event) dan kirim valid (satu event).</p><p class=\"mb-4\">Di Clincoo, konversi adalah hasil, bukan niat. Event sukses menjaga laporan tetap jujur.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Measure Successful Forms, Not Submit Clicks",
          desc: "Submit clicks include failed attempts. Fire the event only after validation or the thank-you redirect.",
          content: "<p class=\"mb-4\">AI often attaches a listener to the submit button. Empty clicks then count as conversions.</p><p class=\"mb-4\">Fire the event after the form passes validation, or on the thank-you page. Name it form_success, not click_submit.</p><p class=\"mb-4\">Ask the AI to touch one handler. Refuse a script that treats every input as an event.</p><p class=\"mb-4\">Test two paths in preview: empty submit (no event) and a valid submit (one event).</p><p class=\"mb-4\">On Clincoo, conversion is an outcome, not an intention. A success event keeps the report honest.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "analytics-id-pengukuran-satu-file",
      langs: {
        "id": {
          title: "Simpan ID Pengukuran di Satu File Konfigurasi",
          desc: "ID pixel yang tersebar di banyak HTML sulit diganti. Satu file config mencegah salah akun.",
          content: "<p class=\"mb-4\">Template Clincoo sering menempel ID Google atau Meta di setiap halaman. Ganti akun berarti sunting puluhan file.</p><p class=\"mb-4\">Pindahkan ID ke satu file, misalnya analytics-config.js. Halaman lain hanya memanggil file itu.</p><p class=\"mb-4\">Jika AI menyalin snippet utuh ke index, minta ia mengekstrak ID. Jangan biarkan tiga nilai berbeda hidup bersamaan.</p><p class=\"mb-4\">Setelah deploy di app.clincoo.buzz, cek Network: semua halaman harus memakai ID yang sama.</p><p class=\"mb-4\">Clincoo tidak menyimpan rahasia analitik. Satu sumber ID menjaga laporan tetap satu proyek.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Keep the Measurement ID in One Config File",
          desc: "Pixel IDs scattered across HTML are hard to change. One config file prevents the wrong account.",
          content: "<p class=\"mb-4\">Clincoo templates often paste a Google or Meta ID on every page. Changing accounts then means editing dozens of files.</p><p class=\"mb-4\">Move the ID into one file, for example analytics-config.js. Other pages only load that file.</p><p class=\"mb-4\">If the AI pastes a full snippet into index, ask it to extract the ID. Do not let three different values live at once.</p><p class=\"mb-4\">After deploy on app.clincoo.buzz, check Network: every page should use the same ID.</p><p class=\"mb-4\">Clincoo does not store analytics secrets. One ID source keeps the report as one project.</p>",
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
