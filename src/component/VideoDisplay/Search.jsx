import React from "react";

class Search extends React.Component {
  state = { title: "" };

  onSearchChanged = (event) => {
    const _title = event.target.value;

    console.log(_title);

    this.setState({ title: _title });
  };

  onSubmit = (event) => {
    event.preventDefault();

    console.log(this.state.title);

    this.props.onSearch(this.state.title);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div class="form-controls">
            <label>Search</label>
            <input
              onChange={this.onSearchChanged}
              value={this.state.title}
              id="video-search"
              type="text"
              placeholder="Enter"
            />
            <button type="submit">Enter</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;