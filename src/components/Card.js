import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 bw2 shadow-5 dib">
      <img alt="robots" src={`https://robohash.org/bgset_bg1/${id}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
