// Clincoo Blog — artikel javascript tambahan 2026-09-21 WIB
(function(){
  var extra = [
    {
      id: "js-debounce-input-pencarian",
      langs: {
        "id": {
          title: "Debounce Input Pencarian di Halaman Clincoo",
          desc: "Setiap ketikan yang memicu filter berat membuat UI tersendat. Tunggu jeda singkat sebelum jalan.",
          content: "<p class=\"mb-4\">Kotak cari produk Clincoo yang memfilter ratusan kartu pada setiap keyup membuat ketikan terasa berat. Bukan mesin yang lemah — handler terlalu sering jalan.</p><p class=\"mb-4\">Simpan timer. Pada input, clearTimeout lalu setTimeout 200–300 ms sebelum memanggil fungsi filter. Ketikan cepat hanya mengeksekusi sekali setelah berhenti.</p><p class=\"mb-4\">Uji di pratinjau editor.clincoo.buzz: ketik cepat lima huruf. Filter harus jalan sekali di akhir, bukan lima kali di Console.</p><p class=\"mb-4\">Minta AI menambah satu fungsi debounce pada listener input. Tolak library baru hanya untuk jeda.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu simpan. Jeda kecil menjaga halaman tetap responsif.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Debounce Search Input on a Clincoo Page",
          desc: "Every keystroke that runs a heavy filter stalls the UI. Wait a short pause before you run it.",
          content: "<p class=\"mb-4\">A Clincoo product search that filters hundreds of cards on every keyup makes typing feel heavy. The machine is fine — the handler runs too often.</p><p class=\"mb-4\">Keep a timer. On input, clearTimeout then setTimeout 200–300 ms before calling the filter. Fast typing runs once after you pause.</p><p class=\"mb-4\">Test in the editor.clincoo.buzz preview: type five letters quickly. The filter should run once at the end, not five times in Console.</p><p class=\"mb-4\">Ask the AI to add one debounce function on the input listener. Refuse a new library just for a pause.</p><p class=\"mb-4\">Clincoo runs the scripts you save. A small delay keeps the page responsive.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "js-hapus-listener-saat-tidak-dipakai",
      langs: {
        "id": {
          title: "Hapus Listener saat Komponen Clincoo Tidak Dipakai",
          desc: "addEventListener tanpa removeEventListener menumpuk saat halaman diganti lewat innerHTML.",
          content: "<p class=\"mb-4\">Modal Clincoo yang dibuka berulang sering merespons dua kali karena listener lama tidak dilepas saat markup diganti.</p><p class=\"mb-4\">Simpan referensi fungsi handler, jangan tulis fungsi anonim jika kamu berencana melepasnya. Panggil removeEventListener dengan fungsi yang sama sebelum menghapus node.</p><p class=\"mb-4\">Di Console, hitung berapa kali log muncul per klik. Jika naik setiap buka-tutup modal, listener menumpuk.</p><p class=\"mb-4\">Minta AI menambah pasangan remove pada fungsi tutup modal. Tolak menambal dengan flag global yang membingungkan.</p><p class=\"mb-4\">Clincoo tidak membersihkan listener otomatis. Kamu yang memasang, kamu yang melepas.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Remove Listeners when a Clincoo Component Is Gone",
          desc: "addEventListener without removeEventListener stacks up when a page is swapped via innerHTML.",
          content: "<p class=\"mb-4\">A Clincoo modal opened repeatedly often fires twice because old listeners stay after markup is replaced.</p><p class=\"mb-4\">Keep a named handler reference; do not use an anonymous function if you plan to remove it. Call removeEventListener with the same function before you drop the node.</p><p class=\"mb-4\">In Console, count how many logs appear per click. If the count rises each open-close, listeners are stacking.</p><p class=\"mb-4\">Ask the AI to add a matching remove in the close-modal function. Refuse a confusing global flag patch.</p><p class=\"mb-4\">Clincoo does not clean listeners for you. You attach them, you remove them.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "js-jangan-innerhtml-dari-input-user",
      langs: {
        "id": {
          title: "Jangan innerHTML dari Input Pengunjung di Clincoo",
          desc: "Teks form yang disisipkan ke innerHTML bisa jadi skrip. Pakai textContent untuk data mentah.",
          content: "<p class=\"mb-4\">Komentar atau nama produk yang ditaruh ke innerHTML membawa risiko jika berisi tag. Halaman Clincoo statis tetap bisa merender markup berbahaya di browser pengunjung.</p><p class=\"mb-4\">Untuk menampilkan teks, buat elemen lalu isi textContent. innerHTML hanya untuk potongan HTML yang kamu tulis sendiri dan sudah diawasi.</p><p class=\"mb-4\">Uji dengan mengetik teks bertag di field. Jika hasilnya ter-render sebagai HTML, ganti ke textContent.</p><p class=\"mb-4\">Minta AI mengganti satu innerHTML menjadi textContent. Tolak sanitizer rumit untuk satu field.</p><p class=\"mb-4\">Clincoo menayangkan berkas yang kamu simpan. Data pengunjung bukan template.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not innerHTML Visitor Input on Clincoo",
          desc: "Form text inserted via innerHTML can become a script. Use textContent for raw data.",
          content: "<p class=\"mb-4\">A comment or product name dropped into innerHTML is risky if it contains tags. A static Clincoo page can still render hostile markup in the visitor browser.</p><p class=\"mb-4\">To show text, create a node and set textContent. Reserve innerHTML for HTML snippets you wrote and already reviewed.</p><p class=\"mb-4\">Test by typing tagged text in the field. If the output renders as HTML, switch to textContent.</p><p class=\"mb-4\">Ask the AI to change one innerHTML to textContent. Refuse a complex sanitizer for a single field.</p><p class=\"mb-4\">Clincoo serves the files you save. Visitor data is not a template.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "js-async-await-fetch-dengan-pesan-error",
      langs: {
        "id": {
          title: "Fetch Clincoo Pakai async/await plus Pesan Error Jelas",
          desc: "Promise tanpa catch membuat tombol diam saat jaringan gagal. Tampilkan status ke pengguna.",
          content: "<p class=\"mb-4\">Form kontak Clincoo yang memanggil fetch tanpa menangani gagal terlihat 'tidak merespons'. Pengunjung mengira tombol rusak.</p><p class=\"mb-4\">Bungkus panggilan dalam async function. await response.ok. Jika bukan 2xx atau jaringan putus, tulis pesan di elemen status — bukan hanya console.error.</p><p class=\"mb-4\">Uji di Network: set Offline lalu kirim. Harus muncul teks gagal, tombol kembali aktif.</p><p class=\"mb-4\">Minta AI menambah satu blok try/catch dan teks status. Tolak rewrite seluruh alur form.</p><p class=\"mb-4\">Clincoo tidak menyembunyikan kegagalan jaringan. Kamu yang wajib memberitahu pengguna.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Clincoo Fetch Needs async/await plus a Clear Error",
          desc: "A promise with no catch leaves the button silent when the network fails. Show status to the user.",
          content: "<p class=\"mb-4\">A Clincoo contact form that calls fetch with no failure path looks 'dead'. Visitors think the button is broken.</p><p class=\"mb-4\">Wrap the call in an async function. await response.ok. If it is not 2xx or the network drops, write a message on a status node — not only console.error.</p><p class=\"mb-4\">Test in Network: set Offline then submit. A failure text must appear and the button must enable again.</p><p class=\"mb-4\">Ask the AI to add one try/catch and a status text. Refuse a full form-flow rewrite.</p><p class=\"mb-4\">Clincoo does not hide network failure. You must tell the user.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "js-localstorage-try-catch",
      langs: {
        "id": {
          title: "Bungkus localStorage Clincoo dalam try/catch",
          desc: "Mode privat atau kuota penuh melempar error. Jangan biarkan satu baris merusak seluruh skrip.",
          content: "<p class=\"mb-4\">Tema atau draf yang disimpan ke localStorage pecah di jendela privat. QuotaExceededError menghentikan skrip setelah baris itu.</p><p class=\"mb-4\">Tulis helper kecil: try setItem/getItem, catch lalu lanjut dengan nilai default di memori. Jangan anggap storage selalu ada.</p><p class=\"mb-4\">Uji di jendela privat editor.clincoo.buzz. Halaman harus tetap terbuka meski preferensi tidak tersimpan.</p><p class=\"mb-4\">Minta AI membungkus dua pemanggilan storage. Tolak polyfill besar.</p><p class=\"mb-4\">Clincoo berjalan di banyak konteks browser. Storage adalah bonus, bukan syarat hidup halaman.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Wrap Clincoo localStorage in try/catch",
          desc: "Private mode or a full quota throws. Do not let one line kill the whole script.",
          content: "<p class=\"mb-4\">A theme or draft saved to localStorage breaks in a private window. QuotaExceededError stops the script after that line.</p><p class=\"mb-4\">Write a small helper: try setItem/getItem, catch then continue with an in-memory default. Do not assume storage always exists.</p><p class=\"mb-4\">Test in a private editor.clincoo.buzz window. The page must still open even if preferences are not stored.</p><p class=\"mb-4\">Ask the AI to wrap two storage calls. Refuse a large polyfill.</p><p class=\"mb-4\">Clincoo runs in many browser contexts. Storage is a bonus, not a requirement for the page to live.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["javascript"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["javascript"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
