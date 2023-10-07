import React from "react";
import loader from '../assets/loader.svg'

const Button = ({loading, getQuote}) => {
  return (
    <div>
      <button className="btn" onClick={getQuote}>
        {loading ? 
        <img src={loader} alt="" />
        : "Get a Quote"}
      </button>
    </div>
  );
};

export default Button;
