// Clincoo Blog — Data kategori: event
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["event"] = {
  names: { "id": "Event", "en": "Event" },
  flag: "🖱️",
  articles: [
    {
      id: "event-delegasi-pada-induk",
      langs: {
        "id": {
          title: "Pakai Delegasi Event pada Induk Daftar Clincoo",
          desc: "Listener di setiap item daftar membengkak. Satu listener di induk cukup untuk klik dinamis.",
          content: "<p class=\"mb-4\">Template Clincoo menempel onclick di tiap kartu yang di-render ulang. Listener lama menumpuk dan klik terasa dobel.</p><p class=\"mb-4\">Pasang satu addEventListener di kontainer di editor.clincoo.buzz. Baca event.target.closest('.card') untuk item yang diklik.</p><p class=\"mb-4\">Jangan pasang listener di dalam loop render. Item baru dari AI atau filter tetap tertangkap tanpa pasang ulang.</p><p class=\"mb-4\">Minta AI memindahkan handler ke induk saja. Tempel fungsi render, bukan seluruh app.</p><p class=\"mb-4\">Clincoo merender HTML yang kamu simpan. Delegasi menjaga daftar di app.clincoo.buzz tetap ringan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Event Delegation on a Clincoo List Parent",
          desc: "A listener on every list item bloats. One listener on the parent covers dynamic clicks.",
          content: "<p class=\"mb-4\">A Clincoo template attaches onclick on every card that re-renders. Old listeners stack and clicks feel doubled.</p><p class=\"mb-4\">Attach one addEventListener on the container in editor.clincoo.buzz. Read event.target.closest('.card') for the clicked item.</p><p class=\"mb-4\">Do not attach listeners inside the render loop. New items from AI or a filter still fire without rebinding.</p><p class=\"mb-4\">Ask AI to move the handler to the parent only. Paste the render function, not the whole app.</p><p class=\"mb-4\">Clincoo renders the HTML you save. Delegation keeps lists on app.clincoo.buzz light.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "event-preventdefault-hanya-saat-perlu",
      langs: {
        "id": {
          title: "Panggil preventDefault Hanya saat Event Clincoo Benar-benar Dicegat",
          desc: "preventDefault di setiap klik merusak tautan, scroll, dan kirim form asli.",
          content: "<p class=\"mb-4\">Handler global Clincoo memanggil preventDefault pada semua klik. Menu dan unduhan lalu tidak jalan.</p><p class=\"mb-4\">Cek dulu apakah target adalah aksi kustom di editor.clincoo.buzz. Panggil preventDefault hanya pada cabang itu.</p><p class=\"mb-4\">Jangan preventDefault pada submit lalu lupa mengirim data. Form terlihat macet tanpa pesan.</p><p class=\"mb-4\">Minta AI mempersempit satu handler. Tempel fungsi klik, bukan seluruh skrip.</p><p class=\"mb-4\">Clincoo tidak menambal perilaku browser. preventDefault selektif menjaga app.clincoo.buzz terasa alami.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Call preventDefault Only When a Clincoo Event Is Truly Intercepted",
          desc: "preventDefault on every click breaks links, scroll, and native form submit.",
          content: "<p class=\"mb-4\">A global Clincoo handler calls preventDefault on every click. Menus and downloads then fail.</p><p class=\"mb-4\">Check first whether the target is a custom action in editor.clincoo.buzz. Call preventDefault only in that branch.</p><p class=\"mb-4\">Do not preventDefault on submit and then forget to send data. The form looks stuck with no message.</p><p class=\"mb-4\">Ask AI to narrow one handler. Paste the click function, not the whole script.</p><p class=\"mb-4\">Clincoo does not patch browser behavior. Selective preventDefault keeps app.clincoo.buzz feeling native.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "event-hapus-listener-saat-unmount",
      langs: {
        "id": {
          title: "Hapus Event Listener Clincoo saat Komponen Dilepas",
          desc: "Listener pada window yang tidak dihapus menumpuk tiap buka halaman. Memori dan klik jadi aneh.",
          content: "<p class=\"mb-4\">Halaman Clincoo menambah resize di window setiap kali view berganti. Handler lama tetap hidup.</p><p class=\"mb-4\">Simpan referensi fungsi yang sama. Panggil removeEventListener saat pindah halaman di editor.clincoo.buzz.</p><p class=\"mb-4\">Jangan pakai fungsi anonim jika nanti harus dilepas. Fungsi baru tidak cocok dengan yang terpasang.</p><p class=\"mb-4\">Minta AI menambah cleanup pada satu view. Tempel pasang dan lepas listener saja.</p><p class=\"mb-4\">Clincoo tidak membersihkan listener otomatis. Cleanup di skripmu menjaga tab app.clincoo.buzz hemat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Remove Clincoo Event Listeners When a View Unmounts",
          desc: "Window listeners that are never removed stack on every page open. Memory and clicks go odd.",
          content: "<p class=\"mb-4\">A Clincoo page adds a resize listener on window every time the view changes. Old handlers stay alive.</p><p class=\"mb-4\">Keep the same function reference. Call removeEventListener when leaving the page in editor.clincoo.buzz.</p><p class=\"mb-4\">Do not use an anonymous function if you must remove it later. A new function does not match the one attached.</p><p class=\"mb-4\">Ask AI to add cleanup on one view. Paste the attach and detach only.</p><p class=\"mb-4\">Clincoo does not clear listeners for you. Cleanup in your script keeps the app.clincoo.buzz tab lean.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "event-once-untuk-klik-satu-kali",
      langs: {
        "id": {
          title: "Pakai opsi once pada Listener Clincoo untuk Aksi Sekali",
          desc: "Klik ganda pada tombol kirim men-trigger dua request. once atau flag loading mencegahnya.",
          content: "<p class=\"mb-4\">Tombol kirim Clincoo di klik dua kali cepat. Dua fetch jalan dan data dobel masuk.</p><p class=\"mb-4\">Pasang addEventListener('click', handler, { once: true }) di editor.clincoo.buzz, atau set disabled segera di handler.</p><p class=\"mb-4\">once tidak menggantikan umpan balik error. Jika kirim gagal, pasang ulang listener atau aktifkan tombol.</p><p class=\"mb-4\">Minta AI menambah once atau flag loading pada satu tombol. Tempel handler submit saja.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu tulis. Aksi sekali menjaga app.clincoo.buzz tidak dobel kirim.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use the once Option on a Clincoo Listener for One-Shot Actions",
          desc: "A double click on submit fires two requests. once or a loading flag prevents it.",
          content: "<p class=\"mb-4\">A Clincoo submit button is clicked twice quickly. Two fetches run and duplicate data lands.</p><p class=\"mb-4\">Attach addEventListener('click', handler, { once: true }) in editor.clincoo.buzz, or disable the button immediately in the handler.</p><p class=\"mb-4\">once does not replace error feedback. If send fails, re-attach the listener or enable the button.</p><p class=\"mb-4\">Ask AI to add once or a loading flag on one button. Paste the submit handler only.</p><p class=\"mb-4\">Clincoo runs the script you write. A one-shot action keeps app.clincoo.buzz from double-sending.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "event-pointer-bukan-hanya-click",
      langs: {
        "id": {
          title: "Tangani pointerup di Clincoo, Jangan Andalkan click Saja",
          desc: "click kadang tidak muncul setelah gesture sentuh. pointer event mencakup mouse dan sentuh.",
          content: "<p class=\"mb-4\">Kartu Clincoo merespons di desktop tetapi terasa mati di ponsel karena hanya listen click setelah preventDefault sentuh.</p><p class=\"mb-4\">Pakai pointerup atau click setelah pointerdown tanpa membatalkan default sentuh di editor.clincoo.buzz.</p><p class=\"mb-4\">Jangan pasang touchend dan click bersamaan tanpa guard. Satu gesture bisa memicu keduanya.</p><p class=\"mb-4\">Minta AI mengganti satu handler click jadi pointer. Tempel CSS touch-action jika perlu.</p><p class=\"mb-4\">Clincoo tampil di browser biasa. Pointer event menjaga kontrol di app.clincoo.buzz sama di mouse dan jari.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Handle pointerup in Clincoo; Do Not Rely on click Alone",
          desc: "click sometimes never fires after a touch gesture. Pointer events cover mouse and touch.",
          content: "<p class=\"mb-4\">A Clincoo card works on desktop but feels dead on a phone because it only listens for click after touch preventDefault.</p><p class=\"mb-4\">Use pointerup or click after pointerdown without canceling touch default in editor.clincoo.buzz.</p><p class=\"mb-4\">Do not attach touchend and click together without a guard. One gesture can fire both.</p><p class=\"mb-4\">Ask AI to change one click handler to pointer. Paste touch-action CSS if needed.</p><p class=\"mb-4\">Clincoo runs in a normal browser. Pointer events keep controls on app.clincoo.buzz the same for mouse and finger.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
