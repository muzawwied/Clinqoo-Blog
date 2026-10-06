// Clincoo Docs — kategori Motion (6 Oktober 2026, 22:00 WIB) — 9 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["motion"] = {
 "names": { "id": "Motion", "en": "Motion" },
 "articles": [
{
 "id": "motion-hormati-prefers-reduced-motion",
 "langs": {
  "id": {
   "title": "Cara Hormati prefers-reduced-motion",
   "desc": "Tata cara mematikan animasi Clincoo bila pengunjung meminta gerakan dikurangi.",
   "content": "<p class=\"mb-4\">Animasi masuk yang halus di laptop bisa mengganggu bagi yang sensitif terhadap gerakan. Browser sudah memberi sinyal prefers-reduced-motion.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bungkus animasi dengan media query</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan transisi pada kelas biasa. Di dalam @media (prefers-reduced-motion: reduce) set animation none dan transition none pada komponen yang bergerak.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> aktifkan reduce motion di sistem, lalu muat ulang. Kartu tidak boleh meluncur. Catat kelas yang masih bergerak di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — prefers-reduced-motion",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
   "sourceSnippet": "prefers-reduced-motion indicates the user asked the system to minimize non-essential motion.",
   "source2": "WCAG — Animation from Interactions",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Honor prefers-reduced-motion",
   "desc": "How to turn off Clincoo motion when a visitor asks for reduced animation.",
   "content": "<p class=\"mb-4\">A subtle entrance animation on a laptop can bother people who are sensitive to motion. Browsers already expose prefers-reduced-motion.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Wrap animation in a media query</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> keep transitions on the normal class. Inside @media (prefers-reduced-motion: reduce) set animation none and transition none on moving components.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in the preview</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> enable reduce motion in the system, then reload. Cards should not slide in. Note any class that still moves on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — prefers-reduced-motion",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
   "sourceSnippet": "prefers-reduced-motion indicates the user asked the system to minimize non-essential motion.",
   "source2": "WCAG — Animation from Interactions",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "motion-jangan-animasi-tak-terhingga",
 "langs": {
  "id": {
   "title": "Cara Hentikan Animasi yang Tidak Pernah Berhenti",
   "desc": "Tata cara membatasi loop animasi Clincoo supaya tidak berjalan terus di latar belakang.",
   "content": "<p class=\"mb-4\">Spinner yang berputar terus setelah data selesai tetap memakai CPU dan mengganggu perhatian.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri kondisi selesai</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jalankan animasi hanya saat aria-busy true atau kelas is-loading ada. Hapus kelas itu setelah fetch selesai.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan loop dekorasi</h2><p class=\"mb-4\">Ikon hias tidak perlu animation-iteration-count infinite. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> biarkan halaman diam selama 10 detik. Jika ada elemen masih bergerak, catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> dan matikan loop-nya.</p>",
   "source": "MDN — animation-iteration-count",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count",
   "sourceSnippet": "animation-iteration-count sets how many times an animation cycle runs.",
   "source2": "MDN — prefers-reduced-motion",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Stop an Animation That Never Ends",
   "desc": "How to limit Clincoo animation loops so they do not run forever in the background.",
   "content": "<p class=\"mb-4\">A spinner that keeps rotating after the data arrives still uses CPU and pulls attention.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Give it a finished state</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> run the animation only while aria-busy is true or an is-loading class is present. Remove that class when the fetch finishes.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not loop decoration</h2><p class=\"mb-4\">Decorative icons do not need animation-iteration-count infinite. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> leave the page idle for 10 seconds. If something still moves, note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> and turn the loop off.</p>",
   "source": "MDN — animation-iteration-count",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count",
   "sourceSnippet": "animation-iteration-count sets how many times an animation cycle runs.",
   "source2": "MDN — prefers-reduced-motion",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "motion-transisi-jarak-pendek",
 "langs": {
  "id": {
   "title": "Cara Batasi Transisi pada Jarak Pendek",
   "desc": "Tata cara memakai transisi Clincoo yang singkat, bukan menggeser elemen melintasi layar.",
   "content": "<p class=\"mb-4\">Transisi 600ms pada margin atau left membuat layout dihitung ulang dan terasa lambat di ponsel.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Animasikan opacity dan transform</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ganti transisi left dengan transform translate. Durasi 150–200ms cukup untuk menu. Jangan transisikan width kartu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Matikan saat reduce</h2><p class=\"mb-4\">Gabungkan dengan prefers-reduced-motion. Uji buka-tutup menu di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Rasanya harus instan bagi yang mengurangi gerakan. Simpan durasi final di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS transitions",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions",
   "sourceSnippet": "Transitions animate a change between two states over a set duration.",
   "source2": "web.dev — Animations guide",
   "source2Url": "https://web.dev/learn/css/animations",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Keep Transitions on a Short Distance",
   "desc": "How to use short Clincoo transitions instead of sliding an element across the screen.",
   "content": "<p class=\"mb-4\">A 600ms transition on margin or left recalculates layout and feels slow on a phone.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Animate opacity and transform</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> replace a left transition with transform translate. A duration of 150–200ms is enough for a menu. Do not transition a card width.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Disable it when reduced</h2><p class=\"mb-4\">Combine it with prefers-reduced-motion. Test opening and closing the menu in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. It should feel instant for people who reduce motion. Save the final duration on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS transitions",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions",
   "sourceSnippet": "Transitions animate a change between two states over a set duration.",
   "source2": "web.dev — Animations guide",
   "source2Url": "https://web.dev/learn/css/animations",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "motion-jeda-animasi-di-tab-tersembunyi",
 "langs": {
  "id": {
   "title": "Cara Jeda Animasi saat Tab Tersembunyi",
   "desc": "Tata cara menghentikan animasi Clincoo ketika tab tidak terlihat.",
   "content": "<p class=\"mb-4\">Animasi yang terus berjalan di tab belakang membuang baterai tanpa ada yang melihat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Dengarkan visibilitychange</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> dengarkan document.visibilitychange. Jika document.hidden, tambah kelas is-paused yang men-set animation-play-state paused.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lanjut saat tab aktif</h2><p class=\"mb-4\">Saat visible lagi, hapus kelas itu. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan berpindah tab 5 detik. Gerakan harus berhenti, lalu lanjut. Catat nama kelas di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Page Visibility API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API",
   "sourceSnippet": "The Page Visibility API tells you when a document is hidden or visible.",
   "source2": "MDN — animation-play-state",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Pause Animation while the Tab Is Hidden",
   "desc": "How to stop Clincoo animation when the tab is not visible.",
   "content": "<p class=\"mb-4\">Animation that keeps running in a background tab wastes battery with nobody watching.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Listen for visibilitychange</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> listen for document.visibilitychange. If document.hidden, add an is-paused class that sets animation-play-state to paused.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Resume when the tab is active</h2><p class=\"mb-4\">When it is visible again, remove that class. Test in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> by switching tabs for 5 seconds. Motion should stop, then resume. Note the class name on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Page Visibility API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API",
   "sourceSnippet": "The Page Visibility API tells you when a document is hidden or visible.",
   "source2": "MDN — animation-play-state",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
,
{
 "id": "motion-animasikan-transform-dan-opacity",
 "langs": {
  "id": {
   "title": "Cara Animasi Transform dan Opacity, Bukan Width",
   "desc": "Tata cara menggerakkan kartu Clincoo dengan transform dan opacity agar layout tidak dihitung ulang.",
   "content": "<p class=\"mb-4\">Mengubah width atau top memaksa browser menghitung ulang layout. Transform dan opacity biasanya cukup untuk kartu yang masuk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti pergeseran layout</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ganti animasi left atau margin dengan transform: translateY(8px) menuju translateY(0), plus opacity 0 ke 1. Jangan animasikan height daftar yang sedang terbuka.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka panel Performance lalu rekam saat kartu masuk. Tidak boleh ada baris Layout panjang tiap frame. Catat properti yang masih hijau di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS transforms",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transforms",
   "sourceSnippet": "CSS transforms let you rotate, scale, and translate an element without affecting normal document flow.",
   "source2": "web.dev — Animations",
   "source2Url": "https://web.dev/articles/animations-guide",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Animate Transform and Opacity, Not Width",
   "desc": "How to move Clincoo cards with transform and opacity so layout is not recalculated.",
   "content": "<p class=\"mb-4\">Animating width or top forces the browser to recalculate layout. Transform and opacity are usually enough for an entering card.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Replace layout shifts</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> replace left or margin animation with transform: translateY(8px) to translateY(0), plus opacity from 0 to 1. Do not animate the height of a list that is opening.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the Performance panel and record the card entrance. There should be no long Layout bars every frame. Note any property that still paints green on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS transforms",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transforms",
   "sourceSnippet": "CSS transforms let you rotate, scale, and translate an element without affecting normal document flow.",
   "source2": "web.dev — Animations",
   "source2Url": "https://web.dev/articles/animations-guide",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "motion-hindari-will-change-selalu-aktif",
 "langs": {
  "id": {
   "title": "Cara Jangan Biarkan will-change Selalu Aktif",
   "desc": "Tata cara memakai will-change hanya saat animasi Clincoo benar-benar jalan.",
   "content": "<p class=\"mb-4\">will-change: transform pada setiap kartu membuat lapisan ekstra meski tidak ada yang bergerak. Petunjuk itu untuk sesaat, bukan gaya default.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang hanya sebelum gerak</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan will-change pada kelas is-animating, lalu hapus kelas itu di animationend. Jangan tulis will-change di reset global.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji jumlah lapisan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka Layers saat halaman diam. Kartu statis tidak perlu layer sendiri. Catat pemilih yang masih menahan will-change di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — will-change",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/will-change",
   "sourceSnippet": "will-change hints that an element will change, but keeping it on too many elements wastes memory.",
   "source2": "web.dev — Animations guide",
   "source2Url": "https://web.dev/articles/animations-guide",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid Leaving will-change Always On",
   "desc": "How to use will-change only while a Clincoo animation is actually running.",
   "content": "<p class=\"mb-4\">will-change: transform on every card creates extra layers even when nothing moves. The hint is temporary, not a default style.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add it only before motion</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add will-change on an is-animating class, then remove that class on animationend. Do not put will-change in a global reset.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check layer count</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open Layers while the page is idle. Static cards should not own a layer. Note selectors that still hold will-change on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — will-change",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/will-change",
   "sourceSnippet": "will-change hints that an element will change, but keeping it on too many elements wastes memory.",
   "source2": "web.dev — Animations guide",
   "source2Url": "https://web.dev/articles/animations-guide",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "motion-token-durasi-dan-easing",
 "langs": {
  "id": {
   "title": "Cara Satukan Durasi dan Easing Animasi",
   "desc": "Tata cara menyimpan durasi dan kurva animasi Clincoo di variabel CSS supaya gerakan terasa satu sistem.",
   "content": "<p class=\"mb-4\">Satu tombol 150ms dan kartu 700ms terasa acak. Durasi dan easing sebaiknya token, bukan angka yang disalin.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan token di :root</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set --motion-fast: 150ms, --motion-base: 220ms, dan --ease-out: cubic-bezier(0.2, 0.8, 0.2, 1). Pakai var() di transition. Hover singkat, panel memakai base.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Samakan di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bandingkan menu dan tombol. Keduanya harus selesai sebelum 300ms. Catat nilai token di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using CSS custom properties",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "sourceSnippet": "Custom properties are entities defined by authors that contain specific values to be reused throughout a document.",
   "source2": "MDN — easing-function",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Share Duration and Easing Tokens",
   "desc": "How to store Clincoo duration and easing in CSS variables so motion feels like one system.",
   "content": "<p class=\"mb-4\">A 150ms button next to a 700ms card feels random. Duration and easing should be tokens, not copied numbers.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Store tokens on :root</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set --motion-fast: 150ms, --motion-base: 220ms, and --ease-out: cubic-bezier(0.2, 0.8, 0.2, 1). Use var() in transition. Short hovers use fast; panels use base.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare in the preview</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> compare the menu and the button. Both should finish before 300ms. Note the token values on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using CSS custom properties",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "sourceSnippet": "Custom properties are entities defined by authors that contain specific values to be reused throughout a document.",
   "source2": "MDN — easing-function",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "motion-transition-untuk-hover-bukan-keyframes",
 "langs": {
  "id": {
   "title": "Cara Pakai Transition untuk Hover, Bukan Keyframes",
   "desc": "Tata cara memakai transition pada hover Clincoo supaya keadaan balik mulus tanpa keyframes.",
   "content": "<p class=\"mb-4\">Hover yang memakai animation keyframes sering macet di frame terakhir saat kursor pergi. Transition menginterpolasi dua keadaan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis transition di keadaan dasar</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set transition: transform 180ms ease pada tombol, lalu :hover dan :focus-visible hanya mengubah transform: scale(1.02). Jangan buat @keyframes untuk hover.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji masuk dan keluar</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> arahkan kursor lalu cepat keluar. Tombol harus kembali, bukan tersangkut. Catat pemilih hover di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS transitions",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions",
   "sourceSnippet": "CSS transitions let you change property values smoothly over a given duration.",
   "source2": "MDN — @keyframes",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Transition for Hover, Not Keyframes",
   "desc": "How to use transition on Clincoo hover so the state returns smoothly without keyframes.",
   "content": "<p class=\"mb-4\">Hover that uses animation keyframes often sticks on the last frame when the pointer leaves. Transition interpolates two states.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Put transition on the base state</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set transition: transform 180ms ease on the button, then change only transform: scale(1.02) in :hover and :focus-visible. Do not build @keyframes for hover.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test enter and leave</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> hover, then leave quickly. The button should return, not stick. Note the hover selector on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS transitions",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions",
   "sourceSnippet": "CSS transitions let you change property values smoothly over a given duration.",
   "source2": "MDN — @keyframes",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "motion-matchmedia-reduced-motion-di-javascript",
 "langs": {
  "id": {
   "title": "Cara Baca prefers-reduced-motion di JavaScript",
   "desc": "Tata cara menonaktifkan animasi kanvas atau rAF Clincoo bila pengunjung meminta gerakan dikurangi.",
   "content": "<p class=\"mb-4\">Media query CSS tidak menghentikan requestAnimationFrame atau kanvas. Gerakan di JavaScript harus membaca sinyal yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek matchMedia sebelum loop</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat const reduce = window.matchMedia(\"(prefers-reduced-motion: reduce)\"). Jika reduce.matches, gambar keadaan diam dan jangan panggil requestAnimationFrame. Dengarkan change agar loop berhenti saat pengaturan berubah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji kedua mode</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> nyalakan reduce motion, muat ulang, lalu matikan lagi. Kanvas harus diam dulu, baru bergerak. Catat nama listener di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — prefers-reduced-motion",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
   "sourceSnippet": "The prefers-reduced-motion media feature is used to detect if a user has requested the system minimize non-essential motion.",
   "source2": "MDN — Window.matchMedia",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Read prefers-reduced-motion in JavaScript",
   "desc": "How to disable Clincoo canvas or rAF motion when a visitor asks for reduced motion.",
   "content": "<p class=\"mb-4\">A CSS media query does not stop requestAnimationFrame or canvas. JavaScript motion has to read the same signal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check matchMedia before the loop</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create const reduce = window.matchMedia(\"(prefers-reduced-motion: reduce)\"). If reduce.matches, draw a still state and do not call requestAnimationFrame. Listen for change so the loop stops when the setting changes.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test both modes</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> turn reduce motion on, reload, then turn it off. The canvas should be still first, then move. Note the listener name on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — prefers-reduced-motion",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
   "sourceSnippet": "The prefers-reduced-motion media feature is used to detect if a user has requested the system minimize non-essential motion.",
   "source2": "MDN — Window.matchMedia",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
