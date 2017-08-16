import React from "react";

function Button(props) {
  return(
    <div className="w3-pale-blue">
      <button className="w3-btn w3-ripple w3-hover-green">{props.children}</button>
    </div>
  );
}

class navBar extends React.Component {
  render() {
    return (
    <div>
      <h1 className="w3-white w3-large">testingNav</h1>
    </div>
    );
  }
}
module.exports = navbar;