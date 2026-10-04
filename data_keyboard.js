if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["keyboard"] = {
 "names": {
  "id": "Keyboard",
  "en": "Keyboard"
 },
 "articles": [
  {
   "id": "keyboard-jangan-hapus-outline-tanpa-pengganti",
   "langs": {
    "id": {
     "title": "Cara Jangan Hapus Outline Fokus tanpa Pengganti",
     "desc": "Tata cara menjaga indikator fokus keyboard di Clincoo, bukan menghapus outline lalu hanya mengandalkan klik mouse.",
     "content": "<p class=\"mb-4\">Banyak lembar gaya menulis outline: none pada tombol. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> itu membuat pengguna keyboard tidak tahu elemen mana yang aktif.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti, jangan dihapus</h2><p class=\"mb-4\">Jika outline bawaan bentrok dengan desain, pakai :focus-visible dengan ring yang kontras, misalnya outline 2px solid. Jangan menaruh outline: none pada :focus tanpa pengganti.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bedakan mouse dan keyboard</h2><p class=\"mb-4\">:focus-visible tampil saat navigasi keyboard, bukan setiap klik mouse. Itu cukup untuk tombol dan tautan. Input teks tetap butuh indikator saat difokus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tekan Tab berulang. Cincin fokus harus terlihat di tiap kontrol, termasuk di atas latar terang.</p>",
     "source": "MDN — :focus-visible",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible",
     "sourceSnippet": "The :focus-visible pseudo-class applies while an element matches the :focus pseudo-class and the UA determines that the focus should be made evident on the element.",
     "source2": "MDN — :focus",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Avoid Removing the Focus Outline without a Replacement",
     "desc": "How to keep a keyboard focus indicator on Clincoo instead of removing the outline and relying on mouse clicks.",
     "content": "<p class=\"mb-4\">Many stylesheets set outline: none on buttons. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> that leaves keyboard users unsure which element is active.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Replace it, do not delete it</h2><p class=\"mb-4\">If the default outline clashes with the design, use :focus-visible with a contrasting ring, such as a 2px solid outline. Do not put outline: none on :focus without a replacement.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Separate mouse and keyboard</h2><p class=\"mb-4\">:focus-visible shows for keyboard navigation, not every mouse click. That is enough for buttons and links. Text inputs still need an indicator when focused.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> press Tab repeatedly. The focus ring should stay visible on every control, including over a light background.</p>",
     "source": "MDN — :focus-visible",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible",
     "sourceSnippet": "The :focus-visible pseudo-class applies while an element matches the :focus pseudo-class and the UA determines that the focus should be made evident on the element.",
     "source2": "MDN — :focus",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "keyboard-urutan-tab-yang-masuk-akal",
   "langs": {
    "id": {
     "title": "Cara Atur Urutan Tab yang Masuk Akal",
     "desc": "Tata cara menyusun urutan Tab di halaman Clincoo mengikuti alur baca, bukan tabindex positif yang meloncat-loncat.",
     "content": "<p class=\"mb-4\">Tabindex positif memaksa fokus meloncat sebelum isi halaman. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> urutan alami dari HTML hampir selalu lebih aman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ikuti urutan sumber</h2><p class=\"mb-4\">Letakkan kontrol dalam urutan yang sama dengan yang dibaca. Tautan, tombol, dan input sudah bisa ditab. Jangan menambah tabindex=\"1\" atau lebih besar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sembunyikan yang tidak interaktif</h2><p class=\"mb-4\">Elemen hias tidak perlu tabindex. Panel yang tertutup diberi hidden atau inert supaya Tab tidak masuk ke dalamnya. tabindex=\"-1\" hanya untuk fokus yang dipindahkan skrip.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tab dari atas ke bawah. Fokus harus mengikuti judul, lalu form, lalu tombol kirim, tanpa meloncat ke footer lebih dulu.</p>",
     "source": "MDN — tabindex",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",
     "sourceSnippet": "The tabindex global attribute allows developers to make HTML elements focusable, allow or prevent them from being sequentially focusable, and determine their relative ordering for sequential focus navigation.",
     "source2": "MDN — Keyboard-navigable JavaScript widgets",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets",
     "source3": "Clincoo App",
     "source3Url": "https://app.clincoo.buzz/"
    },
    "en": {
     "title": "How to Set a Sensible Tab Order",
     "desc": "How to order Tab stops on a Clincoo page along the reading flow, not with jumping positive tabindex values.",
     "content": "<p class=\"mb-4\">A positive tabindex forces focus to jump ahead of the page. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> the natural HTML order is almost always safer.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Follow source order</h2><p class=\"mb-4\">Place controls in the same order they are read. Links, buttons, and inputs are already tabbable. Do not add tabindex=\"1\" or higher.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hide what is not interactive</h2><p class=\"mb-4\">Decorative elements do not need tabindex. A closed panel should be hidden or inert so Tab does not enter it. tabindex=\"-1\" is only for focus moved by script.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tab from top to bottom. Focus should follow the heading, then the form, then submit, without jumping to the footer first.</p>",
     "source": "MDN — tabindex",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",
     "sourceSnippet": "The tabindex global attribute allows developers to make HTML elements focusable, allow or prevent them from being sequentially focusable, and determine their relative ordering for sequential focus navigation.",
     "source2": "MDN — Keyboard-navigable JavaScript widgets",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets",
     "source3": "Clincoo App",
     "source3Url": "https://app.clincoo.buzz/"
    }
   }
  },
  {
   "id": "keyboard-fokus-awal-setelah-aksi",
   "langs": {
    "id": {
     "title": "Cara Pindahkan Fokus setelah Aksi Selesai",
     "desc": "Tata cara memindahkan fokus keyboard di Clincoo setelah simpan, hapus, atau buka panel supaya pengguna tidak tertinggal di tombol yang hilang.",
     "content": "<p class=\"mb-4\">Kalau tombol dihapus dari DOM saat diklik, fokus jatuh ke body. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pindahkan fokus ke tempat berikutnya yang masuk akal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pilih target yang sudah ada</h2><p class=\"mb-4\">Setelah simpan, fokus boleh tetap di tombol jika tombolnya masih ada. Setelah hapus baris, pindahkan ke baris berikutnya atau ke judul bagian. Target perlu tabindex=\"-1\" jika bukan kontrol.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan lompat ke atas diam-diam</h2><p class=\"mb-4\">Jangan memanggil focus() pada heading utama setiap kali. Pengumuman status cukup lewat wilayah live. Pindahkan fokus hanya jika elemen lama hilang atau panel baru terbuka.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> hapus item dengan keyboard. Fokus berikutnya harus masih di daftar, bukan hilang ke awal halaman.</p>",
     "source": "MDN — HTMLElement.focus()",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus",
     "sourceSnippet": "The HTMLElement.focus() method sets focus on the specified element, if it can be focused.",
     "source2": "MDN — tabindex",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",
     "source3": "Clincoo App",
     "source3Url": "https://app.clincoo.buzz/"
    },
    "en": {
     "title": "How to Move Focus after an Action Completes",
     "desc": "How to move keyboard focus on Clincoo after save, delete, or opening a panel so the user is not left on a button that disappeared.",
     "content": "<p class=\"mb-4\">If a button is removed from the DOM when clicked, focus falls to the body. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> move focus to the next sensible place.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pick a target that already exists</h2><p class=\"mb-4\">After save, focus can stay on the button if it remains. After deleting a row, move to the next row or the section heading. The target needs tabindex=\"-1\" if it is not a control.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not jump to the top silently</h2><p class=\"mb-4\">Do not call focus() on the main heading every time. A status announcement is enough via a live region. Move focus only when the old element is gone or a new panel opened.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> delete an item with the keyboard. The next focus should stay in the list, not disappear to the top of the page.</p>",
     "source": "MDN — HTMLElement.focus()",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus",
     "sourceSnippet": "The HTMLElement.focus() method sets focus on the specified element, if it can be focused.",
     "source2": "MDN — tabindex",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",
     "source3": "Clincoo App",
     "source3Url": "https://app.clincoo.buzz/"
    }
   }
  },
  {
   "id": "keyboard-escape-menutup-panel",
   "langs": {
    "id": {
     "title": "Cara Tutup Panel dengan Escape",
     "desc": "Tata cara menutup menu atau panel Clincoo dengan tombol Escape lalu mengembalikan fokus ke pemicu.",
     "content": "<p class=\"mb-4\">Panel yang hanya tertutup lewat klik luar menyulitkan keyboard. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> Escape harus menutup panel dan mengembalikan fokus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Dengarkan Escape di panel</h2><p class=\"mb-4\">Pada keydown, jika event.key adalah Escape, cegah default hanya jika panel memang terbuka. Tutup panel, set aria-expanded ke false, lalu focus() ke tombol pemicu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan makan Escape milik browser</h2><p class=\"mb-4\">Jika panel sudah tertutup, jangan memanggil preventDefault. Dialog bawaan sudah menutup sendiri dengan Escape. Jangan memasang listener ganda yang berebut.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka menu dengan Enter, lalu tekan Escape. Panel hilang dan fokus kembali ke tombol yang membukanya.</p>",
     "source": "MDN — KeyboardEvent.key",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key",
     "sourceSnippet": "The KeyboardEvent interface's key read-only property returns the value of the key pressed by the user.",
     "source2": "MDN — dialog element",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Close a Panel with Escape",
     "desc": "How to close a Clincoo menu or panel with Escape and return focus to the trigger.",
     "content": "<p class=\"mb-4\">A panel that only closes on an outside click is hard to leave with the keyboard. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> Escape should close the panel and return focus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Listen for Escape on the panel</h2><p class=\"mb-4\">On keydown, if event.key is Escape, prevent default only while the panel is open. Close the panel, set aria-expanded to false, then focus() the trigger button.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not swallow the browser Escape</h2><p class=\"mb-4\">If the panel is already closed, do not call preventDefault. A native dialog already closes itself on Escape. Do not attach a second listener that fights it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the menu with Enter, then press Escape. The panel should disappear and focus should return to the button that opened it.</p>",
     "source": "MDN — KeyboardEvent.key",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key",
     "sourceSnippet": "The KeyboardEvent interface's key read-only property returns the value of the key pressed by the user.",
     "source2": "MDN — dialog element",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "keyboard-shortcut-jangan-tabrak-browser",
   "langs": {
    "id": {
     "title": "Cara Hindari Shortcut yang Menabrak Browser",
     "desc": "Tata cara menambah pintasan keyboard di Clincoo tanpa merebut Ctrl+S, Ctrl+T, atau pintasan pembaca layar.",
     "content": "<p class=\"mb-4\">Shortcut kustom yang memanggil preventDefault pada kombinasi umum membuat tab browser atau simpan halaman tidak jalan. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih kombinasi yang longgar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hindari kombinasi yang sudah dipakai</h2><p class=\"mb-4\">Jangan merebut Ctrl+T, Ctrl+W, Ctrl+L, atau Ctrl+S. Akseskey satu huruf juga mudah bentrok. Jika perlu pintasan, pakai pola yang jarang dan tampilkan petunjuk di UI, bukan hanya di kode.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Batasi saat fokus di input</h2><p class=\"mb-4\">Jangan menjalankan shortcut huruf saat pengguna mengetik di input atau textarea. Cek event.target sebelum preventDefault. Pengguna harus tetap bisa mengetik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> coba Ctrl+S dan ketik di field. Perilaku browser dan ketikan harus tetap utuh. Pintasanmu hanya jalan di konteks yang kamu dokumentasikan, termasuk catatan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
     "source": "MDN — KeyboardEvent.preventDefault()",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault",
     "sourceSnippet": "The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.",
     "source2": "MDN — accesskey",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Avoid Shortcuts that Collide with the Browser",
     "desc": "How to add a keyboard shortcut on Clincoo without taking Ctrl+S, Ctrl+T, or a screen reader shortcut.",
     "content": "<p class=\"mb-4\">A custom shortcut that calls preventDefault on a common combo breaks a browser tab or page save. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pick a loose combination.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Avoid combinations already taken</h2><p class=\"mb-4\">Do not take Ctrl+T, Ctrl+W, Ctrl+L, or Ctrl+S. A single-letter accesskey also collides easily. If you need a shortcut, use a rare pattern and show the hint in the UI, not only in code.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Limit it while an input is focused</h2><p class=\"mb-4\">Do not run a letter shortcut while the user is typing in an input or textarea. Check event.target before preventDefault. Typing must still work.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> try Ctrl+S and type in a field. Browser behavior and typing should stay intact. Your shortcut should run only in the context you document, including a note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
     "source": "MDN — KeyboardEvent.preventDefault()",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault",
     "sourceSnippet": "The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.",
     "source2": "MDN — accesskey",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  }
 ]
};
