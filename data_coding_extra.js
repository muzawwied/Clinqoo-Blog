// Clincoo Blog — artikel coding tambahan (merge ke data_coding)
(function(){
  var extra = [
    {
      id: "html-semantik-untuk-struktur-halaman",
      langs: {
        "id": {
          title: "HTML Semantik untuk Pemula: Susun Halaman yang Masuk Akal",
          desc: "Header, main, dan footer bukan formalitas. Ini cara memakai tag semantik supaya struktur halaman di Clincoo mudah dibaca.",
          content: "<p class=\"mb-4\">Banyak pemula menumpuk semua isi di dalam deretan div. Halaman tetap muncul, tapi seminggu kemudian kamu sendiri tidak tahu mana navigasi dan mana isi utama. HTML semantik memberi nama pada bagian: header untuk puncak halaman, nav untuk menu, main untuk konten, footer untuk penutup.</p><p class=\"mb-4\">Di editor Clincoo, buka index.html lalu tandai tiga blok itu dulu sebelum mempercantik CSS. Satu judul di dalam h1, subjudul di h2. Jangan pakai heading hanya karena ukurannya terlihat pas — ukuran diatur di CSS, makna diatur di HTML.</p><p class=\"mb-4\">Manfaatnya terasa saat kamu minta AI meninjau kode. Kalau struktur sudah bernama, AI bisa bilang 'perbaiki hanya di main' tanpa merusak menu. Pengunjung pembaca layar juga mendapat peta yang lebih jujur.</p><p class=\"mb-4\">Latihan singkat: buat halaman profil dengan header, main, dan footer. Isi masing-masing tiga kalimat. Deploy latihan itu. Struktur yang bersih lebih berharga daripada dekorasi yang belum kamu pahami.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "Referensi HTML, CSS, JavaScript",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Latihan coding untuk pemula",
          source3: "Clincoo Editor", sourceUrl3: "https://editor.clincoo.buzz/", sourceSnippet3: "Editor kode Clincoo"
        },
        "en": {
          title: "Semantic HTML for Beginners: Structure a Page That Makes Sense",
          desc: "Header, main, and footer are not ceremony. Here is how to use semantic tags so page structure in Clincoo stays readable.",
          content: "<p class=\"mb-4\">Many beginners dump everything into a stack of divs. The page still renders, but a week later you cannot tell navigation from the main story. Semantic HTML names the parts: header for the top, nav for the menu, main for content, footer for the close.</p><p class=\"mb-4\">In the Clincoo editor, open index.html and mark those three blocks before you polish CSS. One title in h1, subheads in h2. Do not use headings only because the size looks right — size belongs in CSS, meaning belongs in HTML.</p><p class=\"mb-4\">The payoff shows up when you ask the AI to review. Named structure lets it say 'fix only main' without touching the menu. Screen-reader visitors also get a more honest map.</p><p class=\"mb-4\">A short drill: build a profile page with header, main, and footer. Put three sentences in each. Deploy that exercise. Clean structure beats decoration you do not yet understand.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "HTML, CSS, and JavaScript reference",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Beginner coding practice",
          source3: "Clincoo Editor", sourceUrl3: "https://editor.clincoo.buzz/", sourceSnippet3: "Clincoo code editor"
        }
      }
    },
    {
      id: "css-spasi-dan-ukuran-huruf-dulu",
      langs: {
        "id": {
          title: "Belajar CSS dari Spasi dan Ukuran Huruf, Bukan dari Animasi",
          desc: "Warna mencolok mudah, tapi yang membuat halaman nyaman dibaca adalah jarak dan tipografi. Mulai dari situ di Clincoo.",
          content: "<p class=\"mb-4\">Pemula sering langsung mengejar gradien dan animasi. Hasilnya ramai, tapi teks saling berdempet. Di Clincoo, buka style.css dan atur dulu tiga hal: ukuran huruf tubuh, tinggi baris, dan padding antar bagian.</p><p class=\"mb-4\">Mulai dari angka sederhana. Huruf tubuh 18px atau 1.125rem, tinggi baris 1.6, jarak antar seksi 2rem. Pratinjau di lebar HP. Kalau paragraf terasa longgar dan tombol tidak menempel judul, kamu sudah di jalur yang benar.</p><p class=\"mb-4\">Warna boleh menyusul. Pilih satu warna teks gelap dan satu latar terang dulu. Kontras yang cukup lebih penting daripada palet sepuluh warna. AI bisa mengusulkan kombinasi, tapi matamu yang menilai apakah kalimat masih nyaman.</p><p class=\"mb-4\">Setelah spasi stabil, baru sentuh hover atau transisi singkat. Animasi tidak menyelamatkan halaman yang sesak. CSS yang tenang membuat proyek latihan terlihat dewasa lebih cepat.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "Referensi HTML, CSS, JavaScript",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Latihan coding untuk pemula",
          source3: "Clincoo Editor", sourceUrl3: "https://editor.clincoo.buzz/", sourceSnippet3: "Editor kode Clincoo"
        },
        "en": {
          title: "Learn CSS from Spacing and Type Size, Not from Animation",
          desc: "Loud color is easy, but what makes a page comfortable is space and typography. Start there in Clincoo.",
          content: "<p class=\"mb-4\">Beginners often chase gradients and animation first. The result is busy, and the text is cramped. In Clincoo, open style.css and set three things first: body type size, line height, and padding between sections.</p><p class=\"mb-4\">Start with simple numbers. Body text at 18px or 1.125rem, line height 1.6, section gaps at 2rem. Preview at phone width. If paragraphs feel open and buttons do not stick to the title, you are on the right path.</p><p class=\"mb-4\">Color can wait. Pick one dark text color and one light background first. Enough contrast beats a ten-color palette. The AI can suggest combinations, but your eyes decide whether a sentence is still comfortable.</p><p class=\"mb-4\">Once spacing is stable, then add a short hover or transition. Animation will not save a crowded page. Calm CSS makes a practice project look grown-up sooner.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "HTML, CSS, and JavaScript reference",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Beginner coding practice",
          source3: "Clincoo Editor", sourceUrl3: "https://editor.clincoo.buzz/", sourceSnippet3: "Clincoo code editor"
        }
      }
    },
    {
      id: "javascript-event-klik-untuk-pemula",
      langs: {
        "id": {
          title: "JavaScript Pertama yang Berguna: Menangani Klik Tombol",
          desc: "Lupakan framework dulu. Di Clincoo, pelajari addEventListener dan satu perubahan di halaman saat tombol diklik.",
          content: "<p class=\"mb-4\">JavaScript terasa abstrak sampai ada tombol yang benar-benar bereaksi. Buat halaman kecil: satu paragraf dan satu tombol. Di berkas skrip, pilih tombol dengan id, lalu pasang addEventListener untuk peristiwa click.</p><p class=\"mb-4\">Saat diklik, ubah teks paragraf atau tampilkan pesan di elemen lain. Jangan langsung merombak seluruh halaman. Satu reaksi yang kamu pahami lebih berharga daripada tutorial carousel yang disalin utuh.</p><p class=\"mb-4\">Kalau tidak jalan, buka konsol di pratinjau atau terminal Clincoo. Typo pada id adalah biang paling umum. Tempel error ke AI lengkap dengan HTML tombolnya. Minta penjelasan urutan: pilih elemen, pasang pendengar, jalankan fungsi.</p><p class=\"mb-4\">Ulangi pola yang sama untuk dua tombol. Begitu kamu bisa menjelaskan alurnya tanpa melihat catatan, dasar interaktivitas sudah menempel. Framework bisa menunggu.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "Referensi HTML, CSS, JavaScript",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Latihan coding untuk pemula",
          source3: "Clincoo Editor", sourceUrl3: "https://editor.clincoo.buzz/", sourceSnippet3: "Editor kode Clincoo"
        },
        "en": {
          title: "The First Useful JavaScript: Handling a Button Click",
          desc: "Forget frameworks for now. In Clincoo, learn addEventListener and one on-page change when a button is clicked.",
          content: "<p class=\"mb-4\">JavaScript stays abstract until a button actually reacts. Make a tiny page: one paragraph and one button. In the script file, select the button by id, then attach addEventListener for the click event.</p><p class=\"mb-4\">On click, change the paragraph text or show a message in another element. Do not overhaul the whole page. One reaction you understand beats a copied carousel tutorial.</p><p class=\"mb-4\">If nothing happens, open the preview console or the Clincoo terminal. A mistyped id is the usual culprit. Paste the error into the AI with the button HTML. Ask for the sequence: select, listen, run the function.</p><p class=\"mb-4\">Repeat the same pattern with two buttons. Once you can explain the flow without notes, the core of interactivity has stuck. Frameworks can wait.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "HTML, CSS, and JavaScript reference",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Beginner coding practice",
          source3: "Clincoo Editor", sourceUrl3: "https://editor.clincoo.buzz/", sourceSnippet3: "Clincoo code editor"
        }
      }
    },
    {
      id: "latihan-membaca-kode-bukan-hanya-menulis",
      langs: {
        "id": {
          title: "Latihan Membaca Kode: Keterampilan yang Sering Dilewati Pemula",
          desc: "Menulis kode baru terasa produktif, tapi membaca file template Clincoo lebih cepat menumbuhkan pemahaman.",
          content: "<p class=\"mb-4\">Pemula mengukur kemajuan dari baris yang mereka ketik. Padahal programmer sehari-hari lebih sering membaca. Buka template Clincoo, pilih satu file HTML, dan bacalah dari atas tanpa mengubah apa pun selama sepuluh menit.</p><p class=\"mb-4\">Catat tiga pertanyaan: file CSS mana yang dipanggil, di mana teks yang boleh diganti, dan fungsi skrip paling atas. Baru setelah itu tanya AI untuk menguji pemahamanmu, bukan untuk menulis ulang file.</p><p class=\"mb-4\">Membaca juga melatih mata terhadap pola: kelas yang berulang, komentar penanda, dan tautan relatif. Pola itu muncul lagi di proyekmu sendiri. Kalau kamu hanya menyalin, pola tidak pernah kelihatan.</p><p class=\"mb-4\">Jadikan membaca sebagai sesi terpisah. Satu file, satu halaman catatan. Deploy tidak wajib setiap hari; yang wajib adalah kamu bisa menjelaskan apa yang sudah ada sebelum menambah yang baru.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "Referensi HTML, CSS, JavaScript",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Latihan coding untuk pemula",
          source3: "Clincoo Editor", sourceUrl3: "https://editor.clincoo.buzz/", sourceSnippet3: "Editor kode Clincoo"
        },
        "en": {
          title: "Practice Reading Code: The Skill Beginners Often Skip",
          desc: "Writing new code feels productive, but reading a Clincoo template file grows understanding faster.",
          content: "<p class=\"mb-4\">Beginners measure progress by lines they type. Working programmers spend more time reading. Open a Clincoo template, pick one HTML file, and read from the top for ten minutes without changing anything.</p><p class=\"mb-4\">Write down three questions: which CSS file is linked, where the swappable text lives, and what the top script does. Only then ask the AI to quiz your understanding, not to rewrite the file.</p><p class=\"mb-4\">Reading also trains your eye for patterns: repeated classes, marker comments, and relative links. Those patterns show up in your own projects. If you only copy, the patterns stay invisible.</p><p class=\"mb-4\">Make reading its own session. One file, one page of notes. Deploy is not required every day; explaining what already exists before you add something new is.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "HTML, CSS, and JavaScript reference",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Beginner coding practice",
          source3: "Clincoo Editor", sourceUrl3: "https://editor.clincoo.buzz/", sourceSnippet3: "Clincoo code editor"
        }
      }
    },
    {
      id: "pecah-masalah-coding-jadi-langkah-kecil",
      langs: {
        "id": {
          title: "Pecah Masalah Coding Jadi Langkah Kecil sebelum Menulis Kode",
          desc: "Error menumpuk saat kamu menulis fitur utuh sekaligus. Di Clincoo, uraikan dulu di komentar, baru ketik.",
          content: "<p class=\"mb-4\">Ingin membuat daftar tugas, lalu langsung menulis HTML, CSS, dan logika hapus dalam satu duduk. Satu bagian gagal, semuanya terasa rusak. Cara yang lebih tenang: tulis komentar berurutan di file skrip — tampilkan daftar, tambah item, hapus item.</p><p class=\"mb-4\">Kerjakan komentar paling atas saja sampai pratinjau menunjukkan hasil. Baru hapus komentar itu dan pindah ke langkah berikutnya. Clincoo memudahkan ritme ini karena simpan dan pratinjau tinggal selangkah.</p><p class=\"mb-4\">Kalau mentok, kirim ke AI satu langkah saja beserta kode yang terkait. Jangan tempel seluruh proyek. Pertanyaan sempit menghasilkan jawaban yang bisa diuji dalam lima menit.</p><p class=\"mb-4\">Kebiasaan memecah masalah adalah inti coding, bukan bakat tersembunyi. Proyek kecil yang selesai bertahap mengalahkan rencana besar yang tidak pernah jalan di browser.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "Referensi HTML, CSS, JavaScript",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Latihan coding untuk pemula",
          source3: "Clincoo Editor", sourceUrl3: "https://editor.clincoo.buzz/", sourceSnippet3: "Editor kode Clincoo"
        },
        "en": {
          title: "Break a Coding Problem into Small Steps before You Type",
          desc: "Errors pile up when you write a whole feature at once. In Clincoo, outline it in comments first, then type.",
          content: "<p class=\"mb-4\">You want a to-do list, then you write the HTML, CSS, and delete logic in one sitting. One part fails and everything feels broken. Calmer: write ordered comments in the script file — show the list, add an item, remove an item.</p><p class=\"mb-4\">Do only the top comment until preview shows a result. Then remove that comment and move on. Clincoo makes this rhythm easy because save and preview are one step away.</p><p class=\"mb-4\">If you stall, send the AI one step and the related code. Do not paste the whole project. A narrow question yields an answer you can test in five minutes.</p><p class=\"mb-4\">Breaking work down is the core of coding, not a hidden talent. Small projects finished in stages beat a grand plan that never runs in the browser.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "HTML, CSS, and JavaScript reference",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Beginner coding practice",
          source3: "Clincoo Editor", sourceUrl3: "https://editor.clincoo.buzz/", sourceSnippet3: "Clincoo code editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["coding"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["coding"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
