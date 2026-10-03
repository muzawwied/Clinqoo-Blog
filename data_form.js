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
,
  {
   "id": "form-textarea-rows-dan-maxlength",
   "langs": {
    "id": {
     "title": "Cara Atur Textarea: rows, maxlength, dan label",
     "desc": "Tata cara memasang textarea di form Clincoo dengan label, rows, dan maxlength supaya pesan panjang tetap terbaca dan tidak terpotong diam-diam.",
     "content": "<p class=\"mb-4\">Textarea bukan input satu baris yang dipaksa tinggi. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pesan, catatan, atau alamat panjang memakai textarea dengan nama yang jelas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri label dan tinggi awal</h2><p class=\"mb-4\">Hubungkan label lewat for dan id. Atribut rows menentukan tinggi awal, misalnya rows=\"4\". Jangan mengunci tinggi dengan CSS yang memotong teks. Pengguna harus bisa melihat beberapa baris sekaligus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Batasi panjang dengan maxlength</h2><p class=\"mb-4\">Kalau backend menolak lebih dari 500 karakter, tulis maxlength=\"500\" pada textarea. Tampilkan sisa karakter di dekat isian jika batasnya ketat. Jangan hanya memotong di server tanpa pesan di halaman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ketik teks yang melewati batas. Peramban harus menahan ketikan, dan label tetap terbacakan oleh pembaca layar. Simpan contoh yang lolos di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya pola yang sama dipakai di form lain.</p>",
     "source": "MDN — The Textarea element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea",
     "sourceSnippet": "The textarea element represents a multiline plain-text editing control.",
     "source2": "MDN — HTML maxlength attribute",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/maxlength",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Set Up a Textarea: rows, maxlength, and a Label",
     "desc": "How to add a textarea on a Clincoo form with a label, rows, and maxlength so long messages stay readable and are not cut off silently.",
     "content": "<p class=\"mb-4\">A textarea is not a single-line input forced to be tall. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> messages, notes, or long addresses use a textarea with a clear name.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Give it a label and a starting height</h2><p class=\"mb-4\">Connect the label with for and id. The rows attribute sets the starting height, for example rows=\"4\". Do not lock the height with CSS that clips text. People should see several lines at once.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cap the length with maxlength</h2><p class=\"mb-4\">If the backend rejects more than 500 characters, set maxlength=\"500\" on the textarea. Show the remaining count near the field when the limit is tight. Do not only trim on the server with no message on the page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> type past the limit. The browser should stop the extra characters, and a screen reader should still announce the label. Keep a passing example on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so other forms reuse the same pattern.</p>",
     "source": "MDN — The Textarea element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea",
     "sourceSnippet": "The textarea element represents a multiline plain-text editing control.",
     "source2": "MDN — HTML maxlength attribute",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/maxlength",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "form-select-opsi-kosong-disabled",
   "langs": {
    "id": {
     "title": "Cara Buat Opsi Kosong di Select sebagai Placeholder",
     "desc": "Tata cara menambah opsi pertama yang disabled dan selected di select Clincoo supaya pengguna memilih nilai sungguhan, bukan label palsu.",
     "content": "<p class=\"mb-4\">Select selalu punya nilai, bahkan sebelum pengguna menyentuhnya. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jangan jadikan opsi pertama sebagai data sungguhan kalau itu hanya petunjuk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Opsi pertama disabled dan selected</h2><p class=\"mb-4\">Tulis option value=\"\" disabled selected. Teksnya boleh “Pilih paket”. Karena value kosong, required pada select gagal saat belum ada pilihan. Jangan memakai option yang bisa dikirim sebagai nama produk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan andalkan option pertama yang valid</h2><p class=\"mb-4\">Kalau opsi pertama adalah paket termurah dan selected, form bisa terkirim tanpa sengaja. Placeholder harus tidak bisa dipilih ulang setelah pengguna memilih yang lain, kecuali Anda memang ingin mengizinkan kosong.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji keyboard</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka select dengan keyboard. Opsi kosong tidak boleh ikut terkirim. Setelah memilih, label tetap terlihat di samping select, bukan hanya di dalam daftar.</p>",
     "source": "MDN — The Select element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select",
     "sourceSnippet": "The select element represents a control for selecting amongst a set of options.",
     "source2": "MDN — HTML option element",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option",
     "source3": "Clincoo App",
     "source3Url": "https://app.clincoo.buzz/"
    },
    "en": {
     "title": "How to Use an Empty Select Option as a Placeholder",
     "desc": "How to add a disabled, selected first option on a Clincoo select so people pick a real value instead of a fake label.",
     "content": "<p class=\"mb-4\">A select always has a value, even before anyone touches it. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> do not treat the first option as real data if it is only a hint.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">First option disabled and selected</h2><p class=\"mb-4\">Write option value=\"\" disabled selected. The text can be “Choose a plan”. Because the value is empty, required on the select fails until a choice is made. Do not use an option that would be submitted as a product name.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not rely on a valid first option</h2><p class=\"mb-4\">If the first option is the cheapest plan and selected, the form can be sent by accident. The placeholder should not be selectable again after a real choice, unless empty is intentionally allowed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test the keyboard</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the select with the keyboard. The empty option must not be submitted. After a choice, the label stays beside the select, not only inside the list.</p>",
     "source": "MDN — The Select element",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select",
     "sourceSnippet": "The select element represents a control for selecting amongst a set of options.",
     "source2": "MDN — HTML option element",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option",
     "source3": "Clincoo App",
     "source3Url": "https://app.clincoo.buzz/"
    }
   }
  },
  {
   "id": "form-checkbox-value-dan-name",
   "langs": {
    "id": {
     "title": "Cara Isi name dan value pada Checkbox",
     "desc": "Tata cara memberi name dan value pada checkbox Clincoo supaya hanya yang dicentang yang terkirim, dan setiap kotak punya label sendiri.",
     "content": "<p class=\"mb-4\">Checkbox yang tidak dicentang tidak ikut terkirim. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> itu sering mengejutkan kalau Anda mengharapkan nilai “tidak”.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu name, value yang bermakna</h2><p class=\"mb-4\">Beri name yang sama untuk kelompok, misalnya name=\"topik\", dan value berbeda: \"deploy\" atau \"seo\". Jangan mengandalkan value bawaan \"on\". Label menempel lewat for, bukan teks yang hanya ditulis di sebelahnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kalau perlu nilai tidak dicentang</h2><p class=\"mb-4\">Tambahkan input hidden dengan name yang sama dan value=\"0\" sebelum checkbox. Saat dicentang, checkbox menimpa nilai itu di sebagian server. Dokumentasikan perilaku ini supaya tidak dikira bug.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek payload</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> kirim form dengan satu kotak kosong dan satu tercentang. Panel jaringan hanya boleh memuat value kotak yang dicentang, plus hidden jika Anda memang menambahkannya.</p>",
     "source": "MDN — input type checkbox",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox",
     "sourceSnippet": "A checkbox is checked (ticked) or unchecked.",
     "source2": "MDN — HTML input name",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Set name and value on a Checkbox",
     "desc": "How to set name and value on a Clincoo checkbox so only checked boxes are submitted, and each box has its own label.",
     "content": "<p class=\"mb-4\">An unchecked checkbox is not submitted. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> that surprises people who expected a “no” value.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One name, a meaningful value</h2><p class=\"mb-4\">Use the same name for the group, for example name=\"topik\", and different values: \"deploy\" or \"seo\". Do not rely on the default value \"on\". Attach the label with for, not text merely sitting beside the box.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">If you need an unchecked value</h2><p class=\"mb-4\">Add a hidden input with the same name and value=\"0\" before the checkbox. When checked, the checkbox overrides that value on many servers. Document this so it is not treated as a bug.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the payload</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> submit with one box empty and one checked. The network panel should include only the checked value, plus the hidden field if you added one.</p>",
     "source": "MDN — input type checkbox",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox",
     "sourceSnippet": "A checkbox is checked (ticked) or unchecked.",
     "source2": "MDN — HTML input name",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  },
  {
   "id": "form-input-file-accept-tipe",
   "langs": {
    "id": {
     "title": "Cara Batasi Tipe File dengan accept",
     "desc": "Tata cara memakai accept pada input file di form Clincoo supaya dialog berkas menyaring gambar atau PDF, tanpa menganggap itu validasi keamanan.",
     "content": "<p class=\"mb-4\">Atribut accept hanya membantu dialog berkas. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tetap periksa tipe dan ukuran di server, karena pengguna bisa mengubah berkas yang dipilih.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis tipe yang diizinkan</h2><p class=\"mb-4\">Untuk gambar: accept=\"image/png,image/jpeg,image/webp\". Untuk satu PDF: accept=\"application/pdf,.pdf\". Jangan tulis accept=\"*\" kalau Anda hanya ingin gambar. Tambahkan label yang menyebut batas, misalnya “PNG atau JPEG, maks 2 MB”.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">accept bukan pagar keamanan</h2><p class=\"mb-4\">Peramban bisa mengabaikan saringan. Skrip harus menolak tipe lain sebelum unggah, dan server mengulang pemeriksaan. Jangan menampilkan nama berkas mentah tanpa escape.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka pemilih berkas. Daftar harus condong ke tipe yang diizinkan. Coba pilih berkas lain lewat “semua file” jika peramban mengizinkan, lalu pastikan form menolaknya dengan pesan di dekat input.</p>",
     "source": "MDN — input type file",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file",
     "sourceSnippet": "The accept attribute defines the file types the file input should accept.",
     "source2": "MDN — HTML attribute accept",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept",
     "source3": "Clincoo App",
     "source3Url": "https://app.clincoo.buzz/"
    },
    "en": {
     "title": "How to Limit File Types with accept",
     "desc": "How to use accept on a file input in a Clincoo form so the file dialog filters images or PDFs, without treating that as a security check.",
     "content": "<p class=\"mb-4\">The accept attribute only helps the file dialog. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> still check type and size on the server, because someone can change the chosen file.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">List the allowed types</h2><p class=\"mb-4\">For images: accept=\"image/png,image/jpeg,image/webp\". For a single PDF: accept=\"application/pdf,.pdf\". Do not write accept=\"*\" if you only want images. Add a label that states the limit, for example “PNG or JPEG, max 2 MB”.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">accept is not a security fence</h2><p class=\"mb-4\">The browser can ignore the filter. Script should reject other types before upload, and the server repeats the check. Do not render a raw file name without escaping.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the file picker. The list should favor the allowed types. Try another file via “all files” if the browser allows it, and confirm the form rejects it with a message next to the input.</p>",
     "source": "MDN — input type file",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file",
     "sourceSnippet": "The accept attribute defines the file types the file input should accept.",
     "source2": "MDN — HTML attribute accept",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept",
     "source3": "Clincoo App",
     "source3Url": "https://app.clincoo.buzz/"
    }
   }
  },
  {
   "id": "form-method-post-untuk-data-sensitif",
   "langs": {
    "id": {
     "title": "Cara Pilih method POST untuk Data Sensitif",
     "desc": "Tata cara memakai method post pada form Clincoo supaya sandi dan data pribadi tidak masuk URL, riwayat, atau log referer.",
     "content": "<p class=\"mb-4\">method=\"get\" menaruh setiap isian di query string. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> form login, kontak, dan unggahan memakai method=\"post\".</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kapan get masih masuk akal</h2><p class=\"mb-4\">Get cocok untuk pencarian yang boleh dibagikan dan di-bookmark. Jangan menaruh token, sandi, atau email di form get. action harus URL HTTPS di domain yang Anda kendalikan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Post dan enctype</h2><p class=\"mb-4\">Form biasa cukup method=\"post\". Kalau ada input file, tambahkan enctype=\"multipart/form-data\". Tanpa itu berkas tidak ikut terkirim. Tombol kirim harus type=\"submit\" di dalam form.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek URL setelah kirim</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> kirim form percobaan. Bilah alamat tidak boleh memuat nilai isian. Kalau URL berubah jadi ?email=..., method-nya masih get. Catat pola yang benar di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum form dipakai pengunjung.</p>",
     "source": "MDN — form method",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#method",
     "sourceSnippet": "The HTTP method to submit the form with.",
     "source2": "MDN — HTMLFormElement",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    },
    "en": {
     "title": "How to Choose method POST for Sensitive Data",
     "desc": "How to use method post on a Clincoo form so passwords and personal data do not land in the URL, history, or referer logs.",
     "content": "<p class=\"mb-4\">method=\"get\" puts every field in the query string. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> login, contact, and upload forms use method=\"post\".</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">When get still makes sense</h2><p class=\"mb-4\">Get fits a search that may be shared and bookmarked. Do not put a token, password, or email in a get form. action should be an HTTPS URL on a domain you control.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Post and enctype</h2><p class=\"mb-4\">A normal form only needs method=\"post\". If there is a file input, add enctype=\"multipart/form-data\". Without it the file is not sent. The submit control must be type=\"submit\" inside the form.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the URL after submit</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> send a trial form. The address bar must not contain field values. If the URL becomes ?email=..., the method is still get. Write the correct pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before visitors use the form.</p>",
     "source": "MDN — form method",
     "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#method",
     "sourceSnippet": "The HTTP method to submit the form with.",
     "source2": "MDN — HTMLFormElement",
     "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement",
     "source3": "Clincoo Editor",
     "source3Url": "https://editor.clincoo.buzz/"
    }
   }
  }
 ]
};