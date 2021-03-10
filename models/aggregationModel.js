'user strict';
var sql = require('../database.js');

//Count object constructor
var Count = function(image){
    this.image = image.image;
    this.status = image.status;
    this.created_at = new Date();
};

