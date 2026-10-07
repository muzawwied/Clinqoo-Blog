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
}
];
  extra.forEach(function (item) {
    if (!list.some(function (x) { return x.id === item.id; })) list.push(item);
  });
})();
