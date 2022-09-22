// map object
// get coordinates by geolocation api
// get foursquare businesses
// process foursquare array
// event handlers
// window load
// business submit button

const successCallback = (position) => {
    console.log(position);
};

const errorCallback = (error) => {
    console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);