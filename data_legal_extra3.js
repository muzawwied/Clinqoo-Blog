// Clinqoo Blog — artikel legal tambahan extra3 2026-09-18
(function(){
  var extra = [
    {
      id: "kebijakan-ketersediaan-layanan",
      langs: {
        "id": {
          title: "Kebijakan Ketersediaan Layanan Clinqoo",
          desc: "Clinqoo berupaya menjaga editor dan deploy tetap bisa diakses, tanpa menjanjikan uptime mutlak setiap jam.",
          content: "<p class=\"mb-4\">Editor, pratinjau, dan deploy Clinqoo bergantung pada jaringan dan penyedia hosting. Kami menjaga layanan agar wajar dipakai sehari-hari. Terakhir diperbarui: 18 September 2026.</p><h2>Yang kami usahakan</h2><p class=\"mb-4\">Pemeliharaan dijadwalkan seminimal mungkin. Gangguan mendadak diumumkan lewat editor atau blog jika berdampak luas.</p><h2>Yang tidak dijamin</h2><p class=\"mb-4\">Tidak ada jaminan ketersediaan 100 persen. Pemadaman pihak ketiga, kesalahan konfigurasi DNS, atau kuota yang habis dapat menunda situs tayang.</p><h2>Cadangan di pihakmu</h2><p class=\"mb-4\">Ekspor ZIP secara berkala. Cadangan lokal adalah jaring pengaman jika akses cloud terhenti sementara.</p><h2>Kontak</h2><p class=\"mb-4\">Laporan gangguan kirim ke <a href=\"mailto:muzawwied@gmail.com\">muzawwied@gmail.com</a> beserta URL proyek dan waktu kejadian.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Platform Clinqoo",
          source2: "Clinqoo Legal", sourceUrl2: "https://clinqoo.pages.dev/", sourceSnippet2: "Clinqoo policies"
        },
        "en": {
          title: "Clinqoo Service Availability Policy",
          desc: "Clinqoo works to keep the editor and deploy reachable, without promising absolute uptime every hour.",
          content: "<p class=\"mb-4\">The Clinqoo editor, preview, and deploy depend on the network and hosting providers. We keep the service reasonably usable day to day. Last updated: 18 September 2026.</p><h2>What we aim for</h2><p class=\"mb-4\">Maintenance is kept as small as practical. Sudden outages are noted in the editor or blog when the impact is wide.</p><h2>What is not guaranteed</h2><p class=\"mb-4\">There is no 100 percent availability promise. Third-party outages, DNS misconfiguration, or a spent quota can delay a live site.</p><h2>Your own backup</h2><p class=\"mb-4\">Export a ZIP on a regular cadence. A local copy is the safety net if cloud access pauses.</p><h2>Contact</h2><p class=\"mb-4\">Report incidents to <a href=\"mailto:muzawwied@gmail.com\">muzawwied@gmail.com</a> with the project URL and the time it happened.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clinqoo platform",
          source2: "Clinqoo Legal", sourceUrl2: "https://clinqoo.pages.dev/", sourceSnippet2: "Clinqoo policies"
        }
      }
    },
    {
      id: "kebijakan-penggunaan-wajar-kuota",
      langs: {
        "id": {
          title: "Kebijakan Penggunaan Wajar Kuota Clinqoo",
          desc: "Kuota editor, AI, dan deploy ada batasnya. Pemakaian yang merusak layanan bersama dapat dibatasi.",
          content: "<p class=\"mb-4\">Kuota menjaga agar satu akun tidak menelan sumber daya yang dipakai banyak orang. Terakhir diperbarui: 18 September 2026.</p><h2>Yang dihitung kuota</h2><p class=\"mb-4\">Deploy berulang, permintaan asisten AI, dan penyimpanan proyek yang membengkak dapat masuk hitungan kuota sesuai paket akun.</p><h2>Penggunaan wajar</h2><p class=\"mb-4\">Membangun dan memperbarui situs sendiri adalah penggunaan wajar. Skrip yang men-deploy ratusan kali semalam atau menguras AI tanpa tinjauan manusia tidak termasuk.</p><h2>Jika batas terlampaui</h2><p class=\"mb-4\">Fitur terkait dapat dijeda sampai periode kuota reset atau paket disesuaikan. Kami dapat menghubungi akun yang polanya merusak layanan.</p><h2>Tanya</h2><p class=\"mb-4\">Pertanyaan kuota ke <a href=\"mailto:muzawwied@gmail.com\">muzawwied@gmail.com</a>.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Platform Clinqoo",
          source2: "Clinqoo Blog", sourceUrl2: "https://clinqoo.pages.dev/blog/", sourceSnippet2: "Clinqoo Blog"
        },
        "en": {
          title: "Clinqoo Fair-Use Quota Policy",
          desc: "Editor, AI, and deploy quotas have limits. Use that harms the shared service may be throttled.",
          content: "<p class=\"mb-4\">Quotas keep one account from swallowing resources many people share. Last updated: 18 September 2026.</p><h2>What counts</h2><p class=\"mb-4\">Repeated deploys, AI assistant calls, and project storage that balloons can count against the quota for your plan.</p><h2>Fair use</h2><p class=\"mb-4\">Building and updating your own site is fair use. A script that deploys hundreds of times overnight or drains AI with no human review is not.</p><h2>If you go over</h2><p class=\"mb-4\">The related feature may pause until the quota period resets or the plan is adjusted. We may contact accounts whose pattern harms the service.</p><h2>Questions</h2><p class=\"mb-4\">Quota questions go to <a href=\"mailto:muzawwied@gmail.com\">muzawwied@gmail.com</a>.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clinqoo platform",
          source2: "Clinqoo Blog", sourceUrl2: "https://clinqoo.pages.dev/blog/", sourceSnippet2: "Clinqoo Blog"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["legal"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["legal"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
