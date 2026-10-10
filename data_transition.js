// Clincoo Docs — kategori Transition (9 Oktober 2026, 20:00 WIB — 5 artikel)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["transition"] = {
 "names": { "id": "Transisi", "en": "Transition" },
 "articles": [
{
 "id": "transition-properti-spesifik-bukan-all",
 "langs": {
  "id": {
   "title": "Cara Transisikan Properti Spesifik, Bukan transition: all",
   "desc": "Tata cara membatasi transisi CSS di Clincoo agar layout tidak ikut beranimasi.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan pakai transition all</h2><p class=\"mb-4\">transition: all ikut menggerakkan width, height, dan margin. Itu memicu layout di setiap frame. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis properti yang memang berubah, misalnya transition: background-color 160ms ease, color 160ms ease, transform 160ms ease.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek panel Performance</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka hover tombol sambil merekam Performance. Seharusnya hanya paint atau composite, bukan Layout berulang. Catat properti yang ikut bergerak di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — transition",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition",
   "sourceSnippet": "The transition shorthand sets the properties to animate, the duration, and the timing function.",
   "source2": "web.dev — Animations",
   "source2Url": "https://web.dev/articles/animations-guide",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Transition Specific Properties, Not transition: all",
   "desc": "How to limit CSS transitions in Clincoo so layout does not animate along.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not use transition all</h2><p class=\"mb-4\">transition: all also moves width, height, and margin. That triggers layout on every frame. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> list only the properties that actually change, for example transition: background-color 160ms ease, color 160ms ease, transform 160ms ease.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the Performance panel</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> hover a button while recording Performance. You should see paint or composite, not repeated Layout. Note any property that still moves on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — transition",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition",
   "sourceSnippet": "The transition shorthand sets the properties to animate, the duration, and the timing function.",
   "source2": "web.dev — Animations",
   "source2Url": "https://web.dev/articles/animations-guide",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "transition-durasi-pendek-dan-easing",
 "langs": {
  "id": {
   "title": "Cara Pilih Durasi Pendek dan Easing untuk Hover",
   "desc": "Tata cara menahan transisi UI Clincoo di bawah 200 milidetik agar terasa responsif.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hover bukan adegan film</h2><p class=\"mb-4\">Durasi 400ms pada warna tombol terasa lambat. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pakai 120–180ms untuk warna dan opacity, dan ease-out agar gerakan cepat di awal lalu berhenti halus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Samakan durasi satu kelompok kontrol</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tab dan hover melewati tombol, tautan, dan chip. Jika satu kontrol 100ms dan yang lain 500ms, antarmuka terasa tidak rata. Simpan skala durasi di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — transition-duration",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration",
   "sourceSnippet": "transition-duration sets how long a transition animation should take to complete.",
   "source2": "MDN — transition-timing-function",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Pick a Short Duration and Easing for Hover",
   "desc": "How to keep Clincoo UI transitions under 200 milliseconds so they feel responsive.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">A hover is not a scene</h2><p class=\"mb-4\">A 400ms color change on a button feels late. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> use 120–180ms for color and opacity, and ease-out so the motion starts fast and settles.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match duration inside one control group</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tab and hover through buttons, links, and chips. If one control is 100ms and another is 500ms, the interface feels uneven. Keep the duration scale on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — transition-duration",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration",
   "sourceSnippet": "transition-duration sets how long a transition animation should take to complete.",
   "source2": "MDN — transition-timing-function",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "transition-hormati-prefers-reduced-motion",
 "langs": {
  "id": {
   "title": "Cara Matikan Transisi Saat prefers-reduced-motion",
   "desc": "Tata cara menghormati pengaturan gerak dikurangi di halaman Clincoo.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bungkus transisi dengan media query</h2><p class=\"mb-4\">Pengguna yang meminta reduced motion tetap melihat tombol bergeser. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> letakkan transition hanya di dalam @media (prefers-reduced-motion: no-preference). Di luar itu set transition: none pada kontrol yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dari pengaturan sistem</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> aktifkan reduced motion di sistem operasi, muat ulang, lalu hover tombol. Warna boleh berganti instan, posisi tidak boleh meluncur. Catat hasilnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — prefers-reduced-motion",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
   "sourceSnippet": "The prefers-reduced-motion media feature detects whether the user has requested the system to minimize non-essential motion.",
   "source2": "WCAG — Animation from Interactions",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Disable Transitions When prefers-reduced-motion Is Set",
   "desc": "How to honor reduced-motion settings on Clincoo pages.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gate transitions with a media query</h2><p class=\"mb-4\">Users who request reduced motion still see buttons slide. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> put transition only inside @media (prefers-reduced-motion: no-preference). Outside it, set transition: none on the same controls.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test from system settings</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> enable reduced motion in the operating system, reload, then hover a button. Color may change instantly; position must not glide. Record the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — prefers-reduced-motion",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
   "sourceSnippet": "The prefers-reduced-motion media feature detects whether the user has requested the system to minimize non-essential motion.",
   "source2": "WCAG — Animation from Interactions",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "transition-transform-bukan-layout",
 "langs": {
  "id": {
   "title": "Cara Geser dengan transform, Bukan margin",
   "desc": "Tata cara menganimasikan posisi di Clincoo tanpa memicu layout ulang.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti margin animasi dengan transform</h2><p class=\"mb-4\">transition pada margin-left menggeser seluruh baris. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ganti dengan transform: translateX(4px) pada state hover atau expanded. Transform berjalan di compositor dan tidak mendorong tetangga.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pastikan tidak ada kedip layout</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka panel yang mengembang. Teks di sampingnya tidak boleh meloncat. Jika masih ada reflow, properti layout masih ikut transisi. Simpan rekaman singkat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — transform",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
   "sourceSnippet": "The transform CSS property lets you rotate, scale, skew, or translate an element.",
   "source2": "web.dev — Rendering performance",
   "source2Url": "https://web.dev/articles/rendering-performance",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Move with transform, Not margin",
   "desc": "How to animate position in Clincoo without triggering layout.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Replace an animated margin with transform</h2><p class=\"mb-4\">A transition on margin-left shifts the whole row. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> switch to transform: translateX(4px) on the hover or expanded state. Transform runs on the compositor and does not push neighbors.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Confirm there is no layout flicker</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open a panel that expands. Text beside it must not jump. If it still reflows, a layout property is still in the transition. Keep a short recording on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — transform",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
   "sourceSnippet": "The transform CSS property lets you rotate, scale, skew, or translate an element.",
   "source2": "web.dev — Rendering performance",
   "source2Url": "https://web.dev/articles/rendering-performance",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "transition-will-change-hemat-gpu",
 "langs": {
  "id": {
   "title": "Cara Pakai will-change Hemat untuk Transisi",
   "desc": "Tata cara memakai will-change hanya pada elemen yang memang bertransisi di Clincoo agar GPU tidak terbebani terus.",
   "content": "<p class=\"mb-4\">will-change: transform pada setiap kartu membuat layer GPU menumpuk dan memperlambat scroll.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tambahkan hanya saat hover atau fokus</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set will-change: transform pada state :hover atau :focus-visible, bukan di aturan dasar. Hapus setelah transisi selesai jika memungkinkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di Performance</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> rekam scroll dan hover. Layer tidak boleh bertambah terus. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — will-change",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/will-change",
   "sourceSnippet": "will-change hints the browser about upcoming changes so it can optimize, but overuse creates extra layers.",
   "source2": "web.dev — Animations",
   "source2Url": "https://web.dev/articles/animations-guide",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use will-change Sparingly for Transitions",
   "desc": "How to apply will-change only to elements that actually transition in Clincoo so the GPU is not loaded continuously.",
   "content": "<p class=\"mb-4\">will-change: transform on every card piles up GPU layers and slows scrolling.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add it only on hover or focus</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set will-change: transform on the :hover or :focus-visible state, not in the base rule. Remove it after the transition ends if possible.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in Performance</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> record scroll and hover. Layers should not keep growing. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — will-change",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/will-change",
   "sourceSnippet": "will-change hints the browser about upcoming changes so it can optimize, but overuse creates extra layers.",
   "source2": "web.dev — Animations",
   "source2Url": "https://web.dev/articles/animations-guide",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
