// Clincoo Blog — artikel upload tambahan 2026-10-02 WIB
(function(){
  var extra = [
  {
    "id": "upload-jangan-simpan-base64-di-html",
    "langs": {
      "id": {
        "title": "Jangan Simpan Unggahan Clincoo sebagai Base64 di HTML",
        "desc": "Data URL membuat berkas HTML membengkak dan sulit di-cache. Simpan file terpisah, HTML hanya merujuk URL.",
        "content": "<p class=\"mb-4\">Pratinjau FileReader di editor.clincoo.buzz memakai data URL hanya di memori. Menyimpan hasil base64 ke dalam HTML membuat setiap simpan mengirim ratusan kilobita berulang.</p><p class=\"mb-4\">Setelah unggah selesai, ganti src ke URL berkas di app.clincoo.buzz. Cabut object URL lokal agar memori tidak tertahan.</p><p class=\"mb-4\">Tolak menyisipkan data:image ke atribut style atau src permanen. Gambar besar juga merusak diff dan pratinjau di editor.</p><p class=\"mb-4\">Minta AI memisahkan markup dari data file. Kirim nama file dan ukuran, bukan string base64.</p><p class=\"mb-4\">Clincoo menayangkan HTML yang ringan. Berkas gambar terpisah bisa di-cache, sedangkan base64 diunduh ulang tiap halaman.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://app.clincoo.buzz/",
        "sourceSnippet": "Aplikasi resmi Clincoo",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Do Not Store Clincoo Uploads as Base64 in HTML",
        "desc": "A data URL bloats the HTML file and is hard to cache. Keep the file separate and let HTML reference a URL.",
        "content": "<p class=\"mb-4\">A FileReader preview on editor.clincoo.buzz uses a data URL only in memory. Saving that base64 into HTML sends hundreds of kilobytes on every save.</p><p class=\"mb-4\">After upload finishes, point src at the file URL on app.clincoo.buzz. Revoke the local object URL so memory is released.</p><p class=\"mb-4\">Refuse a permanent data:image in style or src. Large images also wreck the editor diff and preview.</p><p class=\"mb-4\">Ask AI to separate markup from file data. Send the file name and size, not the base64 string.</p><p class=\"mb-4\">Clincoo ships light HTML. A separate image can be cached, while base64 is downloaded again on every page.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://app.clincoo.buzz/",
        "sourceSnippet": "Official Clincoo app",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      }
    }
  }
];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["upload"]) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles["upload"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();
