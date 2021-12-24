import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-sm btn-primary m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            onDelete={this.handleDelete}
            key={counter.id}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }

  handleReset = () => {
    console.log("handleReset Called");
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Event Handle Called", counterId);
    const counters = this.state.counters.filter((c) => c.id != counterId);
    this.setState({ counters });
  };
}

export default Counters;
