// Clincoo Blog — artikel ux tambahan 2026-09-21
(function(){
  var extra = [
    {
      id: "ux-konfirmasi-sebelum-aksi-destruktif",
      langs: {
        "id": {
          title: "Minta Konfirmasi sebelum Aksi Destruktif di Clincoo",
          desc: "Hapus, reset, atau kirim ulang data tanpa konfirmasi mudah menyesal. Satu dialog singkat sudah cukup.",
          content: "<p class=\"mb-4\">Tombol Hapus di dasbor template sering langsung menjalankan aksi. Satu klik salah menghapus teks yang baru ditulis di editor.clincoo.buzz.</p><p class=\"mb-4\">Tambah langkah konfirmasi: dialog native atau panel kecil dengan nama item yang akan hilang. Tombol batal harus lebih mudah dijangkau.</p><p class=\"mb-4\">Minta AI hanya menambah handler konfirmasi di satu file. Tolak pustaka modal berat.</p><p class=\"mb-4\">Uji di pratinjau: klik hapus, batal, lalu hapus sungguhan. Pastikan fokus keyboard kembali ke pemicu.</p><p class=\"mb-4\">Clincoo menyimpan file apa adanya. UX aman adalah keputusan sebelum tombol berbahaya tampil di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Confirm before Destructive Actions on Clincoo",
          desc: "Delete, reset, or resend without a confirm is easy to regret. One short dialog is enough.",
          content: "<p class=\"mb-4\">Delete buttons on template dashboards often fire immediately. One miss-click wipes text just written in editor.clincoo.buzz.</p><p class=\"mb-4\">Add a confirm step: a native dialog or a small panel that names the item that will go. Cancel should be easier to reach.</p><p class=\"mb-4\">Ask the AI to add a confirm handler in one file. Refuse a heavy modal library.</p><p class=\"mb-4\">Test in preview: click delete, cancel, then delete for real. Keyboard focus should return to the trigger.</p><p class=\"mb-4\">Clincoo stores files as saved. Safe UX is a decision before a dangerous button ships on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "ux-tulis-label-bukan-placeholder-saja",
      langs: {
        "id": {
          title: "Tulis Label Form, Jangan Andalkan Placeholder Saja di Clincoo",
          desc: "Placeholder hilang saat mengetik. Label tetap terlihat dan membantu isi form yang benar.",
          content: "<p class=\"mb-4\">Banyak template Clincoo memakai placeholder sebagai satu-satunya petunjuk field. Setelah fokus, petunjuk itu hilang dan pengunjung lupa format yang diminta.</p><p class=\"mb-4\">Pasang elemen label yang terhubung ke id field. Placeholder boleh jadi contoh, bukan nama field.</p><p class=\"mb-4\">Jika AI menghapus label demi tampilan bersih, minta dikembalikan. Desain rapi tidak menggantikan keterbacaan.</p><p class=\"mb-4\">Cek di pratinjau sempit editor.clincoo.buzz: setiap field harus punya nama yang tetap terlihat.</p><p class=\"mb-4\">Clincoo tidak menulis label otomatis. Satu kata di atas input menghemat error saat form dikirim.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Write Form Labels, Do Not Rely on Placeholder Alone on Clincoo",
          desc: "Placeholders vanish while typing. A label stays visible and helps people fill the form correctly.",
          content: "<p class=\"mb-4\">Many Clincoo templates use a placeholder as the only field hint. After focus, the hint is gone and visitors forget the expected format.</p><p class=\"mb-4\">Attach a label element to the field id. A placeholder may be an example, not the field name.</p><p class=\"mb-4\">If the AI drops labels for a clean look, ask to restore them. A tidy layout does not replace readability.</p><p class=\"mb-4\">Check a narrow preview on editor.clincoo.buzz: every field should keep a visible name.</p><p class=\"mb-4\">Clincoo does not invent labels. One word above the input prevents errors when the form is sent.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["ux"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["ux"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
