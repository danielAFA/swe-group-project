import React, { useState } from "react";
import Connect from "./components/Connect";
import RoleSelection from "./components/RoleSelection";
import LinkContainer from "./components/LinkContainer";
import Logout from "./components/Logout";
import "./App.css";

function App() {
  const [role, setRole] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [linkData, setLinkData] = useState();

  const Status = () => (
    <div>User {role ? " role: " + role : "has not logged in"}.</div>
  );

  return (
    <div>
      <h1>Admin Portal</h1>
      {!loggedIn ? (
        <RoleSelection setRole={setRole} setLoggedIn={setLoggedIn} />
      ) : (
        <div>
          <Logout
            setLoggedIn={setLoggedIn}
            setLinkData={setLinkData}
            setRole={setRole}
          />
          <Connect role={role} setLinkData={setLinkData} />
        </div>
      )}
      <Status />
      {linkData && role && <LinkContainer role={role} linkData={linkData} />}
    </div>
  );
}
export default App;
