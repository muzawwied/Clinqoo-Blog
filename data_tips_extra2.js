// Clinqoo Blog — artikel tips tambahan 2026-09-19 (merge ke data_tips)
(function(){
  var extra = [
    {
      id: "jaga-target-sentuh-tombol-di-hp",
      langs: {
        "id": {
          title: "Jaga Ukuran Target Sentuh Tombol di Layar HP",
          desc: "Tombol rapat di pratinjau Clinqoo sulit diketuk. Beri jarak dan tinggi minimum sebelum deploy.",
          content: "<p class=\"mb-4\">Menu dan CTA yang rapi di desktop sering bertumpuk di HP. Di editor Clinqoo, pratinjau lebar sempit lalu coba ketuk setiap tombol dengan ibu jari imajiner.</p><p class=\"mb-4\">Naikkan padding, beri jarak antar tautan, dan jangan taruh dua aksi besar berdampingan di hero. Satu tombol utama cukup di layar pertama.</p><p class=\"mb-4\">Simpan CSS, cek lagi, baru lanjut seksi lain. Target sentuh yang longgar terasa profesional tanpa mengubah merek.</p><p class=\"mb-4\">Pengunjung HP tidak punya kursor halus. Situs yang mudah diketuk selesai dipakai, bukan hanya dilihat.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Platform Clinqoo",
          source2: "Clinqoo Editor", sourceUrl2: "https://clinqoo.pages.dev/editor/", sourceSnippet2: "Editor Clinqoo",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Praktik terbaik web"
        },
        "en": {
          title: "Keep Touch Targets Large Enough on Phones",
          desc: "Tight buttons in Clinqoo preview are hard to tap. Add space and minimum height before you deploy.",
          content: "<p class=\"mb-4\">Menus and CTAs that look tidy on desktop often stack on a phone. In the Clinqoo editor, preview a narrow width and try tapping each button with an imaginary thumb.</p><p class=\"mb-4\">Increase padding, space links apart, and do not place two large actions side by side in the hero. One primary button is enough on the first screen.</p><p class=\"mb-4\">Save the CSS, check again, then move to another section. Generous touch targets feel professional without changing the brand.</p><p class=\"mb-4\">Phone visitors do not have a fine cursor. A site that is easy to tap gets used, not only viewed.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clinqoo platform",
          source2: "Clinqoo Editor", sourceUrl2: "https://clinqoo.pages.dev/editor/", sourceSnippet2: "Clinqoo editor",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Web best practices"
        }
      }
    },
    {
      id: "tulis-meta-deskripsi-sebelum-rilis",
      langs: {
        "id": {
          title: "Tulis Meta Deskripsi sebelum Situs Clinqoo Rilis",
          desc: "Tanpa deskripsi singkat, tautan yang dibagikan terasa kosong. Isi meta description di setiap halaman utama.",
          content: "<p class=\"mb-4\">Judul tab saja tidak cukup saat URL Clinqoo dibagikan. Tambahkan meta description satu atau dua kalimat yang menjelaskan isi halaman.</p><p class=\"mb-4\">Tulis manfaat, bukan daftar kata kunci. Samakan nada dengan hero. Cek panjangnya agar tidak terpotong aneh di pratinjau unggahan.</p><p class=\"mb-4\">Lakukan ini sebelum deploy, bersama judul dan favicon. Tiga meta kecil itu membentuk kesan pertama di luar situs.</p><p class=\"mb-4\">Halaman yang jelas di kartu tautan lebih mudah dipercaya. Orang mengklik apa yang sudah mereka pahami.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Platform Clinqoo",
          source2: "Clinqoo Editor", sourceUrl2: "https://clinqoo.pages.dev/editor/", sourceSnippet2: "Editor Clinqoo",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Praktik terbaik web"
        },
        "en": {
          title: "Write a Meta Description before the Clinqoo Site Ships",
          desc: "Without a short description, a shared link feels empty. Fill meta description on every main page.",
          content: "<p class=\"mb-4\">A tab title is not enough when a Clinqoo URL is shared. Add a one- or two-sentence meta description that states what the page is.</p><p class=\"mb-4\">Write the benefit, not a keyword list. Match the tone of the hero. Check length so it does not crop oddly on a link card.</p><p class=\"mb-4\">Do this before deploy, together with the title and favicon. Those three small metas shape the first impression off-site.</p><p class=\"mb-4\">A page that is clear on a link card is easier to trust. People click what they already understand.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clinqoo platform",
          source2: "Clinqoo Editor", sourceUrl2: "https://clinqoo.pages.dev/editor/", sourceSnippet2: "Clinqoo editor",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Web best practices"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["tips"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["tips"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
