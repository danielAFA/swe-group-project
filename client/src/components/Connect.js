import React, { useEffect } from "react";
import useFetch from "./../util/useFetch";

function Connect({ setLinkData }) {
  const url = `http://localhost:${3001}/`;
  const [response, loading, hasError] = useFetch(url);

  useEffect(() => {
    //setLinkData(response);
    setLinkData([
      { title: "Google", url: "https://google.com" },
      { title: "Yahoo", url: "https://yahoo.com" },
    ]);
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

export default Connect;
