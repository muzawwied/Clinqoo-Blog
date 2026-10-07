// Clincoo Docs — kategori Baseline (8 Oktober 2026, 03:00 WIB) — 7 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["baseline"] = {
 "names": { "id": "Baseline", "en": "Baseline" },
 "articles": [
{
 "id": "baseline-selaraskan-teks-ikon",
 "langs": {
  "id": {
   "title": "Cara Selaraskan Teks dan Ikon dengan Baseline",
   "desc": "Tata cara memakai align-items: baseline agar label dan ikon di komponen Clincoo tidak tampak menggantung.",
   "content": "<p class=\"mb-4\">Ikon SVG dan teks sering tidak sejajar karena flex default memakai stretch atau center pada kotak, bukan pada garis dasar huruf.</p><p class=\"mb-4\">Pada baris aksi di editor.clincoo.buzz, set align-items: baseline di flex container. Beri ikon properti yang menempel ke baseline, misalnya align-self: baseline, lalu atur tinggi ikon agar tidak mengubah line box.</p><p class=\"mb-4\">Jika ikon tetap naik, bungkus teks dalam span. Baseline flex mengikuti peserta yang punya baseline. Elemen tanpa teks, seperti tombol ikon polos, tidak punya garis dasar yang bisa diikuti.</p><p class=\"mb-4\">Jangan pakai position relative dan top negatif untuk menggeser ikon. Itu rapuh saat ukuran font berubah di pratinjau mobile app.clincoo.buzz.</p><p class=\"mb-4\">Cek pada dua bahasa. Teks Indonesia dan Inggris punya panjang berbeda, tetapi garis dasarnya harus tetap satu. Itu tanda align-items bekerja, bukan kebetulan margin.</p>",
   "source": "MDN — align-items",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
   "sourceSnippet": "baseline aligns the flex items along their baselines.",
   "source2": "MDN — vertical-align",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Align Text and Icons to the Baseline",
   "desc": "How to use align-items: baseline so labels and icons in a Clincoo component do not look like they are hanging.",
   "content": "<p class=\"mb-4\">SVG icons and text often misalign because flex defaults to stretch or center on the box, not on the letter baseline.</p><p class=\"mb-4\">On an action row in editor.clincoo.buzz, set align-items: baseline on the flex container. Give the icon a property that sticks to the baseline, such as align-self: baseline, and size the icon so it does not change the line box.</p><p class=\"mb-4\">If the icon still sits high, wrap the text in a span. Flex baseline follows a participant that has a baseline. An element with no text, such as an icon-only button, has no baseline to follow.</p><p class=\"mb-4\">Do not nudge the icon with position relative and a negative top. That breaks when the font size changes in the app.clincoo.buzz mobile preview.</p><p class=\"mb-4\">Check both languages. Indonesian and English copy have different lengths, but the baseline should stay shared. That shows align-items is working, not a lucky margin.</p>",
   "source": "MDN — align-items",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
   "sourceSnippet": "baseline aligns the flex items along their baselines.",
   "source2": "MDN — vertical-align",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "baseline-line-height-unitless",
 "langs": {
  "id": {
   "title": "Cara Pakai line-height Tanpa Unit agar Baseline Stabil",
   "desc": "Tata cara memilih line-height tanpa unit supaya judul dan isi di situs Clincoo tidak saling mendorong.",
   "content": "<p class=\"mb-4\">line-height dengan satuan px tidak ikut saat font membesar. Akibatnya judul rapat, atau jarak baseline antarbaris berubah di setiap breakpoint.</p><p class=\"mb-4\">Pakai angka tanpa unit, misalnya 1.5 pada teks isi dan 1.2 pada judul. Nilai itu dikalikan ukuran font elemen, termasuk font yang diwariskan ke komponen.</p><p class=\"mb-4\">Hindari line-height pada body yang terlalu longgar jika kartu memakai baseline flex. Ruang ekstra mengubah garis dasar dan membuat ikon tampak turun.</p><p class=\"mb-4\">Di pratinjau editor.clincoo.buzz, ubah ukuran font root lalu lihat apakah ritme vertikal tetap. Jika hanya judul yang pecah, line-height judul masih memakai px.</p><p class=\"mb-4\">Untuk teks satu baris di tombol, line-height boleh mendekati 1, tetapi jangan mengunci tinggi tombol lebih kecil dari ukuran font ditambah padding. Itu memotong glyph beraksen.</p>",
   "source": "MDN — line-height",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/line-height",
   "sourceSnippet": "A unitless line-height is multiplied by the element's font size.",
   "source2": "CSS Tricks — line-height",
   "source2Url": "https://css-tricks.com/almanac/properties/l/line-height/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use a Unitless line-height so the Baseline Stays Stable",
   "desc": "How to choose a unitless line-height so headings and body copy on a Clincoo site do not shove each other.",
   "content": "<p class=\"mb-4\">A line-height in px does not scale when the font grows. Headings then feel tight, or the baseline rhythm changes at every breakpoint.</p><p class=\"mb-4\">Use a unitless number, such as 1.5 for body text and 1.2 for headings. That value multiplies the element's font size, including fonts inherited by a component.</p><p class=\"mb-4\">Avoid a very loose line-height on body if cards use flex baseline. The extra space shifts the baseline and makes icons look low.</p><p class=\"mb-4\">In the editor.clincoo.buzz preview, change the root font size and see whether the vertical rhythm holds. If only the heading breaks, its line-height is still in px.</p><p class=\"mb-4\">For single-line button text, line-height may sit near 1, but do not lock the button height smaller than the font size plus padding. That clips accented glyphs.</p>",
   "source": "MDN — line-height",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/line-height",
   "sourceSnippet": "A unitless line-height is multiplied by the element's font size.",
   "source2": "CSS Tricks — line-height",
   "source2Url": "https://css-tricks.com/almanac/properties/l/line-height/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ,
{
 "id": "baseline-selaraskan-input-dan-tombol",
 "langs": {
  "id": {
   "title": "Cara Selaraskan Baseline Input dan Tombol",
   "desc": "Tata cara menyelaraskan garis dasar teks input dan tombol di form Clincoo tanpa menggeser dengan margin negatif.",
   "content": "<p class=\"mb-4\">Input dan tombol sering terlihat tidak sejajar karena tinggi kotak, padding, dan font berbeda, bukan karena garis dasar hurufnya salah.</p><p class=\"mb-4\">Pada baris form di editor.clincoo.buzz, bungkus input dan tombol dalam flex container lalu set align-items: baseline. Samakan font-size dan line-height keduanya. Padding vertikal yang tidak simetris menggeser teks di dalam kotak, jadi samakan padding-top dan padding-bottom.</p><p class=\"mb-4\">Jika tombol hanya berisi ikon, bungkus label teks dalam span agar flex punya baseline yang bisa diikuti. Tanpa teks, align-items: baseline jatuh kembali ke perilaku center.</p><p class=\"mb-4\">Jangan pakai margin-top negatif untuk menurunkan tombol. Saat bahasa berganti di app.clincoo.buzz, panjang label berubah dan margin itu tidak ikut.</p><p class=\"mb-4\">Cek di pratinjau mobile. Placeholder dan nilai terisi harus duduk di garis yang sama dengan label tombol.</p>",
   "source": "MDN — align-items",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
   "sourceSnippet": "The baseline alignment keyword aligns flex items by their baselines.",
   "source2": "MDN — line-height",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/line-height",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Align Input and Button Baselines",
   "desc": "How to align the text baseline of an input and a button in a Clincoo form without negative margins.",
   "content": "<p class=\"mb-4\">Inputs and buttons often look misaligned because their box height, padding, and font differ, not because the letter baseline itself is wrong.</p><p class=\"mb-4\">On a form row in editor.clincoo.buzz, wrap the input and button in a flex container and set align-items: baseline. Match font-size and line-height on both. Uneven vertical padding shifts the text inside the box, so match padding-top and padding-bottom.</p><p class=\"mb-4\">If the button is icon-only, wrap a text label in a span so flex has a baseline to follow. Without text, align-items: baseline falls back toward center.</p><p class=\"mb-4\">Do not use a negative margin-top to drop the button. When the language switches on app.clincoo.buzz, the label length changes and that margin does not follow.</p><p class=\"mb-4\">Check the mobile preview. The placeholder and the filled value should sit on the same line as the button label.</p>",
   "source": "MDN — align-items",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
   "sourceSnippet": "The baseline alignment keyword aligns flex items by their baselines.",
   "source2": "MDN — line-height",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/line-height",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "baseline-last-baseline-baris-pembungkus",
 "langs": {
  "id": {
   "title": "Cara Pakai last baseline saat Teks Membungkus",
   "desc": "Tata cara memakai align-items: last baseline agar ikon tetap menempel pada baris terakhir label yang membungkus.",
   "content": "<p class=\"mb-4\">align-items: baseline menempel pada baris pertama. Saat label Clincoo membungkus di layar sempit, ikon ikut baris atas dan terlihat menggantung di samping blok teks.</p><p class=\"mb-4\">Ganti ke align-items: last baseline pada flex row di editor.clincoo.buzz jika ikon harus duduk di baris terakhir. first baseline tetap berguna bila ikon harus sejajar dengan judul satu baris di atas deskripsi.</p><p class=\"mb-4\">Uji dengan teks Indonesia yang lebih panjang dan teks Inggris yang lebih pendek. Pembungkus hanya terjadi pada salah satu bahasa, jadi cek keduanya di blog.clincoo.buzz maupun pratinjau.</p><p class=\"mb-4\">Jangan pakai align-items: flex-end sebagai pengganti. flex-end menyelaraskan tepi kotak, bukan garis dasar huruf, sehingga teks dengan line-height besar tetap terlihat turun.</p><p class=\"mb-4\">Jika browser target belum mendukung last baseline, sediakan fallback baseline lalu timpa di dukung query atau di lapisan CSS yang lebih baru.</p>",
   "source": "MDN — align-items",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
   "sourceSnippet": "last baseline aligns items by the baseline of the last line.",
   "source2": "MDN — Flexbox",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use last baseline When Text Wraps",
   "desc": "How to use align-items: last baseline so an icon stays attached to the last line of a wrapping label.",
   "content": "<p class=\"mb-4\">align-items: baseline attaches to the first line. When a Clincoo label wraps on a narrow screen, the icon stays on the top line and looks like it is hanging beside the text block.</p><p class=\"mb-4\">Switch to align-items: last baseline on the flex row in editor.clincoo.buzz when the icon should sit on the last line. first baseline is still right when the icon should match a one-line title above a description.</p><p class=\"mb-4\">Test with longer Indonesian copy and shorter English copy. Wrapping may happen in only one language, so check both in the preview and on blog.clincoo.buzz.</p><p class=\"mb-4\">Do not substitute align-items: flex-end. flex-end aligns the box edge, not the letter baseline, so text with a large line-height still looks low.</p><p class=\"mb-4\">If a target browser does not support last baseline yet, keep baseline as the fallback and override it where the newer value is supported.</p>",
   "source": "MDN — align-items",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
   "sourceSnippet": "last baseline aligns items by the baseline of the last line.",
   "source2": "MDN — Flexbox",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "baseline-grid-align-items",
 "langs": {
  "id": {
   "title": "Cara Sejajarkan Baseline di CSS Grid",
   "desc": "Tata cara memakai align-items: baseline pada grid agar label dan nilai di kartu Clincoo satu garis dasar.",
   "content": "<p class=\"mb-4\">Grid di kartu pengaturan Clincoo sering meratakan item ke stretch. Label kiri dan nilai kanan lalu duduk di tengah sel, bukan pada garis dasar yang sama.</p><p class=\"mb-4\">Pada grid dua kolom di editor.clincoo.buzz, set align-items: baseline. Pastikan tiap sel berisi teks langsung atau span yang punya baseline. Sel yang hanya berisi div kosong tidak punya garis dasar.</p><p class=\"mb-4\">Jika satu baris punya judul dan subteks, bungkus keduanya lalu pilih first baseline atau last baseline sesuai baris yang harus sejajar dengan kolom sebelah.</p><p class=\"mb-4\">Jangan mengandalkan margin-top pada nilai untuk meniru baseline. Tinggi font di app.clincoo.buzz bisa berubah lewat preferensi, dan margin tetap.</p><p class=\"mb-4\">Periksa baris dengan angka, teks campuran, dan keadaan kosong. Baseline harus tetap satu saat isi berganti.</p>",
   "source": "MDN — Box alignment in grid",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout",
   "sourceSnippet": "Baseline alignment can be used in grid layout as well as flexbox.",
   "source2": "MDN — align-items",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Align Baselines in CSS Grid",
   "desc": "How to use align-items: baseline on a grid so labels and values in a Clincoo card share one baseline.",
   "content": "<p class=\"mb-4\">Grids on Clincoo settings cards often stretch items. The left label and the right value then sit in the middle of the cell instead of on the same baseline.</p><p class=\"mb-4\">On a two-column grid in editor.clincoo.buzz, set align-items: baseline. Make sure each cell contains text directly, or a span that has a baseline. A cell that only holds an empty div has no baseline.</p><p class=\"mb-4\">If one row has a title and a subtitle, wrap them and choose first baseline or last baseline depending on which line should match the other column.</p><p class=\"mb-4\">Do not rely on margin-top on the value to fake a baseline. Font size on app.clincoo.buzz can change with preferences, and the margin stays fixed.</p><p class=\"mb-4\">Check rows with numbers, mixed text, and an empty state. The baseline should stay shared when the content changes.</p>",
   "source": "MDN — Box alignment in grid",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout",
   "sourceSnippet": "Baseline alignment can be used in grid layout as well as flexbox.",
   "source2": "MDN — align-items",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "baseline-dominant-baseline-svg",
 "langs": {
  "id": {
   "title": "Cara Atur dominant-baseline pada Teks SVG",
   "desc": "Tata cara menempelkan teks SVG ke garis dasar ikon Clincoo dengan dominant-baseline, bukan dy kira-kira.",
   "content": "<p class=\"mb-4\">Teks di dalam SVG tidak mengikuti align-items flex. Posisinya ditentukan atribut y dan dominant-baseline, sehingga angka badge sering melayang dari ikon di sampingnya.</p><p class=\"mb-4\">Pada ikon status di editor.clincoo.buzz, set dominant-baseline=\"central\" hanya jika teks harus di tengah lingkaran. Untuk menyelaraskan dengan label HTML di sebelahnya, pakai dominant-baseline=\"alphabetic\" lalu samakan y dengan baseline baris.</p><p class=\"mb-4\">Hindari dy negatif yang disalin dari desain. dy bergeser saat font-size berubah di pratinjau app.clincoo.buzz.</p><p class=\"mb-4\">Jika teks SVG dan label HTML harus satu garis, lebih aman keluarkan label dari SVG dan sejajarkan dengan flex baseline. Biarkan SVG hanya berisi bentuk.</p><p class=\"mb-4\">Bandingkan glyph Indonesia dan Inggris. Huruf berdescender seperti g dan y tidak boleh mendorong seluruh baris.</p>",
   "source": "MDN — dominant-baseline",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/dominant-baseline",
   "sourceSnippet": "dominant-baseline specifies the dominant baseline used to align the text.",
   "source2": "MDN — SVG text",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch/Texts",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set dominant-baseline on SVG Text",
   "desc": "How to attach SVG text to a Clincoo icon baseline with dominant-baseline instead of a guessed dy.",
   "content": "<p class=\"mb-4\">Text inside SVG does not follow flex align-items. Its position comes from the y attribute and dominant-baseline, so badge numbers often float away from the icon beside them.</p><p class=\"mb-4\">On a status icon in editor.clincoo.buzz, set dominant-baseline=\"central\" only when the text must sit in the middle of a circle. To match an HTML label beside it, use dominant-baseline=\"alphabetic\" and align y with the line baseline.</p><p class=\"mb-4\">Avoid a negative dy copied from a design. dy drifts when font-size changes in the app.clincoo.buzz preview.</p><p class=\"mb-4\">If SVG text and an HTML label must share one line, it is safer to move the label out of the SVG and align it with flex baseline. Leave the SVG as shapes only.</p><p class=\"mb-4\">Compare Indonesian and English glyphs. Descenders such as g and y must not push the whole row.</p>",
   "source": "MDN — dominant-baseline",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/dominant-baseline",
   "sourceSnippet": "dominant-baseline specifies the dominant baseline used to align the text.",
   "source2": "MDN — SVG text",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch/Texts",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "baseline-unit-lh-dan-cap",
 "langs": {
  "id": {
   "title": "Cara Pakai Unit lh dan cap untuk Baseline",
   "desc": "Tata cara memakai unit CSS lh dan cap agar jarak ikon Clincoo mengikuti garis dasar, bukan tinggi kotak font.",
   "content": "<p class=\"mb-4\">Margin dalam px tidak mengikuti ukuran font. Saat pengguna memperbesar teks di app.clincoo.buzz, ikon tetap di tempat lama dan baseline-nya pecah.</p><p class=\"mb-4\">Pakai unit lh untuk jarak yang harus sejalan dengan line box, misalnya gap: 0.25lh pada baris aksi. Pakai cap untuk tinggi ikon yang harus mendekati tinggi huruf kapital, misalnya height: 1cap, lalu align-items: baseline.</p><p class=\"mb-4\">Jangan mengganti seluruh layout ke unit baru sekaligus. Terapkan dulu pada satu komponen di editor.clincoo.buzz, bandingkan dengan line-height tanpa unit yang sudah stabil.</p><p class=\"mb-4\">Browser lama mungkin mengabaikan lh dan cap. Sediakan fallback px atau em sebelum deklarasi unit baru.</p><p class=\"mb-4\">Cek zoom 200 persen. Ikon dan label harus tetap satu garis dasar, bukan hanya muat di kotak.</p>",
   "source": "MDN — cap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/cap",
   "sourceSnippet": "The cap unit is equal to the used cap height of the first available font.",
   "source2": "MDN — lh",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/lh",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use the lh and cap Units for Baseline",
   "desc": "How to use the CSS lh and cap units so Clincoo icon spacing follows the baseline instead of the font box.",
   "content": "<p class=\"mb-4\">A margin in px does not follow font size. When a user enlarges text on app.clincoo.buzz, the icon stays put and the baseline breaks.</p><p class=\"mb-4\">Use the lh unit for spacing that should track the line box, for example gap: 0.25lh on an action row. Use cap for an icon height that should approach the capital-letter height, for example height: 1cap, then align-items: baseline.</p><p class=\"mb-4\">Do not convert the whole layout to the new units at once. Apply them first on one component in editor.clincoo.buzz and compare with the unitless line-height that is already stable.</p><p class=\"mb-4\">Older browsers may ignore lh and cap. Provide a px or em fallback before the newer unit declaration.</p><p class=\"mb-4\">Check 200 percent zoom. The icon and label should still share a baseline, not merely fit inside the box.</p>",
   "source": "MDN — cap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/cap",
   "sourceSnippet": "The cap unit is equal to the used cap height of the first available font.",
   "source2": "MDN — lh",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/lh",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
