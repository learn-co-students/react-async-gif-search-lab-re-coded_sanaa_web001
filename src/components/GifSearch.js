import React, { Component } from "react";

export default class GifSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.value);
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
