// Merge semua file data per negara ke dalam satu object 'countries'
(function() {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  window.countries = window.countryDataFiles;
})();

// =============================================
// STATE
// =============================================
let currentLang = 'id';
let currentView = 'home'; // 'home' | 'country' | 'article' | 'about'
let currentCountryId = null;
let currentArticleId = null;

// =============================================
// BAHASA
// =============================================
const languages = {
  'id': { nativeName: 'Indonesia', ui: { home: 'Beranda', about: 'Tentang', searchPh: 'Cari artikel...', noResult: 'Tidak ada artikel ditemukan.', footer: 'Seluruh hak cipta dilindungi.', source: 'Sumber Informasi', back: 'Kembali', country: 'Kategori', articles: 'artikel' } },
  'en': { nativeName: 'English',   ui: { home: 'Home',    about: 'About',   searchPh: 'Search articles...', noResult: 'No articles found.',           footer: 'All rights reserved.',              source: 'Information Source', back: 'Back',    country: 'Category', articles: 'articles' } }
};


// =============================================
// HELPER
// =============================================
function ui() { return languages[currentLang].ui; }

function getAllArticles() {
  // Kumpulkan semua artikel dari semua negara untuk halaman beranda
  let all = [];
  for (const cId in countries) {
    const c = countries[cId];
    c.articles.forEach(art => {
      const langData = art.langs[currentLang] || art.langs['id'];
      all.push({
        countryId: cId,
        articleId: art.id,
        flag: c.flag,
        countryName: c.names[currentLang] || c.names['id'],
        ...langData
      });
    });
  }
  return all;
}

function getCountryArticles(countryId) {
  const c = countries[countryId];
  if (!c) return [];
  return c.articles.map(art => {
    const langData = art.langs[currentLang] || art.langs['id'];
    return { countryId, articleId: art.id, flag: c.flag, countryName: c.names[currentLang] || c.names['id'], ...langData };
  });
}

// =============================================
// SIDEBAR
// =============================================
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (sidebar.classList.contains('-translate-x-full')) {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.remove('opacity-0'), 10);
  } else {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('opacity-0');
    setTimeout(() => overlay.classList.add('hidden'), 300);
  }
}

function toggleDrop(id) {
  const drop = document.getElementById(id);
  const icon = document.getElementById(id + 'Icon');
  const isHidden = drop.classList.contains('hidden');
  drop.classList.toggle('hidden', !isHidden);
  drop.classList.toggle('flex', isHidden);
  icon && icon.classList.toggle('rotate-180', isHidden);
}

function updateSidebarUI() {
  const u = ui();
  document.getElementById('ctaHomeText').innerText = u.home;
  document.getElementById('ctaAboutText').innerText = u.about;
  document.getElementById('footerText').innerText = u.footer;
  document.getElementById('ctaLangText').innerText = languages[currentLang].nativeName;

  // Populate bahasa
  const langDrop = document.getElementById('langDrop');
  langDrop.innerHTML = '';
  for (const key in languages) {
    const btn = document.createElement('button');
    btn.className = 'text-left px-3 py-1.5 rounded-md text-sm transition-colors ' + (currentLang === key ? 'bg-gray-100 font-bold text-gray-900' : 'text-gray-600 hover:bg-gray-50');
    btn.innerText = languages[key].nativeName;
    btn.onclick = () => changeLanguage(key);
    langDrop.appendChild(btn);
  }

  // Populate negara di dropdown
  const countryDropEl = document.getElementById('countryDrop');
  if (countryDropEl) {
    countryDropEl.innerHTML = '';
    for (const cId in countries) {
      const c = countries[cId];
      const name = c.names[currentLang] || c.names['id'];
      const artCount = c.articles.length;
      const btn = document.createElement('button');
      const isActive = currentCountryId === cId && currentView === 'country';
      btn.className = 'w-full flex items-center justify-between gap-2 px-3 py-2 rounded-[0.5rem] text-left transition-colors text-sm ' + (isActive ? 'bg-gray-100 font-semibold text-gray-900' : 'text-gray-600 hover:bg-gray-50');
      btn.innerHTML = '<span class="line-clamp-1">' + name + '</span><span class="text-xs text-gray-400 flex-shrink-0">' + artCount + ' ' + u.articles + '</span>';
      btn.onclick = () => selectCountry(cId);
      countryDropEl.appendChild(btn);
    }
  }
}

