var sanitize = require('./sanitize');
var follow = require('follow');
var request = require('request');

var es = require('../settings').es;
var couchdb = require('../settings').couchdb;

module.exports = function(){

  follow( { db: couchdb, include_docs: true }, function(err, change){

    var doc = change.doc;
    var url = es.host + es.index + es.type + '/' + encodeURIComponent(doc._id);

    if( change.deleted ){

      if(doc._id){
        request.del(url, function(err, res, body){
          if(err){
            return console.log('DELETE ERROR', err)
          };
          console.log( 'DELETE', change.seq );
        });
      };

    } else {

      var package = sanitize(doc);

      request.put( { url: url, json: package }, function(err, res, body){
        if(err){
          return console.log('PUT ERROR', err)
        };
        console.log( 'PUT', change.seq );
      });

    };

  });

};
