import React from "react";

const EmptyListError = ({ devs, children }) => {
  if (devs.length === 0) {
    return (
      <h1 className="text-slate-300 font-semibold text-2xl text-center">
        Sorry, We couldn't find any results
      </h1>
    );
  } else {
    return children;
  }
};

export default EmptyListError;
