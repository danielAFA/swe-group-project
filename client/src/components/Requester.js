import React, { useEffect } from "react";
import useFetch from "../util/useFetch";
import { DEFAULT_ROLES } from "../constants";

const getLinks = (role, links) => {
  if (links)
    return links.filter(
      element => DEFAULT_ROLES.includes(element.title) || element.title === role
    );
};

const Requester = ({ setLinkData, role }) => {
  const url = `http://localhost:${3001}/`;
  const body = {
    role: role,
  };
  const [response, loading, hasError] = useFetch(url, body);

  useEffect(() => {
    setLinkData(getLinks(role, response));
    //setLinkData(getLinks(role));
  }, [setLinkData, role, response]);

  return (
    <div>
      {loading ? <div>Loading...</div> : hasError && <div>Error occurred.</div>}
    </div>
  );
};

export default Requester;
