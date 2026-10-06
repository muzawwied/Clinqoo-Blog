// Clincoo Docs — kategori Motion (6 Oktober 2026, 21:00 WIB — 4 artikel)
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
]
};
