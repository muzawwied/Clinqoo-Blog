// Clincoo Docs — artikel tambahan Selector (6 Oktober 2026, 14:00 WIB — tambah 5 artikel)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.selector) return;
  var list = window.countryDataFiles.selector.articles;
  var extra = [
{
 "id": "selector-anak-langsung-bukan-keturunan",
 "langs": {
  "id": {
   "title": "Cara Bedakan Selector Anak Langsung dan Keturunan",
   "desc": "Tata cara memakai > supaya gaya tidak menempel ke elemen di dalam komponen lain.",
   "content": "<p class=\"mb-4\">Spasi memilih semua keturunan. Tanda > hanya memilih anak langsung. Salah satu saja sudah cukup membuat kartu di dalam kartu ikut berubah warna.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji combinator di panel Styles</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih pembungkus, lalu bandingkan <code>section card</code> dengan <code>section > .card</code>. Angka kena pada versi spasi biasanya lebih besar karena ikut menjangkau komponen bersarang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kunci cakupan di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> sisipkan kartu di dalam kartu, lalu muat ulang pratinjau. Jika hanya anak langsung yang harus bergaya, simpan selector bertanda > dan catat alasannya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Child combinator",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator",
   "sourceSnippet": "The child combinator matches an element that is a direct child of the first element.",
   "source2": "MDN — Descendant combinator",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Tell a Child Selector from a Descendant Selector",
   "desc": "How to use > so styles do not leak into nested components.",
   "content": "<p class=\"mb-4\">A space matches every descendant. A > matches only direct children. One wrong combinator is enough to recolor a card nested inside another card.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare combinators in Styles</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> select the wrapper, then compare <code>section card</code> with <code>section > .card</code>. The spaced version usually matches more nodes because it reaches nested components.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lock the scope in preview</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> nest a card inside a card and reload the preview. If only the direct child should change, keep the > selector and note why in <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Child combinator",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator",
   "sourceSnippet": "The child combinator matches an element that is a direct child of the first element.",
   "source2": "MDN — Descendant combinator",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "selector-atribut-href-dan-type",
 "langs": {
  "id": {
   "title": "Cara Pakai Selector Atribut untuk Tautan dan Input",
   "desc": "Tata cara menandai tautan eksternal dan input lewat atribut, bukan class tambahan.",
   "content": "<p class=\"mb-4\">Class mudah tertinggal saat markup diganti. Atribut href, type, dan target sudah ada di elemen, jadi selector bisa menempel tanpa menambah class.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pilih pola yang tepat</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> uji <code>a[href^=&quot;https&quot;]</code> untuk tautan absolut, <code>a[target=&quot;_blank&quot;]</code> untuk tab baru, dan <code>input[type=&quot;email&quot;]</code> untuk kolom surel. Tanda kutip pada nilai yang mengandung karakter khusus mencegah selector gagal parse.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan mengandalkan atribut yang berubah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> cek pratinjau setelah AI mengubah href. Selector ^= dan *= ikut berubah bila URL berganti. Simpan pola yang stabil di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> dan sisakan class hanya untuk state yang tidak punya atribut.</p>",
   "source": "MDN — Attribute selectors",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors",
   "sourceSnippet": "Attribute selectors match elements by the presence or value of an HTML attribute.",
   "source2": "MDN — CSS selectors",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Attribute Selectors for Links and Inputs",
   "desc": "How to style external links and inputs from attributes instead of extra classes.",
   "content": "<p class=\"mb-4\">Classes get left behind when markup changes. href, type, and target are already on the element, so a selector can match without a new class.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pick the right pattern</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> try <code>a[href^=&quot;https&quot;]</code> for absolute links, <code>a[target=&quot;_blank&quot;]</code> for new tabs, and <code>input[type=&quot;email&quot;]</code> for email fields. Quote values that contain special characters so the selector still parses.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not depend on volatile attributes</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> recheck the preview after AI edits an href. ^= and *= follow the URL. Keep stable patterns in <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> and reserve a class for state that has no attribute.</p>",
   "source": "MDN — Attribute selectors",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors",
   "sourceSnippet": "Attribute selectors match elements by the presence or value of an HTML attribute.",
   "source2": "MDN — CSS selectors",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "selector-where-is-spesifisitas-nol",
 "langs": {
  "id": {
   "title": "Cara Pakai :where dan :is tanpa Menaikkan Spesifisitas",
   "desc": "Tata cara mengelompokkan selector dengan :where agar aturan lama tetap bisa menimpa.",
   "content": "<p class=\"mb-4\">Mengulang selector tombol, tautan, dan ringkasan membuat file CSS panjang. :is mengelompokkan dengan spesifisitas anggota paling tinggi. :where mengelompokkan dengan spesifisitas nol.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan kedua fungsi</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis <code>:is(button, .btn)</code> lalu <code>:where(button, .btn)</code>. Lihat badge spesifisitas di panel Styles. Versi :is sering kalahkan aturan komponen yang ditulis kemudian.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan :where untuk reset</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pakai :where pada reset jarak dan font, lalu timpa dengan class di komponen. Catat pilihan itu di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya permintaan AI berikutnya tidak mengganti :where menjadi selector ID.</p>",
   "source": "MDN — :where()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/:where",
   "sourceSnippet": ":where() takes the specificity of its most specific argument and sets it to zero.",
   "source2": "MDN — :is()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:is",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use :where and :is Without Raising Specificity",
   "desc": "How to group selectors with :where so later rules can still override them.",
   "content": "<p class=\"mb-4\">Repeating button, link, and summary selectors makes CSS long. :is groups them at the specificity of the most specific argument. :where groups them at zero specificity.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare the two functions</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write <code>:is(button, .btn)</code> and <code>:where(button, .btn)</code>. Read the specificity badge in Styles. The :is form often beats a component rule written later.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep :where for resets</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> use :where for spacing and font resets, then override with a component class. Note that choice in <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next AI edit does not replace :where with an ID selector.</p>",
   "source": "MDN — :where()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/:where",
   "sourceSnippet": ":where() takes the specificity of its most specific argument and sets it to zero.",
   "source2": "MDN — :is()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:is",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "selector-nth-child-vs-nth-of-type",
 "langs": {
  "id": {
   "title": "Cara Pilih nth-child atau nth-of-type",
   "desc": "Tata cara mewarnai baris atau kartu genap tanpa mengenai elemen yang salah jenis.",
   "content": "<p class=\"mb-4\">nth-child menghitung semua saudara. nth-of-type hanya menghitung saudara dengan nama tag yang sama. Campuran heading dan kartu sering membuat pola genap bergeser.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hitung saudara yang benar</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tempel <code>.item:nth-child(even)</code> dan <code>.item:nth-of-type(even)</code> pada daftar yang diselingi teks. Versi child ikut menghitung node teks pembungkus dan komentar tidak, tetapi elemen lain tetap dihitung.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji setelah konten ditambah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tambah satu pengumuman di atas daftar lalu muat ulang. Jika pola warna bergeser, ganti ke nth-of-type atau class ganjil-genap. Simpan keputusan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — :nth-child()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child",
   "sourceSnippet": ":nth-child counts all siblings, while :nth-of-type counts only siblings of the same type.",
   "source2": "MDN — :nth-of-type()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Choose nth-child or nth-of-type",
   "desc": "How to stripe rows or cards without matching the wrong element type.",
   "content": "<p class=\"mb-4\">nth-child counts every sibling. nth-of-type counts only siblings with the same tag name. Mixing headings and cards often shifts the even pattern.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Count the right siblings</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> paste <code>.item:nth-child(even)</code> and <code>.item:nth-of-type(even)</code> on a list interrupted by text. The child version still counts other elements.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Retest after content is added</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> add a notice above the list and reload. If the stripe shifts, switch to nth-of-type or an explicit odd/even class. Record the decision in <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — :nth-child()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child",
   "sourceSnippet": ":nth-child counts all siblings, while :nth-of-type counts only siblings of the same type.",
   "source2": "MDN — :nth-of-type()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "selector-saudara-plus-dan-tilde",
 "langs": {
  "id": {
   "title": "Cara Pakai Selector Saudara + dan ~",
   "desc": "Tata cara menata label, pesan error, dan kartu berikutnya tanpa membungkus ulang DOM.",
   "content": "<p class=\"mb-4\">+ memilih satu saudara yang persis di sebelahnya. ~ memilih semua saudara sesudahnya. Keduanya hanya melihat ke depan, tidak ke atas atau ke belakang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tempel pesan di samping kontrol</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> gaya <code>input:invalid + .error</code> supaya pesan hanya muncul bila langsung mengikuti input. Ganti ke ~ hanya jika ada span pembungkus di antaranya. Cek di panel Styles bahwa kedua elemen bersaudara, bukan induk-anak.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan andalkan urutan yang mudah pecah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> minta AI menyisipkan ikon di antara input dan pesan, lalu uji lagi. Jika + putus, pindahkan ikon ke dalam input atau pakai class state. Catat urutan DOM di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Next-sibling combinator",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Next-sibling_combinator",
   "sourceSnippet": "The next-sibling combinator matches the second element only if it immediately follows the first.",
   "source2": "MDN — Subsequent-sibling combinator",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Subsequent-sibling_combinator",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use the + and ~ Sibling Selectors",
   "desc": "How to style a label, error, or following card without wrapping the DOM again.",
   "content": "<p class=\"mb-4\">+ matches one immediate next sibling. ~ matches every following sibling. Both look forward only, not up or backward.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Attach the message to the control</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> style <code>input:invalid + .error</code> so the message appears only when it directly follows the input. Switch to ~ only if a span sits between them. In Styles, confirm the two nodes are siblings, not parent and child.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not rely on a fragile order</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ask AI to insert an icon between the input and the message, then retest. If + breaks, move the icon inside the control or use a state class. Record the DOM order in <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Next-sibling combinator",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Next-sibling_combinator",
   "sourceSnippet": "The next-sibling combinator matches the second element only if it immediately follows the first.",
   "source2": "MDN — Subsequent-sibling combinator",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Subsequent-sibling_combinator",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
];
  extra.forEach(function (item) {
    var exists = list.some(function (a) { return a.id === item.id; });
    if (!exists) list.push(item);
  });
})();
