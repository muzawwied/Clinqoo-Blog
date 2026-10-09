// Clincoo Docs — tambah 1 artikel Transisi (10 Oktober 2026, 04:00 WIB) sampai full 12
// Clincoo Docs — tambah artikel Transition (9 Oktober 2026, 22:00 WIB)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["transition"]) {
    window.countryDataFiles["transition"] = { "names": { "id": "Transisi", "en": "Transition" }, "articles": [] };
  }
  var list = window.countryDataFiles["transition"].articles;
  var extra = [
{
 "id": "transition-opacity-visibility-bukan-display",
 "langs": {
  "id": {
   "title": "Cara Munculkan Panel dengan Opacity dan Visibility",
   "desc": "Tata cara menampilkan dropdown Clincoo tanpa melompat, karena display none tidak bisa ditransisikan.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">display none memutus transisi</h2><p class=\"mb-4\">Mengganti display dari none ke block langsung memunculkan panel. Tidak ada frame antara. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tahan panel dengan opacity: 0 dan visibility: hidden, lalu ke opacity: 1 dan visibility: visible.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tunda visibility saat menutup</h2><p class=\"mb-4\">Saat menutup, transition: opacity 160ms ease, visibility 0s linear 160ms. Visibility baru hidden setelah opacity selesai, jadi klik tidak tembus di tengah animasi. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka menu akun lalu tutup: panel harus memudar, bukan lenyap. Catat pola ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — visibility",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/visibility",
   "sourceSnippet": "The visibility CSS property shows or hides an element without changing the document layout.",
   "source2": "MDN — opacity",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/opacity",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Reveal a Panel with Opacity and Visibility",
   "desc": "How to show a Clincoo dropdown without a jump, because display none cannot be transitioned.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">display none cuts the transition</h2><p class=\"mb-4\">Switching display from none to block shows the panel immediately. There is no in-between frame. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> keep the panel at opacity: 0 and visibility: hidden, then move to opacity: 1 and visibility: visible.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Delay visibility when closing</h2><p class=\"mb-4\">On close, use transition: opacity 160ms ease, visibility 0s linear 160ms. Visibility becomes hidden only after opacity finishes, so clicks do not pass through mid-animation. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the account menu and close it: the panel should fade, not vanish. Keep this pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — visibility",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/visibility",
   "sourceSnippet": "The visibility CSS property shows or hides an element without changing the document layout.",
   "source2": "MDN — opacity",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/opacity",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "transition-discrete-display-overlay",
 "langs": {
  "id": {
   "title": "Cara Transisikan display dengan allow-discrete",
   "desc": "Tata cara memakai transition-behavior agar overlay Clincoo bisa memudar sekaligus melepas display.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Properti diskret butuh izin</h2><p class=\"mb-4\">display, overlay, dan content-visibility bersifat diskret. Browser tidak menginterpolasinya kecuali transition-behavior: allow-discrete. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis transition: opacity 180ms ease, display 180ms allow-discrete, overlay 180ms allow-discrete pada dialog ringan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Mulai dari @starting-style</h2><p class=\"mb-4\">Elemen yang baru masuk pohon tidak punya nilai awal untuk ditransisikan. Tambah @starting-style { .overlay { opacity: 0 } } supaya frame pertama transparan. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka panel bantuan: harus memudar masuk, dan setelah tutup tidak lagi menangkap klik. Simpan cuplikan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — transition-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-behavior",
   "sourceSnippet": "transition-behavior specifies whether transitions will be started for discrete properties.",
   "source2": "MDN — @starting-style",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Transition display with allow-discrete",
   "desc": "How to use transition-behavior so a Clincoo overlay can fade and drop display together.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Discrete properties need permission</h2><p class=\"mb-4\">display, overlay, and content-visibility are discrete. The browser does not interpolate them unless transition-behavior: allow-discrete is set. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write transition: opacity 180ms ease, display 180ms allow-discrete, overlay 180ms allow-discrete on a light dialog.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Start from @starting-style</h2><p class=\"mb-4\">An element that just entered the tree has no previous value to transition from. Add @starting-style { .overlay { opacity: 0 } } so the first frame is transparent. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the help panel: it should fade in, and after close it must not capture clicks. Keep the snippet on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — transition-behavior",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-behavior",
   "sourceSnippet": "transition-behavior specifies whether transitions will be started for discrete properties.",
   "source2": "MDN — @starting-style",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "transition-delay-pendek-pada-hover",
 "langs": {
  "id": {
   "title": "Cara Batasi transition-delay pada Hover",
   "desc": "Tata cara menunda tooltip Clincoo sebentar tanpa membuat tombol terasa telat merespons.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Delay untuk tooltip, bukan untuk tombol</h2><p class=\"mb-4\">transition-delay 300ms pada warna tombol membuat klik terasa tertahan. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri delay hanya pada tooltip: transition-delay: 0s pada warna, dan 200ms pada opacity tooltip. Saat hover hilang, delay balik ke 0s supaya tooltip cepat pergi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di perangkat lambat</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> arahkan kursor ke ikon, lalu geser ke ikon sebelah. Tooltip tidak boleh antre. Jika dua tooltip muncul bersamaan, delay terlalu panjang. Catat nilai yang lolos di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — transition-delay",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay",
   "sourceSnippet": "transition-delay specifies the duration to wait before starting a transition effect.",
   "source2": "MDN — transition",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Keep transition-delay Short on Hover",
   "desc": "How to delay a Clincoo tooltip briefly without making buttons feel late to respond.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Delay the tooltip, not the button</h2><p class=\"mb-4\">A 300ms transition-delay on button color makes the click feel held back. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> delay only the tooltip: transition-delay: 0s on color, and 200ms on tooltip opacity. When hover ends, set the delay back to 0s so the tooltip leaves quickly.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check on a slow pass</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> point at an icon, then move to the next icon. Tooltips must not queue. If two tooltips appear together, the delay is too long. Record the value that passed on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — transition-delay",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay",
   "sourceSnippet": "transition-delay specifies the duration to wait before starting a transition effect.",
   "source2": "MDN — transition",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "transition-tinggi-dengan-grid-0fr",
 "langs": {
  "id": {
   "title": "Cara Animasi Tinggi dengan grid-template-rows",
   "desc": "Tata cara membuka accordion Clincoo tanpa mengukur height di JavaScript.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">height auto tidak bisa diinterpolasi</h2><p class=\"mb-4\">Transisi dari height: 0 ke height: auto biasanya diam lalu meloncat. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bungkus isi dengan grid dan transisikan grid-template-rows dari 0fr ke 1fr. Anak tetap overflow: hidden.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan animasikan padding luar</h2><p class=\"mb-4\">Padding pada grid item ikut mendorong layout. Pindahkan padding ke anak di dalam track. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka FAQ: tinggi harus tumbuh halus dan teks tidak terpotong di akhir. Simpan pola di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — grid-template-rows",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows",
   "sourceSnippet": "grid-template-rows defines the line names and track sizing functions of the grid rows.",
   "source2": "MDN — overflow",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Animate Height with grid-template-rows",
   "desc": "How to open a Clincoo accordion without measuring height in JavaScript.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">height auto cannot be interpolated</h2><p class=\"mb-4\">A transition from height: 0 to height: auto usually sits still, then jumps. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> wrap the content in a grid and transition grid-template-rows from 0fr to 1fr. Keep the child overflow: hidden.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not animate outer padding</h2><p class=\"mb-4\">Padding on the grid item also pushes layout. Move padding to the child inside the track. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open an FAQ: height should grow smoothly and text must not clip at the end. Keep the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — grid-template-rows",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows",
   "sourceSnippet": "grid-template-rows defines the line names and track sizing functions of the grid rows.",
   "source2": "MDN — overflow",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "transition-will-change-hanya-saat-aktif",
 "langs": {
  "id": {
   "title": "Cara Pakai will-change Hanya Saat Transisi Aktif",
   "desc": "Tata cara menyiapkan layer komposit Clincoo tanpa meninggalkan will-change permanen.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">will-change permanen boros memori</h2><p class=\"mb-4\">will-change: transform pada setiap kartu membuat layer yang tidak perlu. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan will-change hanya pada pointerenter, lalu hapus di transitionend. Properti yang ditransisikan tetap transform atau opacity, bukan width.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek layer di DevTools</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka Rendering lalu Layer borders. Setelah hover selesai, border layer ekstra harus hilang. Jika tetap ada, listener transitionend tidak terpanggil. Catat hasilnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — will-change",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/will-change",
   "sourceSnippet": "The will-change CSS property hints to browsers how an element is expected to change.",
   "source2": "web.dev — Rendering performance",
   "source2Url": "https://web.dev/articles/rendering-performance",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use will-change Only While a Transition Runs",
   "desc": "How to prepare a Clincoo composite layer without leaving will-change on permanently.",
   "content": "<h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Permanent will-change wastes memory</h2><p class=\"mb-4\">will-change: transform on every card creates layers you do not need. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add will-change only on pointerenter, then remove it on transitionend. The transitioned property stays transform or opacity, not width.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check layers in DevTools</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open Rendering, then Layer borders. After hover ends, the extra layer border should disappear. If it stays, the transitionend listener did not run. Record the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — will-change",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/will-change",
   "sourceSnippet": "The will-change CSS property hints to browsers how an element is expected to change.",
   "source2": "web.dev — Rendering performance",
   "source2Url": "https://web.dev/articles/rendering-performance",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
,
{
 "id": "transition-balik-saat-hover-terputus",
 "langs": {
  "id": {
   "title": "Cara Biarkan Transisi Berjalan Mundur Saat Hover Terputus",
   "desc": "Tata cara supaya animasi hover Clincoo tidak macet di tengah ketika kursor cepat pergi.",
   "content": "<p class=\"mb-4\">Tata cara supaya animasi hover Clincoo tidak macet di tengah ketika kursor cepat pergi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan kunci di keyframe yang tidak bisa mundur</h2><p class=\"mb-4\">Transisi CSS berjalan mundur dari nilai saat ini jika properti yang sama ditransisikan di kedua arah. Animasi keyframes sering macet karena tidak punya jalan balik. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis transition: transform 160ms ease, opacity 160ms ease pada tombol, bukan animation: pop 200ms forwards.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji kursor yang lewat cepat</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> geser kursor melewati beberapa kartu tanpa berhenti. Kartu harus kembali ke skala semula, bukan tertahan di 1.02. Jika macet, cek animation-fill-mode: forwards. Catat yang lolos di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using CSS transitions",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions",
   "sourceSnippet": "When the transition property is set, the browser animates from the current value back when the state changes again.",
   "source2": "MDN — animation-fill-mode",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Let a Transition Reverse When Hover Breaks Off",
   "desc": "How to keep a Clincoo hover animation from sticking halfway when the pointer leaves early.",
   "content": "<p class=\"mb-4\">How to keep a Clincoo hover animation from sticking halfway when the pointer leaves early.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not lock a keyframe that cannot reverse</h2><p class=\"mb-4\">A CSS transition reverses from the current value when the same property is transitioned both ways. A keyframes animation often sticks because it has no return path. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write transition: transform 160ms ease, opacity 160ms ease on the button, not animation: pop 200ms forwards.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test a pointer that passes quickly</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> sweep the pointer across several cards without pausing. Cards must return to the original scale, not stay at 1.02. If one sticks, check animation-fill-mode: forwards. Note what passed on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using CSS transitions",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions",
   "sourceSnippet": "When the transition property is set, the browser animates from the current value back when the state changes again.",
   "source2": "MDN — animation-fill-mode",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
,
{
 "id": "transition-debug-panel-animasi-devtools",
 "langs": {
  "id": {
   "title": "Cara Debug Transisi yang Tidak Jalan di Panel Animations",
   "desc": "Tata cara mencari properti yang tidak ikut transisi di Clincoo lewat panel Animations DevTools.",
   "content": "<p class=\"mb-4\">Transisi yang diam sering bukan karena duration salah, melainkan properti yang berubah tidak ada di daftar transition.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Rekam di panel Animations</h2><p class=\"mb-4\">Buka pratinjau di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>, lalu DevTools, panel Animations. Picu hover atau kelas is-open. Jika tidak ada batang animasi, browser tidak melihat perubahan properti yang ditransisikan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cocokkan nama properti</h2><p class=\"mb-4\">Di Computed, bandingkan nilai sebelum dan sesudah. transition: opacity 160ms tidak akan jalan jika yang berubah hanya visibility. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> catat nama properti yang benar-benar berubah, lalu tulis ulang transition hanya untuk nama itu. Simpan contoh yang lolos di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><p class=\"mb-4\">Ulangi dengan prefers-reduced-motion menyala. Panel harus kosong jika transisi memang dimatikan, bukan karena selector kalah.</p>",
   "source": "Chrome DevTools — Inspect animations",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/animations",
   "sourceSnippet": "The Animations panel records CSS transitions and animations so you can inspect timing when a change does not play.",
   "source2": "MDN — CSS transitions",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug a Transition That Never Runs in the Animations Panel",
   "desc": "How to find a Clincoo property that is not transitioning by using the DevTools Animations panel.",
   "content": "<p class=\"mb-4\">A transition that stays still is often not a bad duration. The property that changed is missing from the transition list.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record in the Animations panel</h2><p class=\"mb-4\">Open the preview in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>, then DevTools, Animations. Trigger hover or the is-open class. If no animation bar appears, the browser sees no change on a transitioned property.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match the property name</h2><p class=\"mb-4\">In Computed, compare the value before and after. transition: opacity 160ms will not run if only visibility changed. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> note the property that actually changed, then rewrite transition for that name only. Save a passing example on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><p class=\"mb-4\">Repeat with prefers-reduced-motion on. The panel should be empty because transitions are disabled, not because a selector lost.</p>",
   "source": "Chrome DevTools — Inspect animations",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/animations",
   "sourceSnippet": "The Animations panel records CSS transitions and animations so you can inspect timing when a change does not play.",
   "source2": "MDN — CSS transitions",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
  ];
  extra.forEach(function (item) {
    if (!list.some(function (a) { return a.id === item.id; })) list.push(item);
  });
})();
