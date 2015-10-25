'use strict';

const express = require('express');
const MongoClient = require('mongodb').MongoClient

const app = express();

app.use(express.static(__dirname));

MongoClient.connect('mongodb://127.0.0.1:27017/tjs', (err, db) => {
  if (err) throw err;

  const coll = db.collection('addressbook');

  app.get('/addressbook', (req, res) => {
    coll.find().toArray((err, docs) => {
      if (err) {
        res.send(err, null, 500);
      } else {
        res.send(docs);
      }
    });
  });

  app.post('/addressbook', (req, res) => {
    console.log('server.js post: req =', req);
    const obj = JSON.parse(req.body);
    coll.insert(obj);
  });
})

var PORT = 1919;
app.listen(PORT, () => console.log('browse http://localhost:' + PORT));
