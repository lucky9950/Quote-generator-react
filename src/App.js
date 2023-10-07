import "./App.css";
import { useEffect, useState } from "react";
import Main from "./components/Main";
import Button from "./components/Button";
import Dev from "./components/Dev";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const apiURL = "https://api.quotable.io/random";

  async function getQuote() {
    try {
      setLoading(true);
      const response = await axios.get(apiURL);
      console.log(response);
      setData(response.data);
      setLoading(false)
    } catch (error) {
      console.error(error);
      setLoading(true)
    }
  }
  
  useEffect(()=> {
    getQuote();
  },[])
  

  return (
    <div className="container">
      <Main data={data} loading={loading} />
      <Button loading={loading} getQuote={getQuote}/>
      <Dev />
    </div>
  );
}

export default App;
