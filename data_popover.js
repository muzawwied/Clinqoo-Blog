// Clincoo Docs — kategori Popover (5 Oktober 2026, WIB) — 12 artikel
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
},
{
 "id": "popover-pasang-anchor-positioning",
 "langs": {
  "id": {
   "title": "Cara Pasang Anchor Positioning pada Popover",
   "desc": "Tata cara menempelkan popover Clincoo ke tombol pemicu dengan anchor-name dan position-anchor, supaya panel tidak melayang di pojok viewport.",
   "content": "<p class=\"mb-4\">Popover bawaan muncul di top layer, tetapi posisi defaultnya sering di tengah atau mengikuti margin, bukan di samping tombol. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> itu membuat menu terasa lepas dari kontrolnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri nama jangkar pada tombol</h2><p class=\"mb-4\">Pada tombol pemicu setel anchor-name: --menu-akun. Pada elemen popover setel position-anchor: --menu-akun, lalu top dan left dengan anchor() supaya tepi panel menempel ke tepi tombol.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sediakan posisi cadangan</h2><p class=\"mb-4\">Jika ruang di bawah tombol habis, geser panel ke atas dengan position-try. Uji di lebar ponsel pada <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dan catat hasilnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS anchor positioning",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "sourceSnippet": "Anchor positioning lets a positioned element be placed relative to one or more anchor elements.",
   "source2": "CSS — position-anchor",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-anchor",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Anchor a Popover with CSS Anchor Positioning",
   "desc": "How to pin a Clincoo popover to its trigger with anchor-name and position-anchor so the panel does not float in a viewport corner.",
   "content": "<p class=\"mb-4\">A native popover sits in the top layer, but its default position is often centered or margin-based, not beside the button. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> that makes the menu feel detached from its control.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Name the anchor on the button</h2><p class=\"mb-4\">On the trigger set anchor-name: --account-menu. On the popover set position-anchor: --account-menu, then top and left with anchor() so the panel edge meets the button edge.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add a fallback position</h2><p class=\"mb-4\">If there is no room below the button, flip the panel upward with position-try. Check a phone width on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> and note the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS anchor positioning",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "sourceSnippet": "Anchor positioning lets a positioned element be placed relative to one or more anchor elements.",
   "source2": "CSS — position-anchor",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-anchor",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "popover-bedakan-dengan-dialog",
 "langs": {
  "id": {
   "title": "Cara Bedakan Popover dan Dialog Modal",
   "desc": "Tata cara memilih popover untuk menu singkat dan dialog untuk tugas yang harus diselesaikan, supaya fokus dan lapisan tidak tertukar di Clincoo.",
   "content": "<p class=\"mb-4\">Popover dan dialog sama-sama di top layer, tetapi tujuan mereka beda. Menu akun yang boleh diabaikan cocok di popover. Konfirmasi hapus yang wajib dijawab cocok di dialog.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek apakah tugas boleh ditinggal</h2><p class=\"mb-4\">Jika pengguna boleh klik di luar dan lanjut bekerja, pakai popover auto. Jika halaman di belakang harus terkunci sampai ada pilihan, pakai dialog showModal di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan campur peran</h2><p class=\"mb-4\">Jangan jadikan popover sebagai form panjang. Form singkat boleh, tetapi unggah berkas atau pembayaran di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> lebih aman di dialog. Ringkas keputusannya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "HTML — the popover attribute",
   "sourceUrl": "https://html.spec.whatwg.org/multipage/popover.html",
   "sourceSnippet": "The popover attribute is for transient UI, while dialog is for a window that can be modal.",
   "source2": "MDN — dialog element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Choose Popover Instead of a Modal Dialog",
   "desc": "How to use a popover for a short menu and a dialog for a task that must be finished, so focus and layers do not get mixed in Clincoo.",
   "content": "<p class=\"mb-4\">Popover and dialog both use the top layer, but they serve different jobs. An account menu the user may ignore belongs in a popover. A delete confirm that needs an answer belongs in a dialog.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check whether the task can be abandoned</h2><p class=\"mb-4\">If the user may click outside and keep working, use an auto popover. If the page behind must stay locked until a choice is made, use dialog showModal in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not mix the roles</h2><p class=\"mb-4\">Do not turn a popover into a long form. A short form is fine, but file upload or payment on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> is safer in a dialog. Summarize the choice on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "HTML — the popover attribute",
   "sourceUrl": "https://html.spec.whatwg.org/multipage/popover.html",
   "sourceSnippet": "The popover attribute is for transient UI, while dialog is for a window that can be modal.",
   "source2": "MDN — dialog element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "popover-dengarkan-toggle-newstate",
 "langs": {
  "id": {
   "title": "Cara Dengarkan toggle dan newState pada Popover",
   "desc": "Tata cara memakai peristiwa toggle di Clincoo supaya status menu tersimpan hanya saat popover benar-benar terbuka atau tertutup.",
   "content": "<p class=\"mb-4\">Mengandalkan klik tombol saja mudah salah: popover bisa ditutup Escape atau light dismiss tanpa klik kedua pada tombol yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang listener toggle</h2><p class=\"mb-4\">Pada elemen popover dengarkan toggle. Baca event.newState: open berarti panel tampil, closed berarti sudah hilang. Jangan ubah aria-expanded di klik sebelum peristiwa ini selesai.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji tiga jalur tutup</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tutup lewat tombol, Escape, dan klik luar. Ketiganya harus mengirim newState closed. Catat yang hilang di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum merilis ke <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p>",
   "source": "MDN — ToggleEvent",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent",
   "sourceSnippet": "The toggle event fires on a popover when it is shown or hidden, and newState reports the resulting state.",
   "source2": "HTML — toggle event",
   "source2Url": "https://html.spec.whatwg.org/multipage/popover.html#event-toggle",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Listen for toggle and newState on a Popover",
   "desc": "How to use the toggle event in Clincoo so menu state is stored only when the popover has actually opened or closed.",
   "content": "<p class=\"mb-4\">Relying on the button click alone is easy to get wrong: a popover can close with Escape or light dismiss without a second click on the same button.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add a toggle listener</h2><p class=\"mb-4\">Listen for toggle on the popover element. Read event.newState: open means the panel is shown, closed means it is gone. Do not flip aria-expanded on click before this event finishes.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test three close paths</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> close via the button, Escape, and an outside click. All three should send newState closed. Note any miss on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before shipping to <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p>",
   "source": "MDN — ToggleEvent",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent",
   "sourceSnippet": "The toggle event fires on a popover when it is shown or hidden, and newState reports the resulting state.",
   "source2": "HTML — toggle event",
   "source2Url": "https://html.spec.whatwg.org/multipage/popover.html#event-toggle",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "popover-pakai-backdrop-tipis",
 "langs": {
  "id": {
   "title": "Cara Pakai ::backdrop Tipis pada Popover",
   "desc": "Tata cara memberi lapisan redup pada popover Clincoo dengan ::backdrop tanpa mengunci halaman seperti dialog modal.",
   "content": "<p class=\"mb-4\">Popover auto tetap bisa ditutup klik luar. Lapisan ::backdrop hanya membantu mata melihat panel mana yang aktif, bukan menggantikan dialog.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Warnai backdrop, jangan tangkap fokus</h2><p class=\"mb-4\">Selector [popover]::backdrop menerima background dengan alpha rendah. Jangan pasang pointer-events yang menelan klik jika Anda masih ingin light dismiss bekerja di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jaga kontras panel</h2><p class=\"mb-4\">Teks di panel harus tetap kontras di atas backdrop. Cek mode terang dan gelap di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, lalu tulis pengecualian browser di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ::backdrop",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop",
   "sourceSnippet": "The ::backdrop pseudo-element is a box rendered immediately below a popover or modal dialog in the top layer.",
   "source2": "MDN — Popover API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Style a Light ::backdrop on a Popover",
   "desc": "How to dim the page behind a Clincoo popover with ::backdrop without locking the page the way a modal dialog does.",
   "content": "<p class=\"mb-4\">An auto popover can still close on an outside click. A ::backdrop layer only helps the eye see which panel is active; it does not replace a dialog.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Color the backdrop, do not trap focus</h2><p class=\"mb-4\">The [popover]::backdrop selector accepts a low-alpha background. Do not set pointer-events that swallow clicks if you still want light dismiss in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep panel contrast</h2><p class=\"mb-4\">Text in the panel must stay contrasted on top of the backdrop. Check light and dark mode on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, then write any browser exception on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ::backdrop",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop",
   "sourceSnippet": "The ::backdrop pseudo-element is a box rendered immediately below a popover or modal dialog in the top layer.",
   "source2": "MDN — Popover API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "popover-hindari-bersarang-menutup-induk",
 "langs": {
  "id": {
   "title": "Cara Hindari Popover Bersarang yang Menutup Induk",
   "desc": "Tata cara menyusun submenu Clincoo supaya popover anak tidak ikut menutup induk saat light dismiss, atau sebaliknya menumpuk tanpa jalur tutup.",
   "content": "<p class=\"mb-4\">Popover auto yang bersarang sering menutup keduanya sekaligus saat klik di dalam submenu, karena klik itu dianggap di luar induk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hubungkan induk dan anak</h2><p class=\"mb-4\">Taruh submenu sebagai popover terpisah yang dipicu dari dalam induk, lalu uji apakah hint invoker atau popovertargetaction menjaga induk tetap terbuka. Jika tidak, buat submenu manual dan tutup eksplisit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sediakan satu jalur tutup</h2><p class=\"mb-4\">Escape harus menutup anak dulu, baru induk. Cek urutan di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> dan <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Jika urutan terbalik, catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "HTML — popover stacking",
   "sourceUrl": "https://html.spec.whatwg.org/multipage/popover.html",
   "sourceSnippet": "Showing a popover hides other auto popovers that are not ancestors, which matters for nested menus.",
   "source2": "MDN — Popover API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid a Nested Popover Closing Its Parent",
   "desc": "How to stack a Clincoo submenu so a child popover does not close its parent on light dismiss, and does not pile up with no close path.",
   "content": "<p class=\"mb-4\">Nested auto popovers often close both at once when the user clicks inside the submenu, because that click counts as outside the parent.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Connect parent and child</h2><p class=\"mb-4\">Place the submenu as a separate popover triggered from inside the parent, then check whether an invoker hint or popovertargetaction keeps the parent open. If not, make the submenu manual and close it explicitly.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Give one close path</h2><p class=\"mb-4\">Escape should close the child first, then the parent. Check the order in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> and <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. If the order flips, note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "HTML — popover stacking",
   "sourceUrl": "https://html.spec.whatwg.org/multipage/popover.html",
   "sourceSnippet": "Showing a popover hides other auto popovers that are not ancestors, which matters for nested menus.",
   "source2": "MDN — Popover API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "popover-balik-posisi-saat-keluar-viewport",
 "langs": {
  "id":   {
   "title": "Cara Balik Posisi Popover saat Keluar Viewport",
   "desc": "Tata cara membalik popover Clincoo ke atas atau ke samping saat panel terpotong tepi layar, tanpa menggeser layout halaman.",
   "content": "<p class=\"mb-4\">Popover yang selalu membuka ke bawah akan terpotong di dekat footer atau di dalam panel yang pendek. Pembaca tidak melihat tombol tutup, lalu mengira fitur rusak.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek ruang sebelum membuka</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ukur jarak trigger ke tepi viewport. Kalau ruang di bawah lebih kecil dari tinggi panel, set posisi ke atas. Jangan menambah margin halaman hanya supaya panel muat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jaga anchor tetap di trigger</h2><p class=\"mb-4\">Panah atau tepi panel harus tetap menunjuk tombol pemicu. Kalau anchor positioning tersedia, pakai fallback flip. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan jendela pendek dan zoom 200%, lalu catat hasilnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Popover API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",
   "sourceSnippet": "The Popover API displays content on top of other page content, so placement still has to stay inside the viewport.",
   "source2": "CSS — Anchor positioning",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Flip a Popover When It Leaves the Viewport",
   "desc": "How to flip a Clincoo popover above or beside the trigger when the panel is clipped by the viewport, without shifting page layout.",
   "content": "<p class=\"mb-4\">A popover that always opens downward is clipped near the footer or inside a short panel. Readers never see the close control and assume the feature is broken.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure space before opening</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> measure the gap from the trigger to the viewport edge. If the space below is smaller than the panel, place it above. Do not add page margin just to make the panel fit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep the anchor on the trigger</h2><p class=\"mb-4\">The arrow or panel edge should still point at the invoking button. If anchor positioning is available, use a flip fallback. Test in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> with a short window and 200% zoom, then note the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Popover API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",
   "sourceSnippet": "The Popover API displays content on top of other page content, so placement still has to stay inside the viewport.",
   "source2": "CSS — Anchor positioning",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "popover-jangan-taruh-konfirmasi-kritis",
 "langs": {
  "id":   {
   "title": "Cara Jangan Taruh Konfirmasi Kritis di Popover",
   "desc": "Tata cara memindahkan konfirmasi hapus atau bayar dari popover Clincoo ke dialog, karena popover bisa tertutup klik di luar.",
   "content": "<p class=\"mb-4\">Popover light-dismiss menutup diri saat pengguna klik di luar. Itu cocok untuk menu, bukan untuk konfirmasi yang tidak boleh hilang sebelum dipilih.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pindahkan aksi destruktif ke dialog</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> biarkan popover hanya memuat pratinjau atau tautan. Tombol hapus, cabut akses, atau bayar membuka dialog dengan dua aksi yang eksplisit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji klik di luar</h2><p class=\"mb-4\">Buka panel dari <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, klik area kosong, dan pastikan aksi kritis tidak batal diam-diam. Catat keputusan pola ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "HTML — popover attribute",
   "sourceUrl": "https://html.spec.whatwg.org/multipage/popover.html",
   "sourceSnippet": "Auto popovers are light dismissed, so a click outside closes them without an explicit choice.",
   "source2": "MDN — dialog element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Keep Critical Confirms Out of a Popover",
   "desc": "How to move a Clincoo delete or pay confirmation out of a popover and into a dialog, because a popover closes on an outside click.",
   "content": "<p class=\"mb-4\">A light-dismiss popover closes when the user clicks outside. That fits a menu, not a confirmation that must not vanish before a choice.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Move destructive actions to a dialog</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> keep the popover for a preview or links. Delete, revoke, or pay should open a dialog with two explicit actions.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test the outside click</h2><p class=\"mb-4\">Open the panel from <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, click empty space, and confirm the critical action does not cancel silently. Note the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "HTML — popover attribute",
   "sourceUrl": "https://html.spec.whatwg.org/multipage/popover.html",
   "sourceSnippet": "Auto popovers are light dismissed, so a click outside closes them without an explicit choice.",
   "source2": "MDN — dialog element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
}
 ]
};
