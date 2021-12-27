import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    const { onReset, counters, onIncrement, onDelete } = this.props;
    console.log("Counters - Rendered");

    return (
      <div>
        <button onClick={onReset} className="btn btn-sm btn-primary m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            onDelete={onDelete}
            onIncrement={onIncrement}
            key={counter.id}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
