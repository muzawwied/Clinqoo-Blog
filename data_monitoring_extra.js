// Clincoo Blog — artikel monitoring tambahan 2026-10-01
(function(){
  var extra = [
    {"id": "monitoring-ukur-inp-pada-klik-tombol", "langs": {"id": {"title": "Ukur INP pada Klik Tombol, Bukan Hanya Waktu Muat, di Clincoo", "desc": "Halaman cepat tetap terasa macet jika handler klik memblokir main thread. Catat INP pada interaksi nyata.", "content": "<p class=\"mb-4\">Di app.clincoo.buzz, tombol simpan bisa menunggu ratusan milidetik meski LCP sudah hijau. Pengunjung merasakan jeda setelah klik.</p><p class=\"mb-4\">Buka Performance di DevTools, rekam satu klik, dan cari long task di handler. Pindahkan kerja berat ke setelah paint atau ke potongan kecil.</p><p class=\"mb-4\">Catat event click dan durasi sampai frame berikutnya. INP yang buruk sering dari loop DOM, bukan dari gambar.</p><p class=\"mb-4\">Saat minta AI mempercepat, tempel handler klik dan angka durasinya. Jangan minta AI hanya menambah preload.</p><p class=\"mb-4\">Ulangi klik yang sama di blog.clincoo.buzz setelah perbaikan. Bandingkan sebelum dan sesudah, bukan hanya skor muat.</p>", "source": "web.dev INP", "sourceUrl": "https://web.dev/articles/inp", "sourceSnippet": "INP measures responsiveness after interactions.", "source2": "Clincoo App", "source3": "Clincoo Blog"}, "en": {"title": "Measure INP on Button Clicks, Not Only Load Time, in Clincoo", "desc": "A fast page still feels stuck if a click handler blocks the main thread. Record INP on real interactions.", "content": "<p class=\"mb-4\">On app.clincoo.buzz, a save button can wait hundreds of milliseconds even when LCP is green. Visitors feel the pause after the click.</p><p class=\"mb-4\">Open Performance in DevTools, record one click, and look for a long task in the handler. Move heavy work to after paint or into smaller chunks.</p><p class=\"mb-4\">Record the click event and the time until the next frame. Bad INP often comes from a DOM loop, not from images.</p><p class=\"mb-4\">When asking AI to speed it up, paste the click handler and the duration. Do not ask AI only to add a preload.</p><p class=\"mb-4\">Repeat the same click on blog.clincoo.buzz after the fix. Compare before and after, not only the load score.</p>", "source": "web.dev INP", "sourceUrl": "https://web.dev/articles/inp", "sourceSnippet": "INP measures responsiveness after interactions.", "source2": "Clincoo App", "source3": "Clincoo Blog"}}}
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["monitoring"]) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles["monitoring"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
