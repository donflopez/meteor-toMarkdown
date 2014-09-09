Package.describe({
  summary: "Conver html code into markdown",
  version: "1.0.0",
  git: "https://github.com/donflopez/meteor-toMarkdown"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.addFiles('donflopez:he.js');
  api.addFiles('donflopez:tomarkdown.js');
  api.export('toMarkdown', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('donflopez:tomarkdown');
  api.addFiles('donflopez:tomarkdown-tests.js');
});
