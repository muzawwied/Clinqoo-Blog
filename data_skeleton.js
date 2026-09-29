// Clincoo Blog — Data kategori: skeleton
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["skeleton"] = {
  names: { "id": "Skeleton", "en": "Skeleton" },
  flag: "\u25ad",
  articles: [
    {
      id: "skeleton-ganti-spinner-jadi-kartu",
      langs: {
        "id": {
          title: "Ganti Spinner Clincoo dengan Skeleton Kartu",
          desc: "Ikon berputar tidak menjelaskan bentuk halaman. Placeholder seukuran konten lebih jujur.",
          content: "<p class=\"mb-4\">Daftar proyek Clincoo hanya memutar spinner di tengah. Pengunjung tidak tahu berapa kartu yang akan muncul.</p><p class=\"mb-4\">Di editor.clincoo.buzz, buat tiga kotak abu-abu seukuran kartu asli. Pakai background lembut dan radius yang sama.</p><p class=\"mb-4\">Jangan tampilkan skeleton bersama spinner. Satu pola umpan balik cukup.</p><p class=\"mb-4\">Minta AI menyalin markup kartu jadi versi kosong tanpa teks. Tempel satu kartu saja.</p><p class=\"mb-4\">Skeleton di app.clincoo.buzz membuat waktu tunggu terasa terukur, bukan macet.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Replace a Clincoo Spinner with Card Skeletons",
          desc: "A spinning icon does not show page shape. Placeholders that match content feel honest.",
          content: "<p class=\"mb-4\">A Clincoo project list only spins in the center. Visitors cannot tell how many cards will appear.</p><p class=\"mb-4\">In editor.clincoo.buzz, draw three gray boxes the size of the real cards. Use a soft background and the same radius.</p><p class=\"mb-4\">Do not show a skeleton and a spinner together. One feedback pattern is enough.</p><p class=\"mb-4\">Ask AI to copy card markup into an empty version with no text. Paste one card only.</p><p class=\"mb-4\">Skeletons on app.clincoo.buzz make wait time feel measured, not frozen.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "skeleton-ukuran-sama-konten-asli",
      langs: {
        "id": {
          title: "Samakan Ukuran Skeleton Clincoo dengan Konten Asli",
          desc: "Placeholder pendek lalu teks panjang membuat layout loncat. Ukur dulu, baru gambar tulang.",
          content: "<p class=\"mb-4\">Skeleton judul Clincoo hanya satu baris. Artikel dua baris lalu mendorong tombol ke bawah saat data datang.</p><p class=\"mb-4\">Ukur tinggi kartu di editor.clincoo.buzz pada data contoh. Set min-height skeleton sama dengan itu.</p><p class=\"mb-4\">Untuk teks, pakai dua batang berbeda lebar. Jangan semua 100% agar tidak terlihat seperti error.</p><p class=\"mb-4\">Minta AI menyesuaikan min-height satu blok. Tempel kartu asli dan skeleton.</p><p class=\"mb-4\">Ukuran yang cocok menjaga app.clincoo.buzz tidak meloncat saat konten siap.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Match Clincoo Skeleton Size to Real Content",
          desc: "A short placeholder then long text makes layout jump. Measure first, then draw the bone.",
          content: "<p class=\"mb-4\">A Clincoo title skeleton is one line. A two-line article then pushes the button down when data arrives.</p><p class=\"mb-4\">Measure card height in editor.clincoo.buzz with sample data. Set the skeleton min-height to match.</p><p class=\"mb-4\">For text, use two bars of different widths. Do not make every bar 100% or it looks like an error.</p><p class=\"mb-4\">Ask AI to tune min-height on one block. Paste the real card and the skeleton.</p><p class=\"mb-4\">Matching size keeps app.clincoo.buzz from jumping when content is ready.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "skeleton-pulse-jangan-flash-layout",
      langs: {
        "id": {
          title: "Animasi Pulse Skeleton Clincoo, Jangan Flash Layout",
          desc: "Opacity yang melonjak atau lebar yang berubah terasa seperti bug. Pulse lembut pada warna saja.",
          content: "<p class=\"mb-4\">Template Clincoo menganimasikan width skeleton. Kartu bergoyang dan pengunjung mengira halaman error.</p><p class=\"mb-4\">Di editor.clincoo.buzz, animasikan hanya background-position atau opacity 0.6–1. Durasi 1.2–1.6 detik, ease tetap.</p><p class=\"mb-4\">Hormati prefers-reduced-motion: kurangi atau matikan pulse.</p><p class=\"mb-4\">Minta AI menulis satu keyframe pulse. Tempel CSS skeleton, bukan seluruh tema.</p><p class=\"mb-4\">Pulse tenang di app.clincoo.buzz menandai memuat tanpa mengalihkan perhatian.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Pulse a Clincoo Skeleton; Do Not Flash the Layout",
          desc: "Jumping opacity or changing width feels like a bug. Pulse color only.",
          content: "<p class=\"mb-4\">A Clincoo template animates skeleton width. Cards wobble and visitors think the page errored.</p><p class=\"mb-4\">In editor.clincoo.buzz, animate only background-position or opacity 0.6–1. Use 1.2–1.6s with a steady ease.</p><p class=\"mb-4\">Honor prefers-reduced-motion: reduce or stop the pulse.</p><p class=\"mb-4\">Ask AI for one pulse keyframe. Paste skeleton CSS, not the whole theme.</p><p class=\"mb-4\">A calm pulse on app.clincoo.buzz signals loading without stealing focus.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "skeleton-aria-busy-saat-memuat",
      langs: {
        "id": {
          title: "Tandai Skeleton Clincoo dengan aria-busy saat Memuat",
          desc: "Pembaca layar perlu tahu region masih menunggu. Jangan biarkan kotak kosong tanpa nama.",
          content: "<p class=\"mb-4\">Daftar Clincoo menampilkan tiga kotak tanpa teks. Pembaca layar diam, seolah halaman kosong.</p><p class=\"mb-4\">Bungkus skeleton dengan region. Set aria-busy=true dan aria-live=polite saat fetch jalan di editor.clincoo.buzz.</p><p class=\"mb-4\">Saat data datang, aria-busy=false. Jangan sisakan label Memuat pada konten jadi.</p><p class=\"mb-4\">Minta AI menambah atribut pada satu wrapper. Tempel markup daftar.</p><p class=\"mb-4\">Status yang jelas menjaga app.clincoo.buzz bisa dipakai dengan pembaca layar.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Mark a Clincoo Skeleton with aria-busy while Loading",
          desc: "Screen readers need to know the region is still waiting. Do not leave unnamed empty boxes.",
          content: "<p class=\"mb-4\">A Clincoo list shows three boxes with no text. The screen reader stays silent as if the page were empty.</p><p class=\"mb-4\">Wrap the skeleton in a region. Set aria-busy=true and aria-live=polite while fetch runs in editor.clincoo.buzz.</p><p class=\"mb-4\">When data arrives, set aria-busy=false. Do not leave a Loading label on finished content.</p><p class=\"mb-4\">Ask AI to add attributes on one wrapper. Paste the list markup.</p><p class=\"mb-4\">A clear status keeps app.clincoo.buzz usable with a screen reader.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "skeleton-hapus-saat-data-siap",
      langs: {
        "id": {
          title: "Hapus Skeleton Clincoo saat Data Siap, Jangan Timpa",
          desc: "Menumpuk kartu asli di atas placeholder membuat dobel dan scroll kacau.",
          content: "<p class=\"mb-4\">Pratinjau Clincoo menambahkan hasil fetch tanpa menghapus skeleton. Pengunjung melihat enam kartu, tiga palsu.</p><p class=\"mb-4\">Simpan skeleton di satu container. Ganti innerHTML atau toggle hidden ketika promise selesai di editor.clincoo.buzz.</p><p class=\"mb-4\">Jika fetch gagal, ganti skeleton dengan pesan error, bukan membiarkan tulang tetap berdenyut.</p><p class=\"mb-4\">Minta AI menulis cabang sukses/gagal yang membersihkan placeholder. Tempel handler fetch.</p><p class=\"mb-4\">Skeleton yang pergi tepat waktu menjaga app.clincoo.buzz tidak menampilkan konten dobel.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Remove the Clincoo Skeleton when Data Is Ready; Do Not Stack",
          desc: "Layering real cards on placeholders doubles items and breaks scroll.",
          content: "<p class=\"mb-4\">A Clincoo preview appends fetch results without removing the skeleton. Visitors see six cards, three fake.</p><p class=\"mb-4\">Keep the skeleton in one container. Replace innerHTML or toggle hidden when the promise settles in editor.clincoo.buzz.</p><p class=\"mb-4\">If fetch fails, swap the skeleton for an error message. Do not leave bones pulsing.</p><p class=\"mb-4\">Ask AI for success/fail branches that clear the placeholder. Paste the fetch handler.</p><p class=\"mb-4\">A skeleton that leaves on time keeps app.clincoo.buzz from showing duplicate content.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
