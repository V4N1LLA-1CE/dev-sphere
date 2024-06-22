import React from "react";

const Card = ({ id, username, email }) => {
  return (
    <div className="shadow-xl text-center py-20 rounded-xl min-w-56 hover:scale-110 transition-all">
      <img src="/profile-icon.jpg" alt="pfp" className="w-16 m-auto py-4" />
      <div>
        <h2>{username}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
