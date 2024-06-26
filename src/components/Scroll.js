import React from "react";

const Scroll = (props) => {
  return (
    <div className="overflow-y-scroll border border-slate-300 h-[45rem] m-10">
      {props.children}
    </div>
  );
};

export default Scroll;
