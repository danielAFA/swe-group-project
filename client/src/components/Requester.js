import React, { useEffect } from "react";
import useFetch from "../util/useFetch";

const mockData = [
  { display_name: "Google", url: "https://google.com" },
  { display_name: "Yahoo", url: "https://yahoo.com" },
];

function Requester({ setLinkData }) {
  const url = `http://localhost:${3001}/`;
  const [response, loading, hasError] = useFetch(url);

  useEffect(() => {
    //setLinkData(response);
    setLinkData(mockData);
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : hasError ? (
        <div>Error occurred.</div>
      ) : (
        <div> Server response: {response}</div>
      )}
    </div>
  );
}

export default Requester;
