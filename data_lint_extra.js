// Clincoo Blog — artikel lint tambahan 2026-09-24
(function(){
  var extra = [
    {
      id: "lint-hapus-console-log-produksi",
      langs: {
        "id": {
          title: "Hapus console.log Sebelum Menayangkan Halaman Clincoo",
          desc: "Log debug yang tertinggal membocorkan alur dan membuat konsol pengunjung berisik.",
          content: "<p class=\"mb-4\">Saat membangun halaman di editor.clincoo.buzz, console.log membantu menelusuri nilai form atau status fetch. Masalahnya, log itu sering ikut ter-deploy ke app.clincoo.buzz.</p><p class=\"mb-4\">Buka DevTools di pratinjau, muat ulang, dan catat setiap baris yang muncul tanpa aksi pengguna. Itu kandidat yang harus dihapus atau dibungkus flag debug.</p><p class=\"mb-4\">Jangan biarkan log berisi token, email, atau isi localStorage. Pengunjung bisa membuka konsol dan menyalinnya.</p><p class=\"mb-4\">Minta AI menandai semua console.log, console.debug, dan debugger di berkas halaman. Hapus yang tidak perlu, sisakan satu logger yang bisa dimatikan.</p><p class=\"mb-4\">Clincoo mengeksekusi skrip apa adanya. Membersihkan log adalah lint produksi yang murah dan menjaga privasi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Remove console.log Before Publishing a Clincoo Page",
          desc: "Leftover debug logs leak flow details and clutter a visitor's console.",
          content: "<p class=\"mb-4\">While building a page in editor.clincoo.buzz, console.log helps trace form values or fetch state. The problem is those logs often ship to app.clincoo.buzz.</p><p class=\"mb-4\">Open DevTools in the preview, reload, and note every line that appears with no user action. Those lines should be removed or wrapped in a debug flag.</p><p class=\"mb-4\">Never leave logs that contain tokens, emails, or localStorage contents. Visitors can open the console and copy them.</p><p class=\"mb-4\">Ask the AI to mark every console.log, console.debug, and debugger in the page file. Delete what you do not need and keep one logger you can disable.</p><p class=\"mb-4\">Clincoo runs scripts as written. Cleaning logs is cheap production lint and it protects privacy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "lint-taut-internal-jangan-404",
      langs: {
        "id": {
          title: "Periksa Tautan Internal yang Mengarah ke 404 di Clincoo",
          desc: "href ke slug lama atau folder yang sudah diganti nama merusak navigasi setelah deploy.",
          content: "<p class=\"mb-4\">Halaman Clincoo sering menaut ke artikel blog atau section lain. Setelah slug diganti, taut lama tetap di markup dan pengunjung mendarat di 404.</p><p class=\"mb-4\">Kumpulkan semua href yang diawali / atau nama folder proyek. Buka satu per satu di pratinjau editor.clincoo.buzz.</p><p class=\"mb-4\">Jangan andalkan teks taut yang masih terdengar benar. Yang diuji adalah URL, bukan label.</p><p class=\"mb-4\">Minta AI membuat daftar taut internal beserta target. Tandai yang tidak punya pasangan folder. Perbaiki sebelum menayangkan.</p><p class=\"mb-4\">Clincoo tidak menulis ulang taut otomatis. Lint tautan adalah cara paling sederhana menjaga navigasi utuh.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Check Internal Links that Point to a 404 on Clincoo",
          desc: "href values that still use an old slug or renamed folder break navigation after deploy.",
          content: "<p class=\"mb-4\">Clincoo pages often link to blog articles or other sections. After a slug change, the old href stays in the markup and visitors land on a 404.</p><p class=\"mb-4\">Collect every href that starts with / or a project folder name. Open each one in the editor.clincoo.buzz preview.</p><p class=\"mb-4\">Do not trust link text that still sounds right. You test the URL, not the label.</p><p class=\"mb-4\">Ask the AI for a list of internal links and their targets. Mark any that have no matching folder. Fix them before you publish.</p><p class=\"mb-4\">Clincoo does not rewrite links for you. Link lint is the simplest way to keep navigation intact.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "lint-alt-gambar-wajib-ada",
      langs: {
        "id": {
          title: "Isi atribut alt pada Setiap Gambar Halaman Clincoo",
          desc: "img tanpa alt gagal di pembaca layar dan membuat lint akses dasar tidak lulus.",
          content: "<p class=\"mb-4\">Gambar hero, ikon, dan screenshot di halaman Clincoo sering tertinggal tanpa alt. Pembaca layar hanya menyebut image.</p><p class=\"mb-4\">Tulis alt yang menjelaskan fungsi, bukan nama berkas. Logo Clincoo cukup alt=\"Clincoo\". Dekorasi murni boleh alt kosong yang disengaja.</p><p class=\"mb-4\">Jangan menjejalkan kata kunci ke alt. Kalimat pendek yang jujur lebih aman untuk SEO dan akses.</p><p class=\"mb-4\">Minta AI mendaftar semua tag img beserta alt-nya. Lengkapi yang kosong di editor.clincoo.buzz lalu cek ulang di Elements.</p><p class=\"mb-4\">Clincoo menayangkan markup apa adanya. alt yang lengkap adalah lint akses paling dasar sebelum halaman tayang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Give Every Image on a Clincoo Page an alt Attribute",
          desc: "An img without alt fails screen readers and fails basic access lint.",
          content: "<p class=\"mb-4\">Hero images, icons, and screenshots on Clincoo pages often ship without alt. A screen reader then just says image.</p><p class=\"mb-4\">Write alt that explains the role, not the file name. The Clincoo logo can use alt=\"Clincoo\". Pure decoration may use an intentional empty alt.</p><p class=\"mb-4\">Do not stuff keywords into alt. A short honest sentence is safer for SEO and access.</p><p class=\"mb-4\">Ask the AI to list every img tag and its alt. Fill the empty ones in editor.clincoo.buzz and recheck in Elements.</p><p class=\"mb-4\">Clincoo serves markup as written. Complete alt text is the most basic access lint before a page goes live.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "lint-hindari-listener-ganda",
      langs: {
        "id": {
          title: "Cegah addEventListener Dipasang Dua Kali di Skrip Clincoo",
          desc: "Listener ganda membuat tombol submit dua kali dan form terkirim dobel.",
          content: "<p class=\"mb-4\">Skrip halaman Clincoo kadang dijalankan ulang saat pratinjau hot-reload atau saat blok disalin. addEventListener menumpuk tanpa menghapus yang lama.</p><p class=\"mb-4\">Pakai { once: true } untuk aksi sekali. Atau simpan flag window.__clincooBound sebelum memasang listener.</p><p class=\"mb-4\">Uji dengan mengklik tombol berkali-kali di editor.clincoo.buzz sambil melihat console.count pada handler.</p><p class=\"mb-4\">Minta AI mencari addEventListener tanpa penjaga. Gabungkan inisialisasi ke satu fungsi yang aman dipanggil ulang.</p><p class=\"mb-4\">Clincoo tidak mengelola siklus listener untukmu. Lint ini mencegah aksi dobel setelah deploy ke app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Stop addEventListener from Binding Twice in Clincoo Scripts",
          desc: "Duplicate listeners make a submit button fire twice and send the form twice.",
          content: "<p class=\"mb-4\">A Clincoo page script sometimes runs again on preview hot-reload or when a block is copied. addEventListener stacks without removing the old one.</p><p class=\"mb-4\">Use { once: true } for one-shot actions. Or set a window.__clincooBound flag before attaching the listener.</p><p class=\"mb-4\">Test by clicking the button several times in editor.clincoo.buzz while watching console.count on the handler.</p><p class=\"mb-4\">Ask the AI to find addEventListener calls without a guard. Fold init into one function that is safe to call again.</p><p class=\"mb-4\">Clincoo does not manage listener lifecycle for you. This lint prevents double actions after you deploy to app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "lint-rapikan-css-tidak-terpakai",
      langs: {
        "id": {
          title: "Buang Aturan CSS yang Tidak Dipakai di Halaman Clincoo",
          desc: "Kelas sisa dari percobaan lama membesarkan berkas dan membingungkan edit berikutnya.",
          content: "<p class=\"mb-4\">Setelah beberapa iterasi di editor.clincoo.buzz, berkas CSS halaman penuh kelas yang tidak lagi ada di HTML.</p><p class=\"mb-4\">Salin daftar class di markup, lalu bandingkan dengan selektor di style. Yang tidak ketemu adalah kandidat hapus.</p><p class=\"mb-4\">Jangan hapus aturan yang dipakai template bersama. Batasi pembersihan pada CSS khusus halaman.</p><p class=\"mb-4\">Minta AI memetakan class HTML ke aturan CSS. Tinjau usulan hapus secara manual, lalu hard-refresh pratinjau.</p><p class=\"mb-4\">Clincoo menggabungkan CSS halaman apa adanya. CSS ramping mempercepat render dan membuat lint berikutnya lebih mudah.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Drop Unused CSS Rules from a Clincoo Page",
          desc: "Leftover classes from old experiments bloat the file and confuse the next edit.",
          content: "<p class=\"mb-4\">After a few iterations in editor.clincoo.buzz, page CSS fills with classes that no longer exist in the HTML.</p><p class=\"mb-4\">Copy the class list from the markup and compare it with selectors in the style block. Anything missing is a delete candidate.</p><p class=\"mb-4\">Do not delete rules used by a shared template. Limit cleanup to page-specific CSS.</p><p class=\"mb-4\">Ask the AI to map HTML classes to CSS rules. Review delete suggestions by hand, then hard-refresh the preview.</p><p class=\"mb-4\">Clincoo merges page CSS as written. Lean CSS renders faster and makes the next lint pass easier.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["lint"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["lint"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
