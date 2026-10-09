// Clincoo Docs — kategori Scrollbar (9 Oktober 2026, 23:00 WIB) — tambah 5 artikel
// Clincoo Docs — kategori Scrollbar (9 Oktober 2026, 22:00 WIB) — 4 artikel baru
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["scrollbar"] = {
 "names": { "id": "Scrollbar", "en": "Scrollbar" },
 "articles": [
{
 "id": "scrollbar-gutter-stable-cegah-geser-layout",
 "langs": {
  "id": {
   "title": "Cara Cegah Layout Bergeser dengan scrollbar-gutter",
   "desc": "Tata cara menyiapkan ruang scrollbar Clincoo supaya konten tidak meloncat saat overflow muncul.",
   "content": "<p class=\"mb-4\">Tata cara menyiapkan ruang scrollbar Clincoo supaya konten tidak meloncat saat overflow muncul.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sediakan gutter sebelum overflow ada</h2><p class=\"mb-4\">Scrollbar klasik memakan lebar saat konten lebih tinggi dari viewport. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set scrollbar-gutter: stable pada html. both-edges hanya jika kedua sisi memang butuh simetri.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji buka modal yang mengunci body</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka dialog yang menambah overflow: hidden pada body. Header dan judul tidak boleh geser ke kanan. Jika masih geser, gutter belum dihitung karena scrollbar overlay. Catat hasilnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scrollbar-gutter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter",
   "sourceSnippet": "The scrollbar-gutter CSS property allows authors to reserve space for the scrollbar.",
   "source2": "CSS Overflow Module — scrollbar-gutter",
   "source2Url": "https://www.w3.org/TR/css-overflow-3/#scrollbar-gutter-property",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Stop Layout Shift with scrollbar-gutter",
   "desc": "How to reserve scrollbar space in Clincoo so content does not jump when overflow appears.",
   "content": "<p class=\"mb-4\">How to reserve scrollbar space in Clincoo so content does not jump when overflow appears.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reserve the gutter before overflow exists</h2><p class=\"mb-4\">A classic scrollbar takes width when content is taller than the viewport. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set scrollbar-gutter: stable on html. Use both-edges only when both sides really need symmetry.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test a modal that locks the body</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open a dialog that sets overflow: hidden on the body. The header and title must not shift right. If they still shift, the gutter is not counted because the scrollbar is overlay. Record the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scrollbar-gutter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter",
   "sourceSnippet": "The scrollbar-gutter CSS property allows authors to reserve space for the scrollbar.",
   "source2": "CSS Overflow Module — scrollbar-gutter",
   "source2Url": "https://www.w3.org/TR/css-overflow-3/#scrollbar-gutter-property",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "scrollbar-sembunyikan-tanpa-overflow-hidden",
 "langs": {
  "id": {
   "title": "Cara Sembunyikan Scrollbar Tanpa Mengunci Scroll",
   "desc": "Tata cara menyembunyikan scrollbar Clincoo tetap bisa digulir keyboard dan roda tetikus.",
   "content": "<p class=\"mb-4\">Tata cara menyembunyikan scrollbar Clincoo tetap bisa digulir keyboard dan roda tetikus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sembunyikan cat, jangan matikan overflow</h2><p class=\"mb-4\">overflow: hidden menghentikan gulir, termasuk untuk pembaca yang mengandalkan keyboard. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pakai scrollbar-width: none dan pseudo scrollbar WebKit display none pada panel daftar, dengan overflow-y: auto tetap aktif.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pastikan fokus masih bisa diikuti</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tab ke item di bawah lipatan. Panel harus menggulir mengikuti fokus. Jika item terpotong dan tidak bergerak, overflow ikut dimatikan. Simpan pengecualian di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scrollbar-width",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width",
   "sourceSnippet": "The scrollbar-width property sets the thickness of an element's scrollbars when they are shown.",
   "source2": "MDN — overflow",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Hide a Scrollbar Without Locking Scroll",
   "desc": "How to hide a Clincoo scrollbar while keyboard and wheel scrolling still work.",
   "content": "<p class=\"mb-4\">How to hide a Clincoo scrollbar while keyboard and wheel scrolling still work.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hide the paint, do not disable overflow</h2><p class=\"mb-4\">overflow: hidden stops scrolling, including for people who rely on the keyboard. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> use scrollbar-width: none and a WebKit scrollbar pseudo with display none on the list panel, and keep overflow-y: auto.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Make sure focus can still be followed</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tab to an item below the fold. The panel must scroll to follow focus. If the item is clipped and does not move, overflow was disabled too. Keep the exception on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scrollbar-width",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width",
   "sourceSnippet": "The scrollbar-width property sets the thickness of an element's scrollbars when they are shown.",
   "source2": "MDN — overflow",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "scrollbar-kustom-webkit-dan-standar",
 "langs": {
  "id": {
   "title": "Cara Gaya Scrollbar di WebKit dan Standar",
   "desc": "Tata cara mewarnai thumb scrollbar Clincoo tanpa mengandalkan satu prefiks saja.",
   "content": "<p class=\"mb-4\">Tata cara mewarnai thumb scrollbar Clincoo tanpa mengandalkan satu prefiks saja.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis properti standar dulu</h2><p class=\"mb-4\">Chrome masih memakai pseudo scrollbar WebKit, Firefox memakai scrollbar-color. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis scrollbar-color: #57534e #f5f5f4 lalu lebar pseudo 10px dan thumb background #57534e dengan radius penuh.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jaga kontras thumb dan track</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir daftar proyek di Firefox dan Chrome. Thumb harus terlihat di atas track terang, dan lebar tidak mendorong kartu. Jika thumb hilang di satu browser, properti standar belum dipasang. Catat pasangan yang lolos di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scrollbar-color",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color",
   "sourceSnippet": "The scrollbar-color CSS property sets the color of the scrollbar track and thumb.",
   "source2": "MDN — ::-webkit-scrollbar",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Style a Scrollbar in WebKit and the Standard",
   "desc": "How to color a Clincoo scrollbar thumb without relying on one prefix only.",
   "content": "<p class=\"mb-4\">How to color a Clincoo scrollbar thumb without relying on one prefix only.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write the standard property first</h2><p class=\"mb-4\">Chrome still uses the WebKit scrollbar pseudo, Firefox uses scrollbar-color. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write scrollbar-color: #57534e #f5f5f4 then a 10px pseudo width and a thumb background of #57534e with a full radius.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep thumb and track contrast</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll the project list in Firefox and Chrome. The thumb must show on the light track, and the width must not push cards. If the thumb vanishes in one browser, the standard property is missing. Note the pair that passed on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scrollbar-color",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color",
   "sourceSnippet": "The scrollbar-color CSS property sets the color of the scrollbar track and thumb.",
   "source2": "MDN — ::-webkit-scrollbar",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "scrollbar-jangan-kunci-scroll-latar-modal",
 "langs": {
  "id": {
   "title": "Cara Kunci Scroll Latar Saat Modal Tanpa Hilang Posisi",
   "desc": "Tata cara menahan body Clincoo saat dialog terbuka tanpa melompat ke atas halaman.",
   "content": "<p class=\"mb-4\">Tata cara menahan body Clincoo saat dialog terbuka tanpa melompat ke atas halaman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan scrollY sebelum mengunci</h2><p class=\"mb-4\">overflow: hidden pada body sering mengembalikan scroll ke 0. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan window.scrollY, set body position fixed dengan top negatif sebesar scroll, width 100 persen, dan sisakan scrollbar-gutter: stable.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kembalikan posisi saat dialog ditutup</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir ke tengah daftar, buka dialog, lalu tutup. Halaman harus kembali ke item yang sama, bukan ke hero. Jika loncat, top tidak dikembalikan. Simpan urutan buka-tutup di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — position",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
   "sourceSnippet": "An element with position fixed is positioned relative to the viewport and is taken out of normal flow.",
   "source2": "MDN — Window.scrollY",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Lock Background Scroll in a Modal Without Losing Position",
   "desc": "How to hold the Clincoo body while a dialog is open without jumping to the top of the page.",
   "content": "<p class=\"mb-4\">How to hold the Clincoo body while a dialog is open without jumping to the top of the page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Store scrollY before locking</h2><p class=\"mb-4\">overflow: hidden on the body often resets scroll to 0. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> store window.scrollY, set body to position fixed with a negative top equal to the scroll, width 100 percent, and keep scrollbar-gutter: stable.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Restore position when the dialog closes</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll to the middle of the list, open a dialog, then close it. The page must return to the same item, not the hero. If it jumps, top was not restored. Keep the open-close order on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — position",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
   "sourceSnippet": "An element with position fixed is positioned relative to the viewport and is taken out of normal flow.",
   "source2": "MDN — Window.scrollY",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ,
{
 "id": "scrollbar-width-thin-tanpa-hilang-scroll",
 "langs": {
  "id": {
   "title": "Cara Pakai scrollbar-width thin tanpa Menghilangkan Scroll",
   "desc": "Tata cara menipiskan scrollbar Clincoo dengan scrollbar-width tanpa mematikan gulir keyboard.",
   "content": "<p class=\"mb-4\">Tata cara menipiskan scrollbar Clincoo dengan scrollbar-width tanpa mematikan gulir keyboard.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pilih thin, bukan none</h2><p class=\"mb-4\">scrollbar-width: none menyembunyikan petunjuk bahwa area bisa digulir. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set scrollbar-width: thin pada panel pratinjau yang memang panjang, lalu biarkan auto di halaman pendek.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji keyboard dan roda tetikus</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> fokuskan panel, tekan Page Down, lalu gulir dengan roda. Posisi harus berubah meski batang tampak tipis. Jangan pasangkan overflow: hidden. Catat keputusan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scrollbar-width",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width",
   "sourceSnippet": "The scrollbar-width property sets the thickness of an element's scrollbars when they are shown.",
   "source2": "CSS Overflow Module — scrollbar-width",
   "source2Url": "https://www.w3.org/TR/css-overflow-3/#scrollbar-width",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use scrollbar-width thin Without Removing Scroll",
   "desc": "How to thin a Clincoo scrollbar with scrollbar-width without disabling keyboard scroll.",
   "content": "<p class=\"mb-4\">How to thin a Clincoo scrollbar with scrollbar-width without disabling keyboard scroll.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Choose thin, not none</h2><p class=\"mb-4\">scrollbar-width: none hides the cue that an area can scroll. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set scrollbar-width: thin on a long preview panel, and leave auto on short pages.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test keyboard and wheel</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> focus the panel, press Page Down, then scroll with the wheel. Position must change even if the bar looks thin. Do not pair it with overflow: hidden. Record the decision on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scrollbar-width",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width",
   "sourceSnippet": "The scrollbar-width property sets the thickness of an element's scrollbars when they are shown.",
   "source2": "CSS Overflow Module — scrollbar-width",
   "source2Url": "https://www.w3.org/TR/css-overflow-3/#scrollbar-width",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "scrollbar-color-kontras-cukup",
 "langs": {
  "id": {
   "title": "Cara Atur scrollbar-color agar Tetap Kontras",
   "desc": "Tata cara mewarnai thumb dan track scrollbar Clincoo tanpa membuatnya hilang di latar terang.",
   "content": "<p class=\"mb-4\">Tata cara mewarnai thumb dan track scrollbar Clincoo tanpa membuatnya hilang di latar terang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Isi thumb dulu, lalu track</h2><p class=\"mb-4\">scrollbar-color menerima dua warna: thumb lalu track. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pakai thumb yang lebih gelap dari track terang, misalnya #3f3f46 di atas #e5e7eb, bukan abu-abu muda di atas putih.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek mode terang dan gelap</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ubah tema. Thumb harus tetap terlihat di kedua mode. Jika browser mengabaikan properti ini, gaya WebKit terpisah tidak menggantikan uji keyboard. Simpan palet di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scrollbar-color",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color",
   "sourceSnippet": "The scrollbar-color CSS property sets the color of the scrollbar track and thumb.",
   "source2": "CSS Overflow Module — scrollbar-color",
   "source2Url": "https://www.w3.org/TR/css-overflow-3/#scrollbar-color",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set scrollbar-color with Enough Contrast",
   "desc": "How to color a Clincoo scrollbar thumb and track without losing them on a light background.",
   "content": "<p class=\"mb-4\">How to color a Clincoo scrollbar thumb and track without losing them on a light background.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set the thumb first, then the track</h2><p class=\"mb-4\">scrollbar-color takes two colors: thumb then track. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> use a thumb darker than the light track, for example #3f3f46 on #e5e7eb, not pale gray on white.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check light and dark mode</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> switch themes. The thumb must stay visible in both modes. If a browser ignores this property, a separate WebKit style does not replace the keyboard test. Save the palette on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scrollbar-color",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color",
   "sourceSnippet": "The scrollbar-color CSS property sets the color of the scrollbar track and thumb.",
   "source2": "CSS Overflow Module — scrollbar-color",
   "source2Url": "https://www.w3.org/TR/css-overflow-3/#scrollbar-color",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "scrollbar-overlay-vs-klasik",
 "langs": {
  "id": {
   "title": "Cara Bedakan Scrollbar Overlay dan Klasik",
   "desc": "Tata cara mengenali scrollbar overlay yang tidak makan lebar dan scrollbar klasik yang menggeser layout Clincoo.",
   "content": "<p class=\"mb-4\">Tata cara mengenali scrollbar overlay yang tidak makan lebar dan scrollbar klasik yang menggeser layout Clincoo.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur lebar sebelum dan sesudah overflow</h2><p class=\"mb-4\">Scrollbar overlay mengambang di atas konten. Scrollbar klasik mengurangi lebar isi. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bandingkan clientWidth dan offsetWidth pada panel kosong lalu panel yang isinya lebih tinggi dari viewport.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan anggap semua sistem sama</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> uji Windows klasik dan macOS overlay. gutter stable hanya memesan ruang pada scrollbar klasik. Jika selisih lebar nol, layout tidak geser dan gutter tidak wajib. Catat platform di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scrollbar-gutter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter",
   "sourceSnippet": "Classic scrollbars take space; overlay scrollbars are drawn over the content and do not consume layout width.",
   "source2": "MDN — Element.clientWidth",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Tell Overlay Scrollbars from Classic Ones",
   "desc": "How to recognize overlay scrollbars that take no width and classic scrollbars that shift a Clincoo layout.",
   "content": "<p class=\"mb-4\">How to recognize overlay scrollbars that take no width and classic scrollbars that shift a Clincoo layout.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure width before and after overflow</h2><p class=\"mb-4\">An overlay scrollbar floats over content. A classic scrollbar reduces content width. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> compare clientWidth and offsetWidth on an empty panel, then on a panel taller than the viewport.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not assume every system matches</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> test classic Windows and overlay macOS. stable gutter only reserves space for classic scrollbars. If the width delta is zero, the layout does not shift and a gutter is optional. Note the platform on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scrollbar-gutter",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter",
   "sourceSnippet": "Classic scrollbars take space; overlay scrollbars are drawn over the content and do not consume layout width.",
   "source2": "MDN — Element.clientWidth",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "scrollbar-scroll-margin-sticky-header",
 "langs": {
  "id": {
   "title": "Cara Gulir ke Target tanpa Tertutup Sticky Header",
   "desc": "Tata cara memakai scroll-margin-top supaya judul Clincoo tidak tersembunyi di bawah header lengket.",
   "content": "<p class=\"mb-4\">Tata cara memakai scroll-margin-top supaya judul Clincoo tidak tersembunyi di bawah header lengket.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri jarak pada target, bukan pada header</h2><p class=\"mb-4\">scrollIntoView membawa elemen ke tepi viewport, lalu header sticky menutupnya. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set scroll-margin-top pada h2 sebesar tinggi header plus 8px. Jangan menambah padding besar pada setiap bagian hanya untuk ini.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji tautan jangkar dan tombol</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> klik daftar isi dan tombol yang memanggil scrollIntoView({block:'start'}). Judul harus utuh di bawah header. Fokus keyboard ikut ke target. Simpan nilai margin di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scroll-margin-top",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top",
   "sourceSnippet": "scroll-margin-top defines the margin of the scroll snap area at the top, used when scrolling an element into view.",
   "source2": "MDN — Element.scrollIntoView",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Scroll to a Target Without a Sticky Header Covering It",
   "desc": "How to use scroll-margin-top so a Clincoo heading is not hidden under a sticky header.",
   "content": "<p class=\"mb-4\">How to use scroll-margin-top so a Clincoo heading is not hidden under a sticky header.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Offset the target, not the header</h2><p class=\"mb-4\">scrollIntoView brings an element to the viewport edge, then the sticky header covers it. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set scroll-margin-top on h2 to the header height plus 8px. Do not add large padding on every section only for this.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test anchor links and buttons</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> click the table of contents and a button that calls scrollIntoView({block:'start'}). The heading must sit fully below the header. Keyboard focus follows the target. Save the margin value on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — scroll-margin-top",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top",
   "sourceSnippet": "scroll-margin-top defines the margin of the scroll snap area at the top, used when scrolling an element into view.",
   "source2": "MDN — Element.scrollIntoView",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "scrollbar-overflow-auto-bukan-scroll",
 "langs": {
  "id": {
   "title": "Cara Pakai overflow auto supaya Scrollbar Hanya Muncul Saat Perlu",
   "desc": "Tata cara memilih overflow: auto di panel Clincoo agar scrollbar tidak selalu tampil di konten pendek.",
   "content": "<p class=\"mb-4\">Tata cara memilih overflow: auto di panel Clincoo agar scrollbar tidak selalu tampil di konten pendek.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">auto menunggu overflow, scroll memaksa batang</h2><p class=\"mb-4\">overflow: scroll menampilkan scrollbar meski isi muat. Itu menggeser layout di scrollbar klasik. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pakai overflow: auto pada kartu, daftar file, dan log, lalu batasi tinggi dengan max-height.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan gabung dengan hidden di sumbu yang sama</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> isi panel sampai melewati max-height, lalu hapus item sampai muat. Scrollbar harus muncul dan hilang tanpa memotong fokus. overflow-x: auto pada tabel lebar tetap bisa digulir keyboard. Catat pola di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — overflow",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "sourceSnippet": "The overflow CSS property sets what to do when content is too big to fit in an element. auto shows a scrollbar only if needed.",
   "source2": "MDN — max-height",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/max-height",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use overflow auto so the Scrollbar Appears Only When Needed",
   "desc": "How to choose overflow: auto on a Clincoo panel so the scrollbar is not always shown on short content.",
   "content": "<p class=\"mb-4\">How to choose overflow: auto on a Clincoo panel so the scrollbar is not always shown on short content.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">auto waits for overflow, scroll forces a bar</h2><p class=\"mb-4\">overflow: scroll shows a scrollbar even when the content fits. That shifts layout on classic scrollbars. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> use overflow: auto on cards, file lists, and logs, then cap height with max-height.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not combine it with hidden on the same axis</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> fill the panel past max-height, then remove items until it fits. The scrollbar must appear and disappear without clipping focus. overflow-x: auto on a wide table must still scroll by keyboard. Record the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — overflow",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
   "sourceSnippet": "The overflow CSS property sets what to do when content is too big to fit in an element. auto shows a scrollbar only if needed.",
   "source2": "MDN — max-height",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/max-height",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
