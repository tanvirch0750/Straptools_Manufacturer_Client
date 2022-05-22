import React from "react";
import "../styles/Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-inner">
        <div className="yellow"></div>
        <div className="red"></div>
        <div className="blue"></div>
        <div className="violet"></div>
      </div>
    </div>
  );
};

export default Loading;
