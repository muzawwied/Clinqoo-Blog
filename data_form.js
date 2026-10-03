// Clincoo Docs — kategori Form HTML (Oktober 2026)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["form"] = {
 "names": {
  "id": "Form HTML",
  "en": "HTML Forms"
 },
 "articles": [
  {
   "id": "form-hubungkan-label-dengan-for",
   "langs": {
    "id": {
     "title": "Cara Hubungkan Label dengan Input lewat for",
     "desc": "Tata cara menautkan label dan input di form Clincoo supaya klik teks label ikut fokus ke isian dan pembaca layar menyebut namanya.",
     "content": "<p class=\"mb-4\">Placeholder bukan nama isian. Kalau label hanya teks di sebelah input, klik pada teks itu tidak memindahkan fokus. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> hubungkan keduanya dengan for dan id.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Samakan for dan id</h2><p class=\"mb-4\">Beri input id yang unik di halaman itu, misalnya id=\"email-kontak\". Label memakai for=\"email-kontak\". Jangan mengulang id yang sama di dua isian. Membungkus input di dalam label juga sah, tetapi for tetap lebih jelas kalau ada elemen di antara teks dan input.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan mengandalkan placeholder</h2><p class=\"mb-4\">Placeholder hilang saat pengguna mengetik. Nama isian harus tetap terlihat. Untuk tombol ikon di samping input, tambahkan aria-label, bukan title saja.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> klik teks label: kursor harus masuk ke input. Tab berurutan harus mengucapkan nama label, bukan “edit text” kosong.</p>",
     "source": "MDN — The Label element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label",
     "sourceSnippet": "The label element represents a caption for an item in a user interface.",
     "source2": "MDN — HTML label for",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Connect a Label to an Input with for",
     "desc": "How to associate a label with an input on a Clincoo form so a click on the label focuses the field and screen readers announce its name.",
     "content": "<p class=\"mb-4\">A placeholder is not a field name. If the label is only text beside the input, clicking that text does not move focus. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> connect them with for and id.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match for and id</h2><p class=\"mb-4\">Give the input an id unique on that page, for example id=\"email-kontak\". The label uses for=\"email-kontak\". Do not reuse the same id on two fields. Wrapping the input inside the label is also valid, but for is clearer when markup sits between the text and the input.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not rely on the placeholder</h2><p class=\"mb-4\">The placeholder disappears while someone types. The field name should stay visible. For an icon button next to the input, add an aria-label, not only a title.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> click the label text: the cursor should enter the input. Tab order should announce the label name, not an empty “edit text”.</p>",
     "source": "MDN — The Label element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label",
     "sourceSnippet": "The label element represents a caption for an item in a user interface.",
     "source2": "MDN — HTML label for",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "form-validasi-bawaan-dan-setcustomvalidity",
   "langs": {
    "id": {
     "title": "Cara Pakai Validasi Bawaan dan setCustomValidity",
     "desc": "Tata cara memakai required, type, dan setCustomValidity di form Clincoo supaya pesan error muncul tanpa memuat ulang halaman.",
     "content": "<p class=\"mb-4\">Form yang hanya dicek setelah fetch sering mengirim data kosong. Browser sudah punya constraint validation. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pakai atribut dulu, baru pesan kustom.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Mulai dari atribut</h2><p class=\"mb-4\">required menahan submit kosong. type=\"email\" menolak teks yang bukan email. minlength menahan kata sandi yang terlalu pendek. Panggil reportValidity() kalau kamu mencegah submit dan ingin gelembung error tampil.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai setCustomValidity untuk aturan bisnis</h2><p class=\"mb-4\">Kalau dua isian sandi tidak sama, setCustomValidity(\"Sandi tidak sama\") pada input kedua, lalu reportValidity(). Kalau sudah sama, panggil setCustomValidity(\"\") supaya form tidak terkunci selamanya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan hanya mewarnai border</h2><p class=\"mb-4\">Warna merah tanpa teks tidak terbaca. Di preview <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> kirim form kosong dan form yang gagal aturan kustom. Pesan harus menyebut isian mana yang salah.</p>",
     "source": "MDN — Constraint validation",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation",
     "sourceSnippet": "The constraint validation API lets you check form values against constraints and surface errors to the user.",
     "source2": "MDN — setCustomValidity()",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity",
     "source3": "Clincoo App",
     "source3Url": "https://app.clincoo.buzz/"
    },
    "en": {
     "title": "How to Use Built-in Validation and setCustomValidity",
     "desc": "How to use required, type, and setCustomValidity on a Clincoo form so the error message appears without reloading the page.",
     "content": "<p class=\"mb-4\">A form that is checked only after fetch often sends empty data. The browser already has constraint validation. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> start with attributes, then add a custom message.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Start with attributes</h2><p class=\"mb-4\">required blocks an empty submit. type=\"email\" rejects text that is not an email. minlength blocks a password that is too short. Call reportValidity() if you prevent submit and still want the error bubble.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use setCustomValidity for business rules</h2><p class=\"mb-4\">If two password fields do not match, setCustomValidity(\"Passwords do not match\") on the second input, then reportValidity(). When they match, call setCustomValidity(\"\") so the form is not stuck forever.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not only paint the border</h2><p class=\"mb-4\">A red border without text is not announced. In the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview submit an empty form and a form that fails the custom rule. The message should name the field that is wrong.</p>",
     "source": "MDN — Constraint validation",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation",
     "sourceSnippet": "The constraint validation API lets you check form values against constraints and surface errors to the user.",
     "source2": "MDN — setCustomValidity()",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity",
     "source3": "Clincoo App",
     "source3Url": "https://app.clincoo.buzz/"
    }
   }
  },
  {
   "id": "form-isi-autocomplete-yang-tepat",
   "langs": {
    "id": {
     "title": "Cara Isi Autocomplete yang Tepat pada Form",
     "desc": "Tata cara memakai atribut autocomplete di form Clincoo supaya peramban dan pengelola sandi mengisi nama, email, dan alamat dengan benar.",
     "content": "<p class=\"mb-4\">Autocomplete off pada semua input membuat pengguna mengetik ulang data yang sudah tersimpan. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> isi token yang sesuai, bukan satu nilai untuk seluruh form.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai token standar</h2><p class=\"mb-4\">Nama: autocomplete=\"name\". Email: email. Telepon: tel. Alamat jalan: street-address. Kota: address-level2. Untuk sandi baru pakai new-password, untuk masuk pakai current-password. Jangan menamai input \"password\" lalu memasang autocomplete=\"off\".</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu form, satu tujuan</h2><p class=\"mb-4\">Form masuk dan form daftar sebaiknya terpisah. Mencampur current-password dan new-password di form yang sama membingungkan pengelola sandi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka form kontak selebar ponsel. Ketuk isian email dan pastikan saran muncul. Jangan menaruh autocomplete=\"off\" hanya karena desain ingin terlihat kosong.</p>",
     "source": "MDN — autocomplete attribute",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete",
     "sourceSnippet": "The autocomplete attribute lets web developers specify what permission the user agent has to provide automated assistance in filling out form field values.",
     "source2": "HTML spec — autofill",
     "source2Url": "https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Set the Right Autocomplete on a Form",
     "desc": "How to set the autocomplete attribute on a Clincoo form so the browser and password manager fill name, email, and address correctly.",
     "content": "<p class=\"mb-4\">autocomplete off on every input forces people to retype data they already saved. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> use the matching token, not one value for the whole form.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use standard tokens</h2><p class=\"mb-4\">Name: autocomplete=\"name\". Email: email. Phone: tel. Street: street-address. City: address-level2. For a new password use new-password, for sign-in use current-password. Do not name an input \"password\" and then set autocomplete=\"off\".</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One form, one job</h2><p class=\"mb-4\">Sign-in and sign-up should be separate forms. Mixing current-password and new-password in the same form confuses password managers.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the contact form at phone width. Tap the email field and confirm suggestions appear. Do not set autocomplete=\"off\" only because the design should look empty.</p>",
     "source": "MDN — autocomplete attribute",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete",
     "sourceSnippet": "The autocomplete attribute lets web developers specify what permission the user agent has to provide automated assistance in filling out form field values.",
     "source2": "HTML spec — autofill",
     "source2Url": "https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "form-kelompokkan-radio-dengan-fieldset",
   "langs": {
    "id": {
     "title": "Cara Kelompokkan Radio dengan fieldset dan legend",
     "desc": "Tata cara membungkus pilihan radio di form Clincoo dengan fieldset dan legend supaya kelompoknya punya nama, bukan hanya opsi yang terpisah.",
     "content": "<p class=\"mb-4\">Tiga radio tanpa kelompok terdengar seperti tiga pertanyaan. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bungkus dengan fieldset dan beri legend.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu name untuk satu kelompok</h2><p class=\"mb-4\">Semua radio dalam kelompok yang sama memakai name yang sama, misalnya name=\"paket\". Nilai value yang berbeda. Legend menulis pertanyaan: “Pilih paket”. Label tiap radio menulis jawaban: Hemat, Standar, Bisnis.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan ganti legend dengan div</h2><p class=\"mb-4\">Judul di dalam div tidak masuk sebagai nama kelompok. fieldset boleh distyle, termasuk border none, selama legend tetap ada. Untuk checkbox yang independen, jangan paksa satu name.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek keyboard</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> Tab masuk ke kelompok, lalu panah memindahkan pilihan. Pembaca layar harus menyebut legend lalu opsi yang aktif.</p>",
     "source": "MDN — The Fieldset element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset",
     "sourceSnippet": "The fieldset element is used to group several controls as well as labels within a web form.",
     "source2": "MDN — The Legend element",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Group Radios with fieldset and legend",
     "desc": "How to wrap radio choices on a Clincoo form with fieldset and legend so the group has a name, not only loose options.",
     "content": "<p class=\"mb-4\">Three radios without a group sound like three separate questions. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> wrap them in a fieldset and give it a legend.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One name for one group</h2><p class=\"mb-4\">Every radio in the same group shares a name, for example name=\"paket\". The value differs. The legend states the question: “Choose a plan”. Each radio label states the answer: Starter, Standard, Business.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not replace legend with a div</h2><p class=\"mb-4\">A heading inside a div is not the group name. A fieldset can be styled, including border none, as long as the legend stays. For independent checkboxes, do not force one shared name.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the keyboard</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> Tab into the group, then arrow between choices. A screen reader should announce the legend, then the active option.</p>",
     "source": "MDN — The Fieldset element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset",
     "sourceSnippet": "The fieldset element is used to group several controls as well as labels within a web form.",
     "source2": "MDN — The Legend element",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "form-cegah-kirim-ganda",
   "langs": {
    "id": {
     "title": "Cara Cegah Form Terkirim Dua Kali",
     "desc": "Tata cara menonaktifkan tombol kirim setelah submit di form Clincoo supaya klik ganda tidak membuat dua permintaan.",
     "content": "<p class=\"mb-4\">Tombol kirim yang tetap aktif selama fetch sering membuat dua pesanan atau dua pesan. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> kunci tombol setelah submit yang lolos validasi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kunci setelah cek validity</h2><p class=\"mb-4\">Pada event submit, kalau form.checkValidity() gagal, jangan mengunci tombol. Kalau lolos, preventDefault bila kamu mengirim lewat fetch, lalu setel disabled pada tombol dan ganti teksnya menjadi “Mengirim…”. Simpan teks semula.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kembalikan tombol kalau gagal</h2><p class=\"mb-4\">Di blok catch, hapus disabled dan kembalikan teks. Jangan meninggalkan tombol mati setelah jaringan putus. Untuk permintaan yang membuat data, kirim kunci idempotensi yang sama saat pengguna mengulang, bukan id baru tiap klik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji klik ganda</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> klik kirim dua kali cepat. Tab jaringan harus menunjukkan satu permintaan. Setelah gagal, tombol harus bisa diklik lagi.</p>",
     "source": "MDN — submit event",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event",
     "sourceSnippet": "The submit event fires when a form is submitted.",
     "source2": "MDN — HTMLFormElement.checkValidity()",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/checkValidity",
     "source3": "Clincoo App",
     "source3Url": "https://app.clincoo.buzz/"
    },
    "en": {
     "title": "How to Stop a Form from Submitting Twice",
     "desc": "How to disable the submit button after submit on a Clincoo form so a double click does not create two requests.",
     "content": "<p class=\"mb-4\">A submit button that stays active during fetch often creates two orders or two messages. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> lock the button after a submit that passes validation.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lock only after a validity check</h2><p class=\"mb-4\">On the submit event, if form.checkValidity() fails, do not lock the button. If it passes, preventDefault when you send with fetch, then set disabled on the button and change its text to “Sending…”. Keep the original text.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Restore the button on failure</h2><p class=\"mb-4\">In the catch block, remove disabled and restore the text. Do not leave a dead button after the network drops. For a request that creates data, send the same idempotency key when the person retries, not a new id on every click.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test a double click</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> click submit twice quickly. The network panel should show one request. After a failure, the button should be clickable again.</p>",
     "source": "MDN — submit event",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event",
     "sourceSnippet": "The submit event fires when a form is submitted.",
     "source2": "MDN — HTMLFormElement.checkValidity()",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/checkValidity",
     "source3": "Clincoo App",
     "source3Url": "https://app.clincoo.buzz/"
    }
   }
  }
 ]
};
