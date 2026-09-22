// Clincoo Blog — Data kategori: warna
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["warna"] = {
  names: { "id": "warna", "en": "color" },
  flag: "🎨",
  articles: [
    {
      id: "warna-token-css-variabel",
      langs: {
        "id": {
          title: "Simpan Palet Clincoo sebagai Variabel CSS, Bukan Kode Hex Tersebar",
          desc: "Hex yang diulang di puluhan kelas sulit diubah. Satu token --warna-merek merapikan seluruh halaman.",
          content: "<p class=\"mb-4\">AI suka menempel #3B82F6 di tombol, tautan, dan ikon secara terpisah. Ganti merek berarti mencari-ganti yang rawan terlewat.</p><p class=\"mb-4\">Tulis token di :root: --warna-merek, --warna-teks, --warna-latar, --warna-batas. Kelas hanya merujuk var().</p><p class=\"mb-4\">Jangan biarkan AI menambahkan hex baru saat merapikan satu komponen. Minta ia memakai token yang sudah ada.</p><p class=\"mb-4\">Ubah satu nilai di pratinjau editor.clincoo.buzz. Jika hero dan CTA tidak ikut berubah, masih ada hex liar.</p><p class=\"mb-4\">Clincoo mengirim CSS yang kamu simpan. Token membuat ganti merek jadi satu baris, bukan seratus.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Store the Clincoo Palette as CSS Variables, Not Scattered Hex Codes",
          desc: "Repeated hex across dozens of classes is hard to change. One --brand token tidies the whole page.",
          content: "<p class=\"mb-4\">AI likes to paste #3B82F6 on buttons, links, and icons separately. A brand change then becomes a fragile find-and-replace.</p><p class=\"mb-4\">Declare tokens on :root: --warna-merek, --warna-teks, --warna-latar, --warna-batas. Classes should only reference var().</p><p class=\"mb-4\">Do not let the AI add a new hex while tidying one component. Ask it to reuse existing tokens.</p><p class=\"mb-4\">Change one value in editor.clincoo.buzz preview. If the hero and CTA stay put, a raw hex is still hiding.</p><p class=\"mb-4\">Clincoo ships the CSS you save. Tokens turn a brand swap into one line, not a hundred.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "warna-jangan-andalkan-warna-saja",
      langs: {
        "id": {
          title: "Jangan Andalkan Warna Saja untuk Status di Situs Clincoo",
          desc: "Merah dan hijau tanpa ikon atau teks gagal bagi pembaca buta warna.",
          content: "<p class=\"mb-4\">Form Clincoo sering menandai error hanya dengan border merah. Pengguna yang tidak membedakan merah-hijau tidak melihat masalahnya.</p><p class=\"mb-4\">Tambah ikon, label teks, atau pola. Warna boleh memperkuat, bukan menjadi satu-satunya sinyal.</p><p class=\"mb-4\">Cek kontras tautan pada latar. Jangan mengandalkan biru saja jika underline dihapus.</p><p class=\"mb-4\">Pratinjau di editor.clincoo.buzz, lalu bayangkan halaman tanpa hue. Apakah status masih terbaca?</p><p class=\"mb-4\">Clincoo tidak menambahkan arti di balik warna. Kamu yang wajib memberi tanda kedua.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Aplikasi Clincoo"
        },
        "en": {
          title: "Do Not Rely on Color Alone for Status on Clincoo Sites",
          desc: "Red and green without an icon or text fail color-blind readers.",
          content: "<p class=\"mb-4\">Clincoo forms often mark errors with a red border only. Readers who cannot tell red from green miss the problem.</p><p class=\"mb-4\">Add an icon, a text label, or a pattern. Color may reinforce a signal; it must not be the only one.</p><p class=\"mb-4\">Check link contrast on the background. Do not rely on blue alone if underlines were removed.</p><p class=\"mb-4\">Preview in editor.clincoo.buzz, then imagine the page with no hue. Can you still read status?</p><p class=\"mb-4\">Clincoo does not attach meaning behind a color. You must provide a second cue.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Clincoo app"
        }
      }
    },
    {
      id: "warna-palet-terbatas-merek",
      langs: {
        "id": {
          title: "Batasi Palet Warna Clincoo agar Merek Tidak Pecah",
          desc: "AI suka menambah aksen baru setiap komponen. Tiga sampai lima warna cukup untuk satu situs.",
          content: "<p class=\"mb-4\">Satu generate menambah ungu di badge, oranye di tombol, dan teal di ikon. Halaman terasa seperti demo, bukan merek.</p><p class=\"mb-4\">Tentukan warna primer, sekunder, netral, dan satu aksen bahaya. Tolak usulan palet baru kecuali kamu memang ganti identitas.</p><p class=\"mb-4\">Samakan hover dan fokus dengan versi lebih gelap atau lebih terang dari token yang sama, bukan hue baru.</p><p class=\"mb-4\">Buka pratinjau editor.clincoo.buzz dan hitung hue yang terlihat. Lebih dari lima biasanya berarti file belum rapat.</p><p class=\"mb-4\">Clincoo menayangkan setiap nilai yang kamu izinkan. Palet pendek lebih mudah diingat pengunjung.</p>",
          source: "Clincoo",
          sourceUrl: "https://blog.clincoo.buzz/",
          sourceSnippet: "Clincoo Blog"
        },
        "en": {
          title: "Limit the Clincoo Color Palette so the Brand Does Not Fracture",
          desc: "AI likes to add a new accent per component. Three to five colors are enough for one site.",
          content: "<p class=\"mb-4\">One generate adds purple on badges, orange on buttons, and teal on icons. The page feels like a demo, not a brand.</p><p class=\"mb-4\">Pick a primary, a secondary, neutrals, and one danger accent. Reject a new palette unless you are changing identity on purpose.</p><p class=\"mb-4\">Derive hover and focus from a darker or lighter token, not a fresh hue.</p><p class=\"mb-4\">Open editor.clincoo.buzz preview and count visible hues. More than five usually means the file is still loose.</p><p class=\"mb-4\">Clincoo ships every value you allow. A short palette is easier for visitors to remember.</p>",
          source: "Clincoo",
          sourceUrl: "https://blog.clincoo.buzz/",
          sourceSnippet: "Clincoo Blog"
        }
      }
    }
  ]
};
