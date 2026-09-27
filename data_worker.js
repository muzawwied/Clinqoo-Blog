// Clincoo Blog — Data kategori: worker
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["worker"] = {
  names: { "id": "Worker", "en": "Worker" },
  flag: "⚙️",
  articles: [
    {
      id: "worker-pisahkan-hitung-berat",
      langs: {
        "id": {
          title: "Pindahkan Hitung Berat Clincoo ke Web Worker",
          desc: "Loop panjang di thread utama membekukan pratinjau. Worker menjaga UI tetap bisa diklik.",
          content: "<p class=\"mb-4\">Skrip Clincoo mengurutkan 20.000 baris di onclick. Tombol dan scroll macet sampai selesai.</p><p class=\"mb-4\">Buat file worker.js. Di editor.clincoo.buzz panggil new Worker(url) lalu postMessage(data). Terima hasil di onmessage.</p><p class=\"mb-4\">Jangan sentuh DOM dari dalam worker. Kirim data mentah, render di thread utama.</p><p class=\"mb-4\">Uji dengan array besar di pratinjau. Input harus tetap bisa diketik saat worker berjalan.</p><p class=\"mb-4\">Clincoo menayangkan situs statis. Worker di skripmu menjaga app.clincoo.buzz tidak membeku.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Move Heavy Clincoo Computation into a Web Worker",
          desc: "A long loop on the main thread freezes the preview. A worker keeps the UI clickable.",
          content: "<p class=\"mb-4\">A Clincoo script sorts 20,000 rows in an onclick handler. Buttons and scroll freeze until it finishes.</p><p class=\"mb-4\">Create worker.js. In editor.clincoo.buzz call new Worker(url) then postMessage(data). Receive the result in onmessage.</p><p class=\"mb-4\">Do not touch the DOM from inside the worker. Send raw data and render on the main thread.</p><p class=\"mb-4\">Test with a large array in preview. Inputs must stay typable while the worker runs.</p><p class=\"mb-4\">Clincoo serves a static site. A worker in your script keeps app.clincoo.buzz from freezing.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "worker-kirim-pesan-bukan-dom",
      langs: {
        "id": {
          title: "Kirim Pesan ke Worker Clincoo, Jangan Akses DOM di Dalamnya",
          desc: "Worker tidak punya document. Menyentuh DOM di dalamnya melempar dan pekerjaan batal.",
          content: "<p class=\"mb-4\">Kode worker Clincoo memanggil document.getElementById. Konsol menulis ReferenceError dan hasil tidak pernah sampai.</p><p class=\"mb-4\">Batasi worker pada data: parse, sort, filter, hitung. postMessage hasil. Thread utama yang mengisi elemen.</p><p class=\"mb-4\">Salin HTML target ke objek biasa sebelum dikirim jika perlu teks, bukan node.</p><p class=\"mb-4\">Tempel error lengkap ke AI. Minta pindahkan querySelector keluar worker saja.</p><p class=\"mb-4\">Clincoo tidak menambal DOM di worker. Pemisahan ini menjaga editor.clincoo.buzz tetap jelas.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Send Messages to a Clincoo Worker; Do Not Touch the DOM Inside It",
          desc: "A worker has no document. Touching the DOM inside it throws and the job dies.",
          content: "<p class=\"mb-4\">A Clincoo worker calls document.getElementById. The console writes ReferenceError and the result never arrives.</p><p class=\"mb-4\">Limit the worker to data: parse, sort, filter, compute. postMessage the result. The main thread fills the elements.</p><p class=\"mb-4\">Copy target HTML into a plain object before sending if you need text, not a node.</p><p class=\"mb-4\">Paste the full error into the AI. Ask only to move querySelector out of the worker.</p><p class=\"mb-4\">Clincoo does not polyfill DOM in a worker. This split keeps editor.clincoo.buzz clear.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "worker-terminate-saat-pindah",
      langs: {
        "id": {
          title: "Terminate Worker Clincoo saat Pengunjung Pindah Halaman",
          desc: "Worker yang hidup setelah navigasi tetap memakai CPU di tab yang sudah tidak terlihat.",
          content: "<p class=\"mb-4\">Situs Clincoo membuka worker untuk resize gambar. Pengunjung klik menu lain, worker masih jalan di latar.</p><p class=\"mb-4\">Simpan referensi worker. Pada beforeunload atau saat ganti view, panggil worker.terminate() dan kosongkan antrian pesan.</p><p class=\"mb-4\">Jika memakai SPA di satu file, terminate sebelum merender halaman baru agar hasil lama tidak menimpa DOM baru.</p><p class=\"mb-4\">Cek tab Performance. Setelah pindah halaman, thread worker harus hilang.</p><p class=\"mb-4\">Clincoo tidak mematikan worker otomatis. terminate di skripmu menjaga tab app.clincoo.buzz hemat daya.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Terminate a Clincoo Worker When the Visitor Leaves the Page",
          desc: "A worker that lives after navigation still uses CPU on a tab that is no longer visible.",
          content: "<p class=\"mb-4\">A Clincoo site opens a worker to resize images. The visitor clicks another menu; the worker still runs in the background.</p><p class=\"mb-4\">Keep the worker reference. On beforeunload or when changing views, call worker.terminate() and clear the message queue.</p><p class=\"mb-4\">If you use an SPA in one file, terminate before rendering the new page so an old result does not overwrite the new DOM.</p><p class=\"mb-4\">Check the Performance tab. After leaving the page, the worker thread must be gone.</p><p class=\"mb-4\">Clincoo does not kill workers for you. terminate in your script keeps the app.clincoo.buzz tab lean.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
