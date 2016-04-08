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
                  level={this.props.level}
                />
              );
        }.bind(this));
    return (
      <ul>
        {menuItems}
      </ul>
    );
  }
});

module.exports = Menu;
