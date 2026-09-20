// Clincoo Blog — artikel debug tambahan 2026-09-20
(function(){
  var extra = [
    {
      id: "debug-cek-typo-selektor-css",
      langs: {
        "id": {
          title: "Cek Typo Selektor CSS sebelum Menyalahkan Cascade Clincoo",
          desc: "Kelas yang salah ketik membuat aturan tidak pernah diterapkan. Bandingkan HTML dan CSS dulu.",
          content: "<p class=\"mb-4\">Kartu yang tidak berubah warna sering karena class di HTML tertulis card-price sementara CSS menarget .cardprice.</p><p class=\"mb-4\">Di pratinjau Clincoo buka Elements, lihat atribut class elemen. Salin persis, cari di file CSS workspace.</p><p class=\"mb-4\">Jika selektor tidak ketemu, minta AI memperbaiki ejaan di satu file. Jangan menambah !important pada selektor baru.</p><p class=\"mb-4\">Perhatikan huruf besar, strip, dan BEM. Satu karakter beda sudah cukup membuat aturan mati.</p><p class=\"mb-4\">Clincoo merender kelas apa adanya. Typo adalah bug paling murah yang sering ditutupi rewrite tema.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Check a CSS Selector Typo before You Blame the Clincoo Cascade",
          desc: "A mistyped class means the rule never applies. Compare HTML and CSS first.",
          content: "<p class=\"mb-4\">A card that never changes color often has class card-price in HTML while CSS targets .cardprice.</p><p class=\"mb-4\">In the Clincoo preview open Elements and read the class attribute. Copy it exactly and search the workspace CSS.</p><p class=\"mb-4\">If the selector is missing, ask the AI to fix the spelling in one file. Do not add !important on a new selector.</p><p class=\"mb-4\">Watch case, hyphens, and BEM. One character difference is enough to kill the rule.</p><p class=\"mb-4\">Clincoo renders classes as stored. A typo is the cheapest bug a theme rewrite often hides.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "debug-tunggu-domcontentloaded",
      langs: {
        "id": {
          title: "Pastikan Skrip Clincoo Menunggu DOM Siap sebelum Query Elemen",
          desc: "querySelector yang jalan terlalu awal mengembalikan null. Cek urutan skrip, bukan rewrite handler.",
          content: "<p class=\"mb-4\">Error Cannot read properties of null hampir selalu berarti elemen belum ada saat skrip jalan.</p><p class=\"mb-4\">Cek apakah script di head tanpa defer, atau innerHTML mengganti node setelah listener dipasang.</p><p class=\"mb-4\">Pindahkan inisialisasi ke DOMContentLoaded atau taruh script sebelum penutup body. Satu perubahan urutan cukup.</p><p class=\"mb-4\">Minta AI hanya menyesuaikan titik inisialisasi. Tolak menulis ulang seluruh file event.</p><p class=\"mb-4\">Clincoo menjalankan berkas sesuai urutan HTML. Waktu load adalah bagian dari debug, bukan mistik.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Make Clincoo Scripts Wait for the DOM before They Query Nodes",
          desc: "A querySelector that runs too early returns null. Check script order instead of rewriting the handler.",
          content: "<p class=\"mb-4\">Cannot read properties of null almost always means the node was missing when the script ran.</p><p class=\"mb-4\">Check a head script without defer, or innerHTML that replaced the node after the listener was bound.</p><p class=\"mb-4\">Move init to DOMContentLoaded or place the script before the closing body tag. One order change is enough.</p><p class=\"mb-4\">Ask the AI only to adjust the init point. Refuse a rewrite of the whole event file.</p><p class=\"mb-4\">Clincoo runs files in HTML order. Load timing is part of debug work, not mystery.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "debug-cek-z-index-dan-overlay",
      langs: {
        "id": {
          title: "Cek z-index dan Overlay jika Tombol Clincoo Tidak Bisa Diklik",
          desc: "Lapisan transparan di atas tombol memakan klik. Inspect overlay dulu, jangan ganti listener.",
          content: "<p class=\"mb-4\">Tombol terlihat tetapi tidak merespons sering tertutup header sticky, modal sisa, atau pseudo-element lebar penuh.</p><p class=\"mb-4\">Di Elements, aktifkan mode pilih lalu klik area tombol. Jika yang terpilih bukan tombol, catat elemen penutup.</p><p class=\"mb-4\">Periksa z-index, position, dan pointer-events pada overlay. Matikan pointer-events:none hanya jika overlay memang dekorasi.</p><p class=\"mb-4\">Minta AI mengubah satu aturan overlay. Tolak rewrite seluruh komponen header.</p><p class=\"mb-4\">Clincoo tidak menelan pointer. Overlay yang salah tumpuk adalah penyebab paling sering.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Check z-index and Overlays when a Clincoo Button Will Not Click",
          desc: "A transparent layer on top of the button eats the click. Inspect the overlay first; do not replace the listener.",
          content: "<p class=\"mb-4\">A visible button that ignores clicks is often covered by a sticky header, a leftover modal, or a full-width pseudo-element.</p><p class=\"mb-4\">In Elements turn on pick mode and click the button area. If the selected node is not the button, note the covering element.</p><p class=\"mb-4\">Check z-index, position, and pointer-events on that overlay. Use pointer-events:none only when the overlay is decoration.</p><p class=\"mb-4\">Ask the AI to change one overlay rule. Refuse a rewrite of the whole header component.</p><p class=\"mb-4\">Clincoo does not swallow pointers. A stacked overlay is the most common cause.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "debug-repro-langkah-minimal",
      langs: {
        "id": {
          title: "Tulis Langkah Repro Minimal sebelum Meminta AI Debug Clincoo",
          desc: "Bug yang tidak bisa diulang tidak bisa diperbaiki. Catat URL, lebar layar, dan klik berurutan.",
          content: "<p class=\"mb-4\">Laporan 'menu rusak' tanpa langkah membuat AI menebak tiga file sekaligus.</p><p class=\"mb-4\">Tulis: buka URL pratinjau, set lebar 390px, klik hamburger, lihat panel tidak muncul. Satu hasil yang diharapkan.</p><p class=\"mb-4\">Ulangi di jendela privat. Jika gagal repro, masalahnya lingkungan, bukan kode workspace.</p><p class=\"mb-4\">Kirim langkah itu plus cuplikan console. Tolak permintaan 'perbaiki semuanya'.</p><p class=\"mb-4\">Clincoo menayangkan proyek statis. Repro yang ketat menghemat rewrite sia-sia.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Write Minimal Repro Steps before You Ask the AI to Debug Clincoo",
          desc: "A bug you cannot repeat cannot be fixed. Note the URL, viewport width, and the clicks in order.",
          content: "<p class=\"mb-4\">A report that only says the menu is broken makes the AI guess three files at once.</p><p class=\"mb-4\">Write: open the preview URL, set width to 390px, click the hamburger, watch the panel stay closed. State the expected result.</p><p class=\"mb-4\">Repeat in a private window. If it will not repro, the environment is the issue, not workspace code.</p><p class=\"mb-4\">Send those steps plus a console snippet. Refuse a fix everything request.</p><p class=\"mb-4\">Clincoo serves a static project. Tight repro steps save pointless rewrites.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "debug-cek-fetch-gagal-di-network",
      langs: {
        "id": {
          title: "Cek Permintaan Fetch yang Gagal di Tab Network Clincoo",
          desc: "Form atau data kosong sering status 4xx/5xx atau CORS, bukan fungsi submit yang salah.",
          content: "<p class=\"mb-4\">Handler yang 'tidak jalan' kadang sudah jalan tetapi endpoint menolak. Console hanya menulis Failed to fetch.</p><p class=\"mb-4\">Buka Network, filter Fetch/XHR, ulangi aksi. Baca method, URL, status, dan tab Response.</p><p class=\"mb-4\">Jika status 404, perbaiki path. Jika CORS, jangan matikan keamanan di klien; cek origin dan header server.</p><p class=\"mb-4\">Tempel status plus URL ke AI. Minta ubah satu pemanggilan fetch, bukan seluruh form.</p><p class=\"mb-4\">Clincoo berjalan di browser. Network adalah bukti, bukan tebakan di editor.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Inspect Failed Fetch Requests in the Clincoo Network Tab",
          desc: "Empty forms or missing data are often a 4xx/5xx or CORS failure, not a broken submit function.",
          content: "<p class=\"mb-4\">A handler that 'does nothing' sometimes ran, but the endpoint refused. The console only printed Failed to fetch.</p><p class=\"mb-4\">Open Network, filter Fetch/XHR, repeat the action. Read method, URL, status, and the Response tab.</p><p class=\"mb-4\">If the status is 404, fix the path. If it is CORS, do not disable safety in the client; check origin and server headers.</p><p class=\"mb-4\">Paste the status plus URL to the AI. Ask to change one fetch call, not the whole form.</p><p class=\"mb-4\">Clincoo runs in the browser. Network is evidence, not a guess in the editor.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["debug"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["debug"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
