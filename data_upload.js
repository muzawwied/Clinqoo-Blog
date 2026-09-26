// Clincoo Blog — Data kategori: upload
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["upload"] = {
  names: { "id": "Unggah", "en": "Upload" },
  flag: "\u2b06",
  articles: [
    {
      id: "upload-validasi-tipe-ukuran",
      langs: {
        "id": {
          title: "Validasi Tipe dan Ukuran File sebelum Unggah di Clincoo",
          desc: "Menerima sembarang berkas membuat server sibuk dan pratinjau rusak. Cek MIME dan ukuran di klien dulu.",
          content: "<p class=\"mb-4\">Form unggah Clincoo mengirim file 80 MB berformat .exe karena input tidak membatasi accept. Pratinjau macet dan antrean penuh.</p><p class=\"mb-4\">Set atribut accept dan cek file.type plus file.size di editor.clincoo.buzz sebelum FormData. Tolak dengan pesan yang menyebut batas nyata.</p><p class=\"mb-4\">Jangan andalkan ekstensi saja. Ganti nama file tidak mengubah isinya; tetap cek tipe di server saat deploy ke app.clincoo.buzz.</p><p class=\"mb-4\">Minta AI hanya menambah pemeriksaan ukuran dan tipe. Tempel markup input file yang sekarang terbuka.</p><p class=\"mb-4\">Clincoo tidak memfilter berkas otomatis. Validasi awal menjaga unggahan aman dan cepat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Validate File Type and Size before Upload in Clincoo",
          desc: "Accepting any file stalls the server and breaks preview. Check MIME type and size on the client first.",
          content: "<p class=\"mb-4\">A Clincoo upload form sends an 80 MB .exe because the input has no accept limit. Preview freezes and the queue fills up.</p><p class=\"mb-4\">Set the accept attribute and check file.type plus file.size in editor.clincoo.buzz before FormData. Reject with a message that states the real limit.</p><p class=\"mb-4\">Do not trust the extension alone. Renaming a file does not change its contents; still check type on the server when you deploy to app.clincoo.buzz.</p><p class=\"mb-4\">Ask AI to add only size and type checks. Paste the currently open file input markup.</p><p class=\"mb-4\">Clincoo does not filter files for you. Early validation keeps uploads safe and fast.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "upload-pratinjau-gambar-lokal",
      langs: {
        "id": {
          title: "Tampilkan Pratinjau Gambar Lokal sebelum Unggah Clincoo",
          desc: "Pengguna baru tahu salah file setelah menunggu unggahan. Object URL memberi pratinjau instan.",
          content: "<p class=\"mb-4\">Form cover Clincoo mengunggah dulu baru menampilkan hasil. Foto terbalik baru ketahuan setelah 20 detik.</p><p class=\"mb-4\">Pakai URL.createObjectURL pada file gambar di editor.clincoo.buzz. Tampilkan img pratinjau dan cabut URL setelah tidak dipakai.</p><p class=\"mb-4\">Jangan unggah otomatis saat onchange jika pengguna masih memilih ulang. Beri tombol kirim terpisah.</p><p class=\"mb-4\">Minta AI hanya menambah pratinjau object URL. Tempel input file plus wadah img kosong.</p><p class=\"mb-4\">Clincoo merender markup yang kamu tempel. Pratinjau lokal menghemat waktu di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Show a Local Image Preview before a Clincoo Upload",
          desc: "People only learn they picked the wrong file after waiting. An object URL gives an instant preview.",
          content: "<p class=\"mb-4\">A Clincoo cover form uploads first, then shows the result. An upside-down photo is noticed only after 20 seconds.</p><p class=\"mb-4\">Use URL.createObjectURL on the image file in editor.clincoo.buzz. Show a preview img and revoke the URL when you are done.</p><p class=\"mb-4\">Do not auto-upload on change if the user may pick again. Keep a separate submit button.</p><p class=\"mb-4\">Ask AI to add only the object URL preview. Paste the file input plus an empty img holder.</p><p class=\"mb-4\">Clincoo renders the markup you paste. A local preview saves time on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "upload-pesan-gagal-jelas",
      langs: {
        "id": {
          title: "Tulis Pesan Gagal Unggah yang Jelas di Clincoo",
          desc: "Error merah tanpa alasan membuat pengguna mengulang buta. Sebut batas, tipe, atau jaringan.",
          content: "<p class=\"mb-4\">Unggahan Clincoo gagal hanya dengan teks Error. Pengunjung mengirim file yang sama tiga kali.</p><p class=\"mb-4\">Bedakan pesan: terlalu besar, tipe ditolak, jaringan putus, atau server sibuk di editor.clincoo.buzz. Sertakan angka batas jika relevan.</p><p class=\"mb-4\">Jangan kosongkan input setelah gagal jika file masih valid. Biarkan pengguna coba ulang tanpa memilih ulang.</p><p class=\"mb-4\">Minta AI hanya merapikan cabang error. Tempel handler unggah yang sekarang melempar Error generik.</p><p class=\"mb-4\">Clincoo tidak menulis salinan error untukmu. Pesan spesifik menjaga unggahan tenang di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Write a Clear Upload Failure Message in Clincoo",
          desc: "A red Error with no reason makes people retry blindly. Name the limit, type, or network issue.",
          content: "<p class=\"mb-4\">A Clincoo upload fails with only the word Error. Visitors send the same file three times.</p><p class=\"mb-4\">Split the copy: too large, type rejected, network dropped, or server busy in editor.clincoo.buzz. Include the numeric limit when it matters.</p><p class=\"mb-4\">Do not clear the input after a failure if the file is still valid. Let people retry without picking again.</p><p class=\"mb-4\">Ask AI to tidy only the error branches. Paste the upload handler that now throws a generic Error.</p><p class=\"mb-4\">Clincoo does not write error copy for you. Specific messages keep uploads calm on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
