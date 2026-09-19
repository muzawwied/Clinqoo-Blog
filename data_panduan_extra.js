// Clincoo Blog — artikel panduan tambahan (merge ke data_panduan)
(function(){
  var extra = [
    {
      id: "ekspor-proyek-clinqoo-ke-zip",
      langs: {
        "id": {
          title: "Ekspor Proyek Clincoo ke ZIP agar Kode Tetap Milikmu",
          desc: "Cara mengunduh proyek sebagai arsip ZIP, kapan perlu diekspor, dan apa yang harus dicek sebelum file keluar dari Clincoo.",
          content: "<p class=\"mb-4\">Kode di Clincoo tetap milikmu. Fitur ekspor ZIP ada supaya kamu bisa menyimpan salinan di komputer, mengirim ke klien, atau pindah ke hosting lain tanpa kehilangan berkas.</p><p class=\"mb-4\">Sebelum menekan unduh, buka explorer dan pastikan tidak ada file dummy, cuplikan yang tidak terpakai, atau gambar berukuran besar yang tidak muncul di halaman. Arsip yang rapi lebih mudah dibuka lagi nanti.</p><p class=\"mb-4\">Simpan dulu semua tab. Ekspor mengambil versi terakhir yang tersimpan, bukan draf yang masih mengambang di editor. Kalau judul tab browser masih Untitled, perbaiki itu juga — nama berkas dan judul halaman ikut terbaca orang lain.</p><p class=\"mb-4\">Setelah ZIP terunduh, ekstrak di komputer dan buka index.html di browser lokal. Kalau gambar pecah, biasanya path relatif salah. Perbaiki di Clincoo, simpan, lalu ekspor ulang. Jangan menumpuk lima versi ZIP dengan nama final-final.</p><p class=\"mb-4\">Simpan ZIP di folder yang kamu ingat, plus catatan tanggal. Cadangan di luar platform adalah jaring pengaman saat koneksi putus atau kamu ganti perangkat.</p>",
          source: "Clincoo", sourceUrl: "https://app.clincoo.buzz/", sourceSnippet: "Ekspor proyek Clincoo",
          source2: "Clincoo Editor", sourceUrl2: "https://app.clincoo.buzz/", sourceSnippet2: "Berkas proyek di editor"
        },
        "en": {
          title: "Export a Clincoo Project to ZIP So the Code Stays Yours",
          desc: "How to download a project as a ZIP archive, when to export, and what to check before the files leave Clincoo.",
          content: "<p class=\"mb-4\">Code in Clincoo still belongs to you. ZIP export exists so you can keep a copy on your computer, send it to a client, or move to another host without losing files.</p><p class=\"mb-4\">Before you hit download, open the explorer and drop dummy files, unused snippets, and oversized images that never appear on the page. A tidy archive is easier to reopen later.</p><p class=\"mb-4\">Save every tab first. Export uses the last saved version, not a draft still floating in the editor. If the browser tab still says Untitled, fix that too — filenames and page titles will be read by someone else.</p><p class=\"mb-4\">After the ZIP lands, extract it and open index.html in a local browser. Broken images usually mean a bad relative path. Fix it in Clincoo, save, and export again. Do not hoard five ZIP copies named final-final.</p><p class=\"mb-4\">Keep the ZIP in a folder you will remember, plus a date note. An off-platform backup is the safety net when the network drops or you switch devices.</p>",
          source: "Clincoo", sourceUrl: "https://app.clincoo.buzz/", sourceSnippet: "Ekspor proyek Clincoo",
          source2: "Clincoo Editor", sourceUrl2: "https://app.clincoo.buzz/", sourceSnippet2: "Berkas proyek di editor"
        }
      }
    },
    {
      id: "ganti-template-tanpa-kehilangan-teks",
      langs: {
        "id": {
          title: "Ganti Template Clincoo tanpa Kehilangan Teks yang Sudah Ditulis",
          desc: "Urutan aman saat kamu ingin layout baru tetapi paragraf, tautan, dan gambar lama harus tetap utuh.",
          content: "<p class=\"mb-4\">Ganti template terasa menggoda begitu situs mulai terasa sempit. Masalahnya, layout baru sering menimpa berkas yang sudah kamu isi. Cadangkan dulu, baru merombak.</p><p class=\"mb-4\">Salin teks penting ke satu file catatan di dalam proyek — judul, paragraf tentang, alamat, dan tautan media. Jangan andalkan memori. Gambar yang sudah dikompresi juga catat nama filenya.</p><p class=\"mb-4\">Ekspor ZIP versi sekarang. Kalau template baru mengecewakan, kamu masih bisa kembali ke struktur lama tanpa menebak-nebak.</p><p class=\"mb-4\">Setelah template baru terbuka, tempel teks dari catatan, bukan dari ingatan. Cek menu, tautan, dan pratinjau mobile. Kelas CSS lama mungkin tidak berlaku; sesuaikan sedikit, jangan menempel gaya lama secara paksa.</p><p class=\"mb-4\">Clincoo memudahkan mulai dari template. Yang menjaga hasilmu tetap utuh adalah kebiasaan cadangkan-sebelum-ganti.</p>",
          source: "Clincoo", sourceUrl: "https://app.clincoo.buzz/", sourceSnippet: "Template Clincoo",
          source2: "Clincoo Editor", sourceUrl2: "https://app.clincoo.buzz/", sourceSnippet2: "Berkas proyek"
        },
        "en": {
          title: "Switch a Clincoo Template without Losing Text You Already Wrote",
          desc: "A safe order when you want a new layout but old paragraphs, links, and images must stay intact.",
          content: "<p class=\"mb-4\">Switching templates is tempting once a site feels cramped. The risk is that a new layout overwrites files you already filled. Back up first, then rebuild.</p><p class=\"mb-4\">Copy key text into a notes file inside the project — titles, about paragraphs, address, and social links. Do not rely on memory. Write down the filenames of compressed images too.</p><p class=\"mb-4\">Export a ZIP of the current version. If the new template disappoints, you can return to the old structure without guessing.</p><p class=\"mb-4\">Once the new template opens, paste from the notes, not from memory. Check menus, links, and mobile preview. Old CSS classes may no longer apply; adjust lightly instead of forcing the previous styles.</p><p class=\"mb-4\">Clincoo makes it easy to start from a template. What keeps your work intact is the habit of backing up before you switch.</p>",
          source: "Clincoo", sourceUrl: "https://app.clincoo.buzz/", sourceSnippet: "Template Clincoo",
          source2: "Clincoo Editor", sourceUrl2: "https://app.clincoo.buzz/", sourceSnippet2: "Berkas proyek"
        }
      }
    },
    {
      id: "kelola-beberapa-proyek-di-clinqoo",
      langs: {
        "id": {
          title: "Kelola Beberapa Proyek Clincoo tanpa Campur Aduk",
          desc: "Cara menamai, memisahkan, dan berpindah antar proyek agar situs klien tidak tertukar dengan latihan pribadi.",
          content: "<p class=\"mb-4\">Satu akun Clincoo bisa menampung lebih dari satu situs. Tanpa nama yang jelas, kamu akan membuka proyek salah saat terburu-buru deploy.</p><p class=\"mb-4\">Pakai pola nama yang membosankan dan konsisten: klien-jenis-tahun, atau latihan-topik. Hindari \"tes\", \"baru\", dan \"final\". Nama itu tidak berarti apa-apa minggu depan.</p><p class=\"mb-4\">Jangan meniru berkas antar proyek dengan salin-tempel massal kalau strukturnya berbeda. Ambil hanya teks dan gambar yang memang dipakai. File sisa dari proyek lain membuat explorer sesak.</p><p class=\"mb-4\">Sebelum pindah proyek, simpan tab yang terbuka. Pratinjau milik proyek A tidak otomatis aman untuk proyek B. Buka pratinjau lagi setelah berganti.</p><p class=\"mb-4\">Tutup proyek yang tidak kamu kerjakan hari itu. Fokus satu situs per sesi lebih cepat daripada tiga tab yang saling menimpa di kepala.</p>",
          source: "Clincoo", sourceUrl: "https://app.clincoo.buzz/", sourceSnippet: "Proyek Clincoo",
          source2: "Clincoo Editor", sourceUrl2: "https://app.clincoo.buzz/", sourceSnippet2: "Daftar proyek"
        },
        "en": {
          title: "Manage Several Clincoo Projects without Mixing Them Up",
          desc: "How to name, separate, and switch projects so a client site is never confused with a personal exercise.",
          content: "<p class=\"mb-4\">One Clincoo account can hold more than one site. Without clear names you will open the wrong project when you rush a deploy.</p><p class=\"mb-4\">Use a boring, consistent name pattern: client-type-year, or practice-topic. Avoid \"test\", \"new\", and \"final\". Those words mean nothing next week.</p><p class=\"mb-4\">Do not copy entire file trees between projects when the structures differ. Take only the text and images you actually need. Leftover files from another project crowd the explorer.</p><p class=\"mb-4\">Save open tabs before you switch projects. A preview from project A is not automatically safe for project B. Open preview again after the switch.</p><p class=\"mb-4\">Close projects you are not working on today. One site per session is faster than three tabs competing in your head.</p>",
          source: "Clincoo", sourceUrl: "https://app.clincoo.buzz/", sourceSnippet: "Proyek Clincoo",
          source2: "Clincoo Editor", sourceUrl2: "https://app.clincoo.buzz/", sourceSnippet2: "Daftar proyek"
        }
      }
    },
    {
      id: "isi-halaman-kontak-yang-benar",
      langs: {
        "id": {
          title: "Isi Halaman Kontak Clincoo yang Benar-benar Bisa Dihubungi",
          desc: "Apa yang wajib ada di halaman kontak situs pertama: satu saluran utama, jam respon, dan tautan yang tidak pecah.",
          content: "<p class=\"mb-4\">Halaman kontak sering jadi tempat menumpuk semua ikon. Pengunjung hanya butuh satu cara yang jelas untuk bertanya, plus harapan kapan kamu membalas.</p><p class=\"mb-4\">Pilih satu saluran utama: email, WhatsApp, atau formulir. Tulis itu di atas. Saluran kedua boleh ada, tetapi jangan bersaing di baris pertama.</p><p class=\"mb-4\">Uji tautan di pratinjau desktop dan HP. Nomor telepon harus bisa diketuk. Alamat email jangan disamarkan sampai tidak bisa disalin.</p><p class=\"mb-4\">Tambah satu kalimat tentang waktu respon — misalnya hari kerja, dalam 24 jam. Harapan yang jujur mengurangi pesan berulang.</p><p class=\"mb-4\">Jangan taruh halaman kontak tanpa tautan dari menu. Kalau orang tidak menemukannya, saluran itu tidak ada.</p>",
          source: "Clincoo", sourceUrl: "https://app.clincoo.buzz/", sourceSnippet: "Membangun halaman situs",
          source2: "Clincoo Deploy", sourceUrl2: "https://app.clincoo.buzz/deploy/", sourceSnippet2: "Pratinjau sebelum bagikan"
        },
        "en": {
          title: "Fill a Clincoo Contact Page People Can Actually Use",
          desc: "What belongs on a first-site contact page: one primary channel, a response window, and links that do not break.",
          content: "<p class=\"mb-4\">Contact pages often become a pile of icons. Visitors need one clear way to ask a question, plus a sense of when you will reply.</p><p class=\"mb-4\">Pick one primary channel: email, WhatsApp, or a form. Put it first. A second channel is fine, but it should not compete on the opening line.</p><p class=\"mb-4\">Test the links in desktop and phone preview. Phone numbers should be tappable. Email addresses should not be obfuscated until they cannot be copied.</p><p class=\"mb-4\">Add one sentence about response time — for example weekdays, within 24 hours. Honest expectations cut repeat messages.</p><p class=\"mb-4\">Do not ship a contact page with no menu link. If people cannot find it, the channel does not exist.</p>",
          source: "Clincoo", sourceUrl: "https://app.clincoo.buzz/", sourceSnippet: "Membangun halaman situs",
          source2: "Clincoo Deploy", sourceUrl2: "https://app.clincoo.buzz/deploy/", sourceSnippet2: "Pratinjau sebelum bagikan"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["panduan"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["panduan"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
