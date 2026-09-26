// Clincoo Blog — artikel json tambahan 2026-09-26 WIB
(function(){
  var extra = [
    {
      id: "json-trailing-comma-bukan-valid",
      langs: {
        "id": {
          title: "JSON Clincoo Tidak Menerima Trailing Comma, Hapus Koma Terakhir sebelum Parse",
          desc: "Trailing comma valid di JS object, bukan di JSON. Satu koma sisa merusak JSON.parse.",
          content: "<p class=\"mb-4\">Developer Clincoo sering menempel objek dari editor.clincoo.buzz ke file .json. Koma setelah properti terakhir lolos di JS, gagal di JSON.parse.</p><p class=\"mb-4\">Jika konsol menampilkan SyntaxError Unexpected token, cek koma sebelum penutup } atau ]. Bukan hanya tanda kutip.</p><p class=\"mb-4\">Minta AI membersihkan satu payload, bukan menulis ulang seluruh modul fetch.</p><p class=\"mb-4\">Simpan contoh JSON sah di repo. Bandingkan file rusak dengan contoh itu sebelum menuduh API.</p><p class=\"mb-4\">Clincoo menjalankan parse di browser pengguna. JSON ketat lebih aman daripada kebiasaan objek JavaScript.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Clincoo JSON Does Not Accept Trailing Commas, Strip the Last Comma before Parse",
          desc: "A trailing comma is valid in a JS object, not in JSON. One leftover comma breaks JSON.parse.",
          content: "<p class=\"mb-4\">Clincoo developers often paste an object from editor.clincoo.buzz into a .json file. A comma after the last property passes in JS and fails in JSON.parse.</p><p class=\"mb-4\">If the console shows SyntaxError Unexpected token, check the comma before a closing } or ]. It is not only quotes.</p><p class=\"mb-4\">Ask the AI to clean one payload, not rewrite the whole fetch module.</p><p class=\"mb-4\">Keep a valid JSON sample in the repo. Compare the broken file with that sample before blaming the API.</p><p class=\"mb-4\">Clincoo runs parse in the visitor browser. Strict JSON is safer than JavaScript object habits.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "json-undefined-hilang-saat-stringify",
      langs: {
        "id": {
          title: "undefined Hilang saat JSON.stringify Clincoo, Jangan Andalkan Field Kosong",
          desc: "stringify membuang kunci bernilai undefined. Field yang kamu harapkan di API tidak pernah terkirim.",
          content: "<p class=\"mb-4\">Form Clincoo sering menyimpan undefined untuk input yang dilewati. JSON.stringify menghapus kunci itu tanpa peringatan.</p><p class=\"mb-4\">Di editor.clincoo.buzz, ganti undefined dengan null jika server harus melihat field-nya. Atau hapus secara sadar di dokumentasi payload.</p><p class=\"mb-4\">Jangan debug dengan melihat objek JS di memori. Log hasil stringify, itu yang benar-benar terkirim.</p><p class=\"mb-4\">Minta AI satu helper normalizePayload. Tempel bentuk objek form, bukan seluruh halaman.</p><p class=\"mb-4\">Clincoo mengirim string, bukan objek hidup. Sadari apa yang hilang sebelum menyalahkan backend.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "undefined Disappears in Clincoo JSON.stringify, Do Not Rely on a Missing Field",
          desc: "stringify drops keys whose value is undefined. The field you expect on the API is never sent.",
          content: "<p class=\"mb-4\">Clincoo forms often store undefined for skipped inputs. JSON.stringify deletes that key with no warning.</p><p class=\"mb-4\">In editor.clincoo.buzz, replace undefined with null if the server must see the field. Or drop it on purpose and document the payload.</p><p class=\"mb-4\">Do not debug from the live JS object. Log the stringify result; that is what actually goes out.</p><p class=\"mb-4\">Ask the AI for one normalizePayload helper. Paste the form object shape, not the whole page.</p><p class=\"mb-4\">Clincoo sends a string, not a live object. Know what vanished before you blame the backend.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["json"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["json"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
