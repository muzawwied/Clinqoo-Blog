// Clincoo Blog — artikel modal tambahan 2026-09-27
(function(){
  var extra = [
    {
      id: "modal-tutup-klik-overlay",
      langs: {
        "id": {
          title: "Tutup Modal Clincoo saat Overlay Latar Diklik",
          desc: "Klik di luar kotak dialog harus menutup overlay. Jangan tutup jika klik berasal dari dalam panel.",
          content: "<p class=\"mb-4\">Pengunjung Clincoo mengklik gelap di belakang dialog, tetapi modal tetap terbuka. Mereka mencari tombol silang yang kecil.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pasang click pada overlay. Jika event.target adalah overlay itu sendiri, tutup dialog. Jika target ada di dalam panel, biarkan.</p><p class=\"mb-4\">Jangan mengikat click pada document. Klik di halaman belakang tidak boleh sampai ke tautan tersembunyi.</p><p class=\"mb-4\">Minta AI memisahkan overlay dan panel. Tempel markup yang sekarang satu div tanpa pembeda.</p><p class=\"mb-4\">Clincoo menayangkan skrip yang kamu simpan. Klik luar yang menutup membuat modal di app.clincoo.buzz terasa biasa.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Close a Clincoo Modal when the Backdrop Overlay Is Clicked",
          desc: "A click outside the dialog box should close the overlay. Do not close if the click came from inside the panel.",
          content: "<p class=\"mb-4\">A Clincoo visitor clicks the dark area behind the dialog, but the modal stays open. They hunt for a tiny close icon.</p><p class=\"mb-4\">In editor.clincoo.buzz, attach click on the overlay. If event.target is the overlay itself, close the dialog. If the target is inside the panel, leave it.</p><p class=\"mb-4\">Do not bind click on document. Clicks on the page behind must not reach hidden links.</p><p class=\"mb-4\">Ask AI to split overlay and panel. Paste the markup that is now one undivided div.</p><p class=\"mb-4\">Clincoo ships the script you save. An outside click that closes makes modals on app.clincoo.buzz feel familiar.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "modal-fokus-awal-ke-judul",
      langs: {
        "id": {
          title: "Pindahkan Fokus Awal ke Judul saat Modal Clincoo Dibuka",
          desc: "Jangan biarkan fokus tetap di tombol belakang. Pindahkan ke heading dialog atau tombol tutup.",
          content: "<p class=\"mb-4\">Modal Clincoo terbuka, tetapi Tab masih di tombol pemicu di belakang overlay. Pembaca layar tidak menyebut judul.</p><p class=\"mb-4\">Di editor.clincoo.buzz, setelah overlay tampil, panggil focus() pada heading yang punya tabindex=-1, atau pada tombol tutup.</p><p class=\"mb-4\">Jangan autofocus ke input pertama jika dialog hanya konfirmasi. Judul lebih aman sebagai titik masuk.</p><p class=\"mb-4\">Minta AI menambah fokus awal setelah class open ditambah. Tempel handler buka yang sekarang hanya toggle.</p><p class=\"mb-4\">Clincoo merender HTML yang kamu tulis. Fokus awal yang jelas membuat modal di app.clincoo.buzz langsung terbaca.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Move Initial Focus to the Title when a Clincoo Modal Opens",
          desc: "Do not leave focus on the button behind the overlay. Move it to the dialog heading or the close button.",
          content: "<p class=\"mb-4\">A Clincoo modal opens, but Tab is still on the trigger behind the overlay. Screen readers do not speak the title.</p><p class=\"mb-4\">In editor.clincoo.buzz, after the overlay shows, call focus() on the heading with tabindex=-1, or on the close button.</p><p class=\"mb-4\">Do not autofocus the first input if the dialog is only a confirm. The title is a safer entry point.</p><p class=\"mb-4\">Ask AI to add initial focus after the open class is added. Paste the open handler that now only toggles.</p><p class=\"mb-4\">Clincoo renders the HTML you write. Clear initial focus makes modals on app.clincoo.buzz readable at once.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "modal-satu-overlay-pada-satu-waktu",
      langs: {
        "id": {
          title: "Buka Hanya Satu Overlay Modal Clincoo pada Satu Waktu",
          desc: "Dua dialog bertumpuk merusak fokus dan Escape. Tutup yang lama sebelum membuka yang baru, atau ganti isinya.",
          content: "<p class=\"mb-4\">Form Clincoo membuka modal konfirmasi di atas modal edit. Escape menutup yang salah dan scroll terkunci dua kali.</p><p class=\"mb-4\">Di editor.clincoo.buzz, sebelum membuka dialog baru, cek apakah overlay sudah terbuka. Tutup dulu atau ganti judul plus isi panel yang sama.</p><p class=\"mb-4\">Jangan menumpuk z-index. Satu overlay, satu panel, satu kunci scroll.</p><p class=\"mb-4\">Minta AI menambah guard isOpen. Tempel dua fungsi buka yang sekarang saling menimpa class.</p><p class=\"mb-4\">Clincoo menjalankan skrip halamanmu. Satu overlay menjaga modal di app.clincoo.buzz tetap bisa dilacak.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Open Only One Clincoo Modal Overlay at a Time",
          desc: "Stacked dialogs break focus and Escape. Close the old one before opening a new one, or swap its contents.",
          content: "<p class=\"mb-4\">A Clincoo form opens a confirm modal on top of an edit modal. Escape closes the wrong one and scroll locks twice.</p><p class=\"mb-4\">In editor.clincoo.buzz, before opening a new dialog, check whether an overlay is already open. Close it first or swap the title and panel body.</p><p class=\"mb-4\">Do not stack z-index. One overlay, one panel, one scroll lock.</p><p class=\"mb-4\">Ask AI to add an isOpen guard. Paste two open functions that now overwrite the same class.</p><p class=\"mb-4\">Clincoo runs your page script. A single overlay keeps modals on app.clincoo.buzz trackable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "modal-hormati-prefers-reduced-motion",
      langs: {
        "id": {
          title: "Hormati prefers-reduced-motion pada Animasi Modal Clincoo",
          desc: "Fade dan scale yang wajib membuat sebagian orang pusing. Matikan transisi jika sistem meminta gerak berkurang.",
          content: "<p class=\"mb-4\">Modal Clincoo selalu scale dari 0.8. Pengunjung dengan vestibular sensitivity menutup tab.</p><p class=\"mb-4\">Di editor.clincoo.buzz, bungkus animasi overlay dalam @media (prefers-reduced-motion: no-preference). Jika reduce, tampilkan dan sembunyikan tanpa transition.</p><p class=\"mb-4\">Jangan andalkan hanya JS. Media query CSS sudah cukup untuk fade.</p><p class=\"mb-4\">Minta AI menambah media query pada CSS modal. Tempel keyframes yang sekarang selalu jalan.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. Gerak yang bisa dimatikan membuat modal di app.clincoo.buzz lebih aman.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Respect prefers-reduced-motion on Clincoo Modal Animation",
          desc: "Forced fade and scale make some people dizzy. Turn off transitions when the system asks for reduced motion.",
          content: "<p class=\"mb-4\">A Clincoo modal always scales from 0.8. Visitors with vestibular sensitivity close the tab.</p><p class=\"mb-4\">In editor.clincoo.buzz, wrap overlay animation in @media (prefers-reduced-motion: no-preference). If reduce, show and hide with no transition.</p><p class=\"mb-4\">Do not rely on JS only. A CSS media query is enough for fade.</p><p class=\"mb-4\">Ask AI to add the media query on modal CSS. Paste keyframes that now always run.</p><p class=\"mb-4\">Clincoo ships the CSS you save. Motion that can be turned off makes modals on app.clincoo.buzz safer.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "modal-tombol-tutup-terlihat-jelas",
      langs: {
        "id": {
          title: "Buat Tombol Tutup Modal Clincoo Terlihat dan Bisa Ditekan",
          desc: "Ikon silang tanpa nama aksesibel dan area sentuh kecil gagal di ponsel. Pakai button asli plus teks atau aria-label.",
          content: "<p class=\"mb-4\">Modal Clincoo hanya punya × di pojok dengan font 12px. Ibu jari meleset dan pembaca layar menyebut multiplication.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pakai <button type=button> dengan aria-label Tutup atau teks Tutup. Area sentuh minimal 44px.</p><p class=\"mb-4\">Jangan andalkan hanya klik overlay. Banyak orang tidak tahu overlay bisa ditekan.</p><p class=\"mb-4\">Minta AI mengganti span × menjadi button. Tempel header modal yang sekarang tanpa kontrol tutup.</p><p class=\"mb-4\">Clincoo merender markup yang kamu tulis. Tombol tutup yang jelas menyelesaikan dialog di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Make the Clincoo Modal Close Button Visible and Tappable",
          desc: "A tiny unlabeled × fails on phones. Use a real button plus text or aria-label.",
          content: "<p class=\"mb-4\">A Clincoo modal only has a 12px × in the corner. Thumbs miss it and screen readers say multiplication.</p><p class=\"mb-4\">In editor.clincoo.buzz, use <button type=button> with aria-label Close or the text Close. Keep a 44px tap target.</p><p class=\"mb-4\">Do not rely on overlay click alone. Many people do not know the backdrop is clickable.</p><p class=\"mb-4\">Ask AI to replace the × span with a button. Paste the modal header that now has no close control.</p><p class=\"mb-4\">Clincoo renders the markup you write. A clear close button finishes the dialog on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["modal"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["modal"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
