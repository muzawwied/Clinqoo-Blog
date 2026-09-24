// Clincoo Blog — Data extra2 kategori: layout
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
if (!window.countryDataFiles["layout"]) window.countryDataFiles["layout"] = { names: { "id": "Layout", "en": "Layout" }, flag: "\ud83d\udcd0", articles: [] };
(function(){
  var extra = [
    {
      id: "layout-gap-bukan-margin-antar-kolom",
      langs: {
        "id": {
          title: "Pakai gap untuk Jarak Kolom Clincoo, Bukan Margin Kiri-Kanan",
          desc: "Margin antar kolom merusak hitungan lebar flex/grid dan membuat baris terakhir tidak rata.",
          content: "<p class=\"mb-4\">Banyak layout Clincoo menambah margin-right pada setiap kartu. Kartu terakhir menyisakan lubang atau memaksa wrap terlalu awal.</p><p class=\"mb-4\">Ganti margin antar item dengan gap di wadah flex atau grid di editor.clincoo.buzz. Gap tidak menambah lebar item.</p><p class=\"mb-4\">Jangan campur gap dan margin horizontal pada anak yang sama. Pilih satu sistem jarak.</p><p class=\"mb-4\">Minta AI mengubah satu wadah daftar kartu. Tempel CSS margin lama sebagai konteks.</p><p class=\"mb-4\">Clincoo merender jarak yang kamu simpan. Gap membuat deretan kartu di app.clincoo.buzz tetap rata.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use gap for Clincoo Column Spacing, Not Left-Right Margin",
          desc: "Margins between columns break flex/grid width math and leave the last row uneven.",
          content: "<p class=\"mb-4\">Many Clincoo layouts add margin-right on every card. The last card leaves a hole or wraps too early.</p><p class=\"mb-4\">Replace inter-item margin with gap on the flex or grid wrapper in editor.clincoo.buzz. Gap does not add to item width.</p><p class=\"mb-4\">Do not mix gap and horizontal margin on the same children. Pick one spacing system.</p><p class=\"mb-4\">Ask AI to change one card-list wrapper. Paste the old margin CSS as context.</p><p class=\"mb-4\">Clincoo renders the spacing you save. Gap keeps card rows even on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "layout-container-query-kartu-sidebar",
      langs: {
        "id": {
          title: "Pakai Container Query agar Kartu Sidebar Clincoo Tidak Pecah",
          desc: "Media query viewport tidak tahu lebar sidebar. Kartu dua kolom tetap dipaksa sempit.",
          content: "<p class=\"mb-4\">Kartu di sidebar Clincoo memakai breakpoint 768px milik halaman. Di kolom 280px kartu tetap dua kolom dan teks terpotong.</p><p class=\"mb-4\">Set container-type: inline-size pada sidebar di editor.clincoo.buzz. Ubah grid kartu dengan @container, bukan @media.</p><p class=\"mb-4\">Jangan andalkan lebar jendela untuk komponen yang hidup di kolom samping. Komponen harus membaca induknya.</p><p class=\"mb-4\">Minta AI menambah container query pada satu file kartu. Tolak rewrite layout halaman penuh.</p><p class=\"mb-4\">Clincoo menyimpan CSS yang kamu tulis. Kartu yang sadar wadah tetap terbaca di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Container Queries so Clincoo Sidebar Cards Do Not Break",
          desc: "Viewport media queries do not know sidebar width. Two-column cards stay cramped.",
          content: "<p class=\"mb-4\">Clincoo sidebar cards use the page 768px breakpoint. In a 280px column the cards stay two-across and text clips.</p><p class=\"mb-4\">Set container-type: inline-size on the sidebar in editor.clincoo.buzz. Switch the card grid with @container, not @media.</p><p class=\"mb-4\">Do not trust window width for a component that lives in a side column. The component must read its parent.</p><p class=\"mb-4\">Ask AI to add a container query in one card file. Reject a full-page layout rewrite.</p><p class=\"mb-4\">Clincoo stores the CSS you write. Container-aware cards stay readable on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  var t = window.countryDataFiles["layout"];
  t.articles = (t.articles || []).concat(extra);
})();
