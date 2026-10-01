// Clincoo Blog animasi extra2 2026-10-02 WIB
(function(){
  var extra = [
    {id:'animasi-requestanimationframe-bukan-setinterval',langs:{id:{title:'Gerakkan UI dengan requestAnimationFrame, Bukan setInterval',desc:'setInterval untuk posisi elemen sering jank dan tetap jalan di tab latar. Pakai frame browser dan hentikan saat selesai.',content:'<p class=\"mb-4\">Slider di editor.clincoo.buzz yang memakai setInterval 16ms tetap menembak saat tab tidak terlihat. Baterai ponsel turun dan pratinjau terasa patah.</p><p class=\"mb-4\">Ganti dengan requestAnimationFrame. Simpan id frame, hitung delta waktu, lalu hentikan dengan cancelAnimationFrame saat animasi selesai atau komponen dilepas.</p><p class=\"mb-4\">Ubah transform dan opacity saja. Mengubah left atau width memaksa layout ulang di app.clincoo.buzz.</p><p class=\"mb-4\">Jika pengguna mengaktifkan prefers-reduced-motion, loncat ke posisi akhir. Jangan minta AI menulis ulang seluruh stylesheet.</p><p class=\"mb-4\">Rekam 3 detik di panel Performance. Frame panjang di atas 50ms berarti animasi masih berat.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Editor resmi Clincoo',source2:'Clincoo App',source3:'Clincoo Blog'},en:{title:'Move UI with requestAnimationFrame, Not setInterval',desc:'setInterval for element position often janks and keeps running in a background tab. Use the browser frame and stop when done.',content:'<p class=\"mb-4\">A slider in editor.clincoo.buzz that uses a 16ms setInterval keeps firing when the tab is hidden. Phone battery drops and the preview feels choppy.</p><p class=\"mb-4\">Switch to requestAnimationFrame. Store the frame id, use the time delta, and stop with cancelAnimationFrame when the animation ends or the component unmounts.</p><p class=\"mb-4\">Change transform and opacity only. Updating left or width forces layout on app.clincoo.buzz.</p><p class=\"mb-4\">If the user has prefers-reduced-motion, jump to the end state. Do not ask AI to rewrite the whole stylesheet.</p><p class=\"mb-4\">Record 3 seconds in the Performance panel. Frames longer than 50ms mean the animation is still heavy.</p>',source:'Clincoo',sourceUrl:'https://editor.clincoo.buzz/',sourceSnippet:'Official Clincoo editor',source2:'Clincoo App',source3:'Clincoo Blog'}}}
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles['animasi']) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles['animasi'].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
