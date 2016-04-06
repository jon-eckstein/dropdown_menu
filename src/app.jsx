var React = require('react');
var Menu = require('./Components/Menu/Menu');

var element = React.createElement(Menu, {data:MENU_DATA});
React.render(element, document.querySelector('.menu-item'));
