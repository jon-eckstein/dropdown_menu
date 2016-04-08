var React = require('react');

MenuItem = React.createClass({

  handleItemClick: function() {
    alert(this.props.title);
  },

  render: function() {
    var submenus = false;
    if(this.props.submenu.data !== null){
      submenus = <Menu data={this.props.submenu.data} />
    }

    return (
        <li>
          <a onClick={this.handleItemClick}>{this.props.title}</a>
          {submenus}
        </li>
    );
  }
});

module.exports = MenuItem;
