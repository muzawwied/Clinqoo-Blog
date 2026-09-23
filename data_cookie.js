// Clincoo Blog — Data kategori: cookie
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["cookie"] = {
  names: { "id": "Cookie", "en": "Cookies" },
  flag: "🍪",
  articles: [
    {
      id: "cookie-banner-jangan-blokir-konten",
      langs: {
        "id": {
          title: "Jangan Biarkan Banner Cookie Clincoo Menutupi Seluruh Konten",
          desc: "Overlay penuh sebelum setuju membuat halaman tidak terbaca. Tampilkan bilah kecil di bawah.",
          content: "<p class=\"mb-4\">Banyak template Clincoo meniru modal gelap yang mengunci scroll sampai pengunjung menekan Setuju. Pengguna keyboard dan pembaca layar terjebak.</p><p class=\"mb-4\">Pakai bilah bawah yang tidak menutup judul dan form. Tombol Terima dan Tolak non-esensial harus sama-sama bisa diketuk.</p><p class=\"mb-4\">Jangan memuat skrip analitik sebelum ada pilihan. Banner hanya untuk cookie yang tidak wajib.</p><p class=\"mb-4\">Uji Tab dan lebar 375px di editor.clincoo.buzz. Minta AI merapikan markup banner, bukan menambah pustaka consent berat.</p><p class=\"mb-4\">Clincoo tidak memasang banner otomatis. Bilah yang sopan menjaga halaman tetap bisa dipakai sebelum keputusan diambil.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Let a Clincoo Cookie Banner Cover the Whole Page",
          desc: "A full overlay before consent makes the page unreadable. Use a small bar at the bottom.",
          content: "<p class=\"mb-4\">Many Clincoo templates copy a dark modal that locks scroll until the visitor taps Agree. Keyboard and screen-reader users get stuck.</p><p class=\"mb-4\">Use a bottom bar that does not cover the title or the form. Accept and Reject non-essential must both be tappable.</p><p class=\"mb-4\">Do not load analytics scripts before a choice. The banner is only for cookies that are not required.</p><p class=\"mb-4\">Test Tab and a 375px width in editor.clincoo.buzz. Ask AI to tidy banner markup, not to add a heavy consent library.</p><p class=\"mb-4\">Clincoo does not inject a banner for you. A polite bar keeps the page usable before a decision is made.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cookie-setujui-baru-muat-skrip",
      langs: {
        "id": {
          title: "Muat Skrip Pihak Ketiga Clincoo Hanya setelah Pengunjung Setuju",
          desc: "Pixel dan chat yang langsung jalan mengabaikan pilihan. Tahan skrip sampai ada izin.",
          content: "<p class=\"mb-4\">Situs Clincoo sering menempelkan skrip chat atau analitik di head. Banner lalu hanya kosmetik karena data sudah terkirim.</p><p class=\"mb-4\">Simpan pilihan di localStorage, misalnya cookie-analytics=1. Baru sisipkan tag skrip setelah nilai itu ada.</p><p class=\"mb-4\">Jangan mengandalkan document.write. Buat elemen script, set src, lalu append ke body.</p><p class=\"mb-4\">Uji mode pribadi di pratinjau editor.clincoo.buzz: tanpa izin, Network tidak boleh memuat domain pelacak.</p><p class=\"mb-4\">Clincoo merender skrip yang kamu tulis. Izin dulu, muat kemudian, menjaga banner tetap jujur.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Load Clincoo Third-Party Scripts Only after the Visitor Agrees",
          desc: "Pixels and chat that run immediately ignore the choice. Hold scripts until there is consent.",
          content: "<p class=\"mb-4\">Clincoo sites often paste chat or analytics tags in head. The banner then becomes cosmetic because data already left.</p><p class=\"mb-4\">Store the choice in localStorage, for example cookie-analytics=1. Only then insert the script tag after that value exists.</p><p class=\"mb-4\">Do not rely on document.write. Create a script element, set src, then append it to body.</p><p class=\"mb-4\">Test private mode in editor.clincoo.buzz preview: without consent, Network must not load tracker domains.</p><p class=\"mb-4\">Clincoo renders the scripts you write. Consent first, load later, keeps the banner honest.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cookie-tautan-kebijakan-jelas",
      langs: {
        "id": {
          title: "Tautkan Kebijakan Privasi dari Banner Cookie Clincoo",
          desc: "Tombol Setuju tanpa penjelasan tidak cukup. Beri tautan ke halaman kebijakan yang bisa dibaca.",
          content: "<p class=\"mb-4\">Banner Clincoo yang hanya bertuliskan Kami memakai cookie tidak membantu pengunjung memutuskan. Mereka butuh halaman yang menyebut apa yang disimpan.</p><p class=\"mb-4\">Tambah tautan Kebijakan privasi di samping tombol. Halaman itu jelaskan cookie sesi, draf form, dan skrip pihak ketiga jika ada.</p><p class=\"mb-4\">Jangan menaruh kebijakan hanya di footer yang tertutup overlay. Tautan harus terlihat di banner itu sendiri.</p><p class=\"mb-4\">Tulis draf singkat di editor.clincoo.buzz. Minta AI merapikan kalimat, lalu kamu cek fakta yang disebut.</p><p class=\"mb-4\">Clincoo tidak menulis kebijakan hukum untukmu. Tautan yang jelas membuat pilihan cookie bisa dipertanggungjawabkan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Link the Privacy Policy from the Clincoo Cookie Banner",
          desc: "An Agree button with no explanation is not enough. Offer a readable policy page.",
          content: "<p class=\"mb-4\">A Clincoo banner that only says We use cookies does not help visitors decide. They need a page that names what is stored.</p><p class=\"mb-4\">Add a Privacy policy link next to the buttons. That page should describe session cookies, form drafts, and third-party scripts if any.</p><p class=\"mb-4\">Do not hide the policy only in a footer covered by the overlay. The link must be visible on the banner itself.</p><p class=\"mb-4\">Draft the short page in editor.clincoo.buzz. Ask AI to tidy the wording, then you check the facts it names.</p><p class=\"mb-4\">Clincoo does not write legal policy for you. A clear link makes the cookie choice accountable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cookie-tolak-setara-terima",
      langs: {
        "id": {
          title: "Tombol Tolak Cookie Clincoo Harus Sama Mudahnya dengan Terima",
          desc: "Sembunyikan Tolak di balik tautan kecil. Buat kedua pilihan setara di banner.",
          content: "<p class=\"mb-4\">Template Clincoo sering menonjolkan Terima dengan warna penuh, sementara Tolak hanya teks abu-abu di sudut. Pengunjung terdorong setuju tanpa membaca.</p><p class=\"mb-4\">Taruh Terima dan Tolak non-esensial berdampingan, ukuran sentuh sama. Warna boleh berbeda, kontras keduanya harus cukup.</p><p class=\"mb-4\">Jangan mewajibkan gulir ke bawah kebijakan hanya untuk menolak. Satu ketukan harus cukup.</p><p class=\"mb-4\">Uji Tab di editor.clincoo.buzz: urutan fokus ke Tolak tidak boleh terlewat. Minta AI merapikan kelas tombol, bukan menambah modal bertingkat.</p><p class=\"mb-4\">Clincoo merender markup yang kamu tulis. Pilihan setara membuat banner jujur, bukan jebakan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Make Reject as Easy as Accept on a Clincoo Cookie Banner",
          desc: "Hiding Reject behind a tiny link. Put both choices on equal footing.",
          content: "<p class=\"mb-4\">Clincoo templates often highlight Accept in a solid color while Reject is gray text in a corner. Visitors get nudged to agree without reading.</p><p class=\"mb-4\">Place Accept and Reject non-essential side by side with the same tap size. Colors may differ; both need enough contrast.</p><p class=\"mb-4\">Do not require scrolling a long policy only to refuse. One tap should be enough.</p><p class=\"mb-4\">Test Tab in editor.clincoo.buzz: focus order must not skip Reject. Ask AI to tidy button classes, not to add nested modals.</p><p class=\"mb-4\">Clincoo renders the markup you write. Equal choices keep the banner honest, not a trap.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cookie-pisah-esensial-dan-analitik",
      langs: {
        "id": {
          title: "Pisahkan Cookie Esensial dan Analitik di Situs Clincoo",
          desc: "Satu sakelar Setuju semua menyembunyikan perbedaan. Beri kategori yang jelas.",
          content: "<p class=\"mb-4\">Banyak situs Clincoo menyimpan sesi form bersama pixel analitik dalam satu persetujuan. Pengunjung tidak tahu apa yang wajib dan apa yang opsional.</p><p class=\"mb-4\">Kelompokkan: esensial untuk draf dan keamanan sesi; analitik atau pemasaran hanya setelah izin. Jangan menandai pelacak sebagai wajib.</p><p class=\"mb-4\">Tampilkan dua kotak centang atau dua tombol. Nilai default analitik harus off.</p><p class=\"mb-4\">Uji di editor.clincoo.buzz dengan Application di DevTools. Setelah tolak analitik, domain pelacak tidak boleh muncul.</p><p class=\"mb-4\">Clincoo tidak mengelompokkan cookie untukmu. Kategori yang jujur menjaga kepercayaan pengunjung.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Split Essential and Analytics Cookies on a Clincoo Site",
          desc: "One Agree-to-all switch hides the difference. Offer clear categories.",
          content: "<p class=\"mb-4\">Many Clincoo sites store form drafts together with analytics pixels under one consent. Visitors cannot tell what is required and what is optional.</p><p class=\"mb-4\">Group them: essential for drafts and session safety; analytics or marketing only after permission. Do not label trackers as required.</p><p class=\"mb-4\">Show two checkboxes or two buttons. The analytics default must be off.</p><p class=\"mb-4\">Test in editor.clincoo.buzz with the Application panel in DevTools. After rejecting analytics, tracker domains must not appear.</p><p class=\"mb-4\">Clincoo does not group cookies for you. Honest categories keep visitor trust.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cookie-simpan-pilihan-antar-kunjungan",
      langs: {
        "id": {
          title: "Simpan Pilihan Cookie Clincoo agar Banner Tidak Muncul Setiap Kali",
          desc: "Banner yang kembali tiap muat ulang mengganggu. Simpan keputusan dengan kunci yang jelas.",
          content: "<p class=\"mb-4\">Situs Clincoo yang tidak menyimpan pilihan memaksa pengunjung menekan tombol berulang. Mereka cepat menekan apa saja agar banner hilang.</p><p class=\"mb-4\">Tulis nilai ke localStorage, misalnya clincoo-consent=analytics:0. Baca nilai itu sebelum merender banner.</p><p class=\"mb-4\">Sediakan tautan Ubah preferensi di footer agar keputusan bisa diperbarui tanpa menghapus data situs.</p><p class=\"mb-4\">Uji dua tab di editor.clincoo.buzz. Muat ulang halaman: banner hanya muncul jika kunci belum ada.</p><p class=\"mb-4\">Clincoo tidak menyimpan izin secara otomatis. Kunci yang kamu tulis menjaga banner tetap jarang dan hormat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Store the Clincoo Cookie Choice so the Banner Does Not Return Every Load",
          desc: "A banner on every reload is noise. Persist the decision with a clear key.",
          content: "<p class=\"mb-4\">Clincoo sites that never store the choice force visitors to tap again and again. People soon tap anything just to dismiss the bar.</p><p class=\"mb-4\">Write a value to localStorage, for example clincoo-consent=analytics:0. Read that value before rendering the banner.</p><p class=\"mb-4\">Offer a Change preferences link in the footer so the decision can be updated without wiping site data.</p><p class=\"mb-4\">Test two tabs in editor.clincoo.buzz. Reload the page: the banner should appear only if the key is missing.</p><p class=\"mb-4\">Clincoo does not persist consent for you. The key you write keeps the banner rare and respectful.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cookie-cek-application-devtools",
      langs: {
        "id": {
          title: "Cek Cookie Situs Clincoo lewat Panel Application DevTools",
          desc: "Tebak-tebakan di Network tidak cukup. Buka Application lalu daftar cookie dan storage.",
          content: "<p class=\"mb-4\">Saat debug Clincoo, banyak orang hanya melihat Console. Cookie yang tersimpan diam-diam tidak muncul di sana.</p><p class=\"mb-4\">Buka DevTools, tab Application, bagian Cookies dan Local Storage. Catat nama, domain, dan kedaluwarsa tiap entri.</p><p class=\"mb-4\">Hapus entri, muat ulang pratinjau, dan pastikan hanya cookie yang kamu harapkan yang kembali. Mode pribadi membantu uji bersih.</p><p class=\"mb-4\">Ulangi di editor.clincoo.buzz setelah menolak analitik. Jika nama pelacak masih ada, skrip masih jalan terlalu awal.</p><p class=\"mb-4\">Clincoo menampilkan storage yang browser tulis. Panel Application membuat daftar itu terlihat, bukan tersembunyi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Inspect Clincoo Site Cookies in the DevTools Application Panel",
          desc: "Guessing from Network is not enough. Open Application, then cookies and storage.",
          content: "<p class=\"mb-4\">When debugging Clincoo, many people only watch the Console. Cookies stored quietly never show up there.</p><p class=\"mb-4\">Open DevTools, the Application tab, Cookies and Local Storage. Note the name, domain, and expiry of each entry.</p><p class=\"mb-4\">Clear the entries, reload preview, and confirm only the cookies you expect come back. Private mode helps a clean test.</p><p class=\"mb-4\">Repeat in editor.clincoo.buzz after rejecting analytics. If a tracker name remains, a script still runs too early.</p><p class=\"mb-4\">Clincoo surfaces whatever the browser writes. The Application panel makes that list visible instead of hidden.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "cookie-jangan-http-only-palsu-di-js",
      langs: {
        "id": {
          title: "Jangan Mengandalkan document.cookie untuk Data Sensitif Clincoo",
          desc: "Cookie yang ditulis dari JavaScript bisa dibaca skrip lain. Simpan rahasia di server, bukan di browser.",
          content: "<p class=\"mb-4\">Form Clincoo kadang menaruh token atau email di document.cookie agar tetap login. Skrip pihak ketiga yang sama di halaman bisa membacanya.</p><p class=\"mb-4\">Pakai localStorage hanya untuk preferensi non-rahasia. Jangan menyimpan kata sandi, kunci API, atau token sesi di cookie yang ditulis JS.</p><p class=\"mb-4\">Jika butuh sesi, andalkan backend yang memasang cookie HttpOnly. Halaman statis Clincoo biasanya tidak memerlukannya.</p><p class=\"mb-4\">Audit string document.cookie di editor.clincoo.buzz. Minta AI mencari pemakaian itu, lalu hapus yang tidak perlu.</p><p class=\"mb-4\">Clincoo mengeksekusi skrip yang kamu tempel. Cookie JS bukan brankas; anggap isinya bisa terbaca.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Rely on document.cookie for Sensitive Clincoo Data",
          desc: "Cookies written from JavaScript can be read by other scripts. Keep secrets on a server, not in the browser.",
          content: "<p class=\"mb-4\">Clincoo forms sometimes put a token or email in document.cookie to stay signed in. A third-party script on the same page can read it.</p><p class=\"mb-4\">Use localStorage only for non-secret preferences. Do not store passwords, API keys, or session tokens in JS-written cookies.</p><p class=\"mb-4\">If you need a session, rely on a backend that sets an HttpOnly cookie. A static Clincoo page usually does not need one.</p><p class=\"mb-4\">Audit document.cookie strings in editor.clincoo.buzz. Ask AI to find those uses, then delete what you do not need.</p><p class=\"mb-4\">Clincoo runs the scripts you paste. A JS cookie is not a vault; treat its contents as readable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
