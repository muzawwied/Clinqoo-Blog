// Clincoo Blog — Data kategori: pwa
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["pwa"] = {
  names: { "id": "PWA", "en": "PWA" },
  flag: "📳",
  articles: [
    {
      id: "pwa-manifest-nama-ikon",
      langs: {
        "id": {
          title: "Tambah Web App Manifest Nama dan Ikon di Proyek Clincoo",
          desc: "Manifest.json memberi nama, ikon, dan warna tema saat pengunjung memasang situs ke layar beranda.",
          content: "<p class=\"mb-4\">Situs Clincoo yang hanya punya index.html tetap bisa dipasang di ponsel jika kamu menambahkan manifest. Tanpa file itu, browser memakai judul tab dan favicon sembarangan.</p><p class=\"mb-4\">Buat manifest.json di akar proyek: name, short_name, start_url, display standalone, theme_color, dan dua ikon (192 dan 512). tautkan lewat link rel=manifest di head.</p><p class=\"mb-4\">Uji di editor.clincoo.buzz lalu di pratinjau deploy. Ikon harus terlihat di layar beranda, bukan kotak kosong.</p><p class=\"mb-4\">Minta AI hanya menulis manifest dan satu tautan di head. Tolak service worker sekaligus jika kamu belum siap mengurus cache.</p><p class=\"mb-4\">Clincoo menayangkan file statis apa adanya. Manifest adalah pekerjaanmu sebelum mengajak orang memasang situs.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Add a Web App Manifest with Name and Icons in a Clincoo Project",
          desc: "manifest.json supplies the name, icons, and theme color when a visitor installs the site on the home screen.",
          content: "<p class=\"mb-4\">A Clincoo site with only index.html can still be installed on a phone if you add a manifest. Without that file, the browser uses a random tab title and favicon.</p><p class=\"mb-4\">Create manifest.json at the project root: name, short_name, start_url, display standalone, theme_color, and two icons (192 and 512). Link it with rel=manifest in the head.</p><p class=\"mb-4\">Test in editor.clincoo.buzz and on the deploy preview. The icon should appear on the home screen, not as an empty square.</p><p class=\"mb-4\">Ask the AI only to write the manifest and one head link. Refuse a service worker at the same time if you are not ready to manage cache.</p><p class=\"mb-4\">Clincoo ships static files as saved. The manifest is your job before you invite people to install the site.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "pwa-service-worker-cache-hati-hati",
      langs: {
        "id": {
          title: "Pasang Service Worker Cache dengan Hati-hati di Clincoo",
          desc: "Service worker yang cache-all membuat pengunjung melihat versi lama setelah kamu deploy ulang.",
          content: "<p class=\"mb-4\">AI sering menempel service worker yang mengunci semua aset selamanya. Setelah deploy baru di app.clincoo.buzz, ponsel masih menampilkan CSS kemarin.</p><p class=\"mb-4\">Jika kamu memakai SW, cache hanya aset versi (nama file berganti) dan biarkan HTML jaringan-dulu. Sediakan tombol lepas-daftar untuk dirimu sendiri saat uji.</p><p class=\"mb-4\">Uji di pratinjau: ubah teks di index.html, deploy ulang, hard refresh. Jika teks lama tetap muncul, SW menahan cache terlalu agresif.</p><p class=\"mb-4\">Minta AI menulis SW pendek dengan strategi network-first untuk dokumen. Tolak generate yang men-cache seluruh origin.</p><p class=\"mb-4\">Clincoo tidak membatalkan service worker otomatis. Satu file SW yang salah bisa menyembunyikan rilis selama berhari-hari.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Register a Service Worker Cache Carefully on Clincoo",
          desc: "A cache-all service worker leaves visitors on an old version after you deploy again.",
          content: "<p class=\"mb-4\">AI often pastes a service worker that locks every asset forever. After a new deploy from app.clincoo.buzz, phones still show yesterday's CSS.</p><p class=\"mb-4\">If you use a SW, cache only versioned assets (changing file names) and keep HTML network-first. Keep an unregister button for yourself while testing.</p><p class=\"mb-4\">Test in preview: change a line in index.html, redeploy, hard refresh. If the old text stays, the SW is holding cache too hard.</p><p class=\"mb-4\">Ask the AI for a short SW with network-first for documents. Refuse a generate that caches the whole origin.</p><p class=\"mb-4\">Clincoo does not unregister service workers for you. One bad SW file can hide a release for days.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "pwa-https-wajib-sebelum-install",
      langs: {
        "id": {
          title: "Pastikan HTTPS Hidup sebelum Menawarkan Instal PWA Clincoo",
          desc: "Browser menolak service worker dan prompt instal di HTTP biasa. Cek URL deploy dulu.",
          content: "<p class=\"mb-4\">Banyak orang menguji PWA di localhost atau path file://. Perilaku itu tidak sama dengan subdomain HTTPS hasil deploy Clincoo.</p><p class=\"mb-4\">Buka URL publik di app.clincoo.buzz. Pastikan gembok HTTPS ada. Baru daftarkan service worker dan tautkan manifest.</p><p class=\"mb-4\">Campur aset HTTP di halaman HTTPS memicu peringatan mixed content. Ikon dan CSS harus https juga.</p><p class=\"mb-4\">Minta AI tidak menambahkan SW jika kamu masih di pratinjau file lokal. Tulis batas: hanya setelah URL https publik.</p><p class=\"mb-4\">Clincoo menayangkan situs di HTTPS saat deploy. Jangan tawarkan tombol pasang sebelum gembok terlihat.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Confirm HTTPS before You Offer a Clincoo PWA Install",
          desc: "Browsers refuse service workers and the install prompt on plain HTTP. Check the deploy URL first.",
          content: "<p class=\"mb-4\">People often test a PWA on localhost or a file:// path. That is not the same as the HTTPS subdomain from a Clincoo deploy.</p><p class=\"mb-4\">Open the public URL on app.clincoo.buzz. Confirm the HTTPS lock. Only then register a service worker and link the manifest.</p><p class=\"mb-4\">Mixing HTTP assets on an HTTPS page triggers mixed content warnings. Icons and CSS must be https too.</p><p class=\"mb-4\">Ask the AI not to add a SW while you are still on a local file preview. Set the limit: only after a public https URL.</p><p class=\"mb-4\">Clincoo serves the site over HTTPS at deploy. Do not offer an install button before the lock is visible.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "pwa-tombol-install-jangan-maksa",
      langs: {
        "id": {
          title: "Jangan Paksakan Banner Instal PWA di Halaman Clincoo",
          desc: "Prompt beforeinstallprompt hanya muncul jika kriteria browser terpenuhi. Banner palsu merusak kepercayaan.",
          content: "<p class=\"mb-4\">Template kadang menaruh modal Pasang aplikasi ini sekarang di setiap kunjungan. Pengunjung menutupnya dan tidak kembali.</p><p class=\"mb-4\">Tangkap beforeinstallprompt, simpan event, tampilkan tombol kecil setelah pengguna selesai membaca. Jika event tidak datang, sembunyikan tombol.</p><p class=\"mb-4\">Uji di Chrome Android pada URL deploy. Desktop sering tidak menampilkan prompt yang sama.</p><p class=\"mb-4\">Minta AI satu listener dan satu tombol. Tolak popup penuh layar atau timer yang memaksa klik.</p><p class=\"mb-4\">Clincoo tidak memicu instal otomatis. Hormati kriteria browser agar tombol terasa jujur.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Do Not Force a PWA Install Banner on a Clincoo Page",
          desc: "The beforeinstallprompt event fires only when browser criteria are met. A fake banner breaks trust.",
          content: "<p class=\"mb-4\">Templates sometimes drop an Install this app now modal on every visit. Visitors dismiss it and do not return.</p><p class=\"mb-4\">Listen for beforeinstallprompt, store the event, and show a small button after the reader finishes the page. If the event never comes, hide the button.</p><p class=\"mb-4\">Test on Chrome Android against the deploy URL. Desktop often will not show the same prompt.</p><p class=\"mb-4\">Ask the AI for one listener and one button. Refuse a full-screen popup or a timer that forces a click.</p><p class=\"mb-4\">Clincoo does not trigger install by itself. Respect browser criteria so the button feels honest.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "pwa-offline-halaman-cadangan",
      langs: {
        "id": {
          title: "Sediakan Halaman Offline Cadangan untuk Situs Clincoo",
          desc: "Jika service worker aktif, siapkan offline.html singkat agar layar tidak kosong saat jaringan putus.",
          content: "<p class=\"mb-4\">PWA tanpa halaman cadangan menampilkan error browser saat offline. Pengunjung mengira situs rusak.</p><p class=\"mb-4\">Buat offline.html dengan pesan singkat, tautan ke beranda, dan tanpa skrip pihak ketiga. Daftarkan file itu di cache SW.</p><p class=\"mb-4\">Uji dengan mematikan jaringan di DevTools lalu memuat ulang. Pesan harus milikmu, bukan halaman dinosaurus default.</p><p class=\"mb-4\">Minta AI menulis satu file cadangan dan satu baris di SW. Jangan biarkan ia menyalin seluruh situs ke cache.</p><p class=\"mb-4\">Clincoo tidak membuat mode offline otomatis. Satu halaman jujur lebih baik daripada layar gagal.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Provide an Offline Fallback Page for a Clincoo Site",
          desc: "If a service worker is active, keep a short offline.html so the screen is not blank when the network drops.",
          content: "<p class=\"mb-4\">A PWA without a fallback shows a browser error when offline. Visitors think the site is broken.</p><p class=\"mb-4\">Create offline.html with a short message, a home link, and no third-party scripts. Register that file in the SW cache.</p><p class=\"mb-4\">Test by turning the network off in DevTools and reloading. The message should be yours, not the default dinosaur page.</p><p class=\"mb-4\">Ask the AI for one fallback file and one line in the SW. Do not let it copy the whole site into cache.</p><p class=\"mb-4\">Clincoo does not invent offline mode for you. One honest page is better than a failed screen.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ]
};
