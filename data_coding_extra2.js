// Clincoo Blog — artikel coding tambahan 2026-09-18 (merge ke data_coding)
(function(){
  var extra = [
    {
      id: "form-html-sederhana-untuk-pemula",
      langs: {
        "id": {
          title: "Form HTML Sederhana: Latihan Input yang Benar-benar Terkirim",
          desc: "Buat formulir kontak mini di Clincoo: label, input, dan tombol kirim tanpa framework.",
          content: "<p class=\"mb-4\">Banyak pemula menunda formulir karena takut backend. Untuk latihan pertama, kamu hanya butuh HTML: label yang jelas, input nama, input email, kotak pesan, dan tombol kirim.</p><p class=\"mb-4\">Di editor Clincoo, buat halaman kontak.html. Setiap input wajib punya label. Placeholder bukan pengganti label. Nama field yang rapi memudahkan kamu membaca kode minggu depan.</p><p class=\"mb-4\">Uji di pratinjau desktop dan HP. Ketuk setiap kotak. Pastikan keyboard HP muncul dengan jenis yang masuk akal — email memakai type email.</p><p class=\"mb-4\">Tombol kirim boleh dulu hanya menampilkan pesan terima kasih lewat JavaScript kecil. Yang penting alurnya kamu pahami. Deploy halaman itu sebagai latihan, bukan sebagai janji balasan otomatis.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "Referensi HTML, CSS, JavaScript",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Latihan coding untuk pemula",
          source3: "Clincoo Editor", sourceUrl3: "https://editor.clincoo.buzz/", sourceSnippet3: "Editor kode Clincoo"
        },
        "en": {
          title: "A Simple HTML Form: Practice Inputs That Actually Submit",
          desc: "Build a tiny contact form in Clincoo: labels, inputs, and a submit button with no framework.",
          content: "<p class=\"mb-4\">Many beginners postpone forms because they fear a backend. For the first drill you only need HTML: a clear label, a name field, an email field, a message box, and a submit button.</p><p class=\"mb-4\">In the Clincoo editor, make kontak.html. Every input needs a label. A placeholder is not a label. Tidy field names make the file readable next week.</p><p class=\"mb-4\">Test in desktop and phone preview. Tap every box. Make sure the phone keyboard matches the field — email should use type email.</p><p class=\"mb-4\">The submit button can first show a thank-you note with a little JavaScript. What matters is that you understand the flow. Deploy that page as practice, not as a promise of automatic replies.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "HTML, CSS, and JavaScript reference",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Beginner coding practice",
          source3: "Clincoo Editor", sourceUrl3: "https://editor.clincoo.buzz/", sourceSnippet3: "Clincoo code editor"
        }
      }
    },
    {
      id: "css-flexbox-satu-baris-untuk-pemula",
      langs: {
        "id": {
          title: "Flexbox Satu Baris: Susun Menu dan Kartu tanpa Hitung Pixel",
          desc: "Pelajari display flex di Clincoo untuk menata menu dan tiga kartu secara merata.",
          content: "<p class=\"mb-4\">Menggeser elemen dengan margin tebak-tebakan cepat kacau di HP. Flexbox memberi satu ide: satu wadah, item di dalamnya berbaris, lalu kamu atur jarak.</p><p class=\"mb-4\">Di style.css proyek Clincoo, buat kelas baris dengan display flex, gap, dan flex-wrap. Pakai itu untuk menu atau tiga kartu layanan. Jangan campur float peninggalan tutorial lama.</p><p class=\"mb-4\">Pratinjau lebar HP. Kalau kartu turun ke baris baru, itu normal. Yang harus dicek: item tidak terpotong dan tombol masih mudah diketuk.</p><p class=\"mb-4\">Minta AI menjelaskan satu properti saja — misalnya justify-content — lalu uji sendiri. Satu baris flex yang kamu pahami lebih berguna daripada salinan layout hero yang tidak kamu kuasai.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "Referensi HTML, CSS, JavaScript",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Latihan coding untuk pemula",
          source3: "Clincoo Editor", sourceUrl3: "https://editor.clincoo.buzz/", sourceSnippet3: "Editor kode Clincoo"
        },
        "en": {
          title: "One-Row Flexbox: Lay Out a Menu and Cards without Counting Pixels",
          desc: "Learn display flex in Clincoo to space a menu and three cards evenly.",
          content: "<p class=\"mb-4\">Nudging elements with guessed margins falls apart on a phone. Flexbox is one idea: a container, items in a row, then you set the gaps.</p><p class=\"mb-4\">In your Clincoo style.css, make a row class with display flex, gap, and flex-wrap. Use it for a menu or three service cards. Do not mix leftover floats from old tutorials.</p><p class=\"mb-4\">Preview at phone width. Cards wrapping to a new row is fine. Check that nothing is clipped and buttons stay easy to tap.</p><p class=\"mb-4\">Ask the AI to explain one property only — justify-content, for example — then test it yourself. One flex row you understand beats a copied hero layout you do not own.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "HTML, CSS, and JavaScript reference",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Beginner coding practice",
          source3: "Clincoo Editor", sourceUrl3: "https://editor.clincoo.buzz/", sourceSnippet3: "Clincoo code editor"
        }
      }
    },
    {
      id: "javascript-ubah-teks-tanpa-reload",
      langs: {
        "id": {
          title: "Ubah Teks di Halaman dengan JavaScript tanpa Reload",
          desc: "Latihan DOM kecil di Clincoo: pilih elemen, ganti textContent, lihat hasil di pratinjau.",
          content: "<p class=\"mb-4\">Reload halaman untuk mengganti satu kalimat terasa berlebihan. JavaScript bisa mengubah teks yang sudah ada di HTML tanpa membuka ulang berkas.</p><p class=\"mb-4\">Buat paragraf dengan id, lalu di skrip ambil elemen itu dan ganti textContent saat tombol diklik. Jangan mulai dari innerHTML kalau yang kamu ubah hanya tulisan.</p><p class=\"mb-4\">Di Clincoo, simpan HTML dan skrip, buka pratinjau, klik tombol. Kalau tidak berubah, cek id yang typo dan urutan skrip di bawah elemen.</p><p class=\"mb-4\">Ulangi dengan dua teks bergantian. Begitu kamu melihat halaman bereaksi, konsep DOM tidak lagi abstrak. Itu fondasi interaktivitas sebelum framework.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "Referensi HTML, CSS, JavaScript",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Latihan coding untuk pemula",
          source3: "Clincoo Editor", sourceUrl3: "https://editor.clincoo.buzz/", sourceSnippet3: "Editor kode Clincoo"
        },
        "en": {
          title: "Change On-Page Text with JavaScript without Reloading",
          desc: "A small DOM drill in Clincoo: select an element, change textContent, watch preview.",
          content: "<p class=\"mb-4\">Reloading the page to change one sentence is overkill. JavaScript can change text that already lives in the HTML without reopening the file.</p><p class=\"mb-4\">Give a paragraph an id, then in a script grab that element and swap textContent when a button is clicked. Do not start with innerHTML if you are only changing words.</p><p class=\"mb-4\">In Clincoo, save the HTML and script, open preview, click the button. If nothing changes, check a mistyped id and whether the script sits below the element.</p><p class=\"mb-4\">Repeat with two alternating strings. Once the page reacts, the DOM stops being abstract. That is the base of interactivity before any framework.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "HTML, CSS, and JavaScript reference",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Beginner coding practice",
          source3: "Clincoo Editor", sourceUrl3: "https://editor.clincoo.buzz/", sourceSnippet3: "Clincoo code editor"
        }
      }
    },
    {
      id: "komentar-kode-yang-berguna",
      langs: {
        "id": {
          title: "Komentar Kode yang Berguna, Bukan yang Menuliskan Ulang Baris",
          desc: "Tulis komentar di Clincoo yang menjelaskan alasan, bukan yang menyalin apa yang sudah terlihat di kode.",
          content: "<p class=\"mb-4\">Komentar 'tambah satu' di samping i++ tidak membantu. Yang membantu adalah alasan: kenapa daftar dikosongkan dulu, kenapa kelas ini tidak boleh dihapus.</p><p class=\"mb-4\">Di editor Clincoo, sisipkan komentar hanya di persimpangan: sebelum fungsi yang merubah banyak elemen, atau di CSS yang menimpa aturan lain. Satu atau dua baris cukup.</p><p class=\"mb-4\">Hapus komentar yang sudah dusta. Kalau fungsi berubah, komentar ikut berubah. Komentar usang membuat AI dan kamu sendiri salah arah.</p><p class=\"mb-4\">Latihan: buka file template, tambah tiga komentar alasan, hapus semua yang hanya mengulangi nama fungsi. Kode yang bisa dijelaskan lebih mudah dilanjutkan besok.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "Referensi HTML, CSS, JavaScript",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Latihan coding untuk pemula",
          source3: "Clincoo Editor", sourceUrl3: "https://editor.clincoo.buzz/", sourceSnippet3: "Editor kode Clincoo"
        },
        "en": {
          title: "Useful Code Comments, Not Ones That Repeat the Line",
          desc: "Write comments in Clincoo that explain why, not ones that copy what the code already shows.",
          content: "<p class=\"mb-4\">A comment that says 'add one' next to i++ does not help. What helps is the reason: why the list is cleared first, why this class must not be deleted.</p><p class=\"mb-4\">In the Clincoo editor, comment only at junctions: before a function that touches many elements, or on CSS that overrides another rule. One or two lines is enough.</p><p class=\"mb-4\">Delete comments that have become lies. If the function changed, the comment changes too. Stale comments send you and the AI the wrong way.</p><p class=\"mb-4\">Drill: open a template file, add three why-comments, delete every note that only repeats a function name. Code you can explain is easier to continue tomorrow.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "HTML, CSS, and JavaScript reference",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Beginner coding practice",
          source3: "Clincoo Editor", sourceUrl3: "https://editor.clincoo.buzz/", sourceSnippet3: "Clincoo code editor"
        }
      }
    },
    {
      id: "uji-tautan-relatif-antar-halaman",
      langs: {
        "id": {
          title: "Uji Tautan Relatif antar Halaman sebelum Proyek Bertambah",
          desc: "Href yang salah sering lolos di satu file. Di Clincoo, klik setiap menu di pratinjau sampai semua halaman saling terhubung.",
          content: "<p class=\"mb-4\">Situs pemula sering punya beranda yang jalan dan halaman tentang yang tidak bisa kembali. Penyebabnya tautan relatif yang diketik asal.</p><p class=\"mb-4\">Di Clincoo, buat dua halaman lalu tautkan bolak-balik dengan path seperti ./tentang.html dan ./index.html. Hindari path komputer lokal.</p><p class=\"mb-4\">Buka pratinjau, klik setiap item menu, lalu tombol kembali browser. Kalau gambar pecah di halaman kedua, path asetnya juga perlu relatif dari folder yang sama.</p><p class=\"mb-4\">Lakukan uji tautan setiap kali menambah halaman. Deploy tidak memperbaiki tautan yang salah. Yang memperbaiki adalah klik yang kamu lakukan sendiri sebelum berbagi URL.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "Referensi HTML, CSS, JavaScript",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Latihan coding untuk pemula",
          source3: "Clincoo Editor", sourceUrl3: "https://editor.clincoo.buzz/", sourceSnippet3: "Editor kode Clincoo"
        },
        "en": {
          title: "Test Relative Links between Pages before the Project Grows",
          desc: "A bad href often hides in a single file. In Clincoo, click every menu item in preview until pages connect.",
          content: "<p class=\"mb-4\">Beginner sites often have a working home page and an about page with no way back. The cause is a relative link typed by guesswork.</p><p class=\"mb-4\">In Clincoo, make two pages and link them both ways with paths like ./tentang.html and ./index.html. Avoid local computer paths.</p><p class=\"mb-4\">Open preview, click each menu item, then the browser back button. If images break on the second page, asset paths also need to be relative from that folder.</p><p class=\"mb-4\">Run the link test every time you add a page. Deploy will not fix a bad href. What fixes it is the click you do yourself before you share the URL.</p>",
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
