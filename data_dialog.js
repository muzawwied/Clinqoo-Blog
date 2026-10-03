// Clincoo Docs — kategori Dialog HTML (Oktober 2026)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["dialog"] = {
 "names": {
  "id": "Dialog HTML",
  "en": "HTML Dialog"
 },
 "articles": [
  {
   "id": "dialog-bukan-div-modal",
   "langs": {
    "id": {
     "title": "Cara Buka Modal dengan dialog, Bukan Div",
     "desc": "Tata cara memakai elemen dialog dan showModal di halaman Clincoo supaya fokus terkunci dan Escape menutup modal.",
     "content": "<p class=\"mb-4\">Modal dari div yang di-position fixed sering meninggalkan fokus di belakang layar. Elemen dialog dengan showModal mengunci interaksi ke jendela itu dan menutupnya dengan Escape.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai showModal, bukan atribut open saja</h2><p class=\"mb-4\">open membuat dialog terlihat, tetapi tidak selalu menjadi modal. Dari tombol, panggil showModal(). Tutup dengan close() pada tombol Batal, dan dengarkan event close. Jangan buat dua dialog terbuka bersamaan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri nama jendela</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan aria-labelledby yang menunjuk ke judul di dalam dialog. Tombol pemicu harus menjelaskan aksi: “Hapus proyek”, bukan ikon tanpa nama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kembalikan fokus setelah tutup</h2><p class=\"mb-4\">Setelah close, fokus sebaiknya kembali ke tombol yang membuka modal. Cek di preview <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> selebar ponsel: dialog tidak boleh lebih lebar dari layar, dan latar belakang tidak ikut tergulir.</p>",
     "source": "MDN — The Dialog element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
     "sourceSnippet": "The dialog element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.",
     "source2": "MDN — HTMLDialogElement.showModal()",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Open a Modal with dialog Instead of a Div",
     "desc": "How to use the dialog element and showModal on a Clincoo page so focus is trapped and Escape closes the modal.",
     "content": "<p class=\"mb-4\">A modal built from a fixed div often leaves focus on the page behind it. The dialog element with showModal confines interaction to that window and closes it with Escape.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use showModal, not only the open attribute</h2><p class=\"mb-4\">open makes a dialog visible, but it is not always modal. From a button, call showModal(). Close with close() on the Cancel button, and listen for the close event. Do not open two dialogs at once.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Name the window</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add aria-labelledby pointing at the heading inside the dialog. The trigger button should name the action: “Delete project”, not an unlabeled icon.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Restore focus after close</h2><p class=\"mb-4\">After close, focus should return to the button that opened the modal. Check the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview at phone width: the dialog must not be wider than the screen, and the background should not scroll.</p>",
     "source": "MDN — The Dialog element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
     "sourceSnippet": "The dialog element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.",
     "source2": "MDN — HTMLDialogElement.showModal()",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  }
 ]
};
