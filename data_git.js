// Clincoo Docs — kategori Git (6 Oktober 2026, 23:00 WIB) — 2 artikel
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
}
]
};
