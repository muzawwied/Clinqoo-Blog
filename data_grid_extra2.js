// Clincoo Blog — artikel grid tambahan 2026-09-24 WIB
(function(){
  var extra = [
    {
      id: "grid-minmax-0-cegah-overflow",
      langs: {
        "id": {
          title: "Pakai minmax(0,1fr) agar Teks Grid Clincoo Tidak Meluap",
          desc: "Kolom 1fr masih bisa memaksa kartu melebar mengikuti kata panjang tanpa spasi.",
          content: "<p class=\"mb-4\">Kartu proyek Clincoo memakai grid 1fr 1fr. URL atau nama file tanpa spasi membuat kolom meregang melewati wadah.</p><p class=\"mb-4\">Ganti trek menjadi minmax(0,1fr) di editor.clincoo.buzz. Nol sebagai minimum mengizinkan item menyusut di bawah ukuran konten.</p><p class=\"mb-4\">Tambah overflow-wrap:anywhere pada teks panjang. Jangan andalkan overflow:hidden yang memotong tautan.</p><p class=\"mb-4\">Minta AI hanya mengubah satu aturan columns. Tempel markup kartu yang overflow.</p><p class=\"mb-4\">Clincoo tidak memotong teks ajaib. minmax(0,1fr) menjaga grid tetap di dalam app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use minmax(0,1fr) so Clincoo Grid Text Does Not Overflow",
          desc: "A 1fr column can still stretch a card to follow a long unspaced word.",
          content: "<p class=\"mb-4\">Clincoo project cards use a 1fr 1fr grid. A URL or filename with no spaces stretches the column past the container.</p><p class=\"mb-4\">Change the tracks to minmax(0,1fr) in editor.clincoo.buzz. A zero minimum lets the item shrink below content size.</p><p class=\"mb-4\">Add overflow-wrap:anywhere on long text. Do not rely on overflow:hidden that clips links.</p><p class=\"mb-4\">Ask AI to change one columns rule only. Paste the overflowing card markup.</p><p class=\"mb-4\">Clincoo does not magically clip text. minmax(0,1fr) keeps the grid inside app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "grid-auto-flow-dense-galeri",
      langs: {
        "id": {
          title: "Pakai grid-auto-flow: dense agar Galeri Clincoo Tanpa Lubang",
          desc: "Kartu yang span dua kolom meninggalkan sel kosong. Dense mengisi lubang itu.",
          content: "<p class=\"mb-4\">Galeri Clincoo menandai kartu unggulan dengan column-span 2. Baris berikutnya lalu menyisakan kotak kosong.</p><p class=\"mb-4\">Set grid-auto-flow:dense pada wadah di editor.clincoo.buzz. Item berikutnya naik mengisi sel kosong jika muat.</p><p class=\"mb-4\">Dense mengubah urutan visual. Jaga urutan DOM logis untuk pembaca layar; jangan pakai dense pada form.</p><p class=\"mb-4\">Minta AI hanya menambah satu properti flow. Tempel galeri yang berlubang.</p><p class=\"mb-4\">Clincoo tidak menyusun ulang kartu sendiri. Dense sadar merapikan lubang di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use grid-auto-flow: dense so a Clincoo Gallery Has No Holes",
          desc: "A card that spans two columns leaves an empty cell. Dense fills that hole.",
          content: "<p class=\"mb-4\">A Clincoo gallery marks a featured card with column-span 2. The next row then leaves an empty box.</p><p class=\"mb-4\">Set grid-auto-flow:dense on the container in editor.clincoo.buzz. Later items climb into empty cells if they fit.</p><p class=\"mb-4\">Dense changes visual order. Keep DOM order logical for screen readers; do not use dense on forms.</p><p class=\"mb-4\">Ask AI to add one flow property only. Paste the gallery that has holes.</p><p class=\"mb-4\">Clincoo does not reshuffle cards on its own. Deliberate dense tidies holes on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "grid-garis-bernama-bukan-angka",
      langs: {
        "id": {
          title: "Pakai Garis Grid Bernama, Bukan Angka Mentah di Clincoo",
          desc: "grid-column: 2 / 4 pecah saat jumlah kolom berubah. Nama garis tetap jelas.",
          content: "<p class=\"mb-4\">Template Clincoo menempatkan sidebar di kolom 3 dengan angka. Saat kolom jadi empat, sidebar loncat ke tempat salah.</p><p class=\"mb-4\">Tulis grid-template-columns:[main-start] 2fr [main-end aside-start] 1fr [aside-end] di editor.clincoo.buzz. Tempatkan item dengan nama garis.</p><p class=\"mb-4\">Nama menjelaskan maksud. Angka hanya posisi hari ini.</p><p class=\"mb-4\">Minta AI hanya menamai garis pada satu wadah. Tempel template columns yang dipakai.</p><p class=\"mb-4\">Clincoo merender garis yang kamu tulis. Nama yang jujur menjaga layout di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Named Grid Lines, Not Raw Numbers, in Clincoo",
          desc: "grid-column: 2 / 4 breaks when the column count changes. Line names stay clear.",
          content: "<p class=\"mb-4\">A Clincoo template parks the sidebar in column 3 by number. When columns become four, the sidebar jumps to the wrong place.</p><p class=\"mb-4\">Write grid-template-columns:[main-start] 2fr [main-end aside-start] 1fr [aside-end] in editor.clincoo.buzz. Place items with line names.</p><p class=\"mb-4\">Names explain intent. Numbers only describe today's position.</p><p class=\"mb-4\">Ask AI to name lines on one container only. Paste the template columns in use.</p><p class=\"mb-4\">Clincoo renders the lines you write. Honest names keep the layout on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["grid"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["grid"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
