var latest = function(doc){
  if (doc['dist-tags'] && doc['dist-tags'].latest) {
    return doc['dist-tags'].latest;
  };
};

var tags = function(doc){
  if (latest(doc)) {
    var tags = doc.versions[latest(doc)].tags || [];
    var keywords = doc.versions[latest(doc)].keywords || [];
    return tags.concat( keywords );
  } else {
    return [];
  };
};

var author = function(doc){

  if( doc.author ){
    return doc.author.name || ''
  };

};

module.exports = function(doc){
  return {
    name: doc._id,
    tags: tags(doc),
    author: author(doc),
    doc: doc
  };
};
