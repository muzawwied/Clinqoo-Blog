// Clinqoo Blog — artikel ai tambahan extra3 2026-09-19
(function(){
  var extra = [
    {
      id: "ai-simpan-prompt-yang-berhasil",
      langs: {
        "id": {
          title: "Simpan Prompt AI Clinqoo yang Sudah Terbukti Berhasil",
          desc: "Prompt yang menghasilkan perbaikan rapi layak disimpan. Jangan mengandalkan ingatan setiap kali membuka chat baru.",
          content: "<p class=\"mb-4\">Asisten AI Clinqoo menjawab sesuai cara kamu bertanya. Kalau suatu prompt sudah menghasilkan perbaikan yang kamu terima, salin teks itu ke file catatan di proyek — misalnya NOTES.md atau komentar di atas file terkait.</p><p class=\"mb-4\">Tulis konteks singkat: file mana, gejala apa, dan batas yang kamu tetapkan. Prompt tanpa konteks mudah menyimpang saat dipakai minggu depan.</p><p class=\"mb-4\">Jangan menumpuk sepuluh versi. Simpan satu versi yang paling jernih, lalu sunting jika proyek berubah. Chat lama bisa hilang; catatan di repo tetap ada.</p><p class=\"mb-4\">Kebiasaan ini membuat AI terasa lebih konsisten. Bukan karena modelnya berubah, melainkan karena kamu berhenti menulis ulang instruksi dari nol.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "web.dev",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "MDN Web Docs"
        },
        "en": {
          title: "Save Clinqoo AI Prompts That Already Work",
          desc: "A prompt that produced a clean fix is worth keeping. Do not rely on memory every time you open a new chat.",
          content: "<p class=\"mb-4\">The Clinqoo AI assistant answers the way you ask. If a prompt already produced a change you accepted, copy that text into a project note — NOTES.md or a comment above the related file.</p><p class=\"mb-4\">Write a short context: which file, what symptom, and the boundary you set. A prompt without context drifts when you reuse it next week.</p><p class=\"mb-4\">Do not hoard ten versions. Keep the clearest one, then edit it when the project changes. Old chats can vanish; a note in the repo stays.</p><p class=\"mb-4\">This habit makes the AI feel more consistent. Not because the model changed, but because you stopped rewriting instructions from scratch.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "web.dev",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "MDN Web Docs"
        }
      }
    },
    {
      id: "ai-tolak-saran-yang-mengubah-brand",
      langs: {
        "id": {
          title: "Tolak Saran AI yang Mengubah Warna dan Nada Merek",
          desc: "AI suka merapikan dengan palet baru. Kalau situs sudah punya warna dan suara merek, katakan batas itu dengan tegas.",
          content: "<p class=\"mb-4\">Asisten AI Clinqoo sering mengusulkan palet, font, atau kalimat yang lebih 'modern'. Usulan itu berguna saat draf masih kosong. Setelah merek ditetapkan, perubahan itu justru merusak konsistensi.</p><p class=\"mb-4\">Tulis batas di awal obrolan: jangan ganti --warna-utama, jangan ubah font heading, jangan rewrite teks yang sudah disetujui klien. Kalau AI tetap menggeser brand, tolak diff dan ulang instruksi.</p><p class=\"mb-4\">Pratinjau adalah hakimnya. Jika tombol tiba-tiba hijau padahal merekmu biru, itu bukan peningkatan — itu penyimpangan.</p><p class=\"mb-4\">AI membantu merapikan struktur. Identitas visual dan nada tulisan tetap keputusanmu.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "web.dev",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "MDN Web Docs"
        },
        "en": {
          title: "Reject AI Suggestions That Change Your Brand Voice",
          desc: "The AI likes to tidy things with a new palette. Once the site has a color and a voice, state that boundary clearly.",
          content: "<p class=\"mb-4\">The Clinqoo AI assistant often proposes a palette, a font, or copy that feels more 'modern'. That helps when the draft is empty. After the brand is set, those changes break consistency.</p><p class=\"mb-4\">State the limit at the start of the chat: do not change --warna-utama, do not swap the heading font, do not rewrite client-approved copy. If the AI still shifts the brand, reject the diff and restate the rule.</p><p class=\"mb-4\">Preview is the judge. If a button turns green when your brand is blue, that is not an upgrade — it is drift.</p><p class=\"mb-4\">Let the AI tidy structure. Visual identity and tone stay your decision.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "web.dev",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "MDN Web Docs"
        }
      }
    },
    {
      id: "ai-minta-ringkas-diff-setelah-edit",
      langs: {
        "id": {
          title: "Minta Ringkasan Diff ke AI setelah File Diedit",
          desc: "Setelah AI menyentuh berkas, minta daftar perubahan dalam bahasa biasa. Kamu harus bisa menjelaskan apa yang berubah.",
          content: "<p class=\"mb-4\">Diff di editor Clinqoo bisa panjang. Sebelum menerima, minta AI merangkum: file mana, berapa baris, dan apa dampaknya di pratinjau. Ringkasan tiga bullet lebih mudah diawasi daripada seratus baris merah-hijau.</p><p class=\"mb-4\">Kalau ringkasan menyebut file yang tidak kamu minta, hentikan. Itu tanda permintaanmu terlalu longgar atau AI merambah terlalu jauh.</p><p class=\"mb-4\">Simpan ringkasan di catatan rilis singkat. Saat situs aneh setelah deploy, kamu punya jejak apa yang baru diubah.</p><p class=\"mb-4\">Kamu tidak harus membaca setiap karakter. Kamu harus paham arti perubahannya sebelum menekan terima.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "web.dev",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "MDN Web Docs"
        },
        "en": {
          title: "Ask Clinqoo AI for a Diff Summary after an Edit",
          desc: "After the AI touches a file, ask for the change list in plain language. You should be able to explain what changed.",
          content: "<p class=\"mb-4\">A diff in the Clinqoo editor can be long. Before you accept, ask the AI to summarize: which file, how many lines, and what it does in preview. Three bullets are easier to watch than a hundred red-green lines.</p><p class=\"mb-4\">If the summary names a file you did not ask for, stop. That means the prompt was too loose or the AI wandered.</p><p class=\"mb-4\">Keep the summary in a short release note. When the live site looks odd after deploy, you have a trail of what just changed.</p><p class=\"mb-4\">You do not have to read every character. You do have to understand the meaning of the change before you hit accept.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "web.dev",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "MDN Web Docs"
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
