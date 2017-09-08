require('!style-loader!css-loader!!sass-loader!./style.sass');

var hello=require('./hello');
var world=require('./world');

document.write(hello+world);