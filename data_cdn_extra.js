// Clincoo Blog — artikel cdn tambahan 2026-09-28
(function(){
  var extra = [
    {
      id: "cdn-purge-cache-setelah-deploy",
      langs: {
        "id": {
          title: 'Purge Cache CDN Setelah Deploy Situs Clincoo',
          desc: 'File baru sudah di origin, pengunjung masih melihat versi lama. Purge path yang berubah, jangan tebak.',
          content: '<p class="mb-4">Deploy ke origin selesai, tapi app.clincoo.buzz masih menayangkan CSS kemarin. Edge CDN menahan salinan sampai TTL habis atau kamu purge.</p><p class="mb-4">Catat daftar path yang berubah: HTML, CSS, JS, dan gambar hero. Purge path itu satu per satu di panel CDN, bukan tombol flush seluruh zona tanpa catatan.</p><p class="mb-4">HTML sebaiknya TTL pendek. Aset berhash jarang perlu purge. Kalau kamu mengganti file tanpa ganti nama, purge wajib.</p><p class="mb-4">Minta AI menyusun checklist purge dari diff Git. Tempel daftar file yang berubah di editor.clincoo.buzz.</p><p class="mb-4">Uji dengan jendela penyamaran setelah purge. Jangan percaya cache browser sendiri.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: 'Purge the CDN Cache After Deploying a Clincoo Site',
          desc: 'The origin already has new files, visitors still see the old version. Purge the paths that changed; do not guess.',
          content: '<p class="mb-4">The origin deploy is done, but app.clincoo.buzz still serves yesterday\'s CSS. The CDN edge keeps a copy until TTL ends or you purge.</p><p class="mb-4">List the paths that changed: HTML, CSS, JS, and the hero image. Purge those paths one by one in the CDN panel, not a silent whole-zone flush.</p><p class="mb-4">Keep HTML on a short TTL. Hashed assets rarely need a purge. If you overwrite a file without renaming it, purge is required.</p><p class="mb-4">Ask AI to build a purge checklist from the Git diff. Paste the changed file list in editor.clincoo.buzz.</p><p class="mb-4">Test in a private window after the purge. Do not trust your own browser cache.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cdn-header-cors-font-stylesheet",
      langs: {
        "id": {
          title: 'Setel Header CORS Font dan Stylesheet di CDN',
          desc: 'Font dari host CDN gagal di halaman Clincoo. Tambah Access-Control-Allow-Origin pada file font.',
          content: '<p class="mb-4">Browser memuat halaman dari app.clincoo.buzz lalu meminta .woff2 di host CDN lain. Tanpa CORS, font diblokir dan fallback jelek.</p><p class="mb-4">Set Access-Control-Allow-Origin ke origin situs, atau * hanya jika font memang publik. Sertakan header pada .woff, .woff2, dan .css yang @font-face.</p><p class="mb-4">Cek Network: status 200 tapi file font bertanda CORS error. Perbaiki di CDN, bukan dengan menyalin font ke setiap halaman.</p><p class="mb-4">Minta AI menulis contoh header CDN untuk font. Tempel URL font yang gagal dari konsol.</p><p class="mb-4">Uji ulang di editor.clincoo.buzz setelah header hidup. Judul dan isi harus memakai keluarga font yang kamu pilih.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: 'Set CORS Headers for Fonts and Stylesheets on the CDN',
          desc: 'Fonts from a CDN host fail on a Clincoo page. Add Access-Control-Allow-Origin on font files.',
          content: '<p class="mb-4">The browser loads the page from app.clincoo.buzz then requests a .woff2 on another CDN host. Without CORS, the font is blocked and the fallback looks poor.</p><p class="mb-4">Set Access-Control-Allow-Origin to the site origin, or * only if the font is truly public. Apply the header to .woff, .woff2, and the CSS that declares @font-face.</p><p class="mb-4">Check Network: status 200 but the font shows a CORS error. Fix it on the CDN instead of copying fonts into every page.</p><p class="mb-4">Ask AI for a sample CDN header set for fonts. Paste the failing font URL from the console.</p><p class="mb-4">Retest in editor.clincoo.buzz after the header is live. Headings and body should use the family you chose.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cdn-sri-skrip-pihak-ketiga",
      langs: {
        "id": {
          title: 'Pakai Subresource Integrity untuk Skrip dari CDN Pihak Ketiga',
          desc: 'Skrip CDN bisa berubah tanpa kabar. Atribut integrity menolak file yang hash-nya tidak cocok.',
          content: '<p class="mb-4">Halaman Clincoo memuat library dari CDN publik. Jika file di-host diganti, pengunjung menjalankan kode yang bukan milikmu.</p><p class="mb-4">Tambah integrity=\"sha384-...\" dan crossorigin=\"anonymous\" pada tag script atau link. Generate hash dari file yang kamu pin.</p><p class="mb-4">Jika CDN merilis versi baru, hash lama gagal dengan sengaja. Itu sinyal untuk menaikkan versi, bukan menonaktifkan SRI.</p><p class="mb-4">Minta AI menghitung SRI dari isi file. Jangan menempel hash dari artikel acak tanpa memeriksa file.</p><p class="mb-4">Simpan versi library di catatan proyek editor.clincoo.buzz. app.clincoo.buzz harus memuat hash yang sama.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: 'Use Subresource Integrity for Third-Party CDN Scripts',
          desc: 'A CDN script can change without notice. The integrity attribute rejects a file whose hash does not match.',
          content: '<p class="mb-4">A Clincoo page loads a library from a public CDN. If the hosted file is swapped, visitors run code that is not yours.</p><p class="mb-4">Add integrity=\"sha384-...\" dan crossorigin=\"anonymous\" on the script or link tag. Generate the hash from the file you pinned.</p><p class="mb-4">When the CDN ships a new version, the old hash fails on purpose. That is a cue to bump the version, not to drop SRI.</p><p class="mb-4">Ask AI to compute SRI from the file bytes. Do not paste a hash from a random article without checking the file.</p><p class="mb-4">Record the library version in the editor.clincoo.buzz project notes. app.clincoo.buzz must load the same hash.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cdn-gambar-ukuran-dan-format",
      langs: {
        "id": {
          title: 'Kirim Gambar Ukuran dan Format Tepat lewat CDN',
          desc: 'Hero 4000px di ponsel memboros kuota. Minta CDN meresize dan pilih WebP atau AVIF.',
          content: '<p class="mb-4">Pengunjung Clincoo di jaringan lambat menunggu foto produk penuh. CDN bisa memotong lebar sesuai parameter URL.</p><p class="mb-4">Unggah master sekali di origin. Pakai srcset atau parameter lebar CDN. Jangan unggah lima salinan manual tanpa nama jelas.</p><p class="mb-4">Prefer format modern jika browser mengirim Accept. Sediakan JPEG/PNG cadangan. Set Cache-Control panjang pada hasil transformasi yang URL-nya unik.</p><p class="mb-4">Minta AI merancang srcset dari lebar layout. Tempel ukuran slot gambar di editor.clincoo.buzz.</p><p class="mb-4">Ukur transfer di Network. Jika hero masih puluhan megabita, aturan gambar belum sampai ke app.clincoo.buzz.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: 'Serve the Right Image Size and Format through the CDN',
          desc: 'A 4000px hero on a phone wastes data. Ask the CDN to resize and pick WebP or AVIF.',
          content: '<p class="mb-4">Clincoo visitors on a slow network wait for a full product photo. A CDN can crop width from a URL parameter.</p><p class="mb-4">Upload one master on the origin. Use srcset or a CDN width parameter. Do not upload five manual copies with unclear names.</p><p class="mb-4">Prefer a modern format when the browser sends Accept. Keep JPEG/PNG as fallback. Set a long Cache-Control on transforms whose URLs are unique.</p><p class="mb-4">Ask AI to design srcset from the layout widths. Paste the image slot sizes in editor.clincoo.buzz.</p><p class="mb-4">Measure transfer in Network. If the hero is still tens of megabytes, the image rule never reached app.clincoo.buzz.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cdn-preconnect-host-aset",
      langs: {
        "id": {
          title: 'Tambah Preconnect ke Host CDN Aset Clincoo',
          desc: 'DNS dan TLS ke host CDN menambah ratusan milidetik. Preconnect di head memulai handshake lebih awal.',
          content: '<p class="mb-4">HTML Clincoo di origin, CSS dan font di host CDN. Browser baru mulai handshake setelah parser melihat URL aset.</p><p class="mb-4">Pasang link rel=preconnect ke host CDN di head. Hanya untuk host yang benar-benar dipakai di halaman pertama.</p><p class="mb-4">Jangan preconnect sepuluh host. Tiap koneksi memakan soket. dns-prefetch cukup untuk host yang jarang.</p><p class="mb-4">Minta AI meninjau head dan menandai host yang layak preconnect. Tempel HTML head dari editor.clincoo.buzz.</p><p class="mb-4">Uji Waterfall di DevTools. Handshake CDN harus mulai sebelum permintaan file pertama di app.clincoo.buzz.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: 'Add Preconnect to the Clincoo Asset CDN Host',
          desc: 'DNS and TLS to a CDN host add hundreds of milliseconds. Preconnect in the head starts the handshake earlier.',
          content: '<p class="mb-4">Clincoo HTML lives on the origin; CSS and fonts live on a CDN host. The browser starts the handshake only after the parser sees an asset URL.</p><p class="mb-4">Put link rel=preconnect to the CDN host in the head. Only for hosts the first page actually uses.</p><p class="mb-4">Do not preconnect ten hosts. Each connection spends a socket. dns-prefetch is enough for rare hosts.</p><p class="mb-4">Ask AI to review the head and mark hosts worth a preconnect. Paste the head HTML from editor.clincoo.buzz.</p><p class="mb-4">Check the DevTools waterfall. The CDN handshake should start before the first file request on app.clincoo.buzz.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["cdn"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["cdn"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
