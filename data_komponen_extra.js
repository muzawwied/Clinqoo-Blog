// Clincoo Blog — artikel komponen tambahan 2026-09-26
(function(){
  var extra = [
    {
      id: "komponen-avatar-teks-cadangan",
      langs: {
        "id": {
          title: "Tambah Inisial Cadangan pada Avatar Komponen Clincoo",
          desc: "Gambar avatar yang gagal dimuat meninggalkan lubang kosong. Siapkan inisial atau ikon cadangan.",
          content: "<p class=\"mb-4\">Avatar anggota Clincoo hanya memakai tag img. Saat URL rusak, lingkaran kosong membuat daftar terlihat patah.</p><p class=\"mb-4\">Tambah span inisial di belakang img di editor.clincoo.buzz. Sembunyikan inisial hanya setelah gambar onload berhasil.</p><p class=\"mb-4\">Jangan andalkan alt kosong. Pembaca layar butuh nama; mata butuh bentuk cadangan saat berkas gagal.</p><p class=\"mb-4\">Minta AI hanya menambah fallback inisial. Tempel markup avatar dan contoh URL yang 404.</p><p class=\"mb-4\">Clincoo tidak memperbaiki gambar rusak sendiri. Cadangan membuat daftar anggota tetap utuh di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add Fallback Initials on a Clincoo Avatar Component",
          desc: "A failed avatar image leaves an empty hole. Provide initials or an icon fallback.",
          content: "<p class=\"mb-4\">A Clincoo member avatar uses only an img tag. When the URL breaks, an empty circle makes the list look broken.</p><p class=\"mb-4\">Add an initials span behind the img in editor.clincoo.buzz. Hide the initials only after the image onload succeeds.</p><p class=\"mb-4\">Do not rely on an empty alt. Screen readers need a name; eyes need a fallback shape when the file fails.</p><p class=\"mb-4\">Ask AI to add only the initials fallback. Paste the avatar markup and a sample 404 URL.</p><p class=\"mb-4\">Clincoo does not repair broken images for you. A fallback keeps the member list intact on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "komponen-dropdown-fokus-escape",
      langs: {
        "id": {
          title: "Kelola Fokus dan Escape pada Dropdown Komponen Clincoo",
          desc: "Menu yang terbuka tanpa Escape dan tanpa jebakan fokus membuat keyboard tersesat.",
          content: "<p class=\"mb-4\">Dropdown filter Clincoo terbuka lewat klik. Tab lari ke footer sementara menu tetap terbuka.</p><p class=\"mb-4\">Pindahkan fokus ke item pertama saat buka, tangkap Escape, lalu kembalikan fokus ke tombol pemicu di editor.clincoo.buzz.</p><p class=\"mb-4\">Jangan biarkan menu menumpuk tanpa menutup yang lama. Satu dropdown terbuka per saat.</p><p class=\"mb-4\">Minta AI hanya menambah fokus, Escape, dan tutup saat klik luar. Tempel tombol pemicu plus daftar item.</p><p class=\"mb-4\">Clincoo menjalankan skrip yang kamu tempel. Dropdown yang tertutup rapi aman dipakai di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Manage Focus and Escape on a Clincoo Dropdown Component",
          desc: "An open menu without Escape and without focus control lets the keyboard wander.",
          content: "<p class=\"mb-4\">A Clincoo filter dropdown opens on click. Tab jumps to the footer while the menu stays open.</p><p class=\"mb-4\">Move focus to the first item on open, catch Escape, then restore focus to the trigger in editor.clincoo.buzz.</p><p class=\"mb-4\">Do not stack menus without closing the old one. Keep one dropdown open at a time.</p><p class=\"mb-4\">Ask AI to add only focus, Escape, and outside-click close. Paste the trigger button plus the item list.</p><p class=\"mb-4\">Clincoo runs the script you paste. A tidy closable dropdown is safe to use on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "komponen-alert-peran-status",
      langs: {
        "id": {
          title: "Pakai role Status pada Alert Komponen Clincoo",
          desc: "Alert visual tanpa role status tidak dibaca. Samakan warna, ikon, dan pengumuman.",
          content: "<p class=\"mb-4\">Banner sukses Clincoo hanya mengubah warna latar. Pembaca layar tidak mendengar bahwa form tersimpan.</p><p class=\"mb-4\">Tambah role=status atau aria-live=polite pada alert di editor.clincoo.buzz. Isi teks yang sama dengan pesan visual.</p><p class=\"mb-4\">Jangan andalkan warna merah atau hijau saja. Ikon plus kata sukses atau gagal menolong pengguna buta warna.</p><p class=\"mb-4\">Minta AI hanya menambah peran dan teks yang diucapkan. Tempel markup banner yang sekarang bisu.</p><p class=\"mb-4\">Clincoo tidak menambah ARIA sendiri. Alert yang diumumkan menjaga umpan balik jelas di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use a Status Role on Clincoo Alert Components",
          desc: "A visual alert without a status role is silent. Match color, icon, and announcement.",
          content: "<p class=\"mb-4\">A Clincoo success banner only changes background color. Screen readers never hear that the form saved.</p><p class=\"mb-4\">Add role=status or aria-live=polite on the alert in editor.clincoo.buzz. Put the same text as the visual message.</p><p class=\"mb-4\">Do not rely on red or green alone. An icon plus the word success or failed helps color-blind users.</p><p class=\"mb-4\">Ask AI to add only the role and spoken text. Paste the currently silent banner markup.</p><p class=\"mb-4\">Clincoo does not add ARIA for you. An announced alert keeps feedback clear on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "komponen-slot-aksi-konsisten",
      langs: {
        "id": {
          title: "Samakan Slot Aksi di Setiap Kartu Komponen Clincoo",
          desc: "Tombol edit kadang di header, kadang di footer. Satu slot aksi membuat scan lebih cepat.",
          content: "<p class=\"mb-4\">Satu kartu proyek Clincoo menaruh Edit di pojok kanan atas. Kartu lain menaruhnya di bawah deskripsi.</p><p class=\"mb-4\">Pilih satu slot aksi—biasanya kanan bawah—lalu terapkan ke semua kartu di editor.clincoo.buzz.</p><p class=\"mb-4\">Jangan biarkan AI menata ulang tiap kartu berbeda agar terlihat unik. Konsistensi mengalahkan variasi.</p><p class=\"mb-4\">Minta AI hanya memindah tombol ke slot yang sama. Tempel dua kartu yang posisinya beda.</p><p class=\"mb-4\">Clincoo merender posisi apa adanya. Slot aksi yang sama mempercepat kerja tim di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep the Action Slot Consistent on Every Clincoo Card Component",
          desc: "Edit sometimes sits in the header, sometimes in the footer. One action slot speeds scanning.",
          content: "<p class=\"mb-4\">One Clincoo project card puts Edit in the top-right. Another puts it under the description.</p><p class=\"mb-4\">Pick one action slot—usually bottom-right—then apply it to every card in editor.clincoo.buzz.</p><p class=\"mb-4\">Do not let AI restyle each card differently to look unique. Consistency beats variety here.</p><p class=\"mb-4\">Ask AI to move only the buttons into the same slot. Paste two cards with different positions.</p><p class=\"mb-4\">Clincoo renders positions as-is. A shared action slot speeds team work on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "komponen-chip-bisa-dihapus-keyboard",
      langs: {
        "id": {
          title: "Buat Chip Filter Bisa Dihapus lewat Keyboard di Clincoo",
          desc: "Chip hanya punya ikon silang kecil. Pengguna keyboard tidak bisa membuang filter aktif.",
          content: "<p class=\"mb-4\">Chip tag Clincoo hanya merespons klik ikon silang 8 piksel. Tab melewati chip tanpa berhenti.</p><p class=\"mb-4\">Jadikan chip tombol atau tambah tombol hapus yang bisa difokus di editor.clincoo.buzz. Delete atau Backspace boleh membuang chip yang fokus.</p><p class=\"mb-4\">Jangan andalkan hover untuk menampilkan silang. Sentuhan dan keyboard harus melihat kontrol yang sama.</p><p class=\"mb-4\">Minta AI hanya menambah fokus dan hapus lewat keyboard. Tempel markup chip aktif.</p><p class=\"mb-4\">Clincoo tidak menambah perilaku chip sendiri. Filter yang bisa dibuang menjaga kendali di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Make Filter Chips Removable from the Keyboard in Clincoo",
          desc: "A chip with only a tiny X leaves keyboard users stuck with an active filter.",
          content: "<p class=\"mb-4\">A Clincoo tag chip only reacts to an 8-pixel X click. Tab walks past the chip without stopping.</p><p class=\"mb-4\">Turn the chip into a button or add a focusable remove control in editor.clincoo.buzz. Delete or Backspace may drop the focused chip.</p><p class=\"mb-4\">Do not reveal the X only on hover. Touch and keyboard need the same control.</p><p class=\"mb-4\">Ask AI to add only focus and keyboard remove. Paste the active chip markup.</p><p class=\"mb-4\">Clincoo does not add chip behavior for you. Removable filters keep control on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["komponen"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["komponen"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();
