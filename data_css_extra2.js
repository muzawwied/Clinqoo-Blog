// Clincoo Blog — artikel css tambahan 2026-09-20 WIB
(function(){
  var extra = [
    {
      id: "css-clamp-teks-fluid",
      langs: {
        "id": {
          title: "Pakai clamp() agar Teks Clincoo Mengalir di Semua Lebar",
          desc: "Font 14px di HP dan 32px di desktop terasa patah. Satu clamp menjaga skala.",
          content: "<p class=\"mb-4\">Template Clincoo sering memakai font-size tetap: 14px di mobile lalu melonjak 28px di desktop. Judul terasa patah saat jendela berubah.</p><p class=\"mb-4\">Tulis font-size: clamp(1rem, 2vw + 0.8rem, 1.5rem) untuk isi dan skala lebih besar untuk h1. Nilai tengah memakai viewport, nilai min/maks menjaga keterbacaan.</p><p class=\"mb-4\">Jangan clamp setiap span. Terapkan pada body, judul, dan lead saja. Cek di editor.clincoo.buzz pada 360px dan 1280px.</p><p class=\"mb-4\">Minta AI satu aturan clamp per permintaan. Tolak generate sistem tipografi lengkap.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. clamp() mengurangi media query tanpa pustaka.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use clamp() so Clincoo Type Scales Across Widths",
          desc: "14px on phones and 32px on desktop feels broken. One clamp keeps the scale.",
          content: "<p class=\"mb-4\">A Clincoo template often uses fixed sizes: 14px on mobile then a jump to 28px on desktop. Headings snap when the window changes.</p><p class=\"mb-4\">Write font-size: clamp(1rem, 2vw + 0.8rem, 1.5rem) for body copy and a larger scale for h1. The middle value tracks the viewport; min and max keep text readable.</p><p class=\"mb-4\">Do not clamp every span. Apply it to body, headings, and the lead only. Check editor.clincoo.buzz at 360px and 1280px.</p><p class=\"mb-4\">Ask the AI for one clamp rule per request. Refuse a full typography system.</p><p class=\"mb-4\">Clincoo ships the CSS you save. clamp() cuts media queries without a library.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "css-gap-ganti-margin-baris",
      langs: {
        "id": {
          title: "Ganti Margin Baris dengan gap pada Flex dan Grid Clincoo",
          desc: "Margin pada anak terakhir sering sisa. gap merata tanpa kelas khusus.",
          content: "<p class=\"mb-4\">Daftar kartu Clincoo sering memakai margin-bottom: 16px lalu :last-child { margin: 0 }. Satu item baru membuat jarak dobel.</p><p class=\"mb-4\">Pada flex atau grid parent, tulis gap: 1rem. Hapus margin vertikal antar anak di komponen itu saja.</p><p class=\"mb-4\">Jangan campur gap dan margin negatif pada sumbu yang sama. Debug di DevTools: lihat computed gap, bukan tebak.</p><p class=\"mb-4\">Minta AI mengganti satu daftar dulu. Tolak rewrite seluruh stylesheet.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. gap membuat irama daftar lebih mudah dijaga.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Replace Row Margins with gap on Clincoo Flex and Grid",
          desc: "Margin on the last child often leaves a leftover. gap is even without extra classes.",
          content: "<p class=\"mb-4\">Clincoo card lists often use margin-bottom: 16px then :last-child { margin: 0 }. A new item doubles the gap.</p><p class=\"mb-4\">On the flex or grid parent, write gap: 1rem. Remove vertical margins between children in that component only.</p><p class=\"mb-4\">Do not mix gap and negative margin on the same axis. Debug in DevTools: read computed gap instead of guessing.</p><p class=\"mb-4\">Ask the AI to change one list first. Refuse rewriting the whole stylesheet.</p><p class=\"mb-4\">Clincoo ships the CSS you save. gap makes list rhythm easier to keep.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "css-min-width-nol-flex-anak",
      langs: {
        "id": {
          title: "Setel min-width: 0 agar Anak Flex Clincoo Tidak Meluber",
          desc: "Teks panjang di flex item mendorong layout. min-width: 0 memulihkan batas.",
          content: "<p class=\"mb-4\">Baris flex Clincoo dengan judul panjang atau URL sering mendorong kolom tetangga keluar viewport.</p><p class=\"mb-4\">Anak flex punya min-width: auto secara bawaan. Tambah min-width: 0 (atau min-width: 0; overflow-wrap: anywhere) pada item yang boleh menyusut.</p><p class=\"mb-4\">Uji dengan string tanpa spasi. Cek pratinjau sempit di editor.clincoo.buzz sebelum deploy.</p><p class=\"mb-4\">Minta AI satu selektor. Jangan biarkan AI menambah overflow: hidden pada seluruh halaman.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. Satu baris min-width sering mengalahkan rewrite layout.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set min-width: 0 so Clincoo Flex Children Do Not Overflow",
          desc: "Long text in a flex item shoves the layout. min-width: 0 restores the limit.",
          content: "<p class=\"mb-4\">A Clincoo flex row with a long title or URL often pushes the neighbor column off the viewport.</p><p class=\"mb-4\">Flex children default to min-width: auto. Add min-width: 0 (or min-width: 0; overflow-wrap: anywhere) on the item that should shrink.</p><p class=\"mb-4\">Test with a string that has no spaces. Check the narrow preview in editor.clincoo.buzz before deploy.</p><p class=\"mb-4\">Ask the AI for one selector. Do not let it add overflow: hidden on the whole page.</p><p class=\"mb-4\">Clincoo ships the CSS you save. One min-width line often beats a layout rewrite.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "css-mobile-first-media-query",
      langs: {
        "id": {
          title: "Tulis Media Query Clincoo dari Mobile Dulu",
          desc: "Max-width bertumpuk sulit dilacak. Mulai dari gaya sempit, lalu min-width.",
          content: "<p class=\"mb-4\">Banyak template Clincoo menulis desktop dulu lalu @media (max-width: 768px) menimpa puluhan properti. Satu breakpoint baru membingungkan.</p><p class=\"mb-4\">Tulis gaya dasar untuk layar sempit. Tambah @media (min-width: 768px) hanya untuk kolom, padding, dan ukuran judul.</p><p class=\"mb-4\">Batasi dua atau tiga breakpoint. Jangan salin seluruh blok CSS di dalam media query.</p><p class=\"mb-4\">Minta AI menata ulang satu berkas komponen. Tolak generate framework responsif.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. Mobile-first membuat perubahan lebar lebih mudah dibaca.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Write Clincoo Media Queries Mobile-First",
          desc: "Stacked max-width queries are hard to follow. Start from the narrow styles, then min-width.",
          content: "<p class=\"mb-4\">Many Clincoo templates write desktop first, then @media (max-width: 768px) overrides dozens of properties. A new breakpoint becomes confusing.</p><p class=\"mb-4\">Write the base styles for a narrow screen. Add @media (min-width: 768px) only for columns, padding, and heading size.</p><p class=\"mb-4\">Keep two or three breakpoints. Do not copy an entire CSS block inside a media query.</p><p class=\"mb-4\">Ask the AI to rearrange one component file. Refuse generating a responsive framework.</p><p class=\"mb-4\">Clincoo ships the CSS you save. Mobile-first makes width changes easier to read.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "css-aspect-ratio-thumbnail",
      langs: {
        "id": {
          title: "Kunci Rasio Thumbnail Clincoo dengan aspect-ratio",
          desc: "Tinggi gambar berbeda merusak grid. aspect-ratio menjaga kotak tetap.",
          content: "<p class=\"mb-4\">Grid berita Clincoo goyang saat satu thumbnail 4:3 dan yang lain 16:9. Kartu tetangga bergeser.</p><p class=\"mb-4\">Pada wrapper gambar tulis aspect-ratio: 16 / 9; overflow: hidden. Anak img memakai width: 100%; height: 100%; object-fit: cover.</p><p class=\"mb-4\">Jangan set height px tetap kecuali ikon. Cek grid di editor.clincoo.buzz setelah gambar lambat termuat.</p><p class=\"mb-4\">Minta AI satu kelas thumbnail. Tolak generate galeri lengkap.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. aspect-ratio menstabilkan grid tanpa JS.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Lock Clincoo Thumbnail Ratio with aspect-ratio",
          desc: "Uneven image heights break the grid. aspect-ratio keeps the box steady.",
          content: "<p class=\"mb-4\">A Clincoo news grid wobbles when one thumbnail is 4:3 and another is 16:9. Neighbor cards shift.</p><p class=\"mb-4\">On the image wrapper write aspect-ratio: 16 / 9; overflow: hidden. The img child uses width: 100%; height: 100%; object-fit: cover.</p><p class=\"mb-4\">Do not set a fixed px height except for icons. Check the grid in editor.clincoo.buzz after a slow image loads.</p><p class=\"mb-4\">Ask the AI for one thumbnail class. Refuse generating a full gallery.</p><p class=\"mb-4\">Clincoo ships the CSS you save. aspect-ratio steadies the grid without JS.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["css"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["css"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
