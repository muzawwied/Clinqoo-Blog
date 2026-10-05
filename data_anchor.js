// Clincoo Docs — kategori Anchor (5 Oktober 2026, WIB) — 1 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["anchor"] = {
 "names": { "id": "Anchor", "en": "Anchor" },
 "articles": [
{
 "id": "anchor-tempelkan-tooltip-ke-tombol",
 "langs": {
  "id":   {
   "title": "Cara Tempelkan Tooltip ke Tombol dengan CSS Anchor",
   "desc": "Tata cara memakai anchor-name dan position-anchor di Clincoo supaya tooltip tetap menempel tombol tanpa koordinat JS.",
   "content": "<p class=\"mb-4\">Tooltip yang diposisikan dengan top dan left absolut bergeser saat tombol pindah ke baris lain. Perhitungan JS lalu ketinggalan dari layout.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Namai jangkar, tempelkan popup</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri tombol anchor-name: --tips. Pada tooltip set position: absolute, position-anchor: --tips, dan position-area: top. Tambahkan position-try agar popup pindah ke bawah jika terpotong tepi viewport.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji saat tombol berpindah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> sempitkan baris sampai tombol turun. Tooltip harus ikut tombol, bukan tinggal di koordinat lama. Catat nama jangkar di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS anchor positioning",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "sourceSnippet": "Anchor positioning places an element relative to an anchor element using anchor-name and position-anchor.",
   "source2": "MDN — position-anchor",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-anchor",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Anchor a Tooltip to a Button with CSS Anchor Positioning",
   "desc": "How to use anchor-name and position-anchor in Clincoo so a tooltip stays on the button without JS coordinates.",
   "content": "<p class=\"mb-4\">A tooltip positioned with absolute top and left drifts when the button wraps to another row. The JS math then lags behind the layout.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Name the anchor, attach the popup</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> give the button anchor-name: --tips. On the tooltip set position: absolute, position-anchor: --tips, and position-area: top. Add position-try so the popup flips below if the viewport edge clips it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test when the button moves</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> narrow the row until the button wraps. The tooltip should follow the button, not stay at the old coordinates. Record the anchor name on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS anchor positioning",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "sourceSnippet": "Anchor positioning places an element relative to an anchor element using anchor-name and position-anchor.",
   "source2": "MDN — position-anchor",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-anchor",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
