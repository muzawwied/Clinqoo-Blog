// Clincoo Blog — artikel logging tambahan 2026-09-24
(function(){
  var extra = [
    {
      id: "logging-console-count-ulang-event",
      langs: {
        "id": {
          title: "Hitung Berapa Kali Event Dipicu dengan console.count di Clincoo",
          desc: "console.count menandai seberapa sering handler jalan tanpa menimbun baris log acak.",
          content: "<p class=\"mb-4\">Handler klik atau input di halaman Clincoo kadang terpasang dua kali. Kamu melihat efek ganda tapi log biasa tidak menunjukkan frekuensi.</p><p class=\"mb-4\">Pakai console.count('submit') di dalam handler. Label yang sama menaikkan angka. Reset dengan console.countReset setelah tes selesai.</p><p class=\"mb-4\">Jangan count di requestAnimationFrame tanpa guard. Angka melonjak dan tab DevTools menjadi berisik.</p><p class=\"mb-4\">Minta AI menambahkan count pada addEventListener yang dicurigai duplikat, lalu uji di editor.clincoo.buzz.</p><p class=\"mb-4\">Clincoo mengeksekusi skrip halaman apa adanya. count yang rapi membuktikan apakah event benar-benar sekali atau berkali-kali.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Count How Often an Event Fires with console.count in Clincoo",
          desc: "console.count shows how often a handler runs without dumping random log lines.",
          content: "<p class=\"mb-4\">A click or input handler on a Clincoo page is sometimes attached twice. You see a double effect, but ordinary logs hide the frequency.</p><p class=\"mb-4\">Call console.count('submit') inside the handler. The same label increments. Reset with console.countReset after the test.</p><p class=\"mb-4\">Do not count inside requestAnimationFrame without a guard. The number explodes and DevTools becomes noisy.</p><p class=\"mb-4\">Ask the AI to add count on a suspected duplicate addEventListener, then test it in editor.clincoo.buzz.</p><p class=\"mb-4\">Clincoo runs page scripts as written. A tidy count proves whether an event fires once or many times.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["logging"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["logging"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
