// Clincoo Blog — artikel javascript tambahan 2026-09-21 WIB
(function(){
  var extra = [
    {
      id: "js-abort-fetch-saat-pindah-halaman",
      langs: {
        "id": {
          title: "Batalkan Fetch Clincoo saat Pengguna Pindah Halaman",
          desc: "Permintaan lama yang selesai setelah navigasi menimpa UI baru. AbortController memotong sisa jaringan.",
          content: "<p class=\"mb-4\">Daftar produk Clincoo yang diganti filter cepat masih bisa menampilkan hasil pencarian lama karena fetch pertama selesai belakangan.</p><p class=\"mb-4\">Buat AbortController di awal pemanggilan. Kirim signal ke fetch. Saat filter atau halaman berubah, panggil abort() lalu buat controller baru.</p><p class=\"mb-4\">Tangani error AbortError secara senyap. Jangan tampilkan 'gagal kirim' hanya karena permintaan kamu batalkan sendiri.</p><p class=\"mb-4\">Minta AI menambah satu AbortController pada fungsi fetch daftar. Tolak library state management.</p><p class=\"mb-4\">Clincoo menjalankan skrip di tab yang sama. Kamu yang wajib membatalkan pekerjaan yang sudah tidak relevan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Abort a Clincoo Fetch when the User Leaves the Page",
          desc: "A late request can overwrite the new UI after navigation. AbortController cuts leftover network work.",
          content: "<p class=\"mb-4\">A Clincoo product list that changes filters quickly can still show the first search because that fetch finishes last.</p><p class=\"mb-4\">Create an AbortController at the start of the call. Pass its signal to fetch. When the filter or page changes, call abort() then make a new controller.</p><p class=\"mb-4\">Handle AbortError quietly. Do not show a send-failed message only because you cancelled the request.</p><p class=\"mb-4\">Ask the AI to add one AbortController on the list-fetch function. Refuse a state-management library.</p><p class=\"mb-4\">Clincoo runs scripts in the same tab. You must cancel work that is no longer relevant.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "js-dataset-bukan-id-global",
      langs: {
        "id": {
          title: "Simpan Data Item Clincoo di data-*, Bukan id Global",
          desc: "id yang bentrok merusak querySelector. dataset pada kartu lebih aman untuk daftar dinamis.",
          content: "<p class=\"mb-4\">Kartu produk dengan id=\"item-1\" pecah saat dua daftar dirender di halaman yang sama. getElementById hanya melihat yang pertama.</p><p class=\"mb-4\">Pakai class bersama dan data-id pada setiap kartu. Baca event.currentTarget.dataset.id di handler. Tidak perlu id unik di seluruh dokumen.</p><p class=\"mb-4\">Uji dua section berisi item dengan nomor sama. Klik harus mengarah ke kartu yang benar, bukan ke daftar atas.</p><p class=\"mb-4\">Minta AI mengganti satu getElementById menjadi dataset. Tolak menomori ulang seluruh halaman.</p><p class=\"mb-4\">Clincoo merender HTML yang kamu tulis. data-* adalah saku data, id adalah jangkar dokumen.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Store Clincoo Item Data in data-*, Not a Global id",
          desc: "Clashing ids break querySelector. A dataset on the card is safer for dynamic lists.",
          content: "<p class=\"mb-4\">A product card with id=\"item-1\" breaks when two lists render on the same page. getElementById only sees the first match.</p><p class=\"mb-4\">Use a shared class and data-id on each card. Read event.currentTarget.dataset.id in the handler. You do not need a document-wide unique id.</p><p class=\"mb-4\">Test two sections that reuse the same item numbers. A click must target the right card, not the list at the top.</p><p class=\"mb-4\">Ask the AI to change one getElementById to dataset. Refuse a full-page renumber.</p><p class=\"mb-4\">Clincoo renders the HTML you write. data-* is a data pocket; id is a document anchor.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["javascript"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["javascript"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
