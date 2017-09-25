import React from "react";
class SearchBar extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange()
  {
    this.props.onUserInput(
      this.searchInput.value
    );
  }
  render() 
  {
    return (
      <div>
        <i className="fa fa-search"></i>
        <input
          type="text"
          placeholder={this.props.searchInput}
          value={this.props.searchInput}
          ref={(input) => this.searchInput = input}
          onChange={this.handleChange}
          className="w3-animate-input"
        />
        <br />
        {this.props.searchInput}
      </div>
    );
  }
}
module.exports = SearchBar;