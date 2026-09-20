// Clincoo Blog — artikel css tambahan 2026-09-20 WIB
(function(){
  var extra = [
    {
      id: "css-sticky-header-jaga-offset",
      langs: {
        "id": {
          title: "Header Sticky Clincoo Butuh Offset pada Judul Bagian",
          desc: "position: sticky menutupi heading saat loncat ke jangkar. Tambah scroll-margin-top.",
          content: "<p class=\"mb-4\">Menu Clincoo yang menempel di atas sering menutupi h2 saat pengunjung mengklik tautan #harga. Bukan bug browser — header menumpuk di zona scroll.</p><p class=\"mb-4\">Ukur tinggi header di pratinjau editor.clincoo.buzz. Pada heading sasaran tulis scroll-margin-top sebesar tinggi itu plus 8px.</p><p class=\"mb-4\">Jangan naikkan z-index tanpa alasan. Sticky hanya butuh parent yang tidak overflow hidden.</p><p class=\"mb-4\">Minta AI satu aturan scroll-margin. Tolak rewrite seluruh navigasi.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. Offset jangkar menjaga heading tetap terbaca.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "A Sticky Clincoo Header Needs Offset on Section Titles",
          desc: "position: sticky covers headings when you jump to an anchor. Add scroll-margin-top.",
          content: "<p class=\"mb-4\">A Clincoo menu stuck to the top often covers an h2 when a visitor clicks #pricing. That is not a browser bug — the header occupies the scroll zone.</p><p class=\"mb-4\">Measure the header height in the editor.clincoo.buzz preview. On the target heading write scroll-margin-top equal to that height plus 8px.</p><p class=\"mb-4\">Do not raise z-index without a reason. Sticky only needs a parent that is not overflow hidden.</p><p class=\"mb-4\">Ask the AI for one scroll-margin rule. Refuse a full navigation rewrite.</p><p class=\"mb-4\">Clincoo ships the CSS you save. Anchor offset keeps headings readable.</p>",
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
