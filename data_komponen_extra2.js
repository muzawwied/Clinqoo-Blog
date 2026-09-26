// Clincoo Blog — artikel komponen tambahan 2026-09-26
(function(){
  var extra = [
    {
      id: "komponen-switch-pakai-checkbox",
      langs: {
        "id": {
          title: "Bangun Switch Komponen Clincoo dari Checkbox, Bukan Div",
          desc: "Sakelar visual tanpa checkbox membingungkan keyboard dan pembaca layar. Ikat label ke input asli.",
          content: "<p class=\"mb-4\">Toggle tema Clincoo sering berupa div yang hanya mengganti kelas CSS. Space dan Enter tidak mengubah apa pun, dan status on/off tidak diumumkan.</p><p class=\"mb-4\">Pakai input type=checkbox tersembunyi secara visual plus label di editor.clincoo.buzz. aria-checked tidak menggantikan checkbox asli jika kamu bisa memakai kontrol native.</p><p class=\"mb-4\">Jangan andalkan klik pada ikon saja. Seluruh baris label harus bisa diklik dan fokus terlihat saat Tab.</p><p class=\"mb-4\">Minta AI hanya mengubah div jadi checkbox plus label. Tempel markup switch yang sekarang bisu.</p><p class=\"mb-4\">Clincoo merender kontrol yang kamu tulis. Switch yang berbasis checkbox menjaga status jelas di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Build a Clincoo Switch Component from a Checkbox, Not a Div",
          desc: "A visual toggle without a checkbox confuses keyboard and screen reader users. Bind a label to a real input.",
          content: "<p class=\"mb-4\">A Clincoo theme toggle is often a div that only swaps a CSS class. Space and Enter do nothing, and on/off is never announced.</p><p class=\"mb-4\">Use a visually hidden checkbox plus a label in editor.clincoo.buzz. aria-checked does not replace a native checkbox when you can use one.</p><p class=\"mb-4\">Do not rely on clicking the icon alone. The whole label row should be clickable and show focus on Tab.</p><p class=\"mb-4\">Ask AI to change only the div into a checkbox plus label. Paste the currently silent switch markup.</p><p class=\"mb-4\">Clincoo renders the control you write. A checkbox-based switch keeps state clear on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "komponen-stepper-nama-langkah",
      langs: {
        "id": {
          title: "Beri Nama dan Status pada Stepper Komponen Clincoo",
          desc: "Deretan lingkaran tanpa teks membuat pengguna tidak tahu langkah keberapa. Umumkan posisi dan langkah aktif.",
          content: "<p class=\"mb-4\">Wizard unggah Clincoo menampilkan tiga titik. Pengunjung tidak tahu titik kedua berarti 'pratinjau' dan tidak bisa lompat dengan keyboard.</p><p class=\"mb-4\">Tulis nomor plus nama singkat per langkah di editor.clincoo.buzz. Tandai langkah aktif dengan aria-current=step pada daftar terurut.</p><p class=\"mb-4\">Jangan andalkan warna saja untuk langkah selesai. Ikon centang plus kata selesai membantu pengguna buta warna.</p><p class=\"mb-4\">Minta AI hanya menambah nama langkah dan aria-current. Tempel markup stepper yang hanya berupa titik.</p><p class=\"mb-4\">Clincoo tidak menjelaskan wizard sendiri. Stepper yang bernama menjaga alur jelas di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Name and Announce Steps on a Clincoo Stepper Component",
          desc: "A row of dots without text hides which step you are on. Announce position and the active step.",
          content: "<p class=\"mb-4\">A Clincoo upload wizard shows three dots. Visitors cannot tell the second dot means preview and cannot jump with the keyboard.</p><p class=\"mb-4\">Write a number plus a short name per step in editor.clincoo.buzz. Mark the active step with aria-current=step on an ordered list.</p><p class=\"mb-4\">Do not rely on color alone for completed steps. A check icon plus the word done helps color-blind users.</p><p class=\"mb-4\">Ask AI to add only step names and aria-current. Paste the dots-only stepper markup.</p><p class=\"mb-4\">Clincoo does not explain the wizard for you. A named stepper keeps the flow clear on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["komponen"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["komponen"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
