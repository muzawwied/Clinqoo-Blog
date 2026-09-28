// Clincoo Blog — artikel event tambahan 2026-09-28
(function(){
  var extra = [
    {
      id: "event-escape-tutup-dialog",
      langs: {
        "id": {
          title: "Tangani Escape untuk Menutup Dialog Clincoo",
          desc: "Dialog tanpa handler Escape memaksa klik overlay. Keyboard harus bisa keluar.",
          content: "<p class=\"mb-4\">Modal Clincoo sering hanya punya tombol silang. Pengguna keyboard menekan Escape dan tidak terjadi apa-apa.</p><p class=\"mb-4\">Pasang keydown pada document di editor.clincoo.buzz. Jika key adalah Escape dan dialog terbuka, tutup lalu kembalikan fokus ke pemicu.</p><p class=\"mb-4\">Jangan biarkan Escape menumpuk di beberapa overlay. Tutup lapisan paling atas saja.</p><p class=\"mb-4\">Minta AI menambah handler Escape pada satu dialog. Tempel markup modal, bukan seluruh app.</p><p class=\"mb-4\">Clincoo tidak menutup dialog otomatis. Escape yang jelas menjaga app.clincoo.buzz ramah keyboard.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Handle Escape to Close a Clincoo Dialog",
          desc: "A dialog without an Escape handler forces a click on the overlay. The keyboard must be able to leave.",
          content: "<p class=\"mb-4\">Clincoo modals often only have an X button. Keyboard users press Escape and nothing happens.</p><p class=\"mb-4\">Attach keydown on document in editor.clincoo.buzz. If the key is Escape and a dialog is open, close it and return focus to the trigger.</p><p class=\"mb-4\">Do not let Escape stack across several overlays. Close only the top layer.</p><p class=\"mb-4\">Ask AI to add an Escape handler on one dialog. Paste the modal markup, not the whole app.</p><p class=\"mb-4\">Clincoo does not close dialogs for you. A clear Escape path keeps app.clincoo.buzz keyboard-friendly.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "event-passive-listener-scroll",
      langs: {
        "id": {
          title: "Tandai Listener Scroll Clincoo sebagai Passive",
          desc: "touchstart dan wheel tanpa passive menunda scroll. Browser menunggu preventDefault yang tidak datang.",
          content: "<p class=\"mb-4\">Halaman Clincoo terasa berat saat digulir karena listener touchmove memanggil preventDefault tanpa perlu.</p><p class=\"mb-4\">Pasang addEventListener('touchmove', fn, { passive: true }) di editor.clincoo.buzz kecuali kamu benar-benar mencegah scroll.</p><p class=\"mb-4\">Jangan menandai passive lalu tetap preventDefault. Konsol akan memperingatkan dan perilaku jadi tidak pasti.</p><p class=\"mb-4\">Minta AI menandai satu listener scroll sebagai passive. Tempel handler gulir saja.</p><p class=\"mb-4\">Clincoo merender skrip yang kamu simpan. Listener passive menjaga gulir di app.clincoo.buzz tetap halus.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Mark Clincoo Scroll Listeners as Passive",
          desc: "touchstart and wheel without passive delay scrolling. The browser waits for a preventDefault that never comes.",
          content: "<p class=\"mb-4\">A Clincoo page feels heavy while scrolling because a touchmove listener calls preventDefault without need.</p><p class=\"mb-4\">Attach addEventListener('touchmove', fn, { passive: true }) in editor.clincoo.buzz unless you truly block scroll.</p><p class=\"mb-4\">Do not mark passive and still call preventDefault. The console warns and behavior becomes uncertain.</p><p class=\"mb-4\">Ask AI to mark one scroll listener as passive. Paste the scroll handler only.</p><p class=\"mb-4\">Clincoo renders the script you save. A passive listener keeps scrolling on app.clincoo.buzz smooth.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "event-stoppropagation-hemat",
      langs: {
        "id": {
          title: "Pakai stopPropagation Hemat di Event Clincoo",
          desc: "Menghentikan gelembung di setiap klik merusak delegasi induk dan analitik.",
          content: "<p class=\"mb-4\">Tombol di kartu Clincoo memanggil stopPropagation. Induk tidak pernah tahu item mana yang diklik.</p><p class=\"mb-4\">Biarkan event naik kecuali overlay atau dropdown yang harus isolasi. Di editor.clincoo.buzz, dokumentasikan kenapa gelembung dipotong.</p><p class=\"mb-4\">Jangan stopPropagation hanya untuk mencegah handler global yang salah. Perbaiki handler global itu.</p><p class=\"mb-4\">Minta AI menghapus stopPropagation yang tidak perlu pada satu tombol. Tempel rantai handler.</p><p class=\"mb-4\">Clincoo tidak mengatur gelembung otomatis. Gelembung yang jujur menjaga delegasi di app.clincoo.buzz tetap hidup.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use stopPropagation Sparingly on Clincoo Events",
          desc: "Stopping bubble on every click breaks parent delegation and analytics.",
          content: "<p class=\"mb-4\">A button on a Clincoo card calls stopPropagation. The parent never learns which item was clicked.</p><p class=\"mb-4\">Let the event rise unless an overlay or dropdown must stay isolated. In editor.clincoo.buzz, document why bubble is cut.</p><p class=\"mb-4\">Do not stopPropagation only to dodge a bad global handler. Fix that global handler.</p><p class=\"mb-4\">Ask AI to remove an unnecessary stopPropagation on one button. Paste the handler chain.</p><p class=\"mb-4\">Clincoo does not manage bubbling for you. Honest bubbling keeps delegation alive on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "event-debounce-resize-input",
      langs: {
        "id": {
          title: "Debounce Event Resize dan Input di Clincoo",
          desc: "resize dan keyup tanpa jeda memicu ratusan hitung. Debounce menjaga thread utama.",
          content: "<p class=\"mb-4\">Layout Clincoo menghitung ulang grid pada setiap event resize. Jendela yang ditarik terasa patah-patah.</p><p class=\"mb-4\">Bungkus handler dengan debounce 150–200 ms di editor.clincoo.buzz. Untuk ketikan pencarian, kirim nilai terakhir saja.</p><p class=\"mb-4\">Jangan debounce klik tombol kirim. Klik butuh respons segera, bukan jeda.</p><p class=\"mb-4\">Minta AI menambah debounce pada satu listener resize atau input. Tempel handler yang berat.</p><p class=\"mb-4\">Clincoo menjalankan setiap event yang kamu pasang. Debounce menjaga app.clincoo.buzz tetap responsif.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Debounce Resize and Input Events in Clincoo",
          desc: "resize and keyup with no pause fire hundreds of calculations. Debounce protects the main thread.",
          content: "<p class=\"mb-4\">A Clincoo layout recalculates the grid on every resize event. Dragging the window feels stuttered.</p><p class=\"mb-4\">Wrap the handler with a 150–200 ms debounce in editor.clincoo.buzz. For search typing, send only the latest value.</p><p class=\"mb-4\">Do not debounce a submit click. A click needs an immediate response, not a pause.</p><p class=\"mb-4\">Ask AI to add debounce on one resize or input listener. Paste the heavy handler.</p><p class=\"mb-4\">Clincoo runs every event you attach. Debounce keeps app.clincoo.buzz responsive.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "event-enter-space-tombol-kustom",
      langs: {
        "id": {
          title: "Tangani Enter dan Spasi pada Tombol Kustom Clincoo",
          desc: "div dengan onclick bukan tombol. Keyboard Enter dan Spasi harus memicu aksi yang sama.",
          content: "<p class=\"mb-4\">Banyak CTA Clincoo memakai div role=button. Mouse jalan, tetapi Enter tidak mengirim.</p><p class=\"mb-4\">Lebih baik ganti jadi button asli di editor.clincoo.buzz. Jika tetap div, pasang keydown untuk Enter dan Space lalu preventDefault pada Space agar halaman tidak gulir.</p><p class=\"mb-4\">Pastikan tabindex=0 dan fokus terlihat. Tanpa itu, keyboard tidak pernah sampai ke kontrol.</p><p class=\"mb-4\">Minta AI mengubah satu div jadi button, atau menambah handler tombol. Tempel markup CTA.</p><p class=\"mb-4\">Clincoo merender kontrol yang kamu tulis. Enter dan Spasi yang sama menjaga app.clincoo.buzz setara mouse.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Handle Enter and Space on Custom Clincoo Buttons",
          desc: "A div with onclick is not a button. Keyboard Enter and Space must fire the same action.",
          content: "<p class=\"mb-4\">Many Clincoo CTAs use a div role=button. The mouse works, but Enter does not submit.</p><p class=\"mb-4\">Prefer a real button in editor.clincoo.buzz. If it stays a div, attach keydown for Enter and Space and preventDefault on Space so the page does not scroll.</p><p class=\"mb-4\">Keep tabindex=0 and a visible focus ring. Without that the keyboard never reaches the control.</p><p class=\"mb-4\">Ask AI to turn one div into a button, or to add a key handler. Paste the CTA markup.</p><p class=\"mb-4\">Clincoo renders the controls you write. Matching Enter and Space keeps app.clincoo.buzz equal to the mouse.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["event"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["event"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