function changeLanguage(key) {
  currentLang = key;
  updateSidebarUI();
  if (currentView === 'home') renderHome();
  else if (currentView === 'country') renderCountry(currentCountryId);
  else if (currentView === 'article') renderArticle(currentCountryId, currentArticleId);
  else if (currentView === 'about') renderAbout();
  // Close dropdown
  const drop = document.getElementById('langDrop');
  drop.classList.add('hidden'); drop.classList.remove('flex');
  const icon = document.getElementById('langDropIcon');
  icon && icon.classList.remove('rotate-180');
}

function selectCountry(countryId) {
  // Tutup dropdown negara
  const drop = document.getElementById('countryDrop');
  if (drop) { drop.classList.add('hidden'); drop.classList.remove('flex'); }
  const icon = document.getElementById('countryDropIcon');
  if (icon) icon.classList.remove('rotate-180');

  toggleSidebar();
  currentCountryId = countryId;
  currentView = 'country';
  updateSidebarUI();
  renderCountry(countryId);
}

function goHomeFromMenu() {
  toggleSidebar();
  currentCountryId = null;
  currentView = 'home';
  updateSidebarUI();
  renderHome();
}

function goToAbout() {
  toggleSidebar();
  currentView = 'about';
  updateSidebarUI();
  renderAbout();
}

// =============================================
// RENDER
// =============================================
const appContainer = () => document.getElementById('app-container');

function makeHeader(backFn, backLabel) {
  return '<header class="sticky top-0 bg-white pt-4 pb-0 z-40 border-b border-gray-100 h-">' +
    '<div class="flex items-center h-full text-gray-500 cursor-pointer hover:text-gray-900 transition-colors" onclick="' + backFn + '">' +
    '<svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>' +
    '<span class="font-medium text-sm">' + backLabel + '</span></div></header>';
}

// BERANDA — semua artikel campur
function renderHome(searchQuery, skipPush) {
  currentView = 'home';
  searchQuery = searchQuery || '';
  if (!skipPush) {
    const url = '#/' + (searchQuery ? ('?q=' + encodeURIComponent(searchQuery)) : '');
    if (location.hash !== url) {
      history.pushState({view:'home', q: searchQuery}, '', url);
    }
  }
  const u = ui();
  let all = getAllArticles();

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    all = all.filter(a => a.title.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q) || a.countryName.toLowerCase().includes(q));
  }

  let cardsHtml = '';
  if (all.length === 0) {
    cardsHtml = '<div class="text-center py-12 text-gray-500">' + u.noResult + '</div>';
  } else {
    all.forEach(item => {
      cardsHtml += '<div class="mb-4 border border-gray-200 rounded-[0.5rem] p-5 cursor-pointer hover:border-gray-400 transition-colors bg-white" onclick="renderArticle(\'' + item.countryId + '\',\'' + item.articleId + '\')">' +
        '<div class="mb-2">' +
        '<span class="text-xs font-medium text-gray-400 uppercase tracking-wide">' + item.countryName + '</span>' +
        '</div>' +
        '<h3 class="text-lg font-bold text-gray-900">' + item.title + '</h3>' +
        '<div class="h-px bg-gray-100 w-full my-3"></div>' +
        '<p class="text-sm text-gray-500 leading-relaxed">' + item.desc + '</p>' +
        '</div>';
    });
  }

  appContainer().innerHTML =
    '<header class="sticky top-0 bg-white pt-4 pb-0 z-40">' +
    '<div class="flex items-center gap-3">' +
    '<button onclick="toggleSidebar()" class="p-2 -ml-2 text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none transition-colors flex-shrink-0">' +
    '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16 M4 12h10 M4 18h16"/></svg>' +
    '</button>' +
    '<div class="relative flex-grow">' +
    '<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg></div>' +
    '<input type="text" id="searchInput" class="w-full border border-gray-300 rounded-full py-2.5 pl-12 pr-5 text-base outline-none focus:border-gray-900 transition-colors bg-white shadow-sm" placeholder="' + u.searchPh + '" value="' + searchQuery + '" oninput="handleSearch(this)" autocomplete="off" spellcheck="false">' +
    '</div></div>' +
    '<div class="h-px bg-gray-200 w-full mt-4"></div></header>' +
    '<div class="pt-6 fade-in" id="homeCards">' + cardsHtml + '</div>';

  window.scrollTo(0, 0);
}

