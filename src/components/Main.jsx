import React from "react";
import { FaQuoteLeft } from 'react-icons/fa'
import { FaQuoteRight } from 'react-icons/fa'
import { useGlobalContext } from "../context/useContext";

const Main = () => {
    const { data, loading } = useGlobalContext()
    const { author, content } = data
  return (
    <div>
      <h1 className="heading">Random Quote Generator</h1> 
      <h2 className="quote">
        <FaQuoteLeft />
        <span id="quote">{loading ? "Updating..." : content}</span>  
        <FaQuoteRight />
      </h2>

      <p className="author" id="author">
        ~ {loading ? "Updating author" : author}
      </p>
    </div>
  );
};

export default Main;
