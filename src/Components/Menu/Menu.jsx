var React = require('react');
var MenuItem = require('../MenuItem/MenuItem');


Menu = React.createClass({
  render: function() {
    var menuItems = this.props.data.map(function(item){
          var submenuData = {data:item.submenu};
          return (
                <MenuItem
                  title={item.title}
                  submenu={submenuData}
                />
              );
        });
    return (
      <ul>
        {menuItems}
      </ul>
    );
  }
});


module.exports = Menu;
