import React from "react";
import loader from '../assets/loader.svg'
import { useGlobalContext } from "../context/useContext";

const Button = () => {
    const {loading, getQuote} = useGlobalContext()
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
