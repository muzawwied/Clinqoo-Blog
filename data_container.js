// Clincoo Docs — kategori Container (5 Oktober 2026, WIB) — 3 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["container"] = {
 "names": { "id": "Container", "en": "Container" },
 "articles": [
{
 "id": "container-query-bukan-media-query-komponen",
 "langs": {
  "id":   {
   "title": "Cara Pakai Container Query, Bukan Media Query, untuk Komponen",
   "desc": "Tata cara mengganti breakpoint viewport dengan container query di Clincoo supaya kartu tetap rapi di kolom sempit.",
   "content": "<p class=\"mb-4\">Media query melihat lebar jendela, bukan lebar kolom tempat kartu duduk. Kartu yang sama bisa longgar di halaman penuh dan pecah di sidebar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jadikan induk sebagai container</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set container-type: inline-size pada pembungkus kartu. Aturan @container lalu mengganti susunan judul dan tombol saat lebar induk melewati ambang, bukan saat viewport berubah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di dua kolom</h2><p class=\"mb-4\">Taruh komponen yang sama di kolom lebar dan sempit pada <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Kalau keduanya berubah bersamaan, query masih mengikat viewport. Catat ambang yang benar di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS container queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "sourceSnippet": "Container queries style an element based on the size of its container rather than the viewport.",
   "source2": "CSS — container-type",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/container-type",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Use a Container Query, Not a Media Query, for a Component",
   "desc": "How to replace a viewport breakpoint with a container query in Clincoo so a card stays tidy in a narrow column.",
   "content": "<p class=\"mb-4\">A media query reads the window width, not the column the card sits in. The same card can look loose on a full page and broken in a sidebar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Make the parent a container</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set container-type: inline-size on the card wrapper. An @container rule then restacks the title and button when the parent crosses a threshold, not when the viewport does.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in two columns</h2><p class=\"mb-4\">Place the same component in a wide and a narrow column on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. If both change together, the query is still bound to the viewport. Note the right threshold on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS container queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "sourceSnippet": "Container queries style an element based on the size of its container rather than the viewport.",
   "source2": "CSS — container-type",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/container-type",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "container-beri-nama-supaya-tidak-salah-induk",
 "langs": {
  "id":   {
   "title": "Cara Beri Nama Container supaya Query Tidak Salah Induk",
   "desc": "Tata cara menamai container Clincoo agar @container tidak mengambil pembungkus terdekat yang bukan target.",
   "content": "<p class=\"mb-4\">Query tanpa nama menempel ke container terdekat. Kartu di dalam kartu lain lalu berubah pada ambang yang salah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri container-name</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set container-name pada induk yang memang diukur, lalu tulis @container nama itu. Jangan andalkan urutan DOM.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sengaja sarangkan lalu cek</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> masukkan komponen ke dalam container lain yang lebih sempit. Kalau gaya ikut induk dalam, nama belum terpakai. Tulis nama yang disepakati di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — container-name",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/container-name",
   "sourceSnippet": "container-name identifies a containment context so a container query can target it explicitly.",
   "source2": "MDN — @container",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@container",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Name a Container So the Query Hits the Right Parent",
   "desc": "How to name a Clincoo container so @container does not bind to the nearest wrapper that is not the target.",
   "content": "<p class=\"mb-4\">An unnamed query binds to the nearest container. A card inside another card then changes at the wrong threshold.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set container-name</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set container-name on the parent you actually measure, then write @container with that name. Do not rely on DOM order.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Nest on purpose and check</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> place the component inside another, narrower container. If styles follow the inner parent, the name is unused. Record the agreed name on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — container-name",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/container-name",
   "sourceSnippet": "container-name identifies a containment context so a container query can target it explicitly.",
   "source2": "MDN — @container",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@container",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "container-unit-cqi-untuk-teks-kartu",
 "langs": {
  "id":   {
   "title": "Cara Pakai Unit cqi untuk Teks di Dalam Kartu",
   "desc": "Tata cara memakai unit cqi di Clincoo supaya ukuran teks kartu mengikuti lebar container, bukan lebar jendela.",
   "content": "<p class=\"mb-4\">vw mengikuti viewport. Judul kartu di sidebar jadi terlalu besar dibanding kolomnya, lalu memaksa scroll horizontal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti vw dengan cqi</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pastikan induk punya container-type: inline-size, lalu set font-size dengan cqi dan batas min serta max lewat clamp. Jangan campur vw pada elemen yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek overflow</h2><p class=\"mb-4\">Sempitkan kolom di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> sampai teks tetap satu baris yang masuk akal. Kalau masih meluber, clamp terlalu longgar. Simpan nilai akhirnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — container query length units",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "sourceSnippet": "Container query length units such as cqi are relative to the query container, not the viewport.",
   "source2": "MDN — clamp()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/clamp",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Use the cqi Unit for Text Inside a Card",
   "desc": "How to use the cqi unit in Clincoo so card text follows the container width, not the window width.",
   "content": "<p class=\"mb-4\">vw follows the viewport. A card title in a sidebar becomes too large for its column and forces horizontal scroll.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Replace vw with cqi</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> make sure the parent has container-type: inline-size, then set font-size with cqi and bound it with clamp. Do not mix vw on the same element.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check overflow</h2><p class=\"mb-4\">Narrow the column on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> until the text stays a sensible line. If it still overflows, the clamp is too loose. Save the final values on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — container query length units",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "sourceSnippet": "Container query length units such as cqi are relative to the query container, not the viewport.",
   "source2": "MDN — clamp()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/clamp",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
