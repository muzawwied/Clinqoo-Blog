// Clincoo Blog — artikel mobile tambahan 2026-09-19
(function(){
  var extra = [
    {
      id: "mobile-viewport-meta-jangan-kunci-zoom",
      langs: {
        "id": {
          title: "Jangan Kunci Zoom di Meta Viewport Situs Clincoo",
          desc: "Viewport yang mematikan pinch-zoom merugikan pengunjung HP. Izinkan skala, rapikan layout.",
          content: "<p class=\"mb-4\">Beberapa template menempel <code>user-scalable=no</code> atau <code>maximum-scale=1</code> supaya layout tidak bergeser. Di HP, itu mengunci orang yang perlu memperbesar teks.</p><p class=\"mb-4\">Di editor Clincoo, buka <code>index.html</code> dan biarkan viewport standar: lebar perangkat, skala awal 1. Perbaiki overflow dengan CSS, bukan dengan mengunci zoom.</p><p class=\"mb-4\">Jika AI menambahkan meta viewport baru, bandingkan dengan yang sudah ada. Satu tag cukup. Dua tag saling menimpa dan hasilnya sulit ditebak di pratinjau.</p><p class=\"mb-4\">Uji pinch di perangkat nyata setelah deploy ke subdomain. Halaman yang bisa dizoom terasa sopan; halaman yang terkunci terasa kaku.</p><p class=\"mb-4\">Akses mobile bukan hanya lebar kolom. Zoom adalah alat baca. Clincoo men-deploy meta apa adanya — pilih yang tidak mengunci jari.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Do Not Lock Zoom in a Clincoo Site Viewport Meta",
          desc: "A viewport that kills pinch-zoom hurts phone visitors. Allow scale and fix the layout instead.",
          content: "<p class=\"mb-4\">Some templates paste <code>user-scalable=no</code> or <code>maximum-scale=1</code> so the layout does not shift. On a phone that locks people who need to enlarge text.</p><p class=\"mb-4\">In the Clincoo editor, open <code>index.html</code> and keep a standard viewport: device width, initial scale 1. Fix overflow with CSS, not by locking zoom.</p><p class=\"mb-4\">If the AI adds a new viewport meta, compare it with the existing one. One tag is enough. Two tags override each other and preview becomes guesswork.</p><p class=\"mb-4\">Test pinch on a real device after you deploy to a subdomain. A page that can zoom feels polite; a locked page feels stiff.</p><p class=\"mb-4\">Mobile access is not only column width. Zoom is a reading tool. Clincoo deploys the meta as written — choose one that does not lock fingers.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "mobile-tautan-telpon-dan-whatsapp-di-hp",
      langs: {
        "id": {
          title: "Tautan Telepon dan WhatsApp yang Benar-benar Bisa Diketuk di HP",
          desc: "href tel: dan wa.me harus berisi nomor bersih. Uji dari ponsel sebelum deploy Clincoo.",
          content: "<p class=\"mb-4\">Tombol Hubungi di desktop hanya terlihat. Di HP, itu harus membuka telepon atau WhatsApp. Nomor dengan spasi, tanda plus ganda, atau teks placeholder merusak tautan.</p><p class=\"mb-4\">Pakai <code>tel:</code> untuk panggilan dan <code>https://wa.me/62...</code> tanpa nol di depan. Hapus spasi di href; tampilkan format ramah manusia di teks tombol.</p><p class=\"mb-4\">Jangan bungkus tautan itu di <code>onclick</code> yang memblokir default. Jika AI menambah skrip pelacak pada klik, uji apakah aplikasi pesan masih terbuka.</p><p class=\"mb-4\">Pratinjau editor di laptop tidak selalu meniru intent HP. Setelah rilis, ketuk sendiri dari ponsel. Satu tautan rusak membuang CTA yang sudah kamu tulis.</p><p class=\"mb-4\">Clincoo menayangkan href mentah. Nomor yang bersih adalah pekerjaan editor, bukan keajaiban deploy.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Phone and WhatsApp Links That Actually Open on a Mobile",
          desc: "tel: and wa.me hrefs need a clean number. Test from a phone before you deploy on Clincoo.",
          content: "<p class=\"mb-4\">A Contact button on desktop is only visual. On a phone it must open the dialer or WhatsApp. Spaces, a double plus, or placeholder digits break the link.</p><p class=\"mb-4\">Use <code>tel:</code> for calls and <code>https://wa.me/62...</code> without a leading zero. Strip spaces from the href; show a human format on the button label.</p><p class=\"mb-4\">Do not wrap that link in an <code>onclick</code> that blocks the default. If the AI adds a tracker on click, test whether the messaging app still opens.</p><p class=\"mb-4\">Laptop preview does not always mimic phone intents. After release, tap it yourself. One broken link wastes the CTA you already wrote.</p><p class=\"mb-4\">Clincoo serves the raw href. A clean number is editor work, not a deploy miracle.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "mobile-form-input-jangan-zoom-saat-fokus",
      langs: {
        "id": {
          title: "Input Form di HP: Font 16px supaya Halaman Tidak Melompat",
          desc: "Input di bawah 16px memicu zoom Safari. Naikkan font field, bukan kunci viewport.",
          content: "<p class=\"mb-4\">Di iPhone, field dengan font kecil sering memaksa zoom saat diketuk. Pengunjung lalu kehilangan konteks navbar dan harus pinch kembali.</p><p class=\"mb-4\">Di CSS proyek Clincoo, set <code>font-size: 16px</code> pada <code>input</code>, <code>select</code>, dan <code>textarea</code> untuk layar sempit. Padding tetap longgar supaya jari tidak salah kolom.</p><p class=\"mb-4\">Cek <code>type</code>: email, tel, dan number memunculkan keyboard yang tepat. Jangan pakai text untuk nomor WhatsApp jika tel sudah cukup.</p><p class=\"mb-4\">Minta AI hanya menyesuaikan CSS form, bukan rewrite markup yang sudah berisi label. Setelah itu uji fokus di HP: halaman tidak boleh meloncat aneh.</p><p class=\"mb-4\">Form yang tenang di seluler meningkatkan pesan yang benar-benar terkirim. Deploy tidak memperbaiki keyboard; CSS-mu yang mengatur.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Phone Form Inputs: Use 16px Type so the Page Does Not Jump",
          desc: "Inputs under 16px trigger Safari zoom. Raise field type instead of locking the viewport.",
          content: "<p class=\"mb-4\">On iPhone, a small-type field often forces zoom on tap. Visitors then lose the navbar and have to pinch back.</p><p class=\"mb-4\">In Clincoo project CSS, set <code>font-size: 16px</code> on <code>input</code>, <code>select</code>, and <code>textarea</code> for narrow screens. Keep padding loose so a finger does not hit the wrong field.</p><p class=\"mb-4\">Check <code>type</code>: email, tel, and number bring the right keyboard. Do not use text for a WhatsApp number when tel is enough.</p><p class=\"mb-4\">Ask the AI only to tune form CSS, not to rewrite markup that already has labels. Then test focus on a phone: the page should not leap.</p><p class=\"mb-4\">A calm mobile form raises the chance a message actually sends. Deploy does not fix the keyboard; your CSS does.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "mobile-jangan-andalkan-hover-di-ponsel",
      langs: {
        "id": {
          title: "Jangan Andalkan Hover untuk Menu Situs Clincoo di Ponsel",
          desc: "Dropdown yang hanya muncul saat hover hilang di HP. Beri tap atau tampilkan tautan langsung.",
          content: "<p class=\"mb-4\">Menu desktop sering memakai hover. Jari tidak punya hover. Di HP, submenu menghilang atau tidak pernah terbuka.</p><p class=\"mb-4\">Pilih salah satu: tautan penting di tingkat pertama, atau tombol yang membuka submenu saat tap. Hindari pola yang butuh mouse diam di atas item.</p><p class=\"mb-4\">Jika AI menulis CSS <code>:hover</code> untuk menampilkan harga atau tooltip, sediakan alternatif <code>:focus-visible</code> dan state aktif. Uji di pratinjau sempit tanpa kursor.</p><p class=\"mb-4\">Kartu produk yang muncul detail saat hover harus punya halaman atau blok yang bisa diketuk. Jangan sembunyikan harga hanya di hover.</p><p class=\"mb-4\">Clincoo tidak mengubah event pointer untukmu. Interaksi yang hidup di mouse harus punya jalan setara di sentuhan.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Do Not Rely on Hover for a Clincoo Menu on Phones",
          desc: "A dropdown that only appears on hover vanishes on a phone. Offer a tap or show the links.",
          content: "<p class=\"mb-4\">Desktop menus often use hover. A finger has no hover. On a phone the submenu vanishes or never opens.</p><p class=\"mb-4\">Pick one: put important links on the first level, or a button that opens the submenu on tap. Avoid a pattern that needs a resting mouse.</p><p class=\"mb-4\">If the AI writes <code>:hover</code> CSS to reveal a price or tooltip, add <code>:focus-visible</code> and an active state. Test in a narrow preview without a cursor.</p><p class=\"mb-4\">Product cards that show detail on hover need a page or a tappable block. Do not hide the price only on hover.</p><p class=\"mb-4\">Clincoo does not rewrite pointer events for you. An interaction that lives on a mouse needs an equal path on touch.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "mobile-uji-portrait-dan-landscape",
      langs: {
        "id": {
          title: "Uji Portrait dan Landscape sebelum Rilis Subdomain Clincoo",
          desc: "Layout yang pas tegak bisa pecah saat HP diputar. Cek hero, form, dan menu mendatar.",
          content: "<p class=\"mb-4\">Banyak orang membaca di bus dengan HP mendatar. Hero tinggi tetap bisa mendorong CTA keluar layar. Form panjang di landscape terasa berbeda.</p><p class=\"mb-4\">Setelah pratinjau sempit tegak, putar perangkat atau sempitkan tinggi jendela. Lihat apakah navbar menumpuk dua baris dan menutup konten.</p><p class=\"mb-4\">Video atau embed dengan tinggi tetap sering overflow di landscape. Pakai rasio dan <code>max-height</code> sederhana, bukan skrip orientasi rumit.</p><p class=\"mb-4\">Minta AI menyesuaikan media query untuk tinggi pendek jika hero terlalu agresif. Tolak rewrite seluruh grid hanya karena satu putaran layar.</p><p class=\"mb-4\">Rilis Clincoo yang sudah dilihat dalam dua orientasi lebih jarang mengejutkan. Putar HP satu kali sebelum membagikan URL.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Test Portrait and Landscape before You Release a Clincoo Subdomain",
          desc: "A layout that fits upright can break when the phone rotates. Check the hero, form, and wide menu.",
          content: "<p class=\"mb-4\">Many people read on a bus with the phone sideways. A tall fixed hero can push the CTA off screen. A long form feels different in landscape.</p><p class=\"mb-4\">After a tall narrow preview, rotate the device or shrink the window height. See whether the navbar wraps two lines and covers content.</p><p class=\"mb-4\">Video or embeds with a fixed height often overflow in landscape. Use a simple ratio and <code>max-height</code>, not a complex orientation script.</p><p class=\"mb-4\">Ask the AI to tune a media query for short viewports if the hero is aggressive. Refuse a full grid rewrite for one rotation.</p><p class=\"mb-4\">A Clincoo release seen in two orientations surprises less. Rotate the phone once before you share the URL.</p>",
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
