// Clincoo Blog — artikel responsive tambahan 2026-09-23
(function(){
  var extra = [
    {
      id: "responsive-viewport-meta",
      langs: {
        "id": {
          title: "Pasang Meta Viewport agar Layout Clincoo Tidak Mengecil di HP",
          desc: "Tanpa width=device-width browser HP meniru desktop. Tambah satu tag meta di head.",
          content: "<p class=\"mb-4\">Template Clincoo yang diekspor kadang kehilangan tag meta viewport. HP lalu merender 980px dan mengecilkan seluruh halaman.</p><p class=\"mb-4\">Pasang <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> di head setiap halaman. Jangan menambah user-scalable=no kecuali ada alasan akses yang kuat.</p><p class=\"mb-4\">Jangan mengunci maximum-scale=1. Pengunjung yang butuh perbesar teks harus tetap bisa pinch.</p><p class=\"mb-4\">Cek sumber halaman di editor.clincoo.buzz. Minta AI hanya menambah atau memperbaiki tag viewport, bukan merombak CSS.</p><p class=\"mb-4\">Clincoo merender HTML yang kamu simpan. Viewport yang benar adalah syarat pertama layout responsif.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add a Viewport Meta Tag so Clincoo Layout Does Not Shrink on Phones",
          desc: "Without width=device-width a phone browser pretends to be desktop. Add one meta tag in head.",
          content: "<p class=\"mb-4\">Exported Clincoo templates sometimes drop the viewport meta tag. The phone then renders 980px and shrinks the whole page.</p><p class=\"mb-4\">Put <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> in the head of every page. Do not add user-scalable=no unless you have a strong access reason.</p><p class=\"mb-4\">Do not lock maximum-scale=1. Visitors who need to enlarge text must still pinch.</p><p class=\"mb-4\">Inspect the page source in editor.clincoo.buzz. Ask AI only to add or fix the viewport tag, not to rewrite CSS.</p><p class=\"mb-4\">Clincoo renders the HTML you save. A correct viewport is the first requirement of a responsive layout.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "responsive-cari-overflow-bukan-hidden",
      langs: {
        "id": {
          title: "Cari Elemen yang Meluber di Clincoo, Jangan Langsung overflow-x Hidden",
          desc: "overflow-x hidden menyembunyikan masalah. Temukan anak yang lebih lebar dari viewport.",
          content: "<p class=\"mb-4\">Saat halaman Clincoo bergeser ke samping di HP, godaan pertama adalah body { overflow-x: hidden }. Isi yang terpotong tetap rusak.</p><p class=\"mb-4\">Di DevTools, pilih elemen dari atas ke bawah dan lihat computed width. Cari pre, tabel, gambar, atau padding + width 100% yang menumpuk.</p><p class=\"mb-4\">Perbaiki akar: max-width 100%, box-sizing border-box, atau word-break pada string panjang. Baru pertimbangkan clip pada wadah spesifik.</p><p class=\"mb-4\">Ulangi uji 320px di editor.clincoo.buzz. Minta AI menunjuk selector yang melebihi viewport, bukan menambah hidden di root.</p><p class=\"mb-4\">Clincoo tidak memotong overflow otomatis. Perbaikan jujur menjaga konten tetap bisa dibaca.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Find the Overflowing Clincoo Element Instead of Hiding overflow-x",
          desc: "overflow-x hidden hides the bug. Find the child that is wider than the viewport.",
          content: "<p class=\"mb-4\">When a Clincoo page slides sideways on a phone, the first temptation is body { overflow-x: hidden }. Clipped content stays broken.</p><p class=\"mb-4\">In DevTools, walk elements from the top and read computed width. Look for pre, tables, images, or padding plus width 100% stacked together.</p><p class=\"mb-4\">Fix the root: max-width 100%, box-sizing border-box, or word-break on long strings. Only then consider clipping a specific wrapper.</p><p class=\"mb-4\">Retest 320px in editor.clincoo.buzz. Ask AI to name the selector that exceeds the viewport, not to hide overflow on the root.</p><p class=\"mb-4\">Clincoo does not clip overflow for you. An honest fix keeps the content readable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "responsive-target-sentuh-tombol",
      langs: {
        "id": {
          title: "Perbesar Target Sentuh Tombol dan Tautan Clincoo di Ponsel",
          desc: "Tombol 28px sulit diketuk. Naikkan padding dan tinggi minimum sekitar 44px.",
          content: "<p class=\"mb-4\">CTA Clincoo yang rapat di navbar atau kartu harga sering gagal diketuk. Jari menutupi target kecil dan salah halaman terbuka.</p><p class=\"mb-4\">Di gaya dasar mobile, set min-height 44px dan padding horizontal yang longgar pada tombol dan tautan penting. Beri gap antar item.</p><p class=\"mb-4\">Jangan andalkan hover untuk menampilkan aksi sekunder. Di sentuh, aksi itu harus terlihat tanpa hover.</p><p class=\"mb-4\">Uji dengan ibu jari di pratinjau editor.clincoo.buzz atau HP nyata. Minta AI hanya menambah padding mobile, bukan mengganti seluruh tema tombol.</p><p class=\"mb-4\">Clincoo tidak menormalisasi ukuran sentuh. Target yang cukup besar menurunkan salah ketuk.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Grow Touch Targets on Clincoo Buttons and Links for Phones",
          desc: "A 28px button is hard to tap. Raise padding and a minimum height near 44px.",
          content: "<p class=\"mb-4\">Tight Clincoo CTAs in a navbar or pricing card often miss taps. A finger covers a small target and the wrong page opens.</p><p class=\"mb-4\">In base mobile styles, set min-height 44px and generous horizontal padding on buttons and key links. Add gap between items.</p><p class=\"mb-4\">Do not rely on hover to reveal a secondary action. On touch that action must be visible without hover.</p><p class=\"mb-4\">Test with a thumb in editor.clincoo.buzz preview or on a real phone. Ask AI only to add mobile padding, not to replace the whole button theme.</p><p class=\"mb-4\">Clincoo does not normalize touch size. Large enough targets cut mistaps.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "responsive-tabel-scroll-horizontal",
      langs: {
        "id": {
          title: "Bungkus Tabel Lebar Clincoo agar Bisa Digulir di Layar Sempit",
          desc: "Tabel spek memecah kartu di HP. Bungkus overflow-x auto, jangan perkecil font sampai tak terbaca.",
          content: "<p class=\"mb-4\">Tabel perbandingan paket Clincoo dengan banyak kolom mendorong body lebih lebar dari 375px.</p><p class=\"mb-4\">Bungkus table dalam div.table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }. Biarkan tabel menjaga min-width kolom yang masih bisa dibaca.</p><p class=\"mb-4\">Jangan mengubah semua tabel jadi kartu kecuali data memang hierarkis. Scroll horizontal lebih jujur untuk matriks.</p><p class=\"mb-4\">Uji geser dengan jari di editor.clincoo.buzz. Minta AI hanya menambah pembungkus, bukan menghapus kolom.</p><p class=\"mb-4\">Clincoo menampilkan tabel apa adanya. Wadah gulir menjaga angka tetap utuh di saku.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Wrap Wide Clincoo Tables so They Scroll on Narrow Screens",
          desc: "Spec tables break cards on phones. Wrap with overflow-x auto; do not shrink type until it is unreadable.",
          content: "<p class=\"mb-4\">A Clincoo plan-comparison table with many columns pushes the body wider than 375px.</p><p class=\"mb-4\">Wrap the table in div.table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }. Let the table keep a readable column min-width.</p><p class=\"mb-4\">Do not turn every table into cards unless the data is hierarchical. Horizontal scroll is more honest for a matrix.</p><p class=\"mb-4\">Test a finger swipe in editor.clincoo.buzz. Ask AI only to add the wrapper, not to drop columns.</p><p class=\"mb-4\">Clincoo renders tables as saved. A scroll wrapper keeps the numbers intact in a pocket.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "responsive-padding-fluid-clamp",
      langs: {
        "id": {
          title: "Pakai Padding Fluid dan clamp() agar Tipografi Clincoo Ikut Lebar Layar",
          desc: "Padding 80px dan font 48px pecah di HP. Turunkan dengan clamp dan persen.",
          content: "<p class=\"mb-4\">Hero Clincoo yang ditulis untuk desktop memakai padding besar dan judul tetap 48px. Di 360px sisa ruang untuk teks hampir habis.</p><p class=\"mb-4\">Ganti padding tetap dengan clamp(16px, 4vw, 64px) dan ukuran judul dengan clamp(1.5rem, 4vw, 3rem). Batas bawah dan atas menjaga keterbacaan.</p><p class=\"mb-4\">Jangan memakai vw murni tanpa min. Di layar sangat sempit teks bisa jadi terlalu kecil.</p><p class=\"mb-4\">Pratinjau 375 dan 1280 di editor.clincoo.buzz. Minta AI mengubah dua properti itu saja.</p><p class=\"mb-4\">Clincoo tidak menskalakan tipe otomatis. clamp yang hemat membuat hero tetap muat tanpa media query tambahan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Fluid Padding and clamp() so Clincoo Type Follows Screen Width",
          desc: "80px padding and 48px type break on phones. Lower them with clamp and percentages.",
          content: "<p class=\"mb-4\">A Clincoo hero written for desktop uses large padding and a fixed 48px title. At 360px almost no room remains for text.</p><p class=\"mb-4\">Replace fixed padding with clamp(16px, 4vw, 64px) and title size with clamp(1.5rem, 4vw, 3rem). The floor and ceiling keep type readable.</p><p class=\"mb-4\">Do not use raw vw without a minimum. On a very narrow screen text can become too small.</p><p class=\"mb-4\">Preview 375 and 1280 in editor.clincoo.buzz. Ask AI to change those two properties only.</p><p class=\"mb-4\">Clincoo does not scale type for you. A modest clamp keeps the hero fitting without extra media queries.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["responsive"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["responsive"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
