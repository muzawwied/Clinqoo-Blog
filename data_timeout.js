// Clincoo Blog — Data kategori: timeout
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["timeout"] = {
  names: { "id": "Timeout", "en": "Timeout" },
  flag: "⏱",
  articles: [
    {
      id: "timeout-abortcontroller-fetch-clincoo",
      langs: {
        "id": {
          title: "Batasi Fetch Clincoo dengan AbortController, Jangan Spinner Abadi",
          desc: "Tanpa timeout, fetch yang macet menahan tombol simpan. Abort setelah beberapa detik.",
          content: "<p class=\"mb-4\">Form Clincoo menunggu API tanpa batas. Pengunjung mengira tombol rusak.</p><p class=\"mb-4\">Buat AbortController. Beri signal ke fetch. setTimeout memanggil abort() setelah 8–15 detik.</p><p class=\"mb-4\">Tangkap DOMException AbortError terpisah dari gagal jaringan. Tampilkan pesan coba lagi.</p><p class=\"mb-4\">Minta AI menulis pola abort + finally spinner. Tempel fetch dari editor.clincoo.buzz.</p><p class=\"mb-4\">Setelah timeout ada, app.clincoo.buzz tidak menggantung saat API diam.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Bound a Clincoo Fetch with AbortController; Do Not Spin Forever",
          desc: "Without a timeout, a stuck fetch holds the save button. Abort after a few seconds.",
          content: "<p class=\"mb-4\">A Clincoo form waits on the API with no limit. Visitors think the button is broken.</p><p class=\"mb-4\">Create an AbortController. Pass its signal to fetch. setTimeout calls abort() after 8–15 seconds.</p><p class=\"mb-4\">Catch AbortError separately from a network failure. Show a retry message.</p><p class=\"mb-4\">Ask AI for an abort + finally spinner pattern. Paste the fetch from editor.clincoo.buzz.</p><p class=\"mb-4\">Once a timeout exists, app.clincoo.buzz does not hang when the API stays silent.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "timeout-pesan-jelas-bukan-spinner",
      langs: {
        "id": {
          title: "Ganti Spinner Lama Clincoo dengan Pesan Timeout yang Jelas",
          desc: "Spinner tanpa teks setelah 10 detik terasa macet. Tulis apa yang gagal dan apa langkah berikutnya.",
          content: "<p class=\"mb-4\">Pratinjau Clincoo memutar ikon tanpa angka. Pengunjung menutup tab.</p><p class=\"mb-4\">Setelah abort atau timer, ganti spinner jadi kalimat: permintaan habis waktu, coba lagi, atau periksa jaringan.</p><p class=\"mb-4\">Jangan biarkan tombol disabled selamanya. Aktifkan kembali di finally.</p><p class=\"mb-4\">Minta AI merancang tiga state: loading, timeout, sukses. Tempel markup dari editor.clincoo.buzz.</p><p class=\"mb-4\">Pesan jelas di app.clincoo.buzz mengurangi tiket 'halaman hang'.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Replace a Long Clincoo Spinner with a Clear Timeout Message",
          desc: "A spinner with no text after 10 seconds feels frozen. Say what failed and what to do next.",
          content: "<p class=\"mb-4\">A Clincoo preview spins an icon with no number. Visitors close the tab.</p><p class=\"mb-4\">After abort or a timer, swap the spinner for a sentence: the request timed out, retry, or check the network.</p><p class=\"mb-4\">Do not leave the button disabled forever. Re-enable it in finally.</p><p class=\"mb-4\">Ask AI for three states: loading, timeout, success. Paste markup from editor.clincoo.buzz.</p><p class=\"mb-4\">A clear message on app.clincoo.buzz cuts 'page hung' tickets.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};
