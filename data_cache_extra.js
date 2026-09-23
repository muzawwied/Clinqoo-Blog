// Clincoo Blog — artikel cache tambahan 2026-09-23
(function(){
  var extra = [
    {
      id: "cache-hapus-service-worker-lama",
      langs: {
        "id": {
          title: "Hapus Service Worker Lama setelah Rilis Situs Clincoo",
          desc: "Worker usang menahan HTML dan CSS kemarin. Unregister atau ganti nama cache saat activate.",
          content: "<p class=\"mb-4\">Setelah publish dari app.clincoo.buzz, sebagian pengunjung masih mendapat shell PWA lama karena service worker tidak pernah diganti.</p><p class=\"mb-4\">Di event activate, hapus cache yang namanya bukan versi sekarang. Jika PWA tidak lagi dipakai, unregister worker di halaman pengaturan atau skrip sekali jalan.</p><p class=\"mb-4\">Jangan biarkan skipWaiting tanpa rencana. Pengunjung yang tab-nya terbuka lama bisa mencampur aset dua rilis.</p><p class=\"mb-4\">Cek Application > Service Workers di DevTools setelah kunjungan pertama. Status harus idle pada skrip versi baru.</p><p class=\"mb-4\">Clincoo tidak menonaktifkan worker untukmu. Membersihkan worker membuat perbaikan CSS terlihat di kunjungan berikutnya.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Remove an Old Service Worker after a Clincoo Release",
          desc: "A stale worker keeps yesterday’s HTML and CSS. Unregister it or rename the cache on activate.",
          content: "<p class=\"mb-4\">After a publish from app.clincoo.buzz, some visitors still get the old PWA shell because the service worker never changed.</p><p class=\"mb-4\">In the activate event, delete caches whose names are not the current version. If you no longer ship a PWA, unregister the worker from a settings page or a one-shot script.</p><p class=\"mb-4\">Do not call skipWaiting with no plan. A tab left open can mix assets from two releases.</p><p class=\"mb-4\">Check Application > Service Workers in DevTools after the first visit. Status should be idle on the new script.</p><p class=\"mb-4\">Clincoo does not disable the worker for you. Clearing it makes a CSS fix show on the next visit.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cache-stale-while-revalidate-css",
      langs: {
        "id": {
          title: "Pakai Stale-While-Revalidate untuk CSS Clincoo yang Sering Berubah",
          desc: "Cache-first murni menahan stylesheet lama. SWR menampilkan salinan cepat lalu memperbarui di latar.",
          content: "<p class=\"mb-4\">Tema Clincoo yang kamu sunting tiap minggu tidak cocok di-cache sebulan penuh tanpa validasi.</p><p class=\"mb-4\">Header Cache-Control: max-age=60, stale-while-revalidate=86400 memberi CSS cepat dari cache, lalu CDN memeriksa versi baru.</p><p class=\"mb-4\">Service worker bisa meniru pola itu: jawab dari cache, fetch jaringan, simpan hasil baru. HTML tetap network-first.</p><p class=\"mb-4\">Uji di Network DevTools setelah simpan di editor.clincoo.buzz: permintaan kedua boleh 200 dari cache sambil revalidasi berjalan.</p><p class=\"mb-4\">Clincoo tidak menulis header CDN. SWR menjaga halaman terasa cepat tanpa mengunci perbaikan seminggu.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Stale-While-Revalidate for Clincoo CSS that Changes Often",
          desc: "Pure cache-first holds an old stylesheet. SWR shows a fast copy then updates in the background.",
          content: "<p class=\"mb-4\">A Clincoo theme you edit every week should not sit in cache for a month with no revalidation.</p><p class=\"mb-4\">Cache-Control: max-age=60, stale-while-revalidate=86400 serves CSS fast from cache, then the CDN checks for a new version.</p><p class=\"mb-4\">A service worker can mirror that pattern: reply from cache, fetch the network, store the new result. Keep HTML network-first.</p><p class=\"mb-4\">Check Network in DevTools after a save in editor.clincoo.buzz: the second request may be a cached 200 while revalidation runs.</p><p class=\"mb-4\">Clincoo does not write CDN headers. SWR keeps the page feeling fast without locking a fix for a week.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cache-header-immutable-font",
      langs: {
        "id": {
          title: "Tandai Font Clincoo sebagai Immutable jika Namanya Berhash",
          desc: "Font jarang berubah. Header immutable mengurangi permintaan ulang yang sia-sia.",
          content: "<p class=\"mb-4\">Setiap kunjungan halaman Clincoo sering memicu GET font lagi meskipun file tidak pernah berubah.</p><p class=\"mb-4\">Jika berkas memakai nama berhash, set Cache-Control: public, max-age=31536000, immutable pada .woff2.</p><p class=\"mb-4\">Jangan memakai immutable pada file tanpa hash. Perubahan isi dengan nama sama akan tersembunyi setahun.</p><p class=\"mb-4\">Pastikan font-display swap agar teks Clincoo tetap terbaca saat cache kosong. Uji di tab Network setelah hard refresh.</p><p class=\"mb-4\">Clincoo hanya menautkan file yang kamu unggah. Immutable plus hash membuat tipografi cepat tanpa risiko stale.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Mark Clincoo Fonts Immutable when the Filename is Hashed",
          desc: "Fonts rarely change. An immutable header cuts useless repeat requests.",
          content: "<p class=\"mb-4\">Every visit to a Clincoo page often triggers another font GET even though the file never changed.</p><p class=\"mb-4\">If the file uses a hashed name, set Cache-Control: public, max-age=31536000, immutable on .woff2.</p><p class=\"mb-4\">Do not use immutable on a file without a hash. A content change under the same name would hide for a year.</p><p class=\"mb-4\">Keep font-display swap so Clincoo text still reads when the cache is empty. Check the Network tab after a hard refresh.</p><p class=\"mb-4\">Clincoo only links the files you upload. Immutable plus a hash makes type fast without a stale risk.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cache-network-first-dokumen",
      langs: {
        "id": {
          title: "Pakai Network-First untuk Dokumen HTML Situs Clincoo",
          desc: "Cache-first pada dokumen menampilkan beranda kemarin. Ambil jaringan dulu, cache sebagai cadangan.",
          content: "<p class=\"mb-4\">Service worker yang memperlakukan index.html seperti gambar membuat judul baru dari editor.clincoo.buzz tidak muncul.</p><p class=\"mb-4\">Untuk request mode navigate atau destination document, coba jaringan dengan timeout singkat. Jika gagal, jatuhkan ke cache cadangan.</p><p class=\"mb-4\">Jangan menyimpan respons error 5xx ke cache dokumen. Pengunjung akan melihat halaman rusak berulang.</p><p class=\"mb-4\">Uji offline dan online bergantian di Application DevTools setelah publish dari app.clincoo.buzz.</p><p class=\"mb-4\">Clincoo merender HTML statis. Network-first menjaga rilis baru menang, offline tetap punya cadangan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Network-First for HTML Documents on a Clincoo Site",
          desc: "Cache-first on documents shows yesterday’s home page. Hit the network first, cache only as fallback.",
          content: "<p class=\"mb-4\">A service worker that treats index.html like an image hides a new title from editor.clincoo.buzz.</p><p class=\"mb-4\">For navigate requests or document destinations, try the network with a short timeout. On failure, fall back to the cached copy.</p><p class=\"mb-4\">Do not store a 5xx error in the document cache. Visitors would see the broken page again and again.</p><p class=\"mb-4\">Toggle offline and online in Application DevTools after a publish from app.clincoo.buzz.</p><p class=\"mb-4\">Clincoo renders static HTML. Network-first lets a new release win while offline still has a fallback.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cache-ukur-cache-storage-devtools",
      langs: {
        "id": {
          title: "Ukur Cache Storage di DevTools sebelum Situs Clincoo Membengkak",
          desc: "Precache yang tidak dikontrol memenuhi kuota seluler. Cek ukuran dan hapus versi lama.",
          content: "<p class=\"mb-4\">Galeri Clincoo yang masuk precache membuat Cache Storage mencapai puluhan megabyte tanpa kamu sadari.</p><p class=\"mb-4\">Buka Application > Cache Storage. Catat nama cache dan perkiraan ukuran setelah kunjungan pertama dan setelah tiga rilis.</p><p class=\"mb-4\">Jika kuota hampir penuh, browser bisa menolak cache baru atau menghapus yang lama secara acak. Itu merusak offline page.</p><p class=\"mb-4\">Batasi daftar precache dan hapus cache versi lama di activate. Uji lagi setelah publish dari app.clincoo.buzz.</p><p class=\"mb-4\">Clincoo tidak memantau kuota perangkat. Angka di DevTools memberi sinyal sebelum pengunjung seluler kehabisan ruang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Measure Cache Storage in DevTools before a Clincoo Site Bloats",
          desc: "An unchecked precache fills mobile quota. Check the size and drop old versions.",
          content: "<p class=\"mb-4\">A Clincoo gallery in the precache can push Cache Storage to tens of megabytes without you noticing.</p><p class=\"mb-4\">Open Application > Cache Storage. Note cache names and approximate size after the first visit and after three releases.</p><p class=\"mb-4\">When quota is nearly full, the browser may reject a new cache or evict an old one at random. That breaks the offline page.</p><p class=\"mb-4\">Keep the precache list short and delete old version caches on activate. Test again after a publish from app.clincoo.buzz.</p><p class=\"mb-4\">Clincoo does not watch device quota. The number in DevTools warns you before a mobile visitor runs out of space.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["cache"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["cache"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
