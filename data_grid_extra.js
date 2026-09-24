// Clincoo Blog — artikel grid tambahan 2026-09-24
(function(){
  var extra = [
    {
      id: "grid-column-span-cta-penuh",
      langs: {
        "id": {
          title: "Pakai grid-column: 1 / -1 agar CTA Clincoo Lebar Penuh",
          desc: "Tombol ajakan di tengah grid kartu sering tertahan di satu kolom sempit.",
          content: "<p class=\"mb-4\">Deretan kartu Clincoo memakai grid tiga kolom. CTA di baris bawah lalu hanya selebar satu kartu dan terlihat kecil.</p><p class=\"mb-4\">Set grid-column:1 / -1 pada blok CTA di editor.clincoo.buzz. Item merentang dari garis pertama sampai terakhir, berapa pun jumlah kolom.</p><p class=\"mb-4\">Jangan hardcode 1 / 4. Saat auto-fit mengubah jumlah kolom, angka tetap pecah.</p><p class=\"mb-4\">Minta AI hanya menambah satu aturan span. Tempel markup CTA dan wadah grid.</p><p class=\"mb-4\">Clincoo merender span yang kamu tulis. CTA lebar penuh tetap terbaca di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use grid-column: 1 / -1 so a Clincoo CTA Spans Full Width",
          desc: "A call-to-action in the middle of a card grid often stays stuck in one narrow column.",
          content: "<p class=\"mb-4\">Clincoo card rows use a three-column grid. The CTA on the last row then matches one card width and looks tiny.</p><p class=\"mb-4\">Set grid-column:1 / -1 on the CTA block in editor.clincoo.buzz. The item spans from the first line to the last, whatever the column count.</p><p class=\"mb-4\">Do not hardcode 1 / 4. When auto-fit changes the column count, a fixed number breaks.</p><p class=\"mb-4\">Ask AI to add one span rule only. Paste the CTA markup and the grid container.</p><p class=\"mb-4\">Clincoo renders the span you write. A full-width CTA stays readable on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "grid-auto-rows-minmax-kartu",
      langs: {
        "id": {
          title: "Setel grid-auto-rows minmax agar Tinggi Kartu Clincoo Stabil",
          desc: "Baris grid mengikuti kartu tertinggi. Kartu pendek lalu menyisakan ruang kosong aneh.",
          content: "<p class=\"mb-4\">Galeri proyek Clincoo punya judul dua baris dan empat baris. Baris grid merentang mengikuti yang tertinggi.</p><p class=\"mb-4\">Tambah grid-auto-rows:minmax(220px,auto) di editor.clincoo.buzz. Baris punya tinggi minimum, konten panjang tetap boleh tumbuh.</p><p class=\"mb-4\">Samakan padding kartu. Jangan pakai height tetap pada setiap kartu jika teks bisa membengkak.</p><p class=\"mb-4\">Minta AI mengubah satu aturan auto-rows. Tempel contoh kartu pendek dan panjang.</p><p class=\"mb-4\">Clincoo tidak meratakan tinggi kartu secara ajaib. auto-rows membuat pratinjau dan app.clincoo.buzz lebih rapi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set grid-auto-rows minmax so Clincoo Card Heights Stay Stable",
          desc: "Grid rows follow the tallest card. Short cards then leave odd empty space.",
          content: "<p class=\"mb-4\">A Clincoo project gallery has two-line and four-line titles. The grid row stretches with the tallest card.</p><p class=\"mb-4\">Add grid-auto-rows:minmax(220px,auto) in editor.clincoo.buzz. Rows get a minimum height; long copy may still grow.</p><p class=\"mb-4\">Keep card padding equal. Do not lock height on every card if text can wrap extra lines.</p><p class=\"mb-4\">Ask AI to change one auto-rows rule. Paste a short card and a long card as context.</p><p class=\"mb-4\">Clincoo does not equalize card height for you. auto-rows keeps preview and app.clincoo.buzz tidier.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "grid-place-items-tengah-hero",
      langs: {
        "id": {
          title: "Pakai place-items:center untuk Hero Grid Clincoo",
          desc: "Teks dan gambar di sel grid sering nempel ke sudut karena default stretch.",
          content: "<p class=\"mb-4\">Hero Clincoo satu sel grid menaruh heading di pojok kiri atas. Stretch default merentangkan anak ke seluruh sel.</p><p class=\"mb-4\">Set place-items:center pada wadah hero di editor.clincoo.buzz. place-items mengatur align-items dan justify-items sekaligus.</p><p class=\"mb-4\">Jika hanya sumbu silang yang perlu tengah, pakai align-items:center saja. Jangan campur margin:auto pada setiap anak.</p><p class=\"mb-4\">Minta AI menyentuh satu wadah hero. Tolak position:absolute sebagai ganti centering.</p><p class=\"mb-4\">Clincoo merender alignment CSS apa adanya. place-items menjaga hero tetap seimbang di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use place-items:center for a Clincoo Grid Hero",
          desc: "Text and images in a grid cell often stick to a corner because of default stretch.",
          content: "<p class=\"mb-4\">A one-cell Clincoo hero parks the heading in the top-left. Default stretch grows children across the whole cell.</p><p class=\"mb-4\">Set place-items:center on the hero container in editor.clincoo.buzz. place-items sets align-items and justify-items together.</p><p class=\"mb-4\">If only the cross axis should center, use align-items:center alone. Do not mix margin:auto on every child.</p><p class=\"mb-4\">Ask AI to touch one hero container. Reject position:absolute as a centering substitute.</p><p class=\"mb-4\">Clincoo renders the CSS alignment you save. place-items keeps the hero balanced on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "grid-align-content-ruang-sisa",
      langs: {
        "id": {
          title: "Pakai align-content saat Grid Clincoo Punya Ruang Sisa Vertikal",
          desc: "Baris grid mengumpul di atas jika tinggi wadah lebih besar dari isi.",
          content: "<p class=\"mb-4\">Halaman harga Clincoo memakai min-height viewport. Dua baris kartu menempel di atas, bawah halaman kosong.</p><p class=\"mb-4\">Set align-content:center atau space-evenly pada wadah grid di editor.clincoo.buzz. Properti ini mengatur jarak ANTAR baris, bukan isi sel.</p><p class=\"mb-4\">Jangan bingungkan dengan align-items. align-items merapikan item di dalam sel; align-content merapikan baris di dalam wadah.</p><p class=\"mb-4\">Minta AI menambah satu deklarasi align-content. Tempel tinggi wadah yang bermasalah.</p><p class=\"mb-4\">Clincoo tidak mengisi ruang sisa sendiri. align-content membuat layout terasa sengaja di blog.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use align-content when a Clincoo Grid Has Leftover Vertical Space",
          desc: "Grid rows pile at the top when the container is taller than its content.",
          content: "<p class=\"mb-4\">A Clincoo pricing page uses a viewport min-height. Two card rows stick to the top and the bottom of the page is empty.</p><p class=\"mb-4\">Set align-content:center or space-evenly on the grid container in editor.clincoo.buzz. This property spaces ROWS, not cell contents.</p><p class=\"mb-4\">Do not confuse it with align-items. align-items tidies items inside a cell; align-content tidies rows inside the container.</p><p class=\"mb-4\">Ask AI to add one align-content declaration. Paste the container height that looks wrong.</p><p class=\"mb-4\">Clincoo does not fill leftover space for you. align-content makes the layout feel intentional on blog.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "grid-satu-kolom-di-mobile",
      langs: {
        "id": {
          title: "Ubah Template Grid Clincoo Jadi Satu Kolom di Mobile",
          desc: "Dua atau tiga kolom di HP memaksa teks dan tombol terlalu sempit untuk diketuk.",
          content: "<p class=\"mb-4\">Layout desktop Clincoo memakai grid 2fr 1fr. Di 360px kolom samping menindih atau meremas form.</p><p class=\"mb-4\">Di media query sempit, set grid-template-columns:1fr dan grid-template-areas satu kolom di editor.clincoo.buzz.</p><p class=\"mb-4\">Jaga urutan DOM: konten utama dulu, sidebar kemudian. Jangan andalkan order untuk HP.</p><p class=\"mb-4\">Minta AI hanya menambah satu breakpoint grid. Tempel lebar pratinjau yang pecah.</p><p class=\"mb-4\">Clincoo tidak mengganti grid saat layar menyusut. Satu kolom sadar menjaga form tetap bisa diisi di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Switch a Clincoo Grid Template to One Column on Mobile",
          desc: "Two or three columns on a phone squeeze text and make buttons too narrow to tap.",
          content: "<p class=\"mb-4\">A Clincoo desktop layout uses grid 2fr 1fr. At 360px the side column overlaps or crushes the form.</p><p class=\"mb-4\">In the narrow media query, set grid-template-columns:1fr and a one-column grid-template-areas in editor.clincoo.buzz.</p><p class=\"mb-4\">Keep DOM order honest: main content first, sidebar next. Do not rely on order for phones.</p><p class=\"mb-4\">Ask AI to add one grid breakpoint only. Paste the preview width that breaks.</p><p class=\"mb-4\">Clincoo does not rewrite the grid when the screen shrinks. A deliberate single column keeps the form usable on app.clincoo.buzz.</p>",
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
