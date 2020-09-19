import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogTiles from "./HogTiles"

class App extends Component {
  state = {
    hogs: hogs,
    cleanHogs: false,
    sortBy: 'name',
    removedHogs: []
  }


  handleSort = (e) => {
    this.setState({ sortBy: e.target.value })
  }
  handleFilter = () => {
    this.setState({ cleanHogs: !this.state.cleanHogs })
  }
  handleClickToRemove = (hog) => {
    this.setState({ removedHogs: [...this.state.removedHogs, hog] })
  }

  hogsList = () => {
    return this.state.hogs.filter((hog) => this.state.removedHogs.indexOf(hog) === -1)
  }

  sortHogs = () => {
    if (this.state.sortBy === 'name') {
      return this.hogsList().sort(function (a, b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    } else if (this.state.sortBy === 'weight') {
      return this.hogsList().sort(function (a, b) { return b.weight - a.weight })
    }

  }
  filterGreasedHogs = () => {
    if (this.state.cleanHogs) {
      return this.sortHogs().filter(hog => hog.greased === false)
    }
    return this.sortHogs()
  }





  render() {
    return (
      <div className="App">
        <Nav
          cleanHogs={this.state.cleanHogs}
          handleFilter={this.handleFilter}
          sortBy={this.state.sortBy}
          handleSort={this.handleSort}
        />
        <HogTiles hogs={this.filterGreasedHogs()} handleClickToRemove={this.handleClickToRemove} />
      </div>
    );
  }
}

export default App;
