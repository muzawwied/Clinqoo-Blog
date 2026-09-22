// Clincoo Blog — artikel animasi tambahan 2026-09-22 17:19 WIB
(function(){
  var extra = [
    {
      id: "animasi-jangan-transition-all",
      langs: {
        "id": {
          title: "Jangan Pakai transition: all di Proyek Clincoo",
          desc: "all menganimasikan setiap properti termasuk layout. Tulis hanya opacity, transform, atau warna.",
          content: "<p class=\"mb-4\">AI sering menempel transition: all 0.3s ease pada .card Clincoo. Saat padding atau font-size berubah, browser menganimasikan layout dan halaman terasa berat.</p><p class=\"mb-4\">Tulis properti eksplisit: transition: opacity 200ms ease, transform 200ms ease. Biarkan width, height, dan margin tanpa transisi.</p><p class=\"mb-4\">Uji di editor.clincoo.buzz: ubah teks kartu lalu hover. Jika tinggi kartu bergelombang, masih ada all atau properti layout.</p><p class=\"mb-4\">Minta AI satu deklarasi transition. Tolak utilitas yang menyembunyikan all di kelas generik.</p><p class=\"mb-4\">Clincoo menayangkan CSS apa adanya. Gerak yang kamu batasi lebih mudah di-debug daripada all.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Use transition: all on a Clincoo Project",
          desc: "all animates every property including layout. List only opacity, transform, or color.",
          content: "<p class=\"mb-4\">AI often pastes transition: all 0.3s ease on a Clincoo .card. When padding or font-size changes, the browser animates layout and the page feels heavy.</p><p class=\"mb-4\">Write explicit properties: transition: opacity 200ms ease, transform 200ms ease. Leave width, height, and margin without a transition.</p><p class=\"mb-4\">Test in editor.clincoo.buzz: edit the card copy then hover. If the card height waves, all or a layout property is still there.</p><p class=\"mb-4\">Ask the AI for one transition declaration. Refuse a utility that hides all inside a generic class.</p><p class=\"mb-4\">Clincoo ships CSS as saved. Motion you limit is easier to debug than all.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "animasi-scroll-reveal-tanpa-js-berat",
      langs: {
        "id": {
          title: "Scroll Reveal Clincoo tanpa Pustaka Intersection Berat",
          desc: "Kartu yang muncul saat scroll cukup CSS atau satu observer. Jangan unduh plugin 20KB.",
          content: "<p class=\"mb-4\">Template Clincoo kadang memuat library reveal agar setiap section fade saat masuk viewport. Di HP lambat, teks baru muncul setelah skrip siap.</p><p class=\"mb-4\">Tampilkan konten tanpa JS dulu. Jika gerak wajib, satu IntersectionObserver pada section hero sudah cukup; jangan observer per kartu.</p><p class=\"mb-4\">Cek editor.clincoo.buzz dengan JS dimatikan di DevTools. Judul dan CTA harus tetap terbaca.</p><p class=\"mb-4\">Minta AI menghapus data-aos. Tolak paket npm yang hanya menambah kelas saat scroll.</p><p class=\"mb-4\">Clincoo adalah situs statis. Reveal yang menahan teks merusak SEO dan kesan cepat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Clincoo Scroll Reveal without a Heavy Intersection Library",
          desc: "Cards that fade on scroll need CSS or one observer. Do not download a 20KB plugin.",
          content: "<p class=\"mb-4\">Clincoo templates sometimes load a reveal library so every section fades into the viewport. On a slow phone, copy appears only after the script is ready.</p><p class=\"mb-4\">Show content without JS first. If motion is required, one IntersectionObserver on the hero section is enough; do not observe every card.</p><p class=\"mb-4\">Check editor.clincoo.buzz with JS off in DevTools. Title and CTA must still be readable.</p><p class=\"mb-4\">Ask the AI to remove data-aos. Refuse an npm pack that only adds a class on scroll.</p><p class=\"mb-4\">Clincoo is a static site. Reveal that withholds text hurts SEO and the feel of speed.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "animasi-will-change-jangan-asal",
      langs: {
        "id": {
          title: "Pakai will-change Hemat, Jangan di Setiap Elemen Clincoo",
          desc: "will-change pada puluhan kartu memakan memori. Terapkan hanya saat gerak benar-benar jalan.",
          content: "<p class=\"mb-4\">AI suka menambahkan will-change: transform pada setiap kartu grid. Browser menyiapkan layer GPU yang tidak dipakai, lalu HP panas.</p><p class=\"mb-4\">Terapkan will-change hanya pada elemen yang sedang bertransisi, atau hapus setelah animasi selesai. Satu hero sudah cukup.</p><p class=\"mb-4\">Uji di pratinjau HP editor.clincoo.buzz sambil membuka DevTools Performance. Jika layer meledak, cabut will-change global.</p><p class=\"mb-4\">Minta AI menghapus will-change dari kelas kartu. Tolak tips yang memasangnya di *.</p><p class=\"mb-4\">Clincoo men-deploy CSS mentah. Petunjuk kompositor yang berlebihan lebih merugikan daripada membantu.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use will-change Sparingly, Not on Every Clincoo Element",
          desc: "will-change on dozens of cards burns memory. Apply it only while motion actually runs.",
          content: "<p class=\"mb-4\">AI likes to add will-change: transform on every grid card. The browser prepares GPU layers that never move, then the phone runs hot.</p><p class=\"mb-4\">Apply will-change only on the element that is transitioning, or remove it when the animation ends. One hero is enough.</p><p class=\"mb-4\">Test in the editor.clincoo.buzz phone preview with DevTools Performance open. If layers explode, strip the global will-change.</p><p class=\"mb-4\">Ask the AI to drop will-change from the card class. Refuse a tip that puts it on *.</p><p class=\"mb-4\">Clincoo deploys raw CSS. Extra compositor hints hurt more than they help.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["animasi"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["animasi"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
