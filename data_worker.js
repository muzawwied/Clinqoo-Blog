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
    },
    {
      id: "worker-onerror-tangkap-gagal",
      langs: {
        "id": {
          title: "Tangkap Error Worker Clincoo lewat onerror, Jangan Diam",
          desc: "Worker yang melempar tanpa handler terlihat seperti hung. UI menunggu hasil yang tidak pernah datang.",
          content: "<p class=\"mb-4\">Skrip Clincoo mengirim JSON rusak ke worker. Worker melempar, thread utama tetap spinner.</p><p class=\"mb-4\">Pasang worker.onerror dan worker.onmessageerror. Tampilkan pesan di pratinjau, matikan spinner, log filename dan lineno.</p><p class=\"mb-4\">Di dalam worker bungkus pekerjaan berat dengan try/catch lalu postMessage({ error: String(e) }).</p><p class=\"mb-4\">Tempel stack ke AI di editor.clincoo.buzz. Minta handler onerror saja, bukan rewrite seluruh worker.</p><p class=\"mb-4\">Clincoo tidak menampilkan error worker otomatis. Handler di skripmu menjaga app.clincoo.buzz tidak menggantung.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Catch Clincoo Worker Errors with onerror; Do Not Stay Silent",
          desc: "A worker that throws without a handler looks hung. The UI waits for a result that never arrives.",
          content: "<p class=\"mb-4\">A Clincoo script sends broken JSON to a worker. The worker throws; the main thread keeps the spinner.</p><p class=\"mb-4\">Attach worker.onerror and worker.onmessageerror. Show a message in preview, stop the spinner, log filename and lineno.</p><p class=\"mb-4\">Inside the worker wrap heavy work in try/catch then postMessage({ error: String(e) }).</p><p class=\"mb-4\">Paste the stack into the AI in editor.clincoo.buzz. Ask only for an onerror handler, not a full worker rewrite.</p><p class=\"mb-4\">Clincoo does not surface worker errors for you. A handler in your script keeps app.clincoo.buzz from hanging.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "worker-transferable-arraybuffer",
      langs: {
        "id": {
          title: "Kirim ArrayBuffer ke Worker Clincoo sebagai Transferable",
          desc: "Menyalin buffer besar lewat structured clone menggandakan memori. Transfer memindahkan kepemilikan.",
          content: "<p class=\"mb-4\">Situs Clincoo mengirim canvas ImageData ke worker. Salinan membuat tab membengkak dan lambat.</p><p class=\"mb-4\">Pakai postMessage(buffer, [buffer]). Setelah transfer, buffer di thread pengirim menjadi detached. Jangan baca lagi.</p><p class=\"mb-4\">Uji dengan file gambar besar di pratinjau. Task Manager tidak boleh naik dua kali lipat.</p><p class=\"mb-4\">Jika masih perlu data di kedua sisi, salin dulu slice kecil, transfer sisanya.</p><p class=\"mb-4\">Clincoo menayangkan aset statis. Transferable di skripmu menjaga editor.clincoo.buzz hemat RAM.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Send an ArrayBuffer to a Clincoo Worker as Transferable",
          desc: "Copying a large buffer with structured clone doubles memory. Transfer moves ownership.",
          content: "<p class=\"mb-4\">A Clincoo site sends canvas ImageData to a worker. The copy bloats the tab and slows it down.</p><p class=\"mb-4\">Use postMessage(buffer, [buffer]). After transfer the sender buffer is detached. Do not read it again.</p><p class=\"mb-4\">Test with a large image in preview. Task Manager must not jump by 2x.</p><p class=\"mb-4\">If both sides still need data, copy a small slice first and transfer the rest.</p><p class=\"mb-4\">Clincoo serves static assets. Transferables in your script keep editor.clincoo.buzz lean on RAM.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "worker-blob-url-tanpa-file-terpisah",
      langs: {
        "id": {
          title: "Buat Worker Clincoo dari Blob URL jika Tanpa File Terpisah",
          desc: "Hosting statis kadang menolak worker lintas folder. Blob URL menanam skrip di halaman yang sama.",
          content: "<p class=\"mb-4\">new Worker('worker.js') di proyek Clincoo gagal karena path relatif salah setelah deploy.</p><p class=\"mb-4\">Bungkus kode worker dalam Blob type text/javascript. Buat URL.createObjectURL lalu new Worker(url). revokeObjectURL setelah load.</p><p class=\"mb-4\">Jangan taruh importScripts ke origin lain tanpa CORS. Tetap satu folder di editor.clincoo.buzz jika bisa.</p><p class=\"mb-4\">Uji di pratinjau dan setelah publish ke app.clincoo.buzz. Konsol tidak boleh NetworkError.</p><p class=\"mb-4\">Clincoo tidak menulis worker untukmu. Blob URL adalah cadangan saat file terpisah pecah.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Build a Clincoo Worker from a Blob URL When You Have No Separate File",
          desc: "Static hosting sometimes rejects a worker across folders. A blob URL embeds the script on the same page.",
          content: "<p class=\"mb-4\">new Worker('worker.js') in a Clincoo project fails because the relative path breaks after deploy.</p><p class=\"mb-4\">Wrap the worker code in a Blob with type text/javascript. Create URL.createObjectURL then new Worker(url). revokeObjectURL after load.</p><p class=\"mb-4\">Do not importScripts from another origin without CORS. Keep one folder in editor.clincoo.buzz when you can.</p><p class=\"mb-4\">Test in preview and after publish to app.clincoo.buzz. The console must not show NetworkError.</p><p class=\"mb-4\">Clincoo does not write the worker for you. A blob URL is the fallback when a separate file breaks.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "worker-progress-postmessage-persen",
      langs: {
        "id": {
          title: "Kirim Progress Persen dari Worker Clincoo lewat postMessage",
          desc: "Pekerjaan lama tanpa umpan balik terlihat macet. Progress membuat pratinjau terasa hidup.",
          content: "<p class=\"mb-4\">Worker Clincoo memproses 5.000 baris. Pengunjung mengira tab freeze karena tidak ada angka.</p><p class=\"mb-4\">Setiap N item, postMessage({ type: 'progress', pct }). Thread utama mengisi meter atau teks persen.</p><p class=\"mb-4\">Jangan kirim progress tiap item. Batasi ke 10–20 update agar messaging tidak lebih berat dari kerja.</p><p class=\"mb-4\">Uji di pratinjau editor.clincoo.buzz. Angka harus naik, input tetap bisa diketik.</p><p class=\"mb-4\">Clincoo tidak punya progress bawaan untuk worker. Pesan berkala di skripmu menjaga app.clincoo.buzz terasa responsif.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Send Percent Progress from a Clincoo Worker with postMessage",
          desc: "A long job with no feedback looks frozen. Progress makes the preview feel alive.",
          content: "<p class=\"mb-4\">A Clincoo worker processes 5,000 rows. Visitors think the tab froze because there is no number.</p><p class=\"mb-4\">Every N items, postMessage({ type: 'progress', pct }). The main thread fills a meter or percent text.</p><p class=\"mb-4\">Do not send progress on every item. Cap at 10–20 updates so messaging is not heavier than the work.</p><p class=\"mb-4\">Test in the editor.clincoo.buzz preview. The number must climb; inputs must stay typable.</p><p class=\"mb-4\">Clincoo has no built-in worker progress. Periodic messages in your script keep app.clincoo.buzz feeling responsive.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "worker-type-module-import",
      langs: {
        "id": {
          title: "Pakai type module pada Worker Clincoo agar import Berjalan",
          desc: "import di worker klasik gagal. type: 'module' menyelaraskan dengan skrip ES di editor.",
          content: "<p class=\"mb-4\">Worker Clincoo memakai import { sort } from './lib.js' lalu konsol menulis SyntaxError.</p><p class=\"mb-4\">Buat new Worker(url, { type: 'module' }). File worker memakai import/export seperti skrip halaman.</p><p class=\"mb-4\">Path import relatif ke file worker, bukan ke HTML. Cek di Network tab setelah publish.</p><p class=\"mb-4\">Jika hosting lama menolak module worker, bundel satu file tanpa import.</p><p class=\"mb-4\">Clincoo adalah situs statis. type module di skripmu menjaga editor.clincoo.buzz konsisten dengan ES modules.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use type module on a Clincoo Worker so import Works",
          desc: "import in a classic worker fails. type: 'module' matches the ES scripts in the editor.",
          content: "<p class=\"mb-4\">A Clincoo worker uses import { sort } from './lib.js' and the console writes SyntaxError.</p><p class=\"mb-4\">Create new Worker(url, { type: 'module' }). The worker file uses import/export like the page script.</p><p class=\"mb-4\">Import paths are relative to the worker file, not the HTML. Check the Network tab after publish.</p><p class=\"mb-4\">If old hosting rejects module workers, bundle one file with no import.</p><p class=\"mb-4\">Clincoo is a static site. type module in your script keeps editor.clincoo.buzz consistent with ES modules.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
