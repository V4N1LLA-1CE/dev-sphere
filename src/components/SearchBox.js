import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <section className="py-2 text-center my-0 mx-auto">
      <input
        className="py-4 pl-5 rounded-3xl bg-slate-50 border-2 border-solid border-slate-300 w-72 pr-2"
        type="search"
        placeholder="Search for Developers"
        onChange={searchChange}
      />
    </section>
  );
};

export default SearchBox;
