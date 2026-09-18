// Clinqoo Blog — artikel cerita tambahan 5 2026-09-18 (merge ke data_cerita)
(function(){
  var extra = [
    {
      id: "cerita-halaman-status-gangguan",
      langs: {
        "id": {
          title: "Halaman Status yang Menyelamatkan Grup Chat Saat Situs Sempat Down",
          desc: "Cerita tim kecil yang menaruh satu halaman status di Clinqoo supaya orang tidak menebak-nebak lewat stiker saat layanan sempat macet.",
          content: "<p class=\"mb-4\">Ketika situs sempat tidak bisa dibuka, grup chat biasanya lebih ramai daripada halaman itu sendiri. Orang menanyakan apakah server mati, apakah mereka salah ketik URL, atau apakah pembayaran gagal. Satu halaman status di Clinqoo memotong tebakan itu.</p><p class=\"mb-4\">Isinya cukup tiga blok: kondisi saat ini, jam terakhir dicek, dan satu cara menghubungi. Bukan dashboard monitoring. Bukan janji uptime yang berlebihan.</p><p class=\"mb-4\">Halaman itu tinggal di proyek terpisah agar tetap bisa di-deploy meski situs utama sedang diperbaiki. Subdomain <code>.clinqoo.biz.id</code> yang sudah ada di bio tetap dipakai.</p><p class=\"mb-4\">Setelah gangguan selesai, sunting satu kalimat dan deploy ulang. Arsip singkat di halaman yang sama lebih jujur daripada menghapus jejak.</p><p class=\"mb-4\">Siapkan halaman status sederhana di <a href=\"https://clinqoo.pages.dev/\" target=\"_blank\" rel=\"noopener\">clinqoo.pages.dev</a>.</p>",
          source: "Clinqoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clinqoo"
        },
        "en": {
          title: "A Status Page That Calms the Chat Group When the Site Blips",
          desc: "The story of a small team that kept one Clinqoo status page so people would stop guessing with stickers when a service stalled.",
          content: "<p class=\"mb-4\">When a site briefly fails to open, the chat group is often busier than the site itself. People ask if the server is down, if they mistyped the URL, or if a payment failed. One Clinqoo status page cuts that guessing.</p><p class=\"mb-4\">Three blocks are enough: current state, last checked time, and one way to reach you. Not a monitoring dashboard. Not an over-promised uptime badge.</p><p class=\"mb-4\">Keep that page in a separate project so you can still deploy it while the main site is being fixed. The <code>.clinqoo.biz.id</code> subdomain already in the bio stays useful.</p><p class=\"mb-4\">When the incident ends, edit one sentence and deploy again. A short archive on the same page is more honest than erasing the trace.</p><p class=\"mb-4\">Prepare a simple status page at <a href=\"https://clinqoo.pages.dev/\" target=\"_blank\" rel=\"noopener\">clinqoo.pages.dev</a>.</p>",
          source: "Clinqoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clinqoo platform"
        }
      }
    },
    {
      id: "cerita-dua-orang-satu-workspace",
      langs: {
        "id": {
          title: "Dua Orang, Satu Workspace: Giliran Menyimpan yang Tidak Boleh Dilupakan",
          desc: "Cerita kolaborasi di Clinqoo yang berjalan karena satu orang menyimpan dulu, yang lain membuka pratinjau, bukan karena keduanya mengetik di file yang sama tanpa bicara.",
          content: "<p class=\"mb-4\">Dua orang bisa mengerjakan situs yang sama di Clinqoo. Yang merusak suasana bukan editornya, melainkan dua tab yang menimpa satu file tanpa urutan.</p><p class=\"mb-4\">Pola yang bertahan: satu orang menyimpan dan bilang file mana yang berubah. Yang lain membuka pratinjau dulu, baru menyentuh CSS atau teks. AI dipakai untuk merapikan satu bagian, bukan untuk menulis ulang seluruh proyek diam-diam.</p><p class=\"mb-4\">Kalau ada GitHub, commit pendek jadi catatan. Kalau belum, ekspor ZIP sebelum merombak besar.</p><p class=\"mb-4\">Kolaborasi terasa dewasa ketika deploy hanya dilakukan setelah keduanya melihat pratinjau di HP.</p><p class=\"mb-4\">Buka workspace bersama di <a href=\"https://clinqoo.pages.dev/\" target=\"_blank\" rel=\"noopener\">clinqoo.pages.dev</a>.</p>",
          source: "Clinqoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clinqoo"
        },
        "en": {
          title: "Two People, One Workspace: The Save Turn You Should Not Skip",
          desc: "A Clinqoo collaboration story that works because one person saves first and the other opens preview — not because both type the same file in silence.",
          content: "<p class=\"mb-4\">Two people can work on the same Clinqoo site. What spoils the mood is not the editor; it is two tabs overwriting one file with no order.</p><p class=\"mb-4\">The pattern that lasts: one person saves and says which file changed. The other opens preview first, then touches CSS or copy. AI tidies one section; it does not silently rewrite the whole project.</p><p class=\"mb-4\">If GitHub is connected, a short commit is the note. If not, export a ZIP before a large rewrite.</p><p class=\"mb-4\">Collaboration feels grown-up when deploy happens only after both people checked preview on a phone.</p><p class=\"mb-4\">Open a shared workspace at <a href=\"https://clinqoo.pages.dev/\" target=\"_blank\" rel=\"noopener\">clinqoo.pages.dev</a>.</p>",
          source: "Clinqoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clinqoo platform"
        }
      }
    },
    {
      id: "cerita-nama-file-yang-bisa-ditemukan",
      langs: {
        "id": {
          title: "Nama File yang Akhirnya Bisa Ditemukan Tanpa Bertanya ke Diri Sendiri",
          desc: "Cerita merapikan index.html, styles.css, dan halaman tambahan di Clinqoo supaya proyek tidak lagi penuh final2-revisi-benar.html.",
          content: "<p class=\"mb-4\">Proyek Clinqoo yang terasa kacau sering bukan karena kodenya jelek, melainkan karena file bernama <code>baru.html</code>, <code>final2.html</code>, dan <code>coba.css</code> hidup berdampingan.</p><p class=\"mb-4\">Seseorang lalu merapikan: satu <code>index.html</code>, satu stylesheet utama, halaman lain memakai nama yang sama dengan menu. Terminal <code>ls</code> tiba-tiba berguna.</p><p class=\"mb-4\">AI boleh mengusulkan nama kelas. Yang memutuskan struktur folder tetap kamu, supaya minggu depan masih ketemu.</p><p class=\"mb-4\">Setelah nama rapi, deploy terasa lebih tenang. Tidak ada tebakan file mana yang benar-benar tayang.</p><p class=\"mb-4\">Rapikan nama file di editor <a href=\"https://clinqoo.pages.dev/\" target=\"_blank\" rel=\"noopener\">clinqoo.pages.dev</a>.</p>",
          source: "Clinqoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clinqoo"
        },
        "en": {
          title: "File Names You Can Find Without Asking Yourself",
          desc: "The story of cleaning index.html, styles.css, and extra pages in Clinqoo so a project is no longer full of final2-revision-real.html files.",
          content: "<p class=\"mb-4\">A Clinqoo project often feels messy not because the code is bad, but because files named <code>baru.html</code>, <code>final2.html</code>, and <code>coba.css</code> live side by side.</p><p class=\"mb-4\">Someone then tidies: one <code>index.html</code>, one main stylesheet, other pages named like the menu. The terminal <code>ls</code> suddenly helps.</p><p class=\"mb-4\">AI may suggest class names. You still decide the folder shape so you can find things next week.</p><p class=\"mb-4\">After names are clean, deploy feels calmer. There is no guess about which file is actually live.</p><p class=\"mb-4\">Tidy file names in the editor at <a href=\"https://clinqoo.pages.dev/\" target=\"_blank\" rel=\"noopener\">clinqoo.pages.dev</a>.</p>",
          source: "Clinqoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clinqoo platform"
        }
      }
    },
    {
      id: "cerita-situs-rt-dan-sekolah",
      langs: {
        "id": {
          title: "Situs RT dan Sekolah yang Cukup Ditempel di Grup Warga",
          desc: "Cerita halaman Clinqoo untuk pengumuman warga atau jadwal sekolah: jam, tempat, kontak, tanpa aplikasi yang tidak pernah dibuka orang tua.",
          content: "<p class=\"mb-4\">Pengumuman RT dan sekolah sering hilang di antara foto dan pesan berantai. Halaman Clinqoo yang tipis — judul, tanggal, tempat, satu nomor kontak — lebih mudah dibuka ulang.</p><p class=\"mb-4\">Tidak perlu akun untuk warga. Cukup subdomain yang sama setiap kali ada kerja bakti atau rapat. Kalau jam berubah, sunting satu baris lalu deploy.</p><p class=\"mb-4\">Pratinjau di HP wajib. Warga hampir selalu membuka tautan dari WhatsApp, bukan dari laptop sekretaris.</p><p class=\"mb-4\">Template komunitas bisa jadi kerangka. Isi yang dipakai tetap data lokal: nama ketua, lokasi posyandu, atau gerbang sekolah.</p><p class=\"mb-4\">Buat halaman warga di <a href=\"https://clinqoo.pages.dev/\" target=\"_blank\" rel=\"noopener\">clinqoo.pages.dev</a>.</p>",
          source: "Clinqoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clinqoo"
        },
        "en": {
          title: "An RT or School Page You Can Paste in the Neighborhood Group",
          desc: "A Clinqoo page for neighborhood notices or school schedules: time, place, contact — without an app parents never open.",
          content: "<p class=\"mb-4\">Neighborhood and school notices often vanish between photos and forwarded messages. A thin Clinqoo page — title, date, place, one contact number — is easier to reopen.</p><p class=\"mb-4\">Residents do not need an account. Keep the same subdomain for each cleanup day or meeting. If the time slips, edit one line and deploy.</p><p class=\"mb-4\">Phone preview is required. People almost always open the link from WhatsApp, not from the secretary laptop.</p><p class=\"mb-4\">A community template can be the frame. The content that matters is still local: chair name, clinic spot, or school gate.</p><p class=\"mb-4\">Make a neighborhood page at <a href=\"https://clinqoo.pages.dev/\" target=\"_blank\" rel=\"noopener\">clinqoo.pages.dev</a>.</p>",
          source: "Clinqoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clinqoo platform"
        }
      }
    },
    {
      id: "cerita-mode-gelap-yang-bukan-prioritas",
      langs: {
        "id": {
          title: "Mode Gelap yang Sengaja Ditunda sampai Teksnya Bisa Dibaca",
          desc: "Cerita pembuat situs Clinqoo yang menahan diri menambah dark mode sebelum kontras, ukuran huruf, dan hierarki halaman sudah beres.",
          content: "<p class=\"mb-4\">Mode gelap terasa seperti fitur dewasa. Di banyak proyek Clinqoo, ia justru menunda halaman pertama yang bisa dibaca di siang hari.</p><p class=\"mb-4\">Urutan yang akhirnya dipakai: rapikan teks, jarak, dan kontras di mode terang. Baru kemudian, jika sempat, tambah kelas gelap yang tidak merusak tombol dan formulir.</p><p class=\"mb-4\">AI bisa mengusulkan palet. Pratinjau di HP di bawah sinar jendela lebih jujur daripada selera di laptop malam-malam.</p><p class=\"mb-4\">Situs yang hidup lebih dulu dengan huruf yang terbaca mengalahkan situs yang gelap tapi tombolnya hilang.</p><p class=\"mb-4\">Selesaikan versi terang dulu di <a href=\"https://clinqoo.pages.dev/\" target=\"_blank\" rel=\"noopener\">clinqoo.pages.dev</a>.</p>",
          source: "Clinqoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clinqoo"
        },
        "en": {
          title: "Dark Mode Deliberately Delayed Until the Text Was Readable",
          desc: "The story of a Clinqoo builder who refused to add dark mode before contrast, type size, and page hierarchy were already solid.",
          content: "<p class=\"mb-4\">Dark mode feels like a grown-up feature. On many Clinqoo projects it only delays the first page that is readable in daylight.</p><p class=\"mb-4\">The order that finally worked: tidy copy, spacing, and contrast in light mode. Only then, if time remains, add a dark class that does not break buttons and forms.</p><p class=\"mb-4\">AI can suggest a palette. Phone preview under a window is more honest than late-night taste on a laptop.</p><p class=\"mb-4\">A live site with readable type beats a dark site whose buttons disappear.</p><p class=\"mb-4\">Finish the light version first at <a href=\"https://clinqoo.pages.dev/\" target=\"_blank\" rel=\"noopener\">clinqoo.pages.dev</a>.</p>",
          source: "Clinqoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clinqoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["cerita"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["cerita"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
