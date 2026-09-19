// Clincoo Blog — Data kategori: performa
// File ini di-generate otomatis. Jangan edit manual.

if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["performa"] = {
  names: { "id": "Performa", "en": "Performance" },
  flag: "⚡",
  articles: [
    {
      id: "performa-ukur-berat-halaman-sebelum-deploy",
      langs: {
        "id": {
          title: "Ukur Berat Halaman Clincoo sebelum Deploy",
          desc: "Hitung ukuran HTML, CSS, gambar, dan skrip. Halaman ringan terasa cepat di subdomain.",
          content: "<p class=\"mb-4\">Deploy Clincoo cepat tidak berarti halaman pengunjung cepat. Satu foto hero dan tiga font CDN bisa membuat First Contentful Paint lama meski index.html pendek.</p><p class=\"mb-4\">Sebelum rilis, lihat daftar file di workspace. Jumlahkan gambar dan CSS. Target kasar untuk situs satu halaman: total aset di bawah satu megabyte jika bisa. Yang lebih penting: hero tidak boleh 2–3MB.</p><p class=\"mb-4\">Buka pratinjau, hard-refresh, dan rasakan. Jika spinner lama muncul, kompres gambar dulu — jangan minta AI menambah pustaka lazy-load yang belum kamu pahami.</p><p class=\"mb-4\">Setelah deploy ke subdomain, uji sekali di jaringan HP. Cache editor di laptop menipu. Performa yang jujur diukur dari URL publik.</p><p class=\"mb-4\">Clincoo menayangkan file apa adanya. Berat halaman adalah keputusan editor, bukan tombol rilis.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Weigh a Clincoo Page before You Deploy",
          desc: "Count HTML, CSS, images, and scripts. A light page feels fast on the subdomain.",
          content: "<p class=\"mb-4\">A fast Clincoo deploy does not mean a fast visitor page. One hero photo and three CDN fonts can delay First Contentful Paint even when index.html is short.</p><p class=\"mb-4\">Before release, scan the workspace file list. Add up images and CSS. A rough target for a one-page site: keep assets under a megabyte if you can. More important: the hero should not be 2–3MB.</p><p class=\"mb-4\">Open preview, hard-refresh, and feel it. If a spinner lingers, compress images first — do not ask the AI to add a lazy-load library you do not understand.</p><p class=\"mb-4\">After you deploy to a subdomain, test once on a phone network. The editor cache on a laptop lies. Honest performance is measured from the public URL.</p><p class=\"mb-4\">Clincoo serves the files as they are. Page weight is an editor decision, not a release button.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "performa-tunda-skrip-yang-tidak-mendesak",
      langs: {
        "id": {
          title: "Tunda Skrip yang Tidak Mendesak di Situs Clincoo",
          desc: "Analitik, chat, dan embed tidak perlu memblokir teks pertama. Pindahkan atau defer.",
          content: "<p class=\"mb-4\">Banyak template menaruh tiga tag script di head. Browser menunggu skrip itu sebelum mengecat heading. Pengunjung melihat putih lebih lama.</p><p class=\"mb-4\">Pindahkan skrip yang bukan untuk layout ke bawah body. Pakai defer pada file yang kamu kendalikan. Widget chat dan pixel tidak wajib di detik pertama.</p><p class=\"mb-4\">Jika AI menempel snippet analitik di atas CSS, pindahkan. Satu request pihak ketiga di head sering lebih mahal daripada paragraf tambahan.</p><p class=\"mb-4\">Uji pratinjau dengan skrip dimatikan sementara: apakah halaman masih bisa dibaca dan diklik? Jika ya, skrip itu boleh menunggu.</p><p class=\"mb-4\">Clincoo tidak mengurutkan request untukmu. Urutan tag di HTML adalah antrian performa.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Defer Scripts That Are Not Urgent on a Clincoo Site",
          desc: "Analytics, chat, and embeds should not block first text. Move them or defer.",
          content: "<p class=\"mb-4\">Many templates put three script tags in the head. The browser waits on those scripts before it paints the heading. Visitors stare at white longer.</p><p class=\"mb-4\">Move scripts that are not for layout to the bottom of the body. Use defer on files you control. A chat widget and a pixel are not required in the first second.</p><p class=\"mb-4\">If the AI pastes an analytics snippet above the CSS, move it. One third-party request in the head often costs more than an extra paragraph.</p><p class=\"mb-4\">Test preview with those scripts temporarily off: can the page still be read and clicked? If yes, the script can wait.</p><p class=\"mb-4\">Clincoo does not reorder requests for you. Tag order in HTML is the performance queue.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "performa-satu-css-bukan-banyak-import",
      langs: {
        "id": {
          title: "Satu File CSS di Proyek Clincoo, Bukan Banyak @import",
          desc: "@import berantai menunda gaya. Gabungkan aturan yang dipakai ke satu stylesheet.",
          content: "<p class=\"mb-4\">Template kadang memanggil reset, grid, dan tema lewat @import. Setiap import adalah request tambahan yang menunggu request sebelumnya.</p><p class=\"mb-4\">Di editor Clincoo, satukan aturan yang benar-benar dipakai ke satu file yang sudah ditautkan dari index.html. Hapus import yang tidak mengubah tampilan.</p><p class=\"mb-4\">Jangan minta AI \"pecah CSS supaya rapi\" jika hasilnya lima file untuk situs satu halaman. Kerapian folder tidak menolong First Paint.</p><p class=\"mb-4\">Setelah gabung, cek pratinjau: kelas yang hilang langsung kelihatan. Itu lebih aman daripada mengandalkan rantai import yang sulit dilacak.</p><p class=\"mb-4\">Satu stylesheet yang kamu pahami lebih cepat dirawat — dan biasanya lebih cepat dimuat.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "One CSS File in a Clincoo Project, Not a Chain of @import",
          desc: "Chained @import delays style. Merge the rules you use into one stylesheet.",
          content: "<p class=\"mb-4\">Templates sometimes pull reset, grid, and theme files through @import. Each import is another request that waits on the one before it.</p><p class=\"mb-4\">In the Clincoo editor, merge the rules you actually use into the one file already linked from index.html. Drop imports that do not change the look.</p><p class=\"mb-4\">Do not ask the AI to \"split CSS to tidy it\" if the result is five files for a one-page site. A tidy folder does not help First Paint.</p><p class=\"mb-4\">After the merge, check preview: missing classes show up immediately. That is safer than a chain of imports you cannot trace.</p><p class=\"mb-4\">One stylesheet you understand is easier to maintain — and usually faster to load.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "performa-kompres-aset-sebelum-masuk-workspace",
      langs: {
        "id": {
          title: "Kompres Aset sebelum Masuk Workspace Clincoo",
          desc: "JPG, PNG, dan video mentah membuat pratinjau dan rilis terasa berat. Ringankan dulu di luar editor.",
          content: "<p class=\"mb-4\">Editor Clincoo menyimpan file yang kamu unggah. Ia tidak otomatis merapikan foto 4000px dari HP. Itu tugas sebelum file masuk proyek.</p><p class=\"mb-4\">Resize ke lebar yang dipakai layout — sering 1200px sudah cukup untuk hero. Ekspor WebP atau JPG berkualitas sedang. Ikon SVG lebih ringan daripada PNG besar.</p><p class=\"mb-4\">Jangan sematkan video MP4 panjang di beranda jika GIF pendek atau tautan eksternal cukup. Satu klip 20MB merusak kesan subdomain yang baru lahir.</p><p class=\"mb-4\">Setelah ganti file, hard-refresh pratinjau. Nama file sama dengan isi baru kadang tertahan cache editor.</p><p class=\"mb-4\">Aset yang sudah dikompres membuat deploy terasa instan di sisi pengunjung, bukan hanya di sisi tombol rilis.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Compress Assets before They Enter a Clincoo Workspace",
          desc: "Raw JPG, PNG, and video make preview and release feel heavy. Lighten them outside the editor first.",
          content: "<p class=\"mb-4\">The Clincoo editor stores the file you upload. It does not automatically shrink a 4000px phone photo. That work happens before the file enters the project.</p><p class=\"mb-4\">Resize to the width the layout uses — 1200px is often enough for a hero. Export WebP or medium-quality JPG. SVG icons beat a large PNG.</p><p class=\"mb-4\">Do not embed a long MP4 on the home page if a short GIF or an external link is enough. One 20MB clip ruins a brand-new subdomain.</p><p class=\"mb-4\">After you replace a file, hard-refresh preview. The same filename with new bytes can stick in the editor cache.</p><p class=\"mb-4\">Compressed assets make deploy feel instant on the visitor side, not only on the release button.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "performa-hindari-animasi-berat-di-hero",
      langs: {
        "id": {
          title: "Hindari Animasi Berat di Hero Situs Clincoo",
          desc: "Loop CSS atau library animasi di hero merampas CPU HP. Gerakan kecil atau tanpa gerak lebih sopan.",
          content: "<p class=\"mb-4\">Hero yang bergeser, blur, dan partikel terlihat mewah di laptop. Di HP kelas menengah, itu menggeser teks dan menguras baterai.</p><p class=\"mb-4\">Utamakan kontras dan kalimat. Jika ingin gerak, batasi ke opacity atau transform pada satu elemen, dengan prefers-reduced-motion.</p><p class=\"mb-4\">Tolak saran AI yang menambah library animasi hanya untuk tombol. CSS beberapa baris cukup. Library berarti request dan parse tambahan.</p><p class=\"mb-4\">Uji di pratinjau sempit. Jika CTA baru muncul setelah animasi selesai, pengunjung bisa pergi dulu.</p><p class=\"mb-4\">Performa hero adalah sopan santun: halaman boleh hidup, tapi teks harus segera terbaca. Clincoo men-deploy animasi yang kamu tulis — pilih yang hemat.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Avoid Heavy Hero Animation on a Clincoo Site",
          desc: "CSS loops or animation libraries in the hero steal phone CPU. Small motion — or none — is kinder.",
          content: "<p class=\"mb-4\">A hero that slides, blurs, and sprays particles looks fancy on a laptop. On a mid-range phone it shoves text and drains the battery.</p><p class=\"mb-4\">Lead with contrast and a sentence. If you want motion, limit it to opacity or transform on one element, with prefers-reduced-motion.</p><p class=\"mb-4\">Refuse an AI suggestion that adds an animation library just for a button. A few lines of CSS are enough. A library means extra request and parse work.</p><p class=\"mb-4\">Test in a narrow preview. If the CTA only appears after the animation ends, visitors may leave first.</p><p class=\"mb-4\">Hero performance is courtesy: the page may move, but the text must be readable at once. Clincoo deploys the animation you wrote — choose a cheap one.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ]
};
