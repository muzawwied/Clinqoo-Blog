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
 }
]
};
