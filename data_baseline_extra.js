// Clincoo Docs — tambah 5 artikel Baseline (8 Oktober 2026, 04:00 WIB)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["baseline"]) {
    window.countryDataFiles["baseline"] = { "names": { "id": "Baseline", "en": "Baseline" }, "articles": [] };
  }
  var list = window.countryDataFiles["baseline"].articles;
  var extra = [
{
 "id": "baseline-text-box-trim-leading",
 "langs": {
  "id": {
   "title": "Cara Potong Setengah Leading dengan text-box-trim",
   "desc": "Tata cara memakai text-box-trim agar jarak atas teks Clincoo mengikuti cap height, bukan setengah leading font.",
   "content": "<p class=\"mb-4\">Jarak aneh di atas judul sering bukan margin, melainkan setengah leading yang ikut font. Kartu di editor.clincoo.buzz jadi terlihat tidak rata dengan ikon di sebelahnya.</p><p class=\"mb-4\">Pada judul satu baris, coba text-box-trim: trim-both dan text-box-edge: cap alphabetic. Tepi atas kotak mendekati tinggi huruf kapital, tepi bawah mendekati garis dasar, sehingga align-items: baseline lebih mudah ditebak.</p><p class=\"mb-4\">Jangan trim teks yang membungkus lebih dari dua baris sebelum dicek. Trim memotong leading di tepi, dan baris tengah tetap memakai line-height. Bandingkan dengan line-height tanpa unit yang sudah stabil.</p><p class=\"mb-4\">Browser yang belum mendukung abaikan properti ini. Biarkan padding biasa sebagai fallback, lalu tambahkan trim di aturan berikutnya.</p><p class=\"mb-4\">Uji zoom 200 persen di pratinjau app.clincoo.buzz. Judul tidak boleh terpotong glyph-nya, hanya ruang kosong di atas cap yang berkurang.</p>",
   "source": "MDN — text-box-trim",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-box-trim",
   "sourceSnippet": "text-box-trim trims the leading of the text box.",
   "source2": "MDN — text-box-edge",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-box-edge",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Trim Half-Leading with text-box-trim",
   "desc": "How to use text-box-trim so the space above Clincoo text follows the cap height, not the font half-leading.",
   "content": "<p class=\"mb-4\">Odd space above a heading is often not margin. It is half-leading that comes with the font. Cards in editor.clincoo.buzz then look uneven next to an icon.</p><p class=\"mb-4\">On a single-line heading, try text-box-trim: trim-both and text-box-edge: cap alphabetic. The top edge approaches the capital height and the bottom edge approaches the baseline, so align-items: baseline is easier to predict.</p><p class=\"mb-4\">Do not trim text that wraps past two lines before you check it. Trim cuts leading at the edges, and the middle lines still use line-height. Compare with the unitless line-height that is already stable.</p><p class=\"mb-4\">Browsers that do not support the property ignore it. Keep ordinary padding as the fallback, then add trim in a later rule.</p><p class=\"mb-4\">Test 200 percent zoom in the app.clincoo.buzz preview. The heading glyphs must not be clipped. Only the empty space above the cap should shrink.</p>",
   "source": "MDN — text-box-trim",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-box-trim",
   "sourceSnippet": "text-box-trim trims the leading of the text box.",
   "source2": "MDN — text-box-edge",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-box-edge",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "baseline-ascent-override-font-fallback",
 "langs": {
  "id": {
   "title": "Cara Jaga Baseline saat Font Fallback dengan ascent-override",
   "desc": "Tata cara menimpa metrik font fallback supaya baseline Clincoo tidak meloncat sebelum font utama selesai dimuat.",
   "content": "<p class=\"mb-4\">Saat font utama belum tiba, browser memakai fallback. Metrik ascent yang berbeda menggeser garis dasar, lalu teks turun lagi setelah font asli masuk.</p><p class=\"mb-4\">Di @font-face fallback pada editor.clincoo.buzz, set ascent-override, descent-override, dan line-gap-override agar mendekati font utama. size-adjust boleh dipakai jika lebar rata-rata masih jauh.</p><p class=\"mb-4\">Jangan menyalin angka dari artikel lain tanpa mengukur. Buka panel Computed, bandingkan tinggi baris sebelum dan sesudah font swap, lalu sesuaikan override sampai lompatannya kecil.</p><p class=\"mb-4\">Override hanya menipu metrik untuk layout. Bentuk huruf tetap milik fallback. Jangan mengandalkan ini untuk menyembunyikan font yang gagal dimuat.</p><p class=\"mb-4\">Cek di app.clincoo.buzz dengan jaringan lambat. Label tombol dan ikon di sampingnya harus tetap satu garis dasar saat font berganti.</p>",
   "source": "MDN — ascent-override",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/ascent-override",
   "sourceSnippet": "The ascent-override descriptor defines the ascent metric for the font.",
   "source2": "MDN — size-adjust",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/size-adjust",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Keep the Baseline When a Fallback Font Loads",
   "desc": "How to override fallback font metrics so the Clincoo baseline does not jump before the primary font finishes loading.",
   "content": "<p class=\"mb-4\">Before the primary font arrives, the browser uses a fallback. A different ascent metric shifts the baseline, then the text drops again after the real font loads.</p><p class=\"mb-4\">On the fallback @font-face in editor.clincoo.buzz, set ascent-override, descent-override, and line-gap-override so they approach the primary font. size-adjust is fine if the average width is still far off.</p><p class=\"mb-4\">Do not copy numbers from another article without measuring. Open the Computed panel, compare line height before and after the font swap, and tune the override until the jump is small.</p><p class=\"mb-4\">Overrides only fake metrics for layout. The glyphs still belong to the fallback. Do not use this to hide a font that failed to load.</p><p class=\"mb-4\">Check app.clincoo.buzz on a slow network. A button label and the icon beside it should keep one baseline while the font swaps.</p>",
   "source": "MDN — ascent-override",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/ascent-override",
   "sourceSnippet": "The ascent-override descriptor defines the ascent metric for the font.",
   "source2": "MDN — size-adjust",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/size-adjust",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "baseline-vertical-align-pada-inline",
 "langs": {
  "id": {
   "title": "Cara Pakai vertical-align pada Teks Inline, Bukan Flex",
   "desc": "Tata cara memilih vertical-align: baseline untuk ikon inline di Clincoo, dan kapan harus pindah ke flex.",
   "content": "<p class=\"mb-4\">vertical-align hanya berlaku pada inline, inline-block, dan sel tabel. Pada flex item, properti itu diabaikan, sehingga developer mengira baseline rusak.</p><p class=\"mb-4\">Jika ikon dan teks satu alur inline di editor.clincoo.buzz, set vertical-align: baseline pada ikon. Beri ikon tinggi yang dekat dengan 1cap agar tidak mendorong line box.</p><p class=\"mb-4\">Jika baris itu flex, berhenti memakai vertical-align. Pakai align-items: baseline. Mencampur keduanya hanya menambah aturan mati di stylesheet.</p><p class=\"mb-4\">Jangan set vertical-align: middle lalu mengompensasi dengan margin. middle meratakan tengah kotak, bukan garis dasar, dan pecah saat font membesar.</p><p class=\"mb-4\">Uji sebuah kalimat dengan ikon di tengah kata, lalu baris aksi yang flex. Keduanya harus sejajar, tetapi dengan properti yang memang berlaku.</p>",
   "source": "MDN — vertical-align",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align",
   "sourceSnippet": "The vertical-align property sets vertical alignment of an inline or table-cell box.",
   "source2": "MDN — align-items",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use vertical-align on Inline Text, Not Flex",
   "desc": "How to choose vertical-align: baseline for inline Clincoo icons, and when to switch to flex.",
   "content": "<p class=\"mb-4\">vertical-align applies only to inline, inline-block, and table cells. On a flex item it is ignored, so the baseline looks broken.</p><p class=\"mb-4\">If an icon and text share one inline flow in editor.clincoo.buzz, set vertical-align: baseline on the icon. Size the icon near 1cap so it does not grow the line box.</p><p class=\"mb-4\">If that row is flex, stop using vertical-align. Use align-items: baseline. Mixing both only adds a dead rule to the stylesheet.</p><p class=\"mb-4\">Do not set vertical-align: middle and compensate with margin. middle aligns the middle of the box, not the baseline, and it breaks when the font grows.</p><p class=\"mb-4\">Test a sentence with an icon in the middle of a word, then a flex action row. Both should align, but with the property that actually applies.</p>",
   "source": "MDN — vertical-align",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align",
   "sourceSnippet": "The vertical-align property sets vertical alignment of an inline or table-cell box.",
   "source2": "MDN — align-items",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "baseline-strut-untuk-ikon-inline",
 "langs": {
  "id": {
   "title": "Cara Pakai Strut agar Ikon Inline Punya Baseline",
   "desc": "Tata cara menambah strut teks kosong supaya ikon tanpa glyph di komponen Clincoo tetap punya garis dasar.",
   "content": "<p class=\"mb-4\">Ikon polos tidak punya baseline. Flex lalu meratakannya ke tengah, dan baris aksi di blog.clincoo.buzz terlihat tidak sejajar dengan label.</p><p class=\"mb-4\">Sisipkan strut: span dengan satu karakter tak terlihat, font-size sama dengan teks, dan line-height sama. Sembunyikan secara visual, tetapi biarkan ia ikut layout. align-items: baseline kini punya garis dasar untuk diikuti.</p><p class=\"mb-4\">Jangan memakai strut dengan tinggi px tetap. Saat pengguna memperbesar teks di app.clincoo.buzz, strut harus ikut font, bukan kotak ikon.</p><p class=\"mb-4\">Beri strut aria-hidden=\"true\" agar pembaca layar tidak mengumumkan karakter kosong. Label yang terlihat tetap di elemen teks.</p><p class=\"mb-4\">Hapus strut jika ikon sudah diganti teks. Strut sisa hanya menambah kotak misterius saat debugging.</p>",
   "source": "MDN — align-items",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
   "sourceSnippet": "Baseline alignment uses the baseline of flex items that have one.",
   "source2": "MDN — aria-hidden",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use a Strut so an Inline Icon Has a Baseline",
   "desc": "How to add an invisible text strut so an icon without glyphs in a Clincoo component still has a baseline.",
   "content": "<p class=\"mb-4\">A plain icon has no baseline. Flex then centers it, and the action row on blog.clincoo.buzz looks out of line with the label.</p><p class=\"mb-4\">Insert a strut: a span with one invisible character, the same font-size as the text, and the same line-height. Hide it visually, but leave it in layout. align-items: baseline now has a baseline to follow.</p><p class=\"mb-4\">Do not give the strut a fixed px height. When a user enlarges text on app.clincoo.buzz, the strut should follow the font, not the icon box.</p><p class=\"mb-4\">Set aria-hidden=\"true\" on the strut so a screen reader does not announce an empty character. The visible label stays on the text element.</p><p class=\"mb-4\">Remove the strut if the icon is later replaced by text. A leftover strut only adds a mystery box while debugging.</p>",
   "source": "MDN — align-items",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
   "sourceSnippet": "Baseline alignment uses the baseline of flex items that have one.",
   "source2": "MDN — aria-hidden",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "baseline-debug-lompatan-saat-font-ganti",
 "langs": {
  "id": {
   "title": "Cara Debug Baseline yang Meloncat saat Font Berganti",
   "desc": "Tata cara melacak lompatan garis dasar di Clincoo dari panel Computed, bukan dari tebakan margin.",
   "content": "<p class=\"mb-4\">Baseline yang meloncat setelah muat biasanya font swap, bukan margin yang berubah. Catat waktu lompatan di panel Performance, lalu lihat font mana yang selesai.</p><p class=\"mb-4\">Di DevTools, pilih label yang bergerak. Bandingkan font-family, line-height, dan ascent sebelum dan sesudah swap. Jika hanya font-family yang berubah, perbaiki fallback, jangan tambah margin.</p><p class=\"mb-4\">Bekukan jaringan di pratinjau editor.clincoo.buzz dan muat ulang. Screenshot baris aksi sebelum font tiba dan sesudahnya. Selisih vertikal adalah metrik, bukan flex yang rusak.</p><p class=\"mb-4\">Cek juga font-display. swap menampilkan fallback dulu lalu mengganti. optional mengurangi lompatan, tetapi font utama bisa tidak terpakai pada kunjungan pertama.</p><p class=\"mb-4\">Ulangi pada teks Indonesia dan Inggris. Glyph beraksen tidak boleh terpotong setelah override metrik dipasang.</p>",
   "source": "MDN — font-display",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display",
   "sourceSnippet": "The font-display descriptor determines how a font face is displayed based on download time.",
   "source2": "web.dev — font best practices",
   "source2Url": "https://web.dev/articles/font-best-practices",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug a Baseline that Jumps When the Font Swaps",
   "desc": "How to trace a jumping Clincoo baseline from the Computed panel instead of guessing at margin.",
   "content": "<p class=\"mb-4\">A baseline that jumps after load is usually a font swap, not a margin that changed. Note the jump time in the Performance panel, then see which font finished.</p><p class=\"mb-4\">In DevTools, select the label that moved. Compare font-family, line-height, and ascent before and after the swap. If only font-family changed, fix the fallback. Do not add margin.</p><p class=\"mb-4\">Throttle the network in the editor.clincoo.buzz preview and reload. Screenshot the action row before the font arrives and after. The vertical gap is metrics, not a broken flex rule.</p><p class=\"mb-4\">Also check font-display. swap shows the fallback first, then replaces it. optional reduces the jump, but the primary font may not be used on the first visit.</p><p class=\"mb-4\">Repeat with Indonesian and English copy. Accented glyphs must not be clipped after metric overrides are added.</p>",
   "source": "MDN — font-display",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display",
   "sourceSnippet": "The font-display descriptor determines how a font face is displayed based on download time.",
   "source2": "web.dev — font best practices",
   "source2Url": "https://web.dev/articles/font-best-practices",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
];
  extra.forEach(function (item) {
    var exists = list.some(function (a) { return a.id === item.id; });
    if (!exists) list.push(item);
  });
})();
