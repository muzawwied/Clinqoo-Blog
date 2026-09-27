// Clincoo Blog — Data kategori: modal
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["modal"] = {
  names: { "id": "Modal", "en": "Modal" },
  flag: "🪟",
  articles: [
    {
      id: "modal-kembalikan-fokus-ke-tombol",
      langs: {
        "id": {
          title: "Kembalikan Fokus ke Tombol Pemicu setelah Modal Clincoo Ditutup",
          desc: "Fokus yang hilang setelah dialog tertutup membingungkan keyboard. Simpan elemen pemicu lalu kembalikan.",
          content: "<p class=\"mb-4\">Modal Clincoo ditutup, tetapi fokus loncat ke body. Pengguna Tab harus memulai dari atas halaman.</p><p class=\"mb-4\">Di editor.clincoo.buzz, simpan document.activeElement saat tombol buka diklik. Setelah dialog tersembunyi, panggil focus() pada elemen itu.</p><p class=\"mb-4\">Jangan fokus ke body. Jika pemicu sudah dihapus dari DOM, pindahkan fokus ke heading halaman.</p><p class=\"mb-4\">Minta AI menambah simpan-dan-kembalikan fokus pada handler buka/tutup. Tempel skrip modal yang sekarang hanya toggle class.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu simpan. Fokus yang pulih membuat dialog di app.clincoo.buzz ramah keyboard.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Return Focus to the Trigger Button after a Clincoo Modal Closes",
          desc: "Lost focus after a dialog closes confuses keyboard users. Save the trigger element and restore it.",
          content: "<p class=\"mb-4\">A Clincoo modal closes, but focus jumps to body. Tab users have to start from the top of the page.</p><p class=\"mb-4\">In editor.clincoo.buzz, store document.activeElement when the open button is clicked. After the dialog hides, call focus() on that element.</p><p class=\"mb-4\">Do not focus body. If the trigger was removed from the DOM, move focus to the page heading.</p><p class=\"mb-4\">Ask AI to add save-and-restore focus on the open/close handlers. Paste the modal script that now only toggles a class.</p><p class=\"mb-4\">Clincoo runs the script you save. Restored focus makes dialogs on app.clincoo.buzz keyboard-friendly.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "modal-tutup-dengan-escape",
      langs: {
        "id": {
          title: "Tutup Modal Clincoo dengan Tombol Escape",
          desc: "Dialog tanpa Escape memaksa mouse. Dengarkan keydown Escape hanya saat modal terbuka.",
          content: "<p class=\"mb-4\">Pengunjung Clincoo menekan Escape, tetapi overlay tetap ada. Mereka mengira halaman macet.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pasang listener keydown pada document saat modal terbuka. Jika key adalah Escape, tutup dialog dan lepas listener.</p><p class=\"mb-4\">Jangan biarkan Escape menutup modal jika ada submenu di dalamnya yang juga memakai Escape. Tangani yang paling dalam dulu.</p><p class=\"mb-4\">Minta AI menambah handler Escape plus cleanup. Tempel markup dialog tanpa role=dialog.</p><p class=\"mb-4\">Clincoo tidak menambah pintasan sendiri. Escape yang jelas membuat modal di app.clincoo.buzz terasa selesai.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Close a Clincoo Modal with the Escape Key",
          desc: "A dialog without Escape forces the mouse. Listen for Escape only while the modal is open.",
          content: "<p class=\"mb-4\">A Clincoo visitor presses Escape, but the overlay stays. They think the page froze.</p><p class=\"mb-4\">In editor.clincoo.buzz, attach a keydown listener on document while the modal is open. If the key is Escape, close the dialog and remove the listener.</p><p class=\"mb-4\">Do not let Escape close the modal if an inner submenu also uses Escape. Handle the innermost layer first.</p><p class=\"mb-4\">Ask AI to add an Escape handler plus cleanup. Paste the dialog markup that has no role=dialog.</p><p class=\"mb-4\">Clincoo does not add shortcuts for you. A clear Escape makes modals on app.clincoo.buzz feel finished.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "modal-jebakan-tab-di-dalam",
      langs: {
        "id": {
          title: "Jebak Tab di dalam Modal Clincoo yang Terbuka",
          desc: "Tab yang keluar ke halaman belakang merusak dialog. Putar fokus hanya pada kontrol di dalam modal.",
          content: "<p class=\"mb-4\">Modal Clincoo terbuka, tetapi Tab mencapai tautan footer di belakang overlay. Konteks dialog pecah.</p><p class=\"mb-4\">Di editor.clincoo.buzz, kumpulkan elemen yang bisa difokus di dalam dialog. Pada Tab di item terakhir, pindah ke yang pertama; Shift+Tab sebaliknya.</p><p class=\"mb-4\">Sertakan tombol tutup dalam daftar. Abaikan elemen disabled dan yang tersembunyi dengan display none.</p><p class=\"mb-4\">Minta AI menambah focus trap sederhana tanpa pustaka. Tempel dialog yang sekarang membiarkan Tab keluar.</p><p class=\"mb-4\">Clincoo merender HTML yang kamu tulis. Jebakan Tab menjaga percakapan modal di app.clincoo.buzz utuh.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Trap Tab Inside an Open Clincoo Modal",
          desc: "Tab leaking to the page behind the overlay breaks the dialog. Cycle focus only among controls inside the modal.",
          content: "<p class=\"mb-4\">A Clincoo modal is open, but Tab reaches footer links behind the overlay. The dialog context breaks.</p><p class=\"mb-4\">In editor.clincoo.buzz, collect focusable elements inside the dialog. On Tab from the last item, move to the first; Shift+Tab the other way.</p><p class=\"mb-4\">Include the close button in the list. Skip disabled elements and those hidden with display none.</p><p class=\"mb-4\">Ask AI to add a simple focus trap with no library. Paste the dialog that now lets Tab escape.</p><p class=\"mb-4\">Clincoo renders the HTML you write. A Tab trap keeps the modal conversation intact on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "modal-aria-dialog-labelledby",
      langs: {
        "id": {
          title: "Tandai Modal Clincoo dengan role=dialog dan aria-labelledby",
          desc: "Div biasa tidak diumumkan sebagai dialog. Role dan label membuat pembaca layar menyebut judul.",
          content: "<p class=\"mb-4\">Overlay Clincoo hanya div.hidden. Pembaca layar tetap membaca halaman di belakang seolah tidak ada dialog.</p><p class=\"mb-4\">Di editor.clincoo.buzz, beri role=dialog, aria-modal=true, dan aria-labelledby yang menunjuk ke id judul di dalam modal.</p><p class=\"mb-4\">Jangan pakai role=alertdialog kecuali aksi wajib segera. Sembunyikan konten belakang dengan inert atau aria-hidden pada wrapper utama.</p><p class=\"mb-4\">Minta AI menambah atribut ARIA pada markup overlay. Tempel div modal yang sekarang tanpa peran.</p><p class=\"mb-4\">Clincoo tidak menulis aksesibilitas otomatis. Dialog yang ditandai membuat modal di app.clincoo.buzz bisa diumumkan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Mark a Clincoo Modal with role=dialog and aria-labelledby",
          desc: "A plain div is not announced as a dialog. A role and label let screen readers speak the title.",
          content: "<p class=\"mb-4\">A Clincoo overlay is just a div.hidden. Screen readers still read the page behind it as if no dialog exists.</p><p class=\"mb-4\">In editor.clincoo.buzz, set role=dialog, aria-modal=true, and aria-labelledby pointing at the title id inside the modal.</p><p class=\"mb-4\">Do not use role=alertdialog unless the action is urgent. Hide background content with inert or aria-hidden on the main wrapper.</p><p class=\"mb-4\">Ask AI to add ARIA attributes on the overlay markup. Paste the modal div that now has no role.</p><p class=\"mb-4\">Clincoo does not write accessibility for you. A marked dialog lets modals on app.clincoo.buzz be announced.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "modal-kunci-scroll-latar",
      langs: {
        "id": {
          title: "Kunci Gulir Latar saat Modal Clincoo Terbuka",
          desc: "Halaman belakang yang ikut bergulir membuat overlay terasa longgar. Kunci overflow pada body, lalu pulihkan.",
          content: "<p class=\"mb-4\">Modal Clincoo terbuka, tetapi roda mouse menggulir hero di belakang. Overlay terlihat menempel pada halaman.</p><p class=\"mb-4\">Di editor.clincoo.buzz, saat buka set document.body.style.overflow = hidden. Saat tutup, kembalikan ke nilai semula, bukan selalu visible.</p><p class=\"mb-4\">Simpan scrollY jika kamu memakai position fixed pada body di iOS. Kembalikan window.scrollTo setelah overlay hilang.</p><p class=\"mb-4\">Minta AI menambah kunci-dan-pulihkan overflow pada handler. Tempel CSS overlay tanpa aturan body.</p><p class=\"mb-4\">Clincoo menayangkan CSS dan skrip yang kamu simpan. Latar yang diam membuat modal di app.clincoo.buzz terasa rapat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Lock Background Scroll while a Clincoo Modal Is Open",
          desc: "A page that still scrolls behind the overlay feels loose. Lock overflow on body, then restore it.",
          content: "<p class=\"mb-4\">A Clincoo modal is open, but the mouse wheel scrolls the hero behind it. The overlay looks glued to the page.</p><p class=\"mb-4\">In editor.clincoo.buzz, on open set document.body.style.overflow = hidden. On close, restore the previous value, not always visible.</p><p class=\"mb-4\">Save scrollY if you use position fixed on body on iOS. Restore window.scrollTo after the overlay is gone.</p><p class=\"mb-4\">Ask AI to add lock-and-restore overflow on the handlers. Paste overlay CSS with no body rule.</p><p class=\"mb-4\">Clincoo ships the CSS and script you save. A still background makes modals on app.clincoo.buzz feel tight.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    }
  ]
};
