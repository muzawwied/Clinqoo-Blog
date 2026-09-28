// Clincoo Blog — Data kategori: scroll
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["scroll"] = {
  names: { "id": "Scroll", "en": "Scroll" },
  flag: "↕️",
  articles: [
    {
      id: "scroll-margin-untuk-anchor",
      langs: {
        "id": {
          title: "Tambah scroll-margin agar Anchor Clincoo Tidak Tertutup Header",
          desc: "Tautan #bagian menempatkan heading di bawah header sticky. scroll-margin-top memberi ruang.",
          content: "<p class=\"mb-4\">Daftar isi Clincoo meloncat ke id heading, lalu judul hilang di bawah header tetap. Offset visual salah.</p><p class=\"mb-4\">Setel scroll-margin-top pada heading di editor.clincoo.buzz sebesar tinggi header plus jarak napas.</p><p class=\"mb-4\">Satu kelas .anchor pada h2 dan h3 cukup. Jangan hitung offset di JavaScript jika CSS sudah menanganinya.</p><p class=\"mb-4\">Minta AI menambahkan scroll-margin-top pada heading yang punya id. Tempel header dan satu contoh heading.</p><p class=\"mb-4\">Clincoo merender CSS yang kamu simpan. Anchor di app.clincoo.buzz tetap kebaca.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add scroll-margin so Clincoo Anchors Are Not Hidden by the Header",
          desc: "A #section link parks the heading under a sticky header. scroll-margin-top leaves room.",
          content: "<p class=\"mb-4\">A Clincoo table of contents jumps to a heading id, then the title hides under a fixed header. The visual offset is wrong.</p><p class=\"mb-4\">Set scroll-margin-top on headings in editor.clincoo.buzz to the header height plus a little breathing room.</p><p class=\"mb-4\">One .anchor class on h2 and h3 is enough. Do not compute offset in JavaScript if CSS already handles it.</p><p class=\"mb-4\">Ask AI to add scroll-margin-top on headings that have an id. Paste the header and one sample heading.</p><p class=\"mb-4\">Clincoo renders the CSS you save. Anchors on app.clincoo.buzz stay readable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "scroll-intersection-lazy-bagian",
      langs: {
        "id": {
          title: "Pakai Intersection Observer untuk Lazy Muat Bagian Clincoo",
          desc: "Mengikat scroll dan hitung getBoundingClientRect setiap pixel berat. Observer lebih hemat.",
          content: "<p class=\"mb-4\">Template Clincoo memasang window.onscroll untuk memuat kartu di bawah lipatan. Layout terus diukur ulang.</p><p class=\"mb-4\">Buat IntersectionObserver di editor.clincoo.buzz dengan rootMargin agar muat sedikit sebelum terlihat. Lepas observe setelah masuk.</p><p class=\"mb-4\">Jangan observer setiap piksel gambar jika satu sentinel per bagian cukup. Matikan observer saat meninggalkan halaman.</p><p class=\"mb-4\">Minta AI mengganti onscroll dengan IntersectionObserver. Tempel daftar bagian, bukan seluruh app.</p><p class=\"mb-4\">Clincoo merender skrip yang kamu simpan. Observer menjaga scroll di app.clincoo.buzz tetap halus.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Intersection Observer to Lazy-Load Clincoo Sections",
          desc: "Binding scroll and calling getBoundingClientRect every pixel is heavy. An observer is cheaper.",
          content: "<p class=\"mb-4\">A Clincoo template attaches window.onscroll to load cards below the fold. Layout is measured over and over.</p><p class=\"mb-4\">Create an IntersectionObserver in editor.clincoo.buzz with rootMargin so content loads just before it shows. Unobserve after it enters.</p><p class=\"mb-4\">Do not observe every image pixel if one sentinel per section is enough. Disconnect the observer when leaving the page.</p><p class=\"mb-4\">Ask AI to replace onscroll with IntersectionObserver. Paste the section list, not the whole app.</p><p class=\"mb-4\">Clincoo renders the script you save. The observer keeps scrolling on app.clincoo.buzz smooth.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "scroll-pulihkan-posisi-halaman",
      langs: {
        "id": {
          title: "Pulihkan Posisi Scroll Clincoo saat Kembali ke Daftar",
          desc: "Kembali dari detail melempar pengguna ke puncak daftar. Simpan scrollY sebelum pindah.",
          content: "<p class=\"mb-4\">Pengguna Clincoo membuka kartu, lalu Back mengembalikan daftar ke atas. Konteks hilang.</p><p class=\"mb-4\">Simpan window.scrollY atau posisi kontainer ke sessionStorage sebelum navigasi di editor.clincoo.buzz. Baca lagi di pageshow atau setelah render.</p><p class=\"mb-4\">Pakai history.scrollRestoration = \"manual\" jika kamu mengontrol sendiri. Jangan pulihkan jika query pencarian berubah.</p><p class=\"mb-4\">Minta AI menambah simpan dan pulih scroll pada daftar. Tempel markup daftar dan tautan detail.</p><p class=\"mb-4\">Clincoo merender halaman yang kamu simpan. Posisi scroll yang pulih membuat app.clincoo.buzz terasa utuh.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Restore Clincoo Scroll Position When Returning to a List",
          desc: "Back from a detail view dumps the user at the top of the list. Save scrollY before you leave.",
          content: "<p class=\"mb-4\">A Clincoo user opens a card, then Back returns the list to the top. Context is gone.</p><p class=\"mb-4\">Save window.scrollY or the container position to sessionStorage before navigation in editor.clincoo.buzz. Read it again on pageshow or after render.</p><p class=\"mb-4\">Use history.scrollRestoration = \"manual\" if you control it yourself. Do not restore if the search query changed.</p><p class=\"mb-4\">Ask AI to add save and restore scroll on the list. Paste the list markup and the detail link.</p><p class=\"mb-4\">Clincoo renders the page you save. A restored scroll position makes app.clincoo.buzz feel whole.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
