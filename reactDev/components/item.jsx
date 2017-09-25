import React from 'react';
class Item extends React.Component
{
  render ()
  {
    return (
      <div className={this.props.hide}>
      <div className="w3-third">
          {this.props.name}
      </div>
      </div>
    );
  }
}
module.exports = Item;