Package.describe({
  name: 'mikael:device',
  version: '0.0.1',
  summary: 'A meteor package for querying information about the current device.',
  git: 'https://github.com/lirbank/meteor-device.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.addFiles('device.js', 'client');
  api.use('jquery', 'client');
  api.export('Device');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('device');
  api.addFiles('device-tests.js');
});
