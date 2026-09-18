// Clinqoo Blog — artikel deploy tambahan 2026-09-18 (merge ke data_deploy)
(function(){
  var extra = [
    {
      id: "deploy-uji-tautan-setelah-live",
      langs: {
        "id": {
          title: "Uji Setiap Tautan di URL Publik setelah Deploy",
          desc: "Pratinjau editor belum cukup. Setelah Clinqoo menayangkan situs, klik menu di alamat live.",
          content: "<p class=\"mb-4\">Deploy berhasil tidak berarti setiap halaman saling terhubung di internet. Buka URL publik, bukan pratinjau, lalu klik menu, tombol, dan tautan footer satu per satu.</p><p class=\"mb-4\">Perhatikan path relatif yang pecah setelah file pindah folder, dan tautan yang masih mengarah ke localhost. Hard refresh sekali agar cache lama tidak menipu.</p><p class=\"mb-4\">Kalau satu tautan 404, perbaiki di editor Clinqoo, simpan, deploy ulang. Jangan menumpuk lima perbaikan tanpa menguji URL live lagi.</p><p class=\"mb-4\">Lima menit klik di situs tayang menghemat pesan klien yang hanya berbunyi 'halamannya tidak ketemu'.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Menu Deploy Clinqoo",
          source2: "Cloudflare Docs", sourceUrl2: "https://developers.cloudflare.com/pages/", sourceSnippet2: "Hosting situs statis",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Praktik terbaik web"
        },
        "en": {
          title: "Test Every Link on the Public URL after Deploy",
          desc: "Editor preview is not enough. After Clinqoo publishes the site, click the menu on the live address.",
          content: "<p class=\"mb-4\">A successful deploy does not mean every page connects on the internet. Open the public URL, not preview, then click the menu, buttons, and footer links one by one.</p><p class=\"mb-4\">Watch for relative paths that break after a file moved folders, and links that still point at localhost. Hard-refresh once so old cache does not lie.</p><p class=\"mb-4\">If one link 404s, fix it in the Clinqoo editor, save, and redeploy. Do not stack five fixes without testing the live URL again.</p><p class=\"mb-4\">Five minutes of clicking the live site saves a client message that only says 'the page cannot be found'.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Menu Deploy Clinqoo",
          source2: "Cloudflare Docs", sourceUrl2: "https://developers.cloudflare.com/pages/", sourceSnippet2: "Hosting situs statis",
          source3: "web.dev", sourceUrl3: "https://web.dev/", sourceSnippet3: "Praktik terbaik web"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["deploy"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["deploy"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
