// Clincoo Blog — artikel pwa tambahan extra2 2026-09-22 WIB
(function(){
  var extra = [
    {
      id: "pwa-jangan-cache-permintaan-form",
      langs: {
        "id": {
          title: "Jangan Cache Permintaan Form di Service Worker Clincoo",
          desc: "Cache GET halaman boleh. POST form yang tersimpan membuat data klien terlihat usang atau terkirim dua kali.",
          content: "<p class=\"mb-4\">Service worker template sering memakai cache-first untuk semua fetch. Form kontak Clincoo lalu menampilkan balasan lama atau mengulang kirim saat offline.</p><p class=\"mb-4\">Di event fetch, lewati method selain GET. Jangan cache URL yang mengandung /api atau action form.</p><p class=\"mb-4\">Uji di editor.clincoo.buzz lalu deploy: kirim form, ubah satu field di server atau HTML sukses, kirim lagi. Respons baru harus muncul.</p><p class=\"mb-4\">Minta AI membatasi cache ke aset statis: HTML, CSS, ikon. Tolak strategi cache-all.</p><p class=\"mb-4\">Clincoo menayangkan file statis. Form yang hidup tidak boleh masuk kotak cache PWA.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Do Not Cache Form Requests in a Clincoo Service Worker",
          desc: "Caching GET pages is fine. Cached POSTs make client data look stale or send twice.",
          content: "<p class=\"mb-4\">Template service workers often use cache-first for every fetch. A Clincoo contact form then shows an old reply or resubmits while offline.</p><p class=\"mb-4\">In the fetch event, skip methods other than GET. Do not cache URLs that contain /api or the form action.</p><p class=\"mb-4\">Test from editor.clincoo.buzz then deploy: submit the form, change one field in the success HTML, submit again. The new response must appear.</p><p class=\"mb-4\">Ask the AI to limit cache to static assets: HTML, CSS, icons. Refuse a cache-all strategy.</p><p class=\"mb-4\">Clincoo ships static files. A live form must not enter the PWA cache box.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "pwa-beri-tahu-jika-ada-versi-baru",
      langs: {
        "id": {
          title: "Beri Tahu Pengunjung jika Service Worker Clincoo Punya Versi Baru",
          desc: "Update diam membuat orang melihat halaman lama. Satu banner Muat ulang cukup.",
          content: "<p class=\"mb-4\">Setelah deploy dari app.clincoo.buzz, PWA terpasang tetap memakai worker lama sampai tab ditutup. Pengunjung mengira perbaikan CSS gagal.</p><p class=\"mb-4\">Di halaman, dengarkan controllerchange atau waiting worker. Tampilkan teks singkat: Versi baru siap — muat ulang.</p><p class=\"mb-4\">Jangan auto-reload saat orang mengisi form. Biarkan mereka menyelesaikan dulu, lalu klik muat ulang.</p><p class=\"mb-4\">Minta AI menambah listener kecil, bukan pustaka PWA utuh. Samakan dengan nama cache berversi.</p><p class=\"mb-4\">Clincoo tidak mendorong update worker. Satu pemberitahuan jujur menjaga rilis terlihat.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Tell Visitors when the Clincoo Service Worker Has a New Version",
          desc: "A silent update leaves people on an old page. One Reload banner is enough.",
          content: "<p class=\"mb-4\">After a deploy from app.clincoo.buzz, an installed PWA keeps the old worker until the tab closes. Visitors think the CSS fix failed.</p><p class=\"mb-4\">On the page, listen for controllerchange or a waiting worker. Show a short line: A new version is ready — reload.</p><p class=\"mb-4\">Do not auto-reload while someone is filling a form. Let them finish, then click reload.</p><p class=\"mb-4\">Ask the AI for a small listener, not a full PWA library. Pair it with a versioned cache name.</p><p class=\"mb-4\">Clincoo does not push worker updates. One honest notice keeps the release visible.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["pwa"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["pwa"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
