// Clincoo Blog — artikel tabel tambahan 2026-09-25 WIB
(function(){
  var extra = [
    {
      id: "tabel-angka-rata-kanan",
      langs: {
        "id": {
          title: "Ratakan Angka ke Kanan pada Kolom Tabel Clincoo",
          desc: "Angka harga dan kuantitas yang rata kiri sulit dibandingkan. Pakai text-align:right pada kolom numerik.",
          content: "<p class=\"mb-4\">Daftar harga di template Clincoo sering meratakan semua sel ke kiri. Kolom angka lalu terlihat acak saat mata memindai ke bawah.</p><p class=\"mb-4\">Di editor.clincoo.buzz, beri kelas pada th dan td numerik, lalu text-align:right. Biarkan kolom nama tetap kiri.</p><p class=\"mb-4\">Jangan meratakan seluruh table ke kanan. Teks deskripsi yang rata kanan lebih sulit dibaca.</p><p class=\"mb-4\">Minta AI hanya menambah kelas kolom angka. Tempel satu baris tabel sebagai konteks.</p><p class=\"mb-4\">Clincoo merender CSS yang kamu simpan. Angka yang sejajar memudahkan banding harga di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Right-Align Numbers in Clincoo Table Columns",
          desc: "Left-aligned prices and quantities are hard to compare. Use text-align:right on numeric columns.",
          content: "<p class=\"mb-4\">Price lists in Clincoo templates often left-align every cell. Number columns then look random when the eye scans down.</p><p class=\"mb-4\">In editor.clincoo.buzz, add a class on numeric th and td, then text-align:right. Keep name columns left.</p><p class=\"mb-4\">Do not right-align the whole table. Right-aligned description text is harder to read.</p><p class=\"mb-4\">Ask AI to add a numeric column class only. Paste one table row as context.</p><p class=\"mb-4\">Clincoo renders the CSS you save. Aligned numbers make price comparison easier on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "tabel-empty-state-bukan-nol-baris",
      langs: {
        "id": {
          title: "Tampilkan Empty State Tabel Clincoo, Jangan Tabel Tanpa Baris",
          desc: "thead tanpa tbody membingungkan. Satu kalimat dan aksi lebih jelas daripada kerangka kosong.",
          content: "<p class=\"mb-4\">Filter di proyek Clincoo kadang menyisakan tabel hanya dengan heading. Pengunjung tidak tahu apakah data gagal dimuat atau memang kosong.</p><p class=\"mb-4\">Di editor.clincoo.buzz, jika tidak ada baris, ganti tbody dengan pesan singkat plus tautan reset filter.</p><p class=\"mb-4\">Jangan biarkan skeleton loading menempel setelah fetch selesai. Sembunyikan placeholder saat daftar benar-benar kosong.</p><p class=\"mb-4\">Minta AI menambah satu cabang empty state. Tempel markup tabel dan contoh respons kosong.</p><p class=\"mb-4\">Clincoo tidak menulis empty state otomatis. Pesan yang jelas menjaga app.clincoo.buzz tetap bisa ditindaklanjuti.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Show a Clincoo Table Empty State, Not a Table with Zero Rows",
          desc: "A thead with no tbody is confusing. One sentence and an action beat an empty frame.",
          content: "<p class=\"mb-4\">Filters in a Clincoo project sometimes leave a table with only headings. Visitors cannot tell if data failed or is truly empty.</p><p class=\"mb-4\">In editor.clincoo.buzz, when there are no rows, replace tbody with a short message plus a reset-filter link.</p><p class=\"mb-4\">Do not leave a loading skeleton after fetch finishes. Hide the placeholder when the list is really empty.</p><p class=\"mb-4\">Ask AI to add one empty-state branch. Paste the table markup and a sample empty response.</p><p class=\"mb-4\">Clincoo does not write empty states for you. A clear message keeps app.clincoo.buzz actionable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "tabel-colspan-hanya-saat-perlu",
      langs: {
        "id": {
          title: "Pakai colspan pada Tabel Clincoo Hanya saat Selaras dengan Data",
          desc: "colspan dekoratif merusak pemetaan kolom. Gabungkan sel hanya jika nilainya memang satu.",
          content: "<p class=\"mb-4\">AI sering menggabungkan sel judul agar 'terlihat rapi'. Pembaca layar lalu kehilangan urutan kolom di tabel Clincoo.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pakai colspan hanya untuk subtotal atau judul grup yang benar-benar mencakup beberapa kolom.</p><p class=\"mb-4\">Jangan menumpuk rowspan dan colspan di sel yang sama tanpa uji pembaca layar. Cek urutan fokus keyboard.</p><p class=\"mb-4\">Minta AI menjelaskan setiap colspan. Tolak merapikan tabel dengan menggabung sel secara visual saja.</p><p class=\"mb-4\">Clincoo merender sel apa adanya. colspan jujur menjaga struktur tetap bisa dinavigasi di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use colspan on Clincoo Tables Only When It Matches the Data",
          desc: "Decorative colspan breaks column mapping. Merge cells only when the value is truly one.",
          content: "<p class=\"mb-4\">AI often merges heading cells to look tidy. Screen readers then lose column order in a Clincoo table.</p><p class=\"mb-4\">In editor.clincoo.buzz, use colspan only for a subtotal or group title that truly spans columns.</p><p class=\"mb-4\">Do not stack rowspan and colspan on the same cell without a screen reader check. Test keyboard focus order.</p><p class=\"mb-4\">Ask AI to explain each colspan. Reject visual-only cell merges.</p><p class=\"mb-4\">Clincoo renders cells as saved. Honest colspan keeps the structure navigable on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "tabel-hover-dan-fokus-baris",
      langs: {
        "id": {
          title: "Tandai Baris Tabel Clincoo saat Hover dan Fokus Keyboard",
          desc: "Tanpa highlight, baris aktif sulit dilacak. Pakai :hover dan :focus-within yang kontras.",
          content: "<p class=\"mb-4\">Tabel panjang di Clincoo membuat mata kehilangan baris saat kursor bergerak. Fokus keyboard bahkan tidak terlihat.</p><p class=\"mb-4\">Di editor.clincoo.buzz, tambah tr:hover dan tr:focus-within dengan latar lembut yang lulus kontras teks.</p><p class=\"mb-4\">Jangan andalkan outline hanya pada satu td. Pengguna Tab harus melihat seluruh baris yang aktif.</p><p class=\"mb-4\">Minta AI menambah dua selector saja. Tempel CSS zebra yang sudah ada agar tidak bentrok.</p><p class=\"mb-4\">Clincoo tidak menandai baris otomatis. Highlight yang jelas memudahkan pindai data di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Mark Clincoo Table Rows on Hover and Keyboard Focus",
          desc: "Without a highlight, the active row is hard to track. Use contrasting :hover and :focus-within.",
          content: "<p class=\"mb-4\">Long Clincoo tables make the eye lose the row as the pointer moves. Keyboard focus is even less visible.</p><p class=\"mb-4\">In editor.clincoo.buzz, add tr:hover and tr:focus-within with a soft background that still passes text contrast.</p><p class=\"mb-4\">Do not rely on an outline on a single td. Tab users should see the whole active row.</p><p class=\"mb-4\">Ask AI to add two selectors only. Paste the existing zebra CSS so they do not clash.</p><p class=\"mb-4\">Clincoo does not mark rows for you. A clear highlight makes data easier to scan on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "tabel-header-urut-aksesibel",
      langs: {
        "id": {
          title: "Tandai Kolom yang Bisa Diurut pada Tabel Clincoo secara Aksesibel",
          desc: "Tombol urut tanpa aria-sort membingungkan. Umumkan arah naik atau turun.",
          content: "<p class=\"mb-4\">Banyak tabel Clincoo memakai th yang bisa diklik untuk sort, tetapi status naik/turun hanya ikon warna.</p><p class=\"mb-4\">Di editor.clincoo.buzz, bungkus label kolom di button dalam th. Set aria-sort=ascending atau descending pada th aktif.</p><p class=\"mb-4\">Jangan mengandalkan panah CSS saja. Pembaca layar butuh nama kolom plus arah urut.</p><p class=\"mb-4\">Minta AI menambah aria-sort dan teks tersembunyi jika perlu. Tolak library sort besar untuk lima baris.</p><p class=\"mb-4\">Clincoo menjalankan markup yang kamu simpan. Status urut yang diumumkan menjaga tabel tetap bisa dipakai di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Mark Sortable Clincoo Table Columns in an Accessible Way",
          desc: "A sort button without aria-sort is confusing. Announce ascending or descending.",
          content: "<p class=\"mb-4\">Many Clincoo tables use a clickable th for sort, but up/down state is only a colored icon.</p><p class=\"mb-4\">In editor.clincoo.buzz, wrap the column label in a button inside th. Set aria-sort=ascending or descending on the active th.</p><p class=\"mb-4\">Do not rely on a CSS arrow alone. Screen readers need the column name plus sort direction.</p><p class=\"mb-4\">Ask AI to add aria-sort and hidden text if needed. Reject a large sort library for five rows.</p><p class=\"mb-4\">Clincoo runs the markup you save. An announced sort state keeps the table usable on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["tabel"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["tabel"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
