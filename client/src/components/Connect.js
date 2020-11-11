import React from "react";
import { useFetch } from "./../util/useFetch";

function Connect() {
  const url = `http://localhost:${3001}/`;
  const [response, loading, hasError] = useFetch(url);

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
