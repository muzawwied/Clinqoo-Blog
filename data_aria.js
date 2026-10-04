if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["aria"] = {
 "names": {
  "id": "ARIA",
  "en": "ARIA"
 },
 "articles": [
 {
  "id": "aria-label-pada-tombol-ikon",
  "langs": {
   "id": {
    "title": "Cara Beri aria-label pada Tombol Ikon",
    "desc": "Tata cara menamai tombol ikon di situs Clincoo dengan aria-label supaya pembaca layar tidak hanya menyebut tombol kosong.",
    "content": "<p class=\"mb-4\">Ikon tanpa teks terlihat jelas bagi sebagian orang, tetapi tidak punya nama bagi pembaca layar. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tombol ikon wajib punya nama yang bisa diucapkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai aria-label yang menyebut aksi</h2><p class=\"mb-4\">Tulis aria-label=\"Tutup menu\", bukan aria-label=\"ikon\". Nama harus sama dengan yang akan kamu tulis jika ada teks. Jangan mengulang nama di title saja.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sembunyikan ikon dekoratif</h2><p class=\"mb-4\">SVG di dalam tombol yang sudah punya aria-label diberi aria-hidden=\"true\" supaya tidak dibaca dua kali. Jangan menaruh aria-hidden pada tombolnya sendiri.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tab ke tombol ikon. Nama yang diumumkan harus aksi, misalnya tutup atau cari, bukan tombol kosong.</p>",
    "source": "MDN — aria-label",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label",
    "sourceSnippet": "The aria-label attribute defines a string value that labels an interactive element.",
    "source2": "MDN — button element",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   },
   "en": {
    "title": "How to Add an aria-label to an Icon Button",
    "desc": "How to name an icon button on a Clincoo site with aria-label so a screen reader does not announce an empty button.",
    "content": "<p class=\"mb-4\">An icon without text is clear to some people and has no name for a screen reader. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> an icon button needs a name that can be announced.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use an aria-label that states the action</h2><p class=\"mb-4\">Write aria-label=\"Close menu\", not aria-label=\"icon\". The name should match the text you would have written. Do not rely on title alone.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hide the decorative icon</h2><p class=\"mb-4\">Give the SVG inside a labeled button aria-hidden=\"true\" so it is not announced twice. Do not put aria-hidden on the button itself.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tab to the icon button. The announced name should be the action, such as close or search, not an empty button.</p>",
    "source": "MDN — aria-label",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label",
    "sourceSnippet": "The aria-label attribute defines a string value that labels an interactive element.",
    "source2": "MDN — button element",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 },
 {
  "id": "aria-live-untuk-pesan-status",
  "langs": {
   "id": {
    "title": "Cara Umumkan Pesan Status dengan aria-live",
    "desc": "Tata cara memakai aria-live di Clincoo supaya pesan sukses atau gagal diumumkan tanpa memindahkan fokus secara kasar.",
    "content": "<p class=\"mb-4\">Alert yang muncul diam-diam tidak terdengar. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bungkus pesan status dengan wilayah aria-live.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pilih polite untuk status biasa</h2><p class=\"mb-4\">Untuk “Tersimpan” atau “Format email belum benar”, pakai aria-live=\"polite\". Pesan penting yang harus memotong, seperti sesi habis, boleh assertive. Jangan assertive untuk setiap ketikan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Update teks, jangan hanya warna</h2><p class=\"mb-4\">Wilayah live harus sudah ada di halaman sebelum teks diisi, atau teks baru disisipkan ke dalamnya. Mengganti warna border saja tidak cukup. Tulis kalimat lengkap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> kirim form uji. Pesan status harus terbaca setelah jeda singkat, dan fokus tetap di tombol kirim kecuali kamu memang memindahkannya.</p>",
    "source": "MDN — aria-live",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live",
    "sourceSnippet": "The global aria-live attribute indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.",
    "source2": "MDN — ARIA live regions",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions",
    "source3": "Clincoo App",
    "source3Url": "https://app.clincoo.buzz/"
   },
   "en": {
    "title": "How to Announce a Status Message with aria-live",
    "desc": "How to use aria-live on Clincoo so a success or error message is announced without yanking focus.",
    "content": "<p class=\"mb-4\">A status that appears silently is not heard. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> wrap the status message in an aria-live region.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use polite for ordinary status</h2><p class=\"mb-4\">For “Saved” or “Email format is not valid yet”, use aria-live=\"polite\". A message that must interrupt, such as a session ending, may be assertive. Do not use assertive on every keystroke.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Update the text, not only the color</h2><p class=\"mb-4\">The live region should already be on the page before you fill it, or the new text should be inserted into it. Changing a border color is not enough. Write a full sentence.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> submit a test form. The status should be announced after a short pause, and focus should stay on the submit button unless you intentionally move it.</p>",
    "source": "MDN — aria-live",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live",
    "sourceSnippet": "The global aria-live attribute indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.",
    "source2": "MDN — ARIA live regions",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions",
    "source3": "Clincoo App",
    "source3Url": "https://app.clincoo.buzz/"
   }
  }
 },
 {
  "id": "aria-hidden-pada-ikon-dekoratif",
  "langs": {
   "id": {
    "title": "Cara Sembunyikan Ikon Dekoratif dengan aria-hidden",
    "desc": "Tata cara menandai ikon hias di Clincoo dengan aria-hidden supaya pembaca layar tidak mengucapkan nama file SVG.",
    "content": "<p class=\"mb-4\">Ikon hias di samping judul sering punya nama file seperti icon-star.svg. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ikon yang tidak menambah makna harus disembunyikan dari pohon aksesibilitas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang aria-hidden pada SVG</h2><p class=\"mb-4\">Tambahkan aria-hidden=\"true\" pada elemen svg, bukan pada heading yang membungkusnya. Jika teks di sebelahnya sudah menjelaskan aksi, ikon tidak perlu nama kedua.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan sembunyikan kontrol</h2><p class=\"mb-4\">Tombol, tautan, dan input tidak boleh aria-hidden. Kalau ikon adalah satu-satunya isi tombol, beri tombol itu aria-label dan sembunyikan hanya SVG di dalamnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka pohon aksesibilitas. Ikon hias tidak muncul sebagai nama terpisah, sedangkan tombol tetap bisa difokus.</p>",
    "source": "MDN — aria-hidden",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden",
    "sourceSnippet": "The aria-hidden state indicates whether the element is exposed to an accessibility API.",
    "source2": "MDN — SVG element",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   },
   "en": {
    "title": "How to Hide a Decorative Icon with aria-hidden",
    "desc": "How to mark a decorative icon on Clincoo with aria-hidden so a screen reader does not announce the SVG file name.",
    "content": "<p class=\"mb-4\">A decorative icon beside a heading often exposes a file name such as icon-star.svg. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> an icon that adds no meaning should be hidden from the accessibility tree.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Put aria-hidden on the SVG</h2><p class=\"mb-4\">Add aria-hidden=\"true\" on the svg element, not on the heading that wraps it. If the text beside it already explains the action, the icon does not need a second name.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not hide a control</h2><p class=\"mb-4\">Buttons, links, and inputs must not be aria-hidden. If the icon is the only content of a button, give the button an aria-label and hide only the SVG inside it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the accessibility tree. The decorative icon should not appear as a separate name, and the button should still be focusable.</p>",
    "source": "MDN — aria-hidden",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden",
    "sourceSnippet": "The aria-hidden state indicates whether the element is exposed to an accessibility API.",
    "source2": "MDN — SVG element",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 },
 {
  "id": "aria-expanded-pada-menu-dropdown",
  "langs": {
   "id": {
    "title": "Cara Set aria-expanded pada Menu Dropdown",
    "desc": "Tata cara menyelaraskan aria-expanded dengan panel menu di Clincoo supaya status buka atau tutup terdengar.",
    "content": "<p class=\"mb-4\">Menu yang hanya berubah secara visual membuat pengguna keyboard tidak tahu panelnya terbuka. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tombol pemicu wajib punya aria-expanded.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ikat tombol ke panel</h2><p class=\"mb-4\">Beri tombol aria-controls yang sama dengan id panel. Saat tertutup, aria-expanded=\"false\". Saat terbuka, ganti ke true dalam handler yang sama dengan class tampilan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tutup dengan Escape</h2><p class=\"mb-4\">Dengarkan Escape pada panel, set aria-expanded kembali ke false, lalu kembalikan fokus ke tombol pemicu. Jangan hanya menyembunyikan panel dengan CSS.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka menu dengan Enter. Pengumuman harus berubah dari tertutup menjadi terbuka, lalu kembali saat Escape.</p>",
    "source": "MDN — aria-expanded",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded",
    "sourceSnippet": "The aria-expanded attribute is set on an element to indicate if a control is expanded or collapsed.",
    "source2": "MDN — aria-controls",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls",
    "source3": "Clincoo App",
    "source3Url": "https://app.clincoo.buzz/"
   },
   "en": {
    "title": "How to Set aria-expanded on a Dropdown Menu",
    "desc": "How to keep aria-expanded in sync with a menu panel on Clincoo so open and closed states are announced.",
    "content": "<p class=\"mb-4\">A menu that only changes visually leaves keyboard users unsure whether the panel is open. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> the trigger button needs aria-expanded.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tie the button to the panel</h2><p class=\"mb-4\">Give the button aria-controls matching the panel id. When closed, aria-expanded=\"false\". When open, set it to true in the same handler that toggles the visible class.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Close with Escape</h2><p class=\"mb-4\">Listen for Escape on the panel, set aria-expanded back to false, then return focus to the trigger. Do not only hide the panel with CSS.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the menu with Enter. The announcement should change from collapsed to expanded, then back when you press Escape.</p>",
    "source": "MDN — aria-expanded",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded",
    "sourceSnippet": "The aria-expanded attribute is set on an element to indicate if a control is expanded or collapsed.",
    "source2": "MDN — aria-controls",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls",
    "source3": "Clincoo App",
    "source3Url": "https://app.clincoo.buzz/"
   }
  }
 },
 {
  "id": "aria-describedby-petunjuk-field",
  "langs": {
   "id": {
    "title": "Cara Hubungkan Petunjuk Field dengan aria-describedby",
    "desc": "Tata cara menautkan teks bantuan dan pesan error ke input Clincoo dengan aria-describedby.",
    "content": "<p class=\"mb-4\">Placeholder hilang saat pengguna mengetik. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> petunjuk format harus tetap ada dan terhubung ke input.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri id pada paragraf petunjuk</h2><p class=\"mb-4\">Label memakai for yang sama dengan id input. Paragraf bantuan, misalnya “Gunakan minimal 8 karakter”, punya id sendiri. Input menunjuk id itu lewat aria-describedby.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gabungkan error tanpa menghapus petunjuk</h2><p class=\"mb-4\">Saat validasi gagal, tambahkan id pesan error di aria-describedby, dipisah spasi. Jangan mengganti label menjadi kalimat error. Label tetap nama field.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> fokus ke input. Nama, petunjuk, lalu pesan error harus dibacakan berurutan, bukan hanya placeholder.</p>",
    "source": "MDN — aria-describedby",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby",
    "sourceSnippet": "The aria-describedby attribute identifies the element that describes the object.",
    "source2": "MDN — label element",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   },
   "en": {
    "title": "How to Connect Field Hints with aria-describedby",
    "desc": "How to link helper text and an error message to a Clincoo input with aria-describedby.",
    "content": "<p class=\"mb-4\">A placeholder disappears while someone types. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> format hints should stay visible and be tied to the input.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Give the hint paragraph an id</h2><p class=\"mb-4\">The label uses for matching the input id. The help paragraph, such as “Use at least 8 characters”, has its own id. The input points to that id with aria-describedby.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add the error without removing the hint</h2><p class=\"mb-4\">When validation fails, add the error id to aria-describedby, separated by a space. Do not replace the label with the error sentence. The label stays the field name.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> focus the input. The name, hint, then error should be announced in order, not only the placeholder.</p>",
    "source": "MDN — aria-describedby",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby",
    "sourceSnippet": "The aria-describedby attribute identifies the element that describes the object.",
    "source2": "MDN — label element",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 },
 {
  "id": "aria-current-pada-navigasi-aktif",
  "langs": {
   "id": {
    "title": "Cara Tandai Halaman Aktif dengan aria-current",
    "desc": "Tata cara memakai aria-current pada nav Clincoo supaya tautan halaman yang sedang dibuka diumumkan sebagai current.",
    "content": "<p class=\"mb-4\">Warna tebal pada menu tidak selalu terbaca. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tautan halaman aktif perlu aria-current.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai page, bukan true semata</h2><p class=\"mb-4\">Pada tautan dokumen yang sedang dibuka, set aria-current=\"page\". Untuk langkah di dalam satu halaman, aria-current=\"step\" lebih tepat. Hapus atribut dari tautan lain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan hanya andalkan kelas CSS</h2><p class=\"mb-4\">Kelas is-active boleh mengatur warna, tetapi status aksesibel harus atribut. Satu item saja yang current. Jangan menaruh aria-current pada seluruh nav.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pindah halaman lalu tab ke menu. Hanya tautan yang cocok dengan URL yang diumumkan sebagai current page.</p>",
    "source": "MDN — aria-current",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current",
    "sourceSnippet": "The aria-current attribute indicates the element that represents the current item within a container or set of related elements.",
    "source2": "MDN — nav element",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav",
    "source3": "Clincoo Docs",
    "source3Url": "https://blog.clincoo.buzz/"
   },
   "en": {
    "title": "How to Mark the Current Page with aria-current",
    "desc": "How to use aria-current in Clincoo navigation so the open page link is announced as current.",
    "content": "<p class=\"mb-4\">A bold color in a menu is not always announced. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> the active page link needs aria-current.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use page, not only true</h2><p class=\"mb-4\">On the link for the document that is open, set aria-current=\"page\". For a step inside one page, aria-current=\"step\" is a better fit. Remove the attribute from the other links.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not rely on a CSS class alone</h2><p class=\"mb-4\">An is-active class may set the color, but the accessible state should be the attribute. Only one item is current. Do not put aria-current on the whole nav.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> change pages and tab to the menu. Only the link that matches the URL should be announced as the current page.</p>",
    "source": "MDN — aria-current",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current",
    "sourceSnippet": "The aria-current attribute indicates the element that represents the current item within a container or set of related elements.",
    "source2": "MDN — nav element",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav",
    "source3": "Clincoo Docs",
    "source3Url": "https://blog.clincoo.buzz/"
   }
  }
 },
 {
  "id": "aria-invalid-pada-field-error",
  "langs": {
   "id": {
    "title": "Cara Tandai Field Gagal dengan aria-invalid",
    "desc": "Tata cara memasang aria-invalid pada input Clincoo setelah validasi gagal, lalu menghapusnya saat nilai sudah benar.",
    "content": "<p class=\"mb-4\">Border merah saja tidak memberi status. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> field yang gagal perlu aria-invalid.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set true hanya saat gagal</h2><p class=\"mb-4\">Setelah submit, field kosong atau format salah mendapat aria-invalid=\"true\". Field yang lolos dihapus atributnya, atau di-set false. Jangan menandai semua field sebelum pengguna mencoba.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sertakan pesan teks</h2><p class=\"mb-4\">aria-invalid tidak menggantikan kalimat error. Pasangkan dengan aria-describedby ke elemen yang menjelaskan apa yang harus diperbaiki.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> kirim form kosong. Field wajib diumumkan invalid, lalu tidak invalid lagi setelah diisi dengan benar.</p>",
    "source": "MDN — aria-invalid",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid",
    "sourceSnippet": "The aria-invalid state indicates the entered value does not conform to the format expected by the application.",
    "source2": "MDN — constraint validation",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation",
    "source3": "Clincoo App",
    "source3Url": "https://app.clincoo.buzz/"
   },
   "en": {
    "title": "How to Mark a Failed Field with aria-invalid",
    "desc": "How to set aria-invalid on a Clincoo input after validation fails, then clear it when the value is valid.",
    "content": "<p class=\"mb-4\">A red border alone is not a state. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> a failed field needs aria-invalid.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set true only after failure</h2><p class=\"mb-4\">After submit, an empty or badly formatted field gets aria-invalid=\"true\". A field that passes has the attribute removed, or set to false. Do not mark every field before the user tries.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Include a text message</h2><p class=\"mb-4\">aria-invalid does not replace the error sentence. Pair it with aria-describedby pointing at the element that says what to fix.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> submit an empty form. Required fields should be announced as invalid, then not invalid after a correct value is entered.</p>",
    "source": "MDN — aria-invalid",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid",
    "sourceSnippet": "The aria-invalid state indicates the entered value does not conform to the format expected by the application.",
    "source2": "MDN — constraint validation",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation",
    "source3": "Clincoo App",
    "source3Url": "https://app.clincoo.buzz/"
   }
  }
 },
 {
  "id": "aria-pressed-pada-tombol-toggle",
  "langs": {
   "id": {
    "title": "Cara Tandai Tombol Toggle dengan aria-pressed",
    "desc": "Tata cara memasang aria-pressed pada tombol nyala-mati di Clincoo supaya pembaca layar mengumumkan status, bukan hanya nama tombol.",
    "content": "<p class=\"mb-4\">Tombol yang mengubah warna saja tidak memberitahu status. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tombol toggle butuh aria-pressed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai button, bukan div</h2><p class=\"mb-4\">Elemennya tetap button. aria-pressed=\"true\" saat aktif dan aria-pressed=\"false\" saat mati. Jangan menulis \"aktif\" hanya di class CSS.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Perbarui setelah klik</h2><p class=\"mb-4\">Di handler klik, ubah atribut bersamaan dengan tampilan. Nama tombol tetap singkat, misalnya \"Mode gelap\". Status dibaca dari aria-pressed, bukan dari aria-label yang berubah-ubah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> aktifkan toggle lalu tab ke tombol. Pembaca layar harus menyebut ditekan atau tidak ditekan, sesuai nilai terbaru.</p>",
    "source": "MDN — aria-pressed",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed",
    "sourceSnippet": "The aria-pressed attribute indicates the current pressed state of a toggle button.",
    "source2": "WAI-ARIA — toggle button",
    "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   },
   "en": {
    "title": "How to Mark a Toggle Button with aria-pressed",
    "desc": "How to set aria-pressed on an on-off button in Clincoo so a screen reader announces the state, not only the button name.",
    "content": "<p class=\"mb-4\">A button that only changes color does not report state. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> a toggle needs aria-pressed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use a button, not a div</h2><p class=\"mb-4\">Keep the element a button. Set aria-pressed=\"true\" when it is on and aria-pressed=\"false\" when it is off. Do not store \"active\" only in a CSS class.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Update it after the click</h2><p class=\"mb-4\">In the click handler, change the attribute together with the visual. Keep the name short, for example \"Dark mode\". The state comes from aria-pressed, not from an aria-label that keeps changing.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> turn the toggle on, then tab to the button. A screen reader should announce pressed or not pressed from the latest value.</p>",
    "source": "MDN — aria-pressed",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed",
    "sourceSnippet": "The aria-pressed attribute indicates the current pressed state of a toggle button.",
    "source2": "WAI-ARIA — toggle button",
    "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 },
 {
  "id": "aria-controls-pada-panel",
  "langs": {
   "id": {
    "title": "Cara Hubungkan Tombol ke Panel dengan aria-controls",
    "desc": "Tata cara mengikat tombol pembuka panel di Clincoo ke id panel lewat aria-controls supaya hubungan kontrolnya jelas.",
    "content": "<p class=\"mb-4\">Tombol yang membuka panel di bawahnya perlu hubungan yang bisa dibaca mesin. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> hubungan itu ditulis dengan aria-controls.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Samakan id panel</h2><p class=\"mb-4\">Beri panel id unik, misalnya id=\"panel-bantuan\". Pada tombol tulis aria-controls=\"panel-bantuan\". Nilai harus sama persis dengan id, tanpa tanda pagar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasangkan dengan aria-expanded</h2><p class=\"mb-4\">aria-controls tidak menggantikan status buka. Tetap set aria-expanded=\"true\" saat panel terlihat dan false saat disembunyikan. Jangan menghapus panel dari DOM jika id-nya masih dirujuk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka panel dari tombol. Inspeksi elemen: aria-controls menunjuk id yang benar-benar ada di halaman.</p>",
    "source": "MDN — aria-controls",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls",
    "sourceSnippet": "The aria-controls attribute identifies the element or elements whose contents are controlled by the element on which this attribute is set.",
    "source2": "WAI-ARIA — disclosure pattern",
    "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/",
    "source3": "Clincoo App",
    "source3Url": "https://app.clincoo.buzz/"
   },
   "en": {
    "title": "How to Link a Button to a Panel with aria-controls",
    "desc": "How to tie a panel opener in Clincoo to the panel id with aria-controls so the control relationship is explicit.",
    "content": "<p class=\"mb-4\">A button that opens a panel below it needs a machine-readable link. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> that link is aria-controls.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match the panel id</h2><p class=\"mb-4\">Give the panel a unique id, for example id=\"help-panel\". On the button write aria-controls=\"help-panel\". The value must match the id exactly, with no hash.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pair it with aria-expanded</h2><p class=\"mb-4\">aria-controls does not replace the open state. Still set aria-expanded=\"true\" when the panel is visible and false when it is hidden. Do not remove the panel from the DOM while its id is still referenced.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the panel from the button. Inspect the element: aria-controls points at an id that really exists on the page.</p>",
    "source": "MDN — aria-controls",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls",
    "sourceSnippet": "The aria-controls attribute identifies the element or elements whose contents are controlled by the element on which this attribute is set.",
    "source2": "WAI-ARIA — disclosure pattern",
    "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/",
    "source3": "Clincoo App",
    "source3Url": "https://app.clincoo.buzz/"
   }
  }
 },
 {
  "id": "aria-haspopup-pada-menu",
  "langs": {
   "id": {
    "title": "Cara Tandai Tombol Menu dengan aria-haspopup",
    "desc": "Tata cara menandai tombol yang membuka menu di Clincoo dengan aria-haspopup supaya pembaca layar tahu ada popup, bukan navigasi biasa.",
    "content": "<p class=\"mb-4\">Tombol menu sering terlihat sama dengan tautan. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bedanya perlu ditulis di aria-haspopup.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pilih nilai yang sesuai</h2><p class=\"mb-4\">Untuk menu aksi tulis aria-haspopup=\"menu\". Untuk dialog tulis \"dialog\". Untuk daftar saran tulis \"listbox\". Jangan memakai true jika jenis popup-nya sudah jelas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan taruh di tautan halaman</h2><p class=\"mb-4\">aria-haspopup hanya untuk kontrol yang membuka popup di halaman yang sama. Tautan yang pindah ke URL lain tidak perlu atribut ini. Pasangkan dengan aria-expanded pada tombol pembuka.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> atau preview app, tab ke tombol menu. Nama plus petunjuk popup harus terdengar sebelum item di dalamnya.</p>",
    "source": "MDN — aria-haspopup",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup",
    "sourceSnippet": "The aria-haspopup attribute indicates the availability and type of interactive popup element that can be triggered by the element.",
    "source2": "WAI-ARIA — menu button pattern",
    "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   },
   "en": {
    "title": "How to Mark a Menu Button with aria-haspopup",
    "desc": "How to mark a button that opens a menu in Clincoo with aria-haspopup so a screen reader knows a popup is coming, not a plain navigation jump.",
    "content": "<p class=\"mb-4\">A menu button often looks like a link. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> the difference belongs in aria-haspopup.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pick the matching value</h2><p class=\"mb-4\">For an action menu write aria-haspopup=\"menu\". For a dialog write \"dialog\". For a suggestion list write \"listbox\". Do not use true when the popup type is already known.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not put it on a page link</h2><p class=\"mb-4\">aria-haspopup is only for a control that opens a popup on the same page. A link that navigates to another URL does not need it. Pair it with aria-expanded on the opener.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> or the app preview, tab to the menu button. The name plus a popup hint should be announced before the items inside.</p>",
    "source": "MDN — aria-haspopup",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup",
    "sourceSnippet": "The aria-haspopup attribute indicates the availability and type of interactive popup element that can be triggered by the element.",
    "source2": "WAI-ARIA — menu button pattern",
    "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 },
 {
  "id": "role-alert-untuk-pesan-error",
  "langs": {
   "id": {
    "title": "Cara Umumkan Error Form dengan role alert",
    "desc": "Tata cara menaruh role alert pada pesan gagal di form Clincoo supaya error dibacakan segera, tanpa menunggu pengguna pindah fokus.",
    "content": "<p class=\"mb-4\">Pesan merah yang muncul setelah submit sering terlewat. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pesan itu perlu role=\"alert\".</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sisipkan teks, jangan hanya warna</h2><p class=\"mb-4\">Siapkan elemen kosong di dekat form, lalu isi teks error saat validasi gagal. role=\"alert\" setara aria-live=\"assertive\" dan dibaca begitu teks masuk. Jangan menaruh role alert pada setiap field.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu pesan, lalu fokus</h2><p class=\"mb-4\">Tulis satu kalimat yang menyebut apa yang harus diperbaiki. Setelah itu pindahkan fokus ke field pertama yang gagal. role alert mengumumkan, aria-invalid menandai field-nya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> kirim form kosong. Pesan gagal harus terdengar tanpa klik tambahan, dan tidak berulang setiap ketikan.</p>",
    "source": "MDN — alert role",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role",
    "sourceSnippet": "The alert role is for important, and usually time-sensitive, information.",
    "source2": "WAI-ARIA — alert pattern",
    "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/alert/",
    "source3": "Clincoo App",
    "source3Url": "https://app.clincoo.buzz/"
   },
   "en": {
    "title": "How to Announce a Form Error with role alert",
    "desc": "How to put role alert on a failed-form message in Clincoo so the error is announced immediately, without waiting for a focus move.",
    "content": "<p class=\"mb-4\">A red message after submit is easy to miss. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> that message needs role=\"alert\".</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Insert text, not only color</h2><p class=\"mb-4\">Prepare an empty element near the form, then fill the error text when validation fails. role=\"alert\" is equivalent to aria-live=\"assertive\" and is read when the text arrives. Do not put role alert on every field.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One message, then focus</h2><p class=\"mb-4\">Write one sentence that says what to fix. Then move focus to the first failed field. role alert announces; aria-invalid marks the field.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> submit an empty form. The failure should be announced without an extra click, and it should not repeat on every keystroke.</p>",
    "source": "MDN — alert role",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role",
    "sourceSnippet": "The alert role is for important, and usually time-sensitive, information.",
    "source2": "WAI-ARIA — alert pattern",
    "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/alert/",
    "source3": "Clincoo App",
    "source3Url": "https://app.clincoo.buzz/"
   }
  }
 },
 {
  "id": "aria-labelledby-pada-dialog",
  "langs": {
   "id": {
    "title": "Cara Beri Nama Dialog dengan aria-labelledby",
    "desc": "Tata cara menamai dialog Clincoo lewat aria-labelledby yang menunjuk heading terlihat, supaya nama tidak dobel dengan aria-label.",
    "content": "<p class=\"mb-4\">Dialog tanpa nama hanya terdengar sebagai dialog. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> nama diambil dari heading yang sudah terlihat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tunjuk id heading</h2><p class=\"mb-4\">Beri judul id, misalnya id=\"judul-hapus\". Pada dialog tulis aria-labelledby=\"judul-hapus\". Pembaca layar memakai teks heading itu. Jangan menambah aria-label dengan kalimat yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Deskripsi terpisah</h2><p class=\"mb-4\">Kalimat penjelasan boleh dirujuk dengan aria-describedby ke paragraf di dalam dialog. Judul tetap pendek. Jika judul berubah, id-nya jangan ikut berubah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka dialog konfirmasi. Nama yang diumumkan harus sama dengan heading di layar, bukan \"dialog\" saja.</p>",
    "source": "MDN — aria-labelledby",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby",
    "sourceSnippet": "The aria-labelledby attribute identifies the element or elements that label the element it is applied to.",
    "source2": "WAI-ARIA — dialog pattern",
    "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   },
   "en": {
    "title": "How to Name a Dialog with aria-labelledby",
    "desc": "How to name a Clincoo dialog with aria-labelledby pointing at the visible heading, so the name is not duplicated in aria-label.",
    "content": "<p class=\"mb-4\">A dialog without a name is announced only as a dialog. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> the name comes from the heading already on screen.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Point at the heading id</h2><p class=\"mb-4\">Give the title an id, for example id=\"delete-title\". On the dialog write aria-labelledby=\"delete-title\". The screen reader uses that heading text. Do not also add an aria-label with the same sentence.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep the description separate</h2><p class=\"mb-4\">An explanation sentence can be referenced with aria-describedby on a paragraph inside the dialog. Keep the title short. If the title text changes, do not change its id.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open a confirm dialog. The announced name should match the heading on screen, not just \"dialog\".</p>",
    "source": "MDN — aria-labelledby",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby",
    "sourceSnippet": "The aria-labelledby attribute identifies the element or elements that label the element it is applied to.",
    "source2": "WAI-ARIA — dialog pattern",
    "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 }
]
};
