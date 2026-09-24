// Clincoo Blog — artikel lint tambahan 2026-09-24 WIB
(function(){
  var extra = [
    {
      id: "lint-urutkan-atribut-html",
      langs: {
        "id": {
          title: "Urutkan Atribut HTML agar Diff Clincoo Mudah Dibaca",
          desc: "Urutan atribut acak membuat tinjauan perubahan ribut meski isinya sama.",
          content: "<p class=\"mb-4\">Di editor.clincoo.buzz, dua versi halaman sering terlihat berbeda hanya karena class, id, dan href berpindah urutan.</p><p class=\"mb-4\">Tetapkan urutan tetap: id, class, type, name, href atau src, alt, lalu atribut data. Samakan di seluruh form.</p><p class=\"mb-4\">Minta AI mengurutkan atribut tanpa mengubah nilai. Periksa diff: yang tersisa harus perubahan nyata.</p><p class=\"mb-4\">Jangan campur style inline kecuali memang satu-satunya cara. Pindahkan ke class agar atribut lebih pendek.</p><p class=\"mb-4\">Clincoo menyimpan markup apa adanya. Atribut terurut adalah lint yang membuat kolaborasi dan tinjauan AI lebih tenang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Sort HTML Attributes so Clincoo Diffs Stay Readable",
          desc: "Random attribute order makes reviews noisy even when the values did not change.",
          content: "<p class=\"mb-4\">In editor.clincoo.buzz, two page versions often look different only because class, id, and href swapped places.</p><p class=\"mb-4\">Pick a stable order: id, class, type, name, href or src, alt, then data attributes. Use it on every form.</p><p class=\"mb-4\">Ask the AI to sort attributes without changing values. Inspect the diff: what remains should be a real change.</p><p class=\"mb-4\">Avoid mixed inline styles unless they are the only option. Move them to a class so attributes stay short.</p><p class=\"mb-4\">Clincoo stores markup as written. Sorted attributes are lint that keeps collaboration and AI review calm.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "lint-hindari-style-inline-berlebih",
      langs: {
        "id": {
          title: "Batasi Style Inline di Halaman Clincoo",
          desc: "Style di atribut HTML sulit dilint, sulit diubah, dan mudah bertabrakan.",
          content: "<p class=\"mb-4\">Style=\"color:...\" yang menumpuk di banyak tag membuat perbaikan warna di editor.clincoo.buzz lambat.</p><p class=\"mb-4\">Pindahkan pola berulang ke class di blok CSS halaman. Sisakan inline hanya untuk satu kasus darurat.</p><p class=\"mb-4\">Cari atribut style dengan pencarian berkas. Jika satu nilai dipakai lebih dari dua kali, itu class.</p><p class=\"mb-4\">Minta AI mengekstrak style berulang tanpa mengubah tampilan pratinjau. Hard-refresh lalu bandingkan.</p><p class=\"mb-4\">Clincoo merender inline dan class sama-sama. CSS terpusat membuat lint kontras, spasi, dan dark mode jauh lebih mudah.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Limit Inline Styles on a Clincoo Page",
          desc: "Styles sitting on HTML attributes are hard to lint, hard to change, and easy to clash.",
          content: "<p class=\"mb-4\">Stacked style=\"color:...\" attributes make a color fix in editor.clincoo.buzz slow.</p><p class=\"mb-4\">Move repeated patterns into page CSS classes. Keep inline styles only for a single emergency case.</p><p class=\"mb-4\">Search the file for style attributes. If one value appears more than twice, it belongs in a class.</p><p class=\"mb-4\">Ask the AI to extract repeated styles without changing the preview. Hard-refresh and compare.</p><p class=\"mb-4\">Clincoo renders inline rules and classes the same way. Central CSS makes contrast, spacing, and dark-mode lint much easier.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "lint-cek-todo-dan-fixme",
      langs: {
        "id": {
          title: "Hapus Komentar TODO dan FIXME sebelum Tayang Clincoo",
          desc: "Catatan sementara di kode halaman sering ikut terbaca pengunjung di View Source.",
          content: "<p class=\"mb-4\">Komentar TODO: ganti copy atau FIXME: form rusak mudah tertinggal setelah iterasi di editor.clincoo.buzz.</p><p class=\"mb-4\">Cari TODO, FIXME, HACK, dan XXX di HTML, CSS, dan JS halaman. Selesaikan atau pindahkan ke catatan kerja di luar berkas tayang.</p><p class=\"mb-4\">Jangan sisakan kata sandi, nama klien, atau URL staging di komentar. View Source di app.clincoo.buzz menampilkannya.</p><p class=\"mb-4\">Minta AI mendaftar semua komentar non-penjelas. Tinjau satu per satu, jangan hapus dokumentasi yang masih berguna.</p><p class=\"mb-4\">Clincoo tidak menyaring komentar. Membersihkan TODO adalah lint rilis yang menjaga profesionalitas halaman.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Clear TODO and FIXME Comments before Publishing on Clincoo",
          desc: "Scratch notes in page code often show up when a visitor opens View Source.",
          content: "<p class=\"mb-4\">Comments like TODO: replace copy or FIXME: form broken linger after edits in editor.clincoo.buzz.</p><p class=\"mb-4\">Search the page HTML, CSS, and JS for TODO, FIXME, HACK, and XXX. Finish the work or move the note out of the published file.</p><p class=\"mb-4\">Do not leave passwords, client names, or staging URLs in comments. View Source on app.clincoo.buzz will show them.</p><p class=\"mb-4\">Ask the AI to list every non-explanatory comment. Review each one; keep documentation that still helps.</p><p class=\"mb-4\">Clincoo does not strip comments. Cleaning TODOs is release lint that keeps the page professional.</p>",
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
