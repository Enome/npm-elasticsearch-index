var remove = require('./src/remove');
var create = require('./src/create');
var follow = require('./src/follow');

remove(function(){

  create(function(){

    follow();

  });

});
