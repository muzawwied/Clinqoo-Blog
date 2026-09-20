// Clincoo Blog — artikel mobile tambahan 2026-09-20
(function(){
  var extra = [
    {
      id: "mobile-safe-area-notch-padding",
      langs: {
        "id": {
          title: "Hormati Safe Area Notch di Header Situs Clincoo",
          desc: "Ponsel dengan lekukan memotong navbar tetap. Tambah padding env(safe-area-inset-*).",
          content: "<p class=\"mb-4\">Header fixed di template Clincoo sering menempel ke tepi atas. Di ponsel berlekukan, jam dan kamera menutupi logo atau menu pertama.</p><p class=\"mb-4\">Tambahkan padding-top: env(safe-area-inset-top) pada header tetap, dan padding bawah serupa jika CTA menempel di tepi layar.</p><p class=\"mb-4\">Meta viewport viewport-fit=cover diperlukan agar nilai safe-area tidak nol. Cek di pratinjau HP, bukan hanya jendela desktop yang diperkecil.</p><p class=\"mb-4\">Minta AI hanya menyentuh CSS header. Jangan biarkan ia menulis deteksi perangkat dengan JavaScript berat.</p><p class=\"mb-4\">Clincoo tidak menyesuaikan notch otomatis. Safe area adalah CSS yang kamu pasang sebelum rilis.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Respect the Notch Safe Area on a Clincoo Header",
          desc: "Phones with a cutout clip a sticky navbar. Add env(safe-area-inset-*) padding.",
          content: "<p class=\"mb-4\">A fixed header in a Clincoo template often sits flush with the top edge. On a notched phone the clock and camera cover the logo or the first menu item.</p><p class=\"mb-4\">Add padding-top: env(safe-area-inset-top) on the sticky header, and similar bottom padding if a CTA hugs the screen edge.</p><p class=\"mb-4\">A viewport-fit=cover meta is required or the safe-area values stay zero. Check on a phone preview, not only a shrunken desktop window.</p><p class=\"mb-4\">Ask the AI to touch header CSS only. Do not let it write heavy JavaScript device detection.</p><p class=\"mb-4\">Clincoo does not adapt to notches by itself. Safe area is CSS you add before release.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "mobile-uji-form-keyboard-ponsel",
      langs: {
        "id": {
          title: "Uji Form dengan Keyboard Ponsel sebelum Deploy",
          desc: "Keyboard virtual menutupi tombol kirim. Cek inputmode, type, dan posisi CTA di pratinjau HP Clincoo.",
          content: "<p class=\"mb-4\">Form yang rapi di desktop sering gagal di ponsel karena keyboard menutupi tombol kirim atau field berikutnya.</p><p class=\"mb-4\">Pakai type yang tepat: email, tel, number. Tambah inputmode jika perlu. Label tetap terlihat saat field aktif.</p><p class=\"mb-4\">Gulir pratinjau HP sampai keyboard terbuka. Pastikan tombol kirim masih bisa diketuk dan tidak tertutup navbar tetap.</p><p class=\"mb-4\">Minta AI hanya mengubah type dan inputmode pada satu form. Jangan izinkan pustaka mask angka yang berat.</p><p class=\"mb-4\">Clincoo tidak menyesuaikan keyboard otomatis. Uji ketuk nyata di ponsel sebelum subdomain dianggap selesai.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Test the Form with a Phone Keyboard before You Deploy",
          desc: "The virtual keyboard covers the submit button. Check inputmode, type, and CTA position in the Clincoo phone preview.",
          content: "<p class=\"mb-4\">A form that looks tidy on desktop often fails on a phone because the keyboard covers the submit button or the next field.</p><p class=\"mb-4\">Use the right type: email, tel, number. Add inputmode when it helps. Keep the label visible while the field is focused.</p><p class=\"mb-4\">Scroll the phone preview with the keyboard open. Make sure submit is still tappable and not hidden by a fixed navbar.</p><p class=\"mb-4\">Ask the AI only to change type and inputmode on one form. Do not allow a heavy number-mask library.</p><p class=\"mb-4\">Clincoo does not adapt the keyboard for you. Do a real tap test on a phone before the subdomain is treated as done.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["mobile"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["mobile"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
