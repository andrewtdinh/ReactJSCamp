var OneUserGreeting = React.createClass({
  render: function () {
    return <li>Hello {this.props.name}</li>;
  }
});

var Hello = React.createClass({
  getInitialState: function() {
    return { users: [] };
  },
  greet: function() {
    this.setState({
      users: this.state.users.concat(this.refs.name2greet.value)
    }, function() {
        this.refs.name2greet.value = '';
      }
    );
  },
  componentDidMount: function() {
    console.log("Mounted!");
  },
  componentWillMount: function() {
    console.log("Will mount now....");
  },
  componentWillUnmount: function() {
    console.log("Going to unmount now....");
  },
  render: function() {
    var usersLIs = this.state.users.map(function(name, i) {
      return <OneUserGreeting name={name} key={i} />;
    });
    return (
      <div>
        <input placeholder="Name" ref="name2greet" />
        <button onClick={this.greet}>Greet</button>
        <hr />
        <ul>
          {usersLIs}
        </ul>

      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Hello />
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById("root")
);
