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
    }
  ]
};
