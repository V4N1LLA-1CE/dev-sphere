import React from "react";
import sad from "../images/sad-face.png";

const EmptyListError = ({ devs, children }) => {
  if (devs.length === 0) {
    return (
      <>
        <img
          src={sad}
          alt="sad-face"
          className="object-scale-down m-auto w-64 pt-[10rem]"
        />
        <h1 className="text-red-500 font-semibold text-2xl text-center opacity-50 m-auto pt-5">
          Sorry, we couldn't find any results{" "}
          <span className="inline-block">:(</span>
        </h1>
      </>
    );
  } else {
    return children;
  }
};

export default EmptyListError;
