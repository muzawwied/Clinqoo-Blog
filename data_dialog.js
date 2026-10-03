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
  },
  {
   "id": "dialog-form-method-dialog",
   "langs": {
    "id": {
     "title": "Cara Kirim Form di dalam dialog dengan method dialog",
     "desc": "Tata cara memakai form method dialog di Clincoo supaya submit menutup jendela dan mengirim nilai tanpa memuat ulang halaman.",
     "content": "<p class=\"mb-4\">Form di dalam dialog yang memakai method post sering memuat ulang preview. method dialog menutup jendela dan mengisi returnValue dengan nilai tombol submit, tanpa navigasi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Setel method dialog dan nama tombol</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bungkus isian dengan form method=\"dialog\". Tombol Simpan beri name dan value, misalnya name=\"aksi\" value=\"simpan\". Tombol Batal cukup type=\"submit\" dengan value=\"batal\", atau type=\"button\" yang memanggil close().</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca hasilnya di event close</h2><p class=\"mb-4\">Setelah form terkirim, dialog menutup dan event close terpicu. Baca dialog.returnValue untuk membedakan simpan dan batal. Jangan andalkan input di luar dialog; yang ikut terkirim hanya kontrol sukses di dalam form itu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan Enter di input teks mengirim form, bukan membuka dialog kedua. Jika validasi gagal, panggil preventDefault pada submit dan biarkan dialog tetap terbuka.</p>",
     "source": "MDN — form method dialog",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#method",
     "sourceSnippet": "dialog: When the form is inside a dialog, closes the dialog and sets returnValue to the value of the submit button.",
     "source2": "MDN — HTMLDialogElement.returnValue",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Submit a Form Inside dialog with method dialog",
     "desc": "How to use a form with method dialog in Clincoo so submit closes the window and sends values without reloading the page.",
     "content": "<p class=\"mb-4\">A form inside a dialog that uses method post often reloads the preview. method dialog closes the window and fills returnValue with the submit button value, without navigation.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set method dialog and name the button</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> wrap the fields in a form with method=\"dialog\". Give the Save button a name and value, for example name=\"aksi\" value=\"simpan\". Cancel can be type=\"submit\" with value=\"batal\", or type=\"button\" that calls close().</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read the result on the close event</h2><p class=\"mb-4\">After the form submits, the dialog closes and the close event fires. Read dialog.returnValue to tell save from cancel. Do not rely on inputs outside the dialog; only the successful controls inside that form are submitted.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> make sure Enter in a text input submits the form, rather than opening a second dialog. If validation fails, call preventDefault on submit and leave the dialog open.</p>",
     "source": "MDN — form method dialog",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#method",
     "sourceSnippet": "dialog: When the form is inside a dialog, closes the dialog and sets returnValue to the value of the submit button.",
     "source2": "MDN — HTMLDialogElement.returnValue",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "dialog-tutup-lewat-backdrop",
   "langs": {
    "id": {
     "title": "Cara Tutup dialog saat Klik Backdrop",
     "desc": "Tata cara menutup dialog modal Clincoo hanya jika klik jatuh di backdrop, bukan di panel isi.",
     "content": "<p class=\"mb-4\">showModal menampilkan backdrop, tetapi klik di area gelap tidak otomatis memanggil close. Tanpa penanganan, pengguna mengira jendela macet.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan target klik dengan dialog</h2><p class=\"mb-4\">Pasang listener click pada elemen dialog. Tutup hanya jika event.target adalah dialog itu sendiri. Klik di panel dalam punya target anak, jadi jendela tetap terbuka.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan tutup dialog konfirmasi bahaya</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> dialog hapus proyek sebaiknya tidak tertutup lewat backdrop. Pakai pola ini hanya untuk pratinjau atau pilihan yang bisa dibatalkan. Tombol tutup tetap wajib, karena tidak semua pengguna mengklik area gelap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji pointer dan keyboard</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> cek klik, ketuk ponsel, dan Escape. Backdrop klik tidak boleh ikut menekan tombol di halaman belakang.</p>",
     "source": "MDN — HTMLDialogElement",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement",
     "sourceSnippet": "The ::backdrop CSS pseudo-element can be used to style the backdrop that is shown behind a modal dialog.",
     "source2": "MDN — ::backdrop",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop",
     "source3": "Clincoo App",
     "source3Url": "https://app.clincoo.buzz/"
    },
    "en": {
     "title": "How to Close a dialog When the Backdrop Is Clicked",
     "desc": "How to close a Clincoo modal dialog only when the click lands on the backdrop, not on the content panel.",
     "content": "<p class=\"mb-4\">showModal paints a backdrop, but a click on the dimmed area does not call close by itself. Without a handler, people think the window is stuck.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare the click target with the dialog</h2><p class=\"mb-4\">Add a click listener on the dialog element. Close only when event.target is the dialog itself. A click on the inner panel has a child target, so the window stays open.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not dismiss a dangerous confirm this way</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> a delete-project dialog should not close from the backdrop. Use this pattern only for previews or choices that can be cancelled. A close button is still required, because not everyone clicks the dimmed area.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test pointer and keyboard</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> check click, phone tap, and Escape. A backdrop click must not activate a button on the page behind.</p>",
     "source": "MDN — HTMLDialogElement",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement",
     "sourceSnippet": "The ::backdrop CSS pseudo-element can be used to style the backdrop that is shown behind a modal dialog.",
     "source2": "MDN — ::backdrop",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop",
     "source3": "Clincoo App",
     "source3Url": "https://app.clincoo.buzz/"
    }
   }
  },
  {
   "id": "dialog-inert-pada-latar",
   "langs": {
    "id": {
     "title": "Cara Tandai Latar dengan inert saat dialog Terbuka",
     "desc": "Tata cara memakai atribut inert pada sisa halaman Clincoo saat dialog modal terbuka supaya Tab tidak kabur ke belakang.",
     "content": "<p class=\"mb-4\">Dialog modal sudah menahan fokus, tetapi konten di luarnya masih bisa ikut terbacakan jika struktur halaman membingungkan. inert mengeluarkan subtree dari fokus, klik, dan pohon aksesibilitas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang inert saat showModal</h2><p class=\"mb-4\">Sebelum showModal, setel inert pada main atau pembungkus aplikasi, bukan pada dialog itu sendiri. Simpan elemen yang tadi fokus. Setelah close, hapus inert dan kembalikan fokus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan inert pada leluhur dialog</h2><p class=\"mb-4\">Jika dialog berada di dalam main, inert pada main ikut membekukan dialog. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> letakkan dialog sebagai saudara main, lalu inert hanya pada main.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek dengan Tab</h2><p class=\"mb-4\">Di preview <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tekan Tab berulang. Fokus harus berputar di dalam dialog. Setelah tutup, tombol pemicu harus menerima fokus lagi.</p>",
     "source": "MDN — inert",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert",
     "sourceSnippet": "The inert global attribute is a Boolean attribute indicating that the browser will ignore the element.",
     "source2": "HTML spec — inert",
     "source2Url": "https://html.spec.whatwg.org/multipage/interaction.html#inert",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Mark the Background inert While a dialog Is Open",
     "desc": "How to use the inert attribute on the rest of a Clincoo page while a modal dialog is open so Tab cannot escape behind it.",
     "content": "<p class=\"mb-4\">A modal dialog already traps focus, but content outside it can still be announced if the page structure is confusing. inert removes a subtree from focus, clicks, and the accessibility tree.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set inert when calling showModal</h2><p class=\"mb-4\">Before showModal, set inert on main or the app wrapper, not on the dialog itself. Remember the element that had focus. After close, remove inert and restore focus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not inert an ancestor of the dialog</h2><p class=\"mb-4\">If the dialog sits inside main, inert on main freezes the dialog too. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> place the dialog as a sibling of main, then inert only main.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check with Tab</h2><p class=\"mb-4\">In the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview press Tab repeatedly. Focus should cycle inside the dialog. After close, the trigger button should receive focus again.</p>",
     "source": "MDN — inert",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert",
     "sourceSnippet": "The inert global attribute is a Boolean attribute indicating that the browser will ignore the element.",
     "source2": "HTML spec — inert",
     "source2Url": "https://html.spec.whatwg.org/multipage/interaction.html#inert",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "dialog-baca-return-value",
   "langs": {
    "id": {
     "title": "Cara Baca returnValue setelah dialog Ditutup",
     "desc": "Tata cara mengisi dan membaca returnValue dialog Clincoo supaya pemanggil tahu pilihan pengguna tanpa variabel global.",
     "content": "<p class=\"mb-4\">Menutup dialog dengan close() tanpa nilai membuat pemanggil menebak-nebak. returnValue adalah string hasil yang bisa dibaca setelah event close.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kirim alasan lewat close</h2><p class=\"mb-4\">Tombol Hapus memanggil close(\"hapus\"). Tombol Batal memanggil close(\"batal\") atau close(\"\"). Escape juga menutup modal dan biasanya mengosongkan returnValue, jadi perlakukan string kosong sebagai batal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Dengarkan close, bukan hanya klik</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pasang satu listener close pada dialog. Di situ baca returnValue lalu jalankan aksi. Jangan menghapus proyek langsung di onclick sebelum close, karena pengguna masih bisa membatalkan lewat Escape.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kosongkan nilai sebelum dibuka lagi</h2><p class=\"mb-4\">Setel returnValue ke string kosong sebelum showModal berikutnya. Cek di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bahwa membuka ulang dialog tidak mengulang aksi hapus dari nilai lama.</p>",
     "source": "MDN — HTMLDialogElement.close()",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/close",
     "sourceSnippet": "The close() method closes the dialog. An optional string may be passed as an argument, updating the returnValue of the dialog.",
     "source2": "MDN — HTMLDialogElement.returnValue",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue",
     "source3": "Clincoo Docs",
     "source3Url": "https://docs.clincoo.buzz/"
    },
    "en": {
     "title": "How to Read returnValue After a dialog Closes",
     "desc": "How to set and read a Clincoo dialog returnValue so the caller knows the user's choice without a global variable.",
     "content": "<p class=\"mb-4\">Closing a dialog with close() and no value forces the caller to guess. returnValue is the result string you can read after the close event.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Send the reason through close</h2><p class=\"mb-4\">The Delete button calls close(\"hapus\"). Cancel calls close(\"batal\") or close(\"\"). Escape also closes a modal and usually clears returnValue, so treat an empty string as cancel.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Listen for close, not only clicks</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add one close listener on the dialog. Read returnValue there, then run the action. Do not delete the project in onclick before close, because the user can still cancel with Escape.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Clear the value before opening again</h2><p class=\"mb-4\">Set returnValue to an empty string before the next showModal. Check on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> that reopening the dialog does not repeat a delete from the old value.</p>",
     "source": "MDN — HTMLDialogElement.close()",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/close",
     "sourceSnippet": "The close() method closes the dialog. An optional string may be passed as an argument, updating the returnValue of the dialog.",
     "source2": "MDN — HTMLDialogElement.returnValue",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue",
     "source3": "Clincoo Docs",
     "source3Url": "https://docs.clincoo.buzz/"
    }
   }
  },
  {
   "id": "dialog-fokus-awal-ke-input",
   "langs": {
    "id": {
     "title": "Cara Pindahkan Fokus ke Input Pertama di dialog",
     "desc": "Tata cara mengatur autofokus di dialog Clincoo supaya kursor masuk ke input pertama, bukan ke tombol tutup.",
     "content": "<p class=\"mb-4\">Saat showModal, browser memfokuskan elemen dengan autofocus, atau elemen yang bisa difokus pertama. Jika tombol tutup muncul lebih dulu di DOM, kursor salah tempat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tandai input, bukan tombol ikon</h2><p class=\"mb-4\">Pasang autofocus pada input nama proyek. Jangan pasang autofocus di dua kontrol. Jika dialog berisi peringatan, fokuskan tombol Batal supaya Enter tidak langsung menghapus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Urutkan DOM dengan masuk akal</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> letakkan judul, lalu input, lalu tindakan. Tombol tutup boleh tampil di pojok secara visual, tetapi di DOM ia tidak harus menjadi kontrol pertama jika itu mencuri fokus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji tanpa tetikus</h2><p class=\"mb-4\">Buka dialog dari <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> hanya dengan keyboard. Setelah terbuka, mengetik harus langsung mengisi input. Fokus tidak boleh tetap di tombol yang ada di halaman belakang.</p>",
     "source": "MDN — autofocus",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus",
     "sourceSnippet": "The autofocus global attribute is a Boolean attribute indicating that an element should be focused on page load, or when the dialog it is part of is shown.",
     "source2": "MDN — HTMLDialogElement.showModal()",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Move Focus to the First Input in a dialog",
     "desc": "How to set initial focus in a Clincoo dialog so the cursor lands in the first input, not on the close button.",
     "content": "<p class=\"mb-4\">On showModal, the browser focuses the element with autofocus, or the first focusable element. If a close button comes first in the DOM, the cursor lands in the wrong place.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Mark the input, not an icon button</h2><p class=\"mb-4\">Put autofocus on the project-name input. Do not put autofocus on two controls. If the dialog is a warning, focus Cancel so Enter does not delete immediately.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Order the DOM sensibly</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> place the heading, then the input, then the actions. A close button may sit in a corner visually, but in the DOM it does not have to be the first control if that steals focus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test without a mouse</h2><p class=\"mb-4\">Open the dialog from <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> with the keyboard only. After it opens, typing should fill the input immediately. Focus must not stay on the button in the page behind.</p>",
     "source": "MDN — autofocus",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus",
     "sourceSnippet": "The autofocus global attribute is a Boolean attribute indicating that an element should be focused on page load, or when the dialog it is part of is shown.",
     "source2": "MDN — HTMLDialogElement.showModal()",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  }
 ,
  {
   "id": "dialog-tangani-event-cancel",
   "langs": {
    "id": {
     "title": "Cara Tangani Event cancel saat Escape Menutup dialog",
     "desc": "Tata cara memakai event cancel di dialog Clincoo supaya Escape bisa dicegah jika form belum disimpan.",
     "content": "<p class=\"mb-4\">Menekan Escape pada dialog modal memicu event cancel sebelum jendela tertutup. Tanpa penangan, isian form di editor bisa hilang meski pengguna hanya ingin tetap di jendela itu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Dengarkan cancel, lalu cegah jika perlu</h2><p class=\"mb-4\">Pasang addEventListener('cancel', ...) pada elemen dialog. Jika ada perubahan yang belum disimpan, panggil preventDefault() supaya dialog tetap terbuka. Jangan cegah Escape pada dialog konfirmasi singkat yang tidak menyimpan data.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bedakan cancel dan close</h2><p class=\"mb-4\">cancel terjadi saat penutupan dibatalkan oleh pengguna, misalnya Escape. close terjadi setelah dialog benar-benar tertutup, termasuk lewat close(). Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan draf dulu, baru izinkan cancel.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Buka preview <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, ketik di form, lalu tekan Escape. Dialog harus tetap ada dan fokus tidak loncat ke halaman belakang.</p>",
     "source": "MDN — HTMLDialogElement: cancel event",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/cancel_event",
     "sourceSnippet": "The cancel event fires on dialog when the user requests to dismiss it, such as with the Escape key. Calling preventDefault() keeps the dialog open.",
     "source2": "MDN — The Dialog element",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Handle the cancel Event When Escape Closes a dialog",
     "desc": "How to use the cancel event on a Clincoo dialog so Escape can be blocked when a form is still unsaved.",
     "content": "<p class=\"mb-4\">Pressing Escape on a modal dialog fires the cancel event before the window closes. Without a handler, form input in the editor can disappear even when the user only meant to stay in that window.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Listen for cancel, then prevent it if needed</h2><p class=\"mb-4\">Add addEventListener('cancel', ...) on the dialog element. If there are unsaved changes, call preventDefault() so the dialog stays open. Do not block Escape on a short confirm dialog that does not save data.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Separate cancel from close</h2><p class=\"mb-4\">cancel happens when the user dismisses the dialog, for example with Escape. close happens after the dialog has actually closed, including via close(). In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> save a draft first, then allow cancel.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">Open the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview, type in the form, then press Escape. The dialog should remain and focus should not jump to the page behind it.</p>",
     "source": "MDN — HTMLDialogElement: cancel event",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/cancel_event",
     "sourceSnippet": "The cancel event fires on dialog when the user requests to dismiss it, such as with the Escape key. Calling preventDefault() keeps the dialog open.",
     "source2": "MDN — The Dialog element",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "dialog-hindari-invalidstateerror",
   "langs": {
    "id": {
     "title": "Cara Hindari InvalidStateError saat showModal Dipanggil Ulang",
     "desc": "Tata cara cek dialog.open sebelum showModal di Clincoo supaya klik ganda tidak melempar InvalidStateError.",
     "content": "<p class=\"mb-4\">showModal() hanya boleh dipanggil jika dialog belum terbuka. Klik ganda pada tombol “Hapus” sering memanggilnya dua kali dan browser melempar InvalidStateError.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek open sebelum membuka</h2><p class=\"mb-4\">Sebelum showModal(), baca properti open. Jika sudah true, jangan panggil lagi. Nonaktifkan tombol pemicu selama dialog terbuka, lalu aktifkan kembali di event close.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan bungkus dengan try tanpa pesan</h2><p class=\"mb-4\">try/catch boleh menangkap InvalidStateError, tetapi pengguna tetap perlu tahu kenapa jendela tidak berubah. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tampilkan satu dialog saja, bukan tumpukan modal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji klik cepat</h2><p class=\"mb-4\">Di preview <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> klik tombol pembuka dua kali cepat. Konsol harus bersih dan fokus tetap di dalam dialog.</p>",
     "source": "MDN — HTMLDialogElement.showModal()",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal",
     "sourceSnippet": "If the dialog is already open, calling showModal() throws an InvalidStateError DOMException.",
     "source2": "MDN — HTMLDialogElement.open",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/open",
     "source3": "Clincoo App",
     "source3Url": "https://app.clincoo.buzz/"
    },
    "en": {
     "title": "How to Avoid InvalidStateError When showModal Is Called Again",
     "desc": "How to check dialog.open before showModal in Clincoo so a double click does not throw InvalidStateError.",
     "content": "<p class=\"mb-4\">showModal() may be called only when the dialog is not already open. A double click on a Delete button often calls it twice and the browser throws InvalidStateError.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check open before showing</h2><p class=\"mb-4\">Before showModal(), read the open property. If it is already true, do not call it again. Disable the trigger button while the dialog is open, then enable it again on the close event.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not swallow the error without a message</h2><p class=\"mb-4\">try/catch may catch InvalidStateError, but the user still needs to know why the window did not change. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> show one dialog, not a stack of modals.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test a fast click</h2><p class=\"mb-4\">In the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview, click the opener twice quickly. The console should stay clean and focus should remain inside the dialog.</p>",
     "source": "MDN — HTMLDialogElement.showModal()",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal",
     "sourceSnippet": "If the dialog is already open, calling showModal() throws an InvalidStateError DOMException.",
     "source2": "MDN — HTMLDialogElement.open",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/open",
     "source3": "Clincoo App",
     "source3Url": "https://app.clincoo.buzz/"
    }
   }
  },
  {
   "id": "dialog-closedby-light-dismiss",
   "langs": {
    "id": {
     "title": "Cara Pakai closedby supaya dialog Bisa Ditutup Ringan",
     "desc": "Tata cara mengatur atribut closedby pada dialog Clincoo supaya klik luar atau tombol tutup mengikuti niat desain.",
     "content": "<p class=\"mb-4\">Tidak semua dialog boleh tertutup hanya karena klik jatuh di luar panel. Atribut closedby memberi isyarat browser apakah dialog boleh light-dismiss.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pilih nilai yang sesuai</h2><p class=\"mb-4\">any mengizinkan penutupan dari luar, closerequest membatasi ke permintaan tutup seperti Escape, dan none menolak penutupan ringan. Dialog hapus data di Clincoo sebaiknya none atau closerequest, lalu sediakan tombol Batal yang memanggil close().</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan andalkan klik backdrop saja</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tetap sediakan tombol bertuliskan Batal. Pengguna keyboard tidak mengklik backdrop.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di dua lebar</h2><p class=\"mb-4\">Cek preview <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> di ponsel dan desktop. Klik di luar panel hanya boleh menutup dialog yang memang dirancang light-dismiss.</p>",
     "source": "MDN — HTMLDialogElement.closedBy",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/closedBy",
     "sourceSnippet": "The closedby attribute of the dialog element controls whether the dialog can be dismissed by a light dismiss user action.",
     "source2": "MDN — The Dialog element",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Use closedby So a dialog Can Light-Dismiss",
     "desc": "How to set the closedby attribute on a Clincoo dialog so an outside click or close request matches the design intent.",
     "content": "<p class=\"mb-4\">Not every dialog should close just because a click lands outside the panel. The closedby attribute tells the browser whether the dialog may light-dismiss.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pick the matching value</h2><p class=\"mb-4\">any allows dismissal from outside, closerequest limits it to a close request such as Escape, and none rejects light dismissal. A delete-data dialog in Clincoo should use none or closerequest, then provide a Cancel button that calls close().</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not rely on a backdrop click alone</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> still provide a button labeled Cancel. Keyboard users do not click the backdrop.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test both widths</h2><p class=\"mb-4\">Check the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview on phone and desktop. A click outside the panel should close only a dialog designed for light dismiss.</p>",
     "source": "MDN — HTMLDialogElement.closedBy",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/closedBy",
     "sourceSnippet": "The closedby attribute of the dialog element controls whether the dialog can be dismissed by a light dismiss user action.",
     "source2": "MDN — The Dialog element",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "dialog-beda-show-dan-showmodal",
   "langs": {
    "id": {
     "title": "Cara Pilih show atau showModal untuk dialog",
     "desc": "Tata cara membedakan show dan showModal di Clincoo supaya jendela non-modal tidak mengunci seluruh halaman.",
     "content": "<p class=\"mb-4\">show() membuka dialog tanpa mode modal: halaman belakang tetap bisa diklik. showModal() mengunci interaksi dan menutup dengan Escape. Salah pilih membuat palet warna di editor terasa macet.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai show untuk panel samping</h2><p class=\"mb-4\">Tips singkat, palet, atau catatan yang boleh dibiarkan terbuka saat pengguna mengedit cocok dengan show(). Jangan berharap fokus terkunci. Tutup dengan close() dari tombol yang jelas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai showModal untuk keputusan</h2><p class=\"mb-4\">Konfirmasi hapus, ganti domain, atau buang draf harus showModal(). Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jangan campur keduanya pada elemen yang sama tanpa menutup dulu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek interaksi latar</h2><p class=\"mb-4\">Di preview <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, dialog non-modal harus mengizinkan klik di editor. Dialog modal tidak boleh.</p>",
     "source": "MDN — HTMLDialogElement.show()",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/show",
     "sourceSnippet": "The show() method displays the dialog modelessly. showModal() displays it as a modal dialog and throws if it is already open.",
     "source2": "MDN — HTMLDialogElement.showModal()",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Choose show or showModal for a dialog",
     "desc": "How to tell show from showModal in Clincoo so a non-modal window does not lock the whole page.",
     "content": "<p class=\"mb-4\">show() opens a dialog without modal mode: the page behind stays clickable. showModal() locks interaction and closes with Escape. Picking the wrong one makes a color palette in the editor feel stuck.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use show for a side panel</h2><p class=\"mb-4\">A short tip, palette, or note that may stay open while the user edits fits show(). Do not expect focus to be trapped. Close it with close() from a clearly labeled button.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use showModal for a decision</h2><p class=\"mb-4\">Confirm delete, change domain, or discard a draft must use showModal(). In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> do not mix both on the same element without closing first.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check background interaction</h2><p class=\"mb-4\">In the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview, a non-modal dialog should allow clicks in the editor. A modal dialog must not.</p>",
     "source": "MDN — HTMLDialogElement.show()",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/show",
     "sourceSnippet": "The show() method displays the dialog modelessly. showModal() displays it as a modal dialog and throws if it is already open.",
     "source2": "MDN — HTMLDialogElement.showModal()",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "dialog-kunci-scroll-latar",
   "langs": {
    "id": {
     "title": "Cara Kunci Scroll Latar saat dialog Modal Terbuka",
     "desc": "Tata cara menahan scroll halaman belakang di Clincoo saat dialog modal terbuka, tanpa mengunci scroll di dalam panel.",
     "content": "<p class=\"mb-4\">Di ponsel, gestur gulir sering menggeser halaman di belakang dialog meski showModal sudah dipanggil. Pengguna kehilangan konteks form yang sedang diisi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tahan overflow pada html</h2><p class=\"mb-4\">Saat showModal, set overflow hidden pada html atau body, dan simpan posisi scroll. Saat close, kembalikan nilai semula lalu scroll ke posisi itu. Jangan set hidden permanen di stylesheet.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Biarkan isi dialog menggulir</h2><p class=\"mb-4\">Panel di dalam dialog perlu max-height dan overflow auto. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> form panjang harus tetap bisa digulir di dalam jendela, bukan di halaman belakang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di lebar ponsel</h2><p class=\"mb-4\">Buka preview <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> selebar 390px. Gulir di luar panel tidak boleh menggerakkan latar. Setelah tutup, halaman kembali ke posisi semula.</p>",
     "source": "MDN — HTMLDialogElement.showModal()",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal",
     "sourceSnippet": "A modal dialog should prevent interaction with the rest of the page. Overflow on the document can still scroll behind it unless the page locks scroll while the dialog is open.",
     "source2": "MDN — overflow CSS",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
     "source3": "Clincoo App",
     "source3Url": "https://app.clincoo.buzz/"
    },
    "en": {
     "title": "How to Lock Background Scroll While a Modal dialog Is Open",
     "desc": "How to hold background page scroll in Clincoo while a modal dialog is open, without locking scroll inside the panel.",
     "content": "<p class=\"mb-4\">On a phone, a scroll gesture often moves the page behind a dialog even after showModal. The user loses the form context they were filling in.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hold overflow on html</h2><p class=\"mb-4\">When showModal runs, set overflow hidden on html or body and store the scroll position. On close, restore the previous value and scroll back. Do not set hidden permanently in the stylesheet.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Let the dialog content scroll</h2><p class=\"mb-4\">The panel inside the dialog needs max-height and overflow auto. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> a long form must still scroll inside the window, not on the page behind it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test at phone width</h2><p class=\"mb-4\">Open the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview at 390px. Scrolling outside the panel must not move the background. After close, the page returns to its previous position.</p>",
     "source": "MDN — HTMLDialogElement.showModal()",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal",
     "sourceSnippet": "A modal dialog should prevent interaction with the rest of the page. Overflow on the document can still scroll behind it unless the page locks scroll while the dialog is open.",
     "source2": "MDN — overflow CSS",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
     "source3": "Clincoo App",
     "source3Url": "https://app.clincoo.buzz/"
    }
   }
  }
,
{
 "id": "dialog-kembalikan-fokus-ke-pemicu",
 "langs": {
  "id": {
   "title": "Cara Kembalikan Fokus ke Tombol yang Membuka Dialog",
   "desc": "Tata cara menyimpan pemicu dialog Clincoo dan mengembalikan fokus ke tombol itu setelah dialog ditutup.",
   "content": "<p class=\"mb-4\">Kalau dialog ditutup lalu fokus hilang ke awal halaman, pengguna keyboard harus mengulang tab. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan elemen yang membuka dialog.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan pemicu sebelum showModal</h2><p class=\"mb-4\">Pada klik tombol, simpan document.activeElement ke variabel. Baru panggil dialog.showModal(). Jangan membuka dialog dari skrip tanpa tahu tombol mana yang dipanggil.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kembalikan saat close</h2><p class=\"mb-4\">Dengarkan event close. Jika pemicu masih ada di dokumen, panggil focus() padanya. Jangan memindahkan fokus ke body hanya karena dialog sudah tidak tampil.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan keyboard</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka dialog dengan Enter, tutup dengan Escape, lalu pastikan fokus kembali ke tombol yang sama — bukan ke tautan logo.</p>",
   "source": "MDN — HTMLDialogElement",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement",
   "sourceSnippet": "The HTMLDialogElement interface provides methods to manipulate dialog elements.",
   "source2": "MDN — dialog element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Return Focus to the Button That Opened a Dialog",
   "desc": "How to remember the Clincoo dialog trigger and move focus back to that button after the dialog closes.",
   "content": "<p class=\"mb-4\">If the dialog closes and focus jumps to the top of the page, keyboard users must tab through everything again. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> store the element that opened the dialog.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Store the trigger before showModal</h2><p class=\"mb-4\">On the button click, save document.activeElement in a variable. Then call dialog.showModal(). Do not open the dialog from a script without knowing which button was used.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Restore it on close</h2><p class=\"mb-4\">Listen for the close event. If the trigger is still in the document, call focus() on it. Do not move focus to body only because the dialog is no longer visible.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test with the keyboard</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the dialog with Enter, close it with Escape, and confirm focus returns to the same button — not the logo link.</p>",
   "source": "MDN — HTMLDialogElement",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement",
   "sourceSnippet": "The HTMLDialogElement interface provides methods to manipulate dialog elements.",
   "source2": "MDN — dialog element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
