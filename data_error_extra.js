// Clincoo Blog — artikel error tambahan 2026-09-23
(function(){
  var extra = [
    {
      id: "error-unhandled-promise-rejection",
      langs: {
        "id": {
          title: "Tangani Unhandled Promise Rejection di Konsol Clincoo",
          desc: "Promise tanpa catch merahkan konsol meski halaman tampak normal. Pasang .catch atau try/await.",
          content: "<p class=\"mb-4\">fetch ke API dari halaman yang di-publish app.clincoo.buzz gagal diam-diam jika kamu tidak menunggu hasilnya.</p><p class=\"mb-4\">Buka konsol: Uncaught (in promise) menunjuk file yang sama dengan tombol yang baru kamu klik.</p><p class=\"mb-4\">Tambahkan .catch pada rantai, atau bungkus async/await dengan try/catch di editor.clincoo.buzz.</p><p class=\"mb-4\">Jangan menelan error kosong. Log pesan ke konsol agar pengunjung tidak melihat tombol yang tidak terjadi apa-apa.</p><p class=\"mb-4\">Clincoo tidak menelan Promise untukmu. Menangani rejection membuat alur jaringan bisa diuji.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Handle Unhandled Promise Rejection in the Clincoo Console",
          desc: "A Promise without catch turns the console red even when the page looks fine. Add .catch or try/await.",
          content: "<p class=\"mb-4\">A fetch to an API from a page published on app.clincoo.buzz fails silently if you never await the result.</p><p class=\"mb-4\">Open the console: Uncaught (in promise) points to the same file as the button you just clicked.</p><p class=\"mb-4\">Add .catch on the chain, or wrap async/await in try/catch di editor.clincoo.buzz.</p><p class=\"mb-4\">Do not swallow the error empty. Log the message so visitors do not see a button that does nothing.</p><p class=\"mb-4\">Clincoo does not swallow Promises for you. Handling rejection makes the network path testable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "error-404-aset-bukan-halaman",
      langs: {
        "id": {
          title: "Bedakan 404 Aset dari 404 Halaman di Situs Clincoo",
          desc: "Halaman utama 200 tidak berarti CSS dan gambar ikut ketemu. Cek Network untuk status merah.",
          content: "<p class=\"mb-4\">Pratinjau editor.clincoo.buzz terlihat polos karena stylesheet 404, bukan karena HTML rusak.</p><p class=\"mb-4\">Filter tab Network ke CSS atau Img. Baris merah dengan path salah hampir selalu typo folder.</p><p class=\"mb-4\">Samakan huruf besar-kecil path. Hosting statis membedakan Logo.png dan logo.png.</p><p class=\"mb-4\">Setelah publish dari app.clincoo.buzz, buka URL aset langsung. 404 di tab baru mengunci diagnosis.</p><p class=\"mb-4\">Clincoo tidak memperbaiki path relatif. Memisahkan 404 aset dari 404 rute mempercepat perbaikan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Tell an Asset 404 from a Page 404 on a Clincoo Site",
          desc: "A 200 on the main page does not mean CSS and images were found. Check Network for red status.",
          content: "<p class=\"mb-4\">The editor.clincoo.buzz preview looks plain because the stylesheet is 404, not because the HTML is broken.</p><p class=\"mb-4\">Filter Network to CSS or Img. A red row with a wrong path is almost always a folder typo.</p><p class=\"mb-4\">Match path case. Static hosting treats Logo.png and logo.png as different files.</p><p class=\"mb-4\">After publish from app.clincoo.buzz, open the asset URL directly. A 404 in a new tab locks the diagnosis.</p><p class=\"mb-4\">Clincoo does not fix relative paths. Separating asset 404 from route 404 speeds the fix.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "error-failed-to-fetch-jaringan",
      langs: {
        "id": {
          title: "Perbaiki TypeError: Failed to Fetch pada Form Clincoo",
          desc: "Failed to fetch bukan bug CSS. Itu jaringan, HTTPS, atau endpoint yang tidak merespons.",
          content: "<p class=\"mb-4\">Tombol kirim di form Clincoo tetap diam saat fetch menemui server mati atau URL salah protokol.</p><p class=\"mb-4\">Buka Network: baris fetch berwarna merah, bukan 200. Catat URL lengkap sebelum mengubah kode.</p><p class=\"mb-4\">Uji endpoint di tab baru. Jika tab baru juga gagal, masalahnya bukan skrip di editor.clincoo.buzz.</p><p class=\"mb-4\">Pastikan halaman HTTPS tidak memanggil http://. Browser memblokir mixed request tanpa pesan ramah.</p><p class=\"mb-4\">Clincoo tidak menambahkan proxy API. Memisahkan gagal jaringan dari gagal validasi form menghemat waktu.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Fix TypeError: Failed to Fetch on a Clincoo Form",
          desc: "Failed to fetch is not a CSS bug. It is the network, HTTPS, or an endpoint that does not answer.",
          content: "<p class=\"mb-4\">The submit button on a Clincoo form stays quiet when fetch hits a dead server or the wrong protocol.</p><p class=\"mb-4\">Open Network: the fetch row is red, not 200. Copy the full URL before changing code.</p><p class=\"mb-4\">Test the endpoint in a new tab. If the tab also fails, the script in editor.clincoo.buzz is not the cause.</p><p class=\"mb-4\">Do not call http:// from an HTTPS page. The browser blocks the mixed request without a friendly message.</p><p class=\"mb-4\">Clincoo does not add an API proxy. Separating network failure from form validation saves time.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "error-referenceerror-tidak-terdefinisi",
      langs: {
        "id": {
          title: "Atasi ReferenceError: X is not defined di Skrip Clincoo",
          desc: "Nama fungsi atau variabel belum ada saat dipanggil. Urutan skrip dan ejaan adalah tersangka pertama.",
          content: "<p class=\"mb-4\">Klik tombol memicu fungsi yang ditulis di berkas kedua, tetapi berkas kedua dimuat setelah event.</p><p class=\"mb-4\">Baca pesan ReferenceError di konsol. Nama yang disebut harus sama hurufnya dengan deklarasi di editor.clincoo.buzz.</p><p class=\"mb-4\">Pindahkan deklarasi ke atas, atau bungkus pemanggilan dalam DOMContentLoaded.</p><p class=\"mb-4\">Jangan mengandalkan variabel global dari ekstensi browser. Itu tidak ada di perangkat pengunjung.</p><p class=\"mb-4\">Clincoo tidak mengurutkan skrip otomatis. Menyelaraskan nama dan urutan menghilangkan error ini.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Fix ReferenceError: X is not defined in Clincoo Scripts",
          desc: "The function or variable does not exist yet when it is called. Script order and spelling are the first suspects.",
          content: "<p class=\"mb-4\">A button click calls a function written in a second file, but that file loads after the event.</p><p class=\"mb-4\">Read the ReferenceError in the console. The name must match the declaration in editor.clincoo.buzz exactly.</p><p class=\"mb-4\">Move the declaration up, or wrap the call in DOMContentLoaded.</p><p class=\"mb-4\">Do not rely on a global from a browser extension. Visitors do not have it.</p><p class=\"mb-4\">Clincoo does not reorder scripts for you. Aligning names and order removes this error.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "error-mixed-content-https",
      langs: {
        "id": {
          title: "Bersihkan Mixed Content agar Aset Clincoo Tidak Diblokir",
          desc: "Halaman HTTPS yang memuat gambar atau skrip HTTP membuat konsol merahlah dan aset hilang.",
          content: "<p class=\"mb-4\">Situs yang di-publish dari app.clincoo.buzz memakai HTTPS. http:// pada src gambar langsung diblokir.</p><p class=\"mb-4\">Cari Mixed Content di konsol. Browser menyebut URL HTTP yang harus diganti.</p><p class=\"mb-4\">Ganti ke https:// atau path relatif di editor.clincoo.buzz. Path relatif mengikuti protokol halaman.</p><p class=\"mb-4\">Jangan menonaktifkan peringatan keamanan. Pengunjung lain tetap melihat aset pecah.</p><p class=\"mb-4\">Clincoo tidak menaikkan protokol aset pihak ketiga. Membersihkan mixed content mengembalikan gambar dan skrip.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Clear Mixed Content so Clincoo Assets Are Not Blocked",
          desc: "An HTTPS page that loads HTTP images or scripts turns the console red and drops the assets.",
          content: "<p class=\"mb-4\">A site published from app.clincoo.buzz uses HTTPS. An http:// image src is blocked at once.</p><p class=\"mb-4\">Search Mixed Content in the console. The browser names the HTTP URL you must change.</p><p class=\"mb-4\">Switch to https:// or a relative path in editor.clincoo.buzz. A relative path follows the page protocol.</p><p class=\"mb-4\">Do not silence the security warning. Other visitors still see broken assets.</p><p class=\"mb-4\">Clincoo does not upgrade third-party asset protocols. Clearing mixed content restores images and scripts.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["error"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["error"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
