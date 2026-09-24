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
          title: "Support Meta on Mac and Ctrl on Windows for Clincoo Shortcuts",
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
