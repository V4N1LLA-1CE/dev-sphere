import React, { Component } from "react";
import CardList from "./CardList";
import { devs } from "./dev-info";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      devs: devs,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredDevs = this.state.devs.filter((dev) => {
      return (dev.username + dev.email)
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div>
        <header className="text-center">
          <h1 className="font-Tiny5 text-7xl py-10 text-slate-500">
            Dev Sphere
          </h1>
        </header>

        <main>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList devs={filteredDevs} />
          </Scroll>
        </main>
      </div>
    );
  }
}

export default App;
