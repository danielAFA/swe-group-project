import React, { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Content-Type"] = "application/json";

const port = 3001;
const url = `http://localhost:${port}/`;

function Connect() {
  const [response, setResponse] = useState();

  const basicRequest = async () => {
    const { data } = await axios.get(url);
    setResponse(data);
    console.log(response);
  };

  useEffect(() => {
    basicRequest();
  });

  return <div>Server response: {response}</div>;
}

export default Connect;
