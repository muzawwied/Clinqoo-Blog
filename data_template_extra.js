// Clincoo Blog — artikel template tambahan 2026-09-19
(function(){
  var extra = [
    {
      id: "template-ganti-gambar-hero-tanpa-pecah-rasio",
      langs: {
        "id": {
          title: "Ganti Gambar Hero Template tanpa Pecah Rasio",
          desc: "Ganti foto hero dengan ukuran yang sama, cek object-fit, dan lihat pratinjau di layar sempit.",
          content: "<p class=\"mb-4\">Gambar hero template biasanya dipotong oleh CSS. Kalau kamu unggah foto potret ke slot lanskap, wajah atau produk bisa terpotong di tengah.</p><p class=\"mb-4\">Cek dulu kelas pada tag img atau elemen background. Banyak template Clincoo memakai object-fit: cover dan tinggi tetap. Siapkan foto dengan rasio mendekati slot itu.</p><p class=\"mb-4\">Jangan biarkan file 4MB. Kompres dulu. Halaman template yang berat membuat pratinjau editor terasa lambat dan pengunjung subdomain menunggu lama.</p><p class=\"mb-4\">Setelah ganti src, buka pratinjau lebar desktop dan lebar ponsel. Pastikan teks di atas gambar masih terbaca. Jika kontras jelek, tambah overlay gelap tipis, bukan rewrite seluruh hero.</p><p class=\"mb-4\">Minta AI hanya mengganti path gambar dan alt text. Jangan minta \"desain ulang hero\" — itu sering merusak grid yang sudah kamu sesuaikan.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Replace a Template Hero Image Without Breaking the Ratio",
          desc: "Swap the hero photo at a similar size, check object-fit, and preview on a narrow screen.",
          content: "<p class=\"mb-4\">Template hero images are usually cropped by CSS. If you drop a portrait photo into a landscape slot, a face or product can be cut off in the middle.</p><p class=\"mb-4\">Check the class on the img tag or background element first. Many Clincoo templates use object-fit: cover and a fixed height. Prepare a photo with a ratio close to that slot.</p><p class=\"mb-4\">Do not leave a 4MB file. Compress it first. A heavy template page makes the editor preview feel slow and visitors on the subdomain wait.</p><p class=\"mb-4\">After you change the src, open preview at desktop width and phone width. Make sure text over the image still reads. If contrast is poor, add a thin dark overlay instead of rewriting the whole hero.</p><p class=\"mb-4\">Ask the AI only to change the image path and alt text. Do not ask it to \"redesign the hero\" — that often breaks a grid you already tuned.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "template-sesuaikan-navigasi-mobile",
      langs: {
        "id": {
          title: "Sesuaikan Navigasi Mobile pada Template Clincoo",
          desc: "Periksa menu hamburger, urutan tautan, dan area sentuh sebelum deploy template ke subdomain.",
          content: "<p class=\"mb-4\">Template sering terlihat rapi di desktop, lalu menu menumpuk atau tombol terlalu kecil di ponsel. Buka pratinjau sempit sebelum menambah halaman baru.</p><p class=\"mb-4\">Cek apakah hamburger butuh sedikit JavaScript. Jika skrip tidak ter-load karena path salah setelah kamu pindah folder, menu tidak terbuka. Perbaiki path, jangan tulis menu baru dari nol.</p><p class=\"mb-4\">Urutkan tautan seperti pengunjung berpikir: beranda, layanan, harga, kontak. Jangan taruh lima tautan sosial di atas menu utama.</p><p class=\"mb-4\">Area sentuh minimal sekitar 44px. Jika item menu rapat, tambah padding, bukan perkecil font sampai tidak terbaca.</p><p class=\"mb-4\">Kalau AI diminta \"perbaiki navbar\", batasi ke CSS media query dan markup menu. Tolak rewrite seluruh header yang sudah berisi logo dan CTA yang benar.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Tune Mobile Navigation on a Clincoo Template",
          desc: "Check the hamburger menu, link order, and tap targets before you deploy a template to a subdomain.",
          content: "<p class=\"mb-4\">Templates often look tidy on desktop, then the menu stacks or buttons get too small on a phone. Open a narrow preview before you add new pages.</p><p class=\"mb-4\">Check whether the hamburger needs a little JavaScript. If the script fails to load because a path broke after you moved folders, the menu will not open. Fix the path instead of writing a new menu from scratch.</p><p class=\"mb-4\">Order links the way visitors think: home, services, pricing, contact. Do not put five social links above the main menu.</p><p class=\"mb-4\">Keep tap targets around 44px. If items are tight, add padding instead of shrinking type until it is unreadable.</p><p class=\"mb-4\">If you ask the AI to \"fix the navbar\", limit the job to the media-query CSS and the menu markup. Refuse a full header rewrite that already holds the right logo and CTA.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "template-isi-halaman-harga-dari-template",
      langs: {
        "id": {
          title: "Isi Halaman Harga Template dengan Angka yang Benar",
          desc: "Ganti paket dummy, samakan mata uang, dan jangan biarkan tombol beli mengarah ke contoh.",
          content: "<p class=\"mb-4\">Banyak template Clincoo punya tiga kartu harga dengan angka fiktif. Pengunjung yang membuka subdomain langsung percaya itu tarifmu. Ganti sebelum deploy.</p><p class=\"mb-4\">Samakan mata uang dan periode. Jangan campur Rp dan USD, atau \"per bulan\" di satu kartu dan \"per proyek\" di kartu lain tanpa keterangan.</p><p class=\"mb-4\">Tombol pada kartu harus menuju kontak, checkout, atau WhatsApp yang kamu miliki. Hapus href contoh dan teks \"Buy now\" jika kamu belum siap menjual otomatis.</p><p class=\"mb-4\">Jelaskan apa yang termasuk. Satu kalimat jujur lebih aman daripada daftar fitur template yang tidak kamu tawarkan.</p><p class=\"mb-4\">Minta AI mengganti angka dan label paket saja. Jangan izinkan menambah skrip pembayaran pihak ketiga sebelum kamu paham datanya.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Fill a Template Pricing Page with Real Numbers",
          desc: "Replace dummy plans, keep the currency consistent, and do not leave buy buttons pointing at sample links.",
          content: "<p class=\"mb-4\">Many Clincoo templates ship three pricing cards with fictional numbers. Visitors who open the subdomain will treat those as your rates. Change them before you deploy.</p><p class=\"mb-4\">Keep currency and period consistent. Do not mix Rp and USD, or \"per month\" on one card and \"per project\" on another with no note.</p><p class=\"mb-4\">Card buttons should go to contact, checkout, or a WhatsApp number you own. Remove sample hrefs and \"Buy now\" if you are not ready to sell automatically.</p><p class=\"mb-4\">Say what is included. One honest sentence is safer than a template feature list you do not actually offer.</p><p class=\"mb-4\">Ask the AI to change numbers and plan labels only. Do not let it add a third-party payment script before you understand the data it sends.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "template-font-lokal-bukan-cdn-berat",
      langs: {
        "id": {
          title: "Pakai Font Lokal di Template, Bukan CDN yang Berat",
          desc: "Kurangi request font pihak ketiga agar template Clincoo cepat dan tetap terlihat utuh saat offline pratinjau.",
          content: "<p class=\"mb-4\">Template sering memanggil Google Fonts atau CDN lain. Itu menambah request, dan pratinjau editor bisa menunggu font sebelum teks stabil.</p><p class=\"mb-4\">Jika merekmu cukup dengan sistem font atau satu file woff2 di folder aset, pakai itu. Layout tidak bergantung pada jaringan pengunjung.</p><p class=\"mb-4\">Kalau tetap butuh font kustom, unduh file yang kamu punya lisensinya, simpan di proyek, dan rujuk lewat @font-face. Jangan sisakan dua keluarga font untuk satu heading.</p><p class=\"mb-4\">Setelah ganti font, cek overflow pada tombol dan menu. Huruf yang lebih lebar bisa memecah navbar yang tadi pas.</p><p class=\"mb-4\">Instruksi ke AI harus spesifik: ganti @import menjadi @font-face lokal pada file CSS ini. Hindari perintah \"buat tipografi baru\" yang menyentuh seluruh stylesheet.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Use Local Fonts in a Template Instead of a Heavy CDN",
          desc: "Cut third-party font requests so a Clincoo template stays fast and still looks whole in offline preview.",
          content: "<p class=\"mb-4\">Templates often call Google Fonts or another CDN. That adds requests, and the editor preview may wait on fonts before text settles.</p><p class=\"mb-4\">If your brand is fine with a system stack or one woff2 file in the assets folder, use that. Layout then does not depend on the visitor's network.</p><p class=\"mb-4\">If you still need a custom face, download a file you are licensed to use, keep it in the project, and point to it with @font-face. Do not leave two families on one heading.</p><p class=\"mb-4\">After you change fonts, check overflow on buttons and the menu. A wider face can break a navbar that used to fit.</p><p class=\"mb-4\">Instructions to the AI should be specific: replace this @import with a local @font-face in this CSS file. Avoid \"create new typography\" commands that touch the whole stylesheet.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "template-preview-sebelum-ganti-template-lain",
      langs: {
        "id": {
          title: "Pratinjau Dulu sebelum Ganti ke Template Clincoo Lain",
          desc: "Jangan timpa proyek yang sudah diedit. Cadangkan file, bandingkan struktur, baru pindahkan salinan yang sudah benar.",
          content: "<p class=\"mb-4\">Mengganti template terasa cepat, tapi file lama yang sudah kamu tulis bisa tertimpa. Cadangkan index.html dan folder aset sebelum mengambil kerangka baru.</p><p class=\"mb-4\">Bandingkan struktur. Template baru mungkin memakai nama CSS berbeda atau meletakkan gambar di folder lain. Salin teks dan foto secara sadar, bukan menimpa buta.</p><p class=\"mb-4\">Pratinjau template baru dalam proyek kosong jika bisa. Pastikan kamu suka grid dan navigasinya sebelum memindahkan konten bisnis.</p><p class=\"mb-4\">Jangan minta AI \"terapkan template ini ke semua file\". Perintah itu sering mencampur kelas lama dan baru sampai layout pecah.</p><p class=\"mb-4\">Clincoo men-deploy apa yang ada di workspace. Ganti template adalah keputusan editor, bukan tombol ajaib. Pindahkan salinan yang sudah kamu baca.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Preview Before You Switch to Another Clincoo Template",
          desc: "Do not overwrite a project you already edited. Back up files, compare structure, then move copy that is already right.",
          content: "<p class=\"mb-4\">Switching templates feels fast, but files you already wrote can be overwritten. Back up index.html and the assets folder before you pull in a new frame.</p><p class=\"mb-4\">Compare structure. A new template may use different CSS names or keep images in another folder. Copy text and photos on purpose instead of overwriting blindly.</p><p class=\"mb-4\">Preview the new template in an empty project if you can. Make sure you like the grid and navigation before you move business copy.</p><p class=\"mb-4\">Do not ask the AI to \"apply this template to every file\". That command often mixes old and new classes until the layout breaks.</p><p class=\"mb-4\">Clincoo deploys whatever is in the workspace. Changing templates is an editor decision, not a magic button. Move copy you have actually read.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["template"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["template"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
