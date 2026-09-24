// Clincoo Blog — Data extra kategori: layout
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
if (!window.countryDataFiles["layout"]) window.countryDataFiles["layout"] = { names: { "id": "Layout", "en": "Layout" }, flag: "\ud83d\udcd0", articles: [] };
(function(){
  var extra = [
    {
      id: "layout-z-index-satu-skala",
      langs: {
        "id": {
          title: "Pakai Satu Skala z-index di Layout Clincoo, Jangan Angka Acak",
          desc: "z-index 9999 di modal, 50 di header, dan 2 di dropdown membuat stacking pecah tanpa rumus.",
          content: "<p class=\"mb-4\">Template Clincoo sering menumpuk z-index 9, 99, 999, dan 9999. Modal baru kalah dari tooltip lama.</p><p class=\"mb-4\">Tetapkan skala kecil di editor.clincoo.buzz: 1 konten, 10 sticky, 20 dropdown, 30 modal. Catat di komentar CSS.</p><p class=\"mb-4\">Jangan menaikkan z-index hanya karena elemen tertutup. Cek stacking context dari transform atau opacity dulu.</p><p class=\"mb-4\">Minta AI merapikan z-index satu file layout. Tolak rewrite komponen yang tidak tertutup.</p><p class=\"mb-4\">Clincoo merender angka yang kamu simpan. Skala pendek membuat overlay di app.clincoo.buzz bisa diprediksi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use One z-index Scale in Clincoo Layout, Not Random Numbers",
          desc: "z-index 9999 on a modal, 50 on the header, and 2 on a dropdown breaks stacking without a rule.",
          content: "<p class=\"mb-4\">Clincoo templates often stack z-index 9, 99, 999, and 9999. A new modal loses to an old tooltip.</p><p class=\"mb-4\">Set a short scale in editor.clincoo.buzz: 1 content, 10 sticky, 20 dropdown, 30 modal. Record it in a CSS comment.</p><p class=\"mb-4\">Do not raise z-index only because an element is covered. Check the stacking context from transform or opacity first.</p><p class=\"mb-4\">Ask AI to tidy z-index in one layout file. Reject a rewrite of components that are not covered.</p><p class=\"mb-4\">Clincoo renders the numbers you save. A short scale makes overlays on app.clincoo.buzz predictable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "layout-sidebar-width-tetap-konten-sisa",
      langs: {
        "id": {
          title: "Tetapkan Lebar Sidebar Clincoo, Biarkan Kolom Utama Mengisi Sisa",
          desc: "Sidebar fleksibel dan konten fleksibel saling meremas sampai teks dan filter tidak muat.",
          content: "<p class=\"mb-4\">Dashboard Clincoo dengan dua kolom flex:1 membuat sidebar melebar saat filter panjang dan meremas artikel.</p><p class=\"mb-4\">Kunci sidebar ke lebar tetap, misalnya 240px atau 16rem, di editor.clincoo.buzz. Kolom utama memakai flex:1 min-width:0.</p><p class=\"mb-4\">Jangan memakai width persen pada keduanya. Satu kolom harus menjadi sisa, bukan keduanya bersaing.</p><p class=\"mb-4\">Minta AI mengubah satu aturan grid atau flex halaman. Tempel markup dua kolom sebagai konteks.</p><p class=\"mb-4\">Clincoo tidak menyeimbangkan kolom sendiri. Lebar yang jujur menjaga filter dan isi tetap terbaca di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Lock Clincoo Sidebar Width, Let the Main Column Fill the Rest",
          desc: "A flexible sidebar and flexible content squeeze each other until text and filters no longer fit.",
          content: "<p class=\"mb-4\">A Clincoo dashboard with two flex:1 columns lets a long filter widen the sidebar and crush the article.</p><p class=\"mb-4\">Lock the sidebar to a fixed width, such as 240px or 16rem, in editor.clincoo.buzz. Give the main column flex:1 and min-width:0.</p><p class=\"mb-4\">Do not give both columns a percent width. One column must take the remainder; they should not compete.</p><p class=\"mb-4\">Ask AI to change one page grid or flex rule. Paste the two-column markup as context.</p><p class=\"mb-4\">Clincoo does not balance columns for you. Honest widths keep filters and copy readable on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "layout-overlap-jangan-margin-negatif",
      langs: {
        "id": {
          title: "Hindari Margin Negatif untuk Menumpuk Kartu Clincoo",
          desc: "Margin negatif menarik kartu ke hero, lalu merusak jarak saat tinggi hero berubah.",
          content: "<p class=\"mb-4\">Landing Clincoo sering memakai margin-top:-80px agar kartu fitur menumpuk di foto hero. Di mobile kartu menutupi judul.</p><p class=\"mb-4\">Pakai overlap yang sadar: grid area, transform kecil, atau padding hero yang disengaja di editor.clincoo.buzz.</p><p class=\"mb-4\">Uji tiga tinggi hero: pendek, sedang, dan dengan dua baris subjudul. Overlap harus tetap aman.</p><p class=\"mb-4\">Minta AI menghapus margin negatif dan mengganti satu teknik overlap. Tolak rewrite seluruh hero.</p><p class=\"mb-4\">Clincoo tidak memperbaiki tumpukan otomatis. Overlap yang terukur menjaga CTA terlihat di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Avoid Negative Margins to Overlap Clincoo Cards",
          desc: "A negative margin pulls cards onto the hero, then breaks spacing when hero height changes.",
          content: "<p class=\"mb-4\">Clincoo landings often use margin-top:-80px so feature cards overlap the hero photo. On mobile the cards cover the title.</p><p class=\"mb-4\">Use a deliberate overlap: a grid area, a small transform, or planned hero padding in editor.clincoo.buzz.</p><p class=\"mb-4\">Test three hero heights: short, medium, and with two subtitle lines. The overlap must stay safe.</p><p class=\"mb-4\">Ask AI to remove the negative margin and swap one overlap technique. Reject a full hero rewrite.</p><p class=\"mb-4\">Clincoo does not fix stacks for you. Measured overlap keeps the CTA visible on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "layout-main-landmark-satu",
      langs: {
        "id": {
          title: "Sediakan Satu Landmark main di Layout Halaman Clincoo",
          desc: "Beberapa wrapper role=main atau tidak ada main sama sekali membuat lompat ke konten gagal.",
          content: "<p class=\"mb-4\">Template Clincoo kadang membungkus hero dan artikel masing-masing dengan main. Screen reader mendengar dua wilayah utama.</p><p class=\"mb-4\">Sisakan satu elemen main di editor.clincoo.buzz. Header, nav, dan footer di luar main.</p><p class=\"mb-4\">Jangan menandai setiap section sebagai main. Landmark lain: nav, aside, footer sudah cukup.</p><p class=\"mb-4\">Minta AI merapikan landmark satu halaman. Tempel kerangka HTML tanpa CSS.</p><p class=\"mb-4\">Clincoo merender markup yang kamu simpan. Satu main membuat pintasan keyboard di app.clincoo.buzz masuk akal.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Provide One main Landmark in the Clincoo Page Layout",
          desc: "Several role=main wrappers, or no main at all, make skip-to-content fail.",
          content: "<p class=\"mb-4\">Clincoo templates sometimes wrap the hero and the article each in main. A screen reader hears two primary regions.</p><p class=\"mb-4\">Leave a single main element in editor.clincoo.buzz. Keep header, nav, and footer outside main.</p><p class=\"mb-4\">Do not mark every section as main. Other landmarks — nav, aside, footer — are enough.</p><p class=\"mb-4\">Ask AI to tidy landmarks on one page. Paste the HTML skeleton without CSS.</p><p class=\"mb-4\">Clincoo renders the markup you save. One main makes keyboard shortcuts on app.clincoo.buzz make sense.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "layout-overflow-hidden-jangan-di-body",
      langs: {
        "id": {
          title: "Jangan Pasang overflow:hidden pada body Layout Clincoo",
          desc: "overflow hidden di body memotong fokus keyboard, modal, dan konten yang lebih tinggi dari viewport.",
          content: "<p class=\"mb-4\">Halaman Clincoo kadang memakai overflow:hidden pada body agar hero tidak scroll ganda. Pengunjung tidak bisa tab ke tautan di bawah lipatan.</p><p class=\"mb-4\">Pindahkan pemotongan ke wadah hero saja di editor.clincoo.buzz. Body harus tetap bisa digulir.</p><p class=\"mb-4\">Jika modal butuh mengunci scroll, kunci hanya saat modal terbuka, lalu kembalikan overflow.</p><p class=\"mb-4\">Minta AI menghapus overflow pada body dan memindahkan aturan ke satu selector hero.</p><p class=\"mb-4\">Clincoo tidak memperbaiki scroll untukmu. Body yang terbuka menjaga fokus dan artikel utuh di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Put overflow:hidden on the Clincoo Layout body",
          desc: "Hidden overflow on body clips keyboard focus, modals, and content taller than the viewport.",
          content: "<p class=\"mb-4\">Clincoo pages sometimes set overflow:hidden on body to stop a double-scrolling hero. Visitors cannot tab to links below the fold.</p><p class=\"mb-4\">Move the clip to the hero wrapper only in editor.clincoo.buzz. Body must stay scrollable.</p><p class=\"mb-4\">If a modal must lock scroll, lock only while it is open, then restore overflow.</p><p class=\"mb-4\">Ask AI to remove overflow on body and move the rule to one hero selector.</p><p class=\"mb-4\">Clincoo does not fix scroll for you. An open body keeps focus and articles intact on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  var t = window.countryDataFiles["layout"];
  t.articles = (t.articles || []).concat(extra);
})();
