// Clincoo Blog — artikel event tambahan 2026-09-28
(function(){
  var extra = [
    {
      id: "event-focusin-delegasi-form",
      langs: {
        "id": {
          title: "Pakai focusin untuk Delegasi Fokus Form Clincoo",
          desc: "focus tidak menggelembung. Delegasi di induk form Clincoo butuh focusin atau focusout.",
          content: "<p class=\"mb-4\">Kamu pasang listener focus di form Clincoo dan harap tahu field mana yang aktif. Event focus tidak bubble, jadi induk tidak pernah mendengarnya.</p><p class=\"mb-4\">Ganti ke focusin dan focusout di editor.clincoo.buzz. event.target tetap menunjuk input yang kena fokus.</p><p class=\"mb-4\">Sorot label atau tampilkan bantuan inline saat focusin. Hapus kelas saat focusout. Jangan andalkan mouseenter.</p><p class=\"mb-4\">Minta AI menukar addEventListener(\"focus\") menjadi focusin pada kontainer form. Tempel markup form saja.</p><p class=\"mb-4\">Clincoo merender form yang kamu simpan. Delegasi fokus menjaga app.clincoo.buzz ramah keyboard.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use focusin for Clincoo Form Focus Delegation",
          desc: "focus does not bubble. Delegation on a Clincoo form parent needs focusin or focusout.",
          content: "<p class=\"mb-4\">You attach a focus listener on a Clincoo form and expect to know which field is active. The focus event does not bubble, so the parent never hears it.</p><p class=\"mb-4\">Switch to focusin and focusout in editor.clincoo.buzz. event.target still points at the focused input.</p><p class=\"mb-4\">Highlight the label or show inline help on focusin. Remove the class on focusout. Do not rely on mouseenter.</p><p class=\"mb-4\">Ask AI to swap addEventListener(\"focus\") for focusin on the form container. Paste the form markup only.</p><p class=\"mb-4\">Clincoo renders the form you save. Focus delegation keeps app.clincoo.buzz keyboard-friendly.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "event-input-bukan-hanya-change",
      langs: {
        "id": {
          title: "Dengar Event input, Jangan Hanya change di Clincoo",
          desc: "change baru jalan setelah blur. Hitungan karakter dan pratinjau Clincoo butuh event input.",
          content: "<p class=\"mb-4\">Penghitung karakter Clincoo diam sampai pengguna keluar dari field. Event change menunggu blur.</p><p class=\"mb-4\">Pasang listener input di editor.clincoo.buzz untuk setiap ketikan, tempel, atau dikte. change tetap berguna untuk select dan checkbox.</p><p class=\"mb-4\">Debounce pekerjaan berat seperti filter daftar. Untuk teks bantuan, update langsung dari event.target.value.</p><p class=\"mb-4\">Minta AI memindahkan logika dari change ke input pada textarea. Tempel field dan fungsi hitung saja.</p><p class=\"mb-4\">Clincoo merender skrip yang kamu simpan. Event input membuat app.clincoo.buzz terasa langsung.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Listen to the input Event, Not Only change in Clincoo",
          desc: "change fires after blur. Clincoo character counts and live previews need the input event.",
          content: "<p class=\"mb-4\">A Clincoo character counter stays quiet until the user leaves the field. The change event waits for blur.</p><p class=\"mb-4\">Attach an input listener in editor.clincoo.buzz for every keystroke, paste, or dictation. Keep change for select and checkbox.</p><p class=\"mb-4\">Debounce heavy work such as list filters. For helper text, update immediately from event.target.value.</p><p class=\"mb-4\">Ask AI to move logic from change to input on the textarea. Paste the field and the count function only.</p><p class=\"mb-4\">Clincoo renders the script you save. The input event makes app.clincoo.buzz feel instant.</p>",
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
