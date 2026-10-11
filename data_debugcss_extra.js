// Clincoo Docs — tambah 3 artikel DebugCSS (11 Oktober 2026, 06:00 WIB)
// Clincoo Docs — tambah 4 artikel DebugCSS (11 Oktober 2026, 08:00 WIB)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["debugcss"]) {
    window.countryDataFiles["debugcss"] = { "names": { "id": "Debug CSS", "en": "Debug CSS" }, "articles": [] };
  }
  var list = window.countryDataFiles["debugcss"].articles;
  var extra = [
{
 "id": "debugcss-media-queries-devtools",
 "langs": {
  "id": {
   "title": "Cara Debug Media Queries di DevTools",
   "desc": "Tata cara memakai panel Media Queries di Chrome DevTools untuk menguji breakpoint Clincoo.",
   "content": "<p class=\"mb-4\">Media query yang salah membuat layout Clincoo pecah di ukuran tertentu tanpa error jelas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buka panel Media Queries</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka DevTools, tab Elements, lalu klik ikon media queries di sudut. Atau gunakan Toggle Device Toolbar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji breakpoint</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> geser lebar dan lihat aturan yang aktif. Catat breakpoint yang bermasalah di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Device mode",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/device-mode",
   "sourceSnippet": "Use device mode to test responsive layouts and media queries.",
   "source2": "MDN — Media queries",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug Media Queries in DevTools",
   "desc": "How to use the Media Queries panel in Chrome DevTools to test Clincoo breakpoints.",
   "content": "<p class=\"mb-4\">A wrong media query breaks Clincoo layout at certain widths without a clear error.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Open the Media Queries panel</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open DevTools, the Elements tab, then click the media queries icon. Or use Toggle Device Toolbar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test breakpoints</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> drag the width and see which rules are active. Record problem breakpoints on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Device mode",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/device-mode",
   "sourceSnippet": "Use device mode to test responsive layouts and media queries.",
   "source2": "MDN — Media queries",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "debugcss-toggle-device-toolbar",
 "langs": {
  "id": {
   "title": "Cara Pakai Toggle Device Toolbar untuk Uji Responsif",
   "desc": "Tata cara memakai device mode di DevTools untuk melihat layout Clincoo di berbagai ukuran layar.",
   "content": "<p class=\"mb-4\">Layout yang bagus di desktop bisa rusak di ponsel. Device toolbar membantu menguji tanpa perangkat fisik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Aktifkan device mode</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tekan Ctrl+Shift+M atau klik ikon ponsel di DevTools. Pilih preset atau set dimensi kustom.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Periksa overflow dan touch</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> geser dan cek apakah ada scroll horizontal. Catat temuan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Device mode",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/device-mode",
   "sourceSnippet": "Device mode lets you simulate mobile viewports and touch events.",
   "source2": "MDN — Responsive design",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use the Toggle Device Toolbar for Responsive Testing",
   "desc": "How to use device mode in DevTools to view Clincoo layout at different screen sizes.",
   "content": "<p class=\"mb-4\">A layout that looks good on desktop can break on phone. The device toolbar helps test without a physical device.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Enable device mode</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> press Ctrl+Shift+M or click the phone icon in DevTools. Choose a preset or set custom dimensions.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check overflow and touch</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll and check for horizontal overflow. Record findings on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Device mode",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/device-mode",
   "sourceSnippet": "Device mode lets you simulate mobile viewports and touch events.",
   "source2": "MDN — Responsive design",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "debugcss-coverage-unused-css",
 "langs": {
  "id": {
   "title": "Cara Temukan Unused CSS dengan Coverage di DevTools",
   "desc": "Tata cara memakai tab Coverage untuk melihat CSS yang tidak terpakai di halaman Clincoo.",
   "content": "<p class=\"mb-4\">CSS yang tidak terpakai memperlambat muat halaman Clincoo.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buka Coverage</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka DevTools, Command Menu (Ctrl+Shift+P), ketik Coverage, lalu rekam muat ulang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hapus yang merah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> lihat persentase unused. Hapus aturan yang tidak kena. Catat penghematan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Coverage",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/coverage",
   "sourceSnippet": "The Coverage tab shows which CSS and JS is unused on the page.",
   "source2": "web.dev — Unused CSS",
   "source2Url": "https://web.dev/articles/unused-css",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Find Unused CSS with Coverage in DevTools",
   "desc": "How to use the Coverage tab to see unused CSS on a Clincoo page.",
   "content": "<p class=\"mb-4\">Unused CSS slows down Clincoo page loads.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Open Coverage</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open DevTools, Command Menu (Ctrl+Shift+P), type Coverage, then record a reload.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Remove the red</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> see the unused percentage. Remove rules that never match. Record the savings on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Coverage",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/coverage",
   "sourceSnippet": "The Coverage tab shows which CSS and JS is unused on the page.",
   "source2": "web.dev — Unused CSS",
   "source2Url": "https://web.dev/articles/unused-css",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "debugcss-force-pseudo-state",
 "langs": {
  "id": {
   "title": "Cara Paksa State :hover dan :focus di DevTools",
   "desc": "Tata cara memaksa state hover atau focus di panel Styles Clincoo supaya gaya bisa diperiksa tanpa mouse.",
   "content": "<p class=\"mb-4\">Gaya :hover sulit diperiksa karena hilang saat kursor pindah. DevTools bisa memaksa state itu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Aktifkan Force state</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih elemen, klik :hov di panel Styles, centang :hover atau :focus. Gaya langsung diterapkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> paksa state lalu salin aturan yang benar ke kode. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Force element state",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/reference#force-element-state",
   "sourceSnippet": "Force element state to apply :hover, :active, :focus without interacting.",
   "source2": "MDN — :hover",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:hover",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Force :hover and :focus State in DevTools",
   "desc": "How to force hover or focus state in the Styles panel for Clincoo so styles can be inspected without the mouse.",
   "content": "<p class=\"mb-4\">:hover styles are hard to inspect because they disappear when the cursor moves. DevTools can force that state.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Enable Force state</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> select the element, click :hov in the Styles pane, check :hover or :focus. The styles apply immediately.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> force the state then copy the correct rule into code. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Force element state",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/reference#force-element-state",
   "sourceSnippet": "Force element state to apply :hover, :active, :focus without interacting.",
   "source2": "MDN — :hover",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:hover",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "debugcss-box-model-computed",
 "langs": {
  "id": {
   "title": "Cara Baca Box Model di Tab Computed",
   "desc": "Tata cara melihat margin, border, padding, dan content box di DevTools untuk elemen Clincoo.",
   "content": "<p class=\"mb-4\">Ukuran elemen sering tidak sesuai karena padding atau margin tersembunyi. Tab Computed menampilkan box model.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buka box model</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih elemen, buka Computed, lihat diagram box model di atas. Angka menunjukkan ukuran aktual.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan dengan desain</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> cocokkan dengan ukuran yang diharapkan. Catat selisih di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Box model",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/reference#box-model",
   "sourceSnippet": "The box model diagram shows the content, padding, border, and margin of the selected element.",
   "source2": "MDN — Box model",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Read the Box Model in the Computed Tab",
   "desc": "How to view margin, border, padding, and content box in DevTools for a Clincoo element.",
   "content": "<p class=\"mb-4\">Element sizes often differ because of hidden padding or margin. The Computed tab shows the box model.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Open the box model</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> select the element, open Computed, and look at the box model diagram. The numbers show actual sizes.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare with design</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> match against the expected size. Record the difference on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Box model",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/reference#box-model",
   "sourceSnippet": "The box model diagram shows the content, padding, border, and margin of the selected element.",
   "source2": "MDN — Box model",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "debugcss-animations-panel",
 "langs": {
  "id": {
   "title": "Cara Debug Animasi dengan Panel Animations",
   "desc": "Tata cara memakai panel Animations di DevTools untuk melihat dan memperlambat animasi CSS di Clincoo.",
   "content": "<p class=\"mb-4\">Animasi yang terlalu cepat sulit di-debug. Panel Animations memungkinkan memperlambat atau mem-pause.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buka panel Animations</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka DevTools, More tools, Animations. Picu animasi, lalu gunakan slider untuk memperlambat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> lihat keyframe yang aktif. Catat perbaikan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Animations",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/animations",
   "sourceSnippet": "The Animations panel lets you inspect and modify animations.",
   "source2": "MDN — CSS animations",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug Animations with the Animations Panel",
   "desc": "How to use the Animations panel in DevTools to view and slow down CSS animations in Clincoo.",
   "content": "<p class=\"mb-4\">Animations that run too fast are hard to debug. The Animations panel lets you slow or pause them.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Open the Animations panel</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open DevTools, More tools, Animations. Trigger the animation, then use the slider to slow it down.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> see the active keyframes. Note the fix on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Animations",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/animations",
   "sourceSnippet": "The Animations panel lets you inspect and modify animations.",
   "source2": "MDN — CSS animations",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "debugcss-stacking-context",
 "langs": {
  "id": {
   "title": "Cara Debug Stacking Context dan z-index",
   "desc": "Tata cara menemukan stacking context yang membuat z-index Clincoo tidak bekerja seperti diharapkan.",
   "content": "<p class=\"mb-4\">z-index hanya bekerja di dalam stacking context yang sama. Context baru bisa membuat elemen tertutup.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cari context baru</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> cari opacity < 1, transform, atau filter yang membuat context. Gunakan DevTools untuk melihat layer.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji z-index</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ubah z-index sementara. Catat context yang bermasalah di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Stacking context",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "sourceSnippet": "A stacking context is formed by elements with certain properties, affecting z-index.",
   "source2": "Chrome DevTools — Layers",
   "source2Url": "https://developer.chrome.com/docs/devtools/css/reference",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug Stacking Context and z-index",
   "desc": "How to find the stacking context that makes z-index in Clincoo not work as expected.",
   "content": "<p class=\"mb-4\">z-index only works within the same stacking context. A new context can hide an element.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Find new contexts</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> look for opacity < 1, transform, or filter that create a context. Use DevTools to inspect layers.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test z-index</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> change z-index temporarily. Record the problem context on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Stacking context",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",
   "sourceSnippet": "A stacking context is formed by elements with certain properties, affecting z-index.",
   "source2": "Chrome DevTools — Layers",
   "source2Url": "https://developer.chrome.com/docs/devtools/css/reference",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
];
  extra.forEach(function (item) {
    if (!list.some(function (x) { return x.id === item.id; })) list.push(item);
  });
})();
