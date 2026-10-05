// Clincoo Docs — kategori Container (5 Oktober 2026, WIB) — 8 artikel
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
,
{
 "id": "container-pilih-inline-size-bukan-size",
 "langs": {
  "id":   {
   "title": "Cara Pilih inline-size, Bukan size, untuk Kartu",
   "desc": "Tata cara memakai container-type: inline-size di Clincoo supaya query mengukur lebar kartu tanpa mengunci tinggi.",
   "content": "<p class=\"mb-4\">container-type: size mengukur lebar dan tinggi, lalu melarang elemen itu bergantung pada isi untuk tinggi. Kartu Clincoo yang isinya bertambah jadi kolaps atau terpotong.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai inline-size</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set container-type: inline-size pada pembungkus kartu. Query lalu memakai lebar sumbu inline, sementara tinggi tetap mengikuti konten.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tambah paragraf. Kalau kartu ikut memanjang, inline-size sudah benar. Kalau tinggi membeku, size masih aktif. Catat pilihannya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — container-type",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/container-type",
   "sourceSnippet": "inline-size establishes a query container on the inline axis and keeps block-size content-based.",
   "source2": "MDN — CSS containment",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Choose inline-size, Not size, for a Card",
   "desc": "How to use container-type: inline-size in Clincoo so the query measures card width without locking height.",
   "content": "<p class=\"mb-4\">container-type: size measures both axes and stops the element from sizing its block axis from its content. A Clincoo card that gains copy then collapses or clips.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use inline-size</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set container-type: inline-size on the card wrapper. The query then uses the inline width, while height still follows the content.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check in preview</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> add a paragraph. If the card grows taller, inline-size is in effect. If height freezes, size is still on. Note the choice on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — container-type",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/container-type",
   "sourceSnippet": "inline-size establishes a query container on the inline axis and keeps block-size content-based.",
   "source2": "MDN — CSS containment",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "container-style-query-untuk-varian",
 "langs": {
  "id":   {
   "title": "Cara Pakai Style Query untuk Varian Komponen",
   "desc": "Tata cara menulis @container style() di Clincoo supaya varian kartu mengikuti custom property induk, bukan kelas duplikat.",
   "content": "<p class=\"mb-4\">Varian gelap atau padat sering diduplikasi dengan kelas baru. Style query membaca custom property pada container, jadi satu komponen cukup.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set properti di induk</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri container-type dan --tone: dark pada pembungkus. Di anak tulis @container style(--tone: dark) untuk warna teks dan latar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dua induk</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> taruh komponen yang sama di section terang dan gelap. Kalau keduanya ikut --tone induknya, query kena. Simpan polanya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS container style queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries",
   "sourceSnippet": "Style queries apply styles when the container matches a style condition such as a custom property value.",
   "source2": "MDN — @container",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@container",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Use a Style Query for a Component Variant",
   "desc": "How to write @container style() in Clincoo so a card variant follows a parent custom property instead of a duplicated class.",
   "content": "<p class=\"mb-4\">Dark or compact variants are often copied into a new class. A style query reads a custom property on the container, so one component is enough.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set the property on the parent</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> give the wrapper a container-type and --tone: dark. On the child write @container style(--tone: dark) for text and background.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test two parents</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> place the same component in a light and a dark section. If each follows its parent --tone, the query matched. Keep the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS container style queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries",
   "sourceSnippet": "Style queries apply styles when the container matches a style condition such as a custom property value.",
   "source2": "MDN — @container",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@container",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "container-fallback-jika-query-tidak-didukung",
 "langs": {
  "id":   {
   "title": "Cara Beri Fallback jika Container Query Tidak Didukung",
   "desc": "Tata cara menyusun gaya dasar lalu @supports untuk container query di Clincoo supaya layout tidak pecah di browser lama.",
   "content": "<p class=\"mb-4\">Tanpa fallback, browser yang tidak memahami @container mengabaikan seluruh blok. Kartu tetap satu kolom atau malah tanpa jarak.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis gaya dasar dulu</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set grid satu kolom dan font tetap di luar query. Bungkus penyesuaian lebar dengan @supports (container-type: inline-size).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> kecilkan panel. Browser baru mengubah kolom; yang tidak mendukung tetap memakai gaya dasar yang masih bisa dibaca. Catat batasnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @supports",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@supports",
   "sourceSnippet": "@supports applies a block only when the browser supports the given CSS condition.",
   "source2": "MDN — container queries",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Add a Fallback When Container Queries Are Unsupported",
   "desc": "How to write base styles then @supports for container queries in Clincoo so the layout does not break in older browsers.",
   "content": "<p class=\"mb-4\">Without a fallback, a browser that does not understand @container drops the whole block. Cards stay in one column or lose their spacing.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write the base styles first</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set a single-column grid and a fixed font outside the query. Wrap width adjustments in @supports (container-type: inline-size).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare the preview</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> narrow the panel. A current browser changes columns; an unsupported one keeps the readable base styles. Note the limit on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @supports",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@supports",
   "sourceSnippet": "@supports applies a block only when the browser supports the given CSS condition.",
   "source2": "MDN — container queries",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "container-kolom-kartu-di-sidebar",
 "langs": {
  "id":   {
   "title": "Cara Atur Kolom Kartu di Dalam Sidebar",
   "desc": "Tata cara mengganti jumlah kolom kartu Clincoo berdasarkan lebar sidebar, bukan lebar viewport.",
   "content": "<p class=\"mb-4\">Media query melihat jendela. Sidebar 280px di layar lebar tetap memaksa dua kolom, lalu judul terpotong.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Query pada sidebar</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jadikan sidebar sebagai container inline-size. Di dalam, grid 1 kolom, lalu @container (min-width: 420px) menjadi 2 kolom.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji layout bersusun</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka halaman dengan sidebar dan area utama. Perkecil hanya sidebar. Kolom kartu di dalamnya yang berubah, bukan grid halaman. Simpan ambangnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using container size and style queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries",
   "sourceSnippet": "Container size queries let descendants respond to the container width instead of the viewport.",
   "source2": "MDN — grid-template-columns",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Set Card Columns Inside a Sidebar",
   "desc": "How to change the Clincoo card column count from the sidebar width, not the viewport width.",
   "content": "<p class=\"mb-4\">A media query watches the window. A 280px sidebar on a wide screen still forces two columns, and titles clip.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Query the sidebar</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> make the sidebar an inline-size container. Inside, use a 1-column grid, then @container (min-width: 420px) for 2 columns.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test the nested layout</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open a page with a sidebar and a main area. Narrow only the sidebar. The card columns inside it change, not the page grid. Save the threshold on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using container size and style queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries",
   "sourceSnippet": "Container size queries let descendants respond to the container width instead of the viewport.",
   "source2": "MDN — grid-template-columns",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "container-debug-query-di-devtools",
 "langs": {
  "id":   {
   "title": "Cara Debug Container Query yang Tidak Menembak",
   "desc": "Tata cara melacak container query Clincoo yang diam: cek container-type, nama, dan lebar di DevTools.",
   "content": "<p class=\"mb-4\">Query diam biasanya karena induk bukan container, nama tidak cocok, atau lebar belum melewati ambang. Jangan menambah breakpoint viewport dulu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lacak induk di DevTools</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih elemen anak, lalu di panel Computed cari container. Pastikan container-type bukan normal dan container-name sama dengan yang ditulis di @container.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur lebar yang dipakai</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> baca lebar content-box induk, bukan lebar jendela. Kalau masih di bawah min-width, turunkan ambang atau longgarkan padding. Tulis temuannya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome Developers — container queries",
   "sourceUrl": "https://developer.chrome.com/docs/css-ui/container-queries",
   "sourceSnippet": "DevTools can show which element is the query container and why a container query matches.",
   "source2": "MDN — container-name",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/container-name",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Debug a Container Query That Does Not Fire",
   "desc": "How to trace a silent Clincoo container query: check container-type, the name, and the width in DevTools.",
   "content": "<p class=\"mb-4\">A silent query usually means the parent is not a container, the name does not match, or the width never crossed the threshold. Do not add a viewport breakpoint yet.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Trace the parent in DevTools</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> select the child, then in Computed look for the container. Confirm container-type is not normal and container-name matches the @container rule.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure the width that counts</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> read the parent content-box width, not the window width. If it is still under min-width, lower the threshold or loosen padding. Write the finding on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome Developers — container queries",
   "sourceUrl": "https://developer.chrome.com/docs/css-ui/container-queries",
   "sourceSnippet": "DevTools can show which element is the query container and why a container query matches.",
   "source2": "MDN — container-name",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/container-name",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
