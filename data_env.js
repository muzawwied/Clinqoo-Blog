// Clincoo Blog — Data kategori: env
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["env"] = {
  names: { "id": "Env", "en": "Env" },
  flag: "\u2699",
  articles: [
    {
      id: "env-jangan-commit-file-dotenv",
      langs: {
        "id": {
          title: "Jangan Commit File .env Proyek Clincoo ke Git",
          desc: "Kunci API di repositori publik bocor selamanya. Pakai .env.example tanpa nilai rahasia.",
          content: "<p class=\"mb-4\">Token Clincoo muncul di riwayat Git setelah .env ikut ter-commit. Rotasi kunci jadi wajib.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pastikan .env ada di .gitignore. Simpan .env.example berisi nama variabel saja.</p><p class=\"mb-4\">Jika sudah terlanjur, rotasi kunci di penyedia, lalu bersihkan riwayat. Jangan hanya menghapus file di commit baru.</p><p class=\"mb-4\">Minta AI meninjau .gitignore dan daftar variabel. Tempel isi .env.example tanpa nilai.</p><p class=\"mb-4\">Clincoo tidak menyimpan rahasia di repo blog. File contoh menjaga onboarding aman di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Commit a Clincoo .env File to Git",
          desc: "An API key in a public repo leaks forever. Ship a .env.example with names only.",
          content: "<p class=\"mb-4\">A Clincoo token shows up in Git history after .env is committed. Key rotation becomes mandatory.</p><p class=\"mb-4\">In editor.clincoo.buzz, keep .env in .gitignore. Store a .env.example with variable names only.</p><p class=\"mb-4\">If it already landed, rotate the key at the provider, then clean history. Deleting the file in a new commit is not enough.</p><p class=\"mb-4\">Ask AI to review .gitignore and the variable list. Paste .env.example without values.</p><p class=\"mb-4\">Clincoo does not keep secrets in the blog repo. An example file keeps onboarding safe on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "env-beda-dev-dan-produksi",
      langs: {
        "id": {
          title: "Pisahkan Variabel Lingkungan Dev dan Produksi Clincoo",
          desc: "URL API lokal jangan ikut ke produksi. Satu file per lingkungan, bukan if di kode.",
          content: "<p class=\"mb-4\">Pratinjau Clincoo memanggil localhost karena nilai dev tertinggal di bundel produksi.</p><p class=\"mb-4\">Di editor.clincoo.buzz, pakai .env.development dan .env.production. Jangan hardcode host di skrip.</p><p class=\"mb-4\">Cek nilai yang ter-embed sebelum deploy. Console.log host di build lokal, hapus sebelum rilis.</p><p class=\"mb-4\">Minta AI memisahkan satu konstanta host jadi variabel lingkungan. Tempel file konfigurasi.</p><p class=\"mb-4\">Clincoo punya app.clincoo.buzz dan editor.clincoo.buzz. Lingkungan terpisah mencegah salah tuju.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Split Clincoo Dev and Production Environment Variables",
          desc: "A local API URL must not ship to production. One file per environment, not an if in code.",
          content: "<p class=\"mb-4\">A Clincoo preview calls localhost because a dev value stayed in the production bundle.</p><p class=\"mb-4\">In editor.clincoo.buzz, use .env.development and .env.production. Do not hardcode the host in a script.</p><p class=\"mb-4\">Check embedded values before deploy. Log the host in a local build, then remove the log before release.</p><p class=\"mb-4\">Ask AI to turn one host constant into an environment variable. Paste the config file.</p><p class=\"mb-4\">Clincoo has app.clincoo.buzz and editor.clincoo.buzz. Separate environments keep traffic on the right host.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
