// Clincoo Blog — Data kategori: git
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["git"] = {
  names: { "id": "Git", "en": "Git" },
  flag: "🌿",
  articles: [
    {
      id: "git-baca-diff-sebelum-commit",
      langs: {
        "id": {
          title: "Baca Diff sebelum Commit Perubahan Workspace Clincoo",
          desc: "Commit tanpa membaca diff menyimpan file yang tidak kamu maksud. Cek dulu, baru simpan riwayat.",
          content: "<p class=\"mb-4\">Banyak proyek Clincoo rusak karena satu commit membawa file yang tidak terkait: CSS percobaan, file cadangan, atau hasil generate AI yang belum dibaca.</p><p class=\"mb-4\">Sebelum commit, buka ringkasan perubahan. Baca nama file. Jika ada file yang tidak kamu sentuh hari ini, keluarkan dari commit.</p><p class=\"mb-4\">Baca potongan diff, bukan hanya daftar file. Cari baris yang menghapus class, mengubah path gambar, atau menulis ulang seluruh fungsi.</p><p class=\"mb-4\">Jika diff terlalu besar, pecah jadi dua commit: satu untuk konten, satu untuk gaya. Jangan biarkan AI menumpuk semua edit jadi satu pesan.</p><p class=\"mb-4\">Clincoo menyimpan file workspace. Git hanya berguna jika setiap commit bisa dibaca manusia dalam lima menit.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Read the Diff before You Commit a Clincoo Workspace Change",
          desc: "A commit you never reviewed stores files you did not mean to keep. Read first, then save history.",
          content: "<p class=\"mb-4\">Many Clincoo projects break because one commit bundled unrelated files: trial CSS, backup copies, or unread AI output.</p><p class=\"mb-4\">Before you commit, open the change summary. Read every file name. If a file was not part of today’s task, leave it out.</p><p class=\"mb-4\">Read the diff hunks, not only the file list. Watch for deleted classes, changed image paths, or full function rewrites.</p><p class=\"mb-4\">If the diff is huge, split it: one commit for content, one for style. Do not let the AI pile every edit into a single message.</p><p class=\"mb-4\">Clincoo stores workspace files. Git only helps when a human can read each commit in five minutes.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "git-satu-tugas-satu-commit",
      langs: {
        "id": {
          title: "Satu Tugas Clincoo, Satu Commit — Jangan Campur Perbaikan",
          desc: "Commit yang mencampur hero, form, dan CSS membuat revert mustahil. Pisahkan tugas.",
          content: "<p class=\"mb-4\">Kalau tombol kirim form rusak setelah kamu “sekalian” merapikan hero, commit campur adalah penyebabnya. Riwayat tidak bisa mengembalikan satu bagian.</p><p class=\"mb-4\">Selesaikan satu tugas di editor Clincoo. Pratinjau. Baru commit dengan pesan yang menyebut tugas itu saja.</p><p class=\"mb-4\">Perbaikan typo di halaman lain menunggu commit berikutnya. Jangan titip. AI sering menambahkan file tetangga tanpa diminta.</p><p class=\"mb-4\">Pesan commit yang bagus: “Perbaiki validasi email di form kontak.” Pesan yang buruk: “update” atau “perbaikan berbagai hal.”</p><p class=\"mb-4\">Cabang atau salinan folder tidak menggantikan commit yang bersih. Kamu butuh riwayat yang bisa dilepas satu per satu.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "One Clincoo Task, One Commit — Do Not Mix Fixes",
          desc: "A commit that mixes the hero, a form, and CSS makes revert impossible. Split the work.",
          content: "<p class=\"mb-4\">If the submit button breaks after you “also” tidied the hero, a mixed commit is why. History cannot restore one part.</p><p class=\"mb-4\">Finish one task in the Clincoo editor. Preview it. Then commit with a message that names only that task.</p><p class=\"mb-4\">A typo on another page waits for the next commit. Do not hitchhike. The AI often touches a neighbor file unasked.</p><p class=\"mb-4\">A good message: “Fix email validation on the contact form.” A bad one: “update” or “various fixes.”</p><p class=\"mb-4\">A branch or a copied folder does not replace a clean commit. You need history you can drop one piece at a time.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "git-pesan-commit-yang-bisa-dicari",
      langs: {
        "id": {
          title: "Tulis Pesan Commit yang Bisa Dicari Enam Bulan Lagi",
          desc: "Pesan “fix” tidak membantu saat bug kembali. Tulis apa yang berubah dan mengapa.",
          content: "<p class=\"mb-4\">Enam bulan kemudian kamu membuka riwayat Clincoo dan hanya melihat “fix”, “update css”, “perbaiki.” Tidak ada petunjuk halaman mana.</p><p class=\"mb-4\">Tulis subjek pendek: kata kerja + objek. Contoh: “Turunkan ukuran gambar galeri beranda.” Lanjut satu kalimat alasan jika perlu.</p><p class=\"mb-4\">Sebut file atau halaman jika nama tugas ambigu. Jangan salin seluruh diff ke pesan. Jangan tempel output AI mentah.</p><p class=\"mb-4\">Jika commit memperbaiki regresi, sebut commit atau gejala yang kembali. Itu lebih berharga daripada kata “hotfix.”</p><p class=\"mb-4\">Editor Clincoo dan Git adalah alat yang sama-sama butuh label. Pesan yang bisa dicari menghemat obrolan AI berikutnya.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Write Commit Messages You Can Search Six Months Later",
          desc: "A message that only says “fix” fails when the bug returns. Say what changed and why.",
          content: "<p class=\"mb-4\">Six months later you open Clincoo history and see only “fix”, “update css”, “repair.” No page name remains.</p><p class=\"mb-4\">Write a short subject: verb + object. Example: “Reduce homepage gallery image size.” Add one reason sentence if needed.</p><p class=\"mb-4\">Name the file or page when the task is ambiguous. Do not paste the whole diff. Do not paste raw AI output.</p><p class=\"mb-4\">If the commit fixes a regression, name the earlier commit or the symptom that returned. That beats the word “hotfix.”</p><p class=\"mb-4\">The Clincoo editor and Git both need labels. A searchable message saves the next AI chat.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "git-jangan-commit-kunci-dan-env",
      langs: {
        "id": {
          title: "Jangan Commit Kunci API, File .env, atau Token ke Riwayat",
          desc: "Rahasia yang masuk commit tetap ada meski file dihapus belakangan. Saring sebelum add.",
          content: "<p class=\"mb-4\">Formulir Clincoo yang memanggil layanan pihak ketiga sering menyimpan kunci di file konfigurasi. Commit itu menyalin kunci ke setiap klon.</p><p class=\"mb-4\">Sebelum add, cari nama file .env, credentials, token, dan JSON yang berisi secret. Keluarkan. Ganti dengan contoh bernama .env.example.</p><p class=\"mb-4\">Menghapus file di commit berikutnya tidak menghapus isinya dari riwayat. Anggap kunci itu bocor. Putar kunci di layanan asalnya.</p><p class=\"mb-4\">Jangan minta AI “simpan semua file baru.” Minta daftar file yang akan masuk commit, lalu setujui satu per satu.</p><p class=\"mb-4\">Workspace Clincoo milikmu. Riwayat Git yang bersih melindungi pengunjung dan akun layanan, bukan hanya folder proyek.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Do Not Commit API Keys, .env Files, or Tokens into History",
          desc: "A secret that enters a commit stays even after you delete the file later. Filter before you add.",
          content: "<p class=\"mb-4\">A Clincoo form that calls a third-party service often keeps a key in a config file. That commit copies the key to every clone.</p><p class=\"mb-4\">Before you add, search for .env, credentials, token files, and JSON that holds secrets. Leave them out. Replace them with an .env.example.</p><p class=\"mb-4\">Deleting the file in a later commit does not remove it from history. Treat the key as leaked. Rotate it at the provider.</p><p class=\"mb-4\">Do not tell the AI to “save every new file.” Ask for the list that would enter the commit, then approve one by one.</p><p class=\"mb-4\">The Clincoo workspace is yours. Clean Git history protects visitors and service accounts, not only the project folder.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "git-uji-di-cabang-sebelum-gabung",
      langs: {
        "id": {
          title: "Uji Perubahan Clincoo di Cabang sebelum Menggabungkan ke Utama",
          desc: "Edit langsung di utama membuat situs publik ikut rusak. Cabang menahan percobaan.",
          content: "<p class=\"mb-4\">Percobaan menu baru di file yang sama dengan beranda live adalah risiko. Satu simpan di workspace utama bisa terbit sebelum sempat dicek.</p><p class=\"mb-4\">Buat cabang atau salinan kerja untuk tugas itu. Edit di editor Clincoo pada salinan. Pratinjau sampai form, mobile, dan tautan benar.</p><p class=\"mb-4\">Baru gabungkan ke utama. Jika gagal, cabang bisa dibuang tanpa menyentuh riwayat produksi.</p><p class=\"mb-4\">Jangan gabungkan cabang yang masih berisi console.log, CSS komentar panjang, atau file percobaan AI.</p><p class=\"mb-4\">Git bukan upacara. Cabang adalah pagar antara percobaan dan pengunjung yang membuka situs Clincoo-mu hari ini.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Test Clincoo Changes on a Branch before You Merge to Main",
          desc: "Editing straight on main lets a public site break with you. A branch holds the experiment.",
          content: "<p class=\"mb-4\">Trying a new menu in the same files as the live home page is a risk. One save on main can publish before you check.</p><p class=\"mb-4\">Create a branch or a working copy for that task. Edit it in the Clincoo editor. Preview until the form, mobile view, and links work.</p><p class=\"mb-4\">Only then merge to main. If it fails, the branch can go away without touching production history.</p><p class=\"mb-4\">Do not merge a branch that still holds console.log calls, long CSS comments, or leftover AI trial files.</p><p class=\"mb-4\">Git is not ceremony. A branch is the fence between an experiment and the visitor who opens your Clincoo site today.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ]
};
