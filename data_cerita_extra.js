// Clincoo Blog — artikel cerita tambahan 2026-10-01
(function(){
  var extra = [
    {"id": "cerita-minta-bantuan-ai-saat-css-macet", "langs": {"id": {"title": "Minta Bantuan AI saat CSS Clincoo Macet, dengan Potongan yang Spesifik", "desc": "Prompt umum menghasilkan layout baru. Tempel selektor, gejala, dan lebar layar agar perbaikan tetap kecil.", "content": "<p class=\"mb-4\">Di editor.clincoo.buzz, kartu tumpang tindih hanya di lebar 390px. Meminta AI merombak seluruh halaman biasanya menambah kelas yang tidak terpakai.</p><p class=\"mb-4\">Salin selektor yang gagal, aturan CSS-nya, dan satu kalimat gejala. Sebutkan yang tidak boleh diubah, misalnya header.</p><p class=\"mb-4\">Lampirkan cuplikan HTML pembungkus, bukan seluruh berkas. AI butuh konteks induk flex atau grid.</p><p class=\"mb-4\">Terapkan satu saran, lalu cek DevTools overlay. Jika masih pecah, kirim hasil computed, bukan prompt yang sama.</p><p class=\"mb-4\">Simpan perbaikan yang lolos pratinjau di app.clincoo.buzz sebagai catatan cerita rilis, supaya tim tidak mengulang prompt yang sama.</p>", "source": "Clincoo Editor", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Clincoo editor for small CSS fixes.", "source2": "Clincoo App", "source3": "Clincoo Blog"}, "en": {"title": "Ask AI for Help When Clincoo CSS Is Stuck, with a Specific Snippet", "desc": "A vague prompt produces a new layout. Paste the selector, the symptom, and the viewport so the fix stays small.", "content": "<p class=\"mb-4\">On editor.clincoo.buzz, cards overlap only at 390px. Asking AI to rebuild the whole page usually adds unused classes.</p><p class=\"mb-4\">Copy the failing selector, its CSS rule, and one sentence of the symptom. Name what must not change, such as the header.</p><p class=\"mb-4\">Attach the wrapping HTML snippet, not the whole file. AI needs the flex or grid parent.</p><p class=\"mb-4\">Apply one suggestion, then check the DevTools overlay. If it still breaks, send the computed result instead of the same prompt.</p><p class=\"mb-4\">Keep the fix that passes preview on app.clincoo.buzz as a release note so the team does not repeat the same prompt.</p>", "source": "Clincoo Editor", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Clincoo editor for small CSS fixes.", "source2": "Clincoo App", "source3": "Clincoo Blog"}}}
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["cerita"]) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles["cerita"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
