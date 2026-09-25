// Clincoo Blog — Data kategori: email
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["email"] = {
  names: { "id": "Email", "en": "Email" },
  flag: "✉️",
  articles: [
    {
      id: "email-mailto-bukan-form-palsu",
      langs: {
        "id": {
          title: "Pakai mailto yang Jujur, Bukan Form Palsu tanpa Tujuan di Clincoo",
          desc: "Form kontak tanpa action membuang pesan. Jika belum ada endpoint, tautan mailto lebih jujur.",
          content: "<p class=\"mb-4\">Banyak halaman Clincoo memasang form Hubungi kami dengan action kosong. Pengunjung menekan Kirim dan tidak terjadi apa-apa.</p><p class=\"mb-4\">Jika belum punya layanan form, pakai tautan mailto dengan alamat yang kamu miliki di editor.clincoo.buzz. Tulis subjek singkat di query string.</p><p class=\"mb-4\">Jangan menampilkan form yang seolah-olah terkirim. Lebih baik satu tautan jelas daripada spinner palsu.</p><p class=\"mb-4\">Minta AI hanya menambah tautan mailto atau action yang benar. Tolak generate backend fiktif.</p><p class=\"mb-4\">Clincoo tidak mengirim email sendiri. Tujuan yang jujur menjaga kepercayaan di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use an Honest mailto Link, Not a Fake Form with No Destination on Clincoo",
          desc: "A contact form with no action drops the message. If you have no endpoint yet, a mailto link is more honest.",
          content: "<p class=\"mb-4\">Many Clincoo pages ship a Contact us form with an empty action. Visitors tap Send and nothing happens.</p><p class=\"mb-4\">If you do not have a form service yet, use a mailto link with an address you own in editor.clincoo.buzz. Put a short subject in the query string.</p><p class=\"mb-4\">Do not show a form that pretends to send. One clear link is better than a fake spinner.</p><p class=\"mb-4\">Ask AI only to add a mailto link or a real action. Reject a generated fake backend.</p><p class=\"mb-4\">Clincoo does not send email itself. An honest destination keeps trust on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "email-subject-body-encode",
      langs: {
        "id": {
          title: "Encode Subject dan Body pada Tautan mailto Clincoo",
          desc: "Spasi dan tanda & merusak tautan mailto. Pakai encodeURIComponent sebelum menempel query.",
          content: "<p class=\"mb-4\">Tautan mailto di situs Clincoo sering pecah karena subjek berisi spasi atau ampersand. Klien email membuka pesan kosong.</p><p class=\"mb-4\">Bangun URL dengan encodeURIComponent untuk subject dan body di editor.clincoo.buzz. Jangan menempel teks mentah ke href.</p><p class=\"mb-4\">Batasi body singkat. Beberapa klien memotong query panjang. Sisakan detail di halaman, bukan di tautan.</p><p class=\"mb-4\">Minta AI hanya memperbaiki satu href mailto. Tempel tautan yang pecah sebagai konteks.</p><p class=\"mb-4\">Clincoo merender href apa adanya. Query yang ter-encode membuat app.clincoo.buzz membuka draf email yang utuh.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Encode Subject and Body on Clincoo mailto Links",
          desc: "Spaces and & break mailto links. Use encodeURIComponent before you paste the query.",
          content: "<p class=\"mb-4\">mailto links on Clincoo sites often break because the subject has spaces or an ampersand. The mail client opens an empty draft.</p><p class=\"mb-4\">Build the URL with encodeURIComponent for subject and body in editor.clincoo.buzz. Do not paste raw text into href.</p><p class=\"mb-4\">Keep the body short. Some clients truncate a long query. Leave details on the page, not in the link.</p><p class=\"mb-4\">Ask AI to fix only one mailto href. Paste the broken link as context.</p><p class=\"mb-4\">Clincoo renders the href as saved. An encoded query lets app.clincoo.buzz open a complete email draft.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "email-jangan-tampilkan-alamat-mentah-bot",
      langs: {
        "id": {
          title: "Jangan Tempel Alamat Email Mentah jika Bot Sudah Menyerang Clincoo",
          desc: "Teks email di footer mudah dipanen. Pakai tautan, form, atau pecah tampilan dengan label jelas.",
          content: "<p class=\"mb-4\">Footer Clincoo yang menuliskan nama@bisnis.com sebagai teks polos sering masuk daftar spam dalam seminggu.</p><p class=\"mb-4\">Tampilkan tautan Hubungi kami ke form atau mailto, bukan string mentah di setiap halaman di editor.clincoo.buzz.</p><p class=\"mb-4\">Jika alamat harus terlihat, pecah tampilan (nama [at] domain) hanya sebagai cadangan, dan tetap sediakan tautan yang bisa diketuk.</p><p class=\"mb-4\">Minta AI mengganti satu string email menjadi tautan. Jangan minta ofuskasi JS yang merusak salin-tempel.</p><p class=\"mb-4\">Clincoo tidak menyembunyikan email otomatis. Tampilan yang hemat memotong panen bot di blog.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Paste a Raw Email Address if Bots Already Hit the Clincoo Site",
          desc: "Plain email text in the footer is easy to harvest. Use a link, a form, or a split label.",
          content: "<p class=\"mb-4\">A Clincoo footer that prints name@business.com as plain text often lands on spam lists within a week.</p><p class=\"mb-4\">Show a Contact us link to a form or mailto, not a raw string on every page in editor.clincoo.buzz.</p><p class=\"mb-4\">If the address must stay visible, split the display (name [at] domain) only as fallback, and still offer a tappable link.</p><p class=\"mb-4\">Ask AI to turn one email string into a link. Do not ask for JS obfuscation that breaks copy-paste.</p><p class=\"mb-4\">Clincoo does not hide emails for you. A lean display cuts bot harvests on blog.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "email-konfirmasi-setelah-kirim",
      langs: {
        "id": {
          title: "Tampilkan Konfirmasi setelah Form Email Clincoo Terkirim",
          desc: "Tanpa pesan sukses, pengunjung menekan Kirim berulang. Ganti form dengan status singkat.",
          content: "<p class=\"mb-4\">Form Clincoo yang kembali ke halaman yang sama tanpa teks membuat orang mengira kiriman gagal.</p><p class=\"mb-4\">Setelah submit berhasil, tampilkan pesan Pesan terkirim dan sembunyikan tombol Kirim di editor.clincoo.buzz. Pakai aria-live polite.</p><p class=\"mb-4\">Jika layanan form mengalihkan ke halaman lain, siapkan halaman Terima kasih dengan tautan kembali.</p><p class=\"mb-4\">Minta AI menambah satu blok status, bukan rewrite seluruh form. Tempel action yang dipakai.</p><p class=\"mb-4\">Clincoo tidak menulis konfirmasi sendiri. Umpan balik terlihat menutup loop di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Show Confirmation after a Clincoo Email Form Is Sent",
          desc: "With no success message, visitors tap Send again. Replace the form with a short status.",
          content: "<p class=\"mb-4\">A Clincoo form that returns to the same page with no text makes people think the send failed.</p><p class=\"mb-4\">After a successful submit, show Message sent and hide the Send button in editor.clincoo.buzz. Use aria-live polite.</p><p class=\"mb-4\">If the form service redirects, prepare a Thank you page with a back link.</p><p class=\"mb-4\">Ask AI to add one status block, not to rewrite the whole form. Paste the action you use.</p><p class=\"mb-4\">Clincoo does not write confirmation for you. Visible feedback closes the loop on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "email-validasi-format-sebelum-submit",
      langs: {
        "id": {
          title: "Validasi Format Email di Browser sebelum Form Clincoo Dikirim",
          desc: "type=email dan required menahan ketikan kosong. Jangan andalkan cek di server saja jika belum ada server.",
          content: "<p class=\"mb-4\">Form Clincoo dengan input type=text untuk email menerima 'abc' lalu gagal diam-diam di layanan tujuan.</p><p class=\"mb-4\">Pakai type=email, required, dan autocomplete=email di editor.clincoo.buzz. Tambah pesan error yang terlihat di dekat field.</p><p class=\"mb-4\">Jangan memblokir plus-address atau domain baru dengan regex ketat. Validasi HTML5 sudah cukup untuk situs statis.</p><p class=\"mb-4\">Minta AI hanya mengubah atribut input. Uji Kirim kosong di pratinjau sebelum rilis.</p><p class=\"mb-4\">Clincoo merender atribut form apa adanya. Cek di browser mengurangi sampah masuk ke kotak email.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Validate Email Format in the Browser before a Clincoo Form Submits",
          desc: "type=email and required catch empty typing. Do not rely on a server check if you have no server yet.",
          content: "<p class=\"mb-4\">A Clincoo form that uses type=text for email accepts 'abc' and then fails silently at the destination service.</p><p class=\"mb-4\">Use type=email, required, and autocomplete=email in editor.clincoo.buzz. Add a visible error next to the field.</p><p class=\"mb-4\">Do not block plus-addresses or new domains with a strict regex. HTML5 validation is enough for a static site.</p><p class=\"mb-4\">Ask AI only to change input attributes. Test an empty Send in preview before release.</p><p class=\"mb-4\">Clincoo renders form attributes as saved. A browser check cuts junk arriving in the inbox.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
