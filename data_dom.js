// Clincoo Blog — Data kategori: dom
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["dom"] = {
  names: { "id": "DOM", "en": "DOM" },
  flag: "🌳",
  articles: [
    {
      id: "dom-queryselector-satu-elemen",
      langs: {
        "id": {
          title: "Ambil Satu Elemen Clincoo dengan querySelector, Bukan getElementById Sembarangan",
          desc: "ID yang bentrok diam-diam mengembalikan elemen salah. Selector yang sempit membuat target jelas.",
          content: "<p class=\"mb-4\">Skrip Clincoo memanggil getElementById('btn') dan mengenai tombol footer, bukan CTA hero.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pakai querySelector pada konteks terdekat, misalnya section.hero .btn-cta. Beri id unik jika memang hanya satu.</p><p class=\"mb-4\">Jangan mengulang class generik sebagai id. Satu id per dokumen.</p><p class=\"mb-4\">Minta AI mengganti selektor longgar. Tempel HTML hero plus footer yang sama-sama punya id btn.</p><p class=\"mb-4\">Clincoo menjalankan skrip halamanmu. Selektor yang tepat menjaga interaksi di app.clincoo.buzz mengenai sasaran.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Grab One Clincoo Element with querySelector, Not a Loose getElementById",
          desc: "Clashing IDs silently return the wrong node. A narrow selector makes the target obvious.",
          content: "<p class=\"mb-4\">A Clincoo script calls getElementById('btn') and hits the footer button, not the hero CTA.</p><p class=\"mb-4\">In editor.clincoo.buzz, use querySelector on the nearest context, for example section.hero .btn-cta. Give a unique id only when there is truly one.</p><p class=\"mb-4\">Do not reuse a generic class as an id. One id per document.</p><p class=\"mb-4\">Ask AI to replace the loose selector. Paste hero and footer HTML that both use id btn.</p><p class=\"mb-4\">Clincoo runs your page script. A precise selector keeps interaction on app.clincoo.buzz on target.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "dom-delegasi-event-pada-daftar",
      langs: {
        "id": {
          title: "Pasang Satu Listener pada Induk Daftar Clincoo, Bukan di Setiap Item",
          desc: "Item yang ditambah kemudian tidak punya handler. Delegasi event di induk tetap menangkap klik baru.",
          content: "<p class=\"mb-4\">Daftar kartu Clincoo mengikat click di setiap artikel saat load. Kartu yang di-render AI kemudian diam.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pasang satu listener pada ul atau grid induk. Baca event.target.closest('[data-id]').</p><p class=\"mb-4\">Jangan mengikat ulang seluruh daftar setiap kali item baru masuk. Itu menumpuk listener.</p><p class=\"mb-4\">Minta AI menulis delegasi. Tempel loop forEach addEventListener pada tiap kartu.</p><p class=\"mb-4\">Clincoo menayangkan skrip yang kamu simpan. Delegasi membuat daftar dinamis di app.clincoo.buzz tetap hidup.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Attach One Listener on a Clincoo List Parent, Not on Every Item",
          desc: "Items added later have no handler. Event delegation on the parent still catches new clicks.",
          content: "<p class=\"mb-4\">A Clincoo card list binds click on every article at load. Cards the AI renders later stay silent.</p><p class=\"mb-4\">In editor.clincoo.buzz, attach one listener on the parent ul or grid. Read event.target.closest('[data-id]').</p><p class=\"mb-4\">Do not rebind the whole list every time a new item arrives. That stacks listeners.</p><p class=\"mb-4\">Ask AI to write delegation. Paste the forEach addEventListener loop on each card.</p><p class=\"mb-4\">Clincoo ships the script you save. Delegation keeps dynamic lists on app.clincoo.buzz alive.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "dom-hindari-innerhtml-dari-pengunjung",
      langs: {
        "id": {
          title: "Jangan Isi innerHTML Clincoo dengan Teks Mentah dari Pengunjung",
          desc: "String form yang menempel ke innerHTML bisa menyisipkan skrip. Pakai textContent atau sanitasi ketat.",
          content: "<p class=\"mb-4\">Halaman ucapan Clincoo menulis nama dari query string ke innerHTML. Payload sederhana merusak layout atau lebih parah.</p><p class=\"mb-4\">Di editor.clincoo.buzz, tetapkan textContent untuk teks biasa. Jika butuh markup, izinkan tag sempit dan buang event handler.</p><p class=\"mb-4\">Jangan percaya input hanya karena terlihat pendek. Karakter < sudah cukup.</p><p class=\"mb-4\">Minta AI mengganti innerHTML pada target ucapan. Tempel baris yang sekarang memakai innerHTML = location.search.</p><p class=\"mb-4\">Clincoo menjalankan apa yang kamu simpan. textContent menjaga DOM di app.clincoo.buzz tidak menelan markup liar.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Do Not Fill Clincoo innerHTML with Raw Visitor Text",
          desc: "A form string assigned to innerHTML can inject script. Use textContent or strict sanitizing.",
          content: "<p class=\"mb-4\">A Clincoo greeting page writes a name from the query string to innerHTML. A small payload breaks layout or worse.</p><p class=\"mb-4\">In editor.clincoo.buzz, set textContent for plain text. If you need markup, allow a narrow tag list and strip event handlers.</p><p class=\"mb-4\">Do not trust input just because it looks short. A single < is enough.</p><p class=\"mb-4\">Ask AI to replace innerHTML on the greeting target. Paste the line that now does innerHTML = location.search.</p><p class=\"mb-4\">Clincoo runs what you save. textContent keeps the DOM on app.clincoo.buzz from swallowing wild markup.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    }
  ]
};
