// Clincoo Docs — kategori Git (6 Oktober 2026, 23:00 WIB) — 2 artikel
// Clincoo Docs — tambah 5 artikel Git (7 Oktober 2026, 04:00 WIB)
// Clincoo Docs — tambah 5 artikel Git (7 Oktober 2026, 05:00 WIB)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["git"] = {
 "names": { "id": "Git", "en": "Git" },
 "articles": [
{
 "id": "git-cek-status-sebelum-commit",
 "langs": {
  "id": {
   "title": "Cara Cek git status Sebelum Commit",
   "desc": "Tata cara meninjau berkas yang berubah di proyek Clincoo sebelum commit.",
   "content": "<p class=\"mb-4\">Commit tanpa melihat status sering menyeret berkas percobaan, catatan lokal, atau aset yang belum dioptimasi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca status, lalu diff</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jalankan git status. Pastikan hanya berkas yang memang diubah yang masuk. Lanjut git diff untuk melihat baris, bukan hanya nama berkas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pisahkan yang belum siap</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jangan git add . jika ada berkas yang masih coba-coba. Stage per jalur, commit dengan pesan yang menyebut halaman. Simpan contoh pesan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Git — git-status",
   "sourceUrl": "https://git-scm.com/docs/git-status",
   "sourceSnippet": "git status shows the working tree status, including staged and unstaged changes.",
   "source2": "Git — git-diff",
   "source2Url": "https://git-scm.com/docs/git-diff",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Check git status Before a Commit",
   "desc": "How to review changed files in a Clincoo project before committing.",
   "content": "<p class=\"mb-4\">A commit without reading status often drags in experiments, local notes, or assets that are not optimized yet.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read status, then the diff</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> run git status. Confirm only intended files are included. Follow with git diff to see lines, not just file names.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Leave unfinished work out</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> do not git add . if a file is still a trial. Stage by path and commit with a message that names the page. Save a sample message on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Git — git-status",
   "sourceUrl": "https://git-scm.com/docs/git-status",
   "sourceSnippet": "git status shows the working tree status, including staged and unstaged changes.",
   "source2": "Git — git-diff",
   "source2Url": "https://git-scm.com/docs/git-diff",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "git-buat-branch-untuk-percobaan",
 "langs": {
  "id": {
   "title": "Cara Buat Branch untuk Percobaan",
   "desc": "Tata cara memisahkan percobaan layout Clincoo dari cabang utama dengan branch pendek.",
   "content": "<p class=\"mb-4\">Mengubah layout langsung di cabang utama menyulitkan kembali ke versi yang sudah tayang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cabang dari titik yang bersih</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> mulai dari commit terakhir yang lolos pratinjau. Buat branch dengan nama tugas, misalnya coba-grid-harga, lalu kerjakan hanya di sana.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gabungkan setelah pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka pratinjau branch. Jika lolos, gabungkan ke utama. Jika gagal, hapus branch tanpa mengubah yang tayang. Catat nama branch di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Git — git-branch",
   "sourceUrl": "https://git-scm.com/docs/git-branch",
   "sourceSnippet": "git branch lists, creates, or deletes branches.",
   "source2": "Git — git-switch",
   "source2Url": "https://git-scm.com/docs/git-switch",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Create a Branch for an Experiment",
   "desc": "How to keep a Clincoo layout experiment off the main branch with a short branch.",
   "content": "<p class=\"mb-4\">Editing layout directly on the main branch makes it hard to return to the published version.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Branch from a clean point</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> start from the last commit that passed preview. Create a branch named for the task, such as try-pricing-grid, and work only there.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Merge after preview</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the branch preview. If it passes, merge to main. If it fails, delete the branch without touching what is live. Note the branch name on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Git — git-branch",
   "sourceUrl": "https://git-scm.com/docs/git-branch",
   "sourceSnippet": "git branch lists, creates, or deletes branches.",
   "source2": "Git — git-switch",
   "source2Url": "https://git-scm.com/docs/git-switch",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "git-lihat-diff-sebelum-commit",
 "langs": {
  "id": {
   "title": "Cara Lihat git diff Sebelum Commit",
   "desc": "Tata cara membaca perubahan baris di proyek Clincoo sebelum commit supaya percobaan tidak ikut terdorong.",
   "content": "<p class=\"mb-4\">Nama berkas di git status tidak menjelaskan baris mana yang berubah. Diff menunjukkannya sebelum commit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca diff, bukan hanya nama berkas</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jalankan git diff untuk berkas yang belum di-stage dan git diff --staged untuk yang sudah. Perhatikan baris yang terhapus: satu selector yang hilang bisa merusak layout kartu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Commit hanya potongan yang selesai</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jika diff mencampur perbaikan bug dan percobaan warna, stage per hunk. Catat judul commit di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> agar riwayatnya mudah dicari.</p>",
   "source": "Git — git-diff",
   "sourceUrl": "https://git-scm.com/docs/git-diff",
   "sourceSnippet": "git diff shows changes between the working tree, the index, and commits.",
   "source2": "Git — git-add",
   "source2Url": "https://git-scm.com/docs/git-add",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Read git diff Before a Commit",
   "desc": "How to read line changes in a Clincoo project before a commit so experiments are not pushed along.",
   "content": "<p class=\"mb-4\">File names in git status do not show which lines changed. The diff does, before you commit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read the diff, not only the file name</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> run git diff for unstaged files and git diff --staged for staged ones. Watch deleted lines: one missing selector can break a card layout.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Commit only the finished slice</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> if the diff mixes a bug fix and a color trial, stage by hunk. Record the commit title on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the history is easy to search.</p>",
   "source": "Git — git-diff",
   "sourceUrl": "https://git-scm.com/docs/git-diff",
   "sourceSnippet": "git diff shows changes between the working tree, the index, and commits.",
   "source2": "Git — git-add",
   "source2Url": "https://git-scm.com/docs/git-add",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "git-pull-origin-main-sebelum-kerja",
 "langs": {
  "id": {
   "title": "Cara git pull origin main Sebelum Mulai Kerja",
   "desc": "Tata cara mengambil commit terbaru dari cabang main Clincoo sebelum mengedit, supaya tidak menimpa kerja orang lain.",
   "content": "<p class=\"mb-4\">Mengedit dari commit lama membuat deploy menimpa perbaikan yang sudah ada di main.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tarik main saat pohon bersih</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pastikan git status bersih, lalu jalankan git pull origin main. Jika ada konflik, jangan lanjut mengedit sampai penanda konflik hilang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan kerja dari salinan basi</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bandingkan hash commit lokal dengan remote sebelum deploy. Catat waktu pull di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> bila halaman sempat tampil versi lama.</p>",
   "source": "Git — git-pull",
   "sourceUrl": "https://git-scm.com/docs/git-pull",
   "sourceSnippet": "git pull fetches from a remote and integrates changes into the current branch.",
   "source2": "Git — git-status",
   "source2Url": "https://git-scm.com/docs/git-status",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to git pull origin main Before You Start",
   "desc": "How to fetch the latest commits from the Clincoo main branch before editing so you do not overwrite someone else's work.",
   "content": "<p class=\"mb-4\">Editing from an old commit makes a deploy overwrite fixes that are already on main.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pull main on a clean tree</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> confirm git status is clean, then run git pull origin main. If there is a conflict, do not keep editing until the conflict markers are gone.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not work from a stale copy</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> compare the local commit hash with the remote before deploy. Note the pull time on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> if a page briefly showed an old version.</p>",
   "source": "Git — git-pull",
   "sourceUrl": "https://git-scm.com/docs/git-pull",
   "sourceSnippet": "git pull fetches from a remote and integrates changes into the current branch.",
   "source2": "Git — git-status",
   "source2Url": "https://git-scm.com/docs/git-status",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "git-pesan-commit-yang-jelas",
 "langs": {
  "id": {
   "title": "Cara Tulis Pesan Commit yang Jelas",
   "desc": "Tata cara menulis pesan commit Clincoo yang menyebut apa yang berubah dan mengapa, bukan hanya update.",
   "content": "<p class=\"mb-4\">Pesan commit yang kosong membuat riwayat tidak bisa dipakai saat mencari kapan bug masuk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu kalimat, satu maksud</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis subjek yang menyebut halaman dan tindakan, misalnya perbaiki kontras tombol hero. Hindari pesan update, fix, atau wip.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pisahkan jika ada dua alasan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jangan gabung ganti copy dan ganti layout dalam satu commit. Simpan pola pesan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> agar tim memakai format yang sama.</p>",
   "source": "Git — git-commit",
   "sourceUrl": "https://git-scm.com/docs/git-commit",
   "sourceSnippet": "git commit records changes with a message that describes the snapshot.",
   "source2": "Conventional Commits",
   "source2Url": "https://www.conventionalcommits.org/en/v1.0.0/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Write a Clear Commit Message",
   "desc": "How to write a Clincoo commit message that says what changed and why, not just update.",
   "content": "<p class=\"mb-4\">An empty commit message makes history useless when you need to find when a bug landed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One sentence, one intent</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write a subject that names the page and the action, for example fix hero button contrast. Avoid messages like update, fix, or wip.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Split when there are two reasons</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> do not mix a copy change and a layout change in one commit. Save the message pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the team uses the same format.</p>",
   "source": "Git — git-commit",
   "sourceUrl": "https://git-scm.com/docs/git-commit",
   "sourceSnippet": "git commit records changes with a message that describes the snapshot.",
   "source2": "Conventional Commits",
   "source2Url": "https://www.conventionalcommits.org/en/v1.0.0/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "git-jangan-commit-berkas-env",
 "langs": {
  "id": {
   "title": "Cara Agar Berkas .env Tidak Ter-commit",
   "desc": "Tata cara mengabaikan rahasia lokal di proyek Clincoo supaya kunci tidak masuk riwayat Git.",
   "content": "<p class=\"mb-4\">Berkas .env yang ikut commit memasukkan kunci ke riwayat, bahkan setelah file dihapus dari folder kerja.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Masukkan pola ke gitignore</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan .env dan .env.local ke .gitignore sebelum file itu dibuat. Commit hanya .env.example yang berisi nama variabel tanpa nilai.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek status sebelum push</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jalankan git status dan pastikan .env tidak untracked yang akan di-add. Jika sempat ter-commit, jangan lanjut push; catat langkah perbaikan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Git — gitignore",
   "sourceUrl": "https://git-scm.com/docs/gitignore",
   "sourceSnippet": "A gitignore file specifies intentionally untracked files that Git should ignore.",
   "source2": "GitHub — Removing sensitive data",
   "source2Url": "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Keep .env Files Out of Commits",
   "desc": "How to ignore local secrets in a Clincoo project so keys do not enter Git history.",
   "content": "<p class=\"mb-4\">A committed .env puts keys into history even after the file is removed from the working folder.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add the pattern to gitignore</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add .env and .env.local to .gitignore before the file is created. Commit only .env.example with variable names and no values.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check status before push</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> run git status and confirm .env is not an untracked file about to be added. If it was committed, do not push; record the fix steps on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Git — gitignore",
   "sourceUrl": "https://git-scm.com/docs/gitignore",
   "sourceSnippet": "A gitignore file specifies intentionally untracked files that Git should ignore.",
   "source2": "GitHub — Removing sensitive data",
   "source2Url": "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "git-stash-sebelum-pindah-branch",
 "langs": {
  "id": {
   "title": "Cara git stash Sebelum Pindah Branch",
   "desc": "Tata cara menyimpan kerja yang belum commit di Clincoo sebelum pindah branch, lalu mengambilnya kembali.",
   "content": "<p class=\"mb-4\">Pindah branch dengan perubahan menggantung sering gagal, atau menimpa berkas yang sedang dipakai cabang lain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan dengan pesan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jalankan git stash push -m \"hero setengah jadi\" saat harus pindah branch. Jangan stash jika berkas baru belum di-add; gunakan git stash -u hanya bila memang ingin menyertakan untracked.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ambil kembali di branch yang benar</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> setelah kembali, git stash list lalu git stash pop. Jika konflik, selesaikan sebelum lanjut. Catat nama stash di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> bila kerja ditunda lebih dari sehari.</p>",
   "source": "Git — git-stash",
   "sourceUrl": "https://git-scm.com/docs/git-stash",
   "sourceSnippet": "git stash saves local modifications and reverts the working directory to match HEAD.",
   "source2": "Git — git-switch",
   "source2Url": "https://git-scm.com/docs/git-switch",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to git stash Before Switching Branches",
   "desc": "How to save uncommitted Clincoo work before switching branches, then restore it.",
   "content": "<p class=\"mb-4\">Switching branches with hanging changes often fails, or overwrites files the other branch is using.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Save it with a message</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> run git stash push -m \"half-done hero\" when you must switch branches. Do not stash if a new file is not added yet; use git stash -u only when you really want untracked files included.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Restore it on the right branch</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> after you return, run git stash list then git stash pop. If there is a conflict, finish it before continuing. Note the stash name on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> if the work waits more than a day.</p>",
   "source": "Git — git-stash",
   "sourceUrl": "https://git-scm.com/docs/git-stash",
   "sourceSnippet": "git stash saves local modifications and reverts the working directory to match HEAD.",
   "source2": "Git — git-switch",
   "source2Url": "https://git-scm.com/docs/git-switch",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "git-log-oneline-cari-commit-baik",
 "langs": {
  "id": {
   "title": "Cara Baca git log --oneline untuk Cari Commit yang Baik",
   "desc": "Tata cara menelusuri riwayat commit Clincoo dengan git log --oneline sebelum reset atau revert.",
   "content": "<p class=\"mb-4\">Reset tanpa membaca log sering mengembalikan proyek ke commit yang salah. Satu baris per commit cukup untuk mengenali pesan dan hash.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca log singkat dulu</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jalankan git log --oneline -15. Hash di kiri adalah penanda commit. Pesan di kanan harus menyebut halaman atau perbaikan, bukan hanya \"update\".</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tandai commit yang aman</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> catat hash commit terakhir yang sudah tayang sebelum mencoba reset. Simpan cuplikan log di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> bila perlu membandingkan dua versi.</p>",
   "source": "Git — git-log",
   "sourceUrl": "https://git-scm.com/docs/git-log",
   "sourceSnippet": "git log shows commit logs. --oneline condenses each commit to one line.",
   "source2": "Git — git-show",
   "source2Url": "https://git-scm.com/docs/git-show",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Read git log --oneline to Find a Good Commit",
   "desc": "How to scan Clincoo commit history with git log --oneline before a reset or revert.",
   "content": "<p class=\"mb-4\">A reset without reading the log often lands on the wrong commit. One line per commit is enough to recognize the message and the hash.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read the short log first</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> run git log --oneline -15. The hash on the left identifies the commit. The message on the right should name the page or the fix, not just \"update\".</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Mark the safe commit</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> note the hash of the last commit that is already live before you try a reset. Save a log snippet on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> if you need to compare two versions.</p>",
   "source": "Git — git-log",
   "sourceUrl": "https://git-scm.com/docs/git-log",
   "sourceSnippet": "git log shows commit logs. --oneline condenses each commit to one line.",
   "source2": "Git — git-show",
   "source2Url": "https://git-scm.com/docs/git-show",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "git-restore-batalkan-ubah-lokal",
 "langs": {
  "id": {
   "title": "Cara git restore untuk Batalkan Perubahan Lokal",
   "desc": "Tata cara membuang ubahan berkas yang belum di-commit di proyek Clincoo tanpa menghapus commit lain.",
   "content": "<p class=\"mb-4\">Berkas percobaan yang belum di-commit bisa dibuang tanpa reset seluruh cabang. git restore mengembalikan berkas ke isi commit terakhir.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pulihkan satu berkas</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> cek git status dulu. Lalu git restore nama-berkas untuk membatalkan ubahan yang belum di-stage. Jika sudah di-stage, git restore --staged nama-berkas mengeluarkan dari index tanpa menghapus isi kerja.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan pulihkan semuanya sekaligus</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> hindari git restore . jika ada draf yang masih ingin disimpan. Pulihkan per jalur, lalu cek ulang status. Catat langkah ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Git — git-restore",
   "sourceUrl": "https://git-scm.com/docs/git-restore",
   "sourceSnippet": "git restore restores working tree files. --staged restores the index.",
   "source2": "Git — git-status",
   "source2Url": "https://git-scm.com/docs/git-status",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to git restore to Discard Local Changes",
   "desc": "How to discard uncommitted file changes in a Clincoo project without deleting other commits.",
   "content": "<p class=\"mb-4\">An experiment file that is not committed can be discarded without resetting the whole branch. git restore returns the file to the last commit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Restore one file</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> check git status first. Then git restore path discards unstaged edits. If the file is already staged, git restore --staged path removes it from the index without deleting the working copy.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not restore everything at once</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> avoid git restore . if a draft still needs to be kept. Restore by path, then check status again. Note the steps on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Git — git-restore",
   "sourceUrl": "https://git-scm.com/docs/git-restore",
   "sourceSnippet": "git restore restores working tree files. --staged restores the index.",
   "source2": "Git — git-status",
   "source2Url": "https://git-scm.com/docs/git-status",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "git-gitignore-node-modules-build",
 "langs": {
  "id": {
   "title": "Cara Abaikan node_modules dan Folder Build di .gitignore",
   "desc": "Tata cara menulis .gitignore agar dependensi dan hasil build Clincoo tidak ikut commit.",
   "content": "<p class=\"mb-4\">node_modules dan folder build besar, bisa dibuat ulang, dan membuat diff tidak terbaca. Mereka harus ada di .gitignore sebelum git add pertama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis pola abaikan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan node_modules/, dist/, dan .env ke .gitignore di akar repo. Jalankan git status: folder itu tidak boleh muncul sebagai untracked yang akan di-commit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keluarkan yang sudah terlacak</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jika folder sudah pernah di-commit, git rm -r --cached node_modules lalu commit .gitignore. Jangan hapus folder di disk. Simpan contoh pola di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Git — gitignore",
   "sourceUrl": "https://git-scm.com/docs/gitignore",
   "sourceSnippet": "A gitignore file specifies intentionally untracked files that Git should ignore.",
   "source2": "Git — git-rm",
   "source2Url": "https://git-scm.com/docs/git-rm",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Ignore node_modules and Build Folders in .gitignore",
   "desc": "How to write .gitignore so Clincoo dependencies and build output stay out of commits.",
   "content": "<p class=\"mb-4\">node_modules and build folders are large, can be regenerated, and make diffs unreadable. They belong in .gitignore before the first git add.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write ignore patterns</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add node_modules/, dist/, and .env to .gitignore at the repo root. Run git status: those folders must not appear as untracked files you are about to commit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Untrack what is already committed</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> if a folder was committed before, run git rm -r --cached node_modules and commit the .gitignore. Do not delete the folder on disk. Save a sample pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Git — gitignore",
   "sourceUrl": "https://git-scm.com/docs/gitignore",
   "sourceSnippet": "A gitignore file specifies intentionally untracked files that Git should ignore.",
   "source2": "Git — git-rm",
   "source2Url": "https://git-scm.com/docs/git-rm",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "git-add-patch-stage-sebagian",
 "langs": {
  "id": {
   "title": "Cara git add -p untuk Stage Sebagian Perubahan",
   "desc": "Tata cara memecah hunk di Clincoo supaya commit hanya berisi perbaikan yang memang siap.",
   "content": "<p class=\"mb-4\">Satu berkas sering berisi perbaikan bug dan percobaan gaya sekaligus. git add -p memilih hunk, bukan seluruh berkas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pilih hunk</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jalankan git add -p berkas.html. Jawab y untuk hunk yang siap, n untuk yang masih coba. s memecah hunk yang terlalu besar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Commit yang terpisah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> commit dulu hunk yang sudah di-stage, biarkan sisanya unstaged. Pesan commit hanya menyebut perbaikan yang masuk. Contoh alur ini ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Git — git-add",
   "sourceUrl": "https://git-scm.com/docs/git-add",
   "sourceSnippet": "git add -p interactively chooses hunks of the diff between the index and the work tree.",
   "source2": "Git — git-diff",
   "source2Url": "https://git-scm.com/docs/git-diff",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to git add -p to Stage Part of a Change",
   "desc": "How to split hunks in a Clincoo project so a commit only contains the fix that is ready.",
   "content": "<p class=\"mb-4\">One file often mixes a bug fix and a style experiment. git add -p selects hunks, not the whole file.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pick hunks</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> run git add -p file.html. Answer y for a hunk that is ready, n for one that is still a trial. s splits a hunk that is too large.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Commit separately</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> commit the staged hunks first and leave the rest unstaged. The commit message should name only the fix that went in. A sample flow is on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Git — git-add",
   "sourceUrl": "https://git-scm.com/docs/git-add",
   "sourceSnippet": "git add -p interactively chooses hunks of the diff between the index and the work tree.",
   "source2": "Git — git-diff",
   "source2Url": "https://git-scm.com/docs/git-diff",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "git-remote-v-sebelum-push",
 "langs": {
  "id": {
   "title": "Cara Cek git remote -v Sebelum Push",
   "desc": "Tata cara memastikan remote fetch dan push Clincoo mengarah ke repo yang benar sebelum git push.",
   "content": "<p class=\"mb-4\">Push ke remote yang salah menimpa riwayat proyek lain. git remote -v menampilkan URL fetch dan push sebelum perintah push dijalankan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca URL remote</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jalankan git remote -v. Baris origin harus menunjuk repo Clincoo yang sedang dikerjakan. Jika URL milik fork atau akun lain, jangan push.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Push ke cabang yang disengaja</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gunakan git push origin nama-branch, bukan git push --force ke main. Cabang percobaan tetap terpisah dari yang sudah tayang. Simpan checklist remote di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Git — git-remote",
   "sourceUrl": "https://git-scm.com/docs/git-remote",
   "sourceSnippet": "git remote -v shows the URLs that Git has stored for each remote.",
   "source2": "Git — git-push",
   "source2Url": "https://git-scm.com/docs/git-push",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Check git remote -v Before a Push",
   "desc": "How to confirm Clincoo fetch and push remotes point at the right repo before git push.",
   "content": "<p class=\"mb-4\">A push to the wrong remote overwrites another project's history. git remote -v prints the fetch and push URLs before you run push.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read the remote URL</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> run git remote -v. The origin lines must point at the Clincoo repo you are working on. If the URL belongs to a fork or another account, do not push.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Push the intended branch</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> use git push origin branch-name, not git push --force to main. An experiment branch stays separate from what is already live. Keep a remote checklist on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Git — git-remote",
   "sourceUrl": "https://git-scm.com/docs/git-remote",
   "sourceSnippet": "git remote -v shows the URLs that Git has stored for each remote.",
   "source2": "Git — git-push",
   "source2Url": "https://git-scm.com/docs/git-push",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
