import React, { useState } from "react";
import Requester from "./components/Requester";
import RoleSelection from "./components/RoleSelection";
import LinkContainer from "./components/LinkContainer";
import Logout from "./components/Logout";
import { ROLES } from "./constants";
import "./App.css";

function App() {
  const [role, setRole] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [linkData, setLinkData] = useState();

  const Status = () => (
    <div>User {role ? " role: " + role : "has not logged in"}.</div>
  );

  const logOut = () => {
    setIsLoggedIn(false);
    setLinkData(null);
    setRole(null);
  };

  const logIn = role => {
    setIsLoggedIn(true);
    setRole(role);
  };

  return (
    <div>
      <h1>Admin Portal</h1>
      <Status />
      {isLoggedIn ? (
        <div>
          <Logout logOut={logOut} />
          <Requester role={role} setLinkData={setLinkData} />
          {linkData && <LinkContainer role={role} linkData={linkData} />}
        </div>
      ) : (
        <RoleSelection roles={ROLES} logIn={logIn} />
      )}
    </div>
  );
}
export default App;
