// Clincoo Blog — Data kategori: komponen
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["komponen"] = {
  names: { "id": "Komponen", "en": "Components" },
  flag: "\u25a3",
  articles: [
    {
      id: "komponen-satu-kartu-satu-tugas",
      langs: {
        "id": {
          title: "Satu Kartu Komponen, Satu Tugas di Clincoo",
          desc: "Kartu yang mencampur judul, form, dan navigasi sulit diubah. Pisahkan tugas per komponen.",
          content: "<p class=\"mb-4\">Kartu Clincoo berisi judul, tiga tombol, form, dan tautan footer sekaligus. Mengganti satu bagian merusak yang lain.</p><p class=\"mb-4\">Pisahkan kartu jadi blok kecil di editor.clincoo.buzz: header, isi, dan aksi. Satu file atau satu blok untuk satu tugas.</p><p class=\"mb-4\">Jangan minta AI merancang ulang seluruh kartu. Minta hanya memecah satu tanggung jawab.</p><p class=\"mb-4\">Tempel HTML kartu yang gemuk. Cek pratinjau setelah pecah agar jarak dan hierarki tetap jelas.</p><p class=\"mb-4\">Clincoo merender markup apa adanya. Komponen ramping lebih mudah dirawat di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "One Component Card, One Job in Clincoo",
          desc: "A card that mixes title, form, and navigation is hard to change. Split one job per component.",
          content: "<p class=\"mb-4\">A Clincoo card holds a title, three buttons, a form, and footer links at once. Changing one part breaks the rest.</p><p class=\"mb-4\">Split the card into small blocks in editor.clincoo.buzz: header, body, and actions. One block for one job.</p><p class=\"mb-4\">Do not ask AI to redesign the whole card. Ask it to split only one responsibility.</p><p class=\"mb-4\">Paste the bloated card HTML. Check preview after the split so spacing and hierarchy stay clear.</p><p class=\"mb-4\">Clincoo renders markup as-is. Lean components are easier to maintain on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "komponen-satu-tombol-primer",
      langs: {
        "id": {
          title: "Satu Tombol Primer per Blok Komponen Clincoo",
          desc: "Dua tombol sama kuat membingungkan. Tandai satu aksi utama per komponen.",
          content: "<p class=\"mb-4\">Blok aksi Clincoo punya dua tombol filled berdampingan. Pengunjung tidak tahu mana yang aman ditekan.</p><p class=\"mb-4\">Tandai satu tombol primer di editor.clincoo.buzz. Tombol kedua cukup outlined atau teks.</p><p class=\"mb-4\">Jangan biarkan AI menyamakan semua tombol agar terlihat rapi. Hierarki aksi lebih penting daripada simetri.</p><p class=\"mb-4\">Minta AI hanya menurunkan gaya tombol kedua. Tempel CSS dan HTML tombol yang bentrok.</p><p class=\"mb-4\">Clincoo tidak memilih aksi utama untukmu. Satu primer menjaga alur jelas di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "One Primary Button per Clincoo Component Block",
          desc: "Two equally strong buttons confuse people. Mark one main action per component.",
          content: "<p class=\"mb-4\">A Clincoo action block has two filled buttons side by side. Visitors cannot tell which is safe to press.</p><p class=\"mb-4\">Mark one primary button in editor.clincoo.buzz. The second button can stay outlined or text-only.</p><p class=\"mb-4\">Do not let AI equalize every button to look tidy. Action hierarchy matters more than symmetry.</p><p class=\"mb-4\">Ask AI to lower only the second button style. Paste the clashing button HTML and CSS.</p><p class=\"mb-4\">Clincoo does not pick a main action for you. One primary keeps the flow clear on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "komponen-modal-tutup-escape",
      langs: {
        "id": {
          title: "Tutup Modal Komponen dengan Escape dan Fokus Kembali",
          desc: "Modal tanpa Escape dan tanpa kembalikan fokus menjebak keyboard.",
          content: "<p class=\"mb-4\">Modal Clincoo hanya punya tombol silang. Tab keluar dari dialog dan Escape tidak melakukan apa pun.</p><p class=\"mb-4\">Tambah listener keydown Escape dan simpan elemen pemicu di editor.clincoo.buzz. Setelah tutup, kembalikan fokus ke tombol pembuka.</p><p class=\"mb-4\">Jangan andalkan klik overlay saja. Keyboard dan pembaca layar butuh jalur tutup yang sama.</p><p class=\"mb-4\">Minta AI hanya menambah Escape plus restore fokus. Tempel markup modal dan tombol pembuka.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu tempel. Modal yang bisa ditutup aman dipakai di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Close a Component Modal with Escape and Restore Focus",
          desc: "A modal without Escape and without restored focus traps the keyboard.",
          content: "<p class=\"mb-4\">A Clincoo modal only has an X button. Tab leaves the dialog and Escape does nothing.</p><p class=\"mb-4\">Add a keydown Escape listener and store the trigger in editor.clincoo.buzz. After close, move focus back to the opener.</p><p class=\"mb-4\">Do not rely on overlay click alone. Keyboard and screen readers need the same close path.</p><p class=\"mb-4\">Ask AI to add only Escape plus focus restore. Paste the modal markup and the opener button.</p><p class=\"mb-4\">Clincoo runs the script you paste. A closable modal is safe to use on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "komponen-id-unik-jangan-duplikat",
      langs: {
        "id": {
          title: "Jangan Duplikat id saat Menyalin Komponen Clincoo",
          desc: "Salin-tempel kartu membawa id yang sama. Label, fokus, dan skrip lalu salah sasaran.",
          content: "<p class=\"mb-4\">Dua kartu Clincoo memakai id=\"cta\". label for dan getElementById merujuk elemen pertama saja.</p><p class=\"mb-4\">Ganti id jadi unik per instance di editor.clincoo.buzz. Samakan atribut for dan aria-controls.</p><p class=\"mb-4\">Jangan biarkan AI menyalin blok utuh tanpa meninjau id. Satu halaman tidak boleh punya id kembar.</p><p class=\"mb-4\">Minta AI hanya merapikan id yang bentrok. Tempel dua blok yang identik.</p><p class=\"mb-4\">Clincoo tidak menormalkan id sendiri. id unik menjaga komponen bisa diikat di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Duplicate ids When Copying a Clincoo Component",
          desc: "Copy-paste cards keep the same id. Labels, focus, and scripts then hit the wrong node.",
          content: "<p class=\"mb-4\">Two Clincoo cards use id=\"cta\". label for and getElementById only reach the first node.</p><p class=\"mb-4\">Make each instance id unique in editor.clincoo.buzz. Match for and aria-controls to the new id.</p><p class=\"mb-4\">Do not let AI copy a whole block without reviewing ids. One page must not share duplicate ids.</p><p class=\"mb-4\">Ask AI to fix only the clashing ids. Paste the two identical blocks.</p><p class=\"mb-4\">Clincoo does not normalize ids for you. Unique ids keep components bindable on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "komponen-state-kosong-jelas",
      langs: {
        "id": {
          title: "Tulis State Kosong yang Jelas pada Komponen Daftar Clincoo",
          desc: "Daftar kosong tanpa pesan terlihat rusak. Beri judul, alasan, dan satu aksi berikut.",
          content: "<p class=\"mb-4\">Grid proyek Clincoo kosong hanya menampilkan latar putih. Pengunjung mengira halaman gagal dimuat.</p><p class=\"mb-4\">Tambah judul singkat, satu kalimat alasan, dan satu tombol aksi di editor.clincoo.buzz saat data belum ada.</p><p class=\"mb-4\">Jangan isi state kosong dengan skeleton abadi. Skeleton untuk memuat, state kosong untuk tidak ada data.</p><p class=\"mb-4\">Minta AI hanya menambah blok kosong. Tempel markup daftar tanpa item.</p><p class=\"mb-4\">Clincoo menampilkan HTML yang kamu tulis. State kosong yang jelas menjaga kepercayaan di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Write a Clear Empty State on Clincoo List Components",
          desc: "An empty list with no message looks broken. Give a title, a reason, and one next action.",
          content: "<p class=\"mb-4\">An empty Clincoo project grid shows only a white background. Visitors think the page failed to load.</p><p class=\"mb-4\">Add a short title, one reason sentence, and one action button in editor.clincoo.buzz when data is missing.</p><p class=\"mb-4\">Do not fill an empty state with an endless skeleton. Skeletons are for loading; empty states are for no data.</p><p class=\"mb-4\">Ask AI to add only the empty block. Paste the list markup with no items.</p><p class=\"mb-4\">Clincoo shows the HTML you write. A clear empty state keeps trust on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
