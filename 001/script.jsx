var Hello = React.createClass({
  render: function() {
    var greetings = ["Hey", "Hi", "Welcome"];
    var names = ["Sheryl", "Dan", "Trey", "Ram", "Elijah"];

    var hellos = [];

    for(var i = 0; i < names.length; i++) {
      hellos.push(<h1 key={i}>{greetings[i%greetings.length]} {names[i]}</h1>);
    };

    return (
      <div>
        {hellos}
      </div>
    );
  }
});

React.render(
  <Hello />,
  document.getElementById("root")
);
