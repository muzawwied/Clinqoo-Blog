// Clincoo Blog — Data kategori: svg
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["svg"] = {
  names: { "id": "SVG", "en": "SVG" },
  flag: "\u25a1",
  articles: [
    {
      id: "svg-ikon-inline-bukan-berkas",
      langs: {
        "id": {
          title: "Tempel SVG Ikon Inline di Clincoo, Jangan Hanya Berkas Terpisah",
          desc: "Ikon sebagai file img sulit diwarnai lewat CSS dan sering flicker saat dimuat.",
          content: "<p class=\"mb-4\">Tombol Clincoo memakai &lt;img src=\"ikon.svg\"&gt;. Warna ikon tidak mengikuti teks dan muncul telat setelah HTML.</p><p class=\"mb-4\">Tempel markup SVG langsung di tombol di editor.clincoo.buzz. Set currentColor pada fill agar ikon ikut warna teks.</p><p class=\"mb-4\">Beri title atau aria-hidden sesuai makna. Ikon dekoratif disembunyikan dari pembaca layar.</p><p class=\"mb-4\">Minta AI hanya mengganti satu ikon jadi inline. Tempel berkas SVG asli.</p><p class=\"mb-4\">Clincoo merender SVG yang kamu tempel. Ikon inline mengikuti tema di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Paste Icon SVG Inline in Clincoo, Not Only as Separate Files",
          desc: "Icons as img files are hard to recolor with CSS and often flicker on load.",
          content: "<p class=\"mb-4\">Clincoo buttons use &lt;img src=\"icon.svg\"&gt;. The icon color does not follow the text and appears late after the HTML.</p><p class=\"mb-4\">Paste the SVG markup into the button in editor.clincoo.buzz. Set currentColor on fill so the icon matches text color.</p><p class=\"mb-4\">Add a title or aria-hidden to match meaning. Hide decorative icons from screen readers.</p><p class=\"mb-4\">Ask AI to convert one icon to inline only. Paste the original SVG file.</p><p class=\"mb-4\">Clincoo renders the SVG you paste. Inline icons follow the theme on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "svg-pertahankan-viewbox",
      langs: {
        "id": {
          title: "Jangan Hapus viewBox saat Menyusutkan SVG di Clincoo",
          desc: "Tanpa viewBox, ikon pecah saat lebar berubah. viewBox menjaga rasio tetap.",
          content: "<p class=\"mb-4\">AI kadang menghapus viewBox agar \"lebih ringkas\". Ikon lalu merentang aneh di tombol sempit Clincoo.</p><p class=\"mb-4\">Simpan viewBox=\"0 0 lebar tinggi\" dan atur width/height lewat CSS di editor.clincoo.buzz. Biarkan SVG menskalakan diri.</p><p class=\"mb-4\">Jangan set width dan height tetap di atribut jika kamu sudah mengatur ukuran di CSS.</p><p class=\"mb-4\">Minta AI hanya mengembalikan viewBox yang hilang. Tempel SVG sebelum dan sesudah.</p><p class=\"mb-4\">Clincoo tidak memperbaiki rasio sendiri. viewBox yang utuh menjaga ikon rapi di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Drop viewBox When Shrinking SVG in Clincoo",
          desc: "Without viewBox, an icon breaks when width changes. viewBox keeps the ratio.",
          content: "<p class=\"mb-4\">AI sometimes removes viewBox to look \"leaner\". The icon then stretches oddly on a narrow Clincoo button.</p><p class=\"mb-4\">Keep viewBox=\"0 0 width height\" and size width/height with CSS in editor.clincoo.buzz. Let the SVG scale itself.</p><p class=\"mb-4\">Do not set fixed width and height attributes if you already size the icon in CSS.</p><p class=\"mb-4\">Ask AI to restore the missing viewBox only. Paste the SVG before and after.</p><p class=\"mb-4\">Clincoo does not fix the ratio for you. An intact viewBox keeps icons tidy on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
