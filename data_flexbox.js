// Clincoo Docs — kategori Flexbox (7 Oktober 2026, 06:00 WIB) — 1 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["flexbox"] = {
 "names": { "id": "Flexbox", "en": "Flexbox" },
 "articles": [
{
 "id": "flexbox-debug-item-tidak-menyusut",
 "langs": {
  "id": {
   "title": "Cara Debug Item Flexbox yang Tidak Menyusut",
   "desc": "Tata cara memperbaiki item flex Clincoo yang meluber karena min-width bawaan dan flex-shrink nol.",
   "content": "<p class=\"mb-4\">Item flex yang menolak menyusut biasanya bukan karena flex-direction salah, melainkan min-width: auto bawaan atau konten yang tidak boleh pecah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca flex-shrink dan min-width</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih item yang meluber. Di Computed cek flex-shrink, flex-basis, dan min-width. Untuk teks panjang set min-width: 0 dan overflow-wrap: anywhere pada item, bukan pada seluruh halaman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di lebar sempit</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> sempitkan ke 360px. Item harus menyusut tanpa scroll horizontal. Jika gambar yang menahan, beri max-width: 100% pada gambar itu. Catat selector di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — flex-shrink",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink",
   "sourceSnippet": "The default min-width: auto can stop a flex item from shrinking below its content size.",
   "source2": "MDN — Controlling flex item ratios",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug a Flex Item That Will Not Shrink",
   "desc": "How to fix a Clincoo flex item that overflows because of the default min-width and a zero flex-shrink.",
   "content": "<p class=\"mb-4\">A flex item that refuses to shrink is usually not a wrong flex-direction. It is the default min-width: auto or content that cannot break.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read flex-shrink and min-width</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> select the overflowing item. In Computed check flex-shrink, flex-basis, and min-width. For long text set min-width: 0 and overflow-wrap: anywhere on the item, not on the whole page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test at a narrow width</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> narrow the page to 360px. The item should shrink without horizontal scroll. If an image holds it open, set max-width: 100% on that image. Record the selector on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — flex-shrink",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink",
   "sourceSnippet": "The default min-width: auto can stop a flex item from shrinking below its content size.",
   "source2": "MDN — Controlling flex item ratios",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
