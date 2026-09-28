// Clincoo Blog — artikel scroll tambahan 2026-09-28
(function(){
  var extra = [
    {
      id: "scroll-overscroll-behavior-contain",
      langs: {
        "id": {
          title: "Setel overscroll-behavior: contain agar Gestur Clincoo Tidak Bocor",
          desc: "Geser daftar di dalam modal ikut menggulir halaman belakang. Contain memotong rantai scroll.",
          content: "<p class=\"mb-4\">Pengguna Clincoo menggeser daftar di modal, lalu halaman di belakang ikut bergerak. Fokus visual pecah.</p><p class=\"mb-4\">Tambahkan overscroll-behavior: contain pada kontainer overflow di editor.clincoo.buzz. Untuk dialog, pasang juga di overlay.</p><p class=\"mb-4\">Jangan andalkan preventDefault pada touchmove di seluruh dokumen. Itu merusak gestur sah dan memberatkan thread.</p><p class=\"mb-4\">Minta AI menambahkan overscroll-behavior pada modal dan sidebar. Tempel markup overlay dan CSS overflow yang ada.</p><p class=\"mb-4\">Clincoo merender CSS yang kamu simpan. Gestur di app.clincoo.buzz tetap di dalam panel yang sedang dibuka.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set overscroll-behavior: contain so Clincoo Gestures Do Not Leak",
          desc: "Swiping a list inside a modal also scrolls the page behind it. Contain cuts the scroll chain.",
          content: "<p class=\"mb-4\">A Clincoo user swipes a list in a modal, and the page behind it moves too. Visual focus breaks.</p><p class=\"mb-4\">Add overscroll-behavior: contain on the overflow container in editor.clincoo.buzz. For dialogs, set it on the overlay as well.</p><p class=\"mb-4\">Do not rely on preventDefault on touchmove for the whole document. That breaks valid gestures and taxes the thread.</p><p class=\"mb-4\">Ask AI to add overscroll-behavior on the modal and sidebar. Paste the overlay markup and existing overflow CSS.</p><p class=\"mb-4\">Clincoo renders the CSS you save. Gestures on app.clincoo.buzz stay inside the open panel.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "scroll-padding-navigasi-tetap",
      langs: {
        "id": {
          title: "Pakai scroll-padding pada html untuk Navigasi Tetap Clincoo",
          desc: "scroll-margin per heading mudah terlewat. scroll-padding-top pada root menutup semua target.",
          content: "<p class=\"mb-4\">Beberapa heading Clincoo punya id, yang lain tidak. Offset anchor tidak konsisten.</p><p class=\"mb-4\">Setel scroll-padding-top pada html di editor.clincoo.buzz sebesar tinggi header. Semua target hash mendapat ruang yang sama.</p><p class=\"mb-4\">Gabungkan dengan scroll-margin hanya jika satu bagian butuh napas ekstra. Jangan campur angka ajaib di JavaScript.</p><p class=\"mb-4\">Minta AI mengukur tinggi header dan menulis scroll-padding-top. Tempel markup header sticky.</p><p class=\"mb-4\">Clincoo merender CSS yang kamu simpan. Loncatan #id di app.clincoo.buzz tidak lagi tertutup bilah atas.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use scroll-padding on html for Sticky Clincoo Navigation",
          desc: "Per-heading scroll-margin is easy to miss. scroll-padding-top on the root covers every target.",
          content: "<p class=\"mb-4\">Some Clincoo headings have ids, others do not. Anchor offsets become inconsistent.</p><p class=\"mb-4\">Set scroll-padding-top on html in editor.clincoo.buzz to the header height. Every hash target gets the same space.</p><p class=\"mb-4\">Combine with scroll-margin only when one section needs extra air. Do not mix magic numbers in JavaScript.</p><p class=\"mb-4\">Ask AI to measure the header height and write scroll-padding-top. Paste the sticky header markup.</p><p class=\"mb-4\">Clincoo renders the CSS you save. Hash jumps on app.clincoo.buzz no longer hide under the top bar.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "scroll-tabindex-setelah-intoview",
      langs: {
        "id": {
          title: "Pindahkan Fokus setelah scrollIntoView di Form Clincoo",
          desc: "Gulir ke field error tanpa fokus membuat pengguna keyboard kehilangan konteks.",
          content: "<p class=\"mb-4\">Validasi Clincoo menggulir ke input rusak, tetapi fokus tetap di tombol kirim. Pengguna Tab tidak tahu di mana mereka.</p><p class=\"mb-4\">Setelah scrollIntoView, panggil focus() pada field pertama yang invalid di editor.clincoo.buzz. Pakai preventScroll jika offset sudah diatur CSS.</p><p class=\"mb-4\">Jangan fokus ke div pembungkus. Targetkan input, select, atau textarea yang sebenarnya.</p><p class=\"mb-4\">Minta AI menyambungkan validasi, scrollIntoView, dan focus. Tempel handler submit dan satu field contoh.</p><p class=\"mb-4\">Clincoo merender skrip yang kamu simpan. Perbaikan form di app.clincoo.buzz tetap bisa diikuti keyboard.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Move Focus after scrollIntoView on a Clincoo Form",
          desc: "Scrolling to an error field without focus leaves keyboard users without context.",
          content: "<p class=\"mb-4\">Clincoo validation scrolls to a broken input, but focus stays on the submit button. Tab users cannot tell where they are.</p><p class=\"mb-4\">After scrollIntoView, call focus() on the first invalid field in editor.clincoo.buzz. Use preventScroll if CSS already handles the offset.</p><p class=\"mb-4\">Do not focus a wrapper div. Target the actual input, select, or textarea.</p><p class=\"mb-4\">Ask AI to wire validation, scrollIntoView, and focus. Paste the submit handler and one sample field.</p><p class=\"mb-4\">Clincoo renders the script you save. Form fixes on app.clincoo.buzz stay followable from the keyboard.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "scroll-scrollbar-gutter-stabil",
      langs: {
        "id": {
          title: "Pasang scrollbar-gutter: stable agar Layout Clincoo Tidak Loncat",
          desc: "Munculnya scrollbar menggeser konten ke kiri. Gutter cadangkan ruang dari awal.",
          content: "<p class=\"mb-4\">Halaman Clincoo yang pendek tidak punya scrollbar. Saat konten memanjang, seluruh kolom bergeser.</p><p class=\"mb-4\">Setel scrollbar-gutter: stable pada html di editor.clincoo.buzz. Cadangkan jalur scrollbar meski halaman masih pendek.</p><p class=\"mb-4\">Uji overlay scrollbar di macOS. Jangan andalkan lebar tetap 15px di JavaScript.</p><p class=\"mb-4\">Minta AI menambah scrollbar-gutter pada root. Tempel CSS html dan body yang ada.</p><p class=\"mb-4\">Clincoo merender CSS yang kamu simpan. Grid di app.clincoo.buzz tidak meloncat saat tinggi dokumen berubah.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set scrollbar-gutter: stable so Clincoo Layout Does Not Jump",
          desc: "A appearing scrollbar shoves content left. A gutter reserves the space from the start.",
          content: "<p class=\"mb-4\">A short Clincoo page has no scrollbar. When content grows, the whole column shifts.</p><p class=\"mb-4\">Set scrollbar-gutter: stable on html in editor.clincoo.buzz. Reserve the scrollbar lane even while the page is still short.</p><p class=\"mb-4\">Test overlay scrollbars on macOS. Do not assume a fixed 15px width in JavaScript.</p><p class=\"mb-4\">Ask AI to add scrollbar-gutter on the root. Paste the existing html and body CSS.</p><p class=\"mb-4\">Clincoo renders the CSS you save. The grid on app.clincoo.buzz does not jump when document height changes.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["scroll"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["scroll"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
