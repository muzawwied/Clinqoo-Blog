// Clincoo Blog — artikel shortcut tambahan 2026-09-25
(function(){
  var extra = [
    {
      id: "shortcut-esc-tutup-modal",
      langs: {
        "id": {
          title: "Tutup Modal Clincoo dengan Escape, Jangan Hanya Tombol Silang",
          desc: "Pengguna keyboard terjebak di overlay jika Escape tidak memanggil close yang sama dengan tombol X.",
          content: "<p class=\"mb-4\">Banyak template Clincoo memasang overlay dengan tombol silang, tetapi keydown Escape tidak diikat. Tab berputar di belakang overlay.</p><p class=\"mb-4\">Di editor.clincoo.buzz, satu fungsi closeModal harus dipanggil dari klik X, klik backdrop, dan tombol Escape. Kembalikan fokus ke pemicu.</p><p class=\"mb-4\">Jangan menumpuk listener Escape di setiap komponen. Satu handler di document cukup jika modal aktif tercatat.</p><p class=\"mb-4\">Minta AI menambahkan satu cabang e.key === 'Escape' pada file modal yang ada. Tolak rewrite seluruh overlay.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu simpan. Escape yang konsisten membuat app.clincoo.buzz bisa dipakai tanpa mouse.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Close a Clincoo Modal with Escape, Not Only the X Button",
          desc: "Keyboard users get stuck on an overlay when Escape does not call the same close as the X button.",
          content: "<p class=\"mb-4\">Many Clincoo templates ship an overlay with an X button but never bind Escape. Tab then cycles behind the overlay.</p><p class=\"mb-4\">In editor.clincoo.buzz, one closeModal function must run from the X click, the backdrop click, and the Escape key. Return focus to the trigger.</p><p class=\"mb-4\">Do not stack Escape listeners on every component. One document handler is enough if the active modal is tracked.</p><p class=\"mb-4\">Ask AI to add one e.key === 'Escape' branch on the existing modal file. Reject rewriting the whole overlay.</p><p class=\"mb-4\">Clincoo runs the script you save. A consistent Escape makes app.clincoo.buzz usable without a mouse.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "shortcut-meta-bukan-hanya-ctrl",
      langs: {
        "id": {
          title: "Dukung Meta di Mac dan Ctrl di Windows untuk Pintasan Clincoo",
          desc: "Ctrl+S di Mac membuka simpan halaman browser, bukan aksi editor, jika Meta diabaikan.",
          content: "<p class=\"mb-4\">Handler Clincoo sering cek e.ctrlKey saja. Di macOS kombinasi yang diharapkan pengguna adalah Command.</p><p class=\"mb-4\">Di editor.clincoo.buzz pakai const mod = e.metaKey || e.ctrlKey. Dokumentasikan sebagai Cmd/Ctrl di halaman bantuan.</p><p class=\"mb-4\">Jangan memaksa Ctrl di semua platform. Jangan juga menimpa Command+T atau Command+W milik Safari.</p><p class=\"mb-4\">Minta AI mengganti satu cek ctrlKey menjadi mod. Tempel handler simpan yang ada.</p><p class=\"mb-4\">Clincoo tidak menormalkan modifier sendiri. Pintasan lintas OS membuat blog.clincoo.buzz dan app.clincoo.buzz terasa sama.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Support Meta on Mac and Ctrl di Windows for Clincoo Shortcuts",
          desc: "Ctrl+S on a Mac opens the browser save dialog, not the editor action, when Meta is ignored.",
          content: "<p class=\"mb-4\">Clincoo handlers often test e.ctrlKey only. On macOS users expect Command.</p><p class=\"mb-4\">In editor.clincoo.buzz use const mod = e.metaKey || e.ctrlKey. Document it as Cmd/Ctrl on the help page.</p><p class=\"mb-4\">Do not force Ctrl on every platform. Do not override Safari Command+T or Command+W either.</p><p class=\"mb-4\">Ask AI to change one ctrlKey check to mod. Paste the existing save handler.</p><p class=\"mb-4\">Clincoo does not normalize modifiers for you. Cross-OS shortcuts make blog.clincoo.buzz and app.clincoo.buzz feel the same.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "shortcut-abaikan-key-repeat",
      langs: {
        "id": {
          title: "Abaikan event.repeat pada Aksi Pintasan Clincoo yang Tidak Boleh Ganda",
          desc: "Tombol yang ditahan menembakkan keydown berulang dan menggandakan simpan, undo, atau navigasi.",
          content: "<p class=\"mb-4\">Browser mengirim keydown berulang saat tombol ditahan. Aksi seperti toggle sidebar atau submit form jadi dobel.</p><p class=\"mb-4\">Di editor.clincoo.buzz, keluar awal jika e.repeat dan aksi bukan navigasi kursor. Simpan, undo, dan buka modal cukup sekali.</p><p class=\"mb-4\">Jangan menonaktifkan repeat untuk panah di daftar. Repeat tetap berguna untuk geser fokus item.</p><p class=\"mb-4\">Minta AI menambah penjaga e.repeat pada handler yang mengubah data. Tempel listener keydown yang ada.</p><p class=\"mb-4\">Clincoo menjalankan setiap event yang sampai ke skripmu. Filter repeat menjaga app.clincoo.buzz tidak menumpuk aksi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Ignore event.repeat on Clincoo Shortcut Actions that Must Not Fire Twice",
          desc: "A held key fires repeated keydown events and doubles save, undo, or navigation.",
          content: "<p class=\"mb-4\">Browsers send repeated keydown events while a key is held. Actions like toggle sidebar or submit then fire twice.</p><p class=\"mb-4\">In editor.clincoo.buzz, return early when e.repeat and the action is not caret movement. Save, undo, and open-modal should run once.</p><p class=\"mb-4\">Do not disable repeat for arrows in a list. Repeat still helps move item focus.</p><p class=\"mb-4\">Ask AI to add an e.repeat guard on handlers that mutate data. Paste the existing keydown listener.</p><p class=\"mb-4\">Clincoo runs every event that reaches your script. Filtering repeat keeps app.clincoo.buzz from stacking actions.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "shortcut-aria-keyshortcuts",
      langs: {
        "id": {
          title: "Tulis aria-keyshortcuts pada Tombol Clincoo yang Punya Pintasan",
          desc: "Pembaca layar tidak tahu kombinasi tombol jika atribut hanya hidup di JavaScript.",
          content: "<p class=\"mb-4\">Tombol Simpan di template Clincoo sering punya Ctrl+S di skrip, tetapi markup tidak menyebut pintasan.</p><p class=\"mb-4\">Di editor.clincoo.buzz tambahkan aria-keyshortcuts=\"Control+S\" atau \"Meta+S\" pada kontrol yang sama. Samakan dengan handler.</p><p class=\"mb-4\">Jangan mengisi atribut untuk pintasan yang sudah ditimpa atau dinonaktifkan. Daftar usang menyesatkan.</p><p class=\"mb-4\">Minta AI memetakan satu daftar handler ke atribut. Tolak menambah pintasan baru.</p><p class=\"mb-4\">Clincoo tidak menulis ARIA otomatis. Atribut yang jujur membuat app.clincoo.buzz lebih jelas di blog.clincoo.buzz dan di alat bantu.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set aria-keyshortcuts on Clincoo Buttons that Have a Hotkey",
          desc: "Screen readers never learn the combo if the binding lives only in JavaScript.",
          content: "<p class=\"mb-4\">The Save button in a Clincoo template often binds Ctrl+S in script while the markup never mentions the hotkey.</p><p class=\"mb-4\">In editor.clincoo.buzz add aria-keyshortcuts=\"Control+S\" or \"Meta+S\" on the same control. Keep it in sync with the handler.</p><p class=\"mb-4\">Do not set the attribute for a shortcut you already overrode or disabled. A stale list misleads users.</p><p class=\"mb-4\">Ask AI to map one handler list onto attributes. Reject adding new hotkeys.</p><p class=\"mb-4\">Clincoo does not write ARIA for you. Honest attributes make app.clincoo.buzz clearer on blog.clincoo.buzz and in assistive tools.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "shortcut-fokus-trap-bukan-tabindex-acak",
      langs: {
        "id": {
          title: "Jaga Urutan Tab Clincoo dengan Fokus Trap, Bukan tabindex Acak",
          desc: "tabindex positif merusak urutan dokumen dan membuat pintasan Tab terasa loncat-loncat.",
          content: "<p class=\"mb-4\">Proyek Clincoo kadang memasang tabindex=\"1\" sampai \"9\" agar tombol utama duluan. Hasilnya Tab meloncat ke footer lalu kembali.</p><p class=\"mb-4\">Di editor.clincoo.buzz biarkan urutan DOM. Pakai tabindex=\"0\" hanya pada elemen kustom yang harus bisa difokus. Trap fokus hanya saat modal terbuka.</p><p class=\"mb-4\">Jangan menaruh tabindex=\"-1\" pada tautan yang masih harus dijangkau dari papan ketik di halaman biasa.</p><p class=\"mb-4\">Minta AI menghapus tabindex positif di satu berkas HTML. Tempel cuplikan header dan modal.</p><p class=\"mb-4\">Clincoo merender markup yang kamu simpan. Urutan Tab yang jujur membuat pintasan di app.clincoo.buzz dapat diprediksi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep Clincoo Tab Order with a Focus Trap, Not Random tabindex Values",
          desc: "Positive tabindex values break document order and make Tab feel like it jumps at random.",
          content: "<p class=\"mb-4\">Clincoo projects sometimes set tabindex=\"1\" through \"9\" so primary buttons come first. Tab then jumps to the footer and back.</p><p class=\"mb-4\">In editor.clincoo.buzz keep DOM order. Use tabindex=\"0\" only on custom elements that must be focusable. Trap focus only while a modal is open.</p><p class=\"mb-4\">Do not put tabindex=\"-1\" on links that still need a keyboard path on a normal page.</p><p class=\"mb-4\">Ask AI to remove positive tabindex values in one HTML file. Paste the header and modal snippet.</p><p class=\"mb-4\">Clincoo renders the markup you save. Honest tab order makes shortcuts on app.clincoo.buzz predictable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "shortcut-tanya-buka-bantuan",
      langs: {
        "id": {
          title: "Buka Halaman Bantuan Clincoo dengan Tombol Tanda Tanya, Bukan Overlay Baru",
          desc: "Tanda tanya yang membuka modal acak menumpuk UI. Arahkan ke rute bantuan yang sudah ada.",
          content: "<p class=\"mb-4\">Banyak template Clincoo mengikat ? ke dialog kosong. Pengunjung yang mengetik URL kehilangan karakter dan melihat overlay tanpa isi.</p><p class=\"mb-4\">Di editor.clincoo.buzz, jika ada halaman /bantuan, arahkan location.hash atau tautan biasa. Jangan preventDefault saat fokus ada di input.</p><p class=\"mb-4\">Tulis kombinasi di tooltip tombol Bantuan. Satu pintasan, satu destinasi.</p><p class=\"mb-4\">Minta AI menambah cabang e.key === '?' pada berkas shortcut yang ada. Tolak generate overlay baru.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu simpan. Pintasan bantuan yang jujur membuat app.clincoo.buzz mudah dipelajari.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Open the Clincoo Help Page with Question Mark, Not a New Overlay",
          desc: "A question-mark key that opens a random modal stacks UI. Point it at the help route you already have.",
          content: "<p class=\"mb-4\">Many Clincoo templates bind ? to an empty dialog. Visitors typing a URL lose a character and see a blank overlay.</p><p class=\"mb-4\">In editor.clincoo.buzz, if /help exists, navigate with location.hash or a normal link. Do not preventDefault while focus is in an input.</p><p class=\"mb-4\">Write the combo on the Help button tooltip. One shortcut, one destination.</p><p class=\"mb-4\">Ask AI to add an e.key === '?' branch on the existing shortcut file. Reject generating a new overlay.</p><p class=\"mb-4\">Clincoo runs the script you save. An honest help shortcut makes app.clincoo.buzz easy to learn.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "shortcut-ctrl-enter-kirim-form",
      langs: {
        "id": {
          title: "Izinkan Ctrl+Enter Mengirim Form Clincoo dari Textarea, Bukan Hanya Tombol Submit",
          desc: "Textarea menelan Enter. Pengguna keyboard butuh kombinasi eksplisit untuk mengirim.",
          content: "<p class=\"mb-4\">Form kontak Clincoo sering hanya punya tombol Kirim. Di textarea, Enter menambah baris sehingga pengunjung tidak tahu cara submit tanpa mouse.</p><p class=\"mb-4\">Di editor.clincoo.buzz, dengar Ctrl+Enter atau Meta+Enter pada form. Panggil requestSubmit() agar validasi HTML tetap jalan.</p><p class=\"mb-4\">Jangan mengirim saat hanya Enter di input satu baris jika itu sudah perilaku native. Dokumentasikan pintasan di dekat tombol.</p><p class=\"mb-4\">Minta AI menambah satu listener keydown pada berkas form. Tempel markup form yang ada.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu simpan. Ctrl+Enter membuat app.clincoo.buzz terasa cepat bagi yang mengetik.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Let Ctrl+Enter Submit a Clincoo Form from a Textarea, Not Only the Submit Button",
          desc: "A textarea swallows Enter. Keyboard users need an explicit combo to send.",
          content: "<p class=\"mb-4\">Clincoo contact forms often only have a Send button. In a textarea, Enter adds a line so visitors cannot submit without a mouse.</p><p class=\"mb-4\">In editor.clincoo.buzz, listen for Ctrl+Enter or Meta+Enter on the form. Call requestSubmit() so HTML validation still runs.</p><p class=\"mb-4\">Do not submit on plain Enter in a single-line input if that is already native behavior. Document the shortcut next to the button.</p><p class=\"mb-4\">Ask AI to add one keydown listener on the form file. Paste the existing form markup.</p><p class=\"mb-4\">Clincoo runs the script you save. Ctrl+Enter makes app.clincoo.buzz feel fast for people who type.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "shortcut-jangan-curi-tombol-di-input",
      langs: {
        "id": {
          title: "Jangan Curikan Huruf Pintasan Clincoo saat Fokus Ada di Input atau Textarea",
          desc: "Handler global yang memanggil preventDefault pada setiap huruf merusak pengetikan.",
          content: "<p class=\"mb-4\">Shortcut Clincoo kadang dipasang di window. Saat pengguna mengetik di form, huruf G atau N memicu navigasi.</p><p class=\"mb-4\">Di editor.clincoo.buzz, cek tagName INPUT, TEXTAREA, atau isContentEditable sebelum menjalankan aksi. Slash boleh dikecualikan hanya jika kamu memang ingin lompat cari.</p><p class=\"mb-4\">Jangan mengandalkan keyCode numerik. Pakai e.key agar huruf non-Latin tidak salah cabang.</p><p class=\"mb-4\">Minta AI menambah early return pada listener yang ada. Tempel fungsi handler lengkap.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu simpan. Pintasan yang menghormati input membuat app.clincoo.buzz aman untuk menulis.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Steal Clincoo Shortcut Letters while Focus Is in an Input or Textarea",
          desc: "A global handler that preventDefaults every letter breaks typing.",
          content: "<p class=\"mb-4\">Clincoo shortcuts are sometimes bound on window. When a user types in a form, G or N triggers navigation.</p><p class=\"mb-4\">In editor.clincoo.buzz, check tagName INPUT, TEXTAREA, or isContentEditable before running an action. Slash may be exempt only if you truly want jump-to-search.</p><p class=\"mb-4\">Do not rely on numeric keyCode. Use e.key so non-Latin letters do not take the wrong branch.</p><p class=\"mb-4\">Ask AI to add an early return on the existing listener. Paste the full handler function.</p><p class=\"mb-4\">Clincoo runs the script you save. Shortcuts that respect inputs make app.clincoo.buzz safe for writing.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "shortcut-tulis-kombinasi-di-tooltip",
      langs: {
        "id": {
          title: "Tulis Kombinasi Pintasan Clincoo di title atau Tooltip Tombol, Bukan Hanya di README",
          desc: "Pintasan yang hanya hidup di kode tidak pernah dipelajari pengunjung.",
          content: "<p class=\"mb-4\">Tombol Simpan Clincoo punya handler Ctrl+S tetapi label hanya ikon. Pengunjung tidak tahu kombinasi itu ada.</p><p class=\"mb-4\">Di editor.clincoo.buzz, set attribute title atau elemen tooltip dengan teks seperti Simpan (Ctrl+S). Samakan string dengan yang didengar listener.</p><p class=\"mb-4\">Jangan menaruh petunjuk hanya di komentar HTML. Pembaca layar butuh teks yang terlihat atau aria-keyshortcuts.</p><p class=\"mb-4\">Minta AI menambahkan title pada tiga tombol yang sudah punya pintasan. Tolak rewrite toolbar.</p><p class=\"mb-4\">Clincoo merender markup yang kamu simpan. Tooltip jujur membuat pintasan di app.clincoo.buzz bisa ditemukan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Write the Clincoo Shortcut Combo on the Button title or Tooltip, Not Only in the README",
          desc: "A shortcut that lives only in code is never learned by visitors.",
          content: "<p class=\"mb-4\">A Clincoo Save button has a Ctrl+S handler but the label is only an icon. Visitors never learn the combo exists.</p><p class=\"mb-4\">In editor.clincoo.buzz, set a title attribute or tooltip with text such as Save (Ctrl+S). Keep the string in sync with the listener.</p><p class=\"mb-4\">Do not leave the hint only in an HTML comment. Screen readers need visible text or aria-keyshortcuts.</p><p class=\"mb-4\">Ask AI to add title on three buttons that already have shortcuts. Reject rewriting the toolbar.</p><p class=\"mb-4\">Clincoo renders the markup you save. Honest tooltips make shortcuts on app.clincoo.buzz discoverable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["shortcut"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["shortcut"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
