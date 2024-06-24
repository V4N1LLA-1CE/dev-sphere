import React from "react";
import CardList from "./CardList";
import { devs } from "./dev-info";
import SearchBox from "./SearchBox";

const App = () => {
  return (
    <>
      <header className="text-center">
        <h1 className="font-Tiny5 text-7xl py-10 text-slate-400">Dev Sphere</h1>
      </header>

      <main>
        <SearchBox />
        <CardList devs={devs} />
      </main>
    </>
  );
};

export default App;
