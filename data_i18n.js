// Clincoo Blog — Data kategori: i18n
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["i18n"] = {
  names: { "id": "i18n", "en": "i18n" },
  flag: "🌐",
  articles: [
    {
      id: "i18n-satu-sumber-salinan-id-en",
      langs: {
        "id": {
          title: "Satukan Salinan ID dan EN di Satu Sumber pada Proyek Clincoo",
          desc: "Teks Indonesia dan Inggris mudah menyimpang. Simpan pasangan salinan di satu tempat sebelum generate.",
          content: "<p class=\"mb-4\">Banyak situs Clincoo punya index.html dan index.en.html yang isinya tidak lagi berpasangan. Satu halaman menambah CTA, yang lain masih memakai kalimat lama.</p><p class=\"mb-4\">Buat daftar kunci singkat: judul, deskripsi, tombol, footer. Isi ID dan EN berdampingan di catatan atau berkas teks sebelum menyentuh editor.</p><p class=\"mb-4\">Minta AI mengubah satu pasangan saja. Jangan generate ulang seluruh situs dalam dua bahasa sekaligus.</p><p class=\"mb-4\">Cek pratinjau di editor.clincoo.buzz untuk kedua file. Panjang kalimat EN sering berbeda; tombol tidak boleh pecah.</p><p class=\"mb-4\">Clincoo menayangkan file yang kamu simpan. Satu sumber salinan menjaga dua bahasa tetap jujur.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep ID and EN Copy in One Source on a Clincoo Project",
          desc: "Indonesian and English text drift apart easily. Store paired copy in one place before you generate.",
          content: "<p class=\"mb-4\">Many Clincoo sites have index.html and index.en.html that no longer match. One page gains a CTA; the other still uses the old sentence.</p><p class=\"mb-4\">Make a short key list: title, description, button, footer. Fill ID and EN side by side in notes before opening the editor.</p><p class=\"mb-4\">Ask the AI to change one pair only. Do not regenerate the whole site in two languages at once.</p><p class=\"mb-4\">Preview both files in editor.clincoo.buzz. English lines are often longer; buttons must not wrap badly.</p><p class=\"mb-4\">Clincoo ships the files you save. One copy source keeps both languages honest.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "i18n-hreflang-dan-canonical",
      langs: {
        "id": {
          title: "Pasang hreflang dan Canonical yang Jujur pada Halaman Dua Bahasa",
          desc: "Mesin telusur butuh sinyal bahasa yang jelas. Jangan salin canonical ke URL yang salah.",
          content: "<p class=\"mb-4\">Halaman ID dan EN sering memakai canonical yang sama. Mesin telusur lalu memilih satu versi dan membuang yang lain.</p><p class=\"mb-4\">Canonical setiap file menunjuk URL dirinya. Tambah tautan hreflang id dan en yang saling merujuk, plus x-default jika ada bahasa utama.</p><p class=\"mb-4\">Jangan biarkan AI menempel meta dari template Inggris ke halaman Indonesia. Cek head setelah setiap generate.</p><p class=\"mb-4\">Uji tautan di pratinjau blog.clincoo.buzz. Status 200 pada kedua path lebih penting daripada markup yang rumit.</p><p class=\"mb-4\">Clincoo menayangkan head mentah. hreflang yang jujur adalah SEO dua bahasa yang paling murah.</p>",
          source: "Clincoo",
          sourceUrl: "https://blog.clincoo.buzz/",
          sourceSnippet: "Blog resmi Clincoo"
        },
        "en": {
          title: "Set Honest hreflang and Canonical on Bilingual Pages",
          desc: "Search engines need a clear language signal. Do not copy canonical to the wrong URL.",
          content: "<p class=\"mb-4\">ID and EN pages often share one canonical. Search then picks a single version and drops the other.</p><p class=\"mb-4\">Each file canonical points at its own URL. Add hreflang links for id and en that point at each other, plus x-default for the main language.</p><p class=\"mb-4\">Do not let the AI paste an English template head onto an Indonesian page. Check the head after every generate.</p><p class=\"mb-4\">Test the links in the blog.clincoo.buzz preview. HTTP 200 on both paths matters more than fancy markup.</p><p class=\"mb-4\">Clincoo serves raw heads. Honest hreflang is the cheapest bilingual SEO work.</p>",
          source: "Clincoo",
          sourceUrl: "https://blog.clincoo.buzz/",
          sourceSnippet: "Official Clincoo blog"
        }
      }
    },
    {
      id: "i18n-tanggal-mata-uang-lokal",
      langs: {
        "id": {
          title: "Format Tanggal dan Mata Uang Sesuai Locale Halaman",
          desc: "22/09/2026 dan $12 membingungkan pembaca. Ikuti locale halaman, bukan kebiasaan editor.",
          content: "<p class=\"mb-4\">Template AI suka menulis tanggal gaya AS dan dolar pada halaman Indonesia. Pembaca ragu harga dan tenggat.</p><p class=\"mb-4\">Halaman lang=id memakai format tanggal Indonesia dan Rupiah jika harga lokal. Halaman EN memakai format yang dibaca audiens Inggris.</p><p class=\"mb-4\">Jangan hardcode string tanggal di banyak file. Satu helper atau satu potongan teks memudahkan perbaikan.</p><p class=\"mb-4\">Cek form dan footer di app.clincoo.buzz. Label \"harga mulai\" harus selaras dengan angka yang ditampilkan.</p><p class=\"mb-4\">Clincoo tidak menerjemahkan angka otomatis. Locale yang konsisten menjaga kepercayaan.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Aplikasi Clincoo"
        },
        "en": {
          title: "Format Dates and Currency to the Page Locale",
          desc: "22/09/2026 and $12 confuse readers. Follow the page locale, not the editor habit.",
          content: "<p class=\"mb-4\">AI templates like US dates and dollar signs on Indonesian pages. Readers then doubt the price and the deadline.</p><p class=\"mb-4\">A lang=id page uses an Indonesian date and Rupiah for local prices. An EN page uses a format English readers expect.</p><p class=\"mb-4\">Do not hardcode date strings in many files. One helper or one snippet makes fixes cheap.</p><p class=\"mb-4\">Check forms and footers in app.clincoo.buzz. A \"starting at\" label must match the number on screen.</p><p class=\"mb-4\">Clincoo does not auto-translate numbers. A consistent locale keeps trust.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Clincoo app"
        }
      }
    },
    {
      id: "i18n-switcher-bahasa-jelas",
      langs: {
        "id": {
          title: "Buat Switcher Bahasa yang Jelas Tanpa Bendera Saja",
          desc: "Ikon bendera membingungkan. Tulis nama bahasa dan tautkan ke file yang benar.",
          content: "<p class=\"mb-4\">Banyak header Clincoo memakai bendera tanpa teks. Pengguna tidak yakin apakah klik itu mengubah bahasa atau negara.</p><p class=\"mb-4\">Tulis \"Indonesia\" dan \"English\" sebagai tautan. Arahkan ke index.html dan index.en.html di folder yang sama.</p><p class=\"mb-4\">Jangan reload seluruh situs ke beranda saat ganti bahasa. Pertahankan path artikel agar pembaca tidak tersesat.</p><p class=\"mb-4\">Uji keyboard dan layar sempit di editor.clincoo.buzz. Switcher harus terlihat tanpa membuka menu tersembunyi.</p><p class=\"mb-4\">Clincoo menayangkan tautan apa adanya. Label bahasa yang jujur lebih aman daripada ikon saja.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Build a Clear Language Switcher Without Flags Alone",
          desc: "Flag icons confuse people. Write the language name and link to the right file.",
          content: "<p class=\"mb-4\">Many Clincoo headers use a flag with no text. Users cannot tell if the click changes language or country.</p><p class=\"mb-4\">Write \"Indonesia\" dan \"English\" as links. Point them at index.html and index.en.html in the same folder.</p><p class=\"mb-4\">Do not dump the visitor on the homepage when they switch language. Keep the article path so they are not lost.</p><p class=\"mb-4\">Test keyboard and a narrow screen in editor.clincoo.buzz. The switcher must be visible without a hidden menu.</p><p class=\"mb-4\">Clincoo serves the links as saved. Honest language labels are safer than icons alone.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "i18n-jangan-campur-kalimat",
      langs: {
        "id": {
          title: "Jangan Campur Kalimat ID dan EN dalam Satu Paragraf",
          desc: "Campur bahasa merusak ritme dan akses. Satu blok, satu bahasa.",
          content: "<p class=\"mb-4\">Hasil AI sering menyisipkan frasa Inggris di tengah kalimat Indonesia. Pembaca layar dan pemula tersandung.</p><p class=\"mb-4\">Tulis ulang paragraf sampai satu bahasa selesai. Istilah teknis boleh tetap, tapi bungkus dengan konteks yang jelas.</p><p class=\"mb-4\">Jika butuh kutipan bahasa lain, beri atribut lang pada elemen pendek. Jangan menempel dua gaya dalam satu p.</p><p class=\"mb-4\">Review halaman di blog.clincoo.buzz dengan suara keras. Kalimat yang terasa aneh biasanya campur kode.</p><p class=\"mb-4\">Clincoo tidak merapikan campur bahasa otomatis. Disiplin satu blok satu bahasa menjaga akses dan merek.</p>",
          source: "Clincoo",
          sourceUrl: "https://blog.clincoo.buzz/",
          sourceSnippet: "Blog resmi Clincoo"
        },
        "en": {
          title: "Do Not Mix ID and EN Sentences in One Paragraph",
          desc: "Mixed languages break rhythm and access. One block, one language.",
          content: "<p class=\"mb-4\">AI output often drops an English phrase into an Indonesian sentence. Screen readers and beginners stumble.</p><p class=\"mb-4\">Rewrite the paragraph until one language is complete. Technical terms may stay, but wrap them in clear context.</p><p class=\"mb-4\">If you need a short quote in the other language, set lang on that small element. Do not glue two styles into one p.</p><p class=\"mb-4\">Review the page on blog.clincoo.buzz out loud. A sentence that feels odd is usually mixed code.</p><p class=\"mb-4\">Clincoo does not auto-fix mixed language. One block, one language keeps access and brand intact.</p>",
          source: "Clincoo",
          sourceUrl: "https://blog.clincoo.buzz/",
          sourceSnippet: "Official Clincoo blog"
        }
      }
    }
  ]
};
