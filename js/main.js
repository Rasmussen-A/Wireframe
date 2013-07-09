// main.js - require.js config file

require.config({
  paths: {
    jquery: '../vendor/js/jquery',
    underscore: '../vendor/js/underscore',
    backbone: '../vendor/js/backbone',
    bootstrap: '../vendor/js/bootstrap',
    leaflet: '../vendor/js/leaflet',
    jqueryui: '../vendor/js/jquery-ui',
    templates: '../templates'
  },
  shim: {
    jquery: { exports: '$' },
    underscore: { exports: '_' },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone' },
    leaflet: { exports: 'L' }
  }
});

// App module is entire app logic
require(['app'], function(App){
  //call app.js
})
