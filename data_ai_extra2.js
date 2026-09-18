// Clincoo Blog — artikel ai tambahan (extra2)
(function(){
  var extra = [
    {
      id: "ai-minta-alasan-sebelum-ubah-file",
      langs: {
        "id": {
          title: "Minta Alasan ke AI Clincoo sebelum File Diubah",
          desc: "Jangan biarkan AI langsung menulis ulang berkas. Minta penjelasan singkat dulu agar kamu tetap memegang keputusan.",
          content: "<p class=\"mb-4\">Asisten AI Clincoo cepat merombak file. Itu berguna, tapi berbahaya jika kamu menerima setiap diff tanpa tahu kenapa. Minta alasan satu atau dua kalimat sebelum mengizinkan perubahan.</p><p class=\"mb-4\">Tulis seperti ini: jelaskan dulu apa yang salah di file ini, lalu usulkan tiga baris yang berubah. Kalau alasan tidak nyambung dengan gejala yang kamu lihat di pratinjau, tolak dan perjelas konteks.</p><p class=\"mb-4\">Alasan yang bagus merujuk nama kelas, file, atau pesan error. Alasan yang kabur biasanya hanya mengulang permintaanmu. Kejar sampai spesifik.</p><p class=\"mb-4\">Kamu tetap editornya. AI adalah asisten. Kebiasaan minta alasan membuat situsmu tetap terdengar seperti keputusanmu, bukan hasil generate yang tidak kamu pahami.</p>",
          source: "Clincoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clincoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "web.dev",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "MDN Web Docs"
        },
        "en": {
          title: "Ask Clincoo AI for a Reason before It Changes a File",
          desc: "Do not let the AI rewrite a file immediately. Ask for a short explanation first so you still own the decision.",
          content: "<p class=\"mb-4\">The Clincoo AI assistant can rewrite a file quickly. That helps, but it is risky if you accept every diff without knowing why. Ask for one or two sentences of rationale before you allow the change.</p><p class=\"mb-4\">Write it like this: first explain what is wrong in this file, then propose the three lines that should change. If the reason does not match the preview symptom, refuse and add context.</p><p class=\"mb-4\">A good reason names a class, a file, or an error message. A vague reason usually restates your prompt. Push until it is specific.</p><p class=\"mb-4\">You remain the editor. The AI is an assistant. Asking for reasons keeps the site sounding like your decision, not a generate you cannot explain.</p>",
          source: "Clincoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clincoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "web.dev",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "MDN Web Docs"
        }
      }
    },
    {
      id: "ai-pecah-tugas-besar-jadi-langkah",
      langs: {
        "id": {
          title: "Pecah Tugas Besar ke AI Clincoo jadi Langkah Kecil",
          desc: "Minta AI merancang situs utuh sekaligus sering berantakan. Pecah jadi langkah yang bisa kamu uji di pratinjau.",
          content: "<p class=\"mb-4\">Permintaan 'buatkan landing page lengkap dengan animasi dan form' memaksa AI menebak terlalu banyak. Di Clincoo, pecah menjadi: struktur HTML, lalu warna, lalu satu interaksi.</p><p class=\"mb-4\">Setelah satu langkah diterapkan, buka pratinjau. Baru kirim langkah berikutnya. Jejak ini memudahkanmu mengembalikan jika hasil menyimpang.</p><p class=\"mb-4\">Kalau AI sudah mulai merambah file lain, hentikan dan tulis ulang batas: hanya index.html, jangan sentuh CSS global.</p><p class=\"mb-4\">Tugas besar tetap selesai, hanya lewat antrean yang kamu kendalikan. Itu cara AI membantu tanpa menelan proyek.</p>",
          source: "Clincoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clincoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "web.dev",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "MDN Web Docs"
        },
        "en": {
          title: "Break Large Clincoo AI Tasks into Small Steps",
          desc: "Asking the AI for a full site at once often gets messy. Split the work into steps you can test in preview.",
          content: "<p class=\"mb-4\">A prompt like 'build a full landing page with animation and a form' forces the AI to guess too much. In Clincoo, split it: HTML structure, then color, then one interaction.</p><p class=\"mb-4\">After one step is applied, open preview. Only then send the next step. That trail makes it easier to roll back if the result drifts.</p><p class=\"mb-4\">If the AI starts touching other files, stop and restate the boundary: only index.html, do not touch global CSS.</p><p class=\"mb-4\">The large task still finishes, just through a queue you control. That is how AI helps without swallowing the project.</p>",
          source: "Clincoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clincoo",
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
