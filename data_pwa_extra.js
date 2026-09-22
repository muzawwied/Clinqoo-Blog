// Clincoo Blog — artikel pwa tambahan 2026-09-22 WIB
(function(){
  var extra = [
    {
      id: "pwa-display-standalone-bukan-fullscreen",
      langs: {
        "id": {
          title: "Pakai display standalone, Bukan fullscreen, di Manifest Clincoo",
          desc: "fullscreen menyembunyikan kontrol sistem. standalone tetap terasa seperti aplikasi tanpa menjebak pengguna.",
          content: "<p class=\"mb-4\">AI sering menulis display fullscreen di manifest.json. Di Android, bilah status dan gestur kembali sulit dilihat; pengunjung mengira situs mengunci ponsel.</p><p class=\"mb-4\">Isi field display dengan standalone. start_url mengarah ke index.html proyek Clincoo. theme_color selaras dengan header situs.</p><p class=\"mb-4\">Uji di pratinjau deploy app.clincoo.buzz: pasang ke layar beranda, buka, pastikan gestur sistem masih hidup.</p><p class=\"mb-4\">Minta AI hanya mengubah satu baris display. Tolak generate yang menambahkan orientation lock sekaligus.</p><p class=\"mb-4\">Clincoo menayangkan file statis. Pilihan display adalah keputusan UX-mu, bukan default template.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Use display standalone, Not fullscreen, in a Clincoo Manifest",
          desc: "fullscreen hides system controls. standalone still feels like an app without trapping the user.",
          content: "<p class=\"mb-4\">AI often writes display fullscreen in manifest.json. On Android, the status bar and back gesture are hard to see; visitors think the site locked the phone.</p><p class=\"mb-4\">Set display to standalone. Point start_url at the Clincoo project's index.html. Match theme_color to the site header.</p><p class=\"mb-4\">Test on the app.clincoo.buzz deploy preview: install to the home screen, open it, and confirm system gestures still work.</p><p class=\"mb-4\">Ask the AI to change only the display line. Refuse a generate that also adds an orientation lock.</p><p class=\"mb-4\">Clincoo ships static files. Display is your UX choice, not a template default.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "pwa-versi-nama-cache-saat-update",
      langs: {
        "id": {
          title: "Ganti Nama Cache Service Worker saat Rilis Clincoo Baru",
          desc: "Cache dengan nama tetap menahan aset lama. Naikkan versi cache setiap deploy agar HTML baru tampil.",
          content: "<p class=\"mb-4\">Setelah kamu memperbaiki CSS di editor.clincoo.buzz dan deploy ulang, ponsel masih memuat style kemarin karena CACHE_NAME tidak berubah.</p><p class=\"mb-4\">Pakai nama cache berversi, misalnya clincoo-v20260922. Di event activate, hapus cache lama yang tidak cocok.</p><p class=\"mb-4\">Uji: ubah satu teks di index.html, ganti CACHE_NAME, deploy, buka ulang PWA tanpa hard refresh paksa. Teks baru harus muncul.</p><p class=\"mb-4\">Minta AI menulis skipWaiting dan clients.claim hanya jika kamu paham efeknya. Jangan biarkan cache-all tanpa versi.</p><p class=\"mb-4\">Clincoo tidak mem-bust service worker. Nama cache adalah tuas rilis yang kamu pegang.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Bump the Service Worker Cache Name on Each Clincoo Release",
          desc: "A fixed cache name holds old assets. Version the cache on every deploy so new HTML appears.",
          content: "<p class=\"mb-4\">After you fix CSS in editor.clincoo.buzz and redeploy, phones still load yesterday's style because CACHE_NAME never changed.</p><p class=\"mb-4\">Use a versioned cache name such as clincoo-v20260922. In the activate event, delete caches that do not match.</p><p class=\"mb-4\">Test: change one line in index.html, bump CACHE_NAME, deploy, reopen the PWA without a forced hard refresh. The new text should show.</p><p class=\"mb-4\">Ask the AI for skipWaiting and clients.claim only if you understand the effect. Do not allow cache-all without a version.</p><p class=\"mb-4\">Clincoo does not bust service workers for you. The cache name is the release lever you hold.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "pwa-ikon-maskable-aman-dipotong",
      langs: {
        "id": {
          title: "Sediakan Ikon Maskable agar Logo Clincoo Tidak Terpotong",
          desc: "Ikon biasa dipotong jadi lingkaran di Android. purpose maskable menjaga logo tetap utuh.",
          content: "<p class=\"mb-4\">Logo kotak di tengah file 512px sering kehilangan sudut saat Android memotong ikon adaptif. Layar beranda menampilkan huruf terpotong.</p><p class=\"mb-4\">Buat ikon 512 dengan padding aman 20 persen di tepi. Di manifest, tambah purpose maskable pada satu entri icons.</p><p class=\"mb-4\">Uji di Chrome Android pada URL HTTPS deploy Clincoo. Bandingkan ikon any dan maskable di Application panel DevTools.</p><p class=\"mb-4\">Minta AI tidak menimpa logo.png merek. Beri path file ikon yang sudah kamu siapkan di workspace.</p><p class=\"mb-4\">Clincoo menayangkan berkas yang kamu unggah. Maskable adalah pekerjaan aset, bukan keajaiban manifest.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Provide a Maskable Icon so the Clincoo Logo Is Not Cropped",
          desc: "A plain icon is cropped into a circle on Android. purpose maskable keeps the logo intact.",
          content: "<p class=\"mb-4\">A square logo centered in a 512px file often loses its corners when Android crops an adaptive icon. The home screen shows clipped letters.</p><p class=\"mb-4\">Make a 512 icon with about 20 percent safe padding at the edges. In the manifest, add purpose maskable on one icons entry.</p><p class=\"mb-4\">Test on Chrome Android against the Clincoo HTTPS deploy URL. Compare any versus maskable icons in the DevTools Application panel.</p><p class=\"mb-4\">Do not let the AI overwrite brand logo.png. Give the path of the icon file you already put in the workspace.</p><p class=\"mb-4\">Clincoo serves the files you upload. Maskable is an asset job, not manifest magic.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "pwa-start-url-dan-scope-selaras",
      langs: {
        "id": {
          title: "Samakan start_url dan scope Manifest dengan Folder Proyek Clincoo",
          desc: "start_url di luar scope membuat PWA membuka tab biasa. Path harus konsisten dengan letak index.html.",
          content: "<p class=\"mb-4\">Template menaruh start_url /app/ sementara situs Clincoo hidup di akar subdomain. Setelah dipasang, ikon membuka 404.</p><p class=\"mb-4\">Set start_url ke ./ atau /index.html sesuai folder proyek. scope harus mencakup path itu, biasanya /.</p><p class=\"mb-4\">Uji tautan dalam PWA: dari beranda ke halaman harga harus tetap di jendela standalone, bukan tab browser baru.</p><p class=\"mb-4\">Minta AI menyesuaikan dua field itu saja. Tolak scope sempit yang memotong folder blog atau legal.</p><p class=\"mb-4\">Clincoo memakai path file apa adanya. Manifest yang salah scope mematahkan instal yang sudah berhasil.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Keep Manifest start_url and scope Aligned with the Clincoo Project Folder",
          desc: "A start_url outside scope opens a normal tab. Paths must match where index.html lives.",
          content: "<p class=\"mb-4\">Templates put start_url at /app/ while the Clincoo site lives at the subdomain root. After install, the icon opens a 404.</p><p class=\"mb-4\">Set start_url to ./ or /index.html for the project folder. scope must cover that path, usually /.</p><p class=\"mb-4\">Test in-PWA links: from home to a pricing page should stay in the standalone window, not a new browser tab.</p><p class=\"mb-4\">Ask the AI to adjust only those two fields. Refuse a narrow scope that cuts off blog or legal folders.</p><p class=\"mb-4\">Clincoo uses file paths as saved. A wrong-scope manifest breaks an install that already worked.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "pwa-theme-color-status-bar",
      langs: {
        "id": {
          title: "Setel theme_color Manifest agar Status Bar PWA Clincoo Selaras",
          desc: "theme_color kosong memakai chrome browser. Samakan dengan header agar jendela terasa satu merek.",
          content: "<p class=\"mb-4\">PWA terpasang menampilkan bilah status putih sementara header situs hijau Clincoo. Jendela terasa seperti dua aplikasi.</p><p class=\"mb-4\">Isi theme_color dan background_color di manifest.json dengan token merek yang sama dipakai di CSS header.</p><p class=\"mb-4\">Uji di ponsel setelah install dari URL deploy. Warna bilah harus cocok saat splash dan saat halaman pertama tampil.</p><p class=\"mb-4\">Minta AI menyalin hex dari variabel CSS yang sudah ada. Jangan biarkan ia memilih warna acak dari template.</p><p class=\"mb-4\">Clincoo tidak menyuntik theme_color otomatis. Satu hex di manifest menjaga status bar tidak memecah merek.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Set Manifest theme_color so the Clincoo PWA Status Bar Matches",
          desc: "An empty theme_color uses browser chrome. Match the header so the window feels like one brand.",
          content: "<p class=\"mb-4\">An installed PWA shows a white status bar while the site header is Clincoo green. The window feels like two apps.</p><p class=\"mb-4\">Set theme_color and background_color in manifest.json to the same brand token used in the header CSS.</p><p class=\"mb-4\">Test on a phone after install from the deploy URL. The bar color should match on splash and on the first page.</p><p class=\"mb-4\">Ask the AI to copy the hex from an existing CSS variable. Do not let it pick a random template color.</p><p class=\"mb-4\">Clincoo does not inject theme_color for you. One hex in the manifest keeps the status bar from splitting the brand.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["pwa"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["pwa"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
