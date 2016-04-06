var React = require('react');
var MenuItem = require('../MenuItem/MenuItem');

Menu = React.createClass({
  render: function() {
    var menuItems = this.props.data.map(function(item, index){
          var submenuData = {data:item.submenu};
          return (
                <MenuItem
                  title={item.title}
                  submenu={submenuData}
                  key={index}
                />
              );
        });
    return (
      <ul className="dropdown-submenu">
        {menuItems}
      </ul>
    );
  }
});

module.exports = Menu;
