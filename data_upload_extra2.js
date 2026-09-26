// Clincoo Blog — artikel upload tambahan 2026-09-27 WIB
(function(){
  var extra = [
    {
      id: "upload-strip-exif",
      langs: {
        "id": {
          title: "Hapus Data EXIF sebelum Unggah Foto Clincoo",
          desc: "Foto kamera membawa GPS dan perangkat. Buang metadata sebelum berkas meninggalkan peramban.",
          content: "<p class=\"mb-4\">Cover Clincoo yang diunggah dari HP sering menyimpan koordinat rumah di EXIF. Siapa pun yang unduh gambar bisa membacanya.</p><p class=\"mb-4\">Di editor.clincoo.buzz, gambar ulang foto lewat canvas atau createImageBitmap lalu toBlob. Metadata EXIF tidak ikut ke blob baru.</p><p class=\"mb-4\">Jangan andalkan rename file. EXIF tetap ada sampai piksel ditulis ulang. Beri opsi jaga metadata hanya jika klien memang memintanya.</p><p class=\"mb-4\">Minta AI menambah langkah canvas toBlob pada handler unggah gambar. Tempel kode yang sekarang mengirim file mentah.</p><p class=\"mb-4\">Clincoo tidak menghapus EXIF otomatis. Strip di klien menjaga privasi di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Strip EXIF Data before Uploading a Clincoo Photo",
          desc: "Camera photos carry GPS and device tags. Drop the metadata before the file leaves the browser.",
          content: "<p class=\"mb-4\">A Clincoo cover uploaded from a phone often stores home coordinates in EXIF. Anyone who downloads the image can read them.</p><p class=\"mb-4\">In editor.clincoo.buzz, redraw the photo with canvas or createImageBitmap then toBlob. EXIF metadata does not follow into the new blob.</p><p class=\"mb-4\">Do not rely on renaming the file. EXIF stays until pixels are rewritten. Keep metadata only when the client actually asks.</p><p class=\"mb-4\">Ask AI to add a canvas toBlob step on the image upload handler. Paste the code that now sends the raw file.</p><p class=\"mb-4\">Clincoo does not strip EXIF for you. Client-side strip keeps privacy on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "upload-daftar-antrian-sebelum-kirim",
      langs: {
        "id": {
          title: "Tampilkan Daftar Antrian File sebelum Tombol Kirim Clincoo",
          desc: "File yang sudah dipilih mudah terlupakan. Daftar nama dan ukuran memberi kesempatan hapus sebelum request.",
          content: "<p class=\"mb-4\">Form galeri Clincoo langsung mengunggah saat onchange. Pengguna baru sadar salah folder setelah sepuluh file terkirim.</p><p class=\"mb-4\">Di editor.clincoo.buzz, tampilkan daftar nama, ukuran, dan tombol hapus per item. Baru kirim saat tombol Unggah ditekan.</p><p class=\"mb-4\">Jangan kosongkan daftar diam-diam jika satu file gagal validasi. Tandai item yang ditolak agar bisa diganti.</p><p class=\"mb-4\">Minta AI menambah markup daftar dari FileList. Tempel input multiple yang sekarang langsung mengirim.</p><p class=\"mb-4\">Clincoo merender markup yang kamu simpan. Antrian terlihat menjaga unggahan terkendali di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Show a File Queue before the Clincoo Send Button",
          desc: "Selected files are easy to forget. A name and size list lets people remove items before the request.",
          content: "<p class=\"mb-4\">A Clincoo gallery form uploads on change. Users notice the wrong folder only after ten files have left.</p><p class=\"mb-4\">In editor.clincoo.buzz, render a list of names, sizes, and a remove button per item. Send only when Upload is clicked.</p><p class=\"mb-4\">Do not silently empty the list if one file fails validation. Mark the rejected item so it can be replaced.</p><p class=\"mb-4\">Ask AI to add list markup from the FileList. Paste the multiple input that now sends immediately.</p><p class=\"mb-4\">Clincoo renders the markup you save. A visible queue keeps uploads controlled on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "upload-kunci-submit-saat-proses",
      langs: {
        "id": {
          title: "Kunci Tombol Kirim selama Unggahan Clincoo Berjalan",
          desc: "Klik ganda pada Kirim menggandakan request. Nonaktifkan tombol sampai selesai atau batal.",
          content: "<p class=\"mb-4\">Pengunjung Clincoo menekan Kirim dua kali karena progres lambat. Server menerima dua salinan file yang sama.</p><p class=\"mb-4\">Di editor.clincoo.buzz, set disabled pada tombol saat fetch dimulai. Pulihkan saat selesai, gagal, atau abort.</p><p class=\"mb-4\">Jangan mengandalkan CSS pointer-events saja. Keyboard masih bisa mengaktifkan tombol yang terlihat mati.</p><p class=\"mb-4\">Minta AI menambah flag isUploading pada handler. Tempel tombol submit yang sekarang selalu aktif.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu simpan. Tombol terkunci mencegah unggahan ganda di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Lock the Submit Button while a Clincoo Upload Runs",
          desc: "A double click on Send duplicates the request. Disable the button until finish or cancel.",
          content: "<p class=\"mb-4\">Clincoo visitors click Send twice because progress is slow. The server receives two copies of the same file.</p><p class=\"mb-4\">In editor.clincoo.buzz, set disabled on the button when fetch starts. Restore it on success, failure, or abort.</p><p class=\"mb-4\">Do not rely on CSS pointer-events alone. The keyboard can still fire a button that only looks dead.</p><p class=\"mb-4\">Ask AI to add an isUploading flag on the handler. Paste the submit button that is always enabled.</p><p class=\"mb-4\">Clincoo runs the script you save. A locked button prevents duplicate uploads on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["upload"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["upload"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
