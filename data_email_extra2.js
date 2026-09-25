// Clincoo Blog — artikel email tambahan 2026-09-25 WIB
(function(){
  var extra = [
    {
      id: "email-disabled-tombol-saat-submit",
      langs: {
        "id": {
          title: "Nonaktifkan Tombol Kirim saat Form Email Clincoo Sedang Diproses",
          desc: "Klik ganda mengirim pesan dua kali. Kunci tombol sampai ada status sukses atau gagal.",
          content: "<p class=\"mb-4\">Pengunjung Clincoo yang jaringan HP-nya lambat menekan Kirim berulang. Dua kiriman identik masuk kotak masuk.</p><p class=\"mb-4\">Di editor.clincoo.buzz, set disabled pada tombol submit begitu form valid. Tampilkan teks Mengirim. Kembalikan tombol hanya jika permintaan gagal.</p><p class=\"mb-4\">Jangan mengandalkan alert. Status di dekat form lebih jelas bagi pembaca layar.</p><p class=\"mb-4\">Minta AI hanya menambah penanganan submit pada satu form. Tempel markup tombol sebagai konteks.</p><p class=\"mb-4\">Clincoo tidak menahan klik ganda sendiri. Tombol terkunci menjaga satu pesan sampai ke tujuan di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Disable the Send Button while a Clincoo Email Form Is in Flight",
          desc: "A double click sends the message twice. Lock the button until you have success or failure.",
          content: "<p class=\"mb-4\">Clincoo visitors on a slow phone tap Send again. Two identical messages land in the inbox.</p><p class=\"mb-4\">In editor.clincoo.buzz, set disabled on the submit button as soon as the form is valid. Show Sending. Re-enable the button only if the request fails.</p><p class=\"mb-4\">Do not rely on alert. Status next to the form is clearer for screen readers.</p><p class=\"mb-4\">Ask AI to add submit handling on one form only. Paste the button markup as context.</p><p class=\"mb-4\">Clincoo does not debounce clicks for you. A locked button keeps one message on the way to app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "email-pesan-gagal-jaringan",
      langs: {
        "id": {
          title: "Tampilkan Pesan Gagal Jaringan pada Form Email Clincoo",
          desc: "Jika fetch gagal, pengunjung harus tahu. Jangan biarkan form diam setelah Kirim.",
          content: "<p class=\"mb-4\">Form Clincoo yang memakai fetch sering gagal di jaringan tidak stabil. Tanpa pesan, orang mengira pesan sudah sampai.</p><p class=\"mb-4\">Tangkap error di editor.clincoo.buzz. Tampilkan teks singkat: tidak terkirim, coba lagi. Jangan hapus isi field.</p><p class=\"mb-4\">Bedakan error validasi dan error jaringan. Pengunjung tidak perlu menebak.</p><p class=\"mb-4\">Minta AI hanya menambah cabang gagal pada handler submit. Tempel fungsi kirim yang ada.</p><p class=\"mb-4\">Clincoo tidak menampilkan status jaringan otomatis. Pesan gagal yang jujur menjaga kepercayaan di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Show a Network Failure Message on a Clincoo Email Form",
          desc: "If fetch fails, visitors must know. Do not leave the form silent after Send.",
          content: "<p class=\"mb-4\">A Clincoo form that uses fetch often fails on an unstable network. With no message, people assume it arrived.</p><p class=\"mb-4\">Catch the error in editor.clincoo.buzz. Show a short line: not sent, try again. Do not clear the fields.</p><p class=\"mb-4\">Separate validation errors from network errors. Visitors should not have to guess.</p><p class=\"mb-4\">Ask AI to add only the failure branch on the submit handler. Paste the existing send function.</p><p class=\"mb-4\">Clincoo does not show network status for you. An honest failure message keeps trust on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["email"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["email"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
