// Clincoo Docs — artikel tambahan MCP (6 Oktober 2026, 10:00 WIB — tambah 3 artikel)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.mcp) return;
  var list = window.countryDataFiles.mcp.articles;
  var extra = [
{
 "id": "mcp-baca-skema-tool-sebelum-dipanggil",
 "langs": {
  "id": {
   "title": "Cara Baca Skema Tool MCP Sebelum Dipanggil",
   "desc": "Tata cara membaca nama, argumen wajib, dan efek tool MCP Clincoo sebelum asisten menjalankannya.",
   "content": "<p class=\"mb-4\">Memanggil tool MCP tanpa membaca skema sering mengirim argumen yang salah atau menyentuh proyek yang bukan target.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca nama dan argumen wajib</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka daftar tool, catat nama persis, field wajib, dan tipe nilainya. Jangan menebak nama field dari ingatan obrolan sebelumnya. Kalau skema menandai sebuah field opsional, jangan isi dengan token atau URL rahasia.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cocokkan efek sebelum lanjut</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tulis satu kalimat efek yang diharapkan, misalnya hanya membaca status. Bandingkan dengan deskripsi tool di catatan <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Jika efeknya menulis file atau mengirim permintaan, hentikan dan batasi izin dulu.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Tools expose a name, description, and input schema; clients should present that schema before invocation.",
   "source2": "Clincoo Docs — server MCP",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Read an MCP Tool Schema Before Calling It",
   "desc": "How to read a Clincoo MCP tool name, required arguments, and effect before an assistant runs it.",
   "content": "<p class=\"mb-4\">Calling an MCP tool without reading its schema often sends the wrong arguments or touches the wrong project.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read the name and required arguments</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open the tool list and note the exact name, required fields, and value types. Do not guess a field name from an earlier chat. If the schema marks a field optional, do not fill it with a token or secret URL.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match the effect before continuing</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> write one sentence for the expected effect, such as read-only status. Compare it with the tool description in the note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. If the effect writes a file or sends a request, stop and limit permission first.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Tools expose a name, description, and input schema; clients should present that schema before invocation.",
   "source2": "Clincoo Docs — MCP server",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "mcp-catat-error-tool-tanpa-rahasia",
 "langs": {
  "id": {
   "title": "Cara Catat Error Tool MCP Tanpa Membocorkan Rahasia",
   "desc": "Tata cara menyalin pesan gagal tool MCP Clincoo tanpa menempel token, kunci, atau isi file sensitif.",
   "content": "<p class=\"mb-4\">Pesan gagal tool MCP berguna untuk perbaikan, tetapi sering ikut membawa header otorisasi atau potongan berkas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan kode dan nama tool</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> catat nama tool, kode status, dan satu kalimat gejala. Hapus nilai yang mirip token, cookie, atau URL dengan query rahasia sebelum menempel ke catatan. Jangan tempel seluruh respons jika isinya berisi konfigurasi akun.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ulangi dengan data palsu</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ulangi langkah dengan nilai contoh, bukan kunci produksi. Bandingkan gejala dengan catatan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Jika error hilang setelah rahasia dihapus dari argumen, masalahnya ada di input, bukan di server.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Tool results and errors are returned to the client; callers should avoid logging credentials from those payloads.",
   "source2": "Clincoo Docs — server MCP",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Log an MCP Tool Error Without Leaking Secrets",
   "desc": "How to copy a failed Clincoo MCP tool message without pasting tokens, keys, or sensitive file contents.",
   "content": "<p class=\"mb-4\">An MCP tool failure is useful for a fix, but it often includes an authorization header or a slice of a file.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep the code and tool name</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> note the tool name, status code, and one sentence of the symptom. Remove values that look like tokens, cookies, or URLs with secret query strings before pasting them into a note. Do not paste the full response if it contains account configuration.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Retry with fake data</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> repeat the step with sample values, not a production key. Compare the symptom with the note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. If the error disappears after the secret is removed from the arguments, the problem is the input, not the server.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Tool results and errors are returned to the client; callers should avoid logging credentials from those payloads.",
   "source2": "Clincoo Docs — MCP server",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "mcp-batasi-sesi-ke-satu-proyek",
 "langs": {
  "id": {
   "title": "Cara Batasi Sesi MCP ke Satu Proyek",
   "desc": "Tata cara mengunci sesi MCP Clincoo ke satu proyek agar tool tidak menulis ke folder lain.",
   "content": "<p class=\"mb-4\">Sesi MCP yang boleh melihat semua proyek mudah keliru menulis file di tempat yang sedang tidak dibuka.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sebut proyek dan folder</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis nama proyek dan path folder yang boleh diubah di awal obrolan. Tolak permintaan yang menambah proyek kedua di sesi yang sama. Jika perlu pindah proyek, tutup sesi lalu mulai ulang dengan batas baru.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek hasil di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka pratinjau proyek itu saja setelah tool selesai. Bandingkan file yang berubah dengan catatan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Jika ada path di luar folder, kembalikan perubahan sebelum lanjut.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "MCP sessions are scoped by the client; the user decides which resources and tools a session may use.",
   "source2": "Clincoo Docs — server MCP",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Limit an MCP Session to One Project",
   "desc": "How to lock a Clincoo MCP session to one project so tools do not write into another folder.",
   "content": "<p class=\"mb-4\">An MCP session that can see every project can easily write a file in a folder you do not have open.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Name the project and folder</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write the project name and the folder path that may change at the start of the chat. Reject a request that adds a second project in the same session. If you need to switch projects, close the session and start again with a new limit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the result in preview</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open only that project's preview after the tool finishes. Compare changed files with the note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. If a path is outside the folder, revert the change before continuing.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "MCP sessions are scoped by the client; the user decides which resources and tools a session may use.",
   "source2": "Clincoo Docs — MCP server",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "mcp-hentikan-panggilan-tool-yang-menggantung",
 "langs": {
  "id": {
   "title": "Cara Hentikan Panggilan Tool MCP yang Menggantung",
   "desc": "Tata cara menghentikan tool MCP Clincoo yang tidak kembali, lalu mengulang dengan batas waktu yang jelas.",
   "content": "<p class=\"mb-4\">Tool MCP yang diam terlalu lama bisa menahan sesi dan membuat langkah berikutnya menimpa pekerjaan yang belum selesai.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tandai batas waktu</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> catat jam mulai dan batas yang Anda beri, misalnya satu menit untuk pembacaan status. Jika lewat batas tanpa hasil, hentikan panggilan dan jangan kirim tool yang sama berulang dalam satu napas. Simpan nama tool dan argumen non-rahasia.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ulangi satu langkah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> segarkan pratinjau, pastikan tidak ada perubahan separuh, lalu panggil lagi hanya tool itu. Cocokkan dengan catatan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Kalau masih menggantung, cek URL dasar server sebelum menambah tool lain.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "A tool call is a request that should return a result or an error; the client can cancel a call that does not complete.",
   "source2": "Clincoo Docs — server MCP",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Stop a Hung MCP Tool Call",
   "desc": "How to stop a Clincoo MCP tool that never returns, then retry it with a clear time limit.",
   "content": "<p class=\"mb-4\">An MCP tool that stays silent can hold the session and let a later step overwrite work that never finished.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Mark a time limit</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> note the start time and the limit you set, such as one minute for a status read. If the limit passes with no result, stop the call and do not send the same tool again in one burst. Keep the tool name and the non-secret arguments.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Retry one step</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> refresh the preview, confirm there is no half-written change, then call only that tool again. Match it with the note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. If it still hangs, check the server base URL before adding another tool.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "A tool call is a request that should return a result or an error; the client can cancel a call that does not complete.",
   "source2": "Clincoo Docs — MCP server",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "mcp-cek-versi-url-server-setelah-pembaruan",
 "langs": {
  "id": {
   "title": "Cara Cek Versi URL Server MCP Setelah Pembaruan",
   "desc": "Tata cara mencocokkan URL dasar server MCP Clincoo setelah pembaruan agar tool tidak memanggil endpoint lama.",
   "content": "<p class=\"mb-4\">Setelah pembaruan, tool MCP bisa gagal karena klien masih memakai URL dasar atau jalur versi yang lama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan URL yang tersimpan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> salin URL dasar yang terpasang, lalu bandingkan dengan catatan resmi di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Jangan mencampur host lama dengan path baru. Hapus garis miring ganda dan spasi tersembunyi sebelum menyimpan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji tool baca saja</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> panggil satu tool yang hanya membaca status. Jika respons menyebut versi atau nama server yang beda dari catatan, berhenti dan perbaiki URL sebelum tool tulis dijalankan.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Clients connect to an MCP server endpoint; after a server change, the configured URL should be checked before tools are called.",
   "source2": "Clincoo Docs — server MCP",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Check the MCP Server URL After an Update",
   "desc": "How to match the Clincoo MCP server base URL after an update so tools do not call an old endpoint.",
   "content": "<p class=\"mb-4\">After an update, an MCP tool can fail because the client still uses an old base URL or version path.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare the saved URL</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> copy the installed base URL, then compare it with the official note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Do not mix an old host with a new path. Remove a double slash and hidden spaces before saving.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test a read-only tool</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> call one tool that only reads status. If the response names a version or server that differs from the note, stop and fix the URL before any write tool runs.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Clients connect to an MCP server endpoint; after a server change, the configured URL should be checked before tools are called.",
   "source2": "Clincoo Docs — MCP server",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "mcp-pisahkan-tool-baca-dan-tulis",
 "langs": {
  "id": {
   "title": "Cara Pisahkan Tool MCP Baca dan Tool yang Menulis",
   "desc": "Tata cara memisahkan tool MCP Clincoo yang hanya membaca dari tool yang mengubah berkas sebelum asisten dijalankan.",
   "content": "<p class=\\\"mb-4\\\">Satu daftar tool yang mencampur baca dan tulis membuat asisten mudah menyentuh berkas yang tidak diminta. Pisahkan dulu di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a>.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Dua daftar, dua izin</h2><p class=\\\"mb-4\\\">Buat daftar baca (status, pohon berkas, cuplikan) dan daftar tulis (simpan, commit, hapus). Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> jalankan hanya daftar baca pada sesi debug. Tool tulis baru dibuka setelah cuplikan dan path sudah dicek.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Cek efek di pratinjau</h2><p class=\\\"mb-4\\\">Setelah tool baca selesai, bandingkan hasil dengan halaman di pratinjau. Catat nama tool yang lolos di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>. Jika sebuah tool menulis tanpa konfirmasi, keluarkan dari sesi itu.</p>",
   "source": "Model Context Protocol — tools",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18/server/tools",
   "sourceSnippet": "Tools are listed with a name, description, and input schema so a client can decide whether to invoke them.",
   "source2": "Clincoo Docs — server MCP",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Separate Read-Only MCP Tools from Tools That Write",
   "desc": "How to split Clincoo MCP tools that only read from tools that change files before an assistant runs.",
   "content": "<p class=\\\"mb-4\\\">A single tool list that mixes reads and writes makes it easy for an assistant to touch files you did not ask for. Split them first in <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a>.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Two lists, two permissions</h2><p class=\\\"mb-4\\\">Make a read list (status, file tree, snippets) and a write list (save, commit, delete). In <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> run only the read list during a debug session. Open write tools after the snippet and path are checked.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Check the effect in preview</h2><p class=\\\"mb-4\\\">After a read tool finishes, compare the result with the preview page. Note the tool names that passed on <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>. If a tool writes without confirmation, remove it from that session.</p>",
   "source": "Model Context Protocol — tools",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18/server/tools",
   "sourceSnippet": "Tools are listed with a name, description, and input schema so a client can decide whether to invoke them.",
   "source2": "Clincoo Docs — server MCP",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "mcp-tolak-tool-tanpa-deskripsi",
 "langs": {
  "id": {
   "title": "Cara Tolak Tool MCP yang Tidak Punya Deskripsi",
   "desc": "Tata cara menolak tool MCP Clincoo yang tidak menjelaskan efeknya sebelum dipanggil.",
   "content": "<p class=\\\"mb-4\\\">Tool tanpa deskripsi memaksa tebakan. Di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> baca nama dan deskripsi sebelum mengizinkan panggilan.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Syarat minimum sebelum izin</h2><p class=\\\"mb-4\\\">Deskripsi harus menyebut apakah tool membaca, menulis, atau mengirim permintaan. Argumen wajib harus terlihat di skema. Jika salah satu kosong, jangan centang tool itu untuk sesi ini.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Uji dengan satu panggilan</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> izinkan satu tool yang deskripsinya jelas, lalu bandingkan hasil dengan catatan di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>. Jangan mengaktifkan sisa daftar hanya karena nama tool terdengar mirip.</p>",
   "source": "Model Context Protocol — tools",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18/server/tools",
   "sourceSnippet": "Each tool should expose a description so the client and user can understand the intended effect.",
   "source2": "MDN — using the console",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Reject an MCP Tool That Has No Description",
   "desc": "How to refuse a Clincoo MCP tool that does not explain its effect before it is called.",
   "content": "<p class=\\\"mb-4\\\">A tool with no description forces a guess. In <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> read the name and description before you allow a call.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Minimum bar before permission</h2><p class=\\\"mb-4\\\">The description must say whether the tool reads, writes, or sends a request. Required arguments must show in the schema. If either is empty, do not enable that tool for this session.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Test with one call</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> allow one tool whose description is clear, then compare the result with notes on <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>. Do not enable the rest of the list just because a tool name sounds similar.</p>",
   "source": "Model Context Protocol — tools",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18/server/tools",
   "sourceSnippet": "Each tool should expose a description so the client and user can understand the intended effect.",
   "source2": "MDN — using the console",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "mcp-simpan-contoh-argumen-aman",
 "langs": {
  "id": {
   "title": "Cara Simpan Contoh Argumen MCP yang Aman",
   "desc": "Tata cara menyimpan contoh argumen MCP Clincoo tanpa token, cookie, atau URL rahasia.",
   "content": "<p class=\\\"mb-4\\\">Contoh argumen yang berisi rahasia sering tertempel ulang di obrolan berikutnya. Simpan versi aman di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a>.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Ganti rahasia dengan penanda</h2><p class=\\\"mb-4\\\">Salin skema, lalu ganti token, cookie, dan kunci dengan teks seperti CONTOH_TOKEN. Path proyek boleh tetap, asalkan bukan path mesin lokal yang berisi nama akun.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Tempel contoh, bukan riwayat</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> tempel contoh aman saat minta bantuan, bukan cuplikan log mentah. Simpan contoh yang lolos di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a> supaya sesi baru tidak mengulang tebakan field.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Tool input is defined by a schema; clients should not send values the user did not intend to share.",
   "source2": "Clincoo App",
   "source2Url": "https://app.clincoo.buzz/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Save a Safe MCP Argument Example",
   "desc": "How to store a Clincoo MCP argument example without tokens, cookies, or secret URLs.",
   "content": "<p class=\\\"mb-4\\\">Argument examples that contain secrets get pasted again in the next chat. Keep a safe version in <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a>.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Replace secrets with markers</h2><p class=\\\"mb-4\\\">Copy the schema, then replace tokens, cookies, and keys with text such as SAMPLE_TOKEN. A project path can stay if it is not a local machine path that includes an account name.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Paste the example, not the history</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> paste the safe example when you ask for help, not a raw log snippet. Save examples that worked on <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a> so a new session does not guess field names again.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Tool input is defined by a schema; clients should not send values the user did not intend to share.",
   "source2": "Clincoo App",
   "source2Url": "https://app.clincoo.buzz/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
];
  extra.forEach(function (item) {
    if (!list.some(function (a) { return a.id === item.id; })) list.push(item);
  });
})();
