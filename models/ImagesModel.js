'user strict';
var sql = require('../database.js');

//Images object constructor
var Image = function(image){
    this.image = image.image;
    this.status = image.status;
    this.created_at = new Date();
};


//1 selecet images where hotel_id =
Image.getImageById = function (hotelId, result) {
    sql.query("select * from core_image where hotel_id = ? limit 100", hotelId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};


//2 count images where hotel_id =
Image.getCountImageById = function (hotelId, result) {
sql.query("SELECT i.hotel_id,h.name, COUNT(*) as TOTAL_NUM_OF_IMAGES FROM core_image as i,core_hotel as h WHERE  i.hotel_id=78961 and  h.id=i.hotel_id", hotelId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};

//3 count images  that are UserSupplied 
Image.getCountImageUserCaptured = function (captureMethodid, result) {
    sql.query("select COUNT(*) as User_Captured_Images, c.name from  core_capturemethod as c, core_image as i where c.id= i.capture_method_id and c.id=1;", captureMethodid, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
    };
    


    //4 count images  that are HotelSupplied 
Image.getCountImageHotelCaptured = function (captureMethodid, result) {
    sql.query("select COUNT(*) as Hotel_Captured_Images from  core_capturemethod as c, core_image as i where c.id= i.capture_method_id and c.id in (2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30);", captureMethodid, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
    };
    


 //5 hotels that have no images 
 Image.getCountHotelsNoImages = function (result) {
    sql.query("select COUNT(id) from core_hotel  where id NOT IN ( select hotel_id from core_image );", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                 console.log('hotels : ', res);
                    result(null, res);
              
                }
            });   
    };


//6 select images where time period is '2015-01-01' AND '2020-12-31'
Image.getImageAtTimePeriod = function (startDate,endDate,result) {
    sql.query("SELECT * FROM core_image WHERE upload_timestamp BETWEEN ? AND ? limit 100", [startDate,endDate],function (err, res) {
       // pool.escape(makeTID + '') 
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
      
        }
        });   
};


//7 select images where time period is '2015-01-01' AND '2020-12-31' and User supplied/hotel supplied 
Image.getImagesCaptureMethodPeriod = function (startDate,endDate,captureMethodID,result) {
    sql.query("SELECT * FROM core_image as i, core_capturemethod as c WHERE i.capture_method_id=c.id and upload_timestamp BETWEEN ? AND ? AND c.id=?;", [startDate,endDate,captureMethodID],function (err, res) {
       // pool.escape(makeTID + '') 
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
      
        }
        });   
};





//8 count images that have a specific object 
Image.getCountImageHasObject = function (objectId, result) {
    sql.query("select ot.name, COUNT(i.id) from core_image_pending as i , core_image_objects as o, core_image_object_type as ot where i.id=o.image_id and o.category_id=ot.id and ot.id=?;", objectId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
    };

//9 count hotels that have a specific object 
Image.getCountHotelHasObject = function (objectId, result) {
    sql.query("select ot.name, COUNT(DISTINCT i.hotel_id) from core_image_pending as i , core_image_objects as o, core_image_object_type as ot, core_hotel as h where i.id=o.image_id and o.category_id=ot.id  and i.hotel_id= h.id and ot.id=?;"
    , objectId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
    };


    //10 count images with a combination of objects 

 
Image.getCountImagesHasObjects = function (objectId, result) {
    sql.query("select COUNT(DISTINCT i.id) from core_image_pending as i , core_image_objects as o, core_image_object_type as ot where i.id=o.image_id and o.category_id=ot.id and ot.id  IN (?)"
    , objectId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
    };


// update queries 
//remove queries 
// insert queries 
  module.exports= Image;

