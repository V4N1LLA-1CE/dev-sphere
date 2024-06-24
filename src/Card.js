import React from "react";

const Card = ({ id, username, email }) => {
  return (
    <div className="shadow-lg shadow-slate-300 text-center text-slate-500 py-20 rounded-xl min-w-56 hover:scale-110 transition-all">
      <div className="rounded-full w-20 h-20 border border-dashed border-slate-500 overflow-hidden m-auto">
        <img src="/profile-icon.jpg" alt="pfp" className="object-contain p-2" />
      </div>
      <div className="pt-5">
        <h2>{username}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
