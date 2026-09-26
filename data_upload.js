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
    },
    {
      id: "upload-progress-unggah",
      langs: {
        "id": {
          title: "Tampilkan Progres Unggah di Form Clincoo",
          desc: "Tombol diam saat file besar terkirim terasa hang. Progress event memberi umpan balik yang bisa dipercaya.",
          content: "<p class=\"mb-4\">Form Clincoo mengunggah foto 6 MB tanpa indikator. Pengunjung menekan Kirim tiga kali karena tombol terlihat macet.</p><p class=\"mb-4\">Pakai XMLHttpRequest atau fetch plus ReadableStream dengan event progress di editor.clincoo.buzz. Perbarui teks persen dan atribut aria-valuenow pada progressbar.</p><p class=\"mb-4\">Jangan animasi palsu yang selalu 90 persen. Jika server tidak mengirim progress, tulis Mengunggah tanpa angka dusta.</p><p class=\"mb-4\">Minta AI hanya menambah listener progress dan label. Tempel handler FormData yang sekarang diam.</p><p class=\"mb-4\">Clincoo tidak menampilkan progres otomatis. Angka nyata menjaga unggahan tenang di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Show Upload Progress on a Clincoo Form",
          desc: "A silent button during a large file send feels hung. A progress event gives trustworthy feedback.",
          content: "<p class=\"mb-4\">A Clincoo form uploads a 6 MB photo with no indicator. Visitors click Submit three times because the button looks stuck.</p><p class=\"mb-4\">Use XMLHttpRequest or fetch plus a ReadableStream with a progress event in editor.clincoo.buzz. Update the percent text and aria-valuenow on the progressbar.</p><p class=\"mb-4\">Do not fake an animation that sits at 90 percent. If the server sends no progress, write Uploading without a fake number.</p><p class=\"mb-4\">Ask AI to add only the progress listener and label. Paste the FormData handler that is now silent.</p><p class=\"mb-4\">Clincoo does not show progress for you. A real number keeps uploads calm on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "upload-nama-file-aman",
      langs: {
        "id": {
          title: "Rapikan Nama File Unggah agar Aman di Clincoo",
          desc: "Nama file dari perangkat pengguna bisa berisi spasi, unicode, atau path. Normalisasi sebelum disimpan.",
          content: "<p class=\"mb-4\">Berkas Clincoo bernama ../../laporan akhir (1).PDF merusak path penyimpanan dan pecah di URL.</p><p class=\"mb-4\">Di editor.clincoo.buzz, ambil name, buang path, ganti spasi jadi strip, dan batasi karakter aman. Simpan nama asli terpisah jika perlu ditampilkan.</p><p class=\"mb-4\">Jangan percaya nama sebagai tipe. Tetap cek MIME. Jangan biarkan ekstensi ganda seperti file.jpg.exe.</p><p class=\"mb-4\">Minta AI menulis satu fungsi slug nama file. Tempel cuplikan yang memakai file.name mentah.</p><p class=\"mb-4\">Clincoo menyimpan nama yang kamu kirim. Nama bersih menjaga berkas aman di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Sanitize Upload File Names so They Stay Safe in Clincoo",
          desc: "A name from the user device can hold spaces, unicode, or a path. Normalize it before you store it.",
          content: "<p class=\"mb-4\">A Clincoo file named ../../final report (1).PDF breaks the storage path and splits in a URL.</p><p class=\"mb-4\">In editor.clincoo.buzz, take the name, drop the path, turn spaces into dashes, and keep a safe character set. Store the original name separately if you must display it.</p><p class=\"mb-4\">Do not trust the name as the type. Still check MIME. Do not allow a double extension like file.jpg.exe.</p><p class=\"mb-4\">Ask AI to write one filename slug helper. Paste the snippet that uses raw file.name.</p><p class=\"mb-4\">Clincoo stores the name you send. A clean name keeps files safe on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "upload-drag-drop-area",
      langs: {
        "id": {
          title: "Area Seret-Lepas File di Form Unggah Clincoo",
          desc: "Input file kecil sulit dipakai di desktop. Zona drop yang tetap punya input tersembunyi lebih ramah.",
          content: "<p class=\"mb-4\">Pengunjung desktop Clincoo mencari kotak drop, lalu gagal karena hanya ada tombol Pilih file sempit.</p><p class=\"mb-4\">Tambah zona drop di editor.clincoo.buzz. Tangani dragover preventDefault dan drop files. Tetap sediakan input file untuk keyboard dan ponsel.</p><p class=\"mb-4\">Jangan andalkan drop saja. Tanpa input cadangan, pengguna pembaca layar tidak bisa mengunggah.</p><p class=\"mb-4\">Minta AI menambah zona drop plus input tersembunyi. Tempel form unggah yang sekarang hanya punya satu input.</p><p class=\"mb-4\">Clincoo merender markup yang kamu simpan. Drop plus input menjaga unggahan bisa dipakai di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add a Drag-and-Drop Area on a Clincoo Upload Form",
          desc: "A tiny file input is hard on desktop. A drop zone that still has a hidden input is kinder.",
          content: "<p class=\"mb-4\">Clincoo desktop visitors hunt for a drop box, then fail because only a narrow Choose file button exists.</p><p class=\"mb-4\">Add a drop zone in editor.clincoo.buzz. Handle dragover preventDefault and drop files. Keep a file input for keyboard and phone users.</p><p class=\"mb-4\">Do not rely on drop alone. Without a fallback input, screen-reader users cannot upload.</p><p class=\"mb-4\">Ask AI to add a drop zone plus a hidden input. Paste the upload form that now has only one input.</p><p class=\"mb-4\">Clincoo renders the markup you save. Drop plus input keeps uploads usable on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "upload-batasi-jumlah-file",
      langs: {
        "id": {
          title: "Batasi Jumlah File per Unggah di Form Clincoo",
          desc: "Input multiple tanpa batas membuat antrean unggah meledak. Tetapkan kuota file di klien sebelum request dikirim.",
          content: "<p class=\"mb-4\">Form galeri Clincoo memakai multiple tanpa batas. Seseorang menjatuhkan 200 foto dan tab membeku.</p><p class=\"mb-4\">Cek files.length di editor.clincoo.buzz sebelum FormData. Tolak dengan pesan yang menyebut kuota, misalnya maksimal 10 berkas.</p><p class=\"mb-4\">Jangan diam-diam memotong daftar. Pengguna harus tahu foto mana yang tidak ikut.</p><p class=\"mb-4\">Minta AI hanya menambah cek jumlah. Tempel input multiple yang sekarang terbuka.</p><p class=\"mb-4\">Clincoo tidak membatasi jumlah otomatis. Kuota di klien menjaga antrean sehat di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Limit How Many Files One Clincoo Upload Accepts",
          desc: "An unbounded multiple input explodes the upload queue. Set a file quota on the client before the request is sent.",
          content: "<p class=\"mb-4\">A Clincoo gallery form uses unbounded multiple. Someone drops 200 photos and the tab freezes.</p><p class=\"mb-4\">Check files.length in editor.clincoo.buzz before FormData. Reject with a message that names the quota, for example 10 files max.</p><p class=\"mb-4\">Do not silently trim the list. People must know which photos were left out.</p><p class=\"mb-4\">Ask AI to add only the count check. Paste the multiple input that is now open.</p><p class=\"mb-4\">Clincoo does not cap the count for you. A client quota keeps the queue healthy on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "upload-cabut-object-url",
      langs: {
        "id": {
          title: "Cabut Object URL setelah Pratinjau Unggah Clincoo",
          desc: "URL.createObjectURL menahan blob di memori. Cabut URL lama saat file diganti agar tab tidak membengkak.",
          content: "<p class=\"mb-4\">Pratinjau cover Clincoo membuat object URL baru setiap ganti file. Tab makin berat setelah sepuluh percobaan.</p><p class=\"mb-4\">Simpan URL terakhir. Saat file baru dipilih, panggil URL.revokeObjectURL pada URL lama di editor.clincoo.buzz, lalu buat yang baru.</p><p class=\"mb-4\">Cabut juga saat form direset atau komponen dilepas. Jangan biarkan blob menggantung sampai tutup tab.</p><p class=\"mb-4\">Minta AI menambah revoke di handler ganti file. Tempel kode createObjectURL yang sekarang tanpa cabut.</p><p class=\"mb-4\">Clincoo tidak membersihkan object URL sendiri. Cabut yang rapi menjaga memori di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Revoke Object URLs after a Clincoo Upload Preview",
          desc: "URL.createObjectURL holds the blob in memory. Revoke the old URL when the file changes so the tab does not bloat.",
          content: "<p class=\"mb-4\">A Clincoo cover preview creates a new object URL on every file change. The tab gets heavier after ten tries.</p><p class=\"mb-4\">Keep the last URL. When a new file is chosen, call URL.revokeObjectURL on the old one in editor.clincoo.buzz, then create a new URL.</p><p class=\"mb-4\">Also revoke on form reset or when the component unmounts. Do not leave blobs hanging until the tab closes.</p><p class=\"mb-4\">Ask AI to add revoke in the change handler. Paste the createObjectURL code that never revokes.</p><p class=\"mb-4\">Clincoo does not clean object URLs for you. A tidy revoke keeps memory steady on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
