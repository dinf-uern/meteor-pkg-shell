Package.describe({
  name: 'dinf:shell',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'agrupa elementos básicos para criar a estrutura padrão de uma aplicação',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dinf-uern/meteor-pkg-shell.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use([
    'templating',
    'underscore',
    'reactive-var'
  ]);

  api.use([
    'bootswatch:paper@3.0.0',
    'dinf:header@1.0.0',
    'dinf:footer@1.0.0'
  ],['client']);

  api.use([
    'iron:router@1.0.0',
    'momentjs:moment@2.0.0',
    'tap:i18n@1.0.0',
    'rzymek:moment-locale-pt-br@2.0.0'
  ], ['client', 'server']);

  api.addFiles([
    'server/date-on-server.js'
  ], ['server']);

  api.addFiles([
    'client/date-on-server.js',
    'lib/modules/shell.js',
    'lib/templates/head-section.html',
    'lib/templates/layout.html',
    'lib/templates/layout.js',
    'lib/templates/access-denied.html',
    'lib/templates/not-found.html'
  ],['client']);

  api.addFiles([
    'lib/router.js'
  ],['client', 'server']);

  api.export("Shell", ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('dinf:shell');
});
