// Clincoo Blog — Data kategori: workflow
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["workflow"] = {
  names: { "id": "Alur Kerja", "en": "Workflow" },
  flag: "🗂️",
  articles: [
    {
      id: "workflow-commit-kecil-satu-halaman",
      langs: {
        "id": {
          title: "Commit Kecil per Halaman di Proyek Clincoo",
          desc: "Satu commit untuk seluruh situs membuat rollback mustahil. Simpan per halaman.",
          content: "<p class=\"mb-4\">Developer Clincoo sering menumpuk hero, form, dan footer dalam satu commit. Jika deploy gagal, seluruh kemajuan ikut mundur.</p><p class=\"mb-4\">Selesai satu halaman di editor.clincoo.buzz, commit dengan pesan yang menyebut nama file. Jangan campur perbaikan CSS global.</p><p class=\"mb-4\">Jika AI mengubah tiga file, pecah menjadi tiga commit atau tolak dan minta ulang per file.</p><p class=\"mb-4\">Pratinjau subdomain setelah setiap push. Catat hash commit yang lulus tes.</p><p class=\"mb-4\">Clincoo menayangkan repo apa adanya. Commit kecil adalah jaring pengaman, bukan birokrasi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Make Small Commits per Page on a Clincoo Project",
          desc: "One commit for the whole site makes rollback impossible. Save per page.",
          content: "<p class=\"mb-4\">Clincoo developers often dump hero, form, and footer into one commit. If deploy fails, all progress rolls back.</p><p class=\"mb-4\">When one page is done in editor.clincoo.buzz, commit with a message that names the file. Do not mix a global CSS fix.</p><p class=\"mb-4\">If the AI changes three files, split into three commits or refuse and ask again per file.</p><p class=\"mb-4\">Preview the subdomain after each push. Note the commit hash that passed tests.</p><p class=\"mb-4\">Clincoo ships the repo as it is. Small commits are a safety net, not bureaucracy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "workflow-satu-tugas-sebelum-buka-ai",
      langs: {
        "id": {
          title: "Tulis Satu Tugas sebelum Membuka Asisten AI Clincoo",
          desc: "Prompt tanpa batas menghasilkan rewrite. Tetapkan hasil yang diinginkan dulu.",
          content: "<p class=\"mb-4\">Stuck di layout Clincoo sering berakhir dengan permintaan \"perbaiki semuanya\". AI lalu menyentuh file yang sudah benar.</p><p class=\"mb-4\">Tulis satu kalimat: file, gejala, dan hasil lulus tes. Contoh: index.html hero overflow di 375px, harus satu kolom tanpa scroll samping.</p><p class=\"mb-4\">Tempel error konsol lengkap. Jangan kirim seluruh repo jika hanya satu kelas CSS.</p><p class=\"mb-4\">Jika jawaban melebar, hentikan dan ulangi dengan batas file. Simpan prompt yang berhasil di catatan proyek.</p><p class=\"mb-4\">Clincoo mengeksekusi kode yang kamu terima. Tugas sempit menjaga AI tetap asisten, bukan penulis ulang situs.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Write One Task before You Open the Clincoo AI Assistant",
          desc: "An unbounded prompt produces a rewrite. Define the passing result first.",
          content: "<p class=\"mb-4\">Getting stuck on a Clincoo layout often ends with \"fix everything\". The AI then touches files that already work.</p><p class=\"mb-4\">Write one sentence: file, symptom, and passing result. Example: index.html hero overflows at 375px; it must be one column with no side scroll.</p><p class=\"mb-4\">Paste the full console error. Do not send the whole repo for one CSS class.</p><p class=\"mb-4\">If the answer sprawls, stop and repeat with a file limit. Save prompts that work in the project notes.</p><p class=\"mb-4\">Clincoo runs the code you accept. A narrow task keeps the AI an assistant, not a site rewriter.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
