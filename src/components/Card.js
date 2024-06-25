import React from "react";

const Card = ({ id, username, email }) => {
  return (
    <div className="shadow-lg shadow-slate-300 text-center text-slate-500 py-20 rounded-xl w-72 hover:scale-105 transition-all">
      <div className="rounded-full w-20 h-20 border border-dashed border-slate-500 overflow-hidden m-auto">
        <img
          src="../images/profile-icon.jpg"
          alt="pfp"
          className="object-contain p-2"
        />
      </div>
      <div className="overflow-x-clip p-5 text-xs">
        <h2>{username}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
