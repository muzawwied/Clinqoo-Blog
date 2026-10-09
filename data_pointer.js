// Clincoo Docs — kategori Pointer (9 Oktober 2026, 09:00 WIB) — tambah 5 artikel
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
,
{
 "id": "pointer-tangkap-pointer-saat-geser",
 "langs": {
  "id": {
   "title": "Cara Tangkap Pointer Saat Geser Keluar Elemen",
   "desc": "Tata cara setPointerCapture di Clincoo supaya geser tidak putus saat kursor keluar target.",
   "content": "<p class="mb-4">Tanpa capture, pointermove berhenti begitu kursor keluar elemen. Geser slider atau kanvas jadi patah di tepi.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Capture di pointerdown</h2><p class="mb-4">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> pada pointerdown panggil element.setPointerCapture(event.pointerId). Simpan pointerId itu, lalu dengarkan pointermove di elemen yang sama, bukan di document.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Uji keluar batas</h2><p class="mb-4">Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> geser dari dalam kartu sampai ke luar jendela. Nilai harus terus berubah sampai pointerup. Catat pola capture di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — setPointerCapture",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture",
   "sourceSnippet": "setPointerCapture designates a specific element as the capture target of future pointer events.",
   "source2": "MDN — pointerdown",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerdown_event",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Capture the Pointer When a Drag Leaves the Element",
   "desc": "How to call setPointerCapture in Clincoo so a drag does not drop when the cursor leaves the target.",
   "content": "<p class="mb-4">Without capture, pointermove stops as soon as the cursor leaves the element. A slider or canvas drag breaks at the edge.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Capture on pointerdown</h2><p class="mb-4">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> call element.setPointerCapture(event.pointerId) on pointerdown. Store that pointerId, then listen for pointermove on the same element, not on document.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Test past the edge</h2><p class="mb-4">In <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> drag from inside a card out of the window. The value should keep updating until pointerup. Record the capture pattern on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — setPointerCapture",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture",
   "sourceSnippet": "setPointerCapture designates a specific element as the capture target of future pointer events.",
   "source2": "MDN — pointerdown",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerdown_event",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "pointer-lepas-capture-saat-pointerup",
 "langs": {
  "id": {
   "title": "Cara Lepas Pointer Capture Saat pointerup",
   "desc": "Tata cara releasePointerCapture di Clincoo supaya geser berikutnya tidak menempel pada elemen lama.",
   "content": "<p class="mb-4">Capture yang tidak dilepas membuat pointermove berikutnya tetap masuk ke elemen lama, meski pengguna sudah mengklik tempat lain.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Lepas di pointerup dan pointercancel</h2><p class="mb-4">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> pada kedua event cek element.hasPointerCapture(event.pointerId) sebelum memanggil releasePointerCapture. Jangan panggil release jika capture sudah hilang.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Dengarkan lostpointercapture</h2><p class="mb-4">Pakai lostpointercapture sebagai jalur cadangan untuk mereset state geser. Uji di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a>: selesai geser, klik elemen lain, pastikan tidak ada sisa drag. Catat reset ini di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — releasePointerCapture",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/releasePointerCapture",
   "sourceSnippet": "releasePointerCapture releases pointer capture previously set for a specific pointer.",
   "source2": "MDN — lostpointercapture",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Element/lostpointercapture_event",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Release Pointer Capture on pointerup",
   "desc": "How to call releasePointerCapture in Clincoo so the next drag is not stuck on the old element.",
   "content": "<p class="mb-4">A capture that is never released keeps later pointermove events on the old element, even after the user clicks elsewhere.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Release on pointerup and pointercancel</h2><p class="mb-4">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> check element.hasPointerCapture(event.pointerId) on both events before calling releasePointerCapture. Do not call release if capture is already gone.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Listen for lostpointercapture</h2><p class="mb-4">Use lostpointercapture as a backup path to reset drag state. Test in <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a>: finish a drag, click another element, and confirm no leftover drag. Record the reset on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — releasePointerCapture",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/releasePointerCapture",
   "sourceSnippet": "releasePointerCapture releases pointer capture previously set for a specific pointer.",
   "source2": "MDN — lostpointercapture",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Element/lostpointercapture_event",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "pointer-tangani-pointercancel",
 "langs": {
  "id": {
   "title": "Cara Tangani pointercancel Saat Gestur Disela",
   "desc": "Tata cara mereset geser Clincoo saat browser mengirim pointercancel, bukan menganggapnya selesai.",
   "content": "<p class="mb-4">pointercancel muncul saat OS mengambil gestur, misalnya untuk gulir atau notifikasi. Menganggapnya pointerup bisa menyimpan posisi yang tidak diinginkan.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Batalkan, jangan commit</h2><p class="mb-4">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> pada pointercancel kembalikan pratinjau ke nilai awal geser dan lepas capture. Simpan hasil hanya di pointerup.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Uji dengan gulir paksa</h2><p class="mb-4">Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> mulai geser pena lalu biarkan browser membatalkan. Kartu tidak boleh menyimpan posisi batal. Catat beda pointerup dan pointercancel di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — pointercancel",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/pointercancel_event",
   "sourceSnippet": "pointercancel is fired when the browser concludes the pointer will no longer generate events.",
   "source2": "MDN — Pointer events",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Handle pointercancel When a Gesture Is Interrupted",
   "desc": "How to reset a Clincoo drag when the browser fires pointercancel instead of treating it as complete.",
   "content": "<p class="mb-4">pointercancel fires when the OS takes the gesture, for example for scrolling or a notification. Treating it as pointerup can save an unwanted position.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Cancel, do not commit</h2><p class="mb-4">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> on pointercancel restore the preview to the drag start value and release capture. Save the result only on pointerup.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Test with a forced scroll</h2><p class="mb-4">In <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> start a pen drag and let the browser cancel it. The card must not store the cancelled position. Record the pointerup versus pointercancel split on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — pointercancel",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/pointercancel_event",
   "sourceSnippet": "pointercancel is fired when the browser concludes the pointer will no longer generate events.",
   "source2": "MDN — Pointer events",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "pointer-touch-action-pada-kanvas",
 "langs": {
  "id": {
   "title": "Cara Atur touch-action pada Kanvas Gambar",
   "desc": "Tata cara memakai touch-action di Clincoo supaya gambar jari tidak ikut menggulir halaman.",
   "content": "<p class="mb-4">Browser menggulir halaman saat jari bergerak di kanvas jika touch-action masih auto. Garis gambar jadi patah dan halaman ikut bergeser.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Batasi gestur di area gambar</h2><p class="mb-4">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> set touch-action: none hanya pada kanvas, bukan pada body. Area di luar kanvas tetap boleh digulir.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Jangan andalkan preventDefault saja</h2><p class="mb-4">Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> uji di ponsel: satu jari menggambar, halaman diam; gulir di luar kanvas tetap jalan. Catat cakupan CSS ini di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — touch-action",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",
   "sourceSnippet": "touch-action sets how a region can be manipulated by a touchscreen user.",
   "source2": "MDN — Pointer events",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set touch-action on a Drawing Canvas",
   "desc": "How to use touch-action in Clincoo so a finger drawing does not also scroll the page.",
   "content": "<p class="mb-4">The browser scrolls the page when a finger moves on a canvas if touch-action is still auto. The stroke breaks and the page shifts.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Limit the gesture to the drawing area</h2><p class="mb-4">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> set touch-action: none only on the canvas, not on body. Outside the canvas, scrolling should still work.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Do not rely on preventDefault alone</h2><p class="mb-4">In <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> test on a phone: one finger draws and the page stays still; scrolling outside the canvas still works. Record this CSS scope on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — touch-action",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",
   "sourceSnippet": "touch-action sets how a region can be manipulated by a touchscreen user.",
   "source2": "MDN — Pointer events",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "pointer-koordinat-relatif-elemen",
 "langs": {
  "id": {
   "title": "Cara Hitung Koordinat Pointer Relatif ke Elemen",
   "desc": "Tata cara mengubah clientX dan clientY jadi posisi lokal kanvas Clincoo, termasuk saat halaman digulir.",
   "content": "<p class="mb-4">clientX dan clientY diukur dari viewport. Menggambar langsung dengan angka itu menaruh garis di tempat yang salah begitu halaman digulir atau elemen tidak di pojok nol.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Kurangi getBoundingClientRect</h2><p class="mb-4">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> pada pointermove ambil rect = canvas.getBoundingClientRect(), lalu x = event.clientX - rect.left dan y = event.clientY - rect.top. Kalikan dengan rasio lebar bitmap jika canvas CSS dan atribut width berbeda.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Uji setelah gulir</h2><p class="mb-4">Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> gulir halaman, lalu klik pojok kanvas. Titik harus jatuh di pojok bitmap, bukan di koordinat viewport. Catat rumus ini di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — getBoundingClientRect",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect",
   "sourceSnippet": "getBoundingClientRect returns the element's size and its position relative to the viewport.",
   "source2": "MDN — PointerEvent.clientX",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Compute Pointer Coordinates Relative to the Element",
   "desc": "How to turn clientX and clientY into local Clincoo canvas coordinates, including when the page is scrolled.",
   "content": "<p class="mb-4">clientX and clientY are measured from the viewport. Drawing with those numbers places the stroke in the wrong place once the page scrolls or the element is not at the origin.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Subtract getBoundingClientRect</h2><p class="mb-4">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> on pointermove take rect = canvas.getBoundingClientRect(), then x = event.clientX - rect.left and y = event.clientY - rect.top. Multiply by the bitmap ratio if the CSS size and the width attribute differ.</p><h2 class="text-lg font-bold text-gray-900 mt-8 mb-2">Test after scroll</h2><p class="mb-4">In <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> scroll the page, then click the canvas corner. The point should land on the bitmap corner, not on viewport coordinates. Record this formula on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — getBoundingClientRect",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect",
   "sourceSnippet": "getBoundingClientRect returns the element's size and its position relative to the viewport.",
   "source2": "MDN — PointerEvent.clientX",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
