// Clincoo Blog — Extra typography
(function(){
  var extra = [
    {
      id: "typography-ukuran-minimum-teks-body",
      langs: {
        "id": {
          title: "Jaga Ukuran Minimum Teks Body di Halaman Clincoo",
          desc: "Body di bawah 1rem sulit dibaca di ponsel. Tetapkan lantai ukuran sebelum merapikan judul.",
          content: "<p class=\"mb-4\">AI sering mengecilkan paragraf jadi 12px agar kartu terlihat rapi. Pengunjung ponsel harus mencubit layar.</p><p class=\"mb-4\">Setel body ke minimal 1rem (atau 16px setara). Turunkan hanya caption, badge, dan label form jika kontrasnya tetap aman.</p><p class=\"mb-4\">Uji di editor.clincoo.buzz dengan lebar 360px. Jika kamu sendiri menyipitkan mata, naikkan ukurannya.</p><p class=\"mb-4\">Minta AI mengubah satu aturan body, bukan setiap kelas. Tolak generate yang mengembalikan font-size kecil merata.</p><p class=\"mb-4\">Clincoo menayangkan CSS apa adanya. Lantai ukuran teks menjaga halaman tetap bisa dibaca tanpa zoom.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep a Minimum Body Text Size on Clincoo Pages",
          desc: "Body text under 1rem is hard to read on phones. Set a floor before you tidy headings.",
          content: "<p class=\"mb-4\">AI often shrinks paragraphs to 12px so cards look neat. Phone visitors then pinch to zoom.</p><p class=\"mb-4\">Set body to at least 1rem (or the 16px equivalent). Shrink only captions, badges, and form labels if contrast stays safe.</p><p class=\"mb-4\">Test in editor.clincoo.buzz at 360px width. If you squint, raise the size.</p><p class=\"mb-4\">Ask the AI to change one body rule, not every class. Reject a generate that paints tiny font-size everywhere.</p><p class=\"mb-4\">Clincoo ships the CSS as saved. A text-size floor keeps the page readable without zoom.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "typography-hyphens-word-break-hati-hati",
      langs: {
        "id": {
          title: "Pakai hyphens dan word-break dengan Hati-hati di Clincoo",
          desc: "word-break: break-all merusak kata Indonesia. Pilih wrap yang tidak memotong suku kata sembarangan.",
          content: "<p class=\"mb-4\">Template sering memasang word-break: break-all agar kartu tidak overflow. Hasilnya \"pemasaran\" jadi \"pemasara-n\" atau terpotong di tengah huruf.</p><p class=\"mb-4\">Utamakan overflow-wrap: anywhere atau break-word. Hindari break-all kecuali pada string teknis seperti URL dan ID.</p><p class=\"mb-4\">Hyphens: auto hanya jika lang di html sudah benar. Tanpa lang, pemenggalan Inggris merusak kata ID.</p><p class=\"mb-4\">Tempel judul panjang di pratinjau editor.clincoo.buzz. Kartu harus turun baris, bukan membelah huruf.</p><p class=\"mb-4\">Clincoo tidak memotong kata untukmu. Satu properti wrap yang tepat menjaga bahasa tetap utuh.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use hyphens and word-break Carefully in Clincoo",
          desc: "word-break: break-all wrecks Indonesian words. Choose wrapping that does not slice syllables at random.",
          content: "<p class=\"mb-4\">Templates often set word-break: break-all so cards never overflow. Words like \"pemasaran\" then split mid-letter.</p><p class=\"mb-4\">Prefer overflow-wrap: anywhere or break-word. Reserve break-all for technical strings such as URLs and IDs.</p><p class=\"mb-4\">Use hyphens: auto only when html lang is correct. Without lang, English hyphenation breaks ID words.</p><p class=\"mb-4\">Paste a long heading in editor.clincoo.buzz preview. The card should wrap lines, not split letters.</p><p class=\"mb-4\">Clincoo does not hyphenate for you. One honest wrap property keeps the language intact.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["typography"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["typography"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
