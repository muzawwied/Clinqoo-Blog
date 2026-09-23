// Clincoo Blog — Data kategori: cache
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["cache"] = {
  names: { "id": "Cache", "en": "Cache" },
  flag: "🗄️",
  articles: [
    {
      id: "cache-jangan-cache-html-terlalu-lama",
      langs: {
        "id": {
          title: "Jangan Meng-cache HTML Clincoo Terlalu Lama di CDN",
          desc: "HTML yang di-cache berjam-jam menampilkan versi lama setelah kamu deploy. Cache aset, bukan markup.",
          content: "<p class=\"mb-4\">Setelah publish dari Clincoo, pengunjung masih melihat header lama karena HTML di-cache agresif di CDN atau service worker.</p><p class=\"mb-4\">Berkas CSS, font, dan gambar boleh berumur panjang jika namanya berubah saat isi berubah. File HTML sebaiknya max-age pendek atau harus divalidasi ulang.</p><p class=\"mb-4\">Jika memakai PWA, versi nama cache saat rilis agar halaman cadangan tidak menahan index lama.</p><p class=\"mb-4\">Uji dengan hard refresh lalu jendela penyamaran setelah deploy di app.clincoo.buzz.</p><p class=\"mb-4\">Clincoo tidak mengatur header CDN untukmu. Cache yang sopan membuat perbaikan tampil tanpa menunggu semalaman.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Cache Clincoo HTML for Too Long on a CDN",
          desc: "HTML cached for hours shows an old version after you deploy. Cache assets, not markup.",
          content: "<p class=\"mb-4\">After a Clincoo publish, visitors still see the old header because HTML is cached hard on the CDN or a service worker.</p><p class=\"mb-4\">CSS, fonts, and images may live a long time if the filename changes when the contents change. HTML should have a short max-age or must revalidate.</p><p class=\"mb-4\">If you use a PWA, version the cache name on release so the fallback page does not keep an old index.</p><p class=\"mb-4\">Test with a hard refresh and a private window after deploy from app.clincoo.buzz.</p><p class=\"mb-4\">Clincoo does not set CDN headers for you. Polite caching makes a fix show up without waiting overnight.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
