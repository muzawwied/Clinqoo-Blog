// Clincoo Blog — Data kategori: layout
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["layout"] = {
  names: { "id": "Layout", "en": "Layout" },
  flag: "\ud83d\udcd0",
  articles: [
    {
      id: "layout-max-width-konten-baca",
      langs: {
        "id": {
          title: "Batasi max-width Kolom Baca agar Teks Clincoo Tidak Melebar",
          desc: "Paragraf full-bleed di layar lebar membuat baris terlalu panjang dan sulit dilacak mata.",
          content: "<p class=\"mb-4\">Banyak halaman Clincoo memakai lebar 100% untuk artikel. Di monitor lebar satu baris bisa 150 karakter.</p><p class=\"mb-4\">Set max-width sekitar 65ch atau 720px pada wadah teks di editor.clincoo.buzz. Biarkan latar tetap penuh jika desain butuh.</p><p class=\"mb-4\">Jangan memotong judul atau kartu hero dengan batas yang sama. Batas baca hanya untuk paragraf dan daftar.</p><p class=\"mb-4\">Minta AI mengubah satu selector wadah artikel. Tempel CSS lebar yang ada sebagai konteks.</p><p class=\"mb-4\">Clincoo merender lebar yang kamu simpan. Kolom baca yang tenang membuat app.clincoo.buzz dan blog.clincoo.buzz tetap nyaman.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Cap Reading Column max-width so Clincoo Text Does Not Stretch",
          desc: "Full-bleed paragraphs on a wide screen make lines too long to track.",
          content: "<p class=\"mb-4\">Many Clincoo pages give articles 100% width. On a wide monitor one line can hit 150 characters.</p><p class=\"mb-4\">Set max-width around 65ch or 720px on the text wrapper in editor.clincoo.buzz. Leave the background full-bleed if the design needs it.</p><p class=\"mb-4\">Do not clip the title or hero cards with the same cap. The reading cap is for paragraphs and lists only.</p><p class=\"mb-4\">Ask AI to change one article wrapper selector. Paste the existing width CSS as context.</p><p class=\"mb-4\">Clincoo renders the width you save. A calm reading column keeps app.clincoo.buzz and blog.clincoo.buzz comfortable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "layout-sticky-header-jangan-timpa",
      langs: {
        "id": {
          title: "Sisihkan Padding Atas saat Header Clincoo Dipasang Sticky",
          desc: "Header sticky menutupi judul dan target tautan jangkar jika body tidak punya offset.",
          content: "<p class=\"mb-4\">Navbar Clincoo yang position:sticky sering menimpa h1 dan id bagian saat pengunjung mengklik tautan #faq.</p><p class=\"mb-4\">Ukur tinggi header di pratinjau editor.clincoo.buzz. Tambah padding-top pada main, atau scroll-margin-top pada heading target.</p><p class=\"mb-4\">Jangan mengandalkan margin negatif pada hero untuk menarik konten ke bawah header. Itu pecah saat tinggi header berubah.</p><p class=\"mb-4\">Minta AI hanya menambah offset, bukan menulis ulang seluruh header.</p><p class=\"mb-4\">Clincoo tidak menggeser jangkar otomatis. Offset yang sadar menjaga judul tetap terlihat di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Reserve Top Padding when a Clincoo Header Is Sticky",
          desc: "A sticky header covers titles and in-page anchors if the body has no offset.",
          content: "<p class=\"mb-4\">A position:sticky Clincoo navbar often covers the h1 and section ids when a visitor clicks a #faq link.</p><p class=\"mb-4\">Measure header height in the editor.clincoo.buzz preview. Add padding-top on main, or scroll-margin-top on target headings.</p><p class=\"mb-4\">Do not use a negative margin on the hero to tuck content under the header. It breaks when header height changes.</p><p class=\"mb-4\">Ask AI only to add the offset, not to rewrite the whole header.</p><p class=\"mb-4\">Clincoo does not shift anchors for you. A conscious offset keeps titles visible on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "layout-footer-bukan-position-absolute",
      langs: {
        "id": {
          title: "Letakkan Footer Clincoo di Alur Dokumen, Bukan position:absolute",
          desc: "Footer absolut menimpa konten pendek atau menghilang saat artikel memanjang.",
          content: "<p class=\"mb-4\">Template Clincoo sering menempelkan footer dengan position:absolute; bottom:0. Di halaman pendek ia menutupi kartu. Di halaman panjang ia mengambang di tengah.</p><p class=\"mb-4\">Kembalikan footer ke alur normal di editor.clincoo.buzz. Jika butuh footer menempel di viewport saat konten pendek, pakai min-height pada body plus flex column, bukan absolute.</p><p class=\"mb-4\">Uji dua kasus di pratinjau: satu paragraf dan sepuluh bagian.</p><p class=\"mb-4\">Minta AI menghapus position pada footer dan menata ulang satu file layout.</p><p class=\"mb-4\">Clincoo merender posisi yang kamu tulis. Footer dalam alur tetap bisa diketuk di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep the Clincoo Footer in Document Flow, Not position:absolute",
          desc: "An absolute footer covers short pages or floats mid-article when content grows.",
          content: "<p class=\"mb-4\">Clincoo templates often pin the footer with position:absolute; bottom:0. On a short page it covers cards. On a long page it floats in the middle.</p><p class=\"mb-4\">Return the footer to normal flow in editor.clincoo.buzz. If it must stick to the viewport on short pages, use min-height on body plus a flex column, not absolute.</p><p class=\"mb-4\">Test two cases in preview: one paragraph and ten sections.</p><p class=\"mb-4\">Ask AI to remove position on the footer and rearrange one layout file.</p><p class=\"mb-4\">Clincoo renders the position you write. A footer in flow stays tappable on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "layout-section-padding-konsisten",
      langs: {
        "id": {
          title: "Samakan Padding Section Clincoo, Jangan Campur Angka Acak",
          desc: "Section dengan padding 32px, 48px, dan 80px dalam satu halaman terasa tidak satu sistem.",
          content: "<p class=\"mb-4\">Landing Clincoo sering punya hero padding 96px, fitur 40px, dan FAQ 24px. Ritme vertikal pecah.</p><p class=\"mb-4\">Pilih dua token, misalnya 48px desktop dan 32px mobile, lalu terapkan ke semua section di editor.clincoo.buzz.</p><p class=\"mb-4\">Hero boleh lebih longgar satu tingkat, bukan lima tingkat. Catat token di komentar CSS.</p><p class=\"mb-4\">Minta AI merapikan padding section saja. Tolak rewrite warna dan tipografi.</p><p class=\"mb-4\">Clincoo tidak menormalisasi spasi. Token yang sama membuat pratinjau dan app.clincoo.buzz terasa satu produk.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Unify Clincoo Section Padding, Do Not Mix Random Numbers",
          desc: "Sections padded 32px, 48px, and 80px on one page feel like different systems.",
          content: "<p class=\"mb-4\">Clincoo landings often give the hero 96px padding, features 40px, and FAQ 24px. The vertical rhythm breaks.</p><p class=\"mb-4\">Pick two tokens, such as 48px desktop and 32px mobile, then apply them to every section in editor.clincoo.buzz.</p><p class=\"mb-4\">The hero may be one step looser, not five. Record the tokens in a CSS comment.</p><p class=\"mb-4\">Ask AI to tidy section padding only. Reject a color and type rewrite.</p><p class=\"mb-4\">Clincoo does not normalize spacing. Shared tokens make preview and app.clincoo.buzz feel like one product.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "layout-hindari-height-100vh-mobile",
      langs: {
        "id": {
          title: "Hindari height 100vh untuk Hero Clincoo di Ponsel",
          desc: "100vh di HP termasuk bilah URL. Hero terpotong atau tombol CTA tertutup.",
          content: "<p class=\"mb-4\">Hero Clincoo dengan height:100vh sering memotong CTA di Safari iOS karena viewport menyusut saat bilah alamat muncul.</p><p class=\"mb-4\">Ganti 100vh dengan min-height dan padding di editor.clincoo.buzz, atau pakai 100dvh jika kamu sudah uji di perangkat nyata.</p><p class=\"mb-4\">Jangan menyembunyikan overflow hero hanya agar gambar penuh. Pengunjung harus melihat tombol tanpa scroll tersembunyi.</p><p class=\"mb-4\">Minta AI mengganti satu aturan tinggi. Tempel screenshot tinggi yang terpotong sebagai konteks.</p><p class=\"mb-4\">Clincoo menayangkan CSS apa adanya. Tinggi yang jujur menjaga CTA tetap di atas lipatan di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Avoid height 100vh for Clincoo Heroes on Phones",
          desc: "100vh on a phone includes the URL bar. The hero clips or hides the CTA.",
          content: "<p class=\"mb-4\">A Clincoo hero with height:100vh often clips the CTA in iOS Safari because the viewport shrinks when the address bar shows.</p><p class=\"mb-4\">Replace 100vh with min-height plus padding in editor.clincoo.buzz, or use 100dvh after you test on a real device.</p><p class=\"mb-4\">Do not hide hero overflow just to fill the photo. Visitors must see the button without a hidden scroll.</p><p class=\"mb-4\">Ask AI to change one height rule. Paste a screenshot of the clipped height as context.</p><p class=\"mb-4\">Clincoo ships the CSS as saved. Honest height keeps the CTA above the fold on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
