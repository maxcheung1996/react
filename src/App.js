import logo from "./logo.svg";
import NavBar from "./components/navbar";
import "./App.css";
import Counter from "./components/counter";
import Counters from "./components/counters";
import React, { Component } from "react";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0, countStyle: "m-2 badge badge-" },
      { id: 2, value: 0, countStyle: "m-2 badge badge-" },
      { id: 3, value: 0, countStyle: "m-2 badge badge-" },
      { id: 4, value: 0, countStyle: "m-2 badge badge-" },
    ],
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor", this.props);
  }

  componentDidMount() {
    //Ajax call to Server here
    console.log("App - Mounted");
  }

  handleIncrement = (counter) => {
    // const counters = [...this.state.counters];
    // counters[counter.id - 1].value++;
    const counters = this.state.counters.map((c) => {
      if (c.id === counter.id) c.value += 1;
      return c;
    });
    this.setState({ counters });
  };

  handleReset = () => {
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
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
