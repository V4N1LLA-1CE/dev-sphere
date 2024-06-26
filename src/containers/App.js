import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import { devsInfo } from "../dev-info";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import EmptyListError from "../components/EmptyListError";

function App() {
  const [devs, setDevs] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    setDevs(devsInfo);
    console.log("hi");
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredDevs = devs.filter((dev) => {
    return (dev.username + dev.email)
      .toLowerCase()
      .includes(searchfield.toLowerCase());
  });

  return (
    <div>
      <header className="text-center">
        <h1 className="font-Tiny5 text-7xl py-10 text-slate-500">Dev Sphere</h1>
      </header>

      <main>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <EmptyListError devs={filteredDevs}>
            <CardList devs={filteredDevs} />
          </EmptyListError>
        </Scroll>
      </main>
    </div>
  );
}

export default App;
