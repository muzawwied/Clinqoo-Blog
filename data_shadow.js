// Clincoo Docs — kategori Shadow (8 Oktober 2026, 22:00 WIB) — 5 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["shadow"] = {
 "names": { "id": "Shadow", "en": "Shadow" },
 "articles": [
{
 "id": "shadow-bungkus-gaya-komponen-dengan-shadow-root",
 "langs": {
  "id":   {
   "title": "Cara Bungkus Gaya Komponen dengan Shadow Root",
   "desc": "Tata cara memasang shadow root di Clincoo supaya CSS komponen tidak bocor ke halaman dan tidak ketimpa gaya global.",
   "content": "<p class=\"mb-4\">Gaya tombol di pratinjau sering ketimpa stylesheet halaman. Shadow root memisahkan pohon DOM komponen dari CSS global.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang root tertutup untuk gaya</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat custom element, lalu di connectedCallback panggil attachShadow dengan mode open. Taruh style dan markup di dalam shadowRoot, bukan di light DOM.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji kebocoran selektor</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tambahkan aturan button { background: red } di halaman. Tombol di dalam shadow harus tetap memakai warna komponen. Catat hasilnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using shadow DOM",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM",
   "sourceSnippet": "Shadow DOM lets you attach a hidden DOM tree to an element so its markup and styles stay encapsulated.",
   "source2": "MDN — Element.attachShadow()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Encapsulate Component Styles with a Shadow Root",
   "desc": "How to attach a shadow root in Clincoo so component CSS does not leak into the page or get overridden by global styles.",
   "content": "<p class=\"mb-4\">Preview button styles often get overridden by the page stylesheet. A shadow root separates the component tree from global CSS.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Attach a root for styles</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> define a custom element, then call attachShadow with mode open in connectedCallback. Put the style and markup inside shadowRoot, not in the light DOM.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test selector leakage</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> add button { background: red } on the page. The button inside the shadow must keep the component color. Note the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using shadow DOM",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM",
   "sourceSnippet": "Shadow DOM lets you attach a hidden DOM tree to an element so its markup and styles stay encapsulated.",
   "source2": "MDN — Element.attachShadow()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "shadow-mode-open-supaya-bisa-debug",
 "langs": {
  "id":   {
   "title": "Cara Pilih Mode Open agar Shadow Bisa Didebug",
   "desc": "Tata cara memakai mode open di Clincoo supaya DevTools dan skrip halaman tetap bisa memeriksa shadowRoot saat layout rusak.",
   "content": "<p class=\"mb-4\">Mode closed menyembunyikan shadowRoot dari elemen.host.shadowRoot. Saat kartu tidak tampil, Anda tidak bisa membaca innerHTML dari konsol.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buka root untuk inspeksi</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set attachShadow({ mode: \"open\" }). Simpan referensi root di properti komponen jika perlu, tetapi jangan andalkan mode closed hanya untuk menyembunyikan bug.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Periksa di DevTools</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka elemen, aktifkan tampilan shadow DOM, lalu cek node #shadow-root (open). Dokumentasikan langkahnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Element.shadowRoot",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/shadowRoot",
   "sourceSnippet": "The shadowRoot property returns the open shadow root attached to the element, or null if the mode is closed.",
   "source2": "MDN — ShadowRoot.mode",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/mode",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Use Open Mode so Shadow DOM Can Be Debugged",
   "desc": "How to use open mode in Clincoo so DevTools and page scripts can still inspect shadowRoot when layout breaks.",
   "content": "<p class=\"mb-4\">Closed mode hides shadowRoot from element.shadowRoot. When a card does not render, you cannot read innerHTML from the console.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Open the root for inspection</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> call attachShadow({ mode: \"open\" }). Keep a root reference on the component if needed, but do not use closed mode only to hide bugs.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Inspect in DevTools</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> select the element, show the shadow DOM, and check the #shadow-root (open) node. Write the steps on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Element.shadowRoot",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/shadowRoot",
   "sourceSnippet": "The shadowRoot property returns the open shadow root attached to the element, or null if the mode is closed.",
   "source2": "MDN — ShadowRoot.mode",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/mode",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "shadow-slot-untuk-konten-dari-luar",
 "langs": {
  "id":   {
   "title": "Cara Isi Slot dengan Konten dari Luar Shadow",
   "desc": "Tata cara memakai slot di Clincoo supaya judul dan teks dari light DOM tampil di dalam komponen tanpa menyalin innerHTML.",
   "content": "<p class=\"mb-4\">Menyalin textContent ke shadow menghapus tautan dan elemen anak. Slot memproyeksikan node light DOM ke lubang yang Anda siapkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri nama slot</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> taruh <slot name=\"judul\"></slot> di template shadow. Pada pemakai komponen beri atribut slot=\"judul\" di heading. Slot tanpa nama menampung sisa anak.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji fallback kosong</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> hapus anak berslot. Teks fallback di dalam tag slot harus muncul. Simpan contoh markup di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTML slot element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot",
   "sourceSnippet": "The slot element is a placeholder inside a web component that you can fill with your own markup.",
   "source2": "MDN — Using templates and slots",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Fill a Slot with Content from Outside the Shadow",
   "desc": "How to use slots in Clincoo so heading and text from the light DOM render inside the component without copying innerHTML.",
   "content": "<p class=\"mb-4\">Copying textContent into the shadow drops links and child elements. A slot projects light-DOM nodes into a hole you define.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Name the slot</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> place <slot name=\"judul\"></slot> in the shadow template. On the consumer, set slot=\"judul\" on the heading. An unnamed slot collects the remaining children.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test the empty fallback</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> remove the slotted child. Fallback text inside the slot tag should appear. Save the markup sample on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTML slot element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot",
   "sourceSnippet": "The slot element is a placeholder inside a web component that you can fill with your own markup.",
   "source2": "MDN — Using templates and slots",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "shadow-part-expose-elemen-untuk-css-luar",
 "langs": {
  "id":   {
   "title": "Cara Ekspos Part agar CSS Luar Bisa Menata Shadow",
   "desc": "Tata cara memakai part dan ::part di Clincoo supaya tema halaman mengubah aksen komponen tanpa membuka seluruh shadow.",
   "content": "<p class=\"mb-4\">CSS halaman tidak menembus shadow. Tanpa part, setiap tema harus menyalin ulang stylesheet komponen.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tandai bagian yang boleh diubah</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri atribut part=\"aksen\" pada tombol di shadow. Di halaman tulis kartu-harga::part(aksen) { background: var(--warna-merek); }. Jangan menandai setiap node.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek batas ::part</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan selektor luar tidak bisa mengubah elemen tanpa part. Catat daftar part di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ::part()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/::part",
   "sourceSnippet": "The ::part() pseudo-element represents any element within a shadow tree that has a matching part attribute.",
   "source2": "MDN — CSS shadow parts",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_shadow_parts",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Expose a Part so Outside CSS Can Style the Shadow",
   "desc": "How to use part and ::part in Clincoo so the page theme can change a component accent without opening the whole shadow.",
   "content": "<p class=\"mb-4\">Page CSS does not pierce the shadow. Without a part, every theme has to copy the component stylesheet.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Mark the piece that may change</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set part=\"aksen\" on the button inside the shadow. On the page write kartu-harga::part(aksen) { background: var(--warna-merek); }. Do not mark every node.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the ::part boundary</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> confirm outside selectors cannot style elements without a part. Record the part list on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ::part()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/::part",
   "sourceSnippet": "The ::part() pseudo-element represents any element within a shadow tree that has a matching part attribute.",
   "source2": "MDN — CSS shadow parts",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_shadow_parts",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "shadow-adopted-stylesheet-supaya-gaya-tidak-duplikat",
 "langs": {
  "id":   {
   "title": "Cara Adopsi Stylesheet agar Gaya Shadow Tidak Duplikat",
   "desc": "Tata cara memakai adoptedStyleSheets di Clincoo supaya banyak kartu berbagi satu CSSStyleSheet, bukan menyalin tag style.",
   "content": "<p class=\"mb-4\">Setiap instance yang menaruh <style> di shadow menggandakan aturan yang sama. Halaman dengan puluhan kartu jadi berat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buat sheet sekali</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat CSSStyleSheet di modul, isi replaceSync dengan aturan komponen, lalu set shadowRoot.adoptedStyleSheets = [sheet]. Jangan buat sheet baru di setiap connectedCallback.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur jumlah style</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> render dua belas kartu dan cek di DevTools bahwa adoptedStyleSheets menunjuk objek yang sama. Tuliskan pola modulnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Document.adoptedStyleSheets",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptedStyleSheets",
   "sourceSnippet": "adoptedStyleSheets lets a document or shadow root use constructed CSSStyleSheet objects without extra style elements.",
   "source2": "MDN — CSSStyleSheet.replaceSync()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/replaceSync",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Adopt a Stylesheet so Shadow Styles Are Not Duplicated",
   "desc": "How to use adoptedStyleSheets in Clincoo so many cards share one CSSStyleSheet instead of copying a style tag.",
   "content": "<p class=\"mb-4\">Each instance that puts a style tag in the shadow duplicates the same rules. A page with dozens of cards gets heavy.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Create the sheet once</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create a CSSStyleSheet in the module, fill it with replaceSync, then set shadowRoot.adoptedStyleSheets = [sheet]. Do not create a new sheet in every connectedCallback.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure style count</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> render twelve cards and confirm in DevTools that adoptedStyleSheets point at the same object. Write the module pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Document.adoptedStyleSheets",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptedStyleSheets",
   "sourceSnippet": "adoptedStyleSheets lets a document or shadow root use constructed CSSStyleSheet objects without extra style elements.",
   "source2": "MDN — CSSStyleSheet.replaceSync()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/replaceSync",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
}
]
};
