After running "npm install",
rm -rf node_modules/react-dom/node_modules.
This is necessary because react-bootstrap
requires react to be a peer dependency.
If that directory is not deleted then two copies of react
will be loaded and you will get errors.

Database
- using MongoDb
- to start server, mongod
- to start shell for operating on it, mongo
- see MongoDBNotes.txt for more
- you created a database named "tjs"
  with a collection named "addressbook"
