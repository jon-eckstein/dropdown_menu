var React = require('react');
var Menu = require('./Components/Menu/Menu');

var element = React.createElement(Menu, {data:MENU_DATA, level:0});
React.render(element, document.getElementById('menuwrapper'));
// React.render(element, document.querySelector('.menuwrapper'));
