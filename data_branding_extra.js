// Clincoo Blog — artikel branding tambahan 2026-09-25
(function(){
  var extra = [
    {
      id: "branding-cta-satu-label",
      langs: {
        "id": {
          title: "Samakan Label Tombol CTA Clincoo di Semua Halaman",
          desc: "Tombol yang sama memakai kata berbeda membuat merek terasa goyah. Satu label CTA menjaga janji.",
          content: "<p class=\"mb-4\">Beranda Clincoo memakai Mulai sekarang, harga memakai Daftar, dan footer memakai Coba gratis. Pengunjung tidak tahu tombol mana yang resmi.</p><p class=\"mb-4\">Pilih satu label CTA primer di editor.clincoo.buzz. Simpan di brand.md dan pakai teks yang sama di hero, harga, dan header.</p><p class=\"mb-4\">Varian sekunder boleh ada, misalnya Lihat contoh. Jangan buat empat sinonim untuk aksi yang sama.</p><p class=\"mb-4\">Minta AI hanya merapikan label tombol. Tempel tiga CTA yang tidak sama.</p><p class=\"mb-4\">Clincoo tidak menyatukan salinan tombol. Satu label menjaga merek jelas di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep the Same Clincoo CTA Label on Every Page",
          desc: "The same button with different words makes the brand feel shaky. One CTA label keeps the promise.",
          content: "<p class=\"mb-4\">A Clincoo home page says Start now, pricing says Sign up, and the footer says Try free. Visitors cannot tell which button is official.</p><p class=\"mb-4\">Pick one primary CTA label in editor.clincoo.buzz. Store it in brand.md and reuse that text in the hero, pricing, and header.</p><p class=\"mb-4\">A secondary variant is fine, such as See examples. Do not invent four synonyms for the same action.</p><p class=\"mb-4\">Ask AI to tidy button labels only. Paste the three mismatched CTAs.</p><p class=\"mb-4\">Clincoo does not unify button copy for you. One label keeps the brand clear on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "branding-radius-satu-token",
      langs: {
        "id": {
          title: "Samakan Radius Sudut Clincoo lewat Satu Token CSS",
          desc: "Tombol 4px, kartu 16px, dan input 999px tanpa aturan membuat antarmuka terlihat acak.",
          content: "<p class=\"mb-4\">Halaman Clincoo memakai border-radius berbeda di setiap komponen. Merek terasa seperti kumpulan template.</p><p class=\"mb-4\">Definisikan --radius-s, --radius-m, dan --radius-pill di :root di editor.clincoo.buzz. Pakai token itu di tombol, kartu, dan input.</p><p class=\"mb-4\">Jangan terima saran AI yang menambah radius baru agar lebih modern. Snap ke token terdekat.</p><p class=\"mb-4\">Minta AI hanya mengganti nilai radius liar. Tempel :root dan satu tombol yang menyimpang.</p><p class=\"mb-4\">Clincoo merender CSS yang kamu tulis. Token radius menjaga sudut konsisten di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep Clincoo Corner Radii on One CSS Token Scale",
          desc: "Buttons at 4px, cards at 16px, and pill inputs at 999px with no rule make the UI look random.",
          content: "<p class=\"mb-4\">A Clincoo page uses a different border-radius on every component. The brand feels like mixed templates.</p><p class=\"mb-4\">Define --radius-s, --radius-m, and --radius-pill on :root in editor.clincoo.buzz. Use those tokens on buttons, cards, and inputs.</p><p class=\"mb-4\">Do not accept an AI suggestion that adds a new radius to look more modern. Snap to the nearest token.</p><p class=\"mb-4\">Ask AI to replace only the wild radius values. Paste :root and one stray button.</p><p class=\"mb-4\">Clincoo renders the CSS you write. Radius tokens keep corners consistent on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["branding"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["branding"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
