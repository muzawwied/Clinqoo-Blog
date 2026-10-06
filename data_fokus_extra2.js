// Clincoo Docs — tambah artikel Fokus +1 (6 Oktober 2026, 12:00 WIB)
// Clincoo Docs — artikel tambahan Fokus (6 Oktober 2026, 08:00 WIB — tambah 5 artikel)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["fokus"]) {
    window.countryDataFiles["fokus"] = { "names": { "id": "Fokus", "en": "Focus" }, "articles": [] };
  }
  var list = window.countryDataFiles["fokus"].articles;
  var extra = [
 {
  "id": "fokus-pindahkan-fokus-ke-pesan-error",
  "langs": {
   "id": {
    "title": "Cara Pindahkan Fokus ke Pesan Error Form",
    "desc": "Tata cara memindahkan fokus keyboard ke pesan error setelah validasi form Clincoo gagal.",
    "content": "<p class=\"mb-4\">Form yang hanya menampilkan teks merah di atas membuat pengguna keyboard tidak tahu ke mana harus pergi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Fokuskan elemen yang gagal dulu</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> setelah validasi gagal, panggil focus() pada input pertama yang tidak valid. Jika pesan error terpisah, beri id dan tautkan dengan aria-describedby. Jangan hanya menggulir halaman tanpa memindahkan fokus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji kirim form kosong</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tekan Enter pada tombol kirim saat field wajib kosong. Fokus harus mendarat di field itu, dan pembaca layar membacakan pesan. Catat id pesan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — HTMLElement.focus()",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus",
    "sourceSnippet": "HTMLElement.focus() moves keyboard focus to the element, which is how an invalid field should receive attention after submit.",
    "source2": "WCAG — Error Identification",
    "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   },
   "en": {
    "title": "How to Move Focus to a Form Error Message",
    "desc": "How to move keyboard focus to the error message after Clincoo form validation fails.",
    "content": "<p class=\"mb-4\">A form that only paints red text at the top leaves keyboard users unsure where to go next.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Focus the first invalid field</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> after validation fails, call focus() on the first invalid input. If the error is separate, give it an id and link it with aria-describedby. Do not only scroll the page without moving focus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test an empty submit</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> press Enter on the submit button while a required field is empty. Focus should land on that field, and a screen reader should announce the message. Record the message id on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — HTMLElement.focus()",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus",
    "sourceSnippet": "HTMLElement.focus() moves keyboard focus to the element, which is how an invalid field should receive attention after submit.",
    "source2": "WCAG — Error Identification",
    "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 },
 {
  "id": "fokus-pakai-inert-pada-latar-modal",
  "langs": {
   "id": {
    "title": "Cara Pakai inert pada Latar Belakang Modal",
    "desc": "Tata cara memakai atribut inert agar fokus tidak lolos ke halaman di belakang modal Clincoo.",
    "content": "<p class=\"mb-4\">Modal kustom yang hanya menaruh overlay visual masih bisa di-Tab. Atribut inert membuat latar tidak bisa difokus dan tidak bisa diklik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set inert saat modal terbuka</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada elemen pembungkus halaman di luar dialog, set inert saat modal dibuka dan hapus saat ditutup. Gabungkan dengan dialog.showModal bila memungkinkan. Jangan menaruh inert pada tombol tutup.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek Tab tidak menembus overlay</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka modal lalu tekan Tab berulang. Fokus harus tetap di dalam dialog. Setelah tutup, menu utama harus bisa di-Tab lagi. Simpan hasil di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — inert",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert",
    "sourceSnippet": "The inert global attribute makes a subtree non-interactive: it cannot be focused or clicked.",
    "source2": "MDN — dialog element",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   },
   "en": {
    "title": "How to Use inert on the Modal Background",
    "desc": "How to use the inert attribute so focus cannot escape to the page behind a Clincoo modal.",
    "content": "<p class=\"mb-4\">A custom modal that only draws a visual overlay can still be tabbed. The inert attribute makes the background unfocusable and unclickable.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set inert while the modal is open</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set inert on the page wrapper outside the dialog when the modal opens, and remove it on close. Prefer dialog.showModal when you can. Do not put inert on the close button.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check that Tab cannot pass the overlay</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the modal and press Tab repeatedly. Focus should stay inside the dialog. After close, the main menu should be tabbable again. Save the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — inert",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert",
    "sourceSnippet": "The inert global attribute makes a subtree non-interactive: it cannot be focused or clicked.",
    "source2": "MDN — dialog element",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 },
 {
  "id": "fokus-hindari-autofocus-yang-mengagetkan",
  "langs": {
   "id": {
    "title": "Cara Hindari autofocus yang Mengagetkan Pengguna",
    "desc": "Tata cara membatasi autofocus di halaman Clincoo agar fokus tidak meloncat saat halaman selesai dimuat.",
    "content": "<p class=\"mb-4\">autofocus pada input pencarian memindahkan kursor sebelum pengguna selesai membaca judul. Di ponsel, keyboard bisa langsung terbuka dan menutupi konten.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Autofocus hanya di dialog singkat</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> hapus autofocus dari halaman utama. Sisakan hanya di dialog yang baru dibuka, misalnya kolom nama di form singkat. Jangan menggabungkan autofocus dengan scroll otomatis yang panjang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Muat ulang dan amati fokus awal</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> muat ulang halaman. Fokus awal harus di dokumen, bukan di input tersembunyi. Buka dialog dan pastikan fokus pindah baru setelah dialog tampil. Catat pengecualian di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — autofocus",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus",
    "sourceSnippet": "The autofocus attribute focuses an element on page load, which can steal focus and open a mobile keyboard.",
    "source2": "WCAG — On Focus",
    "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   },
   "en": {
    "title": "How to Avoid autofocus That Surprises Users",
    "desc": "How to limit autofocus on Clincoo pages so focus does not jump when the page finishes loading.",
    "content": "<p class=\"mb-4\">autofocus on a search input moves the cursor before the user finishes reading the heading. On a phone, the keyboard can open immediately and cover the content.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Autofocus only inside a short dialog</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> remove autofocus from the main page. Keep it only in a dialog that just opened, such as a name field in a short form. Do not combine autofocus with a long automatic scroll.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reload and watch the initial focus</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> reload the page. Initial focus should stay on the document, not a hidden input. Open a dialog and confirm focus moves only after the dialog is visible. Note exceptions on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — autofocus",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus",
    "sourceSnippet": "The autofocus attribute focuses an element on page load, which can steal focus and open a mobile keyboard.",
    "source2": "WCAG — On Focus",
    "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 },
 {
  "id": "fokus-cincin-fokus-terlihat-di-mode-gelap",
  "langs": {
   "id": {
    "title": "Cara Buat Cincin Fokus Terlihat di Mode Gelap",
    "desc": "Tata cara memilih warna cincin fokus yang kontras di tema terang dan gelap Clincoo.",
    "content": "<p class=\"mb-4\">Cincin biru di latar biru gelap hampir hilang. Pengguna keyboard tidak melihat kontrol yang sedang aktif.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai warna cincin yang kontras di dua tema</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set outline pada :focus-visible dengan warna yang lolos kontras 3:1 terhadap latar di sekitarnya. Di mode gelap, jangan memakai abu-abu gelap. Tambahkan outline-offset 2px agar cincin tidak menempel teks.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan terang dan gelap</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ubah tema lalu Tab melewati tombol utama. Cincin harus terlihat tanpa menghalangi label. Simpan dua cuplikan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "WCAG — Non-text Contrast",
    "sourceUrl": "https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html",
    "sourceSnippet": "Focus indicators need at least 3:1 contrast against adjacent colors so the ring stays visible.",
    "source2": "MDN — :focus-visible",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   },
   "en": {
    "title": "How to Keep the Focus Ring Visible in Dark Mode",
    "desc": "How to pick a focus ring color that stays contrasted in Clincoo light and dark themes.",
    "content": "<p class=\"mb-4\">A blue ring on a dark blue background nearly disappears. Keyboard users cannot see which control is active.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use a ring color that contrasts in both themes</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set the :focus-visible outline to a color that clears 3:1 contrast against the nearby background. In dark mode, do not use dark gray. Add a 2px outline-offset so the ring does not sit on the text.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare light and dark</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> switch theme and Tab through the primary button. The ring should stay visible without covering the label. Save both screenshots on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "WCAG — Non-text Contrast",
    "sourceUrl": "https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html",
    "sourceSnippet": "Focus indicators need at least 3:1 contrast against adjacent colors so the ring stays visible.",
    "source2": "MDN — :focus-visible",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 },
 {
  "id": "fokus-indikator-fokus-pada-input",
  "langs": {
   "id": {
    "title": "Cara Tandai Fokus pada Input dan Textarea",
    "desc": "Tata cara menandai fokus keyboard pada input Clincoo tanpa mengandalkan perubahan warna saja.",
    "content": "<p class=\"mb-4\">Input yang hanya berubah border 1px sering tidak terlihat saat kontras rendah. Pengguna tidak yakin kursor sudah masuk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tambah outline, bukan hanya border</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada input dan textarea, tambahkan :focus-visible dengan outline 2px solid. Pertahankan border yang sudah ada supaya layout tidak bergeser. Jangan menghapus placeholder sebagai satu-satunya petunjuk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tab masuk dan keluar field</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> Tab dari label ke input, lalu ke textarea, lalu ke tombol. Setiap field harus punya penanda selain warna isian. Catat selector yang dipakai di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — :focus-visible",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible",
    "sourceSnippet": ":focus-visible lets you style a focus ring for keyboard use without showing it on every mouse click.",
    "source2": "WCAG — Focus Visible",
    "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   },
   "en": {
    "title": "How to Mark Focus on Inputs and Textareas",
    "desc": "How to mark keyboard focus on Clincoo inputs without relying on a color change alone.",
    "content": "<p class=\"mb-4\">An input that only changes a 1px border is often invisible at low contrast. Users are unsure the cursor entered the field.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add an outline, not only a border</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> on inputs and textareas, add :focus-visible with a 2px solid outline. Keep the existing border so the layout does not shift. Do not remove the placeholder as the only cue.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tab into and out of fields</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> Tab from the label to the input, then the textarea, then the button. Each field needs a cue besides fill color. Record the selector on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — :focus-visible",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible",
    "sourceSnippet": ":focus-visible lets you style a focus ring for keyboard use without showing it on every mouse click.",
    "source2": "WCAG — Focus Visible",
    "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 }
,
{
 "id": "fokus-kembalikan-fokus-setelah-hapus-elemen",
 "langs": {
  "id": {
   "title": "Cara Kembalikan Fokus Setelah Elemen Dihapus",
   "desc": "Tata cara memindahkan fokus keyboard setelah elemen yang sedang aktif dihapus, supaya kursor tidak hilang dari halaman Clincoo.",
   "content": "<p class=\"mb-4\">Menghapus tombol yang sedang fokus membuat penekanan Tab berikutnya tidak terduga, karena browser tidak selalu memilih target yang masuk akal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tentukan target sebelum hapus</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan referensi elemen berikutnya, misalnya tombol di atasnya atau tautan kembali. Hapus elemen aktif hanya setelah target itu ada di DOM dan bisa menerima fokus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pindahkan lalu uji Tab</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> panggil focus pada target setelah penghapusan. Tekan Tab dan Shift+Tab di pratinjau. Jika fokus hilang, jangan menutupinya dengan outline none. Catat pola ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTMLElement.focus()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus",
   "sourceSnippet": "Calling focus moves keyboard focus to an element that remains in the document.",
   "source2": "WAI-ARIA Authoring Practices — keyboard",
   "source2Url": "https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Restore Focus After Removing an Element",
   "desc": "How to move keyboard focus after the active element is removed so the cursor does not disappear from a Clincoo page.",
   "content": "<p class=\"mb-4\">Removing the button that currently has focus makes the next Tab press unpredictable, because the browser does not always choose a sensible target.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Choose the target before removal</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> keep a reference to the next element, such as the button above it or a back link. Remove the active element only after that target is in the DOM and can accept focus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Move focus, then test Tab</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> call focus on the target after the removal. Press Tab and Shift+Tab in the preview. If focus disappears, do not hide that by setting outline to none. Note this pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTMLElement.focus()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus",
   "sourceSnippet": "Calling focus moves keyboard focus to an element that remains in the document.",
   "source2": "WAI-ARIA Authoring Practices — keyboard",
   "source2Url": "https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/",
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
