// Clincoo Docs — tambah 5 artikel Transisi (10 Oktober 2026, 06:00 WIB)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["transition"]) {
    window.countryDataFiles["transition"] = { "names": { "id": "Transisi", "en": "Transition" }, "articles": [] };
  }
  var list = window.countryDataFiles["transition"].articles;
  var extra = [
{
 "id": "transition-filter-blur-hemat",
 "langs": {
  "id": {
   "title": "Cara Pakai Filter Blur Hemat pada Overlay",
   "desc": "Tata cara menambahkan blur ringan pada overlay Clincoo tanpa membuat scroll lag.",
   "content": "<p class=\"mb-4\">filter: blur(20px) pada overlay besar memaksa GPU bekerja berat saat scroll.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Batasi radius dan area</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pakai blur(4px) dan hanya pada overlay kecil, atau pakai backdrop-filter dengan dukungan cek. Hindari pada elemen yang bergerak.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji performa</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir saat overlay terbuka. FPS tidak boleh turun drastis. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The filter CSS property applies graphical effects like blur or color shift to an element.",
   "source2": "web.dev — Rendering performance",
   "source2Url": "https://web.dev/articles/rendering-performance",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use a Lightweight Filter Blur on Overlays",
   "desc": "How to add a light blur on Clincoo overlays without causing scroll lag.",
   "content": "<p class=\"mb-4\">filter: blur(20px) on a large overlay forces the GPU to work hard during scroll.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Limit the radius and area</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> use blur(4px) and only on small overlays, or use backdrop-filter with a support check. Avoid it on moving elements.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test performance</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll while the overlay is open. FPS should not drop sharply. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — filter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
   "sourceSnippet": "The filter CSS property applies graphical effects like blur or color shift to an element.",
   "source2": "web.dev — Rendering performance",
   "source2Url": "https://web.dev/articles/rendering-performance",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "transition-scale-bukan-width",
 "langs": {
  "id": {
   "title": "Cara Skala Tombol dengan transform, Bukan width",
   "desc": "Tata cara membesarkan tombol Clincoo saat hover tanpa memicu layout.",
   "content": "<p class=\"mb-4\">Mengubah width pada hover memaksa layout ulang seluruh baris.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai scale</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set transform: scale(1.05) pada :hover. Itu berjalan di compositor.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jaga teks tetap jelas</h2><p class=\"mb-4\">Scale kecil agar teks tidak blur. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — transform",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
   "sourceSnippet": "The transform property allows you to scale an element without affecting layout.",
   "source2": "web.dev — Animations",
   "source2Url": "https://web.dev/articles/animations-guide",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Scale a Button with transform, Not width",
   "desc": "How to enlarge a Clincoo button on hover without triggering layout.",
   "content": "<p class=\"mb-4\">Changing width on hover forces a layout reflow of the whole row.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use scale</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set transform: scale(1.05) on :hover. That runs on the compositor.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep text clear</h2><p class=\"mb-4\">Use a small scale so text does not blur. Test in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — transform",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
   "sourceSnippet": "The transform property allows you to scale an element without affecting layout.",
   "source2": "web.dev — Animations",
   "source2Url": "https://web.dev/articles/animations-guide",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "transition-ease-in-out-untuk-modal",
 "langs": {
  "id": {
   "title": "Cara Pilih ease-in-out untuk Modal",
   "desc": "Tata cara membuat modal Clincoo masuk dan keluar dengan perasaan alami.",
   "content": "<p class=\"mb-4\">ease-in terasa lambat di awal, ease-out cepat di awal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">ease-in-out untuk dialog</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pakai ease-in-out 200ms untuk opacity modal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan rasa</h2><p class=\"mb-4\">Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka dan tutup modal. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — transition-timing-function",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function",
   "sourceSnippet": "ease-in-out starts slow, speeds up, then slows down.",
   "source2": "MDN — transition",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Choose ease-in-out for Modals",
   "desc": "How to make Clincoo modals enter and leave with a natural feel.",
   "content": "<p class=\"mb-4\">ease-in feels slow at the start, ease-out fast at the start.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">ease-in-out for dialogs</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> use ease-in-out 200ms for modal opacity.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare the feel</h2><p class=\"mb-4\">Test in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open and close the modal. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — transition-timing-function",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function",
   "sourceSnippet": "ease-in-out starts slow, speeds up, then slows down.",
   "source2": "MDN — transition",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "transition-prefers-reduced-motion-transisi-kompleks",
 "langs": {
  "id": {
   "title": "Cara Kurangi Transisi Kompleks saat Reduced Motion",
   "desc": "Tata cara menyederhanakan animasi Clincoo ketika pengguna meminta gerak minimal.",
   "content": "<p class=\"mb-4\">Transisi panjang atau multi-properti bisa mengganggu pengguna reduced motion.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sederhanakan ke opacity</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> di dalam @media (prefers-reduced-motion: reduce) ganti ke transition: opacity 100ms, hilangkan transform.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji pengaturan sistem</h2><p class=\"mb-4\">Aktifkan reduced motion di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — prefers-reduced-motion",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
   "sourceSnippet": "Users can request the system to minimize non-essential motion.",
   "source2": "WCAG — Animation from Interactions",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Reduce Complex Transitions for Reduced Motion",
   "desc": "How to simplify Clincoo animations when the user requests minimal motion.",
   "content": "<p class=\"mb-4\">Long or multi-property transitions can bother reduced-motion users.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simplify to opacity</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> inside @media (prefers-reduced-motion: reduce) switch to transition: opacity 100ms, drop transform.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test system settings</h2><p class=\"mb-4\">Enable reduced motion in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — prefers-reduced-motion",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
   "sourceSnippet": "Users can request the system to minimize non-essential motion.",
   "source2": "WCAG — Animation from Interactions",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "transition-debug-devtools-animations",
 "langs": {
  "id": {
   "title": "Cara Debug Transisi yang Macet di DevTools",
   "desc": "Tata cara memakai panel Animations untuk melihat transisi Clincoo yang tidak jalan.",
   "content": "<p class=\"mb-4\">Transisi tidak muncul bisa karena properti salah atau duration 0.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buka panel Animations</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka DevTools > Animations, trigger hover, lihat timeline. Jika kosong, properti tidak berubah atau tidak didukung.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Periksa computed</h2><p class=\"mb-4\">Lihat nilai akhir di Computed. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Animations",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/animations",
   "sourceSnippet": "The Animations panel inspects and modifies animations and transitions.",
   "source2": "MDN — transition",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug a Stuck Transition in DevTools",
   "desc": "How to use the Animations panel to see why a Clincoo transition does not run.",
   "content": "<p class=\"mb-4\">A transition that does not appear can be a wrong property or duration 0.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Open the Animations panel</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open DevTools > Animations, trigger hover, watch the timeline. If empty, the property does not change or is unsupported.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check computed</h2><p class=\"mb-4\">Look at the final value in Computed. Test in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Animations",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/animations",
   "sourceSnippet": "The Animations panel inspects and modifies animations and transitions.",
   "source2": "MDN — transition",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
];
  extra.forEach(function (item) {
    if (!list.some(function (x) { return x.id === item.id; })) list.push(item);
  });
})();
