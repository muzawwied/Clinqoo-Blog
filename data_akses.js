// Clincoo Blog — Data kategori: akses
// File ini di-generate otomatis. Jangan edit manual.

if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["akses"] = {
  names: { "id": "Akses", "en": "Access" },
  flag: "♿",
  articles: [
    {
      id: "akses-kontras-teks-dan-latar",
      langs: {
        "id": {
          title: "Cek Kontras Teks dan Latar sebelum Deploy Clincoo",
          desc: "Teks abu-abu di latar terang gagal dibaca di HP siang hari. Naikkan kontras, bukan hanya mempercantik palet.",
          content: "<p class=\"mb-4\">Template Clincoo sering memakai teks abu muda di kartu atau footer. Di monitor kantor masih terbaca. Di layar HP bawah matahari, kalimat itu hilang.</p><p class=\"mb-4\">Sebelum rilis, lihat hero, tombol, dan footer pada pratinjau. Jika kamu harus menyipitkan mata, kontrasnya kurang. Ganti warna teks atau latar — jangan andalkan drop-shadow halus.</p><p class=\"mb-4\">Minta AI hanya menyesuaikan warna pada kelas yang kamu sebut. Tolak rewrite palet seluruh situs. Satu halaman yang kebaca lebih penting daripada tema baru.</p><p class=\"mb-4\">Uji juga mode yang kamu pakai: latar gelap dengan teks abu bukan otomatis aksesibel. Samakan keputusan dengan catatan merek jika ada.</p><p class=\"mb-4\">Clincoo menayangkan CSS apa adanya. Kontras adalah sopan santun baca, bukan fitur tersembunyi di tombol deploy.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Check Text and Background Contrast before You Deploy from Clincoo",
          desc: "Light gray on a bright background fails on a phone at noon. Raise contrast instead of only polishing the palette.",
          content: "<p class=\"mb-4\">Clincoo templates often use pale gray on cards or in the footer. It still reads on an office monitor. On a phone in sun the sentence disappears.</p><p class=\"mb-4\">Before release, look at the hero, buttons, and footer in preview. If you have to squint, contrast is low. Change text or background color — do not lean on a faint drop shadow.</p><p class=\"mb-4\">Ask the AI only to tune color on the classes you name. Refuse a full-site palette rewrite. One readable page matters more than a new theme.</p><p class=\"mb-4\">Also test the mode you ship: dark backgrounds with gray type are not automatically accessible. Match any brand notes you already wrote.</p><p class=\"mb-4\">Clincoo serves the CSS as written. Contrast is reading courtesy, not a hidden deploy feature.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "akses-label-pada-setiap-input",
      langs: {
        "id": {
          title: "Pasang Label pada Setiap Input Form Clincoo",
          desc: "Placeholder bukan label. Pembaca layar dan pengunjung yang zoom butuh teks yang tetap terlihat.",
          content: "<p class=\"mb-4\">Banyak form template hanya punya placeholder Nama atau Email. Saat field terisi, petunjuk itu hilang. Orang yang memakai pembaca layar juga tidak mendapat nama kolom yang jelas.</p><p class=\"mb-4\">Tambahkan elemen label yang terhubung ke id input. Teks label boleh singkat. Jangan andalkan title atau aria yang kamu tidak uji.</p><p class=\"mb-4\">Jika AI menulis form baru, minta struktur label plus input, bukan div berisi placeholder saja. Cek di pratinjau: klik label harus memfokuskan field.</p><p class=\"mb-4\">Pesan error taruh di dekat field yang salah, bukan hanya alert di puncak halaman. Satu kalimat cukup.</p><p class=\"mb-4\">Form Clincoo yang sopan bisa diisi tanpa menebak. Markup label adalah bagian rilis, bukan dekorasi.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Put a Label on Every Clincoo Form Input",
          desc: "A placeholder is not a label. Screen readers and people who zoom need text that stays visible.",
          content: "<p class=\"mb-4\">Many template forms only have a Nama or Email placeholder. Once the field is filled the hint vanishes. Screen reader users also miss a clear field name.</p><p class=\"mb-4\">Add a label element tied to the input id. The label text can be short. Do not rely on a title or aria you have not tested.</p><p class=\"mb-4\">If the AI writes a new form, ask for label plus input, not a div that only holds a placeholder. In preview, clicking the label should focus the field.</p><p class=\"mb-4\">Put an error sentence next to the wrong field, not only an alert at the top of the page. One sentence is enough.</p><p class=\"mb-4\">A polite Clincoo form can be filled without guessing. Label markup is part of release, not decoration.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "akses-urut-heading-yang-logis",
      langs: {
        "id": {
          title: "Urutkan Heading agar Bisa Dilompati dengan Pembaca Layar",
          desc: "Loncat dari H1 ke H4 membingungkan kerangka halaman. Pakai H2 lalu H3 sesuai bagian.",
          content: "<p class=\"mb-4\">Template kadang memakai H4 untuk kartu hanya karena ukurannya kecil. Urutan heading bukan ukuran font. Pembaca layar menelusuri hierarki, bukan pixel.</p><p class=\"mb-4\">Satu H1 untuk judul halaman. Bagian besar memakai H2. Subbagian H3. Jika ingin teks kecil, ubah CSS, jangan turun dua tingkat tag.</p><p class=\"mb-4\">Minta AI merapikan heading di satu file dan mengirim daftar perubahan. Tolak rewrite layout yang mengganti seluruh kelas.</p><p class=\"mb-4\">Cek pratinjau dengan outline mental: dari nama situs ke layanan ke kontak harus terasa bertingkat, bukan acak.</p><p class=\"mb-4\">Clincoo tidak memperbaiki outline untukmu. Urutan heading yang logis membuat situs lebih mudah dijelajah manusia dan alat bantu.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Order Headings so a Screen Reader Can Skip Sections",
          desc: "Jumping from H1 to H4 confuses the page outline. Use H2 then H3 by section.",
          content: "<p class=\"mb-4\">Templates sometimes use H4 on cards only because the type looks small. Heading rank is not font size. Screen readers walk the hierarchy, not pixels.</p><p class=\"mb-4\">One H1 for the page title. Major sections use H2. Subsections use H3. If you want smaller type, change CSS instead of dropping two heading levels.</p><p class=\"mb-4\">Ask the AI to tidy headings in one file and send a change list. Refuse a layout rewrite that swaps every class.</p><p class=\"mb-4\">Check preview with a mental outline: from site name to services to contact should feel stepped, not random.</p><p class=\"mb-4\">Clincoo does not fix the outline for you. A logical heading order makes the site easier to scan for people and assistive tools.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "akses-fokus-keyboard-terlihat",
      langs: {
        "id": {
          title: "Biarkan Fokus Keyboard Terlihat di Situs Clincoo",
          desc: "outline:none pada semua tautan membuat navigasi Tab buta. Pulihkan cincin fokus yang jelas.",
          content: "<p class=\"mb-4\">Banyak reset CSS menghapus outline karena dianggap jelek. Pengunjung yang tidak memakai mouse lalu kehilangan jejak di mana fokus berada.</p><p class=\"mb-4\">Di stylesheet proyek Clincoo, biarkan outline atau ganti dengan cincin yang kontras pada :focus-visible. Jangan hapus fokus hanya untuk tombol CTA.</p><p class=\"mb-4\">Uji dengan Tab di pratinjau desktop: urutan harus mengikuti alur baca — header, isi, form, footer — bukan meloncat ke widget tersembunyi.</p><p class=\"mb-4\">Jika AI menambah skrip yang mengatur tabindex positif besar-besaran, hapus. tabindex=0 pada elemen yang memang interaktif biasanya cukup.</p><p class=\"mb-4\">Fokus yang terlihat adalah akses dasar. Clincoo men-deploy CSS yang kamu simpan; jangan kirim halaman yang hanya hidup bersama pointer.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Keep Keyboard Focus Visible on a Clincoo Site",
          desc: "outline:none on every link makes Tab navigation blind. Restore a clear focus ring.",
          content: "<p class=\"mb-4\">Many CSS resets drop outline because it looks ugly. Visitors who do not use a mouse then lose track of where focus is.</p><p class=\"mb-4\">In the Clincoo project stylesheet, keep outline or replace it with a contrasting ring on :focus-visible. Do not remove focus only to prettify the CTA.</p><p class=\"mb-4\">Test with Tab in desktop preview: order should follow reading flow — header, body, form, footer — not jump to a hidden widget.</p><p class=\"mb-4\">If the AI adds a script that sets large positive tabindex values, delete it. tabindex=0 on truly interactive elements is usually enough.</p><p class=\"mb-4\">Visible focus is basic access. Clincoo deploys the CSS you save; do not ship a page that only works with a pointer.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "akses-hormati-prefers-reduced-motion",
      langs: {
        "id": {
          title: "Hormati prefers-reduced-motion di Animasi Clincoo",
          desc: "Loop hero dan scroll halus bisa membuat mual. Matikan gerak jika pengunjung meminta pengurangan.",
          content: "<p class=\"mb-4\">Animasi CSS di template terasa hidup di laptop. Bagi sebagian orang, gerak terus-menerus di hero menimbulkan pusing.</p><p class=\"mb-4\">Bungkus transisi panjang dengan media query prefers-reduced-motion: reduce. Di situ, set animation dan transition ke none atau sangat singkat.</p><p class=\"mb-4\">Jangan minta AI menambah pustaka animasi agar \"lebih modern\". Beberapa baris CSS dengan media query lebih aman dan lebih ringan.</p><p class=\"mb-4\">Uji di pratinjau dengan emulasi reduced motion jika browser mendukung, atau matikan animasi sementara. CTA harus tetap terlihat tanpa menunggu loop selesai.</p><p class=\"mb-4\">Clincoo tidak membaca preferensi gerak untukmu. Markup dan CSS yang kamu tulis yang memutuskan apakah situs merespons permintaan itu.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Honor prefers-reduced-motion in Clincoo Animations",
          desc: "Hero loops and smooth scrolling can cause nausea. Turn motion off when a visitor asks for less.",
          content: "<p class=\"mb-4\">Template CSS animation feels lively on a laptop. For some people, constant hero motion causes dizziness.</p><p class=\"mb-4\">Wrap long transitions in a prefers-reduced-motion: reduce media query. There, set animation and transition to none or to a very short value.</p><p class=\"mb-4\">Do not ask the AI to add an animation library to feel \"more modern\". A few lines of CSS with a media query are safer and lighter.</p><p class=\"mb-4\">Test in preview with reduced-motion emulation if the browser supports it, or disable animation briefly. The CTA must stay visible without waiting for a loop to end.</p><p class=\"mb-4\">Clincoo does not read motion preference for you. The markup and CSS you write decide whether the site honors that request.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ]
};
