// Clincoo Blog — artikel animasi tambahan 2026-09-22
(function(){
  var extra = [
    {
      id: "animasi-durasi-pendek-200-300ms",
      langs: {
        "id": {
          title: "Batasi Durasi Animasi Clincoo ke 200–300ms",
          desc: "Transisi lebih dari setengah detik terasa lambat. Fade dan hover cukup sepersekian detik.",
          content: "<p class=\"mb-4\">AI sering menulis transition: all 0.8s ease pada kartu Clincoo. Pengunjung menunggu warna tombol berubah sebelum yakin klik berhasil.</p><p class=\"mb-4\">Pakai 200–300ms untuk hover, fokus, dan fade masuk. Cadangkan durasi lebih panjang hanya untuk satu momen hero, bukan setiap kartu.</p><p class=\"mb-4\">Uji di editor.clincoo.buzz: gerakkan kursor cepat antar CTA. Umpan balik harus selesai sebelum mata pindah.</p><p class=\"mb-4\">Minta AI mengubah satu blok transition. Tolak timeline JS yang menumpuk delay.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. Gerak singkat terasa rapi; gerak panjang terasa rusak.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep Clincoo Animation Duration at 200–300ms",
          desc: "A transition longer than half a second feels slow. Fade and hover need only a fraction of a second.",
          content: "<p class=\"mb-4\">AI often writes transition: all 0.8s ease on Clincoo cards. Visitors wait for the button color to change before they trust the click.</p><p class=\"mb-4\">Use 200–300ms for hover, focus, and fade-in. Save a longer duration for one hero moment, not every card.</p><p class=\"mb-4\">Test in editor.clincoo.buzz: move the cursor quickly across CTAs. Feedback should finish before the eye moves on.</p><p class=\"mb-4\">Ask the AI to change one transition block. Refuse a JS timeline that stacks delays.</p><p class=\"mb-4\">Clincoo ships the CSS you save. Short motion feels tidy; long motion feels broken.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "animasi-transform-opacity-bukan-left-top",
      langs: {
        "id": {
          title: "Animasikan transform dan opacity, Bukan left atau top",
          desc: "Menggeser left/top memicu layout ulang. transform hemat dan lebih halus di HP.",
          content: "<p class=\"mb-4\">Template Clincoo kadang menggeser menu dengan left: 0 ke left: 100%. Setiap frame memaksa browser menghitung ulang layout.</p><p class=\"mb-4\">Ganti ke transform: translateX dan opacity. Properti ini biasanya tetap di kompositor, jadi scroll dan ketukan tidak tersendat.</p><p class=\"mb-4\">Cek pratinjau ponsel di editor.clincoo.buzz sambil membuka drawer. Jika teks di belakang ikut bergetar, masih ada properti layout yang dianimasikan.</p><p class=\"mb-4\">Minta AI satu kelas CSS. Tolak jQuery animate pada width, height, top, atau left.</p><p class=\"mb-4\">Clincoo adalah situs statis. Gerak yang memicu reflow merusak kesan cepat lebih dari gambar besar.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Animate transform and opacity, Not left or top",
          desc: "Sliding left/top forces layout. transform is cheaper and smoother on phones.",
          content: "<p class=\"mb-4\">Clincoo templates sometimes slide a menu from left: 0 to left: 100%. Every frame makes the browser relayout.</p><p class=\"mb-4\">Switch to transform: translateX and opacity. Those properties usually stay on the compositor, so scroll and taps do not hitch.</p><p class=\"mb-4\">Check the phone preview in editor.clincoo.buzz while opening the drawer. If text behind it shimmers, a layout property is still animating.</p><p class=\"mb-4\">Ask the AI for one CSS class. Refuse jQuery animate on width, height, top, or left.</p><p class=\"mb-4\">Clincoo is a static site. Motion that triggers reflow hurts the feel of speed more than a large image does.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "animasi-jangan-autoplay-video-latar",
      langs: {
        "id": {
          title: "Jangan Autoplay Video Latar di Hero Clincoo",
          desc: "Video looping di hero memakan data dan mengabaikan Reduce Motion. Gambar diam plus CSS cukup.",
          content: "<p class=\"mb-4\">AI suka menempel <video autoplay muted loop> di belakang judul. Di HP, file 8MB menghabiskan kuota sebelum CTA terbaca.</p><p class=\"mb-4\">Pakai foto statis, CSS gradient, atau satu loop CSS ringan. Jika video wajib, jangan autoplay; beri tombol putar dan poster.</p><p class=\"mb-4\">Hormati prefers-reduced-motion: sembunyikan video saat OS meminta gerak minimal.</p><p class=\"mb-4\">Uji di editor.clincoo.buzz dengan jaringan diperlambat. Hero harus terbaca sebelum berkas media selesai.</p><p class=\"mb-4\">Clincoo men-deploy file apa adanya. Video yang dipaksa jalan bukan animasi; itu beban.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Do Not Autoplay a Background Video on a Clincoo Hero",
          desc: "A looping hero video burns data and ignores Reduce Motion. A still plus CSS is enough.",
          content: "<p class=\"mb-4\">AI likes to drop <video autoplay muted loop> behind the title. On a phone, an 8MB file spends the data budget before the CTA is read.</p><p class=\"mb-4\">Use a still photo, a CSS gradient, or one light CSS loop. If video is required, do not autoplay; give a play control and a poster.</p><p class=\"mb-4\">Honor prefers-reduced-motion: hide the video when the OS asks for less movement.</p><p class=\"mb-4\">Test in editor.clincoo.buzz with the network throttled. The hero must be readable before the media file finishes.</p><p class=\"mb-4\">Clincoo deploys files as saved. Forced video is not animation; it is load.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "animasi-skeleton-bukan-spinner-lama",
      langs: {
        "id": {
          title: "Pakai Skeleton Pendek, Bukan Spinner yang Tidak Berhenti",
          desc: "Spinner berputar tanpa akhir terasa error. Placeholder bentuk kartu lebih jujur.",
          content: "<p class=\"mb-4\">Halaman Clincoo kadang menampilkan loader CSS selamanya karena skrip hitung tinggi tidak selesai. Pengunjung mengira situs rusak.</p><p class=\"mb-4\">Jika kamu menunda konten, tampilkan kerangka kartu 200ms lalu konten nyata. Jangan spinner di tengah viewport tanpa batas waktu.</p><p class=\"mb-4\">Situs statis Clincoo jarang butuh loader. Jika HTML sudah di berkas, hilangkan overlay.</p><p class=\"mb-4\">Minta AI menghapus spinner yang menempel di body. Tolak setTimeout palsu hanya untuk 'kesan loading'.</p><p class=\"mb-4\">Clincoo menayangkan file statis. Gerak menunggu yang tidak perlu membuat deploy terasa lambat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use a Short Skeleton, Not a Spinner That Never Ends",
          desc: "A spinner that never stops feels like an error. A card-shaped placeholder is more honest.",
          content: "<p class=\"mb-4\">Clincoo pages sometimes show a CSS loader forever because a height script never finishes. Visitors think the site is broken.</p><p class=\"mb-4\">If you delay content, show a card skeleton for 200ms then the real copy. Do not leave a spinner in the middle of the viewport with no timeout.</p><p class=\"mb-4\">A static Clincoo site rarely needs a loader. If the HTML is already in the file, drop the overlay.</p><p class=\"mb-4\">Ask the AI to remove a spinner glued to body. Refuse a fake setTimeout just for a 'loading feel'.</p><p class=\"mb-4\">Clincoo ships static files. Motion that waits for nothing makes the deploy feel slow.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "animasi-uji-di-pratinjau-ponsel",
      langs: {
        "id": {
          title: "Uji Animasi Clincoo di Pratinjau Ponsel sebelum Deploy",
          desc: "Gerak yang halus di desktop sering tersendat di HP. Pratinjau sempit adalah tes wajib.",
          content: "<p class=\"mb-4\">Banyak fade stagger terlihat mahal hanya setelah lebar 360px. Kartu masuk satu per satu dan menunda CTA.</p><p class=\"mb-4\">Buka pratinjau ponsel di editor.clincoo.buzz. Matikan animasi jika daftar produk lebih dari tiga item.</p><p class=\"mb-4\">Sentuh tombol saat animasi masuk masih berjalan. Jika klik terlewat, durasi atau pointer-events salah.</p><p class=\"mb-4\">Minta AI menonaktifkan stagger di breakpoint kecil, bukan menambah requestAnimationFrame.</p><p class=\"mb-4\">Clincoo tidak menguji gerak untukmu. Satu menit di pratinjau HP mencegah rilis yang terasa berat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test Clincoo Animation in the Phone Preview before Deploy",
          desc: "Motion that is smooth on desktop often hitchs on a phone. The narrow preview is a required test.",
          content: "<p class=\"mb-4\">Many staggered fades look expensive only at 360px width. Cards enter one by one and delay the CTA.</p><p class=\"mb-4\">Open the phone preview in editor.clincoo.buzz. Turn animation off if a product list has more than three items.</p><p class=\"mb-4\">Tap the button while the enter animation is still running. If the click misses, duration or pointer-events is wrong.</p><p class=\"mb-4\">Ask the AI to disable stagger at the small breakpoint, not to add requestAnimationFrame.</p><p class=\"mb-4\">Clincoo does not test motion for you. One minute in the phone preview prevents a heavy-feeling release.</p>",
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
