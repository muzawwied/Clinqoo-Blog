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
    },
    {
      id: "scroll-behavior-smooth-hemat",
      langs: {
        "id": {
          title: "Pakai scroll-behavior:smooth Hanya pada Navigasi dalam Halaman Clincoo",
          desc: "Smooth scroll global membuat lompatan keyboard terasa lambat. Batasi ke tautan jangkar.",
          content: "<p class=\"mb-4\">html { scroll-behavior: smooth } di Clincoo membuat setiap perubahan hash dan fokus terasa berat, termasuk Tab.</p><p class=\"mb-4\">Terapkan smooth hanya pada tautan #id di editor.clincoo.buzz, atau kelas .smooth-scroll pada navigasi dalam halaman.</p><p class=\"mb-4\">Hormati prefers-reduced-motion: kurangi ke auto. Jangan animasikan scroll yang dipicu skrip panjang.</p><p class=\"mb-4\">Minta AI memindahkan scroll-behavior dari html ke kelas tautan jangkar. Tempel CSS global dan satu tautan daftar isi.</p><p class=\"mb-4\">Clincoo merender CSS yang kamu simpan. Gulir di app.clincoo.buzz tetap cepat bagi pengguna keyboard.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use scroll-behavior:smooth Only for In-Page Clincoo Navigation",
          desc: "Global smooth scroll makes keyboard jumps feel slow. Limit it to anchor links.",
          content: "<p class=\"mb-4\">html { scroll-behavior: smooth } on Clincoo makes every hash and focus change feel heavy, including Tab.</p><p class=\"mb-4\">Apply smooth only to #id links in editor.clincoo.buzz, or a .smooth-scroll class on in-page navigation.</p><p class=\"mb-4\">Honor prefers-reduced-motion: fall back to auto. Do not animate long scripted scrolls.</p><p class=\"mb-4\">Ask AI to move scroll-behavior off html onto anchor-link classes. Paste the global CSS and one table-of-contents link.</p><p class=\"mb-4\">Clincoo renders the CSS you save. Scrolling on app.clincoo.buzz stays fast for keyboard users.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "scroll-kontainer-overflow-bukan-window",
      langs: {
        "id": {
          title: "Gulir Kontainer Overflow Clincoo, Bukan Selalu window",
          desc: "Daftar di panel tetap memakai overflow. scrollTo pada window tidak menggerakkan apa pun.",
          content: "<p class=\"mb-4\">Panel pratinjau Clincoo sering overflow:auto. window.scrollTo(0, 0) meninggalkan daftar di tengah.</p><p class=\"mb-4\">Simpan referensi elemen scroll di editor.clincoo.buzz. Panggil el.scrollTo atau el.scrollTop pada kontainer itu.</p><p class=\"mb-4\">Deteksi scrollParent: naik dari target sampai overflow bukan visible. Jangan asumsikan body.</p><p class=\"mb-4\">Minta AI mencari kontainer scroll nyata sebelum menambahkan tombol ke atas. Tempel markup panel dan daftar.</p><p class=\"mb-4\">Clincoo merender skrip yang kamu simpan. Gulir panel di app.clincoo.buzz mengikuti elemen yang benar.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Scroll the Clincoo Overflow Container, Not Always window",
          desc: "A list in a fixed panel uses overflow. window.scrollTo moves nothing.",
          content: "<p class=\"mb-4\">A Clincoo preview panel often has overflow:auto. window.scrollTo(0, 0) leaves the list mid-way.</p><p class=\"mb-4\">Keep a reference to the scroll element in editor.clincoo.buzz. Call el.scrollTo or el.scrollTop on that container.</p><p class=\"mb-4\">Detect the scrollParent: walk up from the target until overflow is not visible. Do not assume body.</p><p class=\"mb-4\">Ask AI to find the real scroll container before adding a back-to-top button. Paste the panel and list markup.</p><p class=\"mb-4\">Clincoo renders the script you save. Panel scrolling on app.clincoo.buzz follows the right element.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "scroll-kunci-body-saat-modal",
      langs: {
        "id": {
          title: "Kunci Scroll Body Clincoo saat Modal Terbuka",
          desc: "Latar belakang masih bergulir di belakang dialog. Simpan posisi lalu set overflow hidden.",
          content: "<p class=\"mb-4\">Modal Clincoo terbuka, pengguna menggulir, dan halaman di belakang ikut bergerak. Fokus visual pecah.</p><p class=\"mb-4\">Simpan window.scrollY, set body overflow:hidden dan padding-right sebesar lebar scrollbar di editor.clincoo.buzz.</p><p class=\"mb-4\">Saat tutup, kembalikan overflow dan scrollTo posisi semula. Jangan biarkan iOS rubber-band menggeser layout.</p><p class=\"mb-4\">Minta AI menambah kunci dan buka kunci scroll pada buka/tutup modal. Tempel markup dialog dan body.</p><p class=\"mb-4\">Clincoo merender skrip yang kamu simpan. Dialog di app.clincoo.buzz tidak menyeret halaman belakang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Lock Clincoo Body Scroll While a Modal Is Open",
          desc: "The page still scrolls behind the dialog. Save position then set overflow hidden.",
          content: "<p class=\"mb-4\">A Clincoo modal opens, the user scrolls, and the page behind moves too. Visual focus breaks.</p><p class=\"mb-4\">Save window.scrollY, set body overflow:hidden and padding-right to the scrollbar width in editor.clincoo.buzz.</p><p class=\"mb-4\">On close, restore overflow and scrollTo the old position. Do not let iOS rubber-banding shift the layout.</p><p class=\"mb-4\">Ask AI to add lock and unlock scroll on modal open/close. Paste the dialog markup and the body.</p><p class=\"mb-4\">Clincoo renders the script you save. Dialogs on app.clincoo.buzz do not drag the page behind them.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "scroll-snap-galeri-kartu",
      langs: {
        "id": {
          title: "Pasang scroll-snap pada Galeri Kartu Clincoo",
          desc: "Geser bebas berhenti di sela kartu. scroll-snap-type menahan satu item di pusat.",
          content: "<p class=\"mb-4\">Galeri Clincoo berhenti di antara dua kartu. Pengguna tidak tahu item mana yang aktif.</p><p class=\"mb-4\">Setel overflow-x:auto, scroll-snap-type:x mandatory, dan scroll-snap-align:start pada anak di editor.clincoo.buzz.</p><p class=\"mb-4\">Sembunyikan scrollbar hanya jika masih bisa digeser dengan sentuhan atau tombol. Jangan matikan snap di desktop tanpa alternatif.</p><p class=\"mb-4\">Minta AI menambah snap pada baris kartu. Tempel markup galeri dan CSS overflow yang ada.</p><p class=\"mb-4\">Clincoo merender CSS yang kamu simpan. Geser kartu di app.clincoo.buzz berhenti pada batas yang jelas.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add scroll-snap to a Clincoo Card Gallery",
          desc: "Free swipe stops between cards. scroll-snap-type parks one item in view.",
          content: "<p class=\"mb-4\">A Clincoo gallery stops between two cards. Users cannot tell which item is active.</p><p class=\"mb-4\">Set overflow-x:auto, scroll-snap-type:x mandatory, and scroll-snap-align:start on children in editor.clincoo.buzz.</p><p class=\"mb-4\">Hide the scrollbar only if swipe or buttons still work. Do not disable snap on desktop without an alternative.</p><p class=\"mb-4\">Ask AI to add snap on the card row. Paste the gallery markup and the existing overflow CSS.</p><p class=\"mb-4\">Clincoo renders the CSS you save. Card swipes on app.clincoo.buzz stop on a clear edge.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "scroll-tombol-kembali-ke-atas",
      langs: {
        "id": {
          title: "Tampilkan Tombol Kembali ke Atas Clincoo setelah Ambang Gulir",
          desc: "Tombol tetap di sudut mengganggu hero. Munculkan setelah pengguna melewati lipatan.",
          content: "<p class=\"mb-4\">Tombol ke atas Clincoo menempel di hero. Pengguna baru membuka halaman sudah melihat kontrol yang belum perlu.</p><p class=\"mb-4\">Pakai IntersectionObserver pada penanda di puncak, atau bandingkan scrollY dengan ambang di editor.clincoo.buzz.</p><p class=\"mb-4\">Sembunyikan tombol saat dekat puncak. Beri type=button dan label yang jelas. Hormati reduced-motion saat menggulir naik.</p><p class=\"mb-4\">Minta AI menambah tombol yang muncul setelah 400px. Tempel header dan footer halaman.</p><p class=\"mb-4\">Clincoo merender markup yang kamu simpan. Kontrol di app.clincoo.buzz muncul hanya saat jaraknya masuk akal.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Show a Clincoo Back-to-Top Button After a Scroll Threshold",
          desc: "A sticky corner button crowds the hero. Reveal it after the user passes the fold.",
          content: "<p class=\"mb-4\">A Clincoo back-to-top button sits on the hero. New visitors see a control they do not need yet.</p><p class=\"mb-4\">Use IntersectionObserver on a top sentinel, or compare scrollY to a threshold in editor.clincoo.buzz.</p><p class=\"mb-4\">Hide the button near the top. Give it type=button and a clear label. Honor reduced-motion when scrolling up.</p><p class=\"mb-4\">Ask AI to add a button that appears after 400px. Paste the page header and footer.</p><p class=\"mb-4\">Clincoo renders the markup you save. The control on app.clincoo.buzz appears only when the distance makes sense.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
