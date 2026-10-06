// Clincoo Docs — artikel tambahan Fokus (6 Oktober 2026, 07:00 WIB — tambah 3 artikel)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["fokus"]) {
    window.countryDataFiles["fokus"] = { "names": { "id": "Fokus", "en": "Focus" }, "articles": [] };
  }
  var list = window.countryDataFiles["fokus"].articles;
  var extra = [
{
 "id": "fokus-kembalikan-fokus-setelah-tutup-dialog",
 "langs": {
  "id": {
   "title": "Cara Kembalikan Fokus Setelah Dialog Ditutup",
   "desc": "Tata cara mengembalikan fokus keyboard ke tombol pemicu setelah dialog Clincoo ditutup.",
   "content": "<p class=\"mb-4\">Dialog yang menutup tanpa mengembalikan fokus membuat pengguna keyboard tersesat di awal halaman. Simpan elemen yang membuka dialog, lalu fokuskan lagi saat dialog hilang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan pemicu sebelum dialog terbuka</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan document.activeElement ke variabel sebelum memanggil showModal. Saat close, kembalikan focus ke elemen itu jika masih ada di dokumen. Jangan memindahkan fokus ke body.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji buka dan tutup dengan keyboard</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka dialog dengan Enter, tutup dengan Escape, lalu tekan Tab sekali. Fokus harus kembali ke tombol pemicu, bukan ke tautan logo. Catat hasilnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTMLDialogElement: close event",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/close_event",
   "sourceSnippet": "The close event fires on dialog when it is closed, which is the moment to restore focus to the trigger.",
   "source2": "WAI-ARIA APG — Dialog pattern",
   "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Restore Focus After a Dialog Closes",
   "desc": "How to return keyboard focus to the trigger button after a Clincoo dialog closes.",
   "content": "<p class=\"mb-4\">A dialog that closes without restoring focus leaves keyboard users at the top of the page. Store the element that opened the dialog, then focus it again when the dialog goes away.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Store the trigger before the dialog opens</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> save document.activeElement before calling showModal. On close, return focus to that element if it is still in the document. Do not move focus to the body.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test open and close with the keyboard</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the dialog with Enter, close it with Escape, then press Tab once. Focus should return to the trigger button, not the logo link. Record the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTMLDialogElement: close event",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/close_event",
   "sourceSnippet": "The close event fires on dialog when it is closed, which is the moment to restore focus to the trigger.",
   "source2": "WAI-ARIA APG — Dialog pattern",
   "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "fokus-hindari-tabindex-positif",
 "langs": {
  "id": {
   "title": "Cara Hindari tabindex Positif yang Merusak Urutan Tab",
   "desc": "Tata cara menjaga urutan Tab di Clincoo tanpa tabindex lebih dari 0.",
   "content": "<p class=\"mb-4\">tabindex=\"5\" memaksa fokus meloncat sebelum elemen yang secara visual lebih dulu. Urutan Tab yang aneh sulit dijelaskan ke pengguna dan mudah rusak saat layout berubah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gunakan 0 atau hapus tabindex</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> cari tabindex yang angkanya lebih dari 0. Ganti dengan 0 hanya jika elemen kustom harus bisa difokus, atau hapus atributnya bila elemen sudah berupa tautan atau tombol. Susun ulang DOM agar urutan visual sama dengan urutan sumber.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Telusuri Tab dari atas halaman</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tekan Tab dari logo sampai footer. Fokus harus mengikuti urutan baca, bukan meloncat ke tombol di tengah. Tuliskan pengecualian di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> jika suatu widget memang perlu urutan khusus.</p>",
   "source": "MDN — tabindex",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",
   "sourceSnippet": "A positive tabindex value puts the element in a priority sequence that runs before the natural tab order.",
   "source2": "WCAG — Focus Order",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid Positive tabindex That Breaks Tab Order",
   "desc": "How to keep Clincoo Tab order intact without a tabindex greater than 0.",
   "content": "<p class=\"mb-4\">tabindex=\"5\" forces focus to jump ahead of elements that appear first visually. Odd Tab order is hard to explain and breaks again when the layout changes.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use 0 or remove tabindex</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> search for tabindex values greater than 0. Use 0 only when a custom element must be focusable, or remove the attribute when the element is already a link or button. Reorder the DOM so visual order matches source order.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Walk Tab from the top of the page</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> press Tab from the logo to the footer. Focus should follow reading order, not jump to a button in the middle. Note exceptions on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> if a widget truly needs a special order.</p>",
   "source": "MDN — tabindex",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",
   "sourceSnippet": "A positive tabindex value puts the element in a priority sequence that runs before the natural tab order.",
   "source2": "WCAG — Focus Order",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "fokus-periksa-perangkap-fokus-di-modal",
 "langs": {
  "id": {
   "title": "Cara Periksa Perangkap Fokus di Dalam Modal",
   "desc": "Tata cara menahan Tab di dalam modal Clincoo dan melepaskannya saat modal tertutup.",
   "content": "<p class=\"mb-4\">Modal yang tidak menahan Tab membuat fokus lolos ke halaman di belakang. Pengguna bisa mengaktifkan tombol yang tidak terlihat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Batasi Tab pada kontrol di dalam dialog</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> gunakan dialog.showModal agar top layer menahan interaksi. Jika modal dibuat sendiri, pindahkan fokus ke elemen pertama yang bisa difokus, lalu pada Tab terakhir kembalikan ke elemen pertama. Sertakan tombol tutup di dalam siklus itu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pastikan latar tidak ikut terfokus</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka modal lalu tahan Tab sepuluh kali. Fokus tidak boleh mendarat di menu halaman belakang. Setelah tutup, cek bahwa perangkap sudah dilepas. Simpan catatan uji di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTMLDialogElement.showModal",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal",
   "sourceSnippet": "showModal displays the dialog as a modal in the top layer and makes the rest of the page inert.",
   "source2": "WAI-ARIA APG — Modal dialog",
   "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Check a Focus Trap Inside a Modal",
   "desc": "How to keep Tab inside a Clincoo modal and release it when the modal closes.",
   "content": "<p class=\"mb-4\">A modal that does not trap Tab lets focus escape to the page behind it. Users can activate buttons they cannot see.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Limit Tab to controls inside the dialog</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> use dialog.showModal so the top layer holds interaction. If the modal is custom, move focus to the first focusable element, then wrap Tab from the last control back to the first. Include the close button in that cycle.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Make sure the background is not focused</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the modal and hold Tab ten times. Focus must not land on the page menu behind it. After close, check that the trap is released. Keep the test note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTMLDialogElement.showModal",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal",
   "sourceSnippet": "showModal displays the dialog as a modal in the top layer and makes the rest of the page inert.",
   "source2": "WAI-ARIA APG — Modal dialog",
   "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
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
