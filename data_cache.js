// Clincoo Blog — Data kategori: cache
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["cache"] = {
  names: { "id": "Cache", "en": "Cache" },
  flag: "🗄️",
  articles: [
    {
      id: "cache-jangan-cache-html-terlalu-lama",
      langs: {
        "id": {
          title: "Jangan Meng-cache HTML Clincoo Terlalu Lama di CDN",
          desc: "HTML yang di-cache berjam-jam menampilkan versi lama setelah kamu deploy. Cache aset, bukan markup.",
          content: "<p class=\"mb-4\">Setelah publish dari Clincoo, pengunjung masih melihat header lama karena HTML di-cache agresif di CDN atau service worker.</p><p class=\"mb-4\">Berkas CSS, font, dan gambar boleh berumur panjang jika namanya berubah saat isi berubah. File HTML sebaiknya max-age pendek atau harus divalidasi ulang.</p><p class=\"mb-4\">Jika memakai PWA, versi nama cache saat rilis agar halaman cadangan tidak menahan index lama.</p><p class=\"mb-4\">Uji dengan hard refresh lalu jendela penyamaran setelah deploy di app.clincoo.buzz.</p><p class=\"mb-4\">Clincoo tidak mengatur header CDN untukmu. Cache yang sopan membuat perbaikan tampil tanpa menunggu semalaman.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Cache Clincoo HTML for Too Long on a CDN",
          desc: "HTML cached for hours shows an old version after you deploy. Cache assets, not markup.",
          content: "<p class=\"mb-4\">After a Clincoo publish, visitors still see the old header because HTML is cached hard on the CDN or a service worker.</p><p class=\"mb-4\">CSS, fonts, and images may live a long time if the filename changes when the contents change. HTML should have a short max-age or must revalidate.</p><p class=\"mb-4\">If you use a PWA, version the cache name on release so the fallback page does not keep an old index.</p><p class=\"mb-4\">Test with a hard refresh and a private window after deploy from app.clincoo.buzz.</p><p class=\"mb-4\">Clincoo does not set CDN headers for you. Polite caching makes a fix show up without waiting overnight.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cache-nama-file-berhash-untuk-aset",
      langs: {
        "id": {
          title: "Pakai Nama File Berhash untuk Aset Clincoo yang Boleh Di-cache Lama",
          desc: "CSS dan gambar tanpa hash sulit di-cache agresif. Ubah nama saat isi berubah.",
          content: "<p class=\"mb-4\">Situs Clincoo sering memakai style.css yang sama setiap rilis. CDN menahan file itu sehingga pengunjung lama tidak mendapat perbaikan.</p><p class=\"mb-4\">Tambahkan hash atau nomor versi pada nama berkas, misalnya style.a3f2.css. HTML baru menunjuk ke nama itu.</p><p class=\"mb-4\">Font dan gambar hero juga ikut pola ini. Jangan mengandalkan query string ?v=2 jika CDN mengabaikan query.</p><p class=\"mb-4\">Uji di Network DevTools setelah publish dari app.clincoo.buzz: permintaan aset baru harus 200, bukan 304 dari salinan lama.</p><p class=\"mb-4\">Clincoo merender tautan yang kamu tulis. Nama yang berubah bersama isi membuat cache panjang tetap aman.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Hashed Filenames for Clincoo Assets That May Be Cached Long",
          desc: "CSS and images without a hash are hard to cache aggressively. Change the name when the contents change.",
          content: "<p class=\"mb-4\">Clincoo sites often keep the same style.css on every release. The CDN holds that file so returning visitors miss a fix.</p><p class=\"mb-4\">Add a hash or version to the filename, for example style.a3f2.css. The new HTML points at that name.</p><p class=\"mb-4\">Fonts and hero images follow the same pattern. Do not rely on a ?v=2 query if the CDN ignores query strings.</p><p class=\"mb-4\">Check Network in DevTools after a publish from app.clincoo.buzz: the new asset should be 200, not a 304 of the old copy.</p><p class=\"mb-4\">Clincoo renders the links you write. A name that changes with the contents keeps a long cache safe.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cache-disable-cache-devtools-saat-debug",
      langs: {
        "id": {
          title: "Nyalakan Disable Cache di DevTools saat Men-debug Situs Clincoo",
          desc: "Cache browser menyembunyikan perbaikan CSS. Matikan cache hanya di sesi debug.",
          content: "<p class=\"mb-4\">Kamu mengubah padding di editor.clincoo.buzz, mem-publish, lalu masih melihat jarak lama. Sering kali yang bersalah adalah cache disk browser.</p><p class=\"mb-4\">Buka DevTools, tab Network, centang Disable cache. Biarkan panel terbuka saat me-refresh.</p><p class=\"mb-4\">Jangan mengandalkan hard refresh saja di perangkat lain. Minta rekan membuka jendela penyamaran.</p><p class=\"mb-4\">Setelah selesai debug, hilangkan centang itu. Pengunjung nyata tetap boleh memakai cache aset.</p><p class=\"mb-4\">Clincoo tidak memaksa header no-store. Disable cache adalah alat kerja, bukan pengaturan produksi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Turn on Disable Cache in DevTools When Debugging a Clincoo Site",
          desc: "The browser cache hides a CSS fix. Disable cache only for the debug session.",
          content: "<p class=\"mb-4\">You change padding in editor.clincoo.buzz, publish, and still see the old gap. Disk cache is often the culprit.</p><p class=\"mb-4\">Open DevTools, Network tab, tick Disable cache. Keep the panel open while you refresh.</p><p class=\"mb-4\">Do not rely on a hard refresh alone on another device. Ask a teammate to use a private window.</p><p class=\"mb-4\">When debugging ends, clear the tick. Real visitors may still use the asset cache.</p><p class=\"mb-4\">Clincoo does not force a no-store header. Disable cache is a work tool, not a production setting.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cache-revalidate-html-setelah-deploy",
      langs: {
        "id": {
          title: "Paksa Validasi Ulang HTML Clincoo setelah Setiap Deploy",
          desc: "Halaman index yang stale menahan header lama. Minta CDN memeriksa ulang HTML.",
          content: "<p class=\"mb-4\">Deploy dari app.clincoo.buzz sudah selesai, tetapi beranda masih menampilkan judul kemarin karena edge cache HTML.</p><p class=\"mb-4\">Set Cache-Control HTML ke max-age rendah plus must-revalidate, atau purge path / dan /index.html di dashboard CDN.</p><p class=\"mb-4\">Jangan purge seluruh situs jika hanya satu halaman berubah. Purge selektif lebih cepat dan hemat.</p><p class=\"mb-4\">Service worker juga harus melewati HTML atau memakai strategi network-first untuk dokumen.</p><p class=\"mb-4\">Clincoo tidak menekan tombol purge untukmu. Validasi HTML membuat rilis terlihat dalam hitungan menit.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Force HTML Revalidation on Clincoo after Every Deploy",
          desc: "A stale index page keeps yesterday’s header. Ask the CDN to recheck HTML.",
          content: "<p class=\"mb-4\">A deploy from app.clincoo.buzz is done, but the home page still shows yesterday’s title because HTML sits on the edge cache.</p><p class=\"mb-4\">Set HTML Cache-Control to a short max-age plus must-revalidate, or purge / and /index.html in the CDN dashboard.</p><p class=\"mb-4\">Do not purge the whole site if only one page changed. A selective purge is faster and cheaper.</p><p class=\"mb-4\">A service worker should skip HTML or use network-first for documents.</p><p class=\"mb-4\">Clincoo does not press purge for you. Revalidating HTML makes a release visible within minutes.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cache-jangan-cache-respons-form",
      langs: {
        "id": {
          title: "Jangan Meng-cache Respons Form atau API di Situs Clincoo",
          desc: "POST dan JSON dinamis yang di-cache menampilkan data orang lain atau status usang.",
          content: "<p class=\"mb-4\">Service worker yang cache-first kadang menyimpan jawaban form kontak. Pengunjung berikutnya melihat pesan sukses palsu.</p><p class=\"mb-4\">Abaikan permintaan method POST, PUT, dan path /api di handler fetch. Kembalikan ke jaringan.</p><p class=\"mb-4\">Header Cache-Control: no-store pada respons form memperkuat kebijakan itu di CDN.</p><p class=\"mb-4\">Uji kirim form dua kali di pratinjau editor.clincoo.buzz dengan DevTools terbuka: kedua kali harus sampai ke jaringan.</p><p class=\"mb-4\">Clincoo merender form statis. Cache hanya untuk aset; data unik tetap hidup.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Cache Form or API Responses on a Clincoo Site",
          desc: "Cached POST and dynamic JSON show someone else’s data or a stale status.",
          content: "<p class=\"mb-4\">A cache-first service worker sometimes stores a contact-form reply. The next visitor sees a fake success message.</p><p class=\"mb-4\">Ignore POST, PUT, and /api paths in the fetch handler. Send those requests to the network.</p><p class=\"mb-4\">Cache-Control: no-store on the form response reinforces that policy on the CDN.</p><p class=\"mb-4\">Submit the form twice in the editor.clincoo.buzz preview with DevTools open: both times should hit the network.</p><p class=\"mb-4\">Clincoo renders a static form. Cache assets only; unique data stays live.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cache-precache-hanya-aset-kritis",
      langs: {
        "id": {
          title: "Precache Hanya Aset Kritis di Service Worker Clincoo",
          desc: "Meng-precache seluruh folder memperbesar unduhan pertama dan menahan file usang.",
          content: "<p class=\"mb-4\">Template PWA sering memasukkan setiap gambar galeri ke install event. Pengunjung seluler menunggu lama sebelum halaman siap.</p><p class=\"mb-4\">Precache hanya shell: HTML cadangan, CSS utama, font teks, dan ikon. Gambar artikel biarkan lazy.</p><p class=\"mb-4\">Saat rilis, ganti nama cache misalnya clincoo-shell-v3 agar salinan lama terhapus di activate.</p><p class=\"mb-4\">Cek ukuran cache di Application DevTools setelah kunjungan pertama dari app.clincoo.buzz.</p><p class=\"mb-4\">Clincoo tidak memilih daftar precache. Daftar pendek membuat offline berguna tanpa merusak rilis baru.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Precache Only Critical Assets in a Clincoo Service Worker",
          desc: "Precaching the whole folder inflates the first download and keeps stale files.",
          content: "<p class=\"mb-4\">PWA templates often put every gallery image in the install event. Mobile visitors wait a long time before the page is ready.</p><p class=\"mb-4\">Precache only the shell: fallback HTML, main CSS, text fonts, and icons. Let article images stay lazy.</p><p class=\"mb-4\">On release, rename the cache, for example clincoo-shell-v3, so the activate step drops the old copy.</p><p class=\"mb-4\">Check cache size in Application DevTools after the first visit from app.clincoo.buzz.</p><p class=\"mb-4\">Clincoo does not pick the precache list. A short list keeps offline useful without blocking a new release.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
