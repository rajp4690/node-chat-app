// jan 1st 1970 00:00:00 am
var moment = require('moment');

// var date = moment();
// date.add(1, 'years').subtract(1, 'M');
// console.log(date.format('MMM Do YYYY'));

var timeStamp = moment().valueOf();
console.log(timeStamp);
var date = moment(timeStamp);
console.log(date.format('h:mm a'));