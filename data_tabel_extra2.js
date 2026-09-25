// Clincoo Blog — artikel tabel tambahan 2026-09-25 WIB
(function(){
  var extra = [
    {
      id: "tabel-satuan-di-header",
      langs: {
        "id": {
          title: "Tulis Satuan di Header Kolom Tabel Clincoo, Bukan di Setiap Sel",
          desc: "Mengulang Rp atau kg di setiap sel mempersulit pindai angka. Satuan cukup di th.",
          content: "<p class=\"mb-4\">Daftar harga Clincoo sering menulis Rp di setiap sel. Mata harus memfilter teks berulang sebelum membandingkan angka.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pindahkan satuan ke th, misalnya Harga (Rp) atau Berat (kg). Isi td hanya angka atau nilai.</p><p class=\"mb-4\">Jika satuan berubah per baris, tetap tulis di sel tetapi jangan campur dengan pemisah ribuan yang tidak konsisten.</p><p class=\"mb-4\">Minta AI hanya memindahkan satuan ke header. Tempel satu baris tabel sebagai konteks.</p><p class=\"mb-4\">Clincoo merender teks apa adanya. Header yang jujur membuat app.clincoo.buzz lebih cepat dipindai.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Put Units in the Clincoo Table Header, Not in Every Cell",
          desc: "Repeating Rp or kg in every cell makes numbers hard to scan. Keep the unit in th.",
          content: "<p class=\"mb-4\">Clincoo price lists often write Rp in every cell. The eye must filter repeated text before comparing numbers.</p><p class=\"mb-4\">In editor.clincoo.buzz, move the unit into th, for example Price (IDR) or Weight (kg). Keep td values numeric.</p><p class=\"mb-4\">If the unit changes per row, keep it in the cell but do not mix inconsistent thousand separators.</p><p class=\"mb-4\">Ask AI only to move units into the header. Paste one table row as context.</p><p class=\"mb-4\">Clincoo renders text as saved. An honest header makes app.clincoo.buzz faster to scan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "tabel-nowrap-angka",
      langs: {
        "id": {
          title: "Cegah Angka Tabel Clincoo Terpecah Baris dengan white-space nowrap",
          desc: "Harga dan tanggal yang patah di tengah sel sulit dibandingkan. Kunci angka tetap satu baris.",
          content: "<p class=\"mb-4\">Kolom total di tabel Clincoo sering mematahkan 1.250.000 menjadi dua baris di layar sempit.</p><p class=\"mb-4\">Di editor.clincoo.buzz, set white-space:nowrap pada td numerik. Bungkus tabel dengan overflow-x:auto agar tidak merusak layout.</p><p class=\"mb-4\">Jangan nowrap seluruh baris. Teks deskripsi tetap boleh turun baris.</p><p class=\"mb-4\">Minta AI menambah kelas nowrap hanya pada kolom angka. Tempel CSS tabel yang ada.</p><p class=\"mb-4\">Clincoo tidak menjaga pecahan angka sendiri. nowrap plus gulir menjaga app.clincoo.buzz tetap akurat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Stop Clincoo Table Numbers from Wrapping with white-space nowrap",
          desc: "Prices and dates that split mid-cell are hard to compare. Keep numbers on one line.",
          content: "<p class=\"mb-4\">Total columns in Clincoo tables often wrap 1,250,000 onto two lines on a narrow screen.</p><p class=\"mb-4\">In editor.clincoo.buzz, set white-space:nowrap on numeric td cells. Wrap the table with overflow-x:auto so the layout does not break.</p><p class=\"mb-4\">Do not nowrap the whole row. Description text may still wrap.</p><p class=\"mb-4\">Ask AI to add a nowrap class on number columns only. Paste the existing table CSS.</p><p class=\"mb-4\">Clincoo does not keep numbers intact by itself. nowrap plus scroll keeps app.clincoo.buzz accurate.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "tabel-tfoot-ringkas",
      langs: {
        "id": {
          title: "Pakai tfoot untuk Total Tabel Clincoo, Bukan Baris Tebal di tbody",
          desc: "Total yang hanya ditebalkan di baris terakhir membingungkan pembaca layar. tfoot punya makna.",
          content: "<p class=\"mb-4\">Invoice Clincoo sering menaruh Total di tr terakhir tbody dengan font-weight 700. Semantiknya sama dengan baris data.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pindahkan baris ringkasan ke tfoot. Samakan jumlah kolom dan scope pada th total.</p><p class=\"mb-4\">Jangan menyalin total ke caption. Caption menjelaskan tabel; tfoot menampilkan agregat.</p><p class=\"mb-4\">Minta AI memindahkan satu baris ke tfoot. Tolak rewrite seluruh markup halaman.</p><p class=\"mb-4\">Clincoo merender landmark tabel apa adanya. tfoot membuat app.clincoo.buzz lebih jelas bagi alat bantu.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use tfoot for Clincoo Table Totals, Not a Bold Row in tbody",
          desc: "A total that is only bold in the last body row confuses screen readers. tfoot has meaning.",
          content: "<p class=\"mb-4\">Clincoo invoices often put Total in the last tbody tr with font-weight 700. Semantically it is just another data row.</p><p class=\"mb-4\">In editor.clincoo.buzz, move the summary row into tfoot. Keep the column count and scope on the total th.</p><p class=\"mb-4\">Do not copy the total into caption. Caption describes the table; tfoot holds the aggregate.</p><p class=\"mb-4\">Ask AI to move one row into tfoot. Reject a full page markup rewrite.</p><p class=\"mb-4\">Clincoo renders table landmarks as saved. tfoot makes app.clincoo.buzz clearer for assistive tools.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "tabel-separator-ribuan-konsisten",
      langs: {
        "id": {
          title: "Samakan Pemisah Ribuan dan Desimal pada Tabel Angka Clincoo",
          desc: "Campur titik dan koma antar baris membuat 1.250 dibaca salah. Satu locale per tabel.",
          content: "<p class=\"mb-4\">Template Clincoo kadang menulis 1.250.000 di satu baris dan 1,250.00 di baris berikutnya. Pembaca tidak tahu mana desimal.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pilih satu pola: titik ribuan dan koma desimal, atau sebaliknya. Terapkan ke seluruh kolom numerik.</p><p class=\"mb-4\">Jangan andalkan toLocaleString tanpa locale tetap. Tetapkan id-ID atau en-US di skrip format.</p><p class=\"mb-4\">Minta AI menormalisasi format satu kolom. Tempel lima sel sampel yang tidak konsisten.</p><p class=\"mb-4\">Clincoo tidak menormalkan angka sendiri. Format seragam menjaga app.clincoo.buzz bisa dipercaya.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep Thousand and Decimal Separators Consistent in Clincoo Number Tables",
          desc: "Mixing dots and commas across rows makes 1.250 easy to misread. One locale per table.",
          content: "<p class=\"mb-4\">Clincoo templates sometimes write 1.250.000 in one row and 1,250.00 in the next. Readers cannot tell which mark is decimal.</p><p class=\"mb-4\">In editor.clincoo.buzz, pick one pattern: dot thousands and comma decimals, or the reverse. Apply it to every numeric column.</p><p class=\"mb-4\">Do not rely on toLocaleString without a fixed locale. Set id-ID or en-US in the format script.</p><p class=\"mb-4\">Ask AI to normalize one column. Paste five inconsistent sample cells.</p><p class=\"mb-4\">Clincoo does not normalize numbers for you. Uniform format keeps app.clincoo.buzz trustworthy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "tabel-rowspan-hemat",
      langs: {
        "id": {
          title: "Pakai rowspan Tabel Clincoo Hemat, Uji Urutan Baca Setelah Gabung Sel",
          desc: "rowspan yang bertumpuk membingungkan Tab dan pembaca layar. Gabung hanya grup yang benar-benar satu.",
          content: "<p class=\"mb-4\">Jadwal Clincoo sering menggabungkan nama hari dengan rowspan 4 lalu menambah rowspan pada kolom status. Urutan sel meloncat.</p><p class=\"mb-4\">Di editor.clincoo.buzz, batasi satu rowspan per baris grup. Ulangi label jika penggabungan merusak navigasi keyboard.</p><p class=\"mb-4\">Setelah mengubah rowspan, Tab dari sel pertama sampai terakhir. Catat lompatan, lalu pecah sel jika perlu.</p><p class=\"mb-4\">Minta AI menjelaskan setiap rowspan. Tolak merapikan jadwal hanya agar terlihat rapat di mockup.</p><p class=\"mb-4\">Clincoo merender sel sesuai markup. rowspan hemat menjaga app.clincoo.buzz tetap bisa dinavigasi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Clincoo Table rowspan Sparingly and Test Reading Order After Merges",
          desc: "Stacked rowspan values confuse Tab and screen readers. Merge only groups that are truly one.",
          content: "<p class=\"mb-4\">Clincoo schedules often merge a day name with rowspan 4 and then add rowspan on a status column. Cell order then jumps.</p><p class=\"mb-4\">In editor.clincoo.buzz, limit one rowspan per group row. Repeat the label if the merge breaks keyboard navigation.</p><p class=\"mb-4\">After changing rowspan, Tab from the first cell to the last. Note jumps, then split cells if needed.</p><p class=\"mb-4\">Ask AI to explain each rowspan. Reject tightening a schedule only so the mockup looks dense.</p><p class=\"mb-4\">Clincoo renders cells as marked up. Spare rowspan keeps app.clincoo.buzz navigable.</p>",
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
