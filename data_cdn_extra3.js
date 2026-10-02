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
