import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "700px",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        alignItems: "flex-start"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
