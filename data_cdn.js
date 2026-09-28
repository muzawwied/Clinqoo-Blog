// Clincoo Blog — Data kategori: cdn
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["cdn"] = {
  names: { "id": "CDN", "en": "CDN" },
  flag: "🌐",
  articles: [
    {
      id: "cdn-cache-aset-statis-clincoo",
      langs: {
        "id": {
          title: "Cache Aset Statis Clincoo di CDN dengan Nama Berhash",
          desc: "File CSS/JS tanpa hash sulit di-cache lama. Nama berhash plus Cache-Control panjang aman.",
          content: "<p class=\"mb-4\">Pengunjung Clincoo mengunduh style.css yang sama setiap deploy. CDN tidak berani menahan file tanpa versi.</p><p class=\"mb-4\">Ubah nama aset menjadi style.[hash].css di alur unggah editor.clincoo.buzz. Set Cache-Control: public, max-age=31536000, immutable pada file hash.</p><p class=\"mb-4\">HTML tetap no-cache atau max-age pendek. Jangan cache index.html selama setahun.</p><p class=\"mb-4\">Minta AI merencanakan pola nama file dan header cache. Tempel daftar aset di folder publik.</p><p class=\"mb-4\">Clincoo menayangkan tautan aset yang kamu simpan. Kunjungan ulang di app.clincoo.buzz memakai salinan CDN.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Cache Clincoo Static Assets on a CDN with Hashed Names",
          desc: "CSS/JS files without a hash are hard to cache for long. Hashed names plus long Cache-Control are safe.",
          content: "<p class=\"mb-4\">Clincoo visitors download the same style.css on every deploy. A CDN will not hold an unversioned file.</p><p class=\"mb-4\">Rename assets to style.[hash].css in the editor.clincoo.buzz upload flow. Set Cache-Control: public, max-age=31536000, immutable on hashed files.</p><p class=\"mb-4\">Keep HTML at no-cache or a short max-age. Do not cache index.html for a year.</p><p class=\"mb-4\">Ask AI to plan the filename pattern and cache headers. Paste the public folder asset list.</p><p class=\"mb-4\">Clincoo ships the asset links you save. Repeat visits on app.clincoo.buzz use the CDN copy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
