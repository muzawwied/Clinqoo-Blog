// Clincoo Blog — artikel font tambahan 2026-09-25 WIB
(function(){
  var extra = [
    {
      id: "font-self-host-woff2-bukan-cdn",
      langs: {
        "id": {
          title: "Host Sendiri File Woff2 Clincoo, Jangan Andalkan CDN Font Setiap Kunjungan",
          desc: "CDN font pihak ketiga menambah DNS, cookie, dan risiko privasi pada halaman statis.",
          content: "<p class=\"mb-4\">Banyak template Clincoo menaut Google Fonts langsung. Setiap pengunjung membuka koneksi baru sebelum teks merek tampil.</p><p class=\"mb-4\">Di editor.clincoo.buzz, unduh woff2 yang sudah di-subset lalu taruh di folder assets. Tulis @font-face dengan url lokal.</p><p class=\"mb-4\">Jangan menyalin tautan CSS Google utuh jika kamu hanya butuh dua berat. File lokal lebih mudah di-cache bersama situs.</p><p class=\"mb-4\">Minta AI menulis @font-face dari path yang sudah kamu unggah. Tolak menambahkan kembali fonts.googleapis.com.</p><p class=\"mb-4\">Clincoo merender path font apa adanya. Hosting sendiri membuat app.clincoo.buzz tidak menunggu CDN luar.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Self-Host Clincoo Woff2 Files Instead of Hitting a Font CDN Every Visit",
          desc: "A third-party font CDN adds DNS, cookies, and privacy risk on a static page.",
          content: "<p class=\"mb-4\">Many Clincoo templates link Google Fonts directly. Every visitor opens a new connection before brand text appears.</p><p class=\"mb-4\">In editor.clincoo.buzz, download a subset woff2 and put it in the assets folder. Write @font-face with a local url.</p><p class=\"mb-4\">Do not paste the full Google CSS link if you only need two weights. Local files cache with the rest of the site.</p><p class=\"mb-4\">Ask AI to write @font-face from the path you already uploaded. Reject adding fonts.googleapis.com again.</p><p class=\"mb-4\">Clincoo renders font paths as saved. Self-hosting keeps app.clincoo.buzz from waiting on an outside CDN.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "font-line-height-tanpa-satuan",
      langs: {
        "id": {
          title: "Pakai line-height Tanpa Satuan pada Teks Clincoo, Bukan Pixel Tetap",
          desc: "Nilai 24px pecah saat pengunjung memperbesar teks atau ganti keluarga font.",
          content: "<p class=\"mb-4\">Template Clincoo sering menuliskan line-height: 24px mengikuti mockup. Saat font-size naik, baris bertumpuk atau longgar.</p><p class=\"mb-4\">Di editor.clincoo.buzz, ganti menjadi 1.5 untuk isi dan sekitar 1.2 untuk judul. Angka tanpa satuan mengikuti ukuran font.</p><p class=\"mb-4\">Jangan menyamakan line-height tombol dengan paragraf panjang. CTA butuh nilai lebih rapat.</p><p class=\"mb-4\">Minta AI mencari line-height berpixel di CSS. Tempel aturan tipografi yang ada, tolak ganti keluarga font.</p><p class=\"mb-4\">Clincoo merender CSS yang kamu simpan. line-height relatif menjaga app.clincoo.buzz tetap terbaca saat zoom.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Unitless line-height on Clincoo Text, Not Fixed Pixels",
          desc: "A 24px value breaks when visitors enlarge text or change the font family.",
          content: "<p class=\"mb-4\">Clincoo templates often set line-height: 24px to match a mockup. When font-size grows, lines stack or go loose.</p><p class=\"mb-4\">In editor.clincoo.buzz, switch to 1.5 for body copy and about 1.2 for headings. A unitless number follows font size.</p><p class=\"mb-4\">Do not reuse paragraph line-height on buttons. CTAs need a tighter value.</p><p class=\"mb-4\">Ask AI to find pixel line-height in CSS. Paste the current type rules and reject a font-family change.</p><p class=\"mb-4\">Clincoo renders the CSS you save. Relative line-height keeps app.clincoo.buzz readable when zoomed.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "font-cek-foit-di-jaringan-lambat",
      langs: {
        "id": {
          title: "Uji FOIT Font Clincoo di Jaringan Lambat sebelum Rilis",
          desc: "Teks kosong beberapa detik di 3G membuat pengunjung mengira halaman rusak.",
          content: "<p class=\"mb-4\">Tanpa uji jaringan, font-display default bisa menyembunyikan teks. Halaman Clincoo terlihat polos padahal HTML sudah ada.</p><p class=\"mb-4\">Di editor.clincoo.buzz, buka pratinjau lalu di DevTools set throttling Slow 3G. Catat kapan huruf pertama muncul.</p><p class=\"mb-4\">Jika teks hilang lebih dari satu detik, pastikan swap dan fallback sistem sudah ada. Jangan menambah preload semua berat.</p><p class=\"mb-4\">Minta AI meninjau @font-face setelah kamu tempel hasil Network. Tolak mengganti merek hanya karena file lambat.</p><p class=\"mb-4\">Clincoo tidak mensimulasikan 3G. Tes manual menjaga app.clincoo.buzz tetap terasa hidup di perangkat hemat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test Clincoo Font FOIT on a Slow Network Before You Ship",
          desc: "Blank text for seconds on 3G makes visitors think the page is broken.",
          content: "<p class=\"mb-4\">Without a network test, default font-display can hide text. A Clincoo page looks empty even though the HTML is there.</p><p class=\"mb-4\">In editor.clincoo.buzz, open preview and set DevTools throttling to Slow 3G. Note when the first letters appear.</p><p class=\"mb-4\">If text is missing for more than a second, confirm swap and a system fallback. Do not preload every weight.</p><p class=\"mb-4\">Ask AI to review @font-face after you paste the Network result. Reject a brand change just because a file is slow.</p><p class=\"mb-4\">Clincoo does not simulate 3G. A manual test keeps app.clincoo.buzz feeling alive on a constrained device.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "font-hindari-transform-uppercase-panjang",
      langs: {
        "id": {
          title: "Hindari text-transform:uppercase pada Paragraf Panjang Clincoo",
          desc: "Huruf kapital semua menurunkan keterbacaan dan membuat metrik font terasa sesak.",
          content: "<p class=\"mb-4\">Beberapa hero Clincoo mengubah seluruh kalimat menjadi kapital lewat CSS. Pengunjung membaca lebih lambat, terutama di mobile.</p><p class=\"mb-4\">Di editor.clincoo.buzz, batasi uppercase pada label kecil atau tombol. Tulis judul dengan kapital judul di HTML.</p><p class=\"mb-4\">Jangan menaikkan letter-spacing ekstrem untuk menutupi uppercase. Itu memperburuk wrap pada layar sempit.</p><p class=\"mb-4\">Minta AI mencari text-transform di CSS. Hapus yang menempel di p atau li, biarkan merek di heading tetap.</p><p class=\"mb-4\">Clincoo merender transform apa adanya. Paragraf normal membuat app.clincoo.buzz lebih mudah dipindai.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Avoid text-transform:uppercase on Long Clincoo Paragraphs",
          desc: "All-caps text is harder to read and makes font metrics feel cramped.",
          content: "<p class=\"mb-4\">Some Clincoo heroes force entire sentences to caps through CSS. Visitors read more slowly, especially on mobile.</p><p class=\"mb-4\">In editor.clincoo.buzz, keep uppercase for small labels or buttons. Write title case in the HTML for headings.</p><p class=\"mb-4\">Do not add extreme letter-spacing to compensate. It makes wrapping worse on a narrow screen.</p><p class=\"mb-4\">Ask AI to search text-transform in CSS. Remove it from p or li; leave brand headings alone.</p><p class=\"mb-4\">Clincoo renders transforms as saved. Normal paragraph case makes app.clincoo.buzz easier to scan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "font-ukuran-minimal-teks-isi",
      langs: {
        "id": {
          title: "Jaga Ukuran Teks Isi Clincoo Minimal 16px, Jangan 12px dari Mockup",
          desc: "Font kecil memaksa zoom di ponsel dan gagal uji keterbacaan dasar.",
          content: "<p class=\"mb-4\">Desain desktop sering memakai 12 atau 14px. Saat dipindah ke template Clincoo, paragraf terasa seperti catatan kaki.</p><p class=\"mb-4\">Di editor.clincoo.buzz, set body ke 1rem atau 16px. Naikkan sedikit jika keluarga font punya x-height rendah.</p><p class=\"mb-4\">Jangan mengecilkan teks legal sampai tidak terbaca. Sembunyikan di accordion, bukan perkecil huruf.</p><p class=\"mb-4\">Minta AI meninjau font-size pada p, li, dan input. Tempel CSS tipografi, tolak ganti keluarga.</p><p class=\"mb-4\">Clincoo tidak menaikkan ukuran sendiri. 16px membuat app.clincoo.buzz nyaman tanpa pinch-zoom.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep Clincoo Body Text at Least 16px, Not 12px from a Mockup",
          desc: "Tiny type forces mobile zoom and fails a basic readability check.",
          content: "<p class=\"mb-4\">Desktop designs often use 12 or 14px. Moved onto a Clincoo template, paragraphs look like footnotes.</p><p class=\"mb-4\">In editor.clincoo.buzz, set body to 1rem or 16px. Nudge it up if the family has a low x-height.</p><p class=\"mb-4\">Do not shrink legal copy until it is unreadable. Hide it in an accordion instead of shrinking letters.</p><p class=\"mb-4\">Ask AI to review font-size on p, li, and inputs. Paste the type CSS and reject a family change.</p><p class=\"mb-4\">Clincoo does not bump size on its own. 16px keeps app.clincoo.buzz comfortable without pinch-zoom.</p>",
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
