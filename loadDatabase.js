var MongoClient = require('mongodb');
var assert = require('assert');
var config = require('./config');
var fs = require('fs');
var xml2js = require('xml2js');

var parser = new xml2js.Parser();
var files = fs.readdirSync('./election-results');

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);
  files.forEach((file) => {
    fs.readFile( './election-results/' + file, "utf-8", function (error, text) {
      if (error) {
        throw error;
      }
      else {
        parser.parseString(text, function (err, result, next) {
          var header = result['constituencyResults']['constituencyResult'][0];
          var obj = {
              seqNo: header['$']['seqNo'],
              consituencyId: header['consituencyId'],
              constituencyName: header['constituencyName'],
              results: header['results']
          }
          db.collection('constituency').insert(obj)
          .then(response => {
            //console.info('Constituencies inserted = ', response.insertedCount);
          });
        });
      }
    });
  });
  console.log("Finished created Mongo Collection");
});