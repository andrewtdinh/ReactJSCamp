var Hello = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.greeting} {this.props.name}
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {

    var component = this, collection = component.props.collection;

    var hellos = Object.keys(collection).map(function(name) {
      return <Hello name={name} greeting={collection[name]} />
    });

    return (
      <div>
        <h1>React Example</h1>
        {hellos}
      </div>
    );
  }
});

React.render(
  <App collection={ { ryan: 'hello',  gerald: 'hi', trey: 'yo' } } />,
  document.getElementById("root")
);
