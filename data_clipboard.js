// Clincoo Blog — Data kategori: clipboard
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["clipboard"] = {
  names: { "id": "Papan klip", "en": "Clipboard" },
  flag: "📋",
  articles: [
    {
      id: "clipboard-salin-kode-tanpa-select",
      langs: {
        "id": {
          title: "Buat Tombol Salin Cuplikan tanpa Memaksa Select All di Clincoo",
          desc: "Pengunjung tidak perlu menyeret blok pre. Pakai Clipboard API pada tombol kecil.",
          content: "<p class=\"mb-4\">Blok kode di situs Clincoo yang hanya bisa disalin dengan drag sering gagal di ponsel. Jari menutupi teks.</p><p class=\"mb-4\">Tambah tombol Salin di pojok pre. Pada klik, panggil navigator.clipboard.writeText dengan isi teks murni, bukan innerHTML.</p><p class=\"mb-4\">Jangan andalkan document.execCommand('copy') kecuali kamu masih menargetkan browser lama secara sadar.</p><p class=\"mb-4\">Uji di pratinjau editor.clincoo.buzz pada HTTPS. Minta AI satu handler klik, bukan plugin clipboard berat.</p><p class=\"mb-4\">Clincoo menayangkan skrip yang kamu simpan. Tombol salin yang jelas mempercepat developer yang membaca panduan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add a Copy Snippet Button without Forcing Select All on Clincoo",
          desc: "Visitors should not drag a pre block. Use the Clipboard API on a small button.",
          content: "<p class=\"mb-4\">Clincoo code blocks that only copy via drag often fail on a phone. Fingers cover the text.</p><p class=\"mb-4\">Add a Copy button on the pre corner. On click, call navigator.clipboard.writeText with plain text, not innerHTML.</p><p class=\"mb-4\">Do not rely on document.execCommand('copy') unless you still target old browsers on purpose.</p><p class=\"mb-4\">Test in the editor.clincoo.buzz preview over HTTPS. Ask the AI for one click handler, not a heavy clipboard plugin.</p><p class=\"mb-4\">Clincoo ships the script you save. A clear copy button speeds up developers reading a guide.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "clipboard-izin-https-wajib",
      langs: {
        "id": {
          title: "Pahami Izin Clipboard dan Syarat HTTPS pada Situs Clincoo",
          desc: "writeText gagal di file:// atau HTTP biasa. Cek konteks aman sebelum menyalahkan skrip.",
          content: "<p class=\"mb-4\">Tombol salin Clincoo yang bekerja di editor kadang diam di hasil deploy. Bukan logika klik — konteks halaman tidak aman.</p><p class=\"mb-4\">Clipboard API butuh window.isSecureContext. Pakai HTTPS di app.clincoo.buzz atau domain kustom. localhost biasanya aman untuk uji.</p><p class=\"mb-4\">Tangani promise yang ditolak: tampilkan 'Salin manual' dan pilih teks sebagai cadangan.</p><p class=\"mb-4\">Cek tab Console di editor.clincoo.buzz. Minta AI menambah cabang catch, bukan mengulang writeText dalam loop.</p><p class=\"mb-4\">Clincoo tidak mengangkat izin browser. HTTPS yang benar membuat tombol salin bisa diandalkan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Understand Clipboard Permission and the HTTPS Requirement on Clincoo",
          desc: "writeText fails on file:// or plain HTTP. Check a secure context before blaming the script.",
          content: "<p class=\"mb-4\">A Clincoo copy button that works in the editor can stay silent after deploy. It is not the click logic — the page context is not secure.</p><p class=\"mb-4\">The Clipboard API needs window.isSecureContext. Use HTTPS on app.clincoo.buzz or a custom domain. localhost is usually fine for tests.</p><p class=\"mb-4\">Handle a rejected promise: show Copy manually and select the text as a fallback.</p><p class=\"mb-4\">Check the Console tab in editor.clincoo.buzz. Ask the AI to add a catch branch, not to retry writeText in a loop.</p><p class=\"mb-4\">Clincoo does not lift browser permission. Correct HTTPS makes the copy button dependable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "clipboard-umpan-balik-tombol-salin",
      langs: {
        "id": {
          title: "Beri Umpan Balik Visual saat Tombol Salin Clincoo Berhasil",
          desc: "Tanpa teks Tersalin, pengunjung menekan berulang. Ganti label singkat lalu kembalikan.",
          content: "<p class=\"mb-4\">Tombol Salin yang tidak berubah setelah sukses membuat orang menekan tiga kali. Isi papan klip sama, tetapi rasa gagal tetap ada.</p><p class=\"mb-4\">Setelah writeText selesai, ganti label jadi Tersalin selama dua detik. Kembalikan teks semula dengan timer yang dibatalkan jika diklik lagi.</p><p class=\"mb-4\">Jangan andalkan alert atau toast penuh layar untuk aksi sepele ini. Perubahan tombol cukup.</p><p class=\"mb-4\">Uji dengan keyboard Enter di editor.clincoo.buzz. Minta AI state singkat, bukan pustaka animasi.</p><p class=\"mb-4\">Clincoo merender UI yang kamu tulis. Umpan balik kecil menutup loop aksi salin.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Give Visual Feedback when a Clincoo Copy Button Succeeds",
          desc: "Without a Copied label, visitors click again. Swap a short label, then restore it.",
          content: "<p class=\"mb-4\">A Copy button that does not change after success makes people click three times. The clipboard is fine, but it still feels like a miss.</p><p class=\"mb-4\">After writeText resolves, switch the label to Copied for two seconds. Restore the original text with a timer you cancel if they click again.</p><p class=\"mb-4\">Do not use an alert or a full-screen toast for this small action. A button change is enough.</p><p class=\"mb-4\">Test with the Enter key in editor.clincoo.buzz. Ask the AI for brief state, not an animation library.</p><p class=\"mb-4\">Clincoo renders the UI you write. Small feedback closes the copy action loop.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "clipboard-paste-event-pada-form",
      langs: {
        "id": {
          title: "Tangani Peristiwa Paste pada Form Clincoo tanpa Merusak Format",
          desc: "Pengunjung menempel nomor atau kode. Ambil text/plain, rapikan spasi, lalu isi field.",
          content: "<p class=\"mb-4\">Form Clincoo yang menolak tempel memaksa orang mengetik ulang token panjang. Itu bukan keamanan — itu gesekan.</p><p class=\"mb-4\">Dengarkan paste pada input. Ambil clipboardData.getData('text/plain'), potong spasi ujung, lalu tulis ke value field.</p><p class=\"mb-4\">Jangan sisipkan HTML dari papan klip ke input biasa. text/plain cukup untuk email, kode, dan tautan.</p><p class=\"mb-4\">Uji di editor.clincoo.buzz dengan tempel dari catatan. Minta AI satu listener paste, bukan filter karakter yang memblokir Ctrl+V.</p><p class=\"mb-4\">Clincoo merender handler yang kamu simpan. Paste yang rapi mempercepat isi form.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Handle the Paste Event on a Clincoo Form without Breaking Format",
          desc: "Visitors paste a number or a code. Take text/plain, trim spaces, then fill the field.",
          content: "<p class=\"mb-4\">A Clincoo form that blocks paste forces people to retype a long token. That is not security — it is friction.</p><p class=\"mb-4\">Listen for paste on the input. Take clipboardData.getData('text/plain'), trim the edges, then write the field value.</p><p class=\"mb-4\">Do not insert clipboard HTML into a plain input. text/plain is enough for email, codes, and links.</p><p class=\"mb-4\">Test in editor.clincoo.buzz by pasting from notes. Ask the AI for one paste listener, not a character filter that blocks Ctrl+V.</p><p class=\"mb-4\">Clincoo renders the handler you save. Clean paste speeds up form fill.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "clipboard-readtext-butuh-gestur",
      langs: {
        "id": {
          title: "Panggil readText Clipboard Hanya setelah Gestur Pengguna di Clincoo",
          desc: "Membaca papan klip tanpa klik ditolak browser. Ikat ke tombol, bukan ke load halaman.",
          content: "<p class=\"mb-4\">Skrip Clincoo yang memanggil navigator.clipboard.readText saat DOMContentLoaded hampir selalu ditolak. Bukan bug API — tidak ada gestur.</p><p class=\"mb-4\">Ikat baca papan klip ke klik tombol Tempel. Tampilkan izin jika promise ditolak.</p><p class=\"mb-4\">Jangan polling papan klip setiap detik. Itu mengganggu dan memicu peringatan izin.</p><p class=\"mb-4\">Cek Console di editor.clincoo.buzz. Minta AI memindahkan readText ke handler klik.</p><p class=\"mb-4\">Clincoo tidak bisa menipu izin browser. Gestur pengguna membuat baca papan klip sah.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Call Clipboard readText Only after a User Gesture on Clincoo",
          desc: "Reading the clipboard with no click is denied. Bind it to a button, not to page load.",
          content: "<p class=\"mb-4\">A Clincoo script that calls navigator.clipboard.readText on DOMContentLoaded is almost always denied. It is not an API bug — there is no gesture.</p><p class=\"mb-4\">Bind clipboard read to a Paste button click. Show permission help if the promise rejects.</p><p class=\"mb-4\">Do not poll the clipboard every second. That is noisy and triggers permission prompts.</p><p class=\"mb-4\">Check the Console in editor.clincoo.buzz. Ask the AI to move readText into the click handler.</p><p class=\"mb-4\">Clincoo cannot fake browser permission. A user gesture makes clipboard read legitimate.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "clipboard-salin-tautan-halaman-ini",
      langs: {
        "id": {
          title: "Buat Tombol Salin Tautan Halaman Ini di Situs Clincoo",
          desc: "Bagikan URL kanonik, bukan hash pratinjau. writeText location.href yang sudah bersih.",
          content: "<p class=\"mb-4\">Pengunjung Clincoo sering menyalin URL dari bilah alamat beserta query debug. Tombol bagikan yang rapi lebih aman.</p><p class=\"mb-4\">Pada klik, tulis location.origin + location.pathname ke clipboard. Buang search debug jika tidak perlu.</p><p class=\"mb-4\">Setelah sukses, ganti label jadi Tautan tersalin. Jangan buka jendela share native kecuali diminta.</p><p class=\"mb-4\">Uji di pratinjau editor.clincoo.buzz dan di domain blog.clincoo.buzz. Minta AI satu fungsi salin URL.</p><p class=\"mb-4\">Clincoo menayangkan tombol yang kamu tulis. Tautan bersih memudahkan berbagi halaman.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add a Copy This Page Link Button on a Clincoo Site",
          desc: "Share the canonical URL, not a preview hash. writeText a clean location.href.",
          content: "<p class=\"mb-4\">Clincoo visitors often copy the address bar including debug query params. A tidy share button is safer.</p><p class=\"mb-4\">On click, write location.origin + location.pathname to the clipboard. Drop debug search if it is not needed.</p><p class=\"mb-4\">After success, switch the label to Link copied. Do not open a native share sheet unless asked.</p><p class=\"mb-4\">Test in the editor.clincoo.buzz preview and on blog.clincoo.buzz. Ask the AI for one copy-URL function.</p><p class=\"mb-4\">Clincoo ships the button you write. A clean link makes the page easy to share.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "clipboard-jangan-timpa-diam-diam",
      langs: {
        "id": {
          title: "Jangan Timpa Papan Klip Pengunjung secara Diam-diam di Clincoo",
          desc: "writeText otomatis saat load mencuri isi yang sedang disalin orang. Tunggu aksi eksplisit.",
          content: "<p class=\"mb-4\">Situs Clincoo yang menulis papan klip saat halaman dibuka menghapus teks yang baru disalin pengguna. Itu terasa seperti peretasan kecil.</p><p class=\"mb-4\">Panggil writeText hanya dari klik atau pintasan yang terlihat. Jangan isi klip dari analytics atau skrip pelacak.</p><p class=\"mb-4\">Jika harus menyalin otomatis setelah generate kode, beri tombol konfirmasi Salin hasil.</p><p class=\"mb-4\">Uji alur: salin teks lain, buka halaman, tempel. Jika isi berubah tanpa klik, perbaiki. Minta AI menghapus writeText di load.</p><p class=\"mb-4\">Clincoo menjalankan skrip halamanmu. Hormati papan klip milik pengguna.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Silently Overwrite the Visitor Clipboard on Clincoo",
          desc: "Automatic writeText on load steals what people just copied. Wait for an explicit action.",
          content: "<p class=\"mb-4\">A Clincoo site that writes the clipboard on page load wipes text the user just copied. It feels like a small hijack.</p><p class=\"mb-4\">Call writeText only from a visible click or shortcut. Do not fill the clipboard from analytics or a tracker script.</p><p class=\"mb-4\">If you must copy after generating a code, add a confirm Copy result button.</p><p class=\"mb-4\">Test the flow: copy other text, open the page, paste. If the value changed with no click, fix it. Ask the AI to remove writeText on load.</p><p class=\"mb-4\">Clincoo runs your page script. Respect the clipboard that belongs to the user.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "clipboard-teks-polos-bukan-html",
      langs: {
        "id": {
          title: "Salin Teks Polos bukan HTML saat Tombol Salin Clincoo Ditekan",
          desc: "innerHTML membawa class dan span. writeText butuh textContent agar tempel bersih.",
          content: "<p class=\"mb-4\">Tombol salin Clincoo yang mengambil innerHTML menempel markup ke email dan chat. Penerima melihat tag, bukan isi.</p><p class=\"mb-4\">Ambil textContent atau innerText dari pre. Gabungkan baris dengan newline. Kirim string itu ke writeText.</p><p class=\"mb-4\">Jika perlu menyalin tabel, bangun TSV sederhana. Jangan tempel node HTML ke papan klip lewat JS biasa.</p><p class=\"mb-4\">Uji tempel ke textarea polos di editor.clincoo.buzz. Minta AI mengganti innerHTML dengan textContent.</p><p class=\"mb-4\">Clincoo tidak membersihkan klip untukmu. Teks polos membuat cuplikan bisa dipakai di mana saja.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Copy Plain Text not HTML when a Clincoo Copy Button Is Pressed",
          desc: "innerHTML carries classes and spans. writeText needs textContent so paste stays clean.",
          content: "<p class=\"mb-4\">A Clincoo copy button that reads innerHTML pastes markup into email and chat. Recipients see tags, not the content.</p><p class=\"mb-4\">Take textContent or innerText from the pre. Join lines with newlines. Send that string to writeText.</p><p class=\"mb-4\">If you need to copy a table, build simple TSV. Do not put HTML nodes on the clipboard through ordinary JS.</p><p class=\"mb-4\">Test paste into a plain textarea in editor.clincoo.buzz. Ask the AI to replace innerHTML with textContent.</p><p class=\"mb-4\">Clincoo does not clean the clipboard for you. Plain text makes a snippet usable anywhere.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
