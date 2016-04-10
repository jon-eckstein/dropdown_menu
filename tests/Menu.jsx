require('./dom-mock')('<html><body></body></html>');
// var jsdom = require('mocha-jsdom');
var React = require('react/addons');
var Menu = require('../src/Components/Menu/Menu.jsx');
var TestUtils = React.addons.TestUtils;
// var expect = require('expect');

describe("Menu", function () {
  it("loads without error", function () {
      // console.log(TestUtils);
      // var menu = TestUtils.renderIntoDocument(
      //     <Menu />
      // );
      // console.log(menu);
      // expect(menu).toExist();
      return true;
  });
});
