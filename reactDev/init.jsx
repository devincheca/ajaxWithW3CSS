import React from 'react';
import { connect } from 'react-redux';
import Item from "./components/item.jsx";
import SearchBar from "./components/searchbar.jsx";
class Init extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      searchInput: "",
      items: [
        <Item name="refridgerator" hide=""/>,
        <Item name="lawn mower" hide=""/>,
        <Item name="blah" hide=""/>
      ]
    }
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  handleUserInput(input) {
    this.setState(
    {
      searchInput: input
    }
    );
    for (x in this.state.items)
    {
      if (x.indexOf(this.state.searchInput) > -1)
      {
        
        x.hide = "w3-show";
      }
      else
      {
        x.hide = "w3-hide";
      }
    }
  }
  render ()
  {
    return (
      <div>
        <SearchBar 
          searchInput = {this.state.searchInput}
          onUserInput = {this.handleUserInput}
        />
        <div className="w3-row w3-center">
        {this.state.items}
        </div>
      </div>
    );
  }
}
module.exports = Init;