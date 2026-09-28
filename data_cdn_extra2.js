// Clincoo Blog — artikel cdn tambahan 2026-09-28 WIB
(function(){
  var extra = [
    {
      id: "cdn-fallback-origin-saat-edge-gagal",
      langs: {
        "id": {
          title: "Siapkan Fallback Origin saat Edge CDN Clincoo Gagal",
          desc: "Edge mati membuat situs kosong. Atur origin sebagai cadangan, bukan hanya menunggu panel hijau.",
          content: "<p class=\"mb-4\">Pengunjung app.clincoo.buzz melihat error CDN sementara file di origin masih utuh. Tanpa fallback, halaman tampak mati.</p><p class=\"mb-4\">Di panel CDN, aktifkan origin sebagai sumber jika edge timeout. Catat hostname origin di catatan proyek editor.clincoo.buzz.</p><p class=\"mb-4\">Jangan arahkan HTML dan aset ke dua host berbeda tanpa rencana. Uji pemutusan edge di staging, bukan di produksi pertama kali.</p><p class=\"mb-4\">Minta AI merancang checklist failover: DNS, sertifikat, dan path aset. Tempel error 5xx dari Network.</p><p class=\"mb-4\">Clincoo menayangkan file yang kamu unggah. Cadangan origin menjaga situs tetap terbuka saat tepi jaringan bermasalah.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set an Origin Fallback when the Clincoo CDN Edge Fails",
          desc: "A dead edge leaves the site blank. Point to origin as backup instead of waiting for a green panel.",
          content: "<p class=\"mb-4\">Visitors on app.clincoo.buzz see a CDN error while origin files are still intact. Without a fallback the page looks dead.</p><p class=\"mb-4\">In the CDN panel, enable origin as the source when the edge times out. Record the origin hostname in editor.clincoo.buzz project notes.</p><p class=\"mb-4\">Do not split HTML and assets across two hosts with no plan. Test an edge outage on staging, not first in production.</p><p class=\"mb-4\">Ask AI for a failover checklist: DNS, certificates, and asset paths. Paste the 5xx from Network.</p><p class=\"mb-4\">Clincoo ships the files you upload. An origin fallback keeps the site open when the edge misbehaves.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cdn-jangan-cache-html-berisi-token",
      langs: {
        "id": {
          title: "Jangan Cache HTML Clincoo yang Membawa Token Sesi",
          desc: "Halaman dengan token di markup berbahaya jika di-cache publik. Pisahkan HTML dinamis dari aset statis.",
          content: "<p class=\"mb-4\">Template Clincoo kadang menempel token di inline script. CDN publik lalu membagikan token orang lain ke pengunjung berikutnya.</p><p class=\"mb-4\">Set Cache-Control: private, no-store pada HTML yang memuat sesi. Aset berhash tetap boleh immutable.</p><p class=\"mb-4\">Pindahkan data sesi ke cookie HttpOnly atau permintaan API, bukan ke HTML yang di-cache edge.</p><p class=\"mb-4\">Minta AI menandai string token di HTML. Tempel cuplikan head dari editor.clincoo.buzz.</p><p class=\"mb-4\">Uji dua jendela: login berbeda tidak boleh saling melihat markup. app.clincoo.buzz harus aman setelah cache hidup.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Cache Clincoo HTML that Carries a Session Token",
          desc: "A page with a token in markup is dangerous on a public cache. Split dynamic HTML from static assets.",
          content: "<p class=\"mb-4\">A Clincoo template sometimes embeds a token in an inline script. A public CDN then hands that token to the next visitor.</p><p class=\"mb-4\">Set Cache-Control: private, no-store on HTML that carries a session. Hashed assets may stay immutable.</p><p class=\"mb-4\">Move session data into an HttpOnly cookie or an API call, not into HTML that the edge caches.</p><p class=\"mb-4\">Ask AI to mark token strings in the HTML. Paste the head snippet from editor.clincoo.buzz.</p><p class=\"mb-4\">Test two windows: different logins must not see each other's markup. app.clincoo.buzz must stay safe once cache is on.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cdn-stale-while-revalidate-aset",
      langs: {
        "id": {
          title: "Pakai stale-while-revalidate pada Aset Clincoo di CDN",
          desc: "TTL habis membuat pengunjung menunggu origin. SWR menyajikan salinan lama sambil menyegarkan di belakang.",
          content: "<p class=\"mb-4\">Setelah max-age habis, permintaan CSS Clincoo mengantri ke origin. LCP naik tanpa alasan visual.</p><p class=\"mb-4\">Tambah stale-while-revalidate pada Cache-Control aset yang boleh usang sebentar. Edge memberi file lama, lalu isi ulang.</p><p class=\"mb-4\">Jangan pakai SWR pada HTML yang berisi harga atau stok. Cocok untuk CSS, JS berhash, dan font.</p><p class=\"mb-4\">Minta AI menulis header contoh. Tempel daftar aset dari folder publik editor.clincoo.buzz.</p><p class=\"mb-4\">Ukur TTFB aset di app.clincoo.buzz setelah TTL. Angka harus tetap pendek meski origin lambat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use stale-while-revalidate on Clincoo Assets at the CDN",
          desc: "When TTL ends, visitors wait on origin. SWR serves the old copy while it refreshes in the background.",
          content: "<p class=\"mb-4\">After max-age ends, Clincoo CSS requests queue at origin. LCP rises with no visual reason.</p><p class=\"mb-4\">Add stale-while-revalidate on Cache-Control for assets that may be briefly stale. The edge serves the old file, then refills.</p><p class=\"mb-4\">Do not use SWR on HTML that holds prices or stock. It fits CSS, hashed JS, and fonts.</p><p class=\"mb-4\">Ask AI for a sample header. Paste the public-folder asset list from editor.clincoo.buzz.</p><p class=\"mb-4\">Measure asset TTFB on app.clincoo.buzz after TTL. The number should stay short even if origin is slow.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cdn-host-khusus-vs-same-origin",
      langs: {
        "id": {
          title: "Pilih Host CDN Khusus atau Same-Origin untuk Aset Clincoo",
          desc: "Host terpisah menambah koneksi. Same-origin lebih sederhana jika trafik masih kecil.",
          content: "<p class=\"mb-4\">Banyak template Clincoo menunjuk cdn.contoh.com padahal situs masih sedikit pengunjung. Handshake ekstra memperlambat first paint.</p><p class=\"mb-4\">Untuk situs kecil, sajikan CSS/JS dari origin yang sama di app.clincoo.buzz. Pindah ke host khusus setelah aset besar dan cache panjang terbukti.</p><p class=\"mb-4\">Jika memakai host khusus, samakan HTTPS dan preconnect. Jangan campur http:// pada aset.</p><p class=\"mb-4\">Minta AI membandingkan waterfall same-origin vs host terpisah. Tempel HAR singkat dari DevTools.</p><p class=\"mb-4\">Clincoo mengikuti URL yang kamu tulis di editor.clincoo.buzz. Pilih host berdasarkan pengukuran, bukan kebiasaan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Choose a Dedicated CDN Host or Same-Origin for Clincoo Assets",
          desc: "A separate host adds a connection. Same-origin is simpler while traffic is still small.",
          content: "<p class=\"mb-4\">Many Clincoo templates point at cdn.example.com even when the site has few visitors. The extra handshake slows first paint.</p><p class=\"mb-4\">For a small site, serve CSS/JS from the same origin on app.clincoo.buzz. Move to a dedicated host after large assets and long cache prove useful.</p><p class=\"mb-4\">If you use a dedicated host, keep HTTPS and preconnect aligned. Do not mix http:// on assets.</p><p class=\"mb-4\">Ask AI to compare a same-origin waterfall with a split host. Paste a short HAR from DevTools.</p><p class=\"mb-4\">Clincoo follows the URLs you write in editor.clincoo.buzz. Pick the host from measurement, not habit.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cdn-compress-brotli-gzip-header",
      langs: {
        "id": {
          title: "Aktifkan Brotli dan Gzip pada Aset Teks Clincoo di CDN",
          desc: "CSS dan JS tanpa kompresi memboros kuota. Pastikan Content-Encoding sesuai Accept-Encoding.",
          content: "<p class=\"mb-4\">Berkas app.css Clincoo 200KB tampil utuh di Network. Edge tidak mengompres atau origin mengirim tanpa Content-Encoding.</p><p class=\"mb-4\">Aktifkan Brotli dulu, Gzip sebagai cadangan. Jangan kompres ulang file yang sudah .br di origin.</p><p class=\"mb-4\">Gambar JPEG/WebP jangan di-gzip. Kompresi ganda merusak atau tidak menolong.</p><p class=\"mb-4\">Minta AI mengecek header Content-Encoding dari salinan respons. Tempel header Network dari editor.clincoo.buzz.</p><p class=\"mb-4\">Setelah hidup, ukuran transfer di app.clincoo.buzz harus turun tajam pada CSS dan JS.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Turn On Brotli and Gzip for Clincoo Text Assets on the CDN",
          desc: "Uncompressed CSS and JS waste data. Make Content-Encoding match Accept-Encoding.",
          content: "<p class=\"mb-4\">A 200KB Clincoo app.css shows raw in Network. The edge is not compressing or origin sends no Content-Encoding.</p><p class=\"mb-4\">Enable Brotli first, Gzip as fallback. Do not recompress files that already ship as .br from origin.</p><p class=\"mb-4\">Do not gzip JPEG/WebP. Double compression hurts or does nothing.</p><p class=\"mb-4\">Ask AI to check Content-Encoding from a response copy. Paste the Network headers from editor.clincoo.buzz.</p><p class=\"mb-4\">Once live, transfer size on app.clincoo.buzz should drop sharply for CSS and JS.</p>",
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
