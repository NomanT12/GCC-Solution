import React from "react";

const Divider = (props) => {
  const {
    width = "1px",
    height = "1px",
    orientation = "horizontal",
    color = "#fff",
    sx,
  } = props;

  const dividerStyles = {
    width: width,
    height: height,
    backgroundColor: color,
    ...sx,
  };

  return <div style={dividerStyles}></div>;
};

export default Divider;
