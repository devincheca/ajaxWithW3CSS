import React from "react";

function Button(props) {
  return(
    <div className="w3-pale-blue w3-row">
      <button className="w3-col m2 w3-btn w3-ripple w3-hover-sand">{props.linkName}</button>
    </div>
  );
}

class NavBar extends React.Component {
  render() {
    return (
    <div>
      <h1 className="w3-white w3-large">testingNav</h1>
      <Button linkName="someDiv" />
      <Button linkName="moreDiv" />
    </div>
    );
  }
}
module.exports = NavBar;