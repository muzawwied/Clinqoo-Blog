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
,
{
 "id": "shadow-baca-event-retarget-dengan-composed-path",
 "langs": {
  "id": {
   "title": "Cara Baca Event yang Diretarget di Shadow dengan composedPath",
   "desc": "Tata cara membaca klik di dalam shadow root Clincoo ketika event.target sudah bergeser ke host, memakai composedPath.",
   "content": "<p class=\"mb-4\">Klik tombol di dalam shadow sering terlihat berasal dari host, bukan dari elemen yang benar-benar diklik. Itu retargeting: event yang menembus shadow boundary melaporkan target di host.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang listener di host</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> dengarkan click pada custom element. Jangan andalkan event.target untuk nama tombol. Panggil event.composedPath() dan ambil elemen pertama yang punya data-action.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek composed sebelum naik ke halaman</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bandingkan event.composed true dan false. Event yang composed false berhenti di shadow dan tidak sampai ke listener halaman. Catat jalur path-nya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya debug berikutnya tidak menebak selector.</p>",
   "source": "MDN — Event.composedPath()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath",
   "sourceSnippet": "composedPath returns the event path, including nodes inside open shadow trees that listeners would otherwise miss after retargeting.",
   "source2": "MDN — Event.composed",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Event/composed",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Read Retargeted Shadow Events with composedPath",
   "desc": "How to read a click inside a Clincoo shadow root when event.target has already moved to the host, using composedPath.",
   "content": "<p class=\"mb-4\">A click on a button inside shadow DOM often looks like it came from the host, not the element that was actually clicked. That is retargeting: an event that crosses the shadow boundary reports the host as target.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Listen on the host</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> listen for click on the custom element. Do not trust event.target for the button name. Call event.composedPath() and take the first element that has data-action.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check composed before it reaches the page</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> compare composed true and false. An event with composed false stops at the shadow and never reaches a page listener. Write the path down on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next debug session is not guessing selectors.</p>",
   "source": "MDN — Event.composedPath()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath",
   "sourceSnippet": "composedPath returns the event path, including nodes inside open shadow trees that listeners would otherwise miss after retargeting.",
   "source2": "MDN — Event.composed",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Event/composed",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "shadow-delegates-focus-agar-keyboard-masuk",
 "langs": {
  "id": {
   "title": "Cara Aktifkan delegatesFocus agar Fokus Keyboard Masuk Shadow",
   "desc": "Tata cara memakai delegatesFocus di Clincoo supaya Tab dan klik pada host memindahkan fokus ke kontrol di dalam shadow.",
   "content": "<p class=\"mb-4\">Host custom element tidak otomatis meneruskan fokus ke input di dalamnya. Tanpa delegatesFocus, Tab bisa mendarat di host yang tidak bisa diketik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Nyalakan saat attachShadow</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> panggil attachShadow dengan mode open dan delegatesFocus true. Taruh input atau button di shadow, dan jangan beri tabindex pada host jika kontrol dalamnya yang harus menerima ketikan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji urutan Tab</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tab dari field sebelumnya. Fokus harus masuk ke input shadow, bukan berhenti di host. Kalau host masih fokus, cek apakah ada elemen fokusabel lain yang lebih dulu. Simpan urutan tab di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ShadowRoot.delegatesFocus",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus",
   "sourceSnippet": "delegatesFocus makes focus and click on the host move into the first focusable element inside the shadow tree.",
   "source2": "MDN — Element.attachShadow()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Enable delegatesFocus so Keyboard Focus Enters the Shadow",
   "desc": "How to use delegatesFocus in Clincoo so Tab and a click on the host move focus to a control inside the shadow.",
   "content": "<p class=\"mb-4\">A custom element host does not automatically forward focus to an input inside it. Without delegatesFocus, Tab can land on a host that cannot be typed in.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Turn it on in attachShadow</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> call attachShadow with mode open and delegatesFocus true. Put the input or button in the shadow, and do not set tabindex on the host if the inner control should receive typing.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test Tab order</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tab from the previous field. Focus should enter the shadow input, not stop on the host. If the host still focuses, check for another focusable element that comes first. Save the tab order on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ShadowRoot.delegatesFocus",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus",
   "sourceSnippet": "delegatesFocus makes focus and click on the host move into the first focusable element inside the shadow tree.",
   "source2": "MDN — Element.attachShadow()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "shadow-closed-mode-hanya-untuk-api-internal",
 "langs": {
  "id": {
   "title": "Cara Pakai Closed Mode hanya untuk API Internal",
   "desc": "Tata cara memilih mode closed di Clincoo bila shadow tidak boleh dibaca skrip luar, plus batasan debug yang harus diterima.",
   "content": "<p class=\"mb-4\">Mode closed menyembunyikan shadowRoot dari elemen.host.shadowRoot. Itu berguna untuk API internal, tetapi DevTools dan tes halaman jadi lebih sempit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan referensi sendiri</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan hasil attachShadow di properti privat kelas, misalnya this.#root. Mode closed tidak mengirim referensi lewat element.shadowRoot, jadi komponen harus memegang root-nya sendiri untuk mengisi slot dan gaya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan dipakai hanya untuk menyembunyikan bug</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> uji bahwa skrip halaman tidak bisa query tombol di dalam. Kalau layout rusak, debug lewat method publik komponen, bukan dengan membuka root dari luar. Tulis keputusan open versus closed di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Element.attachShadow()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow",
   "sourceSnippet": "mode closed keeps element.shadowRoot null so outside script cannot walk the shadow tree; the component must keep its own reference.",
   "source2": "MDN — Using shadow DOM",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Closed Mode only for an Internal API",
   "desc": "How to choose closed mode in Clincoo when outside script must not read the shadow, and the debug limits you accept.",
   "content": "<p class=\"mb-4\">Closed mode hides shadowRoot from element.shadowRoot. That fits an internal API, but DevTools and page tests get narrower.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep your own reference</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> store the attachShadow result on a private field, such as this.#root. Closed mode does not expose element.shadowRoot, so the component must hold the root to fill slots and styles.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not use it just to hide a bug</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> confirm page script cannot query the inner button. If layout breaks, debug through a public method, not by opening the root from outside. Record the open versus closed decision on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Element.attachShadow()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow",
   "sourceSnippet": "mode closed keeps element.shadowRoot null so outside script cannot walk the shadow tree; the component must keep its own reference.",
   "source2": "MDN — Using shadow DOM",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "shadow-tembuskan-token-warna-custom-property",
 "langs": {
  "id": {
   "title": "Cara Tembuskan Token Warna ke Shadow dengan Custom Property",
   "desc": "Tata cara mewariskan token warna Clincoo ke dalam shadow root, karena selektor halaman tidak menembus boundary.",
   "content": "<p class=\"mb-4\">CSS biasa di halaman tidak menata elemen di dalam shadow. Custom property adalah pengecualian: nilainya diwariskan ke shadow dan bisa dipakai komponen.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Definisi token di host</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set --clincoo-accent pada host atau :root. Di stylesheet shadow pakai color: var(--clincoo-accent, #111827). Jangan menyalin hex ke dalam shadow jika token halaman yang harus menang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji tema tanpa ::part</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ganti token di host dan pastikan teks shadow ikut berubah tanpa mengekspos part. Kalau warna tidak ikut, token belum diwariskan ke host. Catat nama token di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using shadow DOM",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM",
   "sourceSnippet": "Inherited custom properties cross the shadow boundary, so a page can theme a component without piercing encapsulation.",
   "source2": "MDN — var()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/var",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Pass Color Tokens into Shadow with Custom Properties",
   "desc": "How to inherit Clincoo color tokens into a shadow root, because page selectors do not cross the boundary.",
   "content": "<p class=\"mb-4\">Ordinary page CSS does not style elements inside a shadow tree. Custom properties are the exception: their values inherit into the shadow and the component can use them.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Define the token on the host</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set --clincoo-accent on the host or :root. In the shadow stylesheet use color: var(--clincoo-accent, #111827). Do not copy the hex into the shadow if the page token should win.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test theme without ::part</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> change the token on the host and confirm shadow text follows without exposing a part. If the color stays put, the token is not inherited onto the host. Record the token name on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using shadow DOM",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM",
   "sourceSnippet": "Inherited custom properties cross the shadow boundary, so a page can theme a component without piercing encapsulation.",
   "source2": "MDN — var()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/var",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "shadow-input-form-associated-di-dalam-shadow",
 "langs": {
  "id": {
   "title": "Cara Hubungkan Input Shadow ke Form dengan ElementInternals",
   "desc": "Tata cara membuat custom element form-associated di Clincoo supaya nilai di shadow ikut submit dan validasi form.",
   "content": "<p class=\"mb-4\">Input di dalam shadow tidak otomatis menjadi field form. Tanpa ElementInternals, submit hanya melihat light DOM dan nilai komponen hilang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Daftarkan formAssociated</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set static formAssociated = true, lalu di constructor panggil this.attachInternals(). Saat input shadow berubah, panggil internals.setFormValue dengan nilai yang harus terkirim.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji submit dan setValidity</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> taruh komponen di dalam form dan submit. FormData harus memuat nama field. Jika kosong, setFormValue belum terpanggil. Untuk error, panggil setValidity lalu tulis pesannya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ElementInternals",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals",
   "sourceSnippet": "ElementInternals lets a form-associated custom element set its submitted value and validity from inside shadow DOM.",
   "source2": "MDN — ElementInternals.setFormValue()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/setFormValue",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Connect a Shadow Input to a Form with ElementInternals",
   "desc": "How to build a form-associated custom element in Clincoo so a shadow value joins form submit and validation.",
   "content": "<p class=\"mb-4\">An input inside shadow DOM is not automatically a form field. Without ElementInternals, submit only sees light DOM and the component value is dropped.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Register formAssociated</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set static formAssociated = true, then call this.attachInternals() in the constructor. When the shadow input changes, call internals.setFormValue with the value that should be submitted.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test submit and setValidity</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> place the component in a form and submit. FormData should include the field name. If it is missing, setFormValue never ran. For errors, call setValidity and write the message on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ElementInternals",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals",
   "sourceSnippet": "ElementInternals lets a form-associated custom element set its submitted value and validity from inside shadow DOM.",
   "source2": "MDN — ElementInternals.setFormValue()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/setFormValue",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
