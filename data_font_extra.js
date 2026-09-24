// Clincoo Blog — artikel font tambahan 2026-09-25
(function(){
  var extra = [
    {
      id: "font-batasi-dua-berat-saja",
      langs: {
        "id": {
          title: "Batasi Dua Berat Font di Halaman Clincoo, Bukan Satu Keluarga Penuh",
          desc: "Memuat regular, medium, semibold, bold, dan black sekaligus memperlambat teks pertama.",
          content: "<p class=\"mb-4\">Template Clincoo sering menyertakan lima berat dari satu keluarga Google Fonts. Browser mengunduh woff2 yang tidak pernah dipakai judul.</p><p class=\"mb-4\">Di editor.clincoo.buzz, sisakan 400 untuk isi dan 700 untuk judul. Hapus tautan atau @font-face berat lain.</p><p class=\"mb-4\">Jangan andalkan variabel font jika kamu hanya butuh dua ketebalan. File variabel tetap besar tanpa subset.</p><p class=\"mb-4\">Minta AI menghapus @font-face yang tidak muncul di CSS. Tempel daftar font-weight yang dipakai.</p><p class=\"mb-4\">Clincoo merender tautan font apa adanya. Dua berat membuat app.clincoo.buzz lebih cepat terbaca.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Limit Clincoo Pages to Two Font Weights, Not a Full Family",
          desc: "Loading regular, medium, semibold, bold, and black at once delays first text.",
          content: "<p class=\"mb-4\">Clincoo templates often ship five weights of one Google Fonts family. The browser downloads woff2 files headings never use.</p><p class=\"mb-4\">In editor.clincoo.buzz, keep 400 for body and 700 for headings. Remove the other weight links or @font-face rules.</p><p class=\"mb-4\">Do not rely on a variable font if you only need two weights. The variable file stays large without a subset.</p><p class=\"mb-4\">Ask AI to delete @font-face rules that never appear in CSS. Paste the font-weight values you actually use.</p><p class=\"mb-4\">Clincoo renders font links as saved. Two weights make app.clincoo.buzz readable sooner.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "font-subset-latin-bukan-semua-aksara",
      langs: {
        "id": {
          title: "Pakai Subset Latin pada Font Clincoo, Bukan Paket Semua Aksara",
          desc: "Berkas font lengkap berisi glif yang halaman Indonesia atau Inggris tidak butuh.",
          content: "<p class=\"mb-4\">Tautan Google Fonts tanpa subset mengirim CJK atau simbol langka. Ukuran woff2 membengkak tanpa mengubah tampilan.</p><p class=\"mb-4\">Di editor.clincoo.buzz, tambah parameter subset=latin pada URL font, atau unduh woff2 latin saja.</p><p class=\"mb-4\">Jika ada nama proper atau angka, cek latin-ext. Jangan unduh keluarga penuh hanya karena satu karakter.</p><p class=\"mb-4\">Minta AI memeriksa URL font di head. Tolak mengganti keluarga; minta subset saja.</p><p class=\"mb-4\">Clincoo tidak memotong file font sendiri. Subset membuat teks di app.clincoo.buzz muncul lebih cepat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use a Latin Subset on Clincoo Fonts, Not a Full Script Pack",
          desc: "A full font file includes glyphs Indonesian or English pages never need.",
          content: "<p class=\"mb-4\">A Google Fonts link without a subset sends CJK or rare symbols. The woff2 grows without changing the look.</p><p class=\"mb-4\">In editor.clincoo.buzz, add subset=latin on the font URL, or host a latin-only woff2.</p><p class=\"mb-4\">If you need proper names or extra numerals, check latin-ext. Do not download a full family for one character.</p><p class=\"mb-4\">Ask AI to inspect the font URL in the head. Reject a family change; request a subset only.</p><p class=\"mb-4\">Clincoo does not subset font files itself. A subset makes text on app.clincoo.buzz appear sooner.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "font-preload-woff2-judul-saja",
      langs: {
        "id": {
          title: "Preload Hanya Woff2 Judul Clincoo, Bukan Semua Berkas Font",
          desc: "preload setiap berat font malah menyaingi CSS dan gambar hero.",
          content: "<p class=\"mb-4\">Beberapa template Clincoo menambahkan link rel=preload untuk empat woff2. Jaringan mobile antre tanpa prioritas jelas.</p><p class=\"mb-4\">Di editor.clincoo.buzz, preload satu file judul yang muncul di hero. Biarkan isi memakai swap tanpa preload.</p><p class=\"mb-4\">Pasang as=font dan type=font/woff2 plus crossorigin. Tanpa itu browser mengabaikan preload.</p><p class=\"mb-4\">Minta AI menambah satu tautan preload pada file yang sudah dipakai h1. Tolak preload italic jika tidak ada.</p><p class=\"mb-4\">Clincoo tidak mengatur prioritas jaringan. Satu preload judul menjaga app.clincoo.buzz tetap ringan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Preload Only the Clincoo Heading Woff2, Not Every Font File",
          desc: "Preloading every font weight competes with CSS and the hero image.",
          content: "<p class=\"mb-4\">Some Clincoo templates add rel=preload for four woff2 files. A mobile network queues without a clear priority.</p><p class=\"mb-4\">In editor.clincoo.buzz, preload the one heading file used in the hero. Let body text use swap without preload.</p><p class=\"mb-4\">Set as=font, type=font/woff2, and crossorigin. Without those the browser ignores the preload.</p><p class=\"mb-4\">Ask AI to add one preload link for the file already used by h1. Reject italic preload if unused.</p><p class=\"mb-4\">Clincoo does not set network priority. One heading preload keeps app.clincoo.buzz light.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "font-fallback-sistem-dekat-metrik",
      langs: {
        "id": {
          title: "Pilih Fallback Sistem yang Dekat Metrik Font Clincoo",
          desc: "Fallback yang jauh membuat teks loncat saat file kustom selesai dimuat.",
          content: "<p class=\"mb-4\">Tanpa fallback dekat, paragraf Clincoo bergeser setelah swap. Layout kartu dan tombol ikut meloncat.</p><p class=\"mb-4\">Di editor.clincoo.buzz, tulis tumpukan seperti Inter, system-ui, sans-serif atau serif yang mirip x-height.</p><p class=\"mb-4\">Ukuran letter-spacing cadangan boleh disesuaikan dengan size-adjust jika browser mendukung.</p><p class=\"mb-4\">Minta AI mengusulkan fallback tanpa mengganti keluarga merek. Tempel aturan font-family yang ada.</p><p class=\"mb-4\">Clincoo merender tumpukan font apa adanya. Fallback dekat menjaga app.clincoo.buzz tidak meloncat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Pick a System Fallback Close to Clincoo Font Metrics",
          desc: "A distant fallback makes text jump when the custom file finishes loading.",
          content: "<p class=\"mb-4\">Without a close fallback, Clincoo paragraphs shift after swap. Cards and buttons jump with them.</p><p class=\"mb-4\">In editor.clincoo.buzz, write a stack such as Inter, system-ui, sans-serif or a serif with similar x-height.</p><p class=\"mb-4\">Fallback letter-spacing can use size-adjust when the browser supports it.</p><p class=\"mb-4\">Ask AI to suggest a fallback without changing the brand family. Paste the current font-family rule.</p><p class=\"mb-4\">Clincoo renders the font stack as saved. A close fallback keeps app.clincoo.buzz from jumping.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "font-jangan-muat-italic-jika-tak-dipakai",
      langs: {
        "id": {
          title: "Jangan Muat File Italic Font Clincoo jika Teks Miring Tidak Dipakai",
          desc: "Banyak template mengunduh italic otomatis padahal hanya ada teks tegak.",
          content: "<p class=\"mb-4\">Google Fonts menambahkan ital=1 ketika URL disalin utuh. Halaman jasa atau profil sering tidak memakai em.</p><p class=\"mb-4\">Di editor.clincoo.buzz, hapus sumbu italic dari URL atau @font-face italic yang tidak pernah dipanggil.</p><p class=\"mb-4\">Jika ada kutipan pendek, pakai font-style:italic pada keluarga yang sama hanya setelah file ada.</p><p class=\"mb-4\">Minta AI mencari font-style:italic di CSS. Jika nol, hapus berkas italic dari head.</p><p class=\"mb-4\">Clincoo tidak membuang italic sendiri. Menghapusnya mempercepat teks di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Load a Clincoo Italic Font File if Slanted Text Is Unused",
          desc: "Many templates download italic automatically even when all text is upright.",
          content: "<p class=\"mb-4\">Google Fonts adds ital=1 when the full URL is copied. Service or profile pages often never use em.</p><p class=\"mb-4\">In editor.clincoo.buzz, drop the italic axis from the URL or unused italic @font-face rules.</p><p class=\"mb-4\">If you have a short quote, apply font-style:italic on the same family only after the file exists.</p><p class=\"mb-4\">Ask AI to search for font-style:italic in CSS. If none, remove the italic file from the head.</p><p class=\"mb-4\">Clincoo does not strip italic by itself. Removing it speeds text on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["font"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["font"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
