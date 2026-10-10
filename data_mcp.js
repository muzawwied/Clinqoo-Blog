// Clincoo Docs — kategori MCP (10 Oktober 2026, 15:00 WIB — tambah 1 artikel)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["mcp"] = {
 "names": { "id": "MCP", "en": "MCP" },
 "articles": [
{
 "id": "mcp-batas-izin-tool-sebelum-dijalankan",
 "langs": {
  "id":   {
   "title": "Cara Batasi Izin Tool MCP Sebelum Dijalankan",
   "desc": "Tata cara menetapkan tool MCP Clincoo yang boleh dibaca atau diubah sebelum asisten menjalankannya.",
   "content": "<p class=\"mb-4\">Tool MCP yang boleh menulis file atau mengirim permintaan harus dibatasi sebelum obrolan, bukan setelah ada perubahan yang tidak diinginkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tetapkan izin minimum</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> catat tool yang boleh dibaca saja, misalnya status akun, dan tool yang boleh mengubah proyek. Jangan tempel token ke prompt. Kalau asisten butuh cek koneksi, minta get-me atau setara, bukan daftar rahasia.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji satu tool lalu hentikan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jalankan satu tool, baca hasilnya, baru lanjut. Jika tool meminta ulang konfigurasi, cek URL dasar di catatan <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Tolak saran yang memperluas izin hanya karena langkah sebelumnya gagal.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "MCP tools are invoked by the client; the user should control which tools a session may call.",
   "source2": "Clincoo Docs — server MCP",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Limit MCP Tool Permission Before a Run",
   "desc": "How to decide which Clincoo MCP tools may read or change data before an assistant runs them.",
   "content": "<p class=\"mb-4\">An MCP tool that can write files or send requests should be limited before the chat, not after an unwanted change.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set the minimum permission</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> note which tools are read-only, such as account status, and which tools may change a project. Do not paste a token into the prompt. If the assistant needs a connection check, ask for get-me or the equivalent, not a list of secrets.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Run one tool, then stop</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> run one tool, read the result, then continue. If the tool asks for configuration again, check the base URL in the note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Reject a suggestion that widens permission only because the previous step failed.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "MCP tools are invoked by the client; the user should control which tools a session may call.",
   "source2": "Clincoo Docs — MCP server",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "mcp-debug-koneksi-server",
 "langs": {
  "id": {
   "title": "Cara Debug Koneksi Server MCP yang Gagal",
   "desc": "Tata cara memeriksa URL, token, dan respons saat tool MCP Clincoo tidak bisa terhubung.",
   "content": "<p class=\"mb-4\">Koneksi MCP yang gagal sering karena URL dasar salah, token kedaluwarsa, atau server tidak merespons.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek URL dan status</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pastikan URL server MCP benar dan bisa dijangkau. Jalankan tool get-me atau list tools untuk melihat kode status. Jangan ulangi permintaan yang sama tanpa melihat error message.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat error lalu perbaiki</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> salin pesan error lengkap. Bandingkan dengan catatan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Perbaiki satu hal (URL atau token) lalu uji ulang sebelum menambah tool lain.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Clients connect to MCP servers over a transport and discover available tools.",
   "source2": "Clincoo Docs — server MCP",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug a Failed MCP Server Connection",
   "desc": "How to check the URL, token, and response when a Clincoo MCP tool cannot connect.",
   "content": "<p class=\"mb-4\">An MCP connection that fails is often caused by a wrong base URL, an expired token, or a server that does not respond.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the URL and status</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> confirm the MCP server URL is correct and reachable. Run a get-me or list-tools call to see the status code. Do not repeat the same request without reading the error message.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record the error, then fix it</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> copy the full error message. Compare it with the note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Fix one thing (URL or token) and test again before adding another tool.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Clients connect to MCP servers over a transport and discover available tools.",
   "source2": "Clincoo Docs — MCP server",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "mcp-daftar-tool-yang-tersedia",
 "langs": {
  "id": {
   "title": "Cara Daftar Tool MCP yang Tersedia dengan Aman",
   "desc": "Tata cara melihat daftar tool MCP Clincoo tanpa menjalankan aksi yang mengubah data.",
   "content": "<p class=\"mb-4\">Menjalankan tool secara acak bisa mengubah proyek. Lebih aman melihat daftar tool dulu sebelum memilih yang diizinkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Minta list tools</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> minta asisten memanggil endpoint list atau tools/list. Baca nama, deskripsi, dan apakah tool itu read-only. Jangan setujui eksekusi otomatis pada sesi pertama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat yang boleh dan yang tidak</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> simpan daftar di catatan proyek. Bandingkan dengan dokumentasi di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Hanya aktifkan tool yang benar-benar dibutuhkan untuk tugas saat ini.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Servers expose a list of tools that clients may discover and call with user permission.",
   "source2": "Clincoo Docs — server MCP",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to List Available MCP Tools Safely",
   "desc": "How to see the list of Clincoo MCP tools without running an action that changes data.",
   "content": "<p class=\"mb-4\">Running tools at random can change a project. It is safer to see the list of tools first before choosing which ones are allowed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ask for the tools list</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ask the assistant to call the list or tools/list endpoint. Read the name, description, and whether the tool is read-only. Do not approve automatic execution on the first session.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record what is allowed and what is not</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> save the list in the project note. Compare it with the documentation on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Enable only the tools that are actually needed for the current task.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Servers expose a list of tools that clients may discover and call with user permission.",
   "source2": "Clincoo Docs — MCP server",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "mcp-tangani-error-tool",
 "langs": {
  "id": {
   "title": "Cara Tangani Error Tool MCP yang Dikembalikan",
   "desc": "Tata cara membaca dan menangani pesan error dari tool MCP Clincoo tanpa mengulang permintaan yang sama.",
   "content": "<p class=\"mb-4\">Error dari tool MCP sering berisi kode status atau pesan yang menjelaskan masalah, bukan alasan untuk langsung mengulang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca pesan sebelum ulang</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> salin pesan error lengkap. Periksa apakah itu 401, 404, atau timeout. Perbaiki penyebabnya dulu, misalnya token atau path, baru coba lagi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Batasi percobaan ulang</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jangan ulang lebih dari dua kali. Jika masih gagal, catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> dan minta bantuan dengan pesan error utuh, bukan ringkasan.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Tool calls return results or errors that the client should surface to the user.",
   "source2": "Clincoo Docs — server MCP",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Handle an Error Returned by an MCP Tool",
   "desc": "How to read and handle an error message from a Clincoo MCP tool without repeating the same request.",
   "content": "<p class=\"mb-4\">An error from an MCP tool often contains a status code or message that explains the problem, not a reason to retry immediately.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read the message before retrying</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> copy the full error message. Check whether it is a 401, 404, or timeout. Fix the cause first, such as the token or path, then try again.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Limit the retries</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> do not retry more than twice. If it still fails, record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> and ask for help with the full error message, not a summary.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Tool calls return results or errors that the client should surface to the user.",
   "source2": "Clincoo Docs — MCP server",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
