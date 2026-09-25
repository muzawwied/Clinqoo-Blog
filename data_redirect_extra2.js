// Clincoo Blog — artikel redirect tambahan 2026-09-25 (WIB)
(function(){
  var extra = [
    {
      id: "redirect-www-atau-apex",
      langs: {
        "id": {
          title: "Pilih www atau Apex, Jangan Biarkan Keduanya Hidup di Clincoo",
          desc: "Dua host untuk situs yang sama memecah indeks. Tentukan satu host resmi lalu alihkan yang lain.",
          content: "<p class=\"mb-4\">Situs Clincoo terbuka di example.com dan www.example.com tanpa pengalih. Analitik dan indeks terpecah.</p><p class=\"mb-4\">Pilih satu host di DNS dan di tautan internal editor.clincoo.buzz. Host cadangan harus mengarah ke host resmi.</p><p class=\"mb-4\">Samakan canonical, sitemap, dan tautan logo ke host yang sama. Jangan campur www dan apex di navigasi.</p><p class=\"mb-4\">Minta AI hanya merapikan tautan host di satu file. Tempel dua URL yang masih hidup.</p><p class=\"mb-4\">Clincoo mengikuti host yang kamu tulis. Satu host resmi menjaga sinyal utuh di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Pick www or Apex; Do Not Leave Both Live in Clincoo",
          desc: "Two hosts for the same site split the index. Name one official host and send the other there.",
          content: "<p class=\"mb-4\">A Clincoo site opens on example.com and www.example.com with no redirect. Analytics and the index split.</p><p class=\"mb-4\">Choose one host in DNS and in internal links in editor.clincoo.buzz. The spare host must point at the official one.</p><p class=\"mb-4\">Match canonical, sitemap, and logo links to the same host. Do not mix www and apex in navigation.</p><p class=\"mb-4\">Ask AI to tidy host links in one file only. Paste the two URLs that still resolve.</p><p class=\"mb-4\">Clincoo follows the host you write. One official host keeps signals intact on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "redirect-pertahankan-query",
      langs: {
        "id": {
          title: "Pertahankan Query String saat Mengalihkan URL Clincoo",
          desc: "Pengalih yang membuang ?utm atau ?ref merusak pelacakan. Salin query ke tujuan jika masih relevan.",
          content: "<p class=\"mb-4\">Halaman lama Clincoo mengalih ke slug baru tetapi menghapus ?utm_source. Kampanye terlihat gagal.</p><p class=\"mb-4\">Jika pengalih memakai skrip lokasi, gabungkan search params lama ke URL baru di editor.clincoo.buzz.</p><p class=\"mb-4\">Buang hanya parameter yang tidak aman atau sudah usang. Jangan hapus semua query secara default.</p><p class=\"mb-4\">Minta AI menyesuaikan satu skrip pengalih. Tempel contoh URL lengkap dengan query.</p><p class=\"mb-4\">Clincoo tidak menyalin query sendiri. Parameter yang utuh menjaga pengukuran di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep the Query String When Redirecting a Clincoo URL",
          desc: "A redirect that drops ?utm atau ?ref breaks tracking. Copy the query to the target when it still matters.",
          content: "<p class=\"mb-4\">An old Clincoo page redirects to a new slug but drops ?utm_source. The campaign looks like a miss.</p><p class=\"mb-4\">If the redirect uses a location script, merge the old search params onto the new URL in editor.clincoo.buzz.</p><p class=\"mb-4\">Drop only unsafe or obsolete parameters. Do not strip every query by default.</p><p class=\"mb-4\">Ask AI to adjust one redirect script. Paste a full example URL with the query.</p><p class=\"mb-4\">Clincoo does not copy query strings for you. Intact parameters keep measurement working on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "redirect-cegah-loop-skrip",
      langs: {
        "id": {
          title: "Cegah Loop location.replace pada Pengalih Clincoo",
          desc: "Skrip yang selalu mengganti lokasi tanpa syarat bisa memutar tab tanpa henti.",
          content: "<p class=\"mb-4\">File pengalih Clincoo memanggil location.replace ke path yang juga memuat skrip yang sama. Tab berputar.</p><p class=\"mb-4\">Bandingkan hostname dan pathname sekarang dengan tujuan sebelum mengganti lokasi di editor.clincoo.buzz.</p><p class=\"mb-4\">Jangan mengalih jika kamu sudah di URL final. Uji di pratinjau dan di situs live.</p><p class=\"mb-4\">Minta AI menambah satu kondisi berhenti. Tempel skrip yang berputar.</p><p class=\"mb-4\">Clincoo menjalankan skrip apa adanya. Syarat berhenti menjaga pengunjung sampai app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Stop location.replace Loops in a Clincoo Redirect",
          desc: "A script that always replaces location with no guard can spin the tab forever.",
          content: "<p class=\"mb-4\">A Clincoo redirect file calls location.replace toward a path that loads the same script. The tab spins.</p><p class=\"mb-4\">Compare the current hostname and pathname with the target before you replace location in editor.clincoo.buzz.</p><p class=\"mb-4\">Do not redirect if you are already on the final URL. Test in preview and on the live site.</p><p class=\"mb-4\">Ask AI to add one stop condition. Paste the spinning script.</p><p class=\"mb-4\">Clincoo runs the script as written. A stop condition gets visitors through to app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "redirect-jangan-andalkan-hash",
      langs: {
        "id": {
          title: "Jangan Andalkan Hash Fragment sebagai Pengalih Clincoo",
          desc: "Hash tidak dikirim ke server. Mesin telusur dan banyak klien mengabaikannya sebagai alamat baru.",
          content: "<p class=\"mb-4\">Tim memindahkan halaman ke /#kontak dan menganggap itu pengalih. Bookmark dan crawl tetap di path lama.</p><p class=\"mb-4\">Buat path nyata atau file pengalih di editor.clincoo.buzz. Hash hanya untuk jangkar di halaman yang sama.</p><p class=\"mb-4\">Jika butuh lompat ke bagian, alihkan dulu ke path benar lalu biarkan hash opsional.</p><p class=\"mb-4\">Minta AI mengganti tautan hash jadi path file. Tempel menu yang masih memakai #halaman.</p><p class=\"mb-4\">Clincoo menayangkan file path, bukan hash. Alamat file menjaga tautan hidup di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Rely on a Hash Fragment as a Clincoo Redirect",
          desc: "A hash is not sent to the server. Search engines and many clients ignore it as a new address.",
          content: "<p class=\"mb-4\">A team moves a page to /#contact and treats that as a redirect. Bookmarks and crawls stay on the old path.</p><p class=\"mb-4\">Create a real path or redirect file in editor.clincoo.buzz. Use a hash only as an in-page anchor.</p><p class=\"mb-4\">If you need to jump to a section, redirect to the correct path first, then keep the hash optional.</p><p class=\"mb-4\">Ask AI to turn hash links into file paths. Paste the menu that still uses #page.</p><p class=\"mb-4\">Clincoo ships file paths, not hashes. A file address keeps links alive on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["redirect"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["redirect"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
