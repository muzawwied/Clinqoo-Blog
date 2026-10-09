// Clincoo Docs — tambah 1 artikel pointer (9 Oktober 2026, 11:00 WIB)
// Clincoo Docs — kategori Pointer (9 Oktober 2026, 10:00 WIB) — tambah 5 artikel
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
   "content": "<p class=\"mb-4\">Handler click saja tidak tahu apakah input datang dari mouse, jari, atau pena. Akibatnya geser kanvas ikut memicu aksi pilih.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca pointerType di pointerdown</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> dengarkan pointerdown, lalu cabang menurut event.pointerType: mouse, touch, atau pen. Panggil setPointerCapture pada target supaya gerakan pena tidak hilang saat keluar elemen.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan andalkan click untuk geser</h2><p class=\"mb-4\">Aksi pilih boleh di click untuk mouse. Geser pena atau jari harus di pointermove setelah capture, dan dibatalkan di pointercancel. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan mouse lalu sentuhan: kedua jalur tidak boleh saling menimpa. Catat cabangnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
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
   "content": "<p class=\"mb-4\">A click handler alone cannot tell whether input came from a mouse, a finger, or a pen. A canvas drag then also fires a select action.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read pointerType on pointerdown</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> listen for pointerdown, then branch on event.pointerType: mouse, touch, or pen. Call setPointerCapture on the target so a pen move is not lost when it leaves the element.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not use click for a drag</h2><p class=\"mb-4\">A select action may stay on click for mouse. A pen or finger drag belongs on pointermove after capture, and should cancel on pointercancel. Test in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> with a mouse and then touch: the two paths must not overwrite each other. Record the branch on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
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
   "content": "<p class=\"mb-4\">Tanpa capture, pointermove berhenti begitu kursor keluar elemen. Geser slider atau kanvas jadi patah di tepi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Capture di pointerdown</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada pointerdown panggil element.setPointerCapture(event.pointerId). Simpan pointerId itu, lalu dengarkan pointermove di elemen yang sama, bukan di document.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji keluar batas</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> geser dari dalam kartu sampai ke luar jendela. Nilai harus terus berubah sampai pointerup. Catat pola capture di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
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
   "content": "<p class=\"mb-4\">Without capture, pointermove stops as soon as the cursor leaves the element. A slider or canvas drag breaks at the edge.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Capture on pointerdown</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> call element.setPointerCapture(event.pointerId) on pointerdown. Store that pointerId, then listen for pointermove on the same element, not on document.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test past the edge</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> drag from inside a card out of the window. The value should keep updating until pointerup. Record the capture pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
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
   "content": "<p class=\"mb-4\">Capture yang tidak dilepas membuat pointermove berikutnya tetap masuk ke elemen lama, meski pengguna sudah mengklik tempat lain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lepas di pointerup dan pointercancel</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada kedua event cek element.hasPointerCapture(event.pointerId) sebelum memanggil releasePointerCapture. Jangan panggil release jika capture sudah hilang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Dengarkan lostpointercapture</h2><p class=\"mb-4\">Pakai lostpointercapture sebagai jalur cadangan untuk mereset state geser. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>: selesai geser, klik elemen lain, pastikan tidak ada sisa drag. Catat reset ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
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
   "content": "<p class=\"mb-4\">A capture that is never released keeps later pointermove events on the old element, even after the user clicks elsewhere.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Release on pointerup and pointercancel</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> check element.hasPointerCapture(event.pointerId) on both events before calling releasePointerCapture. Do not call release if capture is already gone.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Listen for lostpointercapture</h2><p class=\"mb-4\">Use lostpointercapture as a backup path to reset drag state. Test in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>: finish a drag, click another element, and confirm no leftover drag. Record the reset on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
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
   "content": "<p class=\"mb-4\">pointercancel muncul saat OS mengambil gestur, misalnya untuk gulir atau notifikasi. Menganggapnya pointerup bisa menyimpan posisi yang tidak diinginkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Batalkan, jangan commit</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada pointercancel kembalikan pratinjau ke nilai awal geser dan lepas capture. Simpan hasil hanya di pointerup.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan gulir paksa</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> mulai geser pena lalu biarkan browser membatalkan. Kartu tidak boleh menyimpan posisi batal. Catat beda pointerup dan pointercancel di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
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
   "content": "<p class=\"mb-4\">pointercancel fires when the OS takes the gesture, for example for scrolling or a notification. Treating it as pointerup can save an unwanted position.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cancel, do not commit</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> on pointercancel restore the preview to the drag start value and release capture. Save the result only on pointerup.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test with a forced scroll</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> start a pen drag and let the browser cancel it. The card must not store the cancelled position. Record the pointerup versus pointercancel split on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
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
   "content": "<p class=\"mb-4\">Browser menggulir halaman saat jari bergerak di kanvas jika touch-action masih auto. Garis gambar jadi patah dan halaman ikut bergeser.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Batasi gestur di area gambar</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set touch-action: none hanya pada kanvas, bukan pada body. Area di luar kanvas tetap boleh digulir.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan andalkan preventDefault saja</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> uji di ponsel: satu jari menggambar, halaman diam; gulir di luar kanvas tetap jalan. Catat cakupan CSS ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
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
   "content": "<p class=\"mb-4\">The browser scrolls the page when a finger moves on a canvas if touch-action is still auto. The stroke breaks and the page shifts.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Limit the gesture to the drawing area</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set touch-action: none only on the canvas, not on body. Outside the canvas, scrolling should still work.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not rely on preventDefault alone</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> test on a phone: one finger draws and the page stays still; scrolling outside the canvas still works. Record this CSS scope on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
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
   "content": "<p class=\"mb-4\">clientX dan clientY diukur dari viewport. Menggambar langsung dengan angka itu menaruh garis di tempat yang salah begitu halaman digulir atau elemen tidak di pojok nol.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kurangi getBoundingClientRect</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada pointermove ambil rect = canvas.getBoundingClientRect(), lalu x = event.clientX - rect.left dan y = event.clientY - rect.top. Kalikan dengan rasio lebar bitmap jika canvas CSS dan atribut width berbeda.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji setelah gulir</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir halaman, lalu klik pojok kanvas. Titik harus jatuh di pojok bitmap, bukan di koordinat viewport. Catat rumus ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
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
   "content": "<p class=\"mb-4\">clientX and clientY are measured from the viewport. Drawing with those numbers places the stroke in the wrong place once the page scrolls or the element is not at the origin.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Subtract getBoundingClientRect</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> on pointermove take rect = canvas.getBoundingClientRect(), then x = event.clientX - rect.left and y = event.clientY - rect.top. Multiply by the bitmap ratio if the CSS size and the width attribute differ.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test after scroll</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll the page, then click the canvas corner. The point should land on the bitmap corner, not on viewport coordinates. Record this formula on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — getBoundingClientRect",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect",
   "sourceSnippet": "getBoundingClientRect returns the element's size and its position relative to the viewport.",
   "source2": "MDN — PointerEvent.clientX",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "pointer-tekanan-dan-tombol-pena",
 "langs": {
  "id": {
   "title": "Cara Baca Tekanan Pena dan Tombol Pointer",
   "desc": "Tata cara memakai pressure dan buttons di Clincoo supaya goresan pena tidak sama dengan klik mouse.",
   "content": "<p class=\\\"mb-4\\\">Klik dan goresan pena sering tertukar jika handler hanya membaca clientX. Pena punya tekanan, mouse punya tombol, jari biasanya tidak punya keduanya.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Baca pressure dan buttons di pointermove</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> pada pointermove simpan event.pressure (0 sampai 1) dan event.buttons. Tombol utama mouse adalah 1. Pena dengan tekanan di atas 0 sedang menyentuh permukaan. Jangan anggap pressure 0 sebagai hapus garis; itu bisa berarti pena melayang.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Cabangkan pena, mouse, dan sentuh</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> jika pointerType adalah pen dan pressure lebih dari 0, gambar stroke. Jika mouse dan buttons 1, perlakukan sebagai seret. Jika touch, abaikan tekanan. Catat ambang tekanan di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a> agar goresan tipis tidak hilang di tablet murah.</p>",
   "source": "MDN — PointerEvent.pressure",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pressure",
   "sourceSnippet": "The pressure is a normalized value between 0 and 1, where 0 is no pressure and 1 is maximum pressure.",
   "source2": "MDN — PointerEvent.buttons",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/buttons",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Read Pen Pressure and Pointer Buttons",
   "desc": "How to use pressure and buttons in Clincoo so a pen stroke is not treated as a mouse click.",
   "content": "<p class=\\\"mb-4\\\">A click and a pen stroke get mixed up if the handler only reads clientX. A pen has pressure, a mouse has buttons, and a finger usually has neither.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Read pressure and buttons on pointermove</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> on pointermove store event.pressure (0 to 1) and event.buttons. The primary mouse button is 1. A pen with pressure above 0 is touching the surface. Do not treat pressure 0 as an erase; it can mean the pen is hovering.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Branch pen, mouse, and touch</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> if pointerType is pen and pressure is above 0, draw a stroke. If it is a mouse and buttons is 1, treat it as a drag. If it is touch, ignore pressure. Note the pressure threshold in <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a> so thin strokes do not disappear on cheap tablets.</p>",
   "source": "MDN — PointerEvent.pressure",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pressure",
   "sourceSnippet": "The pressure is a normalized value between 0 and 1, where 0 is no pressure and 1 is maximum pressure.",
   "source2": "MDN — PointerEvent.buttons",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/buttons",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "pointer-lostpointercapture-saat-gestur-putus",
 "langs": {
  "id": {
   "title": "Cara Tangani lostpointercapture Saat Gestur Terputus",
   "desc": "Tata cara mereset state geser Clincoo ketika pointer capture hilang tanpa pointerup.",
   "content": "<p class=\\\"mb-4\\\">setPointerCapture tidak selalu diakhiri pointerup. Tab berpindah, dialog OS, atau elemen dilepas bisa memutus capture diam-diam.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Dengarkan lostpointercapture</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> setelah setPointerCapture, dengarkan lostpointercapture pada elemen yang sama. Di handler itu hapus flag sedang-geser, batalkan requestAnimationFrame yang tertunda, dan jangan tulis koordinat terakhir sebagai titik akhir.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Jangan andalkan pointerup saja</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> uji dengan menarik kanvas lalu beralih tab. Tanpa lostpointercapture, kanvas tetap mengira jari masih menekan. Catat kasus ini di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a> bersama pointercancel agar kedua jalur reset sama.</p>",
   "source": "MDN — Element: lostpointercapture",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/lostpointercapture_event",
   "sourceSnippet": "The lostpointercapture event is fired when a captured pointer is released.",
   "source2": "MDN — Element.setPointerCapture",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Handle lostpointercapture When a Gesture Breaks",
   "desc": "How to reset Clincoo drag state when pointer capture ends without a pointerup.",
   "content": "<p class=\\\"mb-4\\\">setPointerCapture does not always end with pointerup. A tab switch, an OS dialog, or a removed element can drop capture silently.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Listen for lostpointercapture</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> after setPointerCapture, listen for lostpointercapture on the same element. In that handler clear the dragging flag, cancel a pending requestAnimationFrame, and do not write the last coordinates as the end point.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Do not rely on pointerup alone</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> test by dragging the canvas and then switching tabs. Without lostpointercapture the canvas still thinks a finger is down. Note this case in <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a> next to pointercancel so both reset paths match.</p>",
   "source": "MDN — Element: lostpointercapture",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/lostpointercapture_event",
   "sourceSnippet": "The lostpointercapture event is fired when a captured pointer is released.",
   "source2": "MDN — Element.setPointerCapture",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "pointer-media-any-pointer-dan-hover",
 "langs": {
  "id": {
   "title": "Cara Deteksi Perangkat Pointer dengan any-pointer dan hover",
   "desc": "Tata cara menyesuaikan UI Clincoo untuk mouse, sentuh, atau pena lewat media query pointer.",
   "content": "<p class=\\\"mb-4\\\">Lebar layar tidak memberitahu apakah pengguna memakai mouse. Tablet lebar bisa sentuh, laptop kecil bisa trackpad.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Pakai any-pointer dan hover</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> tambah media query any-pointer: coarse untuk target sentuh minimal 44px, dan hover: hover untuk menampilkan tooltip hanya jika perangkat bisa hover. Jangan sembunyikan aksi penting di balik hover.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Uji di mode perangkat</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> buka DevTools, ganti input menjadi touch, lalu muat ulang. Tombol yang hanya muncul saat hover harus tetap punya jalur sentuh. Simpan hasil uji di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a> agar layout editor tidak mengandalkan mouse saja.</p>",
   "source": "MDN — any-pointer",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-pointer",
   "sourceSnippet": "The any-pointer CSS media feature tests whether the user has a pointing device, and if so, how accurate it is.",
   "source2": "MDN — hover",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Detect a Pointer Device with any-pointer and hover",
   "desc": "How to adapt the Clincoo UI for mouse, touch, or pen using pointer media queries.",
   "content": "<p class=\\\"mb-4\\\">Screen width does not say whether the user has a mouse. A wide tablet can be touch-only, and a small laptop can have a trackpad.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Use any-pointer and hover</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> add an any-pointer: coarse media query for a 44px minimum touch target, and hover: hover to show tooltips only when the device can hover. Do not hide an essential action behind hover.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Test in device mode</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> open DevTools, switch input to touch, then reload. A button that only appears on hover still needs a touch path. Save the test notes in <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a> so the editor layout does not assume a mouse.</p>",
   "source": "MDN — any-pointer",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-pointer",
   "sourceSnippet": "The any-pointer CSS media feature tests whether the user has a pointing device, and if so, how accurate it is.",
   "source2": "MDN — hover",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "pointer-cegah-scroll-saat-gambar",
 "langs": {
  "id": {
   "title": "Cara Cegah Scroll Halaman Saat Menggambar dengan Pointer",
   "desc": "Tata cara menahan scroll browser di Clincoo saat jari menggambar di kanvas.",
   "content": "<p class=\\\"mb-4\\\">Tanpa touch-action dan preventDefault yang tepat, geser pena ikut menggulir halaman. Garis jadi patah dan kanvas bergeser.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Pasang touch-action dan listener non-pasif</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> set touch-action: none pada kanvas. Daftarkan pointerdown dengan {passive:false} hanya jika Anda memanggil preventDefault. Jangan memasang listener non-pasif di seluruh dokumen.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Cegah default hanya saat menggambar</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> panggil preventDefault di pointerdown saat target adalah kanvas, lalu setPointerCapture. Di luar kanvas biarkan scroll normal. Uji di ponsel sungguhan, bukan hanya emulator, dan catat hasilnya di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — touch-action",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",
   "sourceSnippet": "The touch-action CSS property sets how an element's region can be manipulated by a touchscreen user.",
   "source2": "MDN — Event.preventDefault",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Stop the Page from Scrolling While Drawing with a Pointer",
   "desc": "How to keep the browser from scrolling in Clincoo while a finger draws on the canvas.",
   "content": "<p class=\\\"mb-4\\\">Without the right touch-action and preventDefault, a pen drag also scrolls the page. The stroke breaks and the canvas shifts.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Set touch-action and a non-passive listener</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> set touch-action: none on the canvas. Register pointerdown with {passive:false} only if you call preventDefault. Do not attach a non-passive listener to the whole document.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Prevent default only while drawing</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> call preventDefault on pointerdown when the target is the canvas, then setPointerCapture. Outside the canvas leave scrolling alone. Test on a real phone, not only an emulator, and note the result in <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — touch-action",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",
   "sourceSnippet": "The touch-action CSS property sets how an element's region can be manipulated by a touchscreen user.",
   "source2": "MDN — Event.preventDefault",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "pointer-id-multi-sentuh",
 "langs": {
  "id": {
   "title": "Cara Lacak Beberapa Jari dengan pointerId",
   "desc": "Tata cara menyimpan jejak multi-sentuh di Clincoo memakai pointerId, bukan satu variabel global.",
   "content": "<p class=\\\"mb-4\\\">Satu variabel lastX rusak begitu jari kedua menyentuh. pointermove dari dua jari saling menimpa.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Simpan state per pointerId</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> buat Map. Pada pointerdown simpan koordinat dengan kunci event.pointerId. Pada pointermove perbarui entri yang sama. Pada pointerup, pointercancel, dan lostpointercapture hapus kunci itu.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Jangan campur jari</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> uji cubit dua jari di kanvas. Tiap pointerId harus punya jalur sendiri. Jika Map masih berisi id setelah jari diangkat, ada jalur reset yang terlewat. Tuliskan id yang tertinggal di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a> saat debug.</p>",
   "source": "MDN — PointerEvent.pointerId",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerId",
   "sourceSnippet": "The pointerId read-only property of the PointerEvent interface provides an identifier for the pointer that caused the event.",
   "source2": "MDN — Pointer events",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Track Multiple Fingers with pointerId",
   "desc": "How to store a multi-touch trail in Clincoo with pointerId instead of one global variable.",
   "content": "<p class=\\\"mb-4\\\">A single lastX variable breaks as soon as a second finger lands. pointermove events from two fingers overwrite each other.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Store state per pointerId</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> create a Map. On pointerdown store coordinates keyed by event.pointerId. On pointermove update that same entry. On pointerup, pointercancel, and lostpointercapture delete the key.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Do not mix fingers</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> test a two-finger pinch on the canvas. Each pointerId needs its own path. If the Map still holds an id after the finger lifts, a reset path was skipped. Write the leftover id in <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a> while debugging.</p>",
   "source": "MDN — PointerEvent.pointerId",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerId",
   "sourceSnippet": "The pointerId read-only property of the PointerEvent interface provides an identifier for the pointer that caused the event.",
   "source2": "MDN — Pointer events",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "pointer-rawupdate-garis-halus",
 "langs": {
  "id": {
   "title": "Cara Gambar Garis Halus dengan pointerrawupdate",
   "desc": "Tata cara memakai pointerrawupdate di Clincoo agar goresan pena tidak patah-patah di antara pointermove.",
   "content": "<p class=\"mb-4\">pointermove bisa di-koalese browser. Pada pena, titik yang hilang membuat garis patah meski tangan bergerak mulus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Dengarkan pointerrawupdate hanya saat menggambar</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pasang setPointerCapture pada pointerdown, lalu dengarkan pointerrawupdate. Simpan titik terakhir per pointerId. Gambar segmen dari titik lama ke event.getCoalescedEvents jika ada, dan tetap baca pointerrawupdate untuk sampel yang lebih rapat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan biarkan listener hidup terus</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> lepas listener pada pointerup dan pointercancel. Uji pena lambat lalu pena cepat. Jika garis masih patah, catat jumlah event per detik di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum mengganti ke event lain.</p>",
   "source": "MDN — Element: pointerrawupdate",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerrawupdate_event",
   "sourceSnippet": "The pointerrawupdate event is fired when a pointer changes coordinates, and the event is not coalesced.",
   "source2": "MDN — getCoalescedEvents",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/getCoalescedEvents",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Draw a Smooth Line with pointerrawupdate",
   "desc": "How to use pointerrawupdate in Clincoo so a pen stroke does not break between pointermove events.",
   "content": "<p class=\"mb-4\">The browser can coalesce pointermove. With a pen, missing points make a jagged stroke even when the hand moved smoothly.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Listen to pointerrawupdate only while drawing</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> call setPointerCapture on pointerdown, then listen for pointerrawupdate. Keep the last point per pointerId. Draw a segment from the old point through event.getCoalescedEvents when present, and still read pointerrawupdate for denser samples.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not leave the listener running</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> remove the listener on pointerup and pointercancel. Test a slow pen stroke, then a fast one. If the line is still broken, note events per second on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before switching events.</p>",
   "source": "MDN — Element: pointerrawupdate",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerrawupdate_event",
   "sourceSnippet": "The pointerrawupdate event is fired when a pointer changes coordinates, and the event is not coalesced.",
   "source2": "MDN — getCoalescedEvents",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/getCoalescedEvents",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
