// Clincoo Docs — kategori Template extra (9 Oktober 2026, 16:00 WIB) — 4 artikel sampai 12
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles["template"]) return;
  var list = window.countryDataFiles["template"].articles;
  var add = [
{
 "id": "template-ganti-palet-warna-merek",
 "langs": {
  "id": {
   "title": "Cara Ganti Palet Warna Merek pada Template",
   "desc": "Tata cara mengganti warna demo template lewat variabel CSS sebelum situs Clincoo diterbitkan.",
   "content": "<p class=\"mb-4\">Warna ungu atau biru bawaan template sering tertinggal di tombol, tautan, dan latar. Ganti di satu tempat supaya halaman turunan tidak campur dua merek.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ubah variabel di root</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> cari <code>:root</code> lalu ganti <code>--brand</code>, <code>--brand-ink</code>, dan <code>--surface</code>. Jangan timpa hex satu per satu di setiap section. Cek kontras teks tombol minimal rasio yang masih terbaca.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pratinjau terang dan gelap</h2><p class=\"mb-4\">Buka pratinjau di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pada mode terang dan gelap. Catat nama variabel di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya salinan template berikutnya tidak mengembalikan palet demo.</p>",
   "source": "MDN — Using CSS custom properties",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "sourceSnippet": "Custom properties are entities defined by CSS authors that contain specific values to be reused throughout a document.",
   "source2": "W3C — CSS Color",
   "source2Url": "https://www.w3.org/TR/css-color-4/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Swap a Template Brand Color Palette",
   "desc": "How to replace a template demo palette through CSS variables before a Clincoo site is published.",
   "content": "<p class=\"mb-4\">A template purple or blue often stays on buttons, links, and backgrounds. Change it in one place so child pages do not mix two brands.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Change the root variables</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> find <code>:root</code> and replace <code>--brand</code>, <code>--brand-ink</code>, and <code>--surface</code>. Do not overwrite hex values section by section. Check button text contrast so it stays readable.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Preview light and dark</h2><p class=\"mb-4\">Open the preview on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> in light and dark mode. Record the variable names on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next template copy does not restore the demo palette.</p>",
   "source": "MDN — Using CSS custom properties",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "sourceSnippet": "Custom properties are entities defined by CSS authors that contain specific values to be reused throughout a document.",
   "source2": "W3C — CSS Color",
   "source2Url": "https://www.w3.org/TR/css-color-4/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "template-isi-alt-gambar-contoh",
 "langs": {
  "id": {
   "title": "Cara Isi Alt pada Gambar Contoh Template",
   "desc": "Tata cara mengganti alt kosong atau lorem pada gambar bawaan template Clincoo.",
   "content": "<p class=\"mb-4\">Gambar stok template sering punya <code>alt=\"\"</code> atau teks placeholder. Pembaca layar lalu melewatkan makna, atau malah membacakan lorem.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Putuskan dekoratif atau informatif</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> gambar murni hiasan boleh <code>alt=\"\"</code> dan <code>role=\"presentation\"</code>. Foto produk, diagram, dan cuplikan UI harus menjelaskan isi, bukan nama file.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sapu sebelum terbit</h2><p class=\"mb-4\">Cari <code>alt=\"image\"</code> dan <code>placeholder</code> di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Simpan contoh kalimat alt di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> agar salinan berikutnya tidak mengulang alt demo.</p>",
   "source": "MDN — img alt",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt",
   "sourceSnippet": "The alt attribute provides fallback text for the image if it cannot be displayed, and is used by assistive technology.",
   "source2": "W3C WAI — Images",
   "source2Url": "https://www.w3.org/WAI/tutorials/images/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Fill Alt Text on Template Sample Images",
   "desc": "How to replace empty or lorem alt text on images that ship with a Clincoo template.",
   "content": "<p class=\"mb-4\">Stock template images often have <code>alt=\"\"</code> or placeholder text. A screen reader then skips the meaning, or reads lorem aloud.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Decide decorative or informative</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> a purely decorative image may use <code>alt=\"\"</code> and <code>role=\"presentation\"</code>. Product photos, diagrams, and UI shots must describe the content, not the file name.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sweep before publish</h2><p class=\"mb-4\">Search for <code>alt=\"image\"</code> and <code>placeholder</code> in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview. Keep sample alt sentences on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next copy does not repeat demo alt text.</p>",
   "source": "MDN — img alt",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt",
   "sourceSnippet": "The alt attribute provides fallback text for the image if it cannot be displayed, and is used by assistive technology.",
   "source2": "W3C WAI — Images",
   "source2Url": "https://www.w3.org/WAI/tutorials/images/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "template-bersihkan-komentar-demo",
 "langs": {
  "id": {
   "title": "Cara Bersihkan Komentar Demo pada Template",
   "desc": "Tata cara menghapus komentar TODO dan petunjuk vendor yang tertinggal di HTML template Clincoo.",
   "content": "<p class=\"mb-4\">Komentar seperti <code><!-- TODO: ganti teks --></code> tidak terlihat di layar, tetapi ikut terbit dan membocorkan catatan internal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cari pola komentar</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> cari <code><!--</code>, <code>TODO</code>, dan nama vendor template. Hapus catatan yang hanya untuk penulis. Sisakan komentar yang menjelaskan lisensi aset jika wajib.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek sumber halaman</h2><p class=\"mb-4\">Di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka view-source dan pastikan tidak ada instruksi demo. Catat daftar yang sudah dibersihkan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTML comments",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Comments",
   "sourceSnippet": "Comments are ignored by the browser and are not displayed, but they remain in the source sent to the client.",
   "source2": "HTML spec — comments",
   "source2Url": "https://html.spec.whatwg.org/multipage/syntax.html#comments",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Remove Demo Comments from a Template",
   "desc": "How to delete TODO comments and vendor hints left in a Clincoo template HTML file.",
   "content": "<p class=\"mb-4\">Comments such as <code><!-- TODO: replace text --></code> are invisible on screen, but they ship and can leak internal notes.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Search comment patterns</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> search for <code><!--</code>, <code>TODO</code>, and the template vendor name. Delete notes that exist only for the author. Keep a comment that is required to state an asset license.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the page source</h2><p class=\"mb-4\">In the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview open view-source and confirm no demo instructions remain. Record the cleaned list on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTML comments",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Comments",
   "sourceSnippet": "Comments are ignored by the browser and are not displayed, but they remain in the source sent to the client.",
   "source2": "HTML spec — comments",
   "source2Url": "https://html.spec.whatwg.org/multipage/syntax.html#comments",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "template-rapikan-menu-setelah-hapus-halaman",
 "langs": {
  "id": {
   "title": "Cara Rapikan Menu Setelah Halaman Demo Dihapus",
   "desc": "Tata cara membuang tautan nav template yang masih mengarah ke halaman demo yang sudah dihapus.",
   "content": "<p class=\"mb-4\">Menghapus halaman harga atau blog demo tanpa menyentuh navigasi meninggalkan tautan 404 di header dan footer.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Samakan nav dengan halaman yang ada</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> daftar halaman yang dipertahankan, lalu hapus <code><a></code> di header, footer, dan menu seluler yang mengarah ke slug demo. Perbaiki <code>aria-current</code> pada halaman aktif.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Klik setiap item</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> klik tiap item menu pada lebar desktop dan seluler. Catat peta nav akhir di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — nav element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav",
   "sourceSnippet": "The nav element represents a section of a page whose purpose is to provide navigation links.",
   "source2": "W3C WAI — menus",
   "source2Url": "https://www.w3.org/WAI/tutorials/menus/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Clean the Nav After Deleting Demo Pages",
   "desc": "How to remove template nav links that still point at demo pages you already deleted.",
   "content": "<p class=\"mb-4\">Deleting a demo pricing or blog page without touching navigation leaves 404 links in the header and footer.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match the nav to pages that remain</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> list the pages you keep, then remove <code><a></code> tags in the header, footer, and mobile menu that point at demo slugs. Fix <code>aria-current</code> on the active page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Click every item</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> click each menu item at desktop and mobile width. Record the final nav map on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — nav element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav",
   "sourceSnippet": "The nav element represents a section of a page whose purpose is to provide navigation links.",
   "source2": "W3C WAI — menus",
   "source2Url": "https://www.w3.org/WAI/tutorials/menus/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
  ];
  add.forEach(function (item) {
    if (!list.some(function (x) { return x.id === item.id; })) list.push(item);
  });
})();
