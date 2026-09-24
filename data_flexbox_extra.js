// Clincoo Blog — artikel flexbox tambahan 2026-09-24
(function(){
  var extra = [
    {
      id: "flexbox-overflow-auto-daftar-chip",
      langs: {
        "id": {
          title: "Pakai overflow-auto pada Baris Flex Chip, Bukan overflow-hidden",
          desc: "Daftar chip atau tag di navbar flex sering dipotong hidden sehingga item terakhir tidak bisa diketuk.",
          content: "<p class=\"mb-4\">Baris tag atau filter Clincoo memakai display:flex tanpa wrap. overflow:hidden memotong chip terakhir di layar sempit.</p><p class=\"mb-4\">Ganti hidden dengan overflow-x:auto dan flex-wrap:nowrap pada wadah di editor.clincoo.buzz. Pengunjung masih bisa menggeser daftar.</p><p class=\"mb-4\">Tambah padding-bottom tipis agar scrollbar tidak menutupi chip. Jangan andalkan hover-only scroll di HP.</p><p class=\"mb-4\">Minta AI hanya mengubah satu wadah daftar. Tempel markup chip yang terpotong sebagai konteks.</p><p class=\"mb-4\">Clincoo merender overflow apa adanya. auto menjaga setiap filter tetap bisa diketuk di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use overflow-auto on Flex Chip Rows, Not overflow-hidden",
          desc: "Chip or tag lists in a flex navbar are often clipped hidden so the last item cannot be tapped.",
          content: "<p class=\"mb-4\">Clincoo tag or filter rows use display:flex without wrap. overflow:hidden clips the last chip on a narrow screen.</p><p class=\"mb-4\">Replace hidden with overflow-x:auto and flex-wrap:nowrap on the container in editor.clincoo.buzz. Visitors can still scroll the list.</p><p class=\"mb-4\">Add a little padding-bottom so the scrollbar does not cover chips. Do not rely on hover-only scroll on a phone.</p><p class=\"mb-4\">Ask AI to change only one list container. Paste the clipped chip markup as context.</p><p class=\"mb-4\">Clincoo renders overflow as saved. auto keeps every filter tappable on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["flexbox"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["flexbox"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
