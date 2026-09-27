// Clincoo Blog — Data kategori extra: minify
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
(function () {
  var extra = [
    {
      id: "minify-js-jangan-hapus-fungsi-diam",
      langs: {
        "id": {
          title: "Jangan Hapus Fungsi JS yang Terlihat Diam saat Minify Clincoo",
          desc: "Fungsi yang tidak dipanggil di file yang sama bisa dipakai dari HTML. Hapus buta memutus klik.",
          content: "<p class=\"mb-4\">AI menawarkan tree-shake agresif pada app.js Clincoo. Tombol di index.html memanggil fungsi yang terlihat tidak terpakai di file JS.</p><p class=\"mb-4\">Di editor.clincoo.buzz, minify hanya menghapus spasi dan komentar. Jangan buang nama fungsi yang masih disebut di onclick atau skrip lain.</p><p class=\"mb-4\">Cari pemakaian di seluruh proyek sebelum menghapus. Uji setiap tombol di pratinjau.</p><p class=\"mb-4\">Minta AI minify satu file JS tanpa menghapus identifier. Tempel HTML yang memanggil fungsi itu.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu simpan. Minify aman menjaga app.clincoo.buzz tetap merespons klik.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Do Not Drop Quiet-Looking JS Functions when Minifying Clincoo",
          desc: "A function unused in the same file may still be called from HTML. Blind deletes break clicks.",
          content: "<p class=\"mb-4\">AI offers aggressive tree-shaking on Clincoo app.js. A button in index.html still calls a function that looks unused in the JS file.</p><p class=\"mb-4\">In editor.clincoo.buzz, minify by stripping spaces and comments only. Do not drop function names still referenced from onclick or another script.</p><p class=\"mb-4\">Search the whole project before deleting. Test every button in preview.</p><p class=\"mb-4\">Ask AI to minify one JS file without removing identifiers. Paste the HTML that calls the function.</p><p class=\"mb-4\">Clincoo runs the scripts you save. Safe minify keeps clicks working on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "minify-simpan-berkas-sumber",
      langs: {
        "id": {
          title: "Simpan Berkas Sumber Clincoo sebelum Minify Produksi",
          desc: "File yang sudah dipadatkan sulit diedit. Tanpa salinan sumber, perbaikan berikutnya meraba-raba.",
          content: "<p class=\"mb-4\">Style.css Clincoo hanya tersisa satu baris. Mengganti warna hero berarti menebak di tumpukan token.</p><p class=\"mb-4\">Simpan style.src.css dan app.src.js di editor.clincoo.buzz. Minify hanya salinan yang diunggah ke produksi.</p><p class=\"mb-4\">Jangan menimpa sumber dengan hasil minify. Nama file produksi boleh beda agar tidak tertukar.</p><p class=\"mb-4\">Minta AI minify salinan, bukan file kerja. Tempel nama kedua berkas.</p><p class=\"mb-4\">Clincoo tidak menyimpan riwayat minify otomatis. Sumber terpisah menjaga perbaikan cepat di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Keep Clincoo Source Files before Production Minify",
          desc: "A packed file is hard to edit. Without a source copy, the next fix is guesswork.",
          content: "<p class=\"mb-4\">Clincoo style.css is one long line. Changing the hero color means guessing inside a token pile.</p><p class=\"mb-4\">Keep style.src.css and app.src.js in editor.clincoo.buzz. Minify only the copy you ship to production.</p><p class=\"mb-4\">Do not overwrite the source with the minified output. Production filenames can differ so they are not mixed.</p><p class=\"mb-4\">Ask AI to minify a copy, not the working file. Paste both filenames.</p><p class=\"mb-4\">Clincoo does not keep minify history for you. Separate source keeps fixes fast on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "minify-html-jaga-spasi-pre",
      langs: {
        "id": {
          title: "Jangan Buang Spasi di dalam pre dan textarea saat Minify HTML Clincoo",
          desc: "Whitespace di pre, code, dan textarea bermakna. Penghapusan merusak contoh dan draf.",
          content: "<p class=\"mb-4\">Minify HTML Clincoo meratakan semua baris. Blok pre berisi cuplikan kode lalu menempel jadi satu baris.</p><p class=\"mb-4\">Di editor.clincoo.buzz, biarkan isi pre, code, dan textarea utuh. Minify hanya di luar elemen itu.</p><p class=\"mb-4\">Jangan gabungkan minify HTML dengan minify CSS di satu langkah buta. Uji halaman yang punya contoh kode.</p><p class=\"mb-4\">Minta AI minify HTML tanpa menyentuh pre. Tempel cuplikan yang harus tetap berbaris.</p><p class=\"mb-4\">Clincoo merender markup apa adanya. Spasi yang benar menjaga contoh terbaca di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Do Not Strip Spaces inside pre and textarea when Minifying Clincoo HTML",
          desc: "Whitespace in pre, code, and textarea is meaningful. Stripping it breaks samples and drafts.",
          content: "<p class=\"mb-4\">Clincoo HTML minify flattens every line. A pre block of sample code then sticks together as one line.</p><p class=\"mb-4\">In editor.clincoo.buzz, leave pre, code, and textarea contents intact. Minify only outside those elements.</p><p class=\"mb-4\">Do not combine HTML minify with CSS minify in one blind pass. Test pages that include code samples.</p><p class=\"mb-4\">Ask AI to minify HTML without touching pre. Paste the snippet that must stay line-broken.</p><p class=\"mb-4\">Clincoo renders markup as saved. Correct spacing keeps samples readable on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "minify-uji-pratinjau-setelah",
      langs: {
        "id": {
          title: "Uji Pratinjau Clincoo setelah Setiap Langkah Minify",
          desc: "File lebih kecil bukan berarti halaman masih utuh. Hover, modal, dan form sering pecah diam-diam.",
          content: "<p class=\"mb-4\">CSS Clincoo mengecil 40 persen, tetapi dropdown tidak terbuka karena selector ikut terpotong.</p><p class=\"mb-4\">Setelah minify di editor.clincoo.buzz, buka pratinjau. Klik menu, kirim form, dan ganti lebar layar.</p><p class=\"mb-4\">Bandingkan dengan salinan sumber jika ada yang aneh. Jangan rilis hanya karena ukuran berkas turun.</p><p class=\"mb-4\">Minta AI menandai selector yang berubah. Tempel file sebelum dan sesudah minify.</p><p class=\"mb-4\">Clincoo menayangkan file hasil uji. Pratinjau setelah minify menjaga app.clincoo.buzz tidak pecah diam-diam.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Test the Clincoo Preview after Every Minify Step",
          desc: "A smaller file does not mean the page still works. Hover, modals, and forms often break quietly.",
          content: "<p class=\"mb-4\">Clincoo CSS shrinks 40 percent, but a dropdown never opens because a selector was clipped.</p><p class=\"mb-4\">After minify in editor.clincoo.buzz, open preview. Click menus, submit a form, and resize the viewport.</p><p class=\"mb-4\">Compare with the source copy if something looks off. Do not ship only because the file got smaller.</p><p class=\"mb-4\">Ask AI to mark selectors that changed. Paste the file before and after minify.</p><p class=\"mb-4\">Clincoo serves the files you tested. Preview after minify keeps app.clincoo.buzz from breaking silently.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "minify-sumber-peta-opsional",
      langs: {
        "id": {
          title: "Jangan Unggah Source Map ke Produksi Clincoo jika Berisi Jalur Lokal",
          desc: "Source map memudahkan debug, tetapi bisa membocorkan path laptop dan kode sumber.",
          content: "<p class=\"mb-4\">Berkas .map Clincoo ikut terunggah. Pengunjung melihat path /Users/nama/proyek di DevTools.</p><p class=\"mb-4\">Pakai source map hanya di pratinjau lokal editor.clincoo.buzz. Produksi cukup file minify tanpa peta.</p><p class=\"mb-4\">Jika butuh debug produksi, batasi akses peta, jangan taruh di folder publik yang sama.</p><p class=\"mb-4\">Minta AI memeriksa tautan sourceMappingURL. Tempel baris terakhir file minify.</p><p class=\"mb-4\">Clincoo mengunggah apa yang kamu simpan. Tanpa peta publik, app.clincoo.buzz tidak membocorkan jalur lokal.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Do Not Ship Clincoo Source Maps to Production if They Hold Local Paths",
          desc: "A source map helps debug, but it can leak laptop paths and original source.",
          content: "<p class=\"mb-4\">A Clincoo .map file gets uploaded. Visitors then see /Users/name/project paths in DevTools.</p><p class=\"mb-4\">Use source maps only in local preview on editor.clincoo.buzz. Production can ship the minified file without a map.</p><p class=\"mb-4\">If you need production debug, restrict map access. Do not leave it in the same public folder.</p><p class=\"mb-4\">Ask AI to check sourceMappingURL links. Paste the last line of the minified file.</p><p class=\"mb-4\">Clincoo uploads what you save. Without a public map, app.clincoo.buzz does not leak local paths.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    }
  ];
  var cat = window.countryDataFiles["minify"];
  if (!cat) {
    window.countryDataFiles["minify"] = { names: { id: "Minify", en: "Minify" }, flag: "\ud83d\udce6", articles: extra };
  } else {
    cat.articles = (cat.articles || []).concat(extra);
  }
})();