// HALAMAN NEGARA — daftar artikel negara itu
function renderCountry(countryId, skipPush) {
  currentView = 'country';
  currentCountryId = countryId;
  if (!skipPush) {
    const url = '#/' + countryId;
    if (location.hash !== url) {
      history.pushState({view:'country', countryId: countryId}, '', url);
    }
  }
  const c = countries[countryId];
  if (!c) { renderHome(); return; }
  const u = ui();
  const name = c.names[currentLang] || c.names['id'];
  const arts = getCountryArticles(countryId);

  let cardsHtml = '';
  arts.forEach(item => {
    cardsHtml += '<div class="mb-4 border border-gray-200 rounded-[0.5rem] p-5 cursor-pointer hover:border-gray-400 transition-colors bg-white" onclick="renderArticle(\'' + countryId + '\',\'' + item.articleId + '\')">' +
      '<h3 class="text-lg font-bold text-gray-900">' + item.title + '</h3>' +
      '<div class="h-px bg-gray-100 w-full my-3"></div>' +
      '<p class="text-sm text-gray-500 leading-relaxed">' + item.desc + '</p>' +
      '</div>';
  });

  appContainer().innerHTML =
    '<header class="sticky top-0 bg-white pt-5 pb-4 z-40 border-b border-gray-100">' +
    '<div class="relative flex items-center justify-center">' +
    '<button onclick="toggleSidebar()" class="absolute left-0 p-2 -ml-2 text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none transition-colors">' +
    '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16 M4 12h10 M4 18h16"/></svg>' +
    '</button>' +
    '<div class="text-center">' +
    '<h2 class="text-xl font-bold text-gray-900">' + name + '</h2>' +
    '<p class="text-xs text-gray-400 mt-0.5">' + arts.length + ' ' + u.articles + '</p>' +
    '</div>' +
    '</div>' +
    '</header>' +
    '<div class="pt-6 fade-in" id="homeCards">' + cardsHtml + '</div>';

  window.scrollTo(0, 0);
}

