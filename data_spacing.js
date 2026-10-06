// Clincoo Docs — kategori Spacing (7 Oktober 2026, WIB) — 5 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["spacing"] = {
 "names": { "id": "Spacing", "en": "Spacing" },
 "articles": [
{
 "id": "spacing-hindari-margin-collapse-antar-section",
 "langs": {
  "id":   {
   "title": "Cara Hindari Margin Collapse antar Section",
   "desc": "Tata cara menghentikan margin atas dan bawah section Clincoo yang saling menelan, supaya jarak vertikal tetap sesuai skala.",
   "content": "<p class=\"mb-4\">Dua section bertetangga sering tampil lebih rapat dari yang ditulis di stylesheet. Margin bawah 32px dan margin atas 32px tidak dijumlahkan menjadi 64px; browser mengambil yang terbesar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu sumber jarak di editor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bungkus tiap section dengan padding, atau beri parent display: flex; flex-direction: column; gap: 2rem. Flex gap tidak ikut aturan collapse. Jangan menumpuk margin-top dan margin-bottom pada elemen yang bersaudara.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ukur jarak dengan DevTools: kotak margin harus satu, bukan dua yang saling menelan. Catat keputusan (gap atau padding) di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya halaman lain tidak mencampur kedua pola.</p>",
   "source": "MDN — Mastering margin collapsing",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing",
   "sourceSnippet": "Adjacent vertical margins collapse into a single margin equal to the larger of the two.",
   "source2": "MDN — margin",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Avoid Margin Collapse Between Sections",
   "desc": "How to stop adjacent Clincoo section margins from collapsing so vertical rhythm stays on the spacing scale.",
   "content": "<p class=\"mb-4\">Two neighboring sections often look tighter than the stylesheet suggests. A 32px bottom margin and a 32px top margin do not add up to 64px; the browser keeps the larger one.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One source of space in the editor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> give each section padding, or set the parent to display: flex; flex-direction: column; gap: 2rem. Flex gap does not collapse. Do not stack margin-top and margin-bottom on sibling sections.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> measure the gap in DevTools: you should see one margin box, not two swallowing each other. Record the choice (gap or padding) on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so other pages do not mix both patterns.</p>",
   "source": "MDN — Mastering margin collapsing",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing",
   "sourceSnippet": "Adjacent vertical margins collapse into a single margin equal to the larger of the two.",
   "source2": "MDN — margin",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "spacing-pakai-gap-bukan-margin-di-flex",
 "langs": {
  "id":   {
   "title": "Cara Pakai gap, Bukan Margin, di Flex dan Grid",
   "desc": "Tata cara mengganti margin antar kartu Clincoo dengan gap supaya jarak terakhir tidak mendorong tepi kontainer.",
   "content": "<p class=\"mb-4\">Margin kanan pada setiap kartu meninggalkan sisa di item terakhir. Baris jadi tidak rata dengan tepi kontainer, dan media query harus menolak margin itu satu per satu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu sumber jarak di editor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set kontainer display: flex; flex-wrap: wrap; gap: 1rem. Hapus margin pada anak. Untuk grid, gap menggantikan margin baris dan kolom sekaligus. Jangan sisakan margin: 0 1rem 1rem 0 di kartu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> sempitkan viewport sampai kartu turun. Jarak antar kartu harus sama, dan tepi kanan baris tidak boleh lebih menjorok. Catat nilai gap di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — gap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/gap",
   "sourceSnippet": "The gap property sets the gutters between rows and columns in flex and grid layouts.",
   "source2": "MDN — CSS flexible box layout",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Use gap Instead of Margin in Flex and Grid",
   "desc": "How to replace margins between Clincoo cards with gap so the last item does not push the container edge.",
   "content": "<p class=\"mb-4\">A right margin on every card leaves a leftover on the last item. The row no longer lines up with the container, and media queries have to cancel that margin one by one.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One source of space in the editor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set the container to display: flex; flex-wrap: wrap; gap: 1rem. Remove margins on the children. On a grid, gap replaces both row and column margins. Do not leave margin: 0 1rem 1rem 0 on the cards.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> narrow the viewport until a card wraps. The space between cards should stay even, and the row edge should not stick out. Record the gap value on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — gap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/gap",
   "sourceSnippet": "The gap property sets the gutters between rows and columns in flex and grid layouts.",
   "source2": "MDN — CSS flexible box layout",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "spacing-skala-jarak-dengan-custom-property",
 "langs": {
  "id":   {
   "title": "Cara Buat Skala Jarak dengan Custom Property",
   "desc": "Tata cara menetapkan token jarak Clincoo di :root supaya margin dan gap tidak memakai angka acak di setiap file.",
   "content": "<p class=\"mb-4\">Angka 13px, 18px, dan 22px di file berbeda membuat ritme halaman tidak konsisten. Saat brand minta lebih longgar, Anda harus mencari tiap nilai.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu sumber jarak di editor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> definisikan di :root: --space-1: 0.25rem; --space-2: 0.5rem; --space-3: 1rem; --space-4: 1.5rem; --space-5: 2rem. Pakai gap: var(--space-3) dan padding: var(--space-4). Jangan tulis px lepas untuk jarak layout.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ubah satu token dan pratinjau. Semua komponen yang memakai token itu harus ikut. Catat skala di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> agar asisten AI tidak mengusulkan 17px baru.</p>",
   "source": "MDN — Using CSS custom properties",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "sourceSnippet": "Custom properties are defined with a -- prefix and read with the var() function.",
   "source2": "MDN — var()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/var",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Build a Spacing Scale with Custom Properties",
   "desc": "How to set Clincoo spacing tokens on :root so margins and gaps do not use one-off numbers in every file.",
   "content": "<p class=\"mb-4\">Scattered 13px, 18px, and 22px values make the page rhythm inconsistent. When the brand asks for more air, you have to hunt every number.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One source of space in the editor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> define on :root: --space-1: 0.25rem; --space-2: 0.5rem; --space-3: 1rem; --space-4: 1.5rem; --space-5: 2rem. Use gap: var(--space-3) and padding: var(--space-4). Do not leave raw px for layout spacing.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> change one token and preview. Every component that uses it should follow. Record the scale on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the AI assistant does not invent a new 17px.</p>",
   "source": "MDN — Using CSS custom properties",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "sourceSnippet": "Custom properties are defined with a -- prefix and read with the var() function.",
   "source2": "MDN — var()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/var",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "spacing-properti-logis-untuk-rtl",
 "langs": {
  "id":   {
   "title": "Cara Pakai Properti Logis untuk Jarak RTL",
   "desc": "Tata cara mengganti margin-left Clincoo dengan margin-inline-start supaya jarak ikut arah bahasa.",
   "content": "<p class=\"mb-4\">Ikon yang diberi margin-left: 8px menempel di sisi yang salah saat halaman dir: rtl. Jarak terlihat rusak hanya pada satu bahasa.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu sumber jarak di editor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ganti margin-left dengan margin-inline-start, margin-right dengan margin-inline-end, dan padding kiri-kanan dengan padding-inline. Untuk atas-bawah yang harus ikut writing-mode, pakai margin-block. Jangan sisakan left/right untuk jarak komponen.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> set atribut dir="rtl" pada html sebentar. Ikon harus pindah sisi, jarak tetap sama. Catat properti yang sudah diganti di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS logical properties and values",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values",
   "sourceSnippet": "Logical properties map to physical edges based on writing mode and direction.",
   "source2": "MDN — margin-inline",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Use Logical Properties for RTL Spacing",
   "desc": "How to replace Clincoo margin-left with margin-inline-start so spacing follows the writing direction.",
   "content": "<p class=\"mb-4\">An icon with margin-left: 8px sticks to the wrong side when the page is dir: rtl. The gap looks broken only in one language.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One source of space in the editor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> replace margin-left with margin-inline-start, margin-right with margin-inline-end, and horizontal padding with padding-inline. For vertical space that should follow writing-mode, use margin-block. Do not keep left/right for component gaps.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> set dir="rtl" on html briefly. The icon should switch sides and the gap should stay the same. Record the properties you replaced on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS logical properties and values",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values",
   "sourceSnippet": "Logical properties map to physical edges based on writing mode and direction.",
   "source2": "MDN — margin-inline",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "spacing-debug-jarak-ganda-dari-margin-dan-gap",
 "langs": {
  "id":   {
   "title": "Cara Debug Jarak Ganda dari Margin dan gap",
   "desc": "Tata cara menemukan jarak Clincoo yang dobel karena gap kontainer dan margin anak aktif bersamaan.",
   "content": "<p class=\"mb-4\">Kartu terlihat terlalu jauh padahal token gap sudah 1rem. Penyebab umum: anak masih membawa margin-bottom dari pola lama, lalu gap menambah jarak lagi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu sumber jarak di editor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka panel Computed pada anak. Jika margin-block-end bukan 0 dan parent punya gap, nol-kan margin anak. Biarkan satu sumber jarak: gap di parent, atau margin di anak, bukan keduanya. Cek juga aturan di stylesheet global yang menyentuh p atau div.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> aktifkan overlay grid atau flex di DevTools. Garis gutter harus sesuai token, tanpa pita tambahan di dalam item. Catat selector yang menyumbang margin di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum minta AI merapikan CSS.</p>",
   "source": "MDN — gap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/gap",
   "sourceSnippet": "Gap is extra space between items; it is added on top of any margins those items still have.",
   "source2": "Chrome DevTools — Inspect CSS grid",
   "source2Url": "https://developer.chrome.com/docs/devtools/css/grid",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Debug Double Spacing from Margin plus gap",
   "desc": "How to find Clincoo space that doubled because a container gap and a child margin are both active.",
   "content": "<p class=\"mb-4\">Cards look too far apart even though the gap token is 1rem. A common cause: the child still has a leftover margin-bottom, and gap adds more space on top.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One source of space in the editor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open the Computed pane on the child. If margin-block-end is not 0 and the parent has gap, zero the child margin. Keep one source of space: parent gap, or child margin, not both. Also check global rules that touch p or div.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> turn on the grid or flex overlay in DevTools. The gutter lines should match the token, with no extra band inside the item. Record the selector that adds the margin on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before asking the AI to tidy the CSS.</p>",
   "source": "MDN — gap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/gap",
   "sourceSnippet": "Gap is extra space between items; it is added on top of any margins those items still have.",
   "source2": "Chrome DevTools — Inspect CSS grid",
   "source2Url": "https://developer.chrome.com/docs/devtools/css/grid",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
