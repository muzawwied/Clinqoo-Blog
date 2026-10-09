// Clincoo Docs — kategori Details (9 Oktober 2026, 08:00 WIB) — tambah 4 artikel sampai full 12
// Clincoo Docs — kategori Details (9 Oktober 2026, 07:00 WIB) — tambah 5 artikel
// Clincoo Docs — kategori Details (9 Oktober 2026, 06:00 WIB) — 3 artikel baru
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["details"] = {
 "names": { "id": "Details", "en": "Details" },
 "articles": [
{
 "id": "details-elemen-details-tanpa-javascript",
 "langs": {
  "id": {
   "title": "Cara Buka Tutup Panel dengan details tanpa JavaScript",
   "desc": "Tata cara memakai elemen details dan summary untuk panel lipat yang tetap berfungsi tanpa skrip.",
   "content": "<p class=\"mb-4\">Panel FAQ atau catatan lanjutan sering dibangun dengan div dan click handler. Jika skrip gagal, panel tidak bisa dibuka.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bungkus isi dengan details</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> letakkan judul yang diklik di dalam summary, lalu isi panel sebagai saudara summary di dalam details. Browser mengurus buka-tutup, fokus, dan status open tanpa kelas CSS tambahan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan sembunyikan summary</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> biarkan summary terlihat dan bisa difokus. Jangan mengganti klik dengan div kosong. Gaya marker boleh diubah, tetapi jangan hapus peran buka-tutup. Contoh markup ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — details element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",
   "sourceSnippet": "The details element creates a disclosure widget where information is visible only when the widget is toggled open.",
   "source2": "MDN — summary element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Toggle a Panel with details without JavaScript",
   "desc": "How to use the details and summary elements for a disclosure panel that still works without script.",
   "content": "<p class=\"mb-4\">FAQ or extra-note panels are often built with a div and a click handler. If the script fails, the panel cannot open.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Wrap the content in details</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> put the clickable heading inside summary, then the panel body as a sibling of summary inside details. The browser handles open, close, focus, and the open state without an extra CSS class.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not hide summary</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> keep summary visible and focusable. Do not replace the click with an empty div. You may restyle the marker, but do not remove the disclosure behavior. Sample markup is on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — details element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",
   "sourceSnippet": "The details element creates a disclosure widget where information is visible only when the widget is toggled open.",
   "source2": "MDN — summary element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
{
 "id": "details-accordion-eksklusif-dengan-name",
 "langs": {
  "id": {
   "title": "Cara Buat Accordion Eksklusif dengan atribut name",
   "desc": "Tata cara membuka satu panel details saja dengan atribut name, tanpa mengunci yang lain lewat skrip.",
   "content": "<p class=\"mb-4\">Accordion yang menutup panel lain lewat JavaScript mudah lupa kasus keyboard dan panel yang ditambah belakangan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri name yang sama</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri atribut name yang sama pada setiap details dalam satu kelompok. Browser menutup panel lain dalam kelompok itu saat satu panel dibuka.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pisahkan kelompok</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jangan pakai name yang sama untuk FAQ dan menu pengaturan. Kelompok berbeda butuh name berbeda. Jika beberapa panel boleh terbuka bersamaan, jangan isi name. Catatan pemakaian ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — details: name",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#name",
   "sourceSnippet": "The name attribute groups details elements so that only one in the group can be open at a time.",
   "source2": "HTML spec — details name",
   "source2Url": "https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Build an Exclusive Accordion with the name Attribute",
   "desc": "How to keep only one details panel open using the name attribute, without closing the others in script.",
   "content": "<p class=\"mb-4\">An accordion that closes other panels in JavaScript often misses keyboard cases and panels added later.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Share one name</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set the same name attribute on each details in a group. The browser closes the other panels in that group when one opens.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep groups separate</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> do not reuse the same name for an FAQ and a settings menu. Different groups need different names. If several panels may stay open, omit name. Usage notes are on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — details: name",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#name",
   "sourceSnippet": "The name attribute groups details elements so that only one in the group can be open at a time.",
   "source2": "HTML spec — details name",
   "source2Url": "https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
}
{
 "id": "details-summary-fokus-keyboard",
 "langs": {
  "id": {
   "title": "Cara Pastikan summary Bisa Difokus dari Keyboard",
   "desc": "Tata cara menjaga summary tetap tombol buka-tutup yang bisa dijangkau Tab dan Enter.",
   "content": "<p class=\"mb-4\">Summary yang dibungkus ulang atau ditimpa gaya pointer-events none tidak lagi bisa dioperasikan dari keyboard.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Biarkan summary sebagai kontrol</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jangan taruh tombol di dalam summary hanya untuk membuka panel. Summary sendiri yang menerima fokus. Uji dengan Tab lalu Enter atau Space.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan hanya andalkan hover</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> panel tidak boleh terbuka hanya saat hover. Pengguna keyboard dan layar sentuh tidak punya hover yang stabil. Tambahkan gaya :focus-visible pada summary dan catat ceknya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — summary element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary",
   "sourceSnippet": "The summary element is the disclosure widget control and is keyboard accessible by default.",
   "source2": "MDN — :focus-visible",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Keep summary Focusable from the Keyboard",
   "desc": "How to keep summary as a disclosure control reachable with Tab and Enter.",
   "content": "<p class=\"mb-4\">A summary that is wrapped again or covered with pointer-events: none can no longer be operated from the keyboard.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Leave summary as the control</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> do not put a button inside summary just to open the panel. Summary itself receives focus. Test with Tab, then Enter or Space.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not rely on hover alone</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> the panel must not open only on hover. Keyboard and touch users do not have a stable hover. Add a :focus-visible style on summary and record the check on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — summary element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary",
   "sourceSnippet": "The summary element is the disclosure widget control and is keyboard accessible by default.",
   "source2": "MDN — :focus-visible",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
,
{
 "id": "details-atribut-open-default",
 "langs": {
  "id": {
   "title": "Cara Buka Panel details Secara Default dengan atribut open",
   "desc": "Tata cara memakai atribut open agar panel details Clincoo terbuka saat halaman pertama kali dimuat.",
   "content": "<p class=\"mb-4\">FAQ atau catatan rilis sering perlu satu panel yang sudah terbuka, sementara panel lain tetap tertutup. Atribut open menyelesaikan itu tanpa skrip.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang open hanya pada panel utama</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis <details open> pada panel yang harus terlihat lebih dulu. Jangan pasang open di setiap item, karena halaman jadi panjang dan pengguna kehilangan isyarat bahwa panel bisa dilipat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji muat pertama</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> muat ulang pratinjau. Panel beratribut open harus terbuka sebelum JavaScript berjalan. Summary tetap bisa diklik atau ditekan Enter untuk menutup. Catat keputusan panel mana yang default terbuka di catatan proyek pada <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — details element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",
   "sourceSnippet": "The open attribute makes the details element visible on load; the user can still toggle it.",
   "source2": "HTML Living Standard — the details element",
   "source2Url": "https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Open a details Panel by Default with the open Attribute",
   "desc": "How to use the open attribute so a Clincoo details panel is expanded on first load.",
   "content": "<p class=\"mb-4\">An FAQ or release note often needs one panel open while the rest stay closed. The open attribute does that without script.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Put open only on the primary panel</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write <details open> on the panel that must be visible first. Do not set open on every item, or the page becomes long and users lose the cue that panels can collapse.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the first load</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> reload the preview. The panel with open must be expanded before JavaScript runs. Summary must still toggle closed with a click or Enter. Record which panel defaults open in the project notes on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — details element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",
   "sourceSnippet": "The open attribute makes the details element visible on load; the user can still toggle it.",
   "source2": "HTML Living Standard — the details element",
   "source2Url": "https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "details-tangkap-event-toggle",
 "langs": {
  "id": {
   "title": "Cara Tangkap Event toggle pada elemen details",
   "desc": "Tata cara memakai event toggle untuk menyimpan status buka tutup panel details tanpa memantau klik mentah.",
   "content": "<p class=\"mb-4\">Status panel sering perlu diingat, misalnya panel pengaturan yang pengguna buka tetap terbuka setelah pratinjau dimuat ulang. Event toggle lebih tepat daripada click pada summary, karena toggle juga terpicu dari keyboard dan dari perubahan atribut.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Dengarkan toggle, baca properti open</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pasang listener toggle pada elemen details. Di dalam handler baca event.target.open, lalu simpan id panel ke sessionStorage hanya jika nilainya true atau false yang Anda memang butuhkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan andalkan click summary</h2><p class=\"mb-4\">Click pada summary tidak mencakup semua cara membuka panel. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> uji dengan Enter dan Space saat summary terfokus. Pastikan catch tidak menimpa status jika penyimpanan diblokir. Catat polanya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — toggle event",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/toggle_event",
   "sourceSnippet": "The toggle event fires on a details element when it is opened or closed.",
   "source2": "MDN — HTMLDetailsElement.open",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDetailsElement/open",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Listen for the toggle Event on details",
   "desc": "How to use the toggle event to store the open state of a details panel without listening to raw clicks.",
   "content": "<p class=\"mb-4\">Panel state often needs to persist, for example a settings panel the user opened should stay open after a preview reload. The toggle event is a better hook than a click on summary, because toggle also fires from the keyboard and from attribute changes.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Listen for toggle and read open</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add a toggle listener on the details element. Inside the handler read event.target.open, then store the panel id in sessionStorage only for the true or false value you actually need.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not rely on summary click</h2><p class=\"mb-4\">A click on summary does not cover every way to open the panel. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> test with Enter and Space while summary is focused. Make sure a blocked storage write does not throw over the toggle. Record the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — toggle event",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/toggle_event",
   "sourceSnippet": "The toggle event fires on a details element when it is opened or closed.",
   "source2": "MDN — HTMLDetailsElement.open",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDetailsElement/open",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "details-hindari-details-bersarang",
 "langs": {
  "id": {
   "title": "Cara Hindari details Bersarang yang Membingungkan",
   "desc": "Tata cara menyusun panel details Clincoo agar tidak bersarang dalam bersarang sampai pengguna kehilangan konteks.",
   "content": "<p class=\"mb-4\">Details di dalam details terlihat ringkas di editor, tetapi di layar kecil pengguna tidak tahu panel mana yang sedang terbuka. Satu tingkat lipatan biasanya cukup.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Batasi satu tingkat</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jadikan setiap topik saudara, bukan anak. Jika sebuah jawaban butuh subbagian, pakai heading di dalam panel yang sama, bukan details baru.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri jarak dan nama yang spesifik</h2><p class=\"mb-4\">Summary harus menyebut isi panel, bukan kata generik seperti Detail. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka pratinjau mobile dan pastikan dua summary tidak menempel. Jika bersarang terpaksa, sisakan satu saja dan tulis alasannya di catatan pada <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — details element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",
   "sourceSnippet": "A details element can contain another details element, but nested disclosures are harder to scan.",
   "source2": "WAI-ARIA Authoring Practices — Disclosure",
   "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid Nested details That Confuse Users",
   "desc": "How to structure Clincoo details panels so they are not nested so deeply that users lose context.",
   "content": "<p class=\"mb-4\">Details inside details looks compact in the editor, but on a small screen users cannot tell which panel is open. One disclosure level is usually enough.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep a single level</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> make each topic a sibling, not a child. If an answer needs subsections, use headings inside the same panel instead of another details element.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Space them and name them specifically</h2><p class=\"mb-4\">Summary text should name the panel content, not a generic word like Details. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the mobile preview and confirm two summaries are not flush. If nesting is unavoidable, keep a single nest and write the reason in the notes on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — details element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",
   "sourceSnippet": "A details element can contain another details element, but nested disclosures are harder to scan.",
   "source2": "WAI-ARIA Authoring Practices — Disclosure",
   "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "details-gaya-marker-summary",
 "langs": {
  "id": {
   "title": "Cara Gaya Marker summary tanpa Menghilangkan Akses Keyboard",
   "desc": "Tata cara mengganti penanda summary pada details Clincoo tanpa membuat kontrol tidak bisa difokus.",
   "content": "<p class=\"mb-4\">Marker bawaan summary sering tidak selaras dengan tema. Menggantinya aman selama summary tetap elemen yang bisa difokus dan teksnya tetap terlihat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sembunyikan marker, bukan summary</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set summary::-webkit-details-marker dan summary::marker ke display none atau content none. Tambahkan ikon dengan ::before. Jangan set display none pada summary sendiri.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pertahankan fokus dan hit area</h2><p class=\"mb-4\">Beri summary list-style none, cursor pointer, dan min-height yang nyaman disentuh. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tab ke summary dan pastikan ada :focus-visible. Ikon harus ikut berputar hanya sebagai isyarat, bukan satu-satunya label. Simpan cuplikan CSS di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — summary element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary",
   "sourceSnippet": "The summary element is the disclosure control and remains keyboard accessible when styled.",
   "source2": "MDN — ::marker",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::marker",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Style the summary Marker without Losing Keyboard Access",
   "desc": "How to replace the summary marker on Clincoo details without making the control unfocusable.",
   "content": "<p class=\"mb-4\">The default summary marker often clashes with a theme. Replacing it is safe as long as summary stays a focusable element and its text stays visible.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hide the marker, not the summary</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set summary::-webkit-details-marker and summary::marker to display none or content none. Add an icon with ::before. Do not set display none on summary itself.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep focus and the hit area</h2><p class=\"mb-4\">Give summary list-style none, cursor pointer, and a touch-friendly min-height. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tab to summary and confirm a :focus-visible style. The icon may rotate as a cue, not as the only label. Save the CSS snippet on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — summary element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary",
   "sourceSnippet": "The summary element is the disclosure control and remains keyboard accessible when styled.",
   "source2": "MDN — ::marker",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::marker",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "details-cetak-konten-terlipat",
 "langs": {
  "id": {
   "title": "Cara Pastikan Konten details Ikut Tercetak",
   "desc": "Tata cara membuka panel details Clincoo saat cetak supaya jawaban FAQ tidak hilang di kertas atau PDF.",
   "content": "<p class=\"mb-4\">Panel yang tertutup di layar sering ikut tertutup saat pengguna mencetak halaman bantuan. Isi yang penting jadi hilang di PDF.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buka semua panel di media print</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan @media print yang menampilkan isi details, misalnya details, details > * { display: block; }. Jangan mengandalkan atribut open yang diubah skrip hanya di layar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dialog cetak</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka pratinjau, lalu print preview. Semua jawaban harus terlihat tanpa mengklik summary. Di layar, panel tetap tertutup seperti semula. Catat aturan cetak di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @media print",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media#print",
   "sourceSnippet": "The print media type matches documents viewed in a print preview or sent to a printer.",
   "source2": "MDN — details element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Make Collapsed details Content Print",
   "desc": "How to expand Clincoo details panels in print so FAQ answers are not missing on paper or PDF.",
   "content": "<p class=\"mb-4\">Panels closed on screen often stay closed when someone prints a help page. Important answers disappear from the PDF.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Open every panel in print media</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add an @media print rule that shows details content, for example details, details > * { display: block; }. Do not rely on a script that sets open only on screen.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the print dialog</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the preview, then print preview. Every answer should be visible without clicking summary. On screen, panels stay collapsed as before. Record the print rule on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @media print",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media#print",
   "sourceSnippet": "The print media type matches documents viewed in a print preview or sent to a printer.",
   "source2": "MDN — details element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "details-tutup-dari-tombol-di-dalam",
 "langs": {
  "id": {
   "title": "Cara Tutup Panel details dari Tombol di Dalam",
   "desc": "Tata cara menutup panel details Clincoo dari tombol di dalam konten, bukan hanya dari summary.",
   "content": "<p class="mb-4">Pengguna sering selesai membaca jawaban lalu ingin menutup panel tanpa menggulir kembali ke judul. Tombol di dalam konten harus menghapus status terbuka, bukan hanya menyembunyikan isi dengan CSS.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Hapus atribut open</h2><p class="mb-4">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> beri tombol type="button" di dalam details. Pada klik, panggil closest('details').open = false. Jangan pakai type submit jika tombol ada di dalam form.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Kembalikan fokus ke summary</h2><p class="mb-4">Setelah panel tertutup, fokus bisa hilang. Pindahkan fokus ke elemen summary panel yang sama supaya pengguna keyboard tetap tahu posisinya. Cek di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> dengan Tab, bukan hanya klik mouse. Catat polanya di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTML details element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",
   "sourceSnippet": "The open property reflects the open attribute and can be set from script to close the disclosure.",
   "source2": "HTML spec — the details element",
   "source2Url": "https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Close a details Panel from an Inner Button",
   "desc": "How to close a Clincoo details panel from a button inside the content, not only from the summary.",
   "content": "<p class="mb-4">People often finish an answer and want to close the panel without scrolling back to the title. A button inside the content must clear the open state, not merely hide the body with CSS.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Remove the open attribute</h2><p class="mb-4">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> add a type="button" inside details. On click, set closest('details').open = false. Do not use type submit if the button sits inside a form.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Return focus to summary</h2><p class="mb-4">After the panel closes, focus can disappear. Move focus to that panel's summary so keyboard users still know where they are. Check it in <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> with Tab, not only a mouse click. Note the pattern on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTML details element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",
   "sourceSnippet": "The open property reflects the open attribute and can be set from script to close the disclosure.",
   "source2": "HTML spec — the details element",
   "source2Url": "https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "details-animasikan-buka-dengan-grid",
 "langs": {
  "id": {
   "title": "Cara Animaskan Buka Tutup details dengan Grid",
   "desc": "Tata cara menganimasikan tinggi panel details Clincoo dengan grid-template-rows tanpa mengukur scrollHeight.",
   "content": "<p class="mb-4">Transisi height dari 0 ke auto sering diabaikan browser. Mengukur scrollHeight tiap klik mudah salah saat teks membungkus ulang.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Bungkus isi dalam grid</h2><p class="mb-4">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> jadikan details sebagai grid satu kolom. Baris konten memakai grid-template-rows: 0fr saat tertutup dan 1fr saat details[open]. Anak langsung diberi overflow: hidden dan min-height: 0.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Hormati reduced motion</h2><p class="mb-4">Tambahkan prefers-reduced-motion: reduce yang mematikan transisi. Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> buka dan tutup panel: isi tidak boleh terpotong, dan fokus summary tetap terlihat. Simpan cuplikan CSS di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — grid-template-rows",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows",
   "sourceSnippet": "The fr unit distributes free space in a grid row, which can transition between 0fr and 1fr.",
   "source2": "MDN — prefers-reduced-motion",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Animate a details Panel with Grid Rows",
   "desc": "How to animate a Clincoo details panel height with grid-template-rows without measuring scrollHeight.",
   "content": "<p class="mb-4">A transition from height 0 to auto is often ignored by the browser. Measuring scrollHeight on every click breaks when text rewraps.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Wrap the body in a grid</h2><p class="mb-4">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> make details a one-column grid. The content row uses grid-template-rows: 0fr when closed and 1fr when details[open]. The direct child gets overflow: hidden and min-height: 0.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Honor reduced motion</h2><p class="mb-4">Add a prefers-reduced-motion: reduce rule that disables the transition. In <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> open and close the panel: content must not clip, and the summary focus ring stays visible. Keep the CSS snippet on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — grid-template-rows",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows",
   "sourceSnippet": "The fr unit distributes free space in a grid row, which can transition between 0fr and 1fr.",
   "source2": "MDN — prefers-reduced-motion",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "details-form-di-dalam-panel",
 "langs": {
  "id": {
   "title": "Cara Letakkan Form di Dalam Panel details",
   "desc": "Tata cara menaruh formulir Clincoo di dalam details tanpa ikut tertutup saat validasi gagal.",
   "content": "<p class="mb-4">Panel bantuan yang berisi formulir singkat mudah tertutup lagi saat browser menolak submit, sehingga pesan error tidak kelihatan.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Jaga panel tetap open saat invalid</h2><p class="mb-4">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> dengarkan invalid pada form di dalam details dan set details.open = true. Jangan tutup panel di event submit sebelum checkValidity() lolos.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Jangan bungkus summary dengan form</h2><p class="mb-4">Form harus berada di dalam konten, setelah summary, bukan membungkus seluruh details. Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> kirim form kosong: panel tetap terbuka dan fokus pindah ke kolom yang gagal. Catat urutan markup di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTMLFormElement.checkValidity",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/checkValidity",
   "sourceSnippet": "checkValidity reports whether the form's controls satisfy their constraints and fires invalid when they do not.",
   "source2": "MDN — details element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Place a Form Inside a details Panel",
   "desc": "How to put a Clincoo form inside details without the panel closing when validation fails.",
   "content": "<p class="mb-4">A help panel that holds a short form often closes again when the browser rejects submit, so the error message disappears.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Keep the panel open when invalid</h2><p class="mb-4">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> listen for invalid on the form inside details and set details.open = true. Do not close the panel on submit before checkValidity() passes.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Do not wrap summary in the form</h2><p class="mb-4">The form belongs in the content, after summary, not around the whole details element. In <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> submit an empty form: the panel stays open and focus moves to the failing field. Record the markup order on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTMLFormElement.checkValidity",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/checkValidity",
   "sourceSnippet": "checkValidity reports whether the form's controls satisfy their constraints and fires invalid when they do not.",
   "source2": "MDN — details element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "details-summary-punya-nama-aksesibel",
 "langs": {
  "id": {
   "title": "Cara Beri Nama Aksesibel pada summary",
   "desc": "Tata cara menulis teks summary Clincoo yang tetap punya nama aksesibel saat ikon dipakai.",
   "content": "<p class="mb-4">Summary yang hanya berisi ikon panah dibaca sebagai tombol kosong. Pengguna pembaca layar tidak tahu panel itu tentang apa.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Teks terlihat atau aria-label</h2><p class="mb-4">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> biarkan judul pertanyaan sebagai teks di dalam summary. Jika ikon SVG ikut ada, beri aria-hidden="true" pada ikon supaya tidak menggandakan nama.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Cek nama di pohon aksesibilitas</h2><p class="mb-4">Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> buka accessibility tree: summary harus punya nama yang sama dengan pertanyaan, dan peran button tetap ada. Jangan mengganti summary dengan div yang hanya diklik. Simpan contoh nama di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — summary element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary",
   "sourceSnippet": "The summary element is the disclosure widget label and is exposed as a button.",
   "source2": "WAI-ARIA — button role accessible name",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Give summary an Accessible Name",
   "desc": "How to write Clincoo summary text that keeps an accessible name when an icon is used.",
   "content": "<p class="mb-4">A summary that contains only a chevron is announced as an empty button. Screen reader users cannot tell what the panel is about.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Visible text or an aria-label</h2><p class="mb-4">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> keep the question title as text inside summary. If an SVG icon is included, set aria-hidden="true" on the icon so it does not duplicate the name.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Check the name in the accessibility tree</h2><p class="mb-4">In <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> open the accessibility tree: summary needs the same name as the question, and the button role stays. Do not replace summary with a div that only has a click handler. Save a sample name on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — summary element",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary",
   "sourceSnippet": "The summary element is the disclosure widget label and is exposed as a button.",
   "source2": "WAI-ARIA — button role accessible name",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
]
};
