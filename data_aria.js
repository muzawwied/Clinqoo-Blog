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
 }
]
};
