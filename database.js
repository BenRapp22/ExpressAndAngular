//database connection
var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "traffickcam-production-migrated-cluster.cluster-cjwezvayq9k4.us-west-2.rds.amazonaws.com",
    user: "readonlyuser",
    password: "ceVVeMlDGjbVng==",
    database: "tcam_091420"
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Your Database is connected successfully !');
});
module.exports = conn;
