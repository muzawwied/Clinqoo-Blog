// Clincoo Blog — artikel cdn tambahan 2026-10-03
(function(){
  var extra = [
  {
    "id": "cdn-pisahkan-html-dan-aset-immutable",
    "langs": {
      "id": {
        "title": "Pisahkan HTML dan Aset Immutable di CDN Clincoo",
        "desc": "Satu kebijakan cache untuk HTML dan file berhash membuat rilis baru tertahan atau aset lama hilang. Pisahkan path dan header.",
        "content": "<p class=\"mb-4\">Di app.clincoo.buzz, HTML halaman berubah tiap deploy, sedangkan CSS dan JS berhash boleh disimpan lama. CDN yang memakai satu aturan untuk keduanya salah satu akan ketinggalan.</p><p class=\"mb-4\">Layani HTML dari origin atau edge dengan max-age pendek dan revalidasi. Layani /assets/ berhash dengan Cache-Control: public, max-age=31536000, immutable.</p><p class=\"mb-4\">Jangan purge seluruh zona hanya karena satu baris HTML berubah. Purge path HTML, biarkan berkas berhash tetap.</p><p class=\"mb-4\">Jika AI menyarankan cache satu tahun untuk semua URL, minta dua contoh header: dokumen dan aset. Tolak saran yang meng-cache HTML berisi token.</p><p class=\"mb-4\">Cek response header di pratinjau editor.clincoo.buzz sebelum tautan dibagikan lewat blog.clincoo.buzz.</p>",
        "source": "MDN: Cache-Control",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control",
        "sourceSnippet": "developer.mozilla.org",
        "source2": "web.dev: HTTP cache",
        "source3": "MDN: Subresource Integrity"
      },
      "en": {
        "title": "Split HTML and Immutable Assets on the Clincoo CDN",
        "desc": "One cache policy for HTML and hashed files either stalls a release or drops old assets. Split paths and headers.",
        "content": "<p class=\"mb-4\">On app.clincoo.buzz, page HTML changes every deploy, while hashed CSS and JS can live a long time. A CDN rule that treats both the same will lag on one of them.</p><p class=\"mb-4\">Serve HTML from origin or the edge with a short max-age and revalidation. Serve hashed /assets/ with Cache-Control: public, max-age=31536000, immutable.</p><p class=\"mb-4\">Do not purge the whole zone because one HTML line changed. Purge the HTML path and leave hashed files alone.</p><p class=\"mb-4\">If AI suggests a one-year cache for every URL, ask for two header examples: document and asset. Reject any cache of HTML that contains a token.</p><p class=\"mb-4\">Check response headers in the editor.clincoo.buzz preview before the link is shared from blog.clincoo.buzz.</p>",
        "source": "MDN: Cache-Control",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control",
        "sourceSnippet": "developer.mozilla.org",
        "source2": "web.dev: HTTP cache",
        "source3": "MDN: Subresource Integrity"
      }
    }
  }
,
  {"id": "cdn-cek-cache-control-html-vs-aset", "langs": {"id": {"title": "Bedakan Cache-Control HTML dan aset di CDN Clincoo", "desc": "HTML yang di-cache lama menahan rilis baru. Aset ber-hash boleh immutable, dokumen tidak.", "content": "<p class=\"mb-4\">Setelah deploy ke app.clincoo.buzz, halaman lama masih terbuka karena CDN menyimpan HTML sama seperti gambar.</p><p class=\"mb-4\">Set Cache-Control singkat atau no-cache untuk HTML. File dengan hash di nama boleh public, max-age panjang, immutable.</p><p class=\"mb-4\">Cek header di DevTools, kolom Network, bukan hanya status 200. Umur cache yang sama untuk keduanya adalah tanda salah.</p><p class=\"mb-4\">Minta AI menulis dua aturan header, bukan satu aturan global. Tolak saran yang men-cache dokumen login.</p><p class=\"mb-4\">Purge HTML setelah rilis, biarkan aset hash tetap. Catat pengecualian di blog.clincoo.buzz supaya tim tidak menyamakan keduanya.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Editor resmi Clincoo", "source2": "Clincoo App", "source3": "Clincoo Blog"}, "en": {"title": "Split Cache-Control for HTML and assets on the Clincoo CDN", "desc": "Long-cached HTML holds back a new release. Hashed assets can be immutable. Documents should not.", "content": "<p class=\"mb-4\">After a deploy to app.clincoo.buzz, an old page still opens because the CDN stored HTML the same way it stored images.</p><p class=\"mb-4\">Set a short Cache-Control or no-cache for HTML. Files with a hash in the name can be public, long max-age, immutable.</p><p class=\"mb-4\">Check headers in DevTools, Network column, not only status 200. The same cache lifetime for both is the bug.</p><p class=\"mb-4\">Ask AI for two header rules, not one global rule. Refuse a suggestion that caches a login document.</p><p class=\"mb-4\">Purge HTML after release and leave hashed assets. Note the exception on blog.clincoo.buzz so the team does not treat them alike.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Official Clincoo editor", "source2": "Clincoo App", "source3": "Clincoo Blog"}}}
];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["cdn"]) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles["cdn"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
