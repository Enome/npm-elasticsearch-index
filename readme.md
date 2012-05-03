# Npm Elasticsearch Index.

This project will create an index from the npm registry. It will make name, tags/keywords and authors searchable and it will store the complete doc.

## Installation

Download Elasticsearch from their website. On Ubuntu I just have to unzip it and run:

```shell
bin/elasticsearch -f.
```

-f will force it to run in the foreground.

Once it's installed run:

```shell
npm install
node app.js
```

The app consists out of 3 tiny scripts:

- Delete: This deletes the index. So the first time you run it you might see a 404.
- Create: This will create the mapping and the index.
- Follow: This will recreate the index using _changes feed and it will keep listening to keep the index up to date.

If all goes well you should see a stream of PUTs and DELETEs. At the moment there are 127860 changes inside the npm database. The total size of the index is around 150MB so that's not to shabby. 
