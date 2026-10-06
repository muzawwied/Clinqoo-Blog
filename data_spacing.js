// Clincoo Docs — kategori Spacing (7 Oktober 2026, WIB) — 12 artikel
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
,
{
 "id": "spacing-pisahkan-row-gap-dan-column-gap",
 "langs": {
  "id":   {
   "title": "Cara Pisahkan row-gap dan column-gap",
   "desc": "Tata cara mengatur jarak baris dan kolom Clincoo secara terpisah supaya kartu wrap tidak terlalu renggang vertikal.",
   "content": "<p class=\"mb-4\">Satu nilai gap memaksa jarak horizontal dan vertikal sama. Saat kartu turun ke baris baru, ruang antar baris terasa terlalu longgar dibanding jarak antar kolom.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu sumber jarak di editor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis column-gap: 1rem dan row-gap: 1.5rem pada kontainer flex atau grid. Jangan andalkan shorthand gap jika kedua sumbu memang beda. Hapus margin anak yang meniru gutter.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> sempitkan layar sampai satu kartu pindah baris. Ukur kedua gutter di DevTools. Catat kedua token di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya asisten AI tidak menyatukan lagi jadi gap: 1rem.</p>",
   "source": "MDN — row-gap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap",
   "sourceSnippet": "row-gap sets the size of the gap between rows in a flex or grid container.",
   "source2": "MDN — column-gap",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Split row-gap and column-gap",
   "desc": "How to set Clincoo row and column gutters separately so wrapped cards do not get too much vertical space.",
   "content": "<p class=\"mb-4\">A single gap value forces horizontal and vertical space to match. When a card wraps, the space between rows feels looser than the space between columns.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One source of space in the editor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set column-gap: 1rem and row-gap: 1.5rem on the flex or grid container. Do not rely on the gap shorthand if the two axes should differ. Remove child margins that imitate the gutter.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> narrow the screen until one card wraps. Measure both gutters in DevTools. Record both tokens on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the AI assistant does not collapse them back to gap: 1rem.</p>",
   "source": "MDN — row-gap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap",
   "sourceSnippet": "row-gap sets the size of the gap between rows in a flex or grid container.",
   "source2": "MDN — column-gap",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "spacing-safe-area-inset-di-hp",
 "langs": {
  "id":   {
   "title": "Cara Pakai safe-area-inset di Layar HP",
   "desc": "Tata cara menambahkan jarak aman Clincoo di tepi layar HP supaya tombol tidak tertutup notch atau bilah home.",
   "content": "<p class=\"mb-4\">Padding 1rem di footer terlihat cukup di desktop, lalu tombol aksi tertutup bilah home di iPhone. Pengunjung harus menggeser sedikit untuk mengetuk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu sumber jarak di editor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan viewport-fit=cover pada meta viewport, lalu padding-bottom: calc(1rem + env(safe-area-inset-bottom)). Untuk tepi kiri-kanan landscape pakai padding-inline: max(1rem, env(safe-area-inset-left)). Jangan menaruh angka notch tetap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka pratinjau mode perangkat, atau cek di HP sungguhan. Tombol terakhir harus di atas area aman. Catat rumus calc di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum minta AI merapikan CSS mobile.</p>",
   "source": "MDN — env()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/env",
   "sourceSnippet": "The env() function inserts a user-agent defined environment variable, such as a safe-area inset.",
   "source2": "WebKit — Designing Websites for iPhone X",
   "source2Url": "https://webkit.org/blog/7929/designing-websites-for-iphone-x/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Use safe-area-inset on Phone Screens",
   "desc": "How to add Clincoo safe-area spacing so buttons are not covered by a notch or the home bar.",
   "content": "<p class=\"mb-4\">A 1rem footer padding looks fine on desktop, then the action button sits under the home bar on an iPhone. Visitors have to scroll a little just to tap it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One source of space in the editor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add viewport-fit=cover to the viewport meta, then padding-bottom: calc(1rem + env(safe-area-inset-bottom)). For landscape edges use padding-inline: max(1rem, env(safe-area-inset-left)). Do not hard-code a notch number.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open device preview, or check a real phone. The last button should sit above the safe area. Record the calc formula on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before asking an AI to tidy mobile CSS.</p>",
   "source": "MDN — env()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/env",
   "sourceSnippet": "The env() function inserts a user-agent defined environment variable, such as a safe-area inset.",
   "source2": "WebKit — Designing Websites for iPhone X",
   "source2Url": "https://webkit.org/blog/7929/designing-websites-for-iphone-x/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "spacing-padding-kontainer-bukan-margin-anak",
 "langs": {
  "id":   {
   "title": "Cara Pakai Padding Kontainer, Bukan Margin Anak",
   "desc": "Tata cara memberi napas tepi section Clincoo dari padding induk supaya anak pertama dan terakhir tidak mendorong layout.",
   "content": "<p class=\"mb-4\">Margin pada anak pertama sering menembus ke luar section, atau tertelan collapse. Latar section jadi menempel ke teks, padahal token jarak sudah ada.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu sumber jarak di editor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set padding: var(--space-4) pada section, lalu margin: 0 pada anak langsung. Jarak dalam section datang dari padding induk; jarak antar section datang dari gap parent. Jangan mengulang margin: 1rem 1rem 0 pada tiap blok.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> aktifkan overlay box model. Padding harus mengelilingi konten, dan margin anak langsung harus 0. Catat keputusan ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — padding",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/padding",
   "sourceSnippet": "Padding is the space between an element's content and its border.",
   "source2": "MDN — Mastering margin collapsing",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Use Container Padding Instead of Child Margins",
   "desc": "How to inset a Clincoo section with parent padding so the first and last children do not push the layout.",
   "content": "<p class=\"mb-4\">A margin on the first child often escapes the section, or collapses away. The section background then touches the text even though a spacing token exists.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One source of space in the editor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set padding: var(--space-4) on the section and margin: 0 on direct children. Inner space comes from parent padding; space between sections comes from the parent gap. Do not repeat margin: 1rem 1rem 0 on every block.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> turn on the box-model overlay. Padding should surround the content, and direct-child margin should be 0. Record that choice on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — padding",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/padding",
   "sourceSnippet": "Padding is the space between an element's content and its border.",
   "source2": "MDN — Mastering margin collapsing",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "spacing-reset-margin-heading-bawaan",
 "langs": {
  "id":   {
   "title": "Cara Reset Margin Heading Bawaan Browser",
   "desc": "Tata cara menetralkan margin h1–h3 bawaan Clincoo supaya ritme judul mengikuti skala jarak, bukan stylesheet user-agent.",
   "content": "<p class=\"mb-4\">Browser memberi h2 margin atas dan bawah sekitar 0.83em. Angka itu tidak ada di token Clincoo, jadi judul terasa melompat di antara section yang sudah memakai gap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu sumber jarak di editor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> reset h1, h2, h3, p { margin: 0; } lalu beri jarak lewat .stack { display: flex; flex-direction: column; gap: var(--space-3); }. Jika butuh napas hanya di bawah judul, pakai margin-block-end: var(--space-2) pada heading, bukan nilai em bawaan. Jangan membiarkan user-agent dan token hidup bersamaan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bandingkan Computed margin heading sebelum dan sesudah reset. Nilai harus token, bukan em browser. Catat selector reset di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — heading elements",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements",
   "sourceSnippet": "User agents typically apply margins to heading elements unless the page stylesheet resets them.",
   "source2": "MDN — margin",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Reset Default Browser Heading Margins",
   "desc": "How to neutralize default Clincoo h1–h3 margins so heading rhythm follows the spacing scale, not the user-agent sheet.",
   "content": "<p class=\"mb-4\">Browsers give h2 a top and bottom margin of about 0.83em. That number is not on the Clincoo scale, so headings jump between sections that already use gap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One source of space in the editor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> reset h1, h2, h3, p { margin: 0; } then space them with .stack { display: flex; flex-direction: column; gap: var(--space-3); }. If only the heading needs air below it, use margin-block-end: var(--space-2) on the heading, not the default em. Do not leave the user-agent margin and the token active together.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> compare the computed heading margin before and after the reset. It should be a token, not a browser em. Record the reset selector on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — heading elements",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements",
   "sourceSnippet": "User agents typically apply margins to heading elements unless the page stylesheet resets them.",
   "source2": "MDN — margin",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "spacing-align-content-saat-flex-wrap",
 "langs": {
  "id":   {
   "title": "Cara Atur align-content saat Flex Wrap",
   "desc": "Tata cara menutup ruang kosong Clincoo di sumbu silang saat kartu flex wrap, tanpa menambah gap palsu.",
   "content": "<p class=\"mb-4\">Kontainer flex dengan flex-wrap dan tinggi lebih besar dari isi menaruh baris di tengah atau menyebar. Jarak antar baris jadi bukan row-gap yang Anda tulis.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu sumber jarak di editor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set align-content: flex-start pada kontainer yang wrap. Biarkan row-gap sebagai satu-satunya jarak antar baris. Jangan pakai align-content: space-between jika skala jarak sudah ditetapkan. align-items hanya mengatur item di dalam satu baris, bukan jarak antar baris.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tambah tinggi kontainer sebentar. Baris harus menempel ke awal, dan gutter tetap row-gap. Catat properti ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum minta AI merapikan layout kartu.</p>",
   "source": "MDN — align-content",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-content",
   "sourceSnippet": "align-content sets the distribution of space between and around content items along a flex container's cross axis.",
   "source2": "MDN — flex-wrap",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Set align-content When Flex Wraps",
   "desc": "How to close leftover Clincoo cross-axis space when flex cards wrap, without inventing a fake gap.",
   "content": "<p class=\"mb-4\">A wrapping flex container taller than its content packs rows in the center or spreads them out. The space between rows is no longer the row-gap you wrote.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One source of space in the editor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set align-content: flex-start on the wrapping container. Leave row-gap as the only space between rows. Do not use align-content: space-between once a spacing scale exists. align-items only aligns items inside one line, not the gap between lines.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> temporarily increase the container height. Rows should pack to the start, and the gutter should stay row-gap. Record this property on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before asking an AI to tidy the card layout.</p>",
   "source": "MDN — align-content",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-content",
   "sourceSnippet": "align-content sets the distribution of space between and around content items along a flex container's cross axis.",
   "source2": "MDN — flex-wrap",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 
,
{
 "id": "spacing-pusatkan-blok-dengan-margin-inline-auto",
 "langs": {
  "id":   {
   "title": "Cara Pusatkan Blok dengan margin-inline auto",
   "desc": "Tata cara menengahkan kartu atau hero Clincoo tanpa margin kiri-kanan angka tetap yang pecah di layar sempit.",
   "content": "<p class=\"mb-4\">Blok dengan lebar tetap sering didorong pakai margin-left: 120px. Di layar HP angka itu mendorong konten keluar viewport, dan di RTL sisi kirinya salah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu sumber jarak di editor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> batasi lebar dengan max-width: 40rem lalu tulis margin-inline: auto. Jangan pakai margin-left dan margin-right angka piksel untuk menengahkan. Jika parent sudah flex, justify-content: center lebih jelas daripada auto margin yang kalah oleh flex-grow.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> sempitkan dan lebarkan viewport. Blok harus tetap di tengah, tidak terpotong. Catat pola ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum minta asisten AI merapikan layout.</p>",
   "source": "MDN — margin-inline",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline",
   "sourceSnippet": "The margin-inline CSS shorthand sets the logical start and end margins of an element.",
   "source2": "MDN — Centering with margin auto",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Center a Block with margin-inline auto",
   "desc": "How to center a Clincoo card or hero without fixed left-right margins that break on a narrow screen.",
   "content": "<p class=\"mb-4\">A fixed-width block is often nudged with margin-left: 120px. On a phone that number pushes content off the viewport, and in RTL the left side is wrong.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One source of space in the editor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> cap the width with max-width: 40rem and write margin-inline: auto. Do not use pixel margin-left and margin-right to center. If the parent is already flex, justify-content: center is clearer than auto margins that lose to flex-grow.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> narrow and widen the viewport. The block should stay centered and not clip. Record the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before asking the AI assistant to tidy the layout.</p>",
   "source": "MDN — margin-inline",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline",
   "sourceSnippet": "The margin-inline CSS shorthand sets the logical start and end margins of an element.",
   "source2": "MDN — Centering with margin auto",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "spacing-nolkan-gap-saat-cetak",
 "langs": {
  "id":   {
   "title": "Cara Nolkan gap saat Halaman Dicetak",
   "desc": "Tata cara mengecilkan jarak Flex dan Grid Clincoo di @media print supaya kartu tidak memakan halaman kosong.",
   "content": "<p class=\"mb-4\">Skala jarak layar 1.5rem nyaman di pratinjau, tetapi saat cetak atau simpan PDF setiap gap ikut terpotong jadi halaman ekstra. Pengunjung yang unduh invoice melihat banyak ruang kosong.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu sumber jarak di editor</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan @media print { .stack { gap: 0.5rem; padding: 0; } }. Jangan mengubah token --space di :root hanya demi cetak. Sembunyikan header lengket yang memakai safe-area. Biarkan gap layar tetap untuk pratinjau.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka dialog cetak browser. Jumlah halaman harus turun tanpa konten saling menimpa. Catat media query cetak di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @media print",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media#print",
   "sourceSnippet": "The print media type is for paged material and documents viewed on screen in print preview mode.",
   "source2": "MDN — gap",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/gap",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Zero gap in Print Styles",
   "desc": "How to shrink Clincoo Flex and Grid gaps inside @media print so cards do not waste blank pages.",
   "content": "<p class=\"mb-4\">A 1.5rem screen scale feels fine in preview, but every gap is paginated when printing or saving a PDF. Someone downloading an invoice sees extra blank pages.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One source of space in the editor</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add @media print { .stack { gap: 0.5rem; padding: 0; } }. Do not change the :root --space tokens just for print. Hide sticky headers that use safe-area. Leave the screen gap for preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the browser print dialog. Page count should drop without content overlapping. Record the print media query on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @media print",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media#print",
   "sourceSnippet": "The print media type is for paged material and documents viewed on screen in print preview mode.",
   "source2": "MDN — gap",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/gap",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
