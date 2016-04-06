var React = require('react');

MenuItem = React.createClass({

  handleItemClick: function() {
    alert(this.props.title);
  },

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
        <li>
          <a onClick={this.handleItemClick}>{this.props.title} </a>
          {submenus}
        </li>
    );
  }
});

module.exports = MenuItem;
