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
    },
    {
      id: "env-jangan-cetak-secret-di-console",
      langs: {
        "id": {
          title: "Jangan Cetak Nilai Secret Env di Console Clincoo",
          desc: "console.log process.env membocorkan token ke siapa pun yang membuka DevTools.",
          content: "<p class=\"mb-4\">Debug Clincoo sering menampilkan seluruh objek env. Token API lalu tersimpan di log browser pengunjung.</p><p class=\"mb-4\">Cetak hanya nama variabel yang ada atau tidak, bukan nilainya. Hapus log sebelum deploy dari editor.clincoo.buzz.</p><p class=\"mb-4\">Jika sudah terlanjur, rotasi kunci dan bersihkan rilis lama. Jangan andalkan orang menutup tab DevTools.</p><p class=\"mb-4\">Minta AI mencari console.log yang menyentuh env. Tempel file skrip, bukan seluruh repo.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu simpan. Log tanpa nilai rahasia menjaga app.clincoo.buzz tetap aman.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Print Env Secrets in the Clincoo Console",
          desc: "console.log of process.env leaks tokens to anyone who opens DevTools.",
          content: "<p class=\"mb-4\">Clincoo debugging often dumps the whole env object. The API token then sits in the visitor browser log.</p><p class=\"mb-4\">Log only whether a variable exists, not its value. Remove those logs before deploy from editor.clincoo.buzz.</p><p class=\"mb-4\">If it already shipped, rotate the key and clean the old release. Do not rely on people closing DevTools.</p><p class=\"mb-4\">Ask AI to find console.log calls that touch env. Paste the script file, not the whole repo.</p><p class=\"mb-4\">Clincoo runs the scripts you save. Logs without secret values keep app.clincoo.buzz safer.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "env-prefix-public-bukan-rahasia",
      langs: {
        "id": {
          title: "Variabel Prefiks Public Bukan Tempat Secret Clincoo",
          desc: "VITE_ dan NEXT_PUBLIC_ ikut ke bundel klien. Jangan taruh kunci privat di sana.",
          content: "<p class=\"mb-4\">Token admin Clincoo masuk bundel karena memakai prefiks public. Siapa pun bisa membacanya di sumber halaman.</p><p class=\"mb-4\">Pakai prefiks public hanya untuk host publik, nama aplikasi, dan flag fitur. Kunci tulis tetap di server.</p><p class=\"mb-4\">Cek berkas hasil build di editor.clincoo.buzz. Cari string token sebelum rilis ke app.clincoo.buzz.</p><p class=\"mb-4\">Minta AI memindahkan satu variabel privat keluar dari prefiks public. Tempel .env dan pemakaiannya.</p><p class=\"mb-4\">Clincoo tidak menyaring bundel otomatis. Prefiks yang salah adalah kebocoran, bukan konfigurasi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Public-Prefixed Env Vars Are Not for Clincoo Secrets",
          desc: "VITE_ and NEXT_PUBLIC_ ship in the client bundle. Do not put private keys there.",
          content: "<p class=\"mb-4\">A Clincoo admin token lands in the bundle because it used a public prefix. Anyone can read it in page source.</p><p class=\"mb-4\">Use a public prefix only for public hosts, the app name, and feature flags. Write keys stay on the server.</p><p class=\"mb-4\">Inspect the built files in editor.clincoo.buzz. Search for the token string before release to app.clincoo.buzz.</p><p class=\"mb-4\">Ask AI to move one private variable off the public prefix. Paste the .env and its usages.</p><p class=\"mb-4\">Clincoo does not filter the bundle for you. The wrong prefix is a leak, not a config style.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "env-cek-variabel-wajib-saat-boot",
      langs: {
        "id": {
          title: "Cek Variabel Env Wajib saat Aplikasi Clincoo Boot",
          desc: "Undefined diam-diam membuat fetch gagal jauh di dalam alur. Gagal cepat lebih jelas.",
          content: "<p class=\"mb-4\">Halaman Clincoo tampil kosong karena API_URL tidak terisi. Error baru muncul setelah tiga klik.</p><p class=\"mb-4\">Saat boot, periksa daftar variabel wajib. Jika kosong, tampilkan pesan di editor.clincoo.buzz, jangan lanjut render.</p><p class=\"mb-4\">Jangan isi cadangan localhost di produksi. Cadangan menyembunyikan salah konfigurasi.</p><p class=\"mb-4\">Minta AI menulis satu fungsi assertEnv. Tempel daftar nama variabel, bukan seluruh app.</p><p class=\"mb-4\">Clincoo mengikuti nilai yang kamu set. Gagal cepat di boot menghemat debug di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Check Required Env Vars when a Clincoo App Boots",
          desc: "Silent undefined values make fetch fail deep in a flow. Fail fast is clearer.",
          content: "<p class=\"mb-4\">A Clincoo page looks empty because API_URL was never set. The error shows only after three clicks.</p><p class=\"mb-4\">On boot, check the required variable list. If one is empty, show a message in editor.clincoo.buzz and stop rendering.</p><p class=\"mb-4\">Do not fall back to localhost in production. A fallback hides a bad config.</p><p class=\"mb-4\">Ask AI to write one assertEnv helper. Paste the variable names, not the whole app.</p><p class=\"mb-4\">Clincoo follows the values you set. Failing fast at boot saves debug time on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "env-jangan-simpan-secret-di-localstorage",
      langs: {
        "id": {
          title: "Jangan Simpan Secret Env ke localStorage Clincoo",
          desc: "Skrip pihak ketiga dan XSS membaca localStorage. Token tidak aman di sana.",
          content: "<p class=\"mb-4\">Template Clincoo menaruh API key di localStorage agar 'tetap login'. Ekstensi browser bisa membacanya.</p><p class=\"mb-4\">Simpan sesi lewat cookie HttpOnly dari server, atau token jangka pendek yang bisa dicabut.</p><p class=\"mb-4\">Jangan salin process.env.SECRET ke localStorage di editor.clincoo.buzz. Itu sama dengan menulisnya di halaman.</p><p class=\"mb-4\">Minta AI mencari setItem yang menyimpan kunci. Tempel file auth saja.</p><p class=\"mb-4\">Clincoo tidak mengenkripsi localStorage. Secret tetap di server, bukan di app.clincoo.buzz milik klien.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Store Env Secrets in Clincoo localStorage",
          desc: "Third-party scripts and XSS can read localStorage. A token is not safe there.",
          content: "<p class=\"mb-4\">A Clincoo template puts an API key in localStorage to 'stay logged in'. A browser extension can read it.</p><p class=\"mb-4\">Keep the session in an HttpOnly cookie from the server, or use a short-lived token you can revoke.</p><p class=\"mb-4\">Do not copy process.env.SECRET into localStorage in editor.clincoo.buzz. That is the same as writing it on the page.</p><p class=\"mb-4\">Ask AI to find setItem calls that store keys. Paste the auth file only.</p><p class=\"mb-4\">Clincoo does not encrypt localStorage. Secrets stay on the server, not in the client on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "env-dokumentasikan-contoh-tanpa-nilai",
      langs: {
        "id": {
          title: "Dokumentasikan Env Clincoo lewat .env.example tanpa Nilai",
          desc: "Onboarding macet jika orang baru tidak tahu nama variabel wajib.",
          content: "<p class=\"mb-4\">Kontributor Clincoo menanyakan host API di chat karena README tidak menyebut nama variabel.</p><p class=\"mb-4\">Simpan .env.example berisi NAMA= kosong dan satu baris komentar tujuan. Jangan tempel nilai nyata.</p><p class=\"mb-4\">Samakan nama dengan yang dibaca kode di editor.clincoo.buzz. Nama usang lebih buruk daripada tidak ada file.</p><p class=\"mb-4\">Minta AI menyusun .env.example dari pemakaian di satu folder. Tolak jika AI mengisi nilai token.</p><p class=\"mb-4\">Clincoo tidak menulis dokumen env otomatis. File contoh menjaga onboarding aman di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Document Clincoo Env with a Valueless .env.example",
          desc: "Onboarding stalls when a new person does not know required variable names.",
          content: "<p class=\"mb-4\">A Clincoo contributor asks for the API host in chat because the README never names the variables.</p><p class=\"mb-4\">Keep a .env.example with NAME= empty and one comment line for purpose. Do not paste real values.</p><p class=\"mb-4\">Match the names the code reads in editor.clincoo.buzz. Stale names are worse than no file.</p><p class=\"mb-4\">Ask AI to build .env.example from usages in one folder. Reject it if AI fills in token values.</p><p class=\"mb-4\">Clincoo does not write env docs for you. An example file keeps onboarding safe on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
