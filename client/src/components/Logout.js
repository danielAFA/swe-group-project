import React from "react";

const Logout = ({ setLoggedIn, setLinkData, setRole }) => {
  const handleLogoutClick = () => {
    setLoggedIn(false);
    setLinkData(null);
    setRole(null);
  };
  return <button onClick={handleLogoutClick}>Log out</button>;
};

export default Logout;
