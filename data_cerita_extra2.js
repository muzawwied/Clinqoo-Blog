// Clincoo Blog — artikel cerita tambahan 2026-10-02 WIB
(function(){
  var extra = [
  {
    "id": "cerita-tulis-langkah-reproduksi-sebelum-tanya",
    "langs": {
      "id": {
        "title": "Tulis Langkah Reproduksi sebelum Tanya AI di Clincoo",
        "desc": "Prompt tanpa langkah ulang membuat saran acak. Catat URL, lebar layar, dan klik terakhir.",
        "content": "<p class=\"mb-4\">Di editor.clincoo.buzz, bug layout jarang cukup dijelaskan dengan kalimat halaman rusak. Tanpa langkah ulang, AI menebak komponen yang salah.</p><p class=\"mb-4\">Catat URL pratinjau, lebar jendela, browser, dan urutan klik. Sertakan teks error konsol apa adanya, bukan parafrase.</p><p class=\"mb-4\">Tempel potongan HTML atau CSS yang relevan saja. Jangan kirim seluruh proyek agar saran tetap kecil dan bisa diuji.</p><p class=\"mb-4\">Minta AI mengusulkan satu perubahan, lalu ulangi langkah yang sama di app.clincoo.buzz. Jika gejala hilang, berhenti.</p><p class=\"mb-4\">Simpan langkah yang berhasil di blog.clincoo.buzz supaya rekan tim tidak mengulang percakapan yang sama.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Editor Clincoo untuk mereproduksi gejala",
        "source2": "MDN: Debugging CSS",
        "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Write Repro Steps before Asking AI in Clincoo",
        "desc": "A prompt without a repeatable path gets random advice. Note the URL, viewport, and last click.",
        "content": "<p class=\"mb-4\">On editor.clincoo.buzz, a layout bug is rarely explained by the page is broken. Without a repeat path, AI guesses the wrong component.</p><p class=\"mb-4\">Note the preview URL, window width, browser, and click order. Paste the console error as-is, not a paraphrase.</p><p class=\"mb-4\">Attach only the relevant HTML or CSS snippet. Do not send the whole project so the suggestion stays small and testable.</p><p class=\"mb-4\">Ask AI for one change, then repeat the same steps on app.clincoo.buzz. If the symptom is gone, stop.</p><p class=\"mb-4\">Save the working steps on blog.clincoo.buzz so teammates do not repeat the same chat.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Clincoo editor for reproducing the symptom",
        "source2": "MDN: Debugging CSS",
        "source3": "Clincoo Blog"
      }
    }
  }
];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles['cerita']) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles['cerita'].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
