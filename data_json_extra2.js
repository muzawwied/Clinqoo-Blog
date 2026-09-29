// Clincoo Blog — artikel json tambahan (dikosongkan saat audit kualitas)
(function(){
  var extra = [];
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  var base = window.countryDataFiles["json"];
  if (base && Array.isArray(base.articles)) {
    base.articles = base.articles.concat(extra);
  }
})();
