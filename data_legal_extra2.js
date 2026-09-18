// Clinqoo Blog — artikel legal tambahan 2 (merge ke data_legal)
(function(){
  var extra = [
    {
      id: "kebijakan-pemberitahuan-perubahan-layanan",
      langs: {
        "id": {
          title: "Kebijakan Pemberitahuan Perubahan Layanan Clinqoo",
          desc: "Bagaimana Clinqoo memberitahu perubahan fitur, kuota, atau kebijakan yang memengaruhi akun dan situs tayang.",
          content: "<p class=\"mb-4\">Clinqoo dapat menambah, menyesuaikan, atau menonaktifkan fitur. Perubahan yang memengaruhi cara kamu masuk, men-deploy, atau membayar akan diumumkan dengan wajar. Terakhir diperbarui: 18 September 2026.</p><h2>Saluran pemberitahuan</h2><p class=\"mb-4\">Pengumuman dapat muncul di editor, blog, atau email yang terkait akun. Perubahan kebijakan legal yang material ditandai di halaman terkait dengan tanggal pembaruan.</p><h2>Yang tidak selalu diumumkan satu per satu</h2><p class=\"mb-4\">Perbaikan bug, penyesuaian kinerja, dan perubahan internal yang tidak mengubah hak atau kewajiban pengguna dapat dirilis tanpa nota terpisah.</p><h2>Jika kamu tidak setuju</h2><p class=\"mb-4\">Kamu dapat berhenti memakai fitur yang berubah atau menghapus akun sesuai kebijakan penghapusan. Pertanyaan ke <a href=\"mailto:muzawwied@gmail.com\">muzawwied@gmail.com</a>.</p><h2>Hubungan dengan kebijakan lain</h2><p class=\"mb-4\">Pemberitahuan ini pelengkap Syarat Ketentuan. Tanggal di kepala kebijakan adalah acuan versi yang berlaku.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Platform Clinqoo",
          source2: "Clinqoo Legal", sourceUrl2: "https://clinqoo.pages.dev/", sourceSnippet2: "Clinqoo policies"
        },
        "en": {
          title: "Clinqoo Service Change Notice Policy",
          desc: "How Clinqoo notices feature, quota, or policy changes that affect an account and a live site.",
          content: "<p class=\"mb-4\">Clinqoo may add, adjust, or retire features. Changes that affect how you sign in, deploy, or pay will be announced in a reasonable way. Last updated: 18 September 2026.</p><h2>Notice channels</h2><p class=\"mb-4\">Notices may appear in the editor, the blog, or email tied to the account. Material legal-policy changes are marked on the relevant page with an updated date.</p><h2>What may ship without a separate note</h2><p class=\"mb-4\">Bug fixes, performance tweaks, and internal changes that do not alter user rights or duties can ship without a standalone notice.</p><h2>If you disagree</h2><p class=\"mb-4\">You may stop using the changed feature or delete the account under the deletion policy. Questions go to <a href=\"mailto:muzawwied@gmail.com\">muzawwied@gmail.com</a>.</p><h2>Relation to other policies</h2><p class=\"mb-4\">This notice policy complements the Terms of Service. The date at the head of a policy is the version that applies.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clinqoo platform",
          source2: "Clinqoo Legal", sourceUrl2: "https://clinqoo.pages.dev/", sourceSnippet2: "Clinqoo policies"
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
