var React = require("react");

var OneUserGreeting = React.createClass({
  render: function () {
    return (
      <li>
        <a href={"mailto:" + this.props.user.email}>Hello {this.props.user.name}</a>
      </li>
    );
  }
});

module.exports = OneUserGreeting;
