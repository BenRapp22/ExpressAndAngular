'use strict';

module.exports = function(app ) {
  var todoList = require('../controllers/ImagesController');

  // todoList Routes

  //imagesByHotelID route
  app.route('/imagesByHotelID')
    .get(todoList.list_images_of_hotel);
    
//Count imagesByHotelID route
app.route('/CountimagesByHotelID')
.get(todoList.count_images_of_hotel);

   
//Count images userCaptured route 
app.route('/CountimagesUserCaptured')
.get(todoList.count_images_user_captured );


//Count images hotelCaptured route 
app.route('/CountimagesHotelSupplied')
.get(todoList.count_images_hotel_captured );


//hotels that have no images route 
app.route('/hotelsNoImages')
.get(todoList.count_hotels_NoImages);



  //imagesBySpecficPeriod route   
  app.route('/imagesByTimePeriod') 
    .get(todoList.list_images_of_timePeriod);


    //imagesBySpecficPeriod and CaptureMethod route   
  app.route('/imagesByTimePeriodandCaptureMethod') 
  .get(todoList.list_images_of_timePeriod_captureMethod );


//imagesBySpecficObject route   
app.route('/imagesByObject') 
.get(todoList.count_images_of_object);


//HotelsBySpecficObject route   
app.route('/HotelsByObject') 
.get(todoList.count_hotels_of_object);


//HotelsBySpecficObject route   
app.route('/ImagesByObjects') 
.get(todoList.count_images_of_objects);
  


}


