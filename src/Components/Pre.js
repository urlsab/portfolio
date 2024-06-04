import React from "react";
const Pre = (props) => {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;