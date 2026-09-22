// Clincoo Blog — artikel devtools tambahan 2026-09-22
(function(){
  var extra = [
    {
      id: "devtools-matikan-cache-saat-debug",
      langs: {
        "id": {
          title: "Matikan Cache di DevTools saat Debug Pratinjau Clincoo",
          desc: "File JS/CSS lama sering tertinggal di cache. Centang Disable cache di Network sebelum menyalahkan editor.",
          content: "<p class=\"mb-4\">Pratinjau Clincoo terlihat benar di satu tab, salah di tab lain. AI menulis ulang file, padahal browser masih memakai salinan lama.</p><p class=\"mb-4\">Buka DevTools, tab Network, centang Disable cache, biarkan panel terbuka, lalu muat ulang editor.clincoo.buzz.</p><p class=\"mb-4\">Hard refresh saja tidak selalu cukup jika service worker atau disk cache masih aktif. Disable cache mensimulasikan pengunjung baru.</p><p class=\"mb-4\">Minta AI hanya setelah status 200 muncul untuk berkas yang baru kamu ubah. Tolak rewrite tema karena cache.</p><p class=\"mb-4\">Clincoo menayangkan file statis. DevTools yang terbuka dengan cache mati adalah cara tercepat membedakan bug kode dan cache.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Turn Off Cache in DevTools while Debugging a Clincoo Preview",
          desc: "Stale JS/CSS often lingers in cache. Tick Disable cache in Network before you blame the editor.",
          content: "<p class=\"mb-4\">A Clincoo preview looks right in one tab and wrong in another. The AI rewrites the file, but the browser still serves an old copy.</p><p class=\"mb-4\">Open DevTools, Network tab, tick Disable cache, keep the panel open, then reload editor.clincoo.buzz.</p><p class=\"mb-4\">A hard refresh is not always enough if a service worker or disk cache is still active. Disable cache mimics a first-time visitor.</p><p class=\"mb-4\">Ask the AI only after the file you just changed returns 200. Refuse a theme rewrite caused by cache.</p><p class=\"mb-4\">Clincoo serves static files. DevTools left open with cache off is the fastest way to separate a code bug from cache.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "devtools-computed-lihat-nilai-akhir",
      langs: {
        "id": {
          title: "Pakai Panel Computed untuk Melihat Nilai CSS yang Benar-benar Dipakai",
          desc: "Styles menampilkan kandidat. Computed menampilkan pemenang: font-size, margin, dan display aktual.",
          content: "<p class=\"mb-4\">Kamu menambah padding 24px, tetapi kartu Clincoo tetap rapat. Panel Styles penuh coretan; yang dipakai ada di Computed.</p><p class=\"mb-4\">Inspect elemen di pratinjau editor.clincoo.buzz, buka Computed, filter nama properti. Baca nilai akhir plus sumber aturan.</p><p class=\"mb-4\">Jika nilai bukan yang kamu tulis, naikkan spesifisitas atau hapus aturan yang menang. Jangan tebak lewat chat saja.</p><p class=\"mb-4\">Minta AI satu deklarasi pengganti berdasarkan nilai Computed. Tolak reset global.</p><p class=\"mb-4\">Clincoo tidak mengubah CSS di server. Computed adalah hasil yang dilihat pengunjung.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use the Computed Pane to See the CSS Value that Actually Wins",
          desc: "Styles shows candidates. Computed shows the winner: the live font-size, margin, and display.",
          content: "<p class=\"mb-4\">You add 24px padding, but the Clincoo card stays tight. The Styles pane is full of strike-throughs; the used value lives in Computed.</p><p class=\"mb-4\">Inspect the element in the editor.clincoo.buzz preview, open Computed, filter the property name. Read the final value and its source rule.</p><p class=\"mb-4\">If the value is not what you wrote, raise specificity or delete the winning rule. Do not guess in chat alone.</p><p class=\"mb-4\">Ask the AI for one replacement declaration based on the Computed value. Refuse a global reset.</p><p class=\"mb-4\">Clincoo does not rewrite CSS on the server. Computed is what visitors see.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "devtools-console-filter-pesan-proyek",
      langs: {
        "id": {
          title: "Saring Console agar Hanya Pesan Proyek Clincoo yang Terlihat",
          desc: "Ekstensi browser menumpuk log. Filter teks dan level Error memisahkan noise dari bug nyata.",
          content: "<p class=\"mb-4\">Console penuh peringatan ekstensi iklan atau password manager. AI mengira proyek Clincoo yang rusak.</p><p class=\"mb-4\">Di tab Console, ketik nama file proyek pada kotak filter, atau pilih level Error. Centang Hide network bila perlu.</p><p class=\"mb-4\">Aktifkan Show timestamps jika urutan event penting. Salin hanya baris yang menyebut berkas workspace.</p><p class=\"mb-4\">Kirim potongan itu ke AI. Tolak permintaan membersihkan semua warning pihak ketiga.</p><p class=\"mb-4\">Clincoo tidak mengontrol ekstensi pengguna. Filter Console menjaga debug tetap sempit.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Filter the Console so Only Clincoo Project Messages Remain",
          desc: "Browser extensions flood the log. A text filter and the Error level separate noise from a real bug.",
          content: "<p class=\"mb-4\">The Console fills with ad-blocker or password-manager warnings. The AI assumes the Clincoo project is broken.</p><p class=\"mb-4\">In the Console tab type a project filename in the filter box, or pick the Error level. Tick Hide network if needed.</p><p class=\"mb-4\">Turn on Show timestamps when event order matters. Copy only lines that mention workspace files.</p><p class=\"mb-4\">Send that snippet to the AI. Refuse a request to clean every third-party warning.</p><p class=\"mb-4\">Clincoo does not control user extensions. Console filters keep debug work narrow.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "devtools-sources-breakpoint-satu-baris",
      langs: {
        "id": {
          title: "Pasang Breakpoint Satu Baris di Sources sebelum Mengganti Log",
          desc: "console.log di mana-mana mengotori kode. Breakpoint di Sources menghentikan skrip tepat di handler.",
          content: "<p class=\"mb-4\">Form Clincoo tidak mengirim data. AI menambahkan lima log, lalu lupa menghapusnya sebelum deploy.</p><p class=\"mb-4\">Buka Sources, temukan file skrip pratinjau, klik nomor baris pada handler submit. Muat ulang dan ulangi aksi.</p><p class=\"mb-4\">Saat pause, lihat Scope: nilai input, event, dan return. Lanjutkan langkah demi langkah dengan Step over.</p><p class=\"mb-4\">Minta AI memperbaiki satu kondisi yang kamu lihat di Scope. Tolak menabur console.log di seluruh file.</p><p class=\"mb-4\">Clincoo menjalankan JS di browser. Breakpoint adalah alat resmi; log permanen adalah utang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set a One-Line Breakpoint in Sources before You Sprinkle Logs",
          desc: "Scattered console.log calls dirty the code. A Sources breakpoint stops the script right on the handler.",
          content: "<p class=\"mb-4\">A Clincoo form does not send data. The AI adds five logs and forgets to remove them before deploy.</p><p class=\"mb-4\">Open Sources, find the preview script, click the line number on the submit handler. Reload and repeat the action.</p><p class=\"mb-4\">While paused, read Scope: input values, the event, and the return. Step over one statement at a time.</p><p class=\"mb-4\">Ask the AI to fix the one condition you saw in Scope. Refuse to scatter console.log across the file.</p><p class=\"mb-4\">Clincoo runs JS in the browser. A breakpoint is the proper tool; leftover logs are debt.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "devtools-coverage-temukan-css-mati",
      langs: {
        "id": {
          title: "Pakai Coverage untuk Menemukan CSS Clincoo yang Tidak Pernah Dipakai",
          desc: "Template sering membawa ratusan aturan mati. Coverage menandai merah apa yang tidak disentuh halaman ini.",
          content: "<p class=\"mb-4\">Halaman Clincoo terasa berat padahal gambar sudah dikompres. CSS sisa template masih ikut terkirim.</p><p class=\"mb-4\">Di DevTools buka More tools → Coverage, rekam, muat pratinjau editor.clincoo.buzz, lalu berhenti. Urutkan berkas CSS.</p><p class=\"mb-4\">Baris merah tidak dipakai di URL itu. Jangan hapus semuanya jika dipakai halaman lain; pindahkan ke file halaman itu.</p><p class=\"mb-4\">Minta AI memotong satu blok yang Coverage tandai unused di beranda. Tolak minify buta tanpa bukti.</p><p class=\"mb-4\">Clincoo adalah situs statis. Byte CSS yang tidak dipakai tetap dibayar pengunjung.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Coverage to Find Clincoo CSS that This Page Never Touches",
          desc: "Templates often ship hundreds of dead rules. Coverage paints unused lines red for this page.",
          content: "<p class=\"mb-4\">A Clincoo page feels heavy even after images were compressed. Leftover template CSS still ships.</p><p class=\"mb-4\">In DevTools open More tools → Coverage, record, load the editor.clincoo.buzz preview, then stop. Sort CSS files.</p><p class=\"mb-4\">Red lines are unused on that URL. Do not delete them if another page needs them; move them to that page file.</p><p class=\"mb-4\">Ask the AI to cut one block Coverage marked unused on the home page. Refuse blind minify without evidence.</p><p class=\"mb-4\">Clincoo is a static site. Unused CSS bytes are still paid by visitors.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["devtools"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["devtools"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
