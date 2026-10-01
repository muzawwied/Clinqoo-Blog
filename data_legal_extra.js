// Clincoo Blog — artikel legal tambahan 2026-10-01
(function(){
  var extra = [
    {"id": "legal-cantumkan-lisensi-font-pihak-ketiga", "langs": {"id": {"title": "Cantumkan Lisensi Font Pihak Ketiga di Proyek Clincoo", "desc": "Font yang diunduh sering mensyaratkan atribusi. Simpan berkas lisensi di repo dan tautkan dari footer.", "content": "<p class=\"mb-4\">Template Clincoo yang memakai font unduhan tanpa berkas lisensi berisiko saat situs dipublikasikan di blog.clincoo.buzz.</p><p class=\"mb-4\">Simpan OFL.txt atau LICENSE di folder font bersama woff2. Jangan hanya menulis nama font di CSS.</p><p class=\"mb-4\">Tambahkan satu baris di footer: nama font dan tautan lisensi. Itu cukup untuk banyak font OFL, tetapi baca ketentuan masing-masing.</p><p class=\"mb-4\">Saat minta AI memilih font, minta juga jenis lisensi dan apakah atribusi wajib. Jangan tempel font komersial tanpa hak.</p><p class=\"mb-4\">Sebelum deploy dari app.clincoo.buzz, cek folder aset: font, lisensi, dan tautan footer harus ikut terbit.</p>", "source": "SIL Open Font License", "sourceUrl": "https://openfontlicense.org/", "sourceSnippet": "OFL fonts need the license text retained.", "source2": "Clincoo App", "source3": "Clincoo Blog"}, "en": {"title": "Credit Third-Party Font Licenses in a Clincoo Project", "desc": "Downloaded fonts often require attribution. Keep the license file in the repo and link it from the footer.", "content": "<p class=\"mb-4\">A Clincoo template that ships a downloaded font without a license file is a risk once the site is published on blog.clincoo.buzz.</p><p class=\"mb-4\">Keep OFL.txt or LICENSE in the font folder next to the woff2. Do not only write the font name in CSS.</p><p class=\"mb-4\">Add one footer line: the font name and a license link. That covers many OFL fonts, but read each license.</p><p class=\"mb-4\">When asking AI to pick a font, also ask for the license type and whether attribution is required. Do not paste a commercial font without rights.</p><p class=\"mb-4\">Before deploy from app.clincoo.buzz, check the asset folder: font, license, and footer link must ship together.</p>", "source": "SIL Open Font License", "sourceUrl": "https://openfontlicense.org/", "sourceSnippet": "OFL fonts need the license text retained.", "source2": "Clincoo App", "source3": "Clincoo Blog"}}}
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["legal"]) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles["legal"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
