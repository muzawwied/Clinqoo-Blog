// Clincoo Blog — artikel mobile tambahan 2026-09-20
(function(){
  var extra = [
    {
      id: "mobile-safe-area-notch-padding",
      langs: {
        "id": {
          title: "Hormati Safe Area Notch di Header Situs Clincoo",
          desc: "Ponsel dengan lekukan memotong navbar tetap. Tambah padding env(safe-area-inset-*).",
          content: "<p class=\"mb-4\">Header fixed di template Clincoo sering menempel ke tepi atas. Di ponsel berlekukan, jam dan kamera menutupi logo atau menu pertama.</p><p class=\"mb-4\">Tambahkan padding-top: env(safe-area-inset-top) pada header tetap, dan padding bawah serupa jika CTA menempel di tepi layar.</p><p class=\"mb-4\">Meta viewport viewport-fit=cover diperlukan agar nilai safe-area tidak nol. Cek di pratinjau HP, bukan hanya jendela desktop yang diperkecil.</p><p class=\"mb-4\">Minta AI hanya menyentuh CSS header. Jangan biarkan ia menulis deteksi perangkat dengan JavaScript berat.</p><p class=\"mb-4\">Clincoo tidak menyesuaikan notch otomatis. Safe area adalah CSS yang kamu pasang sebelum rilis.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Respect the Notch Safe Area on a Clincoo Header",
          desc: "Phones with a cutout clip a sticky navbar. Add env(safe-area-inset-*) padding.",
          content: "<p class=\"mb-4\">A fixed header in a Clincoo template often sits flush with the top edge. On a notched phone the clock and camera cover the logo or the first menu item.</p><p class=\"mb-4\">Add padding-top: env(safe-area-inset-top) on the sticky header, and similar bottom padding if a CTA hugs the screen edge.</p><p class=\"mb-4\">A viewport-fit=cover meta is required or the safe-area values stay zero. Check on a phone preview, not only a shrunken desktop window.</p><p class=\"mb-4\">Ask the AI to touch header CSS only. Do not let it write heavy JavaScript device detection.</p><p class=\"mb-4\">Clincoo does not adapt to notches by itself. Safe area is CSS you add before release.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["mobile"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["mobile"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
