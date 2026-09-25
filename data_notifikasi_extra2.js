// Clincoo Blog — artikel notifikasi tambahan 2026-09-26
(function(){
  var extra = [
    {
      id: "notifikasi-izin-push-jangan-saat-load",
      langs: {
        "id": {
          title: "Jangan Minta Izin Notifikasi Push Clincoo saat Halaman Baru Dimuat",
          desc: "Prompt izin di detik pertama biasanya ditolak. Tunggu aksi pengguna dulu.",
          content: "<p class=\"mb-4\">Proyek Clincoo memanggil Notification.requestPermission() di window.onload. Pengunjung menekan Block sebelum memahami manfaatnya.</p><p class=\"mb-4\">Tampilkan alasan singkat di editor.clincoo.buzz, lalu minta izin hanya setelah klik tombol Aktifkan pengingat.</p><p class=\"mb-4\">Hormati keputusan Block. Jangan memunculkan prompt lagi di sesi yang sama.</p><p class=\"mb-4\">Minta AI memindahkan requestPermission ke handler klik. Tempel skrip yang memicu izin di load.</p><p class=\"mb-4\">Clincoo tidak mengirim push bawaan. Izin yang diminta tepat waktu menjaga kepercayaan di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Ask for Clincoo Push Permission on First Load",
          desc: "A permission prompt in the first second is usually blocked. Wait for a user action.",
          content: "<p class=\"mb-4\">A Clincoo project calls Notification.requestPermission() on window.onload. Visitors hit Block before they know why it matters.</p><p class=\"mb-4\">Show a short reason in editor.clincoo.buzz, then request permission only after Enable reminders is clicked.</p><p class=\"mb-4\">Respect Block. Do not show the prompt again in the same session.</p><p class=\"mb-4\">Ask AI to move requestPermission into a click handler. Paste the script that fires on load.</p><p class=\"mb-4\">Clincoo does not send built-in push. A timely permission request keeps trust on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "notifikasi-jangan-putar-suara-otomatis",
      langs: {
        "id": {
          title: "Jangan Putar Suara Notifikasi Clincoo tanpa Kendali Pengguna",
          desc: "Bunyi otomatis mengganggu di ruang publik. Beri sakelar suara yang default mati.",
          content: "<p class=\"mb-4\">Setiap toast Clincoo memutar file WAV. Pengguna di kafe menutup tab karena bunyi berulang.</p><p class=\"mb-4\">Default-kan audio mati di editor.clincoo.buzz. Simpan preferensi di localStorage.</p><p class=\"mb-4\">Hormati prefers-reduced-motion dan jangan memutar suara saat tab tidak terlihat.</p><p class=\"mb-4\">Minta AI menambah sakelar suara saja. Tempel pemanggil Audio() di handler toast.</p><p class=\"mb-4\">Clincoo tidak menyediakan suara bawaan. Kendali pengguna menjaga sopan santun di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Auto-Play Clincoo Notification Sounds",
          desc: "Automatic beeps annoy people in public. Offer a sound toggle that is off by default.",
          content: "<p class=\"mb-4\">Every Clincoo toast plays a WAV. A cafe visitor closes the tab after repeated beeps.</p><p class=\"mb-4\">Default audio off in editor.clincoo.buzz. Persist the preference in localStorage.</p><p class=\"mb-4\">Honor prefers-reduced-motion and do not play sound when the tab is hidden.</p><p class=\"mb-4\">Ask AI to add only a sound toggle. Paste the Audio() call in the toast handler.</p><p class=\"mb-4\">Clincoo does not ship a built-in sound. User control keeps the experience polite on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "notifikasi-batas-panjang-teks-toast",
      langs: {
        "id": {
          title: "Batasi Panjang Teks Toast Clincoo agar Bisa Dibaca Cepat",
          desc: "Paragraf panjang di toast terpotong di HP. Ringkas jadi satu kalimat plus tautan.",
          content: "<p class=\"mb-4\">Toast error Clincoo menempel tiga kalimat validasi. Di viewport 360px teks terpotong tanpa tombol perluas.</p><p class=\"mb-4\">Tulis satu kalimat di editor.clincoo.buzz. Detail panjang taruh di halaman atau dialog.</p><p class=\"mb-4\">Uji potongan teks di lebar 320px. Jangan andalkan title tooltip sebagai pengganti.</p><p class=\"mb-4\">Minta AI meringkas salinan toast. Tempel string error yang terlalu panjang.</p><p class=\"mb-4\">Clincoo tidak memotong toast otomatis. Teks singkat menjaga keterbacaan di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Limit Clincoo Toast Length so It Can Be Read Fast",
          desc: "A long paragraph in a toast gets clipped on phones. Keep one sentence plus a link.",
          content: "<p class=\"mb-4\">A Clincoo error toast pastes three validation sentences. On a 360px viewport the text clips with no expand control.</p><p class=\"mb-4\">Write one sentence in editor.clincoo.buzz. Put long detail on a page or dialog.</p><p class=\"mb-4\">Test clipping at 320px width. Do not rely on a title tooltip as a substitute.</p><p class=\"mb-4\">Ask AI to shorten the toast copy. Paste the error string that is too long.</p><p class=\"mb-4\">Clincoo does not truncate toasts for you. Short text keeps notifications readable on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "notifikasi-jangan-prompt-saat-ketik",
      langs: {
        "id": {
          title: "Jangan Munculkan Prompt Notifikasi Clincoo saat Pengguna Sedang Mengetik",
          desc: "Modal di tengah field merusak alur. Tunda prompt sampai blur atau submit.",
          content: "<p class=\"mb-4\">Saat mengisi form Clincoo, modal Izinkan notifikasi muncul di atas input. Fokus hilang dan ketikan terputus.</p><p class=\"mb-4\">Tunda prompt sampai input blur atau form selesai di editor.clincoo.buzz.</p><p class=\"mb-4\">Jangan menumpuk prompt dengan tooltip validasi. Satu gangguan per saat.</p><p class=\"mb-4\">Minta AI menunda prompt sampai after submit. Tempel listener input yang memicu modal.</p><p class=\"mb-4\">Clincoo tidak menjadwalkan prompt. Menghormati fokus menjaga alur kerja di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Show a Clincoo Notification Prompt While the User Is Typing",
          desc: "A modal over a field breaks flow. Defer the prompt until blur or submit.",
          content: "<p class=\"mb-4\">While filling a Clincoo form, an Allow notifications modal covers the input. Focus is lost and typing stops.</p><p class=\"mb-4\">Defer the prompt until the input blurs or the form finishes in editor.clincoo.buzz.</p><p class=\"mb-4\">Do not stack the prompt with a validation tooltip. One interruption at a time.</p><p class=\"mb-4\">Ask AI to delay the prompt until after submit. Paste the input listener that opens the modal.</p><p class=\"mb-4\">Clincoo does not schedule prompts. Respecting focus keeps work flowing on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["notifikasi"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["notifikasi"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
