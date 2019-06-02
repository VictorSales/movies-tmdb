import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment container search-bar">
        <form onSubmit={this.onFormSubmit}>
          <div className="ui search">
            <div className="ui icon input field">
              <input
                id="input-movie"
                className="prompt"
                type="text"
                value={this.state.term}
                placeholder="Movie..."
                onChange={event => {
                  this.setState({ term: event.target.value });
                }}
              />
              <i className="search icon" />
            </div>
            <div className="results" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
