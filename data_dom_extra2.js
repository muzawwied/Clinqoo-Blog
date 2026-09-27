// Clincoo Blog — artikel dom tambahan 2026-09-27
(function(){
  var extra = [
    {
      id: "dom-textcontent-bukan-innertext",
      langs: {
        "id": {
          title: "Isi Teks Clincoo dengan textContent, Bukan innerText",
          desc: "innerText memicu layout dan bisa menyembunyikan teks. textContent lebih cepat dan prediktabel.",
          content: "<p class=\"mb-4\">Skrip Clincoo set el.innerText = judul di dalam loop 50 kartu. Halaman terasa macet saat pratinjau.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pakai textContent untuk menulis string biasa. innerText menghitung style dan memaksa reflow.</p><p class=\"mb-4\">innerText juga menghormati display:none sehingga teks tersembunyi tidak ikut. Itu jarang yang kamu maksud saat debug.</p><p class=\"mb-4\">Tempel loop kartu ke asisten AI. Minta ganti innerText ke textContent, bukan rewrite markup kartu.</p><p class=\"mb-4\">Clincoo menjalankan skrip apa adanya. Menulis teks tanpa reflow menjaga app.clincoo.buzz tetap ringan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Fill Clincoo Text with textContent, Not innerText",
          desc: "innerText triggers layout and can hide strings. textContent is faster and more predictable.",
          content: "<p class=\"mb-4\">A Clincoo script sets el.innerText = title inside a 50-card loop. Preview feels jammed.</p><p class=\"mb-4\">In editor.clincoo.buzz, use textContent for plain strings. innerText computes styles and forces reflow.</p><p class=\"mb-4\">innerText also respects display:none so hidden text is skipped. That is rarely what you want while debugging.</p><p class=\"mb-4\">Paste the card loop into the AI assistant. Ask it to swap innerText for textContent, not rewrite the card markup.</p><p class=\"mb-4\">Clincoo runs scripts as written. Writing text without reflow keeps app.clincoo.buzz light.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "dom-createelement-bukan-string-html",
      langs: {
        "id": {
          title: "Bangun Node Clincoo dengan createElement, Bukan String HTML Panjang",
          desc: "Merangkai markup sebagai string mudah salah kutip. createElement membuat struktur jelas.",
          content: "<p class=\"mb-4\">Template Clincoo menyambung innerHTML += string div.card plus nama di loop. Satu tanda kutip rusak dan seluruh daftar hilang.</p><p class=\"mb-4\">Di editor.clincoo.buzz, buat node dengan document.createElement, set textContent, lalu append. Tidak ada interpolasi string.</p><p class=\"mb-4\">Jika butuh banyak node, kumpulkan di DocumentFragment lalu sisip sekali agar layout tidak berulang.</p><p class=\"mb-4\">Tempel loop string ke AI. Minta ubah ke createElement plus fragment, bukan generate HTML baru seluruh halaman.</p><p class=\"mb-4\">Clincoo tidak mensanitasi string HTML-mu. Node buatan menjaga app.clincoo.buzz tidak pecah karena kutip.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Build Clincoo Nodes with createElement, Not a Long HTML String",
          desc: "Concatenating markup as a string breaks on quotes. createElement keeps structure obvious.",
          content: "<p class=\"mb-4\">A Clincoo template does innerHTML += a div.card string plus name in a loop. One broken quote and the whole list vanishes.</p><p class=\"mb-4\">In editor.clincoo.buzz, create nodes with document.createElement, set textContent, then append. No string interpolation.</p><p class=\"mb-4\">If you need many nodes, collect them in a DocumentFragment and insert once so layout does not thrash.</p><p class=\"mb-4\">Paste the string loop into the AI. Ask it to switch to createElement plus a fragment, not regenerate the whole page.</p><p class=\"mb-4\">Clincoo does not sanitize your HTML strings. Built nodes keep app.clincoo.buzz from collapsing on a quote.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "dom-mutationobserver-satu-target",
      langs: {
        "id": {
          title: "Pakai MutationObserver Clincoo pada Satu Target, Bukan document.body",
          desc: "Mengamati seluruh body memicu callback beruntun. Target sempit lebih mudah didebug.",
          content: "<p class=\"mb-4\">Skrip Clincoo memasang MutationObserver pada document.body untuk mendeteksi kartu baru. Setiap ketikan di editor memicu callback.</p><p class=\"mb-4\">Di editor.clincoo.buzz, amati hanya kontainer daftar, misalnya #hasil. Set childList:true dan subtree seperlunya.</p><p class=\"mb-4\">Jangan mengubah DOM yang sama di dalam callback tanpa penjaga. Itu mudah jadi loop tak terbatas.</p><p class=\"mb-4\">Tempel observer plus markup daftar ke AI. Minta perkecil target dan tambah flag isUpdating.</p><p class=\"mb-4\">Clincoo mempratinjau setiap perubahan. Observer sempit menjaga app.clincoo.buzz tidak sibuk sendiri.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Point a Clincoo MutationObserver at One Target, Not document.body",
          desc: "Watching the whole body fires callbacks in a cascade. A narrow target is easier to debug.",
          content: "<p class=\"mb-4\">A Clincoo script attaches a MutationObserver to document.body to detect new cards. Every keystroke in the editor fires the callback.</p><p class=\"mb-4\">In editor.clincoo.buzz, observe only the list container, for example #hasil. Set childList:true and subtree only if needed.</p><p class=\"mb-4\">Do not mutate the same DOM inside the callback without a guard. That easily becomes an infinite loop.</p><p class=\"mb-4\">Paste the observer plus list markup into the AI. Ask it to narrow the target and add an isUpdating flag.</p><p class=\"mb-4\">Clincoo previews every change. A narrow observer keeps app.clincoo.buzz from keeping itself busy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "dom-lepas-listener-saat-ganti-node",
      langs: {
        "id": {
          title: "Lepas Event Listener Clincoo Saat Node Diganti",
          desc: "Listener yang menempel di node lama tetap hidup jika tidak dilepas. Memory leak muncul pelan.",
          content: "<p class=\"mb-4\">Halaman Clincoo mengganti innerHTML panel lalu menambah listener baru di tombol yang sama. Listener lama tidak hilang.</p><p class=\"mb-4\">Di editor.clincoo.buzz, simpan referensi fungsi, panggil removeEventListener sebelum menghapus node, atau pakai { once: true }.</p><p class=\"mb-4\">Delegasi pada induk yang tidak diganti lebih aman daripada memasang listener di setiap item yang sering di-render ulang.</p><p class=\"mb-4\">Tempel fungsi render panel ke AI. Minta pola lepas-pasang atau delegasi, bukan menumpuk addEventListener.</p><p class=\"mb-4\">Clincoo tidak membersihkan listener otomatis. Melepas handler menjaga app.clincoo.buzz tetap responsif setelah beberapa edit.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Remove Clincoo Event Listeners When You Replace a Node",
          desc: "Listeners on old nodes stay alive if you never detach them. Leaks show up slowly.",
          content: "<p class=\"mb-4\">A Clincoo page replaces a panel via innerHTML then adds a new listener on the same button. The old listener remains.</p><p class=\"mb-4\">In editor.clincoo.buzz, keep a function reference, call removeEventListener before removing the node, or use { once: true }.</p><p class=\"mb-4\">Delegating on a parent you do not replace is safer than binding every item that gets re-rendered.</p><p class=\"mb-4\">Paste the panel render function into the AI. Ask for detach-then-attach or delegation, not stacked addEventListener calls.</p><p class=\"mb-4\">Clincoo does not clean listeners for you. Detaching handlers keeps app.clincoo.buzz responsive after several edits.</p>",
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
