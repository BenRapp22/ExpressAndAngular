const express = require('express'),
app = express(),
bodyParser = require('body-parser');
port = process.env.PORT || 3000;
app.set('port', port);
  
​
​
const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'traffickcam-production-migrated-cluster.cluster-cjwezvayq9k4.us-west-2.rds.amazonaws.com',
    user: 'readonlyuser',
    password: 'ceVVeMlDGjbVng==',
    database: 'tcam_091420'
});
mc.connect(function(err) {
  if (err) throw err;
  console.log('Your Database is connected successfully !');
});
module.exports = mc;
​
// connect to database
​
​
app.listen(port);
​
console.log('API server started on: ' + port);
​
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
​
var routes = require('./routes/ImagesRouters'); //importing route
routes(app); //register the route
​
module.exports = app;