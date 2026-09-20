// Clincoo Blog — Data kategori: form
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["form"] = {
  names: { "id": "Form", "en": "Forms" },
  flag: "📋",
  articles: [
    {
      id: "form-label-setiap-input",
      langs: {
        "id": {
          title: "Pasang Label pada Setiap Input Form Clincoo",
          desc: "Placeholder bukan label. Pengunjung dan pembaca layar butuh nama field yang tetap terlihat.",
          content: "<p class=\"mb-4\">Placeholder hilang saat orang mulai mengetik. Tanpa label, field email dan nama terlihat sama setelah terisi.</p><p class=\"mb-4\">Hubungkan label dengan atribut for dan id input. Jangan andalkan teks di luar form yang tidak tertaut.</p><p class=\"mb-4\">Jika desain minim, tetap tampilkan label singkat di atas field. Placeholder hanya contoh, bukan nama.</p><p class=\"mb-4\">Minta AI menambah label pada satu form saja. Tolak rewrite seluruh halaman hanya untuk satu input.</p><p class=\"mb-4\">Clincoo menayangkan markup yang kamu simpan. Label yang jelas membuat form bisa diisi tanpa menebak.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Put a Label on Every Clincoo Form Input",
          desc: "A placeholder is not a label. Visitors and screen readers need a field name that stays visible.",
          content: "<p class=\"mb-4\">A placeholder disappears as soon as someone types. Without a label, email and name fields look the same once filled.</p><p class=\"mb-4\">Wire each label with a for attribute and a matching input id. Do not rely on nearby text that is not linked.</p><p class=\"mb-4\">If the design is minimal, still show a short label above the field. A placeholder is an example, not a name.</p><p class=\"mb-4\">Ask the AI to add labels on one form only. Refuse a full-page rewrite for a single input.</p><p class=\"mb-4\">Clincoo ships the markup you save. Clear labels let people fill the form without guessing.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "form-cek-required-sebelum-submit",
      langs: {
        "id": {
          title: "Cek Field Wajib sebelum Submit Form Clincoo",
          desc: "Biarkan peramban menandai field kosong. Jangan andalkan skrip berat jika required sudah cukup.",
          content: "<p class=\"mb-4\">Atribut required dan type yang tepat menahan kiriman kosong tanpa pustaka. Cek dulu HTML sebelum menambah skrip.</p><p class=\"mb-4\">Uji di pratinjau: kosongkan email, kirim, pastikan fokus pindah ke field yang salah. Jika tidak, perbaiki markup, bukan menambah alert.</p><p class=\"mb-4\">Samakan daftar field wajib di desain dan di HTML. Jangan tandai wajib di teks jika inputnya boleh kosong.</p><p class=\"mb-4\">Jika AI menambah validasi JavaScript, minta alasan per field. Tolak plugin besar untuk satu kotak nama.</p><p class=\"mb-4\">Clincoo mengirim form sesuai markup. Field wajib yang jujur menghemat waktu pengunjung dan kamu.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Check Required Fields before a Clincoo Form Submit",
          desc: "Let the browser flag empty fields. Do not add a heavy script when required already works.",
          content: "<p class=\"mb-4\">The required attribute and the right input type stop empty submits without a library. Check the HTML before you add a script.</p><p class=\"mb-4\">Test in preview: leave email empty, submit, and confirm focus moves to the wrong field. If it does not, fix the markup instead of adding an alert.</p><p class=\"mb-4\">Keep the required list in the design and the HTML the same. Do not mark a field required in the copy if the input may stay empty.</p><p class=\"mb-4\">If the AI adds JavaScript validation, ask for a reason per field. Refuse a large plugin for one name box.</p><p class=\"mb-4\">Clincoo sends the form as marked up. Honest required fields save time for visitors and for you.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "form-jaga-nilai-saat-error",
      langs: {
        "id": {
          title: "Jaga Nilai yang Sudah Diisi saat Form Clincoo Gagal",
          desc: "Jangan kosongkan seluruh form setelah error. Pengunjung kesal jika harus mengetik ulang.",
          content: "<p class=\"mb-4\">Setelah kiriman gagal, kembalikan nilai yang sudah benar. Kosongkan hanya field yang memang salah, misalnya sandi.</p><p class=\"mb-4\">Jika halaman reload, pastikan server atau skrip mengisi ulang value. Jangan render form baru yang polos.</p><p class=\"mb-4\">Uji alur: isi nama dan pesan, kirim email rusak, pastikan nama dan pesan masih ada di pratinjau app.clincoo.buzz.</p><p class=\"mb-4\">Minta AI tidak mereset form di onsubmit kecuali kiriman sukses. Tolak location.reload tanpa alasan.</p><p class=\"mb-4\">Clincoo menayangkan halaman yang kamu simpan. Form yang mengingat isian adalah sopan santun, bukan fitur mewah.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Keep Filled Values when a Clincoo Form Errors",
          desc: "Do not wipe the whole form after an error. Visitors hate typing everything again.",
          content: "<p class=\"mb-4\">After a failed submit, restore the values that were already correct. Clear only the field that is wrong, such as a password.</p><p class=\"mb-4\">If the page reloads, make sure the server or script refills the values. Do not render a blank form.</p><p class=\"mb-4\">Test the path: fill name and message, submit a broken email, and confirm name and message remain in the app.clincoo.buzz preview.</p><p class=\"mb-4\">Ask the AI not to reset the form on submit unless the send succeeded. Refuse a location.reload without a reason.</p><p class=\"mb-4\">Clincoo ships the page you save. A form that remembers input is courtesy, not a luxury feature.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ]
};
