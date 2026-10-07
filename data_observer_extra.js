// Clincoo Docs — tambah 1 artikel Observer (8 Oktober 2026, 01:00 WIB)
// Clincoo Docs — tambah 5 artikel Observer (7 Oktober 2026, 22:00 WIB)
// Clincoo Docs — tambah 5 artikel Observer (7 Oktober 2026, 21:00 WIB)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["observer"]) {
    window.countryDataFiles["observer"] = { "names": { "id": "Observer", "en": "Observer" }, "articles": [] };
  }
  var list = window.countryDataFiles["observer"].articles;
  var extra = [
{
 "id": "observer-putuskan-pengamat-setelah-sekali",
 "langs": {
  "id": {
   "title": "Cara Putuskan Observer Setelah Sekali Terlihat",
   "desc": "Tata cara memanggil unobserve dan disconnect supaya Intersection Observer tidak terus berjalan setelah tugas selesai.",
   "content": "<p class=\"mb-4\">Observer yang dibiarkan hidup terus memanggil callback saat pengguna menggulir. Setelah gambar atau animasi sekali jalan selesai, pengamat itu hanya membuang kerja di main thread.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lepas target, lalu putuskan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan instance di variabel. Saat <code>entry.isIntersecting</code> pertama, kerjakan tugas, panggil <code>observer.unobserve(entry.target)</code>, lalu <code>observer.disconnect()</code> jika tidak ada target lain. Jangan buat observer baru di dalam callback.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek sisa target</h2><p class=\"mb-4\">Kalau satu observer memantau banyak kartu, hitung target yang belum selesai. Putuskan hanya saat hitungan nol. Uji di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dan catat polanya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — IntersectionObserver.disconnect",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/disconnect",
   "sourceSnippet": "The disconnect() method stops the IntersectionObserver object from observing any target.",
   "source2": "MDN — IntersectionObserver.unobserve",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/unobserve",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Disconnect an Observer After One Intersection",
   "desc": "How to call unobserve and disconnect so an Intersection Observer stops after its job is done.",
   "content": "<p class=\"mb-4\">An observer left running keeps firing while the user scrolls. After a one-shot image or animation finishes, that watcher only wastes main-thread work.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Unobserve, then disconnect</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> keep the instance in a variable. On the first <code>entry.isIntersecting</code>, do the job, call <code>observer.unobserve(entry.target)</code>, then <code>observer.disconnect()</code> if no other target remains. Do not create a new observer inside the callback.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Count remaining targets</h2><p class=\"mb-4\">If one observer watches many cards, count unfinished targets. Disconnect only when the count is zero. Check the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview and record the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — IntersectionObserver.disconnect",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/disconnect",
   "sourceSnippet": "The disconnect() method stops the IntersectionObserver object from observing any target.",
   "source2": "MDN — IntersectionObserver.unobserve",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/unobserve",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "observer-tandai-bagian-aktif-di-nav",
 "langs": {
  "id": {
   "title": "Cara Tandai Bagian Aktif di Nav dengan Intersection Observer",
   "desc": "Tata cara menyalakan tautan nav saat bagian halaman masuk viewport tanpa listener scroll.",
   "content": "<p class=\"mb-4\">Menandai bagian aktif dengan <code>scroll</code> menghitung offset tiap frame. Di halaman panjang Clincoo itu mudah salah saat tinggi header berubah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Amati setiap section</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri <code>id</code> pada tiap <code>section</code> dan tautan nav yang <code>href</code>-nya sama. Buat satu observer dengan <code>rootMargin: \"-40% 0px -50% 0px\"</code> supaya bagian di tengah layar yang menang. Pada callback, ambil entry dengan <code>isIntersecting</code> lalu tambah kelas aktif pada tautan yang cocok.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu kelas aktif saja</h2><p class=\"mb-4\">Hapus kelas aktif dari semua tautan sebelum menambah yang baru. Jangan amati nav-nya sendiri. Cek di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> lalu simpan catatan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Intersection Observer API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",
   "sourceSnippet": "Intersection Observer can report which observed sections currently intersect a root.",
   "source2": "web.dev — Intersection Observer",
   "source2Url": "https://web.dev/articles/intersectionobserver-v2",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Mark the Active Nav Section with Intersection Observer",
   "desc": "How to highlight the nav link when a page section enters the viewport without a scroll listener.",
   "content": "<p class=\"mb-4\">Marking the active section with a <code>scroll</code> listener recalculates offsets every frame. On a long Clincoo page that breaks when the header height changes.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Observe each section</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> give each <code>section</code> an <code>id</code> and a nav link with the same <code>href</code>. Create one observer with <code>rootMargin: \"-40% 0px -50% 0px\"</code> so the section near the middle wins. In the callback, take the intersecting entry and add the active class to the matching link.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep a single active class</h2><p class=\"mb-4\">Remove the active class from every link before adding the new one. Do not observe the nav itself. Check <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> and keep the note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Intersection Observer API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",
   "sourceSnippet": "Intersection Observer can report which observed sections currently intersect a root.",
   "source2": "web.dev — Intersection Observer",
   "source2Url": "https://web.dev/articles/intersectionobserver-v2",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "observer-ukur-tinggi-kartu-resize",
 "langs": {
  "id": {
   "title": "Cara Ukur Tinggi Kartu dengan ResizeObserver",
   "desc": "Tata cara membaca contentRect kartu saat teks atau gambar mengubah tinggi, tanpa mengukur di setiap scroll.",
   "content": "<p class=\"mb-4\">Mengukur <code>offsetHeight</code> di dalam loop layout memaksa reflow. Kartu Clincoo yang tingginya mengikuti gambar butuh sinyal ukuran, bukan polling.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Amati kartu, baca contentRect</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat <code>new ResizeObserver</code> dan <code>observe</code> tiap kartu. Dari entry ambil <code>contentRect.height</code>, bulatkan, lalu tulis ke custom property <code>--card-h</code> hanya jika nilainya berubah. Jangan tulis style inline tiap callback kalau angkanya sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Putuskan saat kartu dilepas</h2><p class=\"mb-4\">Panggil <code>unobserve</code> saat kartu dihapus dari DOM supaya tidak menahan node. Cadangkan tinggi minimum di CSS agar tidak loncat. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dan tulis polanya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ResizeObserver",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver",
   "sourceSnippet": "The ResizeObserver interface reports changes to the dimensions of an Element.",
   "source2": "MDN — ResizeObserverEntry.contentRect",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentRect",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Measure Card Height with ResizeObserver",
   "desc": "How to read a card contentRect when text or images change its height, without measuring on every scroll.",
   "content": "<p class=\"mb-4\">Reading <code>offsetHeight</code> inside a layout loop forces reflow. A Clincoo card whose height follows an image needs a size signal, not polling.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Observe the card and read contentRect</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create a <code>ResizeObserver</code> and <code>observe</code> each card. From the entry read <code>contentRect.height</code>, round it, and write <code>--card-h</code> only when the value changed. Do not set an inline style on every callback if the number is the same.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Unobserve when the card leaves</h2><p class=\"mb-4\">Call <code>unobserve</code> when the card is removed so it does not retain the node. Keep a CSS min-height so the layout does not jump. Check <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> and write the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ResizeObserver",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver",
   "sourceSnippet": "The ResizeObserver interface reports changes to the dimensions of an Element.",
   "source2": "MDN — ResizeObserverEntry.contentRect",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentRect",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "observer-amati-node-baru-mutation",
 "langs": {
  "id": {
   "title": "Cara Amati Node Baru dengan MutationObserver",
   "desc": "Tata cara mendeteksi elemen yang disisipkan ke daftar Clincoo tanpa memindai seluruh DOM tiap detik.",
   "content": "<p class=\"mb-4\">Daftar yang diisi ulang dari data sering menyisipkan node setelah skrip pertama jalan. Memindai <code>querySelectorAll</code> dengan timer melewatkan atau mengulang kerja.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Amati childList pada wadah</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> amati wadah daftar dengan <code>childList: true</code> dan <code>subtree: true</code> hanya jika item bersarang. Di callback, loop <code>mutation.addedNodes</code>, abaikan node teks, lalu pasang perilaku pada <code>ELEMENT_NODE</code> yang baru. Jangan amati <code>document.body</code> kalau wadahnya sudah jelas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Putuskan setelah daftar selesai</h2><p class=\"mb-4\">Kalau sisipan hanya sekali, panggil <code>disconnect</code> setelah batch selesai. Filter <code>nodeType</code> supaya komentar tidak ikut. Cek di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dan simpan langkah di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — MutationObserver",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver",
   "sourceSnippet": "MutationObserver can watch a target for childList changes and report added nodes.",
   "source2": "MDN — MutationRecord",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Watch New Nodes with MutationObserver",
   "desc": "How to detect elements inserted into a Clincoo list without scanning the whole DOM every second.",
   "content": "<p class=\"mb-4\">A list refilled from data often inserts nodes after the first script ran. Scanning with <code>querySelectorAll</code> on a timer either misses them or repeats work.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Watch childList on the container</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> observe the list container with <code>childList: true</code> and <code>subtree: true</code> only if items nest. In the callback, loop <code>mutation.addedNodes</code>, skip text nodes, and attach behavior to new <code>ELEMENT_NODE</code>s. Do not observe <code>document.body</code> when the container is known.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Disconnect after the batch</h2><p class=\"mb-4\">If insertion happens once, call <code>disconnect</code> after the batch. Filter <code>nodeType</code> so comments are ignored. Check <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> and save the steps on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — MutationObserver",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver",
   "sourceSnippet": "MutationObserver can watch a target for childList changes and report added nodes.",
   "source2": "MDN — MutationRecord",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "observer-pilih-threshold-rasio-terlihat",
 "langs": {
  "id": {
   "title": "Cara Pilih Threshold Rasio Terlihat di Intersection Observer",
   "desc": "Tata cara memakai threshold dan intersectionRatio supaya callback jalan saat bagian benar-benar terlihat, bukan hanya menyentuh tepi.",
   "content": "<p class=\"mb-4\">Threshold default 0 menembak saat satu piksel masuk viewport. Animasi atau analitik ringan di Clincoo sering perlu rasio yang lebih jelas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set angka, baca rasionya</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat observer dengan <code>threshold: [0, 0.5, 1]</code>. Di callback baca <code>entry.intersectionRatio</code>. Jalankan aksi utama hanya jika rasio minimal 0,5 dan <code>isIntersecting</code> benar. Jangan samakan rasio 0 dengan tersembunyi total tanpa cek <code>isIntersecting</code>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sedikit ambang, bukan puluhan</h2><p class=\"mb-4\">Setiap angka di array menambah laporan. Tiga ambang cukup untuk masuk, setengah, dan penuh. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> lalu catat pilihan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — IntersectionObserver.thresholds",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds",
   "sourceSnippet": "Thresholds are ratios of intersection area over total bounding area, from 0.0 to 1.0.",
   "source2": "MDN — IntersectionObserverEntry.intersectionRatio",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRatio",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Choose a Visibility Ratio Threshold",
   "desc": "How to use threshold and intersectionRatio so the callback runs when a section is really visible, not merely touching the edge.",
   "content": "<p class=\"mb-4\">The default threshold of 0 fires when one pixel enters the viewport. A light animation or analytics ping on Clincoo often needs a clearer ratio.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set numbers and read the ratio</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create an observer with <code>threshold: [0, 0.5, 1]</code>. In the callback read <code>entry.intersectionRatio</code>. Run the main action only if the ratio is at least 0.5 and <code>isIntersecting</code> is true. Do not treat ratio 0 as fully hidden without checking <code>isIntersecting</code>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Few thresholds, not dozens</h2><p class=\"mb-4\">Each number in the array adds a report. Three thresholds cover enter, half, and full. Check <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> and record the choice on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — IntersectionObserver.thresholds",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds",
   "sourceSnippet": "Thresholds are ratios of intersection area over total bounding area, from 0.0 to 1.0.",
   "source2": "MDN — IntersectionObserverEntry.intersectionRatio",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRatio",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "observer-root-margin-prefetch-sebelum-terlihat",
 "langs": {
  "id": {
   "title": "Cara Prefetch Bagian dengan rootMargin Sebelum Masuk Layar",
   "desc": "Tata cara memakai rootMargin di Intersection Observer agar bagian berat Clincoo mulai dimuat sedikit sebelum terlihat.",
   "content": "<p class=\\\"mb-4\\\">Memuat gambar atau blok besar tepat saat masuk viewport sering telat satu frame dan membuat halaman terasa tersendat.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Beri margin positif di root</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> buat IntersectionObserver dengan rootMargin 200px 0px. Saat elemen masih 200px di bawah lipatan, callback sudah jalan dan Anda bisa menyetel src atau menyisipkan markup. Jangan pakai margin besar di halaman pendek, karena semuanya langsung dianggap terlihat.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Uji jarak prefetch</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> gulir pelan dan lihat panel console: log harus muncul sebelum elemen menyentuh tepi layar. Catat nilai rootMargin di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a> supaya prefetch tidak memakan kuota di koneksi lambat.</p>",
   "source": "MDN — IntersectionObserver.rootMargin",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin",
   "sourceSnippet": "rootMargin grows or shrinks the root box used for intersection checks, similar to a CSS margin.",
   "source2": "MDN — Intersection Observer API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Prefetch a Section with rootMargin Before It Enters the Screen",
   "desc": "How to use rootMargin on Intersection Observer so a heavy Clincoo section starts loading just before it is visible.",
   "content": "<p class=\\\"mb-4\\\">Loading a large image or block exactly when it enters the viewport is often one frame late and makes the page feel stuck.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Add a positive root margin</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> create an IntersectionObserver with rootMargin 200px 0px. While the element is still 200px below the fold, the callback already runs and you can set src or insert markup. Do not use a huge margin on a short page, or everything counts as visible at once.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Test the prefetch distance</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> scroll slowly and watch the console: the log should appear before the element touches the screen edge. Record the rootMargin value on <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a> so prefetch does not burn data on a slow connection.</p>",
   "source": "MDN — IntersectionObserver.rootMargin",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin",
   "sourceSnippet": "rootMargin grows or shrinks the root box used for intersection checks, similar to a CSS margin.",
   "source2": "MDN — Intersection Observer API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "observer-set-root-ke-kontainer-scroll",
 "langs": {
  "id": {
   "title": "Cara Set Root Observer ke Kontainer Scroll, Bukan Viewport",
   "desc": "Tata cara mengisi opsi root agar Intersection Observer mengikuti panel yang bergulir di dalam halaman Clincoo.",
   "content": "<p class=\\\"mb-4\\\">Daftar di dalam panel samping tidak memakai scroll jendela. Observer default hanya melihat viewport, jadi callback salah waktu.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Arahkan root ke elemen scroll</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> beri opsi root: elemen panel yang overflow auto. Pastikan elemen target adalah keturunan root. Jika root null, browser memakai viewport. Jangan mengamati elemen yang posisinya fixed terhadap jendela lalu mengharapkan root panel.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Uji scroll panel saja</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> gulir panel dalam tanpa menggeser halaman. Entri harus muncul saat item masuk panel, bukan saat masuk jendela. Catat id root di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — IntersectionObserver.root",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/root",
   "sourceSnippet": "The root is the ancestor element whose viewport is used for the intersection. Null means the browser viewport.",
   "source2": "MDN — Intersection Observer API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set an Observer Root to a Scroll Container, Not the Viewport",
   "desc": "How to set the root option so Intersection Observer follows a scrolling panel inside a Clincoo page.",
   "content": "<p class=\\\"mb-4\\\">A list inside a side panel does not use window scroll. The default observer only watches the viewport, so the callback fires at the wrong time.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Point root at the scrolling element</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> set root to the panel element that has overflow auto. The target must be a descendant of root. If root is null, the browser uses the viewport. Do not observe a fixed element and expect a panel root to matter.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Test panel scroll only</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> scroll the inner panel without moving the page. The entry should fire when the item enters the panel, not the window. Record the root id on <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — IntersectionObserver.root",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/root",
   "sourceSnippet": "The root is the ancestor element whose viewport is used for the intersection. Null means the browser viewport.",
   "source2": "MDN — Intersection Observer API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "observer-hindari-loop-mutation-observer",
 "langs": {
  "id": {
   "title": "Cara Hindari Loop MutationObserver Saat Mengubah DOM",
   "desc": "Tata cara menahan callback MutationObserver supaya ubahan yang Anda buat sendiri tidak memicu observasi tanpa henti.",
   "content": "<p class=\\\"mb-4\\\">Callback yang menulis class atau teks pada node yang sama akan memicu mutasi baru, lalu callback lagi, sampai halaman berat.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Putuskan sebentar atau saring mutasi</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> panggil observer.disconnect sebelum mengubah DOM, lalu observe lagi setelah selesai. Atau abaikan mutasi yang atributnya Anda set sendiri. Batasi childList dan attributes ke subtree yang benar-benar perlu, jangan amati document.body tanpa filter.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Uji tidak ada lonjakan callback</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> lakukan satu aksi, lalu hitung log di console. Harus satu gelombang, bukan puluhan per detik. Catat atribut yang diamati di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — MutationObserver",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver",
   "sourceSnippet": "MutationObserver invokes a callback when the DOM changes. Changes made inside the callback can be observed again.",
   "source2": "MDN — MutationObserver.disconnect",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/disconnect",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid a MutationObserver Loop When You Change the DOM",
   "desc": "How to guard a MutationObserver callback so changes you make yourself do not trigger endless observation.",
   "content": "<p class=\\\"mb-4\\\">A callback that writes a class or text on the same node triggers a new mutation, then another callback, until the page gets heavy.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Disconnect briefly or filter mutations</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> call observer.disconnect before changing the DOM, then observe again when finished. Or ignore mutations whose attribute you set yourself. Limit childList and attributes to the subtree you actually need; do not watch document.body with no filter.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Test that callbacks do not spike</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> do one action, then count console logs. There should be one burst, not dozens per second. Record the observed attributes on <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — MutationObserver",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver",
   "sourceSnippet": "MutationObserver invokes a callback when the DOM changes. Changes made inside the callback can be observed again.",
   "source2": "MDN — MutationObserver.disconnect",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/disconnect",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "observer-jeda-saat-tab-tersembunyi",
 "langs": {
  "id": {
   "title": "Cara Jeda Observer Saat Tab Browser Tersembunyi",
   "desc": "Tata cara menghentikan Intersection Observer saat document.hidden agar pekerjaan Clincoo tidak jalan di tab latar.",
   "content": "<p class=\\\"mb-4\\\">Observer tetap memanggil callback di tab yang tidak aktif jika elemen dianggap berpotongan, dan itu membuang baterai.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Dengar visibilitychange</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> dengarkan visibilitychange. Jika document.hidden, panggil disconnect. Saat visible lagi, observe target yang sama. Jangan mengandalkan requestAnimationFrame di tab tersembunyi; browser sudah menundanya, tetapi observer tidak selalu ikut.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Uji ganti tab</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> buka halaman, pindah tab lain sepuluh detik, lalu kembali. Log tidak boleh bertambah saat tersembunyi. Catat hasilnya di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Page Visibility API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API",
   "sourceSnippet": "The Page Visibility API lets you know when a document is visible or hidden via the visibilitychange event.",
   "source2": "MDN — Document.hidden",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Document/hidden",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Pause an Observer When the Browser Tab Is Hidden",
   "desc": "How to stop an Intersection Observer when document.hidden so Clincoo work does not run in a background tab.",
   "content": "<p class=\\\"mb-4\\\">An observer can still call back in an inactive tab if an element counts as intersecting, and that wastes battery.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Listen for visibilitychange</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> listen for visibilitychange. If document.hidden, call disconnect. When visible again, observe the same targets. Do not rely on requestAnimationFrame in a hidden tab; the browser already pauses it, but an observer does not always follow.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Test a tab switch</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> open the page, switch away for ten seconds, then return. Logs must not increase while hidden. Record the result on <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Page Visibility API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API",
   "sourceSnippet": "The Page Visibility API lets you know when a document is visible or hidden via the visibilitychange event.",
   "source2": "MDN — Document.hidden",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Document/hidden",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "observer-cek-dukungan-dan-fallback",
 "langs": {
  "id": {
   "title": "Cara Cek Dukungan Observer dan Siapkan Fallback",
   "desc": "Tata cara mendeteksi IntersectionObserver sebelum dipakai, lalu memuat konten langsung jika browser Clincoo tidak mendukung.",
   "content": "<p class=\\\"mb-4\\\">Memanggil IntersectionObserver di browser lama melempar ReferenceError dan gambar tidak pernah terpasang.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Cek window sebelum new</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> bungkus dengan if ('IntersectionObserver' in window). Jika tidak ada, set src gambar langsung dan tampilkan bagian yang ditunda. Jangan hanya menangkap error di callback; konstruktornya yang gagal lebih dulu.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Uji fallback</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> simulakan dengan menonaktifkan API di console, atau buka pratinjau di browser lama. Konten harus tetap ada, hanya tanpa tunda. Catat cabang fallback di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — IntersectionObserver",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver",
   "sourceSnippet": "IntersectionObserver is available in modern browsers. Feature-detect it on window before constructing one.",
   "source2": "MDN — Feature detection",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Check Observer Support and Prepare a Fallback",
   "desc": "How to detect IntersectionObserver before using it, then load content immediately if the Clincoo browser does not support it.",
   "content": "<p class=\\\"mb-4\\\">Calling IntersectionObserver in an old browser throws ReferenceError and the image never attaches.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Check window before new</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> wrap with if ('IntersectionObserver' in window). If it is missing, set image src immediately and show the deferred section. Do not only catch errors in the callback; the constructor fails first.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Test the fallback</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> simulate by disabling the API in the console, or open the preview in an old browser. Content must still appear, just without the delay. Record the fallback branch on <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — IntersectionObserver",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver",
   "sourceSnippet": "IntersectionObserver is available in modern browsers. Feature-detect it on window before constructing one.",
   "source2": "MDN — Feature detection",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
,
{
 "id": "observer-baca-isintersecting",
 "langs": {
  "id": {
   "title": "Cara Baca isIntersecting, Bukan Hanya Rasio",
   "desc": "Tata cara memakai isIntersecting saat lazy-load di pratinjau Clincoo supaya callback tidak jalan terlalu awal.",
   "content": "<p class=\"mb-4\">intersectionRatio 0 bisa muncul saat elemen baru saja keluar, dan rasio kecil bisa muncul saat baru menyentuh rootMargin. Keputusan muat gambar sebaiknya memakai isIntersecting.</p><p class=\"mb-4\">Di callback IntersectionObserver, lewati entry yang isIntersecting-nya false. Baru kemudian unobserve jika tugasnya sekali jalan, supaya observer tidak menahan elemen yang sudah selesai.</p><p class=\"mb-4\">rootMargin yang besar, misalnya 200px, membuat isIntersecting true sebelum elemen masuk layar. Itu cocok untuk prefetch, bukan untuk animasi yang harus terlihat.</p><p class=\"mb-4\">Catat boundingClientRect dan rootBounds saat debug di konsol editor.clincoo.buzz. Jika rootBounds null, root-nya viewport. Jika ada, root-nya kontainer scroll.</p><p class=\"mb-4\">Selalu sediakan fallback bila IntersectionObserver tidak ada: muat gambar segera. Jangan biarkan konten kosong hanya karena API pengamat tidak didukung.</p>",
   "source": "MDN — IntersectionObserverEntry",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry",
   "sourceSnippet": "isIntersecting is a boolean that is true if the target element intersects the root.",
   "source2": "MDN — Intersection Observer API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Read isIntersecting, Not Only the Ratio",
   "desc": "How to use isIntersecting for lazy-load in a Clincoo preview so the callback does not run too early.",
   "content": "<p class=\"mb-4\">An intersectionRatio of 0 can appear when an element has just left, and a tiny ratio can appear when it only touches rootMargin. Load decisions should use isIntersecting.</p><p class=\"mb-4\">In the IntersectionObserver callback, skip entries whose isIntersecting is false. Then unobserve if the job runs once, so the observer does not keep a finished element.</p><p class=\"mb-4\">A large rootMargin, such as 200px, makes isIntersecting true before the element enters the screen. That fits prefetch, not an animation that must be visible.</p><p class=\"mb-4\">Log boundingClientRect and rootBounds when debugging in the editor.clincoo.buzz console. If rootBounds is null, the root is the viewport. If it exists, the root is a scroll container.</p><p class=\"mb-4\">Always provide a fallback when IntersectionObserver is missing: load the image immediately. Do not leave content blank only because the observer API is unsupported.</p>",
   "source": "MDN — IntersectionObserverEntry",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry",
   "sourceSnippet": "isIntersecting is a boolean that is true if the target element intersects the root.",
   "source2": "MDN — Intersection Observer API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",
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
