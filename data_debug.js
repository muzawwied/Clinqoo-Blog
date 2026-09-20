// Clincoo Blog — Data kategori: debug
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["debug"] = {
  names: { "id": "Debug", "en": "Debug" },
  flag: "🐞",
  articles: [
    {
      id: "debug-baca-console-sebelum-ubah-kode",
      langs: {
        "id": {
          title: "Baca Pesan Console sebelum Mengubah Kode Clincoo",
          desc: "Error merah di DevTools biasanya menunjuk file dan baris. Baca dulu, baru minta AI mengedit.",
          content: "<p class=\"mb-4\">Saat menu mobile tidak terbuka, banyak orang langsung menyuruh AI menulis ulang JavaScript. Padahal console sudah menulis TypeError di baris yang tepat.</p><p class=\"mb-4\">Buka pratinjau Clincoo, tekan DevTools, tab Console. Salin pesan lengkap termasuk nama file. Jangan potong stack.</p><p class=\"mb-4\">Tempel error itu ke AI bersama nama file yang disebut. Satu masalah per obrolan. Tolak rewrite seluruh script.js.</p><p class=\"mb-4\">Jika console bersih tetapi tampilan salah, pindah ke tab Elements atau Network. Jangan tebak di editor.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu simpan. Console adalah laporan pertama, bukan dekorasi browser.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Read the Console Message before You Change Clincoo Code",
          desc: "A red DevTools error usually names a file and line. Read it first, then ask the AI to edit.",
          content: "<p class=\"mb-4\">When a mobile menu fails, many people tell the AI to rewrite the JavaScript. The console already printed a TypeError on the exact line.</p><p class=\"mb-4\">Open the Clincoo preview, open DevTools, Console tab. Copy the full message including the file name. Do not trim the stack.</p><p class=\"mb-4\">Paste that error to the AI with the named file. One problem per chat. Refuse a full script.js rewrite.</p><p class=\"mb-4\">If the console is clean but the layout is wrong, move to Elements or Network. Do not guess in the editor.</p><p class=\"mb-4\">Clincoo runs the scripts you save. The console is the first report, not browser decoration.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "debug-cek-network-404-gambar-css",
      langs: {
        "id": {
          title: "Cek Tab Network jika Gambar atau CSS Clincoo Hilang",
          desc: "Status 404 di Network menjelaskan path yang salah. Perbaiki href atau src, jangan ganti desain.",
          content: "<p class=\"mb-4\">Hero kosong sering bukan masalah CSS. File gambar mengarah ke folder yang tidak ada setelah template dipindah.</p><p class=\"mb-4\">Buka tab Network di pratinjau, filter Img atau CSS, lihat status merah. Catat path yang diminta browser.</p><p class=\"mb-4\">Samakan atribut src atau href dengan struktur folder workspace Clincoo. Path relatif dari subhalaman berbeda dari beranda.</p><p class=\"mb-4\">Minta AI memperbaiki satu atribut di satu file. Tolak unggah ulang seluruh aset jika hanya path yang salah.</p><p class=\"mb-4\">Clincoo menayangkan file sesuai path. 404 adalah peta yang jujur, bukan bug platform.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Check the Network Tab when Clincoo Images or CSS Vanish",
          desc: "A 404 in Network explains a wrong path. Fix href or src instead of changing the design.",
          content: "<p class=\"mb-4\">An empty hero is often not a CSS problem. The image file points at a folder that vanished after the template moved.</p><p class=\"mb-4\">Open the Network tab in preview, filter Img or CSS, look for red status. Note the path the browser requested.</p><p class=\"mb-4\">Match the src or href attribute to the Clincoo workspace folder tree. A relative path from a subpage differs from the home page.</p><p class=\"mb-4\">Ask the AI to fix one attribute in one file. Refuse a full asset re-upload if only the path is wrong.</p><p class=\"mb-4\">Clincoo serves files by path. A 404 is an honest map, not a platform bug.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "debug-matikan-css-sementara-untuk-isolasi",
      langs: {
        "id": {
          title: "Matikan Potongan CSS Sementara untuk Isolasi Bug Layout",
          desc: "Komentari aturan yang dicurigai, bukan menghapus seluruh stylesheet. Lihat apakah layout kembali.",
          content: "<p class=\"mb-4\">Kartu yang tumpang tindih bisa berasal dari satu float atau position absolut. Mengganti seluruh CSS menyembunyikan penyebab.</p><p class=\"mb-4\">Bungkus blok yang dicurigai dengan komentar CSS. Simpan, pratinjau ulang. Jika masalah hilang, kamu sudah isolasi file dan aturan.</p><p class=\"mb-4\">Kembalikan komentar setelah tes. Catat selektor yang bersalah. Baru minta AI mengubah aturan itu saja.</p><p class=\"mb-4\">Jangan disabled seluruh link stylesheet kecuali untuk tes 10 detik. Halaman tanpa CSS menyesatkan keputusan desain.</p><p class=\"mb-4\">Clincoo menyimpan CSS apa adanya. Isolasi dengan komentar lebih aman daripada rewrite tema.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Comment Out CSS Briefly to Isolate a Layout Bug",
          desc: "Comment the suspected rule instead of deleting the whole stylesheet. See if the layout returns.",
          content: "<p class=\"mb-4\">Overlapping cards can come from one float or an absolute position. Replacing all CSS hides the cause.</p><p class=\"mb-4\">Wrap the suspected block in a CSS comment. Save and preview again. If the issue vanishes, you isolated the file and the rule.</p><p class=\"mb-4\">Restore the comment after the test. Note the guilty selector. Then ask the AI to change only that rule.</p><p class=\"mb-4\">Do not disable the whole stylesheet link except for a ten-second test. A page with no CSS misleads design decisions.</p><p class=\"mb-4\">Clincoo stores CSS as written. Isolating with comments is safer than a theme rewrite.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "debug-bandingkan-computed-style",
      langs: {
        "id": {
          title: "Bandingkan Computed Style di DevTools sebelum Ubah CSS Clincoo",
          desc: "Panel Computed menunjukkan nilai akhir setelah cascade. Baca itu sebelum menyuruh AI menambah !important.",
          content: "<p class=\"mb-4\">Tombol yang terlihat kecil sering sudah punya padding di satu file dan line-height di file lain. Menambah aturan baru tanpa melihat computed style menumpuk konflik.</p><p class=\"mb-4\">Di pratinjau Clincoo buka DevTools, pilih elemen, tab Computed. Cari width, padding, font-size, dan display. Catat file mana yang menang.</p><p class=\"mb-4\">Tempel cuplikan computed plus nama selektor ke AI. Minta ubah satu aturan yang menang, bukan menulis blok baru dengan !important.</p><p class=\"mb-4\">Jika nilai computed sudah benar tetapi tampilan salah, masalahnya bukan CSS angka\u2014cek overflow parent atau transform.</p><p class=\"mb-4\">Clincoo merender CSS yang kamu simpan. Computed style adalah hasil nyata, bukan tebakan di editor.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Compare Computed Style in DevTools before You Change Clincoo CSS",
          desc: "The Computed panel shows the final value after the cascade. Read it before asking the AI to add !important.",
          content: "<p class=\"mb-4\">A button that looks small often already has padding in one file and line-height in another. Adding a new rule without reading computed style stacks conflicts.</p><p class=\"mb-4\">In the Clincoo preview open DevTools, select the element, Computed tab. Check width, padding, font-size, and display. Note which file wins.</p><p class=\"mb-4\">Paste the computed snippet plus the selector name to the AI. Ask to change the winning rule, not a new block with !important.</p><p class=\"mb-4\">If computed values already look right but the screen is wrong, the issue is not the numbers\u2014check parent overflow or transform.</p><p class=\"mb-4\">Clincoo renders the CSS you save. Computed style is the real result, not a guess in the editor.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "debug-uji-ulang-di-jendela-privat",
      langs: {
        "id": {
          title: "Uji Ulang Bug Clincoo di Jendela Privat sebelum Menyalahkan Kode",
          desc: "Ekstensi, cache, dan sesi lama meniru bug. Jendela privat memisahkan kode dari lingkungan browser.",
          content: "<p class=\"mb-4\">Menu yang 'hilang' kadang hanya tertutup overlay ekstensi iklan atau zoom yang tersimpan. Mengganti HTML tidak memperbaiki itu.</p><p class=\"mb-4\">Buka pratinjau Clincoo di jendela privat tanpa ekstensi. Ulangi langkah yang sama. Jika bug hilang, kode bukan tersangka utama.</p><p class=\"mb-4\">Kosongkan cache pratinjau jika privat masih bermasalah. Baru salin URL dan langkah repro ke AI.</p><p class=\"mb-4\">Jangan minta rewrite script.js hanya karena satu browser dengan sepuluh ekstensi. Bandingkan Chrome dan Firefox bersih.</p><p class=\"mb-4\">Clincoo menayangkan berkas proyek. Lingkungan browser harus dicek sebelum menyalahkan template.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Retest a Clincoo Bug in a Private Window before You Blame the Code",
          desc: "Extensions, cache, and an old session can mimic bugs. A private window separates your code from the browser environment.",
          content: "<p class=\"mb-4\">A 'missing' menu is sometimes covered by an ad-blocker overlay or a saved zoom. Changing HTML will not fix that.</p><p class=\"mb-4\">Open the Clincoo preview in a private window with extensions off. Repeat the same steps. If the bug vanishes, the code is not the main suspect.</p><p class=\"mb-4\">Clear preview cache if private mode still fails. Only then copy the URL and repro steps to the AI.</p><p class=\"mb-4\">Do not ask for a script.js rewrite because one browser has ten extensions. Compare clean Chrome and Firefox.</p><p class=\"mb-4\">Clincoo serves project files. Check the browser environment before you blame the template.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "debug-console-log-nilai-sebelum-ubah",
      langs: {
        "id": {
          title: "Pasang console.log pada Nilai, Bukan Menulis Ulang Fungsi Clincoo",
          desc: "Log singkat di titik cabang menunjukkan data yang salah. Rewrite fungsi menutup jejak itu.",
          content: "<p class=\"mb-4\">Form yang 'tidak terkirim' sering hanya membaca string kosong. Tanpa log, AI menebak seluruh handler.</p><p class=\"mb-4\">Tambah satu console.log di awal fungsi dan satu sebelum return. Simpan, buka Console, ulangi aksi pengguna.</p><p class=\"mb-4\">Salin output log ke AI bersama nama fungsi. Minta perbaikan kondisi, bukan fungsi baru dari nol.</p><p class=\"mb-4\">Hapus log setelah bug ketemu. Jangan biarkan puluhan log di produksi halaman Clincoo.</p><p class=\"mb-4\">Clincoo menjalankan JavaScript yang kamu simpan. Log adalah senter, rewrite adalah merobohkan ruangan.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Log the Value with console.log instead of Rewriting a Clincoo Function",
          desc: "A short log at the branch shows the wrong data. Rewriting the function hides that trail.",
          content: "<p class=\"mb-4\">A form that 'does not submit' often only reads an empty string. Without a log, the AI guesses the whole handler.</p><p class=\"mb-4\">Add one console.log at the start of the function and one before the return. Save, open Console, repeat the user action.</p><p class=\"mb-4\">Paste the log output to the AI with the function name. Ask to fix the condition, not a new function from scratch.</p><p class=\"mb-4\">Remove the logs after the bug is found. Do not leave dozens of logs on a production Clincoo page.</p><p class=\"mb-4\">Clincoo runs the JavaScript you save. A log is a flashlight; a rewrite knocks the room down.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "debug-cari-overflow-tersembunyi",
      langs: {
        "id": {
          title: "Cari Overflow Tersembunyi jika Bagian Halaman Clincoo Terpotong",
          desc: "Anak yang lebih lebar dari parent sering terpotong overflow:hidden. Cari parent, jangan ganti seluruh grid.",
          content: "<p class=\"mb-4\">Kartu harga yang 'hilang' di mobile sering masih ada di DOM tetapi terpotong parent dengan overflow hidden.</p><p class=\"mb-4\">Di Elements, pilih elemen yang hilang. Naik ke parent sambil melihat computed overflow dan width. Tandai parent pertama yang memotong.</p><p class=\"mb-4\">Minta AI mengubah overflow atau max-width parent itu saja. Jangan mengganti sistem Grid halaman.</p><p class=\"mb-4\">Tes juga transform dan position sticky; keduanya membuat konteks stacking yang menipu mata.</p><p class=\"mb-4\">Clincoo menampilkan markup apa adanya. Overflow adalah gunting, bukan file yang hilang.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Find Hidden Overflow when Part of a Clincoo Page Is Clipped",
          desc: "A child wider than its parent is often clipped by overflow:hidden. Find the parent; do not replace the whole grid.",
          content: "<p class=\"mb-4\">A pricing card that 'vanishes' on mobile is often still in the DOM but clipped by a parent with overflow hidden.</p><p class=\"mb-4\">In Elements, select the missing node. Walk up parents while watching computed overflow and width. Mark the first parent that clips.</p><p class=\"mb-4\">Ask the AI to change only that parent's overflow or max-width. Do not replace the page Grid system.</p><p class=\"mb-4\">Also test transform and position sticky; both create a stacking context that fools the eye.</p><p class=\"mb-4\">Clincoo shows markup as stored. Overflow is scissors, not a missing file.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "debug-pasang-breakpoint-event-klik",
      langs: {
        "id": {
          title: "Pasang Breakpoint Event Klik sebelum Menyalahkan Listener Clincoo",
          desc: "Event listener breakpoint di DevTools membuktikan apakah klik sampai ke fungsi. Tanpa itu kamu menebak.",
          content: "<p class=\"mb-4\">Tombol yang 'mati' bisa tertutup overlay transparan, atau listener terpasang ke elemen yang sudah diganti innerHTML.</p><p class=\"mb-4\">Di DevTools buka Sources atau Event Listeners. Centang breakpoint click. Klik tombol di pratinjau Clincoo dan lihat apakah eksekusi berhenti.</p><p class=\"mb-4\">Jika tidak berhenti, masalahnya di HTML overlay atau selektor. Jika berhenti, langkahkan baris dan catat nilai this atau event.target.</p><p class=\"mb-4\">Kirim temuan itu ke AI: 'listener tidak terpanggil' atau 'terpanggil tetapi target salah'. Tolak rewrite semua addEventListener.</p><p class=\"mb-4\">Clincoo tidak menelan klik. Breakpoint event memisahkan overlay dari logika.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Set a Click Event Breakpoint before You Blame a Clincoo Listener",
          desc: "An event-listener breakpoint in DevTools proves whether the click reaches the function. Without it you guess.",
          content: "<p class=\"mb-4\">A 'dead' button can sit under a transparent overlay, or the listener was bound to a node later replaced by innerHTML.</p><p class=\"mb-4\">In DevTools open Sources or Event Listeners. Tick the click breakpoint. Click the button in the Clincoo preview and see if execution pauses.</p><p class=\"mb-4\">If it does not pause, the problem is HTML overlay or the selector. If it pauses, step lines and note this or event.target.</p><p class=\"mb-4\">Send that finding to the AI: 'listener never fired' or 'fired but target is wrong'. Refuse a rewrite of every addEventListener.</p><p class=\"mb-4\">Clincoo does not swallow clicks. An event breakpoint separates overlay from logic.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ]
};
