// Clincoo Blog — artikel dom tambahan 2026-09-27
(function(){
  var extra = [
    {
      id: "dom-nodelist-statis-queryselectorall",
      langs: {
        "id": {
          title: "Pakai querySelectorAll Clincoo untuk Daftar Statis, Bukan Koleksi Hidup",
          desc: "HTMLCollection dari getElementsByClassName berubah saat DOM berubah. NodeList statis lebih mudah dihitung.",
          content: "<p class=\"mb-4\">Loop Clincoo memanggil getElementsByClassName('item') lalu menghapus node di dalam loop. Indeks loncat dan beberapa item terlewat.</p><p class=\"mb-4\">Di editor.clincoo.buzz, ambil daftar sekali dengan querySelectorAll. Hasilnya NodeList statis: panjang tidak berubah meski kamu menghapus node.</p><p class=\"mb-4\">Jika memang butuh koleksi hidup, salin dulu ke array dengan Array.from sebelum mengubah DOM.</p><p class=\"mb-4\">Tempel cuplikan loop plus markup daftar ke asisten AI. Minta ganti selektor dan salinan array, bukan rewrite seluruh halaman.</p><p class=\"mb-4\">Clincoo menjalankan skrip halaman apa adanya. Daftar statis menjaga batch edit di app.clincoo.buzz tetap lengkap.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Clincoo querySelectorAll for a Static List, Not a Live Collection",
          desc: "An HTMLCollection from getElementsByClassName mutates as the DOM changes. A static NodeList is easier to count.",
          content: "<p class=\"mb-4\">A Clincoo loop calls getElementsByClassName('item') then removes nodes inside the loop. Indexes jump and some items are skipped.</p><p class=\"mb-4\">In editor.clincoo.buzz, take the list once with querySelectorAll. You get a static NodeList: length stays put even if you delete nodes.</p><p class=\"mb-4\">If you truly need a live collection, copy it to an array with Array.from before mutating the DOM.</p><p class=\"mb-4\">Paste the loop plus the list markup into the AI assistant. Ask it to swap the selector and array copy, not rewrite the whole page.</p><p class=\"mb-4\">Clincoo runs page scripts as written. A static list keeps batch edits on app.clincoo.buzz complete.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "dom-closest-cari-induk",
      langs: {
        "id": {
          title: "Cari Induk Terdekat di Clincoo dengan closest, Bukan parentNode Berantai",
          desc: "Naik manual lewat parentNode rapuh jika markup berubah. closest berhenti di selektor yang kamu tulis.",
          content: "<p class=\"mb-4\">Handler klik di daftar Clincoo naik dua kali parentNode untuk mencapai kartu. Setelah designer menambah wrapper, skrip mengenai node salah.</p><p class=\"mb-4\">Pakai event.target.closest('.card') di editor.clincoo.buzz. Selektor menjelaskan niat, bukan jumlah undakan.</p><p class=\"mb-4\">Cek hasil null. Jika tidak ada induk yang cocok, jangan anggap elemen itu kartu.</p><p class=\"mb-4\">Minta AI hanya mengganti rantai parentNode. Tempel HTML kartu lengkap termasuk wrapper baru.</p><p class=\"mb-4\">Clincoo tidak menormalkan hierarki DOM. closest menjaga klik di app.clincoo.buzz tetap mengenai kartu yang dimaksud.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Find the Nearest Clincoo Parent with closest, Not a parentNode Chain",
          desc: "Walking parentNode by hand breaks when markup changes. closest stops at the selector you wrote.",
          content: "<p class=\"mb-4\">A click handler in a Clincoo list walks parentNode twice to reach the card. After a designer adds a wrapper, the script hits the wrong node.</p><p class=\"mb-4\">Use event.target.closest('.card') di editor.clincoo.buzz. The selector states intent, not how many steps to climb.</p><p class=\"mb-4\">Check for null. If no matching parent exists, do not treat the element as a card.</p><p class=\"mb-4\">Ask AI only to replace the parentNode chain. Paste the full card HTML including the new wrapper.</p><p class=\"mb-4\">Clincoo does not normalize DOM hierarchy. closest keeps clicks on app.clincoo.buzz on the intended card.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "dom-classlist-bukan-classname",
      langs: {
        "id": {
          title: "Ubah Kelas Clincoo lewat classList, Jangan Timpa className",
          desc: "Menulis className menghapus kelas lain yang sudah ada. classList menambah atau menghapus satu token.",
          content: "<p class=\"mb-4\">Skrip Clincoo set el.className = 'aktif' dan menghapus kelas layout yang dipakai CSS Grid. Kartu pecah di layar sempit.</p><p class=\"mb-4\">Pakai classList.add, remove, atau toggle di editor.clincoo.buzz. Satu token berubah, sisanya tetap.</p><p class=\"mb-4\">Jangan gabungkan string kelas dengan spasi jika kamu hanya ingin status. Token terpisah lebih mudah diuji.</p><p class=\"mb-4\">Tempel elemen plus CSS terkait ke AI. Minta ganti assignment className, bukan merombak stylesheet.</p><p class=\"mb-4\">Clincoo merender kelas apa adanya. classList menjaga utilitas layout di app.clincoo.buzz tidak hilang saat status berubah.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Change Clincoo Classes with classList, Do Not Overwrite className",
          desc: "Assigning className wipes other classes already on the node. classList adds or removes one token.",
          content: "<p class=\"mb-4\">A Clincoo script sets el.className = 'active' and wipes layout classes used by CSS Grid. The card breaks on a narrow screen.</p><p class=\"mb-4\">Use classList.add, remove, or toggle in editor.clincoo.buzz. One token changes; the rest stay.</p><p class=\"mb-4\">Do not concatenate class strings with spaces when you only want a state. Separate tokens are easier to test.</p><p class=\"mb-4\">Paste the element plus related CSS into the AI. Ask it to replace the className assignment, not rebuild the stylesheet.</p><p class=\"mb-4\">Clincoo renders classes as written. classList keeps layout utilities on app.clincoo.buzz when state changes.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "dom-fragment-sisip-banyak",
      langs: {
        "id": {
          title: "Sisip Banyak Node Clincoo lewat DocumentFragment, Bukan Satu per Satu",
          desc: "appendChild berulang memicu layout tiap item. Fragment menampung dulu, lalu masuk sekali.",
          content: "<p class=\"mb-4\">Daftar hasil pencarian Clincoo menambahkan 50 baris dengan appendChild di loop. Halaman terasa macet saat ketik.</p><p class=\"mb-4\">Buat DocumentFragment di editor.clincoo.buzz, append elemen ke fragment, lalu tempel fragment ke daftar sekali.</p><p class=\"mb-4\">Tetap buat node dengan createElement dan textContent. Jangan rakit HTML string besar hanya demi kecepatan.</p><p class=\"mb-4\">Minta AI membungkus loop dengan fragment. Tempel fungsi render daftar dan contoh data, bukan seluruh app.</p><p class=\"mb-4\">Clincoo tidak menunda layout otomatis. Satu sisipan fragment menjaga pratinjau app.clincoo.buzz tetap responsif.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Insert Many Clincoo Nodes with a DocumentFragment, Not One by One",
          desc: "Repeated appendChild forces layout on every item. A fragment holds them first, then inserts once.",
          content: "<p class=\"mb-4\">A Clincoo search list appends 50 rows with appendChild in a loop. The page stutters while typing.</p><p class=\"mb-4\">Create a DocumentFragment in editor.clincoo.buzz, append elements to the fragment, then attach the fragment to the list once.</p><p class=\"mb-4\">Still build nodes with createElement and textContent. Do not assemble a huge HTML string just for speed.</p><p class=\"mb-4\">Ask AI to wrap the loop with a fragment. Paste the list render function and sample data, not the whole app.</p><p class=\"mb-4\">Clincoo does not defer layout for you. One fragment insert keeps the app.clincoo.buzz preview responsive.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "dom-dataset-atribut-data",
      langs: {
        "id": {
          title: "Simpan Status UI Clincoo di data-*, Baca lewat dataset",
          desc: "Menempel properti arbitrary pada elemen sulit dilacak. Atribut data terlihat di inspector dan tetap valid HTML.",
          content: "<p class=\"mb-4\">Skrip Clincoo set el._opened = true. Setelah innerHTML diganti, properti hilang dan accordion tidak ingat state.</p><p class=\"mb-4\">Pakai data-opened=\"true\" lalu baca el.dataset.opened di editor.clincoo.buzz. Nilai tetap ada selama node itu hidup.</p><p class=\"mb-4\">Nama data- memakai kebab-case di HTML dan camelCase di dataset. Jangan campur keduanya tanpa konversi.</p><p class=\"mb-4\">Tempel markup accordion ke AI. Minta pindah flag ke data-attribute, bukan menambah variabel global.</p><p class=\"mb-4\">Clincoo tidak menyimpan state widget untukmu. dataset menjaga status UI di app.clincoo.buzz tetap terlihat saat debug.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Store Clincoo UI State on data-* and Read It via dataset",
          desc: "Hanging arbitrary properties on nodes is hard to trace. Data attributes show in the inspector and stay valid HTML.",
          content: "<p class=\"mb-4\">A Clincoo script sets el._opened = true. After innerHTML is replaced, the property vanishes and the accordion forgets state.</p><p class=\"mb-4\">Use data-opened=\"true\" then read el.dataset.opened in editor.clincoo.buzz. The value lasts as long as the node does.</p><p class=\"mb-4\">data- names use kebab-case in HTML and camelCase on dataset. Do not mix them without converting.</p><p class=\"mb-4\">Paste the accordion markup into the AI. Ask it to move the flag onto a data attribute, not add a global.</p><p class=\"mb-4\">Clincoo does not persist widget state for you. dataset keeps UI status on app.clincoo.buzz visible while debugging.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["dom"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["dom"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
