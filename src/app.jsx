var React = require('react');
var Menu = require('./Components/Menu/Menu');
var MENU_DATA = require("./menu_data");

var element = React.createElement(Menu, {data:MENU_DATA});
React.render(element, document.querySelector('.menu'));
