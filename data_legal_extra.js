// Clinqoo Blog — artikel legal tambahan (merge ke data_legal)
(function(){
  var extra = [
    {
      id: "kebijakan-keamanan-akun-dan-sesi",
      langs: {
        "id": {
          title: "Kebijakan Keamanan Akun dan Sesi Clinqoo",
          desc: "Bagaimana login Clinqoo bekerja, tanggung jawab pengguna menjaga sesi, dan langkah jika akun diduga diakses orang lain.",
          content: "<p class=\"mb-4\">Clinqoo memakai masuk lewat penyedia identitas seperti Google atau GitHub. Kami tidak menyimpan kata sandi penyedia itu. Keamanan akun dimulai dari perangkat dan akun identitas yang kamu pakai. Terakhir diperbarui: 18 September 2026.</p><h2>Sesi dan perangkat</h2><p class=\"mb-4\">Setelah masuk, sesi aktif di browser. Jangan tinggalkan sesi terbuka di komputer bersama. Keluar dari akun jika perangkat bukan milikmu.</p><h2>Tanggung jawab pengguna</h2><ul><li>Jaga akun Google atau GitHub yang dipakai untuk masuk.</li><li>Jangan membagikan sesi, tangkapan layar yang memuat token, atau akses remote tanpa kendali.</li><li>Waspadai tautan palsu yang meniru halaman masuk Clinqoo.</li></ul><h2>Jika akun terasa tidak wajar</h2><p class=\"mb-4\">Segera keluarkan sesi di penyedia identitas, lalu masuk lagi ke Clinqoo. Tinjau proyek yang baru diubah. Laporkan ke <a href=\"mailto:muzawwied@gmail.com\">muzawwied@gmail.com</a> jika ada perubahan yang tidak kamu buat.</p><h2>Tindakan platform</h2><p class=\"mb-4\">Clinqoo dapat membatasi sesi yang terlihat menyalahi atau berisiko. Pembatasan ini untuk melindungi akun lain dan infrastruktur, bukan hukuman sepihak tanpa dasar.</p><h2>Hubungan dengan kebijakan lain</h2><p class=\"mb-4\">Kebijakan ini pelengkap Syarat Ketentuan dan Kebijakan Privasi. Dengan masuk ke Clinqoo, kamu setuju menjaga sesi dengan wajar.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Platform Clinqoo",
          source2: "Clinqoo Legal", sourceUrl2: "https://clinqoo.pages.dev/", sourceSnippet2: "Kebijakan keamanan akun"
        },
        "en": {
          title: "Clinqoo Account and Session Security Policy",
          desc: "How Clinqoo login works, the user duty to protect a session, and what to do if an account may have been used by someone else.",
          content: "<p class=\"mb-4\">Clinqoo signs you in through identity providers such as Google or GitHub. We do not store those providers passwords. Account safety starts with the device and identity account you use. Last updated: 18 September 2026.</p><h2>Sessions and devices</h2><p class=\"mb-4\">After sign-in, a session stays active in the browser. Do not leave a session open on a shared computer. Sign out if the device is not yours.</p><h2>User responsibilities</h2><ul><li>Protect the Google or GitHub account used to sign in.</li><li>Do not share sessions, screenshots that expose tokens, or uncontrolled remote access.</li><li>Watch for fake links that imitate the Clinqoo sign-in page.</li></ul><h2>If the account feels wrong</h2><p class=\"mb-4\">Revoke sessions at the identity provider, then sign in to Clinqoo again. Review recently changed projects. Email <a href=\"mailto:muzawwied@gmail.com\">muzawwied@gmail.com</a> if you see changes you did not make.</p><h2>Platform action</h2><p class=\"mb-4\">Clinqoo may restrict sessions that look abusive or risky. The goal is to protect other accounts and infrastructure, not to punish without cause.</p><h2>Relation to other policies</h2><p class=\"mb-4\">This policy complements the Terms of Service and Privacy Policy. By signing in to Clinqoo, you agree to treat your session with reasonable care.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Platform Clinqoo",
          source2: "Clinqoo Legal", sourceUrl2: "https://clinqoo.pages.dev/", sourceSnippet2: "Kebijakan keamanan akun"
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