// HALAMAN ARTIKEL — isi artikel lengkap
function renderArticle(countryId, articleId, skipPush) {
  currentView = 'article';
  currentCountryId = countryId;
  currentArticleId = articleId;
  if (!skipPush) {
    const url = '#/' + countryId + '/' + articleId;
    if (location.hash !== url) {
      history.pushState({view:'article', countryId: countryId, articleId: articleId}, '', url);
    }
  }

  const c = countries[countryId];
  if (!c) { renderHome(); return; }
  const artObj = c.articles.find(a => a.id === articleId);
  if (!artObj) { renderCountry(countryId); return; }
  const item = artObj.langs[currentLang] || artObj.langs['id'];
  const u = ui();

  appContainer().innerHTML =
    makeHeader('renderCountry(\'' + countryId + '\')', u.back) +
    '<article class="pt-8 pb-10 fade-in">' +
    '<div class="flex items-center justify-center mb-3">' +
    '<span class="text-sm font-medium text-gray-400">' + (c.names[currentLang] || c.names['id']) + '</span>' +
    '</div>' +
    '<h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 leading-tight text-center">' + item.title + '</h1>' +
    '<div class="prose prose-gray max-w-none text-gray-800 leading-loose text-justify space-y-4">' + item.content + '</div>' +
    '</article>' +
    '<div class="mt-4 border-t border-gray-200 pt-6 pb-12">' +
    '<div class="flex items-center text-gray-500 cursor-pointer group" onclick="toggleSourceInfo()">' +
    '<svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>' +
    '<span class="ml-3 font-medium text-sm group-hover:text-gray-900 transition-colors">' + u.source + '</span>' +
    '<svg id="sourceIconArrow" class="w-5 h-5 ml-auto text-gray-400 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>' +
    '</div>' +
    (function(){
      var srcs=[
        {url:item.sourceUrl,  name:item.source,  snip:item.sourceSnippet},
        {url:item.sourceUrl2, name:item.source2, snip:item.sourceSnippet2},
        {url:item.sourceUrl3, name:item.source3, snip:item.sourceSnippet3}
      ];
      var h='<div id="sourceDetails" class="hidden mt-4 space-y-3">';
      srcs.forEach(function(s){
        if(!s.url) return;
        var d=s.url.replace(/https?:\/\//,'').split('/')[0];
        h+='<a href="'+s.url+'" target="_blank" rel="noopener" class="block p-4 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">'
          +'<div class="flex items-start gap-3">'
          +'<span style="position:relative;display:inline-block;width:2.5rem;height:2.5rem;flex-shrink:0;margin-top:0.125rem">'
          +'<img src="https://www.google.com/s2/favicons?domain='+d+'&sz=64" style="width:2.5rem;height:2.5rem;border-radius:0.25rem;border:1px solid #e5e7eb;background:#fff;position:absolute;top:0;left:0" onerror="this.style.opacity=\'0\';this.nextElementSibling.style.display=\'flex\'">'
          +'<span style="display:none;width:2.5rem;height:2.5rem;border-radius:0.25rem;border:1px solid #e5e7eb;background:#dbeafe;color:#2563eb;font-weight:700;font-size:0.875rem;align-items:center;justify-content:center;position:absolute;top:0;left:0">'+(s.name||d).charAt(0).toUpperCase()+'</span>'
          +'</span>'
          +'<div class="min-w-0"><div class="font-bold text-gray-900 text-sm">'+(s.name||d)+'</div>'
          +'<div class="text-xs text-blue-500 truncate mt-0.5">'+d+'</div>'
          +(s.snip?'<div class="text-xs text-gray-500 mt-1 leading-relaxed">'+s.snip+'</div>':'')
          +'</div></div></a>';
      });
      h+='</div>';
      return h;
    })()+
    '</div></div>';

  window.scrollTo(0, 0);
}

// TENTANG
function renderAbout(skipPush) {
  if (!skipPush) {
    if (location.hash !== '#/about') {
      history.pushState({view:'about'}, '', '#/about');
    }
  }
  currentView = 'about';
  const u = ui();
  
  // Konten panjang 5 Paragraf mengenai visi misi global & sharing
  const contentId = `
    <p class="mb-4"><strong>Clincoo Blog</strong> adalah rumah resmi untuk artikel, panduan, dan tips seputar Clincoo — ruang kerja web lengkap dengan editor kode, template siap pakai, terminal terintegrasi, dan deploy dalam satu tempat. Blog ini hadir agar setiap fitur Clincoo punya panduan yang mudah diikuti siapa pun.</p>
    <p class="mb-4">Kami percaya membuat website seharusnya tidak butuh gelar komputer. Karena itu setiap artikel di sini ditulis dengan bahasa sederhana, langkah yang jelas, dan contoh nyata — dari memulai akun pertama sampai menerbitkan situs ke seluruh dunia.</p>
    <p class="mb-4">AI di Clincoo adalah asisten: ia membantu menjelaskan, menyarankan, dan mempercepat pekerjaanmu — kamu tetap pemegang kendali. Blog ini mengikuti prinsip yang sama: kami menemani, bukan menggantikanmu.</p>
    <p class="mb-4">Semua panduan disusun per kategori — Panduan, Editor, Asisten AI, Deploy, dan Tips — supaya kamu cepat menemukan yang dicari, baik dalam bahasa Indonesia maupun Inggris.</p>
    <p class="mb-4">Selamat berkarya. Mulai dari artikel mana pun, dan jangan lupa buka blog.clincoo.buzz untuk langsung mencoba.</p>
  `;

  // Terapkan konten yang sama untuk mencegah error bahasa, bisa diterjemahkan nanti
  const aboutContent = {
    id: { title: 'Tentang Clincoo Blog', body: contentId },
    en: { title: 'About Clincoo Blog', body: contentId }
  };
  
  const d = aboutContent[currentLang] || aboutContent['id'];

  const wikybookLogo = '<img src="logo.png" width="50" height="50" alt="Clincoo" style="border-radius:0.6rem">';

  const socialIcons = '<div class="mt-6"><a href="https://app.clincoo.buzz/" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition-colors">Buka Aplikasi Clincoo</a></div>';

  appContainer().innerHTML =
    makeHeader('renderHome()', u.back) +
    '<article class="pt-8 pb-10 fade-in">' +
    '<div class="flex items-center justify-center mb-3">' +
    '<span class="text-sm font-medium text-gray-400">Informasi Platform</span>' +
    '</div>' +
    '<h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 leading-tight text-center">' + d.title + '</h1>' +
    '<div class="prose prose-gray max-w-none text-gray-800 leading-loose text-justify space-y-4">' + d.body + '</div>' +
    '<div class="mt-12 border-t border-gray-200 pt-8 flex flex-col items-center">' +
    '<div class="text-gray-900 mb-3">' + wikybookLogo + '</div>' +
    '<h3 class="text-lg font-bold text-gray-900 tracking-tight">Clincoo Blog</h3>' +
    '<p class="text-sm text-gray-500 mt-1">Artikel, Panduan & Tips Clincoo</p>' +
    socialIcons +
    '</div>' +
    '</article>';

  window.scrollTo(0, 0);
}

function toggleSourceInfo() {
  const details = document.getElementById('sourceDetails');
  const arrow = document.getElementById('sourceIconArrow');
  if (!details) return;
  const hidden = details.classList.contains('hidden');
  details.classList.toggle('hidden', !hidden);
  arrow && (arrow.style.transform = hidden ? 'rotate(90deg)' : 'rotate(0deg)');
}


// =============================================
// SEARCH DEBOUNCE FIX
// =============================================
let _searchTimer = null;

function handleSearch(inputEl) {
  const val = inputEl.value;
  clearTimeout(_searchTimer);
  _searchTimer = setTimeout(function() {
    updateCards(val);
  }, 250);
}

function updateCards(searchQuery) {
  searchQuery = searchQuery || '';
  const u = ui();
  let all = getAllArticles();

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    all = all.filter(function(a) {
      return a.title.toLowerCase().includes(q) ||
             a.desc.toLowerCase().includes(q) ||
             a.countryName.toLowerCase().includes(q);
    });
  }

  let html = '';
  if (all.length === 0) {
    html = '<div class="text-center py-12 text-gray-500">' + u.noResult + '</div>';
  } else {
    all.forEach(function(item) {
      html += '<div class="mb-4 border border-gray-200 rounded-[0.5rem] p-5 cursor-pointer hover:border-gray-400 transition-colors bg-white" onclick="renderArticle(\'' + item.countryId + '\',\'' + item.articleId + '\')">' +
        '<div class="mb-2"><span class="text-xs font-medium text-gray-400 uppercase tracking-wide">' + item.countryName + '</span></div>' +
        '<h3 class="text-lg font-bold text-gray-900">' + item.title + '</h3>' +
        '<div class="h-px bg-gray-100 w-full my-3"></div>' +
        '<p class="text-sm text-gray-500 leading-relaxed">' + item.desc + '</p>' +
        '</div>';
    });
  }

  const container = document.getElementById('homeCards');
  if (container) {
    container.innerHTML = html;
  }
}

// =============================================
// INIT
// =============================================
// =============================================
// ROUTER — parse URL saat load & popstate
// =============================================
function parseAndRender(skipPush) {
  const hash = (location.hash || '#/').slice(1); // buang '#'
  const qMark = hash.indexOf('?');
  let path = (qMark >= 0 ? hash.slice(0, qMark) : hash);
  const q = qMark >= 0 ? (new URLSearchParams(hash.slice(qMark + 1)).get('q') || '') : '';
  while (path.endsWith('/')) path = path.slice(0, -1);
  while (path.startsWith('/')) path = path.slice(1);
  const parts = path.split('/').filter(Boolean);

  if (parts.length === 0) {
    renderHome(q, skipPush || true);
  } else if (parts.length === 1) {
    if (parts[0] === 'about') {
      renderAbout(skipPush || true);
    } else {
      renderCountry(parts[0], skipPush || true);
    }
  } else if (parts.length >= 2) {
    renderArticle(parts[0], parts[1], skipPush || true);
  } else {
    renderHome('', true);
  }
}

window.addEventListener('popstate', function(e) {
  parseAndRender(true);
});

function init() {
  updateSidebarUI();
  parseAndRender(false);
}

init();
