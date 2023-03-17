import React from "react";
import "../css/loading.css";
import loading from "../img/loader-gif.gif";

function Loading() {
  return (
    <div className="loader_container">
      <img className="loader" src={loading} alt="Loading" />
    </div>
  );
}

export default Loading;
