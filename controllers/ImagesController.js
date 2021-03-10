var Image = require('../models/ImagesModel.js');


//controller for image by hotel_ID hotelId=78961 we place the passed parameter here 
exports.list_images_of_hotel = function(req, res) {
  Image.getImageById(78961,function(err, image) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', image);
    res.send(image);
  });
};

//controller for count image by hotel_ID hotelId=78961
exports.count_images_of_hotel = function(req, res) {
  Image.getCountImageById(req.params.hotelId,function(err, image) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', image);
    res.send(image);
  });
};
 

//controller for count image by that were user captured 
exports.count_images_user_captured= function(req, res) {
  Image.getCountImageUserCaptured(1,function(err, image) {
    
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', image);
    res.send(image);
  });
};


//controller for count image by that were hotel captured 
exports.count_images_hotel_captured= function(req, res) {
  Image.getCountImageHotelCaptured(1,function(err, image) {
    
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', image);
    res.send(image);
  });
};


//controller for hotels with no images
exports.count_hotels_NoImages= function(req, res) {
  Image.getCountHotelsNoImages(function(err, image) {
    
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', image);
    res.send(image);
  });
};


//controller for images in a specfic time period req.params.startDate,req.params.endDate 
exports.list_images_of_timePeriod = function(req, res) {
  Image.getImageAtTimePeriod( ['2015-01-01'],['2020-12-31'],function(err, image) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', image);
    res.send(image);
  });
};


//controller for images in a specfic time period and capture method 
exports.list_images_of_timePeriod_captureMethod = function(req, res) {
  Image.getImagesCaptureMethodPeriod( ['2015-01-01'],['2020-12-31'],[1],function(err, image) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', image);
    res.send(image);
  });
};



//controller for images that have a specfic object
exports.count_images_of_object = function(req, res) {
  Image.getCountImageHasObject( 8,function(err, image) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', image);
    res.send(image);
  });
};



//controller for hotels that have a specfic object
exports.count_hotels_of_object = function(req, res) {
  Image.getCountHotelHasObject( 8,function(err, image) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', image);
    res.send(image);
  });
};


 
//controller for hotels that have a specfic object
const objectID=[8,45,23,66];// front end needs to pass selected as an array. 
exports.count_images_of_objects = function(req, res) {
  Image. getCountImagesHasObjects([objectID],function(err, image) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', image);
    res.send(image);
  });
};
