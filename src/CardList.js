import React from "react";

const CardList = () => {
  return (
    <div className="flex justify-center gap-6">
      <Card id={devs[0].id} username={devs[0].username} email={devs[0].email} />
      <Card id={devs[1].id} username={devs[1].username} email={devs[1].email} />
      <Card id={devs[2].id} username={devs[2].username} email={devs[2].email} />
    </div>
  );
};

export default CardList;
