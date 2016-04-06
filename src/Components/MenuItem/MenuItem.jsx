var React = require('react');

MenuItem = React.createClass({

  render: function() {
    // console.log(this.props.submenu);
    var submenus = false;
    if(this.props.submenu.data !== null){
      submenus = this.props.submenu.data.map(function(item) {
        return (
          <Menu data={[item]} />
        );
      });
    }

    return (
        <li>{this.props.title}
          {submenus}
        </li>
    );
  }

});

module.exports = MenuItem;
