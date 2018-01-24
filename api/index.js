import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  mdb = db;
});

const router = express.Router();

router.get('/constituency', (req, res) => {
  let constituency = [];
  constituency = mdb.collection("constituency").find({}).toArray(function(err, result) {
    if (err) throw err;
    res.send({ data: result });
  })
});

/*router.get('/', (req, res) => {
  res.send({ data: res });
});*/



export default router;