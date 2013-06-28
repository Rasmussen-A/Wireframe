///main.js - require.js config file

require.config({
  paths: {
    jquery: '../vendor/js/jquery',
    underscore: '../vendor/js/underscore',
    backbone: '../vendor/js/backbone',
    templates: '../templates'
  },
  shim: {
    jquery: { exports: '$' },
    underscore: { exports: '_' },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone' },
    bootstrap: {
      deps: ['jquery'],
      exports: 'Bootstrap' }
  }
});

// App module is entire app logic
require(['app'], function(App){
  //call app.js
})
