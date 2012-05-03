var request = require('request');
var es = require('../settings').es;

var index = {
  mappings: {
    package: {
      properties: {
        doc: { type: 'object', enabled: false, dynamic: false }
      }
    }
  }
};

module.exports = function(callback){

  request.put({ url: es.host + es.index, json:index }, function(err, res, body){

    if(err){
      throw err;
    };

    console.log('Create mapping:', body);
    callback();

  });

};
