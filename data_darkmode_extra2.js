// Clincoo Blog — artikel darkmode tambahan 2026-09-24 WIB
(function(){
  var extra = [
    {
      id: "darkmode-placeholder-dan-disabled",
      langs: {
        "id": {
          title: "Rapikan Placeholder dan Status Disabled pada Tema Gelap Clincoo",
          desc: "Teks petunjuk dan kontrol mati sering pudar di latar gelap. Naikkan kontras token form.",
          content: "<p class=\"mb-4\">Form Clincoo di mode gelap sering menyisakan placeholder #999 di latar #1a1a1a. Pengunjung tidak tahu kolom itu untuk apa.</p><p class=\"mb-4\">Di editor.clincoo.buzz set --placeholder dan --disabled ke token yang lulus kontras 3:1 terhadap --bg. Pakai :placeholder-shown hanya untuk spasi, bukan untuk menyembunyikan label.</p><p class=\"mb-4\">Kontrol disabled jangan hanya opacity 0.3. Tambah cursor not-allowed dan teks bantuan mengapa tombol mati.</p><p class=\"mb-4\">Uji autofill dan disabled bersama. Minta AI dua selector form, bukan rewrite seluruh tema.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. Form gelap yang terbaca mengurangi kesalahan kirim.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Tidy Placeholders and Disabled States on a Clincoo Dark Theme",
          desc: "Hint text and disabled controls often fade on dark backgrounds. Raise form token contrast.",
          content: "<p class=\"mb-4\">Clincoo forms in dark mode often keep a #999 placeholder on a #1a1a1a field. Visitors cannot tell what the field is for.</p><p class=\"mb-4\">In editor.clincoo.buzz set --placeholder and --disabled to tokens that pass 3:1 against --bg. Use :placeholder-shown for spacing only, not to hide the label.</p><p class=\"mb-4\">A disabled control should not rely on opacity 0.3 alone. Add cursor not-allowed and a short note on why the button is off.</p><p class=\"mb-4\">Test autofill and disabled together. Ask the AI for two form selectors, not a full theme rewrite.</p><p class=\"mb-4\">Clincoo ships the CSS you save. Readable dark forms cut submit mistakes.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "darkmode-chart-dan-svg",
      langs: {
        "id": {
          title: "Sesuaikan Stroke SVG dan Grafik pada Latar Gelap Clincoo",
          desc: "Garis grafik #333 menghilang di hero gelap. Petakan palet chart ke token tema.",
          content: "<p class=\"mb-4\">Dashboard Clincoo yang memakai SVG garis #333 atau fill #111 hampir lenyap setelah tema gelap aktif.</p><p class=\"mb-4\">Di editor.clincoo.buzz ganti stroke dan fill hardcoded dengan currentColor atau var(--fg). Untuk seri data, siapkan --chart-1 sampai --chart-4 terpisah untuk mode gelap.</p><p class=\"mb-4\">Jangan invert seluruh SVG dengan filter. Logo dan ikon jadi aneh, grid chart juga pecah.</p><p class=\"mb-4\">Pratinjau kartu analitik di editor.clincoo.buzz. Minta AI memetakan warna chart, bukan menanam pustaka grafik baru.</p><p class=\"mb-4\">Clincoo merender SVG apa adanya. Token yang sadar tema menjaga angka tetap terbaca.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Tune SVG Strokes and Charts on Clincoo Dark Backgrounds",
          desc: "Chart lines in #333 vanish on a dark hero. Map the chart palette to theme tokens.",
          content: "<p class=\"mb-4\">A Clincoo dashboard that uses #333 SVG strokes or #111 fills nearly disappears once dark theme is on.</p><p class=\"mb-4\">In editor.clincoo.buzz replace hardcoded stroke and fill with currentColor or var(--fg). For data series, keep --chart-1 through --chart-4 separate for dark mode.</p><p class=\"mb-4\">Do not invert every SVG with a filter. Logos and icons look wrong and chart grids break.</p><p class=\"mb-4\">Preview analytics cards in editor.clincoo.buzz. Ask the AI to remap chart colors, not to drop in a new chart library.</p><p class=\"mb-4\">Clincoo renders SVG as saved. Theme-aware tokens keep the numbers readable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["darkmode"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["darkmode"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
