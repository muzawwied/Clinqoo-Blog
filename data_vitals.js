// Clincoo Docs — kategori Vitals (11 Oktober 2026, 04:00 WIB — tambah 5 artikel)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["vitals"] = {
 "names": { "id": "Vitals", "en": "Vitals" },
 "articles": [
 {
  "id": "vitals-ukur-ttfb-dengan-network-tab",
  "langs": {
   "id": {
    "title": "Cara Ukur TTFB dengan Network Tab di DevTools",
    "desc": "Tata cara melihat Time to First Byte di Clincoo untuk menemukan bottleneck server.",
    "content": "<p class=\"mb-4\">TTFB tinggi membuat halaman Clincoo terasa lambat meski aset sudah dioptimasi.</p>",
    "source": "web.dev — TTFB",
    "sourceUrl": "https://web.dev/articles/ttfb",
    "sourceSnippet": "Time to First Byte measures how long the browser waits for the first byte of the response.",
    "source2": "Chrome DevTools — Network",
    "source2Url": "https://developer.chrome.com/docs/devtools/network",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   },
   "en": {
    "title": "How to Measure TTFB with Network Tab in DevTools",
    "desc": "How-to see Time to First Byte in Clincoo to find server bottlenecks.",
    "content": "<p class=\"mb-4\">High TTFB makes Clincoo pages feel slow even after asset optimization.</p>",
    "source": "web.dev — TTFB",
    "sourceUrl": "https://web.dev/articles/ttfb",
    "sourceSnippet": "Time to First Byte measures how long the browser waits for the first byte of the response.",
    "source2": "Chrome DevTools — Network",
    "source2Url": "https://developer.chrome.com/docs/devtools/network",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 },
 {
  "id": "vitals-optimasi-font-loading-untuk-lcp",
  "langs": {
   "id": {
    "title": "Cara Optimasi Font Loading agar LCP Lebih Cepat",
    "desc": "Tata cara memakai font-display dan preload agar teks di Clincoo tidak menunda Largest Contentful Paint.",
    "content": "<p class=\"mb-4\">Font yang lambat dimuat sering menjadi LCP di halaman Clincoo, terutama jika teks hero besar.</p><p class=\"mb-4\">Pakai font-display: swap pada @font-face agar teks tampil segera dengan fallback, lalu ganti font. Preload font utama di head dengan rel=preload as=font type=font/woff2 crossorigin.</p><p class=\"mb-4\">Di editor.clincoo.buzz, cek apakah font web di-host sendiri atau dari CDN. Host sendiri lebih cepat untuk LCP.</p><p class=\"mb-4\">Hindari terlalu banyak font family. Batasi maksimal dua agar tidak menambah request yang menunda paint.</p><p class=\"mb-4\">Ukur ulang LCP setelah perubahan di DevTools Performance. Teks harus muncul lebih cepat di app.clincoo.buzz.</p>",
    "source": "web.dev — Optimize fonts",
    "sourceUrl": "https://web.dev/articles/optimize-fonts",
    "sourceSnippet": "Use font-display: swap to ensure text is visible immediately.",
    "source2": "MDN — font-display",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display",
    "source3": "Clincoo Blog",
    "source3Url": "https://blog.clincoo.buzz/"
   },
   "en": {
    "title": "How to Optimize Font Loading for Faster LCP",
    "desc": "How to use font-display and preload so text on Clincoo does not delay Largest Contentful Paint.",
    "content": "<p class=\"mb-4\">Slow-loading fonts often become the LCP on Clincoo pages, especially large hero text.</p><p class=\"mb-4\">Use font-display: swap on @font-face so text shows immediately with a fallback, then swaps. Preload the main font in the head with rel=preload as=font type=font/woff2 crossorigin.</p><p class=\"mb-4\">In editor.clincoo.buzz, check if web fonts are self-hosted or from a CDN. Self-hosting is usually faster for LCP.</p><p class=\"mb-4\">Avoid too many font families. Limit to two at most so extra requests do not delay paint.</p><p class=\"mb-4\">Re-measure LCP after the change in DevTools Performance. Text should appear sooner on app.clincoo.buzz.</p>",
    "source": "web.dev — Optimize fonts",
    "sourceUrl": "https://web.dev/articles/optimize-fonts",
    "sourceSnippet": "Use font-display: swap to ensure text is visible immediately.",
    "source2": "MDN — font-display",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 },
 {
  "id": "vitals-hindari-layout-shift-dari-gambar",
  "langs": {
   "id": {
    "title": "Cara Hindari Layout Shift dari Gambar yang Dimuat Lambat",
    "desc": "Tata cara set width height dan aspect-ratio agar gambar di Clincoo tidak menyebabkan CLS.",
    "content": "<p class=\"mb-4\">Gambar tanpa ukuran tetap sering mendorong konten di bawahnya saat dimuat, membuat CLS tinggi di Clincoo.</p><p class=\"mb-4\">Selalu set atribut width dan height pada img, atau CSS aspect-ratio. Browser bisa reservasi ruang sebelum gambar selesai.</p><p class=\"mb-4\">Untuk gambar responsif di editor.clincoo.buzz, pakai srcset dan sizes, tetapi tetap berikan ukuran intrinsik.</p><p class=\"mb-4\">Lazy load hanya untuk gambar di bawah fold. Gambar LCP jangan di-lazy.</p><p class=\"mb-4\">Cek CLS di Lighthouse atau DevTools. Nilai harus di bawah 0.1 setelah optimasi.</p>",
    "source": "web.dev — Optimize CLS",
    "sourceUrl": "https://web.dev/articles/optimize-cls",
    "sourceSnippet": "Always include width and height attributes on images.",
    "source2": "MDN — aspect-ratio",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
    "source3": "Clincoo Blog",
    "source3Url": "https://blog.clincoo.buzz/"
   },
   "en": {
    "title": "How to Avoid Layout Shift from Slow-Loading Images",
    "desc": "How to set width, height, and aspect-ratio so images on Clincoo do not cause CLS.",
    "content": "<p class=\"mb-4\">Images without reserved size often push content below them when they load, raising CLS on Clincoo.</p><p class=\"mb-4\">Always set width and height attributes on img, or use CSS aspect-ratio. The browser can reserve space before the image finishes.</p><p class=\"mb-4\">For responsive images in editor.clincoo.buzz, use srcset and sizes, but still provide intrinsic dimensions.</p><p class=\"mb-4\">Lazy-load only images below the fold. Never lazy-load the LCP image.</p><p class=\"mb-4\">Check CLS in Lighthouse or DevTools. The score should stay under 0.1 after optimization.</p>",
    "source": "web.dev — Optimize CLS",
    "sourceUrl": "https://web.dev/articles/optimize-cls",
    "sourceSnippet": "Always include width and height attributes on images.",
    "source2": "MDN — aspect-ratio",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 },
 {
  "id": "vitals-ukur-fcp-dengan-performance-panel",
  "langs": {
   "id": {
    "title": "Cara Ukur FCP dengan Performance Panel DevTools",
    "desc": "Tata cara menemukan First Contentful Paint di Clincoo untuk mendiagnosis render pertama.",
    "content": "<p class=\"mb-4\">FCP menunjukkan kapan konten pertama terlihat. Lambat berarti pengguna melihat layar putih lebih lama di Clincoo.</p><p class=\"mb-4\">Buka DevTools, panel Performance, rekam muat ulang halaman. Cari marker FCP di timeline.</p><p class=\"mb-4\">Catat waktu dan elemen apa yang menjadi first content. Di editor.clincoo.buzz sering kali teks atau logo.</p><p class=\"mb-4\">Bandingkan dengan throttle jaringan. Target FCP di bawah 1,8 detik pada 4G.</p><p class=\"mb-4\">Jika FCP tinggi, periksa CSS blocking atau font. Optimasi render-blocking resources.</p>",
    "source": "web.dev — FCP",
    "sourceUrl": "https://web.dev/articles/fcp",
    "sourceSnippet": "First Contentful Paint marks the first time the browser renders any content.",
    "source2": "Chrome DevTools — Performance",
    "source2Url": "https://developer.chrome.com/docs/devtools/performance",
    "source3": "Clincoo Blog",
    "source3Url": "https://blog.clincoo.buzz/"
   },
   "en": {
    "title": "How to Measure FCP with the Performance Panel in DevTools",
    "desc": "How to find First Contentful Paint on Clincoo to diagnose the first render.",
    "content": "<p class=\"mb-4\">FCP shows when the first content becomes visible. A slow FCP means users see a blank screen longer on Clincoo.</p><p class=\"mb-4\">Open DevTools, the Performance panel, and record a page reload. Look for the FCP marker on the timeline.</p><p class=\"mb-4\">Note the time and which element is the first content. On editor.clincoo.buzz it is often text or the logo.</p><p class=\"mb-4\">Compare under network throttling. Target FCP under 1.8 seconds on 4G.</p><p class=\"mb-4\">If FCP is high, check blocking CSS or fonts. Optimize render-blocking resources.</p>",
    "source": "web.dev — FCP",
    "sourceUrl": "https://web.dev/articles/fcp",
    "sourceSnippet": "First Contentful Paint marks the first time the browser renders any content.",
    "source2": "Chrome DevTools — Performance",
    "source2Url": "https://developer.chrome.com/docs/devtools/performance",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 },
 {
  "id": "vitals-gunakan-preload-untuk-kritis",
  "langs": {
   "id": {
    "title": "Cara Gunakan Preload untuk Resource Kritis agar Vitals Baik",
    "desc": "Tata cara preload CSS, font, dan gambar LCP di Clincoo tanpa membebani jaringan.",
    "content": "<p class=\"mb-4\">Preload memaksa browser mengambil resource penting lebih awal, memperbaiki LCP dan FCP di Clincoo.</p><p class=\"mb-4\">Di head, tambahkan link rel=preload untuk CSS kritis, font utama, dan gambar LCP. Gunakan as yang sesuai: style, font, image.</p><p class=\"mb-4\">Jangan preload terlalu banyak. Hanya yang benar-benar kritis, jika tidak justru memperlambat.</p><p class=\"mb-4\">Di app.clincoo.buzz, uji dengan Network tab apakah preload berjalan sebelum parse CSS.</p><p class=\"mb-4\">Kombinasikan dengan fetchpriority=high pada gambar LCP untuk prioritas lebih.</p>",
    "source": "web.dev — Preload",
    "sourceUrl": "https://web.dev/articles/preload-critical-assets",
    "sourceSnippet": "Preload critical resources to improve loading performance.",
    "source2": "MDN — rel=preload",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload",
    "source3": "Clincoo Blog",
    "source3Url": "https://blog.clincoo.buzz/"
   },
   "en": {
    "title": "How to Use Preload for Critical Resources to Improve Vitals",
    "desc": "How to preload CSS, fonts, and the LCP image on Clincoo without overloading the network.",
    "content": "<p class=\"mb-4\">Preload forces the browser to fetch important resources earlier, improving LCP and FCP on Clincoo.</p><p class=\"mb-4\">In the head, add link rel=preload for critical CSS, the main font, and the LCP image. Use the matching as value: style, font, or image.</p><p class=\"mb-4\">Do not preload too many items. Only truly critical ones, otherwise it slows things down.</p><p class=\"mb-4\">On app.clincoo.buzz, check the Network tab to confirm preload starts before CSS parsing.</p><p class=\"mb-4\">Combine with fetchpriority=high on the LCP image for higher priority.</p>",
    "source": "web.dev — Preload",
    "sourceUrl": "https://web.dev/articles/preload-critical-assets",
    "sourceSnippet": "Preload critical resources to improve loading performance.",
    "source2": "MDN — rel=preload",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 },
 {
  "id": "vitals-optimasi-css-blocking-untuk-fcp",
  "langs": {
   "id": {
    "title": "Cara Optimasi CSS Blocking agar FCP Lebih Cepat",
    "desc": "Tata cara memindahkan atau inline CSS kritis di Clincoo untuk mempercepat First Contentful Paint.",
    "content": "<p class=\"mb-4\">CSS render-blocking menunda FCP karena browser menunggu stylesheet selesai sebelum paint.</p><p class=\"mb-4\">Identifikasi CSS kritis (above-the-fold) dan inline di head, atau gunakan media queries untuk load non-kritis belakangan.</p><p class=\"mb-4\">Di editor.clincoo.buzz, gunakan tool untuk extract critical CSS. Sisanya load async dengan preload + onload.</p><p class=\"mb-4\">Hindari @import di CSS karena menambah chain. Gabungkan file jika memungkinkan.</p><p class=\"mb-4\">Ukur ulang FCP. Harus turun signifikan setelah CSS kritis dioptimasi di app.clincoo.buzz.</p>",
    "source": "web.dev — Render blocking",
    "sourceUrl": "https://web.dev/articles/render-blocking-resources",
    "sourceSnippet": "Eliminate render-blocking resources to speed up first paint.",
    "source2": "web.dev — Critical CSS",
    "source2Url": "https://web.dev/articles/extract-critical-css",
    "source3": "Clincoo Blog",
    "source3Url": "https://blog.clincoo.buzz/"
   },
   "en": {
    "title": "How to Optimize Blocking CSS for Faster FCP",
    "desc": "How to move or inline critical CSS on Clincoo to speed up First Contentful Paint.",
    "content": "<p class=\"mb-4\">Render-blocking CSS delays FCP because the browser waits for stylesheets before painting.</p><p class=\"mb-4\">Identify critical CSS (above-the-fold) and inline it in the head, or use media queries to load non-critical later.</p><p class=\"mb-4\">In editor.clincoo.buzz, use a tool to extract critical CSS. Load the rest async with preload + onload.</p><p class=\"mb-4\">Avoid @import in CSS because it adds a chain. Combine files when possible.</p><p class=\"mb-4\">Re-measure FCP. It should drop significantly after critical CSS is optimized on app.clincoo.buzz.</p>",
    "source": "web.dev — Render blocking",
    "sourceUrl": "https://web.dev/articles/render-blocking-resources",
    "sourceSnippet": "Eliminate render-blocking resources to speed up first paint.",
    "source2": "web.dev — Critical CSS",
    "source2Url": "https://web.dev/articles/extract-critical-css",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 }
 ]
};