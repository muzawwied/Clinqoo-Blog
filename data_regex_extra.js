// Clincoo Blog — artikel regex tambahan 2026-09-26 WIB
(function(){
  var extra = [
    {
      id: "regex-reset-lastindex-flag-g",
      langs: {
        "id": {
          title: "Reset lastIndex setelah Regex Berflag g di Clincoo",
          desc: "Flag g membuat test() loncat. Set lastIndex ke 0 sebelum uji string berikutnya.",
          content: "<p class=\"mb-4\">Validasi Clincoo lolos di percobaan pertama lalu gagal di input yang sama. lastIndex tertinggal karena flag g.</p><p class=\"mb-4\">Di editor.clincoo.buzz, setelah test() atau exec() dengan /g, set pola.lastIndex = 0 sebelum string baru.</p><p class=\"mb-4\">Lebih aman: buat RegExp baru per uji, atau pakai String.prototype.match tanpa memakai objek yang sama berulang.</p><p class=\"mb-4\">Minta AI menandai semua test() yang memakai pola global. Tempel fungsi validasi yang ada.</p><p class=\"mb-4\">Clincoo tidak mereset regex untukmu. lastIndex yang bersih menjaga form di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Reset lastIndex after a Global Regex in Clincoo",
          desc: "A g flag makes test() skip ahead. Set lastIndex to 0 before the next string.",
          content: "<p class=\"mb-4\">A Clincoo check passes once, then fails on the same input. lastIndex lingered because of the g flag.</p><p class=\"mb-4\">In editor.clincoo.buzz, after test() or exec() with /g, set pattern.lastIndex = 0 before a new string.</p><p class=\"mb-4\">Safer: make a new RegExp per check, or use String.prototype.match instead of reusing one object.</p><p class=\"mb-4\">Ask AI to mark every test() that uses a global pattern. Paste the current validator.</p><p class=\"mb-4\">Clincoo does not reset regex for you. A clean lastIndex keeps the form honest on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "regex-hindari-backtracking-katastropik",
      langs: {
        "id": {
          title: "Hindari Backtracking Katastropik pada Pola Clincoo",
          desc: "Kuantifier bersarang bisa menggantung tab. Batasi pengulangan dan uji string panjang.",
          content: "<p class=\"mb-4\">Input panjang di form Clincoo membuat tab membeku. Pola seperti (a+)+b menelusuri terlalu banyak cabang.</p><p class=\"mb-4\">Di editor.clincoo.buzz, ganti kuantifier bersarang dengan kelas karakter plus batas panjang {1,32}.</p><p class=\"mb-4\">Uji dengan string berulang 50 karakter di console. Jika hang, pola terlalu rakus.</p><p class=\"mb-4\">Minta AI menyederhanakan satu pola yang memakai plus di dalam plus. Tempel atribut pattern.</p><p class=\"mb-4\">Clincoo berjalan di browser pengguna. Pola linier menjaga editor tetap responsif di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Avoid Catastrophic Backtracking in Clincoo Patterns",
          desc: "Nested quantifiers can freeze a tab. Cap repetition and test long strings.",
          content: "<p class=\"mb-4\">A long Clincoo input freezes the tab. A pattern like (a+)+b explores too many branches.</p><p class=\"mb-4\">In editor.clincoo.buzz, replace nested quantifiers with a character class plus a {1,32} cap.</p><p class=\"mb-4\">Test a 50-character repeated string in the console. If it hangs, the pattern is too greedy.</p><p class=\"mb-4\">Ask AI to simplify one pattern that nests plus inside plus. Paste the pattern attribute.</p><p class=\"mb-4\">Clincoo runs in the user browser. A linear pattern keeps the editor responsive on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "regex-slug-url-dengan-replace-sederhana",
      langs: {
        "id": {
          title: "Buat Slug URL Clincoo dengan Replace Sederhana",
          desc: "Jangan rangkai satu regex raksasa. Turunkan huruf, ganti spasi, buang sisa.",
          content: "<p class=\"mb-4\">Judul proyek Clincoo jadi slug aneh karena satu pola mengganti terlalu banyak sekaligus.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pecah langkah: toLowerCase, ganti spasi jadi strip, buang karakter non [a-z0-9-].</p><p class=\"mb-4\">Rapikan strip ganda dengan replace(/-+/g, '-') lalu potong ujung. Lebih mudah diuji per langkah.</p><p class=\"mb-4\">Minta AI menulis tiga replace berurutan, bukan satu pola. Tempel fungsi slug yang ada.</p><p class=\"mb-4\">Clincoo memakai slug di tautan pratinjau. Langkah kecil menjaga URL bersih di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Build a Clincoo URL Slug with Simple Replaces",
          desc: "Do not pack one giant regex. Lowercase, swap spaces, then strip leftovers.",
          content: "<p class=\"mb-4\">A Clincoo project title becomes a weird slug because one pattern changes too much at once.</p><p class=\"mb-4\">In editor.clincoo.buzz, split the steps: toLowerCase, turn spaces into dashes, drop anything outside [a-z0-9-].</p><p class=\"mb-4\">Collapse extra dashes with replace(/-+/g, '-') then trim the ends. Each step is easy to test.</p><p class=\"mb-4\">Ask AI for three sequential replaces, not one pattern. Paste the current slug helper.</p><p class=\"mb-4\">Clincoo uses slugs in preview links. Small steps keep URLs clean on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["regex"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["regex"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
