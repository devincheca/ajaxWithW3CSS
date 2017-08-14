import React from "react";
import ReactDOM from "react-dom";
// .\node_modules\.bin\webpack for build
 
var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>Hello, {this.props.greetTarget}!</p>
    );
  }
});
 
ReactDOM.render(
  <div>
    <HelloWorld greetTarget="Ban"/>
    <HelloWorld greetTarget="In"/>
    <HelloWorld greetTarget="Ni Cage"/>
    <HelloWorld greetTarget="Mean"/>
    <HelloWorld greetTarget="Bo"/>
    <HelloWorld greetTarget="Can"/>
  </div>,
  document.querySelector("#searchStuff")
); 