import React, { Component } from "react";

class Counter extends Component {
  State = {
    value: this.props.counter.value,
    countStyle: "m-2 badge badge-",
  };

  handleIncrement = (product) => {
    this.setState({ value: (this.State.value += 1) });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className={this.formatStyle()}>{this.State.value}</span>
        <button
          onClick={() => {
            this.handleIncrement(1);
          }}
          className="btn btn-primary m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatStyle() {
    const { value: count } = this.State;
    const { countStyle } = this.State;
    return count === 0 ? countStyle + "warning" : countStyle + "primary";
  }
}

export default Counter;
