import React from "react";

const InteractiveDiv = props => (
  <div className="interactive-div" onClick={props.click} />
);

export default InteractiveDiv;
