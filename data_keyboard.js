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
  },
  {
   "id": "keyboard-skip-link-ke-main",
   "langs": {
    "id": {
     "title": "Cara Tambah Skip Link ke Konten Utama",
     "desc": "Tata cara memasang tautan lewati ke main di halaman Clincoo supaya pengguna keyboard tidak men-Tab seluruh header setiap kali.",
     "content": "<p class=\"mb-4\">Header yang panjang memaksa Tab berulang sebelum sampai ke isi. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tautan lewati adalah kontrol pertama di body, tersembunyi sampai fokus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Letakkan sebelum navigasi</h2><p class=\"mb-4\">Tautan href=\"#isi-utama\" menuju elemen main yang punya id sama. Jangan mengarah ke div kosong. main perlu tabindex=\"-1\" hanya jika fokus harus pindah ke wilayah itu, bukan ke kontrol di dalamnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sembunyikan tanpa menghapus dari Tab</h2><p class=\"mb-4\">Pakai CSS yang menggeser tautan keluar layar, lalu tampilkan saat :focus. Jangan display:none atau visibility:hidden, karena Tab tidak akan menemukannya. Teksnya jelas: Loncat ke isi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tekan Tab sekali saat halaman dimuat. Tautan lewati harus muncul, Enter memindahkan fokus ke main, dan header tidak diulang. Catat polanya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> jika tim memakai header yang sama di setiap halaman.</p>",
     "source": "MDN — The Anchor element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a",
     "sourceSnippet": "The a element represents a hyperlink. A skip link is an ordinary link placed first so keyboard users can jump to the main content.",
     "source2": "W3C — Bypass Blocks",
     "source2Url": "https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Add a Skip Link to the Main Content",
     "desc": "How to add a skip link to main on a Clincoo page so keyboard users do not Tab through the whole header every time.",
     "content": "<p class=\"mb-4\">A long header forces repeated Tab stops before the content. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> the skip link is the first control in the body, hidden until it receives focus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Place it before navigation</h2><p class=\"mb-4\">A link with href=\"#isi-utama\" points at main with the same id. Do not point it at an empty div. main needs tabindex=\"-1\" only if focus should land on the region itself, not on a control inside it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hide it without removing it from Tab</h2><p class=\"mb-4\">Use CSS that shifts the link off screen, then show it on :focus. Do not use display:none or visibility:hidden, or Tab will never find it. The text should be clear: Skip to content.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> press Tab once when the page loads. The skip link should appear, Enter should move focus to main, and the header should not be repeated. Note the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> if the team reuses the same header on every page.</p>",
     "source": "MDN — The Anchor element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a",
     "sourceSnippet": "The a element represents a hyperlink. A skip link is an ordinary link placed first so keyboard users can jump to the main content.",
     "source2": "W3C — Bypass Blocks",
     "source2Url": "https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "keyboard-panah-di-menu",
   "langs": {
    "id": {
     "title": "Cara Gerakkan Menu dengan Tombol Panah",
     "desc": "Tata cara memakai tombol panah di menu Clincoo, sementara Tab tetap keluar dari menu, bukan berhenti di setiap butir.",
     "content": "<p class=\"mb-4\">Menu yang setiap butirnya bisa di-Tab membuat daftar panjang. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pola menu memakai satu tab stop, lalu panah memindahkan pilihan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu tab stop, lalu panah</h2><p class=\"mb-4\">Tombol pemicu tetap di urutan Tab. Setelah terbuka, butir menu memakai tabindex=\"-1\" kecuali butir yang aktif. Panah bawah dan atas memindahkan tabindex 0 ke saudara berikutnya, lalu memanggil focus().</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Home, End, dan Escape</h2><p class=\"mb-4\">Home ke butir pertama, End ke butir terakhir. Escape menutup menu dan mengembalikan fokus ke pemicu. Tab boleh menutup menu lalu melanjutkan ke kontrol berikutnya, bukan masuk ke setiap butir.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka menu dengan Enter, gerakkan panah, lalu Tab keluar. Fokus tidak boleh terjebak di butir terakhir. Ulangi di lebar ponsel karena menu yang menutupi layar sering menelan panah.</p>",
     "source": "MDN — Keyboard-navigable JavaScript widgets",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets",
     "sourceSnippet": "Some composite widgets are keyboard navigable with arrow keys rather than Tab for every child.",
     "source2": "WAI-ARIA — Menu pattern",
     "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/menu/",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Move Through a Menu with Arrow Keys",
     "desc": "How to use arrow keys inside a Clincoo menu while Tab still leaves the menu instead of stopping on every item.",
     "content": "<p class=\"mb-4\">A menu where every item is a Tab stop makes a long list. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> the menu pattern uses one tab stop, then arrows move the selection.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One tab stop, then arrows</h2><p class=\"mb-4\">The trigger button stays in the Tab order. After it opens, menu items use tabindex=\"-1\" except the active item. Arrow Down and Arrow Up move tabindex 0 to the next sibling, then call focus().</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Home, End, and Escape</h2><p class=\"mb-4\">Home goes to the first item, End to the last. Escape closes the menu and returns focus to the trigger. Tab may close the menu and continue to the next control, rather than entering every item.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the menu with Enter, move with arrows, then Tab out. Focus must not get stuck on the last item. Repeat at phone width, because a menu that covers the screen often swallows arrow keys.</p>",
     "source": "MDN — Keyboard-navigable JavaScript widgets",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets",
     "sourceSnippet": "Some composite widgets are keyboard navigable with arrow keys rather than Tab for every child.",
     "source2": "WAI-ARIA — Menu pattern",
     "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/menu/",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "keyboard-enter-dan-space-pada-tombol",
   "langs": {
    "id": {
     "title": "Cara Bedakan Enter dan Space pada Tombol",
     "desc": "Tata cara menangani Enter dan Space di tombol Clincoo supaya aksi tidak terpicu dua kali dan tautan tidak ikut terpencet.",
     "content": "<p class=\"mb-4\">Tombol bawaan sudah aktif lewat Enter dan Space. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> listener click tambahan pada keydown sering menggandakan aksi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Andalkan click bawaan</h2><p class=\"mb-4\">Untuk button type=\"button\", cukup dengarkan click. Browser mengirim click saat Enter atau Space dilepas. Jangan menambah keydown yang juga memanggil handler yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cegah Space menggulir halaman</h2><p class=\"mb-4\">Jika kamu membangun kontrol sendiri, Space harus preventDefault saat keydown supaya halaman tidak tergulir, lalu jalankan aksi pada keyup. Enter menjalankan aksi pada keydown. Jangan memasang pola ini pada a href.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tab ke tombol Simpan, tekan Space, lalu Enter. Aksi harus sekali masing-masing, dan halaman tidak meloncat. Jika tombol ada di dalam tautan, pisahkan dulu: tautan untuk pindah URL, tombol untuk aksi.</p>",
     "source": "MDN — The Button element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button",
     "sourceSnippet": "The button element represents a clickable button, which can be used in forms or anywhere a standard button is needed.",
     "source2": "MDN — KeyboardEvent.key",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Treat Enter and Space on a Button",
     "desc": "How to handle Enter and Space on a Clincoo button so the action does not fire twice and links are not activated by mistake.",
     "content": "<p class=\"mb-4\">A native button already activates on Enter and Space. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> an extra keydown listener beside click often doubles the action.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Rely on the native click</h2><p class=\"mb-4\">For button type=\"button\", listen for click only. The browser fires click when Enter or Space is released. Do not add a keydown handler that calls the same function.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Stop Space from scrolling the page</h2><p class=\"mb-4\">If you build a custom control, Space should preventDefault on keydown so the page does not scroll, then run the action on keyup. Enter runs the action on keydown. Do not apply this pattern to an a href.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tab to Save, press Space, then Enter. The action should run once each, and the page should not jump. If the button sits inside a link, separate them first: a link navigates, a button acts.</p>",
     "source": "MDN — The Button element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button",
     "sourceSnippet": "The button element represents a clickable button, which can be used in forms or anywhere a standard button is needed.",
     "source2": "MDN — KeyboardEvent.key",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "keyboard-jebak-fokus-modal-kustom",
   "langs": {
    "id": {
     "title": "Cara Jebak Fokus di Modal Kustom",
     "desc": "Tata cara menahan Tab di dalam modal kustom Clincoo jika kamu belum memakai dialog.showModal, lalu mengembalikan fokus saat tutup.",
     "content": "<p class=\"mb-4\">Modal dari div fixed tidak menahan Tab. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> lebih baik memakai dialog dan showModal. Kalau modal lama belum diganti, jebak fokus sendiri.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan pemicu, lalu kunci Tab</h2><p class=\"mb-4\">Saat membuka, simpan document.activeElement. Kumpulkan kontrol yang terlihat di dalam panel. Pada keydown Tab di kontrol terakhir, preventDefault dan fokus ke kontrol pertama. Shift+Tab di kontrol pertama kembali ke yang terakhir.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan jebak yang tersembunyi</h2><p class=\"mb-4\">Abaikan tombol dengan hidden, disabled, atau display none. Setelah tutup, hapus listener dan focus() ke pemicu. Escape tetap menutup, kecuali dialog konfirmasi berbahaya yang memang harus lewat tombol.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka modal, Tab berkali-kali, lalu Shift+Tab. Fokus tidak boleh masuk ke footer di belakang. Tutup modal dan pastikan fokus kembali ke tombol yang membukanya.</p>",
     "source": "MDN — The Dialog element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
     "sourceSnippet": "The dialog element represents a dialog box. showModal() displays it as a modal and confines interaction to that window.",
     "source2": "WAI-ARIA — Dialog modal pattern",
     "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Trap Focus in a Custom Modal",
     "desc": "How to keep Tab inside a custom Clincoo modal when you are not using dialog.showModal yet, then restore focus on close.",
     "content": "<p class=\"mb-4\">A modal made from a fixed div does not hold Tab. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> prefer dialog and showModal. If an old modal is not replaced yet, trap focus yourself.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Remember the trigger, then lock Tab</h2><p class=\"mb-4\">On open, store document.activeElement. Collect the visible controls inside the panel. On Tab from the last control, preventDefault and focus the first. Shift+Tab from the first returns to the last.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not trap hidden controls</h2><p class=\"mb-4\">Skip buttons that are hidden, disabled, or display none. After close, remove the listener and focus() the trigger. Escape should still close, unless a dangerous confirm must go through a button.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the modal, Tab repeatedly, then Shift+Tab. Focus must not reach the footer behind it. Close the modal and confirm focus returns to the button that opened it.</p>",
     "source": "MDN — The Dialog element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
     "sourceSnippet": "The dialog element represents a dialog box. showModal() displays it as a modal and confines interaction to that window.",
     "source2": "WAI-ARIA — Dialog modal pattern",
     "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "keyboard-jangan-pakai-accesskey-satu-huruf",
   "langs": {
    "id": {
     "title": "Cara Jangan Pasang accesskey Satu Huruf",
     "desc": "Tata cara menghindari accesskey satu huruf di halaman Clincoo supaya pintasan tidak menabrak menu browser atau pembaca layar.",
     "content": "<p class=\"mb-4\">accesskey satu huruf terlihat singkat, tetapi kombinasinya beda di setiap browser dan sering merebut pintasan yang sudah ada. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> hindari accesskey satu huruf.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan andalkan accesskey</h2><p class=\"mb-4\">Tombol yang penting harus bisa dicapai lewat Tab dan punya nama terlihat. Jika perlu pintasan, tampilkan petunjuk di UI dan batasi pada konteks yang tidak sedang mengetik. Jangan preventDefault pada huruf biasa di input.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bentrok yang sering terjadi</h2><p class=\"mb-4\">Huruf tunggal mudah bentrok dengan navigasi pembaca layar dan menu browser. Alt+huruf di satu peramban menjadi Alt+Shift di peramban lain. Pengguna tidak bisa menghafal perbedaan itu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tab ke kontrol utama tanpa menekan accesskey. Lalu ketik di input: huruf tidak boleh memicu aksi tersembunyi. Dokumentasikan pintasan yang memang kamu buat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>, bukan di atribut accesskey.</p>",
     "source": "MDN — accesskey",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey",
     "sourceSnippet": "The accesskey global attribute provides a hint for generating a keyboard shortcut for the current element.",
     "source2": "MDN — Event.preventDefault()",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Avoid a Single-Letter accesskey",
     "desc": "How to avoid single-letter accesskey values on a Clincoo page so shortcuts do not clash with the browser menu or a screen reader.",
     "content": "<p class=\"mb-4\">A single-letter accesskey looks short, but the modifier differs by browser and often steals an existing shortcut. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> avoid a single-letter accesskey.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not rely on accesskey</h2><p class=\"mb-4\">An important button must be reachable with Tab and have a visible name. If you need a shortcut, show the hint in the UI and limit it to a context where the user is not typing. Do not preventDefault on plain letters inside an input.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Clashes that show up often</h2><p class=\"mb-4\">A single letter easily clashes with screen-reader navigation and the browser menu. Alt plus a letter in one browser becomes Alt+Shift in another. People cannot memorize that difference.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tab to the main controls without pressing an accesskey. Then type in an input: letters must not trigger a hidden action. Document a shortcut you really ship on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>, not in an accesskey attribute.</p>",
     "source": "MDN — accesskey",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey",
     "sourceSnippet": "The accesskey global attribute provides a hint for generating a keyboard shortcut for the current element.",
     "source2": "MDN — Event.preventDefault()",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  }
 ,
  {
 "id": "keyboard-kembalikan-fokus-setelah-elemen-hilang",
 "langs": {
  "id": {
   "title": "Cara Kembalikan Fokus setelah Elemen Hilang",
   "desc": "Tata cara mengembalikan fokus keyboard di Clincoo setelah tombol atau panel yang sedang fokus dihapus, supaya Tab tidak jatuh ke body.",
   "content": "<p class=\"mb-4\">Kalau elemen yang sedang fokus dihapus, browser sering melempar fokus ke body. Pengguna keyboard harus men-Tab dari atas lagi. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan pemicu sebelum menutup panel.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan pemicu sebelum menutup</h2><p class=\"mb-4\">Sebelum remove() atau hidden, catat document.activeElement. Setelah panel hilang, panggil focus() pada tombol yang tadi membuka panel. Jangan focus() ke elemen yang sudah tidak ada di dokumen.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan andalkan urutan Tab otomatis</h2><p class=\"mb-4\">Tanpa pengembalian fokus, Tab berikutnya mulai dari body atau dari kontrol tak terduga. Di dialog asli, showModal mengembalikan fokus sendiri. Panel kustom harus mengembalikannya manual.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka panel hanya dengan keyboard, lalu tutup. Fokus harus kembali ke tombol buka, bukan ke awal halaman. Catat polanya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> jika panel dipakai di lebih dari satu template.</p>",
   "source": "MDN — HTMLElement.focus()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus",
   "sourceSnippet": "The HTMLElement.focus() method sets focus on the specified element, if it can be focused.",
   "source2": "MDN — HTMLDialogElement.showModal()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Restore Focus after an Element Disappears",
   "desc": "How to move keyboard focus back in Clincoo after the focused button or panel is removed, so Tab does not fall to the body.",
   "content": "<p class=\"mb-4\">If the focused element is removed, the browser often drops focus to the body. Keyboard users must Tab from the top again. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> store the trigger before closing a panel.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Store the trigger before close</h2><p class=\"mb-4\">Before remove() or hidden, record document.activeElement. After the panel is gone, call focus() on the button that opened it. Do not call focus() on a node that is no longer in the document.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not rely on automatic Tab order</h2><p class=\"mb-4\">Without restoring focus, the next Tab starts at the body or on an unexpected control. A native dialog restores focus from showModal. A custom panel must restore it yourself.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the panel with the keyboard only, then close it. Focus should return to the open button, not the top of the page. Note the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> if the panel is shared across templates.</p>",
   "source": "MDN — HTMLElement.focus()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus",
   "sourceSnippet": "The HTMLElement.focus() method sets focus on the specified element, if it can be focused.",
   "source2": "MDN — HTMLDialogElement.showModal()",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
  {
 "id": "keyboard-jangan-autofocus-di-tiap-muat",
 "langs": {
  "id": {
   "title": "Cara Jangan Pakai autofocus di Setiap Muat Halaman",
   "desc": "Tata cara membatasi autofocus di halaman Clincoo supaya pengguna keyboard dan pembaca layar tidak langsung ditarik ke isian saat halaman dibuka.",
   "content": "<p class=\"mb-4\">autofocus memindahkan fokus begitu dokumen siap. Di halaman yang sering dibuka, itu memotong skip link dan menu. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jangan pasang autofocus pada setiap template.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kapan autofocus masuk akal</h2><p class=\"mb-4\">Satu isian utama di halaman khusus, misalnya kotak cari yang memang tujuan halaman, boleh memakai autofocus. Halaman artikel, dashboard, dan form panjang tidak.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Yang rusak kalau selalu dipasang</h2><p class=\"mb-4\">Skip link tidak pernah jadi perhentian pertama. Pembaca layar langsung mengumumkan isian, bukan judul halaman. Pengguna yang hanya ingin baca harus keluar dari isian dulu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> muat halaman dan tekan Tab sekali. Perhentian pertama harus skip link atau kontrol header, bukan input tersembunyi. Jika satu halaman memang butuh fokus awal, tulis alasannya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — autofocus",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus",
   "sourceSnippet": "The autofocus global attribute is a Boolean attribute indicating that an element should be focused on page load.",
   "source2": "MDN — Skip link",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid autofocus on Every Page Load",
   "desc": "How to limit autofocus on a Clincoo page so keyboard and screen-reader users are not pulled into a field as soon as the page opens.",
   "content": "<p class=\"mb-4\">autofocus moves focus as soon as the document is ready. On pages people open often, that skips the skip link and the menu. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> do not put autofocus on every template.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">When autofocus is reasonable</h2><p class=\"mb-4\">A single primary field on a dedicated page, such as a search box that is the point of the page, can use autofocus. Article pages, dashboards, and long forms should not.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">What breaks if it is always on</h2><p class=\"mb-4\">The skip link never becomes the first stop. A screen reader announces the field instead of the page title. Someone who only wanted to read must leave the field first.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> load the page and press Tab once. The first stop should be the skip link or a header control, not a hidden input. If one page really needs initial focus, write the reason on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — autofocus",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus",
   "sourceSnippet": "The autofocus global attribute is a Boolean attribute indicating that an element should be focused on page load.",
   "source2": "MDN — Skip link",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}]
};
