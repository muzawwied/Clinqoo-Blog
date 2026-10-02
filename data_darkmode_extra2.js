// Clincoo Blog — artikel darkmode tambahan 2026-10-02 WIB
(function(){
  var extra = [
  {
    "id": "darkmode-hormati-prefers-color-scheme",
    "langs": {
      "id": {
        "title": "Hormati prefers-color-scheme, Jangan Paksa Mode Gelap Clincoo",
        "desc": "Tema sistem harus jadi default. Sakelar manual boleh menimpa, tetapi harus diingat.",
        "content": "<p class=\"mb-4\">Pengunjung editor.clincoo.buzz sering sudah memilih mode terang atau gelap di sistem. Memaksa satu tema membuat kontras terasa salah.</p><p class=\"mb-4\">Baca prefers-color-scheme di CSS untuk token warna awal. Jangan andalkan filter invert pada body.</p><p class=\"mb-4\">Jika ada sakelar manual, simpan pilihan di localStorage dan tambahkan kelas pada html. Jangan timpa pilihan sistem diam-diam setiap muat.</p><p class=\"mb-4\">Uji keduanya di app.clincoo.buzz: teks, tombol, dan gambar logo. Logo berwarna jangan dibalik.</p><p class=\"mb-4\">Catat token yang lolos kontras di blog.clincoo.buzz agar halaman baru tidak mengulang hex acak.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",
        "sourceSnippet": "Media query tema sistem",
        "source2": "MDN: prefers-color-scheme",
        "source3": "Clincoo App"
      },
      "en": {
        "title": "Honor prefers-color-scheme, Do Not Force Clincoo Dark Mode",
        "desc": "The system theme should be the default. A manual switch may override it, but must be remembered.",
        "content": "<p class=\"mb-4\">Visitors on editor.clincoo.buzz often already chose light or dark in the system. Forcing one theme makes contrast feel wrong.</p><p class=\"mb-4\">Read prefers-color-scheme in CSS for the initial color tokens. Do not rely on a body invert filter.</p><p class=\"mb-4\">If there is a manual switch, store the choice in localStorage and add a class on html. Do not silently override the system choice on every load.</p><p class=\"mb-4\">Test both themes on app.clincoo.buzz: text, buttons, and the logo image. Do not invert a colored logo.</p><p class=\"mb-4\">Record the tokens that pass contrast on blog.clincoo.buzz so new pages do not repeat random hex values.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",
        "sourceSnippet": "System theme media query",
        "source2": "MDN: prefers-color-scheme",
        "source3": "Clincoo App"
      }
    }
  }
,{"id": "darkmode-reduced-transparency-sistem", "langs": {"id": {"title": "Hormati prefers-reduced-transparency di Mode Gelap Clincoo", "desc": "Panel kaca blur tetap berat di perangkat yang meminta transparansi dikurangi. Matikan backdrop-filter jika media query itu aktif.", "content": "<p class=\"mb-4\">Mode gelap di editor.clincoo.buzz sering memakai backdrop-filter pada panel samping. Di laptop hemat daya, blur itu membuat scroll tersendat.</p><p class=\"mb-4\">Tambahkan prefers-reduced-transparency: reduce dan ganti blur dengan latar solid token gelap. Jangan hapus seluruh mode gelap.</p><p class=\"mb-4\">Uji di pratinjau app.clincoo.buzz dengan emulasi rendering DevTools. Teks harus tetap kontras tanpa kaca.</p><p class=\"mb-4\">Kirim potongan CSS panel ke AI. Minta satu media query, bukan palet baru.</p><p class=\"mb-4\">Catat hasilnya di blog.clincoo.buzz agar template berikutnya tidak menghidupkan blur lagi.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Editor resmi Clincoo", "source2": "Clincoo App", "source3": "Clincoo Blog"}, "en": {"title": "Honor prefers-reduced-transparency in Clincoo Dark Mode", "desc": "Frosted glass panels stay expensive on devices that ask for less transparency. Turn off backdrop-filter when that media query matches.", "content": "<p class=\"mb-4\">Dark mode on editor.clincoo.buzz often uses backdrop-filter on the side panel. On a power-saving laptop, that blur makes scrolling stutter.</p><p class=\"mb-4\">Add prefers-reduced-transparency: reduce and replace the blur with a solid dark token background. Do not remove dark mode entirely.</p><p class=\"mb-4\">Test the app.clincoo.buzz preview with DevTools rendering emulation. Text should stay contrasting without glass.</p><p class=\"mb-4\">Send the panel CSS to AI. Ask for one media query, not a new palette.</p><p class=\"mb-4\">Note the result on blog.clincoo.buzz so the next template does not turn the blur back on.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Official Clincoo editor", "source2": "Clincoo App", "source3": "Clincoo Blog"}}}];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles['darkmode']) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles['darkmode'].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
