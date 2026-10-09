// Clincoo Docs — kategori Pointer (9 Oktober 2026, 08:00 WIB) — kategori baru, 1 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["pointer"] = {
 "names": { "id": "Pointer", "en": "Pointer" },
 "articles": [
{
 "id": "pointer-bedakan-mouse-touch-dan-pena",
 "langs": {
  "id": {
   "title": "Cara Bedakan Mouse, Sentuhan, dan Pena dengan Pointer Events",
   "desc": "Tata cara memakai pointerType di Clincoo supaya geser pena tidak tertukar dengan klik mouse.",
   "content": "<p class="mb-4">Handler click saja tidak tahu apakah input datang dari mouse, jari, atau pena. Akibatnya geser kanvas ikut memicu aksi pilih.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Baca pointerType di pointerdown</h2><p class="mb-4">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> dengarkan pointerdown, lalu cabang menurut event.pointerType: mouse, touch, atau pen. Panggil setPointerCapture pada target supaya gerakan pena tidak hilang saat keluar elemen.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Jangan andalkan click untuk geser</h2><p class="mb-4">Aksi pilih boleh di click untuk mouse. Geser pena atau jari harus di pointermove setelah capture, dan dibatalkan di pointercancel. Uji di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> dengan mouse lalu sentuhan: kedua jalur tidak boleh saling menimpa. Catat cabangnya di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Pointer Events",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events",
   "sourceSnippet": "pointerType reports whether the pointer is a mouse, pen, or touch contact.",
   "source2": "MDN — setPointerCapture",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Tell Mouse, Touch, and Pen Apart with Pointer Events",
   "desc": "How to use pointerType in Clincoo so a pen drag is not treated as a mouse click.",
   "content": "<p class="mb-4">A click handler alone cannot tell whether input came from a mouse, a finger, or a pen. A canvas drag then also fires a select action.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Read pointerType on pointerdown</h2><p class="mb-4">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> listen for pointerdown, then branch on event.pointerType: mouse, touch, or pen. Call setPointerCapture on the target so a pen move is not lost when it leaves the element.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Do not use click for a drag</h2><p class="mb-4">A select action may stay on click for mouse. A pen or finger drag belongs on pointermove after capture, and should cancel on pointercancel. Test in <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> with a mouse and then touch: the two paths must not overwrite each other. Record the branch on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Pointer Events",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events",
   "sourceSnippet": "pointerType reports whether the pointer is a mouse, pen, or touch contact.",
   "source2": "MDN — setPointerCapture",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
