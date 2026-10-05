// Clincoo Docs — kategori Popover (5 Oktober 2026, WIB) — 5 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["popover"] = {
 "names": { "id": "Popover", "en": "Popover" },
 "articles": [
{
 "id": "popover-pakai-atribut-bukan-div-absolut",
 "langs": {
  "id": {
   "title": "Cara Pakai Atribut popover, Bukan Div Absolut",
   "desc": "Tata cara membuka lapisan popover di Clincoo dengan atribut popover bawaan, supaya tidak mengurus z-index dan klik di luar sendiri.",
   "content": "<p class=\"mb-4\">Div dengan position absolute dan z-index tinggi mudah kalah oleh stacking context dari transform atau filter. Atribut popover menaruh lapisan di top layer browser.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang atribut popover</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri elemen panel atribut popover. Jangan duplikasi logika tampil/sembunyi dengan class hidden kalau API-nya sudah yang mengatur status.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di editor</h2><p class=\"mb-4\">Buka panel dari <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, gulir halaman di belakangnya, lalu catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> apakah panel tetap di atas header dan dialog lain.</p>",
   "source": "MDN — Popover API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",
   "sourceSnippet": "The Popover API provides a standard mechanism for displaying popover content on top of other page content.",
   "source2": "HTML — popover attribute",
   "source2Url": "https://html.spec.whatwg.org/multipage/popover.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use the popover Attribute, Not an Absolute Div",
   "desc": "How to open a Clincoo popover layer with the native popover attribute so you do not manage z-index and outside clicks yourself.",
   "content": "<p class=\"mb-4\">A div with position absolute and a high z-index loses to stacking contexts created by transform or filter. The popover attribute places the layer in the browser top layer.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add the popover attribute</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add the popover attribute to the panel element. Do not also toggle a hidden class if the API already owns the open state.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in the editor</h2><p class=\"mb-4\">Open the panel from <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, scroll the page behind it, and note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> whether the panel stays above the header and other dialogs.</p>",
   "source": "MDN — Popover API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",
   "sourceSnippet": "The Popover API provides a standard mechanism for displaying popover content on top of other page content.",
   "source2": "HTML — popover attribute",
   "source2Url": "https://html.spec.whatwg.org/multipage/popover.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "popover-tutup-dengan-light-dismiss",
 "langs": {
  "id": {
   "title": "Cara Tutup Popover dengan Light Dismiss",
   "desc": "Tata cara membiarkan popover auto tertutup saat pengguna klik di luar, tanpa listener document.click yang bentrok.",
   "content": "<p class=\"mb-4\">Listener klik di document sering menutup menu yang baru saja dibuka, atau bentrok dengan handler tombol di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pilih popover auto</h2><p class=\"mb-4\">Popover bertipe auto sudah light-dismiss: klik di luar atau tekan Escape menutupnya. Popover manual tidak, jadi jangan mengandalkan klik luar untuk tipe itu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek klik di luar dan Escape</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> klik area kosong dan tekan Escape. Catat hasilnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> jika salah satu jalur tidak menutup panel.</p>",
   "source": "MDN — Popover API light dismiss",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",
   "sourceSnippet": "Auto popovers can be light dismissed, which means they close when the user clicks outside or presses Escape.",
   "source2": "HTML — light dismiss",
   "source2Url": "https://html.spec.whatwg.org/multipage/popover.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Close a Popover with Light Dismiss",
   "desc": "How to let an auto popover close when the user clicks outside, without a document.click listener that conflicts with other widgets.",
   "content": "<p class=\"mb-4\">A document click listener often closes a menu that just opened, or fights the button handler in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Choose an auto popover</h2><p class=\"mb-4\">An auto popover already light-dismisses: an outside click or Escape closes it. A manual popover does not, so do not rely on outside clicks for that type.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check outside click and Escape</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> click empty space and press Escape. Record the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> if either path fails to close the panel.</p>",
   "source": "MDN — Popover API light dismiss",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",
   "sourceSnippet": "Auto popovers can be light dismissed, which means they close when the user clicks outside or presses Escape.",
   "source2": "HTML — light dismiss",
   "source2Url": "https://html.spec.whatwg.org/multipage/popover.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "popover-hubungkan-tombol-dengan-popovertarget",
 "langs": {
  "id": {
   "title": "Cara Hubungkan Tombol dengan popovertarget",
   "desc": "Tata cara menautkan tombol pembuka ke panel popover lewat popovertarget, tanpa onclick yang memanggil showPopover sendiri.",
   "content": "<p class=\"mb-4\">Tombol butuh popovertarget yang sama dengan id panel. Kalau id salah, klik tidak melakukan apa-apa dan terlihat seperti bug JavaScript.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tombol, bukan span</h2><p class=\"mb-4\">Elemen pembuka harus button atau input type button. Span yang diklik tidak ikut akses keyboard di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Perintah toggle atau show</h2><p class=\"mb-4\">Default-nya toggle. Untuk panel yang hanya boleh dibuka, set popovertargetaction ke show. Uji dari <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> lalu tulis id yang terpakai di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — popovertarget",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popovertarget",
   "sourceSnippet": "The popovertarget attribute turns a button into a popover control button, linking it to a popover element.",
   "source2": "MDN — popovertargetaction",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#popovertargetaction",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Connect a Button with popovertarget",
   "desc": "How to link an opener button to a popover panel with popovertarget, without an onclick that calls showPopover itself.",
   "content": "<p class=\"mb-4\">The button needs a popovertarget equal to the panel id. A mismatched id does nothing and looks like a JavaScript bug.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use a button, not a span</h2><p class=\"mb-4\">The opener must be a button or input type button. A clicked span is not keyboard accessible in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Toggle or show action</h2><p class=\"mb-4\">The default action is toggle. For a panel that should only open, set popovertargetaction to show. Test from <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> and write the id you used on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — popovertarget",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popovertarget",
   "sourceSnippet": "The popovertarget attribute turns a button into a popover control button, linking it to a popover element.",
   "source2": "MDN — popovertargetaction",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#popovertargetaction",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "popover-beda-manual-dan-auto",
 "langs": {
  "id": {
   "title": "Cara Bedakan Popover Manual dan Auto",
   "desc": "Tata cara memilih popover=manual atau popover=auto di Clincoo sesuai apakah panel boleh menutup panel lain.",
   "content": "<p class=\"mb-4\">Popover auto menutup popover auto lain yang sedang terbuka. Cocok untuk menu akun atau menu aksi tunggal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Manual untuk toolbar</h2><p class=\"mb-4\">Popover manual tetap terbuka saat popover lain muncul. Pakai ini untuk toolbar format yang harus hidup bersamaan dengan menu kecil di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan campur tanpa alasan</h2><p class=\"mb-4\">Kalau dua menu saling menutup tanpa sengaja, cek nilai atributnya di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> sebelum menambah skrip. Ringkas pilihannya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — popover values",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using",
   "sourceSnippet": "The popover attribute can be set to auto or manual to control light dismiss and stacking with other popovers.",
   "source2": "HTML — popover attribute",
   "source2Url": "https://html.spec.whatwg.org/multipage/popover.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Choose Manual vs Auto Popover",
   "desc": "How to choose popover=manual or popover=auto in Clincoo based on whether the panel may close other panels.",
   "content": "<p class=\"mb-4\">An auto popover closes other open auto popovers. That fits an account menu or a single action menu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Manual for a toolbar</h2><p class=\"mb-4\">A manual popover stays open when another popover appears. Use it for a format toolbar that must stay up beside a small menu in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not mix them without a reason</h2><p class=\"mb-4\">If two menus close each other by accident, check the attribute in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> before adding a script. Summarize the choice on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — popover values",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using",
   "sourceSnippet": "The popover attribute can be set to auto or manual to control light dismiss and stacking with other popovers.",
   "source2": "HTML — popover attribute",
   "source2Url": "https://html.spec.whatwg.org/multipage/popover.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "popover-jaga-fokus-saat-terbuka",
 "langs": {
  "id": {
   "title": "Cara Jaga Fokus saat Popover Terbuka",
   "desc": "Tata cara memindahkan fokus ke dalam popover Clincoo dan mengembalikannya ke tombol pemicu saat panel ditutup.",
   "content": "<p class=\"mb-4\">Setelah showPopover, fokus harus pindah ke tombol atau tautan pertama di dalam panel. Kalau tetap di tombol pemicu, pengguna keyboard tidak melihat isi menu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kembalikan ke pemicu</h2><p class=\"mb-4\">Pada event toggle saat newState closed, kembalikan fokus ke elemen yang membuka panel. Simpan referensinya sebelum panel dibuka di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan kunci fokus di manual</h2><p class=\"mb-4\">Popover manual bukan dialog, jadi jangan perangkap Tab di dalamnya kecuali memang pola modal. Uji Tab dan Shift+Tab di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, lalu catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ToggleEvent",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent",
   "sourceSnippet": "The toggle event fires on a popover element when it is shown or hidden, and newState reports the resulting state.",
   "source2": "WAI — menu and disclosure",
   "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Keep Focus When a Popover Opens",
   "desc": "How to move focus into a Clincoo popover and return it to the trigger button when the panel closes.",
   "content": "<p class=\"mb-4\">After showPopover, focus should move to the first button or link inside the panel. If it stays on the trigger, keyboard users never see the menu contents.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Return focus to the trigger</h2><p class=\"mb-4\">On the toggle event when newState is closed, return focus to the element that opened the panel. Store that reference before opening it in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not trap focus on manual</h2><p class=\"mb-4\">A manual popover is not a dialog, so do not trap Tab inside it unless the pattern is truly modal. Test Tab and Shift+Tab in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> and note the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ToggleEvent",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent",
   "sourceSnippet": "The toggle event fires on a popover element when it is shown or hidden, and newState reports the resulting state.",
   "source2": "WAI — menu and disclosure",
   "source2Url": "https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
