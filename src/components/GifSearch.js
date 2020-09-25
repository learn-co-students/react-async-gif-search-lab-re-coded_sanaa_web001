import React from "react";

class GifSearch extends React.Component {
  state = {
    value: ""
  };

  getInputValue = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.querySearch(this.state.value);
    console.log(this.state.value);
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <div>
        <form onInput={this.getInputValue} onSubmit={this.handleOnSubmit}>
          <label>
            Enter a Search Term:
            <input type="text" value={this.state.value} />
          </label>
          <br />

          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default GifSearch;
