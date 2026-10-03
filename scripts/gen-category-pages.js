const fs = require('fs');
const vm = require('vm');
const src = fs.readFileSync('data_clinqoo.js', 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(src, sandbox);
const d = sandbox.window.countryDataFiles;
const SITE = 'https://blog.clincoo.buzz';

const t = {
  id: {
    back: 'Kembali ke Beranda', count: n => n + ' artikel',
    desc: (name, n) => `Kumpulan artikel kategori ${name} di Clincoo Blog: ${n} artikel resmi Clincoo.`,
    footer: 'Seluruh hak cipta dilindungi.'
  },
  en: {
    back: 'Back to Home', count: n => n + ' articles',
    desc: (name, n) => `All articles in the ${name} category of the Clincoo Blog: ${n} official Clincoo articles.`,
    footer: 'All rights reserved.'
  }
};

function esc(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

function build(catId, lang) {
  const c = d[catId];
  const name = c.names[lang] || c.names.id;
  const arts = c.articles;
  const L = t[lang];
  const selfUrl = lang === 'id' ? `${SITE}/${catId}/` : `${SITE}/${catId}/index.en.html`;
  const desc = L.desc(name, arts.length);

  const listItems = arts.map((a, i) => {
    const al = a.langs[lang] || a.langs.id;
    const href = lang === 'id' ? `/${catId}/${a.id}/` : `/${catId}/${a.id}/index.en.html`;
    return `<a class="mb-4 block border border-gray-200 rounded-[0.5rem] p-5 hover:border-gray-400 transition-colors" href="${href}">
  <div class="mb-2"><span class="text-xs font-medium text-gray-400 uppercase tracking-wide">${esc(name)}</span></div>
  <h2 class="text-lg font-bold text-gray-900">${esc(al.title)}</h2>
  <div class="h-px bg-gray-100 w-full my-3"></div>
  <p class="text-sm text-gray-500 leading-relaxed">${esc(al.desc)}</p>
</a>`;
  }).join('\n');

  const jsonld = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    name: name, description: desc,
    mainEntity: {
      "@type": "ItemList", numberOfItems: arts.length,
      itemListElement: arts.map((a, i) => ({
        "@type": "ListItem", position: i + 1, name: (a.langs[lang] || a.langs.id).title,
        url: lang === 'id' ? `${SITE}/${catId}/${a.id}/` : `${SITE}/${catId}/${a.id}/index.en.html`
      }))
    }
  };

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<script>(function(){var m={"clinqoo-blog.pages.dev":"blog.clincoo.buzz"};var t=m[location.hostname];if(t)location.replace("https://"+t+location.pathname+location.search+location.hash);})();</script>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(name)} — Clincoo Blog</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${selfUrl}">
<meta property="og:type" content="article">
<meta property="og:title" content="${esc(name)} — Clincoo Blog">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${selfUrl}">
<meta property="og:site_name" content="Clincoo Blog">
<meta property="og:locale" content="${lang === 'id' ? 'id_ID' : 'en_US'}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(name)} — Clincoo Blog">
<meta name="twitter:description" content="${esc(desc)}">
<link rel="icon" type="image/png" sizes="32x32" href="/logo.png">
<link rel="preconnect" href="https://cdn.tailwindcss.com">
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          gray: { 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db', 500: '#6b7280', 900: '#111827' }
        }
      }
    }
  }
</script>
<style>
  body { -webkit-tap-highlight-color: transparent; }
  .fade-in { animation: fadeIn 0.35s ease-out; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
</style>
<script type="application/ld+json">${JSON.stringify(jsonld)}</script>
</head>
<body class="bg-white text-gray-900 antialiased">
<header class="sticky top-0 z-40 bg-white border-b border-gray-100 pt-3 pb-4">
  <div class="relative flex items-center justify-center max-w-2xl mx-auto px-4 sm:px-6">
    <a href="/" aria-label="${esc(L.back)}" class="absolute left-4 sm:left-6 p-2 -ml-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
    </a>
    <div class="text-center">
      <h1 class="text-xl font-bold text-gray-900">${esc(name)}</h1>
      <p class="text-xs text-gray-400 mt-0.5">${esc(L.count(arts.length))}</p>
    </div>
  </div>
</header>
<main class="max-w-2xl mx-auto px-4 sm:px-6 pt-6 fade-in">
${listItems}
</main>
<footer class="py-6 mt-12 border-t border-gray-200 text-center text-sm text-gray-500 w-full max-w-2xl mx-auto px-4 sm:px-6">
  &copy; 2026 Clincoo. <span>${esc(L.footer)}</span>
</footer>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-32K4RH4DKN"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-32K4RH4DKN',{page_path:location.pathname});</script>
</body>
</html>
`;
}

for (const catId of Object.keys(d)) {
  for (const lang of ['id', 'en']) {
    const p = lang === 'id' ? `${catId}/index.html` : `${catId}/index.en.html`;
    fs.writeFileSync(p, build(catId, lang));
    console.log('write', p);
  }
}
