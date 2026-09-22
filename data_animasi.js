// Clincoo Blog — Data kategori: animasi
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["animasi"] = {
  names: { "id": "Animasi", "en": "Animation" },
  flag: "✨",
  articles: [
    {
      id: "animasi-hormati-prefers-reduced-motion",
      langs: {
        "id": {
          title: "Hormati prefers-reduced-motion pada Animasi Situs Clincoo",
          desc: "Gerakan panjang membuat sebagian pengunjung pusing. Matikan animasi non-esensial saat OS meminta.",
          content: "<p class=\"mb-4\">Template Clincoo sering menambahkan fade dan slide di setiap kartu. Di perangkat dengan Reduce Motion, halaman terasa goyang.</p><p class=\"mb-4\">Bungkus transisi dengan @media (prefers-reduced-motion: reduce) lalu set animation dan transition ke none.</p><p class=\"mb-4\">Cek di editor.clincoo.buzz setelah menyalakan Reduce Motion di OS. Hero tetap terbaca tanpa gerak 3 detik.</p><p class=\"mb-4\">Minta AI satu blok media query. Tolak pustaka animasi yang mengabaikan preferensi sistem.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. Hormat pada gerak adalah akses, bukan selera.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Honor prefers-reduced-motion on Clincoo Site Animation",
          desc: "Long motion makes some visitors dizzy. Turn off non-essential animation when the OS asks.",
          content: "<p class=\"mb-4\">Clincoo templates often add fade and slide on every card. On a device with Reduce Motion, the page feels shaky.</p><p class=\"mb-4\">Wrap transitions in @media (prefers-reduced-motion: reduce) and set animation and transition to none.</p><p class=\"mb-4\">Check in editor.clincoo.buzz after enabling Reduce Motion in the OS. The hero should still read with no three-second motion.</p><p class=\"mb-4\">Ask the AI for one media-query block. Refuse an animation library that ignores the system preference.</p><p class=\"mb-4\">Clincoo ships the CSS you save. Respecting motion is access, not taste.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "animasi-jangan-blokir-tombol",
      langs: {
        "id": {
          title: "Jangan Biarkan Animasi Memblokir Tombol Clincoo",
          desc: "Delay hover 400ms membuat CTA terasa rusak. Interaksi harus segera merespons.",
          content: "<p class=\"mb-4\">Kartu harga dengan transform 0.6s sering menunda klik. Pengunjung menekan dua kali dan form terkirim dobel.</p><p class=\"mb-4\">Pakai transisi pendek pada warna atau bayangan, bukan pada pointer-events. Tombol harus bisa diklik di frame pertama.</p><p class=\"mb-4\">Uji di pratinjau HP editor.clincoo.buzz: sentuh CTA saat animasi masuk masih jalan. Aksi harus langsung.</p><p class=\"mb-4\">Minta AI memotong durasi, bukan menambah JS timeline. Tolak animasi yang men-disable tombol sementara.</p><p class=\"mb-4\">Clincoo adalah situs statis. Gerak yang menahan klik merusak konversi lebih dari tipografi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Let Animation Block Clincoo Buttons",
          desc: "A 400ms hover delay makes the CTA feel broken. Interaction should respond at once.",
          content: "<p class=\"mb-4\">A pricing card with a 0.6s transform often delays the click. Visitors tap twice and the form sends twice.</p><p class=\"mb-4\">Use short transitions on color or shadow, not on pointer-events. The button must be clickable on the first frame.</p><p class=\"mb-4\">Test in the editor.clincoo.buzz phone preview: tap the CTA while the enter animation is still running. The action should fire immediately.</p><p class=\"mb-4\">Ask the AI to shorten duration, not to add a JS timeline. Refuse animation that disables the button for a moment.</p><p class=\"mb-4\">Clincoo is a static site. Motion that holds a click hurts conversion more than type does.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "animasi-css-cukup-tanpa-pustaka-berat",
      langs: {
        "id": {
          title: "Pakai Animasi CSS di Clincoo, Bukan Pustaka Berat",
          desc: "Fade dan slide cukup dengan @keyframes. Library 40KB jarang sepadan untuk landing statis.",
          content: "<p class=\"mb-4\">AI sering menyarankan GSAP atau Lottie untuk hero Clincoo. File tambahan memperlambat deploy pertama di HP.</p><p class=\"mb-4\">Tulis @keyframes opacity atau transform di CSS proyek. Satu kelas .fade-in sudah menutup kebutuhan landing.</p><p class=\"mb-4\">Ukur di pratinjau: halaman harus usable sebelum animasi selesai. Jika teks menunggu JS, buang pustaka.</p><p class=\"mb-4\">Minta AI satu file CSS. Tolak npm animation pack yang tidak bisa kamu debug di editor.clincoo.buzz.</p><p class=\"mb-4\">Clincoo menayangkan apa yang kamu simpan. Gerak sederhana yang kamu pahami lebih aman daripada plugin.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use CSS Animation on Clincoo, Not a Heavy Library",
          desc: "Fade and slide need only @keyframes. A 40KB library is rarely worth it on a static landing page.",
          content: "<p class=\"mb-4\">AI often suggests GSAP or Lottie for a Clincoo hero. Extra files slow the first deploy on a phone.</p><p class=\"mb-4\">Write @keyframes for opacity or transform in the project CSS. One .fade-in class covers a landing page.</p><p class=\"mb-4\">Check preview: the page must be usable before animation ends. If copy waits on JS, drop the library.</p><p class=\"mb-4\">Ask the AI for one CSS file. Refuse an npm animation pack you cannot debug in editor.clincoo.buzz.</p><p class=\"mb-4\">Clincoo ships what you save. Simple motion you understand is safer than a plugin.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
