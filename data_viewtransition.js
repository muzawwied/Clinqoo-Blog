// Clincoo Docs — tambah 5 artikel View Transition (8 Oktober 2026, 21:00 WIB)
// Clincoo Docs — kategori View Transition (8 Oktober 2026, 19:00 WIB) — 1 artikel
// Clincoo Docs — tambah 5 artikel View Transition (8 Oktober 2026, 20:00 WIB)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["viewtransition"] = {
 "names": { "id": "View Transition", "en": "View Transition" },
 "articles": [
{
 "id": "viewtransition-nama-kartu-halaman",
 "langs": {
  "id": {
   "title": "Cara Namai Kartu agar View Transition Tidak Tertukar",
   "desc": "Tata cara memberi view-transition-name unik pada kartu Clincoo supaya animasi ganti halaman tidak menempel ke elemen yang salah.",
   "content": "<p class=\"mb-4\">Nama transisi yang sama pada dua kartu membuat gambar hero terbang ke kartu lain saat navigasi. Animasi terlihat rusak, bukan mulus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri nama unik</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set <code>view-transition-name</code> hanya pada elemen yang benar-benar berpindah, misalnya <code>hero-harga</code>. Jangan pakai nama sama di daftar. Bungkus perubahan dengan <code>document.startViewTransition</code> setelah DOM tujuan siap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hormati reduced motion</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> uji ganti halaman dengan dan tanpa prefers-reduced-motion. Jika reduce, lewati animasi. Catat nama yang dipakai di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — View Transition API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API",
   "sourceSnippet": "The View Transition API provides a mechanism for easily creating animated transitions between different DOM states.",
   "source2": "MDN — view-transition-name",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/view-transition-name",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Name a Card so a View Transition Does Not Cross",
   "desc": "How to give a unique view-transition-name to a Clincoo card so a page change does not stick to the wrong element.",
   "content": "<p class=\"mb-4\">The same transition name on two cards makes the hero image fly to another card during navigation. The animation looks broken, not smooth.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Give a unique name</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set <code>view-transition-name</code> only on the element that really moves, for example <code>hero-harga</code>. Do not reuse the name in a list. Wrap the change with <code>document.startViewTransition</code> after the destination DOM is ready.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Respect reduced motion</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> test the page change with and without prefers-reduced-motion. If reduce, skip the animation. Record the names you used on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — View Transition API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API",
   "sourceSnippet": "The View Transition API provides a mechanism for easily creating animated transitions between different DOM states.",
   "source2": "MDN — view-transition-name",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/view-transition-name",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
,
{
 "id": "viewtransition-aktifkan-cross-document",
 "langs": {
  "id": {
   "title": "Cara Aktifkan View Transition Antar Halaman",
   "desc": "Tata cara menyalakan transisi antar dokumen di Clincoo dengan @view-transition agar navigasi multipage tidak meloncat mentah.",
   "content": "<p class=\"mb-4\">Tanpa opt-in, ganti halaman di situs multipage Clincoo tetap potongan keras. Pengunjung kehilangan konteks kartu yang baru diklik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Nyalakan di kedua dokumen</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan at-rule yang sama di halaman asal dan tujuan: <code>@view-transition { navigation: auto; }</code>. Taruh di stylesheet bersama, bukan hanya di satu file percobaan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji same-origin</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> klik tautan internal biasa, bukan <code>target=_blank</code>. Transisi hanya jalan untuk navigasi same-origin. Catat browser yang mendukung di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> dan sediakan tampilan statis bila API tidak ada.</p>",
   "source": "MDN — Cross-document view transitions",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API/Using#cross-document_view_transitions",
   "sourceSnippet": "Cross-document view transitions are triggered by navigation between documents of the same origin.",
   "source2": "MDN — @view-transition",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@view-transition",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Enable a Cross-Document View Transition",
   "desc": "How to turn on cross-document transitions in Clincoo with @view-transition so multipage navigation does not jump raw.",
   "content": "<p class=\"mb-4\">Without an opt-in, page changes on a multipage Clincoo site stay a hard cut. Visitors lose the card they just clicked.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Enable it on both documents</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add the same at-rule on the source and destination pages: <code>@view-transition { navigation: auto; }</code>. Put it in the shared stylesheet, not only in one experiment file.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test same-origin</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> click a normal internal link, not <code>target=_blank</code>. The transition only runs for same-origin navigation. Note supporting browsers on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> and keep a static layout when the API is missing.</p>",
   "source": "MDN — Cross-document view transitions",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API/Using#cross-document_view_transitions",
   "sourceSnippet": "Cross-document view transitions are triggered by navigation between documents of the same origin.",
   "source2": "MDN — @view-transition",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@view-transition",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "viewtransition-cegah-kedip-root",
 "langs": {
  "id": {
   "title": "Cara Cegah Kedip Root saat View Transition",
   "desc": "Tata cara menenangkan snapshot root Clincoo supaya header dan latar tidak berkedip saat transisi halaman.",
   "content": "<p class=\"mb-4\">Snapshot root menangkap seluruh viewport. Header, latar, dan footer ikut beranimasi lalu berkedip meski yang berubah hanya kartu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kunci bagian yang diam</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri <code>view-transition-name</code> unik pada header dan footer yang sama di kedua halaman. Elemen bernama yang cocok tidak ikut cross-fade root.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pendekkan animasi root</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> set <code>::view-transition-old(root)</code> dan <code>::view-transition-new(root)</code> ke durasi pendek, atau <code>animation: none</code> bila hanya kartu yang perlu bergerak. Cek di panel Animations, lalu catat hasilnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — View transition pseudo-elements",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API",
   "sourceSnippet": "The ::view-transition-old and ::view-transition-new pseudo-elements represent the old and new states of a named transition.",
   "source2": "Chrome Developers — View transitions",
   "source2Url": "https://developer.chrome.com/docs/web-platform/view-transitions",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Stop the Root Flash in a View Transition",
   "desc": "How to calm the Clincoo root snapshot so the header and background do not flash during a page transition.",
   "content": "<p class=\"mb-4\">The root snapshot captures the whole viewport. Header, background, and footer animate and flash even when only a card changed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pin the parts that stay</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> give a unique <code>view-transition-name</code> to the header and footer that match on both pages. Named elements that match are kept out of the root cross-fade.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Shorten the root animation</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> set <code>::view-transition-old(root)</code> and <code>::view-transition-new(root)</code> to a short duration, or <code>animation: none</code> if only the card should move. Check the Animations panel, then record the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — View transition pseudo-elements",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API",
   "sourceSnippet": "The ::view-transition-old and ::view-transition-new pseudo-elements represent the old and new states of a named transition.",
   "source2": "Chrome Developers — View transitions",
   "source2Url": "https://developer.chrome.com/docs/web-platform/view-transitions",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "viewtransition-types-maju-mundur",
 "langs": {
  "id": {
   "title": "Cara Bedakan Transisi Maju dan Mundur",
   "desc": "Tata cara memakai view-transition types di Clincoo agar navigasi maju dan tombol kembali tidak memakai animasi yang sama.",
   "content": "<p class=\"mb-4\">Satu animasi untuk semua arah membingungkan. Maju terasa seperti mundur, dan tombol kembali tidak memberi petunjuk arah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri tipe pada navigasi</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> dengarkan <code>pagereveal</code>. Jika <code>navigation.activation.navigationType</code> adalah <code>traverse</code> dan arahnya kembali, panggil <code>event.viewTransition.types.add(\"back\")</code>. Untuk klik maju, tambahkan tipe <code>forward</code>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasangkan CSS</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gaya <code>:active-view-transition-type(back)</code> geser dari kiri, tipe forward dari kanan. Hormati <code>prefers-reduced-motion</code>. Simpan contohnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ViewTransition.types",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/ViewTransition/types",
   "sourceSnippet": "The types property of a ViewTransition is a set of types that can customize the transition.",
   "source2": "MDN — pagereveal event",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/pagereveal_event",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Tell Forward and Back View Transitions Apart",
   "desc": "How to use view-transition types in Clincoo so forward navigation and the back button do not share the same animation.",
   "content": "<p class=\"mb-4\">One animation for every direction is confusing. Forward feels like back, and the back button gives no directional cue.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tag the navigation</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> listen for <code>pagereveal</code>. If <code>navigation.activation.navigationType</code> is <code>traverse</code> and the direction is back, call <code>event.viewTransition.types.add(\"back\")</code>. For a forward click, add the type <code>forward</code>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pair it with CSS</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> style <code>:active-view-transition-type(back)</code> to slide from the left, and forward from the right. Respect <code>prefers-reduced-motion</code>. Keep the example on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ViewTransition.types",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/ViewTransition/types",
   "sourceSnippet": "The types property of a ViewTransition is a set of types that can customize the transition.",
   "source2": "MDN — pagereveal event",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/pagereveal_event",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "viewtransition-pertahankan-posisi-scroll",
 "langs": {
  "id": {
   "title": "Cara Jaga Posisi Scroll saat View Transition",
   "desc": "Tata cara agar transisi halaman Clincoo tidak melompat ke atas sebelum snapshot selesai.",
   "content": "<p class=\"mb-4\">Browser menggulir ke atas lebih dulu, lalu snapshot mengambil layar yang sudah bergeser. Animasi terlihat patah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tunda scroll sampai transisi siap</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> untuk same-document, panggil <code>document.startViewTransition</code> lalu ubah DOM di dalam callback. Jangan set <code>scrollTop</code> sebelum callback selesai. Untuk cross-document, andalkan pemulihan scroll bawaan dan hindari skrip yang memaksa <code>scrollTo(0,0)</code> di <code>DOMContentLoaded</code>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji kembali dan jangkar</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir ke tengah daftar, buka detail, lalu kembali. Posisi harus pulih. Tautan <code>#bagian</code> tetap boleh menggulir ke sasaran setelah transisi. Catat pengecualian di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — View Transition API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API",
   "sourceSnippet": "startViewTransition captures the current state, then runs the callback that updates the DOM.",
   "source2": "MDN — History scroll restoration",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/History/scrollRestoration",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Keep Scroll Position During a View Transition",
   "desc": "How to keep a Clincoo page transition from jumping to the top before the snapshot finishes.",
   "content": "<p class=\"mb-4\">The browser scrolls to the top first, then the snapshot captures the already shifted screen. The animation looks broken.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Delay scroll until the transition is ready</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> for same-document, call <code>document.startViewTransition</code> and change the DOM inside the callback. Do not set <code>scrollTop</code> before the callback finishes. For cross-document, rely on built-in scroll restoration and avoid a script that forces <code>scrollTo(0,0)</code> on <code>DOMContentLoaded</code>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test back and anchors</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll to the middle of a list, open a detail, then go back. The position should restore. A <code>#section</code> link may still scroll to its target after the transition. Note exceptions on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — View Transition API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API",
   "sourceSnippet": "startViewTransition captures the current state, then runs the callback that updates the DOM.",
   "source2": "MDN — History scroll restoration",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/History/scrollRestoration",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "viewtransition-sesuaikan-pseudo-old-new",
 "langs": {
  "id": {
   "title": "Cara Sesuaikan Pseudo Old dan New",
   "desc": "Tata cara mengatur ::view-transition-old dan ::view-transition-new di Clincoo supaya elemen keluar dan masuk tidak bertumpuk kasar.",
   "content": "<p class=\"mb-4\">Default cross-fade menumpuk dua snapshot di tempat yang sama. Teks judul jadi dobel dan sulit dibaca selama animasi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pisahkan gerak keluar dan masuk</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> namai hanya judul atau gambar yang berpindah. Lalu gaya <code>::view-transition-old(judul)</code> dengan opacity turun, dan <code>::view-transition-new(judul)</code> dengan opacity naik plus sedikit translate. Jangan animasikan seluruh <code>root</code> bila teks panjang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jaga durasi dan akses</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> batasi durasi sekitar 200–300ms. Di dalam <code>prefers-reduced-motion: reduce</code> set animation none. Cuplikan CSS-nya layak disimpan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ::view-transition-old",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/::view-transition-old",
   "sourceSnippet": "The ::view-transition-old CSS pseudo-element represents the old view state of a view transition.",
   "source2": "MDN — ::view-transition-new",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::view-transition-new",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Style the Old and New View Transition Pseudos",
   "desc": "How to tune ::view-transition-old and ::view-transition-new in Clincoo so exiting and entering elements do not stack roughly.",
   "content": "<p class=\"mb-4\">The default cross-fade stacks two snapshots in the same place. The title text doubles and is hard to read during the animation.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Separate exit and enter motion</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> name only the title or image that moves. Then style <code>::view-transition-old(judul)</code> with fading opacity, and <code>::view-transition-new(judul)</code> with rising opacity plus a small translate. Do not animate the whole <code>root</code> when the text is long.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep duration and access</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> keep the duration around 200–300ms. Inside <code>prefers-reduced-motion: reduce</code> set animation to none. The CSS snippet belongs on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ::view-transition-old",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/::view-transition-old",
   "sourceSnippet": "The ::view-transition-old CSS pseudo-element represents the old view state of a view transition.",
   "source2": "MDN — ::view-transition-new",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::view-transition-new",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
,
{
 "id": "viewtransition-fallback-tanpa-dukungan",
 "langs": {
  "id": {
   "title": "Cara Siapkan Fallback jika View Transition Tidak Didukung",
   "desc": "Tata cara mengecek dukungan View Transition API di Clincoo dan tetap mengganti halaman bila browser belum siap.",
   "content": "<p class=\"mb-4\">Memanggil <code>document.startViewTransition</code> di browser lama melempar error dan navigasi Clincoo berhenti. Pengguna melihat halaman macet, bukan animasi yang gagal halus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek dulu, baru bungkus</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis cabang: jika <code>document.startViewTransition</code> ada, bungkus pembaruan DOM di dalamnya. Jika tidak, jalankan fungsi update yang sama langsung. Jangan duplikasi logika ganti halaman di dua tempat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dua browser</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka pratinjau di browser yang mendukung dan yang tidak. Keduanya harus sampai ke halaman tujuan. Catat hasilnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — View Transition API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API",
   "sourceSnippet": "The View Transition API provides a mechanism for easily creating animated transitions between different DOM states.",
   "source2": "MDN — Document.startViewTransition",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Document/startViewTransition",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Fall Back When View Transition Is Unsupported",
   "desc": "How to check View Transition API support in Clincoo and still change the page when the browser is not ready.",
   "content": "<p class=\"mb-4\">Calling <code>document.startViewTransition</code> in an old browser throws and Clincoo navigation stops. The user sees a stuck page, not a graceful failed animation.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check first, then wrap</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write a branch: if <code>document.startViewTransition</code> exists, wrap the DOM update inside it. If not, run the same update function directly. Do not duplicate the page-change logic in two places.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test two browsers</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the preview in a supporting browser and one that does not. Both must reach the destination page. Record the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — View Transition API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API",
   "sourceSnippet": "The View Transition API provides a mechanism for easily creating animated transitions between different DOM states.",
   "source2": "MDN — Document.startViewTransition",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Document/startViewTransition",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "viewtransition-class-bukan-nama-unik",
 "langs": {
  "id": {
   "title": "Cara Pakai view-transition-class untuk Grup Elemen",
   "desc": "Tata cara mengelompokkan elemen Clincoo dengan view-transition-class supaya animasi daftar tidak butuh nama unik tiap item.",
   "content": "<p class=\"mb-4\">Memberi <code>view-transition-name</code> unik ke setiap baris daftar cepat bentrok dan membuat snapshot salah. Animasi daftar Clincoo jadi silang antar kartu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kelompokkan dengan class</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set <code>view-transition-class: kartu</code> pada item yang animasinya sama. Nama unik tetap hanya untuk hero yang harus berpindah ke elemen tertentu. Seleksi pseudo dengan <code>::view-transition-group(.kartu)</code> untuk durasi bersama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan campur nama sama</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tambah dan hapus satu kartu, lalu cek panel Animations. Class boleh berulang, nama tidak. Simpan polanya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — view-transition-class",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/view-transition-class",
   "sourceSnippet": "The view-transition-class CSS property provides the selected elements with an identifying class for the view transition.",
   "source2": "MDN — View Transition API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use view-transition-class for a Group of Elements",
   "desc": "How to group Clincoo elements with view-transition-class so a list animation does not need a unique name per item.",
   "content": "<p class=\"mb-4\">Giving a unique <code>view-transition-name</code> to every list row quickly collides and captures the wrong snapshot. A Clincoo list animation crosses between cards.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Group with a class</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set <code>view-transition-class: kartu</code> on items that share an animation. Keep a unique name only for a hero that must move to a specific element. Select the pseudo with <code>::view-transition-group(.kartu)</code> for a shared duration.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not reuse the same name</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> add and remove one card, then check the Animations panel. A class may repeat; a name must not. Save the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — view-transition-class",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/view-transition-class",
   "sourceSnippet": "The view-transition-class CSS property provides the selected elements with an identifying class for the view transition.",
   "source2": "MDN — View Transition API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "viewtransition-batalkan-yang-berjalan",
 "langs": {
  "id": {
   "title": "Cara Batalkan View Transition yang Masih Berjalan",
   "desc": "Tata cara memanggil skipTransition di Clincoo supaya klik cepat tidak menumpuk animasi yang belum selesai.",
   "content": "<p class=\"mb-4\">Dua klik berturut-turut memulai transisi baru sebelum yang lama selesai. Snapshot menumpuk dan halaman Clincoo berkedip di tengah jalan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan objek transisi</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan hasil <code>startViewTransition</code>. Sebelum memulai yang baru, panggil <code>skipTransition()</code> pada yang masih aktif. Update DOM tetap jalan; hanya animasinya yang dilewati.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji klik beruntun</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> klik navigasi tiga kali cepat. Halaman akhir harus sesuai klik terakhir, tanpa antrian animasi. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ViewTransition.skipTransition",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/ViewTransition/skipTransition",
   "sourceSnippet": "The skipTransition() method of the ViewTransition interface skips the animation part of the view transition.",
   "source2": "MDN — ViewTransition",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/ViewTransition",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Skip a View Transition That Is Still Running",
   "desc": "How to call skipTransition in Clincoo so rapid clicks do not stack animations that have not finished.",
   "content": "<p class=\"mb-4\">Two clicks in a row start a new transition before the old one finishes. Snapshots stack and the Clincoo page flashes halfway through.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep the transition object</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> store the result of <code>startViewTransition</code>. Before starting a new one, call <code>skipTransition()</code> on the one that is still active. The DOM update still runs; only the animation is skipped.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test rapid clicks</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> click navigation three times quickly. The final page must match the last click, with no animation queue. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ViewTransition.skipTransition",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/ViewTransition/skipTransition",
   "sourceSnippet": "The skipTransition() method of the ViewTransition interface skips the animation part of the view transition.",
   "source2": "MDN — ViewTransition",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/ViewTransition",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "viewtransition-tunggu-dom-siap",
 "langs": {
  "id": {
   "title": "Cara Tunggu DOM Siap di Callback Update",
   "desc": "Tata cara meng-await pembaruan DOM di callback startViewTransition Clincoo supaya snapshot baru tidak diambil terlalu cepat.",
   "content": "<p class=\"mb-4\">Snapshot baru diambil saat callback update selesai. Jika fetch atau render belum beres, transisi Clincoo menangkap kerangka kosong lalu meloncat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kembalikan promise</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jadikan callback <code>async</code> dan <code>await</code> render tujuan sebelum fungsi kembali. Jangan panggil <code>startViewTransition</code> setelah DOM sudah berubah; ubah DOM di dalam callback.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tandai readyState</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> perlambat jaringan di DevTools. Gambar tujuan harus sudah ada saat animasi mulai. Tuliskan urutan await di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Document.startViewTransition",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Document/startViewTransition",
   "sourceSnippet": "The startViewTransition() method starts a new view transition and returns a ViewTransition object.",
   "source2": "MDN — ViewTransition.updateCallbackDone",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/ViewTransition/updateCallbackDone",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Wait Until the DOM Is Ready in the Update Callback",
   "desc": "How to await the DOM update in the Clincoo startViewTransition callback so the new snapshot is not taken too early.",
   "content": "<p class=\"mb-4\">The new snapshot is taken when the update callback finishes. If fetch or render is not done, the Clincoo transition captures an empty shell and then jumps.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Return a promise</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> make the callback <code>async</code> and <code>await</code> the destination render before the function returns. Do not call <code>startViewTransition</code> after the DOM has already changed; change the DOM inside the callback.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Mark readyState</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> throttle the network in DevTools. The destination image should already be present when the animation starts. Write the await order on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Document.startViewTransition",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Document/startViewTransition",
   "sourceSnippet": "The startViewTransition() method starts a new view transition and returns a ViewTransition object.",
   "source2": "MDN — ViewTransition.updateCallbackDone",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/ViewTransition/updateCallbackDone",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "viewtransition-durasi-dan-easing",
 "langs": {
  "id": {
   "title": "Cara Atur Durasi dan Easing View Transition",
   "desc": "Tata cara menimpa animasi ::view-transition-group di Clincoo supaya durasi pendek dan reduced motion tetap dihormati.",
   "content": "<p class=\"mb-4\">Durasi bawaan terasa lambat pada navigasi Clincoo yang sering. Pengguna menunggu animasi selesai sebelum bisa mengklik elemen tujuan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Timpa animasi group</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set <code>::view-transition-group(*)</code> ke <code>animation-duration: 180ms</code> dan <code>animation-timing-function: ease-out</code>. Jangan perpanjang di atas 300ms untuk pindah halaman. Di dalam <code>prefers-reduced-motion: reduce</code> set <code>animation: none</code>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur di DevTools</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka panel Animations dan catat durasi nyata. Bandingkan dengan setelan reduce. Simpan nilai final di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ::view-transition-group",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/::view-transition-group",
   "sourceSnippet": "The ::view-transition-group CSS pseudo-element represents a single view transition snapshot group.",
   "source2": "MDN — prefers-reduced-motion",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set View Transition Duration and Easing",
   "desc": "How to override the ::view-transition-group animation in Clincoo so the duration stays short and reduced motion is still respected.",
   "content": "<p class=\"mb-4\">The default duration feels slow on frequent Clincoo navigation. Users wait for the animation to finish before they can click the destination.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Override the group animation</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set <code>::view-transition-group(*)</code> to <code>animation-duration: 180ms</code> and <code>animation-timing-function: ease-out</code>. Do not stretch a page change past 300ms. Inside <code>prefers-reduced-motion: reduce</code> set <code>animation: none</code>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure in DevTools</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the Animations panel and note the real duration. Compare it with the reduce setting. Save the final value on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ::view-transition-group",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/::view-transition-group",
   "sourceSnippet": "The ::view-transition-group CSS pseudo-element represents a single view transition snapshot group.",
   "source2": "MDN — prefers-reduced-motion",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "viewtransition-hormati-reduced-motion",
 "langs": {
  "id": {
   "title": "Cara Hormati prefers-reduced-motion pada View Transition",
   "desc": "Tata cara mematikan atau memendekkan view transition saat pengguna meminta gerak dikurangi.",
   "content": "<p class=\"mb-4\">View transition memindahkan snapshot antar halaman. Bagi sebagian pengguna, gerak itu mengganggu. prefers-reduced-motion adalah isyarat yang harus dihormati.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pendekkan atau lewati animasi</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bungkus pemanggilan document.startViewTransition. Jika window.matchMedia('(prefers-reduced-motion: reduce)').matches, ubah DOM langsung tanpa transisi, atau set durasi ::view-transition-group(*) menjadi 0ms.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di DevTools</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka Rendering, aktifkan prefers-reduced-motion: reduce, lalu pindah halaman. Snapshot tidak boleh meluncur. Catat cabang ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya rilis berikutnya tidak menghapus cek media query.</p>",
   "source": "MDN — prefers-reduced-motion",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
   "sourceSnippet": "The prefers-reduced-motion media feature detects whether the user has requested the system minimize non-essential motion.",
   "source2": "MDN — View Transition API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Honor prefers-reduced-motion on View Transitions",
   "desc": "How to skip or shorten a view transition when the user asks for reduced motion.",
   "content": "<p class=\"mb-4\">A view transition moves snapshots between pages. For some people that motion is a problem. prefers-reduced-motion is the signal to honor.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Shorten or skip the animation</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> wrap the document.startViewTransition call. If window.matchMedia('(prefers-reduced-motion: reduce)').matches, update the DOM directly, or set ::view-transition-group(*) duration to 0ms.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in DevTools</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open Rendering, emulate prefers-reduced-motion: reduce, then change pages. The snapshot should not travel. Note this branch on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so a later release does not drop the media-query check.</p>",
   "source": "MDN — prefers-reduced-motion",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
   "sourceSnippet": "The prefers-reduced-motion media feature detects whether the user has requested the system minimize non-essential motion.",
   "source2": "MDN — View Transition API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
