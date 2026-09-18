// Clincoo Blog — Data kategori: security
// File ini di-generate otomatis. Jangan edit manual.

if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["security"] = {
  names: { "id": "Keamanan", "en": "Security" },
  flag: "🔒",
  articles: [
    {
      id: "security-jaga-kunci-api-di-luar-proyek",
      langs: {
        "id": {
          title: "Jaga Kunci API di Luar File Proyek Clincoo",
          desc: "Mengapa token, kunci API, dan kata sandi tidak boleh ikut tersimpan di index.html atau skrip yang ikut ter-deploy.",
          content: "<p class=\"mb-4\">Clincoo memudahkan kamu menulis kode lalu men-deploy ke subdomain <code>.clinqoo.biz.id</code>. Itu juga berarti file yang kamu simpan bisa dibuka siapa pun yang punya URL. Kunci API, token webhook, atau kata sandi layanan pihak ketiga tidak boleh duduk di <code>index.html</code>, file JavaScript, atau komentar HTML.</p><p class=\"mb-4\">Kalau asisten AI menyarankan menempel kunci di kode supaya form atau fetch \"langsung jalan\", tolak dulu. Minta alternatif: endpoint yang kamu kendalikan, layanan tanpa kunci di klien, atau placeholder yang jelas tidak aktif. Pratinjau di editor bukan tempat menyembunyikan rahasia — pratinjau hanya meniru apa yang nanti publik.</p><p class=\"mb-4\">Praktik yang aman: simpan rahasia di luar proyek statis. Situs Clincoo pada dasarnya adalah file statis. Jangan harap file <code>.env</code> tersembunyi setelah deploy. Jika suatu fitur butuh kunci, pindahkan ke backend terpisah atau layanan yang memang dirancang untuk itu.</p><p class=\"mb-4\">Sebelum rilis, cari kata <code>api_key</code>, <code>secret</code>, <code>token</code>, dan <code>password</code> di seluruh workspace. Hapus yang tidak sengaja tertinggal, termasuk di file cadangan. Setelah itu baru deploy.</p><p class=\"mb-4\">Keamanan di Clincoo dimulai dari kebiasaan kecil: yang publik boleh dilihat, yang rahasia tidak ikut ter-upload. Platform-nya mempercepat rilis; kamu yang menjaga isi file tetap bersih.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Keep API Keys Out of Your Clincoo Project Files",
          desc: "Why tokens, API keys, and passwords must not live in index.html or scripts that get deployed.",
          content: "<p class=\"mb-4\">Clincoo makes it easy to write code and deploy to a <code>.clinqoo.biz.id</code> subdomain. That also means anyone with the URL can open those files. API keys, webhook tokens, or third-party passwords must not sit in <code>index.html</code>, JavaScript, or HTML comments.</p><p class=\"mb-4\">If the AI assistant suggests pasting a key into code so a form or fetch \"just works\", refuse first. Ask for an alternative: an endpoint you control, a client-side flow that needs no secret, or a clearly inactive placeholder. Editor preview is not a vault — it only mirrors what will later be public.</p><p class=\"mb-4\">Safe practice: keep secrets outside a static project. A Clincoo site is essentially static files. Do not expect a <code>.env</code> file to stay hidden after deploy. If a feature needs a key, move it to a separate backend or a service designed for that.</p><p class=\"mb-4\">Before release, search the workspace for <code>api_key</code>, <code>secret</code>, <code>token</code>, and <code>password</code>. Remove leftovers, including backup files. Only then deploy.</p><p class=\"mb-4\">Security on Clincoo starts with a small habit: public files may be seen; secrets do not get uploaded. The platform speeds up release; you keep the files clean.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "security-https-dan-subdomain-clinqoo",
      langs: {
        "id": {
          title: "HTTPS dan Subdomain Clincoo: Apa yang Sudah Aman, Apa yang Masih Tugasmu",
          desc: "Deploy ke Cloudflare Pages memberi HTTPS. Isi halaman, formulir, dan skrip pihak ketiga tetap tanggung jawab pemilik situs.",
          content: "<p class=\"mb-4\">Saat kamu men-deploy dari Clincoo ke Cloudflare Pages, pengunjung biasanya membuka situs lewat HTTPS. Gembok di browser itu menandakan saluran terenkripsi, bukan bahwa setiap teks, form, atau skrip di halaman otomatis aman.</p><p class=\"mb-4\">Subdomain <code>.clinqoo.biz.id</code> memudahkan berbagi URL. Jangan mengirim data sensitif lewat query string yang ikut tercatat di riwayat, log, atau screenshot. Form kontak cukup minta nama dan pesan; hindari meminta nomor identitas atau kata sandi akun lain.</p><p class=\"mb-4\">Periksa juga tautan internal. Jika suatu tombol masih mengarah ke <code>http://</code> atau ke file lokal yang tidak ikut ter-deploy, pengunjung bisa kehilangan konteks aman yang baru saja mereka lihat di halaman utama.</p><p class=\"mb-4\">Asisten AI bisa menuliskan contoh fetch. Baca ulang: apakah URL-nya HTTPS, apakah ada kredensial di query, apakah error ditampilkan mentah ke pengunjung. Perbaiki di editor sebelum rilis ulang.</p><p class=\"mb-4\">HTTPS dari infrastruktur Clincoo adalah fondasi. Isi halaman — apa yang kamu kumpulkan dan apa yang kamu muat dari luar — tetap keputusanmu.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "HTTPS and Clincoo Subdomains: What Is Already Safe, What Is Still Yours",
          desc: "Deploying to Cloudflare Pages gives you HTTPS. Page content, forms, and third-party scripts remain the site owner's job.",
          content: "<p class=\"mb-4\">When you deploy from Clincoo to Cloudflare Pages, visitors usually open the site over HTTPS. The browser padlock means the channel is encrypted, not that every line of text, form field, or script is automatically safe.</p><p class=\"mb-4\">A <code>.clinqoo.biz.id</code> subdomain makes URLs easy to share. Do not send sensitive data in query strings that end up in history, logs, or screenshots. A contact form only needs a name and a message; avoid asking for identity numbers or other accounts' passwords.</p><p class=\"mb-4\">Check internal links too. If a button still points to <code>http://</code> or to a local file that never deployed, visitors lose the safe context they just saw on the home page.</p><p class=\"mb-4\">The AI assistant may draft a fetch example. Re-read it: is the URL HTTPS, are credentials in the query, are raw errors shown to visitors? Fix it in the editor before you redeploy.</p><p class=\"mb-4\">HTTPS from Clincoo's infrastructure is the foundation. What you collect and what you load from elsewhere remains your decision.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "security-form-kontak-tanpa-bocor-data",
      langs: {
        "id": {
          title: "Form Kontak di Clincoo tanpa Membocorkan Data Pengunjung",
          desc: "Cara merancang formulir statis yang cukup untuk dihubungi, tanpa menumpuk data yang tidak kamu butuhkan.",
          content: "<p class=\"mb-4\">Banyak situs Clincoo butuh satu form: nama, email atau WhatsApp, dan pesan. Itu cukup. Setiap kolom tambahan — alamat lengkap, tanggal lahir, unggah file — menambah risiko jika layanan penerima form tidak kamu kendalikan penuh.</p><p class=\"mb-4\">Jangan menaruh alamat email tujuan secara mentah di JavaScript jika bisa dihindari dengan layanan form yang menyembunyikan tujuan. Jika terpaksa menampilkan kontak, tampilkan di HTML biasa, bukan di atribut tersembunyi yang mudah dipanen bot.</p><p class=\"mb-4\">Validasi di klien membantu pengunjung, bukan menggantikan kehati-hatian. Batasi panjang pesan di pratinjau Clincoo supaya halaman tidak merusak tata letak, lalu uji kirim palsu sebelum domain dibagikan.</p><p class=\"mb-4\">Jika AI menambahkan layanan analitik atau pixel ke form, tanya dulu: apakah pengunjung diberitahu, dan apakah pixel itu perlu. Situs kecil sering lebih aman tanpa pelacak.</p><p class=\"mb-4\">Form yang baik di Clincoo terasa sopan: sedikit kolom, tujuan jelas, dan tidak menyimpan apa yang tidak akan kamu baca.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Clincoo Contact Forms Without Leaking Visitor Data",
          desc: "How to design a static form that is enough to get in touch, without collecting data you do not need.",
          content: "<p class=\"mb-4\">Many Clincoo sites need one form: name, email or WhatsApp, and a message. That is enough. Every extra field — full address, date of birth, file upload — adds risk if you do not fully control the form endpoint.</p><p class=\"mb-4\">Avoid putting the destination email in raw JavaScript when a form service can hide it. If you must show a contact, put it in ordinary HTML, not in a hidden attribute that bots harvest easily.</p><p class=\"mb-4\">Client-side validation helps visitors; it does not replace care. Cap message length in the Clincoo preview so the layout stays intact, then test a fake submit before you share the domain.</p><p class=\"mb-4\">If the AI adds analytics or a pixel to the form, ask first: are visitors told, and is the pixel needed? Small sites are often safer without trackers.</p><p class=\"mb-4\">A good Clincoo form feels polite: few fields, a clear purpose, and no storage of what you will never read.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "security-izin-akun-dan-workspace",
      langs: {
        "id": {
          title: "Izin Akun dan Workspace Clincoo: Siapa yang Boleh Menyimpan",
          desc: "Kolaborasi dua orang di satu proyek tetap aman jika hanya satu akun yang men-deploy dan perubahan dibicarakan dulu.",
          content: "<p class=\"mb-4\">Clincoo dipakai sendiri atau bergantian. Risiko muncul saat dua orang mengedit tanpa sepakat siapa yang menekan simpan dan siapa yang men-deploy. File bisa tertimpa, atau versi lama yang masih berisi kunci uji ikut terbit.</p><p class=\"mb-4\">Sepakati satu pemilik workspace. Orang kedua boleh usul lewat catatan, screenshot pratinjau, atau file yang diekspor. Jangan berbagi kata sandi akun. Jika suatu saat ada fitur undangan, gunakan itu — bukan salinan kredensial di chat.</p><p class=\"mb-4\">Sebelum deploy, buka pratinjau dan cek halaman yang baru diubah. Terminal di editor membantu melihat nama file; pastikan tidak ada <code>backup</code> atau <code>old</code> yang tidak sengaja ikut.</p><p class=\"mb-4\">Jika AI mengubah banyak file sekaligus, minta ringkasan diff. Simpan hanya setelah kamu paham. Keamanan kolaborasi adalah soal urutan: baca, setuju, simpan, baru rilis.</p><p class=\"mb-4\">Workspace yang rapi lebih mudah diaudit daripada workspace yang penuh salinan. Clincoo memberi alat; kesepakatan tim yang menjaga pintu.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Clincoo Account and Workspace Access: Who Is Allowed to Save",
          desc: "Two people on one project stay safer when only one account deploys and changes are discussed first.",
          content: "<p class=\"mb-4\">Clincoo is used alone or in turns. Risk appears when two people edit without agreeing who saves and who deploys. Files get overwritten, or an old version that still holds a test key goes live.</p><p class=\"mb-4\">Agree on one workspace owner. The second person can suggest changes with notes, preview screenshots, or an exported file. Do not share account passwords. If invitations exist later, use those — not credentials copied into chat.</p><p class=\"mb-4\">Before deploy, open preview and check the pages that changed. The in-editor terminal helps you see filenames; make sure no accidental <code>backup</code> or <code>old</code> file is included.</p><p class=\"mb-4\">If the AI changes many files at once, ask for a short diff. Save only when you understand it. Collaborative safety is a sequence: read, agree, save, then release.</p><p class=\"mb-4\">A tidy workspace is easier to audit than one full of copies. Clincoo provides the tools; team agreement guards the door.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "security-audit-skrip-pihak-ketiga",
      langs: {
        "id": {
          title: "Audit Skrip Pihak Ketiga sebelum Deploy dari Clincoo",
          desc: "Font, analitik, widget chat, dan embed peta membawa kode orang lain ke situsmu. Periksa sumbernya sebelum rilis.",
          content: "<p class=\"mb-4\">Situs Clincoo sering memuat font dari CDN, peta, tombol bagikan, atau widget chat. Setiap tag <code>script</code> dan <code>iframe</code> adalah undangan: browser pengunjung menjalankan kode yang bukan kamu tulis.</p><p class=\"mb-4\">Sebelum menempel snippet dari internet atau dari saran AI, tanyakan tiga hal: siapa yang menyimpan skrip itu, apakah HTTPS, dan apakah situs tetap berguna jika skrip gagal dimuat. Font bisa diganti stack sistem. Widget chat tidak wajib di halaman pertama.</p><p class=\"mb-4\">Kurangi jumlah domain pihak ketiga. Semakin banyak sumber, semakin sulit menelusuri jika halaman tiba-tiba lambat atau meminta izin yang tidak kamu sadari.</p><p class=\"mb-4\">Di editor, kumpulkan semua <code>script src</code> di satu bagian bawah <code>index.html</code> supaya mudah dihitung. Hapus yang tidak dipakai. Uji pratinjau dengan jaringan lambat jika bisa.</p><p class=\"mb-4\">Deploy sekali klik tidak mengaudit skrip untukmu. Daftar pendek sumber eksternal adalah cara paling sederhana menjaga situs Clincoo tetap ringan dan lebih aman.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Audit Third-Party Scripts Before You Deploy from Clincoo",
          desc: "Fonts, analytics, chat widgets, and map embeds bring other people's code onto your site. Check the source before release.",
          content: "<p class=\"mb-4\">Clincoo sites often load fonts from a CDN, maps, share buttons, or a chat widget. Every <code>script</code> and <code>iframe</code> is an invitation: the visitor's browser runs code you did not write.</p><p class=\"mb-4\">Before pasting a snippet from the web or from the AI, ask three things: who hosts the script, is it HTTPS, and does the site still work if the script fails. Fonts can fall back to a system stack. A chat widget is not required on the first page.</p><p class=\"mb-4\">Cut the number of third-party domains. The more sources you add, the harder it is to trace a sudden slowdown or a permission prompt you did not expect.</p><p class=\"mb-4\">In the editor, gather every <code>script src</code> near the bottom of <code>index.html</code> so you can count them. Remove unused ones. Preview on a slow network if you can.</p><p class=\"mb-4\">One-click deploy does not audit scripts for you. A short list of external sources is the simplest way to keep a Clincoo site light and safer.</p>",
          source: "Clincoo",
          sourceUrl: "https://clinqoo.pages.dev/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ]
};
