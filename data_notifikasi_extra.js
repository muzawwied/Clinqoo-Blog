// Clincoo Blog — artikel notifikasi tambahan 2026-09-25
(function(){
  var extra = [
    {
      id: "notifikasi-pindahkan-fokus-ke-pesan",
      langs: {
        "id": {
          title: "Pindahkan Fokus ke Pesan Status Clincoo setelah Submit",
          desc: "Pesan sukses di atas fold tidak terbaca jika fokus tetap di tombol. Pindahkan fokus ke region status.",
          content: "<p class=\"mb-4\">Setelah kirim form di proyek Clincoo, tombol tetap terfokus. Pembaca layar tidak mendengar pesan sukses di header.</p><p class=\"mb-4\">Set tabindex=-1 pada region status lalu panggil focus() setelah respons di editor.clincoo.buzz. Jaga aria-live tetap polite.</p><p class=\"mb-4\">Jangan memindahkan fokus ke body. Pengguna keyboard harus tahu di mana mereka berada.</p><p class=\"mb-4\">Minta AI hanya menambah fokus ke region status. Tempel handler submit yang sudah ada.</p><p class=\"mb-4\">Clincoo tidak memindahkan fokus otomatis. Satu langkah fokus menjaga umpan balik di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Move Focus to the Clincoo Status Message after Submit",
          desc: "A success message above the fold is missed if focus stays on the button. Move focus to the status region.",
          content: "<p class=\"mb-4\">After a Clincoo form submit, the button keeps focus. Screen readers never hear the success text in the header.</p><p class=\"mb-4\">Set tabindex=-1 on the status region and call focus() after the response in editor.clincoo.buzz. Keep aria-live polite.</p><p class=\"mb-4\">Do not move focus to the body. Keyboard users must know where they are.</p><p class=\"mb-4\">Ask AI only to add focus on the status region. Paste the existing submit handler.</p><p class=\"mb-4\">Clincoo does not move focus for you. One focus step keeps feedback usable on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "notifikasi-satu-pesan-satu-saat",
      langs: {
        "id": {
          title: "Tampilkan Satu Notifikasi Clincoo dalam Satu Waktu",
          desc: "Tumpukan toast saling menutupi dan membanjiri live region. Antrikan satu pesan.",
          content: "<p class=\"mb-4\">Validasi Clincoo memunculkan tiga toast sekaligus. Live region membacanya tumpang tindih.</p><p class=\"mb-4\">Antrikan pesan di editor.clincoo.buzz. Tampilkan yang berikutnya hanya setelah yang aktif ditutup atau selesai.</p><p class=\"mb-4\">Gabungkan error sejenis jadi satu daftar, bukan tiga banner terpisah.</p><p class=\"mb-4\">Minta AI menambah antrean sederhana. Tempel pemanggilan toast yang bertubi-tubi.</p><p class=\"mb-4\">Clincoo tidak mengantri notifikasi. Satu pesan per saat menjaga app.clincoo.buzz tetap tenang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Show One Clincoo Notification at a Time",
          desc: "Stacked toasts cover each other and flood the live region. Queue a single message.",
          content: "<p class=\"mb-4\">Clincoo validation pops three toasts at once. The live region reads them on top of each other.</p><p class=\"mb-4\">Queue messages in editor.clincoo.buzz. Show the next one only after the active toast is closed or done.</p><p class=\"mb-4\">Merge similar errors into one list instead of three banners.</p><p class=\"mb-4\">Ask AI to add a simple queue. Paste the burst of toast calls.</p><p class=\"mb-4\">Clincoo does not queue notifications. One message at a time keeps app.clincoo.buzz calm.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "notifikasi-role-status-bukan-dialog",
      langs: {
        "id": {
          title: "Pakai role=status untuk Umpan Balik Clincoo, Bukan Dialog Modal",
          desc: "Modal untuk 'tersimpan' memutus alur kerja. Region status cukup untuk pesan non-kritis.",
          content: "<p class=\"mb-4\">Autosave Clincoo membuka dialog modal setiap 30 detik. Pengguna harus menutupnya agar bisa mengetik lagi.</p><p class=\"mb-4\">Ganti jadi elemen dengan role=status di editor.clincoo.buzz. Modal hanya untuk keputusan yang wajib.</p><p class=\"mb-4\">Dialog butuh fokus trap. Status tidak. Jangan campur keduanya.</p><p class=\"mb-4\">Minta AI mengganti markup modal sukses menjadi status. Tempel overlay yang menghalangi editor.</p><p class=\"mb-4\">Clincoo tidak memaksa pola toast. role=status menjaga alur kerja di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use role=status for Clincoo Feedback, Not a Modal Dialog",
          desc: "A modal for 'saved' breaks the flow. A status region is enough for non-critical messages.",
          content: "<p class=\"mb-4\">Clincoo autosave opens a modal every 30 seconds. Users must dismiss it before they can type again.</p><p class=\"mb-4\">Switch to an element with role=status in editor.clincoo.buzz. Keep modals for required decisions only.</p><p class=\"mb-4\">A dialog needs a focus trap. Status does not. Do not mix the two.</p><p class=\"mb-4\">Ask AI to replace the success modal markup with status. Paste the overlay that blocks the editor.</p><p class=\"mb-4\">Clincoo does not force a toast pattern. role=status keeps the flow on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "notifikasi-jangan-andalkan-warna-saja",
      langs: {
        "id": {
          title: "Jangan Andalkan Warna Saja pada Notifikasi Clincoo",
          desc: "Banner hijau versus merah tanpa teks atau ikon gagal bagi pengguna buta warna.",
          content: "<p class=\"mb-4\">Toast Clincoo hanya berubah latar hijau atau merah. Tanpa label, artinya tidak jelas.</p><p class=\"mb-4\">Tambah ikon plus teks Tersimpan atau Gagal di editor.clincoo.buzz. Warna boleh memperkuat, bukan mengganti kata.</p><p class=\"mb-4\">Uji dalam mode grayscale. Jika pesan hilang artinya, teks belum cukup.</p><p class=\"mb-4\">Minta AI menambah label teks pada toast. Tempel CSS yang hanya mengganti background.</p><p class=\"mb-4\">Clincoo tidak memeriksa kontras makna. Teks eksplisit menjaga notifikasi di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Rely on Color Alone in Clincoo Notifications",
          desc: "Green versus red banners with no text or icon fail for color-blind users.",
          content: "<p class=\"mb-4\">A Clincoo toast only changes to a green or red background. Without a label the meaning is unclear.</p><p class=\"mb-4\">Add an icon plus Saved or Failed text in editor.clincoo.buzz. Color may reinforce words, not replace them.</p><p class=\"mb-4\">Test in grayscale. If the message loses meaning, the text is not enough.</p><p class=\"mb-4\">Ask AI to add a text label on the toast. Paste the CSS that only swaps background.</p><p class=\"mb-4\">Clincoo does not check meaning contrast. Explicit text keeps notifications usable on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "notifikasi-jangan-tutupi-tombol-utama",
      langs: {
        "id": {
          title: "Jangan Biarkan Toast Clincoo Menutupi Tombol Utama",
          desc: "Toast pojok kanan bawah sering menutup CTA. Geser atau singkat durasi sukses.",
          content: "<p class=\"mb-4\">Toast 'Tersimpan' di pojok bawah menutup tombol Bayar pada viewport HP proyek Clincoo.</p><p class=\"mb-4\">Posisikan toast di atas fold atau beri padding bawah pada area CTA di editor.clincoo.buzz.</p><p class=\"mb-4\">Sukses boleh singkat. Jangan menaruh pesan tetap di atas tombol aksi.</p><p class=\"mb-4\">Minta AI memindahkan posisi toast saja. Tempel CSS fixed bottom yang menimpa tombol.</p><p class=\"mb-4\">Clincoo tidak mengatur z-index toast. CTA yang terlihat menjaga konversi di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Let a Clincoo Toast Cover the Primary Button",
          desc: "A bottom-right toast often hides the CTA. Move it or keep success brief.",
          content: "<p class=\"mb-4\">A Saved toast in the bottom corner covers Pay on a Clincoo project phone viewport.</p><p class=\"mb-4\">Place the toast above the fold or add bottom padding on the CTA area in editor.clincoo.buzz.</p><p class=\"mb-4\">Success may be brief. Do not park a persistent message on top of the action.</p><p class=\"mb-4\">Ask AI to move the toast position only. Paste the fixed-bottom CSS that covers the button.</p><p class=\"mb-4\">Clincoo does not manage toast z-index. A visible CTA keeps conversion on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles[\"notifikasi\"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles[\"notifikasi\"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
