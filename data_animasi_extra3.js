// Clincoo Blog — artikel animasi tambahan 2026-09-22 20:30 WIB
(function(){
  var extra = [
    {
      id: "animasi-jangan-loop-hero-tanpa-henti",
      langs: {
        "id": {
          title: "Jangan Loop Animasi Hero Clincoo Tanpa Henti",
          desc: "Hero yang bergeser terus mengalihkan fokus dari CTA. Satu putaran atau gerak saat hover sudah cukup.",
          content: "<p class=\"mb-4\">AI sering memasang animation: slide 8s infinite pada banner Clincoo. Pengunjung yang ingin baca judul justru melihat teks bergerak terus.</p><p class=\"mb-4\">Batasi ke satu siklus, atau gerakkan hanya saat hover. Jika loop wajib, hormati prefers-reduced-motion dan sediakan tombol jeda.</p><p class=\"mb-4\">Uji di editor.clincoo.buzz selama 15 detik tanpa menggerakkan mouse. Jika mata lelah sebelum CTA terbaca, matikan infinite.</p><p class=\"mb-4\">Minta AI menghapus infinite dari keyframes hero. Tolak carousel otomatis tanpa kontrol.</p><p class=\"mb-4\">Clincoo adalah landing statis. Gerak yang tidak berhenti mencuri perhatian dari tindakan yang kamu inginkan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Loop a Clincoo Hero Animation Forever",
          desc: "A banner that never stops pulling focus away from the CTA. One cycle or hover-only motion is enough.",
          content: "<p class=\"mb-4\">AI often sets animation: slide 8s infinite on a Clincoo banner. Visitors who want the headline instead watch the text keep moving.</p><p class=\"mb-4\">Limit it to one cycle, or move only on hover. If a loop is required, honor prefers-reduced-motion and add a pause control.</p><p class=\"mb-4\">Test in editor.clincoo.buzz for 15 seconds without moving the mouse. If your eyes tire before the CTA is readable, drop infinite.</p><p class=\"mb-4\">Ask the AI to remove infinite from the hero keyframes. Refuse an auto carousel with no controls.</p><p class=\"mb-4\">Clincoo is a static landing page. Motion that never stops steals attention from the action you want.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["animasi"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["animasi"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
