// Clinqoo Blog — artikel ai tambahan 2026-09-18 (merge ke data_ai)
(function(){
  var extra = [
    {
      id: "ai-minta-daftar-perubahan-bukan-rewrite",
      langs: {
        "id": {
          title: "Minta AI Memberi Daftar Perubahan, Bukan Menulis Ulang File",
          desc: "Minta asisten AI Clinqoo merinci suntingan per baris sebelum menyentuh seluruh berkas.",
          content: "<p class=\"mb-4\">AI mudah tergoda menulis ulang file utuh. Di chat Clinqoo, tahan itu. Minta daftar perubahan: baris mana, apa yang diganti, dan kenapa. File tetap milikmu.</p><p class=\"mb-4\">Contoh permintaan: 'jangan rewrite style.css; sebut tiga aturan yang membuat menu HP pecah, lalu usulkan nilai baru.' Daftar pendek lebih mudah diuji di pratinjau.</p><p class=\"mb-4\">Terapkan satu item, simpan, lihat hasil. Baru ambil item berikutnya. Kalau AI tetap mengirim file penuh, potong sendiri dan tempel hanya blok yang kamu setujui.</p><p class=\"mb-4\">Daftar perubahan menjaga nada desain dan mencegah kelas yang tidak terkait ikut hilang. Asisten yang baik merinci; editor yang baik memilih.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Chat asisten AI di editor",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "Praktik terbaik web",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "Referensi pengembangan web"
        },
        "en": {
          title: "Ask the AI for a Change List, Not a Full File Rewrite",
          desc: "Have the Clinqoo AI assistant list edits line by line before it touches the whole file.",
          content: "<p class=\"mb-4\">AI is easily tempted to rewrite an entire file. In Clinqoo chat, hold that back. Ask for a change list: which lines, what changes, and why. The file stays yours.</p><p class=\"mb-4\">A useful ask: 'do not rewrite style.css; name three rules that break the phone menu, then propose new values.' A short list is easier to test in preview.</p><p class=\"mb-4\">Apply one item, save, look. Then take the next. If the AI still sends a full file, cut it yourself and paste only the block you accept.</p><p class=\"mb-4\">A change list keeps the design voice and stops unrelated classes from vanishing. A good assistant itemizes; a good editor chooses.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Chat asisten AI di editor",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "Praktik terbaik web",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "Referensi pengembangan web"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["ai"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["ai"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
