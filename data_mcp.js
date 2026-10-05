// Clincoo Docs — kategori MCP (6 Oktober 2026, 01:14 WIB) — 1 artikel baru
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
}
]
};
