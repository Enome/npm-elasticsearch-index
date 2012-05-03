var request = require('request');
var es = require('../settings').es;

module.exports = function(callback){

  request.del(es.host + es.index, function(err, res, body){

    if(err){
      throw err;
    };

    console.log('Success:', body);
    callback();

  });

};
