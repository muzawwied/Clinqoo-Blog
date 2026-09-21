// Clincoo Blog — artikel navigasi tambahan 2026-09-21 WIB batch 3
(function(){
  var extra = [
    {
      id: "nav-kontak-di-ujung-menu",
      langs: {
        "id": {
          title: "Letakkan Kontak di Ujung Menu Clincoo",
          desc: "Pengunjung mencari cara menghubungi Anda. Simpan tautan Kontak sebagai item terakhir.",
          content: '<p class="mb-4">Menu Clincoo yang menaruh Kontak di tengah membuat pengunjung mencari-cari cara menghubungi Anda.</p><p class="mb-4">Letakkan tautan Kontak sebagai item terakhir di header. Pola Beranda-Layanan-Tentang-Kontak sudah familiar.</p><p class="mb-4">Cek di editor.clincoo.buzz pada setiap halaman. Kontak harus di ujung kanan atau bawah daftar, bukan di antara item lain.</p><p class="mb-4">Minta AI memindahkan satu item di satu file menu. Tolak tombol mengambang yang menutupi konten.</p><p class="mb-4">Di situs Clincoo statis, posisi Kontak yang tetap lebih berguna daripada animasi CTA.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Put Contact at the End of the Clincoo Menu",
          desc: "Visitors look for a way to reach you. Keep the Contact link as the last item.",
          content: '<p class="mb-4">A Clincoo menu that buries Contact in the middle makes visitors hunt for a way to reach you.</p><p class="mb-4">Put the Contact link last in the header. Home-Services-About-Contact is a familiar pattern.</p><p class="mb-4">Check every page in editor.clincoo.buzz. Contact should sit at the right end or the bottom of the list, not between other items.</p><p class="mb-4">Ask the AI to move one item in one menu file. Refuse a floating button that covers content.</p><p class="mb-4">On a static Clincoo site, a stable Contact position helps more than an animated CTA.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["navigasi"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["navigasi"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
